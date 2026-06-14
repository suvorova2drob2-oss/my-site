(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack || !Array.isArray(pack.tasks)) return;
  pack.tasks.push(
    {
      id: "ege-email-task37-u16",
      unitLabel: "Unit 16",
      switchLabel: "Task 37",
      mode: "email",
      title: "Writing · Personal Email",
      typeLabel: "Task 37 · personal email",
      lead:
        "Unit 16: personal email. Локальная проверка по реальным критериям ЕГЭ для задания 37.",
      promptLead:
        "You have received an email message from your English-speaking pen-friend Ben:",
      promptMeta: {
        from: "Ben@mail.uk",
        to: "Russian_friend@ege.ru",
        subject: "Volunteering"
      },
      promptRu:
        "...Next week I am planning to volunteer for the local environmental event to plant trees. Have you ever participated in similar ecology projects? What activities are organized by environmentalists at your place, if any? Do you consider volunteer work meaningful for teenagers? Why, or why not?\nLast month I took part in a school sports contest...",
      instructions: [
        "Write an email to Ben.",
        "In your message: answer his questions;",
        "ask 3 questions about the sports contest.",
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
        "Обращение (Dear Ben, ...)",
        "Короткая thanks/opening phrase",
        "Ответ: ecology projects participation",
        "Ответ: environmentalists' activities at your place",
        "Ответ: volunteer work meaningful + why / why not",
        "3 вопроса к Ben про school sports contest",
        "Завершающая фраза",
        "Подпись"
      ],
      precheckItems: [
        "Я добавил(а) обращение `Dear Ben,`",
        "Я ответил(а) на вопросы Ben про volunteering and ecology",
        "Я задал(а) 3 вопроса back про sports contest",
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
            "Have you ever participated in similar ecology projects?",
          keywords: [
            "ecology projects",
            "participated",
            "ever participated",
            "similar",
            "yes",
            "once",
            "never",
            "planting trees",
            "environmental"
          ]
        },
        {
          id: "q2",
          label:
            "What activities are organized by environmentalists at your place, if any?",
          keywords: [
            "environmentalists",
            "activities",
            "organized",
            "at my place",
            "at our place",
            "if any",
            "clean-up",
            "recycling",
            "planting",
            "campaigns"
          ]
        },
        {
          id: "q3",
          label:
            "Do you consider volunteer work meaningful for teenagers? Why, or why not?",
          keywords: [
            "volunteer work",
            "meaningful",
            "teenagers",
            "why",
            "because",
            "yes",
            "no",
            "useful",
            "important",
            "responsible"
          ]
        }
      ],
      questionBackHint: "the sports contest",
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
        greeting: ["dear ben"],
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
          "Dear Ben,",
          "Thanks for your email.",
          "It was great to hear from you again."
        ],
        answers: [
          "Yes, I have participated in a school clean-up project once.",
          "At our place environmentalists organize tree planting and recycling campaigns.",
          "I consider volunteer work very meaningful for teenagers because it teaches responsibility."
        ],
        questions: [
          "What sport did you compete in at the contest?",
          "Did you win any medals?",
          "How did you prepare for it?"
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
            "1. Dear Ben,",
            "2. Thanks for your email / It was great to hear from you.",
            "3. Ответы на 3 вопроса Ben про volunteering and ecology.",
            "4. 3 вопроса о school sports contest.",
            "5. Closing phrase: Anyway, I have to go now. / Write back soon.",
            "6. Подпись: Best wishes, ... / Your Russian friend"
          ]
        },
        {
          id: "answers",
          label: "Ответы Ben",
          title: "Что нужно раскрыть",
          lines: [
            "Скажите, participated ли вы in similar ecology projects (yes/no + пример).",
            "Перечислите activities, organized by environmentalists at your place.",
            "Выскажите мнение: meaningful ли volunteer work for teenagers + why / why not.",
            "Не отвечайте одним словом: лучше 1-2 предложения на каждый пункт."
          ]
        },
        {
          id: "questions",
          label: "3 questions back",
          title: "Какие вопросы задать Ben",
          lines: [
            "Нужно задать ровно 3 вопроса про school sports contest.",
            "Примеры: What sport was it? Did you win? Where was it held?",
            "Вопросы должны быть именно про sports contest, не про volunteering."
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
        "volunteering",
        "ecology",
        "environment",
        "teenagers",
        "sports",
        "contest",
        "ben",
        "trees",
        "volunteer"
      ],
      commonMistakes: [
        {
          pattern: "\\bdear ben\\b(?!,)",
          flags: "i",
          msg: "После `Dear Ben` нужна запятая."
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
          pattern: "\\bparticipate in similar ecology project\\b",
          flags: "i",
          msg: "Обычно `ecology projects` во множественном числе."
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
        "Dear Ben,\n\nThanks for your email. It was great to hear from you. Good luck with your tree planting event next week!\n\nYes, I have participated in a school clean-up project once. At our place environmentalists organize tree planting and recycling campaigns in spring. I consider volunteer work very meaningful for teenagers because it teaches responsibility and helps the community.\n\nBy the way, what sport did you compete in at the school sports contest? Did you win any medals? How did you prepare for it?\n\nAnyway, I have to go now. Write back soon.\n\nBest wishes,\nYour Russian friend"
    },
    {
      id: "ege-project-task38-u16-information",
      unitLabel: "Unit 16",
      switchLabel: "Task 38.1",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.1 · survey report",
      lead:
        "Unit 16: essay-project on sources of information. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on sources of information teenagers in Zetland use most often. You have found some data on the subject - the results of a survey (see the table below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion: "What source of information do you use most often?",
      promptTable: {
        headers: ["Sources of information", "Number of teenagers (%)"],
        rows: [
          ["Internet sites, apps", "40"],
          ["Friends", "24"],
          ["Parents, relatives", "18"],
          ["School teachers", "14"],
          ["Newspapers, magazines", "4"]
        ]
      },
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise with getting information from the Internet and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on the role of the Internet in teenagers' lives."
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
        "A problem connected with getting information from the Internet",
        "A logical solution",
        "Your opinion on the role of the Internet in teenagers' lives",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из таблицы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, связанную with getting information from the Internet",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о the role of the Internet in teenagers' lives",
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
        "sources of information",
        "information",
        "teenagers"
      ],
      reportFactItems: [
        {
          label: "40% use internet sites and apps most often",
          keywords: ["40", "internet sites", "apps", "internet", "online"]
        },
        {
          label: "24% use friends as a source of information",
          keywords: ["24", "friends", "friend"]
        },
        {
          label: "18% use parents and relatives",
          keywords: ["18", "parents", "relatives", "family"]
        },
        {
          label: "14% use school teachers",
          keywords: ["14", "school teachers", "teachers", "teacher"]
        },
        {
          label: "4% use newspapers and magazines",
          keywords: ["4", "newspapers", "magazines", "newspaper", "magazine"]
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
        "fake",
        "misinformation",
        "unreliable",
        "internet",
        "online",
        "trust",
        "false",
        "rumour",
        "rumor"
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
        "check",
        "reliable",
        "sources",
        "verify",
        "teacher",
        "parents"
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
        "internet",
        "role",
        "teenagers"
      ],
      reportConclusionKeywords: [
        "in conclusion",
        "to sum up",
        "all in all",
        "overall"
      ],
      usefulPhrases: {
        opening: [
          "The table shows the results of a survey about sources of information teenagers in Zetland use most often.",
          "The project is about where young people get news and useful facts."
        ],
        facts: [
          "According to the table, 40% of teenagers ...",
          "Another 24% prefer ...",
          "Only 4% choose ..."
        ],
        compare: [
          "This figure is much higher than ...",
          "Compared with ..., this percentage is lower.",
          "Internet sites and apps are far more popular than newspapers and magazines."
        ],
        problem: [
          "One problem that can arise with getting information from the Internet is fake news and misinformation.",
          "Teenagers may also trust unreliable posts without checking the facts."
        ],
        solution: [
          "This problem can be solved by checking information on reliable sites and asking teachers or parents.",
          "They should also compare several sources before believing a story."
        ],
        opinion: [
          "In my opinion, the Internet plays a very important role in teenagers' lives.",
          "I believe it helps them learn quickly, but they must use it carefully and think critically."
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
            "4. A problem connected with Internet information + a solution.",
            "5. Your opinion on the role of the Internet in teenagers' lives.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из таблицы",
          lines: [
            "Лучше выбрать 2-3 самых заметных цифры, а не переписывать всю таблицу.",
            "Например: 40%, 24% и 18% / 14%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "compare",
          label: "Сравнение",
          title: "Как делать comparison",
          lines: [
            "Сравнивайте источники: 40% is higher than 24%.",
            "Можно сравнить Internet с newspapers (4%).",
            "Не делайте слишком много сравнений: 1-2 обычно достаточно."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Назовите проблему: fake news, unreliable sources, misinformation.",
            "Предложите solution: check facts, reliable sites, ask teachers/parents.",
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
        "information",
        "internet",
        "friends",
        "parents",
        "teachers",
        "newspapers",
        "magazines",
        "teenagers",
        "survey",
        "sources"
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
        "The table shows the results of a survey about sources of information teenagers in Zetland use most often. The project is important because the way young people get news affects their knowledge and opinions.\n\nAccording to the table, 40% of teenagers use internet sites and apps most often, which makes this the most popular source. Another 24% rely on friends, while 18% turn to parents and relatives. By contrast, only 14% ask school teachers and just 4% read newspapers and magazines.\n\nIt is clear that the Internet is much more popular than newspapers and magazines. The figure for friends is also noticeably higher than the percentage for school teachers.\n\nOne problem that can arise with getting information from the Internet is fake news and misinformation. Teenagers may also trust unreliable posts without checking the facts. This problem can be solved by checking information on reliable sites and asking teachers or parents.\n\nIn my opinion, the Internet plays a very important role in teenagers' lives. I believe it helps them learn quickly and stay informed, but they must use it carefully and think critically."
    },
    {
      id: "ege-project-task38-u16-jobs",
      unitLabel: "Unit 16",
      switchLabel: "Task 38.2",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.2 · survey report",
      lead:
        "Unit 16: essay-project on popular jobs. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on the most popular jobs with young people in Zetland. You have found some data on the subject - the results of a survey (see the pie chart below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion: "What job would you like to get?",
      promptChart: [
        ["A government official", "30"],
        ["A doctor", "24"],
        ["An IT specialist", "18"],
        ["A teacher", "16"],
        ["A lawyer", "12"]
      ],
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise with choosing jobs and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on the most popular job."
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
        "A problem connected with choosing jobs",
        "A practical solution",
        "Your opinion on the most popular job",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из диаграммы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, связанную with choosing jobs",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о the most popular job",
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
        "jobs",
        "career",
        "zetland",
        "young people"
      ],
      reportFactItems: [
        {
          label: "30% would like to become a government official",
          keywords: ["30", "government official", "government"]
        },
        {
          label: "24% would like to become a doctor",
          keywords: ["24", "doctor", "medicine"]
        },
        {
          label: "18% would like to become an IT specialist",
          keywords: ["18", "it specialist", "it", "specialist"]
        },
        {
          label: "16% would like to become a teacher",
          keywords: ["16", "teacher", "teaching"]
        },
        {
          label: "12% would like to become a lawyer",
          keywords: ["12", "lawyer", "law"]
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
        "choose",
        "choosing",
        "pressure",
        "parents",
        "salary",
        "money",
        "wrong",
        "confus",
        "stress",
        "prestige"
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
        "interest",
        "skills",
        "counsellor",
        "advice",
        "try",
        "plan"
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
        "most popular job",
        "government official",
        "doctor"
      ],
      reportConclusionKeywords: [
        "in conclusion",
        "to sum up",
        "all in all",
        "overall"
      ],
      usefulPhrases: {
        opening: [
          "The pie chart shows the results of a survey about the most popular jobs with young people in Zetland.",
          "The project is about teenagers' career plans and ambitions."
        ],
        facts: [
          "According to the chart, 30% of respondents ...",
          "Another 24% would like to become ...",
          "Only 12% choose ..."
        ],
        compare: [
          "This figure is slightly higher than ...",
          "Compared with ..., this percentage is much lower.",
          "Being a government official is more popular than being a lawyer."
        ],
        problem: [
          "One problem that can arise with choosing jobs is pressure from parents or friends to pick a prestigious career.",
          "Teenagers may also choose a job for the salary without thinking about their real interests."
        ],
        solution: [
          "This problem can be solved by talking to a school counsellor and trying different activities to discover their strengths.",
          "They should also learn about different professions before making a final decision."
        ],
        opinion: [
          "In my opinion, being a government official is the most popular job for a good reason.",
          "I believe many teenagers see it as a stable and respected career, though I personally would prefer to become a doctor."
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
            "4. A problem connected with choosing jobs + a solution.",
            "5. Your opinion on the most popular job.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из диаграммы",
          lines: [
            "Лучше выбрать 2-3 самые заметные цифры, а не описывать весь chart подряд.",
            "Например: 30%, 24% и 18% / 16%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Назовите проблему выбора профессии: pressure, wrong choice, prestige vs interest.",
            "Предложите solution: counsellor, try activities, learn about jobs.",
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
        "jobs",
        "career",
        "doctor",
        "teacher",
        "lawyer",
        "government",
        "it specialist",
        "young people",
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
          pattern: "\\ba government official are\\b",
          flags: "i",
          msg: "Единственное число: `a government official is`."
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
        "The pie chart shows the results of a survey about the most popular jobs with young people in Zetland. The project is important because career choices influence teenagers' future education and lifestyle.\n\nAccording to the chart, 30% of respondents would like to become a government official, which makes it the most popular job. Another 24% choose to become a doctor, while 18% prefer to work as an IT specialist. By contrast, only 16% want to become a teacher and just 12% choose to be a lawyer.\n\nIt is clear that being a government official is slightly more popular than being a doctor. The figure for an IT specialist is also noticeably higher than the percentage for a lawyer.\n\nOne problem that can arise with choosing jobs is pressure from parents or friends to pick a prestigious career. Teenagers may also choose a job for the salary without thinking about their real interests. This problem can be solved by talking to a school counsellor and trying different activities to discover their strengths.\n\nIn my opinion, being a government official is the most popular job for a good reason. I believe many teenagers see it as a stable and respected career that can help them serve society."
    }
  );
})(typeof window !== "undefined" ? window : this);
