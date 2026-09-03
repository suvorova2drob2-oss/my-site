/**
 * Unit 1 · Kolobok · Get + Run — scene image briefs (phrase = visual).
 */
(function (W) {
  "use strict";

  var STYLE =
    "Bright Russian fairytale storybook illustration for children. Same Kolobok every scene: round golden gingerbread bun with a cheerful face. " +
    "Warm sunny colours, soft humour, family-friendly, NOT dark or scary. " +
    "All animals must have a full body with four legs clearly visible on the ground. No cropped torsos, no missing legs, no horror. Square, no text.";

  var BRIEFS = {
    1: "Grandmother at cottage door waving to neighbours; golden Kolobok on the table — get in touch with neighbours.",
    2: "Kolobok on a kitchen windowsill, warm oven glow behind — finish getting ready to roll away.",
    3: "Old grandfather at a wooden table with a few coins; Kolobok on the table — doesn't get paid enough.",
    4: "Kolobok stuck in a muddy rut on a country lane — got stuck in mud.",
    5: "Kolobok rolling alone on a sunny path — get by without legs.",
    6: "Kolobok meets a grey hare on a forest path, green meadow ahead — got the chance to roll on.",
    7: "Kolobok singing to a hare on the path, hare looks surprised — got over shyness.",
    8: "Friendly grey wolf standing on four legs in a bright tidy cave with labelled jars on shelves; full wolf body visible; small Kolobok on the floor — runs a tight ship.",
    9: "Friendly grey wolf standing on four legs in a bright room, pointing at a wall of cheerful family wolf paintings; full wolf body from head to paws; Kolobok listening — runs in the family.",
    10: "Tired Kolobok on a sunny forest path, wolf jogging far behind; both full bodies visible — running on empty.",
    11: "Kolobok rolling fast on a sunny path, friendly cartoon wolf chasing with four legs on the ground — made a run for it.",
    12: "Big brown bear on four legs pointing at a wooden road sign; Kolobok nearby — run your eye over the sign.",
    13: "Bear holding a Forest Mayor poster, standing on four legs, too busy to chase — running for office.",
    14: "Red fox sitting on a riverbank log, smiling; Kolobok on the bank — running the risk of trusting the fox.",
    15: "Kolobok and fox on a log at sunset, peaceful end of the journey — run its course."
  };

  W.U1_KOLOBOK_SCENE_IMAGES = {
    style: STYLE,
    briefs: BRIEFS,
    promptFor: function (id) {
      return STYLE + " Scene: " + (BRIEFS[id] || "");
    }
  };
})(typeof window !== "undefined" ? window : globalThis);
