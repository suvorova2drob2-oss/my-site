/**
 * Unit 1 · SB 1.1 — mount Clothes phrases drawer on transcript page.
 */
(function (W) {
  "use strict";
  if (W.FCE_U1_COOL_PHRASES && typeof W.FCE_U1_COOL_PHRASES.sync === "function") {
    W.FCE_U1_COOL_PHRASES.sync("clothes");
  }
})(typeof window !== "undefined" ? window : globalThis);
