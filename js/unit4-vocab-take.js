/** Unit 4 Vocabulary — Take (prepositions + collocations match) */
(function (W) {
  "use strict";

  var PREP_BANK = ["after", "aside", "back", "in", "off", "on", "over", "to", "up"];

  var PREP_GAPS = [
    { n: 1, answer: "on" },
    { n: 2, answer: "aside" },
    { n: 3, answer: "after" },
    { n: 4, answer: "up" },
    { n: 5, answer: "off" },
    { n: 6, answer: "in" },
    { n: 7, answer: "to" },
    { n: 8, answer: "over" },
  ];

  var MATCH_KEY = {
    1: "h",
    2: "e",
    3: "a",
    4: "f",
    5: "c",
    6: "g",
    7: "b",
    8: "d",
  };

  function norm(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ");
  }

  function slotBtn(n) {
    return (
      '<button type="button" class="wb-slot is-empty" id="prep-slot-' +
      n +
      '" data-n="' +
      n +
      '" aria-label="Gap ' +
      n +
      '">\u2014</button>'
    );
  }

  function mountPrep() {
    var host = document.getElementById("take-prep-sentences");
    var bankHost = document.getElementById("take-prep-bank");
    if (!host || !bankHost) return;

    var state = {};
    var focused = null;

    host.innerHTML =
      '<p class="gap-sent"><span class="gap-num">0.</span> If you have the receipt, you can take it <span class="gap-example-word">back</span>.</p>' +
      '<p class="gap-sent"><span class="gap-num">1.</span> I&rsquo;m so happy that the company has taken ' +
      slotBtn(1) +
      " a new director.</p>" +
      '<p class="gap-sent"><span class="gap-num">2.</span> My mother took me ' +
      slotBtn(2) +
      " to tell me what I&rsquo;d done wrong.</p>" +
      '<p class="gap-sent"><span class="gap-num">3.</span> All of my three children take ' +
      slotBtn(3) +
      " their dad.</p>" +
      '<p class="gap-sent"><span class="gap-num">4.</span> When did you first take ' +
      slotBtn(4) +
      " ballroom dancing?</p>" +
      '<p class="gap-sent"><span class="gap-num">5.</span> After being in the local paper, his career took ' +
      slotBtn(5) +
      ".</p>" +
      '<p class="gap-sent"><span class="gap-num">6.</span> Have you managed to take ' +
      slotBtn(6) +
      " the good news yet?</p>" +
      '<p class="gap-sent"><span class="gap-num">7.</span> Kim took ' +
      slotBtn(7) +
      " skiing immediately without any lessons.</p>" +
      '<p class="gap-sent"><span class="gap-num">8.</span> That independent cinema is being taken ' +
      slotBtn(8) +
      " by a national one.</p>";

    function renderBank() {
      bankHost.innerHTML = "<strong>Prepositions</strong>";
      PREP_BANK.forEach(function (word) {
        if (word === "back") {
          var sp = document.createElement("span");
          sp.className = "bank-chip is-used";
          sp.textContent = word;
          bankHost.appendChild(sp);
          return;
        }
        var used = Object.keys(state).some(function (k) {
          return state[k] === word;
        });
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "bank-chip" + (used ? " is-used" : "");
        btn.textContent = word;
        if (!used) {
          btn.addEventListener("click", function () {
            if (!focused) return;
            Object.keys(state).forEach(function (k) {
              if (parseInt(k, 10) !== focused && state[k] === word) {
                delete state[k];
                updateSlot(parseInt(k, 10));
              }
            });
            state[focused] = word;
            updateSlot(focused);
            renderBank();
            clearPrepMarks();
          });
        }
        bankHost.appendChild(btn);
      });
    }

    function updateSlot(n) {
      var slotEl = document.getElementById("prep-slot-" + n);
      if (!slotEl) return;
      slotEl.textContent = state[n] || "\u2014";
      slotEl.classList.toggle("is-empty", !state[n]);
    }

    function clearPrepMarks() {
      PREP_GAPS.forEach(function (g) {
        var slotEl = document.getElementById("prep-slot-" + g.n);
        if (slotEl) slotEl.classList.remove("is-ok", "is-bad");
      });
      var fb = document.getElementById("take-prep-fb");
      if (fb) fb.textContent = "";
    }

    host.querySelectorAll(".wb-slot").forEach(function (slot) {
      slot.addEventListener("click", function () {
        focused = parseInt(slot.getAttribute("data-n"), 10);
        host.querySelectorAll(".wb-slot").forEach(function (s) {
          s.classList.toggle("is-focused", s === slot);
        });
      });
    });

    var btnCheck = document.getElementById("take-prep-check");
    var btnReset = document.getElementById("take-prep-reset");

    if (btnCheck) {
      btnCheck.addEventListener("click", function () {
        var ok = 0;
        PREP_GAPS.forEach(function (g) {
          var slotEl = document.getElementById("prep-slot-" + g.n);
          var val = norm(state[g.n]);
          var good = val === g.answer;
          if (slotEl) {
            slotEl.classList.remove("is-ok", "is-bad");
            slotEl.classList.add(good ? "is-ok" : "is-bad");
          }
          if (good) ok++;
        });
        var fb = document.getElementById("take-prep-fb");
        if (fb) {
          fb.textContent =
            ok === PREP_GAPS.length
              ? "All " + PREP_GAPS.length + " correct."
              : "Score: " + ok + " / " + PREP_GAPS.length + ".";
        }
        if (W.MasteringB2Progress) {
          W.MasteringB2Progress.recordCheckFromDom(ok, PREP_GAPS.length);
        }
      });
    }

    if (btnReset) {
      btnReset.addEventListener("click", function () {
        state = {};
        focused = null;
        PREP_GAPS.forEach(function (g) {
          updateSlot(g.n);
        });
        host.querySelectorAll(".wb-slot").forEach(function (s) {
          s.classList.remove("is-focused", "is-ok", "is-bad");
        });
        renderBank();
        clearPrepMarks();
      });
    }

    renderBank();
  }

  function mountMatch() {
    if (!W.FCE_SENTENCE_HALVES_MATCH) return null;

    var matchApi = W.FCE_SENTENCE_HALVES_MATCH.mount({
      pairsRoot: "#take-match-rows",
      bankRoot: "#take-endings-bank",
      hintEl: "#take-match-hint .match-hint-inner",
      onInteract: function () {
        document.querySelectorAll("#take-ex2 .shm-pair").forEach(function (row) {
          row.classList.remove("is-bad-line");
        });
        var fb = document.getElementById("take-match-fb");
        if (fb) {
          fb.classList.remove("show");
          fb.innerHTML = "";
        }
      },
    });

    var btnCheck = document.getElementById("take-match-check");
    var btnReset = document.getElementById("take-match-reset");

    if (btnCheck) {
      btnCheck.addEventListener("click", function () {
        if (matchApi) matchApi.clearPicks();
        var fb = document.getElementById("take-match-fb");
        var correctN = 0;
        var linked = matchApi ? matchApi.getLinked() : {};

        for (var g = 1; g <= 8; g++) {
          var lv = linked[String(g)] || "";
          var lo = lv === MATCH_KEY[g];
          var rowEl = document.querySelector('#take-match-rows .shm-pair[data-line="' + g + '"]');
          if (rowEl) rowEl.classList.toggle("is-bad-line", !!lv && !lo);
          if (lv && lo) correctN++;
        }

        if (fb) {
          fb.classList.add("show");
          fb.innerHTML =
            correctN === 8
              ? "<strong>All 8 correct.</strong>"
              : "Score: <strong>" + correctN + "</strong> / 8.";
        }
        if (W.MasteringB2Progress) {
          W.MasteringB2Progress.recordCheckFromDom(correctN, 8);
        }
      });
    }

    if (btnReset) {
      btnReset.addEventListener("click", function () {
        if (matchApi) matchApi.reset();
        document.querySelectorAll("#take-ex2 .shm-pair").forEach(function (row) {
          row.classList.remove("is-bad-line");
        });
        var fb = document.getElementById("take-match-fb");
        if (fb) {
          fb.classList.remove("show");
          fb.innerHTML = "";
        }
      });
    }

    return matchApi;
  }

  function mount() {
    mountPrep();
    mountMatch();
  }

  W.U4_VOCAB_TAKE = { mount: mount, PREP_GAPS: PREP_GAPS, MATCH_KEY: MATCH_KEY };
})(window);
