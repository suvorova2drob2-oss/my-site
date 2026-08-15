/** Unit 2 Grammar — Gerunds · Ex. 3 Likes and dislikes (box a + box b) */
(function (W) {
  "use strict";

  var BOX_A = ["absolutely", "can't", "don't", "much", "quite", "really"];
  var BOX_B = ["about", "at", "in", "of", "on", "with"];

  var ITEMS = [
    {
      n: 1,
      example: true,
      html:
        'I <span class="gram-dual-kw">don&rsquo;t</span> <span class="gram-dual-ex-a">really</span> <span class="gram-dual-kw">enjoy</span> going for walks in the countryside; I just can&rsquo;t get <span class="gram-dual-kw">excited</span> <span class="gram-dual-ex-b">about</span> being in the open air, like some people.',
      a: "really",
      b: "about",
    },
    {
      n: 2,
      html:
        'I <span data-bank="a" data-n="2" class="gram-dual-slot is-empty" id="slot-2a" aria-label="Gap 2 box a">\u2014</span> <span class="gram-dual-kw">mind</span> listening to jazz now and again, but I wouldn&rsquo;t be <span class="gram-dual-kw">interested</span> <span data-bank="b" data-n="2" class="gram-dual-slot is-empty" id="slot-2b" aria-label="Gap 2 box b">\u2014</span> going to a concert.',
      a: "don't",
      b: "in",
    },
    {
      n: 3,
      html:
        'I <span data-bank="a" data-n="3" class="gram-dual-slot is-empty" id="slot-3a" aria-label="Gap 3 box a">\u2014</span> <span class="gram-dual-kw">love</span> cooking, and I&rsquo;m especially <span class="gram-dual-kw">fond</span> <span data-bank="b" data-n="3" class="gram-dual-slot is-empty" id="slot-3b" aria-label="Gap 3 box b">\u2014</span> baking cakes.',
      a: "absolutely",
      b: "of",
    },
    {
      n: 4,
      html:
        'I <span data-bank="a" data-n="4" class="gram-dual-slot is-empty" id="slot-4a" aria-label="Gap 4 box a">\u2014</span> <span class="gram-dual-kw">like</span> watching basketball, but I&rsquo;m not very <span class="gram-dual-kw">good</span> <span data-bank="b" data-n="4" class="gram-dual-slot is-empty" id="slot-4b" aria-label="Gap 4 box b">\u2014</span> playing it.',
      a: "quite",
      b: "at",
    },
    {
      n: 5,
      html:
        'I <span data-bank="a" data-n="5" class="gram-dual-slot is-empty" id="slot-5a" aria-label="Gap 5 box a">\u2014</span> <span class="gram-dual-kw">prefer</span> watching films at home; I&rsquo;ve never been very <span class="gram-dual-kw">keen</span> <span data-bank="b" data-n="5" class="gram-dual-slot is-empty" id="slot-5b" aria-label="Gap 5 box b">\u2014</span> going to the cinema.',
      a: "much",
      b: "on",
    },
    {
      n: 6,
      html:
        'I <span data-bank="a" data-n="6" class="gram-dual-slot is-empty" id="slot-6a" aria-label="Gap 6 box a">\u2014</span> <span class="gram-dual-kw">stand</span> playing board games with my family, but I never get <span class="gram-dual-kw">bored</span> <span data-bank="b" data-n="6" class="gram-dual-slot is-empty" id="slot-6b" aria-label="Gap 6 box b">\u2014</span> playing games on my phone.',
      a: "can't",
      b: "with",
    },
  ];

  function norm(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/\u2019/g, "'")
      .replace(/\s+/g, " ");
  }

  function mount(cfg) {
    cfg = cfg || {};
    var host = document.getElementById(cfg.hostId || "gram-dual-sents");
    var bankA = document.getElementById(cfg.bankAId || "bank-a");
    var bankB = document.getElementById(cfg.bankBId || "bank-b");
    if (!host || !bankA || !bankB) return;

    var state = {};
    var focused = null;
    var fb = document.getElementById("gram-fb");
    var hint = document.getElementById("gram-dual-hint");

    function usedInBank(bank) {
      var used = {};
      Object.keys(state).forEach(function (k) {
        if (state[k].bank === bank && state[k].word) used[state[k].word] = true;
      });
      ITEMS.forEach(function (it) {
        if (it.example) {
          if (bank === "a" && it.a) used[it.a] = true;
          if (bank === "b" && it.b) used[it.b] = true;
          if (bank === "a") used["don't"] = true;
        }
      });
      return used;
    }

    function renderBank(bankEl, words, bank) {
      var used = usedInBank(bank);
      bankEl.innerHTML = "";
      words.forEach(function (word) {
        var isUsed = !!used[word];
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "bank-chip" + (isUsed ? " is-used" : "");
        btn.textContent = word;
        btn.dataset.word = word;
        btn.dataset.bank = bank;
        if (!isUsed) {
          btn.addEventListener("click", function () {
            if (!focused || focused.bank !== bank) {
              if (hint) {
                hint.hidden = false;
                hint.textContent =
                  "Click a gap first (box " + bank + "), then click a word on the right.";
              }
              return;
            }
            var prevWord = state[focused.n + bank] && state[focused.n + bank].word;
            if (prevWord === word) return;

            Object.keys(state).forEach(function (k) {
              if (state[k].bank === bank && state[k].word === word) {
                var parts = k.match(/(\d+)([ab])/);
                if (parts) updateSlot(parseInt(parts[1], 10), parts[2]);
                delete state[k];
              }
            });

            state[focused.n + bank] = { bank: bank, word: word };
            updateSlot(focused.n, bank);
            renderBanks();
            clearMarks();
            if (hint) hint.hidden = true;
          });
        }
        bankEl.appendChild(btn);
      });
    }

    function renderBanks() {
      renderBank(bankA, BOX_A, "a");
      renderBank(bankB, BOX_B, "b");
    }

    function updateSlot(n, bank) {
      var slot = document.getElementById("slot-" + n + bank);
      var key = state[n + bank];
      if (!slot) return;
      var word = key && key.word;
      slot.textContent = word || "\u2014";
      slot.classList.toggle("is-empty", !word);
    }

    function clearMarks() {
      host.querySelectorAll(".gram-dual-slot").forEach(function (s) {
        s.classList.remove("is-ok", "is-bad");
      });
      if (fb) {
        fb.textContent = "";
        fb.className = "gram-feedback";
      }
    }

    host.innerHTML = ITEMS.map(function (it) {
      var cls = "gram-dual-sent" + (it.example ? " is-example" : "");
      return (
        '<p class="' +
        cls +
        '"><span class="gram-dual-num">' +
        it.n +
        ".</span> " +
        it.html +
        "</p>"
      );
    }).join("");

    host.querySelectorAll(".gram-dual-slot").forEach(function (slot) {
      slot.addEventListener("click", function () {
        focused = {
          n: parseInt(slot.getAttribute("data-n"), 10),
          bank: slot.getAttribute("data-bank"),
        };
        host.querySelectorAll(".gram-dual-slot").forEach(function (s) {
          s.classList.toggle("is-focused", s === slot);
        });
        if (hint) {
          hint.hidden = false;
          hint.textContent =
            "Gap " +
            focused.n +
            " (box " +
            focused.bank +
            ") selected \u2014 click a word on the right.";
        }
        clearMarks();
      });
    });

    renderBanks();

    var btnCheck = document.getElementById("btn-check");
    var btnReset = document.getElementById("btn-reset");

    if (btnCheck) {
      btnCheck.addEventListener("click", function () {
        var ok = 0;
        var total = 0;
        ITEMS.forEach(function (it) {
          if (it.example) return;
          ["a", "b"].forEach(function (bank) {
            total++;
            var slot = document.getElementById("slot-" + it.n + bank);
            var expected = bank === "a" ? it.a : it.b;
            var got = state[it.n + bank] && state[it.n + bank].word;
            var good = norm(got) === norm(expected);
            if (slot) {
              slot.classList.toggle("is-ok", good);
              slot.classList.toggle("is-bad", !good);
            }
            if (good) ok++;
          });
        });

        var missing = ITEMS.some(function (it) {
          if (it.example) return false;
          return !state[it.n + "a"] || !state[it.n + "b"];
        });
        if (missing) {
          if (fb) {
            fb.textContent = "Fill every gap (2\u20136), then check again.";
            fb.className = "gram-feedback is-bad";
          }
          return;
        }

        if (fb) {
          fb.textContent =
            ok === total
              ? "All " + total + " gaps correct."
              : "Score: " + ok + " / " + total + ".";
          fb.className = "gram-feedback " + (ok === total ? "is-ok" : "is-bad");
        }
        if (W.MasteringB2Progress) W.MasteringB2Progress.recordCheckFromDom(ok, total);
      });
    }

    if (btnReset) {
      btnReset.addEventListener("click", function () {
        state = {};
        focused = null;
        host.querySelectorAll(".gram-dual-slot").forEach(function (s) {
          s.classList.remove("is-focused", "is-ok", "is-bad");
          s.textContent = "\u2014";
          s.classList.add("is-empty");
        });
        renderBanks();
        clearMarks();
        if (hint) {
          hint.hidden = false;
          hint.textContent =
            "Click a gap (2\u20136), then a word from box a or b on the right.";
        }
      });
    }
  }

  W.U2_GR_GERUNDS_EX3 = { mount: mount, ITEMS: ITEMS, BOX_A: BOX_A, BOX_B: BOX_B };
})(window);
