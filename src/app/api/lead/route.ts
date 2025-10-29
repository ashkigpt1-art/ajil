import { NextResponse } from 'next/server';
import { mockDb, generateId } from '@/lib/mockDb';

type LeadRequestBody = {
  name: string;
  phone: string;
  quantity?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<LeadRequestBody>;

  if (!body.name || !body.phone) {
    return NextResponse.json({ status: 'error', message: 'invalid payload' }, { status: 400 });
  }

  const id = generateId('lead');
  mockDb.leads.push({
    id,
    name: body.name,
    phone: body.phone,
    quantity: body.quantity ?? '',
    message: body.message ?? '',
    createdAt: new Date().toISOString()
  });

  return NextResponse.json({ status: 'ok' });
}
