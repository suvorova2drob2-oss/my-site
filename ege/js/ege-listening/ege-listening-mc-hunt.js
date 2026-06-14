/**
 * ЕГЭ Listening · MC — этап 2: разбор по вопросам 3–9 (опора + дистракторы).
 * window.__EGE_LISTENING_MC_HUNT__
 */
(function (w) {
  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function escAttr(s) {
    return esc(s);
  }

  function speakerSlug(name) {
    return (
      String(name || "")
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "") || "spk"
    );
  }

  function hitsFromLab(lab, sol) {
    var out = [];
    var segs = lab.segments || [];
    var i;
    for (i = 0; i < segs.length; i++) {
      if (segs[i].kind !== "hit") continue;
      var isD = segs[i].sol === "d";
      if (isD && !segs[i].distractExplainRu) continue;
      var s = isD ? "d" : "e";
      if (sol && s !== sol) continue;
      out.push(segs[i]);
    }
    return out;
  }

  function explainedDistractors(lab) {
    var out = [];
    var segs = (lab && lab.segments) || [];
    var i;
    for (i = 0; i < segs.length; i++) {
      if (segs[i].kind === "hit" && segs[i].sol === "d" && segs[i].distractExplainRu) {
        out.push(segs[i]);
      }
    }
    return out;
  }

  function textWithHits(raw, hits, wrongLabels) {
    if (!raw) return "";
    var applied = [];
    var hi;
    for (hi = 0; hi < hits.length; hi++) {
      var needle = hits[hi].text || "";
      if (!needle || raw.indexOf(needle) < 0 || applied.indexOf(needle) >= 0) continue;
      applied.push(needle);
    }
    if (!applied.length) return esc(raw);
    applied.sort(function (a, b) {
      return b.length - a.length;
    });
    var parts = [{ text: raw, hit: null, sol: null }];
    applied.forEach(function (needle) {
      var hitObj = null;
      var hj;
      for (hj = 0; hj < hits.length; hj++) {
        if ((hits[hj].text || "") === needle) {
          hitObj = hits[hj];
          break;
        }
      }
      var sol = hitObj && hitObj.sol === "d" ? "distractor" : "evidence";
      var next = [];
      parts.forEach(function (part) {
        if (part.hit || part.text.indexOf(needle) < 0) {
          next.push(part);
          return;
        }
        var idx = part.text.indexOf(needle);
        if (idx > 0) next.push({ text: part.text.slice(0, idx), hit: null, sol: null });
        next.push({
          text: needle,
          hit: needle,
          sol: sol,
          distractExplain: hitObj && hitObj.distractExplainRu ? hitObj.distractExplainRu : "",
          wrongOption: hitObj && hitObj.wrongOption ? hitObj.wrongOption : null
        });
        if (idx + needle.length < part.text.length) {
          next.push({ text: part.text.slice(idx + needle.length), hit: null, sol: null });
        }
      });
      parts = next;
    });
    var html = "";
    var pi;
    for (pi = 0; pi < parts.length; pi++) {
      if (parts[pi].hit) {
        var exAttr = parts[pi].distractExplain
          ? ' data-distract-explain="' + escAttr(parts[pi].distractExplain) + '"'
          : "";
        var woAttr = parts[pi].wrongOption
          ? ' data-wrong-option="' + escAttr(String(parts[pi].wrongOption)) + '"'
          : "";
        var wrongLabel =
          parts[pi].wrongOption && wrongLabels
            ? wrongLabels[parts[pi].wrongOption] || ""
            : "";
        var wlAttr = wrongLabel
          ? ' data-wrong-label="' + escAttr(wrongLabel) + '"'
          : "";
        var tagHtml =
          parts[pi].sol === "distractor" && parts[pi].wrongOption
            ? '<span class="lmc-hit-wrong-tag" title="Не ответ ' +
              escAttr(String(parts[pi].wrongOption)) +
              '">≠ ' +
              esc(String(parts[pi].wrongOption)) +
              "</span>"
            : "";
        html +=
          '<span class="lies-hit lmc-hit" data-sol="' +
          parts[pi].sol +
          '" data-phrase="' +
          escAttr(parts[pi].text) +
          '"' +
          exAttr +
          woAttr +
          wlAttr +
          ' tabindex="0" role="button">' +
          esc(parts[pi].text) +
          tagHtml +
          "</span>";
      } else {
        html += esc(parts[pi].text);
      }
    }
    return html;
  }

  function renderDialogueParagraph(para, lab, wrongLabels) {
    var hits = hitsFromLab(lab);
    var html = '<div class="ege-lmc-dialogue-passage">';
    (para.turns || []).forEach(function (turn) {
      var slug = speakerSlug(turn.speaker);
      html +=
        '<div class="ege-lmc-dialogue-line ege-lmc-dialogue-line--' + slug + '">';
      html +=
        '<span class="ege-lmc-dialogue-name">' + esc(turn.speaker) + "</span>";
      html +=
        '<div class="ege-lmc-dialogue-bubble">' +
        textWithHits(turn.text, hits, wrongLabels) +
        "</div></div>";
    });
    html += "</div>";
    return html;
  }

  function mount(opts) {
    if (!opts || !opts.labs || !opts.labs.length) return;
    var prefix = opts.prefix || "ege-lmc";
    var labs = opts.labs;
    var dialogueParagraphs = opts.dialogueParagraphs || [];
    var tabIx = 0;
    var brush = "green";

    var host = document.getElementById(opts.passageId || prefix + "-hunt-passage");
    var elFb = document.getElementById(opts.fbId || prefix + "-hunt-fb");
    var elTarget = document.getElementById(opts.targetId || prefix + "-hunt-target");
    var elPrompt = document.getElementById(opts.promptId || prefix + "-hunt-prompt");
    var btnVerify = document.getElementById(opts.verifyId || prefix + "-hunt-verify");
    var btnReset = document.getElementById(opts.resetId || prefix + "-hunt-reset");
    var tabs = document.querySelectorAll("." + prefix + "-hunt-tab");
    var brushBtns = document.querySelectorAll("." + prefix + "-hunt-brush");

    if (!host) return;

    function currentLab() {
      return labs[tabIx] || labs[0];
    }

    function questionFor(examNum) {
      var list = opts.questions || [];
      var i;
      for (i = 0; i < list.length; i++) {
        if (String(list[i].examNum) === String(examNum)) return list[i];
      }
      return null;
    }

    function choiceText(q, num) {
      if (!q || !q.choices) return "";
      var i;
      for (i = 0; i < q.choices.length; i++) {
        if (q.choices[i].num === num) return q.choices[i].text;
      }
      return "";
    }

    function choiceLabel(q, num) {
      return String(num) + ") " + choiceText(q, num);
    }

    function evidencePhrases(lab) {
      var out = [];
      var segs = lab.segments || [];
      var i;
      for (i = 0; i < segs.length; i++) {
        if (segs[i].kind === "hit" && segs[i].sol !== "d" && segs[i].text) {
          out.push(segs[i].text);
        }
      }
      return out;
    }

    function paraphraseHint(lab) {
      if (lab.paraphraseEn) return lab.paraphraseEn;
      var phrases = evidencePhrases(lab);
      return phrases.length ? phrases[0] : lab.keyLineRu || "";
    }

    function wrongChoiceLabels(q) {
      var map = {};
      if (!q || !q.choices) return map;
      var i;
      for (i = 0; i < q.choices.length; i++) {
        map[q.choices[i].num] = choiceLabel(q, q.choices[i].num);
      }
      return map;
    }

    function trapForWrongOption(lab, num) {
      var traps = explainedDistractors(lab);
      var i;
      for (i = 0; i < traps.length; i++) {
        if (traps[i].wrongOption === num) return traps[i];
      }
      return null;
    }

    function buildWrongChoicesHtml(q, lab) {
      if (!q || !q.choices || !q.choices.length) return "";
      var html = '<div class="' + prefix + '-hunt-wrongs-wrap">';
      html +=
        '<span class="' +
        prefix +
        '-hunt-wrongs-lab">Неправильные · можно подумать, что…</span>';
      var ci;
      for (ci = 0; ci < q.choices.length; ci++) {
        var c = q.choices[ci];
        if (c.num === lab.key) continue;
        var trap = trapForWrongOption(lab, c.num);
        var why = trap
          ? trap.distractExplainRu
          : q.distractorWrongRu && q.distractorWrongRu[c.num]
            ? q.distractorWrongRu[c.num]
            : "";
        if (!why && !trap) continue;
        html +=
          '<div class="' +
          prefix +
          "-hunt-wrong-block" +
          (trap ? " is-text-trap" : "") +
          '">';
        html +=
          '<p class="' +
          prefix +
          '-hunt-wrong-head"><span class="' +
          prefix +
          '-hunt-wrong-kicker">Можно подумать:</span> <strong class="' +
          prefix +
          '-hunt-wrong-ans">' +
          esc(choiceLabel(q, c.num)) +
          "</strong></p>";
        if (trap) {
          html +=
            '<p class="' +
            prefix +
            '-hunt-wrong-but"><span class="' +
            prefix +
            '-hunt-wrong-but-kicker">В записи:</span> <em class="' +
            prefix +
            '-hunt-wrong-phrase">«' +
            esc(trap.text) +
            "»</em></p>";
          html +=
            '<p class="' +
            prefix +
            '-hunt-wrong-why"><span class="' +
            prefix +
            '-hunt-wrong-why-kicker">Но это другое:</span> ' +
            esc(why) +
            "</p>";
          html +=
            '<p class="' +
            prefix +
            '-hunt-wrong-mark">→ красной кистью отметь «' +
            esc(trap.text) +
            "» справа</p>";
        } else {
          html +=
            '<p class="' +
            prefix +
            '-hunt-wrong-why"><span class="' +
            prefix +
            '-hunt-wrong-why-kicker">Но:</span> ' +
            esc(why) +
            "</p>";
        }
        html += "</div>";
      }
      html += "</div>";
      return html;
    }

    function distractorFeedbackHtml(lab) {
      var traps = explainedDistractors(lab);
      var q = questionFor(lab.examNum);
      if (!traps.length && (!q || !q.choices)) return "";
      var html = '<div class="' + prefix + '-hunt-fb-traps">';
      html += "<p><strong>Неправильные — почему не они:</strong></p><ul>";
      var ci;
      if (q && q.choices) {
        for (ci = 0; ci < q.choices.length; ci++) {
          var c = q.choices[ci];
          if (c.num === lab.key) continue;
          var trap = trapForWrongOption(lab, c.num);
          var why = trap
            ? trap.distractExplainRu
            : q.distractorWrongRu && q.distractorWrongRu[c.num]
              ? q.distractorWrongRu[c.num]
              : "";
          if (!why) continue;
          html += "<li><strong>" + esc(choiceLabel(q, c.num)) + "</strong>";
          if (trap) {
            html +=
              " · в записи «" +
              esc(trap.text) +
              "» — <em>но это другое:</em> " +
              esc(why);
          } else {
            html += " — " + esc(why);
          }
          html += "</li>";
        }
      }
      html += "</ul></div>";
      return html;
    }

    function hits() {
      return host.querySelectorAll(".lies-hit");
    }

    function evidenceHits() {
      return host.querySelectorAll('.lies-hit[data-sol="evidence"]');
    }

    function distractorHits() {
      return host.querySelectorAll('.lies-hit[data-sol="distractor"]');
    }

    function renderPassage() {
      var lab = currentLab();
      var q = questionFor(lab.examNum);
      var labels = wrongChoiceLabels(q);
      if (dialogueParagraphs.length && lab.paragraphIndex != null) {
        var para = dialogueParagraphs[lab.paragraphIndex];
        if (para) {
          host.innerHTML = renderDialogueParagraph(para, lab, labels);
          return;
        }
      }
      host.innerHTML = "";
    }

    function renderTarget() {
      if (!elTarget) return;
      var lab = currentLab();
      var q = questionFor(lab.examNum);
      var prompt = q ? q.prompt : "";
      var keyTxt = q ? choiceLabel(q, lab.key) : String(lab.key);
      var paraphraseTask =
        lab.evidencePromptRu ||
        "Отметь зелёным фразу в записи — парафраз правильного варианта.";
      elTarget.innerHTML =
        '<p class="' +
        prefix +
        '-hunt-stmt-target-kicker">Вопрос ' +
        esc(lab.examNum) +
        " · ключ: " +
        esc(String(lab.key)) +
        "</p>" +
        '<p class="' +
        prefix +
        '-hunt-stmt-target-text">' +
        esc(prompt) +
        "</p>" +
        '<div class="' +
        prefix +
        '-hunt-key-block">' +
        '<span class="' +
        prefix +
        '-hunt-key-block-lab">Правильный вариант</span>' +
        '<p class="' +
        prefix +
        '-hunt-key-block-ans"><strong>' +
        esc(keyTxt) +
        "</strong></p></div>" +
        buildWrongChoicesHtml(q, lab) +
        '<div class="' +
        prefix +
        '-hunt-paraphrase-block">' +
        '<span class="' +
        prefix +
        '-hunt-paraphrase-lab">Найди парафраз в тексте</span>' +
        '<p class="' +
        prefix +
        '-hunt-paraphrase-task">' +
        esc(paraphraseTask) +
        "</p></div>";
    }

    function updateBrushAvailability() {
      var redBtn = null;
      brushBtns.forEach(function (btn) {
        if (btn.getAttribute("data-brush") === "red") redBtn = btn;
      });
      var hasTraps = explainedDistractors(currentLab()).length > 0;
      if (redBtn) {
        redBtn.hidden = !hasTraps;
        redBtn.setAttribute("aria-hidden", hasTraps ? "false" : "true");
      }
      if (!hasTraps && brush === "red") setBrush("green");
    }

    function updatePrompt() {
      if (!elPrompt) return;
      var lab = currentLab();
      var hasTraps = explainedDistractors(lab).length > 0;
      var trapNote = hasTraps
        ? " Красной кистью — фраза из блока «В записи» (метка ≠ N в тексте)."
        : " В этом вопросе только зелёная опора — красная кисть не нужна.";
      elPrompt.innerHTML =
        '<span class="' +
        prefix +
        '-hunt-prompt-kicker">Парафраз →</span> ' +
        esc(
          lab.evidencePromptRu ||
            "Зелёной кистью отметь фразу из записи, которая = правильному варианту."
        ) +
        esc(trapNote);
    }

    function setBrush(b) {
      brush = b;
      brushBtns.forEach(function (btn) {
        var on = btn.getAttribute("data-brush") === b;
        btn.classList.toggle("is-active", on);
        btn.setAttribute("aria-pressed", on ? "true" : "false");
      });
      if (host) {
        host.classList.toggle(prefix + "-hunt-passage--red-brush", b === "red");
      }
    }

    function clearFb() {
      if (elFb) {
        elFb.className = prefix + "-hunt-fb";
        elFb.innerHTML = "";
        elFb.style.display = "none";
      }
    }

    function renderAll() {
      renderTarget();
      renderPassage();
      updateBrushAvailability();
      updatePrompt();
      clearFb();
      tabs.forEach(function (t, i) {
        t.classList.toggle("is-active", i === tabIx);
        t.setAttribute("aria-selected", i === tabIx ? "true" : "false");
      });
    }

    function onHitClick(el) {
      if (brush === "erase") {
        el.classList.remove("is-green", "is-red", "lies-bad");
        clearFb();
        return;
      }
      if (brush === "green") {
        el.classList.remove("is-red", "lies-bad");
        el.classList.toggle("is-green");
        clearFb();
        return;
      }
      if (brush === "red") {
        if (el.getAttribute("data-sol") !== "distractor") {
          if (elFb) {
            elFb.style.display = "block";
            elFb.className = prefix + "-hunt-fb partial";
            elFb.innerHTML =
              "Красным отмечаются только фразы из блока «Ловушка в тексте» слева.";
          }
          return;
        }
        el.classList.remove("is-green", "lies-bad");
        el.classList.toggle("is-red");
        var why = el.getAttribute("data-distract-explain");
        var wrongLbl = el.getAttribute("data-wrong-label");
        var phrase = el.getAttribute("data-phrase") || (el.textContent || "").trim();
        if (el.classList.contains("is-red") && why && elFb) {
          elFb.style.display = "block";
          elFb.className = prefix + "-hunt-fb ok";
          if (wrongLbl) {
            elFb.innerHTML =
              '<p class="' +
              prefix +
              '-hunt-fb-trap-line"><strong>Можно подумать:</strong> ' +
              esc(wrongLbl) +
              "</p>" +
              '<p class="' +
              prefix +
              '-hunt-fb-trap-line"><strong>В записи:</strong> «' +
              esc(phrase) +
              "»</p>" +
              '<p class="' +
              prefix +
              '-hunt-fb-trap-line"><strong>Но это другое:</strong> ' +
              esc(why) +
              "</p>";
          } else {
            elFb.innerHTML =
              "<strong>Ловушка — почему не ответ:</strong> " + esc(why);
          }
        } else {
          clearFb();
        }
      }
    }

    host.addEventListener("click", function (e) {
      var hit = e.target.closest(".lies-hit");
      if (!hit || !host.contains(hit)) return;
      e.preventDefault();
      onHitClick(hit);
    });

    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () {
        tabIx = i;
        renderAll();
      });
    });

    brushBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        setBrush(btn.getAttribute("data-brush"));
      });
    });

    if (btnReset) {
      btnReset.addEventListener("click", function () {
        hits().forEach(function (h) {
          h.classList.remove("is-green", "is-red", "lies-bad");
        });
        clearFb();
      });
    }

    if (btnVerify) {
      btnVerify.addEventListener("click", function () {
        var lab = currentLab();
        var fb = elFb;
        if (!fb) return;
        var ok = 0;
        var bad = 0;
        var miss = 0;
        var dOk = 0;
        var dMiss = 0;
        evidenceHits().forEach(function (h) {
          if (h.classList.contains("is-green")) ok++;
          else if (h.classList.contains("is-red")) bad++;
          else miss++;
        });
        distractorHits().forEach(function (h) {
          if (h.classList.contains("is-red")) dOk++;
          else dMiss++;
        });
        var total = evidenceHits().length;
        var dTotal = distractorHits().length;
        var perfect =
          total > 0 &&
          ok === total &&
          bad === 0 &&
          miss === 0 &&
          (dTotal === 0 || dOk === dTotal);
        var q = questionFor(lab.examNum);
        var keyTxt = q ? choiceLabel(q, lab.key) : String(lab.key);
        var paraEn = paraphraseHint(lab);
        fb.style.display = "block";
        if (perfect) {
          fb.className = prefix + "-hunt-fb ok";
          fb.innerHTML =
            '<p class="' +
            prefix +
            '-hunt-fb-keyline"><strong>Правильный вариант:</strong> ' +
            esc(keyTxt) +
            "</p>" +
            '<p class="' +
            prefix +
            '-hunt-fb-paraphrase"><strong>Парафраз в записи:</strong> <em>' +
            esc(paraEn) +
            "</em></p>" +
            (lab.explainRu ? "<p>" + esc(lab.explainRu) + "</p>" : "") +
            distractorFeedbackHtml(lab);
        } else {
          fb.className = prefix + "-hunt-fb partial";
          fb.innerHTML =
            "Парафраз: " +
            ok +
            " из " +
            total +
            " зелёных" +
            (miss ? " · пропуски: " + miss : "") +
            (bad ? " · не те цвета: " + bad : "") +
            (dTotal
              ? "<br>Ловушки: " + dOk + " из " + dTotal + " красных" +
                (dMiss ? " · не отмечено: " + dMiss : "")
              : "") +
            ".<br><strong>Правильный вариант:</strong> " +
            esc(keyTxt) +
            "<br><strong>Парафраз:</strong> <em>" +
            esc(paraEn) +
            "</em>" +
            distractorFeedbackHtml(lab);
        }
        if (dTotal && dOk < dTotal && perfect === false) {
          fb.innerHTML +=
            '<p class="' +
            prefix +
            '-hunt-distr-note">Отметь красным фразу из «В записи» слева — там же «но это другое».</p>';
        } else if (!dTotal) {
          fb.innerHTML +=
            '<p class="' +
            prefix +
            '-hunt-distr-note">В этом вопросе ловушек нет — достаточно зелёной опоры.</p>';
        }
      });
    }

    setBrush("green");
    renderAll();
  }

  w.__EGE_LISTENING_MC_HUNT__ = { mount: mount };
})(typeof window !== "undefined" ? window : this);
