/**
 * Unit 12 · Restaurants — meme flip cards from Cool phrases (Listening 12.1).
 * Front = cartoon only · back = phrase + line from the script.
 * window.UNIT12_RESTAURANTS_MEME_PARTS
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
      highlight: highlight || headword
    };
  }

  global.UNIT12_RESTAURANTS_MEME_PARTS = [
    {
      part: 1,
      label: "Speaker 1",
      cards: [
        card(
          "s1-inexpensive",
          "fairly inexpensive restaurant",
          "It was a fairly inexpensive restaurant on the edge of the city, but low prices are no excuse for poor hygiene.",
          "fairly inexpensive restaurant"
        ),
        card(
          "s1-hygiene",
          "no excuse for poor hygiene",
          "It was a fairly inexpensive restaurant on the edge of the city, but low prices are no excuse for poor hygiene.",
          "no excuse for poor hygiene"
        ),
        card(
          "s1-tourist-prices",
          "tourist restaurants charge tourist prices",
          "We'd decided to get away from all the people and noise in the centre, where tourist restaurants charge tourist prices, and try something more local, more authentic.",
          "tourist restaurants charge tourist prices"
        ),
        card(
          "s1-authentic",
          "try something more authentic",
          "We'd decided to get away from all the people and noise in the centre, where tourist restaurants charge tourist prices, and try something more local, more authentic.",
          "try something more authentic"
        ),
        card(
          "s1-home-cooked",
          "genuine home-cooked food",
          "The reviews we'd read spoke about the genuine home-cooked food and the size of the portions, with only one or two negative comments about having to wait a little too long for the food to arrive.",
          "genuine home-cooked food"
        ),
        card(
          "s1-sticky-tables",
          "sticky tables that hadn't been wiped",
          "What they didn't mention were the sticky tables that hadn't been wiped, the stained cutlery and the filthy floor.",
          "sticky tables that hadn't been wiped"
        ),
        card(
          "s1-cutlery",
          "the stained cutlery",
          "What they didn't mention were the sticky tables that hadn't been wiped, the stained cutlery and the filthy floor.",
          "the stained cutlery"
        ),
        card(
          "s1-filthy-floor",
          "filthy floor",
          "What they didn't mention were the sticky tables that hadn't been wiped, the stained cutlery and the filthy floor.",
          "filthy floor"
        )
      ]
    },
    {
      part: 2,
      label: "Speaker 2",
      cards: [
        card(
          "s2-surprisingly-tasty",
          "surprisingly tasty",
          "We weren't expecting very much from the food, but everything we ordered was surprisingly tasty.",
          "surprisingly tasty"
        ),
        card(
          "s2-variety",
          "massive amount of variety on the menu",
          "There wasn't a massive amount of variety on the menu but, to be honest, I'd rather have just a few decent things to choose from than a huge number of dishes, some of which might not be particularly well cooked.",
          "massive amount of variety on the menu"
        ),
        card(
          "s2-spoilt",
          "What spoilt it, though",
          "What spoilt it, though, was the large group of people on the table next to ours, all talking at the tops of their voices.",
          "What spoilt it, though"
        ),
        card(
          "s2-loud",
          "talking at the tops of their voices",
          "What spoilt it, though, was the large group of people on the table next to ours, all talking at the tops of their voices.",
          "talking at the tops of their voices"
        )
      ]
    },
    {
      part: 3,
      label: "Speaker 3",
      cards: [
        card(
          "s3-chewy",
          "the meat in my stew was chewy",
          "I told the waiter the meat in my stew was chewy, and should have been left in the oven longer.",
          "the meat in my stew was chewy"
        ),
        card(
          "s3-fuss",
          "kick up a fuss",
          "Her attitude is, if something's not right, then kick up a fuss, make a noise about it, otherwise nothing will get changed.",
          "kick up a fuss"
        ),
        card(
          "s3-dessert",
          "wouldn't charge for my dessert",
          "As it was, the waiter said he couldn't change it, but he wouldn't charge for my dessert.",
          "wouldn't charge for my dessert"
        )
      ]
    },
    {
      part: 4,
      label: "Speaker 4",
      cards: [
        card(
          "s4-treated",
          "we treated ourselves to dinner",
          "Recently, we treated ourselves to dinner in a five-star seafood restaurant.",
          "we treated ourselves to dinner"
        ),
        card(
          "s4-small-plate",
          "you didn't get much on your plate",
          "We'd heard several negative things about the place before we went: the food was overpriced, the waiters were too formal, you didn't get much on your plate …",
          "you didn't get much on your plate"
        ),
        card(
          "s4-not-big-eaters",
          "we're not big eaters",
          "But we're not big eaters and we felt like spoiling ourselves, so we ignored the warnings and booked.",
          "we're not big eaters"
        ),
        card(
          "s4-spoiling",
          "we felt like spoiling ourselves",
          "But we're not big eaters and we felt like spoiling ourselves, so we ignored the warnings and booked.",
          "we felt like spoiling ourselves"
        ),
        card(
          "s4-to-die-for",
          "the food was to die for",
          "Well, the food was to die for: the crab, the mussels, the seabass – absolutely delicious.",
          "the food was to die for"
        ),
        card(
          "s4-no-hurry",
          "they weren't in any hurry",
          "They certainly weren't in any hurry, and we'd run out of things to say to each other by the time the main course arrived.",
          "weren't in any hurry"
        ),
        card(
          "s4-nothing-to-say",
          "we'd run out of things to say to each other",
          "They certainly weren't in any hurry, and we'd run out of things to say to each other by the time the main course arrived.",
          "run out of things to say to each other"
        )
      ]
    },
    {
      part: 5,
      label: "Speaker 5",
      cards: [
        card(
          "s5-fussy",
          "quite fussy eaters",
          "My wife and I are both quite fussy eaters, so if we eat out, there have to be plenty of dishes to choose from.",
          "quite fussy eaters"
        ),
        card(
          "s5-service",
          "the service was second to none",
          "We had no complaints about the food we actually ordered, and the service was second to none.",
          "the service was second to none"
        ),
        card(
          "s5-antisocial",
          "come across as antisocial",
          "We might have come across as antisocial, but we preferred to eat in some of the other restaurants in the area.",
          "come across as antisocial"
        )
      ]
    }
  ];
})(typeof window !== "undefined" ? window : globalThis);
