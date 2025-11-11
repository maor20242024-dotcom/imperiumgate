'use client';

import React from 'react';
import Link from 'next/link';
import { useLocale } from '@/lib/i18n-client';
import { motion } from 'framer-motion';

export default function Header() {
  const locale = useLocale();
  
  return (
    <header className="bg-gradient-to-r from-black via-zinc-900 to-black backdrop-blur-md border-b border-gold/30 sticky top-0 z-50 shadow-lg shadow-gold/10">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Animation */}
          <Link href={`/${locale}`} className="group flex items-center gap-2">
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-gold via-amber-400 to-gold bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]">
                🏰
              </span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gold via-amber-300 to-gold bg-clip-text text-transparent group-hover:from-amber-300 group-hover:via-gold group-hover:to-amber-300 transition-all duration-500">
                Imperium Gate
              </span>
            </motion.div>
          </Link>

          {/* Navigation Links */}
          <div className="flex gap-3 md:gap-6">
            <Link 
              href={`/${locale}/projects`} 
              className="text-sm md:text-base text-gray-300 hover:text-gold font-medium transition-all duration-300 hover:scale-105 relative group"
            >
              <span className="relative z-10">{locale === 'ar' ? 'المشاريع' : 'Projects'}</span>
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
            <Link 
              href={`/${locale}/developers`} 
              className="text-sm md:text-base text-gray-300 hover:text-gold font-medium transition-all duration-300 hover:scale-105 relative group"
            >
              <span className="relative z-10">{locale === 'ar' ? 'المطورين' : 'Developers'}</span>
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
            <Link 
              href={`/${locale}/contact`} 
              className="text-sm md:text-base text-gray-300 hover:text-gold font-medium transition-all duration-300 hover:scale-105 relative group"
            >
              <span className="relative z-10">{locale === 'ar' ? 'اتصل بنا' : 'Contact'}</span>
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
