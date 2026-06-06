(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack || !Array.isArray(pack.tasks)) return;
  pack.tasks.push(
    {
      id: "ege-email-task37-u15",
      unitLabel: "Unit 15",
      switchLabel: "Task 37",
      mode: "email",
      title: "Writing · Personal Email",
      typeLabel: "Task 37 · personal email",
      lead:
        "Unit 15: personal email. Локальная проверка по реальным критериям ЕГЭ для задания 37.",
      promptLead:
        "You have received an email message from your English-speaking pen-friend Ed:",
      promptMeta: {
        from: "Ed@mail.uk",
        to: "Russian_friend@ege.ru",
        subject: "Leisure time"
      },
      promptRu:
        "...Gardening is my favourite pastime. What's your attitude to gardening? How do you like to spend your leisure time? What do your parents think about your hobbies?\nI've finally chosen pictures for the school photography contest...",
      instructions: [
        "Write an email to Ed.",
        "In your message: answer his questions;",
        "ask 3 questions about the school photography contest.",
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
        "Обращение (Dear Ed, ...)",
        "Короткая thanks/opening phrase",
        "Ответ: attitude to gardening",
        "Ответ: how you spend leisure time",
        "Ответ: what parents think about your hobbies",
        "3 вопроса к Ed про school photography contest",
        "Завершающая фраза",
        "Подпись"
      ],
      precheckItems: [
        "Я добавил(а) обращение `Dear Ed,`",
        "Я ответил(а) на вопросы Ed про leisure time and hobbies",
        "Я задал(а) 3 вопроса back про school photography contest",
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
          label: "What's your attitude to gardening?",
          keywords: [
            "attitude to gardening",
            "gardening",
            "i like",
            "i enjoy",
            "i love",
            "interesting",
            "never tried",
            "not interested"
          ]
        },
        {
          id: "q2",
          label: "How do you like to spend your leisure time?",
          keywords: [
            "leisure time",
            "spend my leisure time",
            "spend my free time",
            "like to spend",
            "reading",
            "sports",
            "music",
            "friends",
            "hobbies"
          ]
        },
        {
          id: "q3",
          label: "What do your parents think about your hobbies?",
          keywords: [
            "parents",
            "think about my hobbies",
            "my hobbies",
            "support",
            "happy",
            "because",
            "approve",
            "like"
          ]
        }
      ],
      questionBackHint: "the school photography contest",
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
        "Have",
        "Has"
      ],
      requiredBlocks: {
        greeting: ["dear ed"],
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
          "Dear Ed,",
          "Thanks for your email.",
          "It was great to hear from you again."
        ],
        answers: [
          "I really like gardening because it helps me relax outdoors.",
          "In my leisure time I enjoy reading, listening to music and meeting friends.",
          "My parents support my hobbies because they think they are useful and interesting."
        ],
        questions: [
          "What pictures did you choose for the contest?",
          "When is the contest?",
          "Do you hope to win a prize?"
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
            "1. Dear Ed,",
            "2. Thanks for your email / It was great to hear from you.",
            "3. Ответы на 3 вопроса Ed про gardening, leisure time and hobbies.",
            "4. 3 вопроса о school photography contest.",
            "5. Closing phrase: Anyway, I have to go now. / Write back soon.",
            "6. Подпись: Best wishes, ... / Your Russian friend"
          ]
        },
        {
          id: "answers",
          label: "Ответы Ed",
          title: "Что нужно раскрыть",
          lines: [
            "Выскажите своё attitude to gardening.",
            "Опишите, how you like to spend your leisure time.",
            "Скажите, what your parents think about your hobbies.",
            "Не отвечайте одним словом: лучше 1-2 предложения на каждый пункт."
          ]
        },
        {
          id: "questions",
          label: "3 questions back",
          title: "Какие вопросы задать Ed",
          lines: [
            "Нужно задать ровно 3 вопроса про school photography contest.",
            "Примеры: What pictures did you choose? When is it? Who will judge?",
            "Вопросы должны быть именно про photography contest, не про gardening."
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
        "gardening",
        "leisure",
        "hobbies",
        "parents",
        "photography",
        "contest",
        "ed",
        "free time",
        "pastime"
      ],
      commonMistakes: [
        {
          pattern: "\\bdear ed\\b(?!,)",
          flags: "i",
          msg: "После `Dear Ed` нужна запятая."
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
          pattern: "\\bspend my leisure time to\\b",
          flags: "i",
          msg: "Лучше `spend my leisure time reading / with friends`, без лишнего `to`."
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
        "Dear Ed,\n\nThanks for your email. It was great to hear from you. I'm glad gardening is your favourite pastime!\n\nI really like gardening because it helps me relax outdoors. In my leisure time I enjoy reading, listening to music and meeting friends. My parents support my hobbies because they think they are useful and interesting.\n\nBy the way, what pictures did you choose for the school photography contest? When is the contest? Do you hope to win a prize?\n\nAnyway, I have to go now. Write back soon.\n\nBest wishes,\nYour Russian friend"
    },
    {
      id: "ege-project-task38-u15-freetime",
      unitLabel: "Unit 15",
      switchLabel: "Task 38.1",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.1 · survey report",
      lead:
        "Unit 15: essay-project on how teenagers spend free time. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on how teenagers in Zetland prefer to spend their free time. You have found some data on the subject - the results of a survey (see the table below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion: "What do you prefer to do in your free time?",
      promptTable: {
        headers: ["Activities", "Number of teenagers (%)"],
        rows: [
          ["Going for a walk with friends", "45"],
          ["Going to the cinema", "22"],
          ["Shopping in a mall", "15"],
          ["Eating out in a café", "13"],
          ["Visiting music festivals", "5"]
        ]
      },
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise with spending free time and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on how teenagers should spend their free time."
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
        "A problem connected with spending free time",
        "A logical solution",
        "Your opinion on how teenagers should spend free time",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из таблицы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, связанную with spending free time",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о how teenagers should spend their free time",
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
        "zetland",
        "free time",
        "teenagers",
        "leisure"
      ],
      reportFactItems: [
        {
          label: "45% prefer going for a walk with friends",
          keywords: ["45", "walk with friends", "going for a walk", "friends", "walk"]
        },
        {
          label: "22% prefer going to the cinema",
          keywords: ["22", "cinema", "going to the cinema", "movies"]
        },
        {
          label: "15% prefer shopping in a mall",
          keywords: ["15", "shopping", "mall", "shopping in a mall"]
        },
        {
          label: "13% prefer eating out in a café",
          keywords: ["13", "eating out", "café", "cafe"]
        },
        {
          label: "5% prefer visiting music festivals",
          keywords: ["5", "music festivals", "festivals"]
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
        "no time",
        "homework",
        "tired",
        "boring",
        "lazy",
        "screens",
        "phone",
        "waste",
        "passive",
        "stress"
      ],
      reportSolutionKeywords: [
        "solution",
        "solve this problem",
        "to avoid this",
        "to prevent this",
        "they should",
        "teenagers should",
        "young people should",
        "it can be solved",
        "one way to solve it",
        "plan",
        "balance",
        "active",
        "sport",
        "hobbies",
        "schedule"
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
        "free time",
        "teenagers",
        "should spend"
      ],
      reportConclusionKeywords: [
        "in conclusion",
        "to sum up",
        "all in all",
        "overall"
      ],
      usefulPhrases: {
        opening: [
          "The table shows the results of a survey about how teenagers in Zetland prefer to spend their free time.",
          "The project is about teenagers' favourite leisure activities."
        ],
        facts: [
          "According to the table, 45% of teenagers ...",
          "Another 22% prefer ...",
          "Only 5% choose ..."
        ],
        compare: [
          "This figure is much higher than ...",
          "Compared with ..., this percentage is lower.",
          "Going for a walk with friends is far more popular than visiting music festivals."
        ],
        problem: [
          "One problem that can arise with spending free time is wasting it on phones and social media.",
          "Teenagers may also feel tired and stressed if they do not balance rest and homework."
        ],
        solution: [
          "This problem can be solved by planning free time in advance and choosing active hobbies.",
          "They should also limit screen time and spend more time outdoors with friends."
        ],
        opinion: [
          "In my opinion, teenagers should spend their free time in an active and useful way.",
          "I believe walking with friends, doing sports and reading are better than sitting in front of a screen all day."
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
            "4. A problem connected with spending free time + a solution.",
            "5. Your opinion on how teenagers should spend free time.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из таблицы",
          lines: [
            "Лучше выбрать 2-3 самых заметных цифры, а не переписывать всю таблицу.",
            "Например: 45%, 22% и 15% / 13%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "compare",
          label: "Сравнение",
          title: "Как делать comparison",
          lines: [
            "Сравнивайте активности: 45% is higher than 22%.",
            "Можно сравнить walks with music festivals (5%).",
            "Не делайте слишком много сравнений: 1-2 обычно достаточно."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Назовите проблему: wasting time, phones, no balance with homework.",
            "Предложите solution: plan free time, active hobbies, limit screens.",
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
        "free time",
        "walk",
        "cinema",
        "shopping",
        "café",
        "festivals",
        "teenagers",
        "leisure",
        "survey",
        "table"
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
        "The table shows the results of a survey about how teenagers in Zetland prefer to spend their free time. The project is important because leisure activities affect teenagers' health, social life and mood.\n\nAccording to the table, 45% of teenagers prefer going for a walk with friends, which makes this the most popular activity. Another 22% choose going to the cinema, while 15% like shopping in a mall. By contrast, only 13% enjoy eating out in a café and just 5% visit music festivals.\n\nIt is clear that going for a walk with friends is much more popular than visiting music festivals. The figure for going to the cinema is also noticeably higher than the percentage for eating out in a café.\n\nOne problem that can arise with spending free time is wasting it on phones and social media instead of doing something active. Teenagers may also feel tired and stressed if they do not balance rest and homework. This problem can be solved by planning free time in advance and choosing active hobbies.\n\nIn my opinion, teenagers should spend their free time in an active and useful way. I believe walking with friends, doing sports and reading are better than sitting in front of a screen all day."
    },
    {
      id: "ege-project-task38-u15-social",
      unitLabel: "Unit 15",
      switchLabel: "Task 38.2",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.2 · survey report",
      lead:
        "Unit 15: essay-project on social networks. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on what teenagers in Zetland use social networks for. You have found some data on the subject - the results of a survey (see the pie chart below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion: "What do you use social networks for?",
      promptChart: [
        ["To listen to music", "52"],
        ["To chat with friends", "23"],
        ["To find interesting information", "11"],
        ["To watch films", "10"],
        ["To write a blog", "4"]
      ],
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise with using social networks and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on the role of social networks in our lives."
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
        "A problem connected with using social networks",
        "A practical solution",
        "Your opinion on the role of social networks in our lives",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из диаграммы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, связанную with using social networks",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о the role of social networks in our lives",
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
        "social networks",
        "social media",
        "zetland",
        "teenagers"
      ],
      reportFactItems: [
        {
          label: "52% use social networks to listen to music",
          keywords: ["52", "listen to music", "music"]
        },
        {
          label: "23% use social networks to chat with friends",
          keywords: ["23", "chat with friends", "chat", "friends"]
        },
        {
          label: "11% use social networks to find interesting information",
          keywords: ["11", "find interesting information", "information"]
        },
        {
          label: "10% use social networks to watch films",
          keywords: ["10", "watch films", "films", "movies"]
        },
        {
          label: "4% use social networks to write a blog",
          keywords: ["4", "write a blog", "blog"]
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
        "addict",
        "addiction",
        "too much time",
        "sleep",
        "homework",
        "cyberbully",
        "fake",
        "misinformation",
        "distract",
        "stress"
      ],
      reportSolutionKeywords: [
        "solution",
        "solve this problem",
        "to avoid this",
        "to prevent this",
        "they should",
        "teenagers should",
        "people should",
        "it can be solved",
        "one way to solve it",
        "limit",
        "switch off",
        "balance",
        "rules",
        "parents",
        "screen time"
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
        "role",
        "social networks",
        "social media",
        "lives"
      ],
      reportConclusionKeywords: [
        "in conclusion",
        "to sum up",
        "all in all",
        "overall"
      ],
      usefulPhrases: {
        opening: [
          "The pie chart shows the results of a survey about what teenagers in Zetland use social networks for.",
          "The project is about how young people use social media in their daily life."
        ],
        facts: [
          "According to the chart, 52% of respondents ...",
          "Another 23% use social networks to ...",
          "Only 4% choose ..."
        ],
        compare: [
          "This figure is much higher than ...",
          "Compared with ..., this percentage is lower.",
          "Listening to music is far more popular than writing a blog."
        ],
        problem: [
          "One problem that can arise with using social networks is spending too much time online and neglecting homework or sleep.",
          "Teenagers may also face cyberbullying or fake information."
        ],
        solution: [
          "This problem can be solved by limiting screen time and switching off phones before bedtime.",
          "They should also talk to parents or teachers if they feel unsafe online."
        ],
        opinion: [
          "In my opinion, social networks play an important role in our lives.",
          "I believe they help us stay in touch with friends and find useful information, but we should use them wisely."
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
            "4. A problem connected with using social networks + a solution.",
            "5. Your opinion on the role of social networks in our lives.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из диаграммы",
          lines: [
            "Лучше выбрать 2-3 самые заметные цифры, а не описывать весь chart подряд.",
            "Например: 52%, 23% и 11% / 10%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Назовите проблему: too much time online, sleep, cyberbullying, fake news.",
            "Предложите solution: limit screen time, switch off phone, ask for help.",
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
        "social networks",
        "social media",
        "music",
        "chat",
        "information",
        "films",
        "blog",
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
          pattern: "\\bsocial network are\\b",
          flags: "i",
          msg: "Множественное число: `social networks are`."
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
        "The pie chart shows the results of a survey about what teenagers in Zetland use social networks for. The project is important because social media has become a big part of teenagers' daily routine.\n\nAccording to the chart, 52% of respondents use social networks to listen to music, which makes this the most popular reason. Another 23% chat with friends online, while 11% look for interesting information. By contrast, only 10% watch films and just 4% write a blog.\n\nIt is clear that listening to music is much more popular than writing a blog. The figure for chatting with friends is also noticeably higher than the percentage for watching films.\n\nOne problem that can arise with using social networks is spending too much time online and neglecting homework or sleep. Teenagers may also face cyberbullying or fake information. This problem can be solved by limiting screen time and switching off phones before bedtime.\n\nIn my opinion, social networks play an important role in our lives. I believe they help us stay in touch with friends and find useful information, but we should use them wisely."
    }
  );
})(typeof window !== "undefined" ? window : this);
