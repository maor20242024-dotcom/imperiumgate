import { getDictionary } from '@/lib/i18n';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ locale: 'ar' | 'en' }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return {
    title: dict.ai.personalizedProjects,
    description: dict.ai.personalizedProjectsDesc,
  };
}

export default async function PersonalizedProjectsPage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const isRtl = locale === 'ar';

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="relative pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center ${isRtl ? 'font-amiri' : 'font-inter'}`}>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#e6c55a] via-[#d4af37] to-[#e6c55a] bg-clip-text text-transparent mb-4">
              {dict.ai.personalizedProjects}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {dict.ai.personalizedProjectsDesc}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-900/50 border border-zinc-700/50 rounded-xl p-8 text-gray-200">
          {/* Placeholder: render personalized projects UI here */}
          <p className="mb-2">{locale === 'ar' ? 'واجهة المشاريع المخصصة قادمة قريبًا.' : 'Personalized Projects UI coming soon.'}</p>
        </div>
      </div>
    </div>
  );
}

