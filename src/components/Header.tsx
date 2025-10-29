'use client';

import Link from 'next/link';
import { STORE_INFO } from '@/config/storeInfo';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const { getItemsCount } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-sand-50/95 backdrop-blur border-b border-sand-100">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold text-cocoa-700">
          {STORE_INFO.BRAND_NAME}
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <span className="hidden text-cocoa-600 sm:inline-flex">
            {STORE_INFO.DELIVERY_POLICY_TEXT}
          </span>
          <Link
            href="/checkout"
            className="flex items-center rounded-full bg-cocoa-700 px-4 py-2 text-white shadow-warm"
          >
            <span className="ml-2">سبد خرید</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-cocoa-800">
              {getItemsCount()}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
