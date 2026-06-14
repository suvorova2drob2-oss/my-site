/**
 * @deprecated Use js/cpe-reading-part5-engine.js — CPE_READING_PART5.mountPage({ pack, skipPassage: true }).
 */
(function (W) {
    "use strict";
    var pack = W.U10_CPE_READING_PUNCTUATION_DATA;
    if (!pack || !W.CPE_READING_PART5) return;
    W.CPE_READING_PART5.mountPage({ pack: pack, skipPassage: true });
})(typeof window !== "undefined" ? window : globalThis);
