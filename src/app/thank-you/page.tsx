import Link from 'next/link';
import { STORE_INFO } from '@/config/storeInfo';

export const metadata = {
  title: 'سفارش شما ثبت شد',
  description: 'تایید سفارش آجیل تازه و لوکس با امکان پیگیری از طریق واتساپ.'
};

type ThankYouPageProps = {
  searchParams: {
    orderId?: string;
  };
};

export default function ThankYouPage({ searchParams }: ThankYouPageProps) {
  const orderId = searchParams.orderId ?? '---';
  const whatsappLink = `https://wa.me/${STORE_INFO.WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `سلام، سفارش من با شماره ${orderId} ثبت شده.`
  )}`;

  return (
    <div className="section-container flex flex-col items-center gap-6 pb-24 text-center">
      <h1 className="text-3xl font-bold text-cocoa-800">سفارشت ثبت شد 🙌</h1>
      <p className="text-sm text-cocoa-600">
        شماره سفارش شما: <span className="font-semibold text-cocoa-800">{orderId}</span>
      </p>
      <p className="max-w-md text-sm text-cocoa-600">
        در صورت نیاز به تغییر آدرس یا سوال فوری از طریق واتساپ پیام دهید. تیم پشتیبانی ما در سریع‌ترین زمان پاسخ‌گو است.
      </p>
      <Link
        href={whatsappLink}
        className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-cocoa-800 shadow-warm"
      >
        پیام به پشتیبانی در واتساپ
      </Link>
      <Link href="/" className="text-xs text-cocoa-500">
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}
