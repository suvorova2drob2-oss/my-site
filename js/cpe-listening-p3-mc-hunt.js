/**
 * CPE Listening Part 3 MC — Stage 2: evidence + distractor hunt in transcript.
 * Ported from ege-listening-mc-hunt.js (A–D letters, English copy, CPE grey shell).
 * window.__CPE_LISTENING_P3_MC_HUNT__
 */
(function (w) {
  "use strict";

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

  function qId(q) {
    return q && (q.num != null ? q.num : q.examNum);
  }

  function labId(lab) {
    return lab && (lab.num != null ? lab.num : lab.examNum);
  }

  function choiceLetter(c) {
    if (!c) return "";
    if (c.letter != null) return String(c.letter).toUpperCase();
    return String(c.num);
  }

  function speakerSlug(name) {
    return (
      String(name || "")
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "") || "spk"
    );
  }

  function distractExplain(seg) {
    return seg.distractExplainEn || seg.distractExplainRu || "";
  }

  function hitsFromLab(lab, sol) {
    var out = [];
    var segs = lab.segments || [];
    var i;
    for (i = 0; i < segs.length; i++) {
      if (segs[i].kind !== "hit") continue;
      var isD = segs[i].sol === "d";
      if (isD && !distractExplain(segs[i])) continue;
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
      if (segs[i].kind === "hit" && segs[i].sol === "d" && distractExplain(segs[i])) {
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
          distractExplain: hitObj ? distractExplain(hitObj) : "",
          wrongOption: hitObj && hitObj.wrongOption ? hitObj.wrongOption : null,
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
            ? '<span class="lmc-hit-wrong-tag" title="Not answer ' +
              escAttr(String(parts[pi].wrongOption)) +
              '">\u2260 ' +
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
    var html = '<div class="cpe-l3-dialogue-passage">';
    (para.turns || []).forEach(function (turn) {
      var slug = speakerSlug(turn.speaker);
      html +=
        '<div class="cpe-l3-dialogue-line cpe-l3-dialogue-line--' + slug + '">';
      html +=
        '<span class="cpe-l3-dialogue-name">' + esc(turn.speaker) + "</span>";
      html +=
        '<div class="cpe-l3-dialogue-bubble">' +
        textWithHits(turn.text, hits, wrongLabels) +
        "</div></div>";
    });
    html += "</div>";
    return html;
  }

  function mount(opts) {
    if (!opts || !opts.labs || !opts.labs.length) return;
    var prefix = opts.prefix || "cpe-l3";
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

    function questionFor(num) {
      var list = opts.questions || [];
      var i;
      for (i = 0; i < list.length; i++) {
        if (String(qId(list[i])) === String(num)) return list[i];
      }
      return null;
    }

    function choiceText(q, letter) {
      if (!q || !q.choices) return "";
      var i;
      for (i = 0; i < q.choices.length; i++) {
        if (choiceLetter(q.choices[i]) === String(letter).toUpperCase()) {
          return q.choices[i].text;
        }
      }
      return "";
    }

    function choiceLabel(q, letter) {
      return String(letter).toUpperCase() + ") " + choiceText(q, letter);
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
      return phrases.length ? phrases[0] : lab.keyLineEn || "";
    }

    function wrongChoiceLabels(q) {
      var map = {};
      if (!q || !q.choices) return map;
      var i;
      for (i = 0; i < q.choices.length; i++) {
        var L = choiceLetter(q.choices[i]);
        map[L] = choiceLabel(q, L);
      }
      return map;
    }

    function trapForWrongOption(lab, letter) {
      var traps = explainedDistractors(lab);
      var want = String(letter).toUpperCase();
      var i;
      for (i = 0; i < traps.length; i++) {
        if (String(traps[i].wrongOption).toUpperCase() === want) return traps[i];
      }
      return null;
    }

    function distractorWrong(q, letter) {
      if (!q) return "";
      var L = String(letter).toUpperCase();
      if (q.distractorWrongEn && q.distractorWrongEn[L]) return q.distractorWrongEn[L];
      if (q.distractorWrongEn && q.distractorWrongEn[letter]) return q.distractorWrongEn[letter];
      return "";
    }

    function buildWrongChoicesHtml(q, lab) {
      if (!q || !q.choices || !q.choices.length) return "";
      var html = '<div class="' + prefix + '-hunt-wrongs-wrap">';
      html +=
        '<span class="' +
        prefix +
        '-hunt-wrongs-lab">Wrong options \u00b7 easy to think\u2026</span>';
      var ci;
      for (ci = 0; ci < q.choices.length; ci++) {
        var c = q.choices[ci];
        var L = choiceLetter(c);
        if (String(L).toUpperCase() === String(lab.key).toUpperCase()) continue;
        var trap = trapForWrongOption(lab, L);
        var why = trap ? distractExplain(trap) : distractorWrong(q, L);
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
          '-hunt-wrong-kicker">Sounds like:</span> <strong class="' +
          prefix +
          '-hunt-wrong-ans">' +
          esc(choiceLabel(q, L)) +
          "</strong></p>";
        if (trap) {
          html +=
            '<p class="' +
            prefix +
            '-hunt-wrong-but"><span class="' +
            prefix +
            '-hunt-wrong-but-kicker">In the recording:</span> <em class="' +
            prefix +
            '-hunt-wrong-phrase">\u2018' +
            esc(trap.text) +
            "\u2019</em></p>";
          html +=
            '<p class="' +
            prefix +
            '-hunt-wrong-why"><span class="' +
            prefix +
            '-hunt-wrong-why-kicker">But that\u2019s different:</span> ' +
            esc(why) +
            "</p>";
          html +=
            '<p class="' +
            prefix +
            '-hunt-wrong-mark">\u2192 mark \u2018' +
            esc(trap.text) +
            "\u2019 in red on the right</p>";
        } else {
          html +=
            '<p class="' +
            prefix +
            '-hunt-wrong-why"><span class="' +
            prefix +
            '-hunt-wrong-why-kicker">But:</span> ' +
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
      var q = questionFor(labId(lab));
      if (!traps.length && (!q || !q.choices)) return "";
      var html = '<div class="' + prefix + '-hunt-fb-traps">';
      html += "<p><strong>Wrong options \u2014 why not:</strong></p><ul>";
      var ci;
      if (q && q.choices) {
        for (ci = 0; ci < q.choices.length; ci++) {
          var L = choiceLetter(q.choices[ci]);
          if (String(L).toUpperCase() === String(lab.key).toUpperCase()) continue;
          var trap = trapForWrongOption(lab, L);
          var why = trap ? distractExplain(trap) : distractorWrong(q, L);
          if (!why) continue;
          html += "<li><strong>" + esc(choiceLabel(q, L)) + "</strong>";
          if (trap) {
            html +=
              " \u00b7 in the recording \u2018" +
              esc(trap.text) +
              "\u2019 \u2014 <em>but that\u2019s different:</em> " +
              esc(why);
          } else {
            html += " \u2014 " + esc(why);
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
      var q = questionFor(labId(lab));
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
      var q = questionFor(labId(lab));
      var prompt = q ? q.prompt : "";
      var keyTxt = q ? choiceLabel(q, lab.key) : String(lab.key);
      var paraphraseTask =
        lab.evidencePromptEn ||
        "Mark the phrase in the transcript that supports the correct answer (green brush).";
      elTarget.innerHTML =
        '<p class="' +
        prefix +
        '-hunt-stmt-target-kicker">Question ' +
        esc(String(labId(lab))) +
        " \u00b7 key: " +
        esc(String(lab.key).toUpperCase()) +
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
        '-hunt-key-block-lab">Correct answer</span>' +
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
        '-hunt-paraphrase-lab">Find the paraphrase</span>' +
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
        ? " Red brush = phrase from \u2018In the recording\u2019 (tag \u2260 letter in the text)."
        : " This question only needs green evidence.";
      elPrompt.innerHTML =
        '<span class="' +
        prefix +
        '-hunt-prompt-kicker">Paraphrase \u2192</span> ' +
        esc(
          lab.evidencePromptEn ||
            "Mark the phrase that matches the correct answer in green."
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
              "Use red only on trap phrases listed on the left (\u2018In the recording\u2019).";
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
              '-hunt-fb-trap-line"><strong>Sounds like:</strong> ' +
              esc(wrongLbl) +
              "</p>" +
              '<p class="' +
              prefix +
              '-hunt-fb-trap-line"><strong>In the recording:</strong> \u2018' +
              esc(phrase) +
              "\u2019</p>" +
              '<p class="' +
              prefix +
              '-hunt-fb-trap-line"><strong>But that\u2019s different:</strong> ' +
              esc(why) +
              "</p>";
          } else {
            elFb.innerHTML =
              "<strong>Trap \u2014 why not this answer:</strong> " + esc(why);
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
        var q = questionFor(labId(lab));
        var keyTxt = q ? choiceLabel(q, lab.key) : String(lab.key);
        var paraEn = paraphraseHint(lab);
        var explain = lab.explainEn || lab.explainRu || "";
        fb.style.display = "block";
        if (perfect) {
          fb.className = prefix + "-hunt-fb ok";
          fb.innerHTML =
            '<p class="' +
            prefix +
            '-hunt-fb-keyline"><strong>Correct answer:</strong> ' +
            esc(keyTxt) +
            "</p>" +
            '<p class="' +
            prefix +
            '-hunt-fb-paraphrase"><strong>Paraphrase in the recording:</strong> <em>' +
            esc(paraEn) +
            "</em></p>" +
            (explain ? "<p>" + esc(explain) + "</p>" : "") +
            distractorFeedbackHtml(lab);
        } else {
          fb.className = prefix + "-hunt-fb partial";
          fb.innerHTML =
            "Evidence: " +
            ok +
            " of " +
            total +
            " green" +
            (miss ? " \u00b7 missed: " + miss : "") +
            (bad ? " \u00b7 wrong colour: " + bad : "") +
            (dTotal
              ? "<br>Traps: " + dOk + " of " + dTotal + " red" +
                (dMiss ? " \u00b7 not marked: " + dMiss : "")
              : "") +
            ".<br><strong>Correct answer:</strong> " +
            esc(keyTxt) +
            "<br><strong>Paraphrase:</strong> <em>" +
            esc(paraEn) +
            "</em>" +
            distractorFeedbackHtml(lab);
        }
        if (dTotal && dOk < dTotal && !perfect) {
          fb.innerHTML +=
            '<p class="' +
            prefix +
            '-hunt-distr-note">Mark the trap phrase from the left panel in red.</p>';
        } else if (!dTotal) {
          fb.innerHTML +=
            '<p class="' +
            prefix +
            '-hunt-distr-note">No text traps here \u2014 green evidence is enough.</p>';
        }
      });
    }

    setBrush("green");
    renderAll();
  }

  w.__CPE_LISTENING_P3_MC_HUNT__ = { mount: mount };
})(typeof window !== "undefined" ? window : globalThis);
