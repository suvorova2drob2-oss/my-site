/**
 * @deprecated Use js/cpe-reading-part5-engine.js (CPE_READING_PART5.mountPage / mountMcq).
 * This shim remains so older script tags fail gracefully.
 */
(function (W) {
    "use strict";
    if (W.CPE_READING_PART5_MCQ) return;
    if (W.CPE_READING_PART5) {
        W.CPE_READING_PART5_MCQ = { mount: W.CPE_READING_PART5.mountMcq };
        return;
    }
    try {
        console.warn(
            "[CPE Reading Part 5] Load js/cpe-reading-part5-engine.js before cpe-reading-part5-mcq-engine.js"
        );
    } catch (eWarn) {}
})(typeof window !== "undefined" ? window : globalThis);
