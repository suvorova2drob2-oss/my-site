/**
 * Cinderella Lifestyle Quest — scene image briefs (phrase = visual clue).
 * Used when regenerating sq-scene-NN.png; engine reads PNG paths from data sceneImgFor().
 */
(function (W) {
  "use strict";

  var STYLE =
    "Modern fairytale app illustration. Same heroine every scene: young woman, dark wavy hair in bun, blue dress, white apron. " +
    "Warm cinematic light, navy and gold palette, humorous B2 mood, family-friendly, no text, square composition.";

  /** id → visual must read the gap word / Cool Word instantly */
  var BRIEFS = {
    1: "Heroine scrubbing kitchen floor at 5am, exhausted face, crossed-out fun icons (party, sleep-in) — clearly NOT fun chore.",
    2: "Heroine gently bandaging a mouse paw, soft kind smile, glowing heart — staying kind is important.",
    3: "Room flooded with theatre scripts and papers lying all over the floor, tables, chairs — messy scripts everywhere.",
    4: "Disaster kitchen: dishes, spills, towels everywhere; heroine embarrassed, hands on cheeks — total mess.",
    5: "Huge wall clock plus magical sparkles; heroine startled, fairy wand blur — lost track of time, almost late.",
    6: "Heroine clutching mother's old storybook, eyes shining, passionate expression while reading by window.",
    7: "Heroine running toward village dance, clock late, guests already dancing inside hall — arrived late, mortified.",
    8: "After the ball: heroine in chair with tea, slippers, relaxed smile — unwinding, finally resting.",
    9: "Bedside clock showing 2:00 AM, heroine yawning in party dress — bedtime is very late.",
    10: "Heroine asleep instantly, head on pillow, peaceful Zzz — out like a light.",
    11: "Two stepsisters fighting over one mirror; heroine in doorway smirking — loves the fact they live near the mirror.",
    12: "Cottage in foreground, grand palace clearly visible just a short walk down the path.",
    13: "Stepsisters sleeping past noon in fancy beds upstairs; heroine mopping stairs below — they get up late.",
    14: "Stepsisters in ridiculous outfits primping and marching toward palace labeled work — setting off for work.",
    15: "Stepsisters holding fake certificates, arms crossed, expert complaining faces — fully qualified at complaining.",
    16: "Stepsister grabbing dress from heroine's hands without asking — tend to take things.",
    17: "Sunday morning: heroine still in bed sleeping while sun is high, laundry waiting — catch up on sleep.",
    18: "Heroine surrounded by endless chores, about to drop mop, tears — can't carry on much longer.",
    19: "Heroine daydream bubble: quiet cottage, wedding ring, picket fence — settle down someday.",
    20: "Dream bubble: steady office desk, secure key and calendar — something steady and secure.",
    21: "Heroine chin on hand, question marks, prince silhouette outside window — hasn't made up her mind yet.",
    22: "Stepmother leaving with many shopping bags all day; heroine waving relieved at door.",
    23: "Heroine jogging away while stepsisters chase with broom — not enough exercise unless you count running.",
    24: "Split comic panels: ash, laundry, dishes, garden — especially the variety of chores each day.",
    25: "Cute lambs and calves in foreground BUT also muddy vet mess behind — not all cuddly.",
    26: "Stepmother's terrifying fake smile; suitor running away — puts people off for life.",
    27: "Packed calendar, no blank slots, heroine sighing — no loads of free time.",
    28: "Tiny attic room, no space for dog bed, marriage planner won't fit — fit marriage in.",
    29: "Prince comically hanging on rope from palace balcony repairing banner; heroine looking up surprised.",
    30: "Prince showing coins and climbing gear, pay slip — make a living and pay for holidays.",
    31: "Fairy godmother with empty purse, sparse food and worn equipment on table — limited funding.",
    32: "Mice sewing ball gown at tiny desks, unconventional workshop — unconventional way of life.",
    33: "Heroine running at midnight, one glass shoe, pumpkin fading, grin — it works for me.",
    34: "Heroine running down palace stairs, thrilling wind, alive excited face — danger makes her feel alive.",
    35: "Prince kneeling with glass slipper; heroine pointing yes, decided face — made up her mind.",
    36: "Palace breakfast after eight, heroine relaxed at table, no mop — steady and secure life.",
    37: "Heroine and prince in quiet castle wing, mice with cheese, sunset — settle down, happy ever after."
  };

  function promptFor(id) {
    var brief = BRIEFS[id];
    if (!brief) return STYLE;
    return STYLE + " Scene meaning: " + brief;
  }

  W.U1_CINDERELLA_SCENE_IMAGES = {
    style: STYLE,
    briefs: BRIEFS,
    promptFor: promptFor
  };
})(typeof window !== "undefined" ? window : globalThis);
