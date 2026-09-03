/**
 * Unit 1 · Clothes — exam gaps 1–8 (SB 1.1).
 * window.U1_CLOTHES_EXAM_GAPS
 */
(function (W) {
  "use strict";

  W.U1_CLOTHES_EXAM_GAPS = {
    id: "clothes",
    label: "Clothes",
    title: "SB 1.1 · Clothes — gaps 1–8",
    blurb: "Speakers 1–4",
    fragments: [
      {
        heading: "Text A — Speaker 1",
        parts: [
          { t: "text", v: "It's unusual for me to buy " },
          { t: "gap", n: 1 },
          { t: "text", v: ". I get most of what I wear from " },
          { t: "gap", n: 2 },
          { t: "text", v: ". You can find some pretty decent stuff in these places, even quite tasteful designer clothes." }
        ]
      },
      {
        heading: "Text B — Speaker 2",
        parts: [
          { t: "text", v: "Some people take ages, umming and ahhing over what to wear, but " },
          { t: "gap", n: 3 },
          { t: "text", v: ". The trouble is, I only have time to do my " },
          { t: "gap", n: 4 },
          { t: "text", v: ", so that wouldn't work." }
        ]
      },
      {
        heading: "Text C — Speaker 3",
        parts: [
          { t: "text", v: "I get suspicious when everything is incredibly cheap. " },
          { t: "gap", n: 5 },
          { t: "text", v: " The clothes may not be as cheap, but at least I can be confident that " },
          { t: "gap", n: 6 },
          { t: "text", v: "." }
        ]
      },
      {
        heading: "Text D — Speaker 4",
        parts: [
          { t: "text", v: "They don't have to be designer clothes, but they do have to make me " },
          { t: "gap", n: 7 },
          { t: "text", v: ". My colleagues have got used to seeing me in " },
          { t: "gap", n: 8 },
          { t: "text", v: "." }
        ]
      }
    ],
    answers: [
      { n: 1, text: "brand new clothes" },
      { n: 2, text: "charity shops" },
      { n: 3, text: "I just throw on the first thing I find in my wardrobe and that's it" },
      { n: 4, text: "washing once a week" },
      { n: 5, text: "I only buy from companies that sell ethical clothing" },
      { n: 6, text: "no one is being exploited" },
      { n: 7, text: "feel good about myself" },
      { n: 8, text: "something different every day" }
    ]
  };
})(typeof window !== "undefined" ? window : globalThis);
