'use client';

import React from 'react';
import Link from 'next/link';
import { useLocale } from '@/lib/i18n-client';

export default function Header() {
  const locale = useLocale();
  
  return (
    <header className="bg-black/80 backdrop-blur-sm border-b border-[var(--gold)]/20 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href={`/${locale}`} className="text-2xl font-bold text-[var(--gold)]">
            Imperium Gate
          </Link>
          <div className="flex gap-6">
            <Link href={`/${locale}/projects`} className="text-gray-300 hover:text-[var(--gold)] transition">
              {locale === 'ar' ? 'المشاريع' : 'Projects'}
            </Link>
            <Link href={`/${locale}/developers`} className="text-gray-300 hover:text-[var(--gold)] transition">
              {locale === 'ar' ? 'المطورين' : 'Developers'}
            </Link>
            <Link href={`/${locale}/contact`} className="text-gray-300 hover:text-[var(--gold)] transition">
              {locale === 'ar' ? 'اتصل بنا' : 'Contact'}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
