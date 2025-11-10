module.exports = [
"[project]/lib/dictionaries/en.json (json, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/lib_dictionaries_en_json_a529d862._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/lib/dictionaries/en.json (json)");
    });
});
}),
"[project]/lib/dictionaries/ar.json (json, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/lib_dictionaries_ar_json_2b45f183._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/lib/dictionaries/ar.json (json)");
    });
});
}),
];