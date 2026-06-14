/**
 * CPE Unit 1 Grammar — back link → Prep hub folder.
 */
(function (W) {
    "use strict";

    function isCpeGrammarPage() {
        try {
            return /\/unit1-grammar\/cpe\//i.test(String(location.pathname || ""));
        } catch (e) {
            return false;
        }
    }

    W.wireUnit1CpeGrammarBack = function (opts) {
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
            typeof W.PREP_LEGACY_U1_GRAMMAR_FOLDER_ID !== "undefined"
                ? W.PREP_LEGACY_U1_GRAMMAR_FOLDER_ID
                : "prep_legacy_u1_grammar";

        var depth = opts.hubDepth != null ? Number(opts.hubDepth) : 3;
        var hub = "";
        for (var i = 0; i < depth; i++) hub += "../";
        hub += "index.html";

        back.href =
            hub +
            "?prep_stay=1&screen=unit1&prep_open_folder=" +
            encodeURIComponent(folderId);

        var lbl = params.get("backLabel");
        back.textContent = lbl
            ? "\u2190 " + lbl
            : opts.fallbackLabel || "\u2190 Grammar \u00b7 Level 1";
    };
})(typeof window !== "undefined" ? window : globalThis);
