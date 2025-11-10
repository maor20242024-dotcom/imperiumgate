'use client';

import { useEffect } from 'react';
import { useLocale } from '@/lib/i18n-client';

export default function LocaleDir() {
  const locale = useLocale();
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);
  return null;
}
