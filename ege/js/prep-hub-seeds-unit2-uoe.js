/**
 * Prep hub — Level 2 · Use of English (CPE).
 */
(function (W) {
    "use strict";

    var uoeBack =
        "..%2F..%2Findex.html%3Fprep_stay%3D1%26screen%3Dunit2%26prep_open_folder%3Dprep_legacy_u2_uoe";

    var anotherWorldMc = {
        id: "u2_uoe_mc_another_world",
        title: "Multiple Choice Cloze — Another world",
        subtitle: "Part 1 (A–D) · example (0) plays + gaps 1–8 · Comic-Con",
        kind: "prep-link",
        href:
            "use-of-english/part1-mc-cloze/index.html?course=cpe&context=unit2-uoe-another-world&back=" +
            uoeBack +
            "&backLabel=" +
            encodeURIComponent("Use of English — Level 2"),
    };

    var lessonsLensP2 = {
        id: "u2_uoe_part2_lessons_lens",
        title: "Part 2 — Open cloze (Lessons from behind the lens)",
        subtitle: "Robin Moore · iguanas · example (0) FELL · gaps 1–8",
        kind: "prep-link",
        href:
            "use-of-english/part2-open-cloze/index.html?course=cpe&context=unit2-p2-lessons-lens&back=" +
            uoeBack +
            "&backLabel=" +
            encodeURIComponent("Use of English — Level 2"),
    };

    var wordFormationAdverbs = {
        id: "u2_uoe_word_formation_adverbs",
        title: "Word formation — Adverbs",
        subtitle: "Exercises 1–5 · underline · suffix rows · word formation in context",
        kind: "prep-link",
        href:
            "use-of-english/unit2/word-formation-adverbs.html?course=cpe&backLabel=" +
            encodeURIComponent("Use of English — Level 2"),
    };

    var part3WfHomeAway = {
        id: "u2_uoe_part3_home_away_from_home",
        title: "Word formation — Home away from home",
        subtitle: "Part 3 · example (0) CONSIDER + gaps 1–8",
        kind: "prep-link",
        href:
            "use-of-english/part3-word-formation/unit2-home-away-from-home.html?course=cpe&back=" +
            uoeBack +
            "&backLabel=" +
            encodeURIComponent("Use of English — Level 2"),
    };

    var part3WfArtOfSushi = {
        id: "u2_uoe_part3_art_of_sushi",
        title: "Word formation — The art of sushi",
        subtitle: "Part 3 · example (0) ICON + gaps 1–8",
        kind: "prep-link",
        href:
            "use-of-english/part3-word-formation/unit2-art-of-sushi.html?course=cpe&back=" +
            uoeBack +
            "&backLabel=" +
            encodeURIComponent("Use of English — Level 2"),
    };

    var part4Kwt = {
        id: "u2_uoe_part4_key_word_transformation",
        title: "Part 4 — Key word transformation (set A)",
        subtitle: "Six items · SET, REFERENCE, IN, LACK, HELD, EXCEPTION",
        kind: "prep-link",
        href:
            "use-of-english/part4-key-word-transformation/unit2.html?course=cpe&back=" +
            uoeBack +
            "&backLabel=" +
            encodeURIComponent("Use of English — Level 2"),
    };

    var part4KwtSetB = {
        id: "u2_uoe_part4_key_word_transformation_set_b",
        title: "Part 4 — Key word transformation (set B · hints)",
        subtitle: "Example (0) DEAL · HARD, DOWN, STAND, WEATHER, BORE, VERGE",
        kind: "prep-link",
        href:
            "use-of-english/part4-key-word-transformation/unit2-set-b.html?course=cpe&back=" +
            uoeBack +
            "&backLabel=" +
            encodeURIComponent("Use of English — Level 2"),
    };

    W.PREP_HUB_U2_UOE_SEEDS = {
        folderUoe: {
            title: "Use of English",
            subtitle: "Unit 2 · Parts 1–4 · Word formation · workbook drills",
        },
        seededTasks: [
            anotherWorldMc,
            lessonsLensP2,
            wordFormationAdverbs,
            part3WfHomeAway,
            part3WfArtOfSushi,
            part4Kwt,
            part4KwtSetB,
        ],
        taskIdsOrdered: [
            anotherWorldMc.id,
            lessonsLensP2.id,
            wordFormationAdverbs.id,
            part3WfHomeAway.id,
            part3WfArtOfSushi.id,
            part4Kwt.id,
            part4KwtSetB.id,
        ],
        anotherWorldMcTask: anotherWorldMc,
        lessonsLensP2Task: lessonsLensP2,
        wordFormationAdverbsTask: wordFormationAdverbs,
        part3WfHomeAwayTask: part3WfHomeAway,
        part3WfArtOfSushiTask: part3WfArtOfSushi,
        part4KwtTask: part4Kwt,
        part4KwtSetBTask: part4KwtSetB,
    };
})(typeof window !== "undefined" ? window : globalThis);
