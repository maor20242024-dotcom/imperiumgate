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
"[project]/app/[locale]/projects/error.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/[locale]/projects/error.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/[locale]/projects/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/[locale]/projects/loading.tsx [app-rsc] (ecmascript)"));
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
"[project]/components/ProjectCard.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/ProjectCard.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ProjectCard.tsx <module evaluation>", "default");
}),
"[project]/components/ProjectCard.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/ProjectCard.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ProjectCard.tsx", "default");
}),
"[project]/components/ProjectCard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/ProjectCard.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/ProjectCard.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/[locale]/projects/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsIndex,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProjectCard.tsx [app-rsc] (ecmascript)");
;
const dynamic = "force-static";
;
;
async function ProjectsIndex({ params }) {
    const { locale = 'ar' } = await params;
    const projects = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listAllProjectsFolderFirst"])();
    if (!projects || projects.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6 py-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-extrabold text-gold mb-6",
                    children: locale === 'ar' ? 'كل المشاريع' : 'All Projects'
                }, void 0, false, {
                    fileName: "[project]/app/[locale]/projects/page.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400",
                    children: locale === 'ar' ? 'لا مشاريع متاحة حالياً.' : 'No projects available at the moment.'
                }, void 0, false, {
                    fileName: "[project]/app/[locale]/projects/page.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/[locale]/projects/page.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-6xl mx-auto px-6 py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-extrabold text-gold mb-6",
                children: locale === 'ar' ? 'كل المشاريع' : 'All Projects'
            }, void 0, false, {
                fileName: "[project]/app/[locale]/projects/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
                children: projects.map((p, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        project: p
                    }, `${p.id || `${p.developer || 'dev'}-${p.slug || 'unknown'}`}-${idx}`, false, {
                        fileName: "[project]/app/[locale]/projects/page.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/[locale]/projects/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/[locale]/projects/page.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/[locale]/projects/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/[locale]/projects/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d8703bea._.js.map