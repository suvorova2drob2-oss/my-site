/**
 * CPE Listening Part 3 — Multiple choice (A–D).
 * UX ported from ege-listening-mc-app.js; CPE grey shell + English feedback.
 *
 * mount({ rootId, pack }) — pack = unit object or id string in __CPE_LISTENING_P3_MC__.units
 */
(function (W) {
  "use strict";

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function resolvePack(packOrId) {
    if (packOrId && typeof packOrId === "object" && packOrId.questions) return packOrId;
    var boot = W.__CPE_LISTENING_P3_MC__;
    var units = boot && boot.units ? boot.units : [];
    var want = String(packOrId || "");
    var i;
    for (i = 0; i < units.length; i++) {
      if (units[i] && String(units[i].id) === want) return units[i];
    }
    return units[0] || null;
  }

  function choiceText(q, letter) {
    if (!q || !q.choices) return "";
    var i;
    for (i = 0; i < q.choices.length; i++) {
      if (String(q.choices[i].letter).toUpperCase() === String(letter).toUpperCase()) {
        return q.choices[i].text;
      }
    }
    return "";
  }

  function choiceLabel(q, letter) {
    return String(letter).toUpperCase() + ") " + choiceText(q, letter);
  }

  /**
   * @param {{ rootId: string, pack: object|string }} opts
   */
  function mount(opts) {
    opts = opts || {};
    var root = document.getElementById(opts.rootId || "cpe-l3-app");
    if (!root) return;

    var U = resolvePack(opts.pack);
    if (!U || !U.questions || !U.questions.length) {
      root.innerHTML =
        '<p style="color:#ff7d87">Task data did not load. Refresh the page.</p>';
      return;
    }

    var checked = false;
    var msgEl = null;
    var answerRows = [];
    var huntMounted = false;

    function qCount() {
      return U.questions.length;
    }

    function getRowVal(num) {
      var i;
      for (i = 0; i < answerRows.length; i++) {
        if (String(answerRows[i].num) === String(num)) return answerRows[i].val;
      }
      return "";
    }

    function setRowVal(num, val) {
      var i;
      for (i = 0; i < answerRows.length; i++) {
        if (String(answerRows[i].num) === String(num)) {
          answerRows[i].val = val;
          return;
        }
      }
    }

    function questionFor(num) {
      var i;
      for (i = 0; i < U.questions.length; i++) {
        if (String(U.questions[i].num) === String(num)) return U.questions[i];
      }
      return null;
    }

    function becauseCorrectEn(num) {
      var q = questionFor(num);
      return (q && q.explainEn) || "";
    }

    function whyYourWrongEn(got, q) {
      if (!q) return "This option does not match what the speakers say.";
      if (q.distractorWrongEn && q.distractorWrongEn[got]) return q.distractorWrongEn[got];
      return "The recording supports a different idea than this option suggests.";
    }

    function buildQFeedbackHtml(got, want, num, isOk) {
      var q = questionFor(num);
      var because = becauseCorrectEn(num);
      var mark = isOk ? "✓" : "✗";
      var inner =
        '<p><span class="cpe-l3-fb-lab">Your answer:</span> <strong>' +
        esc(choiceLabel(q, got)) +
        "</strong>" +
        (isOk ? " — correct" : "") +
        "</p>";
      if (isOk) {
        inner +=
          '<p><span class="cpe-l3-fb-lab">Because:</span> ' + esc(because) + "</p>";
      } else {
        inner +=
          '<p><span class="cpe-l3-fb-lab">Correct answer:</span> <strong>' +
          esc(choiceLabel(q, want)) +
          "</strong> — " +
          esc(because) +
          "</p>" +
          '<p><span class="cpe-l3-fb-lab">Why yours is wrong:</span> ' +
          esc(whyYourWrongEn(got, q)) +
          "</p>";
      }
      return (
        '<span class="cpe-l3-q-verdict ' +
        (isOk ? "cpe-l3-q-verdict--ok" : "cpe-l3-q-verdict--bad") +
        '" aria-hidden="true">' +
        mark +
        '</span><div>' +
        inner +
        "</div>"
      );
    }

    function clearResultStyles() {
      root.querySelectorAll(".cpe-l3-opt").forEach(function (btn) {
        btn.classList.remove("is-correct", "is-wrong", "is-key", "is-picked");
      });
      root.querySelectorAll(".cpe-l3-q-item").forEach(function (row) {
        row.classList.remove("is-row-ok", "is-row-bad");
        var verdict = row.querySelector(".cpe-l3-q-verdict-head");
        if (verdict) {
          verdict.textContent = "";
          verdict.className = "cpe-l3-q-verdict-head";
        }
        var fb = row.querySelector(".cpe-l3-q-fb");
        if (fb) {
          fb.hidden = true;
          fb.className = "cpe-l3-q-fb";
          fb.innerHTML = "";
        }
      });
    }

    function onChoiceClick(num, letter) {
      if (checked) return;
      setRowVal(num, letter);
      root.querySelectorAll('.cpe-l3-opt[data-q="' + num + '"]').forEach(function (lab) {
        lab.classList.toggle(
          "is-picked",
          String(lab.getAttribute("data-letter")).toUpperCase() === String(letter).toUpperCase()
        );
      });
    }

    function onCheck() {
      var missing = [];
      U.questions.forEach(function (q) {
        if (!getRowVal(q.num)) missing.push(q.num);
      });
      if (missing.length) {
        if (msgEl) {
          msgEl.className = "cpe-l3-msg is-warn";
          msgEl.textContent =
            "Choose A, B, C or D for every question (missing: " + missing.join(", ") + ").";
        }
        return;
      }

      checked = true;
      clearResultStyles();
      var ok = 0;
      var html = "";

      U.questions.forEach(function (q) {
        var num = q.num;
        var got = getRowVal(num);
        var want = String(q.key).toUpperCase();
        var isOk = String(got).toUpperCase() === want;
        if (isOk) ok++;

        var row = root.querySelector('.cpe-l3-q-item[data-q="' + num + '"]');
        if (row) {
          row.classList.add(isOk ? "is-row-ok" : "is-row-bad");
          var verdict = row.querySelector(".cpe-l3-q-verdict-head");
          if (verdict) {
            verdict.textContent = isOk ? "✓" : "✗";
            verdict.className =
              "cpe-l3-q-verdict-head cpe-l3-q-verdict " +
              (isOk ? "cpe-l3-q-verdict--ok" : "cpe-l3-q-verdict--bad");
          }
          var fb = row.querySelector(".cpe-l3-q-fb");
          if (fb) {
            fb.hidden = false;
            fb.className = "cpe-l3-q-fb " + (isOk ? "is-ok" : "is-bad");
            fb.innerHTML = buildQFeedbackHtml(got, want, num, isOk);
          }
        }

        root.querySelectorAll('.cpe-l3-opt[data-q="' + num + '"]').forEach(function (lab) {
          var letter = String(lab.getAttribute("data-letter")).toUpperCase();
          lab.classList.remove("is-correct", "is-wrong", "is-key");
          if (letter === want) lab.classList.add("is-key");
          if (letter === String(got).toUpperCase()) {
            lab.classList.add(isOk ? "is-correct" : "is-wrong");
          }
        });

        html +=
          '<li class="' +
          (isOk ? "cpe-l3-key-li--ok" : "cpe-l3-key-li--bad") +
          '"><strong>' +
          esc(String(num)) +
          "</strong> · " +
          (isOk
            ? esc(want)
            : "yours " + esc(String(got)) + " → " + esc(want)) +
          "</li>";
      });

      var total = qCount();
      if (msgEl) {
        msgEl.className = ok === total ? "cpe-l3-msg is-ok" : "cpe-l3-msg is-warn";
        msgEl.textContent =
          ok === total
            ? "Perfect — " + total + "/" + total + ". See feedback under each question."
            : "Score: " + ok + "/" + total + ". Review the notes below each item.";
      }

      var keyBox = document.getElementById("cpe-l3-key-box");
      if (keyBox) {
        keyBox.hidden = false;
        keyBox.innerHTML =
          '<p><strong>Summary</strong> — detail under each question above.</p><ul class="cpe-l3-key-list">' +
          html +
          "</ul>";
      }

      if (msgEl && U.huntLabs && U.huntLabs.length) {
        msgEl.textContent += " Stage 2 — transcript hunt — is open below.";
      }
      showHuntStage();
    }

    function mountHuntIfNeeded() {
      if (huntMounted || !U.huntLabs || !U.huntLabs.length) return;
      var hunt = W.__CPE_LISTENING_P3_MC_HUNT__;
      if (!hunt || typeof hunt.mount !== "function") return;
      hunt.mount({
        prefix: "cpe-l3",
        questions: U.questions || [],
        labs: U.huntLabs,
        dialogueParagraphs: U.dialogueParagraphs || [],
      });
      huntMounted = true;
    }

    function showHuntStage() {
      var stage = document.getElementById("cpe-l3-hunt-stage");
      if (!stage) return;
      stage.hidden = false;
      mountHuntIfNeeded();
      stage.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function onReset() {
      checked = false;
      answerRows.forEach(function (row) {
        row.val = "";
      });
      clearResultStyles();
      root.querySelectorAll(".cpe-l3-opt.is-picked").forEach(function (btn) {
        btn.classList.remove("is-picked");
      });
      if (msgEl) {
        msgEl.textContent = "";
        msgEl.className = "cpe-l3-msg";
      }
      var keyBox = document.getElementById("cpe-l3-key-box");
      if (keyBox) {
        keyBox.hidden = true;
        keyBox.innerHTML = "";
      }
      var stage = document.getElementById("cpe-l3-hunt-stage");
      if (stage) stage.hidden = true;
      var huntFb = document.getElementById("cpe-l3-hunt-fb");
      if (huntFb) {
        huntFb.innerHTML = "";
        huntFb.style.display = "none";
      }
      var huntPassage = document.getElementById("cpe-l3-hunt-passage");
      if (huntPassage) {
        huntPassage.querySelectorAll(".lies-hit").forEach(function (h) {
          h.classList.remove("is-green", "is-red", "lies-bad");
        });
      }
    }

    function renderHuntShell() {
      if (!U.huntLabs || !U.huntLabs.length) return "";
      var tabs = "";
      U.questions.forEach(function (q, si) {
        tabs +=
          '<button type="button" class="cpe-l3-hunt-tab' +
          (si === 0 ? " is-active" : "") +
          '" role="tab" aria-selected="' +
          (si === 0 ? "true" : "false") +
          '">' +
          esc(String(q.num)) +
          "</button>";
      });
      return (
        '<div id="cpe-l3-hunt-stage" class="cpe-l3-hunt-stage" hidden>' +
        "<h3 class=\"cpe-l3-hunt-title\">Stage 2 \u00b7 Evidence &amp; distractor hunt</h3>" +
        '<p class="cpe-l3-hunt-lead">Left: <strong>correct answer</strong> and trap options. Right: mark <strong style="color:#44e0a1">evidence</strong> in green and <strong style="color:#ff7d87">distractors</strong> in red (EGE-style).</p>' +
        '<div class="cpe-l3-hunt-tools">' +
        '<span class="cpe-l3-hunt-tools-lab">Brush:</span>' +
        '<button type="button" class="cpe-l3-hunt-brush cpe-l3-hunt-brush--green is-active" data-brush="green">Evidence \u00b7 green</button>' +
        '<button type="button" class="cpe-l3-hunt-brush cpe-l3-hunt-brush--red" data-brush="red">Distractor \u00b7 red</button>' +
        '<button type="button" class="cpe-l3-hunt-brush cpe-l3-hunt-brush--erase" data-brush="erase">Erase</button>' +
        "</div>" +
        '<div class="cpe-l3-hunt-tabs" role="tablist">' +
        tabs +
        "</div>" +
        '<div class="cpe-l3-hunt-workspace">' +
        '<aside id="cpe-l3-hunt-target" class="cpe-l3-hunt-stmts" aria-label="Question panel"></aside>' +
        '<div class="cpe-l3-hunt-main">' +
        '<p id="cpe-l3-hunt-prompt" class="cpe-l3-hunt-prompt"></p>' +
        '<div id="cpe-l3-hunt-passage" class="cpe-l3-hunt-passage lies-passage"></div>' +
        '<div class="cpe-l3-hunt-actions">' +
        '<button type="button" id="cpe-l3-hunt-verify" class="cpe-l3-btn cpe-l3-btn--check">Check markings</button>' +
        '<button type="button" id="cpe-l3-hunt-reset" class="cpe-l3-btn cpe-l3-btn--reset">Clear this question</button>' +
        "</div>" +
        '<div id="cpe-l3-hunt-fb" class="cpe-l3-hunt-fb"></div>' +
        "</div></div></div>"
      );
    }

    function render() {
      huntMounted = false;
      answerRows = [];
      var html = '<ol class="cpe-l3-q-list">';

      U.questions.forEach(function (q) {
        answerRows.push({ num: q.num, val: "" });
        html +=
          '<li class="cpe-l3-q-item" data-q="' +
          esc(String(q.num)) +
          '">' +
          '<span class="cpe-l3-q-num">' +
          esc(String(q.num)) +
          '.<span class="cpe-l3-q-verdict-head" aria-hidden="true"></span></span>' +
          '<p class="cpe-l3-q-prompt">' +
          q.prompt +
          "</p>" +
          '<div class="cpe-l3-opts" role="radiogroup" aria-label="Question ' +
          esc(String(q.num)) +
          '">';

        var ci;
        for (ci = 0; ci < (q.choices || []).length; ci++) {
          var ch = q.choices[ci];
          var letter = String(ch.letter).toUpperCase();
          html +=
            '<button type="button" class="cpe-l3-opt" data-q="' +
            esc(String(q.num)) +
            '" data-letter="' +
            esc(letter) +
            '"><span class="cpe-l3-opt-letter">' +
            esc(letter) +
            '</span><span class="cpe-l3-opt-text">' +
            esc(ch.text) +
            "</span></button>";
        }

        html += '</div><div class="cpe-l3-q-fb" hidden aria-live="polite"></div></li>';
      });

      html += "</ol>";
      html += '<p class="cpe-l3-msg" id="cpe-l3-msg" aria-live="polite"></p>';
      html += '<div class="cpe-l3-btn-row">';
      html +=
        '<button type="button" id="cpe-l3-check" class="cpe-l3-btn cpe-l3-btn--check">Check answers</button>';
      html +=
        '<button type="button" id="cpe-l3-reset" class="cpe-l3-btn cpe-l3-btn--reset">Clear choices</button>';
      html += "</div>";
      html += '<div id="cpe-l3-key-box" class="cpe-l3-key-box" hidden></div>';
      html += renderHuntShell();

      root.innerHTML = html;
      msgEl = document.getElementById("cpe-l3-msg");

      root.querySelectorAll(".cpe-l3-opt").forEach(function (btn) {
        btn.addEventListener("click", function () {
          onChoiceClick(btn.getAttribute("data-q"), btn.getAttribute("data-letter"));
        });
      });

      var checkBtn = document.getElementById("cpe-l3-check");
      var resetBtn = document.getElementById("cpe-l3-reset");
      if (checkBtn) checkBtn.addEventListener("click", onCheck);
      if (resetBtn) resetBtn.addEventListener("click", onReset);
    }

    render();
  }

  W.CPE_LISTENING_P3_MC = { mount: mount };
})(typeof window !== "undefined" ? window : globalThis);
