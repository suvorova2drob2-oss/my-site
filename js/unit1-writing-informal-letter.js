/**
 * Unit 1 FCE — Writing Part 2 informal letter lesson UI
 */
(function () {
  "use strict";

  var D = window.U1_WRITING_INFORMAL_LETTER;
  if (!D) return;

  var STEP_IDS = ["read", "speak", "model", "linkers", "structure", "write"];
  var state = {
    step: 0,
    selectedChip: null,
    gapFills: ["", "", "", "", "", ""],
    doneSteps: {},
  };

  function $(id) {
    return document.getElementById(id);
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function norm(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/[’']/g, "'")
      .replace(/\s+/g, " ");
  }

  function optionById(id) {
    var opts = D.paragraphPurposes.options || [];
    for (var i = 0; i < opts.length; i++) {
      if (opts[i].id === id) return opts[i];
    }
    return null;
  }

  /** Hugo with correct linkers filled (read-only reference). */
  function renderHugoFilled(into) {
    if (!into) return;
    var html = "";
    D.hugoSegments.forEach(function (seg) {
      if (seg.t) {
        html += esc(seg.t).replace(/\n/g, "<br>");
      } else if (typeof seg.g === "number") {
        var word = (D.linkerKeys[seg.g] && D.linkerKeys[seg.g][0]) || "";
        html +=
          '<span class="wls-gap is-filled" style="cursor:default">' +
          esc(word) +
          "</span>";
      }
    });
    into.innerHTML = html;
  }

  function renderLetterCard(el, letter) {
    if (!el || !letter) return;
    var html = "";
    if (letter.greeting) {
      html += '<p class="wls-salute">' + esc(letter.greeting) + "</p>";
    }
    html +=
      '<p class="wls-body">' +
      esc(letter.body) +
      "</p>" +
      '<p class="wls-close">' +
      esc(letter.closing) +
      "</p>" +
      '<p class="wls-sign">' +
      esc(letter.signOff) +
      "</p>";
    el.innerHTML = html;
  }

  function renderHugo(into, interactive) {
    if (!into) return;
    var html = "";
    D.hugoSegments.forEach(function (seg) {
      if (seg.t) {
        html += esc(seg.t).replace(/\n/g, "<br>");
      } else if (typeof seg.g === "number") {
        var n = seg.g + 1;
        var filled = state.gapFills[seg.g] || "";
        if (interactive) {
          html +=
            '<button type="button" class="wls-gap' +
            (filled ? " is-filled" : "") +
            '" data-gap="' +
            seg.g +
            '" aria-label="Gap ' +
            n +
            '">' +
            (filled ? esc(filled) : "(" + n + ")") +
            "</button>" +
            '<span class="wls-gap-hint" data-hint="' +
            seg.g +
            '"></span>';
        } else {
          html +=
            '<span class="wls-gap is-filled" style="cursor:default">(' +
            n +
            ")</span>";
        }
      }
    });
    into.innerHTML = html;

    if (interactive) {
      into.querySelectorAll(".wls-gap").forEach(function (btn) {
        btn.addEventListener("click", function () {
          onGapClick(Number(btn.getAttribute("data-gap")));
        });
      });
    }
  }

  function syncChips() {
    var bank = $("wls-bank");
    if (!bank) return;
    bank.querySelectorAll(".wls-chip").forEach(function (chip) {
      var word = chip.getAttribute("data-word");
      var used = state.gapFills.indexOf(word) !== -1;
      chip.classList.toggle("is-used", used);
      chip.classList.toggle("is-selected", state.selectedChip === word);
      chip.disabled = used;
    });
  }

  function onChipClick(word) {
    if (state.gapFills.indexOf(word) !== -1) return;
    state.selectedChip = state.selectedChip === word ? null : word;
    syncChips();
    clearLinkerMarks();
  }

  function onGapClick(idx) {
    clearLinkerMarks();
    var gaps = document.querySelectorAll("#wls-hugo-gaps .wls-gap");
    gaps.forEach(function (g) {
      g.classList.toggle("is-active", Number(g.getAttribute("data-gap")) === idx);
    });

    if (state.selectedChip) {
      // Remove this chip from any other gap
      var word = state.selectedChip;
      for (var i = 0; i < state.gapFills.length; i++) {
        if (state.gapFills[i] === word) state.gapFills[i] = "";
      }
      state.gapFills[idx] = word;
      state.selectedChip = null;
      renderHugo($("wls-hugo-gaps"), true);
      syncChips();
      return;
    }

    // Empty filled gap on second click without chip
    if (state.gapFills[idx]) {
      state.gapFills[idx] = "";
      renderHugo($("wls-hugo-gaps"), true);
      syncChips();
    }
  }

  function clearLinkerMarks() {
    var root = $("wls-hugo-gaps");
    if (!root) return;
    root.querySelectorAll(".wls-gap").forEach(function (g) {
      g.classList.remove("is-ok", "is-bad", "is-active");
    });
    root.querySelectorAll(".wls-gap-hint").forEach(function (h) {
      h.textContent = "";
      h.classList.remove("is-show");
    });
    var fb = $("wls-linkers-fb");
    if (fb) {
      fb.textContent = "";
      fb.className = "wls-feedback";
    }
  }

  function checkLinkers() {
    var ok = 0;
    var root = $("wls-hugo-gaps");
    if (!root) return;
    D.linkerKeys.forEach(function (keys, i) {
      var filled = norm(state.gapFills[i]);
      var good = keys.some(function (k) {
        return norm(k) === filled;
      });
      var btn = root.querySelector('.wls-gap[data-gap="' + i + '"]');
      var hint = root.querySelector('.wls-gap-hint[data-hint="' + i + '"]');
      if (btn) {
        btn.classList.toggle("is-ok", good);
        btn.classList.toggle("is-bad", !good);
      }
      if (hint) {
        hint.textContent = good ? "" : keys[0];
        hint.classList.toggle("is-show", !good);
      }
      if (good) ok++;
    });
    var fb = $("wls-linkers-fb");
    if (fb) {
      fb.textContent = ok + " / " + D.linkerKeys.length + " correct";
      fb.className = "wls-feedback " + (ok === D.linkerKeys.length ? "is-ok" : "is-bad");
    }
    if (ok === D.linkerKeys.length) {
      state.doneSteps.linkers = true;
      updateStepDone();
      saveProgress(100);
    } else {
      saveProgress(Math.round((ok / D.linkerKeys.length) * 70));
    }
  }

  function resetLinkers() {
    state.gapFills = ["", "", "", "", "", ""];
    state.selectedChip = null;
    renderHugo($("wls-hugo-gaps"), true);
    syncChips();
    clearLinkerMarks();
  }

  function checkPurposes() {
    var items = D.paragraphPurposes.items;
    var ok = 0;
    items.forEach(function (item) {
      var sel = $(item.id + "-select");
      var hint = $(item.id + "-hint");
      if (!sel) return;
      var good = sel.value === item.key;
      sel.classList.toggle("is-ok", good);
      sel.classList.toggle("is-bad", !good && !!sel.value);
      if (hint) {
        var keyOpt = optionById(item.key);
        hint.textContent = good || !sel.value ? "" : item.key + " — " + (keyOpt ? keyOpt.text : "");
        hint.classList.toggle("is-show", !good && !!sel.value);
      }
      if (good) ok++;
    });
    var fb = $("wls-structure-fb");
    if (fb) {
      fb.textContent = ok + " / " + items.length + " correct";
      fb.className = "wls-feedback " + (ok === items.length ? "is-ok" : "is-bad");
    }
    if (ok === items.length) {
      state.doneSteps.structure = true;
      updateStepDone();
      saveProgress(100);
    }
  }

  function resetPurposes() {
    D.paragraphPurposes.items.forEach(function (item) {
      var sel = $(item.id + "-select");
      var hint = $(item.id + "-hint");
      if (sel) {
        sel.value = "";
        sel.classList.remove("is-ok", "is-bad");
      }
      if (hint) {
        hint.textContent = "";
        hint.classList.remove("is-show");
      }
    });
    var fb = $("wls-structure-fb");
    if (fb) {
      fb.textContent = "";
      fb.className = "wls-feedback";
    }
  }

  function buildPurposeSelects() {
    var box = $("wls-purpose-options");
    var list = $("wls-purpose-selects");
    if (!box || !list) return;
    var opts = D.paragraphPurposes.options || [];
    box.innerHTML =
      '<div class="wls-rail-label">Options</div>' +
      opts
        .map(function (o) {
          return (
            '<div class="wls-opt-row"><span class="wls-opt-key">' +
            esc(o.id) +
            "</span> " +
            esc(o.text) +
            "</div>"
          );
        })
        .join("");

    list.innerHTML = D.paragraphPurposes.items
      .map(function (item) {
        var optionsHtml = opts
          .map(function (o) {
            return (
              '<option value="' +
              esc(o.id) +
              '">' +
              esc(o.id) +
              "</option>"
            );
          })
          .join("");
        return (
          '<div class="wls-purpose-item">' +
          "<label for=\"" +
          item.id +
          '-select">' +
          esc(item.label) +
          "</label>" +
          '<select class="wls-purpose-select" id="' +
          item.id +
          '-select" aria-label="' +
          esc(item.label) +
          ' purpose">' +
          '<option value="">—</option>' +
          optionsHtml +
          "</select>" +
          '<div class="mb2-key-hint" id="' +
          item.id +
          '-hint"></div></div>'
        );
      })
      .join("");
  }

  function updateWordCount() {
    var ta = $("wls-write-ta");
    var meta = $("wls-word-count");
    if (!ta || !meta) return;
    var words = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
    var inRange = words >= 140 && words <= 190;
    meta.innerHTML =
      "<span" +
      (inRange ? ' class="in-range"' : "") +
      ">" +
      words +
      " words</span><span>Target " +
      esc(D.wordLimit) +
      "</span>";
    if (words >= 120) {
      state.doneSteps.write = true;
      updateStepDone();
      saveProgress(words >= 140 ? 100 : 85);
    }
  }

  function saveProgress(percent) {
    try {
      if (window.MasteringB2Progress && typeof window.MasteringB2Progress.record === "function") {
        window.MasteringB2Progress.record({
          unit: 1,
          skill: "writing",
          exerciseId: "informal-letter-p2",
          percent: percent,
        });
      }
    } catch (e) {
      /* ignore */
    }
  }

  function showStep(i) {
    if (i < 0 || i >= STEP_IDS.length) return;
    state.step = i;
    STEP_IDS.forEach(function (id, idx) {
      var panel = $("wls-panel-" + id);
      var btn = $("wls-step-" + id);
      if (panel) panel.classList.toggle("is-active", idx === i);
      if (btn) btn.classList.toggle("is-active", idx === i);
    });
    var page = document.querySelector(".wls-page");
    if (page) {
      page.classList.toggle("is-compact-chrome", STEP_IDS[i] !== "read");
    }
    if (STEP_IDS[i] === "speak") {
      renderHugo($("wls-speak-hugo"), false);
    }
    if (STEP_IDS[i] === "model") {
      renderHugo($("wls-hugo-preview"), false);
    }
    if (STEP_IDS[i] === "linkers") {
      renderHugo($("wls-hugo-gaps"), true);
      syncChips();
    }
    if (STEP_IDS[i] === "structure") {
      renderHugoFilled($("wls-hugo-structure"));
    }
    if (STEP_IDS[i] === "write") {
      renderHugoFilled($("wls-hugo-write"));
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function updateStepDone() {
    STEP_IDS.forEach(function (id) {
      var btn = $("wls-step-" + id);
      if (btn) btn.classList.toggle("is-done", !!state.doneSteps[id]);
    });
  }

  function bindSteps() {
    STEP_IDS.forEach(function (id, idx) {
      var btn = $("wls-step-" + id);
      if (btn) {
        btn.addEventListener("click", function () {
          showStep(idx);
        });
      }
    });
    document.querySelectorAll("[data-wls-next]").forEach(function (b) {
      b.addEventListener("click", function () {
        var cur = STEP_IDS[state.step];
        if (cur === "read" || cur === "speak" || cur === "model") {
          state.doneSteps[cur] = true;
          updateStepDone();
          saveProgress(40);
        }
        showStep(state.step + 1);
      });
    });
    document.querySelectorAll("[data-wls-prev]").forEach(function (b) {
      b.addEventListener("click", function () {
        showStep(state.step - 1);
      });
    });
  }

  function buildBank() {
    var bank = $("wls-bank");
    if (!bank) return;
    bank.innerHTML = "";
    D.linkerBank.forEach(function (word) {
      var chip = document.createElement("button");
      chip.type = "button";
      chip.className = "wls-chip";
      chip.setAttribute("data-word", word);
      chip.textContent = word;
      chip.addEventListener("click", function () {
        onChipClick(word);
      });
      bank.appendChild(chip);
    });
  }

  function buildHowTo() {
    var ol = $("wls-howto-list");
    if (!ol) return;
    ol.innerHTML = "";
    D.howTo.forEach(function (item) {
      var li = document.createElement("li");
      var main = document.createElement("span");
      main.textContent = item.main;
      li.appendChild(main);
      if (item.note) {
        var note = document.createElement("span");
        note.className = "note";
        if (item.underline && item.note.indexOf(item.underline) !== -1) {
          var parts = item.note.split(item.underline);
          note.appendChild(document.createTextNode(parts[0]));
          var u = document.createElement("u");
          u.textContent = item.underline;
          note.appendChild(u);
          note.appendChild(document.createTextNode(parts.slice(1).join(item.underline)));
        } else {
          note.textContent = item.note;
        }
        li.appendChild(note);
      }
      ol.appendChild(li);
    });
  }

  function init() {
    renderLetterCard($("wls-paula"), D.paula);
    renderLetterCard($("wls-speak-paula"), D.paula);
    renderLetterCard($("wls-tom"), D.tom);

    var speak1 = $("wls-speak1");
    if (speak1) {
      speak1.innerHTML = D.speakEx1
        .map(function (q, i) {
          return (
            '<div class="wls-prompt"><b>Ex. 1 · ' +
            (i + 1) +
            "</b>" +
            esc(q) +
            "</div>"
          );
        })
        .join("");
    }
    var speak2 = $("wls-speak2");
    if (speak2) {
      speak2.innerHTML = D.speakEx2
        .map(function (q) {
          return '<div class="wls-prompt"><b>Ex. 2</b>' + esc(q) + "</div>";
        })
        .join("");
    }

    var ex = $("wls-p1-example");
    if (ex) ex.textContent = D.paragraphPurposes.example;

    buildBank();
    buildPurposeSelects();
    buildHowTo();
    bindSteps();

    var chkL = $("wls-linkers-check");
    var rstL = $("wls-linkers-reset");
    if (chkL) chkL.addEventListener("click", checkLinkers);
    if (rstL) rstL.addEventListener("click", resetLinkers);

    var chkP = $("wls-structure-check");
    var rstP = $("wls-structure-reset");
    if (chkP) chkP.addEventListener("click", checkPurposes);
    if (rstP) rstP.addEventListener("click", resetPurposes);

    var ta = $("wls-write-ta");
    if (ta) ta.addEventListener("input", updateWordCount);
    updateWordCount();

    showStep(0);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
