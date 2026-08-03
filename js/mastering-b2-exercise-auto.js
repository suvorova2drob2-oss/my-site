/**
 * Mastering B2 — auto-record exercise progress into MasteringB2Progress.
 * Uses data-mb2-* when present, otherwise infers from the page path.
 * Hooks Check / Done style buttons and parses common score feedback.
 */
(function (W) {
  "use strict";

  if (W.__MB2_EXERCISE_AUTO__) return;
  W.__MB2_EXERCISE_AUTO__ = true;

  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  function depthToRoot() {
    var path = (location.pathname || "").replace(/\\/g, "/");
    var parts = path.split("/").filter(Boolean);
    // file name is last segment
    var depth = Math.max(0, parts.length - 1);
    // If served from file:// or nested, prefer relative count from script? Use path segments after site root heuristically.
    // Safer: count ../ until js/mastering-b2-skill-progress.js would resolve — pages already know their depth via existing scripts.
    var m = path.match(/\/(unit\d+|Grammar|use-of-english|listening|Audio practice|Vocabulary|Changes at school|games)\b/i);
    if (!m) return 0;
    var idx = path.toLowerCase().indexOf(m[1].toLowerCase());
    var after = path.slice(idx).split("/").filter(Boolean);
    return Math.max(0, after.length - 1);
  }

  function ensureScript(src) {
    if (document.querySelector('script[src*="mastering-b2-skill-progress"]')) return;
    var s = document.createElement("script");
    s.src = src;
    document.head.appendChild(s);
  }

  function waitProg(cb, tries) {
    tries = tries == null ? 40 : tries;
    if (W.MasteringB2Progress) return cb(W.MasteringB2Progress);
    if (tries <= 0) return;
    setTimeout(function () {
      waitProg(cb, tries - 1);
    }, 50);
  }

  function applyMetaAttrs(meta) {
    var root =
      document.querySelector("main.page") ||
      document.querySelector("main") ||
      document.body;
    if (!root || !meta || !meta.unit || !meta.skill) return root;
    if (!root.getAttribute("data-mb2-unit")) root.setAttribute("data-mb2-unit", String(meta.unit));
    if (!root.getAttribute("data-mb2-skill")) root.setAttribute("data-mb2-skill", meta.skill);
    if (!root.getAttribute("data-mb2-ex") && meta.exerciseId) {
      root.setAttribute("data-mb2-ex", meta.exerciseId);
    }
    return root;
  }

  function pageMeta(Prog) {
    var fromDom = Prog.metaFromDom();
    if (fromDom && fromDom.unit && fromDom.skill) return fromDom;
    var inferred = Prog.inferMetaFromPath(location.pathname || location.href);
    if (inferred.unit && inferred.skill) {
      applyMetaAttrs(inferred);
      return {
        unit: inferred.unit,
        skill: inferred.skill,
        exerciseId: inferred.exerciseId,
      };
    }
    return null;
  }

  function parseScoreText(text) {
    text = String(text || "");
    if (!text.trim()) return null;
    if (/all\s+\d*\s*correct|perfect|well done|nice collocation|100\s*%/i.test(text)) {
      return { correct: 1, total: 1 };
    }
    var m = text.match(/(\d+)\s*(?:\/|out of)\s*(\d+)/i);
    if (m) return { correct: parseInt(m[1], 10), total: parseInt(m[2], 10) };
    m = text.match(/score\s*:?\s*(\d+)\s*(?:\/|of)\s*(\d+)/i);
    if (m) return { correct: parseInt(m[1], 10), total: parseInt(m[2], 10) };
    return null;
  }

  function countMarked() {
    var ok = document.querySelectorAll(
      ".ok, .is-correct, .correct, .lies-hit.is-green, [data-ok='1'], .chip.is-on.ok"
    ).length;
    var bad = document.querySelectorAll(
      ".bad, .bad-pick, .is-wrong, .incorrect, .lies-bad"
    ).length;
    if (ok + bad >= 2) return { correct: ok, total: ok + bad };
    return null;
  }

  function feedbackRoots() {
    return [
      document.getElementById("fb"),
      document.getElementById("feedback"),
      document.querySelector(".fb"),
      document.querySelector(".feedback"),
      document.querySelector("[data-mb2-feedback]"),
      document.querySelector(".result"),
      document.querySelector(".check-msg"),
    ].filter(Boolean);
  }

  function harvestScore() {
    var scored = null;
    feedbackRoots().forEach(function (el) {
      if (scored) return;
      scored = parseScoreText(el.textContent || "");
    });
    if (scored) return scored;
    return countMarked();
  }

  function recordScore(Prog, meta, correct, total) {
    if (!meta) return;
    var res = Prog.recordCheck(correct, total, meta);
    if (res && res.updated && Prog.isGoodPercent(res.percent)) {
      Prog.bumpScore(5);
    }
    return res;
  }

  function recordPercent(Prog, meta, percent) {
    if (!meta) return;
    return Prog.recordAndReward(
      {
        unit: meta.unit,
        skill: meta.skill,
        exerciseId: meta.exerciseId,
        percent: percent,
      },
      5
    );
  }

  function isCheckControl(el) {
    if (!el || el.disabled) return false;
    if (el.closest("a[href]")) return false;
    var id = (el.id || "").toLowerCase();
    var cls = (el.className && String(el.className)) || "";
    var txt = (el.textContent || "").replace(/\s+/g, " ").trim().toLowerCase();
    if (id === "btncheck" || id === "check" || id === "btn-check") return true;
    if (/\bbtn-check\b|\bcheck-btn\b|\bmb2-check\b/i.test(cls)) return true;
    if (/^(check|check answers|проверить|проверить ответы)$/i.test(txt)) return true;
    if (/^check\b/i.test(txt) && txt.length < 28) return true;
    return false;
  }

  function isDoneControl(el) {
    if (!el || el.disabled) return false;
    var id = (el.id || "").toLowerCase();
    var txt = (el.textContent || "").replace(/\s+/g, " ").trim().toLowerCase();
    if (id === "btndone" || id === "btnfinish" || id === "btncomplete") return true;
    if (/^(done|finish|complete|save selection|сохранить)$/i.test(txt)) return true;
    if (/\bis-done\b/.test(el.className || "") && /^done$/i.test(txt)) return true;
    return false;
  }

  function afterCheck(Prog, meta) {
    var tries = 0;
    function tick() {
      tries += 1;
      var scored = harvestScore();
      if (scored && scored.total > 0) {
        recordScore(Prog, meta, scored.correct, scored.total);
        return;
      }
      if (tries < 8) {
        setTimeout(tick, 60);
        return;
      }
      // No score found → do not invent a percent (opening / empty Check must stay 0)
    }
    setTimeout(tick, 40);
  }

  ready(function () {
    // Skip pure course home
    var path = (location.pathname || "").replace(/\\/g, "/");
    if (/\/fce\.html$/i.test(path) || /\/ege\.html$/i.test(path)) return;
    if (/\/unit\d+\.html$/i.test(path)) return; // hubs handled by hub-marks only

    var d = depthToRoot();
    var prefix = d <= 0 ? "" : new Array(d + 1).join("../");
    // Prefer already-correct relative paths used on the page
    var existing = document.querySelector('script[src*="mastering-b2-skill-progress"]');
    if (!existing) {
      ensureScript(prefix + "js/mastering-b2-skill-progress.js");
    }

    waitProg(function (Prog) {
      var meta = pageMeta(Prog);
      if (!meta || !meta.unit || !meta.skill) return;

      // Don't double-hook pages that already call Progress on every check —
      // still OK to listen; record() is best-only.
      document.addEventListener(
        "click",
        function (e) {
          var btn = e.target.closest("button, [role='button'], input[type='button'], input[type='submit']");
          if (!btn) return;
          if (isCheckControl(btn)) {
            afterCheck(Prog, meta);
            return;
          }
          if (isDoneControl(btn)) {
            // Only real completion: scored Check, or explicit Done (speaking / save) → 100%
            var scored = harvestScore();
            if (scored && scored.total > 0) {
              recordPercent(Prog, meta, Math.round((scored.correct / scored.total) * 100));
              return;
            }
            var txt = (btn.textContent || "").replace(/\s+/g, " ").trim().toLowerCase();
            // "Done" on last speaking step / Save selection — full completion only
            if (/^(done|finish|complete|save selection|сохранить)$/i.test(txt)) {
              recordPercent(Prog, meta, 100);
            }
          }
        },
        true
      );
    });
  });
})(window);
