/**
 * Unit 1 Reading Part 7 — mount Lifestyle phrases drawer.
 * Depends on: unit1-lifestyle-lexis.js, fce-cool-phrases-drawer.js, fce-u1-cool-phrases-bridge.js
 */
(function (W) {
  "use strict";
  if (W.FCE_U1_COOL_PHRASES && typeof W.FCE_U1_COOL_PHRASES.sync === "function") {
    W.FCE_U1_COOL_PHRASES.sync("lifestyle");
  }
})(typeof window !== "undefined" ? window : globalThis);
