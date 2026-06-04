(function () {
  "use strict";

  var mq = new URLSearchParams(location.search || "");
  var MODE = "facts";

  var shellData = window.U12_MILLIONAIRE_SHELL_DATA || {};
  var LADDER = shellData.ladder || [100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000, 1000000];
  var SAFE_IDX = shellData.safeIdx || { 4: true, 9: true };

  var QUESTIONS = [];
  var state = { i: 0, used50: false, locked: false };

  var STORAGE_KEY = shellData.storageKey || "u12MillionaireTopicChecks";

  function allTopicIds() {
    var list = window.VOCAB_TTT_TOPIC_LIST || [];
    return list.map(function (t) {
      return t.id;
    });
  }

  function initTopicPicker() {
    var wrap = document.getElementById("topicChecks");
    wrap.innerHTML = "";
    var list = window.VOCAB_TTT_TOPIC_LIST || [];
    if (!list.length) {
      var msg = document.createElement("span");
      msg.style.color = "#94a3b8";
      msg.style.fontSize = "0.8rem";
      msg.textContent = "Packs not loaded.";
      wrap.appendChild(msg);
      return;
    }
    var saved = null;
    try {
      saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "null");
    } catch (e0) {}
    var i;
    for (i = 0; i < list.length; i++) {
      var t = list[i];
      var lab = document.createElement("label");
      lab.className = "topic-row";
      var cb = document.createElement("input");
      cb.type = "checkbox";
      cb.value = t.id;
      cb.checked = true;
      if (saved && Array.isArray(saved) && saved.length > 0) cb.checked = saved.indexOf(t.id) !== -1;
      var sp = document.createElement("span");
      sp.textContent = t.label;
      lab.appendChild(cb);
      lab.appendChild(sp);
      wrap.appendChild(lab);
    }
  }

  function readTopicIdsFromUI() {
    var inputs = document.querySelectorAll("#topicChecks input[type=checkbox]");
    var out = [];
    var i;
    for (i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) out.push(inputs[i].value);
    }
    var all = allTopicIds();
    if (!out.length) return [];
    if (all.length && out.length >= all.length) return null;
    return out;
  }

  function saveTopicChecks() {
    var ids = readTopicIdsFromUI();
    try {
      if (ids === null) sessionStorage.setItem(STORAGE_KEY, JSON.stringify(allTopicIds()));
      else sessionStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    } catch (e1) {}
  }

  function setDeckStatus(msg) {
    var el = document.getElementById("deckStatus");
    if (el) el.textContent = msg || "";
  }

  function tabButtons() {
    return [].slice.call(document.querySelectorAll(".tabs button[data-mode]"));
  }

  function syncTabUi() {
    tabButtons().forEach(function (b) {
      var m = b.getAttribute("data-mode");
      b.setAttribute("aria-selected", m === MODE ? "true" : "false");
    });
  }

  function pickFallbackMode(topicIds) {
    var MIN = window.U12_MILLIONAIRE_MIN_TAB || 3;
    var modes = [
      { id: "facts", ok: window.countU12MillionaireFacts(topicIds) >= MIN },
      { id: "gaps", ok: window.countU12MillionaireGapsFeasible(topicIds) >= MIN },
      { id: "paraphrase", ok: window.countU12MillionaireParaphrase(topicIds) >= MIN }
    ];
    var i;
    for (i = 0; i < modes.length; i++) {
      if (modes[i].ok) return modes[i].id;
    }
    return "facts";
  }

  function syncTabAvailability(topicIds) {
    var MIN = window.U12_MILLIONAIRE_MIN_TAB || 3;
    var nf = window.countU12MillionaireFacts(topicIds);
    var ng = window.countU12MillionaireGapsFeasible(topicIds);
    var ns = window.countU12MillionaireParaphrase(topicIds);

    var bf = tabButtons().filter(function (b) {
      return b.getAttribute("data-mode") === "facts";
    })[0];
    var bg = tabButtons().filter(function (b) {
      return b.getAttribute("data-mode") === "gaps";
    })[0];
    var bs = tabButtons().filter(function (b) {
      return b.getAttribute("data-mode") === "paraphrase";
    })[0];

    if (bf) {
      bf.disabled = nf < MIN;
      bf.title = nf < MIN ? "Need ≥" + MIN + " comprehension items for this pack mix." : "";
    }
    if (bg) {
      bg.disabled = ng < MIN;
      bg.title = ng < MIN ? "Need phrases that occur in passage text for gaps." : "";
    }
    if (bs) {
      bs.disabled = ns < MIN;
      bs.title = ns < MIN ? "Need ≥" + MIN + " paraphrase clues for this mix." : "";
    }

    var curBtn = tabButtons().filter(function (b) {
      return b.getAttribute("data-mode") === MODE;
    })[0];
    if (!curBtn || curBtn.disabled) {
      MODE = pickFallbackMode(topicIds);
      syncTabUi();
    }
  }

  function rebuildQuestions() {
    var topicIds = readTopicIdsFromUI();
    if (topicIds && topicIds.length === 0) {
      QUESTIONS = [];
      setDeckStatus("Tick at least one pack.");
      saveTopicChecks();
      return;
    }
    syncTabAvailability(topicIds);

    if (MODE === "facts") QUESTIONS = window.buildU12MillionaireFacts(topicIds);
    else if (MODE === "gaps") QUESTIONS = window.buildU12MillionaireGapsFromPassages(topicIds);
    else if (MODE === "paraphrase") QUESTIONS = window.buildU12MillionaireParaphrase(topicIds);

    var poolN = (window.VOCAB_TTT_WORDS || []).filter(function (w) {
      if (topicIds === null) return true;
      return w.topic && topicIds.indexOf(w.topic) !== -1;
    }).length;

    var label =
      topicIds === null ? "all packs · " + poolN + " lexical rows" : topicIds.length + " pack(s) · " + poolN + " rows";
    setDeckStatus("Round: " + QUESTIONS.length + " steps · " + label + " · " + MODE);

    if (!QUESTIONS.length) {
      setDeckStatus("No deck for " + MODE + " with this mix — adjust packs or switch tab.");
    }
    saveTopicChecks();
    syncTabUi();
  }

  function moneyAt(stepIndex) {
    return LADDER[stepIndex] || 0;
  }

  function lastSafe(beforeIndex) {
    for (var s = beforeIndex - 1; s >= 0; s--) {
      if (SAFE_IDX[s]) return moneyAt(s);
    }
    return 0;
  }

  function renderLadder() {
    var ol = document.getElementById("ladderList");
    ol.innerHTML = "";
    var j;
    for (j = LADDER.length - 1; j >= 0; j--) {
      var li = document.createElement("li");
      li.textContent = j + 1 + " — " + LADDER[j].toLocaleString("en-GB");
      if (SAFE_IDX[j]) li.className = "safe";
      if (j === state.i) li.className = (li.className ? li.className + " " : "") + "current";
      ol.appendChild(li);
    }
  }

  function closeHintModal() {
    document.getElementById("hintModal").classList.remove("open");
  }

  function showEnd(won) {
    closeHintModal();
    document.getElementById("endTitle").textContent = won ? "Complete!" : "End";
    var endMsgEl = document.getElementById("endMsg");
    endMsgEl.textContent = "";
    if (won) {
      endMsgEl.textContent = "You cleared all 15.";
    } else {
      var money = lastSafe(state.i);
      var part1 = document.createTextNode("You leave with ");
      var strong = document.createElement("strong");
      strong.textContent = "£" + money.toLocaleString("en-GB");
      var part2 = document.createTextNode("." + (money === 0 ? " Below first safe rung (£1,000 after Q5)." : ""));
      endMsgEl.appendChild(part1);
      endMsgEl.appendChild(strong);
      endMsgEl.appendChild(part2);
    }
    document.getElementById("endModal").classList.add("open");
  }

  function formatGapText(qu) {
    var safeLead = escSrc(qu.lead || "");
    var safeGap = escSrc(qu.gap || "").replace("_______", '<span class="gap">· · ·</span>');
    return (safeLead ? safeLead + "<br><br>" : "") + safeGap;
  }

  function hintFootDefault() {
    return "Reading passage & sports-idiom examples live in the linked Unit 12 JS packs.";
  }

  function setHintFoot(msg) {
    var el = document.getElementById("hintFoot");
    if (el) el.textContent = msg || hintFootDefault();
  }

  function escSrc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function showQuestion() {
    state.locked = false;
    var qLabel = document.getElementById("qLabel");
    var qPrompt = document.getElementById("qPrompt");
    var qText = document.getElementById("qText");
    qText.className = "q-text";

    var llTextBtn = document.getElementById("llText");
    if (!QUESTIONS.length) {
      document.getElementById("qNum").textContent = "—";
      document.getElementById("qTopic").textContent = "—";
      qLabel.hidden = true;
      qPrompt.hidden = true;
      qText.textContent = "Choose packs and a tab, then Apply.";
      document.getElementById("answers").innerHTML = "";
      if (llTextBtn) {
        llTextBtn.hidden = true;
      }
      renderLadder();
      return;
    }

    var qu = QUESTIONS[state.i];
    document.getElementById("qNum").textContent = "Question " + (state.i + 1) + " / " + QUESTIONS.length;
    document.getElementById("qTopic").textContent = qu.topic || "—";
    qLabel.hidden = true;
    qPrompt.hidden = true;

    var kind = qu.kind || MODE;
    if (kind === "facts") {
      qText.textContent = qu.q;
    } else if (kind === "gaps") {
      qLabel.hidden = false;
      qLabel.textContent = "Text gap";
      qText.className = "q-text gap-style";
      qText.innerHTML = formatGapText(qu);
    } else {
      qLabel.hidden = false;
      qLabel.textContent = "Paraphrase";
      qPrompt.hidden = false;
      qPrompt.textContent = "Which option best matches the definition?";
      qText.textContent = qu.q;
    }

    var box = document.getElementById("answers");
    box.innerHTML = "";
    var letters = ["A", "B", "C", "D"];
    var k;
    for (k = 0; k < 4; k++) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "ans";
      b.setAttribute("data-idx", k);
      var badge = document.createElement("span");
      badge.className = "badge";
      badge.textContent = letters[k];
      var body = document.createElement("span");
      if (kind === "paraphrase") body.className = "ans-body";
      body.textContent = qu.opts[k];
      b.appendChild(badge);
      b.appendChild(body);
      b.addEventListener("click", onPick);
      box.appendChild(b);
    }
    document.getElementById("ll50").disabled = state.used50;
    if (llTextBtn) {
      llTextBtn.hidden = kind !== "facts";
    }
    renderLadder();
  }

  function onPick(e) {
    if (state.locked || !QUESTIONS.length) return;
    var el = e.currentTarget;
    var idx = parseInt(el.getAttribute("data-idx"), 10);
    var qu = QUESTIONS[state.i];
    if (el.classList.contains("burnt")) return;
    state.locked = true;
    var buttons = document.querySelectorAll("#answers .ans");
    if (idx === qu.correct) {
      el.classList.add("correct");
      setTimeout(function () {
        if (state.i === QUESTIONS.length - 1) {
          showEnd(true);
          return;
        }
        state.i++;
        showQuestion();
      }, 550);
    } else {
      el.classList.add("wrong-pick");
      [].forEach.call(buttons, function (b) {
        if (parseInt(b.getAttribute("data-idx"), 10) === qu.correct) b.classList.add("correct");
      });
      setTimeout(function () {
        showEnd(false);
      }, 1000);
    }
  }

  function applyFifty() {
    if (state.used50 || state.locked || !QUESTIONS.length) return;
    var qu = QUESTIONS[state.i];
    var wrong = [0, 1, 2, 3].filter(function (x) {
      return x !== qu.correct;
    });
    var n;
    for (n = wrong.length - 1; n > 0; n--) {
      var t = Math.floor(Math.random() * (n + 1));
      var u = wrong[t];
      wrong[t] = wrong[n];
      wrong[n] = u;
    }
    var remove = [wrong[0], wrong[1]];
    state.used50 = true;
    document.getElementById("ll50").disabled = true;
    var buttons = document.querySelectorAll("#answers .ans");
    remove.forEach(function (ri) {
      [].forEach.call(buttons, function (b) {
        if (parseInt(b.getAttribute("data-idx"), 10) === ri) {
          b.classList.add("burning");
          setTimeout(function () {
            b.classList.add("burnt");
            b.classList.remove("burning");
            b.removeEventListener("click", onPick);
          }, 480);
        }
      });
    });
  }

  function openFactsText() {
    if (!QUESTIONS.length) return;
    var qu = QUESTIONS[state.i];
    if ((qu.kind || MODE) !== "facts") return;
    var letters = ["A", "B", "C", "D"];
    var frame = document.getElementById("hintFrame");
    var sub = document.getElementById("hintSub");
    frame.removeAttribute("src");
    document.getElementById("hintTitle").textContent = "Facts · full text";
    if (sub) sub.textContent = "Full Unit 12 passage — find the evidence yourself.";
    setHintFoot("Listening uses SB 10.1 Track 10.1 speakers 1–5; other packs use their full review or lexis plain texts.");

    var fullRaw = String((window.u12MillionaireFactFullPassage && window.u12MillionaireFactFullPassage(qu.topicId, qu.factSpeakerIndex)) || "").trim();

    var passageTitle = "Full passage";
    if (qu.topicId === "u12_reading_road_to_betterment" && typeof qu.factSpeakerIndex === "number") {
      passageTitle = "Speaker " + (qu.factSpeakerIndex + 1) + " — full monologue";
    }

    var passageBlock =
      fullRaw.length > 0
        ? '<div style="margin-top:12px;padding:12px 14px;border-radius:10px;border:1px solid #334155;background:#111827;color:#f1f5f9;font-size:0.88rem;line-height:1.55;white-space:pre-wrap;word-wrap:break-word">' +
          escSrc(fullRaw) +
          "</div>"
        : '<p style="color:#94a3b8;margin-top:12px;font-size:0.84rem;line-height:1.45">Passage not loaded — check unit12-reading-road-to-betterment-lexicon.js and unit12-sports-idioms-lexicon.js.</p>';

    var ci = qu.correct;
    var correctLetter = letters[ci];
    var correctEsc = escSrc(qu.opts[ci]);

    var html =
      '<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{font-family:system-ui,sans-serif;padding:14px;background:#0f172a;color:#f8fafc;line-height:1.55;font-size:0.9rem} summary{cursor:pointer;color:#94a3b8;font-size:0.82rem} .qt{color:#cbd5e1;margin:0 0 8px;line-height:1.45}</style></head><body>' +
      '<p style="margin:0 0 4px;color:#7dd3fc;font-size:0.76rem;text-transform:uppercase;letter-spacing:0.08em">' +
      escSrc(passageTitle) +
      "</p>" +
      passageBlock +
      '<p class="qt" style="margin-top:14px"><strong>Question:</strong> ' +
      escSrc(qu.q) +
      "</p>" +
      '<p style="margin-top:10px;color:#94a3b8;font-size:0.8rem;line-height:1.4"><strong>Pack:</strong> ' +
      escSrc(qu.topic) +
      "</p>" +
      '<details style="margin-top:16px">' +
      "<summary>Show correct answer (spoiler)</summary>" +
      '<p style="color:#86efac;font-weight:700;margin-top:10px;font-size:0.95rem">Correct: ' +
      correctLetter +
      " — " +
      correctEsc +
      "</p>" +
      "</details>" +
      "</body></html>";
    try {
      frame.srcdoc = html;
    } catch (eTxt) {}
    document.getElementById("hintModal").classList.add("open");
  }

  function openHint() {
    if (!QUESTIONS.length) return;
    var qu = QUESTIONS[state.i];
    var frame = document.getElementById("hintFrame");
    var sub = document.getElementById("hintSub");
    frame.removeAttribute("src");
    setHintFoot(hintFootDefault());
    var html;
    var kind = qu.kind || MODE;
    if (kind === "facts") {
      document.getElementById("hintTitle").textContent = "Facts · recall";
      if (sub) sub.textContent = "Answer from memory first. Text opens the whole speaker monologue or pack passage.";
      html =
        '<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{font-family:system-ui,sans-serif;padding:14px;background:#0f172a;color:#e2e8f0;line-height:1.52;font-size:0.9rem}</style></head><body>' +
        "<p>No phrase reveal here — revise <em>The Road to Betterment</em> or the sports-idioms examples in your Unit 12 scripts.</p>" +
        '<p style="margin-top:12px;color:#94a3b8;font-size:0.84rem">Tap <strong style="color:#38bdf8">Text</strong> for the <strong>full</strong> script of that speaker (or the full passage for other packs). The keyed MCQ answer stays under a spoiler.</p>' +
        "<p style=\"margin-top:14px\"><strong>Pack:</strong> " +
        escSrc(qu.topic) +
        "</p></body></html>";
    } else if (kind === "gaps") {
      document.getElementById("hintTitle").textContent = "Gap · lexical cue";
      if (sub) sub.textContent = "Definition-style cue from the Word Bank row (not the full passage).";
      html =
        '<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{font-family:system-ui,sans-serif;padding:14px;background:#0f172a;color:#e2e8f0;line-height:1.45}</style></head><body>' +
        "<p>" +
        escSrc(qu.lexHint || "") +
        '</p><details style="margin-top:12px"><summary>Show answer phrase</summary><p style="color:#86efac;margin-top:8px">' +
        escSrc(qu.lexPhrase || "") +
        "</p></details></body></html>";
    } else if (kind === "paraphrase") {
      document.getElementById("hintTitle").textContent = "Paraphrase · headword";
      if (sub) sub.textContent = "Lexical target keyed to the definition (use only if stuck).";
      html =
        '<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{font-family:system-ui,sans-serif;padding:14px;background:#0f172a;color:#e2e8f0}</style></head><body>' +
        "<p><strong>Target:</strong> " +
        escSrc(qu.target || "") +
        '</p><p style="color:#94a3b8;font-size:0.82rem;margin-top:10px;line-height:1.45">The stem is a definition-style clue — options are words or phrases from Unit 12 packs, not a cloze sentence.</p></body></html>';
    }
    try {
      frame.srcdoc = html;
    } catch (e2) {}
    document.getElementById("hintModal").classList.add("open");
  }

  function newRound() {
    rebuildQuestions();
    state = { i: 0, used50: false, locked: false };
    document.getElementById("endModal").classList.remove("open");
    closeHintModal();
    showQuestion();
  }

  tabButtons().forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (btn.disabled) return;
      MODE = btn.getAttribute("data-mode");
      syncTabUi();
      newRound();
    });
  });

  document.getElementById("ll50").addEventListener("click", applyFifty);
  document.getElementById("llHint").addEventListener("click", openHint);
  document.getElementById("llText").addEventListener("click", openFactsText);
  document.getElementById("btnNew").addEventListener("click", newRound);
  document.getElementById("btnApply").addEventListener("click", newRound);
  document.getElementById("endOk").addEventListener("click", function () {
    document.getElementById("endModal").classList.remove("open");
  });
  document.getElementById("hintClose").addEventListener("click", closeHintModal);
  document.getElementById("hintModal").addEventListener("click", function (e) {
    if (e.target.id === "hintModal") closeHintModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && document.getElementById("hintModal").classList.contains("open")) {
      e.preventDefault();
      closeHintModal();
    }
  });

  initTopicPicker();
  var rawMode = mq.get("mode") || "";
  if (rawMode === "gaps") MODE = "gaps";
  else if (rawMode === "synonyms" || rawMode === "paraphrase") MODE = "paraphrase";
  else MODE = "facts";
  syncTabUi();
  newRound();

  var back = document.getElementById("nav-back");
  if (back) {
    var rb = mq.get("back");
    if (rb && rb.indexOf("fce.html") < 0 && rb.indexOf("ege.html") < 0) {
      try {
        back.href = decodeURIComponent(rb.replace(/\+/g, " "));
      } catch (e3) {
        back.href = rb;
      }
    }
    var c = mq.get("course");
    if (c) {
      try {
        var u = new URL(back.href, location.href);
        u.searchParams.set("course", c);
        back.href = u.pathname + u.search;
      } catch (e4) {}
    }
  }
})();
