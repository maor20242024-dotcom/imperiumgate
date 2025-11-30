import type { Locale } from '@/lib/i18n-utils';
import Filters from '@/components/projects/Filters';
import type { Project } from '@/lib/types';
import { getAllProjects } from '@/lib/data/store';
import { selectProjects, filterProjects, sortProjects } from '@/lib/data/filters';
import { toLegacyProjects } from '@/lib/data/legacy';

// ISR Configuration - Revalidate every hour
export const revalidate = 3600;

export default async function ProjectsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const canonical = selectProjects(await getAllProjects());
  const filtered = filterProjects(canonical, { locale });
  const rows = sortProjects(filtered, locale);
  const initial = toLegacyProjects(rows, locale) as Project[];

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-extrabold text-gold mb-6">
        {locale === 'ar' ? 'كل المشاريع' : 'All Projects'}
      </h1>
      <Filters initial={initial} />
    </div>
  );
}
