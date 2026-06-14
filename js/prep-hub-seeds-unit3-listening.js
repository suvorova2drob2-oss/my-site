/**
 * Prep hub — Level 3 · Listening (CPE Levels hub only).
 */
(function (W) {
    "use strict";

    var listenBack =
        "unit3-listening/cpe/index.html?course=cpe&backLabel=" +
        encodeURIComponent("Level 3");

    var part1Mc = {
        id: "u3_listen_p1_set1",
        title: "Part 1 · Multiple choice (Track 3.3)",
        subtitle: "Three extracts · questions 1–6 · A/B/C · audio pending",
        kind: "prep-link",
        href:
            "unit3-listening/cpe/part1-multiple-choice/index.html?course=cpe&backLabel=" +
            encodeURIComponent("Listening — Level 3"),
    };

    var part4Matching = {
        id: "u3_listen_p4_technology",
        title: "Part 4 · Multiple matching (technology)",
        subtitle: "Task ONE + Task TWO · options A–H · audio & key pending",
        kind: "prep-link",
        href:
            "unit3-listening/cpe/part4-multiple-matching/index.html?course=cpe&backLabel=" +
            encodeURIComponent("Listening — Level 3"),
    };

    W.PREP_HUB_U3_LISTENING_SEEDS = {
        folderListening: {
            title: "Listening",
            subtitle: "Unit 3 · Part 1 MC · Part 4 multiple matching",
        },
        seededTasks: [part1Mc, part4Matching],
        taskIdsOrdered: [part1Mc.id, part4Matching.id],
        part1McTask: part1Mc,
        part4MatchingTask: part4Matching,
    };
})(typeof window !== "undefined" ? window : globalThis);
