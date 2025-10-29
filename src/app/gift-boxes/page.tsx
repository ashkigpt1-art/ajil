import GiftLeadForm from '@/components/GiftLeadForm';

export const metadata = {
  title: 'پک‌های هدیه آجیل لاکچری',
  description: 'درخواست پک هدیه سازمانی آجیل تازه با امکان شخصی‌سازی بسته‌بندی و چاپ لوگو.'
};

export default function GiftBoxesPage() {
  return (
    <div className="section-container space-y-8 pb-20">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-cocoa-800">پک‌های هدیه سازمانی</h1>
        <p className="text-sm text-cocoa-600">
          پک‌های یلدایی، نوروزی و سازمانی را با آجیل ممتاز و بسته‌بندی لوکس تهیه می‌کنیم. امکان حک لوگو، چاپ کارت و ارسال به
          آدرس‌های متعدد وجود دارد. حداقل تعداد سفارش ۲۰ عدد است.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="card space-y-3 text-sm">
            <h2 className="text-xl font-semibold text-cocoa-800">ویژگی پک‌ها</h2>
            <ul className="list-disc space-y-2 pr-5">
              <li>آجیل ممتاز تازه تفت‌شده در بسته‌بندی وکیوم</li>
              <li>انتخاب بین جعبه چوبی، مقوایی لاکچری یا بسته‌بندی سفارشی</li>
              <li>امکان اضافه کردن خشکبار و شکلات پریمیوم</li>
              <li>چاپ لوگو و کارت تبریک اختصاصی</li>
            </ul>
          </div>
          <div className="card space-y-3 text-sm">
            <h2 className="text-xl font-semibold text-cocoa-800">تصاویر نمونه</h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="h-32 rounded-3xl bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1489515217757-5fd1be406fef')" }} />
              <div className="h-32 rounded-3xl bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1578894381163-e72c17f2d45d')" }} />
              <div className="h-32 rounded-3xl bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1470337458703-46ad1756a187')" }} />
              <div className="h-32 rounded-3xl bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1481833761820-0509d3217039')" }} />
            </div>
          </div>
        </div>
        <GiftLeadForm />
      </div>
    </div>
  );
}
