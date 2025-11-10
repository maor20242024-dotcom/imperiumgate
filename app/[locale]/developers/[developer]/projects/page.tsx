import Link from 'next/link';
import Image from 'next/image';
import ProjectCard from '@/components/ProjectCard';
import { listAllProjectsFolderFirst } from '@/lib/data/server';

export const revalidate = 1800;

export default async function DeveloperProjectsIndex({
  params,
}: {
  params: Promise<{ locale?: string; developer?: string }>;
}) {
  const { locale = 'en', developer = '' } = await params;
  const all = await listAllProjectsFolderFirst();
  const projects = all.filter((p: any) => p.developer === developer);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gold-grad capitalize">
          {locale === 'ar' ? 'مشاريع' : 'Projects'} · {developer}
        </h1>
        <Link href={`/${locale}/developers/${developer}`} className="text-gold underline">
          {locale === 'ar' ? 'رجوع إلى المطوّر' : 'Back to developer'}
        </Link>
      </div>

      {projects.length === 0 ? (
        <div className="text-gray-400">{locale === 'ar' ? 'لا توجد مشاريع.' : 'No projects found.'}</div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p: any, idx: number) => (
            <ProjectCard key={`${p.developer}-${p.slug}-${idx}`} project={p} />
          ))}
        </div>
      )}
    </div>
  );
}
