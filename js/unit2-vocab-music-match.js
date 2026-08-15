/** Unit 2 Vocabulary — Music sentence matching (High Energy WB) */
(function (W) {
  "use strict";

  var TOTAL = 8;
  var KEY = { 1: "e", 2: "c", 3: "a", 4: "d", 5: "h", 6: "b", 7: "f", 8: "g" };

  function mount() {
    var fb = document.getElementById("fb");
    var btnCheck = document.getElementById("btn-check");
    var btnReset = document.getElementById("btn-reset");

    function clearFb() {
      if (fb) {
        fb.textContent = "";
        fb.className = "voc-feedback";
      }
      document.querySelectorAll(".shm-pair.is-bad-line").forEach(function (row) {
        row.classList.remove("is-bad-line");
      });
    }

    var matchApi = W.FCE_SENTENCE_HALVES_MATCH.mount({
      pairsRoot: "#match-rows",
      bankRoot: "#endings-bank",
      hintEl: "#match-hint",
      onInteract: clearFb,
    });

    if (btnReset) {
      btnReset.addEventListener("click", function () {
        if (matchApi && matchApi.reset) matchApi.reset();
        clearFb();
      });
    }

    if (btnCheck) {
      btnCheck.addEventListener("click", function () {
        if (matchApi) matchApi.clearPicks();
        var linked = matchApi ? matchApi.getLinked() : {};
        var ok = 0;
        var missing = false;

        for (var g = 1; g <= TOTAL; g++) {
          if (!linked[String(g)]) missing = true;
        }
        if (missing) {
          if (fb) {
            fb.textContent = "Match every line (1\u20138) to an ending, then check again.";
            fb.className = "voc-feedback show is-bad";
          }
          return;
        }

        for (var n = 1; n <= TOTAL; n++) {
          var pick = linked[String(n)] || "";
          var good = pick === KEY[n];
          var row = document.querySelector('.shm-pair[data-line="' + n + '"]');
          if (row) row.classList.toggle("is-bad-line", !good);
          if (good) ok++;
        }

        if (fb) {
          fb.textContent =
            ok === TOTAL
              ? "All " + TOTAL + " correct."
              : "Score: " + ok + " / " + TOTAL + ".";
          fb.className =
            "voc-feedback show " + (ok === TOTAL ? "is-ok" : "is-bad");
        }

        if (W.MasteringB2Progress) {
          W.MasteringB2Progress.recordCheckFromDom(ok, TOTAL);
        }
      });
    }
  }

  W.U2_VOCAB_MUSIC = { mount: mount, KEY: KEY };
})(window);
