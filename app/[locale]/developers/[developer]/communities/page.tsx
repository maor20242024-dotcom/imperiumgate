import Link from 'next/link';
import Image from 'next/image';
import { listCommunitySlugs, readCommunityData } from '@/lib/data/server';
import { buildHref } from '@/lib/routes';

export const revalidate = 1800;

export default async function DeveloperCommunitiesIndex({
  params,
}: {
  params: Promise<{ locale?: string; developer?: string }>;
}) {
  const { locale = 'en', developer = '' } = await params;
  const slugs = await listCommunitySlugs(developer);
  const communities = await Promise.all(slugs.map(async (slug) => ({ slug, data: await readCommunityData(developer, slug) })));

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gold-grad capitalize">
          {locale === 'ar' ? 'مجتمعات' : 'Communities'} · {developer}
        </h1>
        <Link href={`/${locale}/developers/${developer}`} className="text-gold underline">
          {locale === 'ar' ? 'رجوع إلى المطوّر' : 'Back to developer'}
        </Link>
      </div>

      {communities.length === 0 ? (
        <div className="text-gray-400">{locale === 'ar' ? 'لا توجد مجتمعات.' : 'No communities found.'}</div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {communities.map(({ slug, data }) => {
            const title = (data?.name?.[locale]) || (data?.name?.en) || slug;
            const img = data?.heroImage || (Array.isArray(data?.galleryImages) ? data?.galleryImages[0] : undefined);
            return (
              <Link key={`${developer}-${slug}`} href={buildHref(locale as any, { type: 'community', developer, slug }) as any} className="block rounded-2xl border border-gold/20 p-4 bg-black/40 hover:border-gold/40">
                <div className="relative h-40 w-full rounded-xl overflow-hidden mb-3 bg-zinc-900">
                  {img && (
                    <Image src={img} alt={title} fill className="object-cover" />
                  )}
                </div>
                <div className="text-gold font-semibold text-lg">{title}</div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
