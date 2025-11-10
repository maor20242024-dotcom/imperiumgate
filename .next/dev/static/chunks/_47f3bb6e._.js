(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/favorites.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFavorites",
    ()=>useFavorites
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const KEY = 'ig:favorites';
function useFavorites() {
    _s();
    const [ids, setIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFavorites.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            try {
                const raw = localStorage.getItem(KEY);
                if (raw) setIds(JSON.parse(raw));
            } catch  {}
        }
    }["useFavorites.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFavorites.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            try {
                localStorage.setItem(KEY, JSON.stringify(ids));
            } catch  {}
        }
    }["useFavorites.useEffect"], [
        ids
    ]);
    const toggle = (id)=>setIds((p)=>p.includes(id) ? p.filter((x)=>x !== id) : [
                ...p,
                id
            ]);
    const has = (id)=>ids.includes(id);
    const clear = ()=>setIds([]);
    return {
        ids,
        toggle,
        has,
        clear
    };
}
_s(useFavorites, "W+LFLXdRVT10pW2zZw1EM9fxQ74=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/compare.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCompare",
    ()=>useCompare
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const KEY = 'ig:compare';
function useCompare() {
    _s();
    const [ids, setIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCompare.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            try {
                const raw = localStorage.getItem(KEY);
                if (raw) setIds(JSON.parse(raw));
            } catch  {}
        }
    }["useCompare.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCompare.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            try {
                localStorage.setItem(KEY, JSON.stringify(ids));
            } catch  {}
        }
    }["useCompare.useEffect"], [
        ids
    ]);
    const add = (id)=>setIds((p)=>p.includes(id) ? p : [
                ...p,
                id
            ]);
    const remove = (id)=>setIds((p)=>p.filter((x)=>x !== id));
    const clear = ()=>setIds([]);
    return {
        ids,
        add,
        remove,
        clear
    };
}
_s(useCompare, "W+LFLXdRVT10pW2zZw1EM9fxQ74=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/format.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "currencyAED",
    ()=>currencyAED,
    "formatAED",
    ()=>formatAED,
    "formatArea",
    ()=>formatArea,
    "formatBedrooms",
    ()=>formatBedrooms,
    "proxify",
    ()=>proxify
]);
function formatAED(n, locale = 'ar') {
    if (typeof n !== 'number') return '—';
    const suffix = locale === 'ar' ? ' درهم' : ' AED';
    if (n >= 1_000_000) {
        return `${(n / 1_000_000).toFixed(1).replace(/\.0$/, '')}M${suffix}`;
    }
    return `${n.toLocaleString('en-US').replace(/\.\d+/, '')}${suffix}`;
}
function formatArea(min, max, unit = 'sqm', locale = 'ar') {
    const unitText = locale === 'ar' ? unit === 'sqm' ? 'م²' : 'قدم²' : unit;
    if (typeof min !== 'number' && typeof max !== 'number') return '—';
    if (typeof min === 'number' && typeof max === 'number' && max > min) {
        return `${min.toLocaleString('en-US')} – ${max.toLocaleString('en-US')} ${unitText}`;
    }
    const val = min ?? max;
    return `${val?.toLocaleString('en-US')} ${unitText}`;
}
function formatBedrooms(arr, locale = 'ar') {
    if (!arr) return '—';
    // If it's already a string, return it as-is (it's already formatted)
    if (typeof arr === 'string') {
        return arr;
    }
    // If it's an array but empty, return dash
    if (Array.isArray(arr) && !arr.length) return '—';
    // If it's an array, format it
    if (Array.isArray(arr)) {
        const suffix = locale === 'ar' ? ' غرف' : ' BR';
        return `${arr.join(', ')}${suffix}`;
    }
    return '—';
}
const proxify = (url)=>{
    if (!url) return url;
    // If it's already a local URL or data URL, return as-is
    if (url.startsWith('/') || url.startsWith('data:') || url.startsWith('blob:')) {
        return url;
    }
    // If missing protocol (e.g. 'youtu.be/...' or 'example.com/file'), assume https
    if (!/^([a-zA-Z]+:\/\/)/.test(url)) {
        url = `https://${url}`;
    }
    // Only proxy static media files from specific domains (ctfassets.net, amazonaws.com)
    // Do NOT proxy navigation links, 3D tour links, or other interactive content
    try {
        const urlObj = new URL(url);
        if (urlObj.protocol === 'https:' || urlObj.protocol === 'http:') {
            // Only proxy if it's a static media file from trusted CDN domains
            if (url.includes('ctfassets.net') || url.includes('amazonaws.com')) {
                return `/api/proxy/file?url=${encodeURIComponent(url)}`;
            }
            // For all other external URLs (PropVR, 3D tours, etc.), return as-is
            return url;
        }
    } catch (e) {
        // If URL parsing fails, return original
        console.warn('Failed to parse URL for proxying:', url);
    }
    return url;
};
const currencyAED = (n)=>{
    if (n === null || n === undefined) return '';
    return n.toLocaleString('en-US').replace(/\.\d+/, '') + ' AED';
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/i18n-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLocale",
    ()=>useLocale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useLocale() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    return params?.locale === 'en' ? 'en' : 'ar';
}
_s(useLocale, "+jVsTcECDRo3yq2d7EQxlN9Ixog=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/i18n-utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SUPPORTED_LOCALES",
    ()=>SUPPORTED_LOCALES,
    "localizeField",
    ()=>localizeField,
    "normalizeLocale",
    ()=>normalizeLocale,
    "t",
    ()=>t,
    "tx",
    ()=>tx
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use client";
const SUPPORTED_LOCALES = (("TURBOPACK compile-time value", "ar,en") ?? 'ar,en').split(',').map((s)=>s.trim().toLowerCase()).filter(Boolean);
_c = SUPPORTED_LOCALES;
function normalizeLocale(x) {
    return (x || '').toLowerCase().startsWith('ar') ? 'ar' : 'en';
}
function t(v, locale = 'ar') {
    if (!v) return '';
    if (typeof v === 'string') return v;
    return v[locale] || v.en || v.ar || '';
}
const tx = t;
function localizeField(value, locale) {
    if (!value) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
        return value[locale] || value.en || value.ar || Object.values(value)[0] || '';
    }
    return String(value);
}
var _c;
__turbopack_context__.k.register(_c, "SUPPORTED_LOCALES");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/routes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/routes.ts
__turbopack_context__.s([
    "buildHref",
    ()=>buildHref,
    "makeProjectHref",
    ()=>makeProjectHref,
    "routes",
    ()=>routes,
    "stringRoutes",
    ()=>stringRoutes
]);
const routes = {
    home: (locale)=>({
            pathname: '/[locale]',
            params: {
                locale
            }
        }),
    // Projects
    projectsIndex: (locale)=>({
            pathname: '/[locale]/projects',
            params: {
                locale
            }
        }),
    projectShow: (locale, developer, slug)=>({
            pathname: '/[locale]/projects/[developer]/[slug]',
            params: {
                locale,
                developer,
                slug
            }
        }),
    // Developers
    developersIndex: (locale)=>({
            pathname: '/[locale]/developers',
            params: {
                locale
            }
        }),
    developerShow: (locale, developer)=>({
            pathname: '/[locale]/developers/[developer]',
            params: {
                locale,
                developer
            }
        }),
    developerProjectsIndex: (locale, developer)=>({
            pathname: '/[locale]/developers/[developer]/projects',
            params: {
                locale,
                developer
            }
        }),
    developerCommunitiesIndex: (locale, developer)=>({
            pathname: '/[locale]/developers/[developer]/communities',
            params: {
                locale,
                developer
            }
        }),
    // Other pages (عدّل المسارات هنا لو كانت مختلفة فعليًا عندك)
    about: (locale)=>({
            pathname: '/[locale]/about',
            params: {
                locale
            }
        }),
    vision: (locale)=>({
            pathname: '/[locale]/vision',
            params: {
                locale
            }
        }),
    news: (locale)=>({
            pathname: '/[locale]/news',
            params: {
                locale
            }
        }),
    favorites: (locale)=>({
            pathname: '/[locale]/favorites',
            params: {
                locale
            }
        }),
    ai: (locale)=>({
            pathname: '/[locale]/ai',
            params: {
                locale
            }
        }),
    contact: (locale)=>({
            pathname: '/[locale]/contact',
            params: {
                locale
            }
        }),
    compare: (locale)=>({
            pathname: '/[locale]/compare',
            params: {
                locale
            }
        }),
    privacy: (locale)=>({
            pathname: '/[locale]/privacy',
            params: {
                locale
            }
        }),
    terms: (locale)=>({
            pathname: '/[locale]/terms',
            params: {
                locale
            }
        }),
    sitemap: (locale)=>({
            pathname: '/[locale]/sitemap',
            params: {
                locale
            }
        })
};
const stringRoutes = {
    home: (locale)=>`/${locale}`,
    projectsIndex: (locale)=>`/${locale}/projects`,
    projectShow: (locale, developer, slug)=>`/${locale}/projects/${developer}/${slug}`,
    developersIndex: (locale)=>`/${locale}/developers`,
    developerShow: (locale, developer)=>`/${locale}/developers/${developer}`,
    developerProjectsIndex: (locale, developer)=>`/${locale}/developers/${developer}/projects`,
    developerCommunitiesIndex: (locale, developer)=>`/${locale}/developers/${developer}/communities`,
    communityShow: (locale, developer, slug)=>`/${locale}/developers/${developer}/communities/${slug}`,
    about: (locale)=>`/${locale}/about`,
    vision: (locale)=>`/${locale}/vision`,
    news: (locale)=>`/${locale}/news`,
    favorites: (locale)=>`/${locale}/favorites`,
    ai: (locale)=>`/${locale}/ai`,
    contact: (locale)=>`/${locale}/contact`,
    compare: (locale)=>`/${locale}/compare`,
    privacy: (locale)=>`/${locale}/privacy`,
    terms: (locale)=>`/${locale}/terms`,
    sitemap: (locale)=>`/${locale}/sitemap`
};
function makeProjectHref(locale, developer, slug) {
    return `/${locale}/projects/${developer}/${slug}`;
}
function buildHref(locale, item) {
    if (item.type === 'project' && item.slug) {
        return stringRoutes.projectShow(locale, item.developer, item.slug);
    }
    if (item.type === 'community' && item.slug) {
        return stringRoutes.communityShow(locale, item.developer, item.slug);
    }
    // developer card (or fallback)
    return stringRoutes.developerShow(locale, item.developer);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/i18n/ar_glossary.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"price":{"ar":"السعر","en":"Price"},"area":{"ar":"المساحة","en":"Area"},"bedrooms":{"ar":"الغرف","en":"Bedrooms"},"poi":{"ar":"نقاط الاهتمام","en":"Points of Interest"}});}),
"[project]/lib/i18n/area_travel_times_km_min.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"matrix":[{"from":"Dubai Harbour","to":"Mall of the Emirates","km":15,"min":20},{"from":"Dubai Harbour","to":"Palm Jumeirah","km":10,"min":12},{"from":"Dubai Marina","to":"Dubai International Airport","km":40,"min":40},{"from":"DAMAC Hills","to":"Dubai Marina","km":25,"min":30}]});}),
"[project]/lib/i18n/areas_coordinates.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"Dubai Harbour":{"lat":25.0926,"lon":55.1437},"Dubai Marina":{"lat":25.08,"lon":55.14},"Palm Jumeirah":{"lat":25.112,"lon":55.1386},"Mall of the Emirates":{"lat":25.118,"lon":55.2},"DAMAC Hills":{"lat":25.002,"lon":55.27},"Dubai International Airport":{"lat":25.2532,"lon":55.3657}});}),
"[project]/lib/i18n/distance_units.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"units":{"km":{"label":{"en":"km","ar":"كم"},"format":{"en":"{v} km","ar":"{v} كم"}},"min":{"label":{"en":"min","ar":"دقيقة"},"format":{"en":"{v} min","ar":"{v} دقيقة"}}}});}),
"[project]/lib/i18n/dubai_areas_en_ar.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"areas":[{"slug":"dubai-harbour","en":"Dubai Harbour","ar":"ميناء دبي"},{"slug":"dubai-marina","en":"Dubai Marina","ar":"دبي مارينا"},{"slug":"palm-jumeirah","en":"Palm Jumeirah","ar":"نخلة جميرا"},{"slug":"damac-hills","en":"DAMAC Hills","ar":"داماك هيلز"}]});}),
"[project]/lib/i18n/glossary_ar_en.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"terms":[{"en":"apartment","ar":"شقة"},{"en":"villa","ar":"فيلا"},{"en":"townhouse","ar":"تاونهاوس"},{"en":"community","ar":"مجتمع"},{"en":"landmark","ar":"معلم"}]});}),
"[project]/lib/i18n/poi_categories_en_ar.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"categories":[{"key":"shopping","en":"Shopping","ar":"تسوق"},{"key":"landmark","en":"Landmark","ar":"معلم"},{"key":"community","en":"Community","ar":"مجتمع"},{"key":"airport","en":"Airport","ar":"مطار"},{"key":"entertainment","en":"Entertainment","ar":"ترفيه"},{"key":"education","en":"Education","ar":"تعليم"}]});}),
"[project]/lib/i18n/poi_landmarks_en_ar.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"landmarks":[{"slug":"palm-jumeirah","en":"Palm Jumeirah","ar":"نخلة جميرا","lat":25.112,"lon":55.1386},{"slug":"dubai-marina-mall","en":"Dubai Marina Mall","ar":"دبي مارينا مول","lat":25.078,"lon":55.14},{"slug":"mall-of-the-emirates","en":"Mall of the Emirates","ar":"مول الإمارات","lat":25.118,"lon":55.2},{"slug":"jumeirah-village-circle","en":"Jumeirah Village Circle","ar":"جميرا فيليج سيركل","lat":25.061,"lon":55.22},{"slug":"dubai-international-airport","en":"Dubai International Airport","ar":"مطار دبي الدولي","lat":25.2532,"lon":55.3657},{"slug":"ibn-battuta-mall","en":"Ibn Battuta Mall","ar":"ابن بطوطة مول","lat":25.045,"lon":55.118},{"slug":"img-worlds-of-adventure","en":"IMG Worlds of Adventure","ar":"عالم آي إم جي للمغامرات","lat":25.1384,"lon":55.2866},{"slug":"skydive-dubai","en":"Skydive Dubai","ar":"سكاي دايف دبي","lat":25.092,"lon":55.1395},{"slug":"aud","en":"American University of Dubai","ar":"الجامعة الأمريكية في دبي","lat":25.0912,"lon":55.1571},{"slug":"ain-dubai","en":"Ain Dubai","ar":"عين دبي","lat":25.0872,"lon":55.139}]});}),
"[project]/lib/i18n/project_types_glossary.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"types":[{"key":"apartment","en":"Apartment","ar":"شقة"},{"key":"villa","en":"Villa","ar":"فيلا"},{"key":"townhouse","en":"Townhouse","ar":"تاونهاوس"},{"key":"tower","en":"Tower","ar":"برج"},{"key":"community","en":"Community","ar":"مجتمع"}],"bedrooms":[1,2,3,4,5,6]});}),
"[project]/lib/i18n/transport_profiles.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"profiles":{"urban":{"avgKph":45},"highway":{"avgKph":80}},"phrases":{"en":"~{km} km (≈{min} min) from {landmark}","ar":"يبعد ~{km} كم (≈{min} دقيقة) عن {landmark}"}});}),
"[project]/lib/i18n/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "I18N",
    ()=>I18N,
    "distanceKm",
    ()=>distanceKm,
    "estimateMinutes",
    ()=>estimateMinutes,
    "formatDistancePhrase",
    ()=>formatDistancePhrase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$ar_glossary$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/lib/i18n/ar_glossary.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$area_travel_times_km_min$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/lib/i18n/area_travel_times_km_min.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$areas_coordinates$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/lib/i18n/areas_coordinates.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$distance_units$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/lib/i18n/distance_units.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dubai_areas_en_ar$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/lib/i18n/dubai_areas_en_ar.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$glossary_ar_en$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/lib/i18n/glossary_ar_en.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$poi_categories_en_ar$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/lib/i18n/poi_categories_en_ar.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$poi_landmarks_en_ar$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/lib/i18n/poi_landmarks_en_ar.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$project_types_glossary$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/lib/i18n/project_types_glossary.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$transport_profiles$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/lib/i18n/transport_profiles.json (json)");
