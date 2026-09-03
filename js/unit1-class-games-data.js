/**
 * Unit 1 class games — tic-tac-toe pool + pair-work questions.
 * Requires: unit1-millionaire-data.js (U1_MILLIONAIRE_ROWS / U1_MILLIONAIRE_GAPS)
 */
(function (W) {
  "use strict";

  /** @type {Record<string, { q: string, answer: string, answerFull?: string }>} */
  var PAIR_CUSTOM = {
    "get by": {
      q: "Do you think you could easily get _____ without a car?",
      answer: "by",
      answerFull: "get by"
    },
    "get stuck": {
      q: "Have you ever got _____ in traffic or bad weather?",
      answer: "stuck",
      answerFull: "get stuck"
    },
    "get in touch with someone": {
      q: "How often do you get _____ friends you haven't seen for ages?",
      answer: "in touch with",
      answerFull: "get in touch with someone"
    },
    "get ready": {
      q: "How long does it take you to get _____ before a night out?",
      answer: "ready",
      answerFull: "get ready"
    },
    "get paid": {
      q: "Do you think you get _____ enough for the work you do?",
      answer: "paid",
      answerFull: "get paid"
    },
    "get the chance to do something": {
      q: "Have you ever got _____ to try something really special on holiday?",
      answer: "the chance to",
      answerFull: "get the chance to do something"
    },
    "get over something": {
      q: "Is it easy for you to get _____ shyness at parties?",
      answer: "over",
      answerFull: "get over something"
    },
    "run a tight ship": {
      q: "Does your family or class teacher run _____?",
      answer: "a tight ship",
      answerFull: "run a tight ship"
    },
    "run in the family": {
      q: "Does a talent for languages run _____ in your family?",
      answer: "in the family",
      answerFull: "run in the family"
    },
    "be running on empty": {
      q: "Do you ever feel you're running _____ after a long week?",
      answer: "on empty",
      answerFull: "be running on empty"
    },
    "run your eye over something": {
      q: "Do you run _____ your messages before you reply?",
      answer: "your eye over",
      answerFull: "run your eye over something"
    },
    "run for office": {
      q: "Would you ever run _____ at school or in a club?",
      answer: "for office",
      answerFull: "run for office"
    },
    "make a run for it": {
      q: "If the bus is leaving, would you make _____?",
      answer: "a run for it",
      answerFull: "make a run for it"
    },
    "run the risk of": {
      q: "Do you run _____ losing your keys if you don't use a bag?",
      answer: "the risk of",
      answerFull: "run the risk of"
    },
    "run its course": {
      q: "When a friendship runs _____, do you stay in touch anyway?",
      answer: "its course",
      answerFull: "run its course"
    },
    "buy brand-new clothes": {
      q: "Do you prefer to buy _____ or shop second-hand?",
      answer: "brand-new clothes",
      answerFull: "buy brand-new clothes"
    },
    "find some pretty decent stuff": {
      q: "Can you usually find _____ in charity shops near you?",
      answer: "some pretty decent stuff",
      answerFull: "find some pretty decent stuff"
    },
    "in good condition": {
      q: "Do you only buy clothes that are _____?",
      answer: "in good condition",
      answerFull: "in good condition"
    },
    "you get to support good causes": {
      q: "When you buy from a charity shop, you get _____ — does that matter to you?",
      answer: "to support good causes",
      answerFull: "you get to support good causes"
    },
    "increase your self-confidence": {
      q: "Can new clothes increase _____?",
      answer: "your self-confidence",
      answerFull: "increase your self-confidence"
    },
    "take ages": {
      q: "Does it take you _____ to choose what to wear?",
      answer: "ages",
      answerFull: "take ages"
    },
    "throw on the first thing I find in my wardrobe": {
      q: "On busy mornings, do you just throw _____?",
      answer: "on the first thing I find in my wardrobe",
      answerFull: "throw on the first thing I find in my wardrobe"
    },
    "get rid of": {
      q: "How often do you get _____ clothes you never wear?",
      answer: "rid of",
      answerFull: "get rid of"
    },
    "I sometimes lose track of time": {
      q: "Do you sometimes lose _____ when you're on your phone?",
      answer: "track of time",
      answerFull: "lose track of time"
    },
    "lose track of time (no phone)": {
      q: "Do you get bored easily or lose _____ without your phone?",
      answer: "track of time",
      answerFull: "lose track of time"
    },
    "I'm passionate about": {
      q: "What are you passionate _____ outside school?",
      answer: "about",
      answerFull: "be passionate about"
    },
    "I spend a few hours unwinding": {
      q: "How do you spend time _____ after a stressful day?",
      answer: "unwinding",
      answerFull: "spend time unwinding"
    },
    "I can catch up on my sleep": {
      q: "At the weekend, can you catch _____?",
      answer: "up on my sleep",
      answerFull: "catch up on sleep"
    },
    "it might be time to settle down": {
      q: "Do you think it might be time to settle _____ one day?",
      answer: "down",
      answerFull: "settle down"
    },
    "you might come across me hanging on a rope": {
      q: "Would you ever try a job where people hang _____ from high places?",
      answer: "on a rope",
      answerFull: "hang on a rope"
    },
    "none of my clothes ever end up in a second-hand shop": {
      q: "Do any of your old clothes ever end up in a _____?",
      answer: "second-hand shop",
      answerFull: "none of my clothes ever end up in a second-hand shop"
    },
    "I can't justify hanging on to it anymore": {
      q: "Do you keep clothes you can't _____ anymore?",
      answer: "justify hanging on to it",
      answerFull: "can't justify hanging on to it anymore"
    },
    "it's so scruffy I'm too embarrassed to wear it": {
      q: "Have you ever had something so scruffy you were _____?",
      answer: "too embarrassed to wear it",
      answerFull: "too embarrassed to wear it"
    },
    "it's literally falling apart at the seams": {
      q: "Do you own anything that's literally _____?",
      answer: "falling apart at the seams",
      answerFull: "falling apart at the seams"
    },
    "I replace them, precisely because they're no use to anyone": {
      q: "Would you donate clothes that are _____?",
      answer: "no use to anyone",
      answerFull: "no use to anyone"
    },
    "the quality's got gradually worse": {
      q: "Do you think the _____ of cheap clothes has got worse?",
      answer: "quality's got gradually worse",
      answerFull: "the quality's got gradually worse"
    },
    "it gives me a big lift": {
      q: "Does a compliment about your outfit give you _____?",
      answer: "a big lift",
      answerFull: "a big lift"
    },
    "My colleagues have got used to seeing me in something different every day": {
      q: "Could your classmates get used to seeing you in _____?",
      answer: "something different every day",
      answerFull: "something different every day"
    },
    "I tend to": {
      q: "Do you _____ wake up late or go to bed early?",
      answer: "tend to",
      answerFull: "I tend to"
    },
    "get a more normal job, something steady and secure": {
      q: "Would you like _____ one day — something steady and secure?",
      answer: "a more normal job",
      answerFull: "a more normal job, something steady and secure"
    },
    "That's how I make a living and pay for": {
      q: "Is that how you make _____ and pay for your hobbies?",
      answer: "a living",
      answerFull: "make a living"
    }
  };

  function escapeRegExp(s) {
    return String(s || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  /** Gapped sentence from book context — no spoiler in the prompt. */
  function gappedFromContext(text, gap) {
    var t = String(text || "").trim();
    var g = String(gap || "").trim();
    if (!t || !g) return "";
    var re = new RegExp(escapeRegExp(g), "i");
    if (!re.test(t)) return "";
    return t.replace(re, "_______");
  }

  function capitalizeFirst(s) {
    var t = String(s || "").trim();
    if (!t) return t;
    return t.charAt(0).toUpperCase() + t.slice(1);
  }

  function pairFromRow(row) {
    var cw = String(row.coolWord || row.phrase || "").trim();
    var custom = PAIR_CUSTOM[cw];
    if (custom) {
      return {
        pack: row.pack,
        packLabel: row.packLabel || row.pack,
        topic: row.topic,
        coolWord: cw,
        question: custom.q,
        answer: custom.answer,
        answerFull: custom.answerFull || cw,
        hint: row.hint || ""
      };
    }
    var gap = String(row.stickyAnswer || "").trim();
    var ctx = String(row.contextSentence || row.phrase || "").trim();
    var gapped = gappedFromContext(ctx, gap);
    if (!gapped && row.phrase) {
      gapped = gappedFromContext(row.phrase, gap);
    }
    if (!gapped) {
      return null;
    }
    gapped = capitalizeFirst(gapped);
    return {
      pack: row.pack,
      packLabel: row.packLabel || row.pack,
      topic: row.topic,
      coolWord: cw,
      question: gapped,
      answer: gap,
      answerFull: cw,
      hint: row.hint || ""
    };
  }

  /** Extra cards not tied 1:1 to a millionaire row */
  var PAIR_EXTRA = [
    {
      pack: "lifestyle",
      packLabel: "Lifestyle",
      topic: "Digital habits",
      coolWord: "lose track of time",
      question: PAIR_CUSTOM["lose track of time (no phone)"].q,
      answer: PAIR_CUSTOM["lose track of time (no phone)"].answer,
      answerFull: PAIR_CUSTOM["lose track of time (no phone)"].answerFull,
      hint: ""
    }
  ];

  function buildPairQuestions(rows) {
    var base = (rows || [])
      .map(pairFromRow)
      .filter(function (p) {
        return p && p.question && p.answer;
      });
    return base.concat(PAIR_EXTRA);
  }

  function filterByPack(list, pack) {
    if (!list || !list.length) return [];
    if (!pack || pack === "all") return list.slice();
    return list.filter(function (item) {
      return item.pack === pack;
    });
  }

  function tttFromGaps(gaps) {
    return (gaps || []).map(function (g) {
      return {
        topic: g.topic,
        pack: g.pack,
        lead: g.lead || g.topic,
        gap: g.gap,
        opts: g.opts,
        correct: g.correct,
        contextSentence: g.contextSentence
      };
    });
  }

  W.U1_CLASS_GAMES = {
    PAIR_CUSTOM: PAIR_CUSTOM,
    tttPool: function (pack) {
      return tttFromGaps(filterByPack(W.U1_MILLIONAIRE_GAPS || [], pack));
    },
    pairQuestions: function (pack) {
      var rows = filterByPack(W.U1_MILLIONAIRE_ROWS || [], pack);
      return buildPairQuestions(rows);
    },
    packLabels: W.U1_MILLIONAIRE_PACK_LABELS || {
      all: "All decks",
      lifestyle: "Lifestyle",
      clothes: "Clothes",
      get: "Get",
      run: "Run"
    }
  };
})(typeof window !== "undefined" ? window : globalThis);
