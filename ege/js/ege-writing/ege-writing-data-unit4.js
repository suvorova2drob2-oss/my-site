(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack || !Array.isArray(pack.tasks)) return;
  pack.tasks.push(
    {
      id: "ege-email-task37-u4",
      unitLabel: "Unit 4",
      switchLabel: "Task 37",
      mode: "email",
      title: "Writing · Personal Email",
      typeLabel: "Task 37 · personal email",
      lead:
        "Unit 4: personal email. Локальная проверка по реальным критериям ЕГЭ для задания 37.",
      promptLead:
        "You have received an email message from your English-speaking pen-friend Ted:",
      promptMeta: {
        from: "Ted@mail.uk",
        to: "Russian_friend@ege.ru",
        subject: "History..."
      },
      promptRu:
        "I've found my grandpa's photos of our town 50 years ago. The place has changed a lot! Do you prefer learning about history through pictures and artefacts or by reading historical documents? Which period in your town's or region's history are you most interested in learning about? Do you think knowing history is important, and why?\nLast weekend, I went hiking with my family...",
      instructions: [
        "Write an email to Ted.",
        "In your message: answer his questions;",
        "ask 3 questions about the hiking trip.",
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
        "Обращение (Dear Ted, ...)",
        "Короткая thanks/opening phrase",
        "Ответ: pictures/artefacts vs documents",
        "Ответ: period in town/region history",
        "Ответ: knowing history important + why",
        "3 вопроса к Ted про hiking trip",
        "Завершающая фраза",
        "Подпись"
      ],
      precheckItems: [
        "Я добавил(а) обращение `Dear Ted,`",
        "Я ответил(а) на вопросы Ted про history",
        "Я задал(а) 3 вопроса back про `hiking trip`",
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
          label:
            "Do you prefer learning about history through pictures and artefacts or by reading historical documents?",
          keywords: [
            "pictures",
            "artefacts",
            "artifacts",
            "historical documents",
            "prefer learning",
            "i prefer",
            "reading documents",
            "through pictures"
          ]
        },
        {
          id: "q2",
          label:
            "Which period in your town's or region's history are you most interested in learning about?",
          keywords: [
            "period",
            "town",
            "region",
            "most interested",
            "interested in",
            "19th century",
            "20th century",
            "soviet",
            "medieval",
            "local history"
          ]
        },
        {
          id: "q3",
          label: "Do you think knowing history is important, and why?",
          keywords: [
            "knowing history",
            "history is important",
            "important because",
            "i think",
            "i believe",
            "because",
            "that's why",
            "the reason"
          ]
        }
      ],
      questionBackHint: "the hiking trip",
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
        greeting: ["dear ted"],
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
          "Dear Ted,",
          "Thanks for your email.",
          "It was great to hear from you again."
        ],
        answers: [
          "I prefer learning about history through pictures and artefacts because ...",
          "The period I am most interested in is ...",
          "Yes, I think knowing history is important because ..."
        ],
        questions: [
          "Where did you go hiking?",
          "How long did the trip take?",
          "Did you enjoy the weather?"
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
            "1. Dear Ted,",
            "2. Thanks for your email / It was great to hear from you.",
            "3. Ответы на 3 вопроса Ted про history.",
            "4. 3 вопроса о hiking trip.",
            "5. Closing phrase: Anyway, I have to go now. / Write back soon.",
            "6. Подпись: Best wishes, ... / Your Russian friend"
          ]
        },
        {
          id: "answers",
          label: "Ответы Ted",
          title: "Что нужно раскрыть",
          lines: [
            "Скажите, что предпочитаете: pictures/artefacts или documents.",
            "Назовите период истории города/региона, который вам интересен.",
            "Ответьте, важна ли history, и объясните почему.",
            "Не отвечайте одним словом: лучше 1-2 предложения на каждый пункт."
          ]
        },
        {
          id: "questions",
          label: "3 questions back",
          title: "Какие вопросы задать Ted",
          lines: [
            "Нужно задать ровно 3 вопроса про hiking trip.",
            "Примеры: Where did you go? How was the weather? Did you take many photos?",
            "Вопросы должны быть именно к hiking, не к grandpa's photos."
          ]
        },
        {
          id: "criteria",
          label: "Критерии ЕГЭ",
          title: "Как реально набираются баллы",
          lines: [
            "Максимум за Task 37 - 6 первичных баллов.",
            "РКЗ - до 2 баллов: ответы на 3 вопроса + 3 questions back.",
            "Организация текста - до 2 баллов: формат email, логика, абзацы, обращение и подпись.",
            "Языковое оформление - до 2 баллов: лексика, грамматика, орфография и пунктуация."
          ]
        }
      ],
      topicWords: [
        "history",
        "photos",
        "artefacts",
        "documents",
        "town",
        "region",
        "hiking",
        "family",
        "ted",
        "grandpa"
      ],
      commonMistakes: [
        {
          pattern: "\\bdear ted\\b(?!,)",
          flags: "i",
          msg: "После `Dear Ted` нужна запятая."
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
        "Dear Ted,\n\nThanks for your email. It was great to hear from you. Your grandpa's photos sound fascinating!\n\nI prefer learning about history through pictures and artefacts because they help me imagine the past more clearly. The period I am most interested in is the 19th century, when my town became an industrial centre. I think knowing history is important because it helps us understand how our community has changed and why traditions matter.\n\nBy the way, where did you go hiking? How long did the trip take? Was the weather good?\n\nAnyway, I have to go now. Write back soon.\n\nBest wishes,\nYour Russian friend"
    },
    {
      id: "ege-project-task38-u4-tech",
      unitLabel: "Unit 4",
      switchLabel: "Task 38.1",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.1 · survey report",
      lead:
        "Unit 4: essay-project on technological advancements. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on technological advancements teenagers in Zetland are most excited about. You have found some data on the subject - the results of a survey (see the table below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion: "What technological advancement are you most excited about?",
      promptTable: {
        headers: ["Technological advancements", "Number of respondents (%)"],
        rows: [
          ["Breakthroughs in medicine", "36"],
          ["Eco-friendly decisions", "24"],
          ["Personalised learning technologies", "19"],
          ["Hyper-speed transportation", "12"],
          ["Advanced translation technologies", "9"]
        ]
      },
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise with technological advancement and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on the importance of science in our lives."
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
        "A problem connected with technological advancement",
        "A logical solution",
        "Your opinion on the importance of science",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из таблицы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, связанную с technological advancement",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о importance of science in our lives",
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
        "technological advancement",
        "technology"
      ],
      reportFactItems: [
        {
          label: "36% choose breakthroughs in medicine",
          keywords: ["36", "breakthroughs in medicine", "medicine", "medical"]
        },
        {
          label: "24% choose eco-friendly decisions",
          keywords: ["24", "eco-friendly", "eco friendly", "environment"]
        },
        {
          label: "19% choose personalised learning technologies",
          keywords: ["19", "personalised learning", "personalized learning", "learning technologies"]
        },
        {
          label: "12% choose hyper-speed transportation",
          keywords: ["12", "hyper-speed", "transportation", "transport"]
        },
        {
          label: "9% choose advanced translation technologies",
          keywords: ["9", "translation", "advanced translation"]
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
        "risk",
        "danger",
        "pollution",
        "unemployment",
        "addiction",
        "privacy",
        "depend",
        "harmful",
        "negative effect",
        "inequality"
      ],
      reportSolutionKeywords: [
        "solution",
        "solve this problem",
        "to avoid this",
        "to prevent this",
        "they should",
        "teenagers should",
        "governments should",
        "it can be solved",
        "one way to solve it",
        "regulate",
        "educate",
        "control",
        "invest",
        "research"
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
        "science",
        "scientific"
      ],
      reportConclusionKeywords: [
        "in conclusion",
        "to sum up",
        "all in all",
        "overall"
      ],
      usefulPhrases: {
        opening: [
          "The table shows the results of a survey about technological advancements Zetland teenagers are most excited about.",
          "The project is about teenagers' attitudes to new technology."
        ],
        facts: [
          "According to the table, 36% of respondents ...",
          "Another 24% are excited about ...",
          "Only 9% choose ..."
        ],
        compare: [
          "This figure is much higher than ...",
          "Compared with ..., this percentage is lower.",
          "Medical breakthroughs are far more popular than translation technologies."
        ],
        problem: [
          "One problem that can arise with technological advancement is growing dependence on devices.",
          "New technology may also create risks for privacy and the environment."
        ],
        solution: [
          "This problem can be solved through education and sensible rules for using technology.",
          "Governments and schools should also invest in safe and responsible innovation."
        ],
        opinion: [
          "In my opinion, science is extremely important in our lives.",
          "I believe it helps society solve serious problems and improve people's health."
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
            "4. A problem connected with technological advancement + a solution.",
            "5. Your opinion on the importance of science.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из таблицы",
          lines: [
            "Лучше выбрать 2-3 самых заметных цифры, а не переписывать всю таблицу.",
            "Например: 36%, 24% и 19% / 12%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "compare",
          label: "Сравнение",
          title: "Как делать comparison",
          lines: [
            "Сравнивайте варианты: 36% is much higher than 24%.",
            "Можно сравнить medicine с translation technologies (9%).",
            "Не делайте слишком много сравнений: 1-2 обычно достаточно."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Назовите проблему, связанную с technology: privacy, pollution, dependence.",
            "Предложите solution: education, rules, investment, responsible use.",
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
        "technology",
        "advancement",
        "medicine",
        "eco-friendly",
        "learning",
        "transportation",
        "translation",
        "teenagers",
        "survey",
        "science"
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
        "The table shows the results of a survey about technological advancements teenagers in Zetland are most excited about. The project is important because new technology influences education, health and everyday life.\n\nAccording to the table, 36% of respondents are most excited about breakthroughs in medicine, which makes this option the most popular. Another 24% choose eco-friendly decisions, while 19% mention personalised learning technologies. By contrast, only 12% are excited about hyper-speed transportation and just 9% choose advanced translation technologies.\n\nIt is clear that medical breakthroughs are much more popular than translation technologies. The figure for eco-friendly decisions is also noticeably higher than the percentage for hyper-speed transportation.\n\nOne problem that can arise with rapid technological advancement is growing dependence on devices and the risk of losing personal privacy. This problem can be solved through education about responsible technology use and clear rules that protect people's data.\n\nIn my opinion, science is extremely important in our lives. I believe it helps society fight disease, protect the environment and create tools that make learning and communication easier."
    },
    {
      id: "ege-project-task38-u4-proud",
      unitLabel: "Unit 4",
      switchLabel: "Task 38.2",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.2 · survey report",
      lead:
        "Unit 4: essay-project on aspects teenagers are proud of. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on local aspects that teenagers in Zetland are most proud of. You have found some data on the subject - the results of a survey (see the pie chart below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion: "What aspect of your country are you most proud of?",
      promptChart: [
        ["Cultural diversity", "38"],
        ["Natural beauty", "32"],
        ["Sense of community", "13"],
        ["Historical attractions", "11"],
        ["Artistic heritage", "6"]
      ],
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise with visiting places of natural beauty and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on the importance of learning about the culture of your country."
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
        "A problem connected with visiting natural beauty spots",
        "A practical solution",
        "Your opinion on learning about your country's culture",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из диаграммы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, связанную with visiting natural beauty",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о learning about the culture of your country",
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
        "most proud",
        "zetland teenagers",
        "aspect",
        "country"
      ],
      reportFactItems: [
        {
          label: "38% choose cultural diversity",
          keywords: ["38", "cultural diversity", "diversity"]
        },
        {
          label: "32% choose natural beauty",
          keywords: ["32", "natural beauty", "nature"]
        },
        {
          label: "13% choose sense of community",
          keywords: ["13", "sense of community", "community"]
        },
        {
          label: "11% choose historical attractions",
          keywords: ["11", "historical attractions", "historical"]
        },
        {
          label: "6% choose artistic heritage",
          keywords: ["6", "artistic heritage", "artistic"]
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
        "pollution",
        "litter",
        "damage",
        "crowd",
        "traffic",
        "erosion",
        "fire",
        "unsafe",
        "rubbish",
        "tourists"
      ],
      reportSolutionKeywords: [
        "solution",
        "solve this problem",
        "to avoid this",
        "to prevent this",
        "they should",
        "teenagers should",
        "visitors should",
        "it can be solved",
        "one way to solve it",
        "protect",
        "clean up",
        "recycle",
        "respect",
        "rules",
        "guides"
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
        "culture",
        "cultural"
      ],
      reportConclusionKeywords: [
        "in conclusion",
        "to sum up",
        "all in all",
        "overall"
      ],
      usefulPhrases: {
        opening: [
          "The pie chart shows the results of a survey about aspects of the country Zetland teenagers are most proud of.",
          "The project is about national identity and local pride."
        ],
        facts: [
          "According to the chart, 38% of respondents ...",
          "Another 32% are proud of ...",
          "Only 6% choose ..."
        ],
        compare: [
          "This figure is slightly higher than ...",
          "Compared with ..., this percentage is much lower.",
          "Cultural diversity is more popular than artistic heritage."
        ],
        problem: [
          "One problem that can arise with visiting places of natural beauty is litter and environmental damage.",
          "Too many tourists may also harm plants and wildlife."
        ],
        solution: [
          "This problem can be solved if visitors follow local rules and take their rubbish away.",
          "Schools and parks should also organise clean-up campaigns."
        ],
        opinion: [
          "In my opinion, learning about the culture of your country is very important.",
          "I believe it helps teenagers respect traditions and feel connected to their homeland."
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
            "4. A problem connected with visiting natural beauty + a solution.",
            "5. Your opinion on learning about your country's culture.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из диаграммы",
          lines: [
            "Лучше выбрать 2-3 самые заметные цифры, а не описывать весь chart подряд.",
            "Например: 38%, 32% и 13% / 11%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Назовите проблему именно natural beauty: litter, crowds, damage to nature.",
            "Предложите solution: rules, clean-up, respect the environment.",
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
        "culture",
        "diversity",
        "natural beauty",
        "community",
        "historical",
        "heritage",
        "country",
        "teenagers",
        "survey",
        "chart"
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
        "The pie chart shows the results of a survey about aspects of the country Zetland teenagers are most proud of. The project is important because national identity and local pride can influence how young people see their future.\n\nAccording to the chart, 38% of respondents are most proud of cultural diversity, which makes it the most popular answer. Another 32% choose natural beauty, while 13% mention a sense of community. By contrast, only 11% are proud of historical attractions and just 6% choose artistic heritage.\n\nIt is clear that cultural diversity is slightly more popular than natural beauty, and both figures are much higher than the percentage for artistic heritage.\n\nOne problem that can arise with visiting places of natural beauty is litter and damage to the environment, especially when too many tourists arrive at the same time. This problem can be solved if visitors follow local rules, take their rubbish away and take part in clean-up campaigns organised by schools and local communities.\n\nIn my opinion, learning about the culture of your country is very important. I believe it helps teenagers understand their roots, respect different traditions and feel more connected to the place where they live."
    }
  );
})(typeof window !== "undefined" ? window : this);
