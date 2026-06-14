/**
 * Prep hub — Level 12 · Writing (CPE Levels hub only).
 */
(function (W) {
    "use strict";

    var informalLetterEx1 = {
        id: "u12_writing_informal_letter_ex1",
        title: "Part 2 · Informal letter (Exercises 1–5)",
        subtitle: "Exercises 1–5 · task analysis, model, useful language (one page)",
        kind: "prep-link",
        href:
            "unit12-writing/cpe/informal-letter-exercise-1/index.html?course=cpe&backLabel=" +
            encodeURIComponent("Writing — Level 12"),
    };

    W.PREP_HUB_U12_WRITING_SEEDS = {
        folderWriting: {
            title: "Writing",
            subtitle: "Unit 12 · Part 2 informal letter (CPE)",
        },
        seededTasks: [informalLetterEx1],
        taskIdsOrdered: [informalLetterEx1.id],
        informalLetterEx1Task: informalLetterEx1,
        /** Removed when folder is reconciled (legacy Exercise 2 tile). */
        retiredTaskIds: ["u12_writing_informal_letter_model"],
    };
})(typeof window !== "undefined" ? window : globalThis);
