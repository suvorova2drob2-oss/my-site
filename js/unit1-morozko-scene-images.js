/**
 * Unit 1 · Morozko · Clothes — scene image briefs.
 */
(function (W) {
  "use strict";

  var STYLE =
    "Bright Russian fairytale storybook illustration for children. Winter forest, snow, warm colours. " +
    "Kind stepdaughter in old shawl or later in beautiful fur coat. Morozko as gentle winter spirit — NOT scary. " +
    "Family-friendly, square, no text.";

  var BRIEFS = {
    1: "Stepdaughter in thin old coat leaving wooden cottage, stepmother at door — unusual to buy brand new clothes.",
    2: "Village charity shop window with coats, girl looking in — pretty decent stuff.",
    3: "Elegant second-hand fur collar on rack — tasteful designer clothes.",
    4: "Neat folded coats on charity shop shelf — good condition.",
    5: "Charity donation box with coins — support good causes.",
    6: "Hand putting coin in charity box — money goes to charity.",
    7: "Girl in old shawl walking snowy path — self-confidence.",
    8: "Girl quickly pulling on one thin coat — take ages choosing.",
    9: "Girl not hesitating at wardrobe with one dress — umming and ahhing.",
    10: "Girl throwing on first coat from hook — wardrobe.",
    11: "Same patched dress on chair — happy wearing same clothes.",
    12: "Cheap flashy shop sign in town — get suspicious.",
    13: "Very low price tags on coats — incredibly cheap.",
    14: "Girl thinking about factory workers — working conditions.",
    15: "Fair trade clothing poster — decent salary.",
    16: "Ethical clothing label — no one exploited.",
    17: "Morozko gifting beautiful fur coat, girl smiling — feel good about myself.",
    18: "Girl in new shawl, shoulders relaxed — insecurity gone.",
    19: "Girl walking proudly back to village in fine coat — big lift.",
    20: "One splendid fur coat on girl, no pile of outfits — something different every day.",
    21: "Girl throwing away old scarf before new one — get rid of.",
    22: "Torn gloves in bin — justify hanging on.",
    23: "Girl hiding old scruffy dress — too embarrassed to wear.",
    24: "Shawl with holes and loose threads — falling apart at seams.",
    25: "Worn rags too bad for shop — second-hand shop.",
    26: "Old clothes in fire bin, too worn for anyone — no use to anyone.",
    27: "Coat with many patches, girl sewing — quality got worse."
  };

  W.U1_MOROZKO_SCENE_IMAGES = {
    style: STYLE,
    briefs: BRIEFS,
    promptFor: function (id) {
      return STYLE + " Scene: " + (BRIEFS[id] || "");
    }
  };
})(typeof window !== "undefined" ? window : globalThis);
