/**
 * Reading — Going vegan (Unit 12) lexical items.
 * Single source for Sticky Board + optional games. Phrases match Part 7 (Jack–Rhona).
 *
 * STICKY BOARD POLICY (apply to all future sticky / gap games):
 * — The learner types **exactly one word** (`stickyAnswer` is a single token from the passage).
 * — That word must be the **lexical hook inside a collocation or idiom** — show the frame in
 *   `stickyBefore` / `stickyAfter` so `____` sits inside a fixed phrase (e.g. *sound ____ advice*,
 *   *threw in the ____*, *work out what ____ for you*), not a random hole in the sentence.
 * — Do **not** make the answer a bare function word: articles, auxiliaries, pronouns like *my/her*,
 *   generic prepositions alone, etc.
 * See `.cursor/rules/sticky-board-keywords.mdc`.
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
    var label = String(it.phrase || "").trim();
    if (label) return label;
    if (it.stickyBefore != null && it.stickyAnswer != null) {
      var left = String(it.stickyBefore || "").trim();
      var mid = String(it.stickyAnswer || "").trim();
      var right = String(it.stickyAfter || "").trim();
      return [left, mid, right].filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
    }
    var left2 = String(it.pre || "").replace(/^Phrase:\s*/i, "").trim();
    var mid2 = String(it.answer || "").trim();
    var right2 = String(it.post || "").trim();
    return [left2, mid2, right2].filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
  }

  var RAW = [
    {
      name: "Jack",
      lines: [
        {
          phrase: "Sound advice",
          hint: "Sensible guidance people trust.",
          stickyBefore: "It was probably ",
          stickyAnswer: "sound",
          stickyAfter: " advice, though I now know it was partly because she couldn't face cooking special meals for me.",
          contextSentence:
            "It was probably sound advice, though I now know it was partly because she couldn't face cooking special meals for me."
        },
        {
          phrase: "Hold it against her",
          hint: "Stay angry or blame someone for something.",
          stickyBefore: "and don't ",
          stickyAnswer: "hold",
          stickyAfter: " it against her.",
          contextSentence:
            "I totally get that, though, and don't hold it against her."
        },
        {
          phrase: "Invite me round for a meal",
          hint: "When hosts make the effort for a vegan guest.",
          stickyBefore: "non-vegans who ",
          stickyAnswer: "invite",
          stickyAfter: " me round for a meal.",
          contextSentence:
            "Now that I am a vegan, I'm very much aware of the extra effort involved for non-vegans who invite me round for a meal."
        },
        {
          phrase: "Extra effort involved",
          hint: "More work than the easy option.",
          stickyBefore: "aware of the extra ",
          stickyAnswer: "effort",
          stickyAfter: " involved for non-vegans who invite me round for a meal.",
          contextSentence:
            "Now that I am a vegan, I'm very much aware of the extra effort involved for non-vegans who invite me round for a meal."
        },
        {
          phrase: "Invariably amazed",
          hint: "Always surprised, every single time.",
          stickyBefore: "dinner guests are invariably ",
          stickyAnswer: "amazed",
          stickyAfter: " at how delicious it is.",
          contextSentence:
            "I always offer to take a dessert, and the other dinner guests are invariably amazed at how delicious it is."
        }
      ]
    },
    {
      name: "Sarah",
      lines: [
        {
          phrase: "Miss out on essential nutrients",
          hint: "Risk not getting vitamins and minerals you need.",
          stickyBefore: "worried I was missing out on essential ",
          stickyAnswer: "nutrients",
          stickyAfter: " and that this could have serious consequences for me.",
          contextSentence:
            "My parents were worried I was missing out on essential nutrients and that this could have serious consequences for me."
        },
        {
          phrase: "Pitfalls of a plant-based diet",
          hint: "Hidden problems if the plan is careless.",
          stickyBefore: "articles warning of the ",
          stickyAnswer: "pitfalls",
          stickyAfter: " of a plant-based diet.",
          contextSentence:
            "My dad had the biggest problem with it, and he kept sending me articles warning of the pitfalls of a plant-based diet."
        },
        {
          phrase: "Put his mind at rest",
          hint: "Calm worries with clear facts.",
          stickyBefore: "I tried to put his mind at ",
          stickyAnswer: "rest",
          stickyAfter: " by telling him I was taking supplements, but that just served to reinforce his idea that I wasn't eating properly.",
          contextSentence:
            "I tried to put his mind at rest by telling him I was taking supplements, but that just served to reinforce his idea that I wasn't eating properly."
        },
        {
          phrase: "Reinforce his idea",
          hint: "Make a belief stronger with examples.",
          stickyBefore: "but that just served to reinforce his ",
          stickyAnswer: "idea",
          stickyAfter: " that I wasn't eating properly.",
          contextSentence:
            "I tried to put his mind at rest by telling him I was taking supplements, but that just served to reinforce his idea that I wasn't eating properly."
        },
        {
          phrase: "Gradually come to accept",
          hint: "Slowly get used to something new.",
          stickyBefore: "they've both gradually come to ",
          stickyAnswer: "accept",
          stickyAfter: " my change to veganism, and that's really important to me, because it's a major part of who I am.",
          contextSentence:
            "Over time, though, they've both gradually come to accept my change to veganism, and that's really important to me, because it's a major part of who I am."
        }
      ]
    },
    {
      name: "Maya",
      lines: [
        {
          phrase: "Managing a long-term health condition",
          hint: "Living with an illness that lasts a long time.",
          stickyBefore: "feel better while managing a long-term health ",
          stickyAnswer: "condition",
          stickyAfter: ". I decided to support her by going vegan as well.",
          contextSentence:
            "My sister decided to go vegan to see if a plant-based diet would help her feel better while managing a long-term health condition."
        },
        {
          phrase: "Keep at it faithfully",
          hint: "Stick to the plan without cheating.",
          stickyBefore: "My sister has ",
          stickyAnswer: "kept",
          stickyAfter: " at it faithfully for over five years and shown amazing willpower.",
          contextSentence:
            "My sister has kept at it faithfully for over five years and shown amazing willpower."
        },
        {
          phrase: "Show amazing willpower",
          hint: "Prove very strong self-control.",
          stickyBefore: "five years and shown amazing ",
          stickyAnswer: "willpower",
          stickyAfter: ".",
          contextSentence:
            "My sister has kept at it faithfully for over five years and shown amazing willpower."
        },
        {
          phrase: "Throw in the towel",
          hint: "Give up completely.",
          stickyBefore: "I missed, and I threw in the ",
          stickyAnswer: "towel",
          stickyAfter: " after a few months.",
          contextSentence:
            "There were too many types of food I missed, and I threw in the towel after a few months."
        },
        {
          phrase: "On the plus side",
          hint: "The good part / advantage.",
          stickyBefore: "On the ",
          stickyAnswer: "plus",
          stickyAfter: " side, I learnt a surprising amount about nutrition and the health benefits of certain foods.",
          contextSentence:
            "On the plus side, I learnt a surprising amount about nutrition and the health benefits of certain foods."
        },
        {
          phrase: "Health benefits of certain foods",
          hint: "Why some ingredients help the body.",
          stickyBefore: "the health benefits of ",
          stickyAnswer: "certain",
          stickyAfter: " foods.",
          contextSentence:
            "On the plus side, I learnt a surprising amount about nutrition and the health benefits of certain foods."
        }
      ]
    },
    {
      name: "Justin",
      lines: [
        {
          phrase: "Make the switch overnight",
          hint: "Change everything in one day.",
          stickyBefore: "Many people try to make the switch ",
          stickyAnswer: "overnight",
          stickyAfter: " and it can prove too much, so they give up and go back to their vegetarian or meat-based diet.",
          contextSentence:
            "Many people try to make the switch overnight and it can prove too much, so they give up and go back to their vegetarian or meat-based diet."
        },
        {
          phrase: "Prove too much",
          hint: "Be more than someone can handle.",
          stickyBefore: "overnight and it can ",
          stickyAnswer: "prove",
          stickyAfter: " too much, so they give up and go back to their vegetarian or meat-based diet.",
          contextSentence:
            "Many people try to make the switch overnight and it can prove too much, so they give up and go back to their vegetarian or meat-based diet."
        },
        {
          phrase: "Do it in stages",
          hint: "Change step by step, not all at once.",
          stickyBefore: "The key is to do it in ",
          stickyAnswer: "stages",
          stickyAfter: ".",
          contextSentence:
            "The key is to do it in stages."
        },
        {
          phrase: "Work out what works for you",
          hint: "Discover your own practical routine.",
          stickyBefore: "It gives you time to work out what ",
          stickyAnswer: "works",
          stickyAfter: " for you and what doesn't.",
          contextSentence:
            "It gives you time to work out what works for you and what doesn't."
        },
        {
          phrase: "Reassure my parents",
          hint: "Stop family from worrying.",
          stickyBefore: "how to ",
          stickyAnswer: "reassure",
          stickyAfter: " my parents I knew what I was doing, or where to buy vegan products, there was always someone who could give me the benefit of their knowledge and experience.",
          contextSentence:
            "If I had any questions or concerns, like which health supplements to take, how to reassure my parents I knew what I was doing, or where to buy vegan products, there was always someone who could give me the benefit of their knowledge and experience."
        },
        {
          phrase: "Give me the benefit of their knowledge and experience",
          hint: "Let others teach you from what they learned.",
          stickyBefore: "who could give me the benefit of their knowledge and ",
          stickyAnswer: "experience",
          stickyAfter: ".",
          contextSentence:
            "If I had any questions or concerns, like which health supplements to take, how to reassure my parents I knew what I was doing, or where to buy vegan products, there was always someone who could give me the benefit of their knowledge and experience."
        }
      ]
    },
    {
      name: "Rhona",
      lines: [
        {
          phrase: "Do it ages ago",
          hint: "Wish you had started much earlier.",
          stickyBefore: "I wish I'd done it ages ",
          stickyAnswer: "ago",
          stickyAfter: ".",
          contextSentence:
            "I wish I'd done it ages ago."
        },
        {
          phrase: "Become increasingly aware of",
          hint: "Notice more and more over time.",
          stickyBefore: "I'd become increasingly ",
          stickyAnswer: "aware",
          stickyAfter: " of the suffering we cause to animals by what we eat, and I felt it was high time I took a stand against the way we treat them.",
          contextSentence:
            "I'd become increasingly aware of the suffering we cause to animals by what we eat, and I felt it was high time I took a stand against the way we treat them."
        },
        {
          phrase: "It was high time",
          hint: "Something should have happened already.",
          stickyBefore: "and I felt it was high ",
          stickyAnswer: "time",
          stickyAfter: " I took a stand against the way we treat them.",
          contextSentence:
            "I'd become increasingly aware of the suffering we cause to animals by what we eat, and I felt it was high time I took a stand against the way we treat them."
        },
        {
          phrase: "Take a stand against",
          hint: "Publicly oppose something wrong.",
          stickyBefore: "high time I took a ",
          stickyAnswer: "stand",
          stickyAfter: " against the way we treat them.",
          contextSentence:
            "I'd become increasingly aware of the suffering we cause to animals by what we eat, and I felt it was high time I took a stand against the way we treat them."
        },
        {
          phrase: "Let alone cook it",
          hint: "Not even the easier thing — much less the harder one.",
          stickyBefore: "try vegan food, let ",
          stickyAnswer: "alone",
          stickyAfter: " cook it, which is disappointing — it's not asking much for them to show a little interest.",
          contextSentence:
            "My friends only ever want to meet up in burger restaurants, and my parents seem determined not to try vegan food, let alone cook it, which is disappointing — it's not asking much for them to show a little interest."
        },
        {
          phrase: "It is not asking much",
          hint: "A small request, really reasonable.",
          stickyBefore: "disappointing — it's not asking ",
          stickyAnswer: "much",
          stickyAfter: " for them to show a little interest.",
          contextSentence:
            "My friends only ever want to meet up in burger restaurants, and my parents seem determined not to try vegan food, let alone cook it, which is disappointing — it's not asking much for them to show a little interest."
        },
        {
          phrase: "Get the hang of it",
          hint: "Learn the skill after practice.",
          stickyBefore: "I'm gradually getting the ",
          stickyAnswer: "hang",
          stickyAfter: " of it, and I like the independence it brings.",
          contextSentence:
            "I'm gradually getting the hang of it, and I like the independence it brings."
        }
      ]
    }
  ];

  var UNIT12_VEGAN_READING_BLOCKS = RAW.map(function (block) {
    return {
      name: block.name,
      items: block.lines.map(function (line) {
        var base = mk(line.phrase, line.hint);
        return {
          phrase: line.phrase,
          hint: line.hint,
          pre: base.pre,
          answer: base.answer,
          post: base.post,
          stickyBefore: line.stickyBefore,
          stickyAnswer: line.stickyAnswer,
          stickyAfter: line.stickyAfter,
          contextSentence: line.contextSentence
        };
      })
    };
  });

  W.UNIT12_VEGAN_READING_BLOCKS = UNIT12_VEGAN_READING_BLOCKS;
  W.unit12VeganFullPhraseFromItem = fullPhraseFromItem;
  W.unit12VeganMk = mk;
})(typeof window !== "undefined" ? window : this);
