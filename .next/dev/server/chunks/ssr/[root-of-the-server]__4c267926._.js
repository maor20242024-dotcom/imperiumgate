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
"[project]/app/[locale]/projects/[developer]/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/[locale]/projects/[developer]/loading.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/[locale]/projects/[developer]/[slug]/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/[locale]/projects/[developer]/[slug]/loading.tsx [app-rsc] (ecmascript)"));
}),
"[project]/components/project/AmenitiesGrid.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AmenitiesGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
// Server-side translation helper
function translateText(v, locale = 'ar') {
    if (!v) return '';
    if (typeof v === 'string') return v;
    return v[locale] || v.en || v.ar || '';
}
function AmenitiesGrid({ amenities, locale = 'ar' }) {
    // Ensure amenities is an array
    const safeAmenities = Array.isArray(amenities) ? amenities : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid md:grid-cols-2 gap-4",
        children: safeAmenities.map((a, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-gold/20 p-4 bg-black/50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gold font-semibold",
                        children: translateText(a.name, locale)
                    }, void 0, false, {
                        fileName: "[project]/components/project/AmenitiesGrid.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-400 mt-1",
                        children: translateText(a.description, locale)
                    }, void 0, false, {
                        fileName: "[project]/components/project/AmenitiesGrid.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/components/project/AmenitiesGrid.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/project/AmenitiesGrid.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/project/ContactBlock.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/project/ContactBlock.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/project/ContactBlock.tsx <module evaluation>", "default");
}),
"[project]/components/project/ContactBlock.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/project/ContactBlock.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/project/ContactBlock.tsx", "default");
}),
"[project]/components/project/ContactBlock.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$ContactBlock$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/project/ContactBlock.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$ContactBlock$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/project/ContactBlock.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$ContactBlock$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/project/DocsBlock.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/project/DocsBlock.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/project/DocsBlock.tsx <module evaluation>", "default");
}),
"[project]/components/project/DocsBlock.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/project/DocsBlock.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/project/DocsBlock.tsx", "default");
}),
"[project]/components/project/DocsBlock.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$DocsBlock$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/project/DocsBlock.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$DocsBlock$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/project/DocsBlock.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$DocsBlock$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/project/Gallery.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/project/Gallery.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/project/Gallery.tsx <module evaluation>", "default");
}),
"[project]/components/project/Gallery.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/project/Gallery.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/project/Gallery.tsx", "default");
}),
"[project]/components/project/Gallery.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$Gallery$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/project/Gallery.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$Gallery$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/project/Gallery.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$Gallery$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/project/Insights.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Insights
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function Insights({ text }) {
    if (!text) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-gold/20 p-6 bg-black/50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-gold font-semibold mb-2",
                children: "تحليلات"
            }, void 0, false, {
                fileName: "[project]/components/project/Insights.tsx",
                lineNumber: 1,
                columnNumber: 159
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-300 whitespace-pre-wrap",
                children: text
            }, void 0, false, {
                fileName: "[project]/components/project/Insights.tsx",
                lineNumber: 1,
                columnNumber: 218
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/project/Insights.tsx",
        lineNumber: 1,
        columnNumber: 93
    }, this);
}
}),
"[project]/lib/format.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/components/project/KeyStats.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KeyStats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/format.ts [app-rsc] (ecmascript)");
;
;
// Server-side translation helper
function translateText(v, locale = 'ar') {
    if (!v) return '';
    if (typeof v === 'string') return v;
    return v[locale] || v.en || v.ar || '';
}
function KeyStats({ project, locale = 'ar' }) {
    const allStats = [
        project?.minPriceAED && project.minPriceAED > 0 ? {
            label: locale === 'ar' ? 'أقل سعر' : 'Min Price',
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatAED"])(project.minPriceAED, locale)
        } : null,
        project?.maxPriceAED && project.maxPriceAED > 0 ? {
            label: locale === 'ar' ? 'أعلى سعر' : 'Max Price',
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatAED"])(project.maxPriceAED, locale)
        } : null,
        project?.minAreaSqft && project.minAreaSqft > 0 || project?.maxAreaSqft && project.maxAreaSqft > 0 ? {
            label: locale === 'ar' ? 'المساحة (قدم²)' : 'Area (ft²)',
            value: project.minAreaSqft && project.maxAreaSqft ? `${project.minAreaSqft} - ${project.maxAreaSqft}` : project.minAreaSqft ? `${project.minAreaSqft}+` : `${project.maxAreaSqft}`
        } : null,
        project?.minAreaSqmt && project.minAreaSqmt > 0 || project?.maxAreaSqmt && project.maxAreaSqmt > 0 ? {
            label: locale === 'ar' ? 'المساحة (م²)' : 'Area (m²)',
            value: project.minAreaSqmt && project.maxAreaSqmt ? `${project.minAreaSqmt} - ${project.maxAreaSqmt}` : project.minAreaSqmt ? `${project.minAreaSqmt}+` : `${project.maxAreaSqmt}`
        } : null,
        project?.deliveryDate ? {
            label: locale === 'ar' ? 'التسليم' : 'Delivery',
            value: project.deliveryDate
        } : null,
        project?.paymentPlan ? {
            label: locale === 'ar' ? 'الخطة' : 'Plan',
            value: translateText(project.paymentPlan, locale)
        } : null,
        project?.projectStatus ? {
            label: locale === 'ar' ? 'الحالة' : 'Status',
            value: translateText(project.projectStatus, locale)
        } : null
    ].filter((stat)=>stat !== null); // Remove null entries with type guard
    // Don't render if no stats available
    if (allStats.length === 0) {
        return null;
    }
    // Determine grid layout based on number of stats
    const gridCols = allStats.length === 1 ? 'grid-cols-1' : allStats.length === 2 ? 'sm:grid-cols-2' : allStats.length <= 3 ? 'sm:grid-cols-2 md:grid-cols-3' : allStats.length <= 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `grid ${gridCols} gap-4 -mt-8 relative z-20`,
        children: allStats.map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-gold/20 bg-black/60 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-gray-400",
                        children: stat.label
                    }, void 0, false, {
                        fileName: "[project]/components/project/KeyStats.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-lg text-gold font-semibold mt-1",
                        children: stat.value
                    }, void 0, false, {
                        fileName: "[project]/components/project/KeyStats.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/components/project/KeyStats.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/project/KeyStats.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/project/NewsBlock.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewsBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
// Server-side translation helper
function translateText(v, locale = 'ar') {
    if (!v) return '';
    if (typeof v === 'string') return v;
    return v[locale] || v.en || v.ar || '';
}
function NewsBlock({ news, locale = 'ar' }) {
    if (!Array.isArray(news) || !news.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid gap-4",
        children: news.map((n, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: n.url || '#',
                target: "_blank",
                rel: "noreferrer",
                className: "block rounded-lg border border-gold/20 p-4 bg-black/40 hover:shadow-gold transition",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gold font-semibold",
                        children: translateText(n.title, locale)
                    }, void 0, false, {
                        fileName: "[project]/components/project/NewsBlock.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    n.source || n.date ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-zinc-400 mt-1",
                        children: [
                            n.source,
                            n.date
                        ].filter(Boolean).join(' • ')
                    }, void 0, false, {
                        fileName: "[project]/components/project/NewsBlock.tsx",
                        lineNumber: 33,
                        columnNumber: 13
                    }, this) : null
                ]
            }, i, true, {
                fileName: "[project]/components/project/NewsBlock.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/project/NewsBlock.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/project/Overview.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Overview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
// Server-side translation helper
function translateText(v, locale = 'ar') {
    if (!v) return '';
    if (typeof v === 'string') return v;
    return v[locale] || v.en || v.ar || '';
}
function Overview({ project, locale = 'ar' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "prose prose-invert max-w-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-gold",
                children: translateText(project.projectName, locale) || project.slug
            }, void 0, false, {
                fileName: "[project]/components/project/Overview.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-gray-300 whitespace-pre-wrap",
                children: translateText(project.description, locale) || translateText(project.summary, locale)
            }, void 0, false, {
                fileName: "[project]/components/project/Overview.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/project/Overview.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/project/ProjectHero.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/project/ProjectHero.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/project/ProjectHero.tsx <module evaluation>", "default");
}),
"[project]/components/project/ProjectHero.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/project/ProjectHero.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/project/ProjectHero.tsx", "default");
}),
"[project]/components/project/ProjectHero.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$ProjectHero$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/project/ProjectHero.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$ProjectHero$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/project/ProjectHero.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$ProjectHero$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/project/ProjectNotFound.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/project/ProjectNotFound.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/project/ProjectNotFound.tsx <module evaluation>", "default");
}),
"[project]/components/project/ProjectNotFound.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/project/ProjectNotFound.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/project/ProjectNotFound.tsx", "default");
}),
"[project]/components/project/ProjectNotFound.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$ProjectNotFound$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/project/ProjectNotFound.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$ProjectNotFound$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/project/ProjectNotFound.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$ProjectNotFound$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/project/RelatedCarousel.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/project/RelatedCarousel.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/project/RelatedCarousel.tsx <module evaluation>", "default");
}),
"[project]/components/project/RelatedCarousel.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/project/RelatedCarousel.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/project/RelatedCarousel.tsx", "default");
}),
"[project]/components/project/RelatedCarousel.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$RelatedCarousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/project/RelatedCarousel.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$RelatedCarousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/project/RelatedCarousel.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$RelatedCarousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/project/SectionNav.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/project/SectionNav.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/project/SectionNav.tsx <module evaluation>", "default");
}),
"[project]/components/project/SectionNav.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/project/SectionNav.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/project/SectionNav.tsx", "default");
}),
"[project]/components/project/SectionNav.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$SectionNav$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/project/SectionNav.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$SectionNav$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/project/SectionNav.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$SectionNav$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/project/ProjectLocationMap.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/project/ProjectLocationMap.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/project/ProjectLocationMap.tsx <module evaluation>", "default");
}),
"[project]/components/project/ProjectLocationMap.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/project/ProjectLocationMap.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/project/ProjectLocationMap.tsx", "default");
}),
"[project]/components/project/ProjectLocationMap.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$ProjectLocationMap$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/project/ProjectLocationMap.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$ProjectLocationMap$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/project/ProjectLocationMap.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$ProjectLocationMap$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/PropVRFrame.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/PropVRFrame.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/PropVRFrame.tsx <module evaluation>", "default");
}),
"[project]/components/PropVRFrame.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/PropVRFrame.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/PropVRFrame.tsx", "default");
}),
"[project]/components/PropVRFrame.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PropVRFrame$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/PropVRFrame.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PropVRFrame$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/PropVRFrame.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PropVRFrame$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/project/VideoBlock.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/project/VideoBlock.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/project/VideoBlock.tsx <module evaluation>", "default");
}),
"[project]/components/project/VideoBlock.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/project/VideoBlock.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/project/VideoBlock.tsx", "default");
}),
"[project]/components/project/VideoBlock.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$VideoBlock$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/project/VideoBlock.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$VideoBlock$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/project/VideoBlock.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$VideoBlock$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/ui/ROICalculator.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/ui/ROICalculator.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/ROICalculator.tsx <module evaluation>", "default");
}),
"[project]/components/ui/ROICalculator.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/ui/ROICalculator.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/ROICalculator.tsx", "default");
}),
"[project]/components/ui/ROICalculator.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ROICalculator$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/ui/ROICalculator.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ROICalculator$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/ui/ROICalculator.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ROICalculator$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/lib/geo.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deriveProjectLatLon",
    ()=>deriveProjectLatLon
]);
function deriveProjectLatLon(p) {
    const valid = (x)=>typeof x === 'number' && Number.isFinite(x) && Math.abs(x) > 0;
    if (valid(p.latitude) && valid(p.longitude)) return {
        lat: p.latitude,
        lon: p.longitude
    };
    const pois = p.mapPointsOfInterest || [];
    const first = pois.find((po)=>po.coordinates)?.coordinates;
    if (first) return {
        lat: first.lat,
        lon: first.lon
    };
    if (pois.length) {
        const arr = pois.map((po)=>po.coordinates).filter(Boolean);
        if (arr.length) {
            const lat = arr.reduce((a, c)=>a + c.lat, 0) / arr.length;
            const lon = arr.reduce((a, c)=>a + c.lon, 0) / arr.length;
            return {
                lat,
                lon
            };
        }
    }
    return {};
}
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
    const SKIP_SUBDIRS = new Set([
        'emarfull',
        '_raw',
        '_reports',
        'logs',
        'quarantine',
        'archive',
        'emarmasf'
    ]);
    const SKIP_TOP_JSON = new Set([
        'provider_profile.json',
        'manifest_emaar.json',
        'index.json',
        'projects_index.json',
        'policies.json'
    ]);
    try {
        const entries = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readdirSync(developerDir, {
            withFileTypes: true
        });
        for (const entry of entries){
            try {
                if (entry.isFile() && entry.name.endsWith('.json')) {
                    // Skip company-level or non-project JSON files at the developer root
                    if (SKIP_TOP_JSON.has(entry.name)) continue;
                    const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(developerDir, entry.name);
                    const items = readJSONFile(filePath);
                    items.forEach((rawProject)=>{
                        const normalizedProject = validateAndNormalizeProject(rawProject, entry.name, developerName);
                        if (normalizedProject) {
                            results.push(normalizedProject);
                        }
                    });
                } else if (entry.isDirectory()) {
                    // Skip raw and non-UI directories to avoid duplicates
                    if (SKIP_SUBDIRS.has(entry.name)) continue;
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
            // Ignore backup or hidden providers (underscore-prefixed)
            if (developerName.startsWith('_')) continue;
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
"[project]/lib/projects.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/projects.ts - ISR Cache Implementation for Imperium Gate
__turbopack_context__.s([
    "CACHE_TAGS",
    ()=>CACHE_TAGS,
    "PROJECT_CACHE_TAGS",
    ()=>CACHE_TAGS,
    "getAllDeveloperParams",
    ()=>getAllDeveloperParams,
    "getAllProjectParams",
    ()=>getAllProjectParams,
    "getFeaturedProjects",
    ()=>getFeaturedProjects,
    "getProjectBySlug",
    ()=>getProjectBySlug,
    "getProjectCountByDeveloper",
    ()=>getProjectCountByDeveloper,
    "getProjectsByDeveloper",
    ()=>getProjectsByDeveloper,
    "listDevelopers",
    ()=>listDevelopers,
    "loadAllProjects",
    ()=>loadAllProjects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$unifiedDataService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/unifiedDataService.ts [app-rsc] (ecmascript)");
;
;
const CACHE_TAGS = {
    ALL_PROJECTS: 'all-projects',
    DEVELOPERS: 'developers',
    PROJECT_BY_SLUG: 'project-by-slug',
    PROJECTS_BY_DEVELOPER: 'projects-by-developer'
};
// Cache durations (in seconds)
const CACHE_DURATIONS = {
    ALL_PROJECTS: 3600,
    DEVELOPERS: 7200,
    PROJECT_DETAILS: 1800,
    DEVELOPER_PROJECTS: 1800 // 30 minutes
};
const loadAllProjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_cache"])(async ()=>{
    console.log('🔄 Loading all projects (cache miss)');
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$unifiedDataService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["loadAllProjects"])();
}, [
    'all-projects'
], {
    tags: [
        CACHE_TAGS.ALL_PROJECTS
    ],
    revalidate: CACHE_DURATIONS.ALL_PROJECTS
});
const getProjectBySlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_cache"])(async (developer, slug)=>{
    console.log(`🔄 Loading project ${developer}/${slug} (cache miss)`);
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$unifiedDataService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjectBySlug"])(developer, slug);
}, [
    'project-by-slug'
], {
    tags: [
        CACHE_TAGS.PROJECT_BY_SLUG,
        CACHE_TAGS.ALL_PROJECTS
    ],
    revalidate: CACHE_DURATIONS.PROJECT_DETAILS
});
const getProjectsByDeveloper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_cache"])(async (developer)=>{
    console.log(`🔄 Loading projects for developer ${developer} (cache miss)`);
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$unifiedDataService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjectsByDeveloper"])(developer);
}, [
    'projects-by-developer'
], {
    tags: [
        CACHE_TAGS.PROJECTS_BY_DEVELOPER,
        CACHE_TAGS.ALL_PROJECTS
    ],
    revalidate: CACHE_DURATIONS.DEVELOPER_PROJECTS
});
const listDevelopers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_cache"])(async ()=>{
    console.log('🔄 Loading developers list (cache miss)');
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$unifiedDataService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listDevelopers"])();
}, [
    'developers-list'
], {
    tags: [
        CACHE_TAGS.DEVELOPERS,
        CACHE_TAGS.ALL_PROJECTS
    ],
    revalidate: CACHE_DURATIONS.DEVELOPERS
});
const getAllProjectParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_cache"])(async ()=>{
    console.log('🔄 Generating static params for all projects');
    const projects = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$unifiedDataService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["loadAllProjects"])();
    return projects.filter((project)=>project.developer) // Filter out projects without developers
    .map((project)=>({
            developer: project.developer,
            slug: project.slug
        }));
}, [
    'all-project-params'
], {
    tags: [
        CACHE_TAGS.ALL_PROJECTS
    ],
    revalidate: CACHE_DURATIONS.ALL_PROJECTS
});
const getAllDeveloperParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_cache"])(async ()=>{
    console.log('🔄 Generating static params for all developers');
    const developers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$unifiedDataService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listDevelopers"])();
    return developers.map((dev)=>dev.developer);
}, [
    'all-developer-params'
], {
    tags: [
        CACHE_TAGS.DEVELOPERS,
        CACHE_TAGS.ALL_PROJECTS
    ],
    revalidate: CACHE_DURATIONS.DEVELOPERS
});
const getProjectCountByDeveloper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_cache"])(async (developer)=>{
    const projects = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$unifiedDataService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjectsByDeveloper"])(developer);
    return projects.length;
}, [
    'project-count-by-developer'
], {
    tags: [
        CACHE_TAGS.PROJECTS_BY_DEVELOPER,
        CACHE_TAGS.ALL_PROJECTS
    ],
    revalidate: CACHE_DURATIONS.DEVELOPER_PROJECTS
});
const getFeaturedProjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_cache"])(async (limit = 6)=>{
    console.log(`🔄 Loading ${limit} featured projects (cache miss)`);
    const allProjects = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$unifiedDataService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["loadAllProjects"])();
    // Filter featured projects or fallback to first projects
    const featured = allProjects.filter((p)=>p.featured === true);
    if (featured.length >= limit) {
        return featured.slice(0, limit);
    }
    // If not enough featured projects, return first projects
    return allProjects.slice(0, limit);
}, [
    'featured-projects'
], {
    tags: [
        CACHE_TAGS.ALL_PROJECTS
    ],
    revalidate: CACHE_DURATIONS.ALL_PROJECTS
});
;
}),
"[project]/app/[locale]/projects/[developer]/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectDetail,
    "generateStaticParams",
    ()=>generateStaticParams,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$AmenitiesGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/project/AmenitiesGrid.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$ContactBlock$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/project/ContactBlock.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$DocsBlock$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/project/DocsBlock.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$Gallery$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/project/Gallery.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$Insights$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/project/Insights.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$KeyStats$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/project/KeyStats.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$NewsBlock$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/project/NewsBlock.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$Overview$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/project/Overview.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$ProjectHero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/project/ProjectHero.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$ProjectNotFound$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/project/ProjectNotFound.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$RelatedCarousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/project/RelatedCarousel.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$SectionNav$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/project/SectionNav.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$ProjectLocationMap$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/project/ProjectLocationMap.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PropVRFrame$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/PropVRFrame.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$VideoBlock$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/project/VideoBlock.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ROICalculator$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/ROICalculator.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$geo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/geo.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/projects.ts [app-rsc] (ecmascript)");
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
;
;
;
;
;
;
;
const revalidate = 1800;
// Helper to handle translation objects or strings safely
function translateText(v, locale = 'ar') {
    if (!v) return '';
    if (typeof v === 'string') return v;
    return v[locale] || v.en || v.ar || '';
}
async function generateStaticParams() {
    // 🚀 ISR STATIC PARAMS: Generate static params with cached data
    const projectParams = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllProjectParams"])();
    return projectParams.filter((p)=>p.slug && p.slug.trim() !== '').flatMap((p)=>[
            'ar',
            'en'
        ].map((locale)=>({
                locale,
                developer: p.developer || 'unknown',
                slug: p.slug
            })));
}
async function ProjectDetail({ params }) {
    const { locale = 'ar', developer, slug } = await params;
    // Server-safe locale normalization (avoid importing client-only utils)
    const loc = (locale || '').toLowerCase().startsWith('ar') ? 'ar' : 'en';
    // 🚀 ISR CACHED LOADING: Get project with cached data
    const project = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjectBySlug"])(developer, slug);
    // ✅ إذا المشروع غير موجود، اعرض صفحة افتراضية بالاسم بدل 404
    if (!project) {
        const [developerProjects, allProjects] = await Promise.all([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjectsByDeveloper"])(developer),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["loadAllProjects"])()
        ]);
        const otherProjects = allProjects.filter((p)=>p.developer !== developer);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$ProjectNotFound$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            developer: developer,
            slug: slug,
            developerProjects: developerProjects,
            otherProjects: otherProjects
        }, void 0, false, {
            fileName: "[project]/app/[locale]/projects/[developer]/[slug]/page.tsx",
            lineNumber: 62,
            columnNumber: 12
        }, this);
    }
    // Get related projects from same developer (cached)
    const allDeveloperProjects = project.developer ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjectsByDeveloper"])(project.developer) : [];
    const related = allDeveloperProjects.filter((p)=>p.slug !== project.slug).slice(0, 8);
    const { lat, lon } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$geo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deriveProjectLatLon"])(project);
    const hasGallery = !!project.galleryImages?.length;
    const has3D = !!project['3D_TourLink'];
    const hasVideo = !!project.videoLink;
    const hasPDF = !!project.brochurePdfLink;
    const hasAmenities = !!project.amenities?.length;
    const hasInsights = !!project.insights;
    const hasNews = Array.isArray(project.news) && project.news.length > 0;
    const hasContact = !!project.contact;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-light",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$ProjectHero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                project: project
            }, void 0, false, {
                fileName: "[project]/app/[locale]/projects/[developer]/[slug]/page.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$KeyStats$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    project: project,
                    locale: loc
                }, void 0, false, {
                    fileName: "[project]/app/[locale]/projects/[developer]/[slug]/page.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[locale]/projects/[developer]/[slug]/page.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto px-6 py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ROICalculator$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    project: project,
                    locale: loc
                }, void 0, false, {
                    fileName: "[project]/app/[locale]/projects/[developer]/[slug]/page.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[locale]/projects/[developer]/[slug]/page.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$SectionNav$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                project: project,
                locale: loc
            }, void 0, false, {
                fileName: "[project]/app/[locale]/projects/[developer]/[slug]/page.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "overview",
                className: "max-w-6xl mx-auto px-6 py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$Overview$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    project: project,
                    locale: loc
                }, void 0, false, {
                    fileName: "[project]/app/[locale]/projects/[developer]/[slug]/page.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[locale]/projects/[developer]/[slug]/page.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            hasGallery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "gallery",
                className: "max-w-6xl mx-auto px-6 py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$Gallery$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    images: project.galleryImages,
                    title: translateText(project.projectName, loc) || project.slug
                }, void 0, false, {
                    fileName: "[project]/app/[locale]/projects/[developer]/[slug]/page.tsx",
                    lineNumber: 101,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[locale]/projects/[developer]/[slug]/page.tsx",
                lineNumber: 100,
                columnNumber: 9
            }, this),
            has3D && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "tour3d",
                className: "max-w-6xl mx-auto px-6 py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$PropVRFrame$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    url: project['3D_TourLink']
                }, void 0, false, {
                    fileName: "[project]/app/[locale]/projects/[developer]/[slug]/page.tsx",
                    lineNumber: 110,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[locale]/projects/[developer]/[slug]/page.tsx",
                lineNumber: 109,
                columnNumber: 9
            }, this),
            hasVideo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "video",
                className: "max-w-6xl mx-auto px-6 py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$VideoBlock$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    src: project.videoLink,
                    poster: project.heroImage || project.galleryImages?.[0]
                }, void 0, false, {
                    fileName: "[project]/app/[locale]/projects/[developer]/[slug]/page.tsx",
                    lineNumber: 116,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[locale]/projects/[developer]/[slug]/page.tsx",
                lineNumber: 115,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "map",
                className: "max-w-6xl mx-auto px-6 py-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-gray-800 mb-2",
                                children: loc === 'ar' ? '📍 الموقع' : '📍 Location'
                            }, void 0, false, {
                                fileName: "[project]/app/[locale]/projects/[developer]/[slug]/page.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-sm",
                                children: loc === 'ar' ? 'موقع المشروع على الخريطة' : 'Project location on the map'
                            }, void 0, false, {
                                fileName: "[project]/app/[locale]/projects/[developer]/[slug]/page.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[locale]/projects/[developer]/[slug]/page.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$ProjectLocationMap$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        latitude: lat ?? undefined,
                        longitude: lon ?? undefined,
                        title: translateText(project.projectName, loc) || project.slug,
                        locationText: translateText(project.location, loc),
                        height: "400px"
                    }, void 0, false, {
                        fileName: "[project]/app/[locale]/projects/[developer]/[slug]/page.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/[locale]/projects/[developer]/[slug]/page.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            hasAmenities && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "amenities",
                className: "max-w-6xl mx-auto px-6 py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$AmenitiesGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    amenities: project.amenities,
                    locale: loc
                }, void 0, false, {
                    fileName: "[project]/app/[locale]/projects/[developer]/[slug]/page.tsx",
                    lineNumber: 146,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[locale]/projects/[developer]/[slug]/page.tsx",
                lineNumber: 145,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "docs",
                className: "max-w-6xl mx-auto px-6 py-16",
                children: hasPDF || hasGallery ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$DocsBlock$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    brochureUrl: project.brochurePdfLink,
                    galleryImages: project.galleryImages || [],
                    projectName: translateText(project.projectName, loc) || project.slug
                }, void 0, false, {
                    fileName: "[project]/app/[locale]/projects/[developer]/[slug]/page.tsx",
                    lineNumber: 152,
                    columnNumber: 7
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$ProjectNotFound$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    developer: developer,
                    slug: slug,
                    developerProjects: allDeveloperProjects,
                    otherProjects: []
                }, void 0, false, {
                    fileName: "[project]/app/[locale]/projects/[developer]/[slug]/page.tsx",
                    lineNumber: 160,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[locale]/projects/[developer]/[slug]/page.tsx",
                lineNumber: 150,
                columnNumber: 3
            }, this),
            hasInsights && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "insights",
                className: "max-w-6xl mx-auto px-6 py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$Insights$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    text: translateText(project.insights, loc)
                }, void 0, false, {
                    fileName: "[project]/app/[locale]/projects/[developer]/[slug]/page.tsx",
                    lineNumber: 171,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[locale]/projects/[developer]/[slug]/page.tsx",
                lineNumber: 170,
                columnNumber: 9
            }, this),
            hasNews && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "news",
                className: "max-w-6xl mx-auto px-6 py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$NewsBlock$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    news: project.news || [],
                    locale: loc
                }, void 0, false, {
                    fileName: "[project]/app/[locale]/projects/[developer]/[slug]/page.tsx",
                    lineNumber: 177,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[locale]/projects/[developer]/[slug]/page.tsx",
                lineNumber: 176,
                columnNumber: 9
            }, this),
            hasContact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "contact",
                className: "max-w-6xl mx-auto px-6 py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$ContactBlock$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    contact: project.contact,
                    projectName: translateText(project.projectName, loc) || project.slug,
                    developer: project.developer,
                    slug: project.slug
                }, void 0, false, {
                    fileName: "[project]/app/[locale]/projects/[developer]/[slug]/page.tsx",
                    lineNumber: 183,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[locale]/projects/[developer]/[slug]/page.tsx",
                lineNumber: 182,
                columnNumber: 9
            }, this),
            related.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "related",
                className: "max-w-6xl mx-auto px-6 py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$RelatedCarousel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    projects: related,
                    locale: loc
                }, void 0, false, {
                    fileName: "[project]/app/[locale]/projects/[developer]/[slug]/page.tsx",
                    lineNumber: 197,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[locale]/projects/[developer]/[slug]/page.tsx",
                lineNumber: 196,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/[locale]/projects/[developer]/[slug]/page.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/[locale]/projects/[developer]/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/[locale]/projects/[developer]/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4c267926._.js.map