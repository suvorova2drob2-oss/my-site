/**
 * Default Russian UI strings for PREP_RETELL_CHAIN_TIMED.
 * Pass opts.copy on mount to override keys (shallow merge).
 */
(function (W) {
  "use strict";

  W.PREP_RETELL_CHAIN_TIMED_DEFAULT_COPY = {
    secOptionSuffix: " с",

    glossaryTipPrefix: "EN: ",

    micHintHtml:
      "Web Speech API: разрешите микрофон; распознавание на <strong>английском</strong>. Совпадение по фразам не строгое — достаточно произносить похожие слова по порядку (учитываются и недофинальные подписи). Пропущенные фразы можно отметить кликом. В паре «учитель–ученик» чаще удобнее режим «Вручную».",

    stageTitleRead: "ЭТАП 1 — ЧИТАЙТЕ ПОЛНЫЙ ТЕКСТ",
    stageHintRead:
      "Читайте спокойно — потом текст скроется. Фразы из банка подчёркнуты: нажмите для краткого словаря.",

    stageTitlePhrases: "ЭТАП 2 — ОПОРНЫЕ ФРАЗЫ (БАНК)",
    stageHintPhrases:
      "Только фразы из word bank. Нажмите фразу — посмотреть EN-пояснение; запомните связку, дальше пересказ.",

    stageTitleRetell: "ЭТАП 3 — ПЕРЕСКАЗ ВСЛУХ",
    stageHintRetell:
      "Перескажите вслух. Полный текст скрыт; фразы bank остаются — цель все зелёные (счётчик сверху). EN-словарь: наведите или Alt+клик.",

    emptyPhraseBankHtml:
      '<p class="retell-timed-muted">Нет совпадений с lexical bank в этом тексте — перескажите по памяти.</p>',

    footerPhraseScan:
      '<p class="retell-timed-lex-hint">Нажмите фразу — краткое EN-объяснение (как в quick dictionary).</p>',

    footerPhraseRetell:
      '<p class="retell-timed-lex-hint retell-timed-lex-hint--retell">Цель — использовать все фразы; зелёная отметка при услышании/произнесении. <strong>Ручной режим:</strong> клик по фразе (учитель или ученик). <strong>Мик:</strong> Chrome/Edge слушает английскую речь — фразы зажигаются сами (пропуски можно дожать кликом). EN-словарь: наведите или <kbd>Alt</kbd>+клик.</p>',

    alertNoSegments:
      "Нет текстов — выберите pack и section focus на странице.",

    fmtMicError: function (code) {
      return (
        "Микрофон: " +
        String(code || "?") +
        " — можно отмечивать фразы кликом."
      );
    },

    /** @param {{ heard: number, total: number, variant: 'mic'|'manual'|'noSr' }} o */
    fmtPhraseProgressLine: function (o) {
      var heard = o.heard;
      var total = o.total;
      if (o.variant === "noSr") {
        return (
          heard +
          " / " +
          total +
          " фраз · Web Speech API недоступен — отмечайте фразы кликом"
        );
      }
      var core = heard + " / " + total + " фраз зелёным";
      if (o.variant === "mic") {
        return core + " · авто-распознавание (клик если пропустило)";
      }
      return core + " · клик по фразе = услышано";
    },

    fmtSegmentBadge: function (n1based, total, sumTitle) {
      return (
        "Фрагмент " +
        n1based +
        " / " +
        total +
        " · " +
        String(sumTitle || "")
      );
    }
  };
})(typeof window !== "undefined" ? window : globalThis);
