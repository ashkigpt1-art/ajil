import HeroSection from '@/components/HeroSection';
import WhyUsSection from '@/components/WhyUsSection';
import BestSellersSection from '@/components/BestSellersSection';
import GiftBoxesSection from '@/components/GiftBoxesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ShippingInfoSection from '@/components/ShippingInfoSection';

export default function HomePage() {
  return (
    <div className="space-y-10 pb-16">
      <HeroSection />
      <WhyUsSection />
      <BestSellersSection />
      <GiftBoxesSection />
      <TestimonialsSection />
      <ShippingInfoSection />
    </div>
  );
}
