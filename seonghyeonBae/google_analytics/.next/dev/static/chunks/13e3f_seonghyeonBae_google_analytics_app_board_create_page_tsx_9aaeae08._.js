(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/GitHub/pm-incubator-forge/seonghyeonBae/google_analytics/app/board/create/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BoardCreate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$pm$2d$incubator$2d$forge$2f$seonghyeonBae$2f$google_analytics$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/GitHub/pm-incubator-forge/seonghyeonBae/google_analytics/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$pm$2d$incubator$2d$forge$2f$seonghyeonBae$2f$google_analytics$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/pm-incubator-forge/seonghyeonBae/google_analytics/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$pm$2d$incubator$2d$forge$2f$seonghyeonBae$2f$google_analytics$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/pm-incubator-forge/seonghyeonBae/google_analytics/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$pm$2d$incubator$2d$forge$2f$seonghyeonBae$2f$google_analytics$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/pm-incubator-forge/seonghyeonBae/google_analytics/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function BoardCreate() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$pm$2d$incubator$2d$forge$2f$seonghyeonBae$2f$google_analytics$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$pm$2d$incubator$2d$forge$2f$seonghyeonBae$2f$google_analytics$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$pm$2d$incubator$2d$forge$2f$seonghyeonBae$2f$google_analytics$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    async function handleSubmit() {
        const res = await fetch(`${("TURBOPACK compile-time value", "")}/board/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                title,
                content
            })
        });
        if (!res.ok) {
            alert("작성 실패!");
            return;
        }
        const data = await res.json();
        // 생성된 게시글 ID로 상세 페이지로 이동
        router.push(`/board/${data.id}`);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$pm$2d$incubator$2d$forge$2f$seonghyeonBae$2f$google_analytics$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$pm$2d$incubator$2d$forge$2f$seonghyeonBae$2f$google_analytics$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4",
                children: "게시글 작성"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/pm-incubator-forge/seonghyeonBae/google_analytics/app/board/create/page.tsx",
                lineNumber: 34,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$pm$2d$incubator$2d$forge$2f$seonghyeonBae$2f$google_analytics$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                className: "border p-2 w-full mb-3",
                placeholder: "제목",
                value: title,
                onChange: (e)=>setTitle(e.target.value)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/pm-incubator-forge/seonghyeonBae/google_analytics/app/board/create/page.tsx",
                lineNumber: 36,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$pm$2d$incubator$2d$forge$2f$seonghyeonBae$2f$google_analytics$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                className: "border p-2 w-full mb-3",
                placeholder: "내용",
                rows: 6,
                value: content,
                onChange: (e)=>setContent(e.target.value)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/pm-incubator-forge/seonghyeonBae/google_analytics/app/board/create/page.tsx",
                lineNumber: 43,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$pm$2d$incubator$2d$forge$2f$seonghyeonBae$2f$google_analytics$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleSubmit,
                className: "bg-green-600 text-white px-4 py-2 rounded",
                children: "저장하기"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/pm-incubator-forge/seonghyeonBae/google_analytics/app/board/create/page.tsx",
                lineNumber: 51,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/pm-incubator-forge/seonghyeonBae/google_analytics/app/board/create/page.tsx",
        lineNumber: 33,
        columnNumber: 9
    }, this);
}
_s(BoardCreate, "ji4HZdNw3FeiaCMCGc/vhtJAGKE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$pm$2d$incubator$2d$forge$2f$seonghyeonBae$2f$google_analytics$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = BoardCreate;
var _c;
__turbopack_context__.k.register(_c, "BoardCreate");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=13e3f_seonghyeonBae_google_analytics_app_board_create_page_tsx_9aaeae08._.js.map