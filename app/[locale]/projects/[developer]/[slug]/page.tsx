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
import ThreeDTourButton from '@/components/project/3DTourButton';
import VideoBlock from '@/components/project/VideoBlock';
import ROICalculator from '@/components/ui/ROICalculator';
import { deriveProjectLatLon } from '@/lib/geo';
import { type Locale } from '@/lib/i18n-utils';
import { getAllProjectParams } from '@/lib/projects';
import { getAllProjects } from '@/lib/data/store';
import { selectProjects, filterProjects, sortProjects, relatedProjects } from '@/lib/data/filters';
import { toLegacyProject, toLegacyProjects } from '@/lib/data/legacy';
import type { Project } from '@/lib/data/schema';

// Dynamic rendering - no cache for instant navigation
export const dynamic = 'force-dynamic';
export const revalidate = 0;

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

export default async function ProjectDetail({ params }: { params: Promise<{ locale: Locale; developer: string; slug: string }> }) {
  const { locale = 'ar', developer, slug } = await params;

  const canonical = selectProjects(await getAllProjects());
  const matches = filterProjects(canonical, {
    locale,
    developerKey: developer,
    projectSlug: slug,
  });

  const project = matches[0];

  if (!project) {
    const developerProjects = sortProjects(filterProjects(canonical, { locale, developerKey: developer }), locale);
    const otherProjects = sortProjects(filterProjects(canonical, { locale }), locale);
    return (
      <ProjectNotFound
        developer={developer}
        slug={slug}
        developerProjects={toLegacyProjects(developerProjects, locale)}
        otherProjects={toLegacyProjects(otherProjects, locale)}
      />
    );
  }

  const legacyProject = toLegacyProject(project, locale);
  const related = toLegacyProjects(relatedProjects(project, canonical, locale, 6), locale);

  const { lat, lon } = deriveProjectLatLon(legacyProject);

  // Support both old and new schema
  const galleryImages: string[] = legacyProject.galleryImages ?? [];
  const hasGallery = galleryImages.length > 0;
  const has3D = !!(
    legacyProject.assets?.tour3d?.matterport ||
    legacyProject.assets?.tour3d?.propvr ||
    legacyProject['3D_TourLink']
  );
  const hasVideo = !!(legacyProject.hero?.type === 'video' || legacyProject.videoLink);
  const hasPDF = !!(
    legacyProject.assets?.brochure?.[locale as 'ar' | 'en'] ||
    legacyProject.brochurePdfLink
  );
  const hasAmenities = !!legacyProject.amenities?.length;
  const hasInsights = !!legacyProject.insights;
  const hasNews = Array.isArray(legacyProject.news) && legacyProject.news.length > 0;
  const hasContact = !!legacyProject.contact;

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-light">
      <ProjectHero project={legacyProject} />
      <div className="max-w-6xl mx-auto px-6">
        <KeyStats project={legacyProject} locale={locale} />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <ROICalculator project={legacyProject} locale={locale} />
      </div>

      <SectionNav project={legacyProject} locale={locale} />

      <div id="overview" className="max-w-6xl mx-auto px-6 py-16">
        <Overview project={legacyProject} locale={locale} />
      </div>

      {hasGallery && (
        <div id="gallery" className="max-w-6xl mx-auto px-6 py-16">
          <Gallery
            images={galleryImages}
            title={
              translateText(legacyProject.projectName || legacyProject.names?.[locale], locale) ||
              legacyProject.slug ||
              legacyProject.slugs?.[locale]
            }
          />
        </div>
      )}

      {has3D && (
        <div id="tour3d" className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gold mb-4">
              {locale === 'ar' ? '🏛️ جولة افتراضية' : '🏛️ Virtual Tour'}
            </h2>
            <p className="text-gray-400">
              {locale === 'ar'
                ? 'استكشف المشروع بتقنية 360 درجة'
                : 'Explore the project in 360°'
              }
            </p>
          </div>
          <ThreeDTourButton
            tourUrl={
              legacyProject.assets?.tour3d?.matterport ||
              legacyProject.assets?.tour3d?.propvr ||
              legacyProject['3D_TourLink']!
            }
            projectName={
              translateText(legacyProject.projectName || legacyProject.names?.[locale], locale) ||
              legacyProject.slug ||
              legacyProject.slugs?.[locale]
            }
            locale={locale}
          />
        </div>
      )}

      {hasVideo && (
        <div id="video" className="max-w-6xl mx-auto px-6 py-16">
          <VideoBlock
            src={legacyProject.hero?.src || legacyProject.videoLink!}
            poster={
              legacyProject.hero?.poster ||
              legacyProject.heroImage ||
              legacyProject.galleryImages?.[0] ||
              galleryImages[0]
            }
          />
        </div>
      )}

      <div id="map" className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {locale === 'ar' ? '📍 الموقع' : '📍 Location'}
          </h2>
          <p className="text-gray-600 text-sm">
            {locale === 'ar' 
              ? 'موقع المشروع على الخريطة'
              : 'Project location on the map'
            }
          </p>
        </div>
        <ProjectLocationMapWrapper
          latitude={lat ?? undefined}
          longitude={lon ?? undefined}
          title={translateText(legacyProject.projectName, locale) || legacyProject.slug}
          locationText={translateText(legacyProject.location, locale)}
          height="400px"
        />
      </div>

      {hasAmenities && (
        <div id="amenities" className="max-w-6xl mx-auto px-6 py-16">
          <AmenitiesGrid amenities={legacyProject.amenities!} locale={locale} />
        </div>
      )}

  <div id="docs" className="max-w-6xl mx-auto px-6 py-16">
    {hasPDF || hasGallery ? (
      <DocsBlock
        brochureUrl={legacyProject.assets?.brochure?.[locale as 'ar' | 'en'] || legacyProject.brochurePdfLink}
        galleryImages={galleryImages}
        projectName={
          translateText(legacyProject.projectName || legacyProject.names?.[locale], locale) ||
          legacyProject.slug ||
          legacyProject.slugs?.[locale]
        }
      />
    ) : null}
  </div>

      {hasInsights && (
        <div id="insights" className="max-w-6xl mx-auto px-6 py-16">
          <Insights text={translateText(legacyProject.insights, locale)} />
        </div>
      )}

      {hasNews && (
        <div id="news" className="max-w-6xl mx-auto px-6 py-16">
          <NewsBlock news={legacyProject.news || []} locale={locale} />
        </div>
      )}

      {hasContact && (
        <div id="contact" className="max-w-6xl mx-auto px-6 py-16">
          <ContactBlock
            contact={legacyProject.contact}
            projectName={
              translateText(legacyProject.projectName, locale) || legacyProject.slug
            }
            developer={legacyProject.developer}
            slug={legacyProject.slug}
          />
        </div>
      )}


      {related.length > 0 && (
        <div id="related" className="max-w-6xl mx-auto px-6 py-16">
          <RelatedCarousel projects={related} locale={locale} />
        </div>
      )}
    </div>
  );
}
