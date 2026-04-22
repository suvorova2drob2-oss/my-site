/**
 * Listening 12.1 (Restaurants) lexical items — single source for Word Bank / cards / sticky board.
 * mk() matches unit12-lexical-games.html (Restaurants folder).
 * Sticky board uses stickyBefore / stickyAnswer / stickyAfter + contextSentence (exact script line).
 * Gap policy: stickyAnswer = exactly ONE word (lexical hook in a collocation) — see
 * `.cursor/rules/sticky-board-keywords.mdc` and `js/sticky-board-core.js`.
 */
(function (W) {
  "use strict";

  function normalizeToken(t) {
    return String(t).replace(/^[^A-Za-z0-9']+|[^A-Za-z0-9']+$/g, "");
  }

  function mk(phrase, hint) {
    var words = String(phrase).trim().split(/\s+/).filter(Boolean);
    var cleanWords = words.map(normalizeToken);
    var stop = new Set([
      "a", "an", "the", "and", "or", "of", "to", "in", "on", "for", "with", "at", "by", "from",
      "is", "are", "was", "were", "be", "been", "being", "that", "this", "these", "those",
      "my", "your", "our", "their", "any", "all", "so", "as", "it", "its", "it's", "i", "we",
      "you", "they", "he", "she", "them", "us", "me"
    ]);

    function scoreWindow(start, len) {
      var slice = words.slice(start, start + len);
      var score = 0;
      for (var i = 0; i < slice.length; i += 1) {
        var w = slice[i].toLowerCase().replace(/[^a-z0-9'-]/g, "");
        if (!w) continue;
        if (!stop.has(w)) score += 2;
        if (w.length >= 7) score += 1;
      }
      return score;
    }

    var bestStart = 0;
    var bestLen = Math.min(words.length, words.length >= 8 ? 3 : 2);
    var bestScore = -1;
    var lens = words.length <= 3 ? [words.length] : [3, 2];
    for (var li = 0; li < lens.length; li += 1) {
      var len = lens[li];
      if (len <= 0 || len > words.length) continue;
      for (var s = 0; s <= words.length - len; s += 1) {
        var sc = scoreWindow(s, len);
        if (sc > bestScore) {
          bestScore = sc;
          bestStart = s;
          bestLen = len;
        }
      }
    }

    var chunk = cleanWords.slice(bestStart, bestStart + bestLen).join(" ");
    var pre = (bestStart > 0 ? words.slice(0, bestStart).join(" ") : "Phrase:") + " ";
    var postWords = words.slice(bestStart + bestLen);
    var post = postWords.length ? " " + postWords.join(" ") : "";
    return {
      hint: hint || phrase,
      pre: pre,
      answer: chunk,
      post: post
    };
  }

  function fullPhraseFromItem(it) {
    var left = String(it.pre || "").replace(/^Phrase:\s*/i, "").trim();
    var mid = String(it.answer || "").trim();
    var right = String(it.post || "").trim();
    return [left, mid, right].filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
  }

  function fullAnswerOf(it) {
    return fullPhraseFromItem(it) || String(it.answer || "").trim();
  }

  /**
   * stickyBefore + ____ + stickyAfter = what the learner sees.
   * stickyAnswer = exact word(s) to type (key chunk).
   * contextSentence = one full sentence from the Listening 12.1 script (same as treasure hunt).
   */
  var L121_RAW = [
    {
      name: "S1",
      lines: [
        {
          phrase: "fairly inexpensive restaurant",
          hint: "A place that didn't cost much.",
          stickyBefore: "fairly ",
          stickyAnswer: "inexpensive",
          stickyAfter: " restaurant",
          contextSentence:
            "It was a fairly inexpensive restaurant on the edge of the city, but low prices are no excuse for poor hygiene."
        },
        {
          phrase: "no excuse for poor hygiene",
          hint: "Low prices don't justify dirt.",
          stickyBefore: "no excuse for ",
          stickyAnswer: "poor",
          stickyAfter: " hygiene",
          contextSentence:
            "It was a fairly inexpensive restaurant on the edge of the city, but low prices are no excuse for poor hygiene."
        },
        {
          phrase: "sticky tables that hadn't been wiped",
          hint: "Tables still dirty.",
          stickyBefore: "sticky tables that hadn't been ",
          stickyAnswer: "wiped",
          stickyAfter: "",
          contextSentence:
            "What they didn't mention were the sticky tables that hadn't been wiped, the stained cutlery and the filthy floor."
        },
        {
          phrase: "stained cutlery",
          hint: "Dirty knives and forks.",
          stickyBefore: "stained ",
          stickyAnswer: "cutlery",
          stickyAfter: "",
          contextSentence:
            "What they didn't mention were the sticky tables that hadn't been wiped, the stained cutlery and the filthy floor."
        },
        {
          phrase: "filthy floor",
          hint: "Very dirty floor.",
          stickyBefore: "filthy ",
          stickyAnswer: "floor",
          stickyAfter: "",
          contextSentence:
            "What they didn't mention were the sticky tables that hadn't been wiped, the stained cutlery and the filthy floor."
        }
      ]
    },
    {
      name: "S2",
      lines: [
        {
          phrase: "There wasn't a massive amount of variety on the menu",
          hint: "Not many choices.",
          stickyBefore: "There wasn't a ",
          stickyAnswer: "massive",
          stickyAfter: " amount of variety on the menu",
          contextSentence:
            "There wasn't a massive amount of variety on the menu but, to be honest, I'd rather have just a few decent things to choose from than a huge number of dishes, some of which might not be particularly well cooked."
        },
        {
          phrase: "What spoilt it, though,",
          hint: "What ruined it was...",
          stickyBefore: "What ",
          stickyAnswer: "spoilt",
          stickyAfter: " it, though,",
          contextSentence:
            "What spoilt it, though, was the large group of people on the table next to ours, all talking at the tops of their voices."
        },
        {
          phrase: "talking at the tops of their voices",
          hint: "Speaking very loudly.",
          stickyBefore: "talking at the ",
          stickyAnswer: "tops",
          stickyAfter: " of their voices",
          contextSentence:
            "What spoilt it, though, was the large group of people on the table next to ours, all talking at the tops of their voices."
        }
      ]
    },
    {
      name: "S3",
      lines: [
        {
          phrase: "made a complaint",
          hint: "Said officially something was wrong.",
          stickyBefore: "made a ",
          stickyAnswer: "complaint",
          stickyAfter: "",
          contextSentence:
            "The only time I've ever made a complaint about anything was when I went for a meal once with my parents."
        },
        {
          phrase: "the meat in my stew was chewy",
          hint: "Stew meat was tough.",
          stickyBefore: "the meat in my stew was ",
          stickyAnswer: "chewy",
          stickyAfter: "",
          contextSentence:
            "I told the waiter the meat in my stew was chewy, and should have been left in the oven longer."
        },
        {
          phrase: "kick up a fuss",
          hint: "Complain loudly.",
          stickyBefore: "kick up a ",
          stickyAnswer: "fuss",
          stickyAfter: "",
          contextSentence:
            "Her attitude is, if something's not right, then kick up a fuss, make a noise about it, otherwise nothing will get changed."
        },
        {
          phrase: "charge for my dessert",
          hint: "Make me pay for dessert.",
          stickyBefore: "charge for my ",
          stickyAnswer: "dessert",
          stickyAfter: "",
          contextSentence:
            "As it was, the waiter said he couldn't change it, but he wouldn't charge for my dessert."
        }
      ]
    },
    {
      name: "S4",
      lines: [
        {
          phrase: "treated ourselves to dinner",
          hint: "We went for a special meal.",
          stickyBefore: "treated ",
          stickyAnswer: "ourselves",
          stickyAfter: " to dinner",
          contextSentence:
            "Recently, we treated ourselves to dinner in a five-star seafood restaurant."
        },
        {
          phrase: "overpriced",
          hint: "Too expensive.",
          stickyBefore: "the food was ",
          stickyAnswer: "overpriced",
          stickyAfter: ", the waiters were too formal, you didn't get much on your plate …",
          contextSentence:
            "We'd heard several negative things about the place before we went: the food was overpriced, the waiters were too formal, you didn't get much on your plate …"
        },
        {
          phrase: "you didn't get much on your plate",
          hint: "Portions looked small.",
          stickyBefore: "you didn't get much on your ",
          stickyAnswer: "plate",
          stickyAfter: "",
          contextSentence:
            "We'd heard several negative things about the place before we went: the food was overpriced, the waiters were too formal, you didn't get much on your plate …"
        },
        {
          phrase: "we're not big eaters",
          hint: "We don't eat huge amounts.",
          stickyBefore: "we're not ",
          stickyAnswer: "big",
          stickyAfter: " eaters",
          contextSentence:
            "But we're not big eaters and we felt like spoiling ourselves, so we ignored the warnings and booked."
        },
        {
          phrase: "we felt like spoiling ourselves",
          hint: "We wanted to indulge.",
          stickyBefore: "we felt like ",
          stickyAnswer: "spoiling",
          stickyAfter: " ourselves",
          contextSentence:
            "But we're not big eaters and we felt like spoiling ourselves, so we ignored the warnings and booked."
        },
        {
          phrase: "the food was to die for",
          hint: "The food was amazing.",
          stickyBefore: "the food was to ",
          stickyAnswer: "die",
          stickyAfter: " for",
          contextSentence:
            "Well, the food was to die for: the crab, the mussels, the seabass – absolutely delicious."
        },
        {
          phrase: "mussels",
          hint: "Shellfish dish.",
          stickyBefore: "the crab, the ",
          stickyAnswer: "mussels",
          stickyAfter: ", the seabass – absolutely delicious.",
          contextSentence:
            "Well, the food was to die for: the crab, the mussels, the seabass – absolutely delicious."
        },
        {
          phrase: "weren't in any hurry",
          hint: "Service was slow.",
          stickyBefore: "weren't in ",
          stickyAnswer: "any",
          stickyAfter: " hurry",
          contextSentence:
            "They certainly weren't in any hurry, and we'd run out of things to say to each other by the time the main course arrived."
        },
        {
          phrase: "run out of things to say to each other",
          hint: "Nothing left to chat about.",
          stickyBefore: "run out of ",
          stickyAnswer: "things",
          stickyAfter: " to say to each other",
          contextSentence:
            "They certainly weren't in any hurry, and we'd run out of things to say to each other by the time the main course arrived."
        }
      ]
    },
    {
      name: "S5",
      lines: [
        {
          phrase: "fussy eaters",
          hint: "Picky eaters.",
          stickyBefore: "fussy ",
          stickyAnswer: "eaters",
          stickyAfter: "",
          contextSentence:
            "My wife and I are both quite fussy eaters, so if we eat out, there have to be plenty of dishes to choose from."
        },
        {
          phrase: "offered hardly any choice at all",
          hint: "Very little choice.",
          stickyBefore: "offered ",
          stickyAnswer: "hardly",
          stickyAfter: " any choice at all",
          contextSentence:
            "Unfortunately, the restaurant in the hotel we stayed in with our walking group offered hardly any choice at all – just a few starters and a couple of mains – so we only ate there once."
        },
        {
          phrase: "the service was second to none",
          hint: "Service was excellent.",
          stickyBefore: "the service was second to ",
          stickyAnswer: "none",
          stickyAfter: "",
          contextSentence:
            "We had no complaints about the food we actually ordered, and the service was second to none."
        },
        {
          phrase: "come across as antisocial",
          hint: "Seem unfriendly.",
          stickyBefore: "come across as ",
          stickyAnswer: "antisocial",
          stickyAfter: "",
          contextSentence:
            "We might have come across as antisocial, but we preferred to eat in some of the other restaurants in the area."
        }
      ]
    }
  ];

  var UNIT12_L121_BLOCKS = L121_RAW.map(function (b) {
    return {
      name: b.name,
      items: b.lines.map(function (line) {
        var base = mk(line.phrase, line.hint);
        return Object.assign({}, base, {
          stickyBefore: line.stickyBefore,
          stickyAnswer: line.stickyAnswer,
          stickyAfter: line.stickyAfter,
          contextSentence: line.contextSentence
        });
      })
    };
  });

  W.UNIT12_L121_BLOCKS = UNIT12_L121_BLOCKS;
  W.unit12L121FullPhraseFromItem = fullPhraseFromItem;
  W.unit12L121FullAnswerOf = fullAnswerOf;
})(typeof window !== "undefined" ? window : globalThis);
