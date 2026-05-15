/**
 * Prep hub — Level 10 · Use of English (родитель на сетке юнита).
 * Задачи Part 1 MC лежат прямо на папке «Use of English» — без вложенной папки «Multiple Choice Cloze».
 * См. `.cursor/rules/prep-hub-unit10-use-of-english-two-levels.mdc`.
 *
 * Только CPE / Levels hub: скрипт подключается из `index.html`, не из `fce.html`.
 * В каждой `prep-link` добавлен `course=cpe`, чтобы при открытии из Prep не цеплялась
 * сессия Mastering B2 (`js/prep-site-content.js` · mb2FceSession) и страницы не
 * превращались во «второй» курс по ошибке.
 */
(function (W) {
    "use strict";

    var shakespeareMc = {
        id: "u10_uoe_mc_shakespeare_woman",
        title: "Multiple Choice Cloze — Was Shakespeare a woman?",
        subtitle: "Part 1 (A–D) · example + gaps 1–8",
        kind: "prep-link",
        href:
            "use-of-english/part1-mc-cloze/index.html?course=cpe&context=unit10-uoe-shakespeare&backLabel=" +
            encodeURIComponent("Use of English — Unit 10"),
    };

    var wfLiteraryTranslation = {
        id: "u10_uoe_wf_literary_translation_pitfalls",
        title: "Word formation — The pitfalls of literary translation",
        subtitle: "Part 3 style · example (0) LABORIOUS + gaps 1–8",
        kind: "prep-link",
        href:
            "use-of-english/unit10/word-formation/literary-translation-pitfalls.html?course=cpe&backLabel=" +
            encodeURIComponent("Use of English — Unit 10"),
    };

    W.PREP_HUB_U10_UOE_SEEDS = {
        /** Карточка на списке Level 10 */
        folderUseOfEnglish: {
            title: "Use of English",
            subtitle: "Unit 10 · Part 1, word formation (literary text), Part 4 (disk links)",
        },
        /**
         * Prep-link задачи на корне папки Use of English (юнит → UoE → задачи).
         * Word formation «Private investigators» — материал Mastering B2 / `unit10.html`, в CPE Prep не сидируем.
         */
        part1McSeeded: {
            hubSeedIdStrip: null,
            taskIdsOrdered: [shakespeareMc.id, wfLiteraryTranslation.id],
            defaultTasks: [shakespeareMc, wfLiteraryTranslation],
        },
    };
})(typeof window !== "undefined" ? window : globalThis);
