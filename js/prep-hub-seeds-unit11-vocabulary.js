/**
 * Prep hub — Level 11 · Vocabulary (CPE Levels hub).
 */
(function (W) {
    "use strict";

    var sentenceMatching = {
        id: "u11_sentence_matching_seed",
        title: "Sentence matching — phrasal verbs & patterns",
        subtitle: "8 pairs · bang on / sound off / keep on at / insistent that / doubtful whether",
        kind: "prep-link",
        href:
            "unit11-vocabulary/cpe/sentence-matching/index.html?course=cpe&backLabel=" +
            encodeURIComponent("Vocabulary — Level 11"),
    };

    var adjectives = {
        id: "u11_adjectives_seed",
        title: "Adjectives — community & urban life",
        subtitle: "8 gaps · tight-knit / commuter belt / tree-lined / welfare / affluent",
        kind: "prep-link",
        href:
            "unit11-vocabulary/cpe/adjectives/index.html?course=cpe&backLabel=" +
            encodeURIComponent("Vocabulary — Level 11"),
    };

    W.PREP_HUB_U11_VOCAB_SEEDS = {
        folderVocabulary: {
            title: "Vocabulary",
            subtitle: "Unit 11 · sentence matching · adjectives · phrasal / collocation patterns",
        },
        seededTasks: [sentenceMatching, adjectives],
        taskIdsOrdered: [sentenceMatching.id, adjectives.id],
        sentenceMatchingTask: sentenceMatching,
        adjectivesTask: adjectives,
    };
})(typeof window !== "undefined" ? window : globalThis);
