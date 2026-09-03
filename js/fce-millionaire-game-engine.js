/**
 * FCE Millionaire — shared game shell (facts / gaps / paraphrase).
 * Depends: unit1-millionaire-data.js (or any bank with same shape).
 */
(function (W) {
  "use strict";

  var LADDER = [100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000, 1000000];
  var SAFE_IDX = { 4: true, 9: true };
  var LETTERS = ["A", "B", "C", "D"];

  function mount(opts) {
    opts = opts || {};
    var mode = opts.mode || "facts";
    var fullBank = opts.questionBank || [];
    var filterBank =
      typeof opts.filterBank === "function"
        ? opts.filterBank
        : W.U1_filterMillionaireBank ||
          function (b) {
            return b;
          };
    var packFilter =
      opts.initialPack ||
      (W.sessionStorage && W.sessionStorage.getItem("mil-u1-pack")) ||
      "all";
    var pickRound =
      typeof opts.pickRound === "function"
        ? opts.pickRound
        : W.U1_pickMillionaireRound ||
          function (b) {
            return b.slice(0, 15);
          };
    var hintFor =
      typeof opts.hintPassageForQuestion === "function"
        ? opts.hintPassageForQuestion
        : W.U1_hintPassageForQuestion ||
          function () {
            return "";
          };

    var els = {
      play: W.document.querySelector(".mil-play"),
      qNum: W.document.getElementById("milQNum"),
      qTopic: W.document.getElementById("milQTopic"),
      qLabel: W.document.getElementById("milQLabel"),
      qText: W.document.getElementById("milQText"),
      answers: W.document.getElementById("milAnswers"),
      ladder: W.document.getElementById("milLadderList"),
      ladderSum: W.document.getElementById("milLadderSum"),
      ll50: W.document.getElementById("milLl50"),
      llPhone: W.document.getElementById("milLlPhone"),
      llAudience: W.document.getElementById("milLlAudience"),
      llHint: W.document.getElementById("milLlHint"),
      btnNew: W.document.getElementById("milBtnNew"),
      hintModal: W.document.getElementById("milHintModal"),
      hintTitle: W.document.getElementById("milHintTitle"),
      hintBody: W.document.getElementById("milHintBody"),
      hintClose: W.document.getElementById("milHintClose"),
      audienceModal: W.document.getElementById("milAudienceModal"),
      audienceMsg: W.document.getElementById("milAudienceMsg"),
      audienceBars: W.document.getElementById("milAudienceBars"),
      audienceOk: W.document.getElementById("milAudienceOk"),
      endModal: W.document.getElementById("milEndModal"),
      endTitle: W.document.getElementById("milEndTitle"),
      endMsg: W.document.getElementById("milEndMsg"),
      endOk: W.document.getElementById("milEndOk"),
      sub: W.document.getElementById("milSub"),
      lexTabs: W.document.getElementById("milLexTabs")
    };

    var ambience = W.FCE_MILLIONAIRE_AMBIENCE;
    var QUESTIONS = [];
    var ACTIVE_LADDER = LADDER.slice();
    var ACTIVE_SAFE = {};
    var state = { i: 0, used50: false, usedPhone: false, usedAudience: false, locked: false };

    function currentBank() {
      return filterBank(fullBank, packFilter);
    }

    function rebuildActiveLadder() {
      var n = QUESTIONS.length || 15;
      ACTIVE_LADDER = LADDER.slice(0, Math.min(n, LADDER.length));
      ACTIVE_SAFE = {};
      if (ACTIVE_LADDER.length >= 5) ACTIVE_SAFE[4] = true;
      if (ACTIVE_LADDER.length >= 10) ACTIVE_SAFE[9] = true;
    }

    function moneyAt(i) {
      return ACTIVE_LADDER[i] || 0;
    }

    function lastSafe(beforeIndex) {
      var s;
      for (s = beforeIndex - 1; s >= 0; s--) {
        if (ACTIVE_SAFE[s]) return moneyAt(s);
      }
      return 0;
    }

    function formatMoney(n) {
      return "£" + n.toLocaleString("en-GB");
    }

    function renderLadder() {
      if (els.ladder) {
        els.ladder.innerHTML = "";
        var j;
        for (j = ACTIVE_LADDER.length - 1; j >= 0; j--) {
          var li = W.document.createElement("li");
          li.textContent = j + 1 + " · " + formatMoney(ACTIVE_LADDER[j]);
          if (ACTIVE_SAFE[j]) li.className = "safe";
          if (j === state.i) li.className = (li.className ? li.className + " " : "") + "current";
          els.ladder.appendChild(li);
        }
      }
      if (els.ladderSum && QUESTIONS.length) {
        var playing = formatMoney(moneyAt(state.i));
        var safeAmt = lastSafe(state.i + 1);
        els.ladderSum.textContent =
          "Question " +
          (state.i + 1) +
          " · Playing for " +
          playing +
          (safeAmt ? " · Safe: " + formatMoney(safeAmt) : "");
      }
    }

    function syncLifelines() {
      var empty = !QUESTIONS.length || state.locked;
      if (els.ll50) els.ll50.disabled = empty || state.used50;
      if (els.llPhone) els.llPhone.disabled = empty || state.usedPhone;
      if (els.llAudience) els.llAudience.disabled = empty || state.usedAudience;
      if (els.llHint) els.llHint.disabled = empty;
    }

    function closeHintModal() {
      if (els.hintModal) els.hintModal.classList.remove("open");
    }

    function closeAudienceModal() {
      if (els.audienceModal) els.audienceModal.classList.remove("open");
    }

    function showEnd(won) {
      closeHintModal();
      closeAudienceModal();
      if (won && ambience && ambience.stingerWin) ambience.stingerWin();
      var msg;
      if (won) {
        msg = "Congratulations! You win <strong>£1,000,000</strong> (virtual).";
      } else {
        var m = lastSafe(state.i);
        msg =
          "Game over. You leave with <strong>" +
          formatMoney(m) +
          "</strong>." +
          (m === 0 ? " No safety net yet." : " Safety net applied.");
      }
      if (els.endTitle) els.endTitle.textContent = won ? "You win!" : "Game over";
      if (els.endMsg) els.endMsg.innerHTML = msg;
      if (els.endModal) els.endModal.classList.add("open");
    }

    function formatQuestion(qu) {
      if (mode === "gaps") {
        var g = String(qu.gap || "").replace("_______", '\n<span class="gap">· · ·</span>\n');
        return (qu.lead ? qu.lead + "\n\n" : "") + g;
      }
      if (mode === "paraphrase") {
        return (
          (qu.quote ? qu.quote + "\n\n" : "") +
          (qu.prompt || "Choose the closest meaning:")
        );
      }
      return qu.q || "";
    }

    function pulsePlayReveal() {
      if (!els.play) return;
      els.play.classList.remove("is-reveal");
      void els.play.offsetWidth;
      els.play.classList.add("is-reveal");
    }

    function showQuestion() {
      if (!QUESTIONS.length) {
        if (els.qNum) els.qNum.textContent = "—";
        if (els.qTopic) els.qTopic.textContent = "No questions";
        if (els.qText) {
          els.qText.textContent =
            "Deck is empty — check that the data file loaded (lifestyle + clothes).";
        }
        if (els.ladderSum) els.ladderSum.textContent = "Prize ladder";
        renderLadder();
        if (els.answers) els.answers.innerHTML = "";
        syncLifelines();
        return;
      }
      state.locked = false;
      var qu = QUESTIONS[state.i];
      if (els.qNum) els.qNum.textContent = "Question " + (state.i + 1) + " of " + QUESTIONS.length;
      if (els.qTopic) els.qTopic.textContent = qu.topic || "";
      if (els.qText) els.qText.innerHTML = formatQuestion(qu);
      if (els.answers) {
        els.answers.innerHTML = "";
        var k;
        for (k = 0; k < 4; k++) {
          var b = W.document.createElement("button");
          b.type = "button";
          b.className = "mil-ans";
          b.setAttribute("data-idx", String(k));
          b.innerHTML =
            '<span class="badge">' +
            LETTERS[k] +
            "</span><span>" +
            (qu.opts[k] || "—") +
            "</span>";
          b.addEventListener("click", onPick);
          els.answers.appendChild(b);
        }
      }
      syncLifelines();
      renderLadder();
      pulsePlayReveal();
    }

    function onPick(e) {
      if (state.locked) return;
      var el = e.currentTarget;
      var idx = parseInt(el.getAttribute("data-idx"), 10);
      var qu = QUESTIONS[state.i];
      if (el.classList.contains("burnt")) return;
      state.locked = true;
      syncLifelines();
      var buttons = els.answers ? els.answers.querySelectorAll(".mil-ans") : [];
      if (idx === qu.correct) {
        el.classList.add("correct");
        if (ambience && ambience.stingerCorrect) ambience.stingerCorrect();
        W.setTimeout(function () {
          if (state.i === QUESTIONS.length - 1) {
            showEnd(true);
            return;
          }
          state.i++;
          showQuestion();
        }, 850);
      } else {
        el.classList.add("wrong-pick");
        if (ambience && ambience.stingerWrong) ambience.stingerWrong();
        buttons.forEach(function (b) {
          if (parseInt(b.getAttribute("data-idx"), 10) === qu.correct) {
            b.classList.add("correct");
          }
        });
        W.setTimeout(function () {
          showEnd(false);
        }, 1400);
      }
    }

    function applyFifty() {
      if (state.used50 || state.locked || !QUESTIONS.length) return;
      var qu = QUESTIONS[state.i];
      var wrong = [0, 1, 2, 3].filter(function (x) {
        return x !== qu.correct;
      });
      shuffle(wrong);
      var remove = [wrong[0], wrong[1]];
      state.used50 = true;
      if (els.ll50) els.ll50.disabled = true;
      var buttons = els.answers ? els.answers.querySelectorAll(".mil-ans") : [];
      remove.forEach(function (ri) {
        buttons.forEach(function (b) {
          if (parseInt(b.getAttribute("data-idx"), 10) === ri) {
            b.classList.add("burning");
            W.setTimeout(function () {
              b.classList.add("burnt");
              b.classList.remove("burning");
            }, 500);
          }
        });
      });
    }

    function shuffle(arr) {
      var i;
      for (i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
      }
    }

    function openTextHint(titleOverride, subOverride) {
      if (!QUESTIONS.length || state.locked) return;
      var qu = QUESTIONS[state.i];
      var passage = hintFor(qu);
      if (els.hintTitle) {
        els.hintTitle.textContent = titleOverride || qu.topic || "Source text";
      }
      if (els.hintBody) {
        els.hintBody.textContent = passage || "Source passage not available for this item.";
      }
      var sub = W.document.querySelector(".mil-hint-sub");
      if (sub && subOverride) sub.textContent = subOverride;
      if (els.hintModal) els.hintModal.classList.add("open");
    }

    function openPhoneHint() {
      if (state.usedPhone || state.locked || !QUESTIONS.length) return;
      state.usedPhone = true;
      if (els.llPhone) els.llPhone.disabled = true;
      openTextHint("Phone a friend", "Your friend reads the passage — find the answer.");
    }

    function buildAudiencePercents(correctIdx) {
      var p = [0, 0, 0, 0];
      var rest = 100;
      var ci = correctIdx;
      p[ci] = 38 + Math.floor(Math.random() * 28);
      rest -= p[ci];
      var others = [0, 1, 2, 3].filter(function (x) {
        return x !== ci;
      });
      shuffle(others);
      var i;
      for (i = 0; i < others.length; i++) {
        if (i === others.length - 1) {
          p[others[i]] = rest;
        } else {
          var chunk = Math.floor(rest / (others.length - i));
          chunk = Math.max(3, Math.min(chunk, rest - 3 * (others.length - i - 1)));
          p[others[i]] = chunk;
          rest -= chunk;
        }
      }
      return p;
    }

    function paintAnswerPolls(percents) {
      var buttons = els.answers ? els.answers.querySelectorAll(".mil-ans") : [];
      buttons.forEach(function (b) {
        var idx = parseInt(b.getAttribute("data-idx"), 10);
        var pct = percents[idx] || 0;
        var old = b.querySelector(".mil-ans-poll");
        if (old) old.remove();
        var oldPct = b.querySelector(".mil-ans-poll-pct");
        if (oldPct) oldPct.remove();
        var bar = W.document.createElement("div");
        bar.className = "mil-ans-poll";
        bar.innerHTML = "<span style=\"width:0%\"></span>";
        var label = W.document.createElement("span");
        label.className = "mil-ans-poll-pct";
        label.textContent = pct + "%";
        b.appendChild(bar);
        b.appendChild(label);
        W.setTimeout(function () {
          var span = bar.querySelector("span");
          if (span) span.style.width = pct + "%";
        }, 80);
      });
    }

    function applyAudience() {
      if (state.usedAudience || state.locked || !QUESTIONS.length) return;
      state.usedAudience = true;
      if (els.llAudience) els.llAudience.disabled = true;
      var qu = QUESTIONS[state.i];
      var percents = buildAudiencePercents(qu.correct);
      if (els.audienceMsg) {
        els.audienceMsg.textContent = "Ask the audience…";
        els.audienceMsg.className = "mil-audience-vote";
      }
      if (els.audienceBars) els.audienceBars.innerHTML = "";
      if (els.audienceModal) els.audienceModal.classList.add("open");
      W.setTimeout(function () {
        if (els.audienceMsg) {
          els.audienceMsg.textContent = "Audience poll";
          els.audienceMsg.className = "";
        }
        if (els.audienceBars) {
          els.audienceBars.innerHTML = "";
          var k;
          for (k = 0; k < 4; k++) {
            var row = W.document.createElement("div");
            row.className = "mil-audience-row";
            row.innerHTML =
              "<span>" +
              LETTERS[k] +
              "</span><div class=\"bar-wrap\"><div class=\"bar-fill\" style=\"width:0%\"></div></div><span>" +
              percents[k] +
              "%</span>";
            els.audienceBars.appendChild(row);
            (function (fill, pct) {
              W.setTimeout(function () {
                fill.style.width = pct + "%";
              }, 60);
            })(row.querySelector(".bar-fill"), percents[k]);
          }
        }
        paintAnswerPolls(percents);
      }, 1600);
    }

    function packLabel(pack) {
      var map = W.U1_MILLIONAIRE_PACK_LABELS || {};
      return map[pack] || pack;
    }

    function updateSubline() {
      if (!els.sub) return;
      var modeLabel =
        mode === "gaps" ? "insert the phrase A–D" : mode === "paraphrase" ? "closest meaning A–D" : "facts A–D";
      els.sub.textContent =
        "Unit 1 · " + packLabel(packFilter) + " · " + modeLabel + " · " + currentBank().length + " in deck";
    }

    function syncLexTabs() {
      if (!els.lexTabs) return;
      var buttons = els.lexTabs.querySelectorAll("[data-pack]");
      buttons.forEach(function (btn) {
        var on = btn.getAttribute("data-pack") === packFilter;
        btn.classList.toggle("is-active", on);
        btn.setAttribute("aria-selected", on ? "true" : "false");
      });
    }

    function wireLexTabs() {
      if (!els.lexTabs) return;
      var buttons = els.lexTabs.querySelectorAll("[data-pack]");
      buttons.forEach(function (btn) {
        btn.addEventListener("click", function () {
          var next = btn.getAttribute("data-pack") || "all";
          if (next === packFilter) return;
          packFilter = next;
          if (W.sessionStorage) {
            try {
              W.sessionStorage.setItem("mil-u1-pack", packFilter);
            } catch (e) {}
          }
          syncLexTabs();
          updateSubline();
          newGame();
        });
      });
      syncLexTabs();
      updateSubline();
    }

    function newGame() {
      var bank = currentBank();
      QUESTIONS = pickRound(bank).map(function (qu) {
        var copy = {};
        var k;
        for (k in qu) {
          if (Object.prototype.hasOwnProperty.call(qu, k)) copy[k] = qu[k];
        }
        copy.hintPassage = hintFor(qu);
        return copy;
      });
      rebuildActiveLadder();
      state = { i: 0, used50: false, usedPhone: false, usedAudience: false, locked: false };
      if (els.endModal) els.endModal.classList.remove("open");
      closeHintModal();
      closeAudienceModal();
      showQuestion();
    }

    if (els.ll50) els.ll50.addEventListener("click", applyFifty);
    if (els.llPhone) els.llPhone.addEventListener("click", openPhoneHint);
    if (els.llAudience) els.llAudience.addEventListener("click", applyAudience);
    if (els.llHint) els.llHint.addEventListener("click", function () {
      openTextHint();
    });
    if (els.btnNew) els.btnNew.addEventListener("click", newGame);
    if (els.endOk) {
      els.endOk.addEventListener("click", function () {
        if (els.endModal) els.endModal.classList.remove("open");
      });
    }
    if (els.audienceOk) {
      els.audienceOk.addEventListener("click", closeAudienceModal);
    }
    if (els.hintClose) els.hintClose.addEventListener("click", closeHintModal);
    if (els.hintModal) {
      els.hintModal.addEventListener("click", function (e) {
        if (e.target === els.hintModal) closeHintModal();
      });
    }
    if (els.audienceModal) {
      els.audienceModal.addEventListener("click", function (e) {
        if (e.target === els.audienceModal) closeAudienceModal();
      });
    }
    W.document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      if (els.hintModal && els.hintModal.classList.contains("open")) {
        e.preventDefault();
        closeHintModal();
        return;
      }
      if (els.audienceModal && els.audienceModal.classList.contains("open")) {
        e.preventDefault();
        closeAudienceModal();
      }
    });

    if (ambience && ambience.wireFab) {
      ambience.wireFab(W.document.getElementById("milAudioFab"));
    }

    wireLexTabs();
    newGame();
  }

  W.FCE_MILLIONAIRE_GAME = { mount: mount };
})(typeof window !== "undefined" ? window : globalThis);
