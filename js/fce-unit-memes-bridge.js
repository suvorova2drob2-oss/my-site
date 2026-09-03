/**
 * Meme deck registry for embedded Memes on Vocabulary Games pages.
 * window.FCE_UNIT_MEMES.forUnit(n)
 */
(function (W) {
  "use strict";

  function prefixImg(cards, base) {
    if (!base) return cards;
    return cards.map(function (c) {
      var copy = Object.assign({}, c);
      if (copy.img && copy.img.indexOf("/") !== 0 && copy.img.indexOf("http") !== 0) {
        copy.img = base + copy.img;
      }
      return copy;
    });
  }

  function unit1Decks() {
    var decks = [];
    if (W.UNIT1_GET_MEME_CARDS && W.UNIT1_GET_MEME_CARDS.length) {
      decks.push({
        id: "get",
        label: "Get",
        mode: "flip",
        cards: prefixImg(W.UNIT1_GET_MEME_CARDS, "unit1-vocabulary/get/memes/")
      });
    }
    if (W.UNIT1_RUN_MEME_CARDS && W.UNIT1_RUN_MEME_CARDS.length) {
      decks.push({
        id: "run",
        label: "Run",
        mode: "flip",
        cards: prefixImg(W.UNIT1_RUN_MEME_CARDS, "unit1-vocabulary/run-expressions/memes/")
      });
    }
    if (W.UNIT1_CLOTHES_MEME_PARTS && W.UNIT1_CLOTHES_MEME_PARTS.length) {
      decks.push({
        id: "clothes",
        label: "Clothes",
        mode: "parts",
        parts: W.UNIT1_CLOTHES_MEME_PARTS.map(function (p) {
          return {
            part: p.part,
            label: p.label,
            cards: prefixImg(p.cards || [], "unit1-vocabulary/clothes/memes/")
          };
        })
      });
    }
    if (W.UNIT1_LIFESTYLE_MEME_PARTS && W.UNIT1_LIFESTYLE_MEME_PARTS.length) {
      decks.push({
        id: "lifestyle",
        label: "Lifestyle",
        mode: "parts",
        parts: W.UNIT1_LIFESTYLE_MEME_PARTS.map(function (p) {
          return {
            part: p.part,
            label: p.label,
            cards: prefixImg(p.cards || [], "unit1-vocabulary/lifestyle/memes/")
          };
        })
      });
    }
    return decks;
  }

  function stubDecksFromThemes(themes) {
    return (themes || []).slice(0, 3).map(function (th, i) {
      var cards = [];
      var blocks = th.blocks || [];
      blocks.forEach(function (b) {
        (b.items || []).forEach(function (it) {
          var phrase = String(it.phrase || it.hint || "").trim();
          if (!phrase || /^PLACEHOLDER/i.test(phrase)) return;
          cards.push({
            id: "stub-" + i + "-" + cards.length,
            headword: phrase,
            img: "",
            example: String(it.contextSentence || phrase).trim(),
            highlight: String(it.answer || "").trim() || phrase,
            hints: [String(it.hint || "").trim()].filter(Boolean)
          });
        });
      });
      return {
        id: th.id || "t" + i,
        label: th.short || th.label || "Theme " + (i + 1),
        mode: "flip",
        cards: cards,
        stub: true
      };
    });
  }

  function forUnit(unit) {
    unit = Number(unit) || 0;
    if (unit === 1) {
      var u1 = unit1Decks();
      if (u1.length) return { decks: u1 };
    }
    if (W.FCE_UNIT_LEX_STUBS && typeof W.FCE_UNIT_LEX_STUBS.forUnit === "function") {
      var cfg = W.FCE_UNIT_LEX_STUBS.forUnit(unit);
      return { decks: stubDecksFromThemes(cfg.themes) };
    }
    return { decks: [] };
  }

  function flatCardsFromDeck(deck) {
    if (!deck) return [];
    if (deck.mode === "parts") {
      var out = [];
      (deck.parts || []).forEach(function (p) {
        (p.cards || []).forEach(function (c) {
          out.push(c);
        });
      });
      return out;
    }
    return deck.cards || [];
  }

  function normKey(s) {
    return String(s || "")
      .toLowerCase()
      .replace(/[\u2019\u2018`´]/g, "'")
      .replace(/[^a-z0-9\s'-]/gi, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function memeCacheForUnit(unit) {
    unit = Number(unit) || 0;
    var cacheKey = "u" + unit;
    if (!W.__FCE_MEME_IMG_CACHE) W.__FCE_MEME_IMG_CACHE = Object.create(null);
    if (W.__FCE_MEME_IMG_CACHE[cacheKey]) return W.__FCE_MEME_IMG_CACHE[cacheKey];
    var byTheme = Object.create(null);
    var api = forUnit(unit);
    (api.decks || []).forEach(function (d) {
      byTheme[d.id] = flatCardsFromDeck(d);
    });
    W.__FCE_MEME_IMG_CACHE[cacheKey] = byTheme;
    return byTheme;
  }

  function findMemeImg(unit, themeId, ans, match) {
    var byTheme = memeCacheForUnit(unit);
    var cards = [];
    if (themeId && byTheme[themeId]) {
      cards = byTheme[themeId];
    } else {
      var k;
      for (k in byTheme) {
        if (Object.prototype.hasOwnProperty.call(byTheme, k)) {
          cards = cards.concat(byTheme[k]);
        }
      }
    }
    if (!cards.length) return "";
    var keys = [match, ans].map(normKey).filter(Boolean);
    var ci;
    for (ci = 0; ci < cards.length; ci++) {
      var card = cards[ci];
      if (!card || !card.img) continue;
      var probes = [card.headword, card.highlight, card.sentence]
        .concat(card.hints || [])
        .map(normKey)
        .filter(Boolean);
      var ki;
      var pi;
      for (ki = 0; ki < keys.length; ki++) {
        if (!keys[ki]) continue;
        for (pi = 0; pi < probes.length; pi++) {
          if (!probes[pi]) continue;
          if (
            keys[ki] === probes[pi] ||
            keys[ki].indexOf(probes[pi]) >= 0 ||
            probes[pi].indexOf(keys[ki]) >= 0
          ) {
            return String(card.img).trim();
          }
        }
        /* loose: 2+ shared tokens */
        var keyTokens = keys[ki].split(/\s+/).filter(function (t) {
          return t.length > 3;
        });
        if (keyTokens.length >= 2) {
          for (pi = 0; pi < probes.length; pi++) {
            if (!probes[pi]) continue;
            var hit = 0;
            var ti;
            for (ti = 0; ti < keyTokens.length; ti++) {
              if (probes[pi].indexOf(keyTokens[ti]) >= 0) hit++;
            }
            if (hit >= 2) return String(card.img).trim();
          }
        }
      }
    }
    return "";
  }

  function bingoRowsForTheme(unit, themeId) {
    unit = Number(unit) || 0;
    var combinedId =
      (W.FCE_SB_COMBINED_THEME_ID && W.FCE_SB_COMBINED_THEME_ID) || "all-themes";
    var api = forUnit(unit);
    var decks = api.decks || [];
    var rows = [];
    var seen = Object.create(null);

    function pushCard(card) {
      if (!card) return;
      var line = String(card.example || card.sentence || "").trim();
      if (!line) return;
      if (seen[line]) return;
      seen[line] = true;
      var head = String(card.headword || card.highlight || "").trim();
      rows.push({
        ans: line,
        match: line,
        hint: head || line,
        headword: head,
        img: String(card.img || "").trim(),
        memeId: String(card.id || "").trim(),
        bingoMode: "meme"
      });
    }

    function addDeck(deck) {
      if (!deck) return;
      flatCardsFromDeck(deck).forEach(pushCard);
    }

    if (themeId === combinedId) {
      decks.forEach(addDeck);
      return rows;
    }
    var i;
    for (i = 0; i < decks.length; i++) {
      if (decks[i].id === themeId) {
        addDeck(decks[i]);
        break;
      }
    }
    return rows;
  }

  W.FCE_UNIT_MEMES = {
    forUnit: forUnit,
    prefixImg: prefixImg,
    findMemeImg: findMemeImg,
    flatCardsFromDeck: flatCardsFromDeck,
    bingoRowsForTheme: bingoRowsForTheme
  };
})(typeof window !== "undefined" ? window : globalThis);
