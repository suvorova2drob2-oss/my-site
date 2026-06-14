/**
 * Prep hub — Level 7 · Vocabulary (CPE Levels hub).
 * Consumed by ensurePrepUnit7VocabularyFolder() in prep-hub-unit7-nests.js.
 */
(function (W) {
    "use strict";

    var intoThinAir = {
        id: "u7_into_thin_air_seed",
        title: "Into thin air — word pairs (Part 1)",
        subtitle: "8 gaps · baffled / confounded / duped … · Check shows why each fits",
        kind: "prep-link",
        href:
            "unit7-vocabulary/cpe/into-thin-air/index.html?course=cpe&backLabel=" +
            encodeURIComponent("Vocabulary — Level 7"),
    };

    var correctOption = {
        id: "u7_correct_option_seed",
        title: "Correct option — adjective order & collocations (Part 2)",
        subtitle: "7 sentences · warm/talkative, by all means, the very place …",
        kind: "prep-link",
        href:
            "unit7-vocabulary/cpe/correct-option/index.html?course=cpe&backLabel=" +
            encodeURIComponent("Vocabulary — Level 7"),
    };

    W.PREP_HUB_U7_VOCAB_SEEDS = {
        folderVocabulary: {
            title: "Vocabulary",
            subtitle: "Unit 7 · Into thin air · adjective order · fixed phrases",
        },
        seededTasks: [intoThinAir, correctOption],
        taskIdsOrdered: [intoThinAir.id, correctOption.id],
        intoThinAirTask: intoThinAir,
        correctOptionTask: correctOption,
    };
})(typeof window !== "undefined" ? window : globalThis);
