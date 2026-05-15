/**
 * ЕГЭ Reading — Gapped Text (§11): общий пакет и массив юнитов.
 * Новый юнит: положите файл в js/ege-reading/gapped-text-units/uN-*.js и подключите
 * в ege-reading-gapped-text.html после этого скрипта. Статистика: ege-gapped-text-stats-bridge.js → ege_reading_gt_scores.
 *
 * Схема юнита:
 * - id, unitOrder, title, examSection?, instructionHtml
 * - paragraphs: [{ segments: [{ t: "текст" } | { g: "A" }] }, ...]
 * - fragments: [{ num: 1, text: "..." }, ...]  // num — номер в задании
 * - key: { A: 3, B: 1, ... }  // какой num фрагмента в какой пропуск
 * - extraFragmentNum: число лишнего фрагмента
 * - explainRu?: { A: "html или текст", ... }
 * - lifehackRu?: HTML — «соль» задания (показывается только после отправки на проверку).
 * - coachRu[A]: HTML с визуальными «связями»:
 *   <p class="ege-gt-coach-lead"><strong>Связи:</strong></p>
 *   <div class="ege-gt-link-chain">… <span class="ege-gt-link-node">…</span>
 *   <span class="ege-gt-link-arr">→</span> <span class="ege-gt-link-node ege-gt-link-node--frag">вставка</span> …</div>
 *   <p class="ege-gt-syntax-strip"><strong>Стык:</strong> роль вставки в предложении…</p>
 *   <p class="ege-gt-coach-miss"><strong>Частый промах:</strong> …</p>
 * - timerSec?: секунд на задание (обратный отсчёт). Если нет — используется pack.defaultTimerSec в этом файле.
 */
(function (w) {
  var pack = (w.__EGE_READING_GAPPED_TEXT__ =
    w.__EGE_READING_GAPPED_TEXT__ || {});

  pack.units = Array.isArray(pack.units) ? pack.units : [];

  /** По умолчанию 20 мин. Свой юнит: unit.timerSec. Весь пакет: pack.defaultTimerSec = N. */
  pack.defaultTimerSec = 20 * 60;
})(typeof window !== "undefined" ? window : this);
