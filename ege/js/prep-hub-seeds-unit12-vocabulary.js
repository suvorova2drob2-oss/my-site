/**
 * Prep hub — Level 12 · Vocabulary (CPE Levels hub only).
 * Consumed by ensurePrepUnit12VocabularyFolder() in prep-hub-unit12-nests.js.
 */
(function (W) {
    "use strict";

    var healthFitness = {
        id: "u12_health_fitness_collocations_seed",
        title: "Health and fitness — odd collocation out",
        subtitle: "Exercises 1–3 · odd collocation · noun groups · speaking · SB Health and fitness",
        kind: "prep-link",
        href:
            "unit12-vocabulary/cpe/health-fitness-collocations/index.html?course=cpe&backLabel=" +
            encodeURIComponent("Vocabulary — Level 12"),
    };

    var multiWordVerbs = {
        id: "u12_multi_word_verbs_seed",
        title: "Multi-word verbs — match, sort & gap-fill",
        subtitle: "Exercises 1–3 · SB Track 12.1 verbs + verb box · tap-to-pair & chip fill",
        kind: "prep-link",
        href:
            "unit12-vocabulary/cpe/multi-word-verbs/index.html?course=cpe&backLabel=" +
            encodeURIComponent("Vocabulary — Level 12"),
    };

    var sportsIdioms = {
        id: "u12_sports_idioms_seed",
        title: "Sports idioms — phrase bank & practice",
        subtitle: "Unit 12 · six idioms · literal origins + three short tasks",
        kind: "prep-link",
        href:
            "unit12-vocabulary/cpe/sports-idioms/index.html?course=cpe&backLabel=" +
            encodeURIComponent("Vocabulary — Level 12"),
    };

    var idiomsWordBox = {
        id: "u12_idioms_word_box_seed",
        title: "Idioms — complete with one word (word box)",
        subtitle: "Exercise 2 · ballpark, target, barred, bowled, chin · phrase bank + gaps",
        kind: "prep-link",
        href:
            "unit12-vocabulary/cpe/idioms-word-box/index.html?course=cpe&backLabel=" +
            encodeURIComponent("Vocabulary — Level 12"),
    };

    var discussingIdioms = {
        id: "u12_discussing_idioms_seed",
        title: "Discussing idioms — compare pairs",
        subtitle: "jump the gun / bandwagon · towel / hat in the ring · quick check + speaking",
        kind: "prep-link",
        href:
            "unit12-vocabulary/cpe/discussing-idioms/index.html?course=cpe&backLabel=" +
            encodeURIComponent("Vocabulary — Level 12"),
    };

    W.PREP_HUB_U12_VOCAB_SEEDS = {
        folderVocabulary: {
            title: "Vocabulary",
            subtitle: "Unit 12 · health & fitness, multi-word verbs, sports idioms, word box, discussing pairs",
        },
        seededTasks: [healthFitness, multiWordVerbs, sportsIdioms, idiomsWordBox, discussingIdioms],
        taskIdsOrdered: [
            healthFitness.id,
            multiWordVerbs.id,
            sportsIdioms.id,
            idiomsWordBox.id,
            discussingIdioms.id,
        ],
        healthFitnessTask: healthFitness,
        multiWordVerbsTask: multiWordVerbs,
        sportsIdiomsTask: sportsIdioms,
        idiomsWordBoxTask: idiomsWordBox,
        discussingIdiomsTask: discussingIdioms,
    };
})(typeof window !== "undefined" ? window : globalThis);
