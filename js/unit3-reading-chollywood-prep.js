/** Unit 4 Reading Chollywood — Ex. 2 dependent prepositions */
(function (W) {
  "use strict";

  var ITEMS = [
    { id: 1, accept: ["on"] },
    { id: 2, accept: ["of"] },
    { id: 3, accept: ["to"] },
    { id: 4, accept: ["between"] },
    { id: 5, accept: ["about"] },
    { id: 6, accept: ["for", "of"] },
    { id: 7, accept: ["by", "for"] },
    { id: 8, accept: ["at", "to"] },
    { id: 9, accept: ["on", "about"] },
    { id: 10, accept: ["with", "for"] },
  ];

  function norm(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ");
  }

  function mount() {
    var btn = document.getElementById("prep-check");
    var btnReset = document.getElementById("prep-reset");
    var fb = document.getElementById("prep-fb");

    if (btn) {
      btn.addEventListener("click", function () {
        var ok = 0;
        ITEMS.forEach(function (item) {
          var inputs = document.querySelectorAll('[data-prep="' + item.id + '"]');
          inputs.forEach(function (inp, idx) {
            var want = item.accept[idx];
            if (!want) return;
            var good = norm(inp.value) === norm(want);
            inp.classList.toggle("ok", good);
            inp.classList.toggle("bad", norm(inp.value) && !good);
            if (good) ok++;
          });
        });
        if (fb) {
          fb.textContent =
            ok === 14
              ? "All 14 prepositions correct."
              : "Score: " + ok + " / 14.";
        }
        if (W.MasteringB2Progress && ok === 14) {
          W.MasteringB2Progress.recordCheckFromDom(ok, 14);
        }
      });
    }

    if (btnReset) {
      btnReset.addEventListener("click", function () {
        document.querySelectorAll(".prep-gap").forEach(function (inp) {
          inp.value = "";
          inp.classList.remove("ok", "bad");
        });
        if (fb) fb.textContent = "";
      });
    }
  }

  W.U3_READING_CHOLLYWOOD_PREP = { mount: mount, ITEMS: ITEMS };
})(window);
