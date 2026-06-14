/**
 * Scroll & Speak — teen conversation club (TikTok / clip / challenge energy).
 * Content slots empty; themes guide what to search online.
 */
(function (global) {
  var STEPS = [
    {
      id: "warm-up",
      label: "Warm-up",
      short: "Разогрев",
      time: "8 min",
      teacher:
        "Быстро и весело: This or That, hands up, 10 s each. Все говорят в первые 5 min. Без оценки за «правильность».",
      slots: [
        { id: "this-or-that", title: "This or That", hint: "2–4 binary polls · show hands" },
        { id: "vibe-check", title: "Vibe check", hint: "One word · how's your week" },
      ],
    },
    {
      id: "trend",
      label: "Trend / clip",
      short: "Input",
      time: "12 min",
      teacher:
        "Короткий клип (GRWM, Blue Planet, reality moment) — max 3–5 min. Реакция, не тест. Ссылку/таймкод ты находишь заранее.",
      slots: [
        { id: "clip-link", title: "Clip or trend", hint: "URL · timecode · или описание trend" },
        { id: "watch-task", title: "While watching", hint: "«Notice one wow moment»" },
        { id: "safe-rules", title: "Room rules", hint: "No roasting people · English only bursts OK" },
      ],
    },
    {
      id: "react",
      label: "React",
      short: "Реакция",
      time: "15 min",
      teacher:
        "Pairs: 60–90 s hot reaction — shocked, unfair, cute, cringe. Partner asks ONE follow-up. Swap.",
      slots: [
        { id: "react-prompts", title: "React prompts", hint: "What hit you? · Would you post this?" },
        { id: "pair-swap", title: "Pair rotation", hint: "Every 8–10 min switch" },
      ],
    },
    {
      id: "phrases",
      label: "Phrases",
      short: "Язык",
      time: "10 min",
      teacher:
        "6–10 chunks teens actually use: It's giving… / No because… / I'm dead / That's so unfair / Lowkey… Discourse, not slang dump.",
      slots: [
        { id: "phrase-bank", title: "Phrase bank", hint: "React · agree · exaggerate · story" },
        { id: "say-it-game", title: "Say it game", hint: "Use 3 phrases in 30 s · pairs" },
      ],
    },
    {
      id: "challenge",
      label: "Challenge",
      short: "Челлендж",
      time: "20 min",
      teacher:
        "Главная игра вечера — формат reality / challenge. Tier list, confession booth, rank your week, duo mission.",
      slots: [
        { id: "main-challenge", title: "Main challenge", hint: "See theme card · one game" },
        { id: "duo-mission", title: "Duo mission (optional)", hint: "Both must complete phrase mission" },
      ],
    },
    {
      id: "speak-off",
      label: "Speak-off",
      short: "В эфир",
      time: "15 min",
      teacher:
        "30–60 s «to camera»: GRWM voiceover, nature narrator parody, or day-in-my-life. Optional phone prop, no must post online.",
      slots: [
        { id: "speak-prompt", title: "Speak-off prompt", hint: "Theme-specific · timer visible" },
        { id: "volunteer-slot", title: "Volunteers", hint: "2–3 brave · rest in pairs" },
      ],
    },
    {
      id: "wrap",
      label: "Wrap",
      short: "Итог",
      time: "5 min",
      teacher:
        "Exit: one English phrase you'd actually text a friend. Homework optional: 30 s voice note or find one clip for next time.",
      slots: [
        { id: "exit-phrase", title: "Exit phrase", hint: "Say it aloud round" },
        { id: "homework-optional", title: "Optional homework", hint: "Clip hunt · 30 s speak · no posting required" },
      ],
    },
  ];

  var THEMES = [
    {
      id: "grwm",
      num: 1,
      title: "GRWM · morning & real you",
      icon: "💄",
      tagline: "Routine · running late · what you skip",
      lenses: ["Morning person or not?", "What takes forever?", "Look vs comfort"],
      searchHints: "GRWM school morning · get ready with me teen · routine",
      challenge: "Rank your routine: S-tier / skip every time",
    },
    {
      id: "fyp",
      num: 2,
      title: "What's on your FYP",
      icon: "📱",
      tagline: "Algorithm · rabbit holes · recommend",
      lenses: ["What finds you?", "Guilty pleasure niche", "Would you show your FYP?"],
      searchHints: "FYP explained teen · algorithm tiktok · niche communities",
      challenge: "Pitch a 15s video idea to your partner",
    },
    {
      id: "challenge-week",
      num: 3,
      title: "Challenge accepted",
      icon: "⚡",
      tagline: "Try it · react · would you?",
      lenses: ["Challenge you'd never do", "One you'd try", "Why we watch others try"],
      searchHints: "viral challenge reaction · 24 hour challenge · try not to laugh clean",
      challenge: "Design a harmless 24h challenge for the group",
    },
    {
      id: "blue-planet",
      num: 4,
      title: "Blue Planet · nature drama",
      icon: "🐋",
      tagline: "Wow · unfair · narrator voice",
      lenses: ["Cutest vs scariest moment", "Nature is brutal — agree?", "Narrator voice parody"],
      searchHints: "Blue Planet best moments · nature documentary funny comment · ocean clips",
      challenge: "60s nature narrator voice · one scene",
    },
    {
      id: "reality",
      num: 5,
      title: "Reality show logic",
      icon: "🎬",
      tagline: "Villain edit · alliances · elimination",
      lenses: ["Who gets villain edit?", "Would you go on a show?", "Fake vs real drama"],
      searchHints: "reality show psychology teen friendly · competition show moments",
      challenge: "Confession booth: 30s honest · no names from school",
    },
    {
      id: "room-bag",
      num: 6,
      title: "Room · bag · phone",
      icon: "🎒",
      tagline: "What's in my… · judge kindly · priorities",
      lenses: ["3 items you'd save in a fire", "Most used app", "Room tour one corner"],
      searchHints: "what's in my bag teen · room tour aesthetic · phone screen time",
      challenge: "Describe your bag/room — partner draws or guesses",
    },
    {
      id: "group-chat",
      num: 7,
      title: "Group chat culture",
      icon: "💬",
      tagline: "Reply speed · drama · boundaries",
      lenses: ["Left on read — how do you feel?", "Voice note or text?", "When group chat goes wrong"],
      searchHints: "group chat etiquette · friendship boundaries teen",
      challenge: "Rewrite a messy message — polite but real",
    },
    {
      id: "day-in-life",
      num: 8,
      title: "Day in my life",
      icon: "🌅",
      tagline: "Story · boring vs highlight · honest",
      lenses: ["Most underrated hour of your day", "What you cut from a vlog", "Weekend vs school day"],
      searchHints: "day in my life teen · school day vlog · realistic not aesthetic",
      challenge: "60s DIML — one school day, no script",
    },
  ];

  function getTheme(id) {
    for (var i = 0; i < THEMES.length; i++) {
      if (THEMES[i].id === id) return THEMES[i];
    }
    return null;
  }

  global.SCROLL_SPEAK_STEPS = STEPS;
  global.SCROLL_SPEAK_THEMES = THEMES;
  global.SCROLL_SPEAK_getTheme = getTheme;
})(typeof window !== "undefined" ? window : globalThis);
