import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProjectsByCommunity, deriveCommunities } from '@/lib/data/store';
import ProjectCard from '@/components/ProjectCard';
import type { Locale } from '@/lib/data/schema';
import { MapPin, Building2 } from 'lucide-react';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface CommunityPageProps {
  params: Promise<{ locale: string; communitySlug: string }>;
}

export default async function CommunityPage({ params }: CommunityPageProps) {
  const { locale, communitySlug } = await params;
  const isRTL = locale === 'ar';

  // Get all communities to find the current one
  const allCommunities = await deriveCommunities();
  const community = allCommunities.find(
    (c) => c.slugs[locale as Locale] === communitySlug || c.key === communitySlug
  );

  if (!community) {
    notFound();
  }

  // Get all projects in this community
  const projectsData = await getProjectsByCommunity(community.key);

  // Convert to old format for compatibility with ProjectCard
  const projects = projectsData.map((p) => ({
    ...p,
    developer: p.developerKey,
    slug: p.slugs[locale as Locale],
    projectName: p.names,
  }));

  // Group projects by developer
  const projectsByDeveloper = projects.reduce((acc, project) => {
    const dev = project.developerKey;
    if (!acc[dev]) acc[dev] = [];
    acc[dev].push(project);
    return acc;
  }, {} as Record<string, typeof projects>);

  const uniqueDevelopers = Object.keys(projectsByDeveloper);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Hero Section */}
      <div className="relative h-[300px] overflow-hidden bg-gradient-to-br from-gold/20 to-transparent">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10" />

        <div className="relative z-20 h-full flex flex-col items-center justify-center px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center">
              <MapPin className="w-10 h-10 text-gold" />
            </div>
          </div>

          <h1 className="text-5xl font-bold text-white text-center mb-4">
            {community.names[locale as Locale]}
          </h1>

          <p className="text-xl text-gray-300 text-center max-w-2xl">
            {isRTL
              ? `${community.projectCount} مشروع في هذا المجتمع`
              : `${community.projectCount} projects in this community`}
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 text-center">
            <Building2 className="w-10 h-10 text-gold-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-2">{community.projectCount}</div>
            <div className="text-gray-400">{isRTL ? 'إجمالي المشاريع' : 'Total Projects'}</div>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 text-center">
            <MapPin className="w-10 h-10 text-purple-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-2">{uniqueDevelopers.length}</div>
            <div className="text-gray-400">{isRTL ? 'المطورون' : 'Developers'}</div>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 text-center col-span-2 md:col-span-1">
            <Building2 className="w-10 h-10 text-blue-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-2">
              {projectsData.filter((p) => p.status === 'under_construction').length}
            </div>
            <div className="text-gray-400">{isRTL ? 'قيد الإنشاء' : 'Under Construction'}</div>
          </div>
        </div>

        {/* Developers in Community */}
        {uniqueDevelopers.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold-400 mb-6">
              {isRTL ? 'المطورون في هذا المجتمع' : 'Developers in this Community'}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {uniqueDevelopers.map((dev) => (
                <div
                  key={dev}
                  className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 text-center"
                >
                  <div className="text-gold font-bold capitalize">{dev}</div>
                  <div className="text-sm text-gray-400">
                    {projectsByDeveloper[dev].length} {isRTL ? 'مشاريع' : 'projects'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gold-400">
              {isRTL ? 'جميع المشاريع' : 'All Projects'}
            </h2>
            <div className="text-gray-400">
              {projects.length} {isRTL ? 'مشروع' : 'projects'}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={`${project.developerKey}-${project.slug}`}
                project={project}
              />
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/communities`}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gold-600 hover:bg-gold-700 text-white rounded-lg transition-colors"
          >
            {isRTL ? 'عودة إلى المجتمعات' : 'Back to Communities'}
          </Link>
        </div>
      </div>
    </div>
  );
}
