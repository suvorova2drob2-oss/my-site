/**
 * Unit 3 Reading — Stephanie Kwolek (Part 5 style MCQ + phrasal verbs Ex. 2–3)
 */
(function (G) {
  "use strict";
  G = typeof globalThis !== "undefined" ? globalThis : G;

  G.U3_KWOLEK_READING = {
    title: "The life and work of Stephanie Kwolek",
    subtitle: "A CHANGE FOR THE BETTER?",
    blurb:
      "For questions 1\u20136, choose the answer (A, B, C or D) which you think fits best according to the text.",
    passageHtml:
      '<p>In 2014, the world said goodbye to one of its greatest inventors. It was the American chemist, Stephanie Kwolek, who <strong>passed away</strong> at 90 years of age. She created the first in a group of synthetic polymers, a type of long-chained molecule, that would be spun together to form the lightweight fibre, Kevlar. It has since been used in many products from bike tyres to racing sails. But its use in bulletproof vests has achieved the most praise for obvious reasons.</p>' +
      '<p>Back in the 1960s, Kwolek was working for DuPont, a chemical company. It was <strong>looking into</strong> how car tyres could be reinforced without having to use heavy steel belts. A shortage of oil was said to be <strong>on the way</strong> and the aim was to produce cars that were more efficient with fuel as a result. Along with her colleagues, Kwolek started to experiment with long-chain molecules with rod-like structures or polyamides.</p>' +
      '<p>She was the one to discover that these polyamides, when put in solution, formed liquid crystals. Her colleague was initially hesitant at putting the liquid through the equipment. This was due to the fact that the majority of polymer solutions are thick and easily block such machinery. Stephanie held her ground, though, and the fibre produced as a result was stronger than her team had ever seen. It was immediately obvious that she had made an important discovery.</p>' +
      '<p>More testing followed and the polymer, known as Fibre B, didn&rsquo;t fail to disappoint those who had worked tirelessly on its creation. Not only was it fireproof and about half the weight of fibreglass, it was also five times as strong as steel. It was in 1972 that DuPont decided to patent the material and found an excess of 200 uses for it. The DuPont Survivors Club is proof of its importance in bulletproof vests within law enforcement agencies. To date, it has saved no less than 3,100 people.</p>' +
      '<p>Kwolek was born in New Kensington, Pennsylvania, on 31st July 1923. That she became a scientist was no surprise, although it was initially biology rather than chemistry that interested her. This could have been due to the influence of her father, who would take her for walks in the woods to gather plants and seeds. Sadly, he died when she was just ten. Her mother was no less influential to her daughter. She could sew very well and it was probably for this reason that Kwolek debated whether to become a fashion designer.</p>' +
      '<p>It was the lack of finances to study medicine that led her into attending the Carnegie Institute of Technology in Pittsburgh, the women&rsquo;s college she graduated from in 1946. Immediately afterwards, she got a temporary job with DuPont in their textiles research department. This in turn opened the door to greater opportunities. The temporary post she accepted was, in actual fact, a 40-year-long position.</p>' +
      '<p>The company <strong>took its time</strong> in giving her the recognition she deserved. She&rsquo;d have to wait 15 years for a promotion. On top of this, despite receiving 17 patents in total between 1961 and 1986, she <strong>missed out on</strong> the success of Kevlar as she&rsquo;d signed over all royalties to DuPont.</p>' +
      '<p>Thankfully her contribution to science and discovery has since been honoured. In 1994, her name was added to the National Inventors Hall of Fame and she received countless awards. To this day, she is still the only woman to have been given DuPont&rsquo;s Lavoisier Medal, which recognises outstanding technical achievement.</p>',
    questions: [
      {
        id: 1,
        prompt: "What is true of Kwolek\u2019s invention?",
        options: [
          "It was used to form the main component of Kevlar.",
          "It helped her to go on to invent the other fibres in Kevlar.",
          "It was combined with other similar molecules to form Kevlar.",
          "It was the lightest part of the mixture of fibres that went into Kevlar.",
        ],
        correct: 2,
      },
      {
        id: 2,
        prompt:
          "What seemed to encourage her experiments into long-chain molecules?",
        options: [
          "There had been a lack of oil in the past.",
          "The company wanted an alternative to the steel belts.",
          "She wanted to provide more support for the tyres.",
          "The previous method of producing cars was expensive.",
        ],
        correct: 1,
      },
      {
        id: 3,
        prompt:
          "What do you think the phrase \u2018held her ground\u2019 in line 21 means?",
        options: [
          "was realistic",
          "refused to give up",
          "hoped for the best",
          "did what she was told",
        ],
        correct: 1,
      },
      {
        id: 4,
        prompt: "What is true of the material known as Fibre B?",
        options: [
          "Its strength is far greater than that of steel.",
          "DuPont found a maximum of 200 uses for it.",
          "The people who worked on its production felt let down.",
          "It didn\u2019t cope well under extreme heat.",
        ],
        correct: 0,
      },
      {
        id: 5,
        prompt: "What does the writer suggest regarding Kwolek\u2019s early ambitions?",
        options: [
          "Her father was surprised she became a scientist.",
          "She had always wanted to go into chemistry.",
          "She almost chose to follow in her mother\u2019s footsteps.",
          "Her father was keen for her to study biology professionally.",
        ],
        correct: 2,
      },
      {
        id: 6,
        prompt: "What do you think is the writer\u2019s opinion of DuPont?",
        options: [
          "It gave Kwolek a fair share from the financial success of her work.",
          "Kwolek should appreciate DuPont\u2019s recognition of her work.",
          "It employed Kwolek for too long.",
          "It should have awarded Kwolek for her talent much earlier.",
        ],
        correct: 3,
      },
    ],
    phraseMatch: [
      {
        id: "m1",
        meaning: "did something too slowly",
        answer: "took its time",
      },
      {
        id: "m2",
        meaning: "lost an opportunity to do or have something",
        answer: "missed out on",
      },
      {
        id: "m3",
        meaning:
          "trying to discover the facts about something such as a problem",
        answer: "looking into",
      },
      { id: "m4", meaning: "died", answer: "passed away" },
      {
        id: "m5",
        meaning: "about to arrive or happen",
        answer: "on the way",
      },
    ],
    phrasePool: [
      "passed away",
      "looking into",
      "on the way",
      "took its time",
      "missed out on",
    ],
    gapFill: [
      {
        id: "g1",
        before: "Lara narrowly ",
        after:
          " a medal at last year\u2019s championships, so she\u2019s hoping to place this time.",
        accept: ["missed out on"],
      },
      {
        id: "g2",
        before:
          "The government has announced that funding for a new high-speed railway is ",
        after: ".",
        accept: ["on the way"],
      },
      {
        id: "g3",
        before: "William really ",
        after: " getting to the point. He really is a terrible public speaker.",
        accept: [
          "takes his time",
          "took his time",
          "takes its time",
          "took its time",
        ],
      },
      {
        id: "g4",
        before: "Unfortunately, my grandfather ",
        after: " before I was born, but my mother always tells me lots of stories about him.",
        accept: ["passed away"],
      },
      {
        id: "g5",
        before: "We have spent the past few years ",
        after: " a more efficient way to manufacture our products.",
        accept: ["looking into"],
      },
    ],
  };
})(window);
