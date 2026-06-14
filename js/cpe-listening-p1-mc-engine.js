/**
 * CPE Listening Part 1 — Multiple choice (A–C), three extracts × two questions.
 * mount({ rootId, pack }) — pack = unit object or id string in __CPE_LISTENING_P1_MC__.units
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
    if (packOrId && typeof packOrId === "object" && packOrId.extracts) return packOrId;
    var boot = W.__CPE_LISTENING_P1_MC__;
    var units = boot && boot.units ? boot.units : [];
    var want = String(packOrId || "");
    var i;
    for (i = 0; i < units.length; i++) {
      if (units[i] && String(units[i].id) === want) return units[i];
    }
    return units[0] || null;
  }

  function flattenQuestions(pack) {
    var out = [];
    (pack.extracts || []).forEach(function (ext) {
      (ext.questions || []).forEach(function (q) {
        out.push(q);
      });
    });
    return out;
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

  function hasKeys(pack) {
    return flattenQuestions(pack).every(function (q) {
      return q.key != null && String(q.key).trim() !== "";
    });
  }

  function renderQuestion(q) {
    var html =
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
    return html;
  }

  /**
   * @param {{ rootId: string, pack: object|string }} opts
   */
  function mount(opts) {
    opts = opts || {};
    var root = document.getElementById(opts.rootId || "cpe-l1-app");
    if (!root) return;

    var U = resolvePack(opts.pack);
    if (!U || !U.extracts || !U.extracts.length) {
      root.innerHTML =
        '<p style="color:#ff7d87">Task data did not load. Refresh the page.</p>';
      return;
    }

    var questions = flattenQuestions(U);
    if (!questions.length) {
      root.innerHTML =
        '<p style="color:#ff7d87">No questions in this pack.</p>';
      return;
    }

    var keysReady = hasKeys(U);
    var checked = false;
    var msgEl = null;
    var answerRows = [];

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
      for (i = 0; i < questions.length; i++) {
        if (String(questions[i].num) === String(num)) return questions[i];
      }
      return null;
    }

    function buildQFeedbackHtml(got, want, num, isOk) {
      var q = questionFor(num);
      var because = (q && q.explainEn) || "";
      var mark = isOk ? "\u2713" : "\u2717";
      var inner =
        '<p><span class="cpe-l3-fb-lab">Your answer:</span> <strong>' +
        esc(choiceLabel(q, got)) +
        "</strong>" +
        (isOk ? " \u2014 correct" : "") +
        "</p>";
      if (because) {
        inner +=
          '<p><span class="cpe-l3-fb-lab">' +
          (isOk ? "Because:" : "Correct answer:") +
          "</span> " +
          (isOk ? esc(because) : "<strong>" + esc(choiceLabel(q, want)) + "</strong> \u2014 " + esc(because)) +
          "</p>";
      } else if (!isOk) {
        inner +=
          '<p><span class="cpe-l3-fb-lab">Correct answer:</span> <strong>' +
          esc(choiceLabel(q, want)) +
          "</strong></p>";
      }
      if (!isOk && q && q.distractorWrongEn && q.distractorWrongEn[got]) {
        inner +=
          '<p><span class="cpe-l3-fb-lab">Why yours is wrong:</span> ' +
          esc(q.distractorWrongEn[got]) +
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
      questions.forEach(function (q) {
        if (!getRowVal(q.num)) missing.push(q.num);
      });
      if (missing.length) {
        if (msgEl) {
          msgEl.className = "cpe-l3-msg is-warn";
          msgEl.textContent =
            "Choose A, B or C for every question (missing: " + missing.join(", ") + ").";
        }
        return;
      }

      if (!keysReady) {
        if (msgEl) {
          msgEl.className = "cpe-l3-msg is-ok";
          msgEl.textContent =
            "All six answers selected. The answer key will be added when audio is ready.";
        }
        return;
      }

      checked = true;
      clearResultStyles();
      var ok = 0;
      var html = "";

      questions.forEach(function (q) {
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
            verdict.textContent = isOk ? "\u2713" : "\u2717";
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
          "</strong> \u00b7 " +
          (isOk ? esc(want) : "yours " + esc(String(got)) + " \u2192 " + esc(want)) +
          "</li>";
      });

      var total = questions.length;
      if (msgEl) {
        msgEl.className = ok === total ? "cpe-l3-msg is-ok" : "cpe-l3-msg is-warn";
        msgEl.textContent =
          ok === total
            ? "Perfect \u2014 " + total + "/" + total + "."
            : "Score: " + ok + "/" + total + ". Review the notes below each item.";
      }

      var keyBox = document.getElementById("cpe-l1-key-box");
      if (keyBox) {
        keyBox.hidden = false;
        keyBox.innerHTML =
          '<p><strong>Summary</strong></p><ul class="cpe-l3-key-list">' + html + "</ul>";
      }
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
      var keyBox = document.getElementById("cpe-l1-key-box");
      if (keyBox) {
        keyBox.hidden = true;
        keyBox.innerHTML = "";
      }
    }

    function render() {
      answerRows = [];
      var html = "";

      U.extracts.forEach(function (ext, ei) {
        html += '<section class="cpe-l3-extract" aria-labelledby="cpe-l1-ext-' + ei + '">';
        html +=
          '<p class="cpe-l3-extract-ctx" id="cpe-l1-ext-' +
          ei +
          '"><strong>Extract ' +
          (ei + 1) +
          ".</strong> " +
          ext.context +
          "</p>";
        html += '<ol class="cpe-l3-q-list">';
        (ext.questions || []).forEach(function (q) {
          answerRows.push({ num: q.num, val: "" });
          html += renderQuestion(q);
        });
        html += "</ol></section>";
      });

      html += '<p class="cpe-l3-msg" id="cpe-l1-msg" aria-live="polite"></p>';
      html += '<div class="cpe-l3-btn-row">';
      html +=
        '<button type="button" id="cpe-l1-check" class="cpe-l3-btn cpe-l3-btn--check">Check answers</button>';
      html +=
        '<button type="button" id="cpe-l1-reset" class="cpe-l3-btn cpe-l3-btn--reset">Clear choices</button>';
      html += "</div>";
      html += '<div id="cpe-l1-key-box" class="cpe-l3-key-box" hidden></div>';

      if (!keysReady) {
        html +=
          '<p class="cpe-l3-audio-pending-note" style="margin-top:12px;">Answer key not set yet \u2014 <strong>Check</strong> confirms you chose an option for every question.</p>';
      }

      root.innerHTML = html;
      msgEl = document.getElementById("cpe-l1-msg");

      root.querySelectorAll(".cpe-l3-opt").forEach(function (btn) {
        btn.addEventListener("click", function () {
          onChoiceClick(btn.getAttribute("data-q"), btn.getAttribute("data-letter"));
        });
      });

      var checkBtn = document.getElementById("cpe-l1-check");
      var resetBtn = document.getElementById("cpe-l1-reset");
      if (checkBtn) checkBtn.addEventListener("click", onCheck);
      if (resetBtn) resetBtn.addEventListener("click", onReset);
    }

    render();
  }

  W.CPE_LISTENING_P1_MC = { mount: mount };
})(typeof window !== "undefined" ? window : globalThis);
