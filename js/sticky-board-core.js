/**
 * Shared Sticky Board behaviour — load before *-blocks.js on sticky-board pages.
 * Policy: exactly ONE typed token per gap (the lexical hook inside a collocation/idiom).
 * See `.cursor/rules/sticky-board-keywords.mdc`.
 */
(function (W) {
  "use strict";

  W.STICKY_BOARD_TYPE_HINT =
    "Type one significant word — the lexical hook in the collocation or idiom (exact spelling from the text).";

  function carveClueFromContext(ctx, gap) {
    var c = String(ctx || "").trim();
    var g = String(gap || "").trim();
    if (!c) return "";
    if (!g) return c.replace(/\S+/g, "____");
    var ix = c.toLowerCase().indexOf(g.toLowerCase());
    if (ix >= 0) {
      var before = c.slice(0, ix);
      var after = c.slice(ix + g.length);
      if (!before.trim() && !after.trim() && g.length >= c.length * 0.75) {
        var gw = g.split(/\s+/).filter(Boolean);
        var wi;
        for (wi = gw.length - 1; wi >= 0; wi -= 1) {
          var token = gw[wi].replace(/^[^A-Za-z0-9']+|[^A-Za-z0-9']+$/g, "");
          if (token.length < 3) continue;
          var ti = c.toLowerCase().indexOf(token.toLowerCase());
          if (ti >= 0) {
            return c.slice(0, ti) + "____" + c.slice(ti + token.length);
          }
        }
        return c.replace(/\s+\S+\s*$/, " ____");
      }
      return before + "____" + after;
    }
    var words = g.split(/\s+/).filter(Boolean);
    var wi;
    for (wi = words.length - 1; wi >= 0; wi -= 1) {
      var word = words[wi].replace(/^[^A-Za-z0-9']+|[^A-Za-z0-9']+$/g, "");
      if (word.length < 3) continue;
      ix = c.toLowerCase().indexOf(word.toLowerCase());
      if (ix >= 0) {
        return c.slice(0, ix) + "____" + c.slice(ix + word.length);
      }
    }
    return c + " ____";
  }

  function stickyClueFromItem(it) {
    var before =
      it.stickyBefore != null ? String(it.stickyBefore) : "";
    var after = it.stickyAfter != null ? String(it.stickyAfter) : "";
    if (before.trim() || after.trim()) {
      return before + "____" + after;
    }
    var ctx = String(it.contextSentence || it.phrase || "").trim();
    var ans = stickyExpectedAnswer(it);
    if (ctx) {
      var carved = carveClueFromContext(ctx, ans);
      if (carved && carved.indexOf("____") >= 0) {
        if (carved.replace(/____/g, "").trim().length >= 3) return carved;
        carved = carveClueFromContext(ctx, ans.split(/\s+/).pop() || ans);
        if (carved && carved.replace(/____/g, "").trim().length >= 3) return carved;
      }
    }
    var pre = String(it.pre || "").trimEnd();
    var post = String(it.post || "").trim();
    if (pre.trim() || post.trim()) {
      return pre + " ____ " + post;
    }
    var hint = String(it.hint || "").trim();
    if (hint) return hint + " → ____";
    return "____";
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
