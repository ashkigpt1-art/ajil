import ProductCard from '@/components/ProductCard';
import { bestSellerIds, products } from '@/data/products';

const bestSellers = products.filter((product) => bestSellerIds.includes(product.id));

export default function BestSellersSection() {
  return (
    <section id="best-sellers" className="section-container">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-cocoa-800">پرفروش‌های این هفته</h2>
        <span className="text-sm text-cocoa-500">ارسال فوری در تهران</span>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {bestSellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
