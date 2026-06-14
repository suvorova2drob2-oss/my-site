/**
 * Prep hub — Level 2 · Vocabulary (CPE Levels hub only).
 * Consumed by ensurePrepUnit2VocabularyFolder() in prep-hub-unit2-nests.js.
 */
(function (W) {
    "use strict";

    var travelSentenceAlternatives = {
        id: "u2_travel_sentence_alternatives_seed",
        title: "Travel — correct alternative (sentences 1–6)",
        subtitle: "Exercise 1 · long-haul flight · arduous journey · leisurely stroll …",
        kind: "prep-link",
        href:
            "unit2-vocabulary/cpe/travel-sentence-alternatives/index.html?course=cpe&backLabel=" +
            encodeURIComponent("Vocabulary — Level 2"),
    };

    var travelCollocations = {
        id: "u2_travel_collocations_seed",
        title: "Travel — odd-one-out collocations",
        subtitle: "Exercise 1 · adjective groups · JOURNEY, ROUTE, FLIGHT …",
        kind: "prep-link",
        href:
            "unit2-vocabulary/cpe/travel-collocations/index.html?course=cpe&backLabel=" +
            encodeURIComponent("Vocabulary — Level 2"),
    };

    var travelBoxCollocations = {
        id: "u2_travel_box_collocations_seed",
        title: "Travel — boxes A & B (sentence collocations)",
        subtitle: "Exercise 2 · adjective + noun · discerning traveller (example) · 1–7",
        kind: "prep-link",
        href:
            "unit2-vocabulary/cpe/travel-box-collocations/index.html?course=cpe&backLabel=" +
            encodeURIComponent("Vocabulary — Level 2"),
    };

    var storyIdioms = {
        id: "u2_story_idioms_seed",
        title: "Idioms — Making stories interesting",
        subtitle: "Exercise 1 · guess missing words · idioms 1–10 · listening p. 21",
        kind: "prep-link",
        href:
            "unit2-vocabulary/cpe/story-idioms/index.html?course=cpe&backLabel=" +
            encodeURIComponent("Vocabulary — Level 2"),
    };

    W.PREP_HUB_U2_VOCAB_SEEDS = {
        folderVocabulary: {
            title: "Vocabulary",
            subtitle: "Unit 2 · Travel · idioms · collocations · sentence choice",
        },
        seededTasks: [travelSentenceAlternatives, travelCollocations, travelBoxCollocations, storyIdioms],
        taskIdsOrdered: [
            travelSentenceAlternatives.id,
            travelCollocations.id,
            travelBoxCollocations.id,
            storyIdioms.id,
        ],
        travelSentenceAlternativesTask: travelSentenceAlternatives,
        travelCollocationsTask: travelCollocations,
        travelBoxCollocationsTask: travelBoxCollocations,
        storyIdiomsTask: storyIdioms,
    };
})(typeof window !== "undefined" ? window : globalThis);
