import Link from 'next/link';
import Image from 'next/image';
import ProjectCard from '@/components/ProjectCard';
import { readCommunityData, listCommunityProjectSlugs, readCommunityProjectData, readProjectData } from '@/lib/data/server';

export const revalidate = 1800;

export default async function CommunityShowPage({
  params,
}: {
  params: Promise<{ locale?: string; developer?: string; community?: string }>;
}) {
  const { locale = 'en', developer = '', community = '' } = await params;
  const data = await readCommunityData(developer, community);

  // Prefer nested community projects; fallback to slugs listed in community.json
  const nestedSlugs = await listCommunityProjectSlugs(developer, community);
  let projects: any[] = [];
  if (nestedSlugs.length > 0) {
    projects = (await Promise.all(nestedSlugs.map(async (slug) => await readCommunityProjectData(developer, community, slug))))
      .filter(Boolean);
  } else if (Array.isArray(data?.projects)) {
    projects = (await Promise.all(data.projects.map(async (slug: string) => await readProjectData(developer, slug))))
      .filter(Boolean);
  }

  // Minimal normalization to keep ProjectCard compatible
  const normProjects = projects.map((p: any) => {
    const pickUrl = (v: any): string | undefined => {
      if (!v) return undefined;
      if (typeof v === 'string') return v;
      if (typeof v === 'object') {
        if (typeof v.src === 'string') return v.src;
        if (typeof v.url === 'string') return v.url;
      }
      return undefined;
    };
    const hero = pickUrl(p?.heroImage) || (Array.isArray(p?.galleryImages) ? pickUrl(p.galleryImages[0]) : undefined);
    const gallery = Array.isArray(p?.galleryImages)
      ? p.galleryImages.map((g: any) => pickUrl(g)).filter((s: any) => typeof s === 'string')
      : p?.galleryImages;
    return {
      ...p,
      developer: developer,
      heroImage: hero || p?.heroImage,
      galleryImages: gallery || [],
    };
  });

  const title = (data?.name?.[locale]) || (data?.name?.en) || community;
  const hero = data?.heroImage || (Array.isArray(data?.galleryImages) ? data?.galleryImages[0] : undefined);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gold-grad">{title}</h1>
          <div className="text-sm text-gray-400 capitalize">{developer}</div>
        </div>
        <Link href={`/${locale}/developers/${developer}/communities`} className="text-gold underline">
          {locale === 'ar' ? 'رجوع إلى المجتمعات' : 'Back to communities'}
        </Link>
      </div>

      {hero && (
        <div className="relative h-60 w-full rounded-2xl overflow-hidden mb-6 bg-zinc-900">
          <Image src={hero} alt={title} fill className="object-cover" />
        </div>
      )}

      <p className="text-gray-300 leading-7 mb-8">
        {data?.description?.[locale] || data?.description?.en || ''}
      </p>

      <h2 className="text-xl font-bold text-gold mb-4">{locale === 'ar' ? 'مشاريع المجتمع' : 'Community Projects'}</h2>
      {normProjects.length === 0 ? (
        <div className="text-gray-400">{locale === 'ar' ? 'لا توجد مشاريع في هذا المجتمع.' : 'No projects for this community.'}</div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {normProjects.map((p: any, idx: number) => (
            <ProjectCard key={`${developer}-${community}-${p.slug}-${idx}`} project={p} />
          ))}
        </div>
      )}
    </div>
  );
}
