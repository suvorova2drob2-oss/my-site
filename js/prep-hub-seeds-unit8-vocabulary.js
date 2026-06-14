/**
 * Prep hub — Level 8 · Vocabulary (CPE Levels hub).
 */
(function (W) {
    "use strict";

    var correctOption = {
        id: "u8_correct_option_seed",
        title: "Correct option — comparatives & fixed phrases",
        subtitle: "5 sentences · every bit / faintest / no worse off · environment theme",
        kind: "prep-link",
        href:
            "unit8-vocabulary/cpe/correct-option/index.html?course=cpe&backLabel=" +
            encodeURIComponent("Vocabulary — Level 8"),
    };

    var evOptions = {
        id: "u8_ev_options_seed",
        title: "Electric vehicles — correct options",
        subtitle: "7 gaps · despite / albeit / while / yet · EV passage",
        kind: "prep-link",
        href:
            "unit8-vocabulary/cpe/electric-vehicles-options/index.html?course=cpe&backLabel=" +
            encodeURIComponent("Vocabulary — Level 8"),
    };

    var coastalWords = {
        id: "u8_coastal_words_seed",
        title: "Coastal habitats — gap fill",
        subtitle: "8 typed gaps · erosion · sustainable development · environment",
        kind: "prep-link",
        href:
            "unit8-vocabulary/cpe/coastal-words/index.html?course=cpe&backLabel=" +
            encodeURIComponent("Vocabulary — Level 8"),
    };

    W.PREP_HUB_U8_VOCAB_SEEDS = {
        folderVocabulary: {
            title: "Vocabulary",
            subtitle: "Unit 8 · contrast linkers · environment collocations · comparatives",
        },
        seededTasks: [correctOption, evOptions, coastalWords],
        taskIdsOrdered: [correctOption.id, evOptions.id, coastalWords.id],
        correctOptionTask: correctOption,
        evOptionsTask: evOptions,
        coastalWordsTask: coastalWords,
    };
})(typeof window !== "undefined" ? window : globalThis);
