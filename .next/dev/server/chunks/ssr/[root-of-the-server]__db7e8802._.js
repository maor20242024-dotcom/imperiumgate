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
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[project]/lib/unifiedDataService.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/unifiedDataService.ts
__turbopack_context__.s([
    "getProjectBySlug",
    ()=>getProjectBySlug,
    "getProjectsByDeveloper",
    ()=>getProjectsByDeveloper,
    "listDevelopers",
    ()=>listDevelopers,
    "loadAllProjects",
    ()=>loadAllProjects
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
function slugify(input) {
    const base = (input || '').toString().replace(/\.[^.]+$/, '') // drop extension
    .replace(/[_\s]+/g, '-').replace(/[^a-zA-Z0-9-]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '').toLowerCase();
    return base || 'project';
}
function generateSlug(p, filename) {
    if (typeof p?.slug === 'string' && p.slug.trim()) {
        return slugify(p.slug.trim());
    }
    const name = typeof p?.projectName === 'string' ? p.projectName : typeof p?.projectName === 'object' ? p.projectName.en || p.projectName.ar || '' : '';
    if (name && name.trim()) {
        return slugify(name.trim());
    }
    return slugify(filename);
}
// Arabic-to-English fallback system
function applyLanguageFallback(field) {
    if (!field) return undefined;
    if (typeof field === 'string') {
        return field.trim() || undefined;
    }
    if (typeof field === 'object' && field !== null) {
        const en = typeof field.en === 'string' ? field.en.trim() : '';
        const ar = typeof field.ar === 'string' ? field.ar.trim() : '';
        // If Arabic is missing or empty, use English
        const finalAr = ar || en;
        // If English is missing or empty, use Arabic
        const finalEn = en || ar;
        // Only return if we have at least one valid value
        if (finalEn || finalAr) {
            return {
                en: finalEn || undefined,
                ar: finalAr || undefined
            };
        }
    }
    return undefined;
}
// Enhanced field validation and normalization
function validateAndNormalizeProject(rawProject, filename, developerName) {
    try {
        // Essential fields validation
        const projectName = applyLanguageFallback(rawProject.projectName || rawProject.title || rawProject.name);
        if (!projectName) {
            console.warn(`⚠️ Skipping project in ${filename}: missing projectName/title`);
            return null;
        }
        // Generate slug with fallback
        const slug = generateSlug(rawProject, filename);
        // Create base project with required fields
        const project = {
            slug,
            id: rawProject.id || `${developerName.toLowerCase()}-${slug}`,
            developer: developerName,
            projectName,
            // Apply fallback to all localized fields
            country: applyLanguageFallback(rawProject.country),
            city: applyLanguageFallback(rawProject.city),
            area: applyLanguageFallback(rawProject.area),
            location: applyLanguageFallback(rawProject.location),
            description: applyLanguageFallback(rawProject.description),
            summary: applyLanguageFallback(rawProject.summary),
            insights: applyLanguageFallback(rawProject.insights),
            mapDescription: applyLanguageFallback(rawProject.mapDescription),
            projectStatus: applyLanguageFallback(rawProject.projectStatus),
            // Numeric fields with validation
            minPriceAED: typeof rawProject.minPriceAED === 'number' ? rawProject.minPriceAED : typeof rawProject.minPrice === 'number' ? rawProject.minPrice : undefined,
            maxPriceAED: typeof rawProject.maxPriceAED === 'number' ? rawProject.maxPriceAED : typeof rawProject.maxPrice === 'number' ? rawProject.maxPrice : undefined,
            minAreaSqft: typeof rawProject.minAreaSqft === 'number' ? rawProject.minAreaSqft : typeof rawProject.areaMin === 'number' ? rawProject.areaMin : undefined,
            maxAreaSqft: typeof rawProject.maxAreaSqft === 'number' ? rawProject.maxAreaSqft : typeof rawProject.areaMax === 'number' ? rawProject.areaMax : undefined,
            // Coordinates with validation
            latitude: typeof rawProject.latitude === 'number' ? rawProject.latitude : undefined,
            longitude: typeof rawProject.longitude === 'number' ? rawProject.longitude : undefined,
            // Media links with validation
            heroImage: typeof rawProject.heroImage === 'string' ? rawProject.heroImage.trim() || undefined : undefined,
            videoLink: typeof rawProject.videoLink === 'string' ? rawProject.videoLink.trim() || undefined : undefined,
            brochurePdfLink: typeof rawProject.brochurePdfLink === 'string' ? rawProject.brochurePdfLink.trim() || undefined : typeof rawProject.pdf === 'string' ? rawProject.pdf.trim() || undefined : undefined,
            '3D_TourLink': typeof rawProject['3D_TourLink'] === 'string' ? rawProject['3D_TourLink'].trim() || undefined : undefined,
            // Arrays with validation
            galleryImages: Array.isArray(rawProject.galleryImages) ? rawProject.galleryImages.filter((img)=>typeof img === 'string' && img.trim()) : Array.isArray(rawProject.images) ? rawProject.images.filter((img)=>typeof img === 'string' && img.trim()) : [],
            bedrooms: Array.isArray(rawProject.bedrooms) ? rawProject.bedrooms : undefined,
            // Dates with validation
            launchDate: typeof rawProject.launchDate === 'string' ? rawProject.launchDate.trim() || undefined : undefined,
            deliveryDate: typeof rawProject.deliveryDate === 'string' ? rawProject.deliveryDate.trim() || undefined : typeof rawProject.handover === 'string' ? rawProject.handover.trim() || undefined : undefined,
            // Boolean fields
            goldenVisaEligible: typeof rawProject.goldenVisaEligible === 'boolean' ? rawProject.goldenVisaEligible : undefined,
            sellable: typeof rawProject.sellable === 'boolean' ? rawProject.sellable : true,
            // Complex objects
            amenities: Array.isArray(rawProject.amenities) ? rawProject.amenities.map((amenity)=>({
                    name: applyLanguageFallback(amenity.name) || {
                        en: 'Amenity',
                        ar: 'مرفق'
                    },
                    description: applyLanguageFallback(amenity.description)
                })).filter((a)=>a.name) : [],
            mapPointsOfInterest: [],
            news: Array.isArray(rawProject.news) ? rawProject.news : [],
            contact: typeof rawProject.contact === 'object' ? rawProject.contact : undefined,
            // Additional fields
            projectPageLink: typeof rawProject.projectPageLink === 'string' ? rawProject.projectPageLink.trim() || undefined : undefined,
            projectID: rawProject.projectID || rawProject.id || slug
        };
        // Normalize POIs with fallback
        if (rawProject.mapPointsOfInterest) {
            if (Array.isArray(rawProject.mapPointsOfInterest)) {
                project.mapPointsOfInterest = rawProject.mapPointsOfInterest.map((poi)=>({
                        name: applyLanguageFallback(poi.name) || {
                            en: 'Point of Interest',
                            ar: 'نقطة اهتمام'
                        },
                        distance: applyLanguageFallback(poi.distance),
                        category: typeof poi.category === 'string' ? poi.category : 'general',
                        coordinates: typeof poi.coordinates === 'object' && poi.coordinates && typeof poi.coordinates.lat === 'number' && typeof poi.coordinates.lon === 'number' ? poi.coordinates : {
                            lat: 0,
                            lon: 0
                        }
                    }));
            } else if (typeof rawProject.mapPointsOfInterest === 'object') {
                const poisArray = [];
                Object.entries(rawProject.mapPointsOfInterest).forEach(([category, items])=>{
                    if (Array.isArray(items)) {
                        items.forEach((item)=>{
                            if (typeof item === 'string') {
                                poisArray.push({
                                    name: {
                                        en: item,
                                        ar: item
                                    },
                                    category: category,
                                    coordinates: {
                                        lat: 0,
                                        lon: 0
                                    }
                                });
                            } else if (typeof item === 'object') {
                                poisArray.push({
                                    name: applyLanguageFallback(item.name) || {
                                        en: item,
                                        ar: item
                                    },
                                    distance: applyLanguageFallback(item.distance),
                                    category: category,
                                    coordinates: typeof item.coordinates === 'object' && item.coordinates ? item.coordinates : {
                                        lat: 0,
                                        lon: 0
                                    }
                                });
                            }
                        });
                    }
                });
                project.mapPointsOfInterest = poisArray;
            }
        }
        return project;
    } catch (error) {
        console.warn(`⚠️ Error normalizing project in ${filename}:`, error);
        return null;
    }
}
function readJSONFile(filePath) {
    try {
        const content = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(filePath, 'utf-8');
        if (!content.trim()) {
            console.warn(`⚠️ Empty file: ${filePath}`);
            return [];
        }
        const json = JSON.parse(content);
        if (Array.isArray(json)) return json;
        return [
            json
        ];
    } catch (error) {
        console.warn(`⚠️ Failed to parse JSON file ${filePath}:`, error);
        return [];
    }
}
function loadFromDeveloperDir(developerDir, developerName) {
    const results = [];
    try {
        const entries = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readdirSync(developerDir, {
            withFileTypes: true
        });
        for (const entry of entries){
            try {
                if (entry.isFile() && entry.name.endsWith('.json')) {
                    const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(developerDir, entry.name);
                    const items = readJSONFile(filePath);
                    items.forEach((rawProject)=>{
                        const normalizedProject = validateAndNormalizeProject(rawProject, entry.name, developerName);
                        if (normalizedProject) {
                            results.push(normalizedProject);
                        }
                    });
                } else if (entry.isDirectory()) {
                    const subdir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(developerDir, entry.name);
                    const canonical = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(subdir, `${entry.name}.json`);
                    let items = [];
                    if (__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(canonical)) {
                        items = readJSONFile(canonical);
                    } else {
                        try {
                            const subentries = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readdirSync(subdir, {
                                withFileTypes: true
                            });
                            for (const se of subentries){
                                if (se.isFile() && se.name.endsWith('.json')) {
                                    const fp = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(subdir, se.name);
                                    const read = readJSONFile(fp);
                                    items.push(...read);
                                }
                            }
                        } catch (error) {
                            console.warn(`⚠️ Failed to read subdirectory ${subdir}:`, error);
                        }
                    }
                    items.forEach((rawProject)=>{
                        const normalizedProject = validateAndNormalizeProject(rawProject, entry.name, developerName);
                        if (normalizedProject) {
                            results.push(normalizedProject);
                        }
                    });
                }
            } catch (error) {
                console.warn(`⚠️ Failed to process entry ${entry.name} in ${developerDir}:`, error);
            }
        }
    } catch (error) {
        console.warn(`⚠️ Failed to read developer directory ${developerDir}:`, error);
    }
    return results;
}
// 🔥 DYNAMIC LOADING SYSTEM - No more all_projects.json dependency!
let projectsCache = null;
let cacheTimestamp = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes cache
async function loadAllProjects() {
    // Use cache if available and not expired
    if (projectsCache && Date.now() - cacheTimestamp < CACHE_DURATION) {
        return projectsCache;
    }
    const dataRoot = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'public', 'data');
    let projects = [];
    try {
        const devEntries = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readdirSync(dataRoot, {
            withFileTypes: true
        });
        for (const d of devEntries){
            if (!d.isDirectory()) continue;
            const developerName = d.name;
            // Skip non-developer directories
            if ([
                'node_modules',
                '.git',
                '.next',
                '.DS_Store'
            ].includes(developerName)) continue;
            const developerDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(dataRoot, developerName);
            try {
                const items = loadFromDeveloperDir(developerDir, developerName);
                if (items.length > 0) {
                    projects.push(...items);
                    console.log(`✅ Loaded ${items.length} projects from ${developerName}`);
                } else {
                    console.warn(`⚠️ No valid projects found in ${developerName}`);
                }
            } catch (error) {
                console.warn(`⚠️ Failed to load projects from ${developerName}:`, error);
                continue;
            }
        }
    } catch (error) {
        console.warn(`⚠️ Failed to read developer directories:`, error);
    }
    console.log(`🚀 DYNAMIC LOADING: Total ${projects.length} projects loaded from individual JSON files`);
    // Update cache
    projectsCache = projects;
    cacheTimestamp = Date.now();
    // إرجاع مصفوفة فارغة بدلاً من إيقاف التطبيق في حالة عدم وجود بيانات
    return projects;
}
async function getProjectBySlug(dev, slug) {
    const all = await loadAllProjects();
    return all.find((p)=>p.developer === dev && p.slug === slug);
}
async function getProjectsByDeveloper(dev) {
    const allProjects = await loadAllProjects();
    return allProjects.filter((p)=>p.developer === dev);
}
async function listDevelopers() {
    const counts = new Map();
    const allProjects = await loadAllProjects();
    for (const p of allProjects){
        if (!p.developer) continue;
        counts.set(p.developer, (counts.get(p.developer) || 0) + 1);
    }
    return Array.from(counts.entries()).map(([developer, count])=>({
            developer,
            count
        }));
} // Server-only synchronous loader moved to a separate file to avoid
 // bundling Node modules like 'fs' into client builds.
}),
"[project]/components/home/Hero.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/home/Hero.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/home/Hero.tsx <module evaluation>", "default");
}),
"[project]/components/home/Hero.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/home/Hero.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/home/Hero.tsx", "default");
}),
"[project]/components/home/Hero.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$Hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/home/Hero.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$Hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/home/Hero.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$Hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/home/OrbitCarousel.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/home/OrbitCarousel.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/home/OrbitCarousel.tsx <module evaluation>", "default");
}),
"[project]/components/home/OrbitCarousel.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/home/OrbitCarousel.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/home/OrbitCarousel.tsx", "default");
}),
"[project]/components/home/OrbitCarousel.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$OrbitCarousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/home/OrbitCarousel.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$OrbitCarousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/home/OrbitCarousel.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$OrbitCarousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
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
"[project]/components/ui/MediaSuspense.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/ui/MediaSuspense.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/MediaSuspense.tsx <module evaluation>", "default");
}),
"[project]/components/ui/MediaSuspense.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/ui/MediaSuspense.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/MediaSuspense.tsx", "default");
}),
"[project]/components/ui/MediaSuspense.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$MediaSuspense$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/ui/MediaSuspense.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$MediaSuspense$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/ui/MediaSuspense.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$MediaSuspense$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/[locale]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/[locale]/page.tsx
__turbopack_context__.s([
    "default",
    ()=>HomePage,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$unifiedDataService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/unifiedDataService.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$Hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/Hero.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$OrbitCarousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/OrbitCarousel.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProjectCard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$MediaSuspense$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/MediaSuspense.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function generateMetadata({ params }) {
    const { locale = 'en' } = await params;
    const title = locale === 'ar' ? 'بوابة الإمبراطورية العقارية - دبي' : 'Imperium Real Estate Gate - Dubai';
    const description = locale === 'ar' ? 'اكتشف أفخم العقارات في دبي، حيث تلتقي الفخامة بالاستثمار.' : "Discover Dubai's most luxurious properties, where opulence meets investment.";
    // NOTE: OG should ideally be an image, but we keep current behavior.
    const ogImage = 'https://ggfx-onebrokergroup.s3.eu-west-2.amazonaws.com/i/Homepage_Banner_Video2_8328_Bdd5c7_f31f1b5265.mp4';
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [
                {
                    url: ogImage
                }
            ]
        }
    };
}
async function HomePage({ params }) {
    const { locale = 'en' } = await params;
    // 🚀 DYNAMIC LOADING: Read projects directly from individual JSON files
    const all = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$unifiedDataService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["loadAllProjects"])();
    // Build slides: pick one video per developer, capped at 4
    const byDeveloper = new Map();
    for (const p of all){
        const hasVideo = typeof p?.videoLink === 'string' && p.videoLink.toLowerCase().endsWith('.mp4');
        if (!hasVideo) continue;
        const dev = p.developer || 'Unknown';
        if (!byDeveloper.has(dev)) {
            byDeveloper.set(dev, p);
        }
    }
    const selected = Array.from(byDeveloper.values()).slice(0, 4);
    const slides = selected.map((p)=>({
            videoLink: p.videoLink,
            title: typeof p?.projectName === 'string' ? p.projectName : p?.projectName?.[locale] ?? p?.slug ?? 'Untitled',
            developer: p.developer
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$MediaSuspense$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                type: "video",
                height: "100vh",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$Hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    locale: locale,
                    titleAr: "Imperium Gate — مختارات",
                    subtitleAr: "عقارات فاخرة منتقاة في دبي.",
                    titleEn: "Imperium Gate — Featured",
                    subtitleEn: "Curated luxury properties in Dubai."
                }, void 0, false, {
                    fileName: "[project]/app/[locale]/page.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[locale]/page.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            slides.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$MediaSuspense$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    type: "gallery",
                    height: "600px",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$OrbitCarousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        slides: slides
                    }, void 0, false, {
                        fileName: "[project]/app/[locale]/page.tsx",
                        lineNumber: 82,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/[locale]/page.tsx",
                    lineNumber: 81,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[locale]/page.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mx-auto w-full max-w-7xl px-6 py-16 mt-12 md:mt-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: `luxury-title text-3xl md:text-4xl lg:text-5xl font-bold gold-gradient-static luxury-text-shadow ${locale === 'ar' ? 'font-display' : 'font-display'}`,
                                children: locale === 'ar' ? 'مشاريع مختارة' : 'Featured Projects'
                            }, void 0, false, {
                                fileName: "[project]/app/[locale]/page.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `luxury-subtitle mt-4 text-white/80 text-lg md:text-xl max-w-2xl mx-auto ${locale === 'ar' ? 'font-arabic' : 'font-sans'}`,
                                children: locale === 'ar' ? 'اكتشف مجموعة منتقاة من أفخم العقارات في دبي' : "Discover our curated selection of Dubai's most luxurious properties"
                            }, void 0, false, {
                                fileName: "[project]/app/[locale]/page.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[locale]/page.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12",
                        children: all.slice(0, 12).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                project: p
                            }, p?.slug ?? p?.id, false, {
                                fileName: "[project]/app/[locale]/page.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/[locale]/page.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/[locale]/page.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/[locale]/page.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/[locale]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/[locale]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__db7e8802._.js.map