module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/[locale]/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/[locale]/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/[locale]/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/[locale]/loading.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/[locale]/template.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/[locale]/template.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/[locale]/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/[locale]/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/[locale]/developers/error.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/[locale]/developers/error.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/[locale]/developers/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/[locale]/developers/loading.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[project]/lib/data/server.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "listAllProjectsFolderFirst",
    ()=>listAllProjectsFolderFirst,
    "listCommunityProjectSlugs",
    ()=>listCommunityProjectSlugs,
    "listCommunitySlugs",
    ()=>listCommunitySlugs,
    "listDevelopers",
    ()=>listDevelopers,
    "listProjectSlugs",
    ()=>listProjectSlugs,
    "readCommunityData",
    ()=>readCommunityData,
    "readCommunityProjectData",
    ()=>readCommunityProjectData,
    "readDeveloperProfile",
    ()=>readDeveloperProfile,
    "readProjectData",
    ()=>readProjectData
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
async function listDevelopers() {
    const dir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'public', 'data');
    const entries = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].readdir(dir, {
        withFileTypes: true
    }).catch(()=>[]);
    return entries.filter((e)=>e.isDirectory() && !String(e.name).startsWith('_')).map((e)=>e.name);
}
async function readJsonIfExists(filePath) {
    try {
        const content = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].readFile(filePath, 'utf8');
        return JSON.parse(content);
    } catch  {
        return null;
    }
}
async function listProjectSlugs(developer) {
    const base = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'public', 'data', developer, 'projects');
    const entries = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].readdir(base, {
        withFileTypes: true
    }).catch(()=>[]);
    const dirs = entries.filter((e)=>e.isDirectory()).map((e)=>e.name);
    const files = entries.filter((e)=>e.isFile() && e.name.endsWith('.json')).map((e)=>e.name.replace(/\.json$/i, ''));
    return Array.from(new Set([
        ...dirs,
        ...files
    ])).sort();
}
async function listCommunitySlugs(developer) {
    const base = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'public', 'data', developer, 'communities');
    const entries = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].readdir(base, {
        withFileTypes: true
    }).catch(()=>[]);
    const dirs = entries.filter((e)=>e.isDirectory()).map((e)=>e.name);
    const files = entries.filter((e)=>e.isFile() && e.name.endsWith('.json')).map((e)=>e.name.replace(/\.json$/i, ''));
    return Array.from(new Set([
        ...dirs,
        ...files
    ])).sort();
}
async function readProjectData(developer, slug) {
    const base = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'public', 'data', developer, 'projects');
    const folderPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(base, slug, 'index.json');
    const flatPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(base, `${slug}.json`);
    const [fromFolder, fromFlat] = await Promise.all([
        readJsonIfExists(folderPath),
        readJsonIfExists(flatPath)
    ]);
    if (fromFolder && fromFlat) return {
        ...fromFlat,
        ...fromFolder
    };
    return fromFolder || fromFlat || null;
}
async function readCommunityData(developer, slug) {
    const base = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'public', 'data', developer, 'communities');
    const folderPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(base, slug, 'index.json');
    const flatPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(base, `${slug}.json`);
    const [fromFolder, fromFlat] = await Promise.all([
        readJsonIfExists(folderPath),
        readJsonIfExists(flatPath)
    ]);
    if (fromFolder && fromFlat) return {
        ...fromFlat,
        ...fromFolder
    };
    return fromFolder || fromFlat || null;
}
async function listCommunityProjectSlugs(developer, community) {
    const dir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'public', 'data', developer, 'communities', community, 'projects');
    const entries = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].readdir(dir, {
        withFileTypes: true
    }).catch(()=>[]);
    const dirs = entries.filter((e)=>e.isDirectory()).map((e)=>e.name);
    const files = entries.filter((e)=>e.isFile() && e.name.endsWith('.json')).map((e)=>e.name.replace(/\.json$/i, ''));
    return Array.from(new Set([
        ...dirs,
        ...files
    ])).sort();
}
async function readCommunityProjectData(developer, community, slug) {
    const base = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'public', 'data', developer, 'communities', community, 'projects');
    const folderPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(base, slug, 'index.json');
    const flatPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(base, `${slug}.json`);
    const [fromFolder, fromFlat] = await Promise.all([
        readJsonIfExists(folderPath),
        readJsonIfExists(flatPath)
    ]);
    if (fromFolder && fromFlat) return {
        ...fromFlat,
        ...fromFolder
    };
    return fromFolder || fromFlat || null;
}
async function listAllProjectsFolderFirst() {
    const dataRoot = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'public', 'data');
    const out = [];
    // Normalize media-related fields to ensure strings for next/image
    function normalizeProject(project, developerKey) {
        const p = {
            ...project
        };
        const pickUrl = (v)=>{
            if (!v) return undefined;
            if (typeof v === 'string') return v;
            if (typeof v === 'object') {
                if (typeof v.src === 'string') return v.src;
                if (typeof v.url === 'string') return v.url;
            }
            return undefined;
        };
        const hero = pickUrl(p.heroImage) || (Array.isArray(p.galleryImages) ? pickUrl(p.galleryImages[0]) : undefined);
        if (hero) p.heroImage = hero;
        if (Array.isArray(p.galleryImages)) {
            p.galleryImages = p.galleryImages.map((g)=>pickUrl(g)).filter((s)=>typeof s === 'string' && s.trim());
        }
        // Ensure developer is a string key (folder name)
        p.developer = developerKey;
        // Ensure projectName shape stays intact; no changes here
        return p;
    }
    const devEntries = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].readdir(dataRoot, {
        withFileTypes: true
    }).catch(()=>[]);
    const developers = devEntries.filter((d)=>d.isDirectory() && !String(d.name).startsWith('_')).map((d)=>d.name);
    for (const developer of developers){
        const projectsDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(dataRoot, developer, 'projects');
        const projectDirs = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].readdir(projectsDir, {
            withFileTypes: true
        }).catch(()=>[]);
        for (const entry of projectDirs){
            if (!entry.isDirectory()) continue;
            const pjPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(projectsDir, entry.name, 'index.json');
            try {
                const raw = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].readFile(pjPath, 'utf8');
                const json = JSON.parse(raw);
                if (!json.slug) json.slug = entry.name;
                if (!json.id) json.id = `${developer}-${json.slug}`;
                if (!json.developer) json.developer = developer;
                if (!json.projectName?.en) continue;
                out.push({
                    ...normalizeProject(json, developer),
                    fromCommunity: null
                });
            } catch  {
            // ignore missing or invalid project.json
            }
        }
        // Also include projects nested under communities
        const communitiesDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(dataRoot, developer, 'communities');
        const commEntries = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].readdir(communitiesDir, {
            withFileTypes: true
        }).catch(()=>[]);
        for (const comm of commEntries){
            if (!comm.isDirectory()) continue;
            const commProjectsDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(communitiesDir, comm.name, 'projects');
            const commProjectEntries = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].readdir(commProjectsDir, {
                withFileTypes: true
            }).catch(()=>[]);
            for (const cp of commProjectEntries){
                if (!cp.isDirectory()) continue;
                const pjPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(commProjectsDir, cp.name, 'index.json');
                try {
                    const raw = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].readFile(pjPath, 'utf8');
                    const json = JSON.parse(raw);
                    if (!json.slug) json.slug = cp.name;
                    if (!json.id) json.id = `${developer}-${json.slug}`;
                    if (!json.developer) json.developer = developer;
                    if (!json.projectName?.en) continue;
                    out.push({
                        ...normalizeProject(json, developer),
                        fromCommunity: comm.name
                    });
                } catch  {
                // ignore
                }
            }
        }
    }
    return out;
}
async function readDeveloperProfile(developer) {
    const base = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'public', 'data', developer);
    const [profile, dev] = await Promise.all([
        readJsonIfExists(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(base, 'provider-profile.json')),
        readJsonIfExists(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(base, 'developer.json'))
    ]);
    return {
        profile: profile || undefined,
        developer: dev || undefined
    };
}
}),
"[project]/lib/routes.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/app/[locale]/developers/[developer]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DeveloperShowPage,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/routes.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const revalidate = 3600;
async function DeveloperShowPage({ params }) {
    const { locale = 'en', developer = '' } = await params;
    const loc = (locale || '').toLowerCase().startsWith('ar') ? 'ar' : 'en';
    const { profile, developer: devMeta } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readDeveloperProfile"])(developer);
    const communities = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listCommunitySlugs"])(developer);
    const all = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listAllProjectsFolderFirst"])();
    const projects = all.filter((p)=>p.developer === developer);
    const logo = profile?.logo || devMeta?.logo || `/media/${developer}-white.png`;
    const nm = profile?.name || devMeta?.name;
    const pick = (v)=>{
        if (!v) return '';
        if (typeof v === 'string') return v;
        return v[loc] || v.en || v.ar || '';
    };
    const name = pick(nm) || developer;
    const title = pick(profile?.title) || name;
    const description = pick(profile?.definition) || pick(devMeta?.description);
    const communityCards = await Promise.all(communities.map(async (slug)=>{
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readCommunityData"])(developer, slug);
        const title = pick(data?.name || data?.communityName) || slug;
        const pickUrl = (v)=>{
            if (!v) return undefined;
            if (typeof v === 'string') return v;
            if (typeof v === 'object') {
                if (typeof v.src === 'string') return v.src;
                if (typeof v.url === 'string') return v.url;
            }
            return undefined;
        };
        const hero = pickUrl(data?.media?.heroImage) || pickUrl(data?.heroImage) || (Array.isArray(data?.media?.gallery) ? pickUrl(data?.media?.gallery?.[0]) : undefined) || '/media/logo.png';
        return {
            slug,
            title,
            hero
        };
    }));
    const featuredProjects = projects.slice(0, 9);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-light",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.15),transparent_60%),radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.08),transparent_60%)]"
                    }, void 0, false, {
                        fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-6xl mx-auto px-6 py-16 relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            src: logo,
                                            alt: `${name} logo`,
                                            width: 48,
                                            height: 48,
                                            className: "object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl md:text-4xl font-extrabold text-gold-grad",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/70 leading-relaxed max-w-3xl",
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 flex flex-wrap gap-4 text-sm text-white/80",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-3 py-1 rounded-full bg-white/5 border border-white/10",
                                        children: [
                                            loc === 'ar' ? 'عدد المشاريع' : 'Projects',
                                            ": ",
                                            projects.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-3 py-1 rounded-full bg-white/5 border border-white/10",
                                        children: [
                                            loc === 'ar' ? 'عدد المجتمعات' : 'Communities',
                                            ": ",
                                            communities.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringRoutes"].developerProjectsIndex(loc, developer),
                                        className: "px-3 py-1 rounded-full bg-gold/20 text-gold hover:bg-gold/30 transition",
                                        children: loc === 'ar' ? 'مشاريع المطوّر' : 'Developer Projects'
                                    }, void 0, false, {
                                        fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringRoutes"].developerCommunitiesIndex(loc, developer),
                                        className: "px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition",
                                        children: loc === 'ar' ? 'مجتمعات المطوّر' : 'Developer Communities'
                                    }, void 0, false, {
                                        fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-6xl mx-auto px-6 py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-gold",
                                children: loc === 'ar' ? 'المجتمعات' : 'Communities'
                            }, void 0, false, {
                                fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringRoutes"].developerCommunitiesIndex(loc, developer),
                                className: "text-gold hover:underline",
                                children: loc === 'ar' ? 'عرض الكل' : 'View all'
                            }, void 0, false, {
                                fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: communityCards.map(({ slug, title, hero })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringRoutes"].communityShow(loc, developer, slug),
                                className: "group block rounded-xl overflow-hidden border border-white/10 bg-white/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-40",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: hero,
                                                alt: title,
                                                className: "w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"
                                            }, void 0, false, {
                                                fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
                                                lineNumber: 93,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
                                                lineNumber: 94,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-white",
                                                children: title
                                            }, void 0, false, {
                                                fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
                                                lineNumber: 97,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-white/60",
                                                children: loc === 'ar' ? 'اضغط لمعرفة المشاريع' : 'Tap to view projects'
                                            }, void 0, false, {
                                                fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
                                                lineNumber: 98,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, slug, true, {
                                fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-6xl mx-auto px-6 py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-gold",
                                children: loc === 'ar' ? 'أبرز المشاريع' : 'Featured Projects'
                            }, void 0, false, {
                                fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringRoutes"].developerProjectsIndex(loc, developer),
                                className: "text-gold hover:underline",
                                children: loc === 'ar' ? 'عرض الكل' : 'View all'
                            }, void 0, false, {
                                fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: featuredProjects.map((p, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringRoutes"].projectShow(loc, developer, p.slug || ''),
                                className: "rounded-xl overflow-hidden border border-white/10 bg-white/5 block",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-44",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: p.heroImage || p.galleryImages?.[0] || '/media/logo.png',
                                                alt: typeof p.projectName === 'string' ? p.projectName : p.projectName?.[loc] || p.projectName?.en || p.slug,
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
                                                lineNumber: 121,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-white",
                                                children: typeof p.projectName === 'string' ? p.projectName : p.projectName?.[loc] || p.projectName?.en || p.slug
                                            }, void 0, false, {
                                                fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-white/60",
                                                children: [
                                                    loc === 'ar' ? 'مشروع من' : 'By',
                                                    " ",
                                                    developer
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, `${p.id || `${p.developer || developer}-${p.slug || 'unknown'}`}-${idx}`, true, {
                                fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/[locale]/developers/[developer]/page.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/[locale]/developers/[developer]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/[locale]/developers/[developer]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7a1b3ce7._.js.map