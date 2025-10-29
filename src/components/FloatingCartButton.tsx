'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';

export default function FloatingCartButton() {
  const { getItemsCount } = useCart();
  const pathname = usePathname();
  const count = getItemsCount();
  const isCheckout = pathname === '/checkout';

  if (count === 0 && isCheckout) {
    return null;
  }

  return (
    <div className="fixed bottom-5 left-4 right-4 z-40 md:hidden">
      <Link
        href="/checkout"
        className="flex items-center justify-center gap-2 rounded-full bg-amber-500 py-4 text-base font-semibold text-cocoa-800 shadow-lg"
      >
        <span>سبد خرید</span>
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm font-bold text-cocoa-700">
          {count}
        </span>
      </Link>
    </div>
  );
}
