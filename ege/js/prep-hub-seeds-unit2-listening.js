/**
 * Prep hub — Level 2 · Listening (CPE Levels hub only).
 */
(function (W) {
    "use strict";

    var part2Wilderness = {
        id: "u2_listen_p2_wilderness",
        title: "Part 2 · Into the wilderness",
        subtitle: "Sentence completion · questions 1–9 · Track 2.1 · audio pending",
        kind: "prep-link",
        href:
            "unit2-listening/cpe/part2-into-the-wilderness/index.html?course=cpe&backLabel=" +
            encodeURIComponent("Listening — Level 2"),
    };

    W.PREP_HUB_U2_LISTENING_SEEDS = {
        folderListening: {
            title: "Listening",
            subtitle: "Unit 2 · Part 2 sentence completion (CPE)",
        },
        seededTasks: [part2Wilderness],
        taskIdsOrdered: [part2Wilderness.id],
        part2WildernessTask: part2Wilderness,
    };
})(typeof window !== "undefined" ? window : globalThis);
