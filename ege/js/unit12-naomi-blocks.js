/**
 * Naomi Price — Health Matters (Listening 12.3) lexical items.
 * Single source for Word Bank (Naomi folder) + Pro Fitness sticky board.
 * mk() matches unit12-lexical-games.html.
 * Sticky gaps: one word per gap (hook in a collocation) — `.cursor/rules/sticky-board-keywords.mdc`, `js/sticky-board-core.js`.
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

  var NAOMI_RAW = [
    {
      name: "A Opening",
      lines: [
        {
          phrase: "develop their fitness, strength and posture",
          hint: "Work on physical condition and posture.",
          stickyBefore: "develop their fitness, strength and ",
          stickyAnswer: "posture",
          stickyAfter: "",
          contextSentence:
            "So besides helping them develop their fitness, strength and posture, I also work on their diet and lifestyle habits."
        },
        {
          phrase: "carry out a needs analysis",
          hint: "Find out each client's goals first.",
          stickyBefore: "carry out a ",
          stickyAnswer: "needs",
          stickyAfter: " analysis",
          contextSentence:
            "Of course, each client has their own specific, individual goals, so before we do anything I carry out a needs analysis in order to establish exactly what it is they want to achieve."
        },
        {
          phrase: "eating habits",
          hint: "What they usually eat.",
          stickyBefore: "their ",
          stickyAnswer: "eating",
          stickyAfter: " habits",
          contextSentence:
            "This includes asking them about their eating habits, their injury history and any medical complaints or conditions, such as high blood pressure."
        },
        {
          phrase: "their injury history and any medical complaints or conditions",
          hint: "Past injuries and health conditions.",
          stickyBefore: "their injury history and any medical ",
          stickyAnswer: "complaints",
          stickyAfter: " or conditions",
          contextSentence:
            "This includes asking them about their eating habits, their injury history and any medical complaints or conditions, such as high blood pressure."
        },
        {
          phrase: "high blood pressure",
          hint: "Hypertension.",
          stickyBefore: "high ",
          stickyAnswer: "blood",
          stickyAfter: " pressure",
          contextSentence:
            "This includes asking them about their eating habits, their injury history and any medical complaints or conditions, such as high blood pressure."
        },
        {
          phrase: "give advice on nutrition",
          hint: "Food guidance, not only exercise.",
          stickyBefore: "give advice on ",
          stickyAnswer: "nutrition",
          stickyAfter: "",
          contextSentence:
            "Then basically, I design exercise routines and give advice on nutrition in response to the information they give me."
        },
        {
          phrase: "there's a wide range",
          hint: "Many different reasons.",
          stickyBefore: "there's a ",
          stickyAnswer: "wide",
          stickyAfter: " range",
          contextSentence: "N: Oh, there's a wide range."
        }
      ]
    },
    {
      name: "B Clients",
      lines: [
        {
          phrase: "to lose a bit of weight or lower their cholesterol levels",
          hint: "Slim down or lower cholesterol.",
          stickyBefore: "to lose a bit of weight or lower their ",
          stickyAnswer: "cholesterol",
          stickyAfter: " levels",
          contextSentence:
            "I get a lot of clients, especially older ones, who simply want to lose a bit of weight or lower their cholesterol levels."
        },
        {
          phrase: "that's my area of expertise",
          hint: "My special strength.",
          stickyBefore: "that's my area of ",
          stickyAnswer: "expertise",
          stickyAfter: "",
          contextSentence:
            "I also have a large number of younger clients who've been injured while doing sport and want to get back to full fitness – that's my area of expertise."
        },
        {
          phrase: "train for marathons",
          hint: "Prepare for long races.",
          stickyBefore: "train for ",
          stickyAnswer: "marathons",
          stickyAfter: "",
          contextSentence:
            "I also help one or two people train for marathons and triathlons, but mostly it's people who just want to improve their all-round fitness and as a result, their general self-confidence."
        },
        {
          phrase: "improve their all-round fitness",
          hint: "Get generally fitter.",
          stickyBefore: "improve their all-round ",
          stickyAnswer: "fitness",
          stickyAfter: "",
          contextSentence:
            "I also help one or two people train for marathons and triathlons, but mostly it's people who just want to improve their all-round fitness and as a result, their general self-confidence."
        },
        {
          phrase: "build up a good relationship with your clients",
          hint: "Create trust with clients.",
          stickyBefore: "build up a good ",
          stickyAnswer: "relationship",
          stickyAfter: " with your clients",
          contextSentence:
            "I: And I imagine it's important to build up a good relationship with your clients."
        },
        {
          phrase: "shouting orders at people to do fifty press-ups",
          hint: "Yelling commands like in films.",
          stickyBefore: "shouting orders at people to do fifty ",
          stickyAnswer: "press-ups",
          stickyAfter: "",
          contextSentence:
            "N: Yes, it is. I'm not one of those fitness instructors you sometimes see in films shouting orders at people to do fifty press-ups or run ten times round the park."
        }
      ]
    },
    {
      name: "C Style",
      lines: [
        {
          phrase: "have to be dedicated and prepared to work hard",
          hint: "Be committed and ready to work.",
          stickyBefore: "have to be dedicated and ",
          stickyAnswer: "prepared",
          stickyAfter: " to work hard",
          contextSentence:
            "Certainly, clients have to be dedicated and prepared to work hard when they're with me, but I also want them to enjoy exercising as well."
        },
        {
          phrase: "keep it light-hearted",
          hint: "Keep mood relaxed and fun.",
          stickyBefore: "keep it ",
          stickyAnswer: "light-hearted",
          stickyAfter: "",
          contextSentence:
            "So it's important, I think, for trainers to keep it light-hearted, introduce an element of playfulness into their sessions."
        },
        {
          phrase: "introduce an element of playfulness",
          hint: "Make sessions playful.",
          stickyBefore: "introduce an element of ",
          stickyAnswer: "playfulness",
          stickyAfter: "",
          contextSentence:
            "So it's important, I think, for trainers to keep it light-hearted, introduce an element of playfulness into their sessions."
        },
        {
          phrase: "a fair amount of laughter",
          hint: "Lots of jokes and smiles.",
          stickyBefore: "a fair amount of ",
          stickyAnswer: "laughter",
          stickyAfter: "",
          contextSentence: "There's usually a fair amount of laughter in mine."
        },
        {
          phrase: "There's a rowing machine, two treadmills, two exercise bikes and loads of weights and things",
          hint: "Gym equipment list.",
          stickyBefore: "There's a ",
          stickyAnswer: "rowing",
          stickyAfter: " machine, two treadmills, two exercise bikes and loads of weights and things",
          contextSentence:
            "There's a rowing machine, two treadmills, two exercise bikes and loads of weights and things."
        },
        {
          phrase: "add a bit of variety to the classes",
          hint: "Change routines so it's not boring.",
          stickyBefore: "add a bit of ",
          stickyAnswer: "variety",
          stickyAfter: " to the classes",
          contextSentence:
            "And then with some people I go to the park or a nearby wood to run or simply to add a bit of variety to the classes."
        }
      ]
    },
    {
      name: "D Gym",
      lines: [
        {
          phrase: "Clients appreciate that",
          hint: "Clients value this.",
          stickyBefore: "Clients ",
          stickyAnswer: "appreciate",
          stickyAfter: " that",
          contextSentence:
            "Clients appreciate that – they've told me that other local trainers they've been with always hold their sessions inside."
        },
        {
          phrase: "The good thing about that was",
          hint: "The positive side was...",
          stickyBefore: "The good thing about ",
          stickyAnswer: "that",
          stickyAfter: " was",
          contextSentence:
            "N: No, I used to work in a gym. The good thing about that was I learnt a lot from watching the other gym instructors and their interaction with the clients – both good and bad examples."
        },
        {
          phrase: "the trouble was",
          hint: "The downside was...",
          stickyBefore: "the ",
          stickyAnswer: "trouble",
          stickyAfter: " was",
          contextSentence:
            "I also got experience of working with a lot of different clients, but the trouble was, I rarely had the chance to build up long-lasting relationships with them."
        },
        {
          phrase: "build up long-lasting relationships with them",
          hint: "Keep clients long-term.",
          stickyBefore: "build up long-lasting ",
          stickyAnswer: "relationships",
          stickyAfter: " with them",
          contextSentence:
            "I also got experience of working with a lot of different clients, but the trouble was, I rarely had the chance to build up long-lasting relationships with them."
        },
        {
          phrase: "it was the whole sales thing that I was least happy about",
          hint: "Sales pressure was the worst part.",
          stickyBefore: "it was the whole ",
          stickyAnswer: "sales",
          stickyAfter: " thing that I was least happy about",
          contextSentence:
            "But it was the whole sales thing that I was least happy about."
        },
        {
          phrase: "persuade people to buy things",
          hint: "Push people to buy products.",
          stickyBefore: "persuade people to ",
          stickyAnswer: "buy",
          stickyAfter: " things",
          contextSentence:
            "When they told me I had to persuade people to buy things with the gym's logo on it, that's when I made the decision to resign."
        },
        {
          phrase: "made the decision to resign",
          hint: "Decided to quit.",
          stickyBefore: "made the ",
          stickyAnswer: "decision",
          stickyAfter: " to resign",
          contextSentence:
            "When they told me I had to persuade people to buy things with the gym's logo on it, that's when I made the decision to resign."
        }
      ]
    },
    {
      name: "E Solo",
      lines: [
        {
          phrase: "I didn't feel comfortable pushing T-shirts and baseball caps",
          hint: "Uncomfortable selling branded clothes.",
          stickyBefore: "I didn't feel comfortable pushing ",
          stickyAnswer: "T-shirts",
          stickyAfter: " and baseball caps",
          contextSentence:
            "I didn't feel comfortable pushing T-shirts and baseball caps, or things like protein supplements, which most people take without needing to."
        },
        {
          phrase: "protein supplements",
          hint: "Extra protein products.",
          stickyBefore: "",
          stickyAnswer: "protein",
          stickyAfter: " supplements",
          contextSentence:
            "I didn't feel comfortable pushing T-shirts and baseball caps, or things like protein supplements, which most people take without needing to."
        },
        {
          phrase: "so far, touch wood, things are going really well",
          hint: "Business is going well so far.",
          stickyBefore: "so far, touch ",
          stickyAnswer: "wood",
          stickyAfter: ", things are going really well",
          contextSentence:
            "Oh, yes, I've got so much more freedom, and so far, touch wood, things are going really well."
        },
        {
          phrase: "put adverts in the local newspaper to get business",
          hint: "Advertise in local paper.",
          stickyBefore: "put adverts in the ",
          stickyAnswer: "local",
          stickyAfter: " newspaper to get business",
          contextSentence:
            "I thought I might have to put adverts in the local newspaper to get business but those clients I brought with me from the gym tell all their family and friends about me and those people tell all their friends … and so it goes on."
        },
        {
          phrase: "The power of word of mouth",
          hint: "Recommendations spread person to person.",
          stickyBefore: "The power of word of ",
          stickyAnswer: "mouth",
          stickyAfter: "",
          contextSentence: "The power of word of mouth."
        }
      ]
    }
  ];

  var UNIT12_NAOMI_BLOCKS = NAOMI_RAW.map(function (b) {
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

  W.UNIT12_NAOMI_BLOCKS = UNIT12_NAOMI_BLOCKS;
  W.unit12NaomiFullPhraseFromItem = fullPhraseFromItem;
  W.unit12NaomiFullAnswerOf = fullAnswerOf;
})(typeof window !== "undefined" ? window : globalThis);
