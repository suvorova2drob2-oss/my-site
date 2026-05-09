/**
 * Unit 3 — My digital detox: one thesis line per part (structure memory, not key-phrase pairs).
 * Used by part-thesis-match-digital-detox.html (match Part 1–6 to the correct summary).
 * @see unit3-digital-detox/games/part-thesis-match-digital-detox.html
 */
(function (G) {
  "use strict";
  G = typeof globalThis !== "undefined" ? globalThis : G;
  if (!G) G = typeof window !== "undefined" ? window : this;

  /**
   * @type {{ part: 1|2|3|4|5|6, thesis: string }[]}
   */
  G.U3_PART_THESIS = [
    {
      part: 1,
      thesis: "UK survey (Ofcom), the writer’s denial about focus, and his family’s reaction to scrolling and memes."
    },
    {
      part: 2,
      thesis: "How often he used the phone, why the stats were still no consolation, and why devices are not “evil” but indispensable."
    },
    {
      part: 3,
      thesis: "The darker side: anxiety, comparison on social media, information overload, and a butterfly mind that won’t stay on one task."
    },
    {
      part: 4,
      thesis: "Books that don’t demand a full break: moderation, daunting change, one step at a time, and switching off social notifications."
    },
    {
      part: 5,
      thesis: "Distraction at the desk, FOMO, then out of sight in the kitchen, a bedroom ban, and a book instead of a late-night feed."
    },
    {
      part: 6,
      thesis: "Benefits: more space in your own head, ideas and work moving faster, and a “yesterday” with almost no time online."
    }
  ];
})(typeof globalThis !== "undefined" ? globalThis : this);
