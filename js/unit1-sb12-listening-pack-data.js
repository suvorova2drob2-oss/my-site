/**
 * SB 1.2 Listening — exercise packs per speaker (MCQ, gaps, paraphrase).
 * MCQ + gaps use **new contexts**; answers = Cool Words from Track 1.2.
 * Depends on: unit1-sb12-listening-lexis.js → FCE_U1_SB12_LEXIS
 */
(function (W) {
  "use strict";

  function lexSpeakers() {
    var api = W.FCE_U1_SB12_LEXIS;
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

  /** MCQ stems — new people / situations, not the listening characters. */
  var MCQ_PROMPTS = {
    "Easy for some, isn't it?":
      "Your flatmate finishes the marathon while you’re still on kilometre three. You say: «______»",
    "I get the impression he's fed up with it all":
      "Every week Sam moans about the commute, the noise and the overtime. You tell a friend: «______»",
    "I wouldn't be surprised if he got rid of everything over here":
      "Your cousin talks about selling his business and buying a small farm abroad. You reply: «______»",
    "Is that what he's said he'll do?":
      "Someone claims your boss is resigning next month. Your colleague asks: «______»",
    "It's not like him to talk much about his plans":
      "Dan never reveals where he’s applying until he’s signed the contract. That’s because «______»",
    "I'm stressed out, to be honest":
      "A friend calls and hears you snapping at the dog. You admit: «______»",
    "I was wondering if you could tell me":
      "You’d like honest feedback on a language course before you pay. You start: «______»",
    "I had a quick look online, but it's always better to talk to someone with firsthand experience":
      "Reviews looked fine, but you still want to chat with a former student. You explain: «______»",
    "We just about get by, but it's a bit of a struggle":
      "Two incomes became one after the café closed. You sigh: «______»",
    "He's sent off loads of applications, but no luck so far":
      "Your brother is still unemployed after three months of CVs. You say: «______»",
    "My mum and dad could probably help out, but somehow it doesn't seem right borrowing from them":
      "The rent is due and your parents offered a loan. You feel: «______»",
    "There's nothing for it but to put my car on the market and see if I can get a decent price for it":
      "Tuition fees are due and savings are empty. Your only idea: «______»",
    "I've gained so much from these two years living abroad":
      "An exchange student looks back before flying home. She says: «______»",
    "I reckon we'll have no trouble finding work":
      "Your classmates joke about graduate jobs. One of them insists: «______»",
    "I was thinking more about the benefits to me as a person":
      "A friend asks if the internship was good for your CV. You answer: «______»",
    "I've become much more tolerant since I've been here, more willing to accept difference":
      "After a year with an international host family, you notice: «______»",
    "We've grown as individuals, we're more open-minded and independent, so that makes us more employable":
      "In a mock interview you explain why gap years help: «______»",
    "I admire your optimism":
      "Your partner expects everything to work out; you smile and say: «______»",
    "The whole thing has made me value life at home more":
      "Months away at camp changed how you see your own street. You admit: «______»",
    "I've had to get used to eating all kinds of strange dishes":
      "Back from a work trip in Asia, you tell colleagues: «______»",
    "The slow pace of life and relaxed approach to work were only to be expected":
      "On a summer placement in a southern town, you note: «______»",
    "What I hadn't anticipated was their way of dressing":
      "The food was odd but predictable; the surprise was fashion. «______»",
    "I felt quite scruffy by comparison":
      "At the gallery opening everyone looked designer-smart. «______»"
  };

  /** Gap lines — new contexts; answers = exact Cool Word strings. */
  var GAP_ITEMS = {
    "Easy for some, isn't it?": {
      before: "Lena passed the driving test first time while I’m on my fifth attempt. ",
      after: ""
    },
    "I get the impression he's fed up with it all": {
      before: "After another weekend of warehouse shifts, Rob said quietly: «",
      after: "»."
    },
    "I wouldn't be surprised if he got rid of everything over here": {
      before: "If our old neighbour sold his city flat and moved abroad for good, ",
      after: "."
    },
    "Is that what he's said he'll do?": {
      before: "Rumour says the coach is quitting — someone asked: «",
      after: "»"
    },
    "It's not like him to talk much about his plans": {
      before: "You never know where Jake will work next; after all, ",
      after: "."
    },
    "I'm stressed out, to be honest": {
      before: "On the video call I admitted, «",
      after: ", what with the exams and the leak in the kitchen.»"
    },
    "I was wondering if you could tell me": {
      before: "Before booking the retreat I wrote: «",
      after: " what the daily schedule is like.»"
    },
    "I had a quick look online, but it's always better to talk to someone with firsthand experience": {
      before: "The forum posts helped a bit, but ",
      after: "."
    },
    "We just about get by, but it's a bit of a struggle": {
      before: "Since the shop closed, ",
      after: "."
    },
    "He's sent off loads of applications, but no luck so far": {
      before: "My uncle keeps hoping for a call: ",
      after: "."
    },
    "My mum and dad could probably help out, but somehow it doesn't seem right borrowing from them": {
      before: "They offered to cover the deposit, yet ",
      after: "."
    },
    "There's nothing for it but to put my car on the market and see if I can get a decent price for it": {
      before: "With the bills piling up, I decided that ",
      after: "."
    },
    "I've gained so much from these two years living abroad": {
      before: "Looking back at her degree in Prague, Nina said ",
      after: "."
    },
    "I reckon we'll have no trouble finding work": {
      before: "After the careers fair, Ben shrugged: «",
      after: " when we graduate.»"
    },
    "I was thinking more about the benefits to me as a person": {
      before: "It wasn’t really about the salary — ",
      after: "."
    },
    "I've become much more tolerant since I've been here, more willing to accept difference": {
      before: "Sharing a house with students from four countries, she noticed ",
      after: "."
    },
    "We've grown as individuals, we're more open-minded and independent, so that makes us more employable": {
      before: "In the cover letter she argued that ",
      after: "."
    },
    "I admire your optimism": {
      before: "You’ll fix it all by Friday? Well, ",
      after: "."
    },
    "The whole thing has made me value life at home more": {
      before: "Six months on the road taught him that ",
      after: "."
    },
    "I've had to get used to eating all kinds of strange dishes": {
      before: "On the archaeology dig in Peru, ",
      after: "."
    },
    "The slow pace of life and relaxed approach to work were only to be expected": {
      before: "In the seaside village in August, ",
      after: "."
    },
    "What I hadn't anticipated was their way of dressing": {
      before: "The heat and the food were familiar from travel guides; ",
      after: "."
    },
    "I felt quite scruffy by comparison": {
      before: "Everyone at the award ceremony wore tailored suits; ",
      after: "."
    }
  };

  function answersFor(line) {
    var cw = String(line.coolWord || "").trim();
    var ph = String(line.phrase || cw).trim();
    var out = [];
    if (cw) out.push(cw);
    if (ph && ph !== cw) out.push(ph);
    return out.length ? out : [cw];
  }

  function mcqPromptFor(line) {
    var cw = String(line.coolWord || "").trim();
    if (MCQ_PROMPTS[cw]) return MCQ_PROMPTS[cw];
    return "Pick the best phrase for this new situation: " + (line.hint || cw);
  }

  function wrongFromSameSpeaker(sp, correct) {
    var wrong = [];
    sp.lines.forEach(function (other) {
      var w = String(other.coolWord || other.phrase || "").trim();
      if (w && w !== correct && wrong.indexOf(w) < 0) wrong.push(w);
    });
    return wrong;
  }

  function buildMcq(sp) {
    if (!sp || !sp.lines.length) return [];
    var letters = ["A", "B", "C", "D"];
    return sp.lines.map(function (line) {
      var correct = String(line.coolWord || line.phrase || "").trim();
      var wrong = shuffle(wrongFromSameSpeaker(sp, correct)).slice(0, 3);
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
      return {
        prompt: mcqPromptFor(line),
        choices: choices,
        answer: answer,
        hint: "From Track 1.2: " + (line.contextSentence || correct)
      };
    });
  }

  function buildGaps(sp) {
    if (!sp || !sp.lines.length) return { title: "Gaps", bank: [], items: [] };
    var bank = [];
    var seen = Object.create(null);
    sp.lines.forEach(function (line) {
      var w = String(line.coolWord || line.phrase || "").trim();
      if (w && !seen[w]) {
        seen[w] = true;
        bank.push(w);
      }
    });
    var items = [];
    sp.lines.forEach(function (line) {
      var cw = String(line.coolWord || "").trim();
      var gap = GAP_ITEMS[cw];
      if (gap) {
        items.push({
          before: gap.before,
          after: gap.after,
          answers: answersFor(line)
        });
      } else {
        items.push({
          before: "Complete: ",
          after: "",
          answers: answersFor(line)
        });
      }
    });
    return {
      title: "Fill in the gaps — " + (sp.label || "SB 1.2"),
      note: "New contexts · same phrases from Track 1.2 (use the phrase box)",
      bank: bank,
      items: items
    };
  }

  /** Role-play — new scenes; highlights = Track 1.2 Cool Words (verbatim in script). */
  var ROLEPLAY_BY_ID = {
    sp1: {
      title: "Four homes and a rumour",
      characters: [
        { id: "emma", name: "Emma", blurb: "Your friend — curious, practical." },
        { id: "tom", name: "Tom", blurb: "Your friend — knows Alex from university." }
      ],
      highlights: [
        "Easy for some, isn't it?",
        "I get the impression he's fed up with it all",
        "I wouldn't be surprised if he got rid of everything over here",
        "Is that what he's said he'll do?",
        "It's not like him to talk much about his plans"
      ],
      lines: [
        {
          who: "emma",
          text: "Alex has a flat, a cottage and a villa now. Easy for some, isn't it?"
        },
        {
          who: "tom",
          text: "Maybe, but I get the impression he's fed up with it all — always on the move."
        },
        {
          who: "emma",
          text: "Really? I wouldn't be surprised if he got rid of everything over here and stayed in Spain."
        },
        {
          who: "tom",
          text: "Is that what he's said he'll do? I haven't heard him promise anything."
        },
        {
          who: "emma",
          text: "Typical Alex. It's not like him to talk much about his plans."
        },
        { who: "tom", text: "True. We'll wait and see." }
      ]
    },
    sp2: {
      title: "Need to unwind",
      characters: [
        { id: "nina", name: "Nina", blurb: "Stressed after work and a noisy renovation." },
        { id: "omar", name: "Omar", blurb: "Friend who tried a pilates class last term." }
      ],
      highlights: [
        "I'm stressed out, to be honest",
        "I was wondering if you could tell me",
        "I had a quick look online, but it's always better to talk to someone with firsthand experience"
      ],
      lines: [
        {
          who: "nina",
          text: "I'm stressed out, to be honest, what with the office and the builders at home."
        },
        {
          who: "omar",
          text: "You should try something gentle — yoga or pilates."
        },
        {
          who: "nina",
          text: "I was wondering if you could tell me what your class was actually like."
        },
        {
          who: "omar",
          text: "Sure. I had a quick look online, but it's always better to talk to someone with firsthand experience."
        },
        { who: "nina", text: "Then tell me everything — I'm booking tomorrow." }
      ]
    },
    sp3: {
      title: "Until something turns up",
      characters: [
        { id: "priya", name: "Priya", blurb: "Part-time teaching assistant." },
        { id: "james", name: "James", blurb: "Partner — out of work since spring." }
      ],
      highlights: [
        "We just about get by, but it's a bit of a struggle",
        "He's sent off loads of applications, but no luck so far",
        "My mum and dad could probably help out, but somehow it doesn't seem right borrowing from them",
        "There's nothing for it but to put my car on the market and see if I can get a decent price for it"
      ],
      lines: [
        {
          who: "priya",
          text: "We just about get by, but it's a bit of a struggle with only my hours."
        },
        {
          who: "priya",
          text: "He's sent off loads of applications, but no luck so far."
        },
        { who: "james", text: "I know. Something will turn up." },
        {
          who: "priya",
          text: "My mum and dad could probably help out, but somehow it doesn't seem right borrowing from them."
        },
        {
          who: "james",
          text: "So what's the plan?"
        },
        {
          who: "priya",
          text: "There's nothing for it but to put my car on the market and see if I can get a decent price for it."
        }
      ]
    },
    sp5: {
      title: "Flying home",
      characters: [
        { id: "elena", name: "Elena", blurb: "Returning after two years on an exchange programme." },
        { id: "marco", name: "Marco", blurb: "Classmate who stayed in the UK." }
      ],
      highlights: [
        "I've gained so much from these two years living abroad",
        "I reckon we'll have no trouble finding work",
        "I was thinking more about the benefits to me as a person",
        "I've become much more tolerant since I've been here, more willing to accept difference",
        "We've grown as individuals, we're more open-minded and independent, so that makes us more employable",
        "I admire your optimism",
        "The whole thing has made me value life at home more"
      ],
      lines: [
        {
          who: "elena",
          text: "I've gained so much from these two years living abroad."
        },
        {
          who: "marco",
          text: "Same here. I reckon we'll have no trouble finding work when we're back."
        },
        {
          who: "elena",
          text: "Maybe — but I was thinking more about the benefits to me as a person."
        },
        {
          who: "elena",
          text: "I've become much more tolerant since I've been here, more willing to accept difference."
        },
        {
          who: "marco",
          text: "We've grown as individuals, we're more open-minded and independent, so that makes us more employable."
        },
        { who: "elena", text: "Well, I admire your optimism." },
        {
          who: "marco",
          text: "Honestly, the whole thing has made me value life at home more."
        }
      ]
    },
    sp8: {
      title: "After the assignment",
      characters: [
        { id: "greg", name: "Greg", blurb: "Engineer back from a month in South America." },
        { id: "hannah", name: "Hannah", blurb: "Colleague asking about the trip." }
      ],
      highlights: [
        "I've had to get used to eating all kinds of strange dishes",
        "The slow pace of life and relaxed approach to work were only to be expected",
        "What I hadn't anticipated was their way of dressing",
        "I felt quite scruffy by comparison"
      ],
      lines: [
        {
          who: "greg",
          text: "I've had to get used to eating all kinds of strange dishes — that part I expected."
        },
        {
          who: "hannah",
          text: "And the office culture?"
        },
        {
          who: "greg",
          text: "The slow pace of life and relaxed approach to work were only to be expected in that heat."
        },
        {
          who: "hannah",
          text: "Did anything surprise you?"
        },
        {
          who: "greg",
          text: "What I hadn't anticipated was their way of dressing. I felt quite scruffy by comparison."
        }
      ]
    }
  };

  function buildParaphrase(sp) {
    if (!sp || !sp.lines.length) return { variants: [] };
    return {
      variants: [
        {
          kicker: "Flip",
          title: "Cool Words · SB 1.2",
          note: "Read the sense — flip and say the phrase from the audio aloud.",
          promptLabel: "Sense",
          answerLabel: "Phrase from audio",
          items: sp.lines.map(function (line) {
            var ans = String(line.coolWord || line.phrase || "").trim();
            return {
              sentence: line.hint || ans,
              answers: answersFor(line)
            };
          })
        }
      ]
    };
  }

  W.U1_SB12_LISTENING_PACK = {
    speakerIds: ["sp1", "sp2", "sp3", "sp5", "sp8"],
    speakerById: speakerById,
    exercises: function (id) {
      return buildMcq(speakerById(id));
    },
    gaps: function (id) {
      return buildGaps(speakerById(id));
    },
    paraphrase: function (id) {
      return buildParaphrase(speakerById(id));
    },
    roleplay: function (id) {
      return ROLEPLAY_BY_ID[id] || null;
    }
  };
})(typeof window !== "undefined" ? window : globalThis);
