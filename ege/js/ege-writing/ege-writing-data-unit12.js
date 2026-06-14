(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack || !Array.isArray(pack.tasks)) return;
  pack.tasks.push(
    {
      id: "ege-email-task37-u12",
      unitLabel: "Unit 12",
      switchLabel: "Task 37",
      mode: "email",
      title: "Writing · Personal Email",
      typeLabel: "Task 37 · personal email",
      lead:
        "Unit 12: personal email. Локальная проверка по реальным критериям ЕГЭ для задания 37.",
      promptLead:
        "You have received an email message from your English-speaking pen-friend Neil:",
      promptMeta: {
        from: "Neil@mail.uk",
        to: "Russian_friend@ege.ru",
        subject: "Fashion"
      },
      promptRu:
        "...I have grown taller and I need new clothes. Where do you buy clothes? Do you prefer dressing casually or formally? Is it important for Russian teenagers to keep up-to-date with current fashion trends? Why, or why not?\nMy brother has just come back from a football match...",
      instructions: [
        "Write an email to Neil.",
        "In your message: answer his questions;",
        "ask 3 questions about the football match his brother attended.",
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
        "Обращение (Dear Neil, ...)",
        "Короткая thanks/opening phrase",
        "Ответ: where you buy clothes",
        "Ответ: casually or formally",
        "Ответ: fashion trends important + why / why not",
        "3 вопроса к Neil про football match",
        "Завершающая фраза",
        "Подпись"
      ],
      precheckItems: [
        "Я добавил(а) обращение `Dear Neil,`",
        "Я ответил(а) на вопросы Neil про fashion and clothes",
        "Я задал(а) 3 вопроса back про football match",
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
          label: "Where do you buy clothes?",
          keywords: [
            "buy clothes",
            "where do you buy",
            "shop",
            "shopping mall",
            "online",
            "store",
            "market",
            "buy them"
          ]
        },
        {
          id: "q2",
          label: "Do you prefer dressing casually or formally?",
          keywords: [
            "prefer",
            "dressing",
            "casually",
            "formally",
            "casual",
            "formal",
            "smart",
            "comfortable"
          ]
        },
        {
          id: "q3",
          label:
            "Is it important for Russian teenagers to keep up-to-date with current fashion trends? Why, or why not?",
          keywords: [
            "important",
            "russian teenagers",
            "fashion trends",
            "keep up-to-date",
            "keep up to date",
            "why",
            "because",
            "yes",
            "no",
            "not very important"
          ]
        }
      ],
      questionBackHint: "the football match his brother attended",
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
        greeting: ["dear neil"],
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
          "Dear Neil,",
          "Thanks for your email.",
          "It was great to hear from you again."
        ],
        answers: [
          "I usually buy clothes in shopping malls and sometimes online.",
          "I prefer dressing casually because it is more comfortable.",
          "In my opinion, it is not very important for Russian teenagers to keep up-to-date with every fashion trend."
        ],
        questions: [
          "Which teams played at the match?",
          "What was the final score?",
          "Did your brother enjoy the game?"
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
            "1. Dear Neil,",
            "2. Thanks for your email / It was great to hear from you.",
            "3. Ответы на 3 вопроса Neil про clothes and fashion.",
            "4. 3 вопроса о football match his brother attended.",
            "5. Closing phrase: Anyway, I have to go now. / Write back soon.",
            "6. Подпись: Best wishes, ... / Your Russian friend"
          ]
        },
        {
          id: "answers",
          label: "Ответы Neil",
          title: "Что нужно раскрыть",
          lines: [
            "Скажите, where you buy clothes (shops, online и т.д.).",
            "Ответьте, prefer ли вы dressing casually or formally.",
            "Выскажите мнение: important ли keep up-to-date with fashion trends + why / why not.",
            "Не отвечайте одним словом: лучше 1-2 предложения на каждый пункт."
          ]
        },
        {
          id: "questions",
          label: "3 questions back",
          title: "Какие вопросы задать Neil",
          lines: [
            "Нужно задать ровно 3 вопроса про football match.",
            "Примеры: Who won? Where was it? Was it exciting?",
            "Вопросы должны быть именно про match, не про clothes."
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
        "fashion",
        "clothes",
        "casually",
        "formally",
        "trends",
        "football",
        "match",
        "neil",
        "shopping"
      ],
      commonMistakes: [
        {
          pattern: "\\bdear neil\\b(?!,)",
          flags: "i",
          msg: "После `Dear Neil` нужна запятая."
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
          pattern: "\\bkeep up to date with fashion trend\\b",
          flags: "i",
          msg: "Обычно `fashion trends` во множественном числе."
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
        "Dear Neil,\n\nThanks for your email. It was great to hear from you. I hope you find nice new clothes!\n\nI usually buy clothes in shopping malls and sometimes online. I prefer dressing casually because it is more comfortable for school and everyday life. In my opinion, it is not very important for Russian teenagers to keep up-to-date with every fashion trend because comfort matters more.\n\nBy the way, which teams played at the match? What was the final score? Did your brother enjoy the game?\n\nAnyway, I have to go now. Write back soon.\n\nBest wishes,\nYour Russian friend"
    },
    {
      id: "ege-project-task38-u12-valentines",
      unitLabel: "Unit 12",
      switchLabel: "Task 38.1",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.1 · survey report",
      lead:
        "Unit 12: essay-project on Valentine's Day presents. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on the most popular Valentine's Day presents in Zetland. You have found some data on the subject - the results of a survey (see the table below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion: "What Valentine's Day present do you receive most often?",
      promptTable: {
        headers: [
          "The most popular Valentine's Day presents",
          "Number of respondents (%)"
        ],
        rows: [
          ["Flowers", "37"],
          ["Sweets", "25"],
          ["Perfume", "20"],
          ["Tickets to the cinema or theatre", "10"],
          ["Gift certificates", "8"]
        ]
      },
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise with choosing a Valentine's Day present and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on the best present for that holiday."
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
        "A problem connected with choosing a Valentine's Day present",
        "A logical solution",
        "Your opinion on the best present for that holiday",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из таблицы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, связанную with choosing a Valentine's Day present",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о the best present for that holiday",
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
        "valentine",
        "presents"
      ],
      reportFactItems: [
        {
          label: "37% receive flowers most often",
          keywords: ["37", "flowers", "flower"]
        },
        {
          label: "25% receive sweets most often",
          keywords: ["25", "sweets", "sweet", "chocolate"]
        },
        {
          label: "20% receive perfume most often",
          keywords: ["20", "perfume"]
        },
        {
          label: "10% receive tickets to the cinema or theatre",
          keywords: ["10", "tickets", "cinema", "theatre", "theater"]
        },
        {
          label: "8% receive gift certificates",
          keywords: ["8", "gift certificates", "certificate"]
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
        "expensive",
        "money",
        "taste",
        "allerg",
        "wrong",
        "disappoint",
        "predictable",
        "boring"
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
        "ask",
        "interest",
        "personal",
        "handmade",
        "plan",
        "budget"
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
        "best present",
        "valentine",
        "holiday"
      ],
      reportConclusionKeywords: [
        "in conclusion",
        "to sum up",
        "all in all",
        "overall"
      ],
      usefulPhrases: {
        opening: [
          "The table shows the results of a survey about the most popular Valentine's Day presents in Zetland.",
          "The project is about what gifts people receive on this romantic holiday."
        ],
        facts: [
          "According to the table, 37% of respondents ...",
          "Another 25% receive ...",
          "Only 8% choose ..."
        ],
        compare: [
          "This figure is much higher than ...",
          "Compared with ..., this percentage is lower.",
          "Flowers are far more popular than gift certificates."
        ],
        problem: [
          "One problem that can arise with choosing a Valentine's Day present is spending too much money on something the person does not really like.",
          "People may also find it hard to guess their partner's taste."
        ],
        solution: [
          "This problem can be solved by asking about the person's interests beforehand or choosing a simple handmade gift.",
          "They should also set a budget and think about what would be useful and personal."
        ],
        opinion: [
          "In my opinion, sweets are the best present for Valentine's Day.",
          "I believe they are affordable, sweet and suitable for almost everyone."
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
            "4. A problem connected with choosing a Valentine's present + a solution.",
            "5. Your opinion on the best present for that holiday.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из таблицы",
          lines: [
            "Лучше выбрать 2-3 самых заметных цифры, а не переписывать всю таблицу.",
            "Например: 37%, 25% и 20% / 10%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "compare",
          label: "Сравнение",
          title: "Как делать comparison",
          lines: [
            "Сравнивайте подарки: 37% is higher than 25%.",
            "Можно сравнить flowers с gift certificates (8%).",
            "Не делайте слишком много сравнений: 1-2 обычно достаточно."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Назовите проблему выбора подарка: expensive, wrong taste, hard to guess.",
            "Предложите solution: ask interests, handmade gift, budget.",
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
        "valentine",
        "presents",
        "flowers",
        "sweets",
        "perfume",
        "tickets",
        "gift certificates",
        "holiday",
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
        "The table shows the results of a survey about the most popular Valentine's Day presents in Zetland. The project is important because this holiday is widely celebrated and influences how people express their feelings.\n\nAccording to the table, 37% of respondents receive flowers most often, which makes them the most popular present. Another 25% get sweets, while 20% receive perfume. By contrast, only 10% are given tickets to the cinema or theatre and just 8% choose gift certificates.\n\nIt is clear that flowers are much more popular than gift certificates. The figure for sweets is also noticeably higher than the percentage for tickets.\n\nOne problem that can arise with choosing a Valentine's Day present is spending too much money on something the person does not really like. People may also find it hard to guess their partner's taste. This problem can be solved by asking about the person's interests beforehand or choosing a simple handmade gift.\n\nIn my opinion, sweets are the best present for Valentine's Day. I believe they are affordable, sweet and suitable for almost everyone."
    },
    {
      id: "ege-project-task38-u12-communication",
      unitLabel: "Unit 12",
      switchLabel: "Task 38.2",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.2 · survey report",
      lead:
        "Unit 12: essay-project on ways of communication. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on the ways of communication preferred by Zetland teenagers. You have found some data on the subject - the results of a survey (see the pie chart below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion: "What way of communication do you prefer?",
      promptChart: [
        ["Speaking on the phone", "36"],
        ["Talking in person", "27"],
        ["Texting", "20"],
        ["Sending emails", "10"],
        ["Sending voice messages", "7"]
      ],
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise with communication through technical devices and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on the importance of communicating in person."
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
        "A problem connected with communication through technical devices",
        "A practical solution",
        "Your opinion on the importance of communicating in person",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из диаграммы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, связанную with communication through technical devices",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о importance of communicating in person",
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
        "communication",
        "ways of communication",
        "zetland",
        "teenagers"
      ],
      reportFactItems: [
        {
          label: "36% prefer speaking on the phone",
          keywords: ["36", "speaking on the phone", "phone", "call"]
        },
        {
          label: "27% prefer talking in person",
          keywords: ["27", "talking in person", "in person", "face to face"]
        },
        {
          label: "20% prefer texting",
          keywords: ["20", "texting", "text messages", "messages"]
        },
        {
          label: "10% prefer sending emails",
          keywords: ["10", "sending emails", "emails", "email"]
        },
        {
          label: "7% prefer sending voice messages",
          keywords: ["7", "voice messages", "voice message"]
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
        "technical devices",
        "device",
        "phone",
        "screen",
        "addict",
        "misunderstand",
        "tone",
        "distract",
        "online",
        "social media"
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
        "meet",
        "face to face",
        "balance"
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
        "communicating in person",
        "in person",
        "important"
      ],
      reportConclusionKeywords: [
        "in conclusion",
        "to sum up",
        "all in all",
        "overall"
      ],
      usefulPhrases: {
        opening: [
          "The pie chart shows the results of a survey about the ways of communication preferred by Zetland teenagers.",
          "The project is about how young people stay in touch with friends and family."
        ],
        facts: [
          "According to the chart, 36% of respondents ...",
          "Another 27% prefer ...",
          "Only 7% choose ..."
        ],
        compare: [
          "This figure is slightly higher than ...",
          "Compared with ..., this percentage is much lower.",
          "Speaking on the phone is more popular than sending voice messages."
        ],
        problem: [
          "One problem that can arise with communication through technical devices is misunderstanding because people cannot see facial expressions.",
          "Teenagers may also spend too much time on their phones and feel lonely."
        ],
        solution: [
          "This problem can be solved by limiting screen time and meeting friends in person more often.",
          "They should also switch off their phones during important conversations."
        ],
        opinion: [
          "In my opinion, communicating in person is very important.",
          "I believe face-to-face talks help people understand each other better and build stronger friendships."
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
            "4. A problem connected with technical devices + a solution.",
            "5. Your opinion on the importance of communicating in person.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из диаграммы",
          lines: [
            "Лучше выбрать 2-3 самые заметные цифры, а не описывать весь chart подряд.",
            "Например: 36%, 27% и 20% / 10%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Назовите проблему: misunderstanding, too much screen time, loneliness.",
            "Предложите solution: limit screen time, meet in person, switch off phone.",
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
        "communication",
        "phone",
        "texting",
        "email",
        "voice messages",
        "in person",
        "teenagers",
        "devices",
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
          pattern: "\\bcommunicate in person are\\b",
          flags: "i",
          msg: "Герундий: `communicating in person is`."
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
        "The pie chart shows the results of a survey about the ways of communication preferred by teenagers in Zetland. The project is important because modern technology has changed how young people stay in touch with each other.\n\nAccording to the chart, 36% of respondents prefer speaking on the phone, which makes it the most popular way of communication. Another 27% choose talking in person, while 20% prefer texting. By contrast, only 10% like sending emails and just 7% choose voice messages.\n\nIt is clear that speaking on the phone is slightly more popular than talking in person. The figure for texting is also noticeably higher than the percentage for sending emails.\n\nOne problem that can arise with communication through technical devices is misunderstanding because people cannot see facial expressions or hear the tone of voice clearly. Teenagers may also spend too much time on their phones and feel lonely. This problem can be solved by limiting screen time and meeting friends in person more often.\n\nIn my opinion, communicating in person is very important. I believe face-to-face talks help people understand each other better and build stronger friendships."
    }
  );
})(typeof window !== "undefined" ? window : this);
