'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();
  const [selectedWeight, setSelectedWeight] = useState(product.pricesByWeight[0]?.weightGrams ?? 0);

  const selectedOption = product.pricesByWeight.find((option) => option.weightGrams === selectedWeight);

  const handleAdd = () => {
    if (!selectedWeight) return;
    addToCart(product.id, selectedWeight);
  };

  return (
    <div className="card flex flex-col gap-4">
      <div className="relative h-44 w-full overflow-hidden rounded-3xl">
        <Image src={product.imageUrl} alt={product.name} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-cocoa-800">{product.name}</h3>
        <p className="text-sm text-cocoa-600">{product.description}</p>
      </div>
      <div className="flex flex-col gap-3 text-sm">
        <label className="flex flex-col gap-1">
          <span className="text-xs text-cocoa-500">انتخاب وزن</span>
          <select
            value={selectedWeight}
            onChange={(event) => setSelectedWeight(Number(event.target.value))}
            className="rounded-full border border-sand-200 bg-sand-50 px-4 py-2 text-cocoa-700 focus:border-amber-500 focus:outline-none"
          >
            {product.pricesByWeight.map((option) => (
              <option key={option.weightGrams} value={option.weightGrams}>
                {option.weightGrams} گرم
              </option>
            ))}
          </select>
        </label>
        <div className="text-base font-semibold text-cocoa-700">
          قیمت: {selectedOption ? selectedOption.priceToman.toLocaleString('fa-IR') : '-'} تومان
        </div>
      </div>
      <button
        onClick={handleAdd}
        className="mt-auto rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-cocoa-800 shadow-warm hover:bg-amber-500/90"
      >
        اضافه به سبد
      </button>
    </div>
  );
}
