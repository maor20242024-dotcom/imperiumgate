'use client';

import { type ReactNode } from 'react';
import { ErrorBoundary } from '@/components/error/ErrorBoundary';
import SuspenseBoundary from '@/components/suspense/SuspenseBoundary';

interface AsyncBoundaryProps {
  children: ReactNode;
  /**
   * Custom error fallback renderer
   */
  errorFallback?: (error: Error, reset: () => void) => ReactNode;
  /**
   * Custom loading fallback
   */
  loadingFallback?: ReactNode;
  /**
   * Loading message
   */
  loadingMessage?: {
    ar: string;
    en: string;
  };
  /**
   * Locale for messages
   */
  locale?: 'ar' | 'en';
  /**
   * Minimum height for loading state
   */
  minHeight?: string;
  /**
   * Error handler callback
   */
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  /**
   * Custom className
   */
  className?: string;
}

/**
 * AsyncBoundary - Combines ErrorBoundary and Suspense
 * Provides comprehensive error and loading state handling
 * 
 * Usage:
 * <AsyncBoundary locale="ar" loadingMessage={{ ar: 'جاري التحميل...', en: 'Loading...' }}>
 *   <AsyncComponent />
 * </AsyncBoundary>
 */
export default function AsyncBoundary({
  children,
  errorFallback,
  loadingFallback,
  loadingMessage,
  locale = 'en',
  minHeight = '200px',
  onError,
  className = '',
}: AsyncBoundaryProps) {
  return (
    <ErrorBoundary
      fallback={errorFallback}
      onError={onError}
      locale={locale}
    >
      <SuspenseBoundary
        fallback={loadingFallback}
        loadingMessage={loadingMessage}
        locale={locale}
        minHeight={minHeight}
        className={className}
      >
        {children}
      </SuspenseBoundary>
    </ErrorBoundary>
  );
}
