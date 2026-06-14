/**
 * Prep hub — Level 9 · Vocabulary (CPE Levels hub).
 */
(function (W) {
    "use strict";

    var correctOption = {
        id: "u9_correct_option_seed",
        title: "Correct option — design & style adjectives",
        subtitle: "6 sentences · minimalistic / whimsical / flamboyant / swanky / renowned",
        kind: "prep-link",
        href:
            "unit9-vocabulary/cpe/correct-option/index.html?course=cpe&backLabel=" +
            encodeURIComponent("Vocabulary — Level 9"),
    };

    var linkerWords = {
        id: "u9_linker_words_seed",
        title: "Linker words — nor / whatever / however",
        subtitle: "6 gaps · as / while / in that · gallery & Alaska sentences",
        kind: "prep-link",
        href:
            "unit9-vocabulary/cpe/linker-words/index.html?course=cpe&backLabel=" +
            encodeURIComponent("Vocabulary — Level 9"),
    };

    W.PREP_HUB_U9_VOCAB_SEEDS = {
        folderVocabulary: {
            title: "Vocabulary",
            subtitle: "Unit 9 · design adjectives · linker words",
        },
        seededTasks: [correctOption, linkerWords],
        taskIdsOrdered: [correctOption.id, linkerWords.id],
        correctOptionTask: correctOption,
        linkerWordsTask: linkerWords,
    };
})(typeof window !== "undefined" ? window : globalThis);
