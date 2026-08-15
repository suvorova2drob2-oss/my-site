/** Unit 4 Grammar — Past tenses & time linkers (word box) */
(function (W) {
  "use strict";

  var BANK = ["as", "at", "during", "for", "in", "just", "last", "until", "while"];

  var GAPS = [
    { n: 1, answer: "at" },
    { n: 2, answer: "in" },
    { n: 3, answer: "as" },
    { n: 4, answer: "until" },
    { n: 5, answer: "during" },
    { n: 6, answer: "while" },
    { n: 7, answer: "just" },
    { n: 8, answer: "for" },
  ];

  function norm(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ");
  }

  function slotBtn(n) {
    return (
      '<button type="button" class="wb-slot is-empty" id="slot-' +
      n +
      '" data-n="' +
      n +
      '" aria-label="Gap ' +
      n +
      '">\u2014</button>'
    );
  }

  function mount() {
    var host = document.getElementById("time-sentences");
    var bankHost = document.getElementById("time-bank");
    if (!host || !bankHost) return;

    var state = {};
    var focused = null;

    host.innerHTML =
      '<p class="gap-sent"><span class="gap-num">0.</span> It took forever but we have moved house <span class="gap-example-word">at last</span>.</p>' +
      '<p class="gap-sent"><span class="gap-num">1.</span> He had called her several times and ' +
      slotBtn(1) +
      ' the end of the day, she finally picked up.</p>' +
      '<p class="gap-sent"><span class="gap-num">2.</span> We had been enjoying the show but left early ' +
      slotBtn(2) +
      ' the end to make it to our last bus.</p>' +
      '<p class="gap-sent"><span class="gap-num">3.</span> David went into the bank ' +
      slotBtn(3) +
      ' the robbery was taking place.</p>' +
      '<p class="gap-sent"><span class="gap-num">4.</span> I had wanted to go out ' +
      slotBtn(4) +
      ' I saw the black rain clouds.</p>' +
      '<p class="gap-sent"><span class="gap-num">5.</span> The house shook a lot ' +
      slotBtn(5) +
      ' the night because of the storm.</p>' +
      '<p class="gap-sent"><span class="gap-num">6.</span> ' +
      slotBtn(6) +
      ' we were jogging, we saw a lot of wildlife.</p>' +
      '<p class="gap-sent"><span class="gap-num">7.</span> When the teacher got to class, the students had ' +
      slotBtn(7) +
      ' finished the work.</p>' +
      '<p class="gap-sent"><span class="gap-num">8.</span> They had been waiting ' +
      slotBtn(8) +
      ' almost an hour when he finally showed up.</p>';

    function renderBank() {
      bankHost.innerHTML = "<strong>Words</strong>";
      BANK.forEach(function (word) {
        if (word === "last") {
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
            clearMarks();
          });
        }
        bankHost.appendChild(btn);
      });
    }

    function updateSlot(n) {
      var slotEl = document.getElementById("slot-" + n);
      if (!slotEl) return;
      slotEl.textContent = state[n] || "\u2014";
      slotEl.classList.toggle("is-empty", !state[n]);
    }

    function clearMarks() {
      GAPS.forEach(function (g) {
        var slotEl = document.getElementById("slot-" + g.n);
        if (slotEl) slotEl.classList.remove("is-ok", "is-bad");
      });
      var fb = document.getElementById("time-fb");
      if (fb) fb.textContent = "";
    }

    host.querySelectorAll(".wb-slot").forEach(function (slotEl) {
      slotEl.addEventListener("click", function () {
        focused = parseInt(slotEl.getAttribute("data-n"), 10);
        host.querySelectorAll(".wb-slot").forEach(function (s) {
          s.classList.toggle("is-focused", s === slotEl);
        });
        clearMarks();
      });
    });

    renderBank();

    var btnCheck = document.getElementById("time-check");
    var btnReset = document.getElementById("time-reset");
    var fb = document.getElementById("time-fb");

    if (btnCheck) {
      btnCheck.addEventListener("click", function () {
        var ok = 0;
        if (GAPS.some(function (g) { return !state[g.n]; })) {
          if (fb) fb.textContent = "Fill every gap (1\u20138), then check again.";
          return;
        }
        GAPS.forEach(function (g) {
          var good = norm(state[g.n]) === norm(g.answer);
          var slotEl = document.getElementById("slot-" + g.n);
          if (slotEl) {
            slotEl.classList.toggle("is-ok", good);
            slotEl.classList.toggle("is-bad", !good);
          }
          if (good) ok++;
        });
        if (fb) {
          fb.textContent =
            ok === GAPS.length
              ? "All " + GAPS.length + " correct."
              : "Score: " + ok + " / " + GAPS.length + ".";
        }
        if (W.MasteringB2Progress) {
          W.MasteringB2Progress.recordCheckFromDom(ok, GAPS.length);
        }
      });
    }

    if (btnReset) {
      btnReset.addEventListener("click", function () {
        state = {};
        focused = null;
        GAPS.forEach(function (g) {
          updateSlot(g.n);
        });
        host.querySelectorAll(".wb-slot").forEach(function (s) {
          s.classList.remove("is-focused");
        });
        renderBank();
        clearMarks();
      });
    }
  }

  W.U4_GRAMMAR_TIME_LINKERS = { mount: mount, GAPS: GAPS, BANK: BANK };
})(window);
