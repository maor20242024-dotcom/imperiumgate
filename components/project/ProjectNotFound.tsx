'use client';

import React from 'react';
import Link from 'next/link';
import { Home, AlertTriangle } from 'lucide-react';
import LuxuryButton from '@/components/ui/LuxuryButton';
import ProjectCard from '@/components/ProjectCard';

type Project = any; // استخدم النوع الصحيح من lib/types

type Props = {
  developer?: string;
  slug?: string;
  developerProjects?: Project[];
  otherProjects?: Project[];
};

export default function ProjectNotFound({
  developer,
  slug,
  developerProjects = [],
  otherProjects = []
}: Props) {
  const hasRelated = developerProjects.length > 0 || otherProjects.length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-light px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Error Icon */}
        <div className="mb-8">
          <AlertTriangle className="w-24 h-24 text-[var(--gold)] mx-auto animate-pulse" />
        </div>

        {/* Error Message */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold)] to-amber-300">
          المشروع غير موجود
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-400">
          Project Not Found
        </h2>

        <p className="text-xl text-gray-400 mb-8">
          عذراً، لم نتمكن من العثور على المشروع المطلوب
          <br />
          <span className="text-[var(--gold)]">{developer}/{slug}</span>
        </p>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Link href="/ar">
            <LuxuryButton className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              العودة للرئيسية | Home
            </LuxuryButton>
          </Link>
          <Link href="/ar/projects">
            <LuxuryButton className="flex items-center gap-2">
              جميع المشاريع | All Projects
            </LuxuryButton>
          </Link>
        </div>

        {/* Related Projects */}
        {hasRelated && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-gray-200">
              {developerProjects.length > 0
                ? `مشاريع أخرى من ${developer} | Other projects from ${developer}`
                : 'مشاريع قد تهمك | Projects you might like'}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(developerProjects.length > 0 ? developerProjects : otherProjects)
                .slice(0, 6)
                .map((project: any) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
