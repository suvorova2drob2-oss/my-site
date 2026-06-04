(function (w) {
  w.__EGE_WRITING_DATA__ = {
    version: 3,
    track: "ege",
    homeHref: "ege.html",
    title: "EGE Writing",
    defaultTaskId: "ege-email-task37-u1",
    tasks: [
      {
        id: "ege-email-task37-u1",
        unitLabel: "Unit 1",
        switchLabel: "Task 37",
        mode: "email",
        title: "Writing · Personal Email",
        typeLabel: "Task 37 · personal email",
        lead:
          "Unit 1: personal email. Локальная проверка по реальным критериям ЕГЭ для задания 37.",
        promptLead:
          "You have received an email message from your English-speaking pen-friend Mark:",
        promptMeta: {
          from: "Mark@mail.uk",
          to: "Russian_friend@ege.ru",
          subject: "Excursion"
        },
        promptRu:
          "Yesterday I went on an excursion to the local history museum with my class. It was really interesting! Do you often go on excursions? Where would you like to go with your class, and why? How do you prefer spending your free time?\nI've just finished my school project on literature...",
        instructions: [
          "Write an email to Mark.",
          "Answer his 3 questions.",
          "Ask 3 questions about his school project.",
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
          "Обращение (Dear Mark, ...)",
          "Короткая thanks/opening phrase",
          "Ответ на вопрос про excursions",
          "Ответ на вопрос where to go with class and why",
          "Ответ на вопрос about free time",
          "3 вопроса к Mark про school project",
          "Завершающая фраза",
          "Подпись"
        ],
        precheckItems: [
          "Я добавил(а) обращение `Dear Mark,`",
          "Я ответил(а) на 3 вопроса Mark",
          "Я задал(а) 3 вопроса back про `school project`",
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
            label: "Do you often go on excursions?",
            keywords: ["excursion", "excursions", "museum", "go with my class", "go on trips", "we go"]
          },
          {
            id: "q2",
            label: "Where would you like to go with your class, and why?",
            keywords: ["i would like to go", "i'd like to go", "with my class", "because", "would love to visit", "place"]
          },
          {
            id: "q3",
            label: "How do you prefer spending your free time?",
            keywords: ["free time", "spare time", "i prefer", "usually spend", "in my free time", "after school"]
          }
        ],
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
          greeting: ["dear mark"],
          thanks: ["thanks for your email", "thank you for your email", "thanks for writing", "it was great to hear from you"],
          closing: ["write back soon", "hope to hear from you soon", "best wishes", "all the best", "take care"],
          signoff: ["best wishes", "all the best", "yours", "take care"]
        },
        usefulPhrases: {
          opening: [
            "Dear Mark,",
            "Thanks for your email.",
            "It was great to hear from you again."
          ],
          answers: [
            "As for me, ...",
            "I often go on excursions with my class.",
            "I would like to visit ... because ...",
            "In my free time, I usually ..."
          ],
          questions: [
            "What was your project about exactly?",
            "Why did you choose literature for your project?",
            "How long did it take you to finish it?"
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
              "1. Dear Mark,",
              "2. Thanks for your email / It was great to hear from you.",
              "3. Ответы на 3 вопроса Mark.",
              "4. 3 вопроса о его school project.",
              "5. Closing phrase: Anyway, I have to go now. / Write back soon.",
              "6. Подпись: Best wishes, ... / Your Russian friend"
            ]
          },
          {
            id: "answers",
            label: "Ответы Mark",
            title: "Что нужно раскрыть",
            lines: [
              "Ответьте на экскурсии: ходите ли вы на них часто.",
              "Скажите, куда бы хотели пойти с классом и почему.",
              "Скажите, как обычно проводите свободное время.",
              "Не отвечайте одним словом: лучше 1-2 предложения на каждый вопрос."
            ]
          },
          {
            id: "questions",
            label: "3 questions back",
            title: "Какие вопросы задать Mark",
            lines: [
              "Нужно задать ровно 3 вопроса по school project on literature.",
              "Примеры: What was your project about? Why did you choose this topic? How long did it take you?",
              "Вопросы должны быть именно к project, не к museum trip."
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
          "excursion",
          "museum",
          "class",
          "school",
          "free time",
          "project",
          "literature",
          "mark"
        ],
        commonMistakes: [
          {
            pattern: "\\bdear mark\\b(?!,)",
            flags: "i",
            msg: "После `Dear Mark` нужна запятая."
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
            pattern: "\\bfree times\\b",
            flags: "i",
            msg: "`Free time` обычно без множественного числа."
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
          "Dear Mark,\n\nThanks for your email. It was great to hear from you. I am glad your excursion to the museum was interesting.\n\nAs for me, I do not go on excursions very often, but I enjoy them. I would like to go to a science museum with my class because I am interested in new technology. In my free time, I usually read books, watch films and go for a walk with my friends.\n\nBy the way, what was your school project about exactly? Why did you choose literature? How long did it take you to finish it?\n\nAnyway, I have to go now. Write back soon.\n\nBest wishes,\nYour Russian friend"
      },
      {
        id: "ege-project-task38-u1-water",
        unitLabel: "Unit 1",
        switchLabel: "Task 38.1",
        mode: "report",
        title: "Writing · Project Essay",
        typeLabel: "Task 38.1 · survey report",
        lead:
          "Unit 1: essay-project on drinking water habits. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
        promptLead:
          "Imagine that you are doing a project on how often Zetland teenagers drink water. You have found some data on the subject - the results of a survey. Comment on the survey data and give your opinion on the subject of the project.",
        promptSurveyQuestion: "How often do you drink water?",
        promptTable: {
          headers: ["Answers", "Number of respondents (%)"],
          rows: [
            ["From time to time at school, between the lessons", "45"],
            ["Only at home, in the morning and after school", "25"],
            ["Almost never, I prefer other drinks", "12"],
            ["Almost every hour from my own bottle", "11"],
            ["It depends on the weather a lot", "7"]
          ]
        },
        instructions: [
          "Write 200-250 words.",
          "Make an opening statement on the subject of the project.",
          "Select and report 2-3 facts.",
          "Make 1-2 comparisons where relevant and give your comments.",
          "Outline a problem that can arise with not drinking enough water and suggest a way of solving it.",
          "Conclude by giving and explaining your opinion on the importance of drinking enough water."
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
          "A problem connected with not drinking enough water",
          "A logical solution",
          "Your opinion + explanation",
          "Exactly 5 logical paragraphs"
        ],
        precheckItems: [
          "Я сделал(а) opening statement по теме проекта",
          "Я взял(а) из таблицы 2-3 конкретных факта",
          "Я добавил(а) 1-2 сравнения и комментарий",
          "Я описал(а) проблему, связанную с недостатком воды",
          "Я предложил(а) способ решения этой проблемы",
          "Я дал(а) своё мнение и объяснил(а) его",
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
          "drink water"
        ],
        reportFactItems: [
          {
            label: "45% drink water from time to time at school",
            keywords: ["45", "from time to time", "between the lessons", "at school"]
          },
          {
            label: "25% drink water only at home",
            keywords: ["25", "only at home", "in the morning", "after school"]
          },
          {
            label: "12% almost never drink water",
            keywords: ["12", "almost never", "other drinks"]
          },
          {
            label: "11% drink water almost every hour from their own bottle",
            keywords: ["11", "almost every hour", "own bottle"]
          },
          {
            label: "7% say it depends on the weather",
            keywords: ["7", "depends on the weather"]
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
          "three times as"
        ],
        reportProblemKeywords: [
          "problem",
          "issue",
          "dehydration",
          "health",
          "headache",
          "tired",
          "can't concentrate",
          "cannot concentrate",
          "weak",
          "unwell"
        ],
        reportSolutionKeywords: [
          "solution",
          "solve this problem",
          "to avoid this",
          "to prevent this",
          "they should",
          "teenagers should",
          "it can be solved",
          "one way to solve it",
          "drink enough water",
          "carry a bottle"
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
          "in conclusion"
        ],
        reportConclusionKeywords: [
          "in conclusion",
          "to sum up",
          "all in all",
          "overall"
        ],
        usefulPhrases: {
          opening: [
            "The table shows the results of a survey about how often Zetland teenagers drink water.",
            "The project is about drinking water habits among teenagers."
          ],
          facts: [
            "According to the table, 45% of respondents ...",
            "Another 25% say that ...",
            "Only 7% report that ..."
          ],
          compare: [
            "This figure is much higher than ...",
            "Compared with ..., this number is lower.",
            "The difference between these two groups is noticeable."
          ],
          problem: [
            "One problem that can arise is dehydration.",
            "As a result, teenagers may feel tired and cannot concentrate well."
          ],
          solution: [
            "This problem can be solved if teenagers carry water with them and drink it regularly.",
            "They should also make short water breaks during the day."
          ],
          opinion: [
            "In my opinion, drinking enough water is very important.",
            "I believe it helps teenagers stay healthy and productive."
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
              "4. A problem connected with not drinking enough water + a solution.",
              "5. Your opinion and explanation in the conclusion.",
              "Use exactly 5 paragraphs."
            ]
          },
          {
            id: "facts",
            label: "Факты",
            title: "Какие факты брать из таблицы",
            lines: [
              "Лучше выбрать 2-3 самых заметных цифры, а не переписывать всю таблицу.",
              "Например: 45%, 25% и 11% / 12%.",
              "Факты должны быть точными и привязанными к данным."
            ]
          },
          {
            id: "compare",
            label: "Сравнение",
            title: "Как делать comparison",
            lines: [
              "Сравнивайте группы между собой: 45% is much higher than 25%.",
              "Можно добавить короткий комментарий, почему разница выглядит заметной.",
              "Не делайте слишком много сравнений: 1-2 обычно достаточно."
            ]
          },
          {
            id: "problem",
            label: "Problem + solution",
            title: "Как писать problem + solution",
            lines: [
              "Нужно не только назвать проблему, но и обязательно предложить способ решения.",
              "Например: dehydration -> carry a bottle / drink water regularly.",
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
          "water",
          "drink",
          "teenagers",
          "survey",
          "table",
          "respondents",
          "dehydration",
          "health",
          "school"
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
          "The table shows the results of a survey about how often Zetland teenagers drink water. The project is important because drinking enough water is closely connected with health and concentration.\n\nAccording to the table, 45% of respondents drink water from time to time at school, between the lessons. Another 25% say that they drink it only at home, in the morning and after school. In addition, 12% almost never drink water because they prefer other drinks.\n\nIt is clear that drinking water at school is much more common than drinking it only at home. The figure for teenagers who almost never drink water is also slightly higher than the number of those who drink it almost every hour from their own bottle, which is 11%.\n\nOne problem that can arise if teenagers do not drink enough water is dehydration. As a result, they may feel tired, get headaches and find it difficult to concentrate on their studies. This problem can be solved if students carry a bottle of water with them and drink regularly during the day.\n\nIn my opinion, drinking enough water is extremely important. I believe it helps teenagers stay healthy, active and productive both at school and at home."
      },
      {
        id: "ege-project-task38-u1-outdoor",
        unitLabel: "Unit 1",
        switchLabel: "Task 38.2",
        mode: "report",
        title: "Writing · Project Essay",
        typeLabel: "Task 38.2 · survey report",
        lead:
          "Unit 1: essay-project on outdoor summer activities. Отдельная шкала Task 38: 14 баллов и критерии K1-K5.",
        promptLead:
          "Imagine that you are doing a project on what outdoor summer activities Zetland teenagers like the most. You have found some data on the subject - the results of a survey. Comment on the survey data and give your opinion on the subject of the project.",
        promptSurveyQuestion: "What outdoor summer activity do you like the most?",
        promptChart: [
          ["Walking with friends", "46"],
          ["Riding a bike or a scooter", "23"],
          ["Playing active games", "16"],
          ["Rollerblading", "8"],
          ["Working out on a sports ground", "7"]
        ],
        instructions: [
          "Write 200-250 words.",
          "Make an opening statement on the subject of the project.",
          "Select and report 2-3 facts.",
          "Make 1-2 comparisons where relevant and give your comments.",
          "Outline a problem that can arise with playing active games in the summer and suggest a way of solving it.",
          "Conclude by giving and explaining your opinion on the importance of spending enough time outdoors in the summer for teenagers."
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
          "A problem connected with playing active games in summer",
          "A practical solution",
          "Your opinion + explanation",
          "Exactly 5 logical paragraphs"
        ],
        precheckItems: [
          "Я сделал(а) opening statement по теме проекта",
          "Я взял(а) из диаграммы 2-3 конкретных факта",
          "Я добавил(а) 1-2 сравнения и комментарий",
          "Я описал(а) проблему, связанную с active games in summer",
          "Я предложил(а) способ решения этой проблемы",
          "Я дал(а) своё мнение и объяснил(а) его",
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
          "outdoor summer activities",
          "zetland teenagers",
          "like the most"
        ],
        reportFactItems: [
          {
            label: "46% prefer walking with friends",
            keywords: ["46", "walking with friends", "walk with friends"]
          },
          {
            label: "23% prefer riding a bike or a scooter",
            keywords: ["23", "riding a bike", "scooter", "bike or a scooter"]
          },
          {
            label: "16% choose playing active games",
            keywords: ["16", "playing active games", "active games"]
          },
          {
            label: "8% choose rollerblading",
            keywords: ["8", "rollerblading"]
          },
          {
            label: "7% work out on a sports ground",
            keywords: ["7", "sports ground", "working out"]
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
          "almost twice"
        ],
        reportProblemKeywords: [
          "problem",
          "issue",
          "injury",
          "sunburn",
          "heatstroke",
          "too hot",
          "hurt",
          "unsafe",
          "dangerous",
          "tired"
        ],
        reportSolutionKeywords: [
          "solution",
          "solve this problem",
          "to avoid this",
          "to prevent this",
          "they should",
          "teenagers should",
          "it can be solved",
          "one way to solve it",
          "wear a cap",
          "drink water",
          "take breaks"
        ],
        reportOpinionKeywords: [
          "in my opinion",
          "i think",
          "i believe",
          "to my mind",
          "as for me",
          "personally",
          "to sum up",
          "in conclusion"
        ],
        reportConclusionKeywords: [
          "in conclusion",
          "to sum up",
          "all in all",
          "overall"
        ],
        usefulPhrases: {
          opening: [
            "The pie chart shows the results of a survey about the most popular outdoor summer activities among Zetland teenagers.",
            "The project is about what outdoor activities teenagers prefer in summer."
          ],
          facts: [
            "According to the chart, 46% of respondents ...",
            "Another 23% prefer ...",
            "Only 7% choose ..."
          ],
          compare: [
            "This figure is much higher than ...",
            "Compared with ..., this percentage is lower.",
            "The difference between these groups is quite noticeable."
          ],
          problem: [
            "One problem that can arise is injury or heatstroke.",
            "As a result, teenagers may feel unwell or even get hurt."
          ],
          solution: [
            "This problem can be solved by taking breaks and drinking enough water.",
            "Teenagers should also wear caps and avoid the hottest hours of the day."
          ],
          opinion: [
            "In my opinion, spending enough time outdoors in summer is very important.",
            "I believe it helps teenagers stay active, healthy and happier."
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
              "4. A problem connected with active games in summer.",
              "5. A solution to this problem.",
              "6. Your opinion and explanation in the conclusion."
            ]
          },
          {
            id: "facts",
            label: "Факты",
            title: "Какие факты брать из диаграммы",
            lines: [
              "Лучше выбрать 2-3 самые заметные цифры, а не описывать весь chart подряд.",
              "Например: 46%, 23% и 7% / 16%.",
              "Факты должны быть точными и привязанными к данным."
            ]
          },
          {
            id: "problem",
            label: "Problem + solution",
            title: "Как писать problem + solution",
            lines: [
              "Назовите реальную проблему: injury, heatstroke, sunburn, tiredness.",
              "Потом обязательно предложите solution: drink water, take breaks, wear a cap, avoid the hottest hours.",
              "Для 38.2 solution обязателен."
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
          "summer",
          "outdoor",
          "activities",
          "teenagers",
          "walking",
          "bike",
          "scooter",
          "games",
          "rollerblading",
          "sports ground"
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
          "The pie chart shows the results of a survey about what outdoor summer activities Zetland teenagers like most. The project is important because spending time outdoors can influence teenagers' health and lifestyle.\n\nAccording to the chart, 46% of respondents prefer walking with friends, which makes it the most popular activity. Another 23% choose riding a bike or a scooter, while 16% like playing active games. By contrast, only 8% prefer rollerblading and just 7% work out on a sports ground.\n\nIt is clear that walking with friends is far more popular than all the other activities. The figure for biking or riding a scooter is also noticeably higher than the percentage of teenagers who enjoy rollerblading or working out on a sports ground.\n\nOne problem that can arise with playing active games in summer is heatstroke or injury, especially on very hot days. This problem can be solved by taking regular breaks, drinking enough water and avoiding the hottest hours of the day.\n\nIn my opinion, spending enough time outdoors in summer is very important for teenagers. I believe it helps them stay fit, reduce stress and enjoy their holidays in a healthy way."
      }
    ]
  };
})(typeof window !== "undefined" ? window : this);
