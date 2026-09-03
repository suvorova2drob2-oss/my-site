/**
 * Sets Sound Booth unit from URL (unitN-lexical-games.html) before wordbank loads.
 */
(function (W) {
  "use strict";
  var m = /unit(\d+)-lexical-games/i.exec(String(W.location.pathname || ""));
  if (m) W.FCE_SOUND_BOOTH_UNIT = parseInt(m[1], 10);
})(typeof window !== "undefined" ? window : globalThis);
