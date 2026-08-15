/** Unit 2 UoE — Negative prefixes hearts trainer (SB Affixes Ex. 3) */
(function (W) {
  "use strict";

  var PREFIX_LABEL = {
    1: "un-",
    2: "in-",
    3: "il-",
    4: "im-",
    5: "im-",
    6: "ir-",
    7: "dis-",
  };

  var MAX_LIVES = 3;

  function norm(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/\u2019/g, "'")
      .replace(/\s+/g, " ");
  }

  function buildItems(ex3) {
    var items = [];
    (ex3 || []).forEach(function (row) {
      var bases = row.words.map(function (w) {
        return w.base;
      });
      var prefix = PREFIX_LABEL[row.n] || "";
      var mates = bases.join(", ");
      row.words.forEach(function (w) {
        items.push({
          base: w.base,
          answers: w.answers.slice(),
          row: row.n,
          prefix: prefix,
          tip:
            "Row " +
            row.n +
            " — same prefix for all three: " +
            mates +
            ". This row uses <strong>" +
            prefix +
            "</strong>.",
        });
      });
    });
    return items;
  }

  function heartSvg(className) {
    var ns = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(ns, "svg");
    svg.setAttribute("class", className);
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    var path = document.createElementNS(ns, "path");
    path.setAttribute(
      "d",
      "M12 21s-6.5-4.35-9-8.5C.5 9.5 2 6 5.5 6c2 0 3.5 2 3.5 2S10.5 6 13 6c3.5 0 5 3.5 3.5 6.5C14 16.65 12 21 12 21z"
    );
    svg.appendChild(path);
    return svg;
  }

  function mount() {
    var ex3 =
      W.U2_WF_AFFIXES_CB && W.U2_WF_AFFIXES_CB.EX3 ? W.U2_WF_AFFIXES_CB.EX3 : [];
    var ROUND_ITEMS = buildItems(ex3);
    if (!ROUND_ITEMS.length) return;

    var ROUND = ROUND_ITEMS.length;
    var index = 0;
    var lives = MAX_LIVES;

    var heartsEl = document.getElementById("hearts");
    var progressEl = document.getElementById("progress");
    var baseWordEl = document.getElementById("baseWord");
    var rowHintEl = document.getElementById("rowHint");
    var answerEl = document.getElementById("answer");
    var feedbackEl = document.getElementById("feedback");
    var checkBtn = document.getElementById("checkBtn");
    var winOverlay = document.getElementById("winOverlay");
    var loseOverlay = document.getElementById("loseOverlay");
    var wrongRevealOverlay = document.getElementById("wrongRevealOverlay");
    var wrongRevealAnswer = document.getElementById("wrongRevealAnswer");
    var wrongRevealTip = document.getElementById("wrongRevealTip");
    var wrongRevealNext = document.getElementById("wrongRevealNext");
    var playAgain = document.getElementById("playAgain");
    var restartBtn = document.getElementById("restartBtn");

    if (!heartsEl || !answerEl || !checkBtn) return;

    function renderHearts() {
      heartsEl.innerHTML = "";
      for (var i = 0; i < MAX_LIVES; i++) {
        heartsEl.appendChild(heartSvg("heart " + (i < lives ? "on" : "off")));
      }
    }

    function matchesAnswer(raw, item) {
      var n = norm(raw);
      if (!n) return false;
      for (var i = 0; i < item.answers.length; i++) {
        if (n === norm(item.answers[i])) return true;
      }
      return false;
    }

    function keyDisplay(item) {
      return item.answers.join(" / ");
    }

    function showItem() {
      var item = ROUND_ITEMS[index];
      baseWordEl.textContent = item.base;
      rowHintEl.innerHTML =
        "Row " +
        item.row +
        " &middot; same prefix for all three in this row &middot; box: dis-, il-, im-, in-, ir-, un-";
      answerEl.value = "";
      feedbackEl.textContent = "";
      feedbackEl.className = "feedback";
      progressEl.textContent = index + 1 + "/" + ROUND;
      answerEl.focus();
    }

    function closeWrongReveal() {
      wrongRevealOverlay.classList.remove("open");
      wrongRevealOverlay.style.display = "none";
      wrongRevealOverlay.setAttribute("aria-hidden", "true");
    }

    function openWrongReveal(item) {
      wrongRevealAnswer.textContent = keyDisplay(item);
      wrongRevealTip.innerHTML = item.tip || "";
      wrongRevealOverlay.style.display = "flex";
      wrongRevealOverlay.classList.add("open");
      wrongRevealOverlay.setAttribute("aria-hidden", "false");
      wrongRevealNext.focus();
    }

    function startGameFresh() {
      index = 0;
      lives = MAX_LIVES;
      renderHearts();
      showItem();
      winOverlay.classList.remove("open");
      winOverlay.setAttribute("aria-hidden", "true");
      loseOverlay.classList.remove("open");
      loseOverlay.setAttribute("aria-hidden", "true");
      closeWrongReveal();
    }

    function advanceAfterWrong() {
      index += 1;
      if (index >= ROUND) {
        winOverlay.classList.add("open");
        winOverlay.setAttribute("aria-hidden", "false");
        if (W.MasteringB2Progress) {
          W.MasteringB2Progress.recordCheckFromDom(ROUND, ROUND);
        }
        return;
      }
      showItem();
    }

    function onCheck() {
      var raw = answerEl.value;
      if (!norm(raw)) {
        feedbackEl.textContent = "Type the full negative adjective first.";
        feedbackEl.className = "feedback bad";
        return;
      }

      var item = ROUND_ITEMS[index];
      if (matchesAnswer(raw, item)) {
        feedbackEl.textContent = "Correct!";
        feedbackEl.className = "feedback ok";
        index += 1;
        if (index >= ROUND) {
          winOverlay.classList.add("open");
          winOverlay.setAttribute("aria-hidden", "false");
          if (W.MasteringB2Progress) {
            W.MasteringB2Progress.recordCheckFromDom(ROUND, ROUND);
          }
          return;
        }
        setTimeout(showItem, 420);
        return;
      }

      feedbackEl.textContent = "";
      answerEl.classList.add("shake");
      setTimeout(function () {
        answerEl.classList.remove("shake");
      }, 500);

      lives -= 1;
      renderHearts();
      openWrongReveal(item);
    }

    wrongRevealNext.addEventListener("click", function () {
      closeWrongReveal();
      if (lives <= 0) {
        loseOverlay.classList.add("open");
        loseOverlay.setAttribute("aria-hidden", "false");
        return;
      }
      advanceAfterWrong();
    });

    checkBtn.addEventListener("click", onCheck);
    answerEl.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        onCheck();
      }
    });

    restartBtn.addEventListener("click", function () {
      loseOverlay.classList.remove("open");
      loseOverlay.setAttribute("aria-hidden", "true");
      startGameFresh();
    });

    playAgain.addEventListener("click", function () {
      winOverlay.classList.remove("open");
      winOverlay.setAttribute("aria-hidden", "true");
      startGameFresh();
    });

    startGameFresh();
  }

  W.U2_WF_NEG_PREFIX_HEARTS = { mount: mount, buildItems: buildItems, MAX_LIVES: MAX_LIVES };
})(window);
