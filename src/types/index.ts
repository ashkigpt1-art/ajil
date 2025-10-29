export type ProductCategory = 'pesteh' | 'mix' | 'diet' | 'gift' | 'other';

export type ProductPriceOption = {
  weightGrams: number;
  priceToman: number;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  pricesByWeight: ProductPriceOption[];
  inStock: boolean;
  category: ProductCategory;
};

export type CartItem = {
  productId: string;
  productName: string;
  weightGrams: number;
  unitPriceToman: number;
  quantity: number;
  imageUrl: string;
};

export type CheckoutFormData = {
  fullName: string;
  phoneNumber: string;
  city: string;
  address: string;
  shippingMethod: 'pike-tehran' | 'post-other' | 'pickup';
  paymentMethod: 'cod' | 'online';
  notes?: string;
};
