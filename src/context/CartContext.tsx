'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { CartItem, Product } from '@/types';
import { products } from '@/data/products';

const STORAGE_KEY = 'ajil-cart-items';

type CartContextValue = {
  items: CartItem[];
  addToCart: (productId: string, weightGrams: number) => void;
  updateQuantity: (productId: string, weightGrams: number, newQty: number) => void;
  removeItem: (productId: string, weightGrams: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getItemsCount: () => number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

const productMap = new Map<string, Product>(products.map((product) => [product.id, product]));

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as CartItem[];
        setItems(parsed);
      } catch (error) {
        console.error('Failed to parse stored cart', error);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addToCart = (productId: string, weightGrams: number) => {
    const product = productMap.get(productId);
    if (!product) return;
    const weightOption = product.pricesByWeight.find((option) => option.weightGrams === weightGrams);
    if (!weightOption) return;

    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.productId === productId && item.weightGrams === weightGrams
      );
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1
        };
        return updated;
      }
      return [
        ...prev,
        {
          productId,
          productName: product.name,
          weightGrams,
          unitPriceToman: weightOption.priceToman,
          quantity: 1,
          imageUrl: product.imageUrl
        }
      ];
    });
  };

  const updateQuantity = (productId: string, weightGrams: number, newQty: number) => {
    if (newQty <= 0) {
      removeItem(productId, weightGrams);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.productId === productId && item.weightGrams === weightGrams
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  const removeItem = (productId: string, weightGrams: number) => {
    setItems((prev) =>
      prev.filter(
        (item) => !(item.productId === productId && item.weightGrams === weightGrams)
      )
    );
  };

  const clearCart = () => setItems([]);

  const getCartTotal = () =>
    items.reduce((sum, item) => sum + item.unitPriceToman * item.quantity, 0);

  const getItemsCount = () => items.reduce((sum, item) => sum + item.quantity, 0);

  const value = useMemo<CartContextValue>(
    () => ({ items, addToCart, updateQuantity, removeItem, clearCart, getCartTotal, getItemsCount }),
    [items]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
