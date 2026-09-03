/**
 * Unit 1 · Clothes pack — Cool Words from SB 1.1 (Speakers 1–5).
 * window.FCE_U1_CLOTHES_LEXIS
 */
(function (W) {
  "use strict";

  /** Maintainer-approved Cool Words only — do not add/remove without user list. */
  var SPEAKERS = [
    {
      id: "sp1",
      letter: "1",
      label: "Speaker 1",
      lines: [
        {
          coolWord: "buy brand-new clothes",
          phrase: "buy brand new clothes",
          hint: "It's unusual for me to buy them new.",
          contextSentence: "It's unusual for me to buy brand new clothes.",
          stickyAnswer: "brand new clothes"
        },
        {
          coolWord: "find some pretty decent stuff",
          phrase: "find some pretty decent stuff in these places",
          hint: "You can discover good things in charity shops.",
          contextSentence:
            "But that's not true – you can find some pretty decent stuff in these places, even quite tasteful designer clothes that people, for whatever reason, have decided they don't want anymore.",
          stickyAnswer: "pretty decent stuff"
        },
        {
          coolWord: "quite tasteful designer clothes",
          phrase: "quite tasteful designer clothes",
          hint: "Even stylish designer pieces turn up second-hand.",
          contextSentence:
            "even quite tasteful designer clothes that people, for whatever reason, have decided they don't want anymore",
          stickyAnswer: "tasteful designer clothes"
        },
        {
          coolWord: "in good condition",
          phrase: "in good condition",
          hint: "Charity shops only sell clothes that still look fine.",
          contextSentence: "And they only sell clothes that are in good condition,",
          stickyAnswer: "good condition"
        },
        {
          coolWord: "you get to support good causes",
          phrase: "You get to support good causes, too, of course",
          hint: "Your money helps charities.",
          contextSentence:
            "You get to support good causes, too, of course, because the money you spend goes to charity.",
          stickyAnswer: "support good causes"
        },
        {
          coolWord: "money you spend goes to charity",
          phrase: "the money you spend goes to charity",
          hint: "What you pay ends up with a charity.",
          contextSentence:
            "You get to support good causes, too, of course, because the money you spend goes to charity.",
          stickyAnswer: "goes to charity"
        }
      ]
    },
    {
      id: "sp2",
      letter: "2",
      label: "Speaker 2",
      lines: [
        {
          coolWord: "increase your self-confidence",
          phrase: "increase your self-confidence",
          hint: "Dressing smartly is supposed to make you feel more confident.",
          contextSentence:
            "Apparently, dressing smartly is supposed to increase your self-confidence, but I've never felt any different in a jacket and tie.",
          stickyAnswer: "increase your self-confidence"
        },
        {
          coolWord: "take ages",
          phrase: "take ages, umming and ahhing over what to wear",
          hint: "Some people spend a long time choosing clothes.",
          contextSentence: "Some people take ages, umming and ahhing over what to wear,",
          stickyAnswer: "take ages"
        },
        {
          coolWord: "umming and ahhing",
          phrase: "umming and ahhing over what to wear",
          hint: "Hesitating aloud while deciding what to put on.",
          contextSentence: "Some people take ages, umming and ahhing over what to wear,",
          stickyAnswer: "umming and ahhing"
        },
        {
          coolWord: "throw on the first thing I find in my wardrobe",
          phrase:
            "I just throw on the first thing I find in my wardrobe and that's it",
          hint: "No fuss — grab the first item and go.",
          contextSentence:
            "but I just throw on the first thing I find in my wardrobe and that's it. Job done.",
          stickyAnswer: "throw on the first thing I find in my wardrobe"
        },
        {
          coolWord: "I'd be happy just wearing",
          phrase: "I'd be happy just wearing the same two or three T-shirts all the time",
          hint: "I'd be fine with almost no variety.",
          contextSentence:
            "To be honest, I'd be happy just wearing the same two or three T-shirts all the time.",
          stickyAnswer: "happy just wearing"
        }
      ]
    },
    {
      id: "sp3",
      letter: "3",
      label: "Speaker 3",
      lines: [
        {
          coolWord: "I get suspicious",
          phrase: "I get suspicious when I go into a clothes shop",
          hint: "Very low prices make me doubt how the clothes were made.",
          contextSentence:
            "I get suspicious when I go into a clothes shop and see that everything is incredibly cheap.",
          stickyAnswer: "get suspicious"
        },
        {
          coolWord: "everything is incredibly cheap",
          phrase: "everything is incredibly cheap",
          hint: "Prices that seem too good to be true.",
          contextSentence:
            "I get suspicious when I go into a clothes shop and see that everything is incredibly cheap.",
          stickyAnswer: "incredibly cheap"
        },
        {
          coolWord: "what are their working conditions like?",
          phrase: "And what are their working conditions like?",
          hint: "Are factory workers treated safely and fairly?",
          contextSentence:
            "If the prices are so low, then how much are the people who made them getting paid? And what are their working conditions like?",
          stickyAnswer: "working conditions like"
        },
        {
          coolWord: "earn a decent salary",
          phrase: "earn a decent salary and work in a safe environment",
          hint: "Workers should be paid fairly and kept safe.",
          contextSentence:
            "I only buy from companies that sell ethical clothing, made by people who earn a decent salary and work in a safe environment.",
          stickyAnswer: "decent salary"
        },
        {
          coolWord: "no one is being exploited",
          phrase: "no one is being exploited",
          hint: "At least workers aren't being treated unfairly.",
          contextSentence:
            "but at least I can be confident that no one is being exploited.",
          stickyAnswer: "no one is being exploited"
        }
      ]
    },
    {
      id: "sp4",
      letter: "4",
      label: "Speaker 4",
      lines: [
        {
          coolWord: "make me feel good about myself",
          phrase: "make me feel good about myself",
          hint: "Clothes have to boost how I feel about myself.",
          contextSentence:
            "They don't have to be designer clothes, but they do have to make me feel good about myself.",
          stickyAnswer: "feel good about myself"
        },
        {
          coolWord: "my feelings of insecurity disappear",
          phrase:
            "any feelings of insecurity I have will just disappear as soon as I put it on",
          hint: "The right outfit makes self-doubt vanish.",
          contextSentence:
            "I like to know that I can get something out of the wardrobe and any feelings of insecurity I have will just disappear as soon as I put it on.",
          stickyAnswer: "feelings of insecurity"
        },
        {
          coolWord: "it gives me a big lift",
          phrase: "it gives me a big lift",
          hint: "A compliment at work really cheers me up.",
          contextSentence:
            "Then when I get to work and someone says, 'Hey, that shirt really suits you', it gives me a big lift.",
          stickyAnswer: "a big lift"
        },
        {
          coolWord:
            "My colleagues have got used to seeing me in something different every day",
          phrase:
            "My colleagues have got used to seeing me in something different every day",
          hint: "At work they expect a new outfit each day.",
          contextSentence:
            "My colleagues have got used to seeing me in something different every day.",
          stickyAnswer: "something different every day"
        }
      ]
    },
    {
      id: "sp5",
      letter: "5",
      label: "Speaker 5",
      lines: [
        {
          coolWord: "get rid of",
          phrase: "get rid of an old one first",
          hint: "Before buying new, I must discard an old item.",
          contextSentence:
            "for example, then I always have to get rid of an old one first.",
          stickyAnswer: "get rid of"
        },
        {
          coolWord: "I can't justify hanging on to it anymore",
          phrase: "I can't justify hanging on to it anymore",
          hint: "There's no reason to keep it any longer.",
          contextSentence:
            "And I only do that when I can't justify hanging on to it anymore",
          stickyAnswer: "justify hanging on to it"
        },
        {
          coolWord: "it's so scruffy I'm too embarrassed to wear it",
          phrase: "it's so scruffy I'm too embarrassed to wear it",
          hint: "Too shabby to be seen in public.",
          contextSentence:
            "either because it's so scruffy I'm too embarrassed to wear it, or it's literally falling apart at the seams.",
          stickyAnswer: "too embarrassed to wear it"
        },
        {
          coolWord: "it's literally falling apart at the seams",
          phrase: "it's literally falling apart at the seams",
          hint: "The stitching is giving way.",
          contextSentence:
            "either because it's so scruffy I'm too embarrassed to wear it, or it's literally falling apart at the seams.",
          stickyAnswer: "falling apart at the seams"
        },
        {
          coolWord: "none of my clothes ever end up in a second-hand shop",
          phrase: "none of my clothes ever end up in a second-hand shop",
          hint: "I never donate — my old clothes aren't resalable.",
          contextSentence:
            "That's why none of my clothes ever end up in a second-hand shop.",
          stickyAnswer: "second-hand shop"
        },
        {
          coolWord: "I replace them, precisely because they're no use to anyone",
          phrase:
            "I replace them, precisely because they're no use to anyone – not just me",
          hint: "They're too worn for anyone else to wear.",
          contextSentence:
            "I replace them, precisely because they're no use to anyone – not just me.",
          stickyAnswer: "no use to anyone"
        },
        {
          coolWord: "the quality's got gradually worse",
          phrase: "the quality's got gradually worse",
          hint: "Clothes don't last as long as they used to.",
          contextSentence:
            "I've noticed that clothes used to last a lot longer; the quality's got gradually worse and I have to replace things far more often than before.",
          stickyAnswer: "quality's got gradually worse"
        }
      ]
    }
  ];

  function stickyFromContext(ctx, gap) {
    var c = String(ctx || "").trim();
    var g = String(gap || "").trim();
    if (!c) {
      return { stickyBefore: "", stickyAnswer: g || "…", stickyAfter: "" };
    }
    if (!g) {
      var parts = c.replace(/[.!?]+$/, "").split(/\s+/);
      g = parts.slice(Math.max(0, parts.length - 2)).join(" ");
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
    var hint = String(line.hint || "").trim();
    var ctx = String(line.contextSentence || phrase).trim();
    var st = stickyFromContext(ctx, line.stickyAnswer);
    return {
      phrase: phrase,
      coolWord: line.coolWord || phrase,
      hint: hint,
      contextSentence: ctx,
      stickyBefore: st.stickyBefore,
      stickyAnswer: st.stickyAnswer,
      stickyAfter: st.stickyAfter
    };
  }

  function clothesTheme() {
    var blocks = SPEAKERS.map(function (sp) {
      return {
        name: sp.label,
        lines: sp.lines.map(toGameLine)
      };
    });
    var dropLines = [];
    var seen = Object.create(null);
    SPEAKERS.forEach(function (sp) {
      sp.lines.forEach(function (line) {
        var c = String(line.contextSentence || "").trim();
        if (c && !seen[c]) {
          seen[c] = true;
          dropLines.push(c);
        }
      });
    });
    return {
      id: "clothes",
      label: "Clothes · SB 1.1",
      short: "Clothes",
      blurb:
        " Cool Words Speakers 1–5 — trainer gaps from the listening script; Word Bank keeps full stems.",
      blocks: W.FCE_UNIT_LEX_STUBS
        ? W.FCE_UNIT_LEX_STUBS.packBlocks(blocks)
        : blocks.map(function (b) {
            return { name: b.name, items: b.lines };
          }),
      dropLines: dropLines
    };
  }

  function drawerSpeakers() {
    return SPEAKERS.map(function (sp) {
      return {
        id: sp.id,
        letter: sp.letter,
        label: sp.label,
        phrases: sp.lines.map(function (line) {
          return {
            en: line.coolWord || line.phrase,
            game: line.phrase,
            tip: line.hint,
            context: line.contextSentence
          };
        })
      };
    });
  }

  W.FCE_U1_CLOTHES_LEXIS = {
    speakers: SPEAKERS,
    people: SPEAKERS.map(function (sp) {
      return {
        id: sp.id,
        letter: sp.letter,
        label: sp.label,
        lines: sp.lines.map(toGameLine)
      };
    }),
    clothesTheme: clothesTheme,
    drawerSpeakers: drawerSpeakers,
    passageHighlight: passageHighlight,
    id: "clothes",
    label: "Clothes"
  };

  function passageHighlight(passage, line) {
    var cool = String(line.coolWord || "").trim();
    var phrase = String(line.phrase || cool).trim();
    if (passage.indexOf(cool) >= 0) return cool;
    var lc = passage.toLowerCase();
    var ix = lc.indexOf(cool.toLowerCase());
    if (ix >= 0) return passage.slice(ix, ix + cool.length);
    if (passage.indexOf(phrase) >= 0) return phrase;
    var tokens = phrase
      .replace(/[.!?,;:'"]/g, " ")
      .split(/\s+/)
      .filter(Boolean);
    var len;
    var s;
    var sub;
    var j;
    for (len = tokens.length; len >= 2; len--) {
      for (s = 0; s <= tokens.length - len; s++) {
        sub = tokens.slice(s, s + len).join(" ");
        j = passage.indexOf(sub);
        if (j >= 0) return sub;
      }
    }
    return cool;
  }

  function syncRetellPhrasePool() {
    var blocks = W.U1_CLOTHES_RETELL_BLOCKS;
    if (!blocks || !blocks.length) return;
    SPEAKERS.forEach(function (sp, i) {
      if (!blocks[i] || !blocks[i].passage) return;
      blocks[i].phrases = sp.lines.map(function (line) {
        return {
          label: line.coolWord || line.phrase,
          highlight: passageHighlight(blocks[i].passage, line)
        };
      });
    });
  }

  syncRetellPhrasePool();
})(typeof window !== "undefined" ? window : globalThis);
