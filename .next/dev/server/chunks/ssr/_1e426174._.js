module.exports = [
"[project]/lib/i18n-client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLocale",
    ()=>useLocale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
;
function useLocale() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    return params?.locale === 'en' ? 'en' : 'ar';
}
}),
"[project]/components/project/ContactBlock.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LuxuryButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n-client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function ContactBlock({ projectName = '', developer = '', slug = '', contact }) {
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocale"])();
    const rtl = locale === 'ar';
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        phone: '',
        email: '',
        budget: '',
        unitType: '',
        message: ''
    });
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const actualPhoneE164 = contact?.whatsapp || '971556628972';
    const actualPhoneDisplay = contact?.phone || '+971 55 662 8972';
    const whatsAppHref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const msg = `Hello Imperium Gate,%0A` + `I'm interested in: ${projectName}${developer ? ` (${developer})` : ''}.%0A` + (slug ? `Project URL: https://imperium-gate.com/projects/${developer}/${slug}%0A` : '') + `Please contact me.`;
        return `https://wa.me/${actualPhoneE164}?text=${msg}`;
    }, [
        projectName,
        developer,
        slug,
        actualPhoneE164
    ]);
    const onSubmit = async (e)=>{
        e.preventDefault();
        if (!form.name || !form.phone) return alert(rtl ? 'الاسم والهاتف إجباريان' : 'Name and phone are required');
        try {
            setSubmitting(true);
            // TODO: اربط مع API لاحقاً. مؤقتًا نرسل بريد/ويب هوك أو نحفظ في لوج.
            console.log('Lead:', {
                projectName,
                developer,
                slug,
                ...form
            });
            alert(rtl ? 'تم إرسال طلبك. سنعاود الاتصال قريبًا.' : 'Submitted! We will contact you shortly.');
            setForm({
                name: '',
                phone: '',
                email: '',
                budget: '',
                unitType: '',
                message: ''
            });
        } finally{
            setSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "rounded-2xl border border-gold/30 bg-black/60 backdrop-blur p-5 sm:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl sm:text-2xl font-bold text-gold mb-3",
                children: rtl ? 'تواصل' : 'Contact'
            }, void 0, false, {
                fileName: "[project]/components/project/ContactBlock.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `grid grid-cols-1 lg:grid-cols-3 gap-5 ${rtl ? 'text-right' : 'text-left'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: whatsAppHref,
                                target: "_blank",
                                className: "block w-full rounded-xl border border-green-500/50 bg-green-500/10 px-4 py-3 font-semibold hover:bg-green-500/20 transition",
                                children: rtl ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'
                            }, void 0, false, {
                                fileName: "[project]/components/project/ContactBlock.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `tel:+${actualPhoneE164}`,
                                className: "block w-full rounded-xl border border-gold/40 bg-gold/10 px-4 py-3 font-semibold hover:bg-gold/20 transition",
                                children: rtl ? `اتصال مباشر (${actualPhoneDisplay})` : `Call Now (${actualPhoneDisplay})`
                            }, void 0, false, {
                                fileName: "[project]/components/project/ContactBlock.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                variant: "outline",
                                size: "md",
                                fullWidth: true,
                                className: "rounded-xl font-semibold",
                                onClick: ()=>alert(rtl ? 'واجهة حجز المعاينة ستُربط قريبًا.' : 'Schedule UI coming soon.'),
                                children: rtl ? 'حجز معاينة' : 'Schedule a Viewing'
                            }, void 0, false, {
                                fileName: "[project]/components/project/ContactBlock.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 rounded-xl border border-white/10 bg-white/5 p-4 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold",
                                        children: rtl ? 'مستشارك العقاري' : 'Your Advisor'
                                    }, void 0, false, {
                                        fileName: "[project]/components/project/ContactBlock.tsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-white/70",
                                        children: contact?.agentName || (rtl ? 'فريق Imperium Gate' : 'Imperium Gate Team')
                                    }, void 0, false, {
                                        fileName: "[project]/components/project/ContactBlock.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/project/ContactBlock.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/project/ContactBlock.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3",
                        onSubmit: onSubmit,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "rounded-lg bg-zinc-900/70 border border-zinc-700/50 px-3 py-2",
                                placeholder: rtl ? 'الاسم *' : 'Name *',
                                value: form.name,
                                onChange: (e)=>setForm({
                                        ...form,
                                        name: e.target.value
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/project/ContactBlock.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "rounded-lg bg-zinc-900/70 border border-zinc-700/50 px-3 py-2",
                                placeholder: rtl ? 'هاتف/واتساب *' : 'Phone/WhatsApp *',
                                value: form.phone,
                                onChange: (e)=>setForm({
                                        ...form,
                                        phone: e.target.value
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/project/ContactBlock.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "rounded-lg bg-zinc-900/70 border border-zinc-700/50 px-3 py-2",
                                placeholder: "Email",
                                value: form.email,
                                onChange: (e)=>setForm({
                                        ...form,
                                        email: e.target.value
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/project/ContactBlock.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "rounded-lg bg-zinc-900/70 border border-zinc-700/50 px-3 py-2",
                                placeholder: rtl ? 'ميزانية تقريبية' : 'Approx. Budget',
                                value: form.budget,
                                onChange: (e)=>setForm({
                                        ...form,
                                        budget: e.target.value
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/project/ContactBlock.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "rounded-lg bg-zinc-900/70 border border-zinc-700/50 px-3 py-2",
                                placeholder: rtl ? 'نوع الوحدة' : 'Unit Type',
                                value: form.unitType,
                                onChange: (e)=>setForm({
                                        ...form,
                                        unitType: e.target.value
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/project/ContactBlock.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                className: "sm:col-span-2 min-h-[96px] rounded-lg bg-zinc-900/70 border border-zinc-700/50 px-3 py-2",
                                placeholder: rtl ? 'رسالتك' : 'Message',
                                value: form.message,
                                onChange: (e)=>setForm({
                                        ...form,
                                        message: e.target.value
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/project/ContactBlock.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                type: "submit",
                                variant: "primary",
                                size: "md",
                                disabled: submitting,
                                className: "sm:col-span-2 rounded-xl font-semibold",
                                children: submitting ? rtl ? 'جار الإرسال...' : 'Submitting...' : rtl ? 'إرسال' : 'Send'
                            }, void 0, false, {
                                fileName: "[project]/components/project/ContactBlock.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/project/ContactBlock.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/project/ContactBlock.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/project/ContactBlock.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/LoadingSpinner.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoadingSpinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-ssr] (ecmascript)");
'use client';
;
;
function LoadingSpinner({ size = 'md', className = '' }) {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center justify-center ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
}),
"[project]/components/ui/LazyPDF.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LazyPDF
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LoadingSpinner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LoadingSpinner.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LuxuryButton.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function LazyPDF({ src, title = 'PDF Document', className = '', width = '100%', height = '600px', showDownload = true, downloadText = 'Download PDF' }) {
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isInView, setIsInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting && !isInView) {
                setIsInView(true);
                setIsLoading(true);
            }
        }, {
            threshold: 0.1,
            rootMargin: '100px'
        });
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }
        return ()=>{
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [
        isInView
    ]);
    const handleIframeLoad = ()=>{
        setIsLoaded(true);
        setIsLoading(false);
        setError(false);
    };
    const handleIframeError = ()=>{
        setIsLoading(false);
        setError(true);
    };
    const handleDownload = ()=>{
        const link = document.createElement('a');
        link.href = src;
        link.download = title;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: `relative overflow-hidden border border-yellow-400/30 rounded-xl ${className}`,
        style: {
            width,
            height
        },
        children: [
            (title || showDownload) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between p-4 bg-black/20 border-b border-yellow-400/20",
                children: [
                    title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-yellow-400 truncate",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/ui/LazyPDF.tsx",
                        lineNumber: 89,
                        columnNumber: 13
                    }, this),
                    showDownload && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        variant: "outline",
                        size: "sm",
                        onClick: handleDownload,
                        className: "ml-4",
                        children: [
                            "📥 ",
                            downloadText
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/LazyPDF.tsx",
                        lineNumber: 94,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/LazyPDF.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                style: {
                    height: title || showDownload ? 'calc(100% - 72px)' : '100%'
                },
                children: [
                    !isInView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-full bg-gray-900/50 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-gray-400 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-4xl mb-2",
                                    children: "📄"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/LazyPDF.tsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "PDF will load when visible"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/LazyPDF.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this),
                                showDownload && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    variant: "primary",
                                    size: "md",
                                    onClick: handleDownload,
                                    className: "mt-4",
                                    children: [
                                        "📥 ",
                                        downloadText
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/LazyPDF.tsx",
                                    lineNumber: 114,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/LazyPDF.tsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/LazyPDF.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this),
                    isInView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                    zIndex: 10
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LoadingSpinner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            size: "lg"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/LazyPDF.tsx",
                                            lineNumber: 144,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white mt-4",
                                            children: "Loading PDF..."
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/LazyPDF.tsx",
                                            lineNumber: 145,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/LazyPDF.tsx",
                                    lineNumber: 143,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ui/LazyPDF.tsx",
                                lineNumber: 130,
                                columnNumber: 15
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center text-red-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-4xl mb-2",
                                            children: "⚠️"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/LazyPDF.tsx",
                                            lineNumber: 164,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-4",
                                            children: "Failed to load PDF"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/LazyPDF.tsx",
                                            lineNumber: 165,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            variant: "primary",
                                            size: "md",
                                            onClick: handleDownload,
                                            children: [
                                                "📥 ",
                                                downloadText
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ui/LazyPDF.tsx",
                                            lineNumber: 166,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/LazyPDF.tsx",
                                    lineNumber: 163,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ui/LazyPDF.tsx",
                                lineNumber: 151,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                src: `${src}#toolbar=1&navpanes=1&scrollbar=1`,
                                className: `w-full h-full transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`,
                                onLoad: handleIframeLoad,
                                onError: handleIframeError,
                                title: title,
                                style: {
                                    border: 'none'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/ui/LazyPDF.tsx",
                                lineNumber: 177,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/LazyPDF.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/LazyPDF.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/InternalPDFViewer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InternalPDFViewer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LuxuryButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LazyPDF$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LazyPDF.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function InternalPDFViewer({ pdfUrl, projectName = "البروشور", onClose }) {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const locale = params?.locale || 'ar';
    const isRtl = locale === 'ar';
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [totalPages, setTotalPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Handle keyboard navigation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            if (e.key === 'Escape') {
                onClose();
            } else if (e.key === 'ArrowLeft') {
                if (isRtl) {
                    nextPage();
                } else {
                    prevPage();
                }
            } else if (e.key === 'ArrowRight') {
                if (isRtl) {
                    prevPage();
                } else {
                    nextPage();
                }
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return ()=>document.removeEventListener('keydown', handleKeyDown);
    }, [
        currentPage,
        totalPages,
        isRtl
    ]);
    const nextPage = ()=>{
        if (currentPage < totalPages) {
            setCurrentPage((prev)=>prev + 1);
        }
    };
    const prevPage = ()=>{
        if (currentPage > 1) {
            setCurrentPage((prev)=>prev - 1);
        }
    };
    const downloadPDF = ()=>{
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = `${projectName}-brochure.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    // Generate PDF viewer URL with page parameter
    const getPDFViewerUrl = ()=>{
        // Using PDF.js viewer with custom parameters
        return `${pdfUrl}#page=${currentPage}&zoom=page-fit&toolbar=0&navpanes=0&scrollbar=0`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/95 z-50 flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between p-4 bg-black/80 backdrop-blur-sm border-b border-gold/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: `text-xl font-bold gold-gradient ${isRtl ? 'font-arabic' : 'font-sans'}`,
                                children: isRtl ? `بروشور ${projectName}` : `${projectName} Brochure`
                            }, void 0, false, {
                                fileName: "[project]/components/ui/InternalPDFViewer.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `text-sm text-white/60 ${isRtl ? 'font-arabic' : 'font-sans'}`,
                                children: isRtl ? `صفحة ${currentPage} من ${totalPages}` : `Page ${currentPage} of ${totalPages}`
                            }, void 0, false, {
                                fileName: "[project]/components/ui/InternalPDFViewer.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/InternalPDFViewer.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                variant: "primary",
                                size: "sm",
                                onClick: downloadPDF,
                                className: `rounded-lg ${isRtl ? 'font-arabic' : 'font-sans'}`,
                                title: isRtl ? 'تحميل البروشور' : 'Download Brochure',
                                children: [
                                    "📥 ",
                                    isRtl ? 'تحميل' : 'Download'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/InternalPDFViewer.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                variant: "outline",
                                size: "sm",
                                onClick: onClose,
                                className: "w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:text-gold p-0 min-w-0",
                                title: isRtl ? 'إغلاق' : 'Close',
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M6 18L18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/InternalPDFViewer.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/InternalPDFViewer.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ui/InternalPDFViewer.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/InternalPDFViewer.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/InternalPDFViewer.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 relative",
                children: [
                    isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center bg-black/50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 border-4 border-gold/30 border-t-gold rounded-full animate-spin mx-auto mb-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/InternalPDFViewer.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-white ${isRtl ? 'font-arabic' : 'font-sans'}`,
                                    children: isRtl ? 'جاري تحميل البروشور...' : 'Loading brochure...'
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/InternalPDFViewer.tsx",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/InternalPDFViewer.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/InternalPDFViewer.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this),
                    error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center h-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center max-w-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-8 h-8 text-red-400",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/InternalPDFViewer.tsx",
                                            lineNumber: 131,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/InternalPDFViewer.tsx",
                                        lineNumber: 130,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/InternalPDFViewer.tsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: `text-xl font-bold text-white mb-2 ${isRtl ? 'font-arabic' : 'font-sans'}`,
                                    children: isRtl ? 'خطأ في تحميل البروشور' : 'Error Loading Brochure'
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/InternalPDFViewer.tsx",
                                    lineNumber: 134,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-gray-400 mb-4 ${isRtl ? 'font-arabic' : 'font-sans'}`,
                                    children: isRtl ? 'لا يمكن عرض البروشور في الوقت الحالي' : 'Unable to display the brochure at this time'
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/InternalPDFViewer.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    variant: "primary",
                                    size: "md",
                                    onClick: downloadPDF,
                                    className: `rounded-lg ${isRtl ? 'font-arabic' : 'font-sans'}`,
                                    children: isRtl ? 'تحميل البروشور' : 'Download Brochure'
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/InternalPDFViewer.tsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/InternalPDFViewer.tsx",
                            lineNumber: 128,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/InternalPDFViewer.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LazyPDF$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: getPDFViewerUrl(),
                        title: `${projectName} Brochure`,
                        className: "w-full h-full",
                        showDownload: false
                    }, void 0, false, {
                        fileName: "[project]/components/ui/InternalPDFViewer.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/InternalPDFViewer.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center gap-4 p-4 bg-black/80 backdrop-blur-sm border-t border-gold/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        variant: "outline",
                        size: "sm",
                        onClick: prevPage,
                        disabled: currentPage <= 1,
                        className: `rounded-lg disabled:opacity-50 disabled:cursor-not-allowed ${isRtl ? 'font-arabic' : 'font-sans'}`,
                        children: isRtl ? '→ التالي' : '← Previous'
                    }, void 0, false, {
                        fileName: "[project]/components/ui/InternalPDFViewer.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                min: "1",
                                max: totalPages,
                                value: currentPage,
                                onChange: (e)=>{
                                    const page = parseInt(e.target.value);
                                    if (page >= 1 && page <= totalPages) {
                                        setCurrentPage(page);
                                    }
                                },
                                className: "w-16 px-2 py-1 bg-black/60 border border-gold/30 rounded text-center text-white focus:border-gold focus:outline-none"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/InternalPDFViewer.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-white/60 ${isRtl ? 'font-arabic' : 'font-sans'}`,
                                children: [
                                    "/ ",
                                    totalPages
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ui/InternalPDFViewer.tsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/InternalPDFViewer.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        variant: "outline",
                        size: "sm",
                        onClick: nextPage,
                        disabled: currentPage >= totalPages,
                        className: `rounded-lg disabled:opacity-50 disabled:cursor-not-allowed ${isRtl ? 'font-arabic' : 'font-sans'}`,
                        children: isRtl ? '← السابق' : 'Next →'
                    }, void 0, false, {
                        fileName: "[project]/components/ui/InternalPDFViewer.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/InternalPDFViewer.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: `text-white/40 text-sm ${isRtl ? 'font-arabic' : 'font-sans'}`,
                    children: isRtl ? 'استخدم الأسهم للتنقل • ESC للخروج' : 'Use arrow keys to navigate • ESC to close'
                }, void 0, false, {
                    fileName: "[project]/components/ui/InternalPDFViewer.tsx",
                    lineNumber: 204,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/InternalPDFViewer.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/InternalPDFViewer.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/project/DocsBlock.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DocsBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LuxuryButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$effect$2d$coverflow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EffectCoverflow$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/effect-coverflow.mjs [app-ssr] (ecmascript) <export default as EffectCoverflow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/navigation.mjs [app-ssr] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/pagination.mjs [app-ssr] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$thumbs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Thumbs$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/thumbs.mjs [app-ssr] (ecmascript) <export default as Thumbs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$zoom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zoom$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/zoom.mjs [app-ssr] (ecmascript) <export default as Zoom>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$InternalPDFViewer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/InternalPDFViewer.tsx [app-ssr] (ecmascript)");
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
;
function DocsBlock({ brochureUrl, galleryImages = [], projectName = "المشروع" }) {
    const [thumbsSwiper, setThumbsSwiper] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isFullscreen, setIsFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showPDFViewer, setShowPDFViewer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Helper function to validate URLs
    const isValidUrl = (url)=>{
        if (!url || typeof url !== 'string') return false;
        const trimmed = url.trim();
        if (!trimmed) return false;
        // Check for valid URL patterns
        return /^(https?:\/\/|data:|blob:)/.test(trimmed) || trimmed.startsWith('/');
    };
    // Filter and validate gallery images
    const validGalleryImages = (galleryImages || []).filter((img)=>img && isValidUrl(img)).map((img, index)=>({
            url: img,
            type: 'gallery',
            title: `صورة ${index + 1}`
        }));
    // Separate brochure from gallery images
    const hasBrochure = brochureUrl && isValidUrl(brochureUrl);
    const hasGallery = validGalleryImages.length > 0;
    // Create separate arrays for brochure and gallery
    const brochureItems = hasBrochure ? [
        {
            url: brochureUrl,
            type: 'brochure',
            title: 'البروشور الرسمي'
        }
    ] : [];
    const galleryItems = validGalleryImages;
    // Combine all items for display
    const allItems = [
        ...brochureItems,
        ...galleryItems
    ];
    // Handle keyboard navigation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            if (!isFullscreen) return;
            if (e.key === 'Escape') {
                setIsFullscreen(false);
            } else if (e.key === 'ArrowLeft') {
                setActiveIndex((prev)=>prev > 0 ? prev - 1 : allItems.length - 1);
            } else if (e.key === 'ArrowRight') {
                setActiveIndex((prev)=>prev < allItems.length - 1 ? prev + 1 : 0);
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return ()=>document.removeEventListener('keydown', handleKeyDown);
    }, [
        isFullscreen,
        allItems.length
    ]);
    if (allItems.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gradient-to-br from-black/60 to-black/40 border border-gold/30 rounded-2xl p-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-8 h-8 text-gold",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            }, void 0, false, {
                                fileName: "[project]/components/project/DocsBlock.tsx",
                                lineNumber: 97,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/project/DocsBlock.tsx",
                            lineNumber: 96,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/project/DocsBlock.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gold font-bold text-xl mb-2",
                        children: "معرض المشروع"
                    }, void 0, false, {
                        fileName: "[project]/components/project/DocsBlock.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gray-400",
                        children: "لا توجد صور أو مستندات متاحة للعرض"
                    }, void 0, false, {
                        fileName: "[project]/components/project/DocsBlock.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/project/DocsBlock.tsx",
                lineNumber: 94,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/project/DocsBlock.tsx",
            lineNumber: 93,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-6a811c9de87b5425" + " " + "bg-gradient-to-br from-black/60 to-black/40 border border-gold/30 rounded-2xl overflow-hidden backdrop-blur-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-6a811c9de87b5425" + " " + "p-6 border-b border-gold/20 bg-gradient-to-r from-gold/10 to-transparent",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-6a811c9de87b5425" + " " + "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6a811c9de87b5425",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-6a811c9de87b5425" + " " + "text-gold font-bold text-xl mb-1 font-amiri",
                                            children: [
                                                "معرض ",
                                                projectName
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/project/DocsBlock.tsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-6a811c9de87b5425" + " " + "text-gray-300 text-sm",
                                            children: [
                                                allItems.length,
                                                " عنصر • ",
                                                hasBrochure && 'بروشور • ',
                                                "صور عالية الجودة"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/project/DocsBlock.tsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/project/DocsBlock.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-6a811c9de87b5425" + " " + "flex gap-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: ()=>setIsFullscreen(true),
                                        className: "rounded-lg text-sm font-semibold",
                                        children: "عرض كامل"
                                    }, void 0, false, {
                                        fileName: "[project]/components/project/DocsBlock.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/project/DocsBlock.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/project/DocsBlock.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/project/DocsBlock.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-6a811c9de87b5425" + " " + "p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swiper"], {
                                modules: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"],
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"],
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$thumbs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Thumbs$3e$__["Thumbs"],
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$zoom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zoom$3e$__["Zoom"],
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$effect$2d$coverflow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EffectCoverflow$3e$__["EffectCoverflow"]
                                ],
                                spaceBetween: 20,
                                slidesPerView: 1,
                                navigation: {
                                    nextEl: '.swiper-button-next-custom',
                                    prevEl: '.swiper-button-prev-custom'
                                },
                                pagination: {
                                    clickable: true,
                                    dynamicBullets: true
                                },
                                thumbs: {
                                    swiper: thumbsSwiper
                                },
                                zoom: true,
                                effect: "coverflow",
                                coverflowEffect: {
                                    rotate: 50,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: true
                                },
                                className: "main-gallery rounded-xl overflow-hidden",
                                style: {
                                    height: '400px'
                                },
                                onSlideChange: (swiper)=>setActiveIndex(swiper.activeIndex),
                                children: allItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                        className: "relative group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-6a811c9de87b5425" + " " + "swiper-zoom-container",
                                                children: item.type === 'brochure' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-6a811c9de87b5425" + " " + "w-full h-full bg-gradient-to-br from-gold/10 to-transparent rounded-lg border border-gold/20 flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-6a811c9de87b5425" + " " + "text-center p-8",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6a811c9de87b5425" + " " + "w-20 h-20 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    className: "jsx-6a811c9de87b5425" + " " + "w-10 h-10 text-gold",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                                                                        className: "jsx-6a811c9de87b5425"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/project/DocsBlock.tsx",
                                                                        lineNumber: 168,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/project/DocsBlock.tsx",
                                                                    lineNumber: 167,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/project/DocsBlock.tsx",
                                                                lineNumber: 166,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6a811c9de87b5425" + " " + "text-gold font-bold text-lg mb-2",
                                                                children: "البروشور الرسمي"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/project/DocsBlock.tsx",
                                                                lineNumber: 171,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-6a811c9de87b5425" + " " + "text-gray-300 text-sm",
                                                                children: "متاح في العرض الكامل"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/project/DocsBlock.tsx",
                                                                lineNumber: 172,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/project/DocsBlock.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/project/DocsBlock.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: item.url,
                                                    alt: item.title,
                                                    loading: "lazy",
                                                    className: "jsx-6a811c9de87b5425" + " " + "w-full h-full object-cover rounded-lg"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/project/DocsBlock.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/project/DocsBlock.tsx",
                                                lineNumber: 162,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-6a811c9de87b5425" + " " + "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-6a811c9de87b5425" + " " + "text-white font-semibold",
                                                        children: item.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/project/DocsBlock.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-6a811c9de87b5425" + " " + "text-gray-300 text-sm",
                                                        children: [
                                                            index + 1,
                                                            " من ",
                                                            allItems.length
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/project/DocsBlock.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/project/DocsBlock.tsx",
                                                lineNumber: 186,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, `${item.type}-${item.url}`, true, {
                                        fileName: "[project]/components/project/DocsBlock.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/project/DocsBlock.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6a811c9de87b5425" + " " + "swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 border border-gold/20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    className: "jsx-6a811c9de87b5425" + " " + "w-6 h-6 text-gold",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M15 19l-7-7 7-7",
                                        className: "jsx-6a811c9de87b5425"
                                    }, void 0, false, {
                                        fileName: "[project]/components/project/DocsBlock.tsx",
                                        lineNumber: 199,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/project/DocsBlock.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/project/DocsBlock.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6a811c9de87b5425" + " " + "swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 border border-gold/20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    className: "jsx-6a811c9de87b5425" + " " + "w-6 h-6 text-gold",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M9 5l7 7-7 7",
                                        className: "jsx-6a811c9de87b5425"
                                    }, void 0, false, {
                                        fileName: "[project]/components/project/DocsBlock.tsx",
                                        lineNumber: 204,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/project/DocsBlock.tsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/project/DocsBlock.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/project/DocsBlock.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    allItems.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-6a811c9de87b5425" + " " + "px-6 pb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swiper"], {
                            modules: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"],
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$thumbs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Thumbs$3e$__["Thumbs"]
                            ],
                            onSwiper: setThumbsSwiper,
                            spaceBetween: 10,
                            slidesPerView: 4,
                            breakpoints: {
                                640: {
                                    slidesPerView: 6
                                },
                                768: {
                                    slidesPerView: 8
                                },
                                1024: {
                                    slidesPerView: 10
                                }
                            },
                            watchSlidesProgress: true,
                            className: "thumbs-gallery",
                            children: allItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                    className: "cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-6a811c9de87b5425" + " " + "aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-gold/50 transition-all duration-300",
                                        children: item.type === 'brochure' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-6a811c9de87b5425" + " " + "w-full h-full bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                className: "jsx-6a811c9de87b5425" + " " + "w-6 h-6 text-gold",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                                                    className: "jsx-6a811c9de87b5425"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/project/DocsBlock.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/project/DocsBlock.tsx",
                                                lineNumber: 230,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/project/DocsBlock.tsx",
                                            lineNumber: 229,
                                            columnNumber: 23
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: item.url,
                                            alt: item.title,
                                            loading: "lazy",
                                            className: "jsx-6a811c9de87b5425" + " " + "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/components/project/DocsBlock.tsx",
                                            lineNumber: 235,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/project/DocsBlock.tsx",
                                        lineNumber: 227,
                                        columnNumber: 19
                                    }, this)
                                }, `${item.type}-${item.url}`, false, {
                                    fileName: "[project]/components/project/DocsBlock.tsx",
                                    lineNumber: 226,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/project/DocsBlock.tsx",
                            lineNumber: 212,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/project/DocsBlock.tsx",
                        lineNumber: 211,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/project/DocsBlock.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            isFullscreen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-6a811c9de87b5425" + " " + "fixed inset-0 bg-black/95 z-50 flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-6a811c9de87b5425" + " " + "absolute top-4 right-4 z-10 flex gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            variant: "outline",
                            size: "sm",
                            onClick: ()=>setIsFullscreen(false),
                            className: "w-12 h-12 rounded-full p-0 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                className: "jsx-6a811c9de87b5425" + " " + "w-6 h-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M6 18L18 6M6 6l12 12",
                                    className: "jsx-6a811c9de87b5425"
                                }, void 0, false, {
                                    fileName: "[project]/components/project/DocsBlock.tsx",
                                    lineNumber: 261,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/project/DocsBlock.tsx",
                                lineNumber: 260,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/project/DocsBlock.tsx",
                            lineNumber: 254,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/project/DocsBlock.tsx",
                        lineNumber: 253,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-6a811c9de87b5425" + " " + "w-full h-full flex items-center justify-center p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swiper"], {
                            modules: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"],
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"],
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$zoom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zoom$3e$__["Zoom"]
                            ],
                            spaceBetween: 20,
                            slidesPerView: 1,
                            navigation: true,
                            pagination: {
                                clickable: true
                            },
                            zoom: true,
                            initialSlide: activeIndex,
                            className: "w-full h-full",
                            onSlideChange: (swiper)=>setActiveIndex(swiper.activeIndex),
                            children: allItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                    className: "flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-6a811c9de87b5425" + " " + "swiper-zoom-container",
                                        children: item.type === 'brochure' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>{
                                                setIsFullscreen(false);
                                                setShowPDFViewer(true);
                                            },
                                            className: "jsx-6a811c9de87b5425" + " " + "max-w-2xl w-full bg-gradient-to-br from-gold/10 to-transparent rounded-lg border border-gold/20 p-12 text-center cursor-pointer hover:bg-gold/5 transition-all duration-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-6a811c9de87b5425" + " " + "w-24 h-24 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        className: "jsx-6a811c9de87b5425" + " " + "w-12 h-12 text-gold",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                                                            className: "jsx-6a811c9de87b5425"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/project/DocsBlock.tsx",
                                                            lineNumber: 288,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/project/DocsBlock.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/project/DocsBlock.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-6a811c9de87b5425" + " " + "text-gold font-bold text-2xl mb-4",
                                                    children: "البروشور الرسمي"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/project/DocsBlock.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-6a811c9de87b5425" + " " + "text-gray-300",
                                                    children: "اضغط للعرض الداخلي المتقدم"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/project/DocsBlock.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/project/DocsBlock.tsx",
                                            lineNumber: 282,
                                            columnNumber: 23
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: item.url,
                                            alt: item.title,
                                            loading: "lazy",
                                            className: "jsx-6a811c9de87b5425" + " " + "max-w-full max-h-full object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/components/project/DocsBlock.tsx",
                                            lineNumber: 295,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/project/DocsBlock.tsx",
                                        lineNumber: 280,
                                        columnNumber: 19
                                    }, this)
                                }, `${item.type}-${item.url}`, false, {
                                    fileName: "[project]/components/project/DocsBlock.tsx",
                                    lineNumber: 279,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/project/DocsBlock.tsx",
                            lineNumber: 267,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/project/DocsBlock.tsx",
                        lineNumber: 266,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-6a811c9de87b5425" + " " + "absolute bottom-4 left-4 right-4 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6a811c9de87b5425" + " " + "text-white font-semibold text-lg",
                                children: allItems[activeIndex]?.title
                            }, void 0, false, {
                                fileName: "[project]/components/project/DocsBlock.tsx",
                                lineNumber: 310,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-6a811c9de87b5425" + " " + "text-gray-300",
                                children: [
                                    activeIndex + 1,
                                    " من ",
                                    allItems.length,
                                    " • استخدم الأسهم للتنقل • ESC للخروج"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/project/DocsBlock.tsx",
                                lineNumber: 313,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/project/DocsBlock.tsx",
                        lineNumber: 309,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/project/DocsBlock.tsx",
                lineNumber: 252,
                columnNumber: 9
            }, this),
            showPDFViewer && brochureUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$InternalPDFViewer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                pdfUrl: brochureUrl,
                projectName: projectName,
                onClose: ()=>setShowPDFViewer(false)
            }, void 0, false, {
                fileName: "[project]/components/project/DocsBlock.tsx",
                lineNumber: 322,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "6a811c9de87b5425",
                children: ".main-gallery .swiper-pagination-bullet{opacity:1;background:#d4af374d}.main-gallery .swiper-pagination-bullet-active{background:#d4af37}.thumbs-gallery .swiper-slide-thumb-active .aspect-square{border-color:#d4af37!important}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
}),
"[project]/lib/contentful-utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
    const base = ("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.location?.origin ? "TURBOPACK unreachable" : 'http://localhost';
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
}),
"[project]/components/project/Gallery.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Gallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contentful$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/contentful-utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LuxuryButton.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Gallery({ images, title }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [curr, setCurr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    if (!images?.length) return null;
    const proxied = images.map((u)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contentful$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["directAccess"])(u));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-3 gap-3",
                children: proxied.slice(0, 6).map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setCurr(i);
                            setOpen(true);
                        },
                        className: "relative group",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: src,
                            alt: `${title}-${i}`,
                            className: "h-44 w-full object-cover rounded-lg border border-gold/20 group-hover:opacity-90"
                        }, void 0, false, {
                            fileName: "[project]/components/project/Gallery.tsx",
                            lineNumber: 12,
                            columnNumber: 150
                        }, this)
                    }, src || `${title}-${i}`, false, {
                        fileName: "[project]/components/project/Gallery.tsx",
                        lineNumber: 12,
                        columnNumber: 41
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/project/Gallery.tsx",
                lineNumber: 11,
                columnNumber: 5
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[1000] bg-black/90 flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        variant: "outline",
                        size: "sm",
                        onClick: ()=>setOpen(false),
                        className: "absolute top-4 right-4 w-10 h-10 rounded-full p-0 flex items-center justify-center",
                        children: "✕"
                    }, void 0, false, {
                        fileName: "[project]/components/project/Gallery.tsx",
                        lineNumber: 15,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        variant: "outline",
                        size: "sm",
                        onClick: ()=>setCurr((curr - 1 + proxied.length) % proxied.length),
                        className: "absolute left-4 w-12 h-12 rounded-full p-0 flex items-center justify-center text-2xl",
                        children: "‹"
                    }, void 0, false, {
                        fileName: "[project]/components/project/Gallery.tsx",
                        lineNumber: 23,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: proxied[curr],
                        className: "max-h-[80vh] max-w-[90vw] object-contain rounded-lg border border-gold/30"
                    }, void 0, false, {
                        fileName: "[project]/components/project/Gallery.tsx",
                        lineNumber: 31,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        variant: "outline",
                        size: "sm",
                        onClick: ()=>setCurr((curr + 1) % proxied.length),
                        className: "absolute right-4 w-12 h-12 rounded-full p-0 flex items-center justify-center text-2xl",
                        children: "›"
                    }, void 0, false, {
                        fileName: "[project]/components/project/Gallery.tsx",
                        lineNumber: 32,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/project/Gallery.tsx",
                lineNumber: 14,
                columnNumber: 15
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/components/project/ProjectHero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LuxuryButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contentful$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/contentful-utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function ProjectHero({ project }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const locale = params?.locale || 'ar';
    const isRtl = locale === 'ar';
    // (Reverted) نستخدم <video> مباشرة كما كان سابقاً
    // عند فتح صفحة المشروع، لا نحمل أي هاش متبقٍ من التنقل السابق.
    // هذا يمنع التمرير التلقائي إلى أقسام مثل #tour3d عند الدخول من قائمة المشاريع.
    // (Reverted) لا نقوم بإزالة الهاش عند التحميل؛ نحافظ على سلوك الروابط العميقة.
    const goTo = (hash)=>{
        const element = document.querySelector(hash);
        if (element) {
            const headerHeight = 80; // Approximate header height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            // Update URL hash so section links are reflected in the address bar
            try {
                const clean = hash.startsWith('#') ? hash.slice(1) : hash;
                window.location.hash = clean;
            } catch (e) {
            // ignore
            }
        }
    };
    // Get project name from different possible fields
    const getProjectName = ()=>{
        if (typeof project.projectName === 'string') return project.projectName;
        if (typeof project.projectName === 'object' && project.projectName) {
            const localeKey = locale;
            return project.projectName[localeKey] || project.projectName.en || project.projectName.ar;
        }
        return project.name || project.title || 'Project';
    };
    // Get project description
    const getProjectDescription = ()=>{
        if (typeof project.description === 'string') return project.description;
        if (typeof project.description === 'object' && project.description) {
            const localeKey = locale;
            return project.description[localeKey] || project.description.en || project.description.ar;
        }
        return '';
    };
    // Get project location
    const getProjectLocation = ()=>{
        if (typeof project.location === 'string') return project.location;
        if (typeof project.location === 'object' && project.location) {
            const localeKey = locale;
            return project.location[localeKey] || project.location.en || project.location.ar;
        }
        return '';
    };
    const projectName = getProjectName();
    const projectDescription = getProjectDescription();
    const projectLocation = getProjectLocation();
    const hasVideo = !!project.videoLink;
    // Validate potential media src (http/https or local path)
    const isValidMediaSrc = (src)=>{
        if (!src || typeof src !== 'string') return false;
        const trimmed = src.trim();
        if (!trimmed) return false;
        if (trimmed.startsWith('/')) return true;
        try {
            const u = new URL(trimmed.startsWith('http') ? trimmed : `https://${trimmed}`);
            return u.protocol === 'http:' || u.protocol === 'https:';
        } catch  {
            return false;
        }
    };
    // Validate potential image src to avoid invalid CSS url() fetch attempts
    const isValidSrc = (src)=>{
        if (!src || typeof src !== 'string') return false;
        const trimmed = src.trim();
        if (!trimmed) return false;
        if (trimmed.startsWith('/')) return true;
        try {
            const u = new URL(trimmed);
            return u.protocol === 'http:' || u.protocol === 'https:';
        } catch  {
            return false;
        }
    };
    const candidateHero = project.heroImage || project.galleryImages && project.galleryImages[0];
    const safeHeroImage = isValidSrc(candidateHero) ? candidateHero : undefined;
    const safeHeroImageProxied = safeHeroImage ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contentful$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["directAccess"])(safeHeroImage) : undefined;
    const safeVideoSrc = isValidMediaSrc(project.videoLink) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contentful$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["directAccess"])(project.videoLink) : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative h-screen flex flex-col justify-center items-center text-center overflow-hidden",
        children: [
            safeHeroImageProxied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat",
                style: {
                    backgroundImage: `url("${String(safeHeroImageProxied).replace(/"/g, '\\"')}")`
                }
            }, void 0, false, {
                fileName: "[project]/components/project/ProjectHero.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 w-full h-full bg-gradient-to-br from-black via-zinc-900 to-black"
            }, void 0, false, {
                fileName: "[project]/components/project/ProjectHero.tsx",
                lineNumber: 118,
                columnNumber: 9
            }, this),
            hasVideo && safeVideoSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                className: "absolute inset-0 w-full h-full object-cover",
                src: safeVideoSrc,
                autoPlay: true,
                loop: true,
                muted: true,
                playsInline: true,
                preload: "metadata",
                poster: safeHeroImageProxied || '/images/hero-fallback.jpg'
            }, void 0, false, {
                fileName: "[project]/components/project/ProjectHero.tsx",
                lineNumber: 123,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/project/ProjectHero.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-gold/10 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/project/ProjectHero.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-4xl mx-auto px-6 text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: `luxury-title text-4xl md:text-6xl lg:text-7xl gold-gradient-static luxury-text-shadow mb-6 fade-in-up ${isRtl ? 'font-arabic' : 'font-display'}`,
                        children: projectName
                    }, void 0, false, {
                        fileName: "[project]/components/project/ProjectHero.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    projectLocation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `luxury-subtitle text-xl md:text-2xl text-gold/90 mb-4 fade-in-up ${isRtl ? 'font-arabic' : 'font-sans'}`,
                        style: {
                            animationDelay: '0.2s'
                        },
                        children: [
                            "📍 ",
                            projectLocation
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/project/ProjectHero.tsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this),
                    projectDescription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `luxury-body text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 fade-in-up leading-relaxed ${isRtl ? 'font-arabic' : 'font-sans'}`,
                        style: {
                            animationDelay: '0.4s'
                        },
                        children: projectDescription.length > 200 ? `${projectDescription.substring(0, 200)}...` : projectDescription
                    }, void 0, false, {
                        fileName: "[project]/components/project/ProjectHero.tsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex flex-wrap gap-4 justify-center fade-in-up ${isRtl ? 'flex-row-reverse' : ''}`,
                        style: {
                            animationDelay: '0.6s'
                        },
                        children: [
                            safeVideoSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                variant: "primary",
                                size: "lg",
                                className: `rounded-full ${isRtl ? 'font-arabic' : 'font-sans'}`,
                                onClick: ()=>goTo("#video"),
                                children: isRtl ? '🎬 مشاهدة الفيديو' : '🎬 Watch Video'
                            }, void 0, false, {
                                fileName: "[project]/components/project/ProjectHero.tsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, this),
                            project.brochurePdfLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                variant: "outline",
                                size: "lg",
                                className: `rounded-full ${isRtl ? 'font-arabic' : 'font-sans'}`,
                                onClick: ()=>goTo("#docs"),
                                children: isRtl ? '📥 عرض البروشور' : '📥 View Brochure'
                            }, void 0, false, {
                                fileName: "[project]/components/project/ProjectHero.tsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this),
                            project.galleryImages && project.galleryImages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                variant: "outline",
                                size: "lg",
                                className: `rounded-full ${isRtl ? 'font-arabic' : 'font-sans'}`,
                                onClick: ()=>goTo("#gallery"),
                                children: isRtl ? '🖼️ معرض الصور' : '🖼️ Gallery'
                            }, void 0, false, {
                                fileName: "[project]/components/project/ProjectHero.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this),
                            project['3D_TourLink'] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                variant: "outline",
                                size: "lg",
                                className: `rounded-full ${isRtl ? 'font-arabic' : 'font-sans'}`,
                                onClick: ()=>goTo("#tour3d"),
                                children: isRtl ? '🏗️ جولة ثلاثية الأبعاد' : '🏗️ 3D Tour'
                            }, void 0, false, {
                                fileName: "[project]/components/project/ProjectHero.tsx",
                                lineNumber: 196,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/project/ProjectHero.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-up",
                        style: {
                            animationDelay: '0.8s'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center text-gold/60",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-sm mb-2 ${isRtl ? 'font-arabic' : 'font-sans'}`,
                                    children: isRtl ? 'اكتشف المزيد' : 'Discover More'
                                }, void 0, false, {
                                    fileName: "[project]/components/project/ProjectHero.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-6 h-10 border-2 border-gold/40 rounded-full flex justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1 h-3 bg-gold/60 rounded-full mt-2 animate-bounce"
                                    }, void 0, false, {
                                        fileName: "[project]/components/project/ProjectHero.tsx",
                                        lineNumber: 214,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/project/ProjectHero.tsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/project/ProjectHero.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/project/ProjectHero.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/project/ProjectHero.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/4 left-1/4 w-1 h-1 bg-gold rounded-full animate-ping-slow opacity-30"
                    }, void 0, false, {
                        fileName: "[project]/components/project/ProjectHero.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-3/4 right-1/4 w-1 h-1 bg-gold rounded-full animate-ping-medium opacity-40"
                    }, void 0, false, {
                        fileName: "[project]/components/project/ProjectHero.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-1/4 left-1/3 w-1 h-1 bg-gold rounded-full animate-ping-fast opacity-20"
                    }, void 0, false, {
                        fileName: "[project]/components/project/ProjectHero.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/project/ProjectHero.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/project/ProjectHero.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/routes.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/compare.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCompare",
    ()=>useCompare
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
const KEY = 'ig:compare';
function useCompare() {
    const [ids, setIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    }, [
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
}),
"[project]/lib/favorites.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFavorites",
    ()=>useFavorites
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
const KEY = 'ig:favorites';
function useFavorites() {
    const [ids, setIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    }, [
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
}),
"[project]/lib/format.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/i18n-utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"use client";
const SUPPORTED_LOCALES = (("TURBOPACK compile-time value", "ar,en") ?? 'ar,en').split(',').map((s)=>s.trim().toLowerCase()).filter(Boolean);
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
"[project]/lib/i18n/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/components/ProjectCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LuxuryButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$compare$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/compare.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$favorites$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/favorites.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/format.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n-client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n-utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/routes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
;
function ProjectCard({ project }) {
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocale"])();
    // Safe data extraction with fallbacks
    const title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(project?.projectName, locale) || project?.slug || (locale === 'ar' ? 'مشروع غير محدد' : 'Unnamed Project');
    const subtitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tx"])(project?.area, locale) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tx"])(project?.location, locale) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tx"])(project?.city, locale) || '';
    const img = project?.heroImage || project?.galleryImages?.[0];
    // Safe price calculation
    const hasMinPrice = project?.minPriceAED && project.minPriceAED > 0;
    const hasMaxPrice = project?.maxPriceAED && project.maxPriceAED > 0;
    const price = hasMinPrice && hasMaxPrice && project.maxPriceAED && project.minPriceAED && project.maxPriceAED > project.minPriceAED ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAED"])(project.minPriceAED, locale)} – ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAED"])(project.maxPriceAED, locale)}` : hasMinPrice && project.minPriceAED ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAED"])(project.minPriceAED, locale) : hasMaxPrice && project.maxPriceAED ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAED"])(project.maxPriceAED, locale) : null;
    // Safe area calculation
    const hasAreaSqmt = project?.minAreaSqmt && project.minAreaSqmt > 0 || project?.maxAreaSqmt && project.maxAreaSqmt > 0;
    const hasAreaSqft = project?.minAreaSqft && project.minAreaSqft > 0 || project?.maxAreaSqft && project.maxAreaSqft > 0;
    const area = hasAreaSqmt ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArea"])(project.minAreaSqmt, project.maxAreaSqmt, 'sqm', locale) : hasAreaSqft ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArea"])(project.minAreaSqft, project.maxAreaSqft, 'sqft', locale) : null;
    // Safe bedrooms formatting
    const bedrooms = project?.bedrooms ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatBedrooms"])(project.bedrooms, locale) : null;
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
                km = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["distanceKm"])(projCoords, {
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
            const minutes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["estimateMinutes"])(km, 'urban');
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDistancePhrase"])(locale, Math.max(0, km), Math.max(1, minutes), nm);
        }).filter(Boolean);
    })();
    const loc = (locale || 'ar').toString();
    const rawSlug = project?.slug && String(project.slug).trim() || ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(project?.projectName, locale)?.toString().trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]+/g, '') ?? '');
    const slug = rawSlug;
    // Robust developer segment handling: accept string or object { slug }
    const devSlug = (()=>{
        const d = project?.developer;
        if (typeof d === 'string') return d.trim();
        if (d && typeof d.slug === 'string') return d.slug.trim();
        return 'emaar';
    })();
    const hrefStr = slug ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildHref"])(loc, {
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
    const favorites = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$favorites$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFavorites"])();
    const compare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$compare$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCompare"])();
    const isCompared = compare.ids.includes(project.id || project.slug);
    // Simplified state
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-2xl bg-gradient-to-r from-gold/5 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/ProjectCard.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: href,
                className: "block relative overflow-hidden",
                prefetch: false,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-44 w-full overflow-hidden",
                    children: img ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectCard.tsx",
                                lineNumber: 157,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-44 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-3 right-3 flex gap-2 z-10",
                children: [
                    project?.goldenVisaEligible ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] px-2 py-1 rounded-full bg-gold/30 text-gold border border-gold/40 shadow backdrop-blur-sm",
                        children: locale === 'ar' ? 'تأشيرة ذهبية' : 'Golden Visa'
                    }, void 0, false, {
                        fileName: "[project]/components/ProjectCard.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        "aria-label": "favorite",
                        onClick: ()=>favorites.toggle(project.id || project.slug),
                        variant: favorites.has(project.id || project.slug) ? 'secondary' : 'outline',
                        size: "sm",
                        className: "!h-9 !w-9 !p-0 rounded-full backdrop-blur-sm hover:scale-105 transition-transform duration-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        "aria-label": "compare",
                        onClick: ()=>isCompared ? compare.remove(project.id || project.slug) : compare.add(project.id || project.slug),
                        variant: isCompared ? 'secondary' : 'outline',
                        size: "sm",
                        className: "!h-9 !w-9 !p-0 rounded-full backdrop-blur-sm hover:scale-105 transition-transform duration-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col justify-between h-[calc(100%-11rem)] p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: href,
                                className: "block",
                                prefetch: false,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: `luxury-title text-lg gold-gradient-static luxury-text-shadow leading-snug line-clamp-2 hover:text-gold transition-colors duration-200 ${locale === 'ar' ? 'font-arabic' : 'font-display'}`,
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProjectCard.tsx",
                                        lineNumber: 203,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `mt-1 text-xs text-gray-400 ${locale === 'ar' ? 'font-arabic' : 'font-sans'}`,
                                        children: subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProjectCard.tsx",
                                        lineNumber: 210,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `mt-3 text-sm text-gray-300 line-clamp-2 ${locale === 'ar' ? 'font-arabic' : 'font-sans'}`,
                                        children: String((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(project.summary, locale) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(project.description, locale) || '').slice(0, 140)
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
                            poiPhrases.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: `mt-3 space-y-1 text-[11px] text-gray-400 ${locale === 'ar' ? 'font-arabic' : 'font-sans'}`,
                                children: poiPhrases.map((p, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            (price || area || bedrooms) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    price && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-lg bg-zinc-900/70 px-3 py-2 border border-zinc-700/50 hover:border-gold/30 hover:bg-white/5 transition-all duration-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-gray-400",
                                                children: locale === 'ar' ? 'السعر' : 'Price'
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProjectCard.tsx",
                                                lineNumber: 243,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    area && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-lg bg-zinc-900/70 px-3 py-2 border border-zinc-700/50 hover:border-gold/30 hover:bg-white/5 transition-all duration-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-gray-400",
                                                children: locale === 'ar' ? 'المساحة' : 'Area'
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProjectCard.tsx",
                                                lineNumber: 249,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    bedrooms && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-lg bg-zinc-900/70 px-3 py-2 border border-zinc-700/50 hover:border-gold/30 hover:bg-white/5 transition-all duration-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-gray-400",
                                                children: locale === 'ar' ? 'الغرف' : 'Bedrooms'
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProjectCard.tsx",
                                                lineNumber: 255,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: href,
                                className: "mt-4 block",
                                prefetch: false,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
}),
"[project]/components/project/NotFoundHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NotFoundHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LuxuryButton.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function NotFoundHeader({ locale, title, description, primaryAction, secondaryAction, icon }) {
    const isArabic = locale === 'ar';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-gold/20"
                    }, void 0, false, {
                        fileName: "[project]/components/project/NotFoundHeader.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.1),transparent_50%)]"
                    }, void 0, false, {
                        fileName: "[project]/components/project/NotFoundHeader.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/project/NotFoundHeader.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-6xl mx-auto px-6 py-24 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/30",
                            children: icon ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-4xl",
                                children: "🏗️"
                            }, void 0, false, {
                                fileName: "[project]/components/project/NotFoundHeader.tsx",
                                lineNumber: 47,
                                columnNumber: 22
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/project/NotFoundHeader.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/project/NotFoundHeader.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: `text-4xl md:text-6xl font-bold mb-6 gold-gradient-static luxury-text-shadow ${isArabic ? 'font-arabic' : 'font-display'}`,
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/project/NotFoundHeader.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-xl text-gray-300 mb-8 max-w-2xl mx-auto ${isArabic ? 'font-arabic' : 'font-sans'}`,
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/components/project/NotFoundHeader.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row gap-4 justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: primaryAction.href,
                                prefetch: primaryAction.prefetch ?? true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    variant: primaryAction.variant ?? 'primary',
                                    size: "lg",
                                    className: `${isArabic ? 'font-arabic' : 'font-sans'}`,
                                    children: [
                                        primaryAction.icon,
                                        primaryAction.label
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/project/NotFoundHeader.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/project/NotFoundHeader.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            secondaryAction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: secondaryAction.href,
                                prefetch: secondaryAction.prefetch ?? true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    variant: secondaryAction.variant ?? 'outline',
                                    size: "lg",
                                    className: `${isArabic ? 'font-arabic' : 'font-sans'}`,
                                    children: [
                                        secondaryAction.icon,
                                        secondaryAction.label
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/project/NotFoundHeader.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/project/NotFoundHeader.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/project/NotFoundHeader.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/project/NotFoundHeader.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/project/NotFoundHeader.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/project/ProjectNotFound.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectNotFound
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n-client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/routes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LuxuryButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProjectCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$NotFoundHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/project/NotFoundHeader.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function ProjectNotFound({ developer, slug, developerProjects, otherProjects }) {
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocale"])();
    const devSuggestions = (developerProjects || []).slice(0, 6);
    const otherSuggestions = (otherProjects || []).slice(0, 6);
    const isArabic = locale === 'ar';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-light",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$NotFoundHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                locale: locale,
                title: isArabic ? 'المشروع غير متوفر' : 'Project Not Available',
                description: isArabic ? `عذراً، لم نتمكن من العثور على المشروع "${slug}" للمطور "${developer}"` : `Sorry, we couldn't find the project "${slug}" by "${developer}"`,
                primaryAction: {
                    href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringRoutes"].projectsIndex(locale),
                    label: isArabic ? 'تصفح جميع المشاريع' : 'Browse All Projects',
                    variant: 'primary',
                    prefetch: false
                },
                secondaryAction: {
                    href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringRoutes"].developersIndex(locale),
                    label: isArabic ? `مشاريع ${developer}` : `${developer} Projects`,
                    variant: 'outline',
                    prefetch: false
                },
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-4xl",
                    children: "🏗️"
                }, void 0, false, {
                    fileName: "[project]/components/project/ProjectNotFound.tsx",
                    lineNumber: 48,
                    columnNumber: 15
                }, void 0)
            }, void 0, false, {
                fileName: "[project]/components/project/ProjectNotFound.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            devSuggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 border-t border-gold/20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: `text-3xl font-bold mb-8 text-center gold-gradient-static ${isArabic ? 'font-arabic' : 'font-display'}`,
                            children: isArabic ? `مشاريع أخرى من ${developer}` : `Other Projects by ${developer}`
                        }, void 0, false, {
                            fileName: "[project]/components/project/ProjectNotFound.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: devSuggestions.map((project, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    project: project
                                }, `${project.id || `${project.developer || 'dev'}-${project.slug || 'unknown'}`}-${idx}`, false, {
                                    fileName: "[project]/components/project/ProjectNotFound.tsx",
                                    lineNumber: 61,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/project/ProjectNotFound.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/project/ProjectNotFound.tsx",
                    lineNumber: 54,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/project/ProjectNotFound.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this),
            otherSuggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 border-t border-gold/20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: `text-3xl font-bold mb-8 text-center gold-gradient-static ${isArabic ? 'font-arabic' : 'font-display'}`,
                            children: isArabic ? 'مشاريع مقترحة' : 'Suggested Projects'
                        }, void 0, false, {
                            fileName: "[project]/components/project/ProjectNotFound.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: otherSuggestions.map((project, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    project: project
                                }, `${project.id || `${project.developer || 'dev'}-${project.slug || 'unknown'}`}-${idx}`, false, {
                                    fileName: "[project]/components/project/ProjectNotFound.tsx",
                                    lineNumber: 78,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/project/ProjectNotFound.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/project/ProjectNotFound.tsx",
                    lineNumber: 71,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/project/ProjectNotFound.tsx",
                lineNumber: 70,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 border-t border-gold/20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto px-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: `text-2xl font-bold mb-6 gold-gradient-static ${isArabic ? 'font-arabic' : 'font-display'}`,
                            children: isArabic ? 'تحتاج مساعدة؟' : 'Need Help?'
                        }, void 0, false, {
                            fileName: "[project]/components/project/ProjectNotFound.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `text-gray-300 mb-8 ${isArabic ? 'font-arabic' : 'font-sans'}`,
                            children: isArabic ? 'فريقنا جاهز لمساعدتك في العثور على المشروع المناسب' : 'Our team is ready to help you find the right project'
                        }, void 0, false, {
                            fileName: "[project]/components/project/ProjectNotFound.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-4 justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "tel:+971556628972",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "secondary",
                                        size: "md",
                                        className: `${isArabic ? 'font-arabic' : 'font-sans'}`,
                                        children: [
                                            "📞 ",
                                            isArabic ? 'اتصل بنا' : 'Call Us'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/project/ProjectNotFound.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/project/ProjectNotFound.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://wa.me/971556628972",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "secondary",
                                        size: "md",
                                        className: `${isArabic ? 'font-arabic' : 'font-sans'}`,
                                        children: [
                                            "💬 ",
                                            isArabic ? 'واتساب' : 'WhatsApp'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/project/ProjectNotFound.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/project/ProjectNotFound.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/project/ProjectNotFound.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/project/ProjectNotFound.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/project/ProjectNotFound.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/project/ProjectNotFound.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/LazyImage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LazyImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contentful$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/contentful-utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LoadingSpinner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LoadingSpinner.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function isValidSrc(value) {
    if (typeof value !== 'string') return false;
    const v = value.trim();
    if (!v) return false;
    return v.startsWith('/') || v.startsWith('http://') || v.startsWith('https://') || v.startsWith('data:') || v.startsWith('blob:');
}
function ImageComponent({ src, alt, width, height, className = '', fill = false, priority = false, quality = 75, placeholder = 'empty', blurDataURL, sizes, style, onLoad, onError }) {
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isInView, setIsInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (priority) {
            setIsInView(true);
            setIsLoading(true);
            return;
        }
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting && !isInView) {
                setIsInView(true);
                setIsLoading(true);
            }
        }, {
            threshold: 0.1,
            rootMargin: '100px'
        });
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }
        return ()=>{
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [
        isInView,
        priority
    ]);
    const handleImageLoad = ()=>{
        setIsLoaded(true);
        setIsLoading(false);
        setError(false);
        onLoad?.();
    };
    const handleImageError = ()=>{
        setIsLoading(false);
        setError(true);
        onError?.();
    };
    // Generate a simple blur placeholder if none provided
    const defaultBlurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: `relative overflow-hidden ${className}`,
        style: style,
        children: [
            !isInView && !priority && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center",
                style: {
                    minHeight: height || '200px',
                    width: width || '100%'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-zinc-600 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8 h-8 mx-auto mb-2 opacity-50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/LazyImage.tsx",
                                    lineNumber: 125,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ui/LazyImage.tsx",
                                lineNumber: 124,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ui/LazyImage.tsx",
                            lineNumber: 123,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs",
                            children: "Loading..."
                        }, void 0, false, {
                            fileName: "[project]/components/ui/LazyImage.tsx",
                            lineNumber: 128,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/LazyImage.tsx",
                    lineNumber: 122,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/LazyImage.tsx",
                lineNumber: 115,
                columnNumber: 9
            }, this),
            isInView && isLoading && !isLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-zinc-900/50 flex items-center justify-center z-10 transition-opacity",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LoadingSpinner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            size: "md"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/LazyImage.tsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white/70 mt-2 text-sm",
                            children: "Loading image..."
                        }, void 0, false, {
                            fileName: "[project]/components/ui/LazyImage.tsx",
                            lineNumber: 138,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/LazyImage.tsx",
                    lineNumber: 136,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/LazyImage.tsx",
                lineNumber: 135,
                columnNumber: 9
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-zinc-900/80 flex items-center justify-center transition-opacity",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center text-red-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8 h-8 mx-auto mb-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/LazyImage.tsx",
                                    lineNumber: 149,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ui/LazyImage.tsx",
                                lineNumber: 148,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ui/LazyImage.tsx",
                            lineNumber: 147,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm",
                            children: "Failed to load image"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/LazyImage.tsx",
                            lineNumber: 152,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/LazyImage.tsx",
                    lineNumber: 146,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/LazyImage.tsx",
                lineNumber: 145,
                columnNumber: 9
            }, this),
            isInView && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full",
                style: {
                    opacity: isLoaded ? 1 : 0,
                    transition: 'opacity 0.3s ease'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: isValidSrc(src) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contentful$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["directAccess"])(src) : '/media/logo.png',
                    alt: alt,
                    width: fill ? undefined : width || 200,
                    height: fill ? undefined : height || 200,
                    fill: fill,
                    priority: priority,
                    quality: quality,
                    placeholder: placeholder,
                    blurDataURL: blurDataURL || defaultBlurDataURL,
                    sizes: sizes,
                    className: `${fill ? 'object-cover' : ''} transition-opacity duration-300`,
                    style: fill ? undefined : {
                        width: 'auto',
                        height: 'auto'
                    },
                    onLoad: handleImageLoad,
                    onError: handleImageError
                }, void 0, false, {
                    fileName: "[project]/components/ui/LazyImage.tsx",
                    lineNumber: 160,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/LazyImage.tsx",
                lineNumber: 159,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/LazyImage.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
function LazyImage(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center ${props.className}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LoadingSpinner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                size: "md"
            }, void 0, false, {
                fileName: "[project]/components/ui/LazyImage.tsx",
                lineNumber: 187,
                columnNumber: 11
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/components/ui/LazyImage.tsx",
            lineNumber: 186,
            columnNumber: 9
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageComponent, {
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/LazyImage.tsx",
            lineNumber: 191,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/LazyImage.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/project/RelatedCarousel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RelatedCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LazyImage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LazyImage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/format.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/routes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function RelatedCarousel({ projects, currentProjectId, locale, developer }) {
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [relatedProjects, setRelatedProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // تحميل المشاريع ذات الصلة بشكل ديناميكي
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // فلترة المشاريع بناءً على المطور الحالي أولاً، ثم أي مشاريع أخرى
        const filteredProjects = projects.filter((p)=>p.id !== currentProjectId).sort((a, b)=>{
            // إعطاء أولوية للمشاريع من نفس المطور
            if (developer && a.developer === developer && b.developer !== developer) return -1;
            if (developer && a.developer !== developer && b.developer === developer) return 1;
            return 0;
        }).slice(0, 6); // الحد الأقصى 6 مشاريع
        setRelatedProjects(filteredProjects);
    }, [
        projects,
        currentProjectId,
        developer
    ]);
    if (relatedProjects.length === 0) {
        return null;
    }
    const nextSlide = ()=>{
        setCurrentIndex((prev)=>prev === Math.ceil(relatedProjects.length / 3) - 1 ? 0 : prev + 1);
    };
    const prevSlide = ()=>{
        setCurrentIndex((prev)=>prev === 0 ? Math.ceil(relatedProjects.length / 3) - 1 : prev - 1);
    };
    // حساب عدد الشرائح بناءً على عدد المشاريع
    const slidesCount = Math.ceil(relatedProjects.length / 3);
    const visibleProjects = relatedProjects.slice(currentIndex * 3, (currentIndex + 1) * 3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 bg-black/20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: `text-3xl md:text-4xl font-bold gold-gradient-static luxury-text-shadow ${locale === 'ar' ? 'font-display' : 'font-display'}`,
                            children: locale === 'ar' ? 'مشاريع ذات صلة' : 'Related Projects'
                        }, void 0, false, {
                            fileName: "[project]/components/project/RelatedCarousel.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `mt-4 text-white/80 text-lg max-w-2xl mx-auto ${locale === 'ar' ? 'font-arabic' : 'font-sans'}`,
                            children: locale === 'ar' ? 'اكتشف المزيد من المشاريع المميزة' : 'Discover more exceptional projects'
                        }, void 0, false, {
                            fileName: "[project]/components/project/RelatedCarousel.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/project/RelatedCarousel.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        relatedProjects.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: prevSlide,
                                    className: "absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black text-white p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg",
                                    "aria-label": locale === 'ar' ? 'السابق' : 'Previous',
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-6 h-6",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M15 19l-7-7 7-7"
                                        }, void 0, false, {
                                            fileName: "[project]/components/project/RelatedCarousel.tsx",
                                            lineNumber: 92,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/project/RelatedCarousel.tsx",
                                        lineNumber: 91,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/project/RelatedCarousel.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: nextSlide,
                                    className: "absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black text-white p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg",
                                    "aria-label": locale === 'ar' ? 'التالي' : 'Next',
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-6 h-6",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M9 5l7 7-7 7"
                                        }, void 0, false, {
                                            fileName: "[project]/components/project/RelatedCarousel.tsx",
                                            lineNumber: 102,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/project/RelatedCarousel.tsx",
                                        lineNumber: 101,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/project/RelatedCarousel.tsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-hidden rounded-2xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                children: visibleProjects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildHref"])(locale, {
                                                type: 'project',
                                                developer: String(project.developer || '').trim(),
                                                slug: String(project.slug || '').trim()
                                            }),
                                            className: "block group h-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "glass-panel overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-gold h-full flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative h-56 overflow-hidden flex-shrink-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LazyImage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                src: project.heroImage || project.galleryImages?.[0] || '/media/logo.png',
                                                                alt: typeof project.projectName === 'string' ? project.projectName : project.projectName?.[locale] || project.slug,
                                                                className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-110",
                                                                sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/project/RelatedCarousel.tsx",
                                                                lineNumber: 123,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/project/RelatedCarousel.tsx",
                                                                lineNumber: 131,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute top-3 right-3 bg-black/90 backdrop-blur-sm px-3 py-1 rounded-full",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-gold text-sm font-semibold",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatAED"])(project.startingPrice, locale)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/project/RelatedCarousel.tsx",
                                                                    lineNumber: 135,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/project/RelatedCarousel.tsx",
                                                                lineNumber: 134,
                                                                columnNumber: 25
                                                            }, this),
                                                            project.developer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute top-3 left-3 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-white text-xs font-medium",
                                                                    children: project.developer
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/project/RelatedCarousel.tsx",
                                                                    lineNumber: 143,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/project/RelatedCarousel.tsx",
                                                                lineNumber: 142,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/project/RelatedCarousel.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 flex-1 flex flex-col justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: `text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors line-clamp-2 ${locale === 'ar' ? 'font-display' : 'font-display'}`,
                                                                        children: typeof project.projectName === 'string' ? project.projectName : project.projectName?.[locale] || project.slug
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/project/RelatedCarousel.tsx",
                                                                        lineNumber: 153,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: `text-white/70 text-sm mb-3 ${locale === 'ar' ? 'font-arabic' : 'font-sans'}`,
                                                                        children: typeof project.location === 'string' ? project.location : project.location && typeof project.location === 'object' ? project.location[locale] || '' : project.area && typeof project.area === 'object' ? project.area[locale] || '' : ''
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/project/RelatedCarousel.tsx",
                                                                        lineNumber: 161,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/project/RelatedCarousel.tsx",
                                                                lineNumber: 152,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between text-sm text-white/60",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: locale === 'ar' ? 'font-arabic' : 'font-sans',
                                                                                children: [
                                                                                    locale === 'ar' ? 'المساحة:' : 'Area:',
                                                                                    " ",
                                                                                    project.minAreaSqmt != null || project.maxAreaSqmt != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArea"])(project.minAreaSqmt, project.maxAreaSqmt, 'sqm', locale) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$format$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatArea"])(project.minAreaSqft, project.maxAreaSqft, 'sqft', locale)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/project/RelatedCarousel.tsx",
                                                                                lineNumber: 176,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: locale === 'ar' ? 'font-arabic' : 'font-sans',
                                                                                children: [
                                                                                    locale === 'ar' ? 'غرف:' : 'Beds:',
                                                                                    " ",
                                                                                    project.bedrooms?.[0] || 'N/A'
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/project/RelatedCarousel.tsx",
                                                                                lineNumber: 183,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/project/RelatedCarousel.tsx",
                                                                        lineNumber: 175,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    project.projectStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center text-white/60 text-xs",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `w-2 h-2 rounded-full mr-2 ${typeof project.projectStatus === 'string' && project.projectStatus.toLowerCase().includes('ready') || typeof project.projectStatus === 'object' && project.projectStatus.en?.toLowerCase().includes('ready') ? 'bg-green-500' : typeof project.projectStatus === 'string' && project.projectStatus.toLowerCase().includes('off') || typeof project.projectStatus === 'object' && project.projectStatus.en?.toLowerCase().includes('off') ? 'bg-blue-500' : 'bg-yellow-500'}`
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/project/RelatedCarousel.tsx",
                                                                                lineNumber: 191,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `truncate ${locale === 'ar' ? 'font-arabic' : 'font-sans'}`,
                                                                                children: typeof project.projectStatus === 'string' ? project.projectStatus : project.projectStatus && typeof project.projectStatus === 'object' ? project.projectStatus[locale] || '' : ''
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/project/RelatedCarousel.tsx",
                                                                                lineNumber: 200,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/project/RelatedCarousel.tsx",
                                                                        lineNumber: 190,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/project/RelatedCarousel.tsx",
                                                                lineNumber: 174,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/project/RelatedCarousel.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/project/RelatedCarousel.tsx",
                                                lineNumber: 120,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/project/RelatedCarousel.tsx",
                                            lineNumber: 116,
                                            columnNumber: 19
                                        }, this)
                                    }, `${project.id || `${project.developer || 'dev'}-${project.slug || 'unknown'}`}-${index}`, false, {
                                        fileName: "[project]/components/project/RelatedCarousel.tsx",
                                        lineNumber: 112,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/project/RelatedCarousel.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/project/RelatedCarousel.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        slidesCount > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center mt-8 space-x-2",
                            children: Array.from({
                                length: slidesCount
                            }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setCurrentIndex(index),
                                    className: `w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-gold scale-125' : 'bg-white/30 hover:bg-white/50'}`,
                                    "aria-label": `Go to slide ${index + 1}`
                                }, index, false, {
                                    fileName: "[project]/components/project/RelatedCarousel.tsx",
                                    lineNumber: 222,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/project/RelatedCarousel.tsx",
                            lineNumber: 220,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/project/RelatedCarousel.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/project/RelatedCarousel.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/project/RelatedCarousel.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/project/SectionNav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LuxuryButton.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function SectionNav({ project, locale = 'ar' }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [availableSections, setAvailableSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const isRtl = locale === 'ar';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const sections = [];
        // Helper function to safely check if element exists
        const elementExists = (selector)=>{
            try {
                return document.querySelector(selector) !== null;
            } catch (error) {
                console.warn(`SectionNav: Error checking selector ${selector}:`, error);
                return false;
            }
        };
        // Check if sections exist on the page
        if (elementExists('#overview')) {
            sections.push({
                label: isRtl ? "نظرة عامة" : "Overview",
                hash: "#overview"
            });
        }
        if (elementExists('#gallery')) {
            sections.push({
                label: isRtl ? "معرض الصور" : "Gallery",
                hash: "#gallery"
            });
        }
        if (elementExists('#tour3d')) {
            sections.push({
                label: isRtl ? "جولة ثلاثية الأبعاد" : "3D Tour",
                hash: "#tour3d"
            });
        }
        if (elementExists('#map')) {
            sections.push({
                label: isRtl ? "الموقع" : "Location",
                hash: "#map"
            });
        }
        if (elementExists('#amenities')) {
            sections.push({
                label: isRtl ? "المرافق" : "Amenities",
                hash: "#amenities"
            });
        }
        if (elementExists('#payment')) {
            sections.push({
                label: isRtl ? "خطة الدفع" : "Payment Plan",
                hash: "#payment"
            });
        }
        if (elementExists('#contact')) {
            sections.push({
                label: isRtl ? "اتصل بنا" : "Contact",
                hash: "#contact"
            });
        }
        if (elementExists('#related')) {
            sections.push({
                label: isRtl ? "مشاريع مشابهة" : "Related Projects",
                hash: "#related"
            });
        }
        // Deduplicate by hash to avoid duplicate keys if multiple elements share the same id
        const deduped = Array.from(new Map(sections.map((s)=>[
                s.hash,
                s
            ])).values());
        setAvailableSections(deduped);
    }, [
        isRtl
    ]);
    const handleClick = (hash)=>{
        // Scroll smoothly and update URL hash to reflect section navigation
        const element = document.querySelector(hash);
        if (element) {
            const headerHeight = 80; // Approximate header height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            // Update the hash in the URL so deep links work again
            try {
                const clean = hash.startsWith('#') ? hash.slice(1) : hash;
                window.location.hash = clean;
            } catch (e) {
            // ignore
            }
        } else {
            console.warn(`SectionNav: target element '${hash}' not found; attempting to set hash anyway.`);
            try {
                const clean = hash.startsWith('#') ? hash.slice(1) : hash;
                window.location.hash = clean;
            } catch (e) {
            // ignore
            }
        }
    };
    if (availableSections.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "section-nav",
        children: availableSections.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                variant: "outline",
                size: "sm",
                onClick: ()=>handleClick(item.hash),
                className: "text-xs",
                children: item.label
            }, `${item.hash}-${idx}`, false, {
                fileName: "[project]/components/project/SectionNav.tsx",
                lineNumber: 129,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/project/SectionNav.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/project/ProjectLocationMap.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectLocationMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-lg overflow-hidden border border-[var(--gold)] shadow-[0_0_0_1px_rgba(var(--gold-rgb),0.35)] " + (className ?? ""),
            style: {
                height
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-lg overflow-hidden border border-[var(--gold)] shadow-[0_0_0_1px_rgba(var(--gold-rgb),0.25)] " + (className ?? ""),
            style: {
                height
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center rounded-lg border border-neutral-300 bg-neutral-50 text-neutral-700 " + (className ?? ""),
        style: {
            height
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/components/PropVRFrame.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PropVRFrame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function PropVRFrame({ url, title = 'PropVR', height = 560, className = '' }) {
    const src = (url || '').trim();
    const h = typeof height === 'number' ? String(height) : height;
    if (!src) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-full ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
            src: src,
            title: title,
            width: "100%",
            height: h,
            loading: "lazy",
            allow: "fullscreen; xr-spatial-tracking; autoplay",
            allowFullScreen: true,
            referrerPolicy: "no-referrer",
            style: {
                border: 0
            }
        }, void 0, false, {
            fileName: "[project]/components/PropVRFrame.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/PropVRFrame.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/project/VideoBlock.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VideoBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contentful$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/contentful-utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
function VideoBlock({ src, poster, className = 'w-full rounded-2xl overflow-hidden', autoPlay = false, muted = true, controls = true, loop = false, preload = 'none' }) {
    // جميع الروابط تمر عبر directAccess:
    // يتخطّى البروكسي للدومينات الموثوقة ويستخدم البروكسي لغيرها
    const v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contentful$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["directAccess"])(src);
    const p = poster ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$contentful$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["directAccess"])(poster) : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
        className: className,
        src: v,
        poster: p,
        autoPlay: autoPlay,
        muted: muted,
        controls: controls,
        loop: loop,
        playsInline: true,
        preload: preload
    }, void 0, false, {
        fileName: "[project]/components/project/VideoBlock.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/ROICalculator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ROICalculator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LuxuryButton.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function ROICalculator({ project, locale = 'en' }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // حدد سعر البدء من minPriceAED أو price سواءً كان رقماً أو نصاً
    const initialPrice = typeof project?.minPriceAED === 'number' ? String(project.minPriceAED) : typeof project?.price === 'number' ? String(project.price) : typeof project?.price === 'string' ? project.price.replace(/[^\d]/g, '') : '';
    const [purchasePrice, setPurchasePrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialPrice);
    const [annualRent, setAnnualRent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [investmentPeriod, setInvestmentPeriod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('5');
    const [downPayment, setDownPayment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('25');
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCalculating, setIsCalculating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const projectTitle = project?.projectName?.en || project?.projectName?.ar || project?.slug || 'Project';
    const onClose = ()=>setIsOpen(false);
    const texts = {
        ar: {
            title: 'حاسبة العائد على الاستثمار',
            subtitle: 'احسب العائد المتوقع لاستثمارك',
            purchasePrice: 'سعر الشراء (درهم)',
            annualRent: 'الإيجار السنوي (درهم)',
            investmentPeriod: 'فترة الاستثمار (سنوات)',
            downPayment: 'الدفعة المقدمة (%)',
            calculate: 'احسب العائد',
            calculating: 'جاري الحساب...',
            results: 'نتائج الحساب',
            roi: 'العائد على الاستثمار',
            monthlyReturn: 'العائد الشهري',
            yearlyReturn: 'العائد السنوي',
            totalReturn: 'إجمالي العائد',
            aiRecommendation: 'توصية الذكاء الاصطناعي',
            riskLevel: 'مستوى المخاطرة',
            low: 'منخفض',
            medium: 'متوسط',
            high: 'عالي',
            recalculate: 'إعادة حساب',
            close: 'إغلاق',
            triggerButton: 'حاسبة العائد على الاستثمار'
        },
        en: {
            title: 'ROI Calculator',
            subtitle: 'Calculate your expected investment return',
            purchasePrice: 'Purchase Price (AED)',
            annualRent: 'Annual Rent (AED)',
            investmentPeriod: 'Investment Period (Years)',
            downPayment: 'Down Payment (%)',
            calculate: 'Calculate ROI',
            calculating: 'Calculating...',
            results: 'Calculation Results',
            roi: 'Return on Investment',
            monthlyReturn: 'Monthly Return',
            yearlyReturn: 'Yearly Return',
            totalReturn: 'Total Return',
            aiRecommendation: 'AI Recommendation',
            riskLevel: 'Risk Level',
            low: 'Low',
            medium: 'Medium',
            high: 'High',
            recalculate: 'Recalculate',
            close: 'Close',
            triggerButton: 'ROI Calculator'
        }
    };
    const t = texts[locale];
    const calculateROI = ()=>{
        if (!purchasePrice || !annualRent) return;
        setIsCalculating(true);
        setTimeout(()=>{
            const price = parseFloat(purchasePrice);
            const rent = parseFloat(annualRent);
            const years = parseInt(investmentPeriod);
            const downPercent = parseFloat(downPayment);
            const downPaymentAmount = price * downPercent / 100;
            const yearlyReturn = rent;
            const monthlyReturn = rent / 12;
            const totalReturn = rent * years;
            const roi = (totalReturn - downPaymentAmount) / downPaymentAmount * 100;
            let riskLevel = 'medium';
            let aiRecommendation = '';
            if (roi > 15) {
                riskLevel = 'low';
                aiRecommendation = locale === 'ar' ? 'استثمار ممتاز! العائد المتوقع مرتفع والمخاطر منخفضة. ننصح بالمتابعة مع هذا الاستثمار.' : 'Excellent investment! High expected return with low risk. We recommend proceeding with this investment.';
            } else if (roi > 8) {
                riskLevel = 'medium';
                aiRecommendation = locale === 'ar' ? 'استثمار جيد بعائد معقول. تأكد من دراسة السوق والموقع بعناية قبل اتخاذ القرار.' : 'Good investment with reasonable return. Make sure to study the market and location carefully before deciding.';
            } else {
                riskLevel = 'high';
                aiRecommendation = locale === 'ar' ? 'العائد منخفض نسبياً. ننصح بمراجعة الأسعار أو البحث عن فرص استثمارية أخرى.' : 'Relatively low return. We recommend reviewing prices or looking for other investment opportunities.';
            }
            setResult({
                roi,
                monthlyReturn,
                yearlyReturn,
                totalReturn,
                aiRecommendation,
                riskLevel
            });
            setIsCalculating(false);
        }, 1500);
    };
    const resetCalculator = ()=>{
        setResult(null);
        const resetPrice = typeof project?.minPriceAED === 'number' ? String(project.minPriceAED) : typeof project?.price === 'number' ? String(project.price) : typeof project?.price === 'string' ? project.price.replace(/[^\d]/g, '') : '';
        setPurchasePrice(resetPrice);
        setAnnualRent('');
        setInvestmentPeriod('5');
        setDownPayment('25');
    };
    const formatCurrency = (amount)=>{
        return new Intl.NumberFormat('en-AE', {
            style: 'currency',
            currency: 'AED',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                variant: "primary",
                size: "lg",
                onClick: ()=>setIsOpen(true),
                className: "w-full py-4 font-bold shadow-lg hover:shadow-xl transform hover:scale-105",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-6 h-6",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/ROICalculator.tsx",
                                lineNumber: 177,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ui/ROICalculator.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this),
                        t.triggerButton
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/ROICalculator.tsx",
                    lineNumber: 175,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/ROICalculator.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-lg liquid-glass rounded-2xl border border-yellow-400/30 p-6 max-h-[90vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold gold-gradient",
                                            children: t.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/ROICalculator.tsx",
                                            lineNumber: 190,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 text-sm mt-1",
                                            children: projectTitle
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/ROICalculator.tsx",
                                            lineNumber: 191,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/ROICalculator.tsx",
                                    lineNumber: 189,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: onClose,
                                    className: "text-gray-400 hover:text-white transition-colors p-2 min-w-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-6 h-6",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M6 18L18 6M6 6l12 12"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/ROICalculator.tsx",
                                            lineNumber: 200,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/ROICalculator.tsx",
                                        lineNumber: 199,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/ROICalculator.tsx",
                                    lineNumber: 193,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/ROICalculator.tsx",
                            lineNumber: 188,
                            columnNumber: 13
                        }, this),
                        !result ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 text-center",
                                    children: t.subtitle
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/ROICalculator.tsx",
                                    lineNumber: 207,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-300 mb-2",
                                                    children: t.purchasePrice
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/ROICalculator.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: purchasePrice,
                                                    onChange: (e)=>setPurchasePrice(e.target.value),
                                                    className: "w-full p-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none",
                                                    placeholder: "1,500,000"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/ROICalculator.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ui/ROICalculator.tsx",
                                            lineNumber: 211,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-300 mb-2",
                                                    children: t.annualRent
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/ROICalculator.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: annualRent,
                                                    onChange: (e)=>setAnnualRent(e.target.value),
                                                    className: "w-full p-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none",
                                                    placeholder: "120,000"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/ROICalculator.tsx",
                                                    lineNumber: 224,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ui/ROICalculator.tsx",
                                            lineNumber: 222,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium text-gray-300 mb-2",
                                                            children: t.investmentPeriod
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ui/ROICalculator.tsx",
                                                            lineNumber: 235,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: investmentPeriod,
                                                            onChange: (e)=>setInvestmentPeriod(e.target.value),
                                                            className: "w-full p-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "3",
                                                                    children: "3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/ui/ROICalculator.tsx",
                                                                    lineNumber: 241,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "5",
                                                                    children: "5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/ui/ROICalculator.tsx",
                                                                    lineNumber: 242,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "7",
                                                                    children: "7"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/ui/ROICalculator.tsx",
                                                                    lineNumber: 243,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "10",
                                                                    children: "10"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/ui/ROICalculator.tsx",
                                                                    lineNumber: 244,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "15",
                                                                    children: "15"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/ui/ROICalculator.tsx",
                                                                    lineNumber: 245,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/ui/ROICalculator.tsx",
                                                            lineNumber: 236,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/ui/ROICalculator.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium text-gray-300 mb-2",
                                                            children: t.downPayment
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ui/ROICalculator.tsx",
                                                            lineNumber: 250,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: downPayment,
                                                            onChange: (e)=>setDownPayment(e.target.value),
                                                            className: "w-full p-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "10",
                                                                    children: "10%"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/ui/ROICalculator.tsx",
                                                                    lineNumber: 256,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "20",
                                                                    children: "20%"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/ui/ROICalculator.tsx",
                                                                    lineNumber: 257,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "25",
                                                                    children: "25%"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/ui/ROICalculator.tsx",
                                                                    lineNumber: 258,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "30",
                                                                    children: "30%"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/ui/ROICalculator.tsx",
                                                                    lineNumber: 259,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "50",
                                                                    children: "50%"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/ui/ROICalculator.tsx",
                                                                    lineNumber: 260,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "100",
                                                                    children: "100%"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/ui/ROICalculator.tsx",
                                                                    lineNumber: 261,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/ui/ROICalculator.tsx",
                                                            lineNumber: 251,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/ui/ROICalculator.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ui/ROICalculator.tsx",
                                            lineNumber: 233,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/ROICalculator.tsx",
                                    lineNumber: 210,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    variant: "primary",
                                    size: "lg",
                                    onClick: calculateROI,
                                    disabled: !purchasePrice || !annualRent || isCalculating,
                                    className: "w-full py-4 font-bold disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: isCalculating ? t.calculating : t.calculate
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/ROICalculator.tsx",
                                    lineNumber: 268,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/ROICalculator.tsx",
                            lineNumber: 206,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-center gold-gradient",
                                    children: t.results
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/ROICalculator.tsx",
                                    lineNumber: 280,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 bg-gray-800/30 rounded-lg border border-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-2xl font-bold gold-gradient",
                                                    children: [
                                                        result.roi.toFixed(1),
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/ui/ROICalculator.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-gray-400",
                                                    children: t.roi
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/ROICalculator.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ui/ROICalculator.tsx",
                                            lineNumber: 284,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 bg-gray-800/30 rounded-lg border border-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-2xl font-bold text-green-400",
                                                    children: formatCurrency(result.monthlyReturn)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/ROICalculator.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-gray-400",
                                                    children: t.monthlyReturn
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/ROICalculator.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ui/ROICalculator.tsx",
                                            lineNumber: 288,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 bg-gray-800/30 rounded-lg border border-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-2xl font-bold text-blue-400",
                                                    children: formatCurrency(result.yearlyReturn)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/ROICalculator.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-gray-400",
                                                    children: t.yearlyReturn
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/ROICalculator.tsx",
                                                    lineNumber: 294,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ui/ROICalculator.tsx",
                                            lineNumber: 292,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 bg-gray-800/30 rounded-lg border border-gray-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-2xl font-bold text-purple-400",
                                                    children: formatCurrency(result.totalReturn)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/ROICalculator.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-gray-400",
                                                    children: t.totalReturn
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ui/ROICalculator.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ui/ROICalculator.tsx",
                                            lineNumber: 296,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/ROICalculator.tsx",
                                    lineNumber: 283,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-400",
                                            children: [
                                                t.riskLevel,
                                                ":"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ui/ROICalculator.tsx",
                                            lineNumber: 304,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `px-3 py-1 rounded-full text-sm font-semibold ${result.riskLevel === 'low' ? 'bg-green-400/20 text-green-400' : result.riskLevel === 'medium' ? 'bg-yellow-400/20 text-yellow-400' : 'bg-red-400/20 text-red-400'}`,
                                            children: t[result.riskLevel]
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/ROICalculator.tsx",
                                            lineNumber: 305,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/ROICalculator.tsx",
                                    lineNumber: 303,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 bg-yellow-400/10 rounded-lg border border-yellow-400/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-yellow-400 font-semibold mb-2",
                                            children: t.aiRecommendation
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/ROICalculator.tsx",
                                            lineNumber: 316,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-300 text-sm leading-relaxed",
                                            children: result.aiRecommendation
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/ROICalculator.tsx",
                                            lineNumber: 317,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/ROICalculator.tsx",
                                    lineNumber: 315,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            variant: "outline",
                                            size: "md",
                                            onClick: resetCalculator,
                                            className: "flex-1 py-3",
                                            children: t.recalculate
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/ROICalculator.tsx",
                                            lineNumber: 322,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LuxuryButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            variant: "primary",
                                            size: "md",
                                            onClick: onClose,
                                            className: "flex-1 py-3 font-semibold",
                                            children: t.close
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/ROICalculator.tsx",
                                            lineNumber: 330,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/ROICalculator.tsx",
                                    lineNumber: 321,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/ROICalculator.tsx",
                            lineNumber: 279,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/ROICalculator.tsx",
                    lineNumber: 186,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/ROICalculator.tsx",
                lineNumber: 185,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=_1e426174._.js.map