'use client';

import { FormEvent, useState } from 'react';

export default function GiftLeadForm() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    quantity: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'loading'>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      });
      if (!response.ok) {
        throw new Error('failed');
      }
      setStatus('success');
      setFormState({ name: '', phone: '', quantity: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card space-y-4 text-sm">
      <h3 className="text-lg font-semibold text-cocoa-800">فرم درخواست قیمت</h3>
      <label className="flex flex-col gap-1">
        <span className="text-xs text-cocoa-500">نام و نام شرکت</span>
        <input
          required
          value={formState.name}
          onChange={(event) => setFormState((prev) => ({ ...prev, name: event.target.value }))}
          className="rounded-full border border-sand-200 px-4 py-2 text-cocoa-700 focus:border-amber-500 focus:outline-none"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-xs text-cocoa-500">شماره تماس</span>
        <input
          required
          value={formState.phone}
          onChange={(event) => setFormState((prev) => ({ ...prev, phone: event.target.value }))}
          className="rounded-full border border-sand-200 px-4 py-2 text-cocoa-700 focus:border-amber-500 focus:outline-none"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-xs text-cocoa-500">تعداد مورد نیاز (حداقل ۲۰)</span>
        <input
          required
          value={formState.quantity}
          onChange={(event) => setFormState((prev) => ({ ...prev, quantity: event.target.value }))}
          className="rounded-full border border-sand-200 px-4 py-2 text-cocoa-700 focus:border-amber-500 focus:outline-none"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-xs text-cocoa-500">توضیحات</span>
        <textarea
          value={formState.message}
          onChange={(event) => setFormState((prev) => ({ ...prev, message: event.target.value }))}
          rows={3}
          className="rounded-3xl border border-sand-200 px-4 py-3 text-cocoa-700 focus:border-amber-500 focus:outline-none"
          placeholder="نوع پک، بودجه و زمان تحویل"
        />
      </label>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-full bg-amber-500 py-3 text-sm font-semibold text-cocoa-800 shadow-warm"
      >
        {status === 'loading' ? 'در حال ارسال...' : 'ارسال درخواست'}
      </button>
      {status === 'success' && <p className="text-xs text-green-600">درخواست شما ثبت شد. به زودی تماس می‌گیریم.</p>}
      {status === 'error' && <p className="text-xs text-red-600">خطا در ارسال فرم. لطفاً مجدد تلاش کنید.</p>}
    </form>
  );
}
