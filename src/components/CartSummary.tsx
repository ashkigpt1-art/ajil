'use client';

import { useCart } from '@/context/CartContext';

export default function CartSummary() {
  const { items, updateQuantity, removeItem, getCartTotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="card text-center text-sm text-cocoa-600">
        سبد خرید شما خالی است. لطفاً از صفحه محصولات انتخاب کنید.
      </div>
    );
  }

  return (
    <div className="card space-y-4 text-sm">
      <h2 className="text-lg font-semibold text-cocoa-800">سبد خرید</h2>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={`${item.productId}-${item.weightGrams}`} className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-cocoa-700">{item.productName}</p>
                <p className="text-xs text-cocoa-500">وزن {item.weightGrams} گرم</p>
              </div>
              <button
                onClick={() => removeItem(item.productId, item.weightGrams)}
                className="text-xs text-amber-500"
              >
                حذف
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.productId, item.weightGrams, item.quantity - 1)}
                  className="h-8 w-8 rounded-full bg-sand-100 text-lg"
                >
                  -
                </button>
                <span className="w-8 text-center font-semibold">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.productId, item.weightGrams, item.quantity + 1)}
                  className="h-8 w-8 rounded-full bg-sand-100 text-lg"
                >
                  +
                </button>
              </div>
              <div className="text-sm font-semibold text-cocoa-700">
                {(item.unitPriceToman * item.quantity).toLocaleString('fa-IR')} تومان
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-sand-100 pt-4 text-base font-bold text-cocoa-800">
        <span>جمع کل</span>
        <span>{getCartTotal().toLocaleString('fa-IR')} تومان</span>
      </div>
    </div>
  );
}
