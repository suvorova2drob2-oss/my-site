(function (W, D) {
  "use strict";

  var data = W.U10_CPE_WRITING_WORKSHOP_DATA;
  if (!data) return;

  var WRITING_BANK = data.writingBank;
  var REF_TASK = data.refTask;
  var REF_CHOICES = data.refChoices;
  var WRITE_PROMPTS = data.writePrompts;
  var LINKERS = data.linkers;
  var TOPIC_WORDS = data.topicWords;
  var COMMON_MISTAKES = data.commonMistakes.map(function (row) {
    return { re: new RegExp(row.pattern, row.flags || ""), msg: row.msg };
  });
  var REQUIRED_PHRASE_RULES = data.requiredPhrases.map(function (row) {
    return { label: row.label, re: new RegExp(row.pattern, row.flags || "") };
  });

  function byId(id) {
    return D.getElementById(id);
  }

  function clearNode(el) {
    while (el && el.firstChild) el.removeChild(el.firstChild);
  }

  var focusTerm = byId("focusTerm");
  var focusPara = byId("focusPara");
  var quickBank = byId("quickBank");
  var wbIntro = byId("wbIntro");
  var wbCompare = byId("wbCompare");
  var wbStance = byId("wbStance");
  var wbConclusion = byId("wbConclusion");
  var wbCountIntro = byId("wbCountIntro");
  var wbCountCompare = byId("wbCountCompare");
  var wbCountStance = byId("wbCountStance");
  var wbCountConclusion = byId("wbCountConclusion");
  var gamePara = byId("gamePara");
  var gameOpts = byId("gameOpts");
  var refList = byId("refList");
  var refFb = byId("refFb");
  var writePrompt = byId("writePrompt");
  var writeInput = byId("writeInput");
  var writeReport = byId("writeReport");
  var writeScore = byId("writeScore");
  var phraseMissionList = byId("phraseMissionList");
  var phraseMissionMeter = byId("phraseMissionMeter");
  var examinerTotal = byId("examinerTotal");
  var examinerList = byId("examinerList");

  var chips = Array.prototype.slice.call(D.querySelectorAll(".hl"));
  var gameIdx = 0;
  var refPick = {};

  function setFocus(term, para) {
    focusTerm.textContent = term;
    focusPara.textContent = para;
  }

  function setActive(el) {
    chips.forEach(function (c) {
      c.classList.remove("active");
    });
    if (el) el.classList.add("active");
  }

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      var term = chip.getAttribute("data-term") || chip.textContent.trim();
      var para = chip.getAttribute("data-para") || "";
      setFocus(term, para);
      setActive(chip);
    });
  });

  var unique = {};
  chips.forEach(function (chip) {
    var term = chip.getAttribute("data-term") || chip.textContent.trim();
    var para = chip.getAttribute("data-para") || "";
    if (unique[term]) return;
    unique[term] = true;
    var b = D.createElement("button");
    b.type = "button";
    b.textContent = term;
    b.addEventListener("click", function () {
      setFocus(term, para);
      var linked = chips.filter(function (c) {
        return (c.getAttribute("data-term") || c.textContent.trim()) === term;
      })[0];
      setActive(linked || null);
    });
    quickBank.appendChild(b);
  });

  if (chips.length) chips[0].click();

  var WB_TARGETS = {
    intro: wbIntro,
    compare: wbCompare,
    stance: wbStance,
    conclusion: wbConclusion
  };
  WRITING_BANK.forEach(function (row) {
    var li = D.createElement("li");
    li.textContent = row.phrase;
    if (WB_TARGETS[row.group]) WB_TARGETS[row.group].appendChild(li);
  });
  if (wbCountIntro) wbCountIntro.textContent = wbIntro.children.length + " phrases";
  if (wbCountCompare) wbCountCompare.textContent = wbCompare.children.length + " phrases";
  if (wbCountStance) wbCountStance.textContent = wbStance.children.length + " phrases";
  if (wbCountConclusion) wbCountConclusion.textContent = wbConclusion.children.length + " phrases";

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  }

  function renderGame() {
    var row = WRITING_BANK[gameIdx % WRITING_BANK.length];
    gamePara.textContent = "Paraphrase: " + row.para;
    var pool = shuffle(
      WRITING_BANK.filter(function (x) {
        return x.phrase !== row.phrase;
      })
    ).slice(0, 3);
    var opts = shuffle([row].concat(pool));
    clearNode(gameOpts);
    opts.forEach(function (opt) {
      var b = D.createElement("button");
      b.type = "button";
      b.className = "game-opt";
      b.textContent = opt.phrase;
      b.addEventListener("click", function () {
        gameOpts.querySelectorAll(".game-opt").forEach(function (x) {
          x.disabled = true;
        });
        if (opt.phrase === row.phrase) {
          b.classList.add("ok");
        } else {
          b.classList.add("bad");
          var trueBtn = Array.prototype.slice.call(gameOpts.querySelectorAll(".game-opt")).filter(function (x) {
            return x.textContent === row.phrase;
          })[0];
          if (trueBtn) trueBtn.classList.add("ok");
        }
      });
      gameOpts.appendChild(b);
    });
  }

  byId("gameNext").addEventListener("click", function () {
    gameIdx++;
    renderGame();
  });
  renderGame();

  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function setWritePrompt() {
    if (!writePrompt) return;
    clearNode(writePrompt);
    var strong = D.createElement("strong");
    strong.textContent = "Topic:";
    writePrompt.appendChild(strong);
    writePrompt.appendChild(D.createTextNode(" " + pick(WRITE_PROMPTS)));
  }

  function wordsCount(text) {
    var m = text.trim().match(/\b[\w'-]+\b/g);
    return m ? m.length : 0;
  }

  function sentenceCount(text) {
    return text
      .split(/[.!?]+/)
      .map(function (x) {
        return x.trim();
      })
      .filter(Boolean).length;
  }

  function addReportRow(text, ok) {
    if (!writeReport) return;
    var li = D.createElement("li");
    li.className = ok ? "ok" : "bad";
    li.textContent = (ok ? "OK: " : "Fix: ") + text;
    writeReport.appendChild(li);
  }

  function renderPhraseMission(text) {
    if (!phraseMissionList || !phraseMissionMeter) return { used: 0, total: 0 };
    var source = text || "";
    clearNode(phraseMissionList);
    var used = 0;
    REQUIRED_PHRASE_RULES.forEach(function (rule) {
      var li = D.createElement("li");
      var hit = rule.re.test(source);
      if (hit) {
        used++;
        li.classList.add("ok");
        li.textContent = "Used: " + rule.label;
      } else {
        li.textContent = "Missing: " + rule.label;
      }
      phraseMissionList.appendChild(li);
    });
    phraseMissionMeter.textContent = used + "/" + REQUIRED_PHRASE_RULES.length + " used";
    return { used: used, total: REQUIRED_PHRASE_RULES.length };
  }

  function addExaminerRow(name, band, reason) {
    if (!examinerList) return;
    var li = D.createElement("li");
    var head = D.createElement("span");
    head.className = "exam-band";
    head.textContent = name + ": " + band + "/5";
    li.appendChild(head);
    li.appendChild(D.createTextNode(" - " + reason));
    examinerList.appendChild(li);
  }

  function renderExaminerFeedback(metrics) {
    if (!examinerList || !examinerTotal) return;
    clearNode(examinerList);

    var contentBand = 1;
    if (metrics.words >= 120 && metrics.words <= 260) contentBand++;
    if (metrics.topicHits >= 3) contentBand++;
    if (metrics.missionAll) contentBand++;
    if (metrics.sentences >= 4) contentBand++;
    if (contentBand > 5) contentBand = 5;

    var caBand = 1;
    if (metrics.linkerHits >= 3) caBand++;
    if (metrics.stanceHits >= 1) caBand++;
    if (metrics.contrastHits >= 1) caBand++;
    if (metrics.missionUsed >= 10) caBand++;
    if (caBand > 5) caBand = 5;

    var orgBand = 1;
    if (metrics.sentences >= 4) orgBand++;
    if (metrics.linkerHits >= 2) orgBand++;
    if (metrics.punctuationOk) orgBand++;
    if (!metrics.doubleSpaces) orgBand++;
    if (orgBand > 5) orgBand = 5;

    var langBand = 1;
    if (metrics.commonMistakes === 0) langBand++;
    if (metrics.uniqueRatio >= 0.47) langBand++;
    if (metrics.lowercaseStarts === 0) langBand++;
    if (metrics.bankHits >= 8) langBand++;
    if (langBand > 5) langBand = 5;

    addExaminerRow("Content", contentBand, metrics.missionAll ? "All required phrases are covered and ideas stay on topic." : "Some required phrases are still missing.");
    addExaminerRow("Communicative Achievement", caBand, metrics.linkerHits >= 3 ? "Tone and argument progression are clear." : "Add more linking and stance markers for a stronger argument.");
    addExaminerRow("Organisation", orgBand, metrics.sentences >= 4 ? "Paragraph flow is mostly logical." : "Develop the paragraph with clearer sequencing across sentences.");
    addExaminerRow("Language", langBand, metrics.commonMistakes === 0 ? "Control is generally good for this level." : "Fix recurring grammar/usage slips to raise accuracy.");

    var totalBand = contentBand + caBand + orgBand + langBand;
    examinerTotal.textContent = "Estimated examiner profile: " + totalBand + "/20. (Automatic guidance mode, not an official exam mark.)";
  }

  function checkWriting() {
    var text = (writeInput && writeInput.value ? writeInput.value : "").trim();
    if (!text) {
      writeScore.textContent = "Write your paragraph first, then press Check paragraph.";
      clearNode(writeReport);
      clearNode(examinerList);
      if (examinerTotal) examinerTotal.textContent = "Run Check paragraph to see Content / Communicative Achievement / Organisation / Language.";
      renderPhraseMission("");
      return;
    }
    clearNode(writeReport);
    var total = 6;
    var score = 0;

    var wc = wordsCount(text);
    var wcOk = wc >= 140 && wc <= 220;
    addReportRow("Word count: " + wc + " (target: 140-220 for full phrase mission).", wcOk);
    if (wcOk) score++;

    var sc = sentenceCount(text);
    var scOk = sc >= 4;
    addReportRow("At least 4 sentences for clear structure.", scOk);
    if (scOk) score++;

    var lower = text.toLowerCase();
    var topicHits = TOPIC_WORDS.filter(function (w) {
      return lower.indexOf(w) !== -1;
    });
    var topicOk = topicHits.length >= 3;
    addReportRow("Topic vocabulary used (" + topicHits.length + "): " + (topicHits.slice(0, 4).join(", ") || "none"), topicOk);
    if (topicOk) score++;

    var linkerHits = LINKERS.filter(function (w) {
      return new RegExp("\\b" + w + "\\b", "i").test(text);
    });
    var linkerOk = linkerHits.length >= 3;
    addReportRow("Linkers used (" + linkerHits.length + "): " + (linkerHits.join(", ") || "none"), linkerOk);
    if (linkerOk) score++;

    var bankHits = WRITING_BANK.filter(function (row) {
      var needle = row.phrase.replace(/\s*\.\.\.\s*/g, "").trim().toLowerCase();
      return needle.length > 4 && lower.indexOf(needle) !== -1;
    });
    addReportRow("Writing Bank phrases detected (" + bankHits.length + ").", bankHits.length >= 8);

    var mission = renderPhraseMission(text);
    var missionOk = mission.used === mission.total;
    addReportRow("Phrase mission: " + mission.used + "/" + mission.total + " required phrases used.", missionOk);
    if (missionOk) score++;

    var punctuationOk = /[.!?]["')\]]?\s*$/.test(text);
    var doubleSpaces = /\s{2,}/.test(text);
    var lowercaseStarts = (text.match(/(^|[.!?]\s+)[a-z]/g) || []).length;
    if (!punctuationOk) addReportRow("Add final punctuation at the end of the paragraph.", false);
    if (doubleSpaces) addReportRow("Remove double spaces.", false);
    if (lowercaseStarts) addReportRow("Some sentences start with lowercase letters.", false);

    var commonMistakesCount = 0;
    COMMON_MISTAKES.forEach(function (rule) {
      if (rule.re.test(text)) {
        commonMistakesCount++;
        addReportRow(rule.msg, false);
      }
    });

    var pct = Math.round((score / total) * 100);
    writeScore.textContent = "Auto-check score: " + score + "/" + total + " (" + pct + "%).";

    var words = text.toLowerCase().match(/\b[a-z'-]+\b/g) || [];
    var uniqueRatio = words.length ? Object.keys(words.reduce(function (acc, w) {
      acc[w] = 1;
      return acc;
    }, {})).length / words.length : 0;
    var stanceHits = (lower.match(/\b(i believe|i think|in my view|there is no doubt|what is undeniable)\b/g) || []).length;
    var contrastHits = (lower.match(/\bhowever|whereas|although|yet|while|nevertheless\b/g) || []).length;
    renderExaminerFeedback({
      words: wc,
      sentences: sc,
      topicHits: topicHits.length,
      linkerHits: linkerHits.length,
      bankHits: bankHits.length,
      missionUsed: mission.used,
      missionAll: missionOk,
      punctuationOk: punctuationOk,
      doubleSpaces: doubleSpaces,
      lowercaseStarts: lowercaseStarts,
      commonMistakes: commonMistakesCount,
      uniqueRatio: uniqueRatio,
      stanceHits: stanceHits,
      contrastHits: contrastHits
    });
  }

  byId("writePromptNew").addEventListener("click", setWritePrompt);
  byId("writeSeed").addEventListener("click", function () {
    var starter = "The topic addressed is whether censorship is still justified in modern media. ";
    if (!writeInput) return;
    if (!writeInput.value.trim()) {
      writeInput.value = starter;
    } else {
      writeInput.value = writeInput.value.trim() + " " + starter;
    }
    writeInput.focus();
    renderPhraseMission(writeInput.value);
  });
  byId("writeCheck").addEventListener("click", checkWriting);
  if (writeInput) {
    writeInput.addEventListener("input", function () {
      renderPhraseMission(writeInput.value || "");
    });
  }
  byId("writeReset").addEventListener("click", function () {
    if (writeInput) writeInput.value = "";
    clearNode(writeReport);
    if (writeScore) writeScore.textContent = "";
    clearNode(examinerList);
    if (examinerTotal) examinerTotal.textContent = "Run Check paragraph to see Content / Communicative Achievement / Organisation / Language.";
    renderPhraseMission("");
  });
  setWritePrompt();
  renderPhraseMission("");

  function renderRefTask() {
    clearNode(refList);
    REF_TASK.forEach(function (row) {
      var li = D.createElement("li");
      li.className = "ref-row";
      li.dataset.id = row.id;

      var ph = D.createElement("p");
      ph.className = "ref-phrase";
      ph.textContent = row.phrase;
      li.appendChild(ph);

      var controls = D.createElement("div");
      controls.className = "ref-controls";
      REF_CHOICES.forEach(function (c) {
        var b = D.createElement("button");
        b.type = "button";
        b.className = "ref-choice";
        if (refPick[row.id] === c.id) b.classList.add("active");
        b.textContent = c.label;
        b.addEventListener("click", function () {
          refPick[row.id] = c.id;
          renderRefTask();
        });
        controls.appendChild(b);
      });
      li.appendChild(controls);
      refList.appendChild(li);
    });
  }

  function checkRefTask() {
    var score = 0;
    var missing = 0;
    REF_TASK.forEach(function (row) {
      var li = refList.querySelector('.ref-row[data-id="' + row.id + '"]');
      if (!li) return;
      li.classList.remove("ok", "bad");
      var got = refPick[row.id] || "";
      if (!got) {
        missing++;
        li.classList.add("bad");
        return;
      }
      if (got === row.answer) {
        score++;
        li.classList.add("ok");
      } else {
        li.classList.add("bad");
      }
    });
    if (missing) {
      refFb.textContent = "Score " + score + "/6. Some rows are still unanswered.";
    } else {
      refFb.textContent = score === 6 ? "Excellent: all reference links are correct." : "Score " + score + "/6. Red rows need a different source link.";
    }
  }

  byId("refCheck").addEventListener("click", checkRefTask);
  byId("refReset").addEventListener("click", function () {
    refPick = {};
    refFb.textContent = "";
    renderRefTask();
  });
  renderRefTask();
})(window, document);
