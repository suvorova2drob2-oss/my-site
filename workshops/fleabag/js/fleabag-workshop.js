/**
 * Fleabag Workshop — episode registry + 7-step lesson flow (content later).
 */
(function (global) {
  var STEPS = [
    {
      id: "warm-up",
      label: "Warm-up",
      short: "Разогрев",
      time: "8–10 min",
      teacher:
        "Личный заход без спойлеров. Пары — включить английский и тему эпизода (guilt, awkwardness, family…).",
      slots: [
        { id: "pair-prompt", title: "Pair prompt", hint: "2–3 вопроса · 2 min каждый" },
        { id: "content-note", title: "Content note", hint: "18+ · taboo · opt-out если нужно" },
      ],
    },
    {
      id: "scene",
      label: "Scene",
      short: "Фрагмент",
      time: "15–20 min",
      teacher:
        "2–4 ключевые сцены (таймкоды). Сначала с субтитрами → вопросы на tone & relationship, не quiz по сюжету.",
      slots: [
        { id: "clip-a", title: "Scene clip A", hint: "Видео / таймкод · placeholder" },
        { id: "clip-b", title: "Scene clip B", hint: "Опционально · второй фрагмент" },
        { id: "tone-questions", title: "Tone check", hint: "What is she not saying out loud?" },
      ],
    },
    {
      id: "harvest",
      label: "Harvest",
      short: "Фразы",
      time: "15 min",
      teacher:
        "12–18 chunks из сцен. Три корзины: discourse · emotional · Fleabag-style. Отметить tone (dry / sarcastic / vulnerable).",
      slots: [
        { id: "phrase-bank", title: "Phrase bank", hint: "Discourse · attitude · series-specific" },
        { id: "tone-tags", title: "Tone tags", hint: "Метки register / irony / understatement" },
        { id: "notice-task", title: "Notice task", hint: "«3 фразы, которые хочешь украсть»" },
      ],
    },
    {
      id: "shadow",
      label: "Shadow",
      short: "Повтор",
      time: "20–25 min",
      teacher:
        "Chorus → pairs A/B → speed ladder. Ритм и intonation, не идеальный accent. Короткие реплики + asides to camera.",
      slots: [
        { id: "lines-to-shadow", title: "Lines to shadow", hint: "3–6 коротких реплик · audio slots" },
        { id: "aside-drill", title: "Aside drill", hint: "Обращение «к камере» · 10 s" },
        { id: "record-compare", title: "Record & compare", hint: "Optional · дома или в паре" },
      ],
    },
    {
      id: "games",
      label: "Games",
      short: "Игры",
      time: "20–25 min",
      teacher:
        "1–2 коммуникативные игры. Обязательно ≥4 фразы из harvest. Debrief: rude, funny, or vulnerable?",
      slots: [
        { id: "main-game", title: "Main game", hint: "Aside swap / Too honest / Pause game…" },
        { id: "second-game", title: "Second game (optional)", hint: "Phrase auction / Rewrite the scene" },
        { id: "success-criteria", title: "Phrase checklist", hint: "Чеклист для ученика на столе" },
      ],
    },
    {
      id: "freer",
      label: "Freer",
      short: "Свободная речь",
      time: "15–20 min",
      teacher:
        "Extended turn: tell the camera / hot seat / rewrite scene in your context. Пары или круг 4–6.",
      slots: [
        { id: "freer-prompt", title: "Freer prompt", hint: "Tell the camera about a time you…" },
        { id: "pair-extension", title: "Pair extension", hint: "Partner asks one follow-up only" },
        { id: "plenary", title: "Plenary (optional)", hint: "1 volunteer · 30 s · no pressure" },
      ],
    },
    {
      id: "homework",
      label: "Homework",
      short: "Домашка",
      time: "30–40 min",
      teacher:
        "Re-watch slot · 3× shadow takes · 1 min freer (timer). Не перегружать — серию смотреть для удовольствия.",
      slots: [
        { id: "rewatch", title: "Re-watch", hint: "Тот же фрагмент · phrase tick-list" },
        { id: "shadow-hw", title: "Shadow homework", hint: "3 lines × 3 takes" },
        { id: "freer-hw", title: "Freer recording", hint: "1 min monologue · prompt on platform" },
      ],
    },
  ];

  var SESSIONS = [
    {
      id: "s01e01",
      num: 1,
      title: "Episode 1 · The guinea pig",
      icon: "🐹",
      tagline: "Fourth wall · grief · awkward honesty",
    },
    {
      id: "s01e02",
      num: 2,
      title: "Episode 2 · The rodent",
      icon: "☕",
      tagline: "Café · small talk with edge · self-sabotage",
    },
    {
      id: "s01e03",
      num: 3,
      title: "Episode 3 · The trophy",
      icon: "🏆",
      tagline: "Family dinner · resentment · performance",
    },
    {
      id: "s01e04",
      num: 4,
      title: "Episode 4 · The funeral",
      icon: "🕯️",
      tagline: "Grief · deflection · inappropriate humour",
    },
    {
      id: "s01e05",
      num: 5,
      title: "Episode 5 · The fox",
      icon: "🦊",
      tagline: "Desire · guilt · confession",
    },
    {
      id: "s01e06",
      num: 6,
      title: "Episode 6 · The finale",
      icon: "🎭",
      tagline: "Rare sincerity · contrast with irony",
    },
  ];

  function getSession(id) {
    for (var i = 0; i < SESSIONS.length; i++) {
      if (SESSIONS[i].id === id) return SESSIONS[i];
    }
    return null;
  }

  global.FLEABAG_WORKSHOP_STEPS = STEPS;
  global.FLEABAG_WORKSHOP_SESSIONS = SESSIONS;
  global.FLEABAG_WORKSHOP_getSession = getSession;
})(typeof window !== "undefined" ? window : globalThis);
