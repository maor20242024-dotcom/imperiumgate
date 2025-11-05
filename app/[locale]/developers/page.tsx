import DevelopersGrid from '@/components/developers/DevelopersGrid';
import { t } from '@/lib/i18n-utils';
import { listDevelopers } from '@/lib/projects';

// ISR Configuration - Revalidate developers list every 2 hours
export const revalidate = 7200;

export default async function DevelopersPage({
  params,
}: {
  params: Promise<{ locale?: string }>;
}) {
  const { locale = 'en' } = await params;
  // 🚀 ISR CACHED LOADING: Read developers list with cached ISR helper
  const developers = await listDevelopers();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-extrabold text-gold-grad mb-8">
        {locale === 'ar' ? 'المطورون' : 'Developers'}
      </h1>
      <DevelopersGrid developers={developers} />
    </div>
  );
}
