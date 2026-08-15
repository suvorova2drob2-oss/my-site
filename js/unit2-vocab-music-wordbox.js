/** Unit 2 Vocabulary — Music word box (High Energy WB Ex. 2) */
(function (W) {
  "use strict";

  var BANK = [
    "charts",
    "guitarist",
    "live",
    "mime",
    "radio",
    "rock",
    "tour",
    "tune",
    "wind",
  ];

  var GAPS = [
    { n: 1, answer: "live" },
    { n: 2, answer: "guitarist" },
    { n: 3, answer: "rock" },
    { n: 4, answer: "tour" },
    { n: 5, answer: "charts" },
    { n: 6, answer: "mime" },
    { n: 7, answer: "wind", capitalize: true },
    { n: 8, answer: "radio" },
  ];

  function norm(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/\u2019/g, "'")
      .replace(/\s+/g, " ");
  }

  function displayWord(word, gap) {
    if (!word) return "\u2014";
    if (gap && gap.capitalize) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return word;
  }

  function mount(cfg) {
    cfg = cfg || {};
    var host = document.getElementById(cfg.hostId || "sentences");
    var bankHost = document.getElementById(cfg.bankId || "word-bank");
    if (!host || !bankHost) return;

    var state = {};
    var focused = null;
    var fb = document.getElementById("fb");
    var hint = document.getElementById("wb-hint");

    function renderBank() {
      bankHost.innerHTML = "<strong>Words</strong>";
      BANK.forEach(function (word) {
        var used = Object.keys(state).some(function (k) {
          return state[k] === word;
        });
        if (word === "tune") {
          var sp = document.createElement("span");
          sp.className = "bank-chip is-used";
          sp.textContent = word;
          bankHost.appendChild(sp);
          return;
        }
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "bank-chip" + (used ? " is-used" : "");
        btn.textContent = word;
        btn.dataset.word = word;
        if (!used) {
          btn.addEventListener("click", function () {
            if (!focused) {
              if (hint) hint.textContent = "First click a gap (1\u20138), then click a word.";
              return;
            }
            var prev = state[focused];
            if (prev === word) return;
            Object.keys(state).forEach(function (k) {
              var kn = parseInt(k, 10);
              if (kn !== focused && state[k] === word) {
                delete state[k];
                updateSlot(kn);
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
      var slot = document.getElementById("slot-" + n);
      var gap = GAPS.filter(function (g) {
        return g.n === n;
      })[0];
      var word = state[n] || "";
      if (!slot) return;
      slot.textContent = word ? displayWord(word, gap) : "\u2014";
      slot.classList.toggle("is-empty", !word);
    }

    function clearMarks() {
      GAPS.forEach(function (g) {
        var slot = document.getElementById("slot-" + g.n);
        if (slot) slot.classList.remove("is-ok", "is-bad");
      });
      if (fb) {
        fb.textContent = "";
        fb.className = "vocab-feedback";
      }
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

    host.innerHTML =
      '<p class="gap-sent"><span class="gap-num">0.</span> I am a terrible singer. I never manage to sing in <span class="gap-example-word">tune</span>!</p>' +
      '<p class="gap-sent"><span class="gap-num">1.</span> ' +
      slotBtn(1) +
      ' performances are usually far better than recorded ones.</p>' +
      '<p class="gap-sent"><span class="gap-num">2.</span> She is a famous session ' +
      slotBtn(2) +
      ' and can play electric and bass really well.</p>' +
      '<p class="gap-sent"><span class="gap-num">3.</span> When I was younger, I dreamt of playing in a ' +
      slotBtn(3) +
      ' band like Nirvana.</p>' +
      '<p class="gap-sent"><span class="gap-num">4.</span> This group goes on ' +
      slotBtn(4) +
      ' about three times a year. It must be exhausting.</p>' +
      '<p class="gap-sent"><span class="gap-num">5.</span> What&rsquo;s the name of the song that&rsquo;s number one in the streaming ' +
      slotBtn(5) +
      '?</p>' +
      '<p class="gap-sent"><span class="gap-num">6.</span> When pop stars ' +
      slotBtn(6) +
      ' a song, it&rsquo;s always obvious that they aren&rsquo;t singing live.</p>' +
      '<p class="gap-sent"><span class="gap-num">7.</span> ' +
      slotBtn(7) +
      ' instruments include flutes, clarinets and oboes.</p>' +
      '<p class="gap-sent"><span class="gap-num">8.</span> Is your new track going to be played on the ' +
      slotBtn(8) +
      '? How exciting!</p>';

    host.querySelectorAll(".wb-slot").forEach(function (slot) {
      slot.addEventListener("click", function () {
        focused = parseInt(slot.getAttribute("data-n"), 10);
        host.querySelectorAll(".wb-slot").forEach(function (s) {
          s.classList.toggle("is-focused", s === slot);
        });
        if (hint) hint.textContent = "Gap " + focused + " selected \u2014 click a word from the box on the right.";
        clearMarks();
      });
    });

    renderBank();

    var btnCheck = document.getElementById("btn-check");
    var btnReset = document.getElementById("btn-reset");

    if (btnCheck) {
      btnCheck.addEventListener("click", function () {
        var ok = 0;
        var missing = GAPS.some(function (g) {
          return !state[g.n];
        });
        if (missing) {
          if (fb) {
            fb.textContent = "Fill every gap (1\u20138), then check again.";
            fb.className = "vocab-feedback is-bad";
          }
          return;
        }

        GAPS.forEach(function (g) {
          var good = norm(state[g.n]) === norm(g.answer);
          var slot = document.getElementById("slot-" + g.n);
          if (slot) {
            slot.classList.toggle("is-ok", good);
            slot.classList.toggle("is-bad", !good);
          }
          if (good) ok++;
        });

        if (fb) {
          fb.textContent =
            ok === GAPS.length
              ? "All " + GAPS.length + " correct."
              : "Score: " + ok + " / " + GAPS.length + ".";
          fb.className =
            "vocab-feedback " + (ok === GAPS.length ? "is-ok" : "is-bad");
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
        host.querySelectorAll(".wb-slot").forEach(function (s) {
          s.classList.remove("is-focused");
        });
        GAPS.forEach(function (g) {
          updateSlot(g.n);
        });
        renderBank();
        clearMarks();
        if (hint) {
          hint.textContent =
            "Click a gap (1\u20138), then click a word from the box on the right. Each word once.";
        }
      });
    }
  }

  W.U2_VOCAB_MUSIC_WB = { mount: mount, GAPS: GAPS, BANK: BANK };
})(window);
