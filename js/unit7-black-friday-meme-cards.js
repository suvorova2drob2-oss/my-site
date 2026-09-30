/**
 * Unit 7 · Black Friday reading — meme flip cards.
 * Images: unit7-reading-black-friday/memes/img/*.jpg (3D art — same pattern as SB 1.2 / Lifestyle memes).
 */
(function (global) {
  "use strict";

  function card(id, headword, sentence, highlight) {
    return {
      id: id,
      img: "img/" + id + ".jpg",
      hints: [],
      headword: headword,
      sentence: sentence,
      example: sentence,
      highlight: highlight
    };
  }

  global.UNIT7_BLACK_FRIDAY_MEME_CARDS = [
    card(
      "bf-scramble-discount",
      "the annual scramble for discount presents",
      "Black Friday, the annual scramble for discount presents for the upcoming holidays, takes place each year in shopping centres around the world towards the end of November.",
      "the annual scramble for discount presents"
    ),
    card(
      "bf-chaos-aisles",
      "outbreaks of chaos that commonly erupt in the shopping aisles",
      "A media favourite because of the outbreaks of chaos that commonly erupt in the shopping aisles as bargain-hunters squabble over flat-screen TVs and step over people to grab a cut-price Xbox, the day unofficially marks the beginning of the festive retail season.",
      "outbreaks of chaos that commonly erupt in the shopping aisles"
    ),
    card(
      "bf-squabble-tvs",
      "bargain-hunters squabble over flat-screen TVs",
      "A media favourite because of the outbreaks of chaos that commonly erupt in the shopping aisles as bargain-hunters squabble over flat-screen TVs and step over people to grab a cut-price Xbox, the day unofficially marks the beginning of the festive retail season.",
      "bargain-hunters squabble over flat-screen TVs"
    ),
    card(
      "bf-step-over-xbox",
      "step over people to grab a cut-price Xbox",
      "A media favourite because of the outbreaks of chaos that commonly erupt in the shopping aisles as bargain-hunters squabble over flat-screen TVs and step over people to grab a cut-price Xbox, the day unofficially marks the beginning of the festive retail season.",
      "step over people to grab a cut-price Xbox"
    ),
    card(
      "bf-discount-bonanza",
      "the modern discount bonanza",
      "One explanation for why the modern discount bonanza has been given the same sinister name is that it always takes place the day after the Thursday of Thanksgiving, when workers would frequently call in sick in order to enjoy a four-day weekend, a disaster for the US economy.",
      "the modern discount bonanza"
    ),
    card(
      "bf-sinister-name",
      "the same sinister name",
      "One explanation for why the modern discount bonanza has been given the same sinister name is that it always takes place the day after the Thursday of Thanksgiving, when workers would frequently call in sick in order to enjoy a four-day weekend, a disaster for the US economy.",
      "the same sinister name"
    ),
    card(
      "bf-call-in-sick",
      "call in sick",
      "One explanation for why the modern discount bonanza has been given the same sinister name is that it always takes place the day after the Thursday of Thanksgiving, when workers would frequently call in sick in order to enjoy a four-day weekend, a disaster for the US economy.",
      "call in sick"
    ),
    card(
      "bf-traffic-congestion",
      "atrocious traffic congestion",
      "By November 1975, the phrase was being used by The New York Times to refer to the atrocious traffic congestion seen in Philadelphia as shoppers raced out for bargains in the hope of spreading the cost of Christmas over a longer period.",
      "atrocious traffic congestion"
    ),
    card(
      "bf-cease-loss",
      "cease operating at a loss",
      "An alternative explanation offered by accountants is that the day is the moment at which stores make so much money they cease operating at a loss and move from the red into the black.",
      "cease operating at a loss"
    ),
    card(
      "bf-red-to-black",
      "move from the red into the black",
      "An alternative explanation offered by accountants is that the day is the moment at which stores make so much money they cease operating at a loss and move from the red into the black.",
      "move from the red into the black"
    ),
    card(
      "bf-unruly-scenes",
      "particularly unruly scenes that unfolded",
      "Some UK chains have moved to distance themselves from Black Friday as a result of the particularly unruly scenes that unfolded in 2014.",
      "particularly unruly scenes that unfolded"
    ),
    card(
      "bf-embraced-mania",
      "embraced the mania",
      "France, Italy, Spain, the Netherlands, Norway, Denmark, Sweden, Brazil, Nigeria and South Africa have all embraced the mania in recent years.",
      "embraced the mania"
    ),
    card(
      "bf-dishonest-practices",
      "occasional dishonest business practices",
      "The day has been criticised in the US for the strain it places on staff at the big stores, the safety risks associated with large-scale crowd management and the occasional dishonest business practices involved.",
      "occasional dishonest business practices"
    ),
    card(
      "bf-strain-staff",
      "the strain it places on staff",
      "The day has been criticised in the US for the strain it places on staff at the big stores, the safety risks associated with large-scale crowd management and the occasional dishonest business practices involved.",
      "the strain it places on staff"
    ),
    card(
      "bf-inflate-prices",
      "artificially inflating prices",
      "These might include stores artificially inflating prices on goods in advance, only to then slash the cost back down to its original value, or temporarily selling inferior products just to meet demand.",
      "artificially inflating prices"
    ),
    card(
      "bf-inferior-products",
      "temporarily selling inferior products just to meet demand",
      "These might include stores artificially inflating prices on goods in advance, only to then slash the cost back down to its original value, or temporarily selling inferior products just to meet demand.",
      "temporarily selling inferior products just to meet demand"
    )
  ];
})(typeof window !== "undefined" ? window : globalThis);
