/**
 * B2 Summer Intensive — theme registry (content slots filled later).
 */
(function (global) {
  var STEPS = [
    {
      id: "warm-up",
      label: "Warm-up",
      short: "Разогрев",
      time: "5–10 min",
      teacher:
        "Личный заход в тему. Пары, без новой лексики — только включить английский.",
      slots: [
        { id: "pair-prompt", title: "Pair prompt", hint: "Вопрос для пар · 2 мин каждый" },
        { id: "optional-hook", title: "Optional hook", hint: "Картинка / быстрый опрос класса" },
      ],
    },
    {
      id: "input",
      label: "Input",
      short: "Материал",
      time: "25–30 min",
      teacher:
        "Listening + reading на одну тему. Задача — услышать/увидеть язык, не «сдать тест».",
      slots: [
        { id: "listening", title: "Listening", hint: "Аудио · задание · ключ (позже)" },
        { id: "reading", title: "Reading", hint: "Текст · 2–3 вопроса на понимание" },
        { id: "comprehension", title: "Quick check", hint: "1–2 контрольных вопроса после input" },
      ],
    },
    {
      id: "harvest",
      label: "Harvest",
      short: "Фразы",
      time: "15 min",
      teacher:
        "10–14 chunks только из текстов. Записать на доску / в общий phrase bank.",
      slots: [
        { id: "phrase-bank", title: "Phrase bank", hint: "12–16 коллокаций · пустые карточки" },
        { id: "notice-task", title: "Notice task", hint: "«Найди 3 фразы, которые хочешь украсть»" },
      ],
    },
    {
      id: "controlled",
      label: "Controlled",
      short: "Отработка",
      time: "20–25 min",
      teacher:
        "Echo → substitution → micro-bursts. Пары, один и тот же каркас — новые слова.",
      slots: [
        { id: "echo", title: "Echo / shadow", hint: "2–3 реплики из аудио" },
        { id: "substitution", title: "Substitution drill", hint: "Шаблон + подстановки" },
        { id: "micro", title: "Micro speaking", hint: "15 s · целевая фраза в своём предложении" },
      ],
    },
    {
      id: "freer",
      label: "Freer practice",
      short: "Свободная речь",
      time: "25–30 min",
      teacher:
        "Главная коммуникативная задача: roleplay или problem-solving. Минимум 4 фразы из harvest.",
      slots: [
        { id: "main-task", title: "Main task", hint: "Role cards / scenario · пары или тройки" },
        { id: "rotation", title: "Pair rotation", hint: "Смена партнёра · второй раунд" },
        { id: "success-criteria", title: "Success criteria", hint: "Чеклист для ученика" },
      ],
    },
    {
      id: "wrap",
      label: "Wrap",
      short: "Итог",
      time: "5 min",
      teacher:
        "1 фраза дня от каждого + домашка (micro / freer / повтор аудио).",
      slots: [
        { id: "reflection", title: "Reflection", hint: "«One phrase I used today»" },
        { id: "homework", title: "Homework", hint: "20–30 min · ссылка на micro/freer" },
        { id: "next-preview", title: "Next lesson", hint: "Тизер следующей темы" },
      ],
    },
  ];

  var THEMES = [
    { id: "digital-detox", num: 1, title: "Digital Detox", icon: "📵", tagline: "Телефоны · экраны · внимание · зависимость" },
    { id: "eating-out", num: 2, title: "Eating Out", icon: "🍽️", tagline: "Мнение · жалоба · рекомендация · вкус" },
    { id: "where-we-come-from", num: 3, title: "Where We Come From", icon: "🏫", tagline: "Школа · правила · воспитание · детство" },
    { id: "people-relationships", num: 4, title: "People & Relationships", icon: "🤝", tagline: "Дружба · конфликт · доверие · сёстры" },
    { id: "truth-about-lying", num: 5, title: "The Truth About Lying", icon: "🎭", tagline: "Белая ложь · crime · истории · ghost walk" },
    { id: "game-on", num: 6, title: "Game On", icon: "💪", tagline: "Спорт · коучинг · мотивация · бизнес" },
    { id: "this-is-home", num: 7, title: "This Is Home", icon: "🌍", tagline: "Экология · среда · будущее · полюбишь" },
    { id: "showcase", num: 8, title: "Showcase · speaking marathon", icon: "🎤", tagline: "Итог · говоришь по всем темам · финал курса" },
  ];

  function getTheme(id) {
    for (var i = 0; i < THEMES.length; i++) {
      if (THEMES[i].id === id) return THEMES[i];
    }
    return null;
  }

  global.B2_INTENSIVE_STEPS = STEPS;
  global.B2_INTENSIVE_THEMES = THEMES;
  global.B2_INTENSIVE_getTheme = getTheme;
})(typeof window !== "undefined" ? window : globalThis);
