import { NextResponse } from 'next/server';
import { listUnitsSummary } from '@/lib/units';

export async function GET(
  req: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const url = new URL(req.url);
  const developer = url.searchParams.get('developer') || 'emaar';
  const { slug } = await context.params;

  try {
    const data = await listUnitsSummary(slug, developer);
    return NextResponse.json(data);
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Failed to load units' }, { status: 500 });
  }
}

