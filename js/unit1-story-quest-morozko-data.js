/**
 * Unit 1 · Morozko · Clothes gaps + Get / Run / Lifestyle woven into one story.
 * window.U1_MOROZKO_QUEST
 */
(function (W) {
  "use strict";

  var IMG = "img/";
  var KIT = W.FCE_STORY_QUEST_LEXIS_KIT;
  var CLOTHES = W.FCE_U1_CLOTHES_LEXIS;

  var ACTS = [
    { id: "cottage", label: "Act 1 · The cottage" },
    { id: "forest", label: "Act 2 · The forest" },
    { id: "memory", label: "Act 3 · A town memory" },
    { id: "reward", label: "Act 4 · Morozko's gift" },
    { id: "return", label: "Act 5 · Reward & punishment" }
  ];

  /**
   * One paragraph per scene — Morozko plot first, Clothes gap, Get/Run/Lifestyle inside the same beat.
   */
  var STORY = [
    {
      id: 1,
      act: "cottage",
      kicker: "Send her away",
      storyBefore:
        "The stepmother ran a tight ship: every chore had its hour. That evening she pointed at the girl's thin coat and said it was unusual in their village to buy ",
      storyAfter:
        " — most families wore what they already had.",
      lex: { person: "sp1", line: 0 }
    },
    {
      id: 2,
      act: "cottage",
      kicker: "Father's advice",
      storyBefore:
        "At the gate her father stopped her. If she didn't come back by morning, he would get in touch with the neighbors. 'In town you can find some ",
      storyAfter:
        " in the charity shop,' he said, 'if you need anything warmer.'",
      lex: { person: "sp1", line: 1 }
    },
    {
      id: 3,
      act: "cottage",
      kicker: "The charity shop",
      storyBefore:
        "'Sometimes there are even quite ",
      storyAfter:
        " there,' he added — good coats people no longer wanted.",
      lex: { person: "sp1", line: 2 }
    },
    {
      id: 4,
      act: "cottage",
      kicker: "Still wearable",
      storyBefore:
        "The old woman next door nodded. 'They only sell clothes that are in ",
      storyAfter: ".'",
      lex: { person: "sp1", line: 3 }
    },
    {
      id: 5,
      act: "cottage",
      kicker: "Good causes",
      storyBefore:
        "'And you get to ",
      storyAfter:
        ", too,' her father said, 'because the money you spend goes to charity.'",
      lex: { person: "sp1", line: 4 }
    },
    {
      id: 6,
      act: "cottage",
      kicker: "The lane",
      storyBefore:
        "Then he pressed a few coins into her hand. 'Remember — the money you spend ",
      storyAfter:
        ".' She pulled her shawl tight and walked towards the forest.",
      lex: { person: "sp1", line: 5 }
    },
    {
      id: 7,
      act: "forest",
      kicker: "Into the woods",
      storyBefore:
        "Walking into the pines wasn't really her idea of fun. She had to finish getting ready in the cold — a warm coat is supposed to ",
      storyAfter:
        ", but her old shawl never changed the way she felt.",
      lex: { person: "sp2", line: 0 }
    },
    {
      id: 8,
      act: "forest",
      kicker: "No mirror",
      storyBefore:
        "Some people ",
      storyAfter:
        ", umming and ahhing over what to wear before a party. She had one coat on a hook — that was all.",
      lex: { person: "sp2", line: 1 }
    },
    {
      id: 9,
      act: "forest",
      kicker: "One coat",
      storyBefore:
        "There was no wardrobe in the forest, no second shawl on a hook. She never stood ",
      storyAfter: " over what to wear.",
      lex: { person: "sp2", line: 2 }
    },
    {
      id: 10,
      act: "forest",
      kicker: "The hook by the door",
      storyBefore:
        "At the cottage she would just ",
      storyAfter:
        " and leave. Here she did the same — one thin shawl, and out into the snow.",
      lex: { person: "sp2", line: 3 }
    },
    {
      id: 11,
      act: "forest",
      kicker: "The patched dress",
      storyBefore:
        "She could get by without anything new for a while. Honestly, she'd be ",
      storyAfter: " the same patched dress every day if it kept her warm.",
      lex: { person: "sp2", line: 4 }
    },
    {
      id: 12,
      act: "memory",
      kicker: "Last trip to town",
      storyBefore:
        "She remembered her last trip to town. She began to ",
      storyAfter:
        " when she saw a shop where every coat looked far too cheap.",
      lex: { person: "sp3", line: 0 }
    },
    {
      id: 13,
      act: "memory",
      kicker: "Low prices",
      storyBefore:
        "Those ",
      storyAfter:
        " prices stayed in her mind. Who had sewn the coats? How much were the workers paid?",
      lex: { person: "sp3", line: 1 }
    },
    {
      id: 14,
      act: "memory",
      kicker: "The workers",
      storyBefore:
        "She had stared at the label and asked herself: 'And what are their ",
      storyAfter: "?'",
      lex: { person: "sp3", line: 2 }
    },
    {
      id: 15,
      act: "memory",
      kicker: "Fair pay",
      storyBefore:
        "She wished the people who made clothes could earn a ",
      storyAfter: " and work in a safe place.",
      lex: { person: "sp3", line: 3 }
    },
    {
      id: 16,
      act: "memory",
      kicker: "Ethical clothing",
      storyBefore:
        "By midday on the path she was running on empty, but she still wanted to buy only from shops where ",
      storyAfter: ".",
      lex: { person: "sp3", line: 4 }
    },
    {
      id: 17,
      act: "reward",
      kicker: "Kind words",
      storyBefore:
        "The forest grew quiet. 'Are you cold, my child?' called Morozko. She bowed and thanked him — she was not rude or greedy. Winter ran in the family here, people said, and because she was kind he showed her a fur coat. 'It has to make me ",
      storyAfter:
        ",' she thought, and she meant it.",
      lex: { person: "sp4", line: 0 }
    },
    {
      id: 18,
      act: "reward",
      kicker: "The new shawl",
      storyBefore:
        "She got over her shyness and tried the shawl on. Any ",
      storyAfter: " vanished before she reached the first button.",
      lex: { person: "sp4", line: 1 }
    },
    {
      id: 19,
      act: "reward",
      kicker: "Back through the snow",
      storyBefore:
        "Morozko asked if she would mind running her eye over the path home. The new coat gave her ",
      storyAfter: " with every step back to the village.",
      lex: { person: "sp4", line: 2 }
    },
    {
      id: 20,
      act: "reward",
      kicker: "One coat is enough",
      storyBefore:
        "Wherever she walked, she loved the fact that the pines were silent. For once she didn't need ",
      storyAfter: " — this one coat was warm enough.",
      lex: { person: "sp4", line: 3 }
    },
    {
      id: 21,
      act: "return",
      kicker: "Walking home",
      storyBefore:
        "In Morozko's fur coat she walked back through the snow and remembered the old life: if anything new came into the house, she first had to ",
      storyAfter: " an old scarf — one in, one out.",
      lex: { person: "sp5", line: 0 }
    },
    {
      id: 22,
      act: "return",
      kicker: "Old gloves",
      storyBefore:
        "She remembered her torn gloves and how she couldn't ",
      storyAfter: " anymore — they were past mending.",
      lex: { person: "sp5", line: 1 }
    },
    {
      id: 23,
      act: "return",
      kicker: "The old dress",
      storyBefore:
        "She thought of the kitchen — a bit of a mess, rags lying all over the place — and of the old dress she was ",
      storyAfter: " in the village.",
      lex: { person: "sp5", line: 2 }
    },
    {
      id: 24,
      act: "return",
      kicker: "The old shawl",
      storyBefore:
        "She remembered the thin shawl she had worn into the forest. It was literally ",
      storyAfter: ", and snow had blown through every hole.",
      lex: { person: "sp5", line: 3 }
    },
    {
      id: 25,
      act: "return",
      kicker: "The cottage",
      storyBefore:
        "At the cottage door the stepmother stared. The girl stood in a rich fur coat — none of her old rags had ever gone to a ",
      storyAfter:
        ", and now the whole lane could see the change.",
      lex: { person: "sp5", line: 4 }
    },
    {
      id: 26,
      act: "return",
      kicker: "The rude sister",
      storyBefore:
        "Out of greed the stepmother sent her own daughter into the forest with orders to bring back the same gift. The girl shouted at Morozko and was rude — and came back in a thin coat that was ",
      storyAfter:
        ", not even for charity.",
      lex: { person: "sp5", line: 5 }
    },
    {
      id: 27,
      act: "return",
      kicker: "The moral",
      storyBefore:
        "The rude daughter returned empty-handed, chilled through, while the kind stepdaughter kept Morozko's coat, married a good man, and lived well — as in the true tale. The moral is the same: be kind and polite, and winter will reward you; be rude and greedy, and frost will find you. Coats in shops may fail — the ",
      storyAfter:
        " — but what Morozko gave lasted her whole life.",
      lex: { person: "sp5", line: 6 }
    }
  ];

  function sceneImgFor(id) {
    var n = id < 10 ? "0" + id : String(id);
    return IMG + "sq-scene-" + n + ".png";
  }

  var SCENES =
    KIT && CLOTHES && CLOTHES.people && CLOTHES.people.length
      ? KIT.buildScenes({
          lexis: CLOTHES,
          storyScenes: STORY,
          gapMode: "phrase",
          imgBase: IMG,
          sceneImgFor: sceneImgFor
        })
      : [];

  function allAnswersFlat() {
    return KIT ? KIT.allGapAnswersFlat(SCENES, "phrase") : [];
  }

  W.U1_MOROZKO_QUEST = {
    id: "morozko-clothes",
    title: "Morozko · Clothes Quest",
    subtitle: "Unit 1 · Clothes · 27 scenes",
    gapMode: "phrase",
    coverImg: IMG + "sq-cover.png",
    winImg: IMG + "sq-cover.png",
    completeMsg:
      "Kindness is rewarded · rudeness is punished — as in Morozko. All 27 Clothes phrases complete.",
    intro: {
      meta: "Unit 1 · Clothes · 27 scenes · Russian fairytale",
      headline: "MOROZKO · CLOTHES QUEST",
      blurb:
        "The stepmother sends the kind girl into the winter forest in a thin old coat. Be polite to Morozko — and winter rewards you. Each gap is a Clothes phrase from SB 1.1.",
      rules:
        "Wrong answer = back to the cottage · 27 correct = the true ending · tap 🔊 for music",
      cta: "Walk into the forest →"
    },
    acts: ACTS,
    scenes: SCENES,
    allAnswersFlat: allAnswersFlat
  };
})(typeof window !== "undefined" ? window : globalThis);
