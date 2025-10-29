import { NextResponse } from 'next/server';
import { mockDb, generateId } from '@/lib/mockDb';
import type { CartItem, CheckoutFormData } from '@/types';

type OrderRequestBody = {
  customer: CheckoutFormData;
  cart: CartItem[];
  totalAmount: number;
  shippingMethod: CheckoutFormData['shippingMethod'];
  paymentMethod: CheckoutFormData['paymentMethod'];
};

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<OrderRequestBody>;

  if (!body.customer || !body.cart || body.cart.length === 0 || !body.totalAmount) {
    return NextResponse.json({ status: 'error', message: 'invalid payload' }, { status: 400 });
  }

  const orderId = generateId('order');

  mockDb.orders.push({
    orderId,
    customer: body.customer,
    cart: body.cart,
    totalAmount: body.totalAmount,
    shippingMethod: body.shippingMethod ?? 'pike-tehran',
    paymentMethod: body.paymentMethod ?? 'cod',
    createdAt: new Date().toISOString()
  });

  return NextResponse.json({ status: 'ok', orderId });
}
