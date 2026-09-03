/**
 * Unit 1 · Run expressions — Word Bank + lexical games.
 * window.FCE_U1_RUN_LEXIS
 */
(function (W) {
  "use strict";

  var LINES = [
    {
      coolWord: "run a tight ship",
      phrase: "run a tight ship",
      hint: "Run things in a strict, well-organised way.",
      contextSentence:
        "Sandra ran a tight ship and was a strict manager before she retired.",
      stickyAnswer: "ran a tight ship"
    },
    {
      coolWord: "run in the family",
      phrase: "run in the family",
      hint: "Be common among relatives — passed down in the family.",
      contextSentence:
        "It appears you have an excellent talent for drawing. Does it run in the family?",
      stickyAnswer: "run in the family"
    },
    {
      coolWord: "be running on empty",
      phrase: "be running on empty",
      hint: "Have no energy left — completely exhausted.",
      contextSentence:
        "After three all-night shifts she was still at her desk — clearly running on empty.",
      stickyAnswer: "running on empty"
    },
    {
      coolWord: "run your eye over something",
      phrase: "run your eye over something",
      hint: "Read something quickly to check it.",
      contextSentence:
        "Would you mind running your eye over my proposal for the meeting?",
      stickyAnswer: "running your eye over"
    },
    {
      coolWord: "run for office",
      phrase: "run for office",
      hint: "Try to get elected to an official position.",
      contextSentence:
        "I must consider coordinating my campaign of running for office of society president.",
      stickyAnswer: "running for office"
    },
    {
      coolWord: "make a run for it",
      phrase: "make a run for it",
      hint: "Try to escape by running away quickly.",
      contextSentence:
        "The thieves made a run for it after robbing the bank in the High Street.",
      stickyAnswer: "made a run for it"
    },
    {
      coolWord: "run the risk of",
      phrase: "run the risk of",
      hint: "Take the chance that something bad might happen.",
      contextSentence:
        "The local councillor is running the risk of losing her seat this year.",
      stickyAnswer: "running the risk of"
    },
    {
      coolWord: "run its course",
      phrase: "run its course",
      hint: "Continue until it naturally finishes.",
      contextSentence:
        "I think our friendship has run its course as we don't contact each other anymore.",
      stickyAnswer: "run its course"
    }
  ];

  function stickyFromContext(ctx, gap) {
    var c = String(ctx || "").trim();
    var g = String(gap || "").trim();
    if (!c || !g) {
      return { stickyBefore: "", stickyAnswer: g || "…", stickyAfter: "" };
    }
    var ix = c.toLowerCase().indexOf(g.toLowerCase());
    if (ix < 0) {
      return { stickyBefore: c + " ", stickyAnswer: g, stickyAfter: "" };
    }
    return {
      stickyBefore: c.slice(0, ix),
      stickyAnswer: c.slice(ix, ix + g.length),
      stickyAfter: c.slice(ix + g.length)
    };
  }

  function toGameLine(line) {
    var phrase = String(line.phrase || line.coolWord || "").trim();
    var ctx = String(line.contextSentence || phrase).trim();
    var st = stickyFromContext(ctx, line.stickyAnswer);
    return {
      phrase: phrase,
      coolWord: line.coolWord || phrase,
      hint: String(line.hint || "").trim(),
      contextSentence: ctx,
      stickyBefore: st.stickyBefore,
      stickyAnswer: st.stickyAnswer,
      stickyAfter: st.stickyAfter
    };
  }

  var PEOPLE = [
    {
      id: "run",
      letter: "Run",
      label: "Run expressions",
      lines: LINES.map(toGameLine)
    }
  ];

  function runTheme() {
    var blocks = [
      {
        name: "Run expressions · Ex. 2–3",
        lines: LINES
      }
    ];
    var dropLines = LINES.map(function (line) {
      return String(line.contextSentence || "").trim();
    }).filter(Boolean);
    return {
      id: "run",
      label: "Run expressions",
      short: "Run",
      blurb: " Ex. 2–3 — fixed expressions with run from the coursebook.",
      blocks: W.FCE_UNIT_LEX_STUBS
        ? W.FCE_UNIT_LEX_STUBS.packBlocks(blocks)
        : blocks.map(function (b) {
            return { name: b.name, items: b.lines };
          }),
      dropLines: dropLines
    };
  }

  W.FCE_U1_RUN_LEXIS = {
    people: PEOPLE,
    lines: LINES,
    runTheme: runTheme,
    id: "run",
    label: "Run"
  };
})(typeof window !== "undefined" ? window : globalThis);
