/**
 * Story quest — build gaps from lexis sticky answers (one missing word).
 * window.FCE_STORY_QUEST_LEXIS_KIT
 */
(function (W) {
  "use strict";

  function norm(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/[\u2019\u2018`´]/g, "'")
      .replace(/\s+/g, " ");
  }

  /** Last content word of stickyAnswer = gap; rest visible in the sentence. */
  function wordGapFromSticky(stickyAnswer) {
    var s = String(stickyAnswer || "").trim();
    if (!s) {
      return { before: "", after: "", answers: [], phraseFull: "" };
    }
    var words = s.split(/\s+/);
    if (words.length === 1) {
      var lone = words[0].replace(/[.!?,;:]+$/, "");
      var lp = words[0].slice(lone.length);
      return {
        before: "",
        after: lp,
        answers: [lone],
        phraseFull: s
      };
    }
    var last = words[words.length - 1];
    var punct = "";
    var m = last.match(/^(.+?)([.!?,;:]+)$/);
    var hidden;
    if (m) {
      hidden = m[1];
      punct = m[2];
    } else {
      hidden = last;
    }
    return {
      before: words.slice(0, -1).join(" ") + " ",
      after: punct,
      answers: [hidden],
      phraseFull: s
    };
  }

  function findPerson(lexis, personId) {
    var people = lexis.people || [];
    var i;
    for (i = 0; i < people.length; i++) {
      if (people[i].id === personId) return people[i];
    }
    return null;
  }

  function lineAt(person, lineIndex) {
    var lines = person.lines || [];
    return lines[lineIndex] || null;
  }

  /**
   * @param {object} opts
   * @param {object} opts.lexis — e.g. FCE_U1_LIFESTYLE_LEXIS
   * @param {object[]} opts.storyScenes — { id, act, kicker, flavor, bridge?, storyBefore?, storyAfter?, lex }
   * @param {function} [opts.sceneImgFor]
   * @param {string} [opts.imgBase]
   */
  function buildScenes(opts) {
    opts = opts || {};
    var lexis = opts.lexis;
    var meta = opts.storyScenes || [];
    var gapMode = opts.gapMode || "word";
    var imgFor = opts.sceneImgFor || function () {
      return "";
    };
    var out = [];
    var i;

    for (i = 0; i < meta.length; i++) {
      var m = meta[i];
      var person = findPerson(lexis, m.lex.person);
      var row = person ? lineAt(person, m.lex.line) : null;
      if (!person || !row) continue;

      var sticky = String(row.stickyAnswer || row.phrase || "").trim();
      var gap = wordGapFromSticky(sticky);
      var ctx = String(row.contextSentence || "").trim();
      var before;
      var after;
      if (m.storyBefore != null) {
        before = String(m.storyBefore);
        after = String(m.storyAfter || "");
      } else {
        before = gap.before;
        after = gap.after;
      }

      var answers;
      if (gapMode === "phrase") {
        answers = [sticky];
        var altPhrase = String(row.phrase || row.coolWord || "").trim();
        if (altPhrase && norm(altPhrase) !== norm(sticky)) {
          answers.push(altPhrase);
        }
      } else {
        answers = gap.answers.slice();
      }

      out.push({
        id: m.id,
        act: m.act,
        kicker: m.kicker || "",
        flavor: m.flavor || "",
        flavorTag: m.flavorTag || "",
        bridge: m.bridge || "",
        before: before,
        after: after,
        answers: answers,
        phraseFull: sticky || gap.phraseFull,
        bookLine: ctx,
        source:
          person.letter +
          " · " +
          (person.label.split(" · ")[0] || person.label),
        img: imgFor(m.id),
        imgFallback: opts.imgBase ? opts.imgBase + "sq-cover.png" : ""
      });
    }
    return out;
  }

  function allGapAnswersFlat(scenes, gapMode) {
    gapMode = gapMode || "word";
    var out = [];
    var seen = Object.create(null);
    (scenes || []).forEach(function (sc) {
      if (gapMode === "phrase") {
        var full = String(sc.phraseFull || "").trim();
        if (full) {
          var fk = norm(full);
          if (fk && !seen[fk]) {
            seen[fk] = true;
            out.push(full);
          }
        }
      }
      (sc.answers || []).forEach(function (a) {
        var k = norm(a);
        if (!k || seen[k]) return;
        seen[k] = true;
        out.push(String(a).trim());
      });
    });
    return out;
  }

  function allGapWordsFlat(scenes) {
    return allGapAnswersFlat(scenes, "word");
  }

  W.FCE_STORY_QUEST_LEXIS_KIT = {
    wordGapFromSticky: wordGapFromSticky,
    buildScenes: buildScenes,
    allGapAnswersFlat: allGapAnswersFlat,
    allGapWordsFlat: allGapWordsFlat,
    norm: norm
  };
})(typeof window !== "undefined" ? window : globalThis);
