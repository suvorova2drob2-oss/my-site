/**
 * Unit 7 · Black Friday reading — MCQ, gaps, paraphrase, role-play.
 * Depends on unit7-black-friday-reading-lexis.js
 */
(function (W) {
  "use strict";

  function article() {
    var api = W.FCE_U7_BLACK_FRIDAY_LEXIS;
    return (api && api.article) || { lines: [], label: "Black Friday" };
  }

  function shuffle(arr) {
    var a = arr.slice();
    var i;
    for (i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  }

  var MCQ_PROMPTS = {
    "the annual scramble for discount presents":
      "November sales feel like a yearly rush for cheaper gifts. The article calls it «______».",
    "outbreaks of chaos that commonly erupt in the shopping aisles":
      "TV crews love filming when «______» as people fight over deals.",
    "bargain-hunters squabble over flat-screen TVs":
      "Last year neighbours filmed shoppers who «______».",
    "step over people to grab a cut-price Xbox":
      "The text says some buyers literally «______».",
    "the modern discount bonanza":
      "Thanksgiving weekend has turned into «______» with the same dark nickname.",
    "the same sinister name":
      "Accountants and historians argue about why the event keeps «______» as Black Friday.",
    "call in sick":
      "After Thanksgiving, workers would «______» to get a long weekend — bad for the economy.",
    "atrocious traffic congestion":
      "In Philadelphia in 1975, reporters wrote about «______» near the malls.",
    "cease operating at a loss":
      "One theory says shops finally «______» on that day.",
    "move from the red into the black":
      "Accountants say profits mean stores «______».",
    "particularly unruly scenes that unfolded":
      "Some UK supermarkets quit the event after «______» in 2014.",
    "embraced the mania":
      "France, Brazil and others have «______» in recent years.",
    "occasional dishonest business practices":
      "Critics also mention «______» during the sales.",
    "the strain it places on staff":
      "Unions complain about «______» at big chains.",
    "artificially inflating prices":
      "Gap B warns that shops may be «______» before fake “discounts”.",
    "temporarily selling inferior products just to meet demand":
      "Another trick is «______»."
  };

  var GAP_ITEMS = {
    "the annual scramble for discount presents": {
      before: "Each November sees ",
      after: " for holiday gifts in malls worldwide."
    },
    "outbreaks of chaos that commonly erupt in the shopping aisles": {
      before: "Cameras return because of ",
      after: "."
    },
    "bargain-hunters squabble over flat-screen TVs": {
      before: "Shoppers ",
      after: " while others hunt for consoles."
    },
    "step over people to grab a cut-price Xbox": {
      before: "Some even ",
      after: "."
    },
    "the modern discount bonanza": {
      before: "Thanksgiving weekend is now a ",
      after: " with a worrying label."
    },
    "the same sinister name": {
      before: "Economists ask why it keeps ",
      after: "."
    },
    "call in sick": {
      before: "Workers would ",
      after: " after Thanksgiving for a four-day break."
    },
    "atrocious traffic congestion": {
      before: "The press described ",
      after: " around Philadelphia."
    },
    "cease operating at a loss": {
      before: "Stores might finally ",
      after: " on that day."
    },
    "move from the red into the black": {
      before: "Profits mean they ",
      after: " in accounting terms."
    },
    "particularly unruly scenes that unfolded": {
      before: "Retailers quit after ",
      after: " in 2014."
    },
    "embraced the mania": {
      before: "Many countries have ",
      after: "."
    },
    "occasional dishonest business practices": {
      before: "Watchdogs list ",
      after: "."
    },
    "the strain it places on staff": {
      before: "Unions highlight ",
      after: " on shop workers."
    },
    "artificially inflating prices": {
      before: "Stores may be ",
      after: " before cutting prices again."
    },
    "temporarily selling inferior products just to meet demand": {
      before: "They may also be ",
      after: "."
    }
  };

  function answersFor(line) {
    var cw = String(line.coolWord || "").trim();
    var ph = String(line.phrase || cw).trim();
    var hw = String(line.headword || "").trim();
    var out = [];
    if (cw) out.push(cw);
    if (ph && ph !== cw) out.push(ph);
    if (hw && out.indexOf(hw) < 0) out.push(hw);
    return out.length ? out : [cw];
  }

  function wrongFromPool(correct) {
    var wrong = [];
    article().lines.forEach(function (other) {
      var w = String(other.coolWord || other.phrase || "").trim();
      if (w && w !== correct && wrong.indexOf(w) < 0) wrong.push(w);
    });
    return wrong;
  }

  function buildMcq() {
    var lines = article().lines;
    var letters = ["A", "B", "C", "D"];
    return lines.map(function (line) {
      var correct = String(line.coolWord || line.phrase || "").trim();
      var wrong = shuffle(wrongFromPool(correct)).slice(0, 3);
      var opts = shuffle(
        [{ text: correct, ok: true }].concat(
          wrong.map(function (t) {
            return { text: t, ok: false };
          })
        )
      );
      var choices = [];
      var answer = "A";
      var oi;
      for (oi = 0; oi < opts.length; oi++) {
        var lid = letters[oi] || "D";
        choices.push({ id: lid, text: opts[oi].text });
        if (opts[oi].ok) answer = lid;
      }
      var prompt =
        MCQ_PROMPTS[correct] ||
        "Pick the phrase from the Black Friday article: " + (line.hint || "");
      return {
        prompt: prompt,
        choices: choices,
        answer: answer,
        hint: line.contextSentence || correct
      };
    });
  }

  function buildGaps() {
    var lines = article().lines;
    var bank = [];
    var seen = Object.create(null);
    lines.forEach(function (line) {
      var w = String(line.coolWord || line.phrase || "").trim();
      if (w && !seen[w]) {
        seen[w] = true;
        bank.push(w);
      }
    });
    var items = lines.map(function (line) {
      var cw = String(line.coolWord || "").trim();
      var gap = GAP_ITEMS[cw];
      if (gap) {
        return {
          before: gap.before,
          after: gap.after,
          answers: answersFor(line)
        };
      }
      return {
        before: "Complete with a phrase from the article: ",
        after: "",
        answers: answersFor(line)
      };
    });
    return {
      title: "Fill in the gaps — Black Friday",
      note: "New sentences · phrases from the Part 6 reading text.",
      bank: bank,
      items: items
    };
  }

  function buildParaphrase() {
    var lines = article().lines;
    return {
      variants: [
        {
          kicker: "Flip",
          title: "Black Friday · reading",
          note: "Read the sense — flip and say the article phrase aloud.",
          promptLabel: "Sense",
          answerLabel: "Phrase from the text",
          items: lines.map(function (line) {
            return {
              sentence: line.hint || line.coolWord,
              answers: answersFor(line)
            };
          })
        }
      ]
    };
  }

  var ROLEPLAY = {
    title: "Sale day debate",
    characters: [
      { id: "nina", name: "Nina", blurb: "Loves a bargain — still shocked by the crowds." },
      { id: "omar", name: "Omar", blurb: "Sceptical — staff, traffic, and “deals”." }
    ],
    highlights: article().lines.map(function (line) {
      return String(line.coolWord || line.phrase || "").trim();
    }),
    lines: [
      {
        who: "nina",
        text:
          "Every November I'm part of the annual scramble for discount presents — I tell myself it's for the holidays."
      },
      {
        who: "omar",
        text:
          "The cameras always return for outbreaks of chaos that commonly erupt in the shopping aisles when bargain-hunters squabble over flat-screen TVs."
      },
      {
        who: "nina",
        text:
          "I've watched people step over people to grab a cut-price Xbox. It's horrible, but the crowd pulls you in."
      },
      {
        who: "omar",
        text:
          "So the modern discount bonanza keeps the same sinister name as days of national disaster — that should make us pause."
      },
      {
        who: "nina",
        text:
          "One story is that after Thanksgiving workers would call in sick to stretch the weekend — bad for the economy, apparently."
      },
      {
        who: "omar",
        text:
          "By the seventies the press were already describing atrocious traffic congestion around the malls in Philadelphia."
      },
      {
        who: "nina",
        text:
          "Accountants have a nicer theory: shops cease operating at a loss and finally move from the red into the black."
      },
      {
        who: "omar",
        text:
          "Some UK chains walked away after particularly unruly scenes that unfolded in 2014 — I don't blame them."
      },
      {
        who: "nina",
        text:
          "Yet France, Brazil and half the planet have embraced the mania anyway."
      },
      {
        who: "omar",
        text:
          "Think about the strain it places on staff, the safety risks, and occasional dishonest business practices — like artificially inflating prices before a fake “sale”."
      },
      {
        who: "nina",
        text:
          "Or temporarily selling inferior products just to meet demand when the shelves go empty."
      },
      {
        who: "omar",
        text: "If that's the price of a deal, maybe we stay home and reread the article."
      },
      {
        who: "nina",
        text: "Fair — but you'll still see me online at midnight. Just don't film me in the aisles."
      }
    ]
  };

  W.U7_BLACK_FRIDAY_PACK = {
    exercises: buildMcq,
    gaps: buildGaps,
    paraphrase: buildParaphrase,
    roleplay: function () {
      return ROLEPLAY;
    }
  };
})(typeof window !== "undefined" ? window : globalThis);
