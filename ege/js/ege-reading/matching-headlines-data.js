/**
 * ЕГЭ Reading — подбор заголовков (§10). Bootstrap: пакет и пустой массив units.
 * Контент юнитов — в js/ege-reading/matching-headlines-units/*.js (после этого файла в HTML).
 * Поля юнита: unitOrder, id, title, paragraphs (evidence), headlines, key, extraHeadlineNum, explanationsRu, … quickPhrases / tapPhrases; для юнитов с unitOrder < 10 допускается tapLexicon (перевод по одиночным словам). С unitOrder ≥ 10 — только quickPhrases + tapPhrases (см. matching-headlines-app.js, mhPhraseOnlyLex).
 * Логика UI: matching-headlines-app.js. sessionStorage ege_mh_ans_*; Statistics: ege-reading-mh-stats-bridge.js → ege_reading_mh_scores; на странице — полоса попыток + ссылка на ege-statistics.html.
 */
(function (w) {
  var pack = (w.__EGE_READING_MATCHING_HEADLINES__ =
    w.__EGE_READING_MATCHING_HEADLINES__ || {});

  pack.units = Array.isArray(pack.units) ? pack.units : [];
})(typeof window !== "undefined" ? window : this);
