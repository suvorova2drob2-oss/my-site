/**
 * ЕГЭ Listening · lookup полных переводов предложений (hover в shadowing).
 * window.__EGE_LISTENING_SENTENCE_RU__
 * Банк: ege-listening-sentence-ru-bank.js → .bank
 */
(function (w) {
  function norm(s) {
    return String(s || "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
  }

  function lookup(sentText, bank) {
    var b = bank || (w.__EGE_LISTENING_SENTENCE_RU__ && w.__EGE_LISTENING_SENTENCE_RU__.bank);
    if (!b || !sentText) return "";
    var raw = String(sentText).trim();
    if (b[raw]) return String(b[raw]);
    var n = norm(raw);
    if (b[n]) return String(b[n]);
    var key;
    for (key in b) {
      if (Object.prototype.hasOwnProperty.call(b, key) && norm(key) === n) {
        return String(b[key]);
      }
    }
    return "";
  }

  w.__EGE_LISTENING_SENTENCE_RU__ = w.__EGE_LISTENING_SENTENCE_RU__ || {};
  w.__EGE_LISTENING_SENTENCE_RU__.norm = norm;
  w.__EGE_LISTENING_SENTENCE_RU__.lookup = lookup;
})(typeof window !== "undefined" ? window : this);
