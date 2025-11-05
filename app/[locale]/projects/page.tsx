import type { Locale } from '@/lib/i18n-utils';
import { loadAllProjects } from '@/lib/projects';
import Filters from '@/components/projects/Filters';

// ISR Configuration - Revalidate every hour
export const revalidate = 3600;

export default async function ProjectsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  
  // 🚀 ISR CACHED LOADING: Read projects with Next.js unstable_cache
  const allProjects = await loadAllProjects();
  
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-extrabold text-gold mb-6">
        {locale === 'ar' ? 'كل المشاريع' : 'All Projects'}
      </h1>
      <Filters initial={allProjects} />
    </div>
  );
}
