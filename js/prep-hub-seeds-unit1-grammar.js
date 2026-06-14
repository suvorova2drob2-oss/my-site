/**
 * Prep hub — Level 1 · Grammar (CPE).
 */
(function (W) {
    "use strict";

    var thePresent = {
        id: "u1_grammar_the_present",
        title: "Language focus — The present",
        subtitle: "Present simple vs continuous · 8 sentences · one or both forms",
        kind: "prep-link",
        href:
            "unit1-grammar/cpe/the-present/index.html?course=cpe&backLabel=" +
            encodeURIComponent("Grammar — Level 1"),
    };

    W.PREP_HUB_U1_GRAMMAR_SEEDS = {
        folderGrammar: {
            title: "Grammar",
            subtitle: "Unit 1 · The present (simple vs continuous)",
        },
        seededTasks: [thePresent],
        taskIdsOrdered: [thePresent.id],
        thePresentTask: thePresent,
    };
})(typeof window !== "undefined" ? window : globalThis);
