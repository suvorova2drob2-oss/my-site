(function (w) {
  var pack = w.__EGE_WRITING_DATA__;
  if (!pack || !Array.isArray(pack.tasks)) return;
  pack.tasks.push(
    {
      id: "ege-email-task37-u7",
      unitLabel: "Unit 7",
      switchLabel: "Task 37",
      mode: "email",
      title: "Writing · Personal Email",
      typeLabel: "Task 37 · personal email",
      lead:
        "Unit 7: personal email. Локальная проверка по реальным критериям ЕГЭ для задания 37.",
      promptLead:
        "You have received an email message from your English-speaking pen-friend Catherine:",
      promptMeta: {
        from: "Catherine@mail.uk",
        to: "Russian_friend@ege.ru",
        subject: "Costume parties..."
      },
      promptRu:
        "I've spent all week trying to fix my costume for a costume party. Have you ever been to a costume party? What costume will you wear if you are invited to this kind of party? Who can help you to make it?\nI did a chemistry test yesterday...",
      instructions: [
        "Write an email to Catherine.",
        "In your message: answer her questions;",
        "ask 3 questions about the chemistry test.",
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
        "Обращение (Dear Catherine, ...)",
        "Короткая thanks/opening phrase",
        "Ответ: have you ever been to a costume party",
        "Ответ: what costume will you wear",
        "Ответ: who can help you make it",
        "3 вопроса к Catherine про chemistry test",
        "Завершающая фраза",
        "Подпись"
      ],
      precheckItems: [
        "Я добавил(а) обращение `Dear Catherine,`",
        "Я ответил(а) на вопросы Catherine про costume party",
        "Я задал(а) 3 вопроса back про chemistry test",
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
          label: "Have you ever been to a costume party?",
          keywords: [
            "costume party",
            "ever been",
            "have been",
            "never been",
            "yes",
            "once",
            "last year",
            "went to"
          ]
        },
        {
          id: "q2",
          label:
            "What costume will you wear if you are invited to this kind of party?",
          keywords: [
            "costume",
            "will wear",
            "would wear",
            "if i am invited",
            "if i were invited",
            "dress up as",
            "wear a",
            "superhero",
            "character"
          ]
        },
        {
          id: "q3",
          label: "Who can help you to make it?",
          keywords: [
            "help",
            "make it",
            "who can",
            "my mum",
            "my mom",
            "mother",
            "friend",
            "sew",
            "parents",
            "grandma"
          ]
        }
      ],
      questionBackHint: "the chemistry test",
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
        greeting: ["dear catherine"],
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
          "Dear Catherine,",
          "Thanks for your email.",
          "It was great to hear from you again."
        ],
        answers: [
          "Yes, I have been to a costume party once.",
          "If I am invited, I will wear a superhero costume.",
          "My mum can help me to make it because she is good at sewing."
        ],
        questions: [
          "How difficult was the chemistry test?",
          "What topic did it cover?",
          "Did you get a good mark?"
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
            "1. Dear Catherine,",
            "2. Thanks for your email / It was great to hear from you.",
            "3. Ответы на 3 вопроса Catherine про costume party.",
            "4. 3 вопроса о chemistry test.",
            "5. Closing phrase: Anyway, I have to go now. / Write back soon.",
            "6. Подпись: Best wishes, ... / Your Russian friend"
          ]
        },
        {
          id: "answers",
          label: "Ответы Catherine",
          title: "Что нужно раскрыть",
          lines: [
            "Скажите, были ли вы ever at a costume party (yes/no + короткий пример).",
            "Опишите, какой costume вы наденете, если пригласят.",
            "Назовите, кто может помочь сделать costume (мама, друг, бабушка и т.д.).",
            "Не отвечайте одним словом: лучше 1-2 предложения на каждый пункт."
          ]
        },
        {
          id: "questions",
          label: "3 questions back",
          title: "Какие вопросы задать Catherine",
          lines: [
            "Нужно задать ровно 3 вопроса про chemistry test.",
            "Примеры: Was it difficult? What did you have to do? How did you prepare?",
            "Вопросы должны быть именно про test, не про costume party."
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
        "costume",
        "party",
        "chemistry",
        "test",
        "catherine",
        "wear",
        "make",
        "help",
        "dress"
      ],
      commonMistakes: [
        {
          pattern: "\\bdear catherine\\b(?!,)",
          flags: "i",
          msg: "После `Dear Catherine` нужна запятая."
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
          pattern: "\\bwho can help me make\\b(?! it)",
          flags: "i",
          msg: "В задании `help you to make it` — не забудьте `it` в конце."
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
        "Dear Catherine,\n\nThanks for your email. It was great to hear from you. I hope your costume is ready for the party!\n\nYes, I have been to a costume party once at my friend's house. If I am invited again, I will wear a pirate costume. My mum can help me to make it because she is good at sewing.\n\nBy the way, how difficult was your chemistry test? What topic did it cover? Did you get a good mark?\n\nAnyway, I have to go now. Write back soon.\n\nBest wishes,\nYour Russian friend"
    },
    {
      id: "ege-project-task38-u7-fashion",
      unitLabel: "Unit 7",
      switchLabel: "Task 38.1",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.1 · survey report",
      lead:
        "Unit 7: essay-project on how young people follow fashion. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on how young people in Zetland follow fashion. You have found some data on the subject - the results of a survey (see the table below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion: "How do you follow fashion?",
      promptTable: {
        headers: ["Following fashion", "Number of respondents (%)"],
        rows: [
          ["Looking through fashion articles online", "36"],
          ["Noticing what others wear", "26"],
          ["Following fashion bloggers", "22"],
          ["Seeking for professional advice", "9"],
          ["Watching fashion shows", "7"]
        ]
      },
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise with following fashion and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on whether it is important for young people to follow fashion."
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
        "A problem connected with following fashion",
        "A logical solution",
        "Your opinion on whether young people should follow fashion",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из таблицы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, связанную with following fashion",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о whether it is important for young people to follow fashion",
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
        "fashion",
        "young people"
      ],
      reportFactItems: [
        {
          label: "36% follow fashion by looking through fashion articles online",
          keywords: [
            "36",
            "fashion articles",
            "articles online",
            "looking through",
            "online"
          ]
        },
        {
          label: "26% follow fashion by noticing what others wear",
          keywords: ["26", "noticing", "what others wear", "others wear"]
        },
        {
          label: "22% follow fashion bloggers",
          keywords: ["22", "fashion bloggers", "bloggers", "following fashion bloggers"]
        },
        {
          label: "9% seek professional advice",
          keywords: ["9", "professional advice", "seeking", "advice"]
        },
        {
          label: "7% watch fashion shows",
          keywords: ["7", "fashion shows", "watching", "shows"]
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
        "pressure",
        "stress",
        "compare",
        "insecure",
        "trends",
        "spend",
        "copy",
        "brand"
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
        "choose",
        "budget",
        "personal style",
        "balance",
        "think"
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
        "important",
        "fashion",
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
          "The table shows the results of a survey about how young people in Zetland follow fashion.",
          "The project is about different ways teenagers learn about new trends."
        ],
        facts: [
          "According to the table, 36% of respondents ...",
          "Another 26% follow fashion by ...",
          "Only 7% choose ..."
        ],
        compare: [
          "This figure is much higher than ...",
          "Compared with ..., this percentage is lower.",
          "Reading fashion articles online is far more popular than watching fashion shows."
        ],
        problem: [
          "One problem that can arise with following fashion is spending too much money on trendy clothes.",
          "Young people may also feel pressure to copy others and look exactly like fashion bloggers."
        ],
        solution: [
          "This problem can be solved by choosing a personal style and buying only what they really need.",
          "They should also remember that fashion is about comfort and self-expression, not expensive brands."
        ],
        opinion: [
          "In my opinion, it is not very important for young people to follow fashion all the time.",
          "I believe they should dress neatly and feel confident, but they do not need to copy every new trend."
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
            "4. A problem connected with following fashion + a solution.",
            "5. Your opinion on whether young people should follow fashion.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из таблицы",
          lines: [
            "Лучше выбрать 2-3 самых заметных цифры, а не переписывать всю таблицу.",
            "Например: 36%, 26% и 22% / 9%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "compare",
          label: "Сравнение",
          title: "Как делать comparison",
          lines: [
            "Сравнивайте способы: 36% is higher than 26%.",
            "Можно сравнить articles online с watching fashion shows (7%).",
            "Не делайте слишком много сравнений: 1-2 обычно достаточно."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Назовите проблему: too much money, pressure, copying bloggers, stress.",
            "Предложите solution: personal style, budget, buy what you need.",
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
        "fashion",
        "articles",
        "bloggers",
        "trends",
        "clothes",
        "style",
        "young people",
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
        "The table shows the results of a survey about how young people in Zetland follow fashion. The project is important because fashion influences teenagers' appearance, spending habits and self-confidence.\n\nAccording to the table, 36% of respondents follow fashion by looking through fashion articles online, which makes this the most popular way. Another 26% notice what others wear, while 22% follow fashion bloggers. By contrast, only 9% seek professional advice and just 7% watch fashion shows.\n\nIt is clear that reading fashion articles online is much more popular than watching fashion shows. The figure for noticing what others wear is also noticeably higher than the percentage for seeking professional advice.\n\nOne problem that can arise with following fashion is spending too much money on trendy clothes. Young people may also feel pressure to copy bloggers and buy things they do not really need. This problem can be solved by choosing a personal style and buying only what fits their budget and lifestyle.\n\nIn my opinion, it is not very important for young people to follow fashion all the time. I believe they should dress neatly and feel confident, but they do not need to copy every new trend to be happy."
    },
    {
      id: "ege-project-task38-u7-coming-of-age",
      unitLabel: "Unit 7",
      switchLabel: "Task 38.2",
      mode: "report",
      title: "Writing · Project Essay",
      typeLabel: "Task 38.2 · survey report",
      lead:
        "Unit 7: essay-project on coming-of-age celebrations. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
      promptLead:
        "Imagine that you are doing a project on how young people in Zetland would prefer to celebrate coming of age. You have found some data on the subject - the results of a survey (see the pie chart below). Comment on the survey data and give your opinion on the subject of the project.",
      promptSurveyQuestion: "How would you prefer to celebrate your coming of age?",
      promptChart: [
        ["A party with friends", "46"],
        ["A family dinner", "21"],
        ["Attending a special ceremony", "17"],
        ["Going on a trip", "9"],
        ["No special way", "7"]
      ],
      instructions: [
        "Write 200-250 words.",
        "Make an opening statement on the subject of the project.",
        "Select and report 2-3 facts.",
        "Make 1-2 comparisons where relevant and give your comments.",
        "Outline a problem that can arise with coming-of-age celebrations and suggest a way of solving it.",
        "Conclude by giving and explaining your opinion on whether coming of age is different from other birthdays."
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
        "A problem connected with coming-of-age celebrations",
        "A practical solution",
        "Your opinion on whether coming of age is different from other birthdays",
        "Exactly 5 logical paragraphs"
      ],
      precheckItems: [
        "Я сделал(а) opening statement по теме проекта",
        "Я взял(а) из диаграммы 2-3 конкретных факта",
        "Я добавил(а) 1-2 сравнения и комментарий",
        "Я описал(а) проблему, связанную with coming-of-age celebrations",
        "Я предложил(а) способ решения этой проблемы",
        "Я дал(а) своё мнение о whether coming of age is different from other birthdays",
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
        "coming of age",
        "zetland",
        "celebrate",
        "celebration"
      ],
      reportFactItems: [
        {
          label: "46% prefer a party with friends",
          keywords: ["46", "party with friends", "party", "friends"]
        },
        {
          label: "21% prefer a family dinner",
          keywords: ["21", "family dinner", "dinner", "family"]
        },
        {
          label: "17% prefer attending a special ceremony",
          keywords: ["17", "special ceremony", "ceremony", "attending"]
        },
        {
          label: "9% prefer going on a trip",
          keywords: ["9", "going on a trip", "trip", "travel"]
        },
        {
          label: "7% prefer no special way",
          keywords: ["7", "no special way", "no special"]
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
        "disagree",
        "conflict",
        "parents",
        "friends",
        "plan",
        "organis",
        "organiz",
        "budget",
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
        "discuss",
        "compromise",
        "plan in advance",
        "budget",
        "share"
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
        "coming of age",
        "different",
        "birthday",
        "birthdays"
      ],
      reportConclusionKeywords: [
        "in conclusion",
        "to sum up",
        "all in all",
        "overall"
      ],
      usefulPhrases: {
        opening: [
          "The pie chart shows the results of a survey about how young people in Zetland would prefer to celebrate coming of age.",
          "The project is about ways teenagers mark this important step in their lives."
        ],
        facts: [
          "According to the chart, 46% of respondents ...",
          "Another 21% would prefer ...",
          "Only 7% choose ..."
        ],
        compare: [
          "This figure is more than twice as high as ...",
          "Compared with ..., this percentage is much lower.",
          "A party with friends is far more popular than going on a trip."
        ],
        problem: [
          "One problem that can arise with coming-of-age celebrations is disagreement between teenagers and their parents about how to celebrate.",
          "A big party can also be expensive and difficult to organise."
        ],
        solution: [
          "This problem can be solved by discussing plans in advance and finding a compromise.",
          "They should also set a budget and share responsibilities with family or friends."
        ],
        opinion: [
          "In my opinion, coming of age is different from other birthdays.",
          "I believe it marks the start of adult life, so the celebration should feel more meaningful and memorable."
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
            "4. A problem connected with coming-of-age celebrations + a solution.",
            "5. Your opinion on whether coming of age is different from other birthdays.",
            "Use exactly 5 paragraphs."
          ]
        },
        {
          id: "facts",
          label: "Факты",
          title: "Какие факты брать из диаграммы",
          lines: [
            "Лучше выбрать 2-3 самые заметные цифры, а не описывать весь chart подряд.",
            "Например: 46%, 21% и 17% / 9%.",
            "Факты должны быть точными и привязанными к данным."
          ]
        },
        {
          id: "problem",
          label: "Problem + solution",
          title: "Как писать problem + solution",
          lines: [
            "Назовите проблему: disagreement with parents, cost, planning, stress.",
            "Предложите solution: discuss, compromise, budget, plan in advance.",
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
        "coming of age",
        "celebration",
        "party",
        "friends",
        "family",
        "ceremony",
        "trip",
        "birthday",
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
          pattern: "\\bcoming of age are\\b",
          flags: "i",
          msg: "Единственное число: `coming of age is`."
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
        "The pie chart shows the results of a survey about how young people in Zetland would prefer to celebrate coming of age. The project is important because this day marks the start of adult life for many teenagers.\n\nAccording to the chart, 46% of respondents would prefer a party with friends, which makes it the most popular choice. Another 21% choose a family dinner, while 17% want to attend a special ceremony. By contrast, only 9% prefer going on a trip and just 7% would celebrate in no special way.\n\nIt is clear that a party with friends is more than twice as popular as a family dinner. The figure for attending a special ceremony is also noticeably higher than the percentage for going on a trip.\n\nOne problem that can arise with coming-of-age celebrations is disagreement between teenagers and their parents about how to celebrate. A big party can also be expensive and difficult to organise. This problem can be solved by discussing plans in advance and finding a compromise that suits both sides.\n\nIn my opinion, coming of age is different from other birthdays. I believe it is a more meaningful step into adult life, so the celebration should feel special and memorable, even if it is simpler than a huge party."
    }
  );
})(typeof window !== "undefined" ? window : this);
