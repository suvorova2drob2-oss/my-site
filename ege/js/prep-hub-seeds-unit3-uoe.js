/**

 * Prep hub — Level 3 · Use of English (CPE).

 */

(function (W) {

    "use strict";



    var uoeBack =

        "..%2F..%2Findex.html%3Fprep_stay%3D1%26screen%3Dunit3%26prep_open_folder%3Dprep_legacy_u3_uoe";



    var part2Gps = {

        id: "u3_uoe_part2_gps",

        title: "Open cloze — Global Positioning System (GPS)",

        subtitle: "Part 2 · example (0) EXTENT + gaps 1–8",

        kind: "prep-link",

        href:

            "use-of-english/part2-open-cloze/index.html?course=cpe&context=unit3-p2-gps&back=" +

            uoeBack +

            "&backLabel=" +

            encodeURIComponent("Use of English — Level 3"),

    };



    var part3NicaraguanSl = {

        id: "u3_uoe_part3_nicaraguan_sign_language",

        title: "Word formation — Nicaraguan Sign Language",

        subtitle: "Part 3 · example (0) IRREPRESSIBLE + gaps 1–8",

        kind: "prep-link",

        href:

            "use-of-english/part3-word-formation/unit3-nicaraguan-sign-language.html?course=cpe&back=" +

            uoeBack +

            "&backLabel=" +

            encodeURIComponent("Use of English — Level 3"),

    };



    var part4Kwt = {

        id: "u3_uoe_part4_key_word_transformation",

        title: "Part 4 — Key word transformation",

        subtitle: "Six items · NO, FOR, IS, OF, UNCERTAIN, BEING",

        kind: "prep-link",

        href:

            "use-of-english/part4-key-word-transformation/unit3.html?course=cpe&back=" +

            uoeBack +

            "&backLabel=" +

            encodeURIComponent("Use of English — Level 3"),

    };



    W.PREP_HUB_U3_UOE_SEEDS = {

        folderUoe: {

            title: "Use of English",

            subtitle: "Unit 3 · Part 2 · Part 3 · Part 4",

        },

        seededTasks: [part2Gps, part3NicaraguanSl, part4Kwt],

        taskIdsOrdered: [part2Gps.id, part3NicaraguanSl.id, part4Kwt.id],

        part2GpsTask: part2Gps,

        part3NicaraguanSlTask: part3NicaraguanSl,

        part4KwtTask: part4Kwt,

    };

})(typeof window !== "undefined" ? window : globalThis);

