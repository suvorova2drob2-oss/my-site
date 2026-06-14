/**
 * Prep hub — Level 1 · Use of English (CPE).
 */
(function (W) {
    "use strict";

    var uoeBack =
        "..%2F..%2Findex.html%3Fprep_stay%3D1%26screen%3Dunit1%26prep_open_folder%3Dprep_legacy_u1_uoe";

    var part1FashionForRent = {
        id: "u1_uoe_part1_fashion_for_rent",
        title: "Part 1 — Multiple-choice cloze (Fashion for rent)",
        subtitle: "Example (0) vehicle · gaps 1–8 · A–D",
        kind: "prep-link",
        href:
            "use-of-english/part1-mc-cloze/index.html?course=cpe&context=unit1-p1-fashion-for-rent&back=" +
            uoeBack +
            "&backLabel=" +
            encodeURIComponent("Use of English — Level 1"),
    };

    var part2JobTitles = {
        id: "u1_uoe_part2_job_titles",
        title: "Part 2 — Open cloze (Job titles)",
        subtitle: "Do job titles really matter? · gaps 1–8 · example (0) WORD",
        kind: "prep-link",
        href:
            "use-of-english/part2-open-cloze/index.html?course=cpe&context=unit1-p2-job-titles&back=" +
            uoeBack +
            "&backLabel=" +
            encodeURIComponent("Use of English — Level 1"),
    };

    var prepositionsDrill = {
        id: "u1_uoe_prepositions_part2_drill",
        title: "Prepositions — Part 2 prep (Exercise 4)",
        subtitle: "Sentences 1–8 · write prepositions in the right-hand column",
        kind: "prep-link",
        href:
            "use-of-english/unit1/prepositions-part2-drill.html?course=cpe&back=" +
            uoeBack +
            "&backLabel=" +
            encodeURIComponent("Use of English — Level 1"),
    };

    W.PREP_HUB_U1_UOE_SEEDS = {
        folderUoe: {
            title: "Use of English",
            subtitle: "Unit 1 · Part 1 MC cloze · Part 2 open cloze · prepositions drill",
        },
        seededTasks: [part1FashionForRent, part2JobTitles, prepositionsDrill],
        taskIdsOrdered: [part1FashionForRent.id, part2JobTitles.id, prepositionsDrill.id],
        part1FashionForRentTask: part1FashionForRent,
        part2JobTitlesTask: part2JobTitles,
        prepositionsDrillTask: prepositionsDrill,
    };
})(typeof window !== "undefined" ? window : globalThis);
