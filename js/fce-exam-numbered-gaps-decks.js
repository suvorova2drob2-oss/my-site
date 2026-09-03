/**
 * Exam numbered gaps — deck registry per unit.
 * window.FCE_EXAM_NUMBERED_GAPS_DECKS
 */
(function (W) {
  "use strict";

  var BY_UNIT = {
    1: ["U1_LIFESTYLE_EXAM_GAPS", "U1_CLOTHES_EXAM_GAPS"]
  };

  W.FCE_EXAM_NUMBERED_GAPS_DECKS = {
    getDecks: function (unit) {
      var n = parseInt(unit, 10);
      var keys = BY_UNIT[n] || [];
      return keys
        .map(function (k) {
          return W[k] || null;
        })
        .filter(Boolean);
    }
  };
})(typeof window !== "undefined" ? window : globalThis);
