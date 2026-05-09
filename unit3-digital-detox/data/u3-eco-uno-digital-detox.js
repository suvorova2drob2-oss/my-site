/**
 * Unit 3 — My digital detox: Eco-Uno (themes 1–6 = Parts 1–6).
 * Phrase text on every normal card is taken only from the matching part in
 * text-0N-digital-detox.html (verbatim or a short, faithful clause — no made-up copy).
 * Specials: draw2, skip, reverse, wild (same as Unit 11 pattern).
 */
(function (G) {
  "use strict";
  G = typeof globalThis !== "undefined" ? globalThis : G;
  if (!G) G = typeof window !== "undefined" ? window : this;

  G.U3_ECO_UNO_META = {
    1: { key: "1", name: "Survey & family", short: "Time & honesty", emoji: "📱" },
    2: { key: "2", name: "Use & balance", short: "Hours & need", emoji: "⚖️" },
    3: { key: "3", name: "Mood & overload", short: "Anxiety & info", emoji: "🦋" },
    4: { key: "4", name: "Moderation", short: "Habits & settings", emoji: "🔔" },
    5: { key: "5", name: "Home boundaries", short: "Space & sleep", emoji: "🛏️" },
    6: { key: "6", name: "Pay-offs", short: "Focus & life", emoji: "✨" }
  };

  G.U3_ECO_UNO_KIND = {
    problem: { label: "Problem", sh: "P" },
    solution: { label: "Solution", sh: "S" },
    action: { label: "Action", sh: "A" },
    impact: { label: "Impact", sh: "I" }
  };

  function n(t, kind, text, id) {
    return { id: id, t: t, kind: kind, text: text, special: null };
  }
  function s(t, sp, id) {
    var label = { draw2: "Scroll spiral (+2)", skip: "Do not disturb (skip)", reverse: "Airplane mode (reverse)", wild: "Tech reset (choose part)" }[sp] || sp;
    return { id: id, t: t, kind: "special", text: label, special: sp };
  }
  function wild(id) {
    return { id: id, t: 0, kind: "special", text: "Tech reset (choose part)", special: "wild" };
  }

  G.U3_ECO_UNO_CARDS = [
    /* Part 1 — text-01 */
    n(1, "problem", "I had been in obvious denial about how it was affecting my ability to concentrate", "1-P1"),
    n(1, "problem", "According to a recent survey by Ofcom, people in the UK spend an average of two and a half hours each day on their smartphones, which they check every twelve minutes", "1-P2"),
    n(1, "problem", "They caught me chuckling at memes or watching cat videos on YouTube", "1-P3"),
    n(1, "solution", "Some weeks ago, I downloaded a screen time tracking app onto my phone", "1-S1"),
    n(1, "solution", "It was clearly time for a change; time for a detox", "1-S2"),
    n(1, "solution", "Journalist Steven Rice reveals the steps he took to combat his own obsession", "1-S3"),
    n(1, "action", "just one of a series of measures I adopted to tackle my growing, and potentially unhealthy addiction to the device", "1-A1"),
    n(1, "action", "I could not ignore my wife’s increasingly loud tutting at my frequent scrolling", "1-A2"),
    n(1, "action", "Even my generation-Z daughters were rolling their eyes", "1-A3"),
    n(1, "impact", "The impact this was having on my work", "1-I1"),
    n(1, "impact", "Loud tutting at my frequent scrolling", "1-I2"),
    n(1, "impact", "whenever they caught me chuckling at memes or watching cat videos on YouTube", "1-I3"),

    /* Part 2 — text-02 */
    n(2, "problem", "I was picking up my phone over forty times each day and spending more than four hours online", "2-P1"),
    n(2, "problem", "not as much as some people, perhaps, but this was no consolation", "2-P2"),
    n(2, "problem", "It was still above the national average and no less cause for concern", "2-P3"),
    n(2, "solution", "We shouldn’t, of course, go all out to demonise phones", "2-S1"),
    n(2, "solution", "They have become indispensable items", "2-S2"),
    n(2, "solution", "Our online life is often closely intertwined with our offline one", "2-S3"),
    n(2, "action", "My phone enables me to deal with work-related issues, arrange to meet up with friends, book concert tickets and holidays, and yes, even buy books to read", "2-A1"),
    n(2, "action", "Spending more than four hours online", "2-A2"),
    n(2, "action", "I was picking up my phone over forty times each day", "2-A3"),
    n(2, "impact", "this was no consolation", "2-I1"),
    n(2, "impact", "no less cause for concern", "2-I2"),
    n(2, "impact", "not as much as some people, perhaps", "2-I3"),

    /* Part 3 — text-03 (kinds: issue vs reflection vs habit vs consequence — all wording from the part) */
    n(3, "problem", "There is another, darker side to it all", "3a-P1"),
    n(3, "problem", "Our phone addiction, we are told, is making us more anxious and depressed", "3a-P2"),
    n(3, "problem", "Social media can cause young people, in particular, to feel less confident", "3a-P3"),
    n(3, "solution", "as they continually compare themselves to their peers", "3a-S1"),
    n(3, "solution", "Challenging our ability to focus, causing us to skim briefly rather than pause to reflect on what we read", "3a-S2"),
    n(3, "solution", "So-and-so looks better, wears trendier clothes, has more expensive holidays, leads a more interesting life", "3a-S3"),
    n(3, "action", "We are constantly bombarded with information", "3a-A1"),
    n(3, "action", "Our minds have become like butterflies, flitting from one subject to another", "3a-A2"),
    n(3, "action", "causing us to skim briefly rather than pause to reflect on what we read", "3a-A3"),
    n(3, "impact", "Hindering our ability to apply ourselves for any length of time to one task", "3a-I1"),
    n(3, "impact", "Flitting from one subject to another", "3a-I2"),
    n(3, "impact", "challenging our ability to focus", "3a-I3"),

    /* Part 4 — text-04 */
    n(4, "problem", "Despite the titles, none advocated anything as final as a permanent break-up or logging-off", "4-P1"),
    n(4, "problem", "And since this can be quite daunting", "4-P2"),
    n(4, "problem", "The phone itself is not the problem, but how you use it", "4-P3"),
    n(4, "solution", "The route to a healthier relationship with technology is to learn moderation and good habits", "4-S1"),
    n(4, "solution", "It’s better to ease yourself into it with a step-by-step rather than an all-at-once approach", "4-S2"),
    n(4, "solution", "I took what I considered to be the most useful ideas from a number of books and websites I consulted", "4-S3"),
    n(4, "action", "My first step was to switch off notifications for all social media apps on my phone", "4-A1"),
    n(4, "action", "Switch off notifications for all social media apps on my phone", "4-A2"),
    n(4, "action", "ease yourself into it", "4-A3"),
    n(4, "impact", "with names like How to break up with your phone and Time to Log Off", "4-I1"),
    n(4, "impact", "learn moderation and good habits", "4-I2"),
    n(4, "impact", "a step-by-step rather than an all-at-once approach", "4-I3"),

    /* Part 5 — text-05 */
    n(5, "problem", "The result was disappointing", "5-P1"),
    n(5, "problem", "Having my phone on my desk when I worked at home was still a distraction", "5-P2"),
    n(5, "problem", "I kept looking at it, wondering if I was missing out on anything", "5-P3"),
    n(5, "solution", "Out of sight, out of mind, I thought, and promptly moved it to the kitchen", "5-S1"),
    n(5, "solution", "I banned the device from my bedroom", "5-S2"),
    n(5, "solution", "I sometimes take a book to bed instead", "5-S3"),
    n(5, "action", "If I wanted to check for messages, I’d have to get up and go to the other end of my flat", "5-A1"),
    n(5, "action", "Secretly giving in to temptation", "5-A2"),
    n(5, "action", "No more late-night screen time before I turn the light out, or early-morning scrolling as soon as I wake up", "5-A3"),
    n(5, "impact", "I was able to give all my attention to my work", "5-I1"),
    n(5, "impact", "I often nod off after just a page or two", "5-I2"),
    n(5, "impact", "As predicted, I soon stopped thinking about the phone and was able to give all my attention to my work", "5-I3"),

    /* Part 6 — text-06 */
    n(6, "problem", "rather than worrying about what others are doing with theirs", "6-P1"),
    n(6, "problem", "By the end of the first week, I began switching off my phone completely for a whole morning or afternoon", "6-P2"),
    n(6, "problem", "and now I occasionally leave it at home if I go out in the evening", "6-P3"),
    n(6, "solution", "And what are the benefits?", "6-S1"),
    n(6, "solution", "The less time I spend on my phone, the more time I have to myself", "6-S2"),
    n(6, "solution", "I can concentrate on living my own life rather than worrying about what others are doing with theirs", "6-S3"),
    n(6, "action", "For one thing, I can concentrate on living my own life", "6-A1"),
    n(6, "action", "My imagination wanders more freely, ideas for articles come more easily and assignments are completed more quickly", "6-A2"),
    n(6, "action", "assignments are completed more quickly", "6-A3"),
    n(6, "impact", "My imagination wanders more freely", "6-I1"),
    n(6, "impact", "Ideas for articles come more easily", "6-I2"),
    n(6, "impact", "Oh, and yesterday, only nine pick-ups and forty-three minutes online. Can’t be bad", "6-I3")
  ];

  (function addSpecials() {
    for (var c = 1; c <= 6; c++) {
      G.U3_ECO_UNO_CARDS.push(s(c, "draw2", "X2-" + c + "-1"));
      G.U3_ECO_UNO_CARDS.push(s(c, "skip", "XSK-" + c));
      G.U3_ECO_UNO_CARDS.push(s(c, "reverse", "XRV-" + c));
    }
    for (var w = 1; w <= 6; w++) {
      G.U3_ECO_UNO_CARDS.push(wild("W-" + w));
    }
  })();
})(typeof globalThis !== "undefined" ? globalThis : this);
