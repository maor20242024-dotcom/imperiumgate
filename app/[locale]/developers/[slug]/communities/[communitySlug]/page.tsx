
import { notFound } from 'next/navigation';
import { getCommunityDetails, getAllDevelopers, getDeveloperData } from '@/lib/developers';
import Link from 'next/link';
import Image from 'next/image';
import ProjectCard from '@/components/ProjectCard';
import { path } from '@/lib/paths'; // Make sure path supports this if used, otherwise manual link
import type { Project, MaybeLocalized, Locale } from '@/lib/types';
import { Building2 } from 'lucide-react';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface CommunityPageProps {
    params: Promise<{ locale: string; slug: string; communitySlug: string }>;
}

function normalizeLocation(raw: any, locale: Locale): string {
    if (!raw) return '';
    if (typeof raw === 'string') return raw;
    if ('en' in raw || 'ar' in raw) return raw[locale] || raw.en || '';
    if ('city' in raw && raw.city) return raw.city;
    return '';
}

export default async function CommunityPage({ params }: CommunityPageProps) {
    const { locale, slug, communitySlug } = await params;
    const isRTL = locale === 'ar';

    const result = await getCommunityDetails(slug, communitySlug);

    if (!result) {
        notFound();
    }

    const { community, projects: rawProjects } = result;

    // Normalize projects for ProjectCard
    const projects: Project[] = rawProjects.map((p: any) => ({
        ...p,
        projectName: p.name,
        heroImage: p.media?.[0] || '/images/hero-fallback.png',
        galleryImages: p.media || [],
        location: p.location,
        developer: p.developer,
        developerKey: slug,
        ...p.extra
    }));

    const backLink = `/${locale}/developers/${slug}`;
    const communityImage = community.media?.[0] || '/images/hero-fallback.png';

    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
            {/* Navigation */}
            <div className="container mx-auto px-6 py-6">
                <Link href={backLink as any} className="text-gold hover:underline inline-flex items-center gap-2">
                    {isRTL ? '← العودة للمطور' : '← Back to Developer'}
                </Link>
            </div>

            {/* Hero */}
            <div className="relative h-[50vh] min-h-[400px]">
                <div className="absolute inset-0">
                    <Image
                        src={communityImage}
                        alt={community.name}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                    <div className="container mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">{community.name}</h1>
                        <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed drop-shadow-md">
                            {community.description}
                        </p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 py-16">

                <section>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold text-gold-400">
                            {isRTL ? 'المشاريع في هذا المجتمع' : 'Projects in this Community'}
                        </h2>
                        <span className="text-gray-400">{projects.length} {isRTL ? 'مشروع' : 'projects'}</span>
                    </div>

                    {projects.length === 0 ? (
                        <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10">
                            <Building2 className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                            <p className="text-xl text-gray-400">{isRTL ? 'لا توجد مشاريع متاحة حالياً' : 'No projects available currently.'}</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map(project => (
                                <ProjectCard key={project.slug} project={project} />
                            ))}
                        </div>
                    )}
                </section>

            </div>
        </div>
    );
}
