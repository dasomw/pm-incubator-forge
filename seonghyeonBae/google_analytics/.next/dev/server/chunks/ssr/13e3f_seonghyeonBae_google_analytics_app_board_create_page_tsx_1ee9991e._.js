module.exports = [
"[project]/Documents/GitHub/pm-incubator-forge/seonghyeonBae/google_analytics/app/board/create/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BoardCreate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$pm$2d$incubator$2d$forge$2f$seonghyeonBae$2f$google_analytics$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/pm-incubator-forge/seonghyeonBae/google_analytics/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$pm$2d$incubator$2d$forge$2f$seonghyeonBae$2f$google_analytics$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/pm-incubator-forge/seonghyeonBae/google_analytics/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$pm$2d$incubator$2d$forge$2f$seonghyeonBae$2f$google_analytics$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/pm-incubator-forge/seonghyeonBae/google_analytics/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function BoardCreate() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$pm$2d$incubator$2d$forge$2f$seonghyeonBae$2f$google_analytics$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$pm$2d$incubator$2d$forge$2f$seonghyeonBae$2f$google_analytics$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$pm$2d$incubator$2d$forge$2f$seonghyeonBae$2f$google_analytics$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$pm$2d$incubator$2d$forge$2f$seonghyeonBae$2f$google_analytics$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$pm$2d$incubator$2d$forge$2f$seonghyeonBae$2f$google_analytics$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4",
                children: "게시글 작성"
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/pm-incubator-forge/seonghyeonBae/google_analytics/app/board/create/page.tsx",
                lineNumber: 34,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$pm$2d$incubator$2d$forge$2f$seonghyeonBae$2f$google_analytics$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                className: "border p-2 w-full mb-3",
                placeholder: "제목",
                value: title,
                onChange: (e)=>setTitle(e.target.value)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/pm-incubator-forge/seonghyeonBae/google_analytics/app/board/create/page.tsx",
                lineNumber: 36,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$pm$2d$incubator$2d$forge$2f$seonghyeonBae$2f$google_analytics$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$pm$2d$incubator$2d$forge$2f$seonghyeonBae$2f$google_analytics$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
];

//# sourceMappingURL=13e3f_seonghyeonBae_google_analytics_app_board_create_page_tsx_1ee9991e._.js.map