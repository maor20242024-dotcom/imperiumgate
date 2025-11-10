import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  typedRoutes: true,
  // Ensure Next.js traces files from the correct project root
  outputFileTracingRoot: __dirname,
  images: {
    // Allow local proxy route with query strings for next/image
    // This fixes: `next/image` Un-configured localPatterns for /api/proxy/file?url=...
    localPatterns: [
      {
        pathname: '/api/proxy/file',
        // Omitting `search` allows any query string (e.g., ?url=...)
      },
      {
        pathname: '/images/**',
      },
      {
        pathname: '/media/**',
      },
      {
        pathname: '/brand/**',
        search: '',
      },
    ],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.ctfassets.net' },
      { protocol: 'https', hostname: 'videos.ctfassets.net' },
      { protocol: 'https', hostname: 'assets.ctfassets.net' },
      { protocol: 'https', hostname: 'zoq5l15g49wj.cdn.contentful.com' },
      // Developer and CDN domains for new data files
      { protocol: 'https', hostname: 'cdn.properties.emaar.com' },
      { protocol: 'https', hostname: 'properties.emaar.com' },
      { protocol: 'https', hostname: 'sobharealty.com' },
      { protocol: 'https', hostname: 'www.sobharealty.com' },
      { protocol: 'https', hostname: 'nakheel.com' },
      { protocol: 'https', hostname: 'www.nakheel.com' },
      { protocol: 'https', hostname: 'nakheel-aut.sitefinity.cloud' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'storage.googleapis.com' },
      { protocol: 'https', hostname: 'i.ytimg.com' },

      { protocol: 'https', hostname: 'storagecdn.propvr.tech' },
      { protocol: 'https', hostname: 'cdn.propvr.tech' },
      { protocol: 'https', hostname: 'firebasestorage.googleapis.com' },
      { protocol: 'https', hostname: 'my.matterport.com' },
      { protocol: 'https', hostname: 'static.matterport.com' },
      { protocol: 'https', hostname: 'cdn.pannellum.org' },
      { protocol: 'https', hostname: 'cdn.jsdelivr.net' },
      { protocol: 'https', hostname: 'ajax.googleapis.com' },
      { protocol: 'https', hostname: 'www.googletagmanager.com' },
      { protocol: 'https', hostname: 'www.google-analytics.com' },
      { protocol: 'https', hostname: '*.google-analytics.com' },
      { protocol: 'https', hostname: '*.analytics.google.com' },
      { protocol: 'https', hostname: '*.googletagmanager.com' },
      { protocol: 'https', hostname: '*.google.com' },
      { protocol: 'https', hostname: '*.google.co.in' },
      { protocol: 'https', hostname: '*.clarity.ms' },
      { protocol: 'https', hostname: 'scripts.clarity.ms' },
      { protocol: 'https', hostname: 'www.clarity.ms' },
    ],
    // إعدادات تحسين الصور
    deviceSizes: [480, 768, 1024, 1366, 1600, 1920],
    imageSizes: [128, 256, 384],
    formats: ['image/avif', 'image/webp'],
  },
  
  reactStrictMode: true,
  poweredByHeader: false,
  
  // Security headers - CSP handled in proxy, enable Permissions-Policy
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Permissions-Policy: Restrict features
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
          // Standard security headers
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Cross-Origin-Embedder-Policy', value: 'unsafe-none' },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Cross-Origin-Resource-Policy', value: 'cross-origin' },
        ],
      },
    ];
  },
  
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['swiper', 'framer-motion', 'lucide-react'],
  },
  
  // Compression and optimization
  compress: true,
};
export default nextConfig;
