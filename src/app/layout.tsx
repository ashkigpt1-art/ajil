import type { Metadata } from 'next';
import Script from 'next/script';
import { Vazirmatn } from 'next/font/google';
import './globals.css';
import { STORE_INFO } from '@/config/storeInfo';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCartButton from '@/components/FloatingCartButton';

const vazirmatn = Vazirmatn({
  subsets: ['arabic'],
  variable: '--font-vazirmatn'
});

const metaTitle = 'خرید آنلاین آجیل تازه و لوکس | ارسال فوری تهران';
const metaDescription = 'آجیل تازه تفت‌شده روز با بسته‌بندی وکیوم، ارسال سریع تهران و شهرستان. سفارش آنلاین پسته اکبری، مخلوط مجلسی و پک هدیه.';

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    url: 'https://example.com',
    siteName: STORE_INFO.BRAND_NAME,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1601000938259-9c05faed87dd',
        width: 1200,
        height: 630,
        alt: 'بسته آجیل تازه و لوکس'
      }
    ],
    locale: 'fa_IR',
    type: 'website'
  },
  alternates: {
    canonical: 'https://example.com'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: STORE_INFO.BRAND_NAME,
  telephone: STORE_INFO.PHONE_NUMBER,
  address: {
    '@type': 'PostalAddress',
    streetAddress: STORE_INFO.SHOP_ADDRESS,
    addressLocality: STORE_INFO.CITY_NAME,
    addressCountry: 'IR'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      opens: '09:00',
      closes: '21:00'
    }
  ],
  sameAs: [
    `https://instagram.com/${STORE_INFO.INSTAGRAM_HANDLE}`,
    `https://wa.me/${STORE_INFO.WHATSAPP_NUMBER}`
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingCartButton />
        </CartProvider>
        <Script
          id="local-business-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
