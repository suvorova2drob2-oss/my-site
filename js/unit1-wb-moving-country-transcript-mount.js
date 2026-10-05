/**
 * Paints Workbook Track 1 transcript block on wb-moving-country page.
 */
(function (W) {
  "use strict";

  function mount(rootId) {
    var root = document.getElementById(rootId || "wb-mc-transcript");
    var pack = W.U1_WB_MOVING_COUNTRY_TRANSCRIPT;
    if (!root || !pack || !pack.speakers) return;
    var html = "";
    var i;
    for (i = 0; i < pack.speakers.length; i++) {
      var sp = pack.speakers[i];
      html +=
        '<article class="wb-mc-spk" id="wb-mc-spk-' +
        sp.n +
        '">' +
        "<h2>Speaker " +
        sp.n +
        "</h2>" +
        sp.html +
        "</article>";
    }
    root.innerHTML = html;
  }

  W.U1_WB_MOVING_COUNTRY_TRANSCRIPT_MOUNT = { mount: mount };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      mount("wb-mc-transcript");
    });
  } else {
    mount("wb-mc-transcript");
  }
})(typeof window !== "undefined" ? window : globalThis);
