import { Suspense } from 'react';
import AmenitiesGrid from '@/components/project/AmenitiesGrid';
import ContactBlock from '@/components/project/ContactBlock';
import DocsBlock from '@/components/project/DocsBlock';
import Gallery from '@/components/project/Gallery';
import Insights from '@/components/project/Insights';
import KeyStats from '@/components/project/KeyStats';
import NewsBlock from '@/components/project/NewsBlock';
import Overview from '@/components/project/Overview';
import ProjectHero from '@/components/project/ProjectHero';
import ProjectNotFound from '@/components/project/ProjectNotFound';
import RelatedCarousel from '@/components/project/RelatedCarousel';
import SectionNav from '@/components/project/SectionNav';
import ProjectLocationMapWrapper from '@/components/project/ProjectLocationMapWrapper';
import PropVRFrame from '@/components/PropVRFrame';
import VideoBlock from '@/components/project/VideoBlock';
import ROICalculator from '@/components/ui/ROICalculator';
import { deriveProjectLatLon } from '@/lib/geo';
import { type Locale } from '@/lib/i18n-utils';
import { getAllProjectParams, getProjectBySlug, getProjectsByDeveloper, loadAllProjects } from '@/lib/projects';

// ISR Configuration - Revalidate every 30 minutes
export const revalidate = 1800;

// Helper to handle translation objects or strings safely
function translateText(
  v?: { ar?: string; en?: string } | string,
  locale: Locale = 'ar'
): string {
  if (!v) return '';
  if (typeof v === 'string') return v;
  return v[locale] || v.en || v.ar || '';
}

export async function generateStaticParams() {
  // 🚀 ISR STATIC PARAMS: Generate static params with cached data
  const projectParams = await getAllProjectParams();
  return projectParams
    .filter((p) => p.slug && p.slug.trim() !== '')
    .flatMap((p) =>
      ['ar', 'en'].map(locale => ({
        locale,
        developer: p.developer || 'unknown',
        slug: p.slug,
      }))
    );
}

export default async function ProjectDetail({ params }: { params: Promise<{ locale: string; developer: string; slug: string }> }) {
  const { locale = 'ar', developer, slug } = await params;
  // Server-safe locale normalization (avoid importing client-only utils)
  const loc: Locale = (locale || '').toLowerCase().startsWith('ar') ? 'ar' : 'en';
  // 🚀 ISR CACHED LOADING: Get project with cached data
  const project = await getProjectBySlug(developer, slug);

  // ✅ إذا المشروع غير موجود، اعرض صفحة افتراضية بالاسم بدل 404
  if (!project) {
    const [developerProjects, allProjects] = await Promise.all([
      getProjectsByDeveloper(developer),
      loadAllProjects()
    ]);
    const otherProjects = allProjects.filter((p: any) => p.developer !== developer);
    return <ProjectNotFound developer={developer} slug={slug} developerProjects={developerProjects} otherProjects={otherProjects} />;
  }

  // Get related projects from same developer (cached)
  const allDeveloperProjects = project.developer ? await getProjectsByDeveloper(project.developer) : [];
  const related = allDeveloperProjects
    .filter((p: any) => p.slug !== project.slug)
    .slice(0, 8);

  const { lat, lon } = deriveProjectLatLon(project);

  const hasGallery = !!project.galleryImages?.length;
  const has3D = !!project['3D_TourLink'];
  const hasVideo = !!project.videoLink;
  const hasPDF = !!project.brochurePdfLink;
  const hasAmenities = !!project.amenities?.length;
  const hasInsights = !!project.insights;
  const hasNews = Array.isArray(project.news) && project.news.length > 0;
  const hasContact = !!project.contact;

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-light">
      <ProjectHero project={project} />
      <div className="max-w-6xl mx-auto px-6">
        <KeyStats project={project} locale={loc} />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <ROICalculator project={project} locale={loc} />
      </div>

      <SectionNav project={project} locale={loc} />

      <div id="overview" className="max-w-6xl mx-auto px-6 py-16">
        <Overview project={project} locale={loc} />
      </div>

      {hasGallery && (
        <div id="gallery" className="max-w-6xl mx-auto px-6 py-16">
          <Suspense fallback={<div className="text-center py-8">{loc === 'ar' ? 'جاري تحميل المعرض...' : 'Loading gallery...'}</div>}>
            <Gallery
              images={project.galleryImages!}
              title={translateText(project.projectName, loc) || project.slug}
            />
          </Suspense>
        </div>
      )}

      {has3D && (
        <div id="tour3d" className="max-w-6xl mx-auto px-6 py-16">
          <Suspense fallback={<div className="text-center py-8">{loc === 'ar' ? 'جاري تحميل الجولة...' : 'Loading 3D tour...'}</div>}>
            <PropVRFrame url={project['3D_TourLink']!} />
          </Suspense>
        </div>
      )}

      {hasVideo && (
        <div id="video" className="max-w-6xl mx-auto px-6 py-16">
          <Suspense fallback={<div className="text-center py-8">{loc === 'ar' ? 'جاري تحميل الفيديو...' : 'Loading video...'}</div>}>
            <VideoBlock
              src={project.videoLink!}
              poster={project.heroImage || project.galleryImages?.[0]}
            />
          </Suspense>
        </div>
      )}

      <div id="map" className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {loc === 'ar' ? '📍 الموقع' : '📍 Location'}
          </h2>
          <p className="text-gray-600 text-sm">
            {loc === 'ar' 
              ? 'موقع المشروع على الخريطة'
              : 'Project location on the map'
            }
          </p>
        </div>
        <Suspense fallback={<div className="text-center py-8">{loc === 'ar' ? 'جاري تحميل الخريطة...' : 'Loading map...'}</div>}>
          <ProjectLocationMapWrapper
            latitude={lat ?? undefined}
            longitude={lon ?? undefined}
            title={translateText(project.projectName, loc) || project.slug}
            locationText={translateText(project.location, loc)}
            height="400px"
          />
        </Suspense>
      </div>

      {hasAmenities && (
        <div id="amenities" className="max-w-6xl mx-auto px-6 py-16">
          <AmenitiesGrid amenities={project.amenities!} locale={loc} />
        </div>
      )}

  <div id="docs" className="max-w-6xl mx-auto px-6 py-16">
    {hasPDF || hasGallery ? (
      <DocsBlock
        brochureUrl={project.brochurePdfLink}
        galleryImages={project.galleryImages || []}
        projectName={
          translateText(project.projectName, loc) || project.slug
        }
      />
    ) : (
      <ProjectNotFound
        developer={developer}
        slug={slug}
        developerProjects={allDeveloperProjects}
        otherProjects={[]} // Empty for now, can be loaded if needed
      />
    )}
  </div>

      {hasInsights && (
        <div id="insights" className="max-w-6xl mx-auto px-6 py-16">
        <Insights text={translateText(project.insights, loc)} />
      </div>
      )}

      {hasNews && (
        <div id="news" className="max-w-6xl mx-auto px-6 py-16">
        <NewsBlock news={project.news || []} locale={loc} />
      </div>
      )}

      {hasContact && (
        <div id="contact" className="max-w-6xl mx-auto px-6 py-16">
          <ContactBlock
            contact={project.contact}
            projectName={
              translateText(project.projectName, loc) || project.slug
            }
            developer={project.developer}
            slug={project.slug}
          />
        </div>
      )}


      {related.length > 0 && (
        <div id="related" className="max-w-6xl mx-auto px-6 py-16">
          <RelatedCarousel projects={related} locale={loc} />
        </div>
      )}
    </div>
  );
}
