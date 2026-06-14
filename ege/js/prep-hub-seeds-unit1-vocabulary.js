/**
 * Prep hub — Level 1 · Vocabulary (CPE Levels hub only).
 * Consumed by ensurePrepUnit1VocabularyFolder() in prep-hub-unit1-nests.js.
 */
(function (W) {
    "use strict";

    var personalityIdiomsMatching = {
        id: "u1_personality_idioms_matching_seed",
        title: "Personality — match sentences to idioms",
        subtitle: "Exercise 2 · sentences 1–9 · idioms a–i",
        kind: "prep-link",
        href:
            "unit1-vocabulary/cpe/personality-idioms-matching/index.html?course=cpe&backLabel=" +
            encodeURIComponent("Vocabulary — Level 1"),
    };

    var feelingsEmotionsPrepositions = {
        id: "u1_feelings_emotions_prepositions_seed",
        title: "Feelings and emotions — prepositions (word box)",
        subtitle: "Exercise 1 · bold collocations · by / in / out / over / to / with · 1–9",
        kind: "prep-link",
        href:
            "unit1-vocabulary/cpe/feelings-emotions-prepositions/index.html?course=cpe&backLabel=" +
            encodeURIComponent("Vocabulary — Level 1"),
    };

    var feelingsEmotions = {
        id: "u1_feelings_emotions_seed",
        title: "Feelings and emotions — sentence B (word box)",
        subtitle: "Exercise 1 · eight adjectives · paraphrase idioms in sentence B",
        kind: "prep-link",
        href:
            "unit1-vocabulary/cpe/feelings-emotions/index.html?course=cpe&backLabel=" +
            encodeURIComponent("Vocabulary — Level 1"),
    };

    var sConsonantWordBox = {
        id: "u1_s_consonant_word_box_seed",
        title: "/s/ + consonant clusters — word box",
        subtitle: "Exercise 2 · boasts, risks, scrapped, springboard, streak, stroll",
        kind: "prep-link",
        href:
            "unit1-vocabulary/cpe/s-consonant-word-box/index.html?course=cpe&backLabel=" +
            encodeURIComponent("Vocabulary — Level 1"),
    };

    var selfCompounds = {
        id: "u1_self_compounds_seed",
        title: "Self- compounds — adjectives & options",
        subtitle: "Exercises 2–3 · self- word box · self-pity / self-worth / self-deception",
        kind: "prep-link",
        href:
            "unit1-vocabulary/cpe/self-compounds/index.html?course=cpe&backLabel=" +
            encodeURIComponent("Vocabulary — Level 1"),
    };

    W.PREP_HUB_U1_VOCAB_SEEDS = {
        folderVocabulary: {
            title: "Vocabulary",
            subtitle: "Unit 1 · personality idioms · feelings · consonant clusters · self- compounds",
        },
        seededTasks: [
            personalityIdiomsMatching,
            feelingsEmotionsPrepositions,
            feelingsEmotions,
            sConsonantWordBox,
            selfCompounds,
        ],
        taskIdsOrdered: [
            personalityIdiomsMatching.id,
            feelingsEmotionsPrepositions.id,
            feelingsEmotions.id,
            sConsonantWordBox.id,
            selfCompounds.id,
        ],
        personalityIdiomsMatchingTask: personalityIdiomsMatching,
        feelingsEmotionsPrepositionsTask: feelingsEmotionsPrepositions,
        feelingsEmotionsTask: feelingsEmotions,
        sConsonantWordBoxTask: sConsonantWordBox,
        selfCompoundsTask: selfCompounds,
    };
})(typeof window !== "undefined" ? window : globalThis);
