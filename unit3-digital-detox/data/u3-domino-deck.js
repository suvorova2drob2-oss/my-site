/**
 * Unit 3 — My digital detox. Sentence halves for class dominoes (Parts 1–6).
 * Mirrors js/u11-sentences-by-text.js (four texts) with six source parts.
 */
(function (G) {
  "use strict";
  G = typeof globalThis !== "undefined" ? globalThis : G;
  if (!G) G = typeof window !== "undefined" ? window : this;

  G.U3_SENTENCE_CARD_META = {
    1: { key: "1", title: "Part 1: Survey & family" },
    2: { key: "2", title: "Part 2: Use & balance" },
    3: { key: "3", title: "Part 3: Mood & overload" },
    4: { key: "4", title: "Part 4: Moderation" },
    5: { key: "5", title: "Part 5: Home rules" },
    6: { key: "6", title: "Part 6: Benefits" }
  };

  /** @type {{ id: string, t: 1|2|3|4|5|6, s: string, title: string }[]} */
  G.U3_SENTENCE_DOMINO = [
    { id: "P1a", t: 1, s: "According to a recent survey by Ofcom, people in the UK spend an average of two and a half hours each day on their smartphones, which they check every twelve minutes.", title: "1" },
    { id: "P1b", t: 1, s: "Journalist Steven Rice reveals the steps he took to combat his own obsession with the device.", title: "1" },
    { id: "P1c", t: 1, s: "I had been in obvious denial about how it was affecting my ability to concentrate and the impact on my work.", title: "1" },
    { id: "P1d", t: 1, s: "Even my generation-Z daughters were rolling their eyes whenever they caught me chuckling at memes.", title: "1" },

    { id: "P2a", t: 2, s: "I was picking up my phone over forty times each day and spending more than four hours online; this was no consolation.", title: "2" },
    { id: "P2b", t: 2, s: "We should not demonise phones: they have become indispensable items, and our online life is often closely intertwined with our offline one.", title: "2" },
    { id: "P2c", t: 2, s: "My phone enables me to deal with work, arrange to meet friends, book tickets, holidays — and even buy books to read.", title: "2" },
    { id: "P2d", t: 2, s: "It was still above the national average and no less cause for concern.", title: "2" },

    { id: "P3a", t: 3, s: "There is another, darker side: phone addiction is making us more anxious and depressed.", title: "3" },
    { id: "P3b", t: 3, s: "Social media can make young people feel less confident as they continually compare themselves to their peers.", title: "3" },
    { id: "P3c", t: 3, s: "We are constantly bombarded with information, and our minds have become like butterflies, flitting from one subject to another.", title: "3" },
    { id: "P3d", t: 3, s: "That habit hinders our ability to apply ourselves for any length of time to one task.", title: "3" },

    { id: "P4a", t: 4, s: "The phone itself is not the problem, but how you use it, so the route to a healthier relationship is to learn moderation and good habits.", title: "4" },
    { id: "P4b", t: 4, s: "Since this can be quite daunting, it is better to ease yourself in step by step than use an all-at-once approach.", title: "4" },
    { id: "P4c", t: 4, s: "My first step was to switch off notifications for all social media apps on my phone.", title: "4" },
    { id: "P4d", t: 4, s: "The books in the text did not advocate a permanent break-up with technology or total logging-off.", title: "4" },

    { id: "P5a", t: 5, s: "Having my phone on my desk at home was still a distraction, and I kept checking it, fearing I was missing out on anything.", title: "5" },
    { id: "P5b", t: 5, s: "Out of sight, out of mind, I thought — and moved the phone to the kitchen so I had to walk to check it.", title: "5" },
    { id: "P5c", t: 5, s: "I banned the device from my bedroom, ending late-night screen time and early-morning scrolling as soon as I wake up.", title: "5" },
    { id: "P5d", t: 5, s: "I sometimes take a book to bed, though I often nod off after a page or two.", title: "5" },

    { id: "P6a", t: 6, s: "What are the benefits? I can focus on my own life instead of watching others, and the less I scroll, the more time I have to myself.", title: "6" },
    { id: "P6b", t: 6, s: "My imagination wanders more freely, ideas for articles come more easily, and assignments are completed more quickly.", title: "6" },
    { id: "P6c", t: 6, s: "Oh, and yesterday, only nine pick-ups and forty-three minutes online. Can not be bad.", title: "6" },
    { id: "P6d", t: 6, s: "The detox is not a stunt — it is a measured response to how the screen had been stealing attention.", title: "6" }
  ];

  G.U3_buildDoubleDominoDeck = function () {
    if (!G.U3_SENTENCE_DOMINO || !G.U3_SENTENCE_DOMINO.length) return [];
    var byT = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] };
    G.U3_SENTENCE_DOMINO.forEach(function (c) {
      if (byT[c.t]) byT[c.t].push(c.s);
    });
    function pick(t, avoid) {
      var arr = byT[t];
      if (!arr || !arr.length) return "";
      var pool = arr.filter(function (s) { return s !== avoid; });
      var use = pool.length ? pool : arr;
      return use[Math.floor(Math.random() * use.length)];
    }
    var tiles = [];
    var n = 0;
    for (var a = 1; a <= 6; a++) {
      for (var b = a; b <= 6; b++) {
        for (var k = 0; k < 2; k++) {
          var sL = a === b ? pick(a) : pick(a);
          var sR = a === b ? pick(b, sL) : pick(b);
          tiles.push({ id: "U3D" + n++, L: { t: a, s: sL }, R: { t: b, s: sR } });
        }
      }
    }
    return tiles;
  };
})(typeof globalThis !== "undefined" ? globalThis : this);
