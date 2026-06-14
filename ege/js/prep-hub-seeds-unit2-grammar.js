/**
 * Prep hub — Level 2 · Grammar (CPE).
 */
(function (W) {
    "use strict";

    var adverbsAdverbialPhrases = {
        id: "u2_grammar_adverbs_adverbial_phrases",
        title: "Language focus — Adverbs and adverbial phrases",
        subtitle: "Exercise 1 · match 1–3 to types a–c · even / in the wild / supposedly",
        kind: "prep-link",
        href:
            "unit2-grammar/cpe/adverbs-adverbial-phrases/index.html?course=cpe&backLabel=" +
            encodeURIComponent("Grammar — Level 2"),
    };

    W.PREP_HUB_U2_GRAMMAR_SEEDS = {
        folderGrammar: {
            title: "Grammar",
            subtitle: "Unit 2 · Adverbs and adverbial phrases",
        },
        seededTasks: [adverbsAdverbialPhrases],
        taskIdsOrdered: [adverbsAdverbialPhrases.id],
        adverbsAdverbialPhrasesTask: adverbsAdverbialPhrases,
    };
})(typeof window !== "undefined" ? window : globalThis);
