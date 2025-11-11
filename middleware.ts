import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { i18n } from './lib/i18n-config';

const PUBLIC_FILE = /\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml|mp4|webm|pdf|json)$/i;

function getPreferredLocale(request: NextRequest): string {
  const accept = request.headers.get('accept-language') || '';
  const primary = accept.split(',')[0]?.split(';')[0]?.toLowerCase() || '';
  if (primary.startsWith('ar')) return 'ar';
  if (primary.startsWith('en')) return 'en';
  return i18n.defaultLocale;
}

function getLocale(request: NextRequest): string {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    return getPreferredLocale(request);
  }

  // Extract locale from pathname
  const segments = pathname.split('/');
  const localeFromPath = segments[1];
  
  // Validate locale
  if (i18n.locales.includes(localeFromPath as any)) {
    return localeFromPath;
  }
  
  return i18n.defaultLocale;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // تخطّي الملفات العامة و Next internals و الـ API
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    PUBLIC_FILE.test(pathname) ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml'
  ) {
    return NextResponse.next();
  }

  // تحويل الجذر إلى اللغة الافتراضية/المفضلة من المتصفح
  if (pathname === '/') {
    const preferred = getPreferredLocale(req);
    return NextResponse.redirect(new URL(`/${preferred}`, req.url));
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(req);
    const cleanPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
    return NextResponse.redirect(new URL(`/${locale}${cleanPath}`, req.url));
  }

  // Normalize paths that accidentally include two locale segments (e.g., /en/ar or /ar/en)
  {
    const segments = pathname.split('/').filter(Boolean);
    if (
      segments.length >= 2 &&
      i18n.locales.includes(segments[0] as any) &&
      i18n.locales.includes(segments[1] as any)
    ) {
      const rest = segments.slice(2).join('/');
      const target = `/${segments[1]}${rest ? `/${rest}` : ''}`;
      return NextResponse.redirect(new URL(target, req.url));
    }
  }

  // Generate a per-request nonce using Web Crypto API (Edge-compatible)
  const nonceArray = new Uint8Array(16);
  crypto.getRandomValues(nonceArray);
  // Convert to base64 using btoa (available in Edge runtime)
  const nonce = btoa(String.fromCharCode(...nonceArray));
  
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://www.googletagmanager.com https://www.google-analytics.com https://*.clarity.ms https://scripts.clarity.ms https://unpkg.com https://cdn.jsdelivr.net https://cdn.aframe.io https://api.propvr.tech https://my.matterport.com https://static.matterport.com https://cdn.pannellum.org https://ajax.googleapis.com https://www.youtube.com https://player.vimeo.com;
    style-src 'self' 'unsafe-inline' https://unpkg.com https://cdn.jsdelivr.net https://fonts.googleapis.com;
    img-src 'self' data: blob: https: https://images.ctfassets.net https://assets.ctfassets.net https://videos.ctfassets.net https://downloads.ctfassets.net https://cdn.properties.emaar.com https://properties.emaar.com https://sobharealty.com https://www.sobharealty.com https://www.nakheel.com https://nakheel-aut.sitefinity.cloud https://prod-cdn.damacproperties.com https://storage.googleapis.com https://i.ytimg.com https://res.cloudinary.com https://www.google-analytics.com https://*.google.com https://*.google.co.in https://*.clarity.ms;
    font-src 'self' data: https://fonts.gstatic.com;
    connect-src 'self' https://aframe.io https://www.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.clarity.ms https://api.propvr.tech https://storagecdn.propvr.tech https://cdn.propvr.tech https://propvr-in-31420.appspot.com https://firebasestorage.googleapis.com https://storagecdn.propvr.ai https://my.matterport.com https://static.matterport.com;
    media-src 'self' blob: https: https://videos.ctfassets.net https://assets.ctfassets.net https://www.youtube.com https://player.vimeo.com;
    frame-src 'self' https://www.youtube.com https://player.vimeo.com https://my.matterport.com https://www.google.com https://maps.google.com https://view.propvr.tech;
    child-src 'self' blob:;
    worker-src 'self' blob:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
  `.replace(/\n/g, ' ').trim();

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set('x-nonce', nonce);

  const res = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Set CSP and frame options on the response
  res.headers.set('Content-Security-Policy', cspHeader);
  res.headers.set('X-Frame-Options', 'SAMEORIGIN');

  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public assets
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml|mp4|webm|pdf|json)$).*)',
  ],
};
