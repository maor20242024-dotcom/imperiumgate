export const dynamic = "force-static";

import type { Locale } from '@/lib/i18n-utils';
import { listAllProjectsFolderFirst } from '@/lib/data/server';
import ProjectCard from '@/components/ProjectCard';

export default async function ProjectsIndex({
  params,
}: { params: Promise<{ locale?: Locale }> }) {
  const { locale = 'ar' } = await params;
  const projects = await listAllProjectsFolderFirst();

  if (!projects || projects.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-extrabold text-gold mb-6">
          {locale === 'ar' ? 'كل المشاريع' : 'All Projects'}
        </h1>
        <p className="text-gray-400">
          {locale === 'ar' ? 'لا مشاريع متاحة حالياً.' : 'No projects available at the moment.'}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-extrabold text-gold mb-6">
        {locale === 'ar' ? 'كل المشاريع' : 'All Projects'}
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p: any, idx: number) => (
          <ProjectCard
            key={`${p.id || `${p.developer || 'dev'}-${p.slug || 'unknown'}`}-${idx}`}
            project={p}
          />
        ))}
      </div>
    </div>
  );
}
