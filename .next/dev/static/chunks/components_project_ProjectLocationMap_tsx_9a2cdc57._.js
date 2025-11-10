(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/project/ProjectLocationMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectLocationMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const isValidCoordinate = (value)=>{
    return typeof value === "number" && !Number.isNaN(value) && Number.isFinite(value);
};
function ProjectLocationMap({ latitude, longitude, title, locationText, height = "400px", className }) {
    const hasLatLon = isValidCoordinate(latitude) && isValidCoordinate(longitude) && // استبعاد قيمة 0 التي قد تأتي من بيانات غير صالحة
    Math.abs(latitude) > 0.0001 && Math.abs(longitude) > 0.0001;
    // عند توفر الإحداثيات: استخدم تضمين خرائط Google لعرض موقع المشروع فقط
    if (hasLatLon) {
        const lat = latitude;
        const lon = longitude;
        const src = `https://maps.google.com/maps?q=${lat},${lon}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-lg overflow-hidden border border-[var(--gold)] shadow-[0_0_0_1px_rgba(var(--gold-rgb),0.35)] " + (className ?? ""),
            style: {
                height
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                title: title ?? "Project Location Map",
                src: src,
                width: "100%",
                height: "100%",
                loading: "lazy",
                style: {
                    border: 0
                },
                referrerPolicy: "no-referrer-when-downgrade",
                allowFullScreen: true
            }, void 0, false, {
                fileName: "[project]/components/project/ProjectLocationMap.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/project/ProjectLocationMap.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this);
    }
    // Fallback: Google Maps embed using location text if provided.
    const q = (locationText ?? title ?? "").trim();
    if (q.length > 0) {
        const src = `https://maps.google.com/maps?q=${encodeURIComponent(q)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-lg overflow-hidden border border-[var(--gold)] shadow-[0_0_0_1px_rgba(var(--gold-rgb),0.25)] " + (className ?? ""),
            style: {
                height
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                title: title ?? "Project Location Map",
                src: src,
                width: "100%",
                height: "100%",
                loading: "lazy",
                style: {
                    border: 0
                },
                referrerPolicy: "no-referrer-when-downgrade",
                allowFullScreen: true
            }, void 0, false, {
                fileName: "[project]/components/project/ProjectLocationMap.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/project/ProjectLocationMap.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this);
    }
    // No coordinates and no location text available.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center rounded-lg border border-neutral-300 bg-neutral-50 text-neutral-700 " + (className ?? ""),
        style: {
            height
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "لا توجد معلومات كافية لعرض الخريطة حالياً."
        }, void 0, false, {
            fileName: "[project]/components/project/ProjectLocationMap.tsx",
            lineNumber: 95,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/project/ProjectLocationMap.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_c = ProjectLocationMap;
var _c;
__turbopack_context__.k.register(_c, "ProjectLocationMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/project/ProjectLocationMap.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/project/ProjectLocationMap.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_project_ProjectLocationMap_tsx_9a2cdc57._.js.map