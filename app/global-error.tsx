'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import type { Route } from 'next';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';

/**
 * Global Error Boundary - catches errors in the root layout
 * This file is required to be a Client Component
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error:', error);
  }, [error]);

  return (
    <html lang="en" dir="ltr">
      <body>
        <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white flex items-center justify-center">
          <div className="max-w-2xl mx-auto px-6 text-center">
            {/* Icon */}
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-red-500/20 to-red-500/5 border border-red-500/30 flex items-center justify-center">
                <AlertTriangle className="w-12 h-12 text-red-400" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-400">
              Something went wrong
            </h1>

            {/* Description */}
            <p className="text-xl text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
              Sorry, a critical error occurred. Please try refreshing the page or return to the home page.
            </p>

            {/* Error Details (Development only) */}
            {process.env.NODE_ENV === 'development' && (
              <div className="mb-8 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-left">
                <p className="text-red-300 text-sm font-mono break-all">
                  {error.message}
                </p>
                {error.digest && (
                  <p className="text-red-400 text-xs font-mono mt-2">
                    Digest: {error.digest}
                  </p>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={reset}
                className="px-6 py-3 bg-gradient-to-r from-gold via-gold-light to-gold text-black font-semibold rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-5 h-5" />
                Try Again
              </button>
              
              <Link 
                href={'/' as Route}
                className="px-6 py-3 border border-gold text-gold font-semibold rounded-lg hover:bg-gold/10 transition-all flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
