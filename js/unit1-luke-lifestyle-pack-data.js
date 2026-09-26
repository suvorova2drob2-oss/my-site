/**
 * Unit 1 · Luke lifestyle pack (Making a positive change).
 * Shared by Phrases drawer + vocabulary / UoE pages.
 */
(function (W) {
  "use strict";

  var PHRASES = [
    {
      en: "Easier said than done",
      ru: "Проще сказать, чем сделать.",
      context: "But it’s easier said than done, isn’t it?",
      tip: "Идеальная фраза для описания любых трудностей."
    },
    {
      en: "Put your feet up",
      ru: "Отдохнуть, расслабиться (буквально: закинуть ноги повыше).",
      context: "…it signals a time to put your feet up…",
      tip: "Так говорят, когда человек наконец-то может сесть на диван после тяжёлого дня и ничего не делать."
    },
    {
      en: "Switch off",
      ru: "Отключиться, перестать думать о работе.",
      context: "…put your feet up and switch off.",
      tip: "Идёт в связке с put your feet up. Ментальный отдых: вы «выключаете» мозг из рабочего режима."
    },
    {
      en: "Run out of patience",
      ru: "Потерять терпение / терпение лопается.",
      context: "…or she’ll run out of patience!",
      tip: "Отличный оборот для описания дедлайна в чьём-то терпении."
    },
    {
      group: "💼 О работе и образе жизни",
      en: "For as long as I can remember",
      ru: "Сколько я себя помню / сколько мне помнится.",
      context: "I’ve wanted to make improvements to my life for as long as I can remember.",
      tip: "Когда хотите подчеркнуть, что желание или привычка были с вами всегда."
    },
    {
      group: "💼 О работе и образе жизни",
      en: "Get rid of bad habits",
      ru: "Избавиться от вредных привычек.",
      context: "It’s just getting rid of bad habits that I have come to accept in my life as normal.",
      tip: "Классическое выражение для темы саморазвития."
    },
    {
      group: "💼 О работе и образе жизни",
      en: "A direct result of…",
      ru: "Прямое следствие / прямой результат чего-либо.",
      context: "This is a direct result of running my own real estate agency.",
      tip: "Связка для причинно-следственных связей (в тексте: трудоголизм как следствие владения бизнесом)."
    },
    {
      group: "💼 О работе и образе жизни",
      en: "Tied to my phone",
      ru: "Привязан к телефону.",
      context: "I’m not exactly tied to my phone…",
      tip: "Образное выражение для человека, который не выпускает смартфон из рук из-за работы."
    },
    {
      group: "💼 О работе и образе жизни",
      en: "Rare occurrence",
      ru: "Редкое явление / редкость.",
      context: "With me, this is a rare occurrence.",
      tip: "Альтернатива слову rarely."
    },
    {
      group: "✈️ О жизни и решениях",
      en: "Take a year out",
      ru: "Взять год перерыва (саббатикал).",
      context: "My wife wants us to take a year out and just see the world.",
      tip: "Пауза в учёбе или работе (gap year), чтобы попутешествовать или пожить для себя."
    },
    {
      group: "✈️ О жизни и решениях",
      en: "Make up my mind",
      ru: "Принять решение / определиться / решиться.",
      context: "I can’t make up my mind at the moment…",
      tip: "Популярная замена глаголу decide."
    }
  ];

  var PHRASES_SOPHIA = [
    {
      group: "\uD83E\uDDE0 \u041e \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0435 \u0438 \u043f\u0440\u0438\u0432\u044b\u0447\u043a\u0430\u0445",
      en: "A creature of habit",
      ru: "\u0427\u0435\u043b\u043e\u0432\u0435\u043a \u043f\u0440\u0438\u0432\u044b\u0447\u043a\u0438.",
      context:
        "I used to stick to the same thing and was very much a creature of habit.",
      tip: "\u041f\u0440\u0435\u043a\u0440\u0430\u0441\u043d\u0430\u044f \u0438\u0434\u0438\u043e\u043c\u0430 \u0434\u043b\u044f \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0435 \u043b\u044e\u0431\u0438\u0442 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u044b, \u0434\u0435\u043b\u0430\u0435\u0442 \u0432\u0441\u0451 \u043f\u043e \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044e \u0438 \u0445\u043e\u0434\u0438\u0442 \u043e\u0434\u043d\u0438\u043c\u0438 \u0438 \u0442\u0435\u043c\u0438 \u0436\u0435 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430\u043c\u0438."
    },
    {
      group: "\uD83E\uDDE0 \u041e \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0435 \u0438 \u043f\u0440\u0438\u0432\u044b\u0447\u043a\u0430\u0445",
      en: "Stick to the same thing",
      ru: "\u041f\u0440\u0438\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u043e\u0434\u043d\u043e\u0433\u043e \u0438 \u0442\u043e\u0433\u043e \u0436\u0435 / \u043d\u0435 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0441\u0432\u043e\u0438\u043c \u043f\u0440\u0438\u0432\u044b\u0447\u043a\u0430\u043c.",
      context: "I used to stick to the same thing and was very much a creature of habit.",
      tip: "\u0427\u0430\u0441\u0442\u043e \u0432 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0435 \u043f\u043b\u0430\u043d\u043e\u0432, \u0434\u0438\u0435\u0442, \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043e\u043a \u0438\u043b\u0438 \u0441\u0442\u0438\u043b\u044f \u0436\u0438\u0437\u043d\u0438."
    },
    {
      group: "\u26a1\ufe0f \u041e\u0431 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0438 \u043a \u0436\u0438\u0437\u043d\u0438 \u0438 \u043d\u043e\u0432\u043e\u043c\u0443 \u043e\u043f\u044b\u0442\u0443",
      en: "Not a great deal to complain about",
      ru: "\u0413\u0440\u0435\u0445 \u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c / \u043e\u0441\u043e\u0431\u043e \u043d\u0435 \u043d\u0430 \u0447\u0442\u043e \u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c\u0441\u044f.",
      context:
        "I really don\u2019t have a great deal to complain about when it comes to the way I live my life.",
      tip: "\u0412\u043c\u0435\u0441\u0442\u043e \u0441\u0443\u0445\u043e\u0433\u043e \u00abMy life is good\u00bb \u2014 \u0436\u0438\u0432\u0430\u044f \u0440\u0435\u0447\u044c \u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044f."
    },
    {
      group: "\u26a1\ufe0f \u041e\u0431 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0438 \u043a \u0436\u0438\u0437\u043d\u0438 \u0438 \u043d\u043e\u0432\u043e\u043c\u0443 \u043e\u043f\u044b\u0442\u0443",
      en: "Spend countless hours",
      ru: "\u041f\u0440\u043e\u0432\u043e\u0434\u0438\u0442\u044c \u0431\u0435\u0441\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0447\u0430\u0441\u043e\u0432.",
      context:
        "This isn\u2019t to say I don\u2019t spend countless hours trying to improve it, though.",
      tip: "\u0413\u0438\u043f\u0435\u0440\u0431\u043e\u043b\u0430: \u043d\u0430 \u0447\u0442\u043e-\u0442\u043e \u0443\u0445\u043e\u0434\u0438\u0442 \u0443\u0439\u043c\u0430 \u0432\u0440\u0435\u043c\u0435\u043d\u0438."
    },
    {
      group: "\u26a1\ufe0f \u041e\u0431 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0438 \u043a \u0436\u0438\u0437\u043d\u0438 \u0438 \u043d\u043e\u0432\u043e\u043c\u0443 \u043e\u043f\u044b\u0442\u0443",
      en: "Far more adventurous",
      ru: "\u0413\u043e\u0440\u0430\u0437\u0434\u043e \u0431\u043e\u043b\u0435\u0435 \u0441\u043c\u0435\u043b\u044b\u0439 / \u0441\u043a\u043b\u043e\u043d\u043d\u044b\u0439 \u043a \u0430\u0432\u0430\u043d\u0442\u044e\u0440\u0430\u043c.",
      context: "These days, I\u2019m far more adventurous.",
      tip: "\u0423\u0445\u043e\u0434 \u043e\u0442 \u043f\u0440\u043e\u0441\u0442\u043e\u0433\u043e brave: \u044d\u043a\u0437\u043e\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0435\u0434\u0430, \u043d\u043e\u0432\u044b\u0439 \u0441\u043f\u043e\u0440\u0442, \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044f."
    },
    {
      group: "\u26a1\ufe0f \u041e\u0431 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0438 \u043a \u0436\u0438\u0437\u043d\u0438 \u0438 \u043d\u043e\u0432\u043e\u043c\u0443 \u043e\u043f\u044b\u0442\u0443",
      en: "Anything random like that",
      ru: "\u0427\u0442\u043e-\u0442\u043e \u0432 \u044d\u0442\u043e\u043c \u0440\u043e\u0434\u0435 / \u0432\u0441\u044f\u043a\u0438\u0435 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0435 \u0448\u0442\u0443\u043a\u0438.",
      context:
        "\u2026a course in skiing or scuba diving or anything random like that.",
      tip: "\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440\u043d\u044b\u0439 \u043c\u0430\u0440\u043a\u0435\u0440: \u043e\u0431\u043e\u0431\u0449\u0438\u0442\u044c \u043f\u043e\u0445\u043e\u0436\u0438\u0435 \u0432\u0435\u0449\u0438 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435."
    },
    {
      group: "\uD83D\uDCB0 \u041e \u0434\u0435\u043d\u044c\u0433\u0430\u0445 \u0438 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u043d\u043e\u0441\u0442\u0438",
      en: "Won\u2019t have the cash",
      ru: "\u041d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0434\u0435\u043d\u0435\u0433 / \u043d\u0435 \u043e\u043a\u0430\u0436\u0435\u0442\u0441\u044f \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u044b\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432.",
      context: "\u2026or simply won\u2019t have the cash and I\u2019ll get my running kit on again.",
      tip: "\u0420\u0430\u0437\u0433\u043e\u0432\u043e\u0440\u043d\u044b\u0439 \u0441\u0438\u043d\u043e\u043d\u0438\u043c \u043a not to have enough money."
    },
    {
      group: "\uD83D\uDCB0 \u041e \u0434\u0435\u043d\u044c\u0433\u0430\u0445 \u0438 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u043d\u043e\u0441\u0442\u0438",
      en: "It\u2019s just a case of (doing something)",
      ru: "\u042d\u0442\u043e \u0432\u0441\u0435\u0433\u043e \u043b\u0438\u0448\u044c \u0432\u043e\u043f\u0440\u043e\u0441 (\u0447\u0435\u0433\u043e-\u0442\u043e) / \u0432\u0441\u0451 \u0441\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u043a \u0442\u043e\u043c\u0443, \u0447\u0442\u043e\u0431\u044b\u2026",
      context: "\u2026it\u2019s just a case of putting on some trainers.",
      tip: "\u041a\u043e\u0433\u0434\u0430 \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u0434\u0447\u0451\u0440\u043a\u043d\u0443\u0442\u044c \u043f\u0440\u043e\u0441\u0442\u043e\u0442\u0443 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f (\u043d\u0430\u0434\u0435\u043b \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438 \u2014 \u0438 \u043f\u043e\u0431\u0435\u0436\u0430\u043b)."
    }
  ];

  var SPEAKING = {
    groups: [
      {
        title: "О работе, привычках и балансе",
        kicker: "Work-Life Balance",
        questions: [
          "Do you tend to work (or study) long hours? What is this a direct result of?",
          "Do you have any bad habits you would like to get rid of? Is it easier said than done?",
          "Are you tied to your phone during weekends? Can you ignore it if you get a work-related message, or does it require your immediate attention?",
          "What helps you to put your feet up and switch off after a stressful day? Is it a rare occurrence for you?"
        ]
      },
      {
        title: "О решениях и планах на жизнь",
        kicker: "Life Choices",
        questions: [
          "Have you ever wanted to take a year out and just see the world? If you had the finances to do it, where would you go first?",
          "Are you good at making decisions, or do you usually struggle to make up your mind?",
          "What is something you have wanted to change in your life for as long as you can remember?",
          "What can make you run out of patience very quickly?"
        ]
      }
    ]
  };

  var SPEAKING_SOPHIA = {
    groups: [
      {
        title: "\u041e \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0435 \u0438 \u043f\u0440\u0438\u0432\u044b\u0447\u043a\u0430\u0445",
        kicker: "Habits & Daily Routine",
        questions: [
          "Would you describe yourself as a creature of habit, or do you change your routine often?",
          "Is it easy for you to stick to the same thing (like a diet, a workout plan, or a hobby) for a long time, or do you get bored quickly?"
        ]
      },
      {
        title: "\u041e\u0431 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0438 \u043a \u0436\u0438\u0437\u043d\u0438 \u0438 \u043d\u043e\u0432\u043e\u043c\u0443 \u043e\u043f\u044b\u0442\u0443",
        kicker: "Life Attitude & New Experiences",
        questions: [
          "Looking at your life right now, can you say that you do not have a great deal to complain about? Why?",
          "What is an activity or a hobby on which you spend countless hours without even noticing the time?",
          "Would you say you have become far more adventurous as you\u2019ve grown older, or were you more daring in your childhood?",
          "Have you ever tried any extreme sports like skiing, scuba diving, or anything random like that?"
        ]
      },
      {
        title: "\u041e \u0434\u0435\u043d\u044c\u0433\u0430\u0445 \u0438 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u043d\u043e\u0441\u0442\u0438",
        kicker: "Finances & Simplicity",
        questions: [
          "If you want to try a new hobby but suddenly realize you won\u2019t have the cash for it, what will you do instead?",
          "For you, is staying healthy and active complicated, or is it just a case of making simple daily choices?"
        ]
      }
    ]
  };

  var EXERCISES = [
    {
      prompt:
        "Running a marathon without any training sounds simple to some, but actually doing it is...",
      choices: [
        { id: "A", text: "a piece of cake" },
        { id: "B", text: "easier said than done" },
        { id: "C", text: "under the weather" },
        { id: "D", text: "cost an arm and a leg" }
      ],
      answer: "B",
      hint: "Проще сказать, чем сделать."
    },
    {
      prompt:
        "After working hard for twelve hours straight, Mark finally went home to...",
      choices: [
        { id: "A", text: "switch off" },
        { id: "B", text: "break the ice" },
        { id: "C", text: "put his feet up" },
        { id: "D", text: "call it a day" }
      ],
      answer: "C",
      hint: "Отдохнуть, расслабиться — сесть и ничего не делать (Mark → his)."
    },
    {
      prompt:
        "Even when he was on holiday, Jim found it hard to ______ from work and stop checking his emails.",
      choices: [
        { id: "A", text: "put his feet up" },
        { id: "B", text: "call it a day" },
        { id: "C", text: "switch off" },
        { id: "D", text: "make up his mind" }
      ],
      answer: "C",
      hint: "Отключиться от работы, перестать о ней думать."
    },
    {
      prompt:
        "Sarah spent an hour staring at the menu before she could finally ______ which dessert to order.",
      choices: [
        { id: "A", text: "break the ice" },
        { id: "B", text: "make up her mind" },
        { id: "C", text: "face the music" },
        { id: "D", text: "switch off" }
      ],
      answer: "B",
      hint: "Принять решение, определиться."
    },
    {
      prompt:
        "We have been working on this project for ten hours now. Let's ______ and go home.",
      choices: [
        { id: "A", text: "call it a day" },
        { id: "B", text: "cost an arm and a leg" },
        { id: "C", text: "put our feet up" },
        { id: "D", text: "face the music" }
      ],
      answer: "A",
      hint: "Закончить на сегодня."
    },
    {
      prompt:
        "After waiting in a long queue for nearly an hour, Maya was starting to ______.",
      choices: [
        { id: "A", text: "take a year out" },
        { id: "B", text: "run out of patience" },
        { id: "C", text: "put her feet up" },
        { id: "D", text: "break the ice" }
      ],
      answer: "B",
      hint: "Потерять терпение / терпение лопается."
    },
    {
      prompt: "Ben has wanted to see Japan ______.",
      choices: [
        { id: "A", text: "for as long as he can remember" },
        { id: "B", text: "a direct result of work" },
        { id: "C", text: "easier said than done" },
        { id: "D", text: "under the weather" }
      ],
      answer: "A",
      hint: "Сколько он себя помнит."
    },
    {
      prompt:
        "I check my messages in the middle of the night. I know I should ______, but it's easier said than done.",
      choices: [
        { id: "A", text: "get rid of that bad habit" },
        { id: "B", text: "call it a day" },
        { id: "C", text: "face the music" },
        { id: "D", text: "cost an arm and a leg" }
      ],
      answer: "A",
      hint: "Избавиться от вредной привычки."
    },
    {
      prompt: "Long hours at the office are ______ running his own agency.",
      choices: [
        { id: "A", text: "tied to" },
        { id: "B", text: "a direct result of" },
        { id: "C", text: "a rare occurrence for" },
        { id: "D", text: "a piece of cake for" }
      ],
      answer: "B",
      hint: "Прямое следствие / прямой результат."
    },
    {
      prompt:
        "Even at the weekend he feels ______ — a client might call at any moment.",
      choices: [
        { id: "A", text: "tied to his phone" },
        { id: "B", text: "under the weather" },
        { id: "C", text: "a piece of cake" },
        { id: "D", text: "out like a light" }
      ],
      answer: "A",
      hint: "Привязан к телефону."
    },
    {
      prompt: "A whole evening with nothing to do is ______ for Luke.",
      choices: [
        { id: "A", text: "a rare occurrence" },
        { id: "B", text: "a direct result" },
        { id: "C", text: "a piece of cake" },
        { id: "D", text: "a year out" }
      ],
      answer: "A",
      hint: "Редкое явление / редкость."
    },
    {
      prompt: "When she finished school, she decided to ______ and travel.",
      choices: [
        { id: "A", text: "take a year out" },
        { id: "B", text: "run out of patience" },
        { id: "C", text: "switch off from" },
        { id: "D", text: "make up a habit" }
      ],
      answer: "A",
      hint: "Взять год перерыва (саббатикал)."
    }
  ];

  var GAPS = {
        title: "Fill in the gaps with the phrases from the box",
        note: "Измените форму глаголов, где это необходимо",
        bank: [
          "easier said than done",
          "put your feet up",
          "switch off",
          "run out of patience",
          "make up one's mind",
          "a direct result of",
          "get rid of",
          "for as long as I can remember"
        ],
        items: [
          {
            before: "I've been playing the piano",
            after: "— since I was 5 years old.",
            answers: ["for as long as I can remember"]
          },
          {
            before: "I need to",
            after: "bad habits like drinking too much coffee.",
            answers: ["get rid of"]
          },
          {
            before: "Losing weight is",
            after: ", because healthy food can be expensive and workouts take time.",
            answers: ["easier said than done"]
          },
          {
            before: "Her success in the exam was",
            after: "her hard work all semester.",
            answers: ["a direct result of"]
          },
          {
            before: "On Friday evening, I love to",
            after: "on the sofa and watch a good movie.",
            answers: ["put my feet up"]
          },
          {
            before: "It's hard to",
            after: "after a long day at the office; my brain keeps thinking about work.",
            answers: ["switch off"]
          },
          {
            before: "If we change the plan one more time, the client will",
            after: ".",
            answers: ["run out of patience"]
          },
          {
            before: "She spent ten minutes at the counter and still could not",
            after: "which cake to buy.",
            answers: ["make up her mind", "make up one's mind"]
          }
        ]
  };

  var ROLEPLAY = {
        title: "Time for a Change?",
        characters: [
          {
            id: "mark",
            name: "Mark",
            blurb: "A stressed real estate agency owner."
          },
          {
            id: "sarah",
            name: "Sarah",
            blurb: "His wife, who is tired of his endless work hours."
          }
        ],
        highlights: [
          "for as long as I can remember",
          "easier said than done",
          "a direct result of",
          "running out of patience",
          "get rid of these bad habits",
          "tied to my phone",
          "make up your mind",
          "take a year out",
          "put your feet up",
          "switch off"
        ],
        lines: [
          {
            who: "sarah",
            text: "Mark, please put your phone down for a second. We need to talk about our future. I’m running out of patience!"
          },
          {
            who: "mark",
            text: "I’m sorry, honey. I’m not exactly tied to my phone, but it’s my responsibility if something goes wrong at the agency."
          },
          {
            who: "sarah",
            text: "You’ve been saying that for as long as I can remember! Your stress is a direct result of working long hours every single weekend. You need to learn to switch off."
          },
          {
            who: "mark",
            text: "It's easier said than done, Sarah. I really want to get rid of these bad habits, but if I don’t solve the problems, who will?"
          },
          {
            who: "sarah",
            text: "That’s why we need to take a year out and just see the world. We have the finances to do it. You just need to make up your mind."
          },
          {
            who: "mark",
            text: "A whole year? Wow... I guess I really need to think about it."
          },
          {
            who: "sarah",
            text: "Just promise me that at least this evening you will put your feet up and forget about work. No emails, okay?"
          },
          {
            who: "mark",
            text: "Deal. Let's do that."
          }
        ]
  };

  var ROLEPLAY_SOPHIA = {
    title: "Winter scuba & skiing camp?",
    characters: [
      {
        id: "sophia",
        name: "Sophia",
        blurb:
          "An adventurous girl who loves trying new sports and activities."
      },
      {
        id: "alex",
        name: "Alex",
        blurb:
          "Her boyfriend, who is a bit more conservative about changes and budget."
      }
    ],
    highlights: [
      "do not have a great deal to complain about",
      "have a beneficial effect on",
      "get great pleasure from",
      "spend countless hours",
      "undertake a project",
      "a creature of habit",
      "stick to the same thing",
      "far more adventurous",
      "random like that",
      "won\u2019t have the cash",
      "just a case of",
      "lifestyle change",
      "keen for us"
    ],
    lines: [
      {
        who: "sophia",
        text:
          "Alex, look at this! There\u2019s a winter scuba diving and skiing camp next month. We should absolutely go!"
      },
      {
        who: "alex",
        text:
          "Scuba diving in winter? Sophia, you know I\u2019m a creature of habit. I prefer to stick to the same thing \u2014 like our usual gym routine."
      },
      {
        who: "sophia",
        text:
          "Come on! To be honest, we do not have a great deal to complain about in our lives, but we need some excitement. I want us to be far more adventurous!"
      },
      {
        who: "alex",
        text:
          "But we already spend countless hours training every week. Besides, if we sign up for skiing, diving, or anything random like that, we won\u2019t have the cash for our summer trip."
      },
      {
        who: "sophia",
        text:
          "Don\u2019t worry about money, we can manage. It\u2019s just a case of planning our budget better. I get great pleasure from trying new things with you."
      },
      {
        who: "alex",
        text:
          "I don\u2019t know, Sophia... Organizing all of this feels like we are trying to undertake a project, not just go on vacation."
      },
      {
        who: "sophia",
        text:
          "Trust me, it will have a beneficial effect on our relationship. It\u2019s a great lifestyle change!"
      },
      {
        who: "alex",
        text:
          "Alright, alright. I see you are really keen for us to do this. Let\u2019s look at the details."
      }
    ]
  };

  var KEYWORD = {
        variants: [
          {
            kicker: "Variant 1",
            title: "Key word transformation",
            note: "Rewrite the sentence so it keeps the meaning. Use the key word. Do not change its form.",
            items: [
              {
                sentence: "It's not easy to stop thinking about work on weekends.",
                key: "SWITCH",
                answers: ["It's not easy to switch off on weekends."]
              },
              {
                sentence: "I think starting a diet is much harder than it sounds.",
                key: "DONE",
                answers: ["I think starting a diet is easier said than done."]
              },
              {
                sentence: "Deciding which car to buy took Sarah a whole week.",
                key: "MIND",
                answers: [
                  "It took Sarah a whole week to make up her mind about which car to buy."
                ]
              },
              {
                sentence: "He became a workaholic because he started his own business.",
                key: "RESULT",
                answers: [
                  "His long work hours were a direct result of starting his own business."
                ]
              }
            ]
          },
          {
            kicker: "Variant 2",
            title: "Say the opposite",
            note: "Paraphrase the sentence with an opposite idea. Add or remove a negative so the meaning stays the same.",
            items: [
              {
                sentence: "Winning this game will not be a piece of cake.",
                answers: [
                  "Winning this game will be easier said than done.",
                  "Winning this game will be a tough nut to crack."
                ]
              },
              {
                sentence: "I've been busy all day, but now I can finally relax on the sofa.",
                answers: [
                  "I've been busy all day, but now I can finally put my feet up.",
                  "I have been busy all day, but now I can finally put my feet up."
                ]
              },
              {
                sentence: "He was very indecisive when he had to choose a university.",
                answers: [
                  "He struggled to make up his mind when choosing a university."
                ]
              },
              {
                sentence: "It's important to stay focused and on high alert during the crisis.",
                answers: [
                  "It's impossible to switch off during the crisis.",
                  "It is impossible to switch off during the crisis."
                ]
              }
            ]
          },
          {
            kicker: "Variant 3",
            title: "Speed paraphrasing",
            note: "Warm-up. You hear a plain line. Upgrade it at once so it sounds more idiomatic.",
            promptLabel: "You say",
            answerLabel: "Student says",
            items: [
              {
                sentence: "I want to stop this bad habit.",
                answers: ["I want to get rid of this bad habit."]
              },
              {
                sentence: "I can't decide.",
                answers: ["I can't make up my mind.", "I cannot make up my mind."]
              },
              {
                sentence: "I have wanted this since my childhood.",
                answers: [
                  "I've wanted this for as long as I can remember.",
                  "I have wanted this for as long as I can remember."
                ]
              }
            ]
          }
        ]
  };

  var EXERCISES_SOPHIA = [
    {
      prompt:
        "I wanted to start a photography course, but I realized I simply ____________ for the expensive equipment.",
      choices: [
        { id: "A", text: "am keen for" },
        { id: "B", text: "won\u2019t have the cash" },
        { id: "C", text: "undertake a project" }
      ],
      answer: "B",
      hint: "\u041d\u0435 \u043e\u043a\u0430\u0436\u0435\u0442\u0441\u044f \u0434\u0435\u043d\u0435\u0433 \u043d\u0430 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435."
    },
    {
      prompt:
        "Getting enough sleep every night will definitely ____________ your focus and productivity.",
      choices: [
        { id: "A", text: "lead to a positive outcome" },
        { id: "B", text: "have a beneficial effect on" },
        { id: "C", text: "stick to the same thing" }
      ],
      answer: "B",
      hint: "\u041e\u043a\u0430\u0436\u0435\u0442 \u0431\u043b\u0430\u0433\u043e\u0442\u0432\u043e\u0440\u043d\u043e\u0435 \u0432\u043b\u0438\u044f\u043d\u0438\u0435 \u043d\u0430\u2026"
    },
    {
      prompt:
        "My parents are ____________ me to find a stable job, but I want to travel first.",
      choices: [
        { id: "A", text: "keen for" },
        { id: "B", text: "a creature of habit" },
        { id: "C", text: "random like that" }
      ],
      answer: "A",
      hint: "Keen for me to\u2026 \u2014 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u0438 \u043d\u0430\u0441\u0442\u0430\u0438\u0432\u0430\u044e\u0442."
    }
  ];

  var GAPS_SOPHIA = {
    title: "Fill in the gaps with the phrases from the box",
    note: "\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0438 \u0441\u043b\u043e\u0432\u0430\u043c\u0438 \u0438\u0437 \u0440\u0430\u043c\u043a\u0438 (\u0438\u0437\u043c\u0435\u043d\u0438\u0442\u0435 \u0444\u043e\u0440\u043c\u0443 \u0433\u043b\u0430\u0433\u043e\u043b\u043e\u0432, \u0435\u0441\u043b\u0438 \u043d\u0443\u0436\u043d\u043e).",
    bank: [
      "undertake a project",
      "a creature of habit",
      "get great pleasure from",
      "spend countless hours",
      "a lifestyle change"
    ],
    items: [
      {
        before: "John is",
        after: "; he always wakes up at exactly 6:00 AM and eats the same breakfast.",
        answers: ["a creature of habit"]
      },
      {
        before: "Moving to the countryside was a massive",
        after: " for their family.",
        answers: ["lifestyle change", "a lifestyle change"]
      },
      {
        before: "Our company decided to",
        after: " to build a new eco-friendly office.",
        answers: ["undertake a project"]
      },
      {
        before: "She",
        after: " playing video games with her friends on weekends.",
        answers: ["gets great pleasure from", "get great pleasure from"]
      },
      {
        before: "I",
        after: " researching my family history last year.",
        answers: ["spent countless hours", "spend countless hours"]
      }
    ]
  };

  var KWT_TASKS_SOPHIA = [
    {
      first: "Hard work usually results in success.",
      keyword: "LEAD",
      before: "Hard work usually ",
      after: " a positive outcome.",
      accept: ["leads to", "can lead to"],
      revealGap: "LEADS to",
      fullSecond: "Hard work usually leads to a positive outcome."
    },
    {
      first: "Lack of money made them stop their journey.",
      keyword: "FORCE",
      before: "A lack of money ",
      after: " give up their journey.",
      accept: ["forced them to"],
      revealGap: "FORCED them to",
      fullSecond: "A lack of money forced them to give up their journey."
    },
    {
      first: "Losing weight is easy\u2014you just need to eat less fast food.",
      keyword: "CASE",
      before: "Losing weight is easy\u2014it\u2019s ",
      after: " eating less fast food.",
      accept: ["just a case of"],
      revealGap: "just a CASE of",
      fullSecond: "Losing weight is easy\u2014it\u2019s just a case of eating less fast food."
    }
  ];

  var PARAPHRASE_SOPHIA = {
    variants: [
      {
        kicker: "Antonyms",
        title: "Opposite meaning",
        note:
          "Paraphrase using the opposite idea and a negative where needed so the logic stays the same.",
        promptLabel: "Original",
        answerLabel: "Model paraphrase",
        items: [
          {
            sentence: "He was never brave or open to new experiences.",
            answers: ["He wasn't far more adventurous back then."]
          },
          {
            sentence: "My current job is terrible and I have so many problems.",
            answers: [
              "I do not have a great deal to complain about in my new job.",
              "I don't have a great deal to complain about in my new job."
            ]
          },
          {
            sentence: "She always changes her mind and hates doing the same thing.",
            answers: ["She doesn't like to stick to the same thing."]
          }
        ]
      }
    ]
  };

  var KWT_TASKS = [
    {
      first: "It\u2019s not easy to stop thinking about work on weekends.",
      keyword: "SWITCH",
      before: "It\u2019s not easy to ",
      after: " on weekends.",
      accept: ["switch off"],
      revealGap: "switch OFF",
      fullSecond: "It\u2019s not easy to switch off on weekends."
    },
    {
      first: "I think starting a diet is much harder than it sounds.",
      keyword: "DONE",
      before: "I think starting a diet is easier said than ",
      after: ".",
      accept: ["done"],
      revealGap: "easier said than DONE",
      fullSecond: "I think starting a diet is easier said than done."
    },
    {
      first: "Deciding which car to buy took Sarah a whole week.",
      keyword: "MIND",
      before: "It took Sarah a whole week to make up her ",
      after: " about which car to buy.",
      accept: ["mind"],
      revealGap: "make up her MIND",
      fullSecond:
        "It took Sarah a whole week to make up her mind about which car to buy."
    },
    {
      first: "He became a workaholic because he started his own business.",
      keyword: "RESULT",
      before: "His long work hours were a direct ",
      after: " starting his own business.",
      accept: ["result of"],
      revealGap: "direct RESULT of",
      fullSecond:
        "His long work hours were a direct result of starting his own business."
    }
  ];

  W.U1_LUKE_LIFESTYLE_PACK = {
    phrases: PHRASES,
    phrasesSophia: PHRASES_SOPHIA,
    speaking: SPEAKING,
    speakingSophia: SPEAKING_SOPHIA,
    exercises: EXERCISES,
    exercisesSophia: EXERCISES_SOPHIA,
    gaps: GAPS,
    gapsSophia: GAPS_SOPHIA,
    roleplay: ROLEPLAY,
    roleplaySophia: ROLEPLAY_SOPHIA,
    keyword: KEYWORD,
    kwtTasks: KWT_TASKS,
    kwtTasksSophia: KWT_TASKS_SOPHIA,
    paraphraseSophia: PARAPHRASE_SOPHIA
  };
})(typeof window !== "undefined" ? window : globalThis);
