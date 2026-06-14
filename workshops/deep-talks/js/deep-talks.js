/**
 * Deep Talks — conversation club by theme (Blinkist-style input, discussion-first).
 * Content slots empty; lenses guide depth per session.
 */
(function (global) {
  var STEPS = [
    {
      id: "warm-up",
      label: "Warm-up",
      short: "Разогрев",
      time: "10 min",
      teacher:
        "Личный угол темы — ещё без книги. Пары: 2 min каждый. Цель — все говорят в первые 10 min.",
      slots: [
        { id: "personal-prompts", title: "Personal prompts", hint: "2–3 вопроса · life, not theory" },
        { id: "snowball-optional", title: "Name + one line (optional)", hint: "Круг · короткая реплика" },
      ],
    },
    {
      id: "big-idea",
      label: "Big idea",
      short: "Blink / input",
      time: "10–15 min",
      teacher:
        "Участники слушают blink ДО клуба (async). На встрече — max 60 s recap, потом: «What surprised you?» Не пересказ всей книги.",
      slots: [
        { id: "blink-pick", title: "Your blink pick", hint: "Название · автор · ссылка «listen in app»" },
        { id: "hook-questions", title: "Hook questions", hint: "3 вопроса после прослушивания" },
        { id: "no-spoiler-note", title: "Ground rule", hint: "Discuss ideas · paraphrase · no long quotes" },
      ],
    },
    {
      id: "harvest",
      label: "Harvest",
      short: "Язык + идеи",
      time: "12 min",
      teacher:
        "Discourse для спора и мнения + 3–4 big ideas своими словами. Не vocabulary list — phrases: I’m convinced… / That resonates… / I push back on…",
      slots: [
        { id: "discourse-bank", title: "Discourse bank", hint: "Agree · disagree · qualify · recommend" },
        { id: "ideas-paraphrase", title: "Ideas (paraphrase)", hint: "3–5 bullet ideas · your wording" },
        { id: "steal-phrase", title: "Steal one phrase", hint: "Каждый выбирает 1 chunk на вечер" },
      ],
    },
    {
      id: "pairs",
      label: "Pairs",
      short: "Глубина",
      time: "18 min",
      teacher:
        "Round 1 в парах по lens A → rotation → lens B. Extended turns 60–90 s. Partner: один follow-up only.",
      slots: [
        { id: "lens-a", title: "Lens A · pair prompts", hint: "2–3 open questions" },
        { id: "lens-b", title: "Lens B · pair prompts", hint: "После смены партнёра" },
        { id: "rotation-timer", title: "Pair rotation", hint: "12–15 min · switch" },
      ],
    },
    {
      id: "debate",
      label: "Debate & games",
      short: "Игры",
      time: "22 min",
      teacher:
        "1 main game + optional devil’s advocate. Steal/Kill/Keep · agree spectrum · too honest / not honest enough — под тему.",
      slots: [
        { id: "main-game", title: "Main game", hint: "Steal/Kill/Keep · spectrum · book pitch…" },
        { id: "devils-advocate", title: "Devil’s advocate (optional)", hint: "Спорная идея · роли · не личные убеждения" },
        { id: "phrase-checklist", title: "Phrase mission", hint: "≥4 phrases from harvest in play" },
      ],
    },
    {
      id: "freer",
      label: "Freer",
      short: "Свободно",
      time: "12 min",
      teacher:
        "Hot seat OR 60 s pitch «recommend this blink to a friend?» OR pyramid (pair → group of 4 → 1 speaker).",
      slots: [
        { id: "freer-format", title: "Format pick", hint: "Hot seat / pitch / pyramid" },
        { id: "freer-prompt", title: "Freer prompt", hint: "One strong question for the room" },
      ],
    },
    {
      id: "wrap",
      label: "Wrap",
      short: "Итог",
      time: "8 min",
      teacher:
        "Exit ticket: one idea to test this week · one phrase that felt natural · teaser next theme.",
      slots: [
        { id: "exit-ticket", title: "Exit ticket", hint: "Written or 20 s aloud" },
        { id: "homework-voice", title: "Homework (optional)", hint: "30 s voice · one disagree idea" },
        { id: "next-theme", title: "Next session", hint: "Teaser + blink homework" },
      ],
    },
  ];

  var THEMES = [
    {
      id: "habits",
      num: 1,
      title: "Habits & tiny changes",
      icon: "🌱",
      tagline: "Identity · systems · the long game",
      lenses: ["Who are you becoming?", "Environment beats willpower", "When you miss a day"],
      blinkHint: "Any blink on habits / behaviour change / routines",
    },
    {
      id: "focus",
      num: 2,
      title: "Focus & digital life",
      icon: "📵",
      tagline: "Attention · boredom · boundaries",
      lenses: ["What steals your focus?", "Phone rules that actually work", "Deep work vs busy work"],
      blinkHint: "Attention, productivity, digital minimalism, deep work",
    },
    {
      id: "money",
      num: 3,
      title: "Money & enough",
      icon: "💳",
      tagline: "Mindset · spending · «enough»",
      lenses: ["Emotional spending", "Money talk in relationships", "More vs enough"],
      blinkHint: "Money mindset, finance psychology, enough / simplicity",
    },
    {
      id: "work",
      num: 4,
      title: "Work that fits you",
      icon: "💼",
      tagline: "Burnout · meaning · next move",
      lenses: ["Signals you're burning out", "Stay, shift, or quit?", "Work you vs work role"],
      blinkHint: "Career change, burnout, purpose, modern work",
    },
    {
      id: "communication",
      num: 5,
      title: "Talk, boundaries, repair",
      icon: "🗣️",
      tagline: "Hard conversations · saying no",
      lenses: ["A conversation you avoid", "No without guilt", "Repair after conflict"],
      blinkHint: "Communication, boundaries, difficult conversations",
    },
    {
      id: "decisions",
      num: 6,
      title: "Decisions & regret",
      icon: "🔀",
      tagline: "Choose · second-guess · move on",
      lenses: ["Analysis paralysis", "A decision you'd redo", "Reversible vs irreversible"],
      blinkHint: "Decision-making, regret, choice overload",
    },
    {
      id: "connection",
      num: 7,
      title: "Connection & loneliness",
      icon: "🫂",
      tagline: "Friendship · quality · showing up",
      lenses: ["Loneliness vs being alone", "Adult friendship", "Small gestures that matter"],
      blinkHint: "Loneliness, relationships, connection, community",
    },
    {
      id: "confidence",
      num: 8,
      title: "Confidence & imposter feelings",
      icon: "✨",
      tagline: "Self-doubt · comparison · showing up",
      lenses: ["When you feel like a fraud", "Comparison traps", "Confidence vs competence"],
      blinkHint: "Confidence, imposter syndrome, self-worth, resilience",
    },
  ];

  function getTheme(id) {
    for (var i = 0; i < THEMES.length; i++) {
      if (THEMES[i].id === id) return THEMES[i];
    }
    return null;
  }

  global.DEEP_TALKS_STEPS = STEPS;
  global.DEEP_TALKS_THEMES = THEMES;
  global.DEEP_TALKS_getTheme = getTheme;
})(typeof window !== "undefined" ? window : globalThis);
