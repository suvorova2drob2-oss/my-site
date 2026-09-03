/**
 * Unit 1 · Clothes memes — parts with flip cards.
 * Part 1 = SB 1.1 Speaker 1 (charity shops).
 * Part 2 = SB 1.1 Speaker 2 (dressing / wardrobe habits).
 * Part 3 = SB 1.1 Speaker 3 (ethical clothing).
 * Part 4 = SB 1.1 Speaker 4 (feel-good outfits) — selected lines only.
 * Part 5 = SB 1.1 Speaker 5 (replace / quality) — selected lines only.
 */
(function (global) {
  "use strict";

  var P1_CARDS = [
    {
      id: "brand-new",
      img: "img/clothes-p1-01-brand-new.webp",
      hints: ["brand new", "unusual"],
      sentence: "It's unusual for me to buy brand new clothes.",
      highlight: "brand new clothes"
    },
    {
      id: "charity-shops",
      img: "img/clothes-p1-02-charity-shops.webp",
      hints: ["charity shops", "second-hand"],
      sentence: "I get most of what I wear from charity shops.",
      highlight: "charity shops"
    },
    {
      id: "decent-stuff",
      img: "img/clothes-p1-03-decent-stuff.webp",
      hints: ["decent stuff", "these places"],
      sentence: "you can find some pretty decent stuff in these places,",
      highlight: "decent stuff"
    },
    {
      id: "designer",
      img: "img/clothes-p1-04-designer.webp",
      hints: ["tasteful", "designer"],
      sentence: "even quite tasteful designer clothes",
      highlight: "designer clothes"
    },
    {
      id: "good-condition",
      img: "img/clothes-p1-05-good-condition.webp",
      hints: ["good condition", "only sell"],
      sentence: "And they only sell clothes that are in good condition,",
      highlight: "good condition"
    },
    {
      id: "worn-once",
      img: "img/clothes-p1-06-worn-once.webp",
      hints: ["worn once", "twice"],
      sentence: "often things that have only ever been worn once or twice.",
      highlight: "worn once or twice"
    },
    {
      id: "good-causes",
      img: "img/clothes-p1-07-good-causes.webp",
      hints: ["good causes", "charity"],
      sentence:
        "You get to support good causes, too, of course, because the money you spend goes to charity.",
      highlight: "good causes"
    }
  ];

  var P2_CARDS = [
    {
      id: "dressing-smartly",
      img: "img/clothes-p2-01-dressing-smartly.webp",
      hints: ["dressing smartly", "self-confidence"],
      sentence:
        "Apparently, dressing smartly is supposed to increase your self-confidence, but I've never felt any different in a jacket and tie.",
      highlight: "dressing smartly"
    },
    {
      id: "not-worrying",
      img: "img/clothes-p2-02-not-worrying.webp",
      hints: ["worrying", "put on"],
      sentence:
        "I'm not the kind of person who spends time worrying about what to put on in the morning.",
      highlight: "worrying about what to put on"
    },
    {
      id: "umming-ahhing",
      img: "img/clothes-p2-03-umming-ahhing.webp",
      hints: ["umming and ahhing", "take ages"],
      sentence: "Some people take ages, umming and ahhing over what to wear,",
      highlight: "umming and ahhing"
    },
    {
      id: "throw-on",
      img: "img/clothes-p2-04-throw-on.webp",
      hints: ["throw on", "wardrobe", "Job done"],
      sentence:
        "but I just throw on the first thing I find in my wardrobe and that's it. Job done.",
      highlight: "throw on"
    },
    {
      id: "same-tshirts",
      img: "img/clothes-p2-05-same-tshirts.webp",
      hints: ["same", "T-shirts"],
      sentence:
        "To be honest, I'd be happy just wearing the same two or three T-shirts all the time.",
      highlight: "same two or three T-shirts"
    },
    {
      id: "washing-week",
      img: "img/clothes-p2-06-washing-week.webp",
      hints: ["washing", "once a week"],
      sentence:
        "The trouble is, I only have time to do my washing once a week, so that wouldn't work.",
      highlight: "washing once a week"
    },
    {
      id: "not-dirty",
      img: "img/clothes-p2-07-not-dirty.webp",
      hints: ["not fashionable", "not dirty"],
      sentence: "I may not be fashionable, but I'm not dirty.",
      highlight: "not fashionable, but I'm not dirty"
    }
  ];

  var P3_CARDS = [
    {
      id: "suspicious-cheap",
      img: "img/clothes-p3-01-suspicious-cheap.webp",
      hints: ["suspicious", "incredibly cheap"],
      sentence:
        "I get suspicious when I go into a clothes shop and see that everything is incredibly cheap.",
      highlight: "suspicious"
    },
    {
      id: "low-pay",
      img: "img/clothes-p3-02-low-pay.webp",
      hints: ["prices so low", "getting paid"],
      sentence:
        "If the prices are so low, then how much are the people who made them getting paid?",
      highlight: "getting paid"
    },
    {
      id: "working-conditions",
      img: "img/clothes-p3-03-working-conditions.webp",
      hints: ["working conditions"],
      sentence: "And what are their working conditions like?",
      highlight: "working conditions"
    },
    {
      id: "ethical-clothing",
      img: "img/clothes-p3-04-ethical-clothing.webp",
      hints: ["ethical clothing", "decent salary"],
      sentence:
        "I only buy from companies that sell ethical clothing, made by people who earn a decent salary and work in a safe environment.",
      highlight: "ethical clothing"
    },
    {
      id: "info-online",
      img: "img/clothes-p3-05-info-online.webp",
      hints: ["information online", "easy enough"],
      sentence:
        "I usually get that kind of information online – it's easy enough to find.",
      highlight: "information online"
    },
    {
      id: "not-as-cheap",
      img: "img/clothes-p3-06-not-as-cheap.webp",
      hints: ["not as cheap", "quality"],
      sentence:
        "The clothes may not be as cheap and there's not necessarily any more guarantee of quality,",
      highlight: "not as cheap"
    },
    {
      id: "not-exploited",
      img: "img/clothes-p3-07-not-exploited.webp",
      hints: ["confident", "exploited"],
      sentence:
        "but at least I can be confident that no one is being exploited.",
      highlight: "no one is being exploited"
    }
  ];

  var P4_CARDS = [
    {
      id: "feel-good",
      img: "img/clothes-p4-01-feel-good.webp",
      hints: ["designer clothes", "feel good"],
      sentence:
        "They don't have to be designer clothes, but they do have to make me feel good about myself.",
      highlight: "designer clothes"
    },
    {
      id: "insecurity-disappear",
      img: "img/clothes-p4-02-insecurity-disappear.webp",
      hints: ["wardrobe", "insecurity"],
      sentence:
        "I like to know that I can get something out of the wardrobe and any feelings of insecurity I have will just disappear as soon as I put it on.",
      highlight: "feelings of insecurity"
    },
    {
      id: "big-lift",
      img: "img/clothes-p4-03-big-lift.webp",
      hints: ["suits you", "big lift"],
      sentence: "'Hey, that shirt really suits you', it gives me a big lift.",
      highlight: "a big lift"
    },
    {
      id: "different-every-day",
      img: "img/clothes-p4-04-different-every-day.webp",
      hints: ["colleagues", "every day"],
      sentence:
        "My colleagues have got used to seeing me in something different every day.",
      highlight: "something different every day"
    }
  ];

  var P5_CARDS = [
    {
      id: "get-rid-old",
      img: "img/clothes-p5-01-get-rid-old.webp",
      hints: ["get rid of", "old one first"],
      sentence:
        "for example, then I always have to get rid of an old one first.",
      highlight: "get rid of an old one first"
    },
    {
      id: "scruffy-seams",
      img: "img/clothes-p5-02-scruffy-seams.webp",
      hints: ["scruffy", "falling apart"],
      sentence:
        "And I only do that when I can't justify hanging on to it anymore – either because it's so scruffy I'm too embarrassed to wear it, or it's literally falling apart at the seams.",
      highlight: "falling apart at the seams"
    },
    {
      id: "second-hand-shop",
      img: "img/clothes-p5-03-second-hand-shop.webp",
      hints: ["second-hand shop", "none"],
      sentence:
        "That's why none of my clothes ever end up in a second-hand shop.",
      highlight: "second-hand shop"
    },
    {
      id: "no-use-anyone",
      img: "img/clothes-p5-04-no-use-anyone.webp",
      hints: ["replace", "no use"],
      sentence:
        "I replace them, precisely because they're no use to anyone – not just me.",
      highlight: "no use to anyone"
    },
    {
      id: "quality-worse",
      img: "img/clothes-p5-05-quality-worse.webp",
      hints: ["quality", "replace more often"],
      sentence:
        "I've noticed that clothes used to last a lot longer; the quality's got gradually worse and I have to replace things far more often than before.",
      highlight: "quality's got gradually worse"
    }
  ];

  global.UNIT1_CLOTHES_MEME_PARTS = [
    { part: 1, label: "Part 1", cards: P1_CARDS },
    { part: 2, label: "Part 2", cards: P2_CARDS },
    { part: 3, label: "Part 3", cards: P3_CARDS },
    { part: 4, label: "Part 4", cards: P4_CARDS },
    { part: 5, label: "Part 5", cards: P5_CARDS }
  ];
})(typeof window !== "undefined" ? window : globalThis);
