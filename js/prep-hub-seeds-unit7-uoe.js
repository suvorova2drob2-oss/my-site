/**
 * Prep hub — Level 7 · Use of English (CPE Levels hub).
 */
(function (W) {
    "use strict";

    var uoeBack =
        "..%2F..%2Findex.html%3Fprep_stay%3D1%26screen%3Dunit7%26prep_open_folder%3Dprep_legacy_u7_uoe";

    var part2GiantJigsaw = {
        id: "u7_uoe_part2_giant_jigsaw",
        title: "Part 2 — Open cloze (A giant jigsaw)",
        subtitle: "Costco · world's largest puzzle · gaps 1–8 · example (0) OF",
        kind: "prep-link",
        href:
            "use-of-english/part2-open-cloze/index.html?course=cpe&context=unit7-p2-giant-jigsaw&back=" +
            uoeBack +
            "&backLabel=" +
            encodeURIComponent("Use of English — Level 7"),
    };

    W.PREP_HUB_U7_UOE_SEEDS = {
        folderUoe: {
            title: "Use of English",
            subtitle: "Unit 7 · Part 2 open cloze · A giant jigsaw",
        },
        seededTasks: [part2GiantJigsaw],
        taskIdsOrdered: [part2GiantJigsaw.id],
        part2GiantJigsawTask: part2GiantJigsaw,
    };
})(typeof window !== "undefined" ? window : globalThis);
