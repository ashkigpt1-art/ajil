import type { CartItem, CheckoutFormData } from '@/types';

type OrderRecord = {
  orderId: string;
  customer: CheckoutFormData;
  cart: CartItem[];
  totalAmount: number;
  shippingMethod: CheckoutFormData['shippingMethod'];
  paymentMethod: CheckoutFormData['paymentMethod'];
  createdAt: string;
};

type LeadRecord = {
  id: string;
  name: string;
  phone: string;
  quantity: string;
  message: string;
  createdAt: string;
};

type MockDb = {
  orders: OrderRecord[];
  leads: LeadRecord[];
};

const globalForDb = globalThis as unknown as { mockDb?: MockDb };

if (!globalForDb.mockDb) {
  globalForDb.mockDb = {
    orders: [],
    leads: []
  };
}

export const mockDb = globalForDb.mockDb;

export function generateId(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 8)}-${Date.now().toString(36)}`;
}
