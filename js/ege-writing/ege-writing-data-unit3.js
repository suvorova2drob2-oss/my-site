(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack || !Array.isArray(pack.tasks)) return;
  pack.tasks.push(
    {
    id: "ege-email-task37-u3",
    unitLabel: "Unit 3",
    switchLabel: "Task 37",
    mode: "email",
    title: "Writing · Personal Email",
    typeLabel: "Task 37 · personal email",
    lead:
      "Unit 3: personal email. Локальная проверка по реальным критериям ЕГЭ для задания 37.",
    promptLead:
      "You have received an email message from your English-speaking pen-friend Julia:",
    promptMeta: {
      from: "Julia@mail.uk",
      to: "Russian_friend@ege.ru",
      subject: "Charity..."
    },
    promptRu:
      "\"The Week of Kindness\" has just started in our school, and a lot of charity events will be held this week. Have you ever taken part in a charity project? Do you find charity events useful? Why, or why not? Who do students help most often in your region?\nLast weekend I visited my grandparents' house...",
    instructions: [
      "Write an email to Julia.",
      "In your message: answer her questions;",
      "ask 3 questions about her grandparents.",
      "Write 100-140 words.",
      "Remember the rules of email writing."
    ],
    fieldNote:
      "Сюда ученик вставляет или пишет свой email. Пример ниже открывается отдельно и это поле не заполняет.",
    wordLimits: {
      targetMin: 100,
      targetMax: 140,
      hardMin: 90,
      hardMax: 154
    },
    structurePanelTitle: "Структура email",
    structureChecklist: [
      "Обращение (Dear Julia, ...)",
      "Короткая thanks/opening phrase",
      "Ответ: charity project",
      "Ответ: charity events useful + why / why not",
      "Ответ: who students help in your region",
      "3 вопроса к Julia про grandparents",
      "Завершающая фраза",
      "Подпись"
    ],
    precheckItems: [
      "Я добавил(а) обращение `Dear Julia,`",
      "Я ответил(а) на вопросы Julia про charity",
      "Я задал(а) 3 вопроса back про `grandparents`",
      "Я добавил(а) closing phrase и подпись",
      "Я проверил(а), что объём около `100-140` слов",
      "Я перечитал(а) текст на grammar / spelling / punctuation"
    ],
    detectLegend: [
      { role: "greeting", label: "Обращение" },
      { role: "opening", label: "Opening" },
      { role: "answer", label: "Ответы" },
      { role: "question", label: "Questions back" },
      { role: "closing", label: "Closing" },
      { role: "signoff", label: "Подпись" }
    ],
    promptQuestions: [
      {
        id: "q1",
        label: "Have you ever taken part in a charity project?",
        keywords: [
          "charity project",
          "taken part",
          "took part",
          "participated",
          "have taken part",
          "last year",
          "once",
          "never",
          "our school"
        ]
      },
      {
        id: "q2",
        label: "Do you find charity events useful?",
        keywords: [
          "charity events",
          "useful",
          "very useful",
          "quite useful",
          "not very useful",
          "i find",
          "helpful"
        ]
      },
      {
        id: "q3",
        label: "Why, or why not?",
        keywords: [
          "because",
          "that's why",
          "the reason",
          "so they",
          "as a result",
          "since"
        ]
      },
      {
        id: "q4",
        label: "Who do students help most often in your region?",
        keywords: [
          "students help",
          "in my region",
          "in our region",
          "most often",
          "elderly",
          "children",
          "orphans",
          "homeless",
          "people in need",
          "disabled"
        ]
      }
    ],
    questionBackHint: "her grandparents",
    questionBackKeywords: [
      "What",
      "Why",
      "When",
      "Where",
      "Who",
      "How",
      "Did",
      "Does",
      "Do",
      "Is",
      "Was",
      "Were",
      "Have"
    ],
    requiredBlocks: {
      greeting: ["dear julia"],
      thanks: [
        "thanks for your email",
        "thank you for your email",
        "thanks for writing",
        "it was great to hear from you"
      ],
      closing: [
        "write back soon",
        "hope to hear from you soon",
        "best wishes",
        "all the best",
        "take care"
      ],
      signoff: ["best wishes", "all the best", "yours", "take care"]
    },
    usefulPhrases: {
      opening: [
        "Dear Julia,",
        "Thanks for your email.",
        "It was great to hear from you again."
      ],
      answers: [
        "Yes, I have taken part in a charity project at school.",
        "I find charity events very useful because ...",
        "In my region, students most often help ...",
        "No, I have never taken part in a charity project, but I would like to."
      ],
      questions: [
        "How are your grandparents?",
        "What did you do at their house last weekend?",
        "Do they live far from your school?"
      ],
      closing: [
        "Anyway, I have to go now.",
        "Write back soon.",
        "Best wishes,",
        "Your Russian friend"
      ]
    },
    helpCards: [
      {
        id: "structure",
        label: "Структура",
        title: "Что должно быть в письме",
        lines: [
          "1. Dear Julia,",
          "2. Thanks for your email / It was great to hear from you.",
          "3. Ответы на вопросы Julia про charity.",
          "4. 3 вопроса о her grandparents.",
          "5. Closing phrase: Anyway, I have to go now. / Write back soon.",
          "6. Подпись: Best wishes, ... / Your Russian friend"
        ]
      },
      {
        id: "answers",
        label: "Ответы Julia",
        title: "Что нужно раскрыть",
        lines: [
          "Ответьте, участвовали ли вы в charity project.",
          "Скажите, полезны ли charity events, и объясните почему.",
          "Назовите, кому чаще всего помогают students в вашем регионе.",
          "Не отвечайте одним словом: лучше 1-2 предложения на каждый пункт."
        ]
      },
      {
        id: "questions",
        label: "3 questions back",
        title: "Какие вопросы задать Julia",
        lines: [
          "Нужно задать ровно 3 вопроса про grandparents.",
          "Примеры: How are your grandparents? What did you do at their house? Do they live far away?",
          "Вопросы должны быть именно к grandparents, не к Week of Kindness."
        ]
      },
      {
        id: "criteria",
        label: "Критерии ЕГЭ",
        title: "Как реально набираются баллы",
        lines: [
          "Максимум за Task 37 - 6 первичных баллов.",
          "РКЗ - до 2 баллов: ответы на вопросы + 3 questions back.",
          "Организация текста - до 2 баллов: формат email, логика, абзацы, обращение и подпись.",
          "Языковое оформление - до 2 баллов: лексика, грамматика, орфография и пунктуация."
        ]
      }
    ],
    topicWords: [
      "charity",
      "kindness",
      "project",
      "events",
      "students",
      "region",
      "help",
      "grandparents",
      "julia",
      "school"
    ],
    commonMistakes: [
      {
        pattern: "\\bdear julia\\b(?!,)",
        flags: "i",
        msg: "После `Dear Julia` нужна запятая."
      },
      {
        pattern: "\\bthanks for your letter\\b",
        flags: "i",
        msg: "В задании email, поэтому естественнее `Thanks for your email`."
      },
      {
        pattern: "\\bi very like\\b",
        flags: "i",
        msg: "Лучше `I like ... very much`, а не `I very like`."
      },
      {
        pattern: "\\bi am agree\\b",
        flags: "i",
        msg: "Пишут `I agree`, без `am`."
      },
      {
        pattern: "\\bcharity events are useful for me\\b",
        flags: "i",
        msg: "Естественнее: `I find charity events useful`."
      }
    ],
    criteria: [
      { id: "rkz", label: "РКЗ · Решение коммуникативной задачи", max: 2 },
      { id: "org", label: "Организация текста", max: 2 },
      { id: "lang", label: "Языковое оформление", max: 2 }
    ],
    aiResponseSchema: {
      formalCompliance: {
        wordCountStatus: "below|target|above|critical",
        answeredPromptQuestions: 0,
        questionBackCount: 0,
        structureMissing: ["string"]
      },
      criteria: {
        RKZ: { score: 0, max: 2, comment: "..." },
        Organization: { score: 0, max: 2, comment: "..." },
        Language: { score: 0, max: 2, comment: "..." }
      },
      total: 0
    },
    sampleEssay:
      "Dear Julia,\n\nThanks for your email. It was great to hear from you. The Week of Kindness at your school sounds like a wonderful idea!\n\nYes, I have taken part in a charity project at my school. We collected clothes for children in need. I find charity events very useful because they teach students to care about others and work together. In my region, students most often help elderly people and local orphanages.\n\nBy the way, how are your grandparents? What did you do at their house last weekend? Do they live far from your town?\n\nAnyway, I have to go now. Write back soon.\n\nBest wishes,\nYour Russian friend"
    },
    {
      id: "ege-project-task38-u3-dream-job",
      unitLabel: "Unit 3",
      switchLabel: "Task 38.1",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.1 · survey report",
      lead:
        "Unit 3: essay-project on skills for a dream job. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on skills and qualities that Zetland teenagers think are most important for their dream job. You have found some data on the subject - the results of a survey (see the table below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion:
        "What skills and qualities do you think are most important for your dream job?",
      promptTable: {
        headers: ["Skills and qualities", "Number of respondents (%)"],
        rows: [
          ["Problem-solving and critical thinking", "40"],
          ["Communication and collaboration", "30"],
          ["Accuracy and attention to detail", "16"],
          ["Passion and enthusiasm", "9"],
          ["Leadership and initiative", "5"]
        ]
      },
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise with not having the necessary skills for your dream job and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on the importance of professional training for your future job."
      ],
      fieldNote:
        "Сюда ученик пишет essay-project по таблице. Пример ниже открывается отдельно и это поле не заполняет.",
      wordLimits: {
        targetMin: 200,
        targetMax: 250,
        hardMin: 180,
        hardMax: 275
      },
      structurePanelTitle: "План essay-project",
      structureChecklist: [
        "Opening statement about the project topic",
        "2-3 facts from the table",
        "1-2 comparisons with comment",
        "A problem connected with lacking skills for a dream job",
        "A logical solution",
        "Your opinion on professional training",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из таблицы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, связанную с not having the necessary skills",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о professional training for your future job",
        "Я разделил(а) текст ровно на 5 абзацев",
        "Я проверил(а), что объём около `200-250` слов"
      ],
      detectLegend: [
        { role: "opening", label: "Opening" },
        { role: "answer", label: "Facts" },
        { role: "question", label: "Comparisons" },
        { role: "closing", label: "Problem" },
        { role: "solution", label: "Solution" },
        { role: "signoff", label: "Opinion" }
      ],
      reportOpeningKeywords: [
        "the table shows",
        "the survey shows",
        "the survey question",
        "the data show",
        "the table presents",
        "the project is about",
        "zetland teenagers",
        "dream job",
        "skills and qualities"
      ],
      reportFactItems: [
        {
          label: "40% choose problem-solving and critical thinking",
          keywords: ["40", "problem-solving", "critical thinking", "problem solving"]
        },
        {
          label: "30% choose communication and collaboration",
          keywords: ["30", "communication", "collaboration"]
        },
        {
          label: "16% choose accuracy and attention to detail",
          keywords: ["16", "accuracy", "attention to detail"]
        },
        {
          label: "9% choose passion and enthusiasm",
          keywords: ["9", "passion", "enthusiasm"]
        },
        {
          label: "5% choose leadership and initiative",
          keywords: ["5", "leadership", "initiative"]
        }
      ],
      reportComparisonKeywords: [
        "more than",
        "less than",
        "while",
        "whereas",
        "compared with",
        "in comparison",
        "higher than",
        "lower than",
        "twice as",
        "almost twice",
        "slightly higher",
        "far more popular"
      ],
      reportProblemKeywords: [
        "problem",
        "issue",
        "lack",
        "do not have",
        "don't have",
        "without",
        "unqualified",
        "fail",
        "rejected",
        "cannot get",
        "can't get",
        "not enough skills",
        "missing skills"
      ],
      reportSolutionKeywords: [
        "solution",
        "solve this problem",
        "to avoid this",
        "to prevent this",
        "they should",
        "teenagers should",
        "students should",
        "it can be solved",
        "one way to solve it",
        "training",
        "courses",
        "practice",
        "develop",
        "improve",
        "learn"
      ],
      reportNeedSolution: true,
      reportOpinionKeywords: [
        "in my opinion",
        "i think",
        "i believe",
        "to my mind",
        "as for me",
        "personally",
        "to sum up",
        "in conclusion",
        "professional training"
      ],
      reportConclusionKeywords: [
        "in conclusion",
        "to sum up",
        "all in all",
        "overall"
      ],
      usefulPhrases: {
        opening: [
          "The table shows the results of a survey about skills and qualities for a dream job among Zetland teenagers.",
          "The project is about what teenagers value most in their future career."
        ],
        facts: [
          "According to the table, 40% of respondents ...",
          "Another 30% believe that ...",
          "Only 5% choose ..."
        ],
        compare: [
          "This figure is much higher than ...",
          "Compared with ..., this percentage is lower.",
          "Problem-solving is far more popular than leadership."
        ],
        problem: [
          "One problem that can arise is not having the necessary skills for your dream job.",
          "As a result, teenagers may fail to get the job they want."
        ],
        solution: [
          "This problem can be solved through professional training and regular practice.",
          "They should also take courses and develop the skills listed in the survey."
        ],
        opinion: [
          "In my opinion, professional training is extremely important for a future job.",
          "I believe it helps teenagers become more confident and better prepared."
        ]
      },
      helpCards: [
        {
          id: "structure",
          label: "План",
          title: "Что должно быть в essay-project",
          lines: [
            "1. Opening statement about the project topic.",
            "2. 2-3 facts from the table with percentages.",
            "3. 1-2 comparisons plus your short comment.",
            "4. A problem connected with lacking skills + a solution.",
            "5. Your opinion on professional training.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из таблицы",
          lines: [
            "Лучше выбрать 2-3 самых заметных цифры, а не переписывать всю таблицу.",
            "Например: 40%, 30% и 16% / 9%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "compare",
          label: "Сравнение",
          title: "Как делать comparison",
          lines: [
            "Сравнивайте навыки: 40% is much higher than 30%.",
            "Можно сравнить problem-solving с leadership (5%).",
            "Не делайте слишком много сравнений: 1-2 обычно достаточно."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Назовите проблему: lack of skills, failure to get a dream job.",
            "Предложите solution: training, courses, practice, develop skills.",
            "Без solution можно потерять балл по K1."
          ]
        },
        {
          id: "criteria",
          label: "Критерии ЕГЭ",
          title: "Как оценивается Task 38",
          lines: [
            "Максимум за Task 38 - 14 первичных баллов.",
            "K1 - решение коммуникативной задачи.",
            "K2 - организация текста.",
            "K3 - лексика.",
            "K4 - грамматика.",
            "K5 - орфография и пунктуация."
          ]
        }
      ],
      topicWords: [
        "skills",
        "qualities",
        "dream job",
        "teenagers",
        "survey",
        "table",
        "problem-solving",
        "communication",
        "collaboration",
        "training",
        "career"
      ],
      commonMistakes: [
        {
          pattern: "\\bi think that in my opinion\\b",
          flags: "i",
          msg: "Не дублируйте opinion markers: достаточно одного `In my opinion`."
        },
        {
          pattern: "\\baccording to me\\b",
          flags: "i",
          msg: "Лучше `In my opinion`, а не `According to me`."
        },
        {
          pattern: "\\bthe table say\\b",
          flags: "i",
          msg: "Нужно `the table shows` / `the data show`."
        }
      ],
      criteria: [
        { id: "k1", label: "K1 · Решение коммуникативной задачи", max: 3 },
        { id: "k2", label: "K2 · Организация текста", max: 3 },
        { id: "k3", label: "K3 · Лексика", max: 3 },
        { id: "k4", label: "K4 · Грамматика", max: 3 },
        { id: "k5", label: "K5 · Орфография и пунктуация", max: 2 }
      ],
      aiResponseSchema: {
        formalCompliance: {
          wordCountStatus: "below|target|above|critical",
          factsUsed: 0,
          comparisons: 0,
          problemPresent: true,
          solutionPresent: true,
          opinionPresent: true
        },
        criteria: {
          K1: { score: 0, max: 3, comment: "..." },
          K2: { score: 0, max: 3, comment: "..." },
          K3: { score: 0, max: 3, comment: "..." },
          K4: { score: 0, max: 3, comment: "..." },
          K5: { score: 0, max: 2, comment: "..." }
        },
        total: 0
      },
      sampleEssay:
        "The table shows the results of a survey about skills and qualities that Zetland teenagers think are most important for their dream job. The project is important because career choices and workplace expectations are closely connected with teenagers' future success.\n\nAccording to the table, 40% of respondents believe that problem-solving and critical thinking are the most important skills, which makes this option the most popular. Another 30% choose communication and collaboration, while 16% mention accuracy and attention to detail. By contrast, only 9% value passion and enthusiasm, and just 5% choose leadership and initiative.\n\nIt is clear that problem-solving is much more popular than leadership and initiative. The figure for communication and collaboration is also noticeably higher than the percentage for passion and enthusiasm.\n\nOne problem that can arise if teenagers do not have the necessary skills for their dream job is that they may fail to get the position they want or feel unprepared at work. This problem can be solved through professional training, online courses and regular practice of the skills that employers value most.\n\nIn my opinion, professional training is extremely important for a future job. I believe it helps teenagers develop useful skills, become more confident and feel better prepared for real work."
    },
    {
      id: "ege-project-task38-u3-edu-apps",
      unitLabel: "Unit 3",
      switchLabel: "Task 38.2",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.2 · survey report",
      lead:
        "Unit 3: essay-project on educational app features. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on what features of educational apps Zetland teenagers consider most important. You have found some data on the subject - the results of a survey (see the pie chart below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion: "What is the most important feature of an educational app for you?",
      promptChart: [
        ["Interactive content", "49"],
        ["Personalised learning", "26"],
        ["Short, bite-sized lessons", "15"],
        ["Real-world applications", "7"],
        ["Variety of media", "3"]
      ],
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise while using an educational app and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on the importance of IT skills for teenagers."
      ],
      fieldNote:
        "Сюда ученик пишет essay-project по диаграмме. Пример ниже открывается отдельно и это поле не заполняет.",
      wordLimits: {
        targetMin: 200,
        targetMax: 250,
        hardMin: 180,
        hardMax: 275
      },
      structurePanelTitle: "План essay-project",
      structureChecklist: [
        "Opening statement about the project topic",
        "2-3 facts from the chart",
        "1-2 comparisons with comment",
        "A problem connected with using an educational app",
        "A practical solution",
        "Your opinion on IT skills for teenagers",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из диаграммы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, связанную with using an educational app",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о importance of IT skills for teenagers",
        "Я разделил(а) текст ровно на 5 абзацев",
        "Я проверил(а), что объём около `200-250` слов"
      ],
      detectLegend: [
        { role: "opening", label: "Opening" },
        { role: "answer", label: "Facts" },
        { role: "question", label: "Comparisons" },
        { role: "closing", label: "Problem" },
        { role: "solution", label: "Solution" },
        { role: "signoff", label: "Opinion" }
      ],
      reportNeedSolution: true,
      reportOpeningKeywords: [
        "the pie chart shows",
        "the chart shows",
        "the survey shows",
        "the project is about",
        "educational apps",
        "zetland teenagers",
        "most important feature"
      ],
      reportFactItems: [
        {
          label: "49% choose interactive content",
          keywords: ["49", "interactive content", "interactive"]
        },
        {
          label: "26% choose personalised learning",
          keywords: ["26", "personalised learning", "personalized learning"]
        },
        {
          label: "15% choose short bite-sized lessons",
          keywords: ["15", "bite-sized", "bite sized", "short"]
        },
        {
          label: "7% choose real-world applications",
          keywords: ["7", "real-world", "real world", "applications"]
        },
        {
          label: "3% choose variety of media",
          keywords: ["3", "variety of media", "media"]
        }
      ],
      reportComparisonKeywords: [
        "more than",
        "less than",
        "while",
        "whereas",
        "compared with",
        "in comparison",
        "higher than",
        "lower than",
        "twice as",
        "almost twice",
        "slightly higher",
        "far more popular"
      ],
      reportProblemKeywords: [
        "problem",
        "issue",
        "distraction",
        "addict",
        "too much screen",
        "technical",
        "bug",
        "confus",
        "lose interest",
        "bored",
        "internet",
        "connection"
      ],
      reportSolutionKeywords: [
        "solution",
        "solve this problem",
        "to avoid this",
        "to prevent this",
        "they should",
        "teenagers should",
        "students should",
        "it can be solved",
        "one way to solve it",
        "take breaks",
        "limit",
        "choose carefully",
        "update",
        "support"
      ],
      reportOpinionKeywords: [
        "in my opinion",
        "i think",
        "i believe",
        "to my mind",
        "as for me",
        "personally",
        "to sum up",
        "in conclusion",
        "it skills",
        "it skill"
      ],
      reportConclusionKeywords: [
        "in conclusion",
        "to sum up",
        "all in all",
        "overall"
      ],
      usefulPhrases: {
        opening: [
          "The pie chart shows the results of a survey about the most important features of educational apps for Zetland teenagers.",
          "The project is about what teenagers value in digital learning tools."
        ],
        facts: [
          "According to the chart, 49% of respondents ...",
          "Another 26% prefer ...",
          "Only 3% choose ..."
        ],
        compare: [
          "This figure is almost twice as high as ...",
          "Compared with ..., this percentage is much lower.",
          "Interactive content is far more popular than variety of media."
        ],
        problem: [
          "One problem that can arise while using an educational app is distraction and too much screen time.",
          "Students may also lose interest if the app is confusing or works poorly."
        ],
        solution: [
          "This problem can be solved by taking regular breaks and choosing apps with clear design.",
          "Teenagers should also limit daily screen time and ask for help when something does not work."
        ],
        opinion: [
          "In my opinion, IT skills are very important for teenagers today.",
          "I believe they help students use educational apps effectively and prepare for the future."
        ]
      },
      helpCards: [
        {
          id: "structure",
          label: "План",
          title: "Что должно быть в essay-project",
          lines: [
            "1. Opening statement about the project topic.",
            "2. 2-3 facts from the chart with percentages.",
            "3. 1-2 comparisons plus your short comment.",
            "4. A problem connected with using an educational app + a solution.",
            "5. Your opinion on IT skills for teenagers.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из диаграммы",
          lines: [
            "Лучше выбрать 2-3 самые заметные цифры, а не описывать весь chart подряд.",
            "Например: 49%, 26% и 15% / 7%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Назовите проблему: distraction, bugs, confusion, too much screen time.",
            "Предложите solution: breaks, limit time, choose apps carefully, ask for help.",
            "Без solution можно потерять балл по K1."
          ]
        },
        {
          id: "criteria",
          label: "Критерии ЕГЭ",
          title: "Как оценивается Task 38",
          lines: [
            "Максимум за Task 38 - 14 первичных баллов.",
            "K1 - решение коммуникативной задачи.",
            "K2 - организация текста.",
            "K3 - лексика.",
            "K4 - грамматика.",
            "K5 - орфография и пунктуация."
          ]
        }
      ],
      topicWords: [
        "app",
        "apps",
        "educational",
        "interactive",
        "learning",
        "teenagers",
        "survey",
        "chart",
        "skills",
        "it",
        "digital",
        "media"
      ],
      commonMistakes: [
        {
          pattern: "\\baccording to me\\b",
          flags: "i",
          msg: "Лучше `In my opinion`, а не `According to me`."
        },
        {
          pattern: "\\bthe chart say\\b",
          flags: "i",
          msg: "Нужно `the chart shows`."
        },
        {
          pattern: "\\bteenagers likes\\b",
          flags: "i",
          msg: "С `teenagers` нужен глагол без `-s`: `teenagers like`."
        }
      ],
      criteria: [
        { id: "k1", label: "K1 · Решение коммуникативной задачи", max: 3 },
        { id: "k2", label: "K2 · Организация текста", max: 3 },
        { id: "k3", label: "K3 · Лексика", max: 3 },
        { id: "k4", label: "K4 · Грамматика", max: 3 },
        { id: "k5", label: "K5 · Орфография и пунктуация", max: 2 }
      ],
      aiResponseSchema: {
        formalCompliance: {
          wordCountStatus: "below|target|above|critical",
          factsUsed: 0,
          comparisons: 0,
          problemPresent: true,
          solutionPresent: true,
          opinionPresent: true
        },
        criteria: {
          K1: { score: 0, max: 3, comment: "..." },
          K2: { score: 0, max: 3, comment: "..." },
          K3: { score: 0, max: 3, comment: "..." },
          K4: { score: 0, max: 3, comment: "..." },
          K5: { score: 0, max: 2, comment: "..." }
        },
        total: 0
      },
      sampleEssay:
        "The pie chart shows the results of a survey about what features of educational apps Zetland teenagers consider most important. The project is important because digital tools now play a big role in teenagers' education and daily life.\n\nAccording to the chart, 49% of respondents choose interactive content, which makes it the most popular feature. Another 26% prefer personalised learning, while 15% like short, bite-sized lessons. By contrast, only 7% mention real-world applications and just 3% choose variety of media.\n\nIt is clear that interactive content is far more popular than any other option. The figure for personalised learning is also noticeably higher than the percentage for variety of media.\n\nOne problem that can arise while using an educational app is distraction and too much screen time. Students may also lose interest if the app is confusing or works poorly. This problem can be solved by taking regular breaks, limiting daily screen time and choosing apps with a clear and simple design.\n\nIn my opinion, IT skills are extremely important for teenagers today. I believe they help students use educational apps effectively, find reliable information and feel better prepared for study and work in the future."
    }
  );
})(typeof window !== "undefined" ? window : this);
