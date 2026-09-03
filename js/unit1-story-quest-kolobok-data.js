/**
 * Unit 1 · Kolobok · Get + Run gaps woven with Lifestyle phrases in the fairytale.
 * window.U1_KOLOBOK_QUEST
 */
(function (W) {
  "use strict";

  var IMG = "img/";
  var KIT = W.FCE_STORY_QUEST_LEXIS_KIT;
  var GET = W.FCE_U1_GET_LEXIS;
  var RUN = W.FCE_U1_RUN_LEXIS;

  var COMBINED_LEXIS = {
    people: (GET && GET.people ? GET.people : []).concat(
      RUN && RUN.people ? RUN.people : []
    )
  };

  var ACTS = [
    { id: "kitchen", label: "Act 1 · Grandmother's kitchen" },
    { id: "hare", label: "Act 2 · The hare" },
    { id: "wolf", label: "Act 3 · The wolf" },
    { id: "bear-fox", label: "Act 4 · Bear & fox" }
  ];

  /**
   * Simple B2 English · Lifestyle phrases in the story · gap = Get/Run phrase.
   */
  var STORY = [
    {
      id: 1,
      act: "kitchen",
      kicker: "Grandmother",
      storyBefore:
        "Grandmother often loses track of time at the oven. 'If you don't come back,' she said, 'I'll ",
      storyAfter: " every neighbour on the lane.'",
      lex: { person: "get", line: 0 }
    },
    {
      id: 2,
      act: "kitchen",
      kicker: "The windowsill",
      storyBefore:
        "Sitting in the oven wasn't really my idea of fun. I still had to finish ",
      storyAfter: " before I rolled off the shelf.",
      lex: { person: "get", line: 1 }
    },
    {
      id: 3,
      act: "kitchen",
      kicker: "Grandfather",
      storyBefore:
        "Grandfather isn't a fitness fan. He said he didn't ",
      storyAfter: " enough for all that kneading — then he rolled me out.",
      lex: { person: "get", line: 2 }
    },
    {
      id: 4,
      act: "hare",
      kicker: "After the rain",
      storyBefore:
        "The lane was a bit of a mess, I'm ashamed to say. Ten minutes later my round body ",
      storyAfter: " in the mud until I got free.",
      lex: { person: "get", line: 3 }
    },
    {
      id: 5,
      act: "hare",
      kicker: "On my own",
      storyBefore:
        "Wherever I roll, I love the fact that the road belongs to nobody. A bun can ",
      storyAfter: " fine without legs — you just roll and sing.",
      lex: { person: "get", line: 4 }
    },
    {
      id: 6,
      act: "hare",
      kicker: "The hare",
      storyBefore:
        "The hare got up late and blocked the path. He moved aside, and I ",
      storyAfter: " roll into the wide meadow.",
      lex: { person: "get", line: 5 }
    },
    {
      id: 7,
      act: "hare",
      kicker: "Kolobok's song",
      storyBefore:
        "I once turned up late for a fair — the hare didn't mind. He wanted to eat me, but I sang once I'd ",
      storyAfter: " and looked him in the eye.",
      lex: { person: "get", line: 6 }
    },
    {
      id: 8,
      act: "wolf",
      kicker: "The wolf's cave",
      storyBefore:
        "In the cave, papers were lying all over the place. The wolf said he ",
      storyAfter: " — even his jars had labels.",
      lex: { person: "run", line: 0 }
    },
    {
      id: 9,
      act: "wolf",
      kicker: "Wolf family",
      storyBefore:
        "The wolf loved hunting. He pointed at family photos on the wall. 'Does it ",
      storyAfter: "?' he asked.",
      lex: { person: "run", line: 1 }
    },
    {
      id: 10,
      act: "wolf",
      kicker: "Midday",
      storyBefore:
        "I rolled all morning without a rest. I was clearly ",
      storyAfter: ", but the wolf kept running behind me.",
      lex: { person: "run", line: 2 }
    },
    {
      id: 11,
      act: "wolf",
      kicker: "Snap!",
      storyBefore:
        "I didn't have loads of free time to think. When the wolf jumped at me, I ",
      storyAfter: " and sang twice as loud.",
      lex: { person: "run", line: 5 }
    },
    {
      id: 12,
      act: "bear-fox",
      kicker: "The bear",
      storyBefore:
        "The bear knew every forest sign. 'Would you mind ",
      storyAfter: " this bridge notice?' he asked.",
      lex: { person: "run", line: 3 }
    },
    {
      id: 13,
      act: "bear-fox",
      kicker: "Forest Mayor",
      storyBefore:
        "The bear couldn't decide about lunch — he was too busy ",
      storyAfter: " to eat me. That was lucky.",
      lex: { person: "run", line: 4 }
    },
    {
      id: 14,
      act: "bear-fox",
      kicker: "The fox",
      storyBefore:
        "It's not all cuddly lambs and cute calves on a riverbank. I was ",
      storyAfter: " trusting the fox on his log.",
      lex: { person: "run", line: 6 }
    },
    {
      id: 15,
      act: "bear-fox",
      kicker: "The log",
      storyBefore:
        "The fox said it might be time to settle down. In the end, my song had ",
      storyAfter: " on the quiet water.",
      lex: { person: "run", line: 7 }
    }
  ];

  function sceneImgFor(id) {
    var n = id < 10 ? "0" + id : String(id);
    return IMG + "sq-scene-" + n + ".png";
  }

  var SCENES =
    KIT && COMBINED_LEXIS.people.length
      ? KIT.buildScenes({
          lexis: COMBINED_LEXIS,
          storyScenes: STORY,
          gapMode: "phrase",
          imgBase: IMG,
          sceneImgFor: sceneImgFor
        })
      : [];

  function allAnswersFlat() {
    return KIT ? KIT.allGapAnswersFlat(SCENES, "phrase") : [];
  }

  W.U1_KOLOBOK_QUEST = {
    id: "kolobok-get-run",
    title: "Kolobok · Get & Run Quest",
    subtitle: "Unit 1 · Get + Run + Lifestyle · 15 scenes",
    gapMode: "phrase",
    coverImg: IMG + "sq-cover.png",
    winImg: IMG + "sq-cover.png",
    completeMsg:
      "All 15 Get & Run phrases — Kolobok rolled to the end.",
    intro: {
      meta: "Unit 1 · Get + Run · Lifestyle · 15 scenes",
      headline: "KOLOBOK · GET & RUN QUEST",
      blurb:
        "The bun rolls from the oven — past the hare, the wolf, the bear, and the fox. Lifestyle phrases are part of the story; each gap is a Get or Run phrase from Ex. 2–3.",
      rules:
        "Wrong answer = roll back · 15 correct = end of the road · tap 🔊 for music",
      cta: "Start rolling →"
    },
    acts: ACTS,
    scenes: SCENES,
    allAnswersFlat: allAnswersFlat
  };
})(typeof window !== "undefined" ? window : globalThis);
