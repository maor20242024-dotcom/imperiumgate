import AIConcierge from '@/components/ui/AIConcierge'
import RouteProgress from '@/components/ui/RouteProgress'
import { ErrorBoundary } from '@/components/error'
import { getDictionary } from '@/lib/i18n'
import { i18n } from '@/lib/i18n-config'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

// Locale-specific layout (nested under the Root Layout).
// Do NOT include <html> or <body> here per Next.js App Router rules.

export const metadata: Metadata = {
  title: 'Imperium Gate',
  description: 'Luxury Real Estate in Dubai',
}

const inter = localFont({
  src: '../../public/fonts/Inter.ttf',
  variable: '--font-inter',
  display: 'swap',
})

const amiri = localFont({
  src: '../../public/fonts/Amiri.ttf',
  variable: '--font-amiri',
  display: 'swap',
})

const tajawal = localFont({
  src: '../../public/fonts/Tajawal.ttf',
  variable: '--font-tajawal',
  display: 'swap',
})

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}) {
  const { locale = 'ar' } = await params;
  const dict = await getDictionary(locale as 'ar' | 'en');

  return (
    <div
      className={`${inter.variable} ${amiri.variable} ${tajawal.variable} font-sans antialiased`}
      data-locale={locale}
      data-dir={locale === 'ar' ? 'rtl' : 'ltr'}
      data-scroll-behavior="smooth"
    >
      <RouteProgress />
      {children}
      {/* مساعد الذكاء الاصطناعي في جميع الصفحات */}
      <ErrorBoundary locale={locale as 'ar' | 'en'}>
        <AIConcierge locale={locale as 'ar' | 'en'} />
      </ErrorBoundary>
    </div>
  );
}
