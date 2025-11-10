'use client';

import Link from 'next/link';
import { useLocale } from '@/lib/i18n-client';
import { stringRoutes } from '@/lib/routes';
import LuxuryButton from '@/components/ui/LuxuryButton';
import ProjectCard from '@/components/ProjectCard';
import type { Project } from '@/lib/types';
import NotFoundHeader from '@/components/project/NotFoundHeader';

interface ProjectNotFoundProps {
  developer: string;
  slug: string;
  developerProjects: Project[];
  otherProjects: Project[];
}

export default function ProjectNotFound({ developer, slug, developerProjects, otherProjects }: ProjectNotFoundProps) {
  const locale = useLocale();
  const devSuggestions = (developerProjects || []).slice(0, 6);
  const otherSuggestions = (otherProjects || []).slice(0, 6);

  const isArabic = locale === 'ar';

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-light">
      {/* Unified Hero Section */}
      <NotFoundHeader
        locale={locale}
        title={isArabic ? 'المشروع غير متوفر' : 'Project Not Available'}
        description={
          isArabic
            ? `عذراً، لم نتمكن من العثور على المشروع "${slug}" للمطور "${developer}"`
            : `Sorry, we couldn't find the project "${slug}" by "${developer}"`
        }
        primaryAction={{
          href: stringRoutes.projectsIndex(locale),
          label: isArabic ? 'تصفح جميع المشاريع' : 'Browse All Projects',
          variant: 'primary',
          prefetch: false,
        }}
        secondaryAction={{
          href: stringRoutes.developersIndex(locale),
          label: isArabic ? `مشاريع ${developer}` : `${developer} Projects`,
          variant: 'outline',
          prefetch: false,
        }}
        icon={<span className="text-4xl">🏗️</span>}
      />

      {/* Alternative Projects from Same Developer */}
      {devSuggestions.length > 0 && (
        <section className="py-16 border-t border-gold/20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className={`text-3xl font-bold mb-8 text-center gold-gradient-static ${isArabic ? 'font-arabic' : 'font-display'}`}>
              {isArabic ? `مشاريع أخرى من ${developer}` : `Other Projects by ${developer}`}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {devSuggestions.map((project, idx) => (
                <ProjectCard key={`${project.id || `${project.developer || 'dev'}-${project.slug || 'unknown'}`}-${idx}`} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Alternative Projects from Other Developers */}
      {otherSuggestions.length > 0 && (
        <section className="py-16 border-t border-gold/20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className={`text-3xl font-bold mb-8 text-center gold-gradient-static ${isArabic ? 'font-arabic' : 'font-display'}`}>
              {isArabic ? 'مشاريع مقترحة' : 'Suggested Projects'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherSuggestions.map((project, idx) => (
                <ProjectCard key={`${project.id || `${project.developer || 'dev'}-${project.slug || 'unknown'}`}-${idx}`} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="py-16 border-t border-gold/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className={`text-2xl font-bold mb-6 gold-gradient-static ${isArabic ? 'font-arabic' : 'font-display'}`}>
            {isArabic ? 'تحتاج مساعدة؟' : 'Need Help?'}
          </h2>
          
          <p className={`text-gray-300 mb-8 ${isArabic ? 'font-arabic' : 'font-sans'}`}>
            {isArabic 
              ? 'فريقنا جاهز لمساعدتك في العثور على المشروع المناسب'
              : 'Our team is ready to help you find the right project'
            }
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+971556628972">
              <LuxuryButton 
                variant="secondary" 
                size="md"
                className={`${isArabic ? 'font-arabic' : 'font-sans'}`}
              >
                📞 {isArabic ? 'اتصل بنا' : 'Call Us'}
              </LuxuryButton>
            </a>
            
            <a href="https://wa.me/971556628972" target="_blank" rel="noopener noreferrer">
              <LuxuryButton 
                variant="secondary" 
                size="md"
                className={`${isArabic ? 'font-arabic' : 'font-sans'}`}
              >
                💬 {isArabic ? 'واتساب' : 'WhatsApp'}
              </LuxuryButton>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
