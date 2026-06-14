/**

 * Prep hub — Level 3 · Reading (CPE Levels hub only).

 */

(function (W) {

    "use strict";



    var innovationLimits = {

        id: "u3_reading_innovation_limits_seed",

        title: "Are we reaching the limits of innovation?",

        subtitle: "Unit 3 · Reading Part 7 · 10× multiple matching (A–F)",

        kind: "prep-link",

        href:

            "unit3-reading/cpe/innovation-limits/index.html?course=cpe&backLabel=" +

            encodeURIComponent("Reading — Level 3"),

    };



    W.PREP_HUB_U3_READING_SEEDS = {

        folderReading: {

            title: "Reading",

            subtitle: "Unit 3 · Part 7 multiple matching (CPE)",

        },

        seededTasks: [innovationLimits],

        taskIdsOrdered: [innovationLimits.id],

        innovationLimitsTask: innovationLimits,

    };

})(typeof window !== "undefined" ? window : globalThis);

