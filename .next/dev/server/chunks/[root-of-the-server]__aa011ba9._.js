module.exports = [
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/tags-manifest.external.js [external] (next/dist/server/lib/incremental-cache/tags-manifest.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/tags-manifest.external.js", () => require("next/dist/server/lib/incremental-cache/tags-manifest.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/lib/i18n-config.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/i18n-config.ts
__turbopack_context__.s([
    "i18n",
    ()=>i18n
]);
const i18n = {
    defaultLocale: 'ar',
    locales: [
        'ar',
        'en'
    ]
};
}),
"[project]/proxy.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "proxy",
    ()=>proxy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$config$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n-config.ts [middleware] (ecmascript)");
;
;
;
const PUBLIC_FILE = /\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml|mp4|webm|pdf|json)$/i;
function getPreferredLocale(request) {
    const accept = request.headers.get('accept-language') || '';
    const primary = accept.split(',')[0]?.split(';')[0]?.toLowerCase() || '';
    if (primary.startsWith('ar')) return 'ar';
    if (primary.startsWith('en')) return 'en';
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$config$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["i18n"].defaultLocale;
}
function getLocale(request) {
    // Check if there is any supported locale in the pathname
    const pathname = request.nextUrl.pathname;
    const pathnameIsMissingLocale = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$config$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["i18n"].locales.every((locale)=>!pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`);
    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        return getPreferredLocale(request);
    }
    // Extract locale from pathname
    const segments = pathname.split('/');
    const localeFromPath = segments[1];
    // Validate locale
    if (__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$config$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["i18n"].locales.includes(localeFromPath)) {
        return localeFromPath;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$config$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["i18n"].defaultLocale;
}
function proxy(req) {
    const { pathname } = req.nextUrl;
    // تخطّي الملفات العامة و Next internals و الـ API
    if (pathname.startsWith('/_next') || pathname.startsWith('/__nextjs') || pathname === '/__nextjs_launch-editor' || pathname === '/__nextjs_devtools_config' || pathname.startsWith('/api') || pathname.startsWith('/static') || PUBLIC_FILE.test(pathname) || pathname === '/favicon.ico' || pathname === '/robots.txt' || pathname === '/sitemap.xml') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    // تحويل الجذر إلى اللغة الافتراضية/المفضلة من المتصفح
    if (pathname === '/') {
        const preferred = getPreferredLocale(req);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL(`/${preferred}`, req.url));
    }
    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$config$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["i18n"].locales.every((locale)=>!pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`);
    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(req);
        const cleanPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL(`/${locale}${cleanPath}`, req.url));
    }
    // Normalize paths that accidentally include two locale segments (e.g., /en/ar or /ar/en)
    {
        const segments = pathname.split('/').filter(Boolean);
        if (segments.length >= 2 && __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$config$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["i18n"].locales.includes(segments[0]) && __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$config$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["i18n"].locales.includes(segments[1])) {
            const rest = segments.slice(2).join('/');
            const target = `/${segments[1]}${rest ? `/${rest}` : ''}`;
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL(target, req.url));
        }
    }
    // Generate a per-request nonce and set a strict CSP
    const nonce = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomBytes"])(16).toString('base64');
    const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' https://www.googletagmanager.com https://www.google-analytics.com https://www.clarity.ms https://scripts.clarity.ms https://unpkg.com https://cdn.jsdelivr.net https://ajax.googleapis.com https://player.vimeo.com;
    style-src 'self' 'unsafe-inline' https://unpkg.com https://cdn.jsdelivr.net https://fonts.googleapis.com;
    img-src 'self' data: blob: https://images.ctfassets.net https://assets.ctfassets.net https://videos.ctfassets.net https://downloads.ctfassets.net https://cdn.properties.emaar.com https://properties.emaar.com https://sobharealty.com https://www.sobharealty.com https://www.nakheel.com https://nakheel-aut.sitefinity.cloud https://prod-cdn.damacproperties.com https://storage.googleapis.com https://i.ytimg.com https://res.cloudinary.com https://www.google-analytics.com https://www.clarity.ms;
    font-src 'self' data: https://fonts.gstatic.com;
    connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://googletagmanager.com https://www.clarity.ms https://view.propvr.tech https://storagecdn.propvr.tech https://cdn.propvr.tech https://firebasestorage.googleapis.com https://my.matterport.com https://static.matterport.com;
    media-src 'self' blob: https: https://videos.ctfassets.net https://assets.ctfassets.net https://player.vimeo.com;
    frame-src 'self' https://player.vimeo.com https://my.matterport.com https://view.propvr.tech;
    child-src 'self' blob:;
    worker-src 'self' blob:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
  `.replace(/\n/g, ' ').trim();
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set('x-nonce', nonce);
    const res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next({
        request: {
            headers: requestHeaders
        }
    });
    // Set CSP and frame options on the response
    res.headers.set('Content-Security-Policy', cspHeader);
    res.headers.set('X-Frame-Options', 'SAMEORIGIN');
    return res;
}
const config = {
    matcher: [
        {
            // Match all request paths except for static assets and prefetches
            source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
            missing: [
                {
                    type: 'header',
                    key: 'next-router-prefetch'
                },
                {
                    type: 'header',
                    key: 'purpose',
                    value: 'prefetch'
                }
            ]
        }
    ]
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__aa011ba9._.js.map