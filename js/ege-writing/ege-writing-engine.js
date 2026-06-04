(function (W, D) {
  "use strict";

  var data = W.__EGE_WRITING_DATA__;
  if (!data || !data.task) return;

  var task = data.task;
  var storageKey = "ege_writing_draft_" + task.id;

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

  function getWords(text) {
    var m = String(text || "").match(/[A-Za-z0-9]+(?:['’-][A-Za-z0-9]+)*/g);
    return m || [];
  }

  function wordCount(text) {
    return getWords(text).length;
  }

  function sentenceCount(text) {
    return String(text || "")
      .split(/[.!?]+/)
      .map(function (x) {
        return x.trim();
      })
      .filter(Boolean).length;
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

  function repeatedPunctuationCount(text) {
    var m = String(text || "").match(/[!?.,;:]{2,}/g);
    return m ? m.length : 0;
  }

  function doubleSpacesCount(text) {
    var m = String(text || "").match(/ {2,}/g);
    return m ? m.length : 0;
  }

  function lowercaseSentenceStarts(text) {
    var parts = String(text || "")
      .split(/([.!?]+\s+)/)
      .join("")
      .split(/[.!?]+/);
    var count = 0;
    var i;
    for (i = 0; i < parts.length; i++) {
      var chunk = parts[i].trim();
      if (!chunk) continue;
      if (/^[a-z]/.test(chunk)) count++;
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

  function hasAny(text, arr) {
    var low = norm(text);
    var i;
    for (i = 0; i < arr.length; i++) {
      if (low.indexOf(norm(arr[i])) >= 0) return true;
    }
    return false;
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

  function greetingLine(text) {
    var lines = String(text || "")
      .split(/\n+/)
      .map(function (x) {
        return x.trim();
      })
      .filter(Boolean);
    return lines.length ? lines[0] : "";
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

  function endingLine(text) {
    var lines = String(text || "")
      .split(/\n+/)
      .map(function (x) {
        return x.trim();
      })
      .filter(Boolean);
    return lines.length ? lines[lines.length - 1] : "";
  }

  function structureStatus(text) {
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

  function scoreContent(metrics) {
    if (metrics.wordState === "critical") return 0;
    if (metrics.answeredPromptQuestions === 0) return 0;
    var score = 0;
    if (metrics.answeredPromptQuestions >= 2 || metrics.questionBacks >= 2) score = 1;
    if (metrics.answeredPromptQuestions >= 3 && metrics.questionBacks >= 3) score = 2;
    return score;
  }

  function scoreOrganisation(metrics) {
    var score = 0;
    if (metrics.structure.greeting && metrics.structure.signoff) score++;
    if ((metrics.structure.thanks || metrics.structure.closing) && metrics.paragraphs >= 3) score++;
    if (score > 2) score = 2;
    return score;
  }

  function scoreLanguage(metrics) {
    var score = 0;
    if (
      metrics.sentences >= 5 &&
      metrics.commonMistakes.length <= 2 &&
      metrics.lowercaseStarts === 0
    ) {
      score++;
    }
    if (
      metrics.repeatedPunctuation === 0 &&
      metrics.doubleSpaces === 0 &&
      metrics.topicHits >= 3 &&
      metrics.repeatFlags <= 1
    ) {
      score++;
    }
    if (score > 2) score = 2;
    return score;
  }

  function analyse(text) {
    var paragraphs = paragraphList(text);
    var structure = structureStatus(text);
    var useful = []
      .concat(task.usefulPhrases.opening || [])
      .concat(task.usefulPhrases.answers || [])
      .concat(task.usefulPhrases.questions || [])
      .concat(task.usefulPhrases.closing || []);
    var metrics = {
      words: wordCount(text),
      wordState: wordStatus(wordCount(text)),
      sentences: sentenceCount(text),
      paragraphs: paragraphs.length,
      topicHits: countPhraseHits(text, task.topicWords || []),
      usefulPhraseHits: countPhraseHits(text, useful),
      uniqueRatio: uniqueWordRatio(text),
      repeatedPunctuation: repeatedPunctuationCount(text),
      doubleSpaces: doubleSpacesCount(text),
      lowercaseStarts: lowercaseSentenceStarts(text),
      commonMistakes: detectCommonMistakes(text),
      structure: structure,
      greetingKind: greetingKind(greetingLine(text)),
      repeatFlags: countRepeatFlags(text),
      answeredPromptQuestions: countAnsweredPromptQuestions(text),
      missingPromptLabels: missingPromptQuestionLabels(text),
      questionBacks: questionBackCount(text)
    };

    metrics.rkz = scoreContent(metrics);
    metrics.org = scoreOrganisation(metrics);
    metrics.lang = scoreLanguage(metrics);
    metrics.total = metrics.rkz + metrics.org + metrics.lang;
    return metrics;
  }

  function renderTask() {
    byId("writingTitle").textContent = task.title;
    byId("writingType").textContent = task.typeLabel;
    byId("writingPromptLead").textContent = task.promptLead || "";
    byId("promptFrom").textContent = (task.promptMeta && task.promptMeta.from) || "";
    byId("promptTo").textContent = (task.promptMeta && task.promptMeta.to) || "";
    byId("promptSubject").textContent = (task.promptMeta && task.promptMeta.subject) || "";
    byId("writingPrompt").innerHTML = escHtml(task.promptRu).replace(/\n/g, "<br>");
    byId("writingLead").textContent = data.lead;
    byId("mainTaskLabel").textContent = "Задание";
    byId("structurePanelTitle").textContent = "Структура email";
    if (byId("mainActionLabel")) byId("mainActionLabel").textContent = "Отправить на проверку";
    if (byId("maxScoreText")) byId("maxScoreText").textContent = String(
      task.criteria.reduce(function (sum, row) {
        return sum + Number(row.max || 0);
      }, 0)
    );
    byId("inputPlaceholder").textContent = "Write your email here. Follow the email format and answer all 3 questions.";

    var instructions = byId("writingInstructions");
    instructions.innerHTML = "";
    task.instructions.forEach(function (row) {
      var li = D.createElement("li");
      li.textContent = row;
      instructions.appendChild(li);
    });

    byId("wordRule").textContent =
      "Целевой диапазон: " +
      task.wordLimits.targetMin +
      "-" +
      task.wordLimits.targetMax +
      " слов. Ниже " +
      task.wordLimits.hardMin +
      " или выше " +
      task.wordLimits.hardMax +
      " — формальный риск по ЕГЭ.";

    var checklist = byId("structureChecklist");
    checklist.innerHTML = "";
    task.structureChecklist.forEach(function (row) {
      var li = D.createElement("li");
      li.textContent = row;
      checklist.appendChild(li);
    });

    var bank = byId("phraseBank");
    bank.innerHTML = "";
    Object.keys(task.usefulPhrases).forEach(function (group) {
      var sec = D.createElement("section");
      sec.className = "ew-bank-group";
      var h = D.createElement("h3");
      h.textContent = group;
      sec.appendChild(h);
      var ul = D.createElement("ul");
      task.usefulPhrases[group].forEach(function (row) {
        var li = D.createElement("li");
        li.textContent = row;
        ul.appendChild(li);
      });
      sec.appendChild(ul);
      bank.appendChild(sec);
    });

    var criteria = byId("criteriaLegend");
    criteria.innerHTML = "";
    task.criteria.forEach(function (row) {
      var li = D.createElement("li");
      li.innerHTML = "<strong>" + escHtml(row.label) + "</strong> · макс. " + row.max;
      criteria.appendChild(li);
    });

    var scoreGrid = byId("scoreGrid");
    if (scoreGrid) {
      scoreGrid.innerHTML = "";
      task.criteria.forEach(function (row) {
        var card = D.createElement("div");
        card.className = "ew-score-card";
        card.innerHTML =
          "<strong>" +
          escHtml(row.label) +
          "</strong><div id=\"score_" +
          escHtml(row.id) +
          "\">0 / " +
          escHtml(String(row.max)) +
          "</div>";
        scoreGrid.appendChild(card);
      });
    }

    if (byId("sampleText")) {
      byId("sampleText").textContent = task.sampleEssay || "";
    }
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

    var title = byId("helpTitle");
    var list = byId("helpList");
    if (!title || !list) return;

    title.textContent = active.title || active.label || "Подсказка";
    list.innerHTML = "";
    (active.lines || []).forEach(function (row) {
      var li = D.createElement("li");
      li.textContent = row;
      list.appendChild(li);
    });

    var tabs = byId("helpTabs");
    if (!tabs) return;
    Array.prototype.forEach.call(tabs.querySelectorAll(".ew-help-tab"), function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-help-id") === active.id);
    });
  }

  function renderHelpTabs() {
    var host = byId("helpTabs");
    var cards = task.helpCards || [];
    if (!host) return;
    host.innerHTML = "";
    cards.forEach(function (card) {
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
    if (cards.length) renderHelpCard(cards[0].id);
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
    total.textContent = String(metrics.total) + " / " + String(
      task.criteria.reduce(function (sum, row) {
        return sum + Number(row.max || 0);
      }, 0)
    );

    summary.textContent =
      metrics.total >= 5
        ? "Сильный черновик: основные требования задания выполнены."
        : metrics.total >= 3
          ? "База есть, но перед финальной сдачей стоит доработать несколько пунктов."
          : "Пока есть важные пропуски по критериям. Ниже показано, что именно исправить.";

    findings.innerHTML = "";
    var rows = [
      "РКЗ: " + metrics.rkz + " / 2",
      "Организация: " + metrics.org + " / 2",
      "Языковое оформление: " + metrics.lang + " / 2"
    ];

    if (!metrics.structure.greeting) {
      rows.push("Добавь обращение в начале письма. Самый безопасный вариант для ЕГЭ: `Dear Mark,`.");
    } else if (metrics.greetingKind !== "dear") {
      rows.push("Обращение распознано, но для ЕГЭ лучше выбрать `Dear Mark,`.");
    }

    if (metrics.answeredPromptQuestions < 3) {
      rows.push(
        "Пока распознано ответов на вопросы Mark: " +
          metrics.answeredPromptQuestions +
          " из 3."
      );
      if (metrics.missingPromptLabels && metrics.missingPromptLabels.length) {
        rows.push("Ещё не распознано: " + metrics.missingPromptLabels.join(" | "));
      }
    } else {
      rows.push("Все 3 ответа Mark распознаны.");
    }

    if (metrics.questionBacks < 3) {
      rows.push(
        "Ты задал(а) " +
          metrics.questionBacks +
          " question back; нужен(но) ещё " +
          (3 - metrics.questionBacks) +
          "."
      );
    } else {
      rows.push("Три questions back распознаны.");
    }

    if (metrics.wordState === "below") {
      rows.push("По объёму пока маловато: лучше добрать до диапазона 100-140 слов.");
    } else if (metrics.wordState === "above") {
      rows.push("По объёму уже многовато: письмо стоит немного сократить.");
    } else if (metrics.wordState === "critical") {
      rows.push("Объём выходит в рискованную зону для ЕГЭ.");
    } else {
      rows.push("Word count в целевом диапазоне.");
    }

    if (!metrics.structure.signoff) {
      rows.push("Добавь финальную подпись, например `Best wishes,` и строку с именем.");
    }

    rows.forEach(function (row) {
      var li = D.createElement("li");
      li.textContent = row;
      findings.appendChild(li);
    });
  }

  function renderLiveChecklist(metrics) {
    var structure = byId("structureStatus");
    if (!structure) return;
    structure.innerHTML = "";
    [
      { label: "Обращение", ok: metrics.structure.greeting },
      { label: "Thanks / opening", ok: metrics.structure.thanks },
      { label: "Ответы на 3 вопроса", ok: metrics.answeredPromptQuestions >= 3 },
      { label: "3 questions back", ok: metrics.questionBacks >= 3 },
      { label: "Closing phrase", ok: metrics.structure.closing },
      { label: "Подпись", ok: metrics.structure.signoff },
      { label: "Абзацы (3+)", ok: metrics.paragraphs >= 3 }
    ].forEach(function (row) {
      var li = D.createElement("li");
      li.className = row.ok ? "ok" : "bad";
      li.textContent = (row.ok ? "OK: " : "Fix: ") + row.label;
      structure.appendChild(li);
    });
  }

  function renderWarnings(metrics) {
    var warnings = byId("warningList");
    if (!warnings) return;
    warnings.innerHTML = "";
    var warnRows = [];
    if (metrics.questionBacks < 3) warnRows.push("Нужно задать 3 вопроса Mark о его school project.");
    if (metrics.answeredPromptQuestions < 3) warnRows.push("Не все 3 вопроса Mark раскрыты явно.");
    if (!metrics.structure.greeting) {
      warnRows.push("Нет корректного обращения. Самый безопасный вариант для ЕГЭ: `Dear Mark,`.");
    } else if (metrics.greetingKind !== "dear") {
      warnRows.push("Обращение есть, но для ЕГЭ лучше использовать `Dear Mark,`.");
    }
    if (!metrics.structure.signoff) warnRows.push("Проверьте завершающую подпись письма.");
    if (metrics.repeatedPunctuation) warnRows.push("Есть повторяющаяся пунктуация (`!!`, `??`, `..`).");
    if (metrics.doubleSpaces) warnRows.push("Есть двойные пробелы.");
    if (metrics.lowercaseStarts) warnRows.push("Есть предложения, начинающиеся с маленькой буквы.");
    Array.prototype.push.apply(warnRows, metrics.commonMistakes);
    if (!warnRows.length) warnRows.push("Явных формальных предупреждений не найдено.");
    warnRows.forEach(function (row) {
      var li = D.createElement("li");
      li.textContent = row;
      warnings.appendChild(li);
    });
  }

  function answerRoleForChunk(chunk) {
    var qs = task.promptQuestions || [];
    var i;
    for (i = 0; i < qs.length; i++) {
      if (countPhraseHits(chunk, qs[i].keywords || []) > 0) return "answer";
    }
    return "";
  }

  function matchedPromptQuestionIndex(chunk) {
    var qs = task.promptQuestions || [];
    var i;
    for (i = 0; i < qs.length; i++) {
      if (countPhraseHits(chunk, qs[i].keywords || []) > 0) return i;
    }
    return -1;
  }

  function lineRole(line, lineIndex, totalLines) {
    var src = String(line || "").trim();
    if (!src) return "";
    if (isGreetingLine(src)) return "greeting";
    if (hasAny(src, task.requiredBlocks.signoff || [])) return "signoff";
    if (lineIndex === totalLines - 1 && wordCount(src) <= 4 && !/\?$/.test(src)) return "signoff";
    if (hasAny(src, task.requiredBlocks.closing || [])) return "closing";
    return "";
  }

  function chunkRole(chunk) {
    var src = String(chunk || "").trim();
    if (!src) return "";
    if (/\?$/.test(src) && questionBackCount(src) > 0) return "question";
    if (hasAny(src, task.requiredBlocks.thanks || [])) return "opening";
    if (hasAny(src, task.requiredBlocks.closing || [])) return "closing";
    return answerRoleForChunk(src);
  }

  function appendMarkedSpan(host, text, role, label) {
    var span = D.createElement("span");
    span.className = role ? "ew-mark ew-mark--" + role : "";
    span.textContent = text;
    if (label && role) {
      var tag = D.createElement("span");
      tag.className = "ew-mark-tag ew-mark-tag--" + role;
      tag.textContent = label;
      span.appendChild(D.createTextNode(" "));
      span.appendChild(tag);
    }
    host.appendChild(span);
  }

  function renderDetectionPreview(text) {
    var box = byId("detectBox");
    var host = byId("detectPreview");
    if (!box || !host) return;
    var src = String(text || "");
    if (!src.trim()) {
      box.hidden = true;
      host.innerHTML = "";
      return;
    }

    box.hidden = false;
    host.innerHTML = "";

    var lines = src.split(/\n/);
    var nonEmpty = lines.filter(function (line) {
      return String(line || "").trim();
    });
    var seenAnswers = {};
    var questionCounter = 0;

    nonEmpty.forEach(function (line, lineIndex) {
      var row = D.createElement("div");
      row.className = "ew-detect-line";

      var role = lineRole(line, lineIndex, nonEmpty.length);
      if (role) {
        var lineLabel =
          role === "greeting"
            ? "Greeting"
            : role === "closing"
              ? "Closing"
              : role === "signoff"
                ? "Sign-off"
                : "";
        appendMarkedSpan(row, line, role, lineLabel);
        host.appendChild(row);
        return;
      }

      var parts = String(line || "").match(/[^.!?]+[.!?]*/g) || [line];
      parts.forEach(function (part, idx) {
        var chunk = String(part || "");
        var chunkClass = chunkRole(chunk);
        var tagLabel = "";
        if (chunkClass === "answer") {
          var answerIdx = matchedPromptQuestionIndex(chunk);
          if (answerIdx >= 0) {
            tagLabel = "Q" + String(answerIdx + 1);
            seenAnswers[answerIdx] = true;
          }
        } else if (chunkClass === "question") {
          questionCounter += 1;
          tagLabel = "Back " + String(questionCounter);
        } else if (chunkClass === "opening") {
          tagLabel = "Opening";
        } else if (chunkClass === "closing") {
          tagLabel = "Closing";
        }
        appendMarkedSpan(row, chunk.trim(), chunkClass, tagLabel);
        if (idx < parts.length - 1) {
          row.appendChild(D.createTextNode(" "));
        }
      });
      host.appendChild(row);
    });
  }

  function renderLocalReport(metrics) {
    var maxTotal = task.criteria.reduce(function (sum, row) {
      return sum + Number(row.max || 0);
    }, 0);
    byId("localTotal").textContent = String(metrics.total) + " / " + String(maxTotal);
    byId("wcInline").textContent = String(metrics.words);
    setWordBadge(metrics.words, metrics.wordState);
    byId("wordStateText").textContent =
      metrics.wordState === "target"
        ? "Формально по объёму всё хорошо."
        : metrics.wordState === "below"
          ? "Ниже целевого диапазона: письмо может выглядеть недораскрытым."
          : metrics.wordState === "above"
            ? "Выше целевого диапазона: письмо стоит сократить."
            : "Критический риск по word count: письмо может серьёзно потерять баллы.";

    task.criteria.forEach(function (row) {
      var el = byId("score_" + row.id);
      if (el) el.textContent = String(metrics[row.id] || 0) + " / " + row.max;
    });

    renderLiveChecklist(metrics);
    renderWarnings(metrics);
    renderInlineReport(metrics);

    byId("localSummary").textContent =
      "Локальная оценка ориентирована на реальные критерии Task 37: РКЗ, организация текста и языковое оформление.";
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
    if (!note) return;
    note.className = "ew-precheck-note" + (kind ? " is-" + kind : "");
    note.textContent = text;
  }

  function buildAiPrompt(text, metrics) {
    var schema = JSON.stringify(task.aiResponseSchema, null, 2);
    return [
      "You are an EGE English writing examiner.",
      "Assess the student's personal email (Task 37) strictly according to EGE criteria.",
      "",
      "Return ONLY valid JSON.",
      "",
      "Task prompt:",
      task.promptRu,
      "",
      "Formal limits:",
      "Target words: " + task.wordLimits.targetMin + "-" + task.wordLimits.targetMax,
      "Critical limits: below " + task.wordLimits.hardMin + " or above " + task.wordLimits.hardMax,
      "",
      "Local checker metrics:",
      JSON.stringify(
        {
          words: metrics.words,
          wordState: metrics.wordState,
          paragraphs: metrics.paragraphs,
          answeredPromptQuestions: metrics.answeredPromptQuestions,
          questionBacks: metrics.questionBacks,
          structure: metrics.structure,
          warnings: metrics.commonMistakes,
          localScore: {
            RKZ: metrics.rkz,
            Organization: metrics.org,
            Language: metrics.lang,
            total: metrics.total
          }
        },
        null,
        2
      ),
      "",
      "Student email:",
      text,
      "",
      "Scoring criteria:",
      "- RKZ: communicative task: answer 3 questions and ask 3 questions back",
      "- Organization: email format, logic, paragraphs, greeting and signoff",
      "- Language: vocabulary, grammar, spelling and punctuation",
      "",
      "Requirements:",
      "- first check formal compliance",
      "- explicitly say whether all 3 prompt questions were answered",
      "- explicitly count questions asked back to Mark",
      "- then score each criterion separately",
      "- point out major grammar, vocabulary, cohesion, and mechanics issues",
      "- give 3-5 targeted fixes",
      "- include a few sample sentence improvements, but do not rewrite the full email",
      "",
      "Return JSON with this exact shape:",
      schema
    ].join("\n");
  }

  function cleanJson(text) {
    var raw = String(text || "").trim();
    raw = raw.replace(/^```json\s*/i, "").replace(/^```\s*/i, "").replace(/\s*```$/, "");
    return raw.trim();
  }

  function renderAiResult(obj) {
    var host = byId("aiResult");
    host.innerHTML = "";

    var total = D.createElement("div");
    total.className = "ew-ai-total";
    total.textContent = "AI total: " + (obj.total != null ? obj.total : "—");
    host.appendChild(total);

    var criteria = D.createElement("div");
    criteria.className = "ew-ai-grid";
    ["K1", "K2", "K3", "K4", "K5"].forEach(function (key) {
      var row = obj.criteria && obj.criteria[key] ? obj.criteria[key] : null;
      if (!row) return;
      var card = D.createElement("section");
      card.className = "ew-ai-card";
      card.innerHTML =
        "<h4>" +
        key +
        ": " +
        escHtml(String(row.score)) +
        " / " +
        escHtml(String(row.max)) +
        "</h4><p>" +
        escHtml(row.comment || "") +
        "</p>";
      criteria.appendChild(card);
    });
    host.appendChild(criteria);

    function appendList(title, rows) {
      if (!rows || !rows.length) return;
      var sec = D.createElement("section");
      sec.className = "ew-ai-list";
      var h = D.createElement("h4");
      h.textContent = title;
      sec.appendChild(h);
      var ul = D.createElement("ul");
      rows.forEach(function (row) {
        var li = D.createElement("li");
        li.textContent = row;
        ul.appendChild(li);
      });
      sec.appendChild(ul);
      host.appendChild(sec);
    }

    appendList("Strengths", obj.strengths);
    appendList("Major issues", obj.majorIssues);
    appendList("Grammar issues", obj.grammarIssues);
    appendList("Vocabulary issues", obj.vocabularyIssues);
    appendList("Cohesion issues", obj.cohesionIssues);
    appendList("Targeted fixes", obj.targetedFixes);
    appendList("Sample improvements", obj.sampleImprovements);
  }

  function saveDraft(text) {
    try {
      localStorage.setItem(storageKey, text || "");
    } catch (e) {}
  }

  function loadDraft() {
    try {
      var saved = localStorage.getItem(storageKey) || "";
      if (String(saved).trim() === String(task.sampleEssay || "").trim()) return "";
      return saved;
    } catch (e) {
      return "";
    }
  }

  function refreshLive() {
    var text = byId("essayInput").value || "";
    var words = wordCount(text);
    byId("liveCount").textContent = String(words);
    setWordBadge(words, wordStatus(words));
    saveDraft(text);
    renderDetectionPreview(text);
    renderLiveChecklist(analyse(text));
  }

  function install() {
    renderTask();
    renderHelpTabs();

    var input = byId("essayInput");

    input.value = loadDraft();
    input.setAttribute("placeholder", byId("inputPlaceholder").textContent);
    refreshLive();
    renderLocalReport(analyse(""));
    setPrecheckNote("", "Отметьте чеклист и потом нажмите кнопку проверки.");

    input.addEventListener("input", refreshLive);

    byId("insertSample").addEventListener("click", function () {
      var box = byId("sampleBox");
      if (!box) return;
      box.hidden = false;
      if (typeof box.scrollIntoView === "function") {
        box.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });

    byId("hideSample").addEventListener("click", function () {
      var box = byId("sampleBox");
      if (!box) return;
      box.hidden = true;
    });

    byId("clearEssay").addEventListener("click", function () {
      input.value = "";
      refreshLive();
      renderLocalReport(analyse(""));
      if (byId("inlineReport")) byId("inlineReport").hidden = true;
      setPrecheckNote("", "Отметьте чеклист и потом нажмите кнопку проверки.");
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
      renderLocalReport(analyse(input.value || ""));
      var report = byId("inlineReport");
      if (report && typeof report.scrollIntoView === "function") {
        report.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });

    if (byId("inlineReport")) byId("inlineReport").hidden = true;
  }

  if (D.readyState === "loading") {
    D.addEventListener("DOMContentLoaded", install);
  } else {
    install();
  }
})(typeof window !== "undefined" ? window : this, document);
