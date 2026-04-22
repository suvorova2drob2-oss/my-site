/**
 * Shared Sticky Board behaviour — load before *-blocks.js on sticky-board pages.
 * Policy: exactly ONE typed token per gap (the lexical hook inside a collocation/idiom).
 * See `.cursor/rules/sticky-board-keywords.mdc`.
 */
(function (W) {
  "use strict";

  W.STICKY_BOARD_TYPE_HINT =
    "Type one significant word — the lexical hook in the collocation or idiom (exact spelling from the text).";

  function stickyClueFromItem(it) {
    if (it.stickyAnswer != null && it.stickyBefore != null) {
      return String(it.stickyBefore) + "____" + String(it.stickyAfter || "");
    }
    var pre = String(it.pre || "").trimEnd();
    var post = String(it.post || "").trim();
    return pre + " ____ " + post;
  }

  function stickyExpectedAnswer(it) {
    if (it.stickyAnswer != null && String(it.stickyAnswer).length) return String(it.stickyAnswer).trim();
    return String(it.answer || "").trim();
  }

  function normAns(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/[\u2018\u2019]/g, "'")
      .replace(/\u2013|\u2014/g, "-")
      .replace(/\s+/g, " ")
      .replace(/,\s*$/, "")
      .replace(/^\s*,/, "");
  }

  function matchAns(input, answer) {
    return normAns(input) === normAns(answer);
  }

  /** Console warning if stickyAnswer contains whitespace (breaks single-word policy). */
  function auditStickySingleWordAnswers(blocks, datasetLabel) {
    if (!blocks || typeof blocks.forEach !== "function") return;
    var tag = datasetLabel || "sticky";
    blocks.forEach(function (block) {
      (block.items || []).forEach(function (it, idx) {
        if (it.stickyAnswer == null || !String(it.stickyAnswer).trim()) return;
        var ans = String(it.stickyAnswer).trim();
        if (/\s/.test(ans)) {
          console.warn(
            "[sticky-board:" + tag + "] " + String(block.name || "") + " #" + idx + ": stickyAnswer must be ONE word (no spaces):",
            ans
          );
        }
      });
    });
  }

  W.stickyBoardClueFromItem = stickyClueFromItem;
  W.stickyBoardExpectedAnswer = stickyExpectedAnswer;
  W.stickyBoardNormAns = normAns;
  W.stickyBoardMatchAns = matchAns;
  W.stickyBoardAuditSingleWordStickies = auditStickySingleWordAnswers;
})(typeof window !== "undefined" ? window : this);
