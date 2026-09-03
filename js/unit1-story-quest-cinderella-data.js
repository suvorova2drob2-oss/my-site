/**
 * Unit 1 · Cinderella · Lifestyle Cool Words — story + lexis kit.
 * window.U1_CINDERELLA_QUEST
 */
(function (W) {
  "use strict";

  var IMG = "img/";
  var KIT = W.FCE_STORY_QUEST_LEXIS_KIT;
  var LEX = W.FCE_U1_LIFESTYLE_LEXIS;

  var ACTS = [
    { id: "lucas", label: "Act 1 · Before the ball" },
    { id: "maja", label: "Act 2 · Life in the house" },
    { id: "reo", label: "Act 3 · Stepmother days" },
    { id: "ben", label: "Act 4 · Ball & midnight" },
    { id: "epilogue", label: "Act 5 · Happy end" }
  ];

  /**
   * Cinderella story sentence + one missing word from stickyAnswer (lexis kit).
   * storyBefore / storyAfter wrap the Cool Word phrase in the fairytale.
   */
  var STORY = [
    {
      id: 1,
      act: "lucas",
      kicker: "Before dawn",
      flavor: "The stepsisters snore like they own the house. They do.",
      storyBefore:
        "Everyone else is still asleep, but I'm already downstairs cleaning. Getting up at five to scrub floors is not really my idea of ",
      storyAfter: ".",
      lex: { person: "lucas", line: 0 }
    },
    {
      id: 2,
      act: "lucas",
      kicker: "Stay kind",
      flavor: "My stepmother says feelings are for servants.",
      storyBefore:
        "My stepmother says I shouldn't care about anyone, but I realise it's ",
      storyAfter: " to stay kind anyway.",
      lex: { person: "lucas", line: 1 }
    },
    {
      id: 3,
      act: "lucas",
      kicker: "Invitations",
      flavor: "The prince invited every girl in the kingdom — even the one with the mop.",
      storyBefore:
        "When the invitations arrived, the house looked like a theatre office — scripts lying all over the ",
      storyAfter: ".",
      lex: { person: "lucas", line: 2 }
    },
    {
      id: 4,
      act: "lucas",
      kicker: "The kitchen",
      flavor: "My stepsisters tried to help. That was the problem.",
      storyBefore: "After my stepsisters finished 'helping', honestly, it's a bit of a ",
      storyAfter: ", I'm ashamed to say.",
      lex: { person: "lucas", line: 3 }
    },
    {
      id: 5,
      act: "lucas",
      kicker: "Fairy godmother",
      flavor: "Dress, hair, shoes — all in ten minutes.",
      storyBefore: "My fairy godmother worked so fast that I lost track of ",
      storyAfter: " and nearly missed the carriage.",
      lex: { person: "lucas", line: 4 }
    },
    {
      id: 6,
      act: "lucas",
      kicker: "Mother's stories",
      flavor: "Before she died, my mother told me about kings and quiet libraries.",
      storyBefore: "I've always been passionate ",
      storyAfter: " the stories my mother told me.",
      lex: { person: "lucas", line: 5 }
    },
    {
      id: 7,
      act: "lucas",
      kicker: "Last year",
      flavor: "The village dance started without me. Never again — well…",
      storyBefore: "Last year I turned up ",
      storyAfter: " for the village dance, and I was mortified.",
      lex: { person: "lucas", line: 6 }
    },
    {
      id: 8,
      act: "lucas",
      kicker: "The ball",
      flavor: "No broom. No ash. Just music.",
      storyBefore: "At the palace I finally got to spend a few hours ",
      storyAfter: ".",
      lex: { person: "lucas", line: 7 }
    },
    {
      id: 9,
      act: "lucas",
      kicker: "After midnight",
      flavor: "Story of my life, even on the best night.",
      storyBefore: "After the ball, my bedtime ",
      storyAfter: " often one or two in the morning.",
      lex: { person: "lucas", line: 8 }
    },
    {
      id: 10,
      act: "lucas",
      kicker: "The attic",
      flavor: "I ran home exhausted. The mice didn't get a goodnight.",
      storyBefore:
        "Back in the attic, I'm normally out like a light as soon as my head hits the ",
      storyAfter: ".",
      lex: { person: "lucas", line: 9 }
    },
    {
      id: 11,
      act: "maja",
      kicker: "The mirror",
      flavor: "One mirror. Two stepsisters. Zero sharing.",
      storyBefore: "Wherever I am, I love the ",
      storyAfter:
        " that my stepsisters live just a short walk from the only mirror in the house.",
      lex: { person: "maja", line: 0 }
    },
    {
      id: 12,
      act: "maja",
      kicker: "The palace",
      flavor: "Close enough to dream, far enough to mop.",
      storyBefore: "The palace is only a short walk ",
      storyAfter: " our village — if you have a horse and no chores.",
      lex: { person: "maja", line: 1 }
    },
    {
      id: 13,
      act: "maja",
      kicker: "Morning",
      flavor: "They call it beauty sleep. I call it unfair.",
      storyBefore: "My stepsisters can get up reasonably ",
      storyAfter: ", while I'm already on my knees with a mop.",
      lex: { person: "maja", line: 2 }
    },
    {
      id: 14,
      act: "maja",
      kicker: "Their 'work'",
      flavor: "An hour on hair. Then prince hunting.",
      storyBefore: "They do their hair for an hour before setting off for ",
      storyAfter: ' — and by "work" I mean finding a prince.',
      lex: { person: "maja", line: 3 }
    },
    {
      id: 15,
      act: "maja",
      kicker: "Skills",
      flavor: "Advanced level. No notes.",
      storyBefore: "My stepsisters are fully ",
      storyAfter: " in complaining — trust me.",
      lex: { person: "maja", line: 4 }
    },
    {
      id: 16,
      act: "maja",
      kicker: "Every time",
      flavor: "My dress is not your dress. They disagree.",
      storyBefore: "They tend ",
      storyAfter: " take my things without asking.",
      lex: { person: "maja", line: 5 }
    },
    {
      id: 17,
      act: "maja",
      kicker: "Sunday",
      flavor: "The laundry has other plans.",
      storyBefore: "On Sundays I try to catch up on my ",
      storyAfter: ", but the washing never stops.",
      lex: { person: "maja", line: 6 }
    },
    {
      id: 18,
      act: "maja",
      kicker: "Breaking point",
      flavor: "Then I see the mice and feel worse.",
      storyBefore: "Some days I'm not sure I can carry on doing ",
      storyAfter: " much longer.",
      lex: { person: "maja", line: 7 }
    },
    {
      id: 19,
      act: "maja",
      kicker: "Mother's words",
      flavor: "My mother didn't mean on the kitchen floor.",
      storyBefore: "My mother always said I'd settle ",
      storyAfter: " one day.",
      lex: { person: "maja", line: 8 }
    },
    {
      id: 20,
      act: "maja",
      kicker: "The dream",
      flavor: "I wanted a quiet life — not another chore list.",
      storyBefore: "I used to dream of something steady and ",
      storyAfter: ".",
      lex: { person: "maja", line: 9 }
    },
    {
      id: 21,
      act: "maja",
      kicker: "The prince",
      flavor: "He still hasn't found the other shoe.",
      storyBefore: "I haven't made up my ",
      storyAfter: " yet about the prince.",
      lex: { person: "maja", line: 10 }
    },
    {
      id: 22,
      act: "reo",
      kicker: "Shopping",
      flavor: "New ways to be unpleasant, probably.",
      storyBefore: "My stepmother is out all ",
      storyAfter: " — lucky me.",
      lex: { person: "reo", line: 0 }
    },
    {
      id: 23,
      act: "reo",
      kicker: "Fitness",
      flavor: "Running from stepsisters counts, right?",
      storyBefore: "I don't get as much exercise as I'd ",
      storyAfter: " to, unless you count escaping my stepsisters.",
      lex: { person: "reo", line: 1 }
    },
    {
      id: 24,
      act: "reo",
      kicker: "Every day",
      flavor: "Ash, dishes, and surprise ash.",
      storyBefore: "I never know what's next — I love my week, especially the ",
      storyAfter: ".",
      lex: { person: "reo", line: 2 }
    },
    {
      id: 25,
      act: "reo",
      kicker: "Fairytale?",
      flavor: "This house is not a petting farm.",
      storyBefore: "Being a stepdaughter here? It's not all ",
      storyAfter: " lambs and cute little calves.",
      lex: { person: "reo", line: 3 }
    },
    {
      id: 26,
      act: "reo",
      kicker: "That smile",
      flavor: "Marriage? After meeting my stepmother? Good luck.",
      storyBefore: "My stepmother's smile could put some people ",
      storyAfter: " working in this house for life.",
      lex: { person: "reo", line: 4 }
    },
    {
      id: 27,
      act: "reo",
      kicker: "No time",
      flavor: "Between cinders and laundry — busy schedule.",
      storyBefore: "It's not as if I have loads of free ",
      storyAfter: " to go looking for a prince.",
      lex: { person: "reo", line: 5 }
    },
    {
      id: 28,
      act: "reo",
      kicker: "No space",
      flavor: "Not even room for a dog.",
      storyBefore:
        "There's not even room for a dog in my life, so I don't see how I'll fit marriage ",
      storyAfter: ".",
      lex: { person: "reo", line: 6 }
    },
    {
      id: 29,
      act: "ben",
      kicker: "Decor",
      flavor: '"Art," they said. Sure.',
      storyBefore: "At the ball I saw a prince hanging on a ",
      storyAfter: ' from the balcony. "Decoration," they said.',
      lex: { person: "ben", line: 0 }
    },
    {
      id: 30,
      act: "ben",
      kicker: "Wrong chat",
      flavor: "Wrong fairy tale, sir.",
      storyBefore: "The prince told me that's how he makes a living and pay ",
      storyAfter: " his climbing holidays.",
      lex: { person: "ben", line: 1 }
    },
    {
      id: 31,
      act: "ben",
      kicker: "Fairy budget",
      flavor: "Magic has limits. Especially on a Tuesday.",
      storyBefore:
        "My fairy godmother can't provide funding and maybe food and ",
      storyAfter: " every single week.",
      lex: { person: "ben", line: 2 }
    },
    {
      id: 32,
      act: "ben",
      kicker: "Mice LLC",
      flavor: "Tailors, chefs, therapists — all mice.",
      storyBefore: "Mice who sew dresses? It's a fairly unconventional way of ",
      storyAfter: ".",
      lex: { person: "ben", line: 3 }
    },
    {
      id: 33,
      act: "ben",
      kicker: "Midnight run",
      flavor: "One shoe, one pumpkin, zero dignity.",
      storyBefore:
        "Running home at midnight in one shoe isn't for everyone, but it works for ",
      storyAfter: ".",
      lex: { person: "ben", line: 4 }
    },
    {
      id: 34,
      act: "ben",
      kicker: "The stairs",
      flavor: "Terrifying. Thrilling. Tiring.",
      storyBefore:
        "Running down those palace stairs — it's precisely that sense of danger that makes me feel ",
      storyAfter: ".",
      lex: { person: "ben", line: 5 }
    },
    {
      id: 35,
      act: "epilogue",
      kicker: "The shoe",
      flavor: "The whole village watched. Stepmother's face — priceless.",
      storyBefore: "When the prince arrived with my glass slipper, I finally made up my ",
      storyAfter: " — yes, it was him.",
      lex: { person: "maja", line: 10 }
    },
    {
      id: 36,
      act: "epilogue",
      kicker: "Palace",
      flavor: "Breakfast after eight. Revolutionary.",
      storyBefore: "Life in the palace felt steady and ",
      storyAfter: ", and nobody woke me at five to scrub floors.",
      lex: { person: "maja", line: 9 }
    },
    {
      id: 37,
      act: "epilogue",
      kicker: "Ever after",
      flavor: "The mice got their own room. With cheese.",
      storyBefore: "In the end, we got to settle ",
      storyAfter: " in a quiet wing of the castle. Happy ever after.",
      lex: { person: "maja", line: 8 }
    }
  ];

  function sceneImgFor(id) {
    if (id >= 37) return IMG + "sq-win.png";
    if (id === 36) return IMG + "sq-scene-36.png";
    var n = id < 10 ? "0" + id : String(id);
    return IMG + "sq-scene-" + n + ".png";
  }

  var SCENES = KIT && LEX
    ? KIT.buildScenes({
        lexis: LEX,
        storyScenes: STORY,
        imgBase: IMG,
        sceneImgFor: sceneImgFor
      })
    : [];

  function allAnswersFlat() {
    return KIT ? KIT.allGapWordsFlat(SCENES) : [];
  }

  W.U1_CINDERELLA_QUEST = {
    id: "cinderella-lifestyle",
    title: "Cinderella · Lifestyle Quest",
    subtitle: "Unit 1 · This is your life · 37 scenes · all Cool Words A–D",
    gapMode: "word",
    coverImg: IMG + "sq-cover.png",
    winImg: IMG + "sq-win.png",
    ambience: "audio/cinderella-quest-ambience.mp3",
    intro: {
      meta: "Unit 1 · Lifestyle · 37 clues",
      headline: "CINDERELLA · LIFESTYLE QUEST",
      blurb:
        "Attic, ball, one lost slipper — Cinderella's story in 37 scenes. Each scene: one Cool Word from the book; you supply the missing word.",
      rules:
        "Wrong answer = midnight clock · 37 correct = happy ever after · tap 🔊 for music",
      cta: "Start the story →"
    },
    acts: ACTS,
    scenes: SCENES,
    allAnswersFlat: allAnswersFlat
  };
})(typeof window !== "undefined" ? window : globalThis);
