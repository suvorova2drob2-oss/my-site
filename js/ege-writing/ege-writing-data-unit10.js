(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack || !Array.isArray(pack.tasks)) return;
  pack.tasks.push(
    {
      id: "ege-email-task37-u10",
      unitLabel: "Unit 10",
      switchLabel: "Task 37",
      mode: "email",
      title: "Writing · Personal Email",
      typeLabel: "Task 37 · personal email",
      lead:
        "Unit 10: personal email. Локальная проверка по реальным критериям ЕГЭ для задания 37.",
      promptLead:
        "You have received an email message from your English-speaking pen-friend Sam:",
      promptMeta: {
        from: "Sam@mail.uk",
        to: "Russian_friend@ege.ru",
        subject: "Hiking"
      },
      promptRu:
        "...Last weekend my friends and I went on a hiking trip to the mountains. How often do you go on trips with your friends, if at all? Are hiking trips popular with teens in your region, why, or why not? Where would you like to go together with your friends?\nMy brother has just won a chess competition...",
      instructions: [
        "Write an email to Sam.",
        "In your message: answer his questions;",
        "ask 3 questions about his brother's chess competition.",
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
        "Обращение (Dear Sam, ...)",
        "Короткая thanks/opening phrase",
        "Ответ: how often trips with friends",
        "Ответ: hiking popular with teens + why / why not",
        "Ответ: where to go with friends",
        "3 вопроса к Sam про brother's chess competition",
        "Завершающая фраза",
        "Подпись"
      ],
      precheckItems: [
        "Я добавил(а) обращение `Dear Sam,`",
        "Я ответил(а) на вопросы Sam про hiking and trips",
        "Я задал(а) 3 вопроса back про brother's chess competition",
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
          label: "How often do you go on trips with your friends, if at all?",
          keywords: [
            "how often",
            "trips with my friends",
            "with my friends",
            "go on trips",
            "sometimes",
            "often",
            "never",
            "once",
            "every month",
            "rarely"
          ]
        },
        {
          id: "q2",
          label:
            "Are hiking trips popular with teens in your region, why, or why not?",
          keywords: [
            "hiking",
            "hiking trips",
            "popular with teens",
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
          label: "Where would you like to go together with your friends?",
          keywords: [
            "where would you like to go",
            "together with my friends",
            "with my friends",
            "i would like to go",
            "i'd like to go",
            "mountains",
            "lake",
            "forest",
            "sea",
            "city"
          ]
        }
      ],
      questionBackHint: "his brother's chess competition",
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
        greeting: ["dear sam"],
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
          "Dear Sam,",
          "Thanks for your email.",
          "It was great to hear from you again."
        ],
        answers: [
          "I go on trips with my friends about once a month.",
          "Hiking trips are quite popular with teens in my region because we have beautiful forests nearby.",
          "I would like to go to the mountains together with my friends."
        ],
        questions: [
          "Where did the chess competition take place?",
          "Who did your brother play against in the final?",
          "Did he get a prize?"
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
            "1. Dear Sam,",
            "2. Thanks for your email / It was great to hear from you.",
            "3. Ответы на 3 вопроса Sam про hiking and trips.",
            "4. 3 вопроса о brother's chess competition.",
            "5. Closing phrase: Anyway, I have to go now. / Write back soon.",
            "6. Подпись: Best wishes, ... / Your Russian friend"
          ]
        },
        {
          id: "answers",
          label: "Ответы Sam",
          title: "Что нужно раскрыть",
          lines: [
            "Скажите, how often вы ездите on trips with your friends (или что почти never).",
            "Ответьте, popular ли hiking trips with teens in your region, и объясните why / why not.",
            "Назовите место, куда хотели бы поехать together with friends.",
            "Не отвечайте одним словом: лучше 1-2 предложения на каждый пункт."
          ]
        },
        {
          id: "questions",
          label: "3 questions back",
          title: "Какие вопросы задать Sam",
          lines: [
            "Нужно задать ровно 3 вопроса про brother's chess competition.",
            "Примеры: Where was it? Who did he beat? What prize did he get?",
            "Вопросы должны быть именно про chess competition, не про hiking."
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
        "hiking",
        "trips",
        "friends",
        "mountains",
        "chess",
        "competition",
        "sam",
        "region",
        "teens"
      ],
      commonMistakes: [
        {
          pattern: "\\bdear sam\\b(?!,)",
          flags: "i",
          msg: "После `Dear Sam` нужна запятая."
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
          pattern: "\\bgo to trip\\b",
          flags: "i",
          msg: "Нужно `go on a trip`, а не `go to trip`."
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
        "Dear Sam,\n\nThanks for your email. It was great to hear from you. I'm glad you enjoyed your hiking trip to the mountains!\n\nI go on trips with my friends about once a month. Hiking trips are quite popular with teens in my region because we have beautiful forests and lakes nearby. I would like to go to the mountains together with my friends next summer.\n\nBy the way, where did your brother's chess competition take place? Who did he play against in the final? Did he get a prize?\n\nAnyway, I have to go now. Write back soon.\n\nBest wishes,\nYour Russian friend"
    },
    {
      id: "ege-project-task38-u10-volunteer",
      unitLabel: "Unit 10",
      switchLabel: "Task 38.1",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.1 · survey report",
      lead:
        "Unit 10: essay-project on volunteer organisations. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on the most popular types of volunteer organisations among young people in Zetland. You have found some data on the subject - the results of a survey (see the table below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion: "What volunteer organisation do you belong to?",
      promptTable: {
        headers: ["Types of volunteer organisations", "Number of respondents (%)"],
        rows: [
          ["Ecological organisations", "39"],
          ["Helping in an emergency", "28"],
          ["Animal shelters", "18"],
          ["Supporting senior citizens", "10"],
          ["Helping the homeless", "5"]
        ]
      },
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise with joining a volunteer organisation and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on the importance of volunteering for young people."
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
        "A problem connected with joining a volunteer organisation",
        "A logical solution",
        "Your opinion on the importance of volunteering for young people",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из таблицы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, связанную with joining a volunteer organisation",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о importance of volunteering for young people",
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
        "volunteer",
        "volunteering",
        "young people"
      ],
      reportFactItems: [
        {
          label: "39% belong to ecological organisations",
          keywords: ["39", "ecological", "ecology", "environment"]
        },
        {
          label: "28% help in an emergency",
          keywords: ["28", "emergency", "helping in an emergency"]
        },
        {
          label: "18% work in animal shelters",
          keywords: ["18", "animal shelters", "animal shelter", "animals"]
        },
        {
          label: "10% support senior citizens",
          keywords: ["10", "senior citizens", "elderly", "old people"]
        },
        {
          label: "5% help the homeless",
          keywords: ["5", "homeless", "helping the homeless"]
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
        "tired",
        "stress",
        "homework",
        "school",
        "commitment",
        "difficult",
        "join",
        "schedule",
        "balance"
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
        "choose",
        "few hours",
        "weekend",
        "balance",
        "organise"
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
        "importance",
        "volunteering",
        "volunteer",
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
          "The table shows the results of a survey about the most popular types of volunteer organisations among young people in Zetland.",
          "The project is about how teenagers choose to help their community."
        ],
        facts: [
          "According to the table, 39% of respondents ...",
          "Another 28% belong to ...",
          "Only 5% choose ..."
        ],
        compare: [
          "This figure is much higher than ...",
          "Compared with ..., this percentage is lower.",
          "Ecological organisations are far more popular than helping the homeless."
        ],
        problem: [
          "One problem that can arise with joining a volunteer organisation is lack of time for school and homework.",
          "Teenagers may also feel tired if they take on too many responsibilities."
        ],
        solution: [
          "This problem can be solved by choosing one organisation and volunteering only a few hours at weekends.",
          "They should also plan their schedule and discuss their commitments with teachers or parents."
        ],
        opinion: [
          "In my opinion, volunteering is very important for young people.",
          "I believe it helps them become more responsible, meet new people and make a positive difference in society."
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
            "4. A problem connected with joining a volunteer organisation + a solution.",
            "5. Your opinion on the importance of volunteering for young people.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из таблицы",
          lines: [
            "Лучше выбрать 2-3 самых заметных цифры, а не переписывать всю таблицу.",
            "Например: 39%, 28% и 18% / 10%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "compare",
          label: "Сравнение",
          title: "Как делать comparison",
          lines: [
            "Сравнивайте типы организаций: 39% is higher than 28%.",
            "Можно сравнить ecological organisations с helping the homeless (5%).",
            "Не делайте слишком много сравнений: 1-2 обычно достаточно."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Назовите проблему: no time, tired, too much commitment, balance with school.",
            "Предложите solution: choose one org, few hours at weekends, plan schedule.",
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
        "volunteer",
        "volunteering",
        "ecological",
        "emergency",
        "animal shelters",
        "senior citizens",
        "homeless",
        "young people",
        "survey"
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
        "The table shows the results of a survey about the most popular types of volunteer organisations among young people in Zetland. The project is important because volunteering helps teenagers develop social skills and support their community.\n\nAccording to the table, 39% of respondents belong to ecological organisations, which makes this the most popular choice. Another 28% help in an emergency, while 18% work in animal shelters. By contrast, only 10% support senior citizens and just 5% help the homeless.\n\nIt is clear that ecological organisations are much more popular than helping the homeless. The figure for helping in an emergency is also noticeably higher than the percentage for supporting senior citizens.\n\nOne problem that can arise with joining a volunteer organisation is lack of time for school and homework. Teenagers may also feel tired if they take on too many responsibilities at once. This problem can be solved by choosing one organisation and volunteering only a few hours at weekends.\n\nIn my opinion, volunteering is very important for young people. I believe it helps them become more responsible, meet new people and make a positive difference in society."
    },
    {
      id: "ege-project-task38-u10-subjects",
      unitLabel: "Unit 10",
      switchLabel: "Task 38.2",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.2 · survey report",
      lead:
        "Unit 10: essay-project on subjects for a future career. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on the most important subjects for a future career among Zetland teenagers. You have found some data on the subject - the results of a survey (see the pie chart below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion:
        "What subject do you consider to be the most important for a future career?",
      promptChart: [
        ["IT", "37"],
        ["Maths", "29"],
        ["Science", "18"],
        ["History", "9"],
        ["Foreign Languages", "7"]
      ],
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise with choosing subjects to study on the advanced level and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on the most important subject for your future career."
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
        "A problem connected with choosing advanced-level subjects",
        "A practical solution",
        "Your opinion on the most important subject for your future career",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из диаграммы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, связанную with choosing subjects on the advanced level",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о the most important subject for my future career",
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
        "subjects",
        "future career",
        "zetland",
        "teenagers"
      ],
      reportFactItems: [
        {
          label: "37% consider IT the most important subject",
          keywords: ["37", "it", "information technology", "computer"]
        },
        {
          label: "29% consider Maths the most important subject",
          keywords: ["29", "maths", "mathematics", "math"]
        },
        {
          label: "18% consider Science the most important subject",
          keywords: ["18", "science"]
        },
        {
          label: "9% consider History the most important subject",
          keywords: ["9", "history"]
        },
        {
          label: "7% consider Foreign Languages the most important subject",
          keywords: ["7", "foreign languages", "language", "languages"]
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
        "advanced level",
        "advanced",
        "difficult",
        "stress",
        "pressure",
        "too many",
        "wrong",
        "career",
        "exam",
        "overload"
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
        "advice",
        "counsellor",
        "teacher",
        "interest",
        "strength",
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
        "most important subject",
        "future career",
        "career"
      ],
      reportConclusionKeywords: [
        "in conclusion",
        "to sum up",
        "all in all",
        "overall"
      ],
      usefulPhrases: {
        opening: [
          "The pie chart shows the results of a survey about the most important subjects for a future career among Zetland teenagers.",
          "The project is about how students choose subjects that will help them in their future jobs."
        ],
        facts: [
          "According to the chart, 37% of respondents ...",
          "Another 29% consider ...",
          "Only 7% choose ..."
        ],
        compare: [
          "This figure is slightly higher than ...",
          "Compared with ..., this percentage is much lower.",
          "IT is far more popular than Foreign Languages."
        ],
        problem: [
          "One problem that can arise with choosing subjects to study on the advanced level is too much pressure and stress.",
          "Teenagers may also choose subjects they do not really enjoy because of their friends or parents."
        ],
        solution: [
          "This problem can be solved by talking to teachers or a school counsellor and choosing subjects that match their interests and strengths.",
          "They should also think about their future career plans before making a final decision."
        ],
        opinion: [
          "In my opinion, English is the most important subject for my future career.",
          "I believe good language skills will help me study abroad and work in an international company."
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
            "4. A problem connected with choosing advanced-level subjects + a solution.",
            "5. Your opinion on the most important subject for your future career.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из диаграммы",
          lines: [
            "Лучше выбрать 2-3 самые заметные цифры, а не описывать весь chart подряд.",
            "Например: 37%, 29% и 18% / 9%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Назовите проблему выбора advanced-level subjects: pressure, wrong choice, too many subjects.",
            "Предложите solution: counsellor, interests, strengths, career plans.",
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
        "subjects",
        "career",
        "it",
        "maths",
        "science",
        "history",
        "foreign languages",
        "advanced level",
        "teenagers",
        "survey"
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
          pattern: "\\badvanced level subjects is\\b",
          flags: "i",
          msg: "Множественное число: `subjects are`, не `subjects is`."
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
        "The pie chart shows the results of a survey about the most important subjects for a future career among teenagers in Zetland. The project is important because the choice of school subjects can influence students' chances of getting a good job.\n\nAccording to the chart, 37% of respondents consider IT the most important subject, which makes it the most popular choice. Another 29% choose Maths, while 18% prefer Science. By contrast, only 9% select History and just 7% choose Foreign Languages.\n\nIt is clear that IT is slightly more popular than Maths. The figure for Science is also noticeably higher than the percentage for Foreign Languages.\n\nOne problem that can arise with choosing subjects to study on the advanced level is too much pressure and stress. Teenagers may also choose subjects they do not really enjoy because of their friends or parents. This problem can be solved by talking to teachers or a school counsellor and choosing subjects that match their interests and strengths.\n\nIn my opinion, English is the most important subject for my future career. I believe good language skills will help me study abroad and work in an international company."
    }
  );
})(typeof window !== "undefined" ? window : this);
