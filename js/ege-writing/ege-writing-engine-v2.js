(function (W, D) {
  "use strict";

  var data = W.__EGE_WRITING_DATA__;
  var tasks = data && Array.isArray(data.tasks) ? data.tasks : [];
  if (!tasks.length) return;

  var TASK_PREF_KEY = "ege_writing_active_task_v2";
  var UNIT_PREF_KEY = "ege_writing_active_unit_v2";
  var task = tasks[0];
  var currentUnit = task.unitLabel || "Unit 1";

  function byId(id) {
    return D.getElementById(id);
  }

  function escHtml(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function norm(s) {
    return String(s || "").toLowerCase();
  }

  function currentStorageKey() {
    return "ege_writing_draft_" + String(task && task.id ? task.id : "default");
  }

  function maxScore() {
    return (task.criteria || []).reduce(function (sum, row) {
      return sum + Number(row.max || 0);
    }, 0);
  }

  function getTaskById(id) {
    var i;
    for (i = 0; i < tasks.length; i++) {
      if (tasks[i].id === id) return tasks[i];
    }
    return tasks[0];
  }

  function setTaskById(id) {
    task = getTaskById(id);
    currentUnit = task.unitLabel || currentUnit;
    try {
      localStorage.setItem(TASK_PREF_KEY, task.id);
      localStorage.setItem(UNIT_PREF_KEY, currentUnit);
    } catch (e) {}
  }

  function loadPreferredTaskId() {
    try {
      return localStorage.getItem(TASK_PREF_KEY) || data.defaultTaskId || tasks[0].id;
    } catch (e) {
      return data.defaultTaskId || tasks[0].id;
    }
  }

  function loadPreferredUnit() {
    try {
      return localStorage.getItem(UNIT_PREF_KEY) || "";
    } catch (e) {
      return "";
    }
  }

  function unitLabels() {
    var seen = {};
    var out = [];
    tasks.forEach(function (row) {
      var label = row.unitLabel || "Unit 1";
      if (seen[label]) return;
      seen[label] = true;
      out.push(label);
    });
    return out;
  }

  function tasksForCurrentUnit() {
    return tasks.filter(function (row) {
      return (row.unitLabel || "Unit 1") === currentUnit;
    });
  }

  function getWords(text) {
    var m = String(text || "").match(/[A-Za-z0-9]+(?:['’-][A-Za-z0-9]+)*/g);
    return m || [];
  }

  function wordCount(text) {
    return getWords(text).length;
  }

  function sentenceChunks(text) {
    return String(text || "")
      .split(/[.!?]+/)
      .map(function (x) {
        return x.trim();
      })
      .filter(Boolean);
  }

  function sentenceCount(text) {
    return sentenceChunks(text).length;
  }

  function paragraphList(text) {
    return String(text || "")
      .split(/\n\s*\n+/)
      .map(function (x) {
        return x.trim();
      })
      .filter(Boolean);
  }

  function countPhraseHits(text, phrases) {
    var low = norm(text);
    var hits = 0;
    var i;
    for (i = 0; i < phrases.length; i++) {
      if (low.indexOf(norm(phrases[i])) >= 0) hits++;
    }
    return hits;
  }

  function hasAny(text, arr) {
    var low = norm(text);
    var i;
    for (i = 0; i < arr.length; i++) {
      if (low.indexOf(norm(arr[i])) >= 0) return true;
    }
    return false;
  }

  function repeatedPunctuationCount(text) {
    var m = String(text || "").match(/[!?.,;:]{2,}/g);
    return m ? m.length : 0;
  }

  function doubleSpacesCount(text) {
    var m = String(text || "").match(/ {2,}/g);
    return m ? m.length : 0;
  }

  function lowercaseSentenceStarts(text) {
    var parts = sentenceChunks(text);
    var count = 0;
    var i;
    for (i = 0; i < parts.length; i++) {
      if (/^[a-z]/.test(parts[i])) count++;
    }
    return count;
  }

  function detectCommonMistakes(text) {
    var rows = task.commonMistakes || [];
    var out = [];
    var i;
    for (i = 0; i < rows.length; i++) {
      try {
        if (new RegExp(rows[i].pattern, rows[i].flags || "").test(text)) {
          out.push(rows[i].msg);
        }
      } catch (e) {}
    }
    return out;
  }

  function uniqueWordRatio(text) {
    var words = getWords(text).map(function (w) {
      return norm(w);
    });
    if (!words.length) return 0;
    var seen = {};
    var i;
    var c = 0;
    for (i = 0; i < words.length; i++) {
      if (!seen[words[i]]) {
        seen[words[i]] = true;
        c++;
      }
    }
    return c / words.length;
  }

  function countRepeatFlags(text) {
    var words = getWords(text).map(function (w) {
      return norm(w);
    });
    var seen = {};
    var flags = 0;
    var i;
    for (i = 0; i < words.length; i++) {
      if (words[i].length < 5) continue;
      seen[words[i]] = (seen[words[i]] || 0) + 1;
      if (seen[words[i]] === 5) flags++;
    }
    return flags;
  }

  function wordStatus(words) {
    var limits = task.wordLimits;
    if (words < limits.hardMin || words > limits.hardMax) return "critical";
    if (words < limits.targetMin) return "below";
    if (words > limits.targetMax) return "above";
    return "target";
  }

  function flattenUsefulPhrases() {
    var out = [];
    var groups = task.usefulPhrases || {};
    Object.keys(groups).forEach(function (key) {
      out = out.concat(groups[key] || []);
    });
    return out;
  }

  function greetingLine(text) {
    var lines = String(text || "")
      .split(/\n+/)
      .map(function (x) {
        return x.trim();
      })
      .filter(Boolean);
    return lines.length ? lines[0] : "";
  }

  function endingLine(text) {
    var lines = String(text || "")
      .split(/\n+/)
      .map(function (x) {
        return x.trim();
      })
      .filter(Boolean);
    return lines.length ? lines[lines.length - 1] : "";
  }

  function isGreetingLine(line) {
    return /^\s*(dear|hello|hi)\s*,?\s*mark\s*[!,]?\s*$/i.test(String(line || "").trim());
  }

  function greetingKind(line) {
    var src = String(line || "").trim();
    if (/^\s*dear\s*,?\s*mark\s*[!,]?\s*$/i.test(src)) return "dear";
    if (/^\s*(hello|hi)\s*,?\s*mark\s*[!,]?\s*$/i.test(src)) return "informal";
    return "missing";
  }

  function countAnsweredPromptQuestions(text) {
    var qs = task.promptQuestions || [];
    var covered = 0;
    var i;
    for (i = 0; i < qs.length; i++) {
      if (countPhraseHits(text, qs[i].keywords || []) > 0) covered++;
    }
    return covered;
  }

  function missingPromptQuestionLabels(text) {
    var qs = task.promptQuestions || [];
    var out = [];
    var i;
    for (i = 0; i < qs.length; i++) {
      if (countPhraseHits(text, qs[i].keywords || []) <= 0) {
        out.push(qs[i].label || ("Question " + String(i + 1)));
      }
    }
    return out;
  }

  function questionBackCount(text) {
    var src = String(text || "");
    var starters = (task.questionBackKeywords || [])
      .map(function (x) {
        return String(x || "").toLowerCase();
      })
      .filter(Boolean);
    if (starters.length) {
      var pattern = new RegExp(
        "(?:^|[\\s\\n\\r\\t\\\"'“”‘’(])(?:" + starters.join("|") + ")\\b[^?]*\\?",
        "gim"
      );
      var matches = src.match(pattern);
      if (matches && matches.length) return matches.length;
    }
    var fallback = src.match(/\?/g);
    return fallback ? fallback.length : 0;
  }

  function emailStructureStatus(text) {
    var blocks = task.requiredBlocks || {};
    var lines = String(text || "")
      .split(/\n+/)
      .map(function (x) {
        return x.trim();
      })
      .filter(Boolean);
    return {
      greeting: isGreetingLine(greetingLine(text)) || hasAny(greetingLine(text), blocks.greeting || []),
      thanks: hasAny(text, blocks.thanks || []),
      answers3: countAnsweredPromptQuestions(text) >= 3,
      questionBack3: questionBackCount(text) >= 3,
      closing: hasAny(text, blocks.closing || []),
      signoff: hasAny(endingLine(text), blocks.signoff || []) || lines.length >= 2
    };
  }

  function matchedReportFactIndex(text) {
    var facts = task.reportFactItems || [];
    var i;
    for (i = 0; i < facts.length; i++) {
      if (countPhraseHits(text, facts[i].keywords || []) >= 2 || hasAny(text, facts[i].keywords || [])) {
        return i;
      }
    }
    return -1;
  }

  function matchedReportFacts(text) {
    var facts = task.reportFactItems || [];
    var out = [];
    var i;
    for (i = 0; i < facts.length; i++) {
      if (countPhraseHits(text, facts[i].keywords || []) >= 2 || hasAny(text, facts[i].keywords || [])) {
        out.push(i);
      }
    }
    return out;
  }

  function missingReportFactLabels(text) {
    var facts = task.reportFactItems || [];
    var out = [];
    var i;
    for (i = 0; i < facts.length; i++) {
      if (!(countPhraseHits(text, facts[i].keywords || []) >= 2 || hasAny(text, facts[i].keywords || []))) {
        out.push(facts[i].label);
      }
    }
    return out;
  }

  function comparisonCount(text) {
    var src = norm(text);
    var rows = task.reportComparisonKeywords || [];
    var count = 0;
    var i;
    for (i = 0; i < rows.length; i++) {
      if (src.indexOf(norm(rows[i])) >= 0) count++;
    }
    return count;
  }

  function reportOpeningPresent(text) {
    var first = paragraphList(text)[0] || String(text || "");
    return hasAny(first, task.reportOpeningKeywords || []);
  }

  function reportProblemPresent(text) {
    return hasAny(text, task.reportProblemKeywords || []);
  }

  function reportSolutionPresent(text) {
    return hasAny(text, task.reportSolutionKeywords || []);
  }

  function reportOpinionPresent(text) {
    return hasAny(text, task.reportOpinionKeywords || []);
  }

  function reportConclusionPresent(text) {
    return hasAny(text, task.reportConclusionKeywords || []) || reportOpinionPresent(text);
  }

  function connectorCount(text) {
    return countPhraseHits(text, [
      "however",
      "moreover",
      "in addition",
      "besides",
      "overall",
      "to sum up",
      "in conclusion",
      "while",
      "whereas",
      "compared with"
    ]);
  }

  function reportStructureStatus(text) {
    return {
      opening: reportOpeningPresent(text),
      facts: matchedReportFacts(text).length >= 2,
      comparison: comparisonCount(text) >= 1,
      problem: reportProblemPresent(text),
      solution: task.reportNeedSolution ? reportSolutionPresent(text) : true,
      opinion: reportOpinionPresent(text),
      conclusion: reportConclusionPresent(text)
    };
  }

  function scoreEmailContent(metrics) {
    if (metrics.wordState === "critical") return 0;
    if (metrics.answeredPromptQuestions === 0) return 0;
    var score = 0;
    if (metrics.answeredPromptQuestions >= 2 || metrics.questionBacks >= 2) score = 1;
    if (metrics.answeredPromptQuestions >= 3 && metrics.questionBacks >= 3) score = 2;
    return score;
  }

  function scoreEmailOrganisation(metrics) {
    var score = 0;
    if (metrics.structure.greeting && metrics.structure.signoff) score++;
    if ((metrics.structure.thanks || metrics.structure.closing) && metrics.paragraphs >= 3) score++;
    if (score > 2) score = 2;
    return score;
  }

  function scoreEmailLanguage(metrics) {
    var score = 0;
    if (metrics.sentences >= 5 && metrics.commonMistakes.length <= 2 && metrics.lowercaseStarts === 0) score++;
    if (metrics.repeatedPunctuation === 0 && metrics.doubleSpaces === 0 && metrics.topicHits >= 3 && metrics.repeatFlags <= 1) score++;
    if (score > 2) score = 2;
    return score;
  }

  function scoreReportK1(metrics) {
    if (metrics.wordState === "critical") return 0;
    var score = 0;
    if (metrics.structure.opening) score++;
    if (metrics.factCount >= 2 && metrics.comparisonCount >= 1) score++;
    if (metrics.structure.problem && metrics.structure.solution && metrics.structure.opinion) score++;
    if (score > 3) score = 3;
    return score;
  }

  function scoreReportK2(metrics) {
    var score = 0;
    if (metrics.paragraphs === 5) score++;
    if (metrics.structure.conclusion && metrics.comparisonCount >= 1) score++;
    if (metrics.connectorCount >= 2) score++;
    if (score > 3) score = 3;
    return score;
  }

  function scoreReportK3(metrics) {
    var score = 0;
    if (metrics.topicHits >= 5) score++;
    if (metrics.uniqueRatio >= 0.45) score++;
    if (metrics.usefulPhraseHits >= 3 && metrics.repeatFlags <= 2) score++;
    if (score > 3) score = 3;
    return score;
  }

  function scoreReportK4(metrics) {
    var score = 0;
    if (metrics.sentences >= 8) score++;
    if (metrics.commonMistakes.length <= 2) score++;
    if (metrics.lowercaseStarts === 0) score++;
    if (score > 3) score = 3;
    return score;
  }

  function scoreReportK5(metrics) {
    var score = 0;
    if (metrics.repeatedPunctuation === 0) score++;
    if (metrics.doubleSpaces === 0 && metrics.lowercaseStarts === 0) score++;
    if (score > 2) score = 2;
    return score;
  }

  function analyseEmail(text) {
    var useful = flattenUsefulPhrases();
    var metrics = {
      words: wordCount(text),
      wordState: wordStatus(wordCount(text)),
      sentences: sentenceCount(text),
      paragraphs: paragraphList(text).length,
      topicHits: countPhraseHits(text, task.topicWords || []),
      usefulPhraseHits: countPhraseHits(text, useful),
      uniqueRatio: uniqueWordRatio(text),
      repeatedPunctuation: repeatedPunctuationCount(text),
      doubleSpaces: doubleSpacesCount(text),
      lowercaseStarts: lowercaseSentenceStarts(text),
      commonMistakes: detectCommonMistakes(text),
      structure: emailStructureStatus(text),
      greetingKind: greetingKind(greetingLine(text)),
      repeatFlags: countRepeatFlags(text),
      answeredPromptQuestions: countAnsweredPromptQuestions(text),
      missingPromptLabels: missingPromptQuestionLabels(text),
      questionBacks: questionBackCount(text)
    };
    metrics.rkz = scoreEmailContent(metrics);
    metrics.org = scoreEmailOrganisation(metrics);
    metrics.lang = scoreEmailLanguage(metrics);
    metrics.total = metrics.rkz + metrics.org + metrics.lang;
    return metrics;
  }

  function analyseReport(text) {
    var useful = flattenUsefulPhrases();
    var metrics = {
      words: wordCount(text),
      wordState: wordStatus(wordCount(text)),
      sentences: sentenceCount(text),
      paragraphs: paragraphList(text).length,
      topicHits: countPhraseHits(text, task.topicWords || []),
      usefulPhraseHits: countPhraseHits(text, useful),
      uniqueRatio: uniqueWordRatio(text),
      repeatedPunctuation: repeatedPunctuationCount(text),
      doubleSpaces: doubleSpacesCount(text),
      lowercaseStarts: lowercaseSentenceStarts(text),
      commonMistakes: detectCommonMistakes(text),
      structure: reportStructureStatus(text),
      repeatFlags: countRepeatFlags(text),
      factCount: matchedReportFacts(text).length,
      missingFactLabels: missingReportFactLabels(text),
      comparisonCount: comparisonCount(text),
      connectorCount: connectorCount(text)
    };
    metrics.k1 = scoreReportK1(metrics);
    metrics.k2 = scoreReportK2(metrics);
    metrics.k3 = scoreReportK3(metrics);
    metrics.k4 = scoreReportK4(metrics);
    metrics.k5 = scoreReportK5(metrics);
    metrics.total = metrics.k1 + metrics.k2 + metrics.k3 + metrics.k4 + metrics.k5;
    return metrics;
  }

  function analyse(text) {
    return task.mode === "report" ? analyseReport(text) : analyseEmail(text);
  }

  function renderUnitSwitch() {
    var select = byId("unitSelect");
    if (!select) return;
    select.innerHTML = "";
    unitLabels().forEach(function (label) {
      var opt = D.createElement("option");
      opt.value = label;
      opt.textContent = label;
      if (label === currentUnit) opt.selected = true;
      select.appendChild(opt);
    });
  }

  function renderTaskSwitch() {
    var host = byId("taskSwitch");
    if (!host) return;
    host.innerHTML = "";
    tasksForCurrentUnit().forEach(function (row) {
      var btn = D.createElement("button");
      btn.type = "button";
      btn.className = "ew-task-tab" + (task.id === row.id ? " is-active" : "");
      btn.textContent = row.switchLabel;
      btn.addEventListener("click", function () {
        var input = byId("essayInput");
        if (input) saveDraft(input.value || "");
        activateTask(row.id);
      });
      host.appendChild(btn);
    });
  }

  function renderEmailPromptCard() {
    return (
      '<div class="ew-exam-head">' +
      '<span class="ew-exam-num">37</span>' +
      '<div class="ew-exam-intro">' +
      escHtml(task.promptLead || "") +
      "</div></div>" +
      '<div class="ew-exam-mailbox">' +
      '<div class="ew-exam-row"><strong>From:</strong> ' +
      escHtml(task.promptMeta.from) +
      "</div>" +
      '<div class="ew-exam-row"><strong>To:</strong> ' +
      escHtml(task.promptMeta.to) +
      "</div>" +
      '<div class="ew-exam-row"><strong>Subject:</strong> ' +
      escHtml(task.promptMeta.subject) +
      "</div>" +
      '<div class="ew-exam-body">' +
      escHtml(task.promptRu).replace(/\n/g, "<br>") +
      "</div></div>" +
      '<div class="ew-exam-after"><ul class="ew-list">' +
      (task.instructions || [])
        .map(function (row) {
          return "<li>" + escHtml(row) + "</li>";
        })
        .join("") +
      "</ul><p class=\"ew-exam-wordrule\">" +
      "Целевой диапазон: " +
      task.wordLimits.targetMin +
      "-" +
      task.wordLimits.targetMax +
      " слов. Ниже " +
      task.wordLimits.hardMin +
      " или выше " +
      task.wordLimits.hardMax +
      " - формальный риск по ЕГЭ." +
      "</p></div>"
    );
  }

  function renderReportPromptCard() {
    var cardBody = "";
    if (task.promptTable) {
      var rows = (task.promptTable.rows || [])
        .map(function (row) {
          return "<tr><td>" + escHtml(row[0]) + "</td><td>" + escHtml(row[1]) + "</td></tr>";
        })
        .join("");
      cardBody =
        '<div class="ew-report-card">' +
        '<div class="ew-report-q">The survey question: <strong>' +
        escHtml(task.promptSurveyQuestion || "") +
        "</strong></div>" +
        '<table class="ew-report-table"><thead><tr><th>' +
        escHtml(task.promptTable.headers[0]) +
        "</th><th>" +
        escHtml(task.promptTable.headers[1]) +
        "</th></tr></thead><tbody>" +
        rows +
        "</tbody></table></div>";
    } else if (task.promptChart) {
      var palette = ["#f8fafc", "#dbeafe", "#bfdbfe", "#93c5fd", "#60a5fa"];
      var start = 0;
      var gradient = (task.promptChart || [])
        .map(function (row, idx) {
          var value = Number(row[1]) || 0;
          var stop = start + value;
          var chunk = palette[idx % palette.length] + " " + start + "% " + stop + "%";
          start = stop;
          return chunk;
        })
        .join(", ");
      var items = (task.promptChart || [])
        .map(function (row, idx) {
          return (
            '<li class="ew-pie-legend-item">' +
            '<span class="ew-pie-swatch" style="background:' + escHtml(palette[idx % palette.length]) + '"></span>' +
            '<span class="ew-pie-label">' + escHtml(row[0]) + "</span>" +
            '<strong class="ew-pie-pct">' + escHtml(row[1]) + "%</strong>" +
            "</li>"
          );
        })
        .join("");
      cardBody =
        '<div class="ew-report-card">' +
        '<div class="ew-report-q">The survey question: <strong>' +
        escHtml(task.promptSurveyQuestion || "") +
        "</strong></div>" +
        '<div class="ew-report-chart ew-report-chart--pie">' +
        '<div class="ew-pie-figure"><div class="ew-pie-chart" style="background:conic-gradient(' + escHtml(gradient) + ');"></div></div>' +
        '<ul class="ew-pie-legend">' + items + "</ul></div></div>";
    }
    return (
      '<div class="ew-exam-head">' +
      '<span class="ew-exam-num">' + escHtml(String(task.switchLabel || "38")) + "</span>" +
      '<div class="ew-exam-intro">' +
      escHtml(task.promptLead || "") +
      "</div></div>" +
      cardBody +
      '<div class="ew-exam-after"><ul class="ew-list">' +
      (task.instructions || [])
        .map(function (row) {
          return "<li>" + escHtml(row) + "</li>";
        })
        .join("") +
      "</ul><p class=\"ew-exam-wordrule\">" +
      "Целевой диапазон: " +
      task.wordLimits.targetMin +
      "-" +
      task.wordLimits.targetMax +
      " слов. Ниже " +
      task.wordLimits.hardMin +
      " или выше " +
      task.wordLimits.hardMax +
      " - формальный риск по ЕГЭ." +
      "</p></div>"
    );
  }

  function renderPromptCard() {
    var host = byId("taskPromptCard");
    if (!host) return;
    host.innerHTML = task.mode === "report" ? renderReportPromptCard() : renderEmailPromptCard();
  }

  function renderPrecheckList() {
    var host = byId("precheckList");
    if (!host) return;
    host.innerHTML = "";
    (task.precheckItems || []).forEach(function (row, idx) {
      var label = D.createElement("label");
      label.className = "ew-check";
      label.innerHTML =
        '<input type="checkbox" data-precheck="' +
        String(idx + 1) +
        '"> <span>' +
        escHtml(row).replace(/`([^`]+)`/g, "<code>$1</code>") +
        "</span>";
      host.appendChild(label);
    });
  }

  function renderDetectLegend() {
    var host = byId("detectLegend");
    if (!host) return;
    host.innerHTML = "";
    (task.detectLegend || []).forEach(function (row) {
      var span = D.createElement("span");
      span.className = "ew-mark ew-mark--" + row.role;
      span.textContent = row.label;
      host.appendChild(span);
    });
  }

  function renderTask() {
    byId("writingTitle").textContent = task.title;
    byId("writingType").textContent = task.typeLabel;
    byId("writingLead").textContent = task.lead || "";
    byId("writingFieldNote").textContent = task.fieldNote || "";
    byId("mainTaskLabel").textContent = "Задание";
    byId("structurePanelTitle").textContent = task.structurePanelTitle || "Структура";
    byId("inputPlaceholder").textContent = task.mode === "report"
      ? "Write your essay-project here."
      : "Write your email here.";
    if (byId("mainActionLabel")) byId("mainActionLabel").textContent = "Отправить на проверку";
    if (byId("maxScoreText")) byId("maxScoreText").textContent = String(maxScore());

    renderUnitSwitch();
    renderTaskSwitch();
    renderPromptCard();
    renderPrecheckList();
    renderDetectLegend();

    var checklist = byId("structureChecklist");
    checklist.innerHTML = "";
    (task.structureChecklist || []).forEach(function (row) {
      var li = D.createElement("li");
      li.textContent = row;
      checklist.appendChild(li);
    });

    var bank = byId("phraseBank");
    bank.innerHTML = "";
    Object.keys(task.usefulPhrases || {}).forEach(function (group) {
      var sec = D.createElement("section");
      sec.className = "ew-bank-group";
      var h = D.createElement("h3");
      h.textContent = group;
      sec.appendChild(h);
      var ul = D.createElement("ul");
      (task.usefulPhrases[group] || []).forEach(function (row) {
        var li = D.createElement("li");
        li.textContent = row;
        ul.appendChild(li);
      });
      sec.appendChild(ul);
      bank.appendChild(sec);
    });

    var criteria = byId("criteriaLegend");
    criteria.innerHTML = "";
    (task.criteria || []).forEach(function (row) {
      var li = D.createElement("li");
      li.innerHTML = "<strong>" + escHtml(row.label) + "</strong> · макс. " + row.max;
      criteria.appendChild(li);
    });

    var scoreGrid = byId("scoreGrid");
    scoreGrid.innerHTML = "";
    (task.criteria || []).forEach(function (row) {
      var card = D.createElement("div");
      card.className = "ew-score-card";
      card.innerHTML =
        "<strong>" + escHtml(row.label) + "</strong><div id=\"score_" + escHtml(row.id) + "\">0 / " + escHtml(String(row.max)) + "</div>";
      scoreGrid.appendChild(card);
    });

    if (byId("sampleText")) byId("sampleText").textContent = task.sampleEssay || "";
  }

  function renderHelpCard(cardId) {
    var cards = task.helpCards || [];
    var active = cards[0] || null;
    var i;
    for (i = 0; i < cards.length; i++) {
      if (cards[i].id === cardId) {
        active = cards[i];
        break;
      }
    }
    if (!active) return;
    byId("helpTitle").textContent = active.title || active.label || "Подсказка";
    var list = byId("helpList");
    list.innerHTML = "";
    (active.lines || []).forEach(function (row) {
      var li = D.createElement("li");
      li.textContent = row;
      list.appendChild(li);
    });
    Array.prototype.forEach.call(byId("helpTabs").querySelectorAll(".ew-help-tab"), function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-help-id") === active.id);
    });
  }

  function renderHelpTabs() {
    var host = byId("helpTabs");
    host.innerHTML = "";
    (task.helpCards || []).forEach(function (card) {
      var btn = D.createElement("button");
      btn.type = "button";
      btn.className = "ew-help-tab";
      btn.setAttribute("data-help-id", card.id);
      btn.textContent = card.label;
      btn.addEventListener("click", function () {
        renderHelpCard(card.id);
      });
      host.appendChild(btn);
    });
    if ((task.helpCards || []).length) renderHelpCard(task.helpCards[0].id);
  }

  function setWordBadge(words, status) {
    var badge = byId("wordCountBadge");
    badge.textContent = words + " words";
    badge.className = "ew-badge ew-badge--" + status;
  }

  function renderInlineReport(metrics) {
    var host = byId("inlineReport");
    var total = byId("inlineTotal");
    var summary = byId("inlineSummary");
    var findings = byId("inlineFindings");
    if (!host || !total || !summary || !findings) return;

    host.hidden = false;
    total.textContent = String(metrics.total) + " / " + String(maxScore());
    findings.innerHTML = "";

    if (task.mode === "report") {
      summary.textContent =
        metrics.total >= 10
          ? "Сильный черновик essay-project: основные части на месте."
          : metrics.total >= 6
            ? "База есть, но перед финальной сдачей стоит доработать несколько частей."
            : "Пока essay-project не добирает по ключевым частям задания.";
      [
        "K1: " + metrics.k1 + " / 3",
        "K2: " + metrics.k2 + " / 3",
        "K3: " + metrics.k3 + " / 3",
        "K4: " + metrics.k4 + " / 3",
        "K5: " + metrics.k5 + " / 2",
        "Фактов из таблицы распознано: " + metrics.factCount,
        "Сравнений распознано: " + metrics.comparisonCount,
        "Word count: " + metrics.words
      ].forEach(function (row) {
        var li = D.createElement("li");
        li.textContent = row;
        findings.appendChild(li);
      });
      if (!metrics.structure.opening) {
        var li1 = D.createElement("li");
        li1.textContent = "Добавь opening statement про тему проекта и survey.";
        findings.appendChild(li1);
      }
      if (metrics.factCount < 2) {
        var li2 = D.createElement("li");
        li2.textContent = "Пока распознано мало фактов из таблицы. Лучше явно дать 2-3 факта с цифрами.";
        findings.appendChild(li2);
      }
      if (metrics.comparisonCount < 1) {
        var li3 = D.createElement("li");
        li3.textContent = "Нужно добавить хотя бы одно comparison.";
        findings.appendChild(li3);
      }
      if (!metrics.structure.problem) {
        var li4 = D.createElement("li");
        li4.textContent = "Пока не распознана проблема по теме задания.";
        findings.appendChild(li4);
      }
      if (task.reportNeedSolution && !metrics.structure.solution) {
        var li4b = D.createElement("li");
        li4b.textContent = "Для этого задания нужен ещё и solution: как решить описанную проблему.";
        findings.appendChild(li4b);
      }
      if (!metrics.structure.opinion) {
        var li5 = D.createElement("li");
        li5.textContent = "В конце нужен ваш opinion с объяснением.";
        findings.appendChild(li5);
      }
      if (metrics.paragraphs !== 5) {
        var li6 = D.createElement("li");
        li6.textContent = "Для Task 38 безопаснее делать ровно 5 отдельных абзацев по пунктам плана.";
        findings.appendChild(li6);
      }
      return;
    }

    summary.textContent =
      metrics.total >= 5
        ? "Сильный черновик: основные требования задания выполнены."
        : metrics.total >= 3
          ? "База есть, но перед финальной сдачей стоит доработать несколько пунктов."
          : "Пока есть важные пропуски по критериям.";
    [
      "РКЗ: " + metrics.rkz + " / 2",
      "Организация: " + metrics.org + " / 2",
      "Языковое оформление: " + metrics.lang + " / 2"
    ].forEach(function (row) {
      var li = D.createElement("li");
      li.textContent = row;
      findings.appendChild(li);
    });
    if (!metrics.structure.greeting) {
      var liA = D.createElement("li");
      liA.textContent = "Добавь обращение в начале письма. Самый безопасный вариант для ЕГЭ: `Dear Mark,`.";
      findings.appendChild(liA);
    } else if (metrics.greetingKind !== "dear") {
      var liB = D.createElement("li");
      liB.textContent = "Обращение распознано, но для ЕГЭ лучше выбрать `Dear Mark,`.";
      findings.appendChild(liB);
    }
    if (metrics.answeredPromptQuestions < 3) {
      var liC = D.createElement("li");
      liC.textContent = "Пока распознано ответов Mark: " + metrics.answeredPromptQuestions + " из 3.";
      findings.appendChild(liC);
    }
    if (metrics.questionBacks < 3) {
      var liD = D.createElement("li");
      liD.textContent = "Ты задал(а) " + metrics.questionBacks + " question back; нужен(но) ещё " + (3 - metrics.questionBacks) + ".";
      findings.appendChild(liD);
    }
    var liE = D.createElement("li");
    liE.textContent =
      metrics.wordState === "target"
        ? "Word count в целевом диапазоне."
        : metrics.wordState === "below"
          ? "По объёму пока маловато: лучше добрать до диапазона 100-140 слов."
          : metrics.wordState === "above"
            ? "По объёму уже многовато: письмо стоит немного сократить."
            : "Объём выходит в рискованную зону для ЕГЭ.";
    findings.appendChild(liE);
  }

  function renderLiveChecklist(metrics) {
    var host = byId("structureStatus");
    host.innerHTML = "";
    var rows = [];
    if (task.mode === "report") {
      rows = [
        { label: "Opening statement", ok: metrics.structure.opening },
        { label: "2-3 facts from the table", ok: metrics.factCount >= 2 },
        { label: "At least 1 comparison", ok: metrics.comparisonCount >= 1 },
        { label: "Problem", ok: metrics.structure.problem },
        { label: "Solution", ok: metrics.structure.solution },
        { label: "Opinion / conclusion", ok: metrics.structure.opinion },
        { label: "Exactly 5 paragraphs", ok: metrics.paragraphs === 5 }
      ];
    } else {
      rows = [
        { label: "Обращение", ok: metrics.structure.greeting },
        { label: "Thanks / opening", ok: metrics.structure.thanks },
        { label: "Ответы на 3 вопроса", ok: metrics.answeredPromptQuestions >= 3 },
        { label: "3 questions back", ok: metrics.questionBacks >= 3 },
        { label: "Closing phrase", ok: metrics.structure.closing },
        { label: "Подпись", ok: metrics.structure.signoff },
        { label: "Абзацы (3+)", ok: metrics.paragraphs >= 3 }
      ];
    }
    rows.forEach(function (row) {
      var li = D.createElement("li");
      li.className = row.ok ? "ok" : "bad";
      li.textContent = (row.ok ? "OK: " : "Fix: ") + row.label;
      host.appendChild(li);
    });
  }

  function renderWarnings(metrics) {
    var warnings = byId("warningList");
    warnings.innerHTML = "";
    var rows = [];
    if (task.mode === "report") {
      if (!metrics.structure.opening) rows.push("Не распознан opening statement про тему проекта и survey.");
      if (metrics.factCount < 2) rows.push("Лучше добавить 2-3 явных факта из таблицы/диаграммы с цифрами.");
      if (metrics.missingFactLabels && metrics.missingFactLabels.length) {
        rows.push("Для фактов можно взять: " + metrics.missingFactLabels.slice(0, 3).join(" | "));
      }
      if (metrics.comparisonCount < 1) rows.push("Нужно сделать хотя бы одно comparison between the figures.");
      if (!metrics.structure.problem) rows.push("Не распознана проблема по теме задания.");
      if (task.reportNeedSolution && !metrics.structure.solution) rows.push("Не распознан solution to the problem.");
      if (!metrics.structure.opinion) rows.push("Не распознан финальный opinion paragraph.");
      if (metrics.paragraphs !== 5) rows.push("Для Task 38 лучше держать ровно 5 отдельных абзацев по официальному плану.");
    } else {
      if (metrics.questionBacks < 3) rows.push("Нужно задать 3 вопроса Mark о его school project.");
      if (metrics.answeredPromptQuestions < 3) rows.push("Не все 3 вопроса Mark раскрыты явно.");
      if (!metrics.structure.greeting) {
        rows.push("Нет корректного обращения. Самый безопасный вариант для ЕГЭ: `Dear Mark,`.");
      } else if (metrics.greetingKind !== "dear") {
        rows.push("Обращение есть, но для ЕГЭ лучше использовать `Dear Mark,`.");
      }
      if (!metrics.structure.signoff) rows.push("Проверьте завершающую подпись письма.");
    }
    if (metrics.repeatedPunctuation) rows.push("Есть повторяющаяся пунктуация (`!!`, `??`, `..`).");
    if (metrics.doubleSpaces) rows.push("Есть двойные пробелы.");
    if (metrics.lowercaseStarts) rows.push("Есть предложения, начинающиеся с маленькой буквы.");
    Array.prototype.push.apply(rows, metrics.commonMistakes || []);
    if (!rows.length) rows.push("Явных формальных предупреждений не найдено.");
    rows.forEach(function (row) {
      var li = D.createElement("li");
      li.textContent = row;
      warnings.appendChild(li);
    });
  }

  function appendMarkedSpan(host, text, role, label) {
    var span = D.createElement("span");
    span.className = role ? "ew-mark ew-mark--" + role : "";
    span.textContent = text;
    if (role && label) {
      span.appendChild(D.createTextNode(" "));
      var tag = D.createElement("span");
      tag.className = "ew-mark-tag ew-mark-tag--" + role;
      tag.textContent = label;
      span.appendChild(tag);
    }
    host.appendChild(span);
  }

  function renderEmailDetection(text) {
    var host = byId("detectPreview");
    var lines = String(text || "")
      .split(/\n/)
      .filter(function (line) {
        return String(line || "").trim();
      });
    var questionCounter = 0;
    lines.forEach(function (line, lineIndex) {
      var row = D.createElement("div");
      row.className = "ew-detect-line";
      var src = String(line || "").trim();
      if (isGreetingLine(src)) {
        appendMarkedSpan(row, src, "greeting", "Greeting");
        host.appendChild(row);
        return;
      }
      if (hasAny(src, task.requiredBlocks.signoff || []) || (lineIndex === lines.length - 1 && wordCount(src) <= 4 && !/\?$/.test(src))) {
        appendMarkedSpan(row, src, "signoff", "Sign-off");
        host.appendChild(row);
        return;
      }
      if (hasAny(src, task.requiredBlocks.closing || [])) {
        appendMarkedSpan(row, src, "closing", "Closing");
        host.appendChild(row);
        return;
      }
      var parts = String(line || "").match(/[^.!?]+[.!?]*/g) || [line];
      parts.forEach(function (part, idx) {
        var chunk = String(part || "").trim();
        var role = "";
        var label = "";
        if (/\?$/.test(chunk) && questionBackCount(chunk) > 0) {
          role = "question";
          questionCounter += 1;
          label = "Back " + String(questionCounter);
        } else if (hasAny(chunk, task.requiredBlocks.thanks || [])) {
          role = "opening";
          label = "Opening";
        } else if (hasAny(chunk, task.requiredBlocks.closing || [])) {
          role = "closing";
          label = "Closing";
        } else {
          var qIndex = -1;
          (task.promptQuestions || []).forEach(function (q, qIdx) {
            if (qIndex < 0 && countPhraseHits(chunk, q.keywords || []) > 0) qIndex = qIdx;
          });
          if (qIndex >= 0) {
            role = "answer";
            label = "Q" + String(qIndex + 1);
          }
        }
        appendMarkedSpan(row, chunk, role, label);
        if (idx < parts.length - 1) row.appendChild(D.createTextNode(" "));
      });
      host.appendChild(row);
    });
  }

  function renderReportDetection(text) {
    var host = byId("detectPreview");
    var parts = String(text || "")
      .split(/\n/)
      .filter(function (line) {
        return String(line || "").trim();
      });
    var factCounter = 0;
    parts.forEach(function (line) {
      var row = D.createElement("div");
      row.className = "ew-detect-line";
      var chunks = String(line || "").match(/[^.!?]+[.!?]*/g) || [line];
      chunks.forEach(function (part, idx) {
        var chunk = String(part || "").trim();
        var role = "";
        var label = "";
        if (reportOpeningPresent(chunk)) {
          role = "opening";
          label = "Intro";
        } else if (matchedReportFactIndex(chunk) >= 0) {
          role = "answer";
          factCounter += 1;
          label = "Fact " + String(factCounter);
        } else if (comparisonCount(chunk) > 0) {
          role = "question";
          label = "Compare";
        } else if (reportProblemPresent(chunk)) {
          role = "closing";
          label = "Problem";
        } else if (reportSolutionPresent(chunk)) {
          role = "solution";
          label = "Solution";
        } else if (reportOpinionPresent(chunk) || reportConclusionPresent(chunk)) {
          role = "signoff";
          label = "Opinion";
        }
        appendMarkedSpan(row, chunk, role, label);
        if (idx < chunks.length - 1) row.appendChild(D.createTextNode(" "));
      });
      host.appendChild(row);
    });
  }

  function renderDetectionPreview(text) {
    var box = byId("detectBox");
    var host = byId("detectPreview");
    if (!box || !host) return;
    if (!String(text || "").trim()) {
      box.hidden = true;
      host.innerHTML = "";
      return;
    }
    box.hidden = false;
    host.innerHTML = "";
    if (task.mode === "report") {
      renderReportDetection(text);
    } else {
      renderEmailDetection(text);
    }
  }

  function renderLocalReport(metrics) {
    byId("localTotal").textContent = String(metrics.total) + " / " + String(maxScore());
    byId("wcInline").textContent = String(metrics.words);
    setWordBadge(metrics.words, metrics.wordState);
    byId("wordStateText").textContent =
      metrics.wordState === "target"
        ? "Формально по объёму всё хорошо."
        : metrics.wordState === "below"
          ? "Ниже целевого диапазона: текст может выглядеть недораскрытым."
          : metrics.wordState === "above"
            ? "Выше целевого диапазона: текст стоит сократить."
            : "Критический риск по word count: работа может серьёзно потерять баллы.";

    (task.criteria || []).forEach(function (row) {
      var el = byId("score_" + row.id);
      if (el) el.textContent = String(metrics[row.id] || 0) + " / " + row.max;
    });

    renderLiveChecklist(metrics);
    renderWarnings(metrics);
    renderInlineReport(metrics);
    byId("localSummary").textContent =
      task.mode === "report"
        ? "Локальная оценка ориентирована на Task 38: K1-K5, структуру report, факты из таблицы и comparisons."
        : "Локальная оценка ориентирована на реальные критерии Task 37: РКЗ, организация текста и языковое оформление.";
  }

  function allPrechecksDone() {
    var boxes = D.querySelectorAll("#precheckList input[type='checkbox']");
    if (!boxes || !boxes.length) return true;
    var i;
    for (i = 0; i < boxes.length; i++) {
      if (!boxes[i].checked) return false;
    }
    return true;
  }

  function setPrecheckNote(kind, text) {
    var note = byId("precheckNote");
    note.className = "ew-precheck-note" + (kind ? " is-" + kind : "");
    note.textContent = text;
  }

  function syncMobileAccordions() {
    var isMobile = false;
    try {
      isMobile = !!(W.matchMedia && W.matchMedia("(max-width: 640px)").matches);
    } catch (e) {}
    var nodes = D.querySelectorAll(".ew-mobile-accordion");
    Array.prototype.forEach.call(nodes, function (node) {
      if (isMobile) {
        node.open = false;
      } else {
        node.open = true;
      }
    });
  }

  function openMobileAccordionsForResults(metrics) {
    var isMobile = false;
    try {
      isMobile = !!(W.matchMedia && W.matchMedia("(max-width: 640px)").matches);
    } catch (e) {}
    if (!isMobile) return;

    var structureHasIssues = false;
    if (task.mode === "report") {
      structureHasIssues =
        !metrics.structure.opening ||
        metrics.factCount < 2 ||
        metrics.comparisonCount < 1 ||
        !metrics.structure.problem ||
        !metrics.structure.solution ||
        !metrics.structure.opinion ||
        metrics.paragraphs !== 5;
    } else {
      structureHasIssues =
        !metrics.structure.greeting ||
        !metrics.structure.thanks ||
        metrics.answeredPromptQuestions < 3 ||
        metrics.questionBacks < 3 ||
        !metrics.structure.closing ||
        !metrics.structure.signoff ||
        metrics.paragraphs < 3;
    }

    var warningCount = byId("warningList") ? byId("warningList").children.length : 0;
    var lowScore = metrics.total < Math.ceil(maxScore() * 0.6);

    Array.prototype.forEach.call(D.querySelectorAll(".ew-mobile-accordion"), function (node) {
      var key = node.getAttribute("data-accordion-key") || "";
      if (key === "structure") {
        node.open = structureHasIssues;
      } else if (key === "warnings") {
        node.open = warningCount > 0;
      } else if (key === "criteria") {
        node.open = lowScore;
      } else {
        node.open = false;
      }
    });
  }

  function saveDraft(text) {
    try {
      localStorage.setItem(currentStorageKey(), text || "");
    } catch (e) {}
  }

  function loadDraft() {
    try {
      var saved = localStorage.getItem(currentStorageKey()) || "";
      if (String(saved).trim() === String(task.sampleEssay || "").trim()) return "";
      return saved;
    } catch (e) {
      return "";
    }
  }

  function buildAiPrompt(text, metrics) {
    return [
      "You are an EGE English writing examiner.",
      "Assess the student's " + task.typeLabel + " according to EGE criteria.",
      "",
      "Return ONLY valid JSON.",
      "",
      "Task prompt:",
      task.promptLead || "",
      task.promptRu || "",
      "",
      "Local checker metrics:",
      JSON.stringify(metrics, null, 2),
      "",
      "Scoring criteria:",
      (task.criteria || [])
        .map(function (row) {
          return "- " + row.label + " / " + row.max;
        })
        .join("\n"),
      "",
      "Expected JSON shape:",
      JSON.stringify(task.aiResponseSchema || {}, null, 2)
    ].join("\n");
  }

  W.__EGE_WRITING_BUILD_AI_PROMPT__ = function () {
    var input = byId("essayInput");
    var text = input ? input.value || "" : "";
    return buildAiPrompt(text, analyse(text));
  };

  function refreshLive() {
    var input = byId("essayInput");
    var text = input ? input.value || "" : "";
    byId("liveCount").textContent = String(wordCount(text));
    setWordBadge(wordCount(text), wordStatus(wordCount(text)));
    saveDraft(text);
    renderDetectionPreview(text);
    renderLiveChecklist(analyse(text));
  }

  function resetInlineState() {
    if (byId("inlineReport")) byId("inlineReport").hidden = true;
    var input = byId("essayInput");
    renderLocalReport(analyse(input ? input.value || "" : ""));
    setPrecheckNote("", "Отметьте чеклист и потом нажмите кнопку проверки.");
  }

  function activateTask(id) {
    setTaskById(id);
    renderTask();
    renderHelpTabs();
    var input = byId("essayInput");
    input.value = loadDraft();
    input.setAttribute("placeholder", byId("inputPlaceholder").textContent);
    refreshLive();
    resetInlineState();
  }

  function activateUnit(label) {
    currentUnit = label || "Unit 1";
    try {
      localStorage.setItem(UNIT_PREF_KEY, currentUnit);
    } catch (e) {}
    var unitTasks = tasksForCurrentUnit();
    if (!unitTasks.length) return;
    var preferredTaskId = loadPreferredTaskId();
    var preferredInUnit = unitTasks.some(function (row) {
      return row.id === preferredTaskId;
    });
    setTaskById(preferredInUnit ? preferredTaskId : unitTasks[0].id);
    renderTask();
    renderHelpTabs();
    var input = byId("essayInput");
    input.value = loadDraft();
    input.setAttribute("placeholder", byId("inputPlaceholder").textContent);
    refreshLive();
    resetInlineState();
  }

  function install() {
    var preferredTaskId = loadPreferredTaskId();
    setTaskById(preferredTaskId);
    currentUnit = loadPreferredUnit() || task.unitLabel || "Unit 1";
    if ((task.unitLabel || "Unit 1") !== currentUnit) {
      var unitTasks = tasksForCurrentUnit();
      if (unitTasks.length) setTaskById(unitTasks[0].id);
    }
    renderTask();
    renderHelpTabs();

    var input = byId("essayInput");
    input.value = loadDraft();
    input.setAttribute("placeholder", byId("inputPlaceholder").textContent);
    refreshLive();
    resetInlineState();

    input.addEventListener("input", refreshLive);
    syncMobileAccordions();
    if (W.matchMedia) {
      var mq = W.matchMedia("(max-width: 640px)");
      if (typeof mq.addEventListener === "function") {
        mq.addEventListener("change", syncMobileAccordions);
      } else if (typeof mq.addListener === "function") {
        mq.addListener(syncMobileAccordions);
      }
    }

    byId("insertSample").addEventListener("click", function () {
      var box = byId("sampleBox");
      box.hidden = false;
      if (typeof box.scrollIntoView === "function") {
        box.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });

    byId("hideSample").addEventListener("click", function () {
      byId("sampleBox").hidden = true;
    });

    byId("clearEssay").addEventListener("click", function () {
      input.value = "";
      refreshLive();
      resetInlineState();
    });

    byId("unitSelect").addEventListener("change", function (e) {
      var inputNow = byId("essayInput");
      if (inputNow) saveDraft(inputNow.value || "");
      activateUnit(e.target && e.target.value ? e.target.value : currentUnit);
    });

    byId("runLocalCheck").addEventListener("click", function () {
      if (!allPrechecksDone()) {
        setPrecheckNote("bad", "Сначала отметьте все пункты чеклиста перед проверкой.");
        var precheck = byId("precheckList");
        if (precheck && typeof precheck.scrollIntoView === "function") {
          precheck.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        return;
      }
      setPrecheckNote("ok", "Чеклист заполнен. Показываю проверку ниже.");
      var metrics = analyse(input.value || "");
      renderLocalReport(metrics);
      openMobileAccordionsForResults(metrics);
      var report = byId("inlineReport");
      if (report && typeof report.scrollIntoView === "function") {
        report.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }

  if (D.readyState === "loading") {
    D.addEventListener("DOMContentLoaded", install);
  } else {
    install();
  }
})(typeof window !== "undefined" ? window : this, document);
