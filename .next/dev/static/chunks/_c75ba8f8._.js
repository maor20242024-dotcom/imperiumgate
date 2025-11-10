(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/LoadingSpinner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoadingSpinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
'use client';
;
;
function LoadingSpinner({ size = 'md', className = '' }) {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center justify-center ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            style: {
                width: size === 'sm' ? '1rem' : size === 'md' ? '2rem' : '3rem',
                height: size === 'sm' ? '1rem' : size === 'md' ? '2rem' : '3rem',
                border: '2px solid rgba(212, 175, 55, 0.3)',
                borderTop: '2px solid rgb(212, 175, 55)',
                borderRadius: '50%'
            },
            animate: {
                rotate: 360
            },
            transition: {
                duration: 1,
                repeat: Infinity,
                ease: 'linear'
            }
        }, void 0, false, {
            fileName: "[project]/components/ui/LoadingSpinner.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/LoadingSpinner.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = LoadingSpinner;
var _c;
__turbopack_context__.k.register(_c, "LoadingSpinner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/LazyVideo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LazyVideo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LoadingSpinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LoadingSpinner.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function LazyVideo({ src, poster, className = '', controls = true, autoPlay = false, muted = true, loop = false, width, height, alt = 'Video content', style, showPosterWhenIdle = true }) {
    _s();
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isInView, setIsInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LazyVideo.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "LazyVideo.useEffect": ([entry])=>{
                    if (entry.isIntersecting && !isInView) {
                        setIsInView(true);
                        setIsLoading(true);
                    }
                }
            }["LazyVideo.useEffect"], {
                threshold: 0.1,
                rootMargin: '50px'
            });
            if (containerRef.current) {
                observer.observe(containerRef.current);
            }
            return ({
                "LazyVideo.useEffect": ()=>{
                    if (containerRef.current) {
                        observer.unobserve(containerRef.current);
                    }
                }
            })["LazyVideo.useEffect"];
        }
    }["LazyVideo.useEffect"], [
        isInView
    ]);
    // Cleanup effect to handle video element when component unmounts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LazyVideo.useEffect": ()=>{
            return ({
                "LazyVideo.useEffect": ()=>{
                    // Clean up video element if it exists
                    if (videoRef.current) {
                        videoRef.current.pause();
                        videoRef.current.src = '';
                        videoRef.current.load();
                    }
                }
            })["LazyVideo.useEffect"];
        }
    }["LazyVideo.useEffect"], []);
    const handleVideoLoad = ()=>{
        setIsLoaded(true);
        setIsLoading(false);
        setError(false);
    };
    const handleVideoError = (e)=>{
        const video = e.currentTarget;
        const error = video.error;
        // Only set error state for actual errors, not aborted requests
        if (error && error.code !== MediaError.MEDIA_ERR_ABORTED) {
            console.warn('Video loading error:', {
                code: error.code,
                message: error.message,
                src: src
            });
            setError(true);
        }
        setIsLoading(false);
    };
    const handleVideoAbort = ()=>{
        // Video loading was aborted (normal during navigation)
        setIsLoading(false);
    // Don't set error state for aborted requests
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: `relative overflow-hidden ${className}`,
        style: {
            width,
            height
        },
        children: [
            !isInView && (showPosterWhenIdle && poster ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 w-full h-full bg-gray-900/40 flex items-center justify-center pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: poster,
                    alt: alt,
                    className: "w-full h-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/components/ui/LazyVideo.tsx",
                    lineNumber: 120,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/LazyVideo.tsx",
                lineNumber: 119,
                columnNumber: 11
            }, this) : // No poster when idle — parent background will be visible
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/ui/LazyVideo.tsx",
                lineNumber: 128,
                columnNumber: 11
            }, this)),
            isInView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        style: {
                            position: 'absolute',
                            inset: 0,
                            backgroundColor: 'rgba(17, 24, 39, 0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 10,
                            pointerEvents: 'none'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LoadingSpinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    size: "lg"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/LazyVideo.tsx",
                                    lineNumber: 150,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white mt-4",
                                    children: "Loading video..."
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/LazyVideo.tsx",
                                    lineNumber: 151,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/LazyVideo.tsx",
                            lineNumber: 149,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/LazyVideo.tsx",
                        lineNumber: 135,
                        columnNumber: 13
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        style: {
                            position: 'absolute',
                            inset: 0,
                            backgroundColor: 'rgba(17, 24, 39, 0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center text-red-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-4xl mb-2",
                                    children: "⚠️"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/LazyVideo.tsx",
                                    lineNumber: 170,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Failed to load video"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/LazyVideo.tsx",
                                    lineNumber: 171,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/LazyVideo.tsx",
                            lineNumber: 169,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/LazyVideo.tsx",
                        lineNumber: 157,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        ref: videoRef,
                        src: src,
                        poster: poster,
                        controls: controls,
                        autoPlay: autoPlay,
                        muted: muted,
                        loop: loop,
                        playsInline: true,
                        preload: "none",
                        style: style,
                        className: `w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`,
                        onLoadedData: handleVideoLoad,
                        onError: handleVideoError,
                        onAbort: handleVideoAbort
                    }, void 0, false, {
                        fileName: "[project]/components/ui/LazyVideo.tsx",
                        lineNumber: 176,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/LazyVideo.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
_s(LazyVideo, "kkxBw0dsfVy1Eh7DSu7BVPqN62w=");
_c = LazyVideo;
var _c;
__turbopack_context__.k.register(_c, "LazyVideo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/home/Hero.tsx
__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LazyVideo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LazyVideo.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function Hero({ titleAr, subtitleAr, titleEn, subtitleEn, locale }) {
    const title = locale === 'ar' ? titleAr : titleEn;
    const subtitle = locale === 'ar' ? subtitleAr : subtitleEn;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative h-screen min-h-[100svh] overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 -z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LazyVideo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "https://ggfx-onebrokergroup.s3.eu-west-2.amazonaws.com/i/Homepage_Banner_Video2_8328_Bdd5c7_f31f1b5265.mp4",
                        autoPlay: true,
                        loop: true,
                        muted: true,
                        controls: false,
                        poster: "/images/hero-fallback.jpg",
                        className: "w-full h-full object-cover",
                        alt: "Homepage hero video"
                    }, void 0, false, {
                        fileName: "[project]/components/home/Hero.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 w-full h-full bg-gradient-to-b from-black/40 via-black/20 to-black/70"
                    }, void 0, false, {
                        fileName: "[project]/components/home/Hero.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/Hero.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-screen flex items-end pb-24 ${locale === 'ar' ? 'text-right' : 'text-left'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `text-white max-w-3xl ${locale === 'ar' ? 'ml-auto' : ''}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "luxury-title text-4xl md:text-6xl lg:text-7xl font-bold gold-gradient luxury-text-shadow",
                            dir: "auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-display",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/components/home/Hero.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/home/Hero.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `mt-6 text-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed ${locale === 'ar' ? 'font-arabic' : 'font-sans'}`,
                            children: subtitle
                        }, void 0, false, {
                            fileName: "[project]/components/home/Hero.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 flex gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: 0.97
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/${locale}/projects`,
                                        prefetch: false,
                                        className: "gold-btn luxury-glow hover:animate-gold-pulse transition-all duration-300 will-change-transform",
                                        children: locale === 'ar' ? 'استكشف المشاريع' : 'Explore Projects'
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/Hero.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/home/Hero.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: 0.97
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/${locale}/contact`,
                                        prefetch: false,
                                        className: "gold-outline luxury-border hover:luxury-glow transition-all duration-300 will-change-transform",
                                        children: locale === 'ar' ? 'تواصل معنا' : 'Contact Us'
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/Hero.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/home/Hero.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/Hero.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/Hero.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/Hero.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/Hero.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/contentful-utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * أدوات تحسين روابط Contentful + حل مسارات الوسائط (directAccess)
 * - tuneContentful*: لتحسين الصور من Contentful
 * - removeContentfulProxy: لإرجاع رابط Contentful الأصلي إن كان يمر عبر /api/proxy/file
 * - directAccess: يقرّر إن كان الرابط يجب أن يُحمَّل مباشرة أو عبر البروكسي
 */ /* ===================== تحسينات Contentful للصور ===================== */ /**
 * تحسين رابط Contentful لتقليل الحجم وتحسين الأداء
 * @param url - الرابط الأصلي من Contentful
 * @param options - خيارات التحسين
 * @returns الرابط المحسن
 */ __turbopack_context__.s([
    "directAccess",
    ()=>directAccess,
    "removeContentfulProxy",
    ()=>removeContentfulProxy,
    "tuneContentful",
    ()=>tuneContentful,
    "tuneContentfulForGallery",
    ()=>tuneContentfulForGallery,
    "tuneContentfulForHero",
    ()=>tuneContentfulForHero,
    "tuneContentfulForThumbnail",
    ()=>tuneContentfulForThumbnail
]);
function tuneContentful(url, options = {}) {
    try {
        const u = new URL(url);
        // تحقق من أن الرابط من Contentful
        if (!u.hostname.endsWith('ctfassets.net')) {
            return url;
        }
        const { quality = 70, width = 1600, format = 'webp', removeHeight = true } = options;
        // تطبيق التحسينات
        u.searchParams.set('fm', format);
        u.searchParams.set('q', quality.toString());
        // تعديل العرض إذا كان موجوداً
        if (u.searchParams.has('w')) {
            u.searchParams.set('w', width.toString());
        }
        // إزالة الارتفاع للسماح لـ Next/Image بضبطه تلقائياً
        if (removeHeight && u.searchParams.has('h')) {
            u.searchParams.delete('h');
        }
        return u.toString();
    } catch  {
        // في حالة خطأ في تحليل الرابط، أرجع الرابط الأصلي
        return url;
    }
}
function tuneContentfulForGallery(url) {
    return tuneContentful(url, {
        quality: 60,
        width: 1200,
        format: 'webp'
    });
}
function tuneContentfulForThumbnail(url) {
    return tuneContentful(url, {
        quality: 65,
        width: 400,
        format: 'webp'
    });
}
function tuneContentfulForHero(url) {
    return tuneContentful(url, {
        quality: 80,
        width: 1920,
        format: 'webp'
    });
}
function removeContentfulProxy(url) {
    try {
        const u = new URL(url);
        // تحقق من أن الرابط يمر عبر البروكسي
        if (u.pathname === '/api/proxy/file' && u.searchParams.has('url')) {
            const originalUrl = u.searchParams.get('url');
            if (originalUrl) {
                const decodedUrl = decodeURIComponent(originalUrl);
                const originalU = new URL(decodedUrl);
                // تحقق من أن الرابط الأصلي من Contentful
                if (originalU.hostname.endsWith('ctfassets.net')) {
                    return decodedUrl;
                }
            }
        }
        return url;
    } catch  {
        return url;
    }
}
/* ===================== حل مسارات الوسائط (بروكسي/تحميل مباشر) ===================== */ /** تطابق آمن: يطابق الدومين نفسه أو أي تحت-دومين منه */ function hostMatches(host, domain) {
    return host === domain || host.endsWith(`.${domain}`);
}
/** لائحة الدومينات التي يجب تحميلها مباشرة (بدون بروكسي) */ const SKIP_DIRECT_HOSTS = [
    // Contentful
    'images.ctfassets.net',
    'assets.ctfassets.net',
    'downloads.ctfassets.net',
    'videos.ctfassets.net',
    // Emaar
    'cdn.properties.emaar.com',
    'properties.emaar.com',
    // Sobha
    'sobharealty.com',
    'sobha.com',
    // Nakheel
    'www.nakheel.com',
    'nakheel-aut.sitefinity.cloud',
    // DAMAC CDN
    'prod-cdn.damacproperties.com',
    // PropVR / Matterport (جولات 3D)
    'view.propvr.tech',
    'propvr.tech',
    'my.matterport.com',
    'matterport.com',
    // منصات فيديو
    'www.youtube.com',
    'youtu.be',
    'player.vimeo.com',
    // خرائط
    'www.google.com',
    'maps.google.com',
    // مستضيفات وثائق
    'dubaiholding.box.com',
    'www.scribd.com'
];
function directAccess(src) {
    if (!src) return '';
    const raw = src.trim();
    const lower = raw.toLowerCase();
    // اترك الروابط المحلية والـ data/blob كما هي
    if (lower.startsWith('/') || // داخل public أو مسار نسبي
    lower.startsWith('data:') || lower.startsWith('blob:')) {
        return raw;
    }
    // ابنِ URL بقاعدة آمنة في SSR/CSR
    const base = ("TURBOPACK compile-time value", "object") !== 'undefined' && window.location?.origin ? window.location.origin : 'http://localhost';
    let u;
    try {
        u = new URL(raw, base);
    } catch  {
        // في حال مسار غير قابل للبارس، أعده كما هو
        return raw;
    }
    const host = (u.hostname || '').toLowerCase();
    // إن كان ضمن لائحة التخطي، حمّل مباشرة
    if (SKIP_DIRECT_HOSTS.some((d)=>hostMatches(host, d))) {
        return u.toString();
    }
    // خلاف ذلك، مرّره عبر البروكسي
    return `/api/proxy/file?url=${encodeURIComponent(u.toString())}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/OrbitCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OrbitCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contentful$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/contentful-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LazyVideo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LazyVideo.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function OrbitCarousel({ slides }) {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [intervalRef, setIntervalRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Memoize slides to prevent unnecessary re-renders
    const memoizedSlides = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OrbitCarousel.useMemo[memoizedSlides]": ()=>slides || []
    }["OrbitCarousel.useMemo[memoizedSlides]"], [
        slides
    ]);
    // Auto-advance carousel with cleanup
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrbitCarousel.useEffect": ()=>{
            if (!memoizedSlides.length) return;
            const id = setInterval({
                "OrbitCarousel.useEffect.id": ()=>{
                    setActive({
                        "OrbitCarousel.useEffect.id": (prevActive)=>(prevActive + 1) % memoizedSlides.length
                    }["OrbitCarousel.useEffect.id"]);
                }
            }["OrbitCarousel.useEffect.id"], 8000);
            setIntervalRef(id);
            return ({
                "OrbitCarousel.useEffect": ()=>{
                    if (id) clearInterval(id);
                }
            })["OrbitCarousel.useEffect"];
        }
    }["OrbitCarousel.useEffect"], [
        memoizedSlides.length
    ]);
    // Reset auto-advance timer on manual change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrbitCarousel.useEffect": ()=>{
            if (!memoizedSlides.length) return;
            if (intervalRef) {
                clearInterval(intervalRef);
                const id = setInterval({
                    "OrbitCarousel.useEffect.id": ()=>{
                        setActive({
                            "OrbitCarousel.useEffect.id": (prevActive)=>(prevActive + 1) % memoizedSlides.length
                        }["OrbitCarousel.useEffect.id"]);
                    }
                }["OrbitCarousel.useEffect.id"], 8000);
                setIntervalRef(id);
            }
        }
    }["OrbitCarousel.useEffect"], [
        active,
        memoizedSlides.length
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-screen overflow-hidden bg-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 border-4 border-gold/40 rounded-3xl shadow-2xl shadow-gold/20 z-10 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/home/OrbitCarousel.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-gold/10 animate-pulse-slow z-5 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/home/OrbitCarousel.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            memoizedSlides[active] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 transition-opacity duration-1000 will-change-[opacity] opacity-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-4 border-2 border-gold/60 rounded-2xl shadow-lg shadow-gold/30 z-10 pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/components/home/OrbitCarousel.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LazyVideo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contentful$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["directAccess"])(memoizedSlides[active].videoLink),
                        poster: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contentful$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["directAccess"])(memoizedSlides[active].fallbackImage) || '/images/hero-fallback.jpg',
                        autoPlay: true,
                        loop: true,
                        muted: true,
                        controls: false,
                        className: "w-full h-full object-cover rounded-xl",
                        alt: memoizedSlides[active].title || 'Project video'
                    }, void 0, false, {
                        fileName: "[project]/components/home/OrbitCarousel.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this)
                ]
            }, `slide-${active}`, true, {
                fileName: "[project]/components/home/OrbitCarousel.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-24 left-16 text-amber-100 max-w-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-fadeInUp",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm mb-2 opacity-80 transition-all duration-500",
                            children: memoizedSlides[active]?.developer
                        }, void 0, false, {
                            fileName: "[project]/components/home/OrbitCarousel.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-5xl font-amiri font-bold leading-tight transition-all duration-500",
                            children: memoizedSlides[active]?.title
                        }, void 0, false, {
                            fileName: "[project]/components/home/OrbitCarousel.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    ]
                }, `content-${active}`, true, {
                    fileName: "[project]/components/home/OrbitCarousel.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/OrbitCarousel.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2",
                children: memoizedSlides.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActive(index),
                        className: `w-3 h-3 rounded-full transition-all duration-300 ${index === active ? 'bg-amber-400 scale-125' : 'bg-white/50 hover:bg-white/70'}`,
                        "aria-label": `Go to slide ${index + 1}`
                    }, `dot-${index}`, false, {
                        fileName: "[project]/components/home/OrbitCarousel.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/home/OrbitCarousel.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/home/OrbitCarousel.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/OrbitCarousel.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(OrbitCarousel, "cIEz+HjESmU+62shJxVdv2EwJSA=");
_c = OrbitCarousel;
var _c;
__turbopack_context__.k.register(_c, "OrbitCarousel");
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
const SUPPORTED_LOCALES = (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SUPPORTED_LANGUAGES ?? 'ar,en').split(',').map((s)=>s.trim().toLowerCase()).filter(Boolean);
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
    const loc = (locale || 'ar').toString();
    const rawSlug = project?.slug && String(project.slug).trim() || ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(project?.projectName, locale)?.toString().trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]+/g, '') ?? '');
    const slug = rawSlug;
    const devSeg = project?.developer && String(project.developer).trim() || '';
    const USE_DEVELOPER_SEGMENT = true; // ← عندكم: /[locale]/projects/[developer]/[slug]
    const href = slug ? USE_DEVELOPER_SEGMENT && devSeg ? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringRoutes"].projectShow(loc, encodeURIComponent(devSeg), encodeURIComponent(slug)) : `/${loc}/projects/${encodeURIComponent(slug)}` : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringRoutes"].projectsIndex(loc);
    // Debug logging
    if ("TURBOPACK compile-time truthy", 1) {
        // eslint-disable-next-line no-console
        console.debug('ProjectCard href =>', href, {
            devSeg,
            slug,
            USE_DEVELOPER_SEGMENT
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
                lineNumber: 110,
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
                                lineNumber: 116,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectCard.tsx",
                                lineNumber: 126,
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
                            lineNumber: 130,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectCard.tsx",
                        lineNumber: 129,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ProjectCard.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ProjectCard.tsx",
                lineNumber: 112,
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
                        lineNumber: 139,
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
                            lineNumber: 151,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectCard.tsx",
                        lineNumber: 144,
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
                            lineNumber: 165,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectCard.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProjectCard.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col justify-between h-[calc(100%-11rem)] p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: href,
                            className: "block",
                            prefetch: false,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: `luxury-title text-lg gold-gradient-static luxury-text-shadow leading-snug line-clamp-2 hover:text-gold transition-colors duration-200 ${locale === 'ar' ? 'font-arabic' : 'font-display'}`,
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/components/ProjectCard.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `mt-1 text-xs text-gray-400 ${locale === 'ar' ? 'font-arabic' : 'font-sans'}`,
                                    children: subtitle
                                }, void 0, false, {
                                    fileName: "[project]/components/ProjectCard.tsx",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `mt-3 text-sm text-gray-300 line-clamp-2 ${locale === 'ar' ? 'font-arabic' : 'font-sans'}`,
                                    children: String((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(project.summary, locale) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["t"])(project.description, locale) || '').slice(0, 140)
                                }, void 0, false, {
                                    fileName: "[project]/components/ProjectCard.tsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProjectCard.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectCard.tsx",
                        lineNumber: 170,
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
                                                lineNumber: 204,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-semibold text-white/90",
                                                children: price
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProjectCard.tsx",
                                                lineNumber: 205,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProjectCard.tsx",
                                        lineNumber: 203,
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
                                                lineNumber: 210,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-semibold text-white/90",
                                                children: area
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProjectCard.tsx",
                                                lineNumber: 211,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProjectCard.tsx",
                                        lineNumber: 209,
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
                                                lineNumber: 216,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-semibold text-white/90",
                                                children: bedrooms
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProjectCard.tsx",
                                                lineNumber: 217,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProjectCard.tsx",
                                        lineNumber: 215,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ProjectCard.tsx",
                                lineNumber: 193,
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
                                    lineNumber: 224,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectCard.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProjectCard.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProjectCard.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProjectCard.tsx",
        lineNumber: 99,
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
"[project]/components/ui/MediaSuspense.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MediaSuspense
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// Removed framer-motion to avoid TS typing issues in build
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LoadingSpinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LoadingSpinner.tsx [app-client] (ecmascript)");
'use client';
;
;
;
const getMediaIcon = (type)=>{
    switch(type){
        case 'image':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-12 h-12",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
                }, void 0, false, {
                    fileName: "[project]/components/ui/MediaSuspense.tsx",
                    lineNumber: 21,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ui/MediaSuspense.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case 'video':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-12 h-12",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"
                }, void 0, false, {
                    fileName: "[project]/components/ui/MediaSuspense.tsx",
                    lineNumber: 27,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ui/MediaSuspense.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case 'pdf':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-12 h-12",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"
                }, void 0, false, {
                    fileName: "[project]/components/ui/MediaSuspense.tsx",
                    lineNumber: 33,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ui/MediaSuspense.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case 'gallery':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-12 h-12",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11.5-6L8 13.5l2.5 3.01L14.5 12 18 16H8l2.5-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"
                }, void 0, false, {
                    fileName: "[project]/components/ui/MediaSuspense.tsx",
                    lineNumber: 39,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ui/MediaSuspense.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-12 h-12",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                }, void 0, false, {
                    fileName: "[project]/components/ui/MediaSuspense.tsx",
                    lineNumber: 45,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/ui/MediaSuspense.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
    }
};
const getLoadingText = (type, customText)=>{
    if (customText) return customText;
    switch(type){
        case 'image':
            return 'Loading image...';
        case 'video':
            return 'Loading video...';
        case 'pdf':
            return 'Loading document...';
        case 'gallery':
            return 'Loading gallery...';
        default:
            return 'Loading content...';
    }
};
function MediaFallback({ type = 'general', className = '', height, width, loadingText }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `
        bg-gradient-to-br from-zinc-900 to-zinc-800 
        border border-zinc-700/50 
        rounded-lg 
        flex flex-col items-center justify-center 
        text-zinc-400
        ${className}
      `,
        style: {
            height: height || '300px',
            width: width || '100%',
            minHeight: '200px',
            transition: 'opacity 0.3s ease',
            opacity: 1
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full bg-gradient-to-r from-gold/10 via-transparent to-gold/10 animate-pulse"
                }, void 0, false, {
                    fileName: "[project]/components/ui/MediaSuspense.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/MediaSuspense.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 text-zinc-500 animate-pulse",
                        children: getMediaIcon(type)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/MediaSuspense.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LoadingSpinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            size: "md"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/MediaSuspense.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/MediaSuspense.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium animate-pulse",
                        children: getLoadingText(type, loadingText)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/MediaSuspense.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex space-x-1 mt-3",
                        children: [
                            0,
                            1,
                            2
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2 h-2 bg-gold/40 rounded-full animate-pulse",
                                style: {
                                    animationDelay: `${i * 200}ms`
                                }
                            }, i, false, {
                                fileName: "[project]/components/ui/MediaSuspense.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/ui/MediaSuspense.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/MediaSuspense.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/MediaSuspense.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c = MediaFallback;
function MediaSuspense({ children, type = 'general', className = '', height, width, loadingText }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MediaFallback, {
            type: type,
            className: className,
            height: height,
            width: width,
            loadingText: loadingText
        }, void 0, false, {
            fileName: "[project]/components/ui/MediaSuspense.tsx",
            lineNumber: 141,
            columnNumber: 9
        }, void 0),
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/MediaSuspense.tsx",
        lineNumber: 139,
        columnNumber: 5
    }, this);
}
_c1 = MediaSuspense;
var _c, _c1;
__turbopack_context__.k.register(_c, "MediaFallback");
__turbopack_context__.k.register(_c1, "MediaSuspense");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_c75ba8f8._.js.map