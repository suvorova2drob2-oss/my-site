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

    W.PREP_HUB_U12_READING_SEEDS = {
        folderReading: {
            title: "Reading",
            subtitle: "Unit 12 · Part 5 multiple choice (CPE)",
        },
        seededTasks: [roadToBetterment],
        taskIdsOrdered: [roadToBetterment.id],
        roadToBettermentTask: roadToBetterment,
    };
})(typeof window !== "undefined" ? window : globalThis);
