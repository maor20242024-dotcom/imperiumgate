'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import LoadingSpinner from './LoadingSpinner';
import LuxuryButton from './LuxuryButton';
import { useLazyLoad } from '@/lib/hooks/useLazyLoad';

interface LazyMapProps {
  children: React.ReactNode;
  className?: string;
  width?: string | number;
  height?: string | number;
  placeholder?: React.ReactNode;
  loadingText?: string;
  errorText?: string;
  retryText?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export default function LazyMap({
  children,
  className = '',
  width = '100%',
  height = '400px',
  placeholder,
  loadingText = 'Loading map...',
  errorText = 'Failed to load map',
  retryText = 'Retry',
  onLoad,
  onError
}: LazyMapProps) {
  const {
    isInView,
    isLoading,
    isLoaded,
    error,
    containerRef,
    handleLoad,
    startLoading,
    retry
  } = useLazyLoad({ 
    rootMargin: '100px',
    onLoad,
    onError 
  });

  // Start loading when in view
  useEffect(() => {
    if (isInView && !isLoaded && !isLoading && !error) {
      startLoading();
      
      // Simulate map loading time
      const timer = setTimeout(() => {
        handleLoad();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isInView, isLoaded, isLoading, error, startLoading, handleLoad]);

  const handleRetry = () => {
    retry();
    
    // Retry loading
    const timer = setTimeout(() => {
      handleLoad();
    }, 1000);

    return () => clearTimeout(timer);
  };

  const defaultPlaceholder = (
    <div className="w-full h-full bg-gray-900/50 flex items-center justify-center">
      <div className="text-gray-400 text-center">
        <div className="text-4xl mb-2">🗺️</div>
        <p>Map will load when visible</p>
      </div>
    </div>
  );

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-xl border border-yellow-400/30 ${className}`}
      style={{ width, height }}
    >
      {!isInView && (placeholder || defaultPlaceholder)}

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
                <p className="text-white mt-4">{loadingText}</p>
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
                justifyContent: 'center',
                zIndex: 10
              }}
            >
              <div className="text-center text-red-400">
                <div className="text-4xl mb-2">⚠️</div>
                <p className="mb-4">{errorText}</p>
                <LuxuryButton
                  variant="primary"
                  size="md"
                  onClick={handleRetry}
                >
                  🔄 {retryText}
                </LuxuryButton>
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ width: '100%', height: '100%' }}
          >
            {isLoaded && children}
          </motion.div>
        </>
      )}
    </div>
  );
}