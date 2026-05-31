/**
 * ЕГЭ Word Formation Exam (§25–29): общий пакет и массив юнитов.
 * Новый юнит: js/ege-word-formation/word-formation-units/uN-*.js
 */
(function (w) {
  var pack = (w.__EGE_WORD_FORMATION_EXAM__ =
    w.__EGE_WORD_FORMATION_EXAM__ || {});

  pack.units = Array.isArray(pack.units) ? pack.units : [];
  pack.defaultTimerSec = 8 * 60;
})(typeof window !== "undefined" ? window : this);
