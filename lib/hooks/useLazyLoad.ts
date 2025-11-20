import { useState, useCallback } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';

interface UseLazyLoadOptions {
  threshold?: number;
  rootMargin?: string;
  enabled?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * Custom hook for lazy loading content
 * Combines intersection observer with loading/error states
 */
export function useLazyLoad({
  threshold = 0.1,
  rootMargin = '50px',
  enabled = true,
  onLoad,
  onError
}: UseLazyLoadOptions = {}) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const { isInView, containerRef } = useIntersectionObserver({
    threshold,
    rootMargin,
    enabled
  });

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    setIsLoaded(true);
    setError(false);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setError(true);
    onError?.();
  }, [onError]);

  const startLoading = useCallback(() => {
    if (!isLoading && !isLoaded && !error) {
      setIsLoading(true);
    }
  }, [isLoading, isLoaded, error]);

  const retry = useCallback(() => {
    setError(false);
    setIsLoaded(false);
    setIsLoading(false);
  }, []);

  return {
    isInView,
    isLoading,
    isLoaded,
    error,
    containerRef,
    handleLoad,
    handleError,
    startLoading,
    retry
  };
}
