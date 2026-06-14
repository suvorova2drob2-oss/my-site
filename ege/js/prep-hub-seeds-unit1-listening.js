/**
 * Prep hub — Level 1 Listening folder (CPE).
 */
(function (W) {
  "use strict";

  var PART1_TASK = {
    id: "u1_listen_p1_set1",
    title: "Part 1 · Multiple choice — three extracts",
    subtitle: "Questions 1–6 · clothing, jobs, oral history · audio pending",
    kind: "prep-link",
    href:
      "unit1-listening/cpe/part1/index.html?course=cpe&backLabel=" +
      encodeURIComponent("Listening — Level 1"),
  };

  W.PREP_HUB_U1_LISTENING_SEEDS = {
    folderListening: {
      title: "Listening",
      subtitle: "Unit 1 · Part 1 multiple choice (CPE)",
    },
    seededTasks: [PART1_TASK],
    taskIdsOrdered: [PART1_TASK.id],
    part1Task: PART1_TASK,
  };
})(typeof window !== "undefined" ? window : globalThis);
