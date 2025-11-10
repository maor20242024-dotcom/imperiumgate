'use client';

import { Component, type ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';
import type { Route } from 'next';
import LuxuryButton from '@/components/ui/LuxuryButton';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: (error: Error, reset: () => void) => ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  locale?: 'ar' | 'en';
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * Reusable Error Boundary Component
 * Wraps components to catch and handle errors gracefully
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.props.onError?.(error, errorInfo);
  }

  reset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError && this.state.error) {
      if (this.props.fallback) {
        return this.props.fallback(this.state.error, this.reset);
      }

      const locale = this.props.locale || 'en';
      const isArabic = locale === 'ar';

      return (
        <div className="min-h-[400px] flex items-center justify-center bg-gradient-to-br from-zinc-900/50 to-black/50 rounded-lg border border-red-500/20">
          <div className="max-w-lg mx-auto px-6 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-red-500/20 to-red-500/5 border border-red-500/30 flex items-center justify-center">
                <AlertTriangle className="w-10 h-10 text-red-400" />
              </div>
            </div>

            <h2 className={`text-2xl md:text-3xl font-bold mb-4 text-red-400 ${isArabic ? 'font-arabic' : 'font-display'}`}>
              {isArabic ? 'حدث خطأ' : 'Something went wrong'}
            </h2>

            <p className={`text-base text-white/70 mb-6 ${isArabic ? 'font-arabic' : 'font-sans'}`}>
              {isArabic 
                ? 'عذراً، حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.'
                : 'Sorry, an unexpected error occurred. Please try again.'
              }
            </p>

            {process.env.NODE_ENV === 'development' && (
              <div className="mb-6 p-3 bg-red-900/20 border border-red-500/30 rounded-lg text-left">
                <p className="text-red-300 text-xs font-mono break-all">
                  {this.state.error.message}
                </p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <LuxuryButton 
                variant="primary" 
                size="md"
                onClick={this.reset}
                className={`${isArabic ? 'font-arabic' : 'font-sans'}`}
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                {isArabic ? 'إعادة المحاولة' : 'Try Again'}
              </LuxuryButton>
              
              <Link href={`/${locale}` as Route}>
                <LuxuryButton 
                  variant="outline" 
                  size="md"
                  className={`${isArabic ? 'font-arabic' : 'font-sans'}`}
                >
                  <Home className="w-4 h-4 mr-2" />
                  {isArabic ? 'العودة للرئيسية' : 'Back to Home'}
                </LuxuryButton>
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
