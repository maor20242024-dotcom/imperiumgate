import Image from 'next/image';
import Link from 'next/link';
import { readDeveloperProfile, listCommunitySlugs, listAllProjectsFolderFirst, readCommunityData } from '@/lib/data/server';
import { stringRoutes } from '@/lib/routes';
import type { Route } from 'next';

export const revalidate = 3600;

export default async function DeveloperShowPage({
  params,
}: {
  params: Promise<{ locale?: string; developer?: string }>;
}) {
  const { locale = 'en', developer = '' } = await params;
  const loc = (locale || '').toLowerCase().startsWith('ar') ? 'ar' : 'en';
  const { profile, developer: devMeta } = await readDeveloperProfile(developer);
  const communities = await listCommunitySlugs(developer);
  const all = await listAllProjectsFolderFirst();
  const projects = all.filter((p: any) => p.developer === developer);

  const logo = profile?.logo || devMeta?.logo || `/media/${developer}-white.png`;
  const nm = profile?.name || devMeta?.name;
  const pick = (v: any): string => {
    if (!v) return '';
    if (typeof v === 'string') return v;
    return v[loc] || v.en || v.ar || '';
  };
  const name = pick(nm) || developer;
  const title = pick(profile?.title) || name;
  const description = pick(profile?.definition) || pick(devMeta?.description);

  const communityCards = await Promise.all(
    communities.map(async (slug) => {
      const data = await readCommunityData(developer, slug);
      const title = pick((data?.name as any) || (data?.communityName as any)) || slug;
      const pickUrl = (v: any): string | undefined => {
        if (!v) return undefined;
        if (typeof v === 'string') return v;
        if (typeof v === 'object') {
          if (typeof v.src === 'string') return v.src;
          if (typeof v.url === 'string') return v.url;
        }
        return undefined;
      };
      const hero = pickUrl(data?.media?.heroImage) || pickUrl(data?.heroImage) || (Array.isArray(data?.media?.gallery) ? pickUrl(data?.media?.gallery?.[0]) : undefined) || '/media/logo.png';
      return { slug, title, hero };
    })
  );

  const featuredProjects = projects.slice(0, 9);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-light">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.15),transparent_60%),radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
              <Image src={logo} alt={`${name} logo`} width={48} height={48} className="object-contain" />
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gold-grad">{title}</h1>
          </div>
          {description && (
            <p className="text-white/70 leading-relaxed max-w-3xl">
              {description}
            </p>
          )}
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/80">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">{loc === 'ar' ? 'عدد المشاريع' : 'Projects'}: {projects.length}</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">{loc === 'ar' ? 'عدد المجتمعات' : 'Communities'}: {communities.length}</span>
            <Link href={stringRoutes.developerProjectsIndex(loc as any, developer) as Route} className="px-3 py-1 rounded-full bg-gold/20 text-gold hover:bg-gold/30 transition">{loc === 'ar' ? 'مشاريع المطوّر' : 'Developer Projects'}</Link>
            <Link href={stringRoutes.developerCommunitiesIndex(loc as any, developer) as Route} className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition">{loc === 'ar' ? 'مجتمعات المطوّر' : 'Developer Communities'}</Link>
          </div>
        </div>
      </section>

      {/* Communities */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gold">{loc === 'ar' ? 'المجتمعات' : 'Communities'}</h2>
          <Link href={stringRoutes.developerCommunitiesIndex(loc as any, developer) as Route} className="text-gold hover:underline">{loc === 'ar' ? 'عرض الكل' : 'View all'}</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {communityCards.map(({ slug, title, hero }) => (
            <Link
              key={slug}
              href={stringRoutes.communityShow(loc as any, developer, slug) as Route}
              className="group block rounded-xl overflow-hidden border border-white/10 bg-white/5"
            >
              <div className="relative h-40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={hero} alt={title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="text-xs text-white/60">{loc === 'ar' ? 'اضغط لمعرفة المشاريع' : 'Tap to view projects'}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gold">{loc === 'ar' ? 'أبرز المشاريع' : 'Featured Projects'}</h2>
          <Link href={stringRoutes.developerProjectsIndex(loc as any, developer) as Route} className="text-gold hover:underline">{loc === 'ar' ? 'عرض الكل' : 'View all'}</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((p: any, idx: number) => (
            <Link
              key={`${p.id || `${p.developer || developer}-${p.slug || 'unknown'}`}-${idx}`}
              href={stringRoutes.projectShow(loc as any, developer, p.slug || '') as Route}
              className="rounded-xl overflow-hidden border border-white/10 bg-white/5 block"
            >
              <div className="relative h-44">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.heroImage || p.galleryImages?.[0] || '/media/logo.png'} alt={typeof p.projectName === 'string' ? p.projectName : (p.projectName?.[loc] || p.projectName?.en || p.slug)} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">
                  {typeof p.projectName === 'string' ? p.projectName : (p.projectName?.[loc] || p.projectName?.en || p.slug)}
                </h3>
                <p className="text-xs text-white/60">{loc === 'ar' ? 'مشروع من' : 'By'} {developer}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
