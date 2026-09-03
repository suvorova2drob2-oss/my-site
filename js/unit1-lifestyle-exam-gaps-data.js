/**
 * Unit 1 · Lifestyle — exam gaps 1–8 (This is your life).
 * window.U1_LIFESTYLE_EXAM_GAPS
 */
(function (W) {
  "use strict";

  W.U1_LIFESTYLE_EXAM_GAPS = {
    id: "lifestyle",
    label: "Lifestyle",
    title: "This is your life — gaps 1–8",
    blurb: "Lucas · Maja · Reo · Ben",
    fragments: [
      {
        heading: "Text A — Lucas · actor",
        parts: [
          { t: "text", v: "Normally I get out of bed around midday. I'll sometimes go for a run after I get up, though it's " },
          { t: "gap", n: 1 },
          { t: "text", v: ". When I'm not rehearsing, at home there are usually " },
          { t: "gap", n: 2 },
          { t: "text", v: ". It's a bit of a mess, I'm ashamed to say." }
        ]
      },
      {
        heading: "Text B — Maja · ski instructor",
        parts: [
          { t: "text", v: "Wherever I am, I love the fact that I usually live just " },
          { t: "gap", n: 3 },
          { t: "text", v: ", so I can get up reasonably late. We get plenty of days off and when I'm not working, I go skiing, or " },
          { t: "gap", n: 4 },
          { t: "text", v: " – I have no problem spending the morning in bed!" }
        ]
      },
      {
        heading: "Text C — Reo · farm vet",
        parts: [
          { t: "text", v: "I tend to be out all day, visiting farms. I love my job, " },
          { t: "gap", n: 5 },
          { t: "text", v: " and not knowing what you'll be doing from one day to the next. But being a vet – it's " },
          { t: "gap", n: 6 },
          { t: "text", v: " lambs and cute little calves." }
        ]
      },
      {
        heading: "Text D — Ben · mountaineer",
        parts: [
          { t: "text", v: "When I'm not on a mountain, you might come across me " },
          { t: "gap", n: 7 },
          { t: "text", v: " from a wind turbine. It's precisely that sense of danger that " },
          { t: "gap", n: 8 },
          { t: "text", v: "." }
        ]
      }
    ],
    answers: [
      { n: 1, text: "not really my idea of fun" },
      { n: 2, text: "scripts lying all over the place" },
      { n: 3, text: "a short walk from the slopes" },
      { n: 4, text: "catch up on my sleep" },
      { n: 5, text: "especially the variety" },
      { n: 6, text: "not all cuddly" },
      { n: 7, text: "hanging on a rope" },
      { n: 8, text: "makes me feel alive" }
    ]
  };
})(typeof window !== "undefined" ? window : globalThis);
