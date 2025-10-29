import Link from 'next/link';

const giftBoxes = [
  {
    title: 'پک هدیه شرکتی کلاسیک',
    description: 'جعبه مقوایی مستحکم با ربان برند شما + کارت تبریک اختصاصی.',
    highlight: 'حداقل سفارش ۲۰ عدد',
    image: 'https://images.unsplash.com/photo-1544213456-b3f0fa1ff50d'
  },
  {
    title: 'باکس لاکچری یلدایی',
    description: 'بسته چوبی همراه با آجیل مخصوص، انجیر، کشمش و جعبه خاتم.',
    highlight: 'امکان چاپ لوگو روی کارت',
    image: 'https://images.unsplash.com/photo-1600180758890-6d0873d9a2de'
  }
];

export default function GiftBoxesSection() {
  return (
    <section className="section-container">
      <div className="mb-6 flex flex-col gap-3">
        <h2 className="text-2xl font-bold text-cocoa-800">پک‌های هدیه سازمانی</h2>
        <p className="text-sm text-cocoa-600">
          برای مناسبت‌های یلدا، نوروز و هدیه سازمانی، پک‌های ویژه با امکان شخصی‌سازی برند ارائه می‌کنیم.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {giftBoxes.map((box) => (
          <div
            key={box.title}
            className="flex flex-col gap-3 rounded-4xl bg-cocoa-800 p-6 text-sand-50 shadow-warm"
          >
            <div
              className="h-40 w-full rounded-3xl bg-cover bg-center"
              style={{ backgroundImage: `url(${box.image})` }}
            />
            <h3 className="text-lg font-semibold">{box.title}</h3>
            <p className="text-sm text-sand-100">{box.description}</p>
            <span className="text-xs font-semibold text-amber-500">{box.highlight}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-3 rounded-4xl border border-amber-500 p-5 text-sm">
        <p>
          برای استعلام قیمت و دریافت کاتالوگ کامل روی لینک زیر کلیک کنید یا با ما در واتساپ گفتگو کنید.
        </p>
        <Link
          href="/gift-boxes"
          className="w-full rounded-full bg-amber-500 px-5 py-3 text-center font-semibold text-cocoa-800 shadow-warm"
        >
          استعلام قیمت پک هدیه
        </Link>
      </div>
    </section>
  );
}
