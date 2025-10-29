import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'pesteh-akbari',
    name: 'پسته اکبری شور کم‌نمک',
    slug: 'pesteh-akbari',
    description: 'دونه درشت، تفت روزانه، نمک کنترل‌شده',
    imageUrl: 'https://images.unsplash.com/photo-1601000938259-9c05faed87dd',
    pricesByWeight: [
      { weightGrams: 250, priceToman: 180000 },
      { weightGrams: 500, priceToman: 340000 },
      { weightGrams: 1000, priceToman: 650000 }
    ],
    inStock: true,
    category: 'pesteh'
  },
  {
    id: 'mix-lux',
    name: 'مخلوط مجلسی لاکچری',
    slug: 'mix-lux',
    description: 'پسته، بادام هندی، بادام درختی، فندق بو داده – مناسب پذیرایی',
    imageUrl: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67dd',
    pricesByWeight: [
      { weightGrams: 250, priceToman: 150000 },
      { weightGrams: 500, priceToman: 280000 },
      { weightGrams: 1000, priceToman: 540000 }
    ],
    inStock: true,
    category: 'mix'
  },
  {
    id: 'gift-royal',
    name: 'پک هدیه لاکچری رویال',
    slug: 'gift-royal',
    description: 'جعبه چوبی لوکس با آجیل ممتاز و کارت شخصی‌سازی شده',
    imageUrl: 'https://images.unsplash.com/photo-1543352634-873f17a7a088',
    pricesByWeight: [
      { weightGrams: 1000, priceToman: 950000 }
    ],
    inStock: true,
    category: 'gift'
  }
];

export const bestSellerIds = ['pesteh-akbari', 'mix-lux'];
