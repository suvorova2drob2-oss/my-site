/**
 * Prep hub — Level 12 Listening folder (CPE).
 */
(function (W) {
  "use strict";

  var EXAM_TASK = {
    id: "u12_listen_sb12_1_p3_disabled_access",
    title: "Part 3 · Multiple choice — Disabled access",
    subtitle: "Track 12.1 · Alex & Nadiya · 5× A–D",
    kind: "prep-link",
    href:
      "unit12-listening/part3-disabled-access/index.html?course=cpe&backLabel=" +
      encodeURIComponent("Listening — Level 12"),
  };

  W.PREP_HUB_U12_LISTENING_SEEDS = {
    folderListening: {
      title: "Listening",
      subtitle: "Unit 12 · Part 3 multiple choice (CPE)",
    },
    seededTasks: [EXAM_TASK],
    taskIdsOrdered: [EXAM_TASK.id],
    examTask: EXAM_TASK,
  };
})(typeof window !== "undefined" ? window : globalThis);
