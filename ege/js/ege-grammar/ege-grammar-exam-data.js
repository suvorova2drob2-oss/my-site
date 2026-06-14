/**
 * ЕГЭ Grammar Exam (§19–24): общий пакет и массив юнитов.
 * Новый юнит: js/ege-grammar/grammar-exam-units/uN-*.js → подключить в ege-grammar-exam.html
 * после этого файла. Статистика: ege-grammar-exam-stats-bridge.js → ege_grammar_exam_scores.
 *
 * Схема юнита:
 * - id, unitOrder, title, examSection?, instructionHtml, headerTitle? (центр, как на бланке)
 * - items[]: { examNum, paragraph?, before, cue, answers[], keyShow?, grammarTag?,
 *     plainRu?, explainRu, explainOkRu?, explainWrongRu?, examplesRu[]?, wrongIf[]? }
 *   **plainRu** — одно простое предложение «коротко, по-русски».
 *   **examplesRu** — 2–3 коротких примера (HTML ok): ✓/✗ или мини-фразы.
 * - lifehackRu?, timerSec?
 */
(function (w) {
  var pack = (w.__EGE_GRAMMAR_EXAM__ = w.__EGE_GRAMMAR_EXAM__ || {});

  pack.units = Array.isArray(pack.units) ? pack.units : [];

  /** По умолчанию 10 мин на 6 пропусков. Свой юнит: unit.timerSec. */
  pack.defaultTimerSec = 10 * 60;
})(typeof window !== "undefined" ? window : this);
