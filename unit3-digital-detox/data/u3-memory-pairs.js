/**
 * Unit 3 — My digital detox: matching pairs for Memory (Concentration) game.
 * Each pair: a key phrase (as in the text) and a short English gloss (paraphrase).
 * @see unit3-digital-detox/games/memory-pairs-digital-detox.html
 */
(function (G) {
  "use strict";
  G = typeof globalThis !== "undefined" ? globalThis : G;
  if (!G) G = typeof window !== "undefined" ? window : this;

  /**
   * @type {{ part: number, phrase: string, gloss: string }[]}
   */
  G.U3_MEMORY_PAIR_ROWS = [
    { part: 1, phrase: "combat his own obsession", gloss: "take action against a habit you can’t control" },
    { part: 1, phrase: "I had been in obvious denial", gloss: "I was refusing to admit the problem" },
    { part: 1, phrase: "loud tutting at", gloss: "noisy disapproval in response to your scrolling" },
    { part: 2, phrase: "this was no consolation", gloss: "the numbers did not make me feel any better" },
    { part: 2, phrase: "demonise phones", gloss: "treat them as the enemy" },
    { part: 2, phrase: "indispensable items", gloss: "things we can’t do without" },
    { part: 2, phrase: "closely intertwined with", gloss: "tightly connected to" },
    { part: 3, phrase: "we are constantly bombarded with information", gloss: "flooded with news and input" },
    { part: 3, phrase: "flitting from one subject to another", gloss: "jumping restlessly between topics" },
    { part: 3, phrase: "hindering our ability to apply ourselves for any length of time to one task", gloss: "making it harder to focus on one thing for a sustained period" },
    { part: 4, phrase: "learn moderation and good habits", gloss: "use tech in a balanced, restrained way" },
    { part: 4, phrase: "an all-at-once approach", gloss: "trying to change everything in one go" },
    { part: 4, phrase: "switch off notifications", gloss: "turn off pop-up alerts from apps" },
    { part: 5, phrase: "Out of sight, out of mind", gloss: "if you don’t see it, you forget it faster" },
    { part: 5, phrase: "I was missing out on anything", gloss: "fear of losing something (FOMO)" },
    { part: 5, phrase: "secretly giving in to temptation", gloss: "quietly checking the screen despite plans not to" },
    { part: 6, phrase: "My imagination wanders more freely", gloss: "I daydream and think more creatively" },
    { part: 6, phrase: "Can't be bad", gloss: "that’s a pretty good result (informal close)" }
  ];
})(typeof globalThis !== "undefined" ? globalThis : this);
