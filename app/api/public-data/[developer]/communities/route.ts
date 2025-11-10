import { NextResponse } from 'next/server';
import { listDevelopers, listCommunitySlugs } from '@/lib/data/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(_req: Request, { params }: { params: Promise<{ developer: string }> }) {
  const { developer } = await params;
  const developers = await listDevelopers();
  if (!developer || !developers.includes(developer)) {
    return NextResponse.json({ error: 'Developer not found' }, { status: 404 });
  }

  const communities = await listCommunitySlugs(developer);
  return NextResponse.json({ communities });
}
