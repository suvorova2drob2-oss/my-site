/**
 * Prep hub — Level 1 · Reading (CPE).
 */
(function (W) {
    "use strict";

    var readingBack =
        "..%2F..%2Findex.html%3Fprep_stay%3D1%26screen%3Dunit1%26prep_open_folder%3Dprep_legacy_u1_reading";

    var part6SuperRecognisers = {
        id: "u1_reading_part6_super_recognisers",
        title: "Part 6 — Gapped text (Super-recognisers)",
        subtitle: "Paragraphs A–H · gaps 1–7 · practice (no key yet)",
        kind: "prep-link",
        href:
            "use-of-english/part6-gapped-text/unit1-super-recognisers.html?course=cpe&back=" +
            readingBack +
            "&backLabel=" +
            encodeURIComponent("Reading — Level 1"),
    };

    W.PREP_HUB_U1_READING_SEEDS = {
        folderReading: {
            title: "Reading",
            subtitle: "Unit 1 · Part 6 gapped text (CPE)",
        },
        seededTasks: [part6SuperRecognisers],
        taskIdsOrdered: [part6SuperRecognisers.id],
        part6SuperRecognisersTask: part6SuperRecognisers,
    };
})(typeof window !== "undefined" ? window : globalThis);
