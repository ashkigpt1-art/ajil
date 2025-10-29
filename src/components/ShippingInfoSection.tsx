import { STORE_INFO } from '@/config/storeInfo';

export default function ShippingInfoSection() {
  return (
    <section className="section-container">
      <div className="card flex flex-col gap-4">
        <h2 className="text-xl font-bold text-cocoa-800">ارسال و نحوه تحویل</h2>
        <ul className="space-y-3 text-sm text-cocoa-600">
          <li>تهران: ارسال با پیک در همان روز تا ساعت ۱۸</li>
          <li>شهرستان: ارسال در بسته‌بندی وکیوم با پست</li>
          <li>امکان تحویل حضوری در فروشگاه موجود است</li>
        </ul>
        <div className="rounded-3xl bg-sand-100 p-4 text-xs text-cocoa-700">
          <p>
            <span className="font-semibold">آدرس فروشگاه:</span> {STORE_INFO.SHOP_ADDRESS}
          </p>
          <p>
            <span className="font-semibold">شماره تماس:</span> {STORE_INFO.PHONE_NUMBER}
          </p>
        </div>
      </div>
    </section>
  );
}
