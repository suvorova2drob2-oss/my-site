(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack || !Array.isArray(pack.tasks)) return;
  pack.tasks.push(
    {
      id: "ege-email-task37-u9",
      unitLabel: "Unit 9",
      switchLabel: "Task 37",
      mode: "email",
      title: "Writing · Personal Email",
      typeLabel: "Task 37 · personal email",
      lead:
        "Unit 9: personal email. Локальная проверка по реальным критериям ЕГЭ для задания 37.",
      promptLead:
        "You have received an email message from your English-speaking pen-friend Mike:",
      promptMeta: {
        from: "Mike@mail.uk",
        to: "Russian_friend@ege.ru",
        subject: "Photography"
      },
      promptRu:
        "...Many of my friends enjoy photography a lot, and I like it too. What is your attitude to photography? Is it a popular hobby in your region? Why, or why not? What new hobby would you like to take up in the future?\nYesterday I bought a present for my sister's birthday...",
      instructions: [
        "Write an email to Mike.",
        "In your message: answer his questions;",
        "ask 3 questions about the present he bought for his sister.",
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
        "Обращение (Dear Mike, ...)",
        "Короткая thanks/opening phrase",
        "Ответ: attitude to photography",
        "Ответ: popular hobby in your region + why / why not",
        "Ответ: new hobby to take up in the future",
        "3 вопроса к Mike про the present for his sister",
        "Завершающая фраза",
        "Подпись"
      ],
      precheckItems: [
        "Я добавил(а) обращение `Dear Mike,`",
        "Я ответил(а) на вопросы Mike про photography",
        "Я задал(а) 3 вопроса back про the present for his sister",
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
          label: "What is your attitude to photography?",
          keywords: [
            "attitude to photography",
            "photography",
            "i like",
            "i enjoy",
            "i love",
            "interesting",
            "hobby",
            "take photos",
            "take pictures"
          ]
        },
        {
          id: "q2",
          label: "Is it a popular hobby in your region? Why, or why not?",
          keywords: [
            "popular hobby",
            "in my region",
            "in our region",
            "why",
            "because",
            "yes",
            "no",
            "quite popular",
            "not very popular"
          ]
        },
        {
          id: "q3",
          label: "What new hobby would you like to take up in the future?",
          keywords: [
            "new hobby",
            "take up",
            "in the future",
            "would like to",
            "i would like",
            "learn",
            "start",
            "try"
          ]
        }
      ],
      questionBackHint: "the present he bought for his sister",
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
        greeting: ["dear mike"],
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
          "Dear Mike,",
          "Thanks for your email.",
          "It was great to hear from you again."
        ],
        answers: [
          "I really like photography because it helps me capture beautiful moments.",
          "In my region photography is quite a popular hobby because many people enjoy taking pictures of nature.",
          "In the future I would like to take up drawing."
        ],
        questions: [
          "What present did you buy for your sister?",
          "Where did you buy it?",
          "Does she like it?"
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
            "1. Dear Mike,",
            "2. Thanks for your email / It was great to hear from you.",
            "3. Ответы на 3 вопроса Mike про photography.",
            "4. 3 вопроса о the present for his sister's birthday.",
            "5. Closing phrase: Anyway, I have to go now. / Write back soon.",
            "6. Подпись: Best wishes, ... / Your Russian friend"
          ]
        },
        {
          id: "answers",
          label: "Ответы Mike",
          title: "Что нужно раскрыть",
          lines: [
            "Выскажите своё attitude to photography (like / enjoy / not interested + почему).",
            "Скажите, popular ли photography in your region, и объясните why / why not.",
            "Назовите new hobby, которое хотите take up in the future.",
            "Не отвечайте одним словом: лучше 1-2 предложения на каждый пункт."
          ]
        },
        {
          id: "questions",
          label: "3 questions back",
          title: "Какие вопросы задать Mike",
          lines: [
            "Нужно задать ровно 3 вопроса про the present for his sister.",
            "Примеры: What did you buy? Where did you buy it? How much did it cost?",
            "Вопросы должны быть именно про present, не про photography."
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
        "photography",
        "hobby",
        "region",
        "present",
        "sister",
        "mike",
        "photos",
        "future",
        "birthday"
      ],
      commonMistakes: [
        {
          pattern: "\\bdear mike\\b(?!,)",
          flags: "i",
          msg: "После `Dear Mike` нужна запятая."
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
          pattern: "\\btake up a new hobby in future\\b",
          flags: "i",
          msg: "Нужно `in the future`, не просто `in future`."
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
        "Dear Mike,\n\nThanks for your email. It was great to hear from you. I'm glad you enjoy photography too!\n\nI really like photography because it helps me capture beautiful moments. In my region it is quite a popular hobby because many people enjoy taking pictures of nature and city life. In the future I would like to take up drawing.\n\nBy the way, what present did you buy for your sister? Where did you buy it? Does she like it?\n\nAnyway, I have to go now. Write back soon.\n\nBest wishes,\nYour Russian friend"
    },
    {
      id: "ege-project-task38-u9-home-decor",
      unitLabel: "Unit 9",
      switchLabel: "Task 38.1",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.1 · survey report",
      lead:
        "Unit 9: essay-project on the most popular home decor in Zetland. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on the most popular home decor in Zetland. You have found some data on the subject - the results of a survey (see the table below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion: "What home decor do you prefer?",
      promptTable: {
        headers: ["Home decor", "Number of respondents (%)"],
        rows: [
          ["Wall art (posters, prints, paintings)", "39"],
          ["Vases", "25"],
          ["Table lamps", "15"],
          ["Cushions", "11"],
          ["Rugs", "10"]
        ]
      },
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise with decorating your house and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on the best decoration for your room."
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
        "A problem connected with decorating your house",
        "A logical solution",
        "Your opinion on the best decoration for your room",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из таблицы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, связанную with decorating your house",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о the best decoration for your room",
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
        "home decor",
        "decorating"
      ],
      reportFactItems: [
        {
          label: "39% prefer wall art",
          keywords: ["39", "wall art", "posters", "prints", "paintings"]
        },
        {
          label: "25% prefer vases",
          keywords: ["25", "vases", "vase"]
        },
        {
          label: "15% prefer table lamps",
          keywords: ["15", "table lamps", "lamp", "lamps"]
        },
        {
          label: "11% prefer cushions",
          keywords: ["11", "cushions", "cushion"]
        },
        {
          label: "10% prefer rugs",
          keywords: ["10", "rugs", "rug"]
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
        "expensive",
        "money",
        "budget",
        "match",
        "style",
        "clutter",
        "too much",
        "small room",
        "space",
        "colour",
        "color"
      ],
      reportSolutionKeywords: [
        "solution",
        "solve this problem",
        "to avoid this",
        "to prevent this",
        "they should",
        "people should",
        "it can be solved",
        "one way to solve it",
        "plan",
        "choose",
        "simple",
        "budget",
        "measure",
        "colour scheme"
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
        "best decoration",
        "my room",
        "room"
      ],
      reportConclusionKeywords: [
        "in conclusion",
        "to sum up",
        "all in all",
        "overall"
      ],
      usefulPhrases: {
        opening: [
          "The table shows the results of a survey about the most popular home decor in Zetland.",
          "The project is about how people choose items to make their homes more comfortable and attractive."
        ],
        facts: [
          "According to the table, 39% of respondents ...",
          "Another 25% prefer ...",
          "Only 10% choose ..."
        ],
        compare: [
          "This figure is much higher than ...",
          "Compared with ..., this percentage is lower.",
          "Wall art is far more popular than rugs."
        ],
        problem: [
          "One problem that can arise with decorating your house is spending too much money on items that do not match.",
          "People may also buy too many things and make a small room look cluttered."
        ],
        solution: [
          "This problem can be solved by planning a simple colour scheme and buying only what fits the room.",
          "They should also measure the space and set a budget before shopping."
        ],
        opinion: [
          "In my opinion, the best decoration for my room is a few posters and a table lamp.",
          "I believe simple wall art makes the room cosy without taking up too much space."
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
            "4. A problem connected with decorating + a solution.",
            "5. Your opinion on the best decoration for your room.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из таблицы",
          lines: [
            "Лучше выбрать 2-3 самых заметных цифры, а не переписывать всю таблицу.",
            "Например: 39%, 25% и 15% / 11%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "compare",
          label: "Сравнение",
          title: "Как делать comparison",
          lines: [
            "Сравнивайте виды decor: 39% is higher than 25%.",
            "Можно сравнить wall art с rugs (10%).",
            "Не делайте слишком много сравнений: 1-2 обычно достаточно."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Назовите проблему: too much money, cluttered room, styles do not match.",
            "Предложите solution: plan, budget, colour scheme, measure space.",
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
        "home decor",
        "wall art",
        "vases",
        "lamps",
        "cushions",
        "rugs",
        "room",
        "house",
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
        "The table shows the results of a survey about the most popular home decor in Zetland. The project is important because the way people decorate their homes reflects their taste and makes everyday life more comfortable.\n\nAccording to the table, 39% of respondents prefer wall art such as posters, prints and paintings, which makes it the most popular choice. Another 25% choose vases, while 15% prefer table lamps. By contrast, only 11% like cushions and just 10% choose rugs.\n\nIt is clear that wall art is much more popular than rugs. The figure for vases is also noticeably higher than the percentage for cushions.\n\nOne problem that can arise with decorating your house is spending too much money on items that do not match each other. People may also buy too many things and make a small room look cluttered. This problem can be solved by planning a simple colour scheme and setting a budget before shopping.\n\nIn my opinion, the best decoration for my room is a few posters and a table lamp. I believe simple wall art makes the room cosy and bright without taking up too much space."
    },
    {
      id: "ege-project-task38-u9-pets",
      unitLabel: "Unit 9",
      switchLabel: "Task 38.2",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.2 · survey report",
      lead:
        "Unit 9: essay-project on the most popular pet animals in Zetland. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on the most popular pet animals in Zetland. You have found some data on the subject - the results of a survey (see the pie chart below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion: "What pet animal have you got?",
      promptChart: [
        ["Cats", "38"],
        ["Dogs", "32"],
        ["Rabbits", "14"],
        ["Parrots", "12"],
        ["Hamsters", "4"]
      ],
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise with having dogs as pets and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on the benefits of having a pet in a family."
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
        "A problem connected with having dogs as pets",
        "A practical solution",
        "Your opinion on the benefits of having a pet in a family",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из диаграммы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, связанную with having dogs as pets",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о benefits of having a pet in a family",
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
        "pet animals",
        "pets",
        "zetland"
      ],
      reportFactItems: [
        {
          label: "38% have cats as pets",
          keywords: ["38", "cats", "cat"]
        },
        {
          label: "32% have dogs as pets",
          keywords: ["32", "dogs", "dog"]
        },
        {
          label: "14% have rabbits as pets",
          keywords: ["14", "rabbits", "rabbit"]
        },
        {
          label: "12% have parrots as pets",
          keywords: ["12", "parrots", "parrot"]
        },
        {
          label: "4% have hamsters as pets",
          keywords: ["4", "hamsters", "hamster"]
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
        "dogs",
        "dog",
        "walk",
        "bark",
        "noise",
        "time",
        "care",
        "training",
        "mess",
        "flat",
        "apartment"
      ],
      reportSolutionKeywords: [
        "solution",
        "solve this problem",
        "to avoid this",
        "to prevent this",
        "they should",
        "owners should",
        "families should",
        "it can be solved",
        "one way to solve it",
        "walk",
        "train",
        "schedule",
        "rules",
        "exercise"
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
        "benefits",
        "pet",
        "family"
      ],
      reportConclusionKeywords: [
        "in conclusion",
        "to sum up",
        "all in all",
        "overall"
      ],
      usefulPhrases: {
        opening: [
          "The pie chart shows the results of a survey about the most popular pet animals in Zetland.",
          "The project is about which animals people keep at home as pets."
        ],
        facts: [
          "According to the chart, 38% of respondents ...",
          "Another 32% have ...",
          "Only 4% choose ..."
        ],
        compare: [
          "This figure is slightly higher than ...",
          "Compared with ..., this percentage is much lower.",
          "Cats are more popular than hamsters."
        ],
        problem: [
          "One problem that can arise with having dogs as pets is that they need a lot of time and regular walks.",
          "Dogs may also bark and disturb neighbours if they are not trained properly."
        ],
        solution: [
          "This problem can be solved by walking the dog every day and teaching it basic rules at home.",
          "Families should also choose a breed that suits their lifestyle and living space."
        ],
        opinion: [
          "In my opinion, having a pet in a family has many benefits.",
          "I believe pets teach children to be responsible and make the home feel warmer and happier."
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
            "4. A problem connected with having dogs as pets + a solution.",
            "5. Your opinion on the benefits of having a pet in a family.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из диаграммы",
          lines: [
            "Лучше выбрать 2-3 самые заметные цифры, а не описывать весь chart подряд.",
            "Например: 38%, 32% и 14% / 12%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Назовите проблему именно с dogs: walks, time, barking, training, flat.",
            "Предложите solution: daily walks, training, choose suitable breed.",
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
        "pets",
        "cats",
        "dogs",
        "rabbits",
        "parrots",
        "hamsters",
        "family",
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
          pattern: "\\bhave got a dog\\b.*\\bhave got a dogs\\b",
          flags: "i",
          msg: "Проверьте число: `a dog`, `dogs`."
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
        "The pie chart shows the results of a survey about the most popular pet animals in Zetland. The project is important because pets are part of many families and influence people's daily routines.\n\nAccording to the chart, 38% of respondents have cats, which makes them the most popular pets. Another 32% keep dogs, while 14% have rabbits. By contrast, only 12% own parrots and just 4% choose hamsters.\n\nIt is clear that cats are slightly more popular than dogs. The figure for rabbits is also noticeably higher than the percentage for hamsters.\n\nOne problem that can arise with having dogs as pets is that they need a lot of time and regular walks. Dogs may also bark and disturb neighbours if they are not trained properly. This problem can be solved by walking the dog every day and teaching it basic rules at home.\n\nIn my opinion, having a pet in a family has many benefits. I believe pets teach children to be responsible, reduce stress and make the home feel warmer and happier."
    }
  );
})(typeof window !== "undefined" ? window : this);
