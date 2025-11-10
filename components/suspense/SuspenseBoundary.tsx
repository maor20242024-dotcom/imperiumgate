import { Suspense, type ReactNode } from 'react';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

interface SuspenseBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  /**
   * Loading message to display
   */
  loadingMessage?: {
    ar: string;
    en: string;
  };
  /**
   * Locale for loading message
   */
  locale?: 'ar' | 'en';
  /**
   * Minimum height for the loading container
   */
  minHeight?: string;
  /**
   * Custom className for the fallback container
   */
  className?: string;
}

/**
 * Enhanced Suspense Boundary with better loading states
 * Provides consistent loading UI across the application
 */
export default function SuspenseBoundary({
  children,
  fallback,
  loadingMessage,
  locale = 'en',
  minHeight = '200px',
  className = '',
}: SuspenseBoundaryProps) {
  const defaultFallback = (
    <div
      className={`
        flex flex-col items-center justify-center 
        bg-gradient-to-br from-zinc-900/30 to-black/30 
        border border-zinc-700/30 rounded-lg
        ${className}
      `}
      style={{ minHeight }}
    >
      <LoadingSpinner size="lg" />
      {loadingMessage && (
        <p className={`mt-4 text-zinc-400 text-sm ${locale === 'ar' ? 'font-arabic' : 'font-sans'}`}>
          {loadingMessage[locale]}
        </p>
      )}
    </div>
  );

  return (
    <Suspense fallback={fallback || defaultFallback}>
      {children}
    </Suspense>
  );
}
