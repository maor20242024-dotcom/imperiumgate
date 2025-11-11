'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function SplashScreen() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  useEffect(() => {
    // Detect route change
    if (pathname !== prevPathname) {
      setIsLoading(true);
      setPrevPathname(pathname);

      // Hide splash after animation
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, [pathname, prevPathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black animate-fadeIn">
      {/* Animated Logo Container */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gold/20 blur-[100px] rounded-full scale-150 animate-pulse-slow" />

        {/* Castle Icon */}
        <div className="relative animate-logo-scale">
          <span className="text-9xl md:text-[12rem] filter drop-shadow-[0_0_40px_rgba(212,175,55,0.8)] animate-logo-bounce">
            🏰
          </span>
        </div>

        {/* Animated Circles */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute w-32 h-32 border-4 border-gold/40 rounded-full animate-ping-slow" />
          <div className="absolute w-40 h-40 border-2 border-gold/25 rounded-full animate-ping-slower" />
          <div className="absolute w-48 h-48 border border-gold/15 rounded-full animate-ping-slowest" />
        </div>
      </div>
    </div>
  );
}
