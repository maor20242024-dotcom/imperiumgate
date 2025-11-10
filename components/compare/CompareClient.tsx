'use client';

import React from 'react';
import { useCompare } from '@/lib/compare';
import ProjectCard from '@/components/ProjectCard';

export default function CompareClient() {
  const { ids } = useCompare();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-light px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold)] to-amber-300">
          مقارنة المشاريع | Compare Projects
        </h1>
        {ids.length === 0 ? (
          <p className="text-gray-400">لم تقم بإضافة أي مشاريع للمقارنة | No projects added for comparison</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ids.map((id) => (
              <div key={id} className="text-gray-400">Project: {id}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
