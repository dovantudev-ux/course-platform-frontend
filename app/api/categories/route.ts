import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('http://152.69.205.111:5000/api/categories');
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 });
  }
}
