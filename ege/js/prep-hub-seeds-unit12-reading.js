/**
 * Prep hub — Level 12 · Reading (CPE Levels hub only).
 */
(function (W) {
    "use strict";

    var roadToBetterment = {
        id: "u12_reading_road_to_betterment_seed",
        title: "The Road to Betterment",
        subtitle: "Unit 12 · Reading Part 5 · 6× multiple choice (A–D)",
        kind: "prep-link",
        href:
            "unit12-reading/cpe/the-road-to-betterment/index.html?course=cpe&backLabel=" +
            encodeURIComponent("Reading — Level 12"),
    };

    var wellnessEconomy = {
        id: "u12_reading_wellness_economy_seed",
        title: "Why we are spending £1.26 trillion…",
        subtitle: "Unit 12 · Health & fitness reading · 6× multiple choice (A–D)",
        kind: "prep-link",
        href:
            "unit12-reading/cpe/wellness-economy/index.html?course=cpe&backLabel=" +
            encodeURIComponent("Reading — Level 12"),
    };

    W.PREP_HUB_U12_READING_SEEDS = {
        folderReading: {
            title: "Reading",
            subtitle: "Unit 12 · Part 5 multiple choice (CPE)",
        },
        seededTasks: [wellnessEconomy, roadToBetterment],
        taskIdsOrdered: [wellnessEconomy.id, roadToBetterment.id],
        roadToBettermentTask: roadToBetterment,
        wellnessEconomyTask: wellnessEconomy,
    };
})(typeof window !== "undefined" ? window : globalThis);
