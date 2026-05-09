/**
 * Unit 3 — My digital detox: personal pair prompts built around key phrases
 * (same lexis as u3-digital-detox-lexis.js; students use chunks in their answers).
 * @see unit3-digital-detox/pair-questions-digital-detox.html
 */
(function (G) {
  "use strict";
  G = typeof globalThis !== "undefined" ? globalThis : G;
  if (!G) G = typeof window !== "undefined" ? window : this;

  /**
   * @type {{ part: number, use: string[], lead: string, q: string, tip: string }[]}
   */
  G.U3_PAIR_PROMPTS = [
    {
      part: 1,
      use: ["I had been in obvious denial", "it was affecting my ability to concentrate"],
      lead: "A asks B, then B asks A the same question.",
      q: "Is there a habit (not only phones) you were in <strong>obvious denial</strong> about? How was it <strong>affecting your ability to concentrate</strong> (work, study, sleep)?",
      tip: "Both answer in English; work both chunks into the reply naturally (you may paraphrase; they need not be verbatim)."
    },
    {
      part: 1,
      use: ["combat his own obsession", "the steps he took"],
      lead: "Compare answers in 90 seconds, then change roles and pick a new detail.",
      q: "What <strong>steps</strong> would <em>you</em> take to <strong>combat</strong> a phone habit that feels a bit like an <strong>obsession</strong> (yours, not the journalist&rsquo;s)? One concrete step, one &ldquo;soft&rdquo; step.",
      tip: "First person is natural (e.g. I&rsquo;d take steps to&hellip;). You are not retelling the article."
    },
    {
      part: 1,
      use: ["loud tutting at", "they caught me chuckling at memes"],
      lead: "Light, humorous tone is OK.",
      q: "Has anyone ever reacted with something like <strong>loud tutting</strong> to your screen time, or <strong>caught you chuckling at memes</strong> (or a short video) when you were supposed to be present? Tell your partner.",
      tip: "If you have no real story, use a light hypothetical example, but still use the two chunks in speech."
    },
    {
      part: 2,
      use: ["I was picking up my phone", "this was no consolation"],
      lead: "Numbers game: be honest, approximate is fine.",
      q: "Roughly how often do you find yourself <strong>picking up your phone</strong> without a real reason? If an app told you a &ldquo;good&rdquo; number, would it be <strong>no consolation</strong> for you &mdash; and why (or why not)?",
      tip: "The listener asks one follow-up, then you swap who speaks."
    },
    {
      part: 2,
      use: ["demonise phones", "indispensable items"],
      lead: "Agree or disagree, but give an example from your week.",
      q: "Do you tend to <strong>demonise phones</strong> in conversation, or treat them as <strong>indispensable items</strong>? Can both be true for you? Explain to your partner.",
      tip: "Afterwards, note one place where you agreed and one where you phrased it differently."
    },
    {
      part: 2,
      use: ["closely intertwined with", "enables me to"],
      lead: "Two minutes per speaker.",
      q: "In what way is your online life <strong>closely intertwined with</strong> your offline one? What does your phone <strong>enable you to</strong> that you would not want to give up? One downside, one upside.",
      tip: "Both collocations should appear in speech (not necessarily in the same sentence)."
    },
    {
      part: 3,
      use: ["compare themselves to their peers", "so-and-so looks better"],
      lead: "Sensitive topic: keep it optional and brief.",
      q: "Do you ever <strong>compare yourself</strong> to others online, as in &ldquo;<strong>so-and-so</strong> <strong>looks better</strong>&rdquo;? What helps you step back, even a little?",
      tip: "If the question feels too personal, talk about &ldquo;people in general&rdquo; but still use the chunks."
    },
    {
      part: 3,
      use: ["we are constantly bombarded with information", "flitting from one subject to another"],
      lead: "Think about study or work, not the news only.",
      q: "When do you feel <strong>bombarded with information</strong>? Does your mind end up <strong>flitting from one subject to another</strong>? What is one way you slow it down (even rarely)?",
      tip: "The listener paraphrases what they heard in one sentence, using at least one of the two phrases."
    },
    {
      part: 3,
      use: ["there is another, darker side to it all", "less confident"],
      lead: "A speaks 60 s, B 60 s, no interruptions except &ldquo;mm&rdquo;.",
      q: "In your experience, is there <strong>another, darker side</strong> to being online? Has it ever made you <strong>less confident</strong> in a way you are willing to share?",
      tip: "Optional: after the round, one sentence in your L1 to your partner, if your class allows it."
    },
    {
      part: 4,
      use: ["learn moderation and good habits", "an all-at-once approach"],
      lead: "Practical focus.",
      q: "What is one area where you&rsquo;d like to <strong>learn moderation and good habits</strong> (sleep, social apps, games)? Why is an <strong>all-at-once approach</strong> a bad fit for you personally?",
      tip: "Agree in the pair on one &ldquo;smallest first step&rdquo; for the coming week in that area (sleep, social apps, or other)."
    },
    {
      part: 4,
      use: ["this can be quite daunting", "switch off notifications"],
      lead: "Share one &ldquo;daunting&rdquo; change and one tiny change.",
      q: "For you, what would be <strong>quite daunting</strong> to do with your phone settings? Why? Have you ever tried to <strong>switch off notifications</strong> for a whole class of apps? What happened?",
      tip: "If two answers sound the same, run a second round with a different area (work news vs. private chats)."
    },
    {
      part: 5,
      use: ["I was missing out on anything", "secretly giving in to temptation"],
      lead: "No judgement; the article uses similar honesty.",
      q: "What do you most fear <strong>missing out on</strong> if you are offline? When do you <strong>secretly give in to temptation</strong> to check, even if you&rsquo;d promised you wouldn&rsquo;t?",
      tip: "Both key phrases need to be in your spoken turn, not only read from the page."
    },
    {
      part: 5,
      use: ["Out of sight, out of mind", "I banned the device from my bedroom"],
      lead: "Home / dorm / shared flat &mdash; all OK as context.",
      q: "Where could you try <strong>out of sight, out of mind</strong> with your phone? Could you ever say you <strong>banned the device from my bedroom</strong> (or would that be impossible) &mdash; and why?",
      tip: "If &ldquo;bedroom&rdquo; is not a useful setting for you, answer with desk or kitchen instead, but use the &ldquo;ban&rdquo; or &ldquo;out of sight&rdquo; idea from the text."
    },
    {
      part: 5,
      use: ["no more late-night screen time", "nod off"],
      lead: "Last question before a stretch break; keep it light.",
      q: "What would &ldquo;<strong>no more late-night screen time</strong>&rdquo; change for you? Do you <strong>nod off</strong> with a book, a podcast, or only when the light goes out?",
      tip: "Compare who keeps a stricter line at night and who is more flexible &mdash; in English only."
    },
    {
      part: 6,
      use: ["what are the benefits?", "My imagination wanders more freely"],
      lead: "End on a positive line.",
      q: "So &mdash; <strong>what are the benefits</strong> for you when you are away from the feed? When does <strong>my imagination wander more freely</strong> (walking, shower, before sleep)?",
      tip: "The listener asks one follow-up, then you reverse roles."
    },
    {
      part: 6,
      use: ["assignments are completed more quickly", "Can't be bad"],
      lead: "Study or job tasks both fit.",
      q: "When you cut distractions, are your <strong>assignments</strong> (or similar tasks) <strong>completed more quickly</strong> &mdash; or not? Finish with a small win this week: use <strong>Can&rsquo;t be bad</strong> in a full sentence about it.",
      tip: "The closing sentence with &ldquo;Can&rsquo;t be bad&rdquo; should sound natural, like in the article."
    }
  ];
})(typeof globalThis !== "undefined" ? globalThis : this);
