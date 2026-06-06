(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack || !Array.isArray(pack.tasks)) return;
  pack.tasks.push(
    {
      id: "ege-email-task37-u13",
      unitLabel: "Unit 13",
      switchLabel: "Task 37",
      mode: "email",
      title: "Writing · Personal Email",
      typeLabel: "Task 37 · personal email",
      lead:
        "Unit 13: personal email. Локальная проверка по реальным критериям ЕГЭ для задания 37.",
      promptLead:
        "You have received an email message from your English-speaking pen-friend Dave:",
      promptMeta: {
        from: "Dave@mail.uk",
        to: "Russian_friend@ege.ru",
        subject: "Horse riding"
      },
      promptRu:
        "...Many of my friends enjoy horse riding a lot, and I like it too. What is your attitude to horse riding? Is it a popular hobby in your region? Why, or why not? What hobbies are popular with teens in your region?\nI've just bought a present for my friend's birthday...",
      instructions: [
        "Write an email to Dave.",
        "In your message: answer his questions;",
        "ask 3 questions about the present he bought for his friend.",
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
        "Обращение (Dear Dave, ...)",
        "Короткая thanks/opening phrase",
        "Ответ: attitude to horse riding",
        "Ответ: popular hobby in your region + why / why not",
        "Ответ: hobbies popular with teens in your region",
        "3 вопроса к Dave про the present for his friend",
        "Завершающая фраза",
        "Подпись"
      ],
      precheckItems: [
        "Я добавил(а) обращение `Dear Dave,`",
        "Я ответил(а) на вопросы Dave про horse riding and hobbies",
        "Я задал(а) 3 вопроса back про the present for his friend",
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
          label: "What is your attitude to horse riding?",
          keywords: [
            "attitude to horse riding",
            "horse riding",
            "i like",
            "i enjoy",
            "i love",
            "interesting",
            "never tried",
            "afraid"
          ]
        },
        {
          id: "q2",
          label:
            "Is it a popular hobby in your region? Why, or why not?",
          keywords: [
            "popular hobby",
            "in my region",
            "in our region",
            "horse riding",
            "why",
            "because",
            "yes",
            "no",
            "quite popular",
            "not very popular",
            "expensive"
          ]
        },
        {
          id: "q3",
          label: "What hobbies are popular with teens in your region?",
          keywords: [
            "hobbies",
            "popular with teens",
            "in my region",
            "in our region",
            "sports",
            "music",
            "dancing",
            "gaming",
            "photography",
            "teenagers"
          ]
        }
      ],
      questionBackHint: "the present he bought for his friend",
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
        greeting: ["dear dave"],
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
          "Dear Dave,",
          "Thanks for your email.",
          "It was great to hear from you again."
        ],
        answers: [
          "I really like horse riding because it is exciting and good for health.",
          "In my region horse riding is not very popular because it is quite expensive.",
          "Sports, music and photography are popular hobbies with teens in my region."
        ],
        questions: [
          "What present did you buy for your friend?",
          "Where did you buy it?",
          "Does your friend like it?"
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
            "1. Dear Dave,",
            "2. Thanks for your email / It was great to hear from you.",
            "3. Ответы на 3 вопроса Dave про horse riding and hobbies.",
            "4. 3 вопроса о the present for his friend's birthday.",
            "5. Closing phrase: Anyway, I have to go now. / Write back soon.",
            "6. Подпись: Best wishes, ... / Your Russian friend"
          ]
        },
        {
          id: "answers",
          label: "Ответы Dave",
          title: "Что нужно раскрыть",
          lines: [
            "Выскажите своё attitude to horse riding.",
            "Скажите, popular ли horse riding in your region, и объясните why / why not.",
            "Перечислите hobbies, popular with teens in your region.",
            "Не отвечайте одним словом: лучше 1-2 предложения на каждый пункт."
          ]
        },
        {
          id: "questions",
          label: "3 questions back",
          title: "Какие вопросы задать Dave",
          lines: [
            "Нужно задать ровно 3 вопроса про the present for his friend.",
            "Примеры: What did you buy? How much did it cost? When will you give it?",
            "Вопросы должны быть именно про present, не про horse riding."
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
        "horse riding",
        "hobbies",
        "region",
        "teens",
        "present",
        "friend",
        "dave",
        "popular"
      ],
      commonMistakes: [
        {
          pattern: "\\bdear dave\\b(?!,)",
          flags: "i",
          msg: "После `Dear Dave` нужна запятая."
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
          pattern: "\\bhorse ridings\\b",
          flags: "i",
          msg: "Нужно `horse riding`, без `-s`."
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
        "Dear Dave,\n\nThanks for your email. It was great to hear from you. I'm glad you enjoy horse riding!\n\nI really like horse riding because it is exciting and good for health. In my region it is not very popular because it is quite expensive and there are not many stables nearby. Sports, music and photography are popular hobbies with teens in my region.\n\nBy the way, what present did you buy for your friend? Where did you buy it? Does your friend like it?\n\nAnyway, I have to go now. Write back soon.\n\nBest wishes,\nYour Russian friend"
    },
    {
      id: "ege-project-task38-u13-space",
      unitLabel: "Unit 13",
      switchLabel: "Task 38.1",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.1 · survey report",
      lead:
        "Unit 13: essay-project on space trips. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on why Zetland teenagers would like to go on a space trip. You have found some data on the subject - the results of a survey (see the table below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion: "Why would you like to go on a space trip?",
      promptTable: {
        headers: ["Reasons", "Number of respondents (%)"],
        rows: [
          ["To experience something unique", "45"],
          ["To see the Earth from outer space", "28"],
          ["To make a dream come true", "15"],
          ["To learn more about the world", "10"],
          ["To make a scientific discovery", "2"]
        ]
      },
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise with people going into space and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on whether space trips are appealing to you."
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
        "A problem connected with people going into space",
        "A logical solution",
        "Your opinion on whether space trips are appealing to you",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из таблицы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, связанную with people going into space",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о whether space trips are appealing to you",
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
        "space trip",
        "space",
        "teenagers"
      ],
      reportFactItems: [
        {
          label: "45% would like to experience something unique",
          keywords: ["45", "experience something unique", "unique", "experience"]
        },
        {
          label: "28% would like to see the Earth from outer space",
          keywords: ["28", "see the earth", "outer space", "earth from space"]
        },
        {
          label: "15% would like to make a dream come true",
          keywords: ["15", "make a dream come true", "dream come true", "dream"]
        },
        {
          label: "10% would like to learn more about the world",
          keywords: ["10", "learn more about the world", "learn more", "world"]
        },
        {
          label: "2% would like to make a scientific discovery",
          keywords: ["2", "scientific discovery", "discovery", "science"]
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
        "danger",
        "dangerous",
        "health",
        "radiation",
        "cost",
        "expensive",
        "training",
        "isolated",
        "stress",
        "accident",
        "risk"
      ],
      reportSolutionKeywords: [
        "solution",
        "solve this problem",
        "to avoid this",
        "to prevent this",
        "they should",
        "scientists should",
        "it can be solved",
        "one way to solve it",
        "training",
        "safety",
        "equipment",
        "research",
        "prepare",
        "protect"
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
        "space trip",
        "space trips",
        "appealing",
        "exciting"
      ],
      reportConclusionKeywords: [
        "in conclusion",
        "to sum up",
        "all in all",
        "overall"
      ],
      usefulPhrases: {
        opening: [
          "The table shows the results of a survey about why Zetland teenagers would like to go on a space trip.",
          "The project is about young people's interest in space exploration."
        ],
        facts: [
          "According to the table, 45% of respondents ...",
          "Another 28% want to ...",
          "Only 2% choose ..."
        ],
        compare: [
          "This figure is much higher than ...",
          "Compared with ..., this percentage is lower.",
          "Experiencing something unique is far more popular than making a scientific discovery."
        ],
        problem: [
          "One problem that can arise with people going into space is health risks and dangerous conditions.",
          "Space travellers may also suffer from isolation and stress during long flights."
        ],
        solution: [
          "This problem can be solved by careful training, modern safety equipment and medical support.",
          "Scientists should also continue research to make space travel safer and more affordable."
        ],
        opinion: [
          "In my opinion, space trips are very appealing to me.",
          "I believe they would give me a chance to see something truly unique and unforgettable."
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
            "4. A problem connected with going into space + a solution.",
            "5. Your opinion on whether space trips are appealing to you.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из таблицы",
          lines: [
            "Лучше выбрать 2-3 самых заметных цифры, а не переписывать всю таблицу.",
            "Например: 45%, 28% и 15% / 10%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "compare",
          label: "Сравнение",
          title: "Как делать comparison",
          lines: [
            "Сравнивайте причины: 45% is higher than 28%.",
            "Можно сравнить unique experience с scientific discovery (2%).",
            "Не делайте слишком много сравнений: 1-2 обычно достаточно."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Назовите проблему космических полётов: danger, health, radiation, cost, isolation.",
            "Предложите solution: training, safety equipment, medical support, research.",
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
        "space",
        "space trip",
        "outer space",
        "earth",
        "unique",
        "dream",
        "discovery",
        "teenagers",
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
        "The table shows the results of a survey about why Zetland teenagers would like to go on a space trip. The project is important because space exploration is becoming more popular among young people all over the world.\n\nAccording to the table, 45% of respondents want to experience something unique, which makes this the most common reason. Another 28% would like to see the Earth from outer space, while 15% hope to make a dream come true. By contrast, only 10% want to learn more about the world and just 2% aim to make a scientific discovery.\n\nIt is clear that experiencing something unique is much more popular than making a scientific discovery. The figure for seeing the Earth from outer space is also noticeably higher than the percentage for learning more about the world.\n\nOne problem that can arise with people going into space is health risks and dangerous conditions. Space travellers may also suffer from isolation and stress during long flights. This problem can be solved by careful training, modern safety equipment and medical support.\n\nIn my opinion, space trips are very appealing to me. I believe they would give me a chance to see something truly unique and unforgettable."
    },
    {
      id: "ege-project-task38-u13-sports",
      unitLabel: "Unit 13",
      switchLabel: "Task 38.2",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.2 · survey report",
      lead:
        "Unit 13: essay-project on why young people do sports. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on why young people do sports in Zetland. You have found some data on the subject - the results of a survey (see the pie chart below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion: "Why do you do sports?",
      promptChart: [
        ["Losing weight", "35"],
        ["Getting rid of stress", "25"],
        ["Going together with friends", "19"],
        ["Following parents' advice", "11"],
        ["Improving health", "10"]
      ],
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise if young people do not do sports and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on the importance of sports in the lives of young people."
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
        "A problem connected with not doing sports",
        "A practical solution",
        "Your opinion on the importance of sports for young people",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из диаграммы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, связанную with not doing sports",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о importance of sports in the lives of young people",
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
        "sports",
        "do sports",
        "zetland",
        "young people"
      ],
      reportFactItems: [
        {
          label: "35% do sports to lose weight",
          keywords: ["35", "losing weight", "lose weight", "weight"]
        },
        {
          label: "25% do sports to get rid of stress",
          keywords: ["25", "getting rid of stress", "stress", "get rid of stress"]
        },
        {
          label: "19% do sports together with friends",
          keywords: ["19", "going together with friends", "with friends", "friends"]
        },
        {
          label: "11% do sports following parents' advice",
          keywords: ["11", "following parents", "parents' advice", "parents advice"]
        },
        {
          label: "10% do sports to improve health",
          keywords: ["10", "improving health", "improve health", "health"]
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
        "do not do sports",
        "don't do sports",
        "no sport",
        "inactive",
        "overweight",
        "obesity",
        "stress",
        "weak",
        "unhealthy",
        "lazy"
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
        "start",
        "join",
        "club",
        "exercise",
        "regularly",
        "active"
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
        "importance",
        "sports",
        "young people"
      ],
      reportConclusionKeywords: [
        "in conclusion",
        "to sum up",
        "all in all",
        "overall"
      ],
      usefulPhrases: {
        opening: [
          "The pie chart shows the results of a survey about why young people do sports in Zetland.",
          "The project is about teenagers' motives for doing physical activity."
        ],
        facts: [
          "According to the chart, 35% of respondents ...",
          "Another 25% do sports to ...",
          "Only 10% choose ..."
        ],
        compare: [
          "This figure is slightly higher than ...",
          "Compared with ..., this percentage is much lower.",
          "Losing weight is more popular than improving health."
        ],
        problem: [
          "One problem that can arise if young people do not do sports is poor health and extra weight.",
          "They may also feel more stressed and tired because they spend too much time sitting."
        ],
        solution: [
          "This problem can be solved by joining a sports club and exercising regularly with friends.",
          "Schools should also offer more active lessons and encourage students to walk or cycle."
        ],
        opinion: [
          "In my opinion, sports are very important in the lives of young people.",
          "I believe they help teenagers stay healthy, reduce stress and make new friends."
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
            "4. A problem if young people do NOT do sports + a solution.",
            "5. Your opinion on the importance of sports for young people.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из диаграммы",
          lines: [
            "Лучше выбрать 2-3 самые заметные цифры, а не описывать весь chart подряд.",
            "Например: 35%, 25% и 19% / 11%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Назовите проблему без спорта: poor health, weight, stress, inactive lifestyle.",
            "Предложите solution: join a club, exercise regularly, school activities.",
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
        "sports",
        "weight",
        "stress",
        "friends",
        "health",
        "parents",
        "young people",
        "survey",
        "chart",
        "zetland"
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
          pattern: "\\bdo sport to\\b",
          flags: "i",
          msg: "Обычно `do sports to`, с `-s`."
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
        "The pie chart shows the results of a survey about why young people do sports in Zetland. The project is important because physical activity affects teenagers' health, mood and social life.\n\nAccording to the chart, 35% of respondents do sports to lose weight, which makes this the most common reason. Another 25% exercise to get rid of stress, while 19% go together with friends. By contrast, only 11% follow their parents' advice and just 10% do sports to improve health.\n\nIt is clear that losing weight is more popular than improving health. The figure for getting rid of stress is also noticeably higher than the percentage for following parents' advice.\n\nOne problem that can arise if young people do not do sports is poor health and extra weight. They may also feel more stressed and tired because they spend too much time sitting in front of screens. This problem can be solved by joining a sports club and exercising regularly with friends.\n\nIn my opinion, sports are very important in the lives of young people. I believe they help teenagers stay healthy, reduce stress and make new friends."
    }
  );
})(typeof window !== "undefined" ? window : this);
