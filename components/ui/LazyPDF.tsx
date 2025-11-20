'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import LoadingSpinner from './LoadingSpinner';
import LuxuryButton from './LuxuryButton';
import { useLazyLoad } from '@/lib/hooks/useLazyLoad';

interface LazyPDFProps {
  src: string;
  title?: string;
  className?: string;
  width?: string | number;
  height?: string | number;
  showDownload?: boolean;
  downloadText?: string;
}

export default function LazyPDF({
  src,
  title = 'PDF Document',
  className = '',
  width = '100%',
  height = '600px',
  showDownload = true,
  downloadText = 'Download PDF'
}: LazyPDFProps) {
  const {
    isInView,
    isLoading,
    isLoaded,
    error,
    containerRef,
    handleLoad,
    handleError,
    startLoading
  } = useLazyLoad({ rootMargin: '100px' });

  // Start loading when in view
  useEffect(() => {
    if (isInView && !isLoaded && !isLoading && !error) {
      startLoading();
    }
  }, [isInView, isLoaded, isLoading, error, startLoading]);

  const handleIframeLoad = () => {
    handleLoad();
  };

  const handleIframeError = () => {
    handleError();
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = src;
    link.download = title;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden border border-yellow-400/30 rounded-xl ${className}`}
      style={{ width, height }}
    >
      {/* Header with title and download button */}
      {(title || showDownload) && (
        <div className="flex items-center justify-between p-4 bg-black/20 border-b border-yellow-400/20">
          {title && (
            <h3 className="text-lg font-semibold text-yellow-400 truncate">
              {title}
            </h3>
          )}
          {showDownload && (
            <LuxuryButton
              variant="outline"
              size="sm"
              onClick={handleDownload}
              className="ml-4"
            >
              📥 {downloadText}
            </LuxuryButton>
          )}
        </div>
      )}

      {/* Content area */}
      <div className="relative" style={{ height: title || showDownload ? 'calc(100% - 72px)' : '100%' }}>
        {!isInView && (
          <div className="w-full h-full bg-gray-900/50 flex items-center justify-center">
            <div className="text-gray-400 text-center">
              <div className="text-4xl mb-2">📄</div>
              <p>PDF will load when visible</p>
              {showDownload && (
                <LuxuryButton
                  variant="primary"
                  size="md"
                  onClick={handleDownload}
                  className="mt-4"
                >
                  📥 {downloadText}
                </LuxuryButton>
              )}
            </div>
          </div>
        )}

        {isInView && (
          <>
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(17, 24, 39, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10
                }}
              >
                <div className="text-center">
                  <LoadingSpinner size="lg" />
                  <p className="text-white mt-4">Loading PDF...</p>
                </div>
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(17, 24, 39, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div className="text-center text-red-400">
                  <div className="text-4xl mb-2">⚠️</div>
                  <p className="mb-4">Failed to load PDF</p>
                  <LuxuryButton
                    variant="primary"
                    size="md"
                    onClick={handleDownload}
                  >
                    📥 {downloadText}
                  </LuxuryButton>
                </div>
              </motion.div>
            )}

            <iframe
              src={`${src}#toolbar=1&navpanes=1&scrollbar=1`}
              className={`w-full h-full transition-opacity duration-300 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              title={title}
              style={{ border: 'none' }}
            />
          </>
        )}
      </div>
    </div>
  );
}