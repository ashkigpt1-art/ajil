const testimonials = [
  {
    name: 'آقای احمدی',
    text: 'پسته‌های فوق‌العاده با کیفیت، بسته‌بندی تمیز و تحویل دقیق همان روز. مشتری ثابت شدید!',
    rating: 5
  },
  {
    name: 'خانم توکلی',
    text: 'برای مهمانی از مخلوط مجلسی استفاده کردیم همه سوال می‌کردن از کجا خریدیم. ممنون از تیم حرفه‌ای شما.',
    rating: 5
  },
  {
    name: 'شرکت مهرآفرین',
    text: 'پک هدیه سازمانی نوروز را به موقع و با کیفیت عالی تحویل دادید. همکاری با شما بسیار لذت‌بخش بود.',
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="section-container">
      <div className="mb-6 flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-cocoa-800">نظرات مشتریان ما</h2>
        <span className="text-sm text-cocoa-600">+850 سفارش موفق در سال 1403</span>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="card flex flex-col gap-3">
            <div className="flex items-center gap-2 text-amber-500">
              {'⭐'.repeat(testimonial.rating)}
            </div>
            <p className="text-sm text-cocoa-700">{testimonial.text}</p>
            <span className="text-xs font-semibold text-cocoa-500">{testimonial.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
