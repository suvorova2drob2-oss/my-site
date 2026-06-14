/**
 * Prep hub — Level 2 · Reading (CPE Levels hub only).
 */
(function (W) {
    "use strict";

    var filmTourism = {
        id: "u2_reading_film_tourism_seed",
        title: "Film tourism",
        subtitle: "Unit 2 · Reading Part 5 · 6× multiple choice (A–D)",
        kind: "prep-link",
        href:
            "unit2-reading/cpe/film-tourism/index.html?course=cpe&backLabel=" +
            encodeURIComponent("Reading — Level 2"),
    };

    W.PREP_HUB_U2_READING_SEEDS = {
        folderReading: {
            title: "Reading",
            subtitle: "Unit 2 · Part 5 multiple choice (CPE)",
        },
        seededTasks: [filmTourism],
        taskIdsOrdered: [filmTourism.id],
        filmTourismTask: filmTourism,
    };
})(typeof window !== "undefined" ? window : globalThis);
