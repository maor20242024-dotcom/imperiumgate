import { AsyncBoundary } from '@/components/suspense';
import { type ReactNode } from 'react';

interface DeveloperSectionBoundaryProps {
  children: ReactNode;
  locale: 'ar' | 'en';
  sectionName: string;
}

/**
 * Wraps developer page sections with error and suspense boundaries
 */
export default function DeveloperSectionBoundary({
  children,
  locale,
  sectionName,
}: DeveloperSectionBoundaryProps) {
  const isArabic = locale === 'ar';
  
  const loadingMessages: Record<string, { ar: string; en: string }> = {
    communities: {
      ar: 'جاري تحميل المجتمعات...',
      en: 'Loading communities...',
    },
    projects: {
      ar: 'جاري تحميل المشاريع...',
      en: 'Loading projects...',
    },
    profile: {
      ar: 'جاري تحميل معلومات المطور...',
      en: 'Loading developer information...',
    },
  };

  return (
    <AsyncBoundary
      locale={locale}
      loadingMessage={loadingMessages[sectionName] || loadingMessages.profile}
      minHeight="300px"
    >
      {children}
    </AsyncBoundary>
  );
}
