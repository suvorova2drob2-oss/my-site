/**
 * ЕГЭ Lexis Exam (§30–36): общий пакет и массив юнитов.
 * Новый юнит: js/ege-lexis/lexis-exam-units/uN-*.js → подключить в ege-lexis-exam.html
 * после этого файла.
 *
 * Схема юнита:
 * - id, unitOrder, title, examSection?, instructionHtml, headerTitle?, subtitle?, passage
 * - items[]: { options[4], correctIndex, skillRu?, explainCorrect?, trapRu?, explainIfChosen? }
 */
(function (w) {
  var pack = (w.__EGE_LEXIS_EXAM__ = w.__EGE_LEXIS_EXAM__ || {});

  pack.units = Array.isArray(pack.units) ? pack.units : [];

  /** По умолчанию 12 мин на 7 пропусков. Свой юнит: unit.timerSec. */
  pack.defaultTimerSec = 12 * 60;
})(typeof window !== "undefined" ? window : this);
