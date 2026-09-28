/**
 * Build display keys for Verb Pump items (both rounds).
 */
(function (w) {
  "use strict";

  function keyForItem(station, item) {
    if (station.kind === "build") {
      return item.orders[0].join(" ") + ".";
    }
    if (station.kind === "type" || station.kind === "fix") {
      return item.expected;
    }
    if (station.kind === "choice") {
      return item.answer;
    }
    if (station.kind === "pair") {
      return item.gaps
        .map(function (g) {
          return g.expected;
        })
        .join(" · ");
    }
    if (station.kind === "bank") {
      return item.gaps
        .map(function (g) {
          return g.expected;
        })
        .join(" / ");
    }
    return "";
  }

  function promptForItem(station, item) {
    if (item.cues) return item.cues;
    if (item.prompt) return item.prompt;
    if (station.kind === "type" || station.kind === "fix") {
      return [item.before, "(" + item.cue + ")", item.after].filter(Boolean).join(" ");
    }
    if (item.parts) return item.parts.join(" ____ ");
    return "";
  }

  function collectRound(roundId, pack) {
    if (!pack || !pack.stations) return null;
    return {
      id: roundId,
      label: pack.label || pack.title || roundId,
      stations: pack.stations.map(function (station) {
        return {
          id: station.id,
          title: station.title,
          items: station.items.map(function (item) {
            return {
              id: item.id,
              liveId: roundId + "-" + item.id,
              prompt: promptForItem(station, item),
              key: keyForItem(station, item)
            };
          })
        };
      })
    };
  }

  w.OGE_VERB_PUMP_KEYS = {
    keyForItem: keyForItem,
    promptForItem: promptForItem,
    all: function () {
      var out = [];
      if (w.OGE_VERB_PUMP) out.push(collectRound("mix", w.OGE_VERB_PUMP));
      if (w.OGE_VERB_PUMP_SIMPLE) out.push(collectRound("simple", w.OGE_VERB_PUMP_SIMPLE));
      if (w.OGE_UNDERSTANDING_VERBS) {
        out.push(collectRound("understanding-verbs", w.OGE_UNDERSTANDING_VERBS));
      }
      if (w.OGE_PRONOUN_SWITCH) {
        out.push(collectRound("pronoun-switch", w.OGE_PRONOUN_SWITCH));
      }
      if (w.OGE_RANK_UP) {
        out.push(collectRound("rank-up", w.OGE_RANK_UP));
      }
      if (w.OGE_FLEX_SCALE) {
        out.push(collectRound("flex-scale", w.OGE_FLEX_SCALE));
      }
      if (w.OGE_MANY_MODE) {
        out.push(collectRound("many-mode", w.OGE_MANY_MODE));
      }
      if (w.OGE_WORD_TAGS) {
        out.push(collectRound("word-tags", w.OGE_WORD_TAGS));
      }
      if (w.OGE_NOUN_BUILDER) {
        out.push(collectRound("noun-builder", w.OGE_NOUN_BUILDER));
      }
      if (w.OGE_VERB_REMIX) {
        out.push(collectRound("verb-remix", w.OGE_VERB_REMIX));
      }
      if (w.OGE_ADJECTIVE_ATLAS) {
        out.push(collectRound("adjective-atlas", w.OGE_ADJECTIVE_ATLAS));
      }
      if (w.OGE_ADVERB_FLOW) {
        out.push(collectRound("adverb-flow", w.OGE_ADVERB_FLOW));
      }
      if (w.OGE_CASTAWAY_EXAM) {
        out.push(collectRound("castaway-exam", w.OGE_CASTAWAY_EXAM));
      }
      return out.filter(Boolean);
    }
  };
})(typeof window !== "undefined" ? window : this);
