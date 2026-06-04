/**
 * Prep hub — Level 12 · Use of English (CPE).
 */
(function (W) {
    "use strict";

    var uoeBack =
        "..%2F..%2Findex.html%3Fprep_stay%3D1%26screen%3Dunit12%26prep_open_folder%3Dprep_legacy_u12_uoe";

    var foodSupplementsMc = {
        id: "u12_uoe_mc_food_supplements",
        title: "Multiple Choice Cloze — Food supplements: friend or foe?",
        subtitle: "Part 1 (A–D) · example (0) + gaps 1–8",
        kind: "prep-link",
        href:
            "use-of-english/part1-mc-cloze/index.html?course=cpe&context=unit12-uoe-food-supplements&back=" +
            uoeBack +
            "&backLabel=" +
            encodeURIComponent("Use of English — Unit 12"),
    };

    var part3Wf = {
        id: "u12_uoe_part3_pickleball_padel",
        title: "Word formation — The rise of pickleball and padel",
        subtitle: "Part 3 · example (0) PURSUIT + gaps 1–8",
        kind: "prep-link",
        href:
            "use-of-english/part3-word-formation/unit12-pickleball-padel.html?course=cpe&back=" +
            uoeBack +
            "&backLabel=" +
            encodeURIComponent("Use of English — Unit 12"),
    };

    var part4Kwt = {
        id: "u12_uoe_part4_key_word_transformation",
        title: "Part 4 — Key word transformation",
        subtitle: "Six items · SADDLED, SAY, ERR, WHATSOEVER, IN, FAINTEST",
        kind: "prep-link",
        href:
            "use-of-english/part4-key-word-transformation/unit12.html?course=cpe&back=" +
            uoeBack +
            "&backLabel=" +
            encodeURIComponent("Use of English — Unit 12"),
    };

    W.PREP_HUB_U12_UOE_SEEDS = {
        folderUseOfEnglish: {
            title: "Use of English",
            subtitle: "Unit 12 · Part 1 MC cloze, Part 3 word formation, Part 4 KWT (CPE)",
        },
        seededTasks: [foodSupplementsMc, part3Wf, part4Kwt],
        taskIdsOrdered: [foodSupplementsMc.id, part3Wf.id, part4Kwt.id],
        foodSupplementsMcTask: foodSupplementsMc,
        part3WfTask: part3Wf,
        part4KwtTask: part4Kwt,
    };
})(typeof window !== "undefined" ? window : globalThis);
