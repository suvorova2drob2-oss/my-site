(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack || !Array.isArray(pack.tasks)) return;
  pack.tasks.push(
    {
      id: "ege-email-task37-u14",
      unitLabel: "Unit 14",
      switchLabel: "Task 37",
      mode: "email",
      title: "Writing · Personal Email",
      typeLabel: "Task 37 · personal email",
      lead:
        "Unit 14: personal email. Локальная проверка по реальным критериям ЕГЭ для задания 37.",
      promptLead:
        "You have received an email message from your English-speaking pen-friend Harry:",
      promptMeta: {
        from: "Harry@mail.uk",
        to: "Russian_friend@ege.ru",
        subject: "Music festivals"
      },
      promptRu:
        "...Last weekend I went to a local music festival. Are music festivals popular with Russian teenagers? Why, or why not? What music events are held in your region, if any? What music event would you like to attend or take part in?\nA week ago I went on a hiking trip with my family...",
      instructions: [
        "Write an email to Harry.",
        "In your message: answer his questions;",
        "ask 3 questions about his hiking trip.",
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
        "Обращение (Dear Harry, ...)",
        "Короткая thanks/opening phrase",
        "Ответ: music festivals popular with Russian teens + why / why not",
        "Ответ: music events in your region",
        "Ответ: music event to attend or take part in",
        "3 вопроса к Harry про hiking trip with family",
        "Завершающая фраза",
        "Подпись"
      ],
      precheckItems: [
        "Я добавил(а) обращение `Dear Harry,`",
        "Я ответил(а) на вопросы Harry про music festivals",
        "Я задал(а) 3 вопроса back про hiking trip",
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
            "Are music festivals popular with Russian teenagers? Why, or why not?",
          keywords: [
            "music festivals",
            "popular with russian teenagers",
            "popular with teens",
            "why",
            "because",
            "yes",
            "no",
            "quite popular",
            "not very popular"
          ]
        },
        {
          id: "q2",
          label: "What music events are held in your region, if any?",
          keywords: [
            "music events",
            "in my region",
            "in our region",
            "concerts",
            "festivals",
            "held",
            "if any",
            "sometimes",
            "open-air"
          ]
        },
        {
          id: "q3",
          label:
            "What music event would you like to attend or take part in?",
          keywords: [
            "music event",
            "would like to attend",
            "take part in",
            "i would like",
            "i'd like",
            "concert",
            "festival",
            "contest"
          ]
        }
      ],
      questionBackHint: "his hiking trip with his family",
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
        greeting: ["dear harry"],
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
          "Dear Harry,",
          "Thanks for your email.",
          "It was great to hear from you again."
        ],
        answers: [
          "Music festivals are quite popular with Russian teenagers because they love live music.",
          "In my region we have open-air concerts and school music contests.",
          "I would like to attend an international music festival in Moscow."
        ],
        questions: [
          "Where did you go hiking with your family?",
          "What was the weather like?",
          "Did you enjoy the trip?"
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
            "1. Dear Harry,",
            "2. Thanks for your email / It was great to hear from you.",
            "3. Ответы на 3 вопроса Harry про music festivals.",
            "4. 3 вопроса о hiking trip with his family.",
            "5. Closing phrase: Anyway, I have to go now. / Write back soon.",
            "6. Подпись: Best wishes, ... / Your Russian friend"
          ]
        },
        {
          id: "answers",
          label: "Ответы Harry",
          title: "Что нужно раскрыть",
          lines: [
            "Скажите, popular ли music festivals with Russian teenagers, и объясните why / why not.",
            "Перечислите music events, held in your region (или что их мало).",
            "Назовите music event, который хотели бы attend or take part in.",
            "Не отвечайте одним словом: лучше 1-2 предложения на каждый пункт."
          ]
        },
        {
          id: "questions",
          label: "3 questions back",
          title: "Какие вопросы задать Harry",
          lines: [
            "Нужно задать ровно 3 вопроса про hiking trip with family.",
            "Примеры: Where did you go? Was it difficult? Who went with you?",
            "Вопросы должны быть именно про hiking trip, не про music festival."
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
        "music",
        "festivals",
        "concerts",
        "region",
        "teenagers",
        "hiking",
        "family",
        "harry",
        "events"
      ],
      commonMistakes: [
        {
          pattern: "\\bdear harry\\b(?!,)",
          flags: "i",
          msg: "После `Dear Harry` нужна запятая."
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
          pattern: "\\btake part on\\b",
          flags: "i",
          msg: "Нужно `take part in`, а не `take part on`."
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
        "Dear Harry,\n\nThanks for your email. It was great to hear from you. I'm glad you enjoyed the local music festival!\n\nMusic festivals are quite popular with Russian teenagers because they love live music and meeting friends. In my region we have open-air concerts and school music contests in summer. I would like to attend an international music festival in Moscow one day.\n\nBy the way, where did you go hiking with your family? What was the weather like? Did you enjoy the trip?\n\nAnyway, I have to go now. Write back soon.\n\nBest wishes,\nYour Russian friend"
    },
    {
      id: "ege-project-task38-u14-clothes",
      unitLabel: "Unit 14",
      switchLabel: "Task 38.1",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.1 · survey report",
      lead:
        "Unit 14: essay-project on why Zetlanders buy new clothes. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on why Zetlanders buy new clothes. You have found some data on the subject - the results of a survey (see the table below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion: "Why do you buy new clothes?",
      promptTable: {
        headers: ["Reasons", "Number of respondents (%)"],
        rows: [
          ["To replace worn-out clothes", "40"],
          ["To keep up with fashion", "31"],
          ["To give as a present", "16"],
          ["To enrich one's wardrobe", "7"],
          ["To improve one's mood", "6"]
        ]
      },
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise with shopping for clothes and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on the role of fashion in our lives."
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
        "A problem connected with shopping for clothes",
        "A logical solution",
        "Your opinion on the role of fashion in our lives",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из таблицы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, связанную with shopping for clothes",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о the role of fashion in our lives",
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
        "buy new clothes",
        "clothes",
        "shopping"
      ],
      reportFactItems: [
        {
          label: "40% buy new clothes to replace worn-out clothes",
          keywords: ["40", "replace worn-out", "worn-out", "worn out", "replace"]
        },
        {
          label: "31% buy new clothes to keep up with fashion",
          keywords: ["31", "keep up with fashion", "fashion", "keep up"]
        },
        {
          label: "16% buy new clothes to give as a present",
          keywords: ["16", "give as a present", "present", "gift"]
        },
        {
          label: "7% buy new clothes to enrich one's wardrobe",
          keywords: ["7", "enrich", "wardrobe"]
        },
        {
          label: "6% buy new clothes to improve one's mood",
          keywords: ["6", "improve one's mood", "improve mood", "mood"]
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
        "impulse",
        "too many",
        "waste",
        "trends",
        "pressure",
        "spend"
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
        "list",
        "budget",
        "need",
        "choose carefully"
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
        "role of fashion",
        "fashion",
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
          "The table shows the results of a survey about why Zetlanders buy new clothes.",
          "The project is about people's motives for shopping and updating their wardrobe."
        ],
        facts: [
          "According to the table, 40% of respondents ...",
          "Another 31% buy clothes to ...",
          "Only 6% choose ..."
        ],
        compare: [
          "This figure is slightly higher than ...",
          "Compared with ..., this percentage is much lower.",
          "Replacing worn-out clothes is more common than buying clothes to improve one's mood."
        ],
        problem: [
          "One problem that can arise with shopping for clothes is spending too much money on things people do not really need.",
          "Many shoppers may also buy clothes impulsively just to follow short-lived trends."
        ],
        solution: [
          "This problem can be solved by making a shopping list and setting a budget before going to the store.",
          "They should also think about whether they really need new clothes or can repair old ones."
        ],
        opinion: [
          "In my opinion, fashion plays an important but not the most important role in our lives.",
          "I believe clothes should be comfortable and suit our personality, not just follow every new trend."
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
            "4. A problem connected with shopping for clothes + a solution.",
            "5. Your opinion on the role of fashion in our lives.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из таблицы",
          lines: [
            "Лучше выбрать 2-3 самых заметных цифры, а не переписывать всю таблицу.",
            "Например: 40%, 31% и 16% / 7%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "compare",
          label: "Сравнение",
          title: "Как делать comparison",
          lines: [
            "Сравнивайте причины: 40% is higher than 31%.",
            "Можно сравнить worn-out clothes с improve mood (6%).",
            "Не делайте слишком много сравнений: 1-2 обычно достаточно."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Назовите проблему shopping: too much money, impulse buying, following trends.",
            "Предложите solution: budget, shopping list, buy only what you need.",
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
        "clothes",
        "fashion",
        "shopping",
        "wardrobe",
        "present",
        "mood",
        "worn-out",
        "survey",
        "table",
        "zetland"
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
        "The table shows the results of a survey about why Zetlanders buy new clothes. The project is important because shopping habits reflect how people spend money and follow fashion trends.\n\nAccording to the table, 40% of respondents buy new clothes to replace worn-out items, which makes this the most common reason. Another 31% shop to keep up with fashion, while 16% buy clothes to give as a present. By contrast, only 7% want to enrich their wardrobe and just 6% buy clothes to improve their mood.\n\nIt is clear that replacing worn-out clothes is slightly more popular than keeping up with fashion. The figure for giving presents is also noticeably higher than the percentage for improving one's mood.\n\nOne problem that can arise with shopping for clothes is spending too much money on things people do not really need. Many shoppers may also buy clothes impulsively just to follow short-lived trends. This problem can be solved by making a shopping list and setting a budget before going to the store.\n\nIn my opinion, fashion plays an important but not the most important role in our lives. I believe clothes should be comfortable and suit our personality, not just follow every new trend."
    },
    {
      id: "ege-project-task38-u14-skills",
      unitLabel: "Unit 14",
      switchLabel: "Task 38.2",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.2 · survey report",
      lead:
        "Unit 14: essay-project on skills teenagers prefer to learn. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on what skills Zetland teenagers prefer to learn. You have found some data on the subject - the results of a survey (see the pie chart below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion: "What skill would you like to learn?",
      promptChart: [
        ["Driving a car", "36"],
        ["Roller-skating", "24"],
        ["Speaking a foreign language", "19"],
        ["Dancing", "12"],
        ["Cooking", "9"]
      ],
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise with developing new skills and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on the most important skill to learn for you."
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
        "A problem connected with developing new skills",
        "A practical solution",
        "Your opinion on the most important skill to learn for you",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из диаграммы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, связанную with developing new skills",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о the most important skill to learn for me",
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
        "skills",
        "learn",
        "zetland",
        "teenagers"
      ],
      reportFactItems: [
        {
          label: "36% would like to learn driving a car",
          keywords: ["36", "driving a car", "driving", "drive"]
        },
        {
          label: "24% would like to learn roller-skating",
          keywords: ["24", "roller-skating", "roller skating", "skating"]
        },
        {
          label: "19% would like to learn speaking a foreign language",
          keywords: ["19", "foreign language", "speaking a foreign language", "language"]
        },
        {
          label: "12% would like to learn dancing",
          keywords: ["12", "dancing", "dance"]
        },
        {
          label: "9% would like to learn cooking",
          keywords: ["9", "cooking", "cook"]
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
        "expensive",
        "difficult",
        "give up",
        "quit",
        "motivation",
        "classes",
        "cost",
        "money",
        "practice"
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
        "start with",
        "practice",
        "regularly",
        "course",
        "teacher",
        "online"
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
        "most important skill",
        "skill",
        "learn"
      ],
      reportConclusionKeywords: [
        "in conclusion",
        "to sum up",
        "all in all",
        "overall"
      ],
      usefulPhrases: {
        opening: [
          "The pie chart shows the results of a survey about what skills Zetland teenagers prefer to learn.",
          "The project is about how young people choose new abilities to develop."
        ],
        facts: [
          "According to the chart, 36% of respondents ...",
          "Another 24% would like to learn ...",
          "Only 9% choose ..."
        ],
        compare: [
          "This figure is slightly higher than ...",
          "Compared with ..., this percentage is much lower.",
          "Driving is more popular than cooking."
        ],
        problem: [
          "One problem that can arise with developing new skills is lack of time and money for classes.",
          "Teenagers may also lose motivation if progress is slow."
        ],
        solution: [
          "This problem can be solved by practising a little every day and using free online tutorials.",
          "They should also choose one skill at a time and set small realistic goals."
        ],
        opinion: [
          "In my opinion, speaking a foreign language is the most important skill for me to learn.",
          "I believe it will help me study abroad and communicate with people from other countries."
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
            "4. A problem connected with developing new skills + a solution.",
            "5. Your opinion on the most important skill to learn for you.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из диаграммы",
          lines: [
            "Лучше выбрать 2-3 самые заметные цифры, а не описывать весь chart подряд.",
            "Например: 36%, 24% и 19% / 12%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Назовите проблему: no time, cost, lack of motivation, slow progress.",
            "Предложите solution: practice daily, online tutorials, one skill at a time.",
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
        "driving",
        "roller-skating",
        "language",
        "dancing",
        "cooking",
        "teenagers",
        "learn",
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
          pattern: "\\blearn a driving\\b",
          flags: "i",
          msg: "Нужно `learn driving` / `learn to drive`."
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
        "The pie chart shows the results of a survey about what skills Zetland teenagers prefer to learn. The project is important because learning new skills helps young people become more independent and confident.\n\nAccording to the chart, 36% of respondents would like to learn driving a car, which makes it the most popular choice. Another 24% choose roller-skating, while 19% want to learn speaking a foreign language. By contrast, only 12% prefer dancing and just 9% choose cooking.\n\nIt is clear that driving is slightly more popular than roller-skating. The figure for speaking a foreign language is also noticeably higher than the percentage for cooking.\n\nOne problem that can arise with developing new skills is lack of time and money for classes. Teenagers may also lose motivation if progress is slow. This problem can be solved by practising a little every day and using free online tutorials.\n\nIn my opinion, speaking a foreign language is the most important skill for me to learn. I believe it will help me study abroad and communicate with people from other countries."
    }
  );
})(typeof window !== "undefined" ? window : this);
