/**
 * Unit 1 · Get phrases — Word Bank + lexical games.
 * window.FCE_U1_GET_LEXIS
 */
(function (W) {
  "use strict";

  var LINES = [
    {
      coolWord: "get in touch with someone",
      phrase: "get in touch with someone",
      hint: "Contact someone — write or call.",
      contextSentence:
        "Please do not hesitate to get in touch with our sales team if you have any questions.",
      stickyAnswer: "get in touch with"
    },
    {
      coolWord: "get ready",
      phrase: "get ready",
      hint: "Prepare yourself before going out.",
      contextSentence:
        "Come in. I have to finish getting ready. I won't keep you waiting long.",
      stickyAnswer: "getting ready"
    },
    {
      coolWord: "get paid",
      phrase: "get paid",
      hint: "Receive money for the work you do.",
      contextSentence:
        "I want to change jobs. I don't get paid enough for the work I do here.",
      stickyAnswer: "get paid"
    },
    {
      coolWord: "get stuck",
      phrase: "get stuck",
      hint: "Be unable to move — trapped.",
      contextSentence:
        "I'm sorry I'm so late. My bus got stuck in the snow and I had to walk.",
      stickyAnswer: "got stuck"
    },
    {
      coolWord: "get by",
      phrase: "get by",
      hint: "Manage with what you have — cope without something.",
      contextSentence:
        "I don't own a car; I can easily get by without one. I just use public transport.",
      stickyAnswer: "get by"
    },
    {
      coolWord: "get the chance to do something",
      phrase: "get the chance to do something",
      hint: "Have an opportunity to do something special.",
      contextSentence:
        "When we lived in Australia, I got the chance to go diving on a coral reef there.",
      stickyAnswer: "got the chance to"
    },
    {
      coolWord: "get over something",
      phrase: "get over something",
      hint: "Recover from a problem or difficult feeling.",
      contextSentence:
        "I enjoyed the party once I had got over my shyness and talked to a few people.",
      stickyAnswer: "got over my shyness"
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
      id: "get",
      letter: "Get",
      label: "Get phrases",
      lines: LINES.map(toGameLine)
    }
  ];

  function getTheme() {
    var blocks = [
      {
        name: "Get phrases · Ex. 2",
        lines: LINES
      }
    ];
    var dropLines = LINES.map(function (line) {
      return String(line.contextSentence || "").trim();
    }).filter(Boolean);
    return {
      id: "get",
      label: "Get phrases",
      short: "Get",
      blurb: " Ex. 2 — verb + particle collocations from the coursebook.",
      blocks: W.FCE_UNIT_LEX_STUBS
        ? W.FCE_UNIT_LEX_STUBS.packBlocks(blocks)
        : blocks.map(function (b) {
            return { name: b.name, items: b.lines };
          }),
      dropLines: dropLines
    };
  }

  W.FCE_U1_GET_LEXIS = {
    people: PEOPLE,
    lines: LINES,
    getTheme: getTheme,
    id: "get",
    label: "Get"
  };
})(typeof window !== "undefined" ? window : globalThis);
