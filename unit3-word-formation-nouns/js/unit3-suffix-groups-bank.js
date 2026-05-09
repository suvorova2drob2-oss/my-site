/**
 * Unit 3 · Word formation nouns — suffix group banks for HeartReveal trainer.
 * Each group: same suffix, four bases; last slot is the “spelling change” spotlight in the books.
 */
window.U3_SUFFIX_GROUP_BANK = {
  /** Coursebook Skill Booster blocks (Groups 0–6) */
  coursebook: [
    {
      id: "cb0",
      suffix: "-ion",
      title: "Group 0 · example",
      words: [
        { base: "object", answers: ["objection"], tip: "-ion attaches to the verbal stem." },
        { base: "react", answers: ["reaction"], tip: "Common science / process noun ending." },
        { base: "predict", answers: ["prediction"], tip: "Drop nothing before -ion here." },
        { base: "convert", answers: ["conversion"], tip: "Last item: consonant tweaks before -ion / -sion patterns." }
      ]
    },
    {
      id: "cb1",
      suffix: "-ment",
      title: "Group 1",
      words: [
        { base: "enjoy", answers: ["enjoyment"], tip: "-ment attaches directly to enjoy." },
        { base: "treat", answers: ["treatment"], tip: "Medical or general noun from treat." },
        { base: "govern", answers: ["government"], tip: "Abstract noun from govern." },
        { base: "argue", answers: ["argument"], tip: "Last item: final -e disappears before -ment." }
      ]
    },
    {
      id: "cb2",
      suffix: "-ity",
      title: "Group 2",
      words: [
        { base: "original", answers: ["originality"], tip: "-ity builds abstract quality nouns." },
        { base: "popular", answers: ["popularity"], tip: "Adjective loses nothing before -ity." },
        { base: "major", answers: ["majority"], tip: "-ity after -or here." },
        { base: "able", answers: ["ability"], tip: "Last item: a → i before -ility." }
      ]
    },
    {
      id: "cb3",
      suffix: "-ance",
      title: "Group 3",
      words: [
        { base: "appear", answers: ["appearance"], tip: "Common -ance noun from verbs in -ear." },
        { base: "assist", answers: ["assistance"], tip: "-ance noun from assist." },
        { base: "annoy", answers: ["annoyance"], tip: "-y stays before -ance." },
        { base: "tolerate", answers: ["tolerance"], tip: "Last item: mute -e before -ance." }
      ]
    },
    {
      id: "cb4",
      suffix: "-ness",
      title: "Group 4",
      words: [
        { base: "sad", answers: ["sadness"], tip: "Adjective + -ness → abstract state." },
        { base: "weak", answers: ["weakness"], tip: "-ness after adjective stem." },
        { base: "careless", answers: ["carelessness"], tip: "-less + -ness (double consonant)." },
        { base: "lonely", answers: ["loneliness"], tip: "Last item: consonant-y → ie before -ness." }
      ]
    },
    {
      id: "cb5",
      suffix: "-ation",
      title: "Group 5",
      words: [
        { base: "inform", answers: ["information"], tip: "Long noun; stress pattern changes." },
        { base: "resign", answers: ["resignation"], tip: "-ation from resign." },
        { base: "present", answers: ["presentation"], tip: "Double-s present noun." },
        { base: "explain", answers: ["explanation"], tip: "Last item: the usual written form drops a letter from explain before -ation." }
      ]
    },
    {
      id: "cb6",
      suffix: "-ence",
      title: "Group 6",
      words: [
        { base: "differ", answers: ["difference"], tip: "fer stems often take -ence / -ence variants." },
        { base: "exist", answers: ["existence"], tip: "-ence after silent t." },
        { base: "depend", answers: ["dependence"], tip: "Abstract noun parallel to dependence on." },
        { base: "obey", answers: ["obedience"], tip: "Last item: consonant-y → ie before noun stem." }
      ]
    }
  ],
  /** Extra practice · same pedagogical layout (four per group). */
  extra: [
    {
      id: "ex1",
      suffix: "-ion",
      title: "Extra A · further -ion",
      words: [
        { base: "suggest", answers: ["suggestion"], tip: "Double -g stays in the noun stem." },
        { base: "immigrate", answers: ["immigration"], tip: "Person / process noun from migrate family." },
        { base: "omit", answers: ["omission"], tip: "Double consonant hint: two m’s in omission." },
        { base: "produce", answers: ["production"], tip: "Last item: vowel shortening before -tion." }
      ]
    },
    {
      id: "ex2",
      suffix: "-ment",
      title: "Extra B · further -ment",
      words: [
        { base: "develop", answers: ["development"], tip: "Common abstract noun ending." },
        { base: "establish", answers: ["establishment"], tip: "Formal noun ending -ment." },
        { base: "require", answers: ["requirement"], tip: "-e drops before here in requirement." },
        { base: "achieve", answers: ["achievement"], tip: "Last item: mind the consonant chunk before -ment." }
      ]
    },
    {
      id: "ex3",
      suffix: "-ity",
      title: "Extra C · further -ity",
      words: [
        { base: "electric", answers: ["electricity"], tip: "Three syllables in science contexts." },
        { base: "elastic", answers: ["elasticity"], tip: "Physical property noun." },
        { base: "curious", answers: ["curiosity"], tip: "-ious → noun with -iosity." },
        { base: "dense", answers: ["density"], tip: "Last item: -se → consonant-heavy stem before -ity." }
      ]
    },
    {
      id: "ex4",
      suffix: "-ness",
      title: "Extra D · further -ness",
      words: [
        { base: "happy", answers: ["happiness"], tip: "Consonant-y → i before suffix." },
        { base: "silly", answers: ["silliness"], tip: "-y → ie before double -ness spelling." },
        { base: "dizzy", answers: ["dizziness"], tip: "Stress shift; double consonant retained." },
        { base: "ugly", answers: ["ugliness"], tip: "Last item: y → ie before consonant clusters." }
      ]
    }
  ]
};
