'use client';

import Link from 'next/link';
import type { Route } from 'next';
import { useLocale } from '@/lib/i18n-client';
import { stringRoutes } from '@/lib/routes';
import ProjectCard from '@/components/ProjectCard';
import LuxuryButton from '@/components/ui/LuxuryButton';
import { Building2, Search, ArrowLeft, Home } from 'lucide-react';
import type { Project } from '@/lib/types';
import NotFoundHeader from '@/components/project/NotFoundHeader';

interface DeveloperProjectsNotFoundProps {
  developer: string;
  otherProjects: Project[];
}

export default function DeveloperProjectsNotFound({ developer, otherProjects }: DeveloperProjectsNotFoundProps) {
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const suggestions = (otherProjects || [])
    .filter(p => p.developer !== developer && p.slug)
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-light">
      {/* Unified Hero Section */}
      <NotFoundHeader
        locale={locale}
        title={isArabic ? 'لا توجد مشاريع' : 'No Projects Found'}
        description={
          isArabic
            ? `لم نتمكن من العثور على أي مشاريع للمطور "${developer}". قد تكون البيانات قيد التحديث أو أن المطور لا يملك مشاريع متاحة حالياً.`
            : `We couldn't find any projects for developer "${developer}". The data might be updating or this developer may not have available projects at the moment.`
        }
        primaryAction={{
          href: stringRoutes.projectsIndex(locale),
          label: isArabic ? 'تصفح جميع المشاريع' : 'Browse All Projects',
          variant: 'primary',
        }}
        secondaryAction={{
          href: stringRoutes.developersIndex(locale),
          label: isArabic ? 'جميع المطورين' : 'All Developers',
          variant: 'outline',
          icon: <Building2 className="w-5 h-5 mr-2" />,
        }}
        icon={<Building2 className="w-12 h-12 text-gold" />}
      />

      {/* Alternative Projects */}
      {suggestions.length > 0 && (
        <section className="py-16 border-t border-gold/20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className={`text-3xl font-bold mb-8 text-center gold-gradient-static ${isArabic ? 'font-arabic' : 'font-display'}`}>
              {isArabic ? 'مشاريع مقترحة من مطورين آخرين' : 'Suggested Projects from Other Developers'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {suggestions.map((project, idx) => (
                <ProjectCard key={project.id || project.slug || `${project.developer || 'project'}-${project.slug || 'unknown'}-${idx}`} project={project} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href={stringRoutes.projectsIndex(locale) as Route}>
                <LuxuryButton 
                  variant="outline" 
                  size="lg"
                  className={`${isArabic ? 'font-arabic' : 'font-sans'}`}
                >
                  {isArabic ? 'عرض جميع المشاريع' : 'View All Projects'}
                </LuxuryButton>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="py-16 border-t border-gold/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className={`text-2xl font-bold mb-6 gold-gradient-static ${isArabic ? 'font-arabic' : 'font-display'}`}>
            {isArabic ? 'هل تبحث عن شيء محدد؟' : 'Looking for Something Specific?'}
          </h3>
          
          <p className={`text-white/70 mb-8 ${isArabic ? 'font-arabic' : 'font-sans'}`}>
            {isArabic 
              ? 'فريقنا جاهز لمساعدتك في العثور على المشروع المثالي'
              : 'Our team is ready to help you find the perfect project'
            }
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={stringRoutes.contact(locale) as Route}>
              <LuxuryButton 
                variant="primary" 
                size="lg"
                className={`${isArabic ? 'font-arabic' : 'font-sans'}`}
              >
                {isArabic ? 'تواصل معنا' : 'Contact Us'}
              </LuxuryButton>
            </Link>
            
            <Link href={stringRoutes.home(locale) as Route}>
              <LuxuryButton 
                variant="outline" 
                size="lg"
                className={`${isArabic ? 'font-arabic' : 'font-sans'}`}
              >
                <Home className="w-5 h-5 mr-2" />
                {isArabic ? 'العودة للرئيسية' : 'Back to Home'}
              </LuxuryButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
