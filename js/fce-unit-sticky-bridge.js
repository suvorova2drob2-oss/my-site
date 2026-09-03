/**
 * Sticky board packs per unit — Unit 1 real packs; others from lexical themes / U12 blocks.
 * window.FCE_UNIT_STICKY.forUnit(n) → { packs, getPack }
 */
(function (W) {
  "use strict";

  function getPackFromList(packs, id) {
    for (var i = 0; i < packs.length; i++) {
      if (packs[i].id === id) return packs[i];
    }
    return packs[0] || null;
  }

  function trainerItemsToSticky(items) {
    return (items || []).map(function (it) {
      if (it.stickyAnswer != null && it.stickyBefore != null) return Object.assign({}, it);
      var ans = String(it.answer || it.stickyAnswer || "").trim();
      var ctx = String(it.contextSentence || "").trim();
      if (!ctx) {
        var pre = String(it.pre || "").replace(/^Phrase:\s*/i, "").trim();
        var post = String(it.post || "").trim();
        ctx = [pre, ans, post].filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
      }
      var preS = String(it.pre != null ? it.pre : it.stickyBefore || "");
      var postS = String(it.post != null ? it.post : it.stickyAfter || "");
      return {
        hint: it.hint || ans,
        phrase: it.phrase || ctx,
        stickyBefore: preS,
        stickyAnswer: ans,
        stickyAfter: postS,
        contextSentence: ctx
      };
    });
  }

  function blocksFromTrainer(blocks, contextTag) {
    return (blocks || []).map(function (b) {
      return {
        name: b.name,
        items: trainerItemsToSticky(b.items)
      };
    });
  }

  function themesToPacks(themes, unit) {
    return (themes || []).map(function (th) {
      return {
        id: th.id || th.short || "theme",
        jumpLabel: th.short || th.label || "Theme",
        title: "Sticky board — " + (th.label || th.short || "Theme"),
        subtitleHtml:
          (th.blurb ? th.blurb + " · " : "") +
          "One word per gap · <b>Context</b> = full line.",
        contextTag: th.label || th.short || "Unit " + unit,
        blocks: th.blocks || []
      };
    });
  }

  function unit12Packs() {
    var packs = [];
    if (W.UNIT12_NAOMI_BLOCKS && W.UNIT12_NAOMI_BLOCKS.length) {
      packs.push({
        id: "naomi",
        jumpLabel: "Naomi",
        title: "Sticky board — Naomi · Health Matters",
        subtitleHtml:
          "<b>Naomi Price</b> reading phrases — one word per gap.",
        contextTag: "Naomi · Health Matters",
        blocks: blocksFromTrainer(W.UNIT12_NAOMI_BLOCKS)
      });
    }
    if (W.UNIT12_L121_BLOCKS && W.UNIT12_L121_BLOCKS.length) {
      packs.push({
        id: "l121",
        jumpLabel: "Restaurants",
        title: "Sticky board — Listening 12.1",
        subtitleHtml:
          "<b>Five speakers</b> — restaurant collocations.",
        contextTag: "Listening 12.1 · Restaurants",
        blocks: blocksFromTrainer(W.UNIT12_L121_BLOCKS)
      });
    }
    if (W.UNIT12_VEGAN_READING_BLOCKS && W.UNIT12_VEGAN_READING_BLOCKS.length) {
      packs.push({
        id: "vegan",
        jumpLabel: "Going vegan",
        title: "Sticky board — Going vegan",
        subtitleHtml:
          "<b>Part 7 reading</b> — Jack & Rhona phrases.",
        contextTag: "Going vegan · Part 7",
        blocks: blocksFromTrainer(W.UNIT12_VEGAN_READING_BLOCKS)
      });
    }
    return packs;
  }

  function forUnit(unit) {
    unit = Number(unit) || 0;
    if (unit === 1 && W.FCE_U1_STICKY && W.FCE_U1_STICKY.packs) {
      return W.FCE_U1_STICKY;
    }
    if (unit === 12) {
      var u12 = unit12Packs();
      if (u12.length) {
        return {
          packs: u12,
          getPack: function (id) {
            return getPackFromList(u12, id);
          }
        };
      }
    }
    if (!W.FCE_UNIT_LEX_STUBS || typeof W.FCE_UNIT_LEX_STUBS.forUnit !== "function") {
      return null;
    }
    var cfg = W.FCE_UNIT_LEX_STUBS.forUnit(unit);
    var packs = themesToPacks(cfg.themes, unit);
    if (!packs.length) return null;
    return {
      packs: packs,
      getPack: function (id) {
        return getPackFromList(packs, id);
      }
    };
  }

  W.FCE_UNIT_STICKY = { forUnit: forUnit };
})(typeof window !== "undefined" ? window : globalThis);
