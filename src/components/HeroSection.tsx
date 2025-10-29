import Image from 'next/image';
import Link from 'next/link';
import { STORE_INFO } from '@/config/storeInfo';

export default function HeroSection() {
  return (
    <section className="section-container flex flex-col gap-8 pb-0">
      <div className="space-y-4 text-center">
        <span className="inline-flex items-center justify-center rounded-full bg-sand-100 px-4 py-1 text-xs font-semibold text-cocoa-700">
          {STORE_INFO.DELIVERY_POLICY_TEXT}
        </span>
        <h1 className="text-3xl font-extrabold leading-tight text-cocoa-800 sm:text-4xl">
          آجیل تازه، تفت‌شده‌ی امروز – ارسال فوری در تهران
        </h1>
        <p className="mx-auto max-w-xl text-base text-cocoa-600">
          پسته اکبری درشت، مخلوط مجلسی لوکس، بسته‌بندی وکیوم، ضمانت تازگی
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="#best-sellers"
            className="w-full rounded-full bg-cocoa-700 px-6 py-3 text-center font-semibold text-white shadow-warm sm:w-auto"
          >
            مشاهده محصولات
          </Link>
          <Link
            href="/checkout"
            className="w-full rounded-full border border-cocoa-200 px-6 py-3 text-center font-semibold text-cocoa-700 sm:w-auto"
          >
            سبد خرید
          </Link>
        </div>
        <div className="text-sm text-cocoa-600">
          برای ثبت سفارش تلفنی: <strong>{STORE_INFO.PHONE_NUMBER}</strong>
        </div>
      </div>
      <div className="relative h-64 overflow-hidden rounded-4xl shadow-warm">
        <Image
          src="https://images.unsplash.com/photo-1514996937319-344454492b37"
          alt="آجیل لوکس در بسته‌بندی تمیز"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
