/** Unit 2 Use of English — Coursebook Word formation Affixes (High Energy SB Ex. 1–4) */

(function (W) {
  "use strict";

  var EX1 = [
    { verb: "win", answer: "winner", example: true },
    { verb: "box", answers: ["boxer"] },
    { verb: "play", answers: ["player"] },
    { verb: "spectate", answers: ["spectator"] },
    { verb: "compete", answers: ["competitor"] },
    { verb: "participate", answers: ["participant"] },
    { verb: "organise", answers: ["organiser", "organizer"] },
    { verb: "run", answers: ["runner"] },
    { verb: "ride", answers: ["rider"] },
    { verb: "contest", answers: ["contestant"] },
  ];

  var EX2 = [
    { n: 1, left: "employ", right: "train", leftAns: ["employee"], rightAns: ["trainee"] },
    { n: 2, left: "electric", right: "politics", leftAns: ["electrician"], rightAns: ["politician"] },
    { n: 3, left: "mountain", right: "engine", leftAns: ["mountaineer"], rightAns: ["engineer"] },
    { n: 4, left: "novel", right: "science", leftAns: ["novelist"], rightAns: ["scientist"] },
  ];

  var EX3 = [
    {
      n: 1,
      words: [
        { base: "ambitious", answers: ["unambitious"] },
        { base: "likely", answers: ["unlikely"] },
        { base: "reliable", answers: ["unreliable"] },
      ],
    },
    {
      n: 2,
      words: [
        { base: "experienced", answers: ["inexperienced"] },
        { base: "decisive", answers: ["indecisive"] },
        { base: "tolerant", answers: ["intolerant"] },
      ],
    },
    {
      n: 3,
      words: [
        { base: "legal", answers: ["illegal"] },
        { base: "logical", answers: ["illogical"] },
        { base: "legible", answers: ["illegible"] },
      ],
    },
    {
      n: 4,
      words: [
        { base: "moral", answers: ["immoral"] },
        { base: "mature", answers: ["immature"] },
        { base: "mortal", answers: ["immortal"] },
      ],
    },
    {
      n: 5,
      words: [
        { base: "practical", answers: ["impractical"] },
        { base: "patient", answers: ["impatient"] },
        { base: "perfect", answers: ["imperfect"] },
      ],
    },
    {
      n: 6,
      words: [
        { base: "regular", answers: ["irregular"] },
        { base: "responsible", answers: ["irresponsible"] },
        { base: "relevant", answers: ["irrelevant"] },
      ],
    },
    {
      n: 7,
      words: [
        { base: "honest", answers: ["dishonest"] },
        { base: "obedient", answers: ["disobedient"] },
        { base: "satisfied", answers: ["dissatisfied"] },
      ],
    },
  ];

  var EX4 = [
    { word: "ex-wife", prefix: "ex", meaning: "former" },
    { word: "extraterrestrial", prefix: "extra", meaning: "outside or beyond" },
    { word: "hypermarket", prefix: "hyper", meaning: "very big" },
    { word: "microelectronics", prefix: "micro", meaning: "very small" },
    { word: "misspell", prefix: "mis", meaning: "wrongly" },
    { word: "oversleep", prefix: "over", meaning: "too much" },
    { word: "prehistoric", prefix: "pre", meaning: "before" },
    { word: "postgraduate", prefix: "post", meaning: "after" },
    { word: "rewrite", prefix: "re", meaning: "again" },
    { word: "undercook", prefix: "under", meaning: "too little" },
  ];

  function norm(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/\u2019/g, "'")
      .replace(/\s+/g, " ");
  }

  function matches(val, acceptable) {
    var n = norm(val);
    if (!n) return false;
    for (var i = 0; i < acceptable.length; i++) {
      if (n === norm(acceptable[i])) return true;
    }
    return false;
  }

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function mount() {
    var ex1Host = document.getElementById("cb-ex1");
    var ex2Host = document.getElementById("cb-ex2");
    var ex4Host = document.getElementById("cb-ex4");
    var fb = document.getElementById("cb-fb");
    if (!ex1Host || !ex2Host || !ex4Host) return;

    EX1.forEach(function (row, idx) {
      var div = document.createElement("div");
      div.className = "uoe-cb-ex1-row" + (row.example ? " is-example" : "");
      var id = "cb-ex1-" + idx;
      var gapHtml = row.example
        ? '<span class="uoe-cb-example-val">' + esc(row.answer) + "</span>"
        : '<input type="text" class="gap uoe-cb-gap" id="' +
          id +
          '" autocomplete="off" spellcheck="false" aria-label="' +
          esc(row.verb) +
          '" />';
      div.innerHTML =
        '<span class="uoe-cb-verb">' +
        esc(row.verb) +
        "</span>" +
        '<span class="uoe-cb-arrow" aria-hidden="true">&rarr;</span>' +
        gapHtml +
        (row.example ? ' <span class="uoe-cb-tag">Example</span>' : "");
      ex1Host.appendChild(div);
    });

    EX2.forEach(function (row) {
      var div = document.createElement("div");
      div.className = "uoe-cb-pair-row";
      div.dataset.n = String(row.n);
      div.innerHTML =
        '<span class="uoe-cb-pair-num">' +
        row.n +
        ".</span>" +
        '<span class="uoe-cb-pair-word">' +
        esc(row.left) +
        "</span>" +
        '<input type="text" class="gap uoe-cb-gap" id="cb-ex2-' +
        row.n +
        'a" autocomplete="off" spellcheck="false" aria-label="Pair ' +
        row.n +
        " " +
        esc(row.left) +
        '" />' +
        '<span class="uoe-cb-pair-sep">/</span>' +
        '<span class="uoe-cb-pair-word">' +
        esc(row.right) +
        "</span>" +
        '<input type="text" class="gap uoe-cb-gap" id="cb-ex2-' +
        row.n +
        'b" autocomplete="off" spellcheck="false" aria-label="Pair ' +
        row.n +
        " " +
        esc(row.right) +
        '" />';
      ex2Host.appendChild(div);
    });

    function mountEx4Flip() {
      if (!W.MasteringB2FlipDeck) return;
      ex4Host.innerHTML = "";
      ex4Host.className = "uoe-cb-flip-deck";
      var cards = EX4.map(function (row, idx) {
        var suffix = row.word.slice(row.prefix.length);
        return {
          ariaLabel:
            "Word " +
            (idx + 1) +
            " of " +
            EX4.length +
            ": " +
            row.word +
            ". Tap to flip for prefix meaning.",
          frontHtml:
            '<div class="mb2-flip-kicker">Prefix in bold</div>' +
            '<p class="mb2-flip-body"><strong>' +
            esc(row.prefix) +
            "</strong>" +
            esc(suffix) +
            "</p>" +
            '<div class="mb2-flip-tap">Tap card to flip</div>',
          backHtml:
            '<div class="mb2-flip-kicker">Meaning of <strong>' +
            esc(row.prefix) +
            "-</strong></div>" +
            '<p class="mb2-flip-body">' +
            esc(row.meaning) +
            "</p>",
        };
      });
      W.MasteringB2FlipDeck.mount(ex4Host, cards, { progressLabel: "Word" });
    }

    mountEx4Flip();

    function allInputs() {
      return Array.prototype.slice.call(document.querySelectorAll(".uoe-cb-gap"));
    }

    function clearMarks() {
      allInputs().forEach(function (inp) {
        inp.classList.remove("ok", "bad");
      });
      document.querySelectorAll(".uoe-cb-pair-row").forEach(function (el) {
        el.classList.remove("is-ok", "is-bad");
      });
      if (fb) {
        fb.textContent = "";
        fb.className = "part2-feedback";
      }
    }

    allInputs().forEach(function (inp) {
      inp.addEventListener("input", clearMarks);
    });

    function scoreEx1() {
      var ok = 1;
      var total = EX1.length;
      EX1.forEach(function (row, idx) {
        if (row.example) return;
        var el = document.getElementById("cb-ex1-" + idx);
        var good = matches(el && el.value, row.answers);
        if (el) {
          el.classList.toggle("ok", good);
          el.classList.toggle("bad", !good);
        }
        if (good) ok++;
      });
      return { ok: ok, total: total };
    }

    function scoreEx2() {
      var ok = 0;
      var total = EX2.length * 2;
      EX2.forEach(function (row) {
        var elA = document.getElementById("cb-ex2-" + row.n + "a");
        var elB = document.getElementById("cb-ex2-" + row.n + "b");
        var goodA = matches(elA && elA.value, row.leftAns);
        var goodB = matches(elB && elB.value, row.rightAns);
        if (elA) {
          elA.classList.toggle("ok", goodA);
          elA.classList.toggle("bad", !goodA);
        }
        if (elB) {
          elB.classList.toggle("ok", goodB);
          elB.classList.toggle("bad", !goodB);
        }
        var rowEl = document.querySelector('.uoe-cb-pair-row[data-n="' + row.n + '"]');
        if (rowEl) {
          rowEl.classList.toggle("is-ok", goodA && goodB);
          rowEl.classList.toggle("is-bad", !(goodA && goodB));
        }
        if (goodA) ok++;
        if (goodB) ok++;
      });
      return { ok: ok, total: total };
    }

    function scoreEx3() {
      return { ok: 0, total: 0 };
    }

    function scoreEx4() {
      return { ok: 0, total: 0 };
    }

    function anyMissing() {
      var missing = false;
      EX1.forEach(function (row, idx) {
        if (row.example) return;
        var el = document.getElementById("cb-ex1-" + idx);
        if (!norm(el && el.value)) missing = true;
      });
      EX2.forEach(function (row) {
        if (!norm(document.getElementById("cb-ex2-" + row.n + "a").value)) missing = true;
        if (!norm(document.getElementById("cb-ex2-" + row.n + "b").value)) missing = true;
      });
      EX3.forEach(function (row) {
        row.words.forEach(function (_w, wi) {
          if (!norm(document.getElementById("cb-ex3-" + row.n + "-" + wi).value)) missing = true;
        });
      });
      return missing;
    }

    var btnCheck = document.getElementById("btn-check");
    var btnReset = document.getElementById("btn-reset");

    if (btnCheck) {
      btnCheck.addEventListener("click", function () {
        if (anyMissing()) {
          if (fb) {
            fb.textContent = "Fill every gap (Ex. 1\u20132), then check again.";
            fb.className = "part2-feedback show";
          }
          return;
        }
        var s1 = scoreEx1();
        var s2 = scoreEx2();
        var s3 = scoreEx3();
        var s4 = scoreEx4();
        var ok = s1.ok + s2.ok + s3.ok + s4.ok;
        var total = s1.total + s2.total + s3.total + s4.total;
        if (fb) {
          fb.textContent =
            ok === total
              ? "All " + total + " correct."
              : "Score: " + ok + " / " + total + ".";
          fb.className = "part2-feedback show";
        }
        if (W.MasteringB2Progress) {
          W.MasteringB2Progress.recordCheckFromDom(ok, total);
        }
      });
    }

    if (btnReset) {
      btnReset.addEventListener("click", function () {
        allInputs().forEach(function (inp) {
          inp.value = "";
        });
        clearMarks();
      });
    }
  }

  W.U2_WF_AFFIXES_CB = {
    mount: mount,
    EX1: EX1,
    EX2: EX2,
    EX3: EX3,
    EX4: EX4,
  };
})(window);
