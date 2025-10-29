'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { STORE_INFO } from '@/config/storeInfo';
import { useCart } from '@/context/CartContext';
import type { CheckoutFormData } from '@/types';

export default function CheckoutForm() {
  const router = useRouter();
  const { items, getCartTotal, clearCart } = useCart();
  const [formState, setFormState] = useState<CheckoutFormData>({
    fullName: '',
    phoneNumber: '',
    city: STORE_INFO.CITY_NAME,
    address: '',
    shippingMethod: 'pike-tehran',
    paymentMethod: 'cod'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (items.length === 0) {
      setError('سبد خرید خالی است.');
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          customer: formState,
          cart: items,
          totalAmount: getCartTotal(),
          shippingMethod: formState.shippingMethod,
          paymentMethod: formState.paymentMethod
        })
      });

      if (!response.ok) {
        throw new Error('در ثبت سفارش مشکلی پیش آمده است.');
      }

      const data = (await response.json()) as { status: string; orderId: string };
      clearCart();
      router.push(`/thank-you?orderId=${data.orderId}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'خطای ناشناخته رخ داده است.');
    } finally {
      setLoading(false);
    }
  };

  const updateField = <K extends keyof CheckoutFormData>(key: K, value: CheckoutFormData[K]) => {
    setFormState((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="card space-y-4 text-sm">
      <h2 className="text-lg font-semibold text-cocoa-800">اطلاعات ارسال</h2>
      <div className="grid grid-cols-1 gap-4">
        <label className="flex flex-col gap-1">
          <span className="text-xs text-cocoa-500">نام و نام خانوادگی</span>
          <input
            required
            value={formState.fullName}
            onChange={(event) => updateField('fullName', event.target.value)}
            className="rounded-full border border-sand-200 px-4 py-2 text-cocoa-700 focus:border-amber-500 focus:outline-none"
            placeholder="مثلاً سارا رضایی"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-xs text-cocoa-500">شماره تماس</span>
          <input
            required
            value={formState.phoneNumber}
            onChange={(event) => updateField('phoneNumber', event.target.value)}
            className="rounded-full border border-sand-200 px-4 py-2 text-cocoa-700 focus:border-amber-500 focus:outline-none"
            placeholder="0912..."
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-xs text-cocoa-500">شهر / محدوده</span>
          <input
            required
            value={formState.city}
            onChange={(event) => updateField('city', event.target.value)}
            className="rounded-full border border-sand-200 px-4 py-2 text-cocoa-700 focus:border-amber-500 focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-xs text-cocoa-500">آدرس تحویل</span>
          <textarea
            required
            value={formState.address}
            onChange={(event) => updateField('address', event.target.value)}
            className="rounded-3xl border border-sand-200 px-4 py-3 text-cocoa-700 focus:border-amber-500 focus:outline-none"
            rows={3}
            placeholder="آدرس کامل خود را وارد کنید"
          />
        </label>
      </div>

      <div className="space-y-3">
        <p className="text-xs font-semibold text-cocoa-500">روش ارسال</p>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 rounded-3xl border border-sand-200 px-4 py-2">
            <input
              type="radio"
              name="shippingMethod"
              value="pike-tehran"
              checked={formState.shippingMethod === 'pike-tehran'}
              onChange={(event) => updateField('shippingMethod', event.target.value as CheckoutFormData['shippingMethod'])}
            />
            <span className="text-sm">پیک تهران (تحویل همان روز)</span>
          </label>
          <label className="flex items-center gap-2 rounded-3xl border border-sand-200 px-4 py-2">
            <input
              type="radio"
              name="shippingMethod"
              value="post-other"
              checked={formState.shippingMethod === 'post-other'}
              onChange={(event) => updateField('shippingMethod', event.target.value as CheckoutFormData['shippingMethod'])}
            />
            <span className="text-sm">پست شهرستان (بسته‌بندی وکیوم)</span>
          </label>
          <label className="flex items-center gap-2 rounded-3xl border border-sand-200 px-4 py-2">
            <input
              type="radio"
              name="shippingMethod"
              value="pickup"
              checked={formState.shippingMethod === 'pickup'}
              onChange={(event) => updateField('shippingMethod', event.target.value as CheckoutFormData['shippingMethod'])}
            />
            <span className="text-sm">تحویل حضوری از فروشگاه</span>
          </label>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-xs font-semibold text-cocoa-500">روش پرداخت</p>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 rounded-3xl border border-sand-200 px-4 py-2">
            <input
              type="radio"
              name="paymentMethod"
              value="cod"
              checked={formState.paymentMethod === 'cod'}
              onChange={(event) => updateField('paymentMethod', event.target.value as CheckoutFormData['paymentMethod'])}
            />
            <span className="text-sm">پرداخت در محل / کارت‌به‌کارت</span>
          </label>
          <label className="flex items-center gap-2 rounded-3xl border border-sand-200 px-4 py-2">
            <input
              type="radio"
              name="paymentMethod"
              value="online"
              checked={formState.paymentMethod === 'online'}
              onChange={(event) => updateField('paymentMethod', event.target.value as CheckoutFormData['paymentMethod'])}
            />
            <span className="text-sm">پرداخت آنلاین (به‌زودی)</span>
          </label>
        </div>
      </div>

      {error && <p className="text-xs text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-cocoa-700 py-3 text-base font-semibold text-white shadow-warm disabled:opacity-60"
      >
        {loading ? 'در حال ثبت سفارش...' : `ثبت سفارش (${getCartTotal().toLocaleString('fa-IR')} تومان)`}
      </button>
    </form>
  );
}
