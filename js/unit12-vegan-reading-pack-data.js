/**
 * Unit 12 · Going vegan (Reading Part 7) — MCQ, gaps, paraphrase, role-play, key word.
 * Depends on unit12-vegan-reading-lexis.js
 */
(function (W) {
  "use strict";

  function lexSpeakers() {
    var api = W.FCE_U12_VEGAN_READING_LEXIS;
    return (api && api.speakers) || [];
  }

  function speakerById(id) {
    var list = lexSpeakers();
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i].id === id) return list[i];
    }
    return list[0] || null;
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

  function linesForSpeaker(sp) {
    if (!sp || !sp.phrases) return [];
    return sp.phrases.map(function (p) {
      return {
        phrase: String(p.en || "").trim(),
        coolWord: String(p.en || "").trim(),
        hint: String(p.tip || "").trim(),
        contextSentence: String(p.context || "").trim()
      };
    });
  }

  function speakerWithLines(id) {
    var sp = speakerById(id);
    if (!sp) return null;
    return {
      id: sp.id,
      label: sp.label,
      lines: linesForSpeaker(sp)
    };
  }

  function answersFor(line) {
    var ph = String(line.phrase || line.coolWord || "").trim();
    return ph ? [ph] : [];
  }

  function wrongFromSameSpeaker(sp, correct) {
    var wrong = [];
    sp.lines.forEach(function (other) {
      var w = String(other.phrase || other.coolWord || "").trim();
      if (w && w !== correct && wrong.indexOf(w) < 0) wrong.push(w);
    });
    if (wrong.length >= 3) return wrong;
    lexSpeakers().forEach(function (osp) {
      if (wrong.length >= 3) return;
      linesForSpeaker(osp).forEach(function (line) {
        var w = String(line.phrase || "").trim();
        if (w && w !== correct && wrong.indexOf(w) < 0) wrong.push(w);
      });
    });
    return wrong;
  }

  function buildMcq(sp) {
    if (!sp || !sp.lines.length) return [];
    var letters = ["A", "B", "C", "D"];
    return sp.lines.map(function (line) {
      var correct = String(line.phrase || "").trim();
      var wrong = shuffle(wrongFromSameSpeaker(sp, correct)).slice(0, 3);
      var opts = shuffle(
        [{ text: correct, ok: true }].concat(
          wrong.slice(0, 3).map(function (t) {
            return { text: t, ok: false };
          })
        )
      );
      var choices = [];
      var answer = "A";
      var oi;
      for (oi = 0; oi < opts.length && oi < 4; oi++) {
        var lid = letters[oi] || "D";
        choices.push({ id: lid, text: opts[oi].text });
        if (opts[oi].ok) answer = lid;
      }
      return {
        prompt:
          "Which phrase from the text matches this meaning? " +
          (line.hint || correct),
        choices: choices,
        answer: answer,
        hint: line.contextSentence
          ? "In the text: " + line.contextSentence
          : correct
      };
    });
  }

  function gapFromPhrase(en, context) {
    var ctx = String(context || "").trim();
    var ph = String(en || "").trim();
    if (!ph) {
      return { before: "Complete: ", after: "", answers: [] };
    }
    var low = ctx.toLowerCase();
    var idx = low.indexOf(ph.toLowerCase());
    if (idx >= 0) {
      return {
        before: ctx.slice(0, idx),
        after: ctx.slice(idx + ph.length),
        answers: [ph]
      };
    }
    return {
      before: "Complete with a phrase from the text: ",
      after: " — " + ctx,
      answers: [ph]
    };
  }

  function buildGaps(sp) {
    if (!sp || !sp.lines.length) return { title: "Gaps", bank: [], items: [] };
    var bank = [];
    var seen = Object.create(null);
    sp.lines.forEach(function (line) {
      var w = String(line.phrase || "").trim();
      if (w && !seen[w]) {
        seen[w] = true;
        bank.push(w);
      }
    });
    var items = sp.lines.map(function (line) {
      var g = gapFromPhrase(line.phrase, line.contextSentence);
      return {
        before: g.before,
        after: g.after,
        answers: g.answers.length ? g.answers : answersFor(line)
      };
    });
    return {
      title: "Fill in the gaps — " + (sp.label || "Going vegan"),
      note: "Same phrases as in Part 7 · use the phrase box or type the answer.",
      bank: bank,
      items: items
    };
  }

  function buildParaphrase(sp) {
    if (!sp || !sp.lines.length) return { variants: [] };
    return {
      variants: [
        {
          kicker: "Flip",
          title: "Cool phrases · Going vegan",
          note: "Read the sense — flip and say the phrase from the text aloud.",
          promptLabel: "Sense",
          answerLabel: "Phrase from text",
          items: sp.lines.map(function (line) {
            return {
              sentence: line.hint || line.phrase,
              answers: answersFor(line)
            };
          })
        }
      ]
    };
  }

  var ROLEPLAY_BY_ID = {
    jack: {
      title: "Sunday lunch with Mum",
      characters: [
        { id: "jack", name: "Jack", blurb: "Sixteen now — vegan since last year." },
        { id: "mum", name: "Mum", blurb: "Still worried, but listening." }
      ],
      highlights: [
        "go vegan",
        "better informed about",
        "sound advice",
        "couldn't face cooking special meals",
        "I totally get that",
        "don't hold it against you",
        "don't bear a grudge",
        "very much aware of the extra effort",
        "invariably amazed at"
      ],
      lines: [
        {
          who: "jack",
          text: "Mum, when I was thirteen I wanted to go vegan after those documentaries — remember?"
        },
        {
          who: "mum",
          text: "I do. I asked you to wait until you were older and better informed about nutrition, not just trends."
        },
        {
          who: "jack",
          text: "Looking back, that was probably sound advice."
        },
        {
          who: "mum",
          text: "Part of me just couldn't face cooking special meals for you on top of everything else."
        },
        {
          who: "jack",
          text: "I totally get that. I don't hold it against you — and I'm not going to bear a grudge about the wait."
        },
        {
          who: "mum",
          text: "So why bring it up today?"
        },
        {
          who: "jack",
          text: "Because now I'm very much aware of the extra effort when non-vegans invite me round. I always offer dessert — and people are invariably amazed at how good it is."
        },
        {
          who: "mum",
          text: "All right. Show me this famous chocolate cake, then."
        }
      ]
    },
    sarah: {
      title: "Articles on the kitchen table",
      characters: [
        { id: "sarah", name: "Sarah", blurb: "Living at home, vegan two years." },
        { id: "dad", name: "Dad", blurb: "Sends links, slowly softening." }
      ],
      highlights: [
        "missing out on essential nutrients",
        "warning of the pitfalls",
        "put his mind at rest",
        "I was taking supplements",
        "reinforce his idea",
        "reinforce my idea",
        "they've both gradually come to accept"
      ],
      lines: [
        {
          who: "dad",
          text: "Sarah, another email — warning of the pitfalls of a plant-based diet. Did you read it?"
        },
        {
          who: "sarah",
          text: "I did. You still think I'm missing out on essential nutrients, don't you?"
        },
        {
          who: "dad",
          text: "I'm your father. I worry."
        },
        {
          who: "sarah",
          text: "I tried to put your mind at rest — I told you I was taking supplements and that I'd seen a dietitian."
        },
        {
          who: "dad",
          text: "And that only served to reinforce my idea that you weren't eating properly."
        },
        {
          who: "sarah",
          text: "I know — from your side it felt like I was proving the articles right, not fighting them."
        },
        {
          who: "dad",
          text: "…Maybe. Your mum and I haven't said much lately."
        },
        {
          who: "sarah",
          text: "Actually, you've both gradually come to accept that veganism is a major part of who I am. That matters more than the links you send."
        }
      ]
    },
    maya: {
      title: "Two sisters, two diets",
      characters: [
        { id: "maya", name: "Maya", blurb: "Tried veganism, quit after a few months." },
        { id: "sis", name: "Elena", blurb: "Maya's older sister — still vegan." }
      ],
      highlights: ["kept at it faithfully", "threw in the towel", "On the plus side"],
      lines: [
        {
          who: "sis",
          text: "You said you'd join me for Veganuary. What happened?"
        },
        {
          who: "maya",
          text: "I admire you — you've kept at it faithfully for over five years."
        },
        {
          who: "sis",
          text: "Flattery won't hide the cheese in your fridge. Did you quit?"
        },
        {
          who: "maya",
          text: "Honestly, yes. I missed too many foods and threw in the towel after a few months."
        },
        {
          who: "sis",
          text: "Do you regret trying?"
        },
        {
          who: "maya",
          text: "On the plus side, I learnt a surprising amount about nutrition — and about my own willpower."
        },
        {
          who: "sis",
          text: "So you'll cook me that lentil stew you promised?"
        },
        {
          who: "maya",
          text: "Deal — but I'm still having eggs in it."
        }
      ]
    },
    justin: {
      title: "First night at the vegan group",
      characters: [
        { id: "justin", name: "Justin", blurb: "Started plant-based diet last month." },
        { id: "mentor", name: "Rosa", blurb: "Runs the local online group." }
      ],
      highlights: [
        "make the switch overnight",
        "do it in stages",
        "reassure my parents",
        "the benefit of their knowledge and experience"
      ],
      lines: [
        {
          who: "justin",
          text: "Hi Rosa — I tried to make the switch overnight and crashed by day three."
        },
        {
          who: "mentor",
          text: "Classic. Most people do better when they do it in stages — drop red meat first, then dairy, and so on."
        },
        {
          who: "justin",
          text: "My mum keeps panicking. How do I reassure my parents I know what I'm doing?"
        },
        {
          who: "mentor",
          text: "Show them a meal plan, not a lecture. That's what this group is for."
        },
        {
          who: "justin",
          text: "So I can ask about B12, shopping, school lunches…?"
        },
        {
          who: "mentor",
          text: "Exactly. You'll get the benefit of their knowledge and experience — we've all messed up so you don't have to."
        },
        {
          who: "justin",
          text: "That sounds better than another YouTube rabbit hole."
        },
        {
          who: "mentor",
          text: "Then introduce yourself in the chat — and no guilt if you slip."
        }
      ]
    },
    rhona: {
      title: "Friday at Rhona's flat",
      characters: [
        { id: "rhona", name: "Rhona", blurb: "Recently plant-based, cooks for herself." },
        { id: "friend", name: "Tom", blurb: "Friend — curious, supportive." }
      ],
      highlights: [
        "I wish I'd done it ages ago",
        "high time I took a stand against",
        "let alone cook it",
        "gradually getting the hang of it"
      ],
      lines: [
        {
          who: "friend",
          text: "That smells good. How long have you been plant-based?"
        },
        {
          who: "rhona",
          text: "Only a few months — I wish I'd done it ages ago, honestly."
        },
        {
          who: "friend",
          text: "What pushed you finally?"
        },
        {
          who: "rhona",
          text: "I felt it was high time I took a stand against the way we treat animals — not just talk about it."
        },
        {
          who: "friend",
          text: "Do your parents ever try your food?"
        },
        {
          who: "rhona",
          text: "They won't taste it, let alone cook it. My friends only want burger places, so I cook everything here."
        },
        {
          who: "friend",
          text: "Isn't that lonely?"
        },
        {
          who: "rhona",
          text: "Sometimes. But I'm gradually getting the hang of it — and I like the independence."
        }
      ]
    }
  };

  var KWT_BY_ID = {
    jack: [
      {
        first: "My mum gave me sensible guidance about waiting.",
        keyword: "ADVICE",
        before: "It was probably sound ",
        after: ".",
        accept: ["advice"],
        revealGap: "sound ADVICE",
        fullSecond: "It was probably sound advice."
      },
      {
        first: "She felt unable to prepare separate vegan dishes.",
        keyword: "FACE",
        before: "She couldn't ",
        after: " cooking special meals for me.",
        accept: ["face"],
        revealGap: "couldn't FACE cooking",
        fullSecond: "She couldn't face cooking special meals for me."
      }
    ],
    sarah: [
      {
        first: "I wanted to stop my father worrying.",
        keyword: "REST",
        before: "I tried to put his mind at ",
        after: ".",
        accept: ["rest"],
        revealGap: "mind at REST",
        fullSecond: "I tried to put his mind at rest."
      },
      {
        first: "The articles highlighted dangers of the diet.",
        keyword: "WARNING",
        before: "He kept sending articles ",
        after: " of the pitfalls of a plant-based diet.",
        accept: ["warning"],
        revealGap: "articles WARNING of",
        fullSecond:
          "He kept sending articles warning of the pitfalls of a plant-based diet."
      }
    ],
    maya: [
      {
        first: "I gave up after a few months.",
        keyword: "TOWEL",
        before: "I ",
        after: " after a few months.",
        accept: ["threw in the towel"],
        revealGap: "threw in the TOWEL",
        fullSecond: "I threw in the towel after a few months."
      },
      {
        first: "There was a positive point too.",
        keyword: "PLUS",
        before: "",
        after: ", I learnt a lot about nutrition.",
        accept: ["on the plus side"],
        revealGap: "On the PLUS side",
        fullSecond: "On the plus side, I learnt a lot about nutrition."
      }
    ],
    justin: [
      {
        first: "Change your diet step by step, not all at once.",
        keyword: "STAGE",
        before: "The key is to do it in ",
        after: ".",
        accept: ["stages"],
        revealGap: "in STAGES",
        fullSecond: "The key is to do it in stages."
      },
      {
        first: "Don't become vegan instantly.",
        keyword: "OVERNIGHT",
        before: "Many people try to make the switch ",
        after: ".",
        accept: ["overnight"],
        revealGap: "switch OVERNIGHT",
        fullSecond: "Many people try to make the switch overnight."
      }
    ],
    rhona: [
      {
        first: "I regret not starting much earlier.",
        keyword: "AGO",
        before: "I wish I'd done it ages ",
        after: ".",
        accept: ["ago"],
        revealGap: "ages AGO",
        fullSecond: "I wish I'd done it ages ago."
      },
      {
        first: "I'm slowly learning to cook well for myself.",
        keyword: "HANG",
        before: "I'm gradually getting the ",
        after: " of it.",
        accept: ["hang"],
        revealGap: "getting the HANG",
        fullSecond: "I'm gradually getting the hang of it."
      }
    ]
  };

  W.U12_VEGAN_READING_PACK = {
    speakerIds: ["jack", "sarah", "maya", "justin", "rhona"],
    speakerById: speakerById,
    speakerWithLines: speakerWithLines,
    exercises: function (id) {
      return buildMcq(speakerWithLines(id));
    },
    gaps: function (id) {
      return buildGaps(speakerWithLines(id));
    },
    paraphrase: function (id) {
      return buildParaphrase(speakerWithLines(id));
    },
    roleplay: function (id) {
      return ROLEPLAY_BY_ID[id] || null;
    },
    kwtTasks: function (id) {
      return KWT_BY_ID[id] || [];
    }
  };
})(typeof window !== "undefined" ? window : globalThis);
