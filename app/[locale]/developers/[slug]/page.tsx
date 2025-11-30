import { notFound } from 'next/navigation';
import { getDeveloperByKey, getProjectsByDeveloper } from '@/lib/data/store';
import { tx } from '@/lib/i18n-utils';
import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { Building2, MapPin, Award, TrendingUp } from 'lucide-react';
import type { Locale } from '@/lib/data/schema';
import { path } from '@/lib/paths';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface DeveloperPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function DeveloperPage({ params }: DeveloperPageProps) {
  const { locale, slug } = await params;
  const isRTL = locale === 'ar';

  // Get developer data
  const developer = await getDeveloperByKey(slug);

  if (!developer) {
    notFound();
  }

  // Get all projects for this developer
  const projectsData = await getProjectsByDeveloper(slug);

  // Convert to old format for compatibility with ProjectCard
  const projects = projectsData.map((p) => ({
    ...p,
    developer: p.developerKey,
    slug: p.slugs[locale as Locale],
    projectName: p.names,
  }));

  // Extract unique areas/communities
  const uniqueAreas = Array.from(
    new Set(
      projectsData
        .map(p => p.community?.key)
        .filter(Boolean)
    )
  ) as string[];

  // Stats
  const stats = {
    totalProjects: projects.length,
    activeProjects: projectsData.filter(p => p.status === 'under_construction').length,
    completedProjects: projectsData.filter(p => p.status === 'completed').length,
    areas: uniqueAreas.length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${developer.logoWhite || '/media/default-developer.jpg'})`,
            filter: 'blur(20px) brightness(0.5)',
          }}
        />
        
        <div className="relative z-20 h-full flex flex-col items-center justify-center px-6">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            {developer.logoWhite && (
              <Image
                src={developer.logoWhite}
                alt={developer.name[locale as Locale]}
                width={200}
                height={80}
                className="object-contain mb-4"
              />
            )}
            <h1 className="text-5xl font-bold text-white text-center mb-4">
              {developer.name[locale as Locale]}
            </h1>
            <p className="text-xl text-gray-300 text-center max-w-2xl">
              {developer.description?.[locale as Locale] || (isRTL
                ? `مطور عقاري رائد في دبي`
                : `Leading Real Estate Developer in Dubai`)}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 text-center">
            <Building2 className="w-10 h-10 text-gold-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-2">{stats.totalProjects}</div>
            <div className="text-gray-400">{isRTL ? 'إجمالي المشاريع' : 'Total Projects'}</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 text-center">
            <TrendingUp className="w-10 h-10 text-blue-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-2">{stats.activeProjects}</div>
            <div className="text-gray-400">{isRTL ? 'قيد الإنشاء' : 'Under Construction'}</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 text-center">
            <Award className="w-10 h-10 text-green-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-2">{stats.completedProjects}</div>
            <div className="text-gray-400">{isRTL ? 'مشاريع جاهزة' : 'Completed'}</div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 text-center">
            <MapPin className="w-10 h-10 text-purple-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-2">{stats.areas}</div>
            <div className="text-gray-400">{isRTL ? 'المناطق' : 'Areas'}</div>
          </div>
        </div>

        {/* About Developer */}
        {developer.description?.[locale as Locale] && (
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 mb-12">
            <h2 className="text-3xl font-bold text-gold-400 mb-6">
              {isRTL ? 'نبذة عن المطور' : 'About the Developer'}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {developer.description[locale as Locale]}
            </p>
          </div>
        )}

        {/* Areas Section */}
        {uniqueAreas.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gold-400 mb-6">
              {isRTL ? 'المناطق والمجتمعات' : 'Areas & Communities'}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {uniqueAreas.map((area) => (
                <div
                  key={area}
                  className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 hover:border-gold-400 transition-all"
                >
                  <MapPin className="w-6 h-6 text-gold-400 mb-2" />
                  <div className="text-white font-semibold">{area}</div>
                  <div className="text-sm text-gray-400">
                    {projectsData.filter(p => p.community?.key === area).length} {isRTL ? 'مشاريع' : 'projects'}
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
                key={`${project.developer}-${project.slug}`}
                project={project}
              />
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link
            href={path.developersHome(locale as Locale)}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gold-600 hover:bg-gold-700 text-white rounded-lg transition-colors"
          >
            {isRTL ? 'عودة إلى المطورين' : 'Back to Developers'}
          </Link>
        </div>
      </div>
    </div>
  );
}
