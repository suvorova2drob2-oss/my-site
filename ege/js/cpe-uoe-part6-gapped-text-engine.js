/**
 * CPE Use of English Part 6 — Gapped text (A–H → gaps 1–7).
 * No answer key required: Check confirms all gaps filled and seven distinct letters used.
 *
 * mount({ rootId, pack })
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
    if (packOrId && typeof packOrId === "object" && packOrId.fragments) return packOrId;
    var boot = W.__CPE_UOE_PART6_GT__;
    var units = boot && boot.units ? boot.units : [];
    var want = String(packOrId || "");
    var i;
    for (i = 0; i < units.length; i++) {
      if (units[i] && String(units[i].id) === want) return units[i];
    }
    return units[0] || null;
  }

  function gapCount(pack) {
    var n = 0;
    (pack.blocks || []).forEach(function (b) {
      if (b.gap != null) n++;
    });
    return n;
  }

  function renderPassageHtml(pack) {
    var html = "";
    if (pack.passageHead) {
      html += '<p class="cpe-p6-passage-head">' + pack.passageHead + "</p>";
    }
    (pack.blocks || []).forEach(function (b) {
      if (b.gap != null) {
        html +=
          '<button type="button" class="cpe-p6-gap" data-gap="' +
          esc(String(b.gap)) +
          '" aria-label="Gap ' +
          esc(String(b.gap)) +
          '">' +
          esc(String(b.gap)) +
          "</button>";
      } else if (b.html) {
        html += "<p>" + b.html + "</p>";
      }
    });
    if (pack.sourceLine) {
      html += '<p class="cpe-p6-source">' + pack.sourceLine + "</p>";
    }
    return html;
  }

  function renderFragList(pack, container, compact) {
    if (!container) return;
    container.innerHTML = "";
    (pack.fragments || []).forEach(function (fr) {
      var letter = String(fr.letter).toUpperCase();
      if (compact) {
        var chip = document.createElement("button");
        chip.type = "button";
        chip.className = "cpe-p6-dock-chip";
        chip.textContent = letter;
        chip.setAttribute("data-letter", letter);
        container.appendChild(chip);
        return;
      }
      var el = document.createElement("button");
      el.type = "button";
      el.className = "cpe-p6-frag";
      el.setAttribute("data-letter", letter);
      el.innerHTML =
        '<span class="cpe-p6-frag-letter">' +
        esc(letter) +
        '</span><span class="cpe-p6-frag-text">' +
        fr.text +
        "</span>";
      container.appendChild(el);
    });
  }

  /**
   * @param {{ rootId: string, pack: object|string }} opts
   */
  function mount(opts) {
    opts = opts || {};
    var root = document.getElementById(opts.rootId || "cpe-p6-app");
    if (!root) return;

    var U = resolvePack(opts.pack);
    if (!U || !U.fragments || !U.fragments.length) {
      root.innerHTML =
        '<p style="color:#ff7d87">Task data did not load. Refresh the page.</p>';
      return;
    }

    var totalGaps = gapCount(U);
    var answers = {};
    var selectedLetter = null;
    var locked = false;
    var msgEl = null;

    root.innerHTML =
      '<div class="cpe-p6-workspace">' +
      '<div class="cpe-p6-passage-col">' +
      '<article class="cpe-p6-passage" id="cpe-p6-passage" aria-label="Gapped text"></article>' +
      '<div class="cpe-p6-actions">' +
      '<button type="button" id="cpe-p6-check" class="cpe-p6-btn cpe-p6-btn--check">Check</button>' +
      '<button type="button" id="cpe-p6-reset" class="cpe-p6-btn cpe-p6-btn--reset">Clear all</button>' +
      "</div>" +
      '<div id="cpe-p6-msg" class="cpe-p6-msg" hidden aria-live="polite"></div>' +
      "</div>" +
      '<aside class="cpe-p6-bank-col" aria-label="Paragraph bank">' +
      '<div class="cpe-p6-bank">' +
      "<h2>Paragraphs A&ndash;H</h2>" +
      '<p class="cpe-p6-bank-hint">Tap a paragraph letter, then tap a gap (1&ndash;7). One paragraph is extra.</p>' +
      '<div id="cpe-p6-frags"></div>' +
      "</div></aside></div>";

    var passageEl = document.getElementById("cpe-p6-passage");
    var fragsEl = document.getElementById("cpe-p6-frags");
    var dockFrags = document.getElementById("cpe-p6-dock-chips");
    var dockStatus = document.getElementById("cpe-p6-dock-status");

    if (passageEl) passageEl.innerHTML = renderPassageHtml(U);
    renderFragList(U, fragsEl, false);
    renderFragList(U, dockFrags, true);
    msgEl = document.getElementById("cpe-p6-msg");

    function usedLetters() {
      var used = {};
      Object.keys(answers).forEach(function (k) {
        if (answers[k]) used[answers[k]] = true;
      });
      return used;
    }

    function syncFrags() {
      var used = usedLetters();
      [fragsEl, dockFrags].forEach(function (container) {
        if (!container) return;
        container.querySelectorAll("[data-letter]").forEach(function (el) {
          var L = el.getAttribute("data-letter");
          var isUsed = !!used[L] && selectedLetter !== L;
          el.classList.toggle("is-used", isUsed);
          el.classList.toggle("is-selected", selectedLetter === L);
          if (el.disabled !== undefined) el.disabled = locked || isUsed;
        });
      });
      if (dockStatus) {
        if (selectedLetter) {
          dockStatus.textContent = "Selected: " + selectedLetter + " — tap a gap";
          dockStatus.className = "cpe-p6-dock__status is-active";
        } else {
          dockStatus.textContent = "Tap a letter, then a gap (1–7).";
          dockStatus.className = "cpe-p6-dock__status";
        }
      }
    }

    function syncGaps() {
      root.querySelectorAll(".cpe-p6-gap[data-gap]").forEach(function (gap) {
        var n = gap.getAttribute("data-gap");
        var val = answers[n] || "";
        gap.textContent = val || n;
        gap.classList.toggle("is-filled", !!val);
        gap.classList.toggle("is-locked", locked);
      });
    }

    function selectLetter(L) {
      if (locked) return;
      selectedLetter = selectedLetter === L ? null : L;
      syncFrags();
    }

    function handleFragClick(e) {
      var el = e.target.closest("[data-letter]");
      if (!el || el.classList.contains("is-used")) return;
      selectLetter(el.getAttribute("data-letter"));
      if (msgEl) msgEl.hidden = true;
    }

    function handleGapClick(e) {
      if (locked) return;
      var gap = e.target.closest(".cpe-p6-gap[data-gap]");
      if (!gap) return;
      var n = gap.getAttribute("data-gap");
      if (answers[n]) {
        delete answers[n];
        selectedLetter = null;
        syncGaps();
        syncFrags();
        if (msgEl) msgEl.hidden = true;
        return;
      }
      if (!selectedLetter) return;
      answers[n] = selectedLetter;
      selectedLetter = null;
      syncGaps();
      syncFrags();
      if (msgEl) msgEl.hidden = true;
    }

    if (fragsEl) fragsEl.addEventListener("click", handleFragClick);
    if (dockFrags) dockFrags.addEventListener("click", handleFragClick);
    if (passageEl) passageEl.addEventListener("click", handleGapClick);

    var checkBtn = document.getElementById("cpe-p6-check");
    if (checkBtn) {
      checkBtn.addEventListener("click", function () {
        if (locked) return;
        var missing = [];
        var lettersUsed = {};
        var dup = false;
        var n;
        for (n = 1; n <= totalGaps; n++) {
          if (!answers[n]) missing.push(n);
          else {
            if (lettersUsed[answers[n]]) dup = true;
            lettersUsed[answers[n]] = true;
          }
        }
        if (!msgEl) return;
        msgEl.hidden = false;
        if (missing.length) {
          msgEl.className = "cpe-p6-msg is-warn";
          msgEl.textContent =
            "Fill every gap (missing: " + missing.join(", ") + ").";
          return;
        }
        if (dup) {
          msgEl.className = "cpe-p6-msg is-warn";
          msgEl.textContent =
            "Each paragraph letter can be used only once. Tap a filled gap to clear it.";
          return;
        }
        if (Object.keys(lettersUsed).length !== totalGaps) {
          msgEl.className = "cpe-p6-msg is-warn";
          msgEl.textContent = "Use " + totalGaps + " different paragraph letters.";
          return;
        }
        msgEl.className = "cpe-p6-msg is-ok";
        msgEl.innerHTML =
          "<strong>All " +
          totalGaps +
          " gaps filled.</strong> Seven paragraphs used — one letter (A–H) left over. Compare with your coursebook key when you have it.";
        locked = true;
        syncGaps();
        syncFrags();
      });
    }

    var resetBtn = document.getElementById("cpe-p6-reset");
    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        answers = {};
        selectedLetter = null;
        locked = false;
        if (msgEl) msgEl.hidden = true;
        syncGaps();
        syncFrags();
      });
    }

    syncGaps();
    syncFrags();
  }

  W.CPE_UOE_PART6_GT = { mount: mount };
})(typeof window !== "undefined" ? window : globalThis);
