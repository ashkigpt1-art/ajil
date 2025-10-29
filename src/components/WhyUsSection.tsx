const features = [
  {
    title: 'تفت روزانه و تازگی',
    description: 'هر روز صبح تفت تازه برای حفظ عطر و طعم طبیعی.',
    icon: '🔥'
  },
  {
    title: 'بسته‌بندی وکیوم و تمیز',
    description: 'وکیوم فوری بعد از تفت تا محصول بدون آلودگی به دست شما برسد.',
    icon: '🧴'
  },
  {
    title: 'ارسال سریع',
    description: 'تحویل همان‌روز در تهران و ارسال با پست ویژه به شهرستان.',
    icon: '🚚'
  },
  {
    title: 'ضمانت تازگی',
    description: 'در صورت نارضایتی تعویض یا مرجوع بدون قید و شرط.',
    icon: '✅'
  }
];

export default function WhyUsSection() {
  return (
    <section className="section-container">
      <h2 className="mb-6 text-2xl font-bold text-cocoa-800">چرا آجیل ما؟</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.title} className="card flex items-start gap-4">
            <span className="text-3xl">{feature.icon}</span>
            <div>
              <h3 className="text-lg font-semibold text-cocoa-700">{feature.title}</h3>
              <p className="text-sm text-cocoa-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
