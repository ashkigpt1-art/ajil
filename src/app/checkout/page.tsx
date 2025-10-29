import CartSummary from '@/components/CartSummary';
import CheckoutForm from '@/components/CheckoutForm';

export const metadata = {
  title: 'ثبت سفارش آجیل تازه | تکمیل خرید',
  description: 'خلاصه سبد خرید و ثبت اطلاعات ارسال برای سفارش آجیل تازه و تفت‌شده.'
};

export default function CheckoutPage() {
  return (
    <div className="section-container flex flex-col gap-6 pb-20">
      <h1 className="text-2xl font-bold text-cocoa-800">ثبت سفارش</h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <CheckoutForm />
        <CartSummary />
      </div>
    </div>
  );
}
