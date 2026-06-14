/**
 * CPE Unit 12 Grammar — back link → Prep hub folder (not unit12-grammar/cpe/index.html).
 */
(function (W) {
    "use strict";

    function isCpeGrammarPage() {
        try {
            return /\/unit12-grammar\/cpe\//i.test(String(location.pathname || ""));
        } catch (e) {
            return false;
        }
    }

    W.wireUnit12CpeGrammarBack = function (opts) {
        opts = opts || {};
        var back = document.getElementById(opts.id || "back-link");
        if (!back) return;

        var params = new URLSearchParams(location.search);
        if (
            !isCpeGrammarPage() &&
            params.get("course") !== "cpe" &&
            params.get("prep_stay") !== "1"
        ) {
            return;
        }

        var folderId =
            typeof W.PREP_LEGACY_U12_GRAMMAR_FOLDER_ID !== "undefined"
                ? W.PREP_LEGACY_U12_GRAMMAR_FOLDER_ID
                : "prep_legacy_u12_grammar";

        var depth = opts.hubDepth != null ? Number(opts.hubDepth) : 3;
        var hub = "";
        for (var i = 0; i < depth; i++) hub += "../";
        hub += "index.html";

        back.href =
            hub +
            "?prep_stay=1&screen=unit12&prep_open_folder=" +
            encodeURIComponent(folderId);

        var lbl = params.get("backLabel");
        back.textContent = lbl
            ? "\u2190 " + lbl
            : opts.fallbackLabel || "\u2190 Grammar \u00b7 Level 12";
    };

    W.unit12CpeGrammarHubHref = function (hubDepth) {
        var depth = hubDepth != null ? Number(hubDepth) : 2;
        var hub = "";
        for (var i = 0; i < depth; i++) hub += "../";
        hub += "index.html";
        var folderId =
            typeof W.PREP_LEGACY_U12_GRAMMAR_FOLDER_ID !== "undefined"
                ? W.PREP_LEGACY_U12_GRAMMAR_FOLDER_ID
                : "prep_legacy_u12_grammar";
        return (
            hub +
            "?prep_stay=1&screen=unit12&prep_open_folder=" +
            encodeURIComponent(folderId)
        );
    };
})(typeof window !== "undefined" ? window : globalThis);
