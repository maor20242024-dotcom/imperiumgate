'use client';

import Link from 'next/link';
import LuxuryButton from '@/components/ui/LuxuryButton';

type Locale = 'ar' | 'en';

type Action = {
  href: any;
  label: string;
  variant?: 'primary' | 'outline' | 'secondary';
  icon?: React.ReactNode;
  prefetch?: boolean;
};

interface NotFoundHeaderProps {
  locale: Locale;
  title: string;
  description: string;
  primaryAction: Action;
  secondaryAction?: Action;
  icon?: React.ReactNode;
}

export default function NotFoundHeader({
  locale,
  title,
  description,
  primaryAction,
  secondaryAction,
  icon,
}: NotFoundHeaderProps) {
  const isArabic = locale === 'ar';

  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-gold/20" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.1),transparent_50%)]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
        {/* Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/30">
            {icon ?? <span className="text-4xl">🏗️</span>}
          </div>
        </div>

        {/* Title */}
        <h1 className={`text-4xl md:text-6xl font-bold mb-6 gold-gradient-static luxury-text-shadow ${isArabic ? 'font-arabic' : 'font-display'}`}>
          {title}
        </h1>

        {/* Description */}
        <p className={`text-xl text-gray-300 mb-8 max-w-2xl mx-auto ${isArabic ? 'font-arabic' : 'font-sans'}`}>
          {description}
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={primaryAction.href} prefetch={primaryAction.prefetch ?? true}>
            <LuxuryButton
              variant={primaryAction.variant ?? 'primary'}
              size="lg"
              className={`${isArabic ? 'font-arabic' : 'font-sans'}`}
            >
              {primaryAction.icon}
              {primaryAction.label}
            </LuxuryButton>
          </Link>

          {secondaryAction && (
            <Link href={secondaryAction.href} prefetch={secondaryAction.prefetch ?? true}>
              <LuxuryButton
                variant={secondaryAction.variant ?? 'outline'}
                size="lg"
                className={`${isArabic ? 'font-arabic' : 'font-sans'}`}
              >
                {secondaryAction.icon}
                {secondaryAction.label}
              </LuxuryButton>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

