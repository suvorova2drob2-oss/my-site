/**
 * Unit 9 — Vocabulary: describing art & architecture (interior design article).
 * Speaking, Treasure Hunt, disk exercises 1–3 — local, no CMS.
 */
(function (global) {
  var title = "INTERIOR DESIGN: different strokes for different folks";

  var passageComplete =
    "Different strokes for different folks: interior design for the average person has come on leaps and bounds since the advent of home makeover TV shows back in the 1970s, and one thing that these shows have made crystal clear is the distinctive nature of taste. After all, as the saying goes, beauty is in the eye of the beholder and this is definitely the case when it comes to how we decorate our homes.\n\n" +
    "Some people believe interior design should have a utilitarian look and feel, considering embellishments, such as cushions to be unnecessary as they detract from purpose and function. These people tend to splash out on a few timeless pieces of furniture from renowned designers or shops, rather than have lots of bits and pieces at a lower price point. They would choose understated elegance over anything that could be considered ostentatious or showy. This minimalistic approach is synonymous with contemporary design. Replete with sleek fixtures and fittings, many swanky modern offices have adopted this look in order to denote a level of success, sophistication and quality.\n\n" +
    "Not everyone is into this however, and for the more flamboyant amongst us, when it comes to curtains, cushions, rugs and ornaments, the more whimsical the approach, the better. These people enjoy being surrounded by items that will stand out and take centre stage. They are likely to choose imposing, eye-catching colours for the walls to create a bold contrast with those of the furnishings.\n\n" +
    "Then, there are those who love an eclectic, vintage look. These people are often to be found at flea markets looking for items to collect that reflect the motifs and styles of bygone eras, from wallpaper and colour schemes to furniture and accessories. Take the 1980s, for instance, when bright, garish colours were all the rage. While this style may still be loved by fans of vintage, others consider it to be vulgar and a sign of poor taste.\n\n" +
    "At the end of the day, whatever your style preference, be it the wild and the wacky or something altogether more muted and unassuming, the best advice is probably to embrace it and enjoy it.";

  var readParagraphs = passageComplete.split(/\n\n+/).map(function (p) {
    return p.trim();
  }).filter(Boolean);

  var sec = "Interior design lexis";

  /** Micro + 60s phrase deck: same shape as prep/idium items. */
  var speakItems = [
    {
      sec: sec,
      label: "different strokes for different folks",
      q: "Give an example of two people who love opposite styles — why is it different strokes for different folks?"
    },
    {
      sec: sec,
      label: "come on leaps and bounds",
      q: "Name one area (technology, medicine, or your hobby) that has come on leaps and bounds in your lifetime."
    },
    {
      sec: sec,
      label: "beauty is in the eye of the beholder",
      q: "Give an example where you and a friend disagreed on style — why is beauty in the eye of the beholder?"
    },
    {
      sec: sec,
      label: "home makeover",
      q: "Have home makeover shows ever made you change something in your flat? What would you redo if you had the budget?"
    },
    {
      sec: sec,
      label: "utilitarian",
      q: "Would you prefer a utilitarian kitchen with no clutter, or a cosy one full of ornaments? Why?"
    },
    {
      sec: sec,
      label: "look and feel",
      q: "Describe the look and feel of a café or workspace you like — colours, materials, mood."
    },
    {
      sec: sec,
      label: "detract from",
      q: "Can too many decorations detract from a room's purpose? Give an example."
    },
    {
      sec: sec,
      label: "splash out on",
      q: "What is one thing you would splash out on for your home if money were no object?"
    },
    {
      sec: sec,
      label: "timeless pieces of furniture",
      q: "Would you rather own one timeless piece of furniture or many cheaper items? Why?"
    },
    {
      sec: sec,
      label: "renowned",
      q: "Name a renowned architect or designer and one building or product people associate with them."
    },
    {
      sec: sec,
      label: "understated elegance",
      q: "Describe a room or outfit that shows understated elegance rather than flashiness."
    },
    {
      sec: sec,
      label: "ostentatious",
      q: "Have you ever seen a home or lobby you would call ostentatious? What made it feel that way?"
    },
    {
      sec: sec,
      label: "minimalistic",
      q: "Could you live with a strictly minimalistic interior, or would you miss colour and pattern?"
    },
    {
      sec: sec,
      label: "sleek fixtures and fittings",
      q: "Where have you seen sleek fixtures and fittings — a hotel bathroom, an office kitchen, somewhere else?"
    },
    {
      sec: sec,
      label: "denote a level of success",
      q: "Do you think a company's office design can denote a level of success? Why or why not?"
    },
    {
      sec: sec,
      label: "swanky",
      q: "What kind of space — café, hotel, office — would you describe as swanky?"
    },
    {
      sec: sec,
      label: "flamboyant",
      q: "Do you enjoy flamboyant interiors, or do they tire you quickly?"
    },
    {
      sec: sec,
      label: "whimsical",
      q: "Describe a whimsical detail you once saw in someone's flat or in a shop window."
    },
    {
      sec: sec,
      label: "take centre stage",
      q: "In your living room, which object or piece of furniture should take centre stage, in your opinion?"
    },
    {
      sec: sec,
      label: "bold contrast",
      q: "Do you like bold contrast in interiors (e.g. wall colour vs. sofa), or softer blends?"
    },
    {
      sec: sec,
      label: "bygone eras",
      q: "Which bygone era's design do you find most interesting — and would you use it at home?"
    },
    {
      sec: sec,
      label: "all the rage",
      q: "What home or fashion trend was all the rage when you were younger — do you still like it?"
    },
    {
      sec: sec,
      label: "imposing",
      q: "Would you paint a whole wall in an imposing colour, or keep walls neutral? Why?"
    },
    {
      sec: sec,
      label: "garish",
      q: "What is something people wear or decorate with that you find garish — or that others might?"
    },
    {
      sec: sec,
      label: "vulgar",
      q: "Can a luxury interior still feel vulgar? Give an example from media or real life if you can."
    },
    {
      sec: sec,
      label: "unassuming",
      q: "Describe an unassuming space you like — simple outside but pleasant inside."
    },
    {
      sec: sec,
      label: "at the end of the day",
      q: "At the end of the day, what matters more to you in a home: comfort, style, or practicality?"
    },
    {
      sec: sec,
      label: "embrace it",
      q: "If you chose a bold style for one room, would you embrace it fully or tone it down for guests?"
    }
  ];

  var freerQuestions = [
    "The text contrasts utilitarian minimalism with flamboyant, whimsical decor. Where do you sit on that spectrum at home?",
    "Have home makeover shows changed what people expect from ordinary flats and houses? In what way?",
    "Is it worth splashing out on one timeless piece of furniture instead of many cheap items? Why or why not?",
    "Why might a company choose a sleek, minimalistic office even if it costs more?",
    "Flea markets and vintage style are back in fashion. What do you enjoy — or avoid — about that look?",
    "The 1980s are described as an era of garish colours. Which decade's design do you like most, and why?",
    "The article says taste is subjective. Have you ever changed your mind about a style you used to dislike?",
    "If you redecorated one room tomorrow, would you aim for understated elegance or something bolder?"
  ];

  /** Retell tags (subset of must-know chunks from the passage). */
  var retellPhrases = [
    "different strokes for different folks",
    "come on leaps and bounds",
    "home makeover",
    "beauty is in the eye of the beholder",
    "utilitarian",
    "look and feel",
    "detract from",
    "splash out on",
    "timeless pieces of furniture",
    "renowned",
    "understated elegance",
    "ostentatious",
    "minimalistic",
    "sleek fixtures and fittings",
    "swanky",
    "denote a level of success",
    "flamboyant",
    "whimsical",
    "take centre stage",
    "imposing",
    "bold contrast",
    "bygone eras",
    "all the rage",
    "garish",
    "vulgar",
    "at the end of the day",
    "unassuming",
    "embrace it"
  ];

  var rawTreasure = [
    {
      phrase: "different strokes for different folks",
      paraphrase: "People like different things — there is no single right taste.",
      paraphraseRu: "на вкус и цвет товарищей нет"
    },
    {
      phrase: "come on leaps and bounds",
      paraphrase: "Improved or developed very quickly — by huge steps.",
      paraphraseRu: "семимильными шагами; очень быстро (развиваться)"
    },
    {
      phrase: "home makeover",
      paraphrase: "A renovation or redesign that transforms how a home looks.",
      paraphraseRu: "преображение дома (ремонт / переделка)"
    },
    {
      phrase: "beauty is in the eye of the beholder",
      paraphrase: "What counts as beautiful depends on who is looking.",
      paraphraseRu: "красота в глазах смотрящего"
    },
    {
      phrase: "utilitarian",
      paraphrase: "Designed for practical use rather than decoration.",
      paraphraseRu: "практичный, функциональный (без излишеств)"
    },
    {
      phrase: "look and feel",
      paraphrase: "The overall appearance and atmosphere of a place.",
      paraphraseRu: "внешний вид и обстановка (атмосфера)"
    },
    {
      phrase: "detract from",
      paraphrase: "Make something seem less good or pull attention away from it.",
      paraphraseRu: "отвлекать от чего-то; умалять (ценность / значение)"
    },
    {
      phrase: "splash out on",
      paraphrase: "Spend a lot of money on something — treat yourself.",
      paraphraseRu: "разориться на что-то; потратить приличную сумму"
    },
    {
      phrase: "timeless pieces of furniture",
      paraphrase: "Classic items that stay stylish and do not go out of fashion.",
      paraphraseRu: "мебель вне времени (классика, не выходит из моды)"
    },
    {
      phrase: "renowned",
      paraphrase: "Famous and highly respected (designers or brands).",
      paraphraseRu: "известный, с именем"
    },
    {
      phrase: "understated elegance",
      paraphrase: "Refined style without loud or flashy display.",
      paraphraseRu: "сдержанная элегантность"
    },
    {
      phrase: "ostentatious",
      paraphrase: "Showy — designed to impress in an obvious way.",
      paraphraseRu: "показной, демонстративный"
    },
    {
      phrase: "minimalistic",
      paraphrase: "Very simple forms, little ornament — less is more.",
      paraphraseRu: "минималистичный"
    },
    {
      phrase: "sleek fixtures and fittings",
      paraphrase: "Smooth, modern-looking hardware and installed fittings in a room.",
      paraphraseRu: "стильные / современные крепления и фурнитура"
    },
    {
      phrase: "swanky",
      paraphrase: "Upscale, stylish, expensive-looking (e.g. offices).",
      paraphraseRu: "шикарный, модный"
    },
    {
      phrase: "denote a level of success",
      paraphrase: "Signal that someone or something has reached a certain level of success.",
      paraphraseRu: "свидетельствовать об определённом уровне успеха"
    },
    {
      phrase: "flamboyant",
      paraphrase: "Bold, colourful, theatrical — loves attention.",
      paraphraseRu: "яркий, пышный, броский"
    },
    {
      phrase: "whimsical",
      paraphrase: "Playful and fanciful rather than serious or plain.",
      paraphraseRu: "игривый, фантазийный"
    },
    {
      phrase: "take centre stage",
      paraphrase: "Become the main focus — play the leading role visually.",
      paraphraseRu: "быть в центре внимания; играть главную роль"
    },
    {
      phrase: "imposing",
      paraphrase: "Striking and commanding — hard to ignore.",
      paraphraseRu: "внушительный, грандиозный"
    },
    {
      phrase: "bold contrast",
      paraphrase: "A strong, eye-catching difference (e.g. between colours).",
      paraphraseRu: "резкий, смелый контраст"
    },
    {
      phrase: "bygone eras",
      paraphrase: "Past times or historical periods.",
      paraphraseRu: "ушедшие эпохи"
    },
    {
      phrase: "all the rage",
      paraphrase: "Extremely fashionable at the time — everyone wanted it.",
      paraphraseRu: "на пике моды; пользоваться огромным успехом"
    },
    {
      phrase: "garish",
      paraphrase: "Unpleasantly bright, loud, or tasteless to look at.",
      paraphraseRu: "аляповатый, безвкусный, кричащий"
    },
    {
      phrase: "vulgar",
      paraphrase: "In poor taste; crude or cheap-looking to some viewers.",
      paraphraseRu: "вульгарный, безвкусный"
    },
    {
      phrase: "at the end of the day",
      paraphrase: "Ultimately — when everything is considered.",
      paraphraseRu: "в конечном счёте; в итоге"
    },
    {
      phrase: "unassuming",
      paraphrase: "Modest and quiet — not trying to impress.",
      paraphraseRu: "скромный, непритязательный"
    },
    {
      phrase: "embrace it",
      paraphrase: "Accept a style or idea fully and make it yours.",
      paraphraseRu: "принять стиль / идею и придерживаться её"
    }
  ];

  var treasureItems = [];
  for (var ti = 0; ti < rawTreasure.length; ti++) {
    if (passageComplete.indexOf(rawTreasure[ti].phrase) !== -1) treasureItems.push(rawTreasure[ti]);
  }
  treasureItems.sort(function (a, b) {
    return passageComplete.indexOf(a.phrase) - passageComplete.indexOf(b.phrase);
  });

  /** Disk Exercise 1 — word bank → gaps (same item shape as prepositional-phrases task1). */
  var exercise1 = {
    id: "interior-vocab-ex1-describing-art",
    title: "Exercise 1 — Describing art and architecture",
    instruction:
      "<strong>1</strong> Complete the sentences with words from the box. Tap a gap, then a word. Two gaps in one sentence: fill both, then <strong>Check</strong>.",
    pointsFirstPass: 7,
    choices: [
      "garish",
      "imposing",
      "minimalistic",
      "renowned",
      "swanky",
      "unassuming",
      "whimsical"
    ],
    items: [
      {
        parts: [
          "We don't usually stay in ",
          { gap: true, answer: "swanky", key: "0" },
          " hotels, but as it was a special occasion, we splashed out on something a bit more elegant than usual."
        ],
        collocations: ["swanky"]
      },
      {
        parts: [
          "Shelia's fashion designs are ",
          { gap: true, answer: "renowned", key: "1a" },
          " for their ",
          { gap: true, answer: "garish", key: "1b" },
          " colours – bright pinks, oranges and greens – which certainly aren't to everyone's taste."
        ],
        collocations: ["renowned", "garish"]
      },
      {
        parts: [
          "They'd warned us that their flat had a very ",
          { gap: true, answer: "minimalistic", key: "2" },
          " design, but there weren't even any chairs!"
        ],
        collocations: ["minimalistic"]
      },
      {
        parts: [
          "Frank is best known for his ",
          { gap: true, answer: "whimsical", key: "3" },
          " portraits of animals dressed up as people, but he also paints more serious pieces."
        ],
        collocations: ["whimsical"]
      },
      {
        parts: [
          "The city skyline is dominated by a/an ",
          { gap: true, answer: "imposing", key: "4" },
          " skyscraper that dwarfs the other buildings."
        ],
        collocations: ["imposing"]
      },
      {
        parts: [
          "It's hard to believe this ",
          { gap: true, answer: "unassuming", key: "5" },
          " little box contains such powerful audio speakers."
        ],
        collocations: ["unassuming"]
      }
    ]
  };

  /** Disk Exercise 2 — match statements 1–5 to responses a–e (same shape as prepositional task-02). */
  var exercise2 = {
    id: "interior-vocab-ex2-match-statements",
    title: "Exercise 2 · Match statements to responses",
    pointsFirstPass: 5,
    instruction:
      "<strong>2</strong> Match the statements (1–5) to the most suitable response (a–e). <strong>Use each response once only.</strong> Tap a statement, then a response. <strong>Shuffle</strong> changes only the order of the right column.",
    focusPhrases: [
      "utilitarian",
      "flamboyant",
      "vulgar",
      "understated",
      "ostentatious",
      "stick out like a sore thumb",
      "over the top",
      "ram it down our throats"
    ],
    sentences: [
      { id: 1, text: "The offices have a very utilitarian feel." },
      { id: 2, text: "Ricardo's known for his flamboyant clothes." },
      { id: 3, text: "The new statues are rather vulgar." },
      { id: 4, text: "Dilar's interior design choices are always so understated." },
      {
        id: 5,
        text: "There's no need for Charlotte and Henry to be so ostentatious."
      }
    ],
    definitions: [
      {
        id: "a",
        text: "I know! They stick out like a sore thumb from their surroundings, don't they?"
      },
      {
        id: "b",
        text: "Exactly! We know they're well off, but why ram it down our throats all the time?"
      },
      {
        id: "c",
        text: "That's right. Everything serves a function, with no clutter or decoration."
      },
      {
        id: "d",
        text: "Well, some people find them over the top, but I like them."
      },
      {
        id: "e",
        text: "Absolutely! They look simple on the surface, but that conceals a lot of attention to detail."
      }
    ],
    answerKey: { 1: "c", 2: "d", 3: "a", 4: "e", 5: "b" }
  };

  /** Disk Exercise 3 — complete definitions (several acceptable single-word answers; item 6 = two distinct adjectives from Ex. 1–2). */
  var exercise3 = {
    id: "interior-vocab-ex3-definitions",
    title: "Exercise 3 · Complete the definitions",
    pointsFirstPass: 7,
    instruction:
      "<strong>3</strong> Complete the definitions with adjectives from Exercises 1 and 2. <strong>Some items accept more than one correct answer.</strong> Item 6: write <strong>two different</strong> adjectives.",
    wordBank:
      "<strong>Word bank (Ex. 1–2):</strong> <code>garish</code>, <code>imposing</code>, <code>minimalistic</code>, <code>renowned</code>, <code>swanky</code>, <code>unassuming</code>, <code>whimsical</code>, <code>utilitarian</code>, <code>flamboyant</code>, <code>vulgar</code>, <code>understated</code>, <code>ostentatious</code>.",
    focusPhrases: [
      "garish",
      "vulgar",
      "whimsical",
      "imposing",
      "unassuming",
      "understated",
      "minimalistic",
      "renowned",
      "ostentatious",
      "flamboyant"
    ],
    /** Normalise common variants to the canonical spellings above. */
    normalizeAliases: {
      minimalist: "minimalistic",
      minimal: "minimalistic"
    },
    items: [
      {
        id: 1,
        stem: "An eyesore is something you think is",
        accept: ["garish", "vulgar"]
      },
      {
        id: 2,
        stem: "Something playful or fun is",
        accept: ["whimsical"]
      },
      {
        id: 3,
        stem: "If you are in awe of something, it is",
        accept: ["imposing", "renowned"]
      },
      {
        id: 4,
        stem: "Something that doesn't stand out is",
        accept: ["unassuming", "understated", "minimalistic"]
      },
      {
        id: 5,
        stem: "If something is famous, it is",
        accept: ["renowned"]
      },
      {
        id: 6,
        kind: "pair",
        stem: "Two adjectives to describe artistic or architectural styles are",
        pool: [
          "garish",
          "imposing",
          "minimalistic",
          "renowned",
          "swanky",
          "unassuming",
          "whimsical",
          "utilitarian",
          "flamboyant",
          "vulgar",
          "understated",
          "ostentatious"
        ],
        examplePair: ["minimalistic", "flamboyant"]
      },
      {
        id: 7,
        stem: "If something is designed to attract a lot of attention, it is",
        accept: ["ostentatious", "flamboyant", "garish", "imposing", "swanky"]
      }
    ]
  };

  var lexicalGamesSpeaker = "Interior design: Art & architecture";

  global.INTERIOR_DESIGN_VOCAB_CORE = {
    version: 5,
    title: title,
    lexicalGamesSpeaker: lexicalGamesSpeaker,
    passageComplete: passageComplete,
    readParagraphs: readParagraphs,
    retellTitle: title,
    retellAccent: "#38bdf8",
    retellPhrases: retellPhrases,
    speakItems: speakItems,
    freerQuestions: freerQuestions,
    treasureHuntRounds: [
      {
        id: "interior-vocab-th-1",
        short: "Interior design",
        title: title,
        passage: passageComplete,
        items: treasureItems
      }
    ],
    exercise1: exercise1,
    exercise2: exercise2,
    exercise3: exercise3
  };
})(typeof window !== "undefined" ? window : globalThis);
