/**
 * Unit 1 · SB 1.2 — 8 short extracts · meme flip cards + part tabs (Speakers 1, 2, 3, 5, 8).
 * Phrases = Cool Words from FCE_U1_SB12_LEXIS.
 * Images: unit1-listening/sb-1-2/memes/img/*.jpg (3D art, same pattern as Lifestyle memes).
 */
(function (global) {
  "use strict";

  function card(id, hints, headword, sentence, highlight) {
    return {
      id: id,
      img: "img/" + id + ".jpg",
      hints: hints,
      headword: headword,
      sentence: sentence,
      highlight: highlight
    };
  }

  var P1 = [
    card(
      "sp1-easy",
      ["some people", "effortless"],
      "Easy for some, isn't it?",
      "Hmm. Easy for some, isn't it?",
      "Easy for some, isn't it?"
    ),
    card(
      "sp1-fed-up",
      ["moving", "tired of it"],
      "I get the impression he's fed up with it all",
      "I don't know. I get the impression he's fed up with it all – always moving around.",
      "fed up with it all"
    ),
    card(
      "sp1-got-rid",
      ["Spain", "sell everything"],
      "I wouldn't be surprised if he got rid of everything over here",
      "I wouldn't be surprised if he got rid of everything over here and lived in Spain permanently.",
      "got rid of everything over here"
    ),
    card(
      "sp1-said-do",
      ["promised", "really said"],
      "Is that what he's said he'll do?",
      "Is that what he's said he'll do?",
      "Is that what he's said he'll do?"
    ),
    card(
      "sp1-not-like-him",
      ["Mike", "keeps quiet"],
      "It's not like him to talk much about his plans",
      "Well, you know Mike. It's not like him to talk much about his plans.",
      "not like him to talk much about his plans"
    )
  ];

  var P2 = [
    card(
      "sp2-stressed",
      ["work", "house problems"],
      "I'm stressed out, to be honest",
      "I'm stressed out, to be honest, what with work and all the problems with the house.",
      "I'm stressed out, to be honest"
    ),
    card(
      "sp2-wondering",
      ["polite ask", "what it was like"],
      "I was wondering if you could tell me",
      "And actually, I was wondering if you could tell me what it was like, what sort of things you did.",
      "I was wondering if you could tell me"
    ),
    card(
      "sp2-firsthand",
      ["online", "real experience"],
      "I had a quick look online, but it's always better to talk to someone with firsthand experience",
      "I had a quick look online, but it's always better to talk to someone with firsthand experience.",
      "talk to someone with firsthand experience"
    )
  ];

  var P3 = [
    card(
      "sp3-get-by",
      ["money tight", "struggle"],
      "We just about get by, but it's a bit of a struggle",
      "We just about get by, but it's a bit of a struggle.",
      "just about get by"
    ),
    card(
      "sp3-applications",
      ["job hunt", "no luck"],
      "He's sent off loads of applications, but no luck so far",
      "He's sent off loads of applications, but no luck so far.",
      "sent off loads of applications"
    ),
    card(
      "sp3-borrowing",
      ["parents", "feels wrong"],
      "My mum and dad could probably help out, but somehow it doesn't seem right borrowing from them",
      "My mum and dad could probably help out, but somehow it doesn't seem right borrowing from them.",
      "doesn't seem right borrowing from them"
    ),
    card(
      "sp3-sell-car",
      ["car", "market"],
      "There's nothing for it but to put my car on the market and see if I can get a decent price for it",
      "There's nothing for it but to put my car on the market and see if I can get a decent price for it.",
      "put my car on the market"
    )
  ];

  var P5 = [
    card(
      "sp5-gained",
      ["abroad", "two years"],
      "I've gained so much from these two years living abroad",
      "I've gained so much from these two years living abroad.",
      "gained so much"
    ),
    card(
      "sp5-finding-work",
      ["jobs", "confident"],
      "I reckon we'll have no trouble finding work",
      "Yeah, me, too. I reckon we'll have no trouble finding work when we get back home.",
      "no trouble finding work"
    ),
    card(
      "sp5-benefits-person",
      ["personal growth", "not CV"],
      "I was thinking more about the benefits to me as a person",
      "I'm not sure that's true. But anyway, I was thinking more about the benefits to me as a person.",
      "benefits to me as a person"
    ),
    card(
      "sp5-tolerant",
      ["difference", "accepting"],
      "I've become much more tolerant since I've been here, more willing to accept difference",
      "I've become much more tolerant since I've been here, more willing to accept difference.",
      "more tolerant"
    ),
    card(
      "sp5-employable",
      ["open-minded", "jobs"],
      "We've grown as individuals, we're more open-minded and independent, so that makes us more employable",
      "That's what I mean. We've grown as individuals, we're more open-minded and independent, so that makes us more employable.",
      "more employable"
    ),
    card(
      "sp5-optimism",
      ["positive", "admire"],
      "I admire your optimism",
      "Well, I admire your optimism.",
      "I admire your optimism"
    ),
    card(
      "sp5-value-home",
      ["home", "appreciate"],
      "The whole thing has made me value life at home more",
      "It's alright, but the whole thing has made me value life at home more.",
      "value life at home more"
    )
  ];

  var P8 = [
    card(
      "sp8-strange-dishes",
      ["food", "travel"],
      "I've had to get used to eating all kinds of strange dishes",
      "On my travels I've had to get used to eating all kinds of strange dishes, so I was prepared for their rather unusual cuisine.",
      "strange dishes"
    ),
    card(
      "sp8-slow-pace",
      ["hot country", "relaxed"],
      "The slow pace of life and relaxed approach to work were only to be expected",
      "And it's a hot country, so the slow pace of life and relaxed approach to work were only to be expected.",
      "slow pace of life"
    ),
    card(
      "sp8-dressing",
      ["surprise", "clothes"],
      "What I hadn't anticipated was their way of dressing",
      "What I hadn't anticipated was their way of dressing.",
      "their way of dressing"
    ),
    card(
      "sp8-scruffy",
      ["comparison", "shabby"],
      "I felt quite scruffy by comparison",
      "I'm not used to being with people who take so much care over what they wear and I felt quite scruffy by comparison.",
      "scruffy by comparison"
    )
  ];

  global.UNIT1_SB12_MEME_PARTS = [
    { part: 1, label: "Speaker 1", cards: P1 },
    { part: 2, label: "Speaker 2", cards: P2 },
    { part: 3, label: "Speaker 3", cards: P3 },
    { part: 5, label: "Speaker 5", cards: P5 },
    { part: 8, label: "Speaker 8", cards: P8 }
  ];
})(typeof window !== "undefined" ? window : globalThis);