;
;
;
;
;
;
;
;
;
;
const I18N = {
    arGloss: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$ar_glossary$2e$json__$28$json$29$__["default"],
    travel: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$area_travel_times_km_min$2e$json__$28$json$29$__["default"],
    coords: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$areas_coordinates$2e$json__$28$json$29$__["default"],
    units: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$distance_units$2e$json__$28$json$29$__["default"],
    areas: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$dubai_areas_en_ar$2e$json__$28$json$29$__["default"],
    biGloss: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$glossary_ar_en$2e$json__$28$json$29$__["default"],
    poiCats: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$poi_categories_en_ar$2e$json__$28$json$29$__["default"],
    poiList: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$poi_landmarks_en_ar$2e$json__$28$json$29$__["default"],
    types: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$project_types_glossary$2e$json__$28$json$29$__["default"],
    transport: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$transport_profiles$2e$json__$28$json$29$__["default"]
};
function distanceKm(a, b) {
    const toRad = (deg)=>deg * Math.PI / 180;
    const R = 6371; // Earth radius in km
    const dLat = toRad(b.lat - a.lat);
    const dLon = toRad(b.lon - a.lon);
    const lat1 = toRad(a.lat);
    const lat2 = toRad(b.lat);
    const sinDLat = Math.sin(dLat / 2);
    const sinDLon = Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon), Math.sqrt(1 - (sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon)));
    return Math.max(0, R * c);
}
function estimateMinutes(km, profile = 'urban') {
    const kph = I18N.transport?.profiles?.[profile]?.avgKph ?? (profile === 'highway' ? 80 : 45);
    const minutes = km / Math.max(1, kph) * 60;
    return Math.round(minutes);
}
function formatDistancePhrase(locale, km, min, landmark) {
    const tpl = I18N.transport?.phrases?.[locale] ?? (locale === 'ar' ? 'يبعد ~{km} كم (≈{min} دقيقة) عن {landmark}' : '~{km} km (≈{min} min) from {landmark}');
    const kmStr = (Math.round(km * 10) / 10).toString();
    const minStr = Math.max(1, Math.round(min)).toString();
    return tpl.replace('{km}', kmStr).replace('{min}', minStr).replace('{landmark}', landmark);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ProjectCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LuxuryButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$compare$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/compare.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$favorites$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/favorites.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/routes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
function ProjectCard({ project }) {
    _s();
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    // Safe data extraction with fallbacks
    const title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(project?.projectName, locale) || project?.slug || (locale === 'ar' ? 'مشروع غير محدد' : 'Unnamed Project');
    const subtitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tx"])(project?.area, locale) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tx"])(project?.location, locale) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tx"])(project?.city, locale) || '';
    const img = project?.heroImage || project?.galleryImages?.[0];
    // Safe price calculation
    const hasMinPrice = project?.minPriceAED && project.minPriceAED > 0;
    const hasMaxPrice = project?.maxPriceAED && project.maxPriceAED > 0;
    const price = hasMinPrice && hasMaxPrice && project.maxPriceAED && project.minPriceAED && project.maxPriceAED > project.minPriceAED ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAED"])(project.minPriceAED, locale)} – ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAED"])(project.maxPriceAED, locale)}` : hasMinPrice && project.minPriceAED ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAED"])(project.minPriceAED, locale) : hasMaxPrice && project.maxPriceAED ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatAED"])(project.maxPriceAED, locale) : null;
    // Safe area calculation
    const hasAreaSqmt = project?.minAreaSqmt && project.minAreaSqmt > 0 || project?.maxAreaSqmt && project.maxAreaSqmt > 0;
    const hasAreaSqft = project?.minAreaSqft && project.minAreaSqft > 0 || project?.maxAreaSqft && project.maxAreaSqft > 0;
    const area = hasAreaSqmt ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatArea"])(project.minAreaSqmt, project.maxAreaSqmt, 'sqm', locale) : hasAreaSqft ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatArea"])(project.minAreaSqft, project.maxAreaSqft, 'sqft', locale) : null;
    // Safe bedrooms formatting
    const bedrooms = project?.bedrooms ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatBedrooms"])(project.bedrooms, locale) : null;
    // Compute POI phrases (top 3) using I18N helpers when possible
    const poiPhrases = (()=>{
        const pois = Array.isArray(project?.mapPointsOfInterest) ? project.mapPointsOfInterest.slice(0, 3) : [];
        const projCoords = typeof project?.latitude === 'number' && typeof project?.longitude === 'number' ? {
            lat: project.latitude,
            lon: project.longitude
        } : null;
        return pois.map((poi)=>{
            const nm = typeof poi?.name === 'string' ? poi.name : poi?.name?.[locale] || poi?.name?.en || '';
            let km = 0;
            if (poi?.coordinates && typeof poi.coordinates.lat === 'number' && typeof poi.coordinates.lon === 'number' && projCoords) {
                km = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["distanceKm"])(projCoords, {
                    lat: poi.coordinates.lat,
                    lon: poi.coordinates.lon
                });
            } else if (typeof poi?.distance === 'string') {
                const m = poi.distance.match(/([0-9]+(?:\.[0-9]+)?)\s*km/i);
                km = m ? parseFloat(m[1]) : 0;
            } else if (typeof poi?.distance?.en === 'string' || typeof poi?.distance?.ar === 'string') {
                const dStr = (poi.distance[locale] || poi.distance.en || '').toString();
                const m = dStr.match(/([0-9]+(?:\.[0-9]+)?)\s*km/i);
                km = m ? parseFloat(m[1]) : 0;
            }
            const minutes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["estimateMinutes"])(km, 'urban');
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDistancePhrase"])(locale, Math.max(0, km), Math.max(1, minutes), nm);
        }).filter(Boolean);
    })();
    const loc = (locale || 'ar').toString();
    const rawSlug = project?.slug && String(project.slug).trim() || ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(project?.projectName, locale)?.toString().trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]+/g, '') ?? '');
    const slug = rawSlug;
    // Robust developer segment handling: accept string or object { slug }
    const devSlug = (()=>{
        const d = project?.developer;
        if (typeof d === 'string') return d.trim();
        if (d && typeof d.slug === 'string') return d.slug.trim();
        return 'emaar';
    })();
    const hrefStr = slug ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildHref"])(loc, {
        type: 'project',
        developer: devSlug,
        slug
    }) : `/${loc}/projects`;
    const href = hrefStr;
    // Debug logging
    if ("TURBOPACK compile-time truthy", 1) {
        // eslint-disable-next-line no-console
        console.debug('ProjectCard href =>', hrefStr, {
            devSlug,
            slug
        });
    }
    const favorites = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$favorites$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFavorites"])();
    const compare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$compare$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompare"])();
    const isCompared = compare.ids.includes(project.id || project.slug);
    // Simplified state
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ...{
            whileHover: {
                y: -4
            },
            transition: {
                duration: 0.2,
                ease: 'easeOut'
            },
            onHoverStart: ()=>setIsHovered(true),
            onHoverEnd: ()=>setIsHovered(false),
            className: 'group relative flex flex-col justify-between rounded-2xl overflow-hidden border border-gold/30 bg-black/90 hover:shadow-[0_0_20px_rgba(107,90,43,0.2)] hover:border-gold-800 transition-all duration-700 opacity-0 animate-fade-in h-[520px]'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-2xl bg-gradient-to-r from-gold/5 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/ProjectCard.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: href,
                className: "block relative overflow-hidden",
                prefetch: false,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-44 w-full overflow-hidden",
                    children: img ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: img,
                                alt: title,
                                width: 400,
                                height: 176,
                                className: "h-44 w-full object-cover transition-all duration-200",
                                style: {
                                    filter: isHovered ? 'brightness(1.1)' : 'brightness(1)'
                                },
                                sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectCard.tsx",
                                lineNumber: 147,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectCard.tsx",
                                lineNumber: 157,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-44 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-gold/30 text-4xl",
                            children: "🏢"
                        }, void 0, false, {
                            fileName: "[project]/components/ProjectCard.tsx",
                            lineNumber: 161,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectCard.tsx",
                        lineNumber: 160,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ProjectCard.tsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ProjectCard.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-3 right-3 flex gap-2 z-10",
                children: [
                    project?.goldenVisaEligible ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] px-2 py-1 rounded-full bg-gold/30 text-gold border border-gold/40 shadow backdrop-blur-sm",
                        children: locale === 'ar' ? 'تأشيرة ذهبية' : 'Golden Visa'
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectCard.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        "aria-label": "favorite",
                        onClick: ()=>favorites.toggle(project.id || project.slug),
                        variant: favorites.has(project.id || project.slug) ? 'secondary' : 'outline',
                        size: "sm",
                        className: "!h-9 !w-9 !p-0 rounded-full backdrop-blur-sm hover:scale-105 transition-transform duration-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                color: favorites.has(project.id || project.slug) ? '#FFD700' : '#D4AF37'
                            },
                            children: "★"
                        }, void 0, false, {
                            fileName: "[project]/components/ProjectCard.tsx",
                            lineNumber: 182,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectCard.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        "aria-label": "compare",
                        onClick: ()=>isCompared ? compare.remove(project.id || project.slug) : compare.add(project.id || project.slug),
                        variant: isCompared ? 'secondary' : 'outline',
                        size: "sm",
                        className: "!h-9 !w-9 !p-0 rounded-full backdrop-blur-sm hover:scale-105 transition-transform duration-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                color: isCompared ? '#FFD700' : '#D4AF37'
                            },
                            children: "⚖️"
                        }, void 0, false, {
                            fileName: "[project]/components/ProjectCard.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectCard.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProjectCard.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col justify-between h-[calc(100%-11rem)] p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: href,
                                className: "block",
                                prefetch: false,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: `luxury-title text-lg gold-gradient-static luxury-text-shadow leading-snug line-clamp-2 hover:text-gold transition-colors duration-200 ${locale === 'ar' ? 'font-arabic' : 'font-display'}`,
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProjectCard.tsx",
                                        lineNumber: 203,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `mt-1 text-xs text-gray-400 ${locale === 'ar' ? 'font-arabic' : 'font-sans'}`,
                                        children: subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProjectCard.tsx",
                                        lineNumber: 210,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `mt-3 text-sm text-gray-300 line-clamp-2 ${locale === 'ar' ? 'font-arabic' : 'font-sans'}`,
                                        children: String((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(project.summary, locale) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(project.description, locale) || '').slice(0, 140)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProjectCard.tsx",
                                        lineNumber: 213,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ProjectCard.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this),
                            poiPhrases.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: `mt-3 space-y-1 text-[11px] text-gray-400 ${locale === 'ar' ? 'font-arabic' : 'font-sans'}`,
                                children: poiPhrases.map((p, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "• ",
                                            p
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/components/ProjectCard.tsx",
                                        lineNumber: 223,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectCard.tsx",
                                lineNumber: 221,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProjectCard.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            (price || area || bedrooms) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `mt-4 grid gap-2 text-xs ${[
                                    price,
                                    area,
                                    bedrooms
                                ].filter(Boolean).length === 1 ? 'grid-cols-1' : [
                                    price,
                                    area,
                                    bedrooms
                                ].filter(Boolean).length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`,
                                children: [
                                    price && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-lg bg-zinc-900/70 px-3 py-2 border border-zinc-700/50 hover:border-gold/30 hover:bg-white/5 transition-all duration-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-gray-400",
                                                children: locale === 'ar' ? 'السعر' : 'Price'
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProjectCard.tsx",
                                                lineNumber: 243,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-semibold text-white/90",
                                                children: price
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProjectCard.tsx",
                                                lineNumber: 244,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProjectCard.tsx",
                                        lineNumber: 242,
                                        columnNumber: 17
                                    }, this),
                                    area && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-lg bg-zinc-900/70 px-3 py-2 border border-zinc-700/50 hover:border-gold/30 hover:bg-white/5 transition-all duration-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-gray-400",
                                                children: locale === 'ar' ? 'المساحة' : 'Area'
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProjectCard.tsx",
                                                lineNumber: 249,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-semibold text-white/90",
                                                children: area
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProjectCard.tsx",
                                                lineNumber: 250,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProjectCard.tsx",
                                        lineNumber: 248,
                                        columnNumber: 17
                                    }, this),
                                    bedrooms && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-lg bg-zinc-900/70 px-3 py-2 border border-zinc-700/50 hover:border-gold/30 hover:bg-white/5 transition-all duration-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-gray-400",
                                                children: locale === 'ar' ? 'الغرف' : 'Bedrooms'
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProjectCard.tsx",
                                                lineNumber: 255,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-semibold text-white/90",
                                                children: bedrooms
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProjectCard.tsx",
                                                lineNumber: 256,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProjectCard.tsx",
                                        lineNumber: 254,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ProjectCard.tsx",
                                lineNumber: 232,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: href,
                                className: "mt-4 block",
                                prefetch: false,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    variant: "primary",
                                    size: "md",
                                    fullWidth: true,
                                    className: `${locale === 'ar' ? 'font-arabic' : 'font-sans'} hover:scale-[1.02] transition-transform duration-200`,
                                    children: locale === 'ar' ? 'عرض التفاصيل' : 'View Details'
                                }, void 0, false, {
                                    fileName: "[project]/components/ProjectCard.tsx",
                                    lineNumber: 263,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectCard.tsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProjectCard.tsx",
                        lineNumber: 229,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProjectCard.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProjectCard.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_s(ProjectCard, "mnL9CZKpCGdGnCYcCcRp3Eg727E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$favorites$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFavorites"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$compare$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompare"]
    ];
});
_c = ProjectCard;
var _c;
__turbopack_context__.k.register(_c, "ProjectCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/favorites/FavoritesClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FavoritesClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$favorites$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/favorites.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProjectCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LuxuryButton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function FavoritesClient({ projects }) {
    _s();
    const { ids, clear } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$favorites$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFavorites"])();
    const items = projects.filter((p)=>ids.includes(p.id || p.slug));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-6xl mx-auto px-6 py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-extrabold text-gold-grad",
                        children: "المفضلة"
                    }, void 0, false, {
                        fileName: "[project]/components/favorites/FavoritesClient.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        variant: "outline",
                        size: "sm",
                        onClick: clear,
                        children: "مسح"
                    }, void 0, false, {
                        fileName: "[project]/components/favorites/FavoritesClient.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/favorites/FavoritesClient.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8",
                children: items.map((p, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        project: p
                    }, `${p.id || `${p.developer || 'dev'}-${p.slug || 'unknown'}`}-${idx}`, false, {
                        fileName: "[project]/components/favorites/FavoritesClient.tsx",
                        lineNumber: 18,
                        columnNumber: 5
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/favorites/FavoritesClient.tsx",
                lineNumber: 16,
                columnNumber: 3
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/favorites/FavoritesClient.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(FavoritesClient, "IrznV2Ge5tZs7TbSrdZD97c03qM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$favorites$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFavorites"]
    ];
});
_c = FavoritesClient;
var _c;
__turbopack_context__.k.register(_c, "FavoritesClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_47f3bb6e._.js.map