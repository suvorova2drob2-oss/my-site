/**
 * Guided transcript hunt — reusable engine (EGE Listening Matching and others).
 * Guided (default): evidence only — mark paraphrases green, then read-only trap tips.
 * Optional: interactiveDistractors: true — legacy two-step red marking.
 *
 * mount({ prefix, labs, statements, extraStatementNum, guided: true })
 *
 * Lab segment hit: { kind:"hit", sol:"e"|"d", text, explainRu, trapNum? }
 * Lab: { speaker, keyNum, keyLineRu, evidencePromptRu, distractorPromptRu, trapNums? }
 */
(function (w) {
  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;");
  }

  function mount(opts) {
    if (!opts || !opts.labs || !opts.labs.length) return;
    var prefix = opts.prefix || "ege-gth";
    var labs = opts.labs;
    var guided = opts.guided !== false;
    var evidenceOnly = guided && opts.interactiveDistractors !== true;
    var spkIx = 0;
    var phase = "evidence";
    var brush = "green";

    var host = document.getElementById(opts.passageId || prefix + "-hunt-passage");
    var elPrompt = document.getElementById(opts.promptId || prefix + "-hunt-prompt");
    var elMeta = document.getElementById(opts.metaId || prefix + "-hunt-meta");
    var elFb = document.getElementById(opts.fbId || prefix + "-hunt-fb");
    var elToast = document.getElementById(opts.toastId || prefix + "-hunt-toast");
    var elPhases = document.getElementById(opts.phasesId || prefix + "-hunt-phases");
    var btnVerify = document.getElementById(opts.verifyId || prefix + "-hunt-verify");
    var btnResetHunt = document.getElementById(opts.resetId || prefix + "-hunt-reset");
    var elStmtRail = document.getElementById(opts.stmtRailId || prefix + "-hunt-stmts");
    var tabs = document.querySelectorAll("." + prefix + "-hunt-tab");
    var brushBtns = document.querySelectorAll("." + prefix + "-hunt-brush");

    if (!host) return;

    function hits() {
      return host.querySelectorAll(".lies-hit");
    }

    function evidenceHits() {
      return host.querySelectorAll('.lies-hit[data-sol="evidence"]');
    }

    function distractorHits() {
      return host.querySelectorAll('.lies-hit[data-sol="distractor"]');
    }

    function currentLab() {
      return labs[spkIx];
    }

    function stmtText(num) {
      var list = opts.statements || [];
      var i;
      for (i = 0; i < list.length; i++) {
        if (String(list[i].num) === String(num)) return list[i].text || "";
      }
      return "";
    }

    function trapNumsForLab(lab) {
      var nums = {};
      var fromLab = lab.trapNums || [];
      var i;
      for (i = 0; i < fromLab.length; i++) {
        if (String(fromLab[i]) !== String(lab.keyNum)) {
          nums[String(fromLab[i])] = true;
        }
      }
      (lab.segments || []).forEach(function (seg) {
        if (
          seg.kind === "hit" &&
          seg.sol === "d" &&
          seg.trapNum != null &&
          String(seg.trapNum) !== String(lab.keyNum)
        ) {
          nums[String(seg.trapNum)] = true;
        }
      });
      return Object.keys(nums)
        .map(function (n) {
          return Number(n);
        })
        .sort(function (a, b) {
          return a - b;
        });
    }

    function setBrush(name) {
      brush = name;
      brushBtns.forEach(function (b) {
        var on = b.getAttribute("data-brush") === name;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-pressed", on ? "true" : "false");
      });
    }

    function syncBrushUi() {
      if (!guided) return;
      brushBtns.forEach(function (b) {
        var kind = b.getAttribute("data-brush");
        var hide =
          (evidenceOnly && kind === "red") ||
          (phase === "evidence" && kind === "red") ||
          (phase === "distractor" && kind === "green") ||
          phase === "done";
        b.hidden = hide;
        b.disabled = hide;
      });
      if (phase === "evidence" || evidenceOnly) setBrush("green");
      if (phase === "distractor") setBrush("red");
    }

    function syncPhaseUi() {
      if (!elPhases) return;
      elPhases.querySelectorAll("." + prefix + "-hunt-phase").forEach(function (el) {
        var p = el.getAttribute("data-phase");
        el.classList.toggle("is-active", p === phase);
        el.classList.toggle("is-done", p === "evidence" && (phase === "distractor" || phase === "done"));
      });
    }

    function clearVerifyStyles() {
      if (elFb && phase !== "distractor") {
        elFb.className = prefix + "-hunt-fb";
        elFb.innerHTML = "";
      }
      if (elToast) {
        elToast.textContent = "";
        elToast.classList.remove("is-visible");
      }
    }

    function clearStaleMarksOnly() {
      hits().forEach(function (el) {
        el.classList.remove("lies-bad");
      });
    }

    function showToast(msg) {
      if (!elToast) return;
      elToast.textContent = msg;
      elToast.classList.add("is-visible");
    }

    function renderStmtRail() {
      if (!elStmtRail || !opts.statements || !opts.statements.length) return;
      var lab = currentLab();
      var keyNum = lab.keyNum;
      var extra = opts.extraStatementNum;
      var traps = trapNumsForLab(lab);
      var html = "";

      if (guided && phase === "evidence") {
        html += '<div class="' + prefix + '-hunt-stmt-target">';
        html +=
          '<p class="' +
          prefix +
          '-hunt-stmt-target-kicker">Speaker ' +
          esc(lab.speaker) +
          " · ищи парафраз</p>";
        html +=
          '<p class="' +
          prefix +
          '-hunt-stmt-target-num"><span>' +
          esc(String(keyNum)) +
          "</span></p>";
        html +=
          '<p class="' +
          prefix +
          '-hunt-stmt-target-text">' +
          esc(stmtText(keyNum)) +
          "</p>";
        html += "</div>";
        html +=
          '<p class="' +
          prefix +
          '-hunt-stmt-note">Отметь <strong style="color:#86efac">зелёным</strong> все фрагменты-парафразы в тексте.</p>';
      } else if (guided && !evidenceOnly && (phase === "distractor" || phase === "done")) {
        html += '<div class="' + prefix + '-hunt-stmt-target ' + prefix + '-hunt-stmt-target--done">';
        html +=
          '<p class="' +
          prefix +
          '-hunt-stmt-target-kicker">✓ Утверждение ' +
          esc(String(keyNum)) +
          " — парафраз найден</p>";
        html +=
          '<p class="' +
          prefix +
          '-hunt-stmt-target-text is-dim">' +
          esc(stmtText(keyNum)) +
          "</p>";
        html += "</div>";

        html +=
          '<p class="' +
          prefix +
          '-hunt-stmt-all-lab">Шаг 2 · ловушки — другие утверждения</p>';
        if (traps.length) {
          traps.forEach(function (tn) {
            html += '<div class="' + prefix + '-hunt-stmt-trap">';
            html +=
              '<p class="' +
              prefix +
              '-hunt-stmt-trap-num"><span>№' +
              esc(String(tn)) +
              " · другое утверждение</span></p>";
            html +=
              '<p class="' +
              prefix +
              '-hunt-stmt-trap-text">' +
              esc(stmtText(tn)) +
              "</p>";
            html += "</div>";
          });
        } else {
          html +=
            '<p class="' +
            prefix +
            '-hunt-stmt-note">Отметь <strong style="color:#fca5a5">красным</strong> фразы, которые тянут к <em>неправильному</em> смыслу.</p>';
        }
        html +=
          '<p class="' +
          prefix +
          '-hunt-stmt-note">Красным — фрагменты-ловушки. Внизу появится, <em>к какому утверждению</em> они ближе и почему это ошибка.</p>';
      } else {
        html += '<div class="' + prefix + '-hunt-stmt-target">';
        html +=
          '<p class="' +
          prefix +
          '-hunt-stmt-target-kicker">Speaker ' +
          esc(lab.speaker) +
          "</p>";
        html +=
          '<p class="' +
          prefix +
          '-hunt-stmt-target-num"><span>' +
          esc(String(keyNum)) +
          "</span></p>";
        html +=
          '<p class="' +
          prefix +
          '-hunt-stmt-target-text">' +
          esc(stmtText(keyNum)) +
          "</p>";
        html += "</div>";
      }

      if (!guided || phase === "evidence" || (evidenceOnly && phase === "done")) {
        html += '<p class="' + prefix + '-hunt-stmt-all-lab">Все утверждения 1–7</p>';
        html += '<ol class="' + prefix + '-hunt-stmt-all" start="1">';
        opts.statements.forEach(function (st) {
          var cls = [prefix + "-hunt-stmt-all-item"];
          if (String(st.num) === String(keyNum)) cls.push("is-target");
          if (extra != null && String(st.num) === String(extra)) cls.push("is-extra");
          traps.forEach(function (tn) {
            if (String(st.num) === String(tn)) cls.push("is-trap");
          });
          html += '<li class="' + cls.join(" ") + '">';
          html +=
            '<span class="' +
            prefix +
            '-hunt-stmt-all-num">' +
            esc(String(st.num)) +
            ".</span> ";
          html +=
            '<span class="' +
            prefix +
            '-hunt-stmt-all-text">' +
            esc(st.text) +
            "</span>";
          if (extra != null && String(st.num) === String(extra)) {
            html +=
              ' <span class="' +
              prefix +
              '-hunt-stmt-badge ' +
              prefix +
              '-hunt-stmt-badge--extra">лишнее</span>';
          }
          html += "</li>";
        });
        html += "</ol>";
      }

      elStmtRail.innerHTML = html;
    }

    function applyHitPhaseClasses() {
      if (!guided || evidenceOnly) return;
      evidenceHits().forEach(function (el) {
        el.classList.toggle("gth-dormant", phase === "distractor" && !el.classList.contains("is-green"));
        el.classList.toggle("gth-locked", phase !== "evidence" && el.classList.contains("is-green"));
      });
      distractorHits().forEach(function (el) {
        el.classList.toggle("gth-dormant", phase === "evidence");
        el.classList.toggle("gth-locked", phase === "done" && el.classList.contains("is-red"));
      });
    }

    function updatePrompt() {
      if (!elPrompt) return;
      var lab = currentLab();
      if (!guided) {
        elPrompt.innerHTML = lab.promptRu || lab.evidencePromptRu || "";
        return;
      }
      if (phase === "evidence") {
        elPrompt.innerHTML =
          lab.evidencePromptRu ||
          lab.promptRu ||
          "Отметь <strong style=\"color:#86efac\">зелёным</strong> парафразы к утверждению " +
            lab.keyNum +
            ".";
      } else if (phase === "distractor") {
        elPrompt.innerHTML =
          lab.distractorPromptRu ||
          "Отметь <strong style=\"color:#fca5a5\">красным</strong> ловушки — фразы, которые тянут к <em>другому</em> утверждению.";
      } else {
        elPrompt.innerHTML =
          "<strong>Готово.</strong> Ниже — разбор: парафраз и ловушки с пояснениями.";
      }
    }

    function updateMeta() {
      if (!elMeta) return;
      var lab = currentLab();
      if (!guided) {
        elMeta.textContent =
          "Speaker " +
          lab.speaker +
          " · зелёным — опора для утверждения " +
          lab.keyNum +
          ", красным — ловушка.";
        return;
      }
      if (phase === "evidence") {
        elMeta.textContent =
          "Speaker " +
          lab.speaker +
          " · найди все парафразы к утверждению " +
          lab.keyNum +
          " (зелёный).";
      } else if (phase === "distractor") {
        elMeta.textContent =
          "Speaker " +
          lab.speaker +
          " · шаг 2: отметь ловушки красным — они ближе к <em>другим</em> утверждениям.";
      } else {
        elMeta.textContent = "Speaker " + lab.speaker + " · разбор завершён.";
      }
    }

    function updateVerifyLabel() {
      if (!btnVerify || !guided) return;
      if (phase === "evidence") {
        btnVerify.textContent = "Проверить парафразы";
      } else if (phase === "distractor") {
        btnVerify.textContent = "Проверить ловушки";
      } else {
        btnVerify.textContent = "Разбор";
        btnVerify.disabled = true;
      }
    }

    function renderPassage() {
      var lab = currentLab();
      host.innerHTML = "";
      (lab.segments || []).forEach(function (seg) {
        if (seg.kind === "glue") {
          var g = document.createElement("span");
          g.className = "lies-glue";
          g.innerHTML = seg.html || seg.text || "";
          host.appendChild(g);
        } else if (seg.kind === "hit") {
          if (evidenceOnly && seg.sol === "d") {
            var plainD = document.createElement("span");
            plainD.className = "lies-glue";
            if (seg.html != null) plainD.innerHTML = seg.html;
            else plainD.textContent = seg.text || "";
            host.appendChild(plainD);
            return;
          }
          if (
            seg.sol === "d" &&
            seg.trapNum != null &&
            String(seg.trapNum) === String(lab.keyNum)
          ) {
            var plain = document.createElement("span");
            plain.className = "lies-glue";
            if (seg.html != null) plain.innerHTML = seg.html;
            else plain.textContent = seg.text || "";
            host.appendChild(plain);
            return;
          }
          var h = document.createElement("span");
          h.className = "lies-hit";
          h.setAttribute("role", "button");
          h.setAttribute("tabindex", "0");
          h.setAttribute("data-sol", seg.sol === "e" ? "evidence" : "distractor");
          if (seg.explainRu) h.setAttribute("data-explain-ru", seg.explainRu);
          if (seg.trapNum != null) {
            h.setAttribute("data-trap-num", String(seg.trapNum));
          }
          if (seg.html != null) h.innerHTML = seg.html;
          else h.textContent = seg.text || "";
          host.appendChild(h);
        }
      });

      tabs.forEach(function (tab, i) {
        tab.classList.toggle("is-active", i === spkIx);
        tab.setAttribute("aria-selected", i === spkIx ? "true" : "false");
      });

      applyHitPhaseClasses();
      updatePrompt();
      updateMeta();
      renderStmtRail();
      syncPhaseUi();
      syncBrushUi();
      updateVerifyLabel();
      if (phase !== "distractor") clearVerifyStyles();
    }

    function allEvidenceMarked() {
      var list = evidenceHits();
      if (!list.length) return true;
      var i;
      for (i = 0; i < list.length; i++) {
        if (!list[i].classList.contains("is-green")) return false;
      }
      return true;
    }

    function allDistractorsMarked() {
      var list = distractorHits();
      if (!list.length) {
        return true;
      }
      var i;
      for (i = 0; i < list.length; i++) {
        if (!list[i].classList.contains("is-red")) return false;
      }
      return true;
    }

    function advanceToDistractorPhase() {
      if (phase !== "evidence") return;
      phase = "distractor";
      applyHitPhaseClasses();
      updatePrompt();
      updateMeta();
      renderStmtRail();
      syncPhaseUi();
      syncBrushUi();
      updateVerifyLabel();
      if (elFb) {
        elFb.className = prefix + "-hunt-fb ok";
        elFb.innerHTML =
          "<strong>Парафразы найдены.</strong> Теперь шаг 2 — ищи ловушки к <em>другим</em> утверждениям и отмечай их красным.";
      }
      showToast("Шаг 2 · ловушки — отмечай красным.");
    }

    function trapLabel(trapNum) {
      if (trapNum == null || trapNum === "") return "";
      var t = stmtText(trapNum);
      if (!t) return "утверждение " + trapNum;
      return "№" + trapNum + ": «" + t + "»";
    }

    function renderDistractorFeedback() {
      if (!elFb) return;
      var bits = [];
      distractorHits().forEach(function (el) {
        if (!el.classList.contains("is-red")) return;
        var tip = el.getAttribute("data-explain-ru") || "";
        var trapNum = el.getAttribute("data-trap-num");
        var head = trapNum
          ? "Ловушка к " + esc(trapLabel(trapNum))
          : "Ловушка";
        bits.push(
          "<li class=\"" +
            prefix +
            "-hunt-distr-item\"><strong style=\"color:#fca5a5\">" +
            head +
            "</strong><br />" +
            tip +
            "</li>"
        );
      });
      if (!bits.length) {
        elFb.className = prefix + "-hunt-fb";
        elFb.innerHTML = "";
        return;
      }
      elFb.className = prefix + "-hunt-fb partial";
      elFb.innerHTML =
        "<p class=\"" +
        prefix +
        "-hunt-distr-head\"><strong>Почему это ловушки:</strong></p><ul class=\"" +
        prefix +
        "-hunt-expl-list\">" +
        bits.join("") +
        "</ul>";
    }

    function readOnlyTrapTipsHtml(lab) {
      var bits = [];
      (lab.segments || []).forEach(function (seg) {
        if (seg.kind !== "hit" || seg.sol !== "d" || !seg.explainRu) return;
        if (seg.trapNum != null && String(seg.trapNum) === String(lab.keyNum)) return;
        var head = "";
        if (seg.trapNum != null) {
          head =
            "<strong style=\"color:#fca5a5\">Не путай с №" +
            esc(String(seg.trapNum)) +
            "</strong>";
          if (seg.text) {
            head += " · «" + esc(seg.text) + "»";
          }
        } else if (seg.text) {
          head = "«" + esc(seg.text) + "»";
        }
        bits.push(
          "<li class=\"" +
            prefix +
            "-hunt-distr-item\">" +
            (head ? head + "<br />" : "") +
            seg.explainRu +
            "</li>"
        );
      });
      if (!bits.length) return "";
      return (
        "<p class=\"" +
        prefix +
        "-hunt-distr-head\"><strong>На экзамене не путай:</strong></p><ul class=\"" +
        prefix +
        "-hunt-expl-list\">" +
        bits.join("") +
        "</ul>"
      );
    }

    function finishSpeaker() {
      phase = "done";
      var lab = currentLab();
      applyHitPhaseClasses();
      syncPhaseUi();
      syncBrushUi();
      updatePrompt();
      updateMeta();
      updateVerifyLabel();
      renderStmtRail();

      var explainBits = [];
      evidenceHits().forEach(function (el) {
        if (el.classList.contains("is-green")) {
          var tip = el.getAttribute("data-explain-ru") || "";
          if (tip) {
            explainBits.push(
              "<li><strong style=\"color:#86efac\">✓ №" +
                esc(String(lab.keyNum)) +
                "</strong> · " +
                tip +
                "</li>"
            );
          }
        }
      });
      distractorHits().forEach(function (el) {
        if (!evidenceOnly && el.classList.contains("is-red")) {
          var tip2 = el.getAttribute("data-explain-ru") || "";
          var trapNum = el.getAttribute("data-trap-num");
          var head2 = trapNum
            ? "✗ ловушка к " + esc(trapLabel(trapNum))
            : "✗ ловушка";
          if (tip2) {
            explainBits.push(
              "<li><strong style=\"color:#fca5a5\">" + head2 + "</strong> · " + tip2 + "</li>"
            );
          }
        }
      });

      var trapReadOnly = evidenceOnly ? readOnlyTrapTipsHtml(lab) : "";

      if (elFb) {
        elFb.className = prefix + "-hunt-fb ok";
        elFb.innerHTML =
          "<strong>Speaker " +
          esc(lab.speaker) +
          " — готово.</strong><br /><span class=\"" +
          prefix +
          "-hunt-key\">" +
          esc(lab.keyLineRu) +
          "</span>" +
          (explainBits.length
            ? "<ul class=\"" + prefix + "-hunt-expl-list\">" + explainBits.join("") + "</ul>"
            : "") +
          trapReadOnly;
      }
      showToast("Разбор этого спикера завершён.");
    }

    function checkEvidenceProgress() {
      if (!guided || phase !== "evidence") return;
      if (allEvidenceMarked()) {
        if (!evidenceOnly && distractorHits().length) advanceToDistractorPhase();
        else finishSpeaker();
      }
    }

    function checkDistractorProgress() {
      if (!guided || phase !== "distractor") return;
      renderDistractorFeedback();
      if (allDistractorsMarked()) finishSpeaker();
    }

    function onHitClick(ev) {
      var el = ev.target.closest(".lies-hit");
      if (!el || !host.contains(el)) return;
      if (el.classList.contains("gth-dormant") || el.classList.contains("gth-locked")) {
        if (guided && phase === "evidence" && el.getAttribute("data-sol") === "distractor") {
          showToast("Сначала найди все парафразы (зелёный) — ловушки откроются на шаге 2.");
        }
        return;
      }

      clearStaleMarksOnly();
      var sol = el.getAttribute("data-sol");

      if (guided) {
        if (phase === "evidence") {
          if (sol === "distractor") {
            showToast("Это шаг 2. Сейчас ищи только парафраз к утверждению " + currentLab().keyNum + ".");
            return;
          }
          if (brush === "erase") {
            el.classList.remove("is-green", "is-red");
            return;
          }
          if (brush !== "green") {
            showToast("На шаге 1 используй только зелёную кисть.");
            return;
          }
          el.classList.remove("is-red");
          el.classList.add("is-green");
          checkEvidenceProgress();
          return;
        }
        if (phase === "distractor") {
          if (sol === "evidence") {
            showToast("Парафраз уже найден — ищи ловушки (красный).");
            return;
          }
          if (brush === "erase") {
            el.classList.remove("is-green", "is-red");
            renderDistractorFeedback();
            return;
          }
          if (brush !== "red") {
            showToast("На шаге 2 используй только красную кисть.");
            return;
          }
          el.classList.remove("is-green");
          el.classList.add("is-red");
          checkDistractorProgress();
          return;
        }
        return;
      }

      if (brush === "erase") {
        el.classList.remove("is-green", "is-red");
        return;
      }
      if (brush === "green") {
        el.classList.remove("is-red");
        el.classList.add("is-green");
        return;
      }
      if (brush === "red") {
        el.classList.remove("is-green");
        el.classList.add("is-red");
      }
    }

    function onHitKey(ev) {
      if (ev.key !== "Enter" && ev.key !== " ") return;
      var el = ev.target.closest(".lies-hit");
      if (!el) return;
      ev.preventDefault();
      onHitClick({ target: el });
    }

    function verify() {
      clearStaleMarksOnly();
      var lab = currentLab();

      if (guided && phase === "evidence") {
        var missE = 0;
        var wrong = 0;
        evidenceHits().forEach(function (el) {
          if (!el.classList.contains("is-green")) {
            if (el.classList.contains("is-red")) wrong += 1;
            else missE += 1;
          }
        });
        if (missE || wrong) {
          if (elFb) {
            elFb.className = prefix + "-hunt-fb partial";
            elFb.innerHTML =
              (missE
                ? missE + " парафраз(а) ещё не отмечены зелёным. "
                : "") +
              (wrong ? wrong + " фрагмент(ов) отмечены не тем цветом." : "");
          }
          showToast("Подсказка: ищи фразы про «" + stmtText(lab.keyNum).slice(0, 40) + "…»");
          return;
        }
        if (distractorHits().length && !evidenceOnly) advanceToDistractorPhase();
        else finishSpeaker();
        return;
      }

      if (guided && phase === "distractor") {
        var missD = 0;
        var wrong2 = 0;
        distractorHits().forEach(function (el) {
          if (!el.classList.contains("is-red")) {
            if (el.classList.contains("is-green")) wrong2 += 1;
            else missD += 1;
          }
        });
        if (missD || wrong2) {
          renderDistractorFeedback();
          if (elFb) {
            var extra =
              (missD ? missD + " ловушек не отмечены красным. " : "") +
              (wrong2 ? wrong2 + " отмечены не тем цветом." : "");
            elFb.innerHTML =
              "<p class=\"" +
              prefix +
              "-hunt-distr-head\">" +
              extra +
              "</p>" +
              elFb.innerHTML;
          }
          showToast("Смотри утверждения слева — к какому № тянет ловушка.");
          return;
        }
        finishSpeaker();
        return;
      }

      if (guided && phase === "done") return;

      var ok = true;
      var missE2 = 0;
      var missD2 = 0;
      var wrongFlip = 0;
      var explainBits = [];

      hits().forEach(function (el) {
        var sol = el.getAttribute("data-sol");
        var g = el.classList.contains("is-green");
        var r = el.classList.contains("is-red");
        var tip = el.getAttribute("data-explain-ru") || "";

        if (sol === "evidence") {
          if (!g) {
            ok = false;
            if (!r) missE2 += 1;
            else {
              wrongFlip += 1;
              el.classList.add("lies-bad");
            }
          } else if (tip) {
            explainBits.push("<li><strong style=\"color:#86efac\">✓</strong> " + tip + "</li>");
          }
        } else if (sol === "distractor") {
          if (!r) {
            ok = false;
            if (!g) missD2 += 1;
            else {
              wrongFlip += 1;
              el.classList.add("lies-bad");
            }
          } else if (tip) {
            explainBits.push("<li><strong style=\"color:#fca5a5\">✗</strong> " + tip + "</li>");
          }
        }
      });

      var parts = [];
      if (ok) parts.push("Все отметки верны.");
      else {
        if (missE2) parts.push(missE2 + " опор не отмечены зелёным.");
        if (missD2) parts.push(missD2 + " ловушек не отмечены красным.");
        if (wrongFlip) parts.push(wrongFlip + " перепутанных цветов.");
      }

      if (elFb) {
        var msg = parts.join(" ");
        if (ok) {
          msg +=
            "<br /><span class=\"" + prefix + "-hunt-key\">" + esc(lab.keyLineRu) + "</span>";
        }
        if (explainBits.length) {
          msg +=
            "<ul class=\"" + prefix + "-hunt-expl-list\">" + explainBits.join("") + "</ul>";
        }
        elFb.innerHTML = msg;
        elFb.className = prefix + "-hunt-fb " + (ok ? "ok" : "partial");
      }
    }

    function resetRound() {
      phase = "evidence";
      hits().forEach(function (el) {
        el.classList.remove("is-green", "is-red", "lies-bad", "gth-dormant", "gth-locked");
      });
      clearVerifyStyles();
      applyHitPhaseClasses();
      updatePrompt();
      updateMeta();
      renderStmtRail();
      syncPhaseUi();
      syncBrushUi();
      updateVerifyLabel();
      if (btnVerify) btnVerify.disabled = false;
    }

    brushBtns.forEach(function (b) {
      b.addEventListener("click", function () {
        if (b.hidden || b.disabled) return;
        clearStaleMarksOnly();
        setBrush(b.getAttribute("data-brush"));
      });
    });

    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () {
        spkIx = i;
        phase = "evidence";
        if (btnVerify) btnVerify.disabled = false;
        renderPassage();
      });
    });

    host.addEventListener("click", onHitClick);
    host.addEventListener("keydown", onHitKey);
    if (btnVerify) btnVerify.addEventListener("click", verify);
    if (btnResetHunt) btnResetHunt.addEventListener("click", resetRound);

    renderPassage();
  }

  w.__EGE_GUIDED_TRANSCRIPT_HUNT__ = { mount: mount };
})(typeof window !== "undefined" ? window : this);
