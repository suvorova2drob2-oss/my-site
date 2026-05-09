/**
 * Unit 3 — My digital detox (reading in parts).
 * Key phrases for Stage 2 / Alias / Whisper / Pictionary / What is missing / Snowball.
 * @see unit3-digital-detox/stage2-retell.html
 * @see unit3-digital-detox/games/
 */
(function (G) {
  "use strict";
  G = typeof globalThis !== "undefined" ? globalThis : G;
  if (!G) G = typeof window !== "undefined" ? window : this;

  G.U3_DIGITAL_DETOX_SPEAKER = "My digital detox";

  /** @type {Record<string, string[]>} */
  G.U3_DIGITAL_DETOX_BY_PART = {
    part1: [
      "the steps he took",
      "combat his own obsession",
      "tackle my growing, and potentially unhealthy addiction to the device",
      "I had been in obvious denial",
      "it was affecting my ability to concentrate",
      "the impact this was having on my work",
      "loud tutting at",
      "were rolling their eyes",
      "they caught me chuckling at memes"
    ],
    part2: [
      "I was picking up my phone",
      "this was no consolation",
      "demonise phones",
      "indispensable items",
      "closely intertwined with",
      "enables me to"
    ],
    part3: [
      "there is another, darker side to it all",
      "is making us more anxious and depressed",
      "less confident",
      "continually compare themselves to their peers",
      "so-and-so looks better",
      "we are constantly bombarded with information",
      "flitting from one subject to another",
      "hindering our ability to apply ourselves for any length of time to one task"
    ],
    part4: [
      "advocated",
      "learn moderation and good habits",
      "this can be quite daunting",
      "an all-at-once approach",
      "switch off notifications"
    ],
    part5: [
      "disappointing",
      "I was missing out on anything",
      "secretly giving in to temptation",
      "Out of sight, out of mind",
      "I banned the device from my bedroom",
      "no more late-night screen time",
      "early-morning scrolling",
      "nod off"
    ],
    part6: [
      "what are the benefits?",
      "My imagination wanders more freely",
      "ideas for articles come more easily",
      "assignments are completed more quickly",
      "Can't be bad"
    ]
  };

  function flatten() {
    var a = [];
    for (var k in G.U3_DIGITAL_DETOX_BY_PART) {
      if (Object.prototype.hasOwnProperty.call(G.U3_DIGITAL_DETOX_BY_PART, k)) {
        a = a.concat(G.U3_DIGITAL_DETOX_BY_PART[k]);
      }
    }
    return a;
  }

  /** All key phrases, one list (Alias, Whisper, Pictionary). */
  G.U3_DIGITAL_DETOX_PHRASES = flatten();

  /**
   * Curated subset for «What is missing?» / Snowball: varied length, one screen line each.
   * @type {string[]}
   */
  G.U3_KEY_PHRASES_MISSING = [
    "combat his own obsession",
    "tackle my growing, and potentially unhealthy addiction to the device",
    "I had been in obvious denial",
    "demonise phones",
    "closely intertwined with",
    "is making us more anxious and depressed",
    "we are constantly bombarded with information",
    "flitting from one subject to another",
    "learn moderation and good habits",
    "switch off notifications",
    "Out of sight, out of mind",
    "I banned the device from my bedroom",
    "no more late-night screen time",
    "My imagination wanders more freely",
    "Can't be bad"
  ];

  /**
   * Short English gloss (paraphrase) for every key phrase — used by lexical flip / cloze data
   * when the Memory pairs file does not list a phrase. Keys: exact phrase text (matched case-insensitively after normalise).
   * @type {Record<string, string>}
   */
  G.U3_DIGITAL_DETOX_GLOSS_BY_PHRASE = {
    "the steps he took": "the actions or measures he chose to take",
    "combat his own obsession": "take action against a habit you can’t control",
    "tackle my growing, and potentially unhealthy addiction to the device": "address my worsening, possibly harmful over-reliance on the phone",
    "I had been in obvious denial": "I was refusing to admit the problem",
    "it was affecting my ability to concentrate": "it was making it harder for me to focus",
    "the impact this was having on my work": "how this was damaging my job or productivity",
    "loud tutting at": "noisy disapproval in response to your scrolling",
    "were rolling their eyes": "showing annoyance or exasperation with their eyes",
    "they caught me chuckling at memes": "they saw me laughing at funny pictures or posts online",
    "I was picking up my phone": "I kept taking or checking my phone (too often)",
    "this was no consolation": "the numbers or facts did not make me feel any better",
    "demonise phones": "treat them as entirely bad or the enemy",
    "indispensable items": "things we feel we can’t do without",
    "closely intertwined with": "tightly connected to; hard to separate from",
    "enables me to": "allows me to; makes it possible for me to",
    "there is another, darker side to it all": "there is also a more harmful or negative aspect",
    "is making us more anxious and depressed": "is increasing worry and low mood",
    "less confident": "feeling more insecure or unsure of yourself",
    "continually compare themselves to their peers": "keep measuring themselves against other people their age",
    "so-and-so looks better": "other people seem more attractive, successful, or put-together (on social media)",
    "we are constantly bombarded with information": "we are flooded with news, posts, and updates",
    "flitting from one subject to another": "jumping restlessly from one topic to the next",
    "hindering our ability to apply ourselves for any length of time to one task": "making it harder to focus on one thing for a sustained period",
    "advocated": "publicly supported; argued in favour of",
    "learn moderation and good habits": "use technology in a balanced, restrained, sensible way",
    "this can be quite daunting": "this can feel intimidating or overwhelming",
    "an all-at-once approach": "trying to change everything in one go",
    "switch off notifications": "turn off pop-up alerts from apps",
    "disappointing": "not as good or satisfying as you hoped",
    "I was missing out on anything": "fear of losing an experience or news (FOMO)",
    "secretly giving in to temptation": "quietly using the device despite your plans not to",
    "Out of sight, out of mind": "if you don’t see it, you think about it less",
    "I banned the device from my bedroom": "I no longer allow the phone in the room where I sleep",
    "no more late-night screen time": "stopping the habit of using screens just before bed",
    "early-morning scrolling": "checking the feed or apps first thing after waking up",
    "nod off": "drop off to sleep; doze",
    "what are the benefits?": "what positive results do you get from it?",
    "My imagination wanders more freely": "I can daydream and think more creatively",
    "ideas for articles come more easily": "topics to write about occur to me more readily",
    "assignments are completed more quickly": "I finish work tasks in less time",
    "Can't be bad": "that’s a pretty good result (informal)"
  };
})(typeof globalThis !== "undefined" ? globalThis : this);
