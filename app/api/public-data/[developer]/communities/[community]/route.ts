import { NextResponse } from 'next/server';
import { listDevelopers, listCommunityProjectSlugs } from '@/lib/data/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(_req: Request, { params }: { params: Promise<{ developer: string; community: string }> }) {
  const { developer, community } = await params;
  const developers = await listDevelopers();
  if (!developer || !developers.includes(developer)) {
    return NextResponse.json({ error: 'Developer not found' }, { status: 404 });
  }
  if (!community) {
    return NextResponse.json({ error: 'Community not specified' }, { status: 400 });
  }

  const projects = await listCommunityProjectSlugs(developer, community);
  return NextResponse.json({ projects });
}
