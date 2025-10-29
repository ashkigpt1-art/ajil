import Link from 'next/link';
import { STORE_INFO } from '@/config/storeInfo';

export default function Footer() {
  return (
    <footer className="bg-cocoa-700 text-white">
      <div className="section-container flex flex-col gap-6 text-sm">
        <div className="flex flex-col gap-2">
          <span className="text-lg font-semibold">{STORE_INFO.BRAND_NAME}</span>
          <p className="text-sand-100">{STORE_INFO.DELIVERY_POLICY_TEXT}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <p>
              <span className="font-medium">تلفن سفارش:</span> {STORE_INFO.PHONE_NUMBER}
            </p>
            <p>
              <span className="font-medium">آدرس فروشگاه:</span> {STORE_INFO.SHOP_ADDRESS}
            </p>
            <p>
              <span className="font-medium">شهر:</span> {STORE_INFO.CITY_NAME}
            </p>
          </div>
          <div className="space-y-2">
            <Link
              href={`https://wa.me/${STORE_INFO.WHATSAPP_NUMBER}`}
              className="block rounded-full bg-amber-500 px-4 py-2 text-center font-semibold text-cocoa-800"
            >
              گفت‌وگو در واتساپ
            </Link>
            <Link
              href={`https://instagram.com/${STORE_INFO.INSTAGRAM_HANDLE}`}
              className="block rounded-full border border-sand-200 px-4 py-2 text-center"
            >
              اینستاگرام ما
            </Link>
          </div>
        </div>
        <p className="text-xs text-sand-200">
          © {new Date().getFullYear()} {STORE_INFO.BRAND_NAME} - تمامی حقوق محفوظ است.
        </p>
      </div>
    </footer>
  );
}
