/**
 * ЕГЭ Listening MC · Unit 2 · The Knowledge Hour · Professor Anderson.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u2-knowledge-hour",
    unitOrder: 2,
    title: "Unit 2 · The Knowledge Hour",
    examSection: "§3 · Multiple Choice",
    headerTitle: "Presenter & Professor Anderson · deep sea",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/2/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%202%20(mp3cut.net)%20(2).mp3",
    instructionHtml:
      "Вы услышите <strong>интервью с учёным</strong>. В заданиях <strong>3–9</strong> выберите <strong>один</strong> из трёх вариантов ответа. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>Главный навык:</strong> один верный смысл из трёх формулировок — часто это парафраз, не дословная цитата.</p>" +
      "<ul>" +
      "<li><strong>Ловушка №1:</strong> приветствие <em>Good morning</em> ≠ шоу каждое утро (смотри <em>weekly</em> + день недели).</li>" +
      "<li><strong>Ловушка №2:</strong> sonar в записи — <em>инструмент</em>, а не «challenge» (вопрос 6).</li>" +
      "<li><strong>Ловушка №3:</strong> family vacation и coral reef — вопрос про <em>spark</em>, ключ в момент «That's the moment I knew…».</li>" +
      "<li>Второе прослушивание — для спорных номеров 5–8.</li>" +
      "</ul>",

    questions: [
      {
        examNum: 3,
        prompt: "How often does the show run?",
        key: 3,
        choices: [
          { num: 1, text: "Every morning." },
          { num: 2, text: "Every other hour." },
          { num: 3, text: "Every Wednesday." }
        ],
        explainRu:
          "Передача — <em>weekly dose</em> (раз в неделю); сегодня среда — эфир по средам.",
        distractorWrongRu: {
          1: "Good morning — приветствие ведущего, не расписание.",
          2: "Every other hour в записи не звучит."
        }
      },
      {
        examNum: 4,
        prompt:
          "At the beginning of the interview, we learn that Professor Anderson…",
        key: 1,
        choices: [
          { num: 1, text: "made important discoveries." },
          { num: 2, text: "published a novel about the sea." },
          { num: 3, text: "earned awards for sea illustrations." }
        ],
        explainRu:
          "Экспедиции, groundbreaking research papers и awards за вклад в marine science — важные открытия / исследования, не роман и не иллюстрации.",
        distractorWrongRu: {
          2: "Research papers ≠ novel about the sea.",
          3: "Awards — за marine science, не за sea illustrations."
        }
      },
      {
        examNum: 5,
        prompt: "What sparked Professor Anderson's passion for the ocean?",
        key: 3,
        choices: [
          { num: 1, text: "Reading about the ocean's secrets." },
          { num: 2, text: "Her very first family vacation." },
          { num: 3, text: "Seeing a coral reef full of life." }
        ],
        explainRu:
          "«That's the moment I knew» — после первого coral reef bursting with life; отпуск — контекст, не сам spark.",
        distractorWrongRu: {
          1: "Reading about secrets в записи не упоминается.",
          2: "Family vacation — где это случилось, но искра — риф с жизнью."
        }
      },
      {
        examNum: 6,
        prompt: "What is NOT mentioned as a challenge of exploring the sea?",
        key: 2,
        choices: [
          { num: 1, text: "Fighting high pressure" },
          { num: 2, text: "Using sonar technology" },
          { num: 3, text: "Finding one's way in the sea" }
        ],
        explainRu:
          "Давление и навигация в darkness — проблемы; sonar — средство исследования, не challenge.",
        distractorWrongRu: {
          1: "Pressure is extremely high — прямо названо.",
          3: "Navigating in the vast darkness is not easy — про orientation."
        }
      },
      {
        examNum: 7,
        prompt: "Which creatures shine with blue light?",
        key: 2,
        choices: [
          { num: 1, text: "Starfish" },
          { num: 2, text: "Jellyfish" },
          { num: 3, text: "Glowworms" }
        ],
        explainRu:
          "Bioluminescent jellyfish в Mariana Trench — ghostly blue light; glowworms и starfish — green.",
        distractorWrongRu: {
          1: "Starfish cast green light, не blue.",
          3: "Glowworms cast green light, не blue."
        }
      },
      {
        examNum: 8,
        prompt:
          "How can sea exploration help people, according to the interviewee?",
        key: 3,
        choices: [
          { num: 1, text: "It provides seaweed for medicines." },
          { num: 2, text: "It helps us survive in harsh conditions." },
          { num: 3, text: "It teaches people to deal with global warming." }
        ],
        explainRu:
          "Knowledge vital in the fight against climate change — парафраз deal with global warming.",
        distractorWrongRu: {
          1: "New medicines — да, но не seaweed specifically.",
          2: "Life adapts to extreme environments — insight, не «help us survive»."
        }
      },
      {
        examNum: 9,
        prompt: "What does Professor Anderson advise young people?",
        key: 2,
        choices: [
          { num: 1, text: "Think, wonder, and love." },
          { num: 2, text: "Learn, explore, and protect." },
          { num: 3, text: "Remember, wait, and discover." }
        ],
        explainRu:
          "Финал: keep exploring, keep learning, and protect our precious underwater world.",
        distractorWrongRu: {
          1: "Think / wonder / love — другие глаголы, не из записи.",
          3: "Remember / wait — не звучат в совете."
        }
      }
    ],

    dialogueParagraphs: [
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "Good morning, everyone, and welcome back to \"The Knowledge Hour\" on Radio Echo, your weekly dose of environmental news and fascinating discoveries! It's Wednesday today, and we're thrilled to have with us Professor Alice Anderson, a leading marine biologist who has dedicated her career to exploring the wonders of the underwater world. Professor Anderson, welcome to the show!"
          },
          {
            speaker: "Professor Anderson",
            text:
              "Thank you so much for having me. It's a pleasure to be here."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "Professor Anderson, throughout your career, you've participated in numerous oceanographic expeditions, published groundbreaking research papers, and even received prestigious awards for your contributions to marine science. How did you become interested in the ocean in the first place?"
          },
          {
            speaker: "Professor Anderson",
            text:
              "Well, to be honest, it all started with a simple family vacation when I was a child. We went diving off the coast, and that's when I first saw a coral reef bursting with life. It was a pleasant surprise! The vibrant colours and the incredible diversity of creatures were unlike anything I'd ever seen before. That's the moment I knew I wanted to spend my life learning more about this hidden world beneath the waves."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "That's a wonderful story! And your research has certainly helped us unlock many of the ocean's secrets. However, the ocean remains largely unexplored. What are some of the biggest challenges scientists face when going into the deep sea?"
          },
          {
            speaker: "Professor Anderson",
            text:
              "That's a great question. The deep sea is a cruel environment. It's very dark and cold, and the pressure is extremely high. Designing equipment that can help with these conditions is a constant challenge. Additionally, navigating in the vast darkness is not easy. We rely on sophisticated sonar technology and submersibles, which are essentially underwater vehicles, to explore these depths."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "It sounds quite nerve-wracking! But these challenges must lead to some truly remarkable discoveries, wouldn't you agree?"
          },
          {
            speaker: "Professor Anderson",
            text:
              "Absolutely! Every expedition brings new surprises. Just a few years ago, during a research dive in the Mariana Trench, the deepest part of the world's oceans, we discovered a colony of bioluminescent jellyfish that differed from any species previously documented. Unlike glowworms and starfish, which cast green light, they were glowing with a ghostly blue light. It was like something out of a science fiction movie!"
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "Wow, that must have been an awesome sight! Professor Anderson, with all the environmental threats our oceans face today, do you believe continued deep-sea exploration is still important?"
          },
          {
            speaker: "Professor Anderson",
            text:
              "Absolutely! The deep sea plays a vital role in regulating our planet's climate. It also houses a vast pool of biodiversity that we're only beginning to understand. Studying these ecosystems can help us develop new medicines and technologies and provide valuable insights into how life adapts to extreme environments. This knowledge could be vital in the fight against climate change."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "Professor Anderson, your passion for the ocean is truly catching! Thank you for joining us today and sharing your insights with our listeners."
          },
          {
            speaker: "Professor Anderson",
            text:
              "Thank you for having me, it's been a pleasure. And to all the young listeners out there, remember, the ocean is full of wonders waiting to be discovered. So keep exploring, keep learning, and protect our precious underwater world!"
          }
        ]
      }
    ],

    huntLabs: [
      {
        examNum: 3,
        key: 3,
        paragraphIndex: 0,
        keyLineRu: "weekly dose + It's Wednesday today → every Wednesday.",
        explainRu: "Еженедельная передача; сегодня среда — эфир по средам.",
        evidencePromptRu: "Найди weekly и день недели.",
        segments: [
          { kind: "hit", sol: "e", text: "your weekly dose of environmental news" },
          { kind: "hit", sol: "e", text: "It's Wednesday today" },
          {
            kind: "hit",
            sol: "d",
            text: "Good morning, everyone",
            wrongOption: 1,
            distractExplainRu:
              "Good morning — приветствие, не «every morning» (вариант 1)."
          }
        ]
      },
      {
        examNum: 4,
        key: 1,
        paragraphIndex: 1,
        keyLineRu: "expeditions · research papers · awards — important work / discoveries.",
        explainRu: "В начале — достижения учёного, не роман и не illustrations.",
        evidencePromptRu: "Найди перечень достижений Anderson в вопросе ведущего.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "participated in numerous oceanographic expeditions"
          },
          {
            kind: "hit",
            sol: "e",
            text: "published groundbreaking research papers"
          },
          {
            kind: "hit",
            sol: "d",
            text: "received prestigious awards for your contributions to marine science",
            wrongOption: 3,
            distractExplainRu:
              "Awards за marine science — не «sea illustrations» (вариант 3)."
          }
        ]
      },
      {
        examNum: 5,
        key: 3,
        paragraphIndex: 1,
        keyLineRu: "coral reef bursting with life · That's the moment I knew.",
        explainRu: "Искра — первый риф, не abstract vacation или reading.",
        evidencePromptRu: "Найди момент «That's the moment I knew».",
        segments: [
          {
            kind: "hit",
            sol: "d",
            text: "a simple family vacation when I was a child",
            wrongOption: 2,
            distractExplainRu:
              "Family vacation — обстановка, но spark = coral reef (вар. 3), не «first vacation»."
          },
          {
            kind: "hit",
            sol: "e",
            text: "first saw a coral reef bursting with life"
          },
          {
            kind: "hit",
            sol: "e",
            text: "That's the moment I knew I wanted to spend my life learning more"
          }
        ]
      },
      {
        examNum: 6,
        key: 2,
        paragraphIndex: 2,
        keyLineRu: "Challenges: pressure, darkness — sonar is a tool, not a challenge.",
        explainRu: "Sonar — на чём полагаются, не что мешает.",
        evidencePromptRu: "Сравни «challenge» vs «rely on sonar».",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "the pressure is extremely high"
          },
          {
            kind: "hit",
            sol: "e",
            text: "navigating in the vast darkness is not easy"
          },
          {
            kind: "hit",
            sol: "d",
            text: "We rely on sophisticated sonar technology",
            wrongOption: 2,
            distractExplainRu:
              "Sonar — инструмент для исследования, не «challenge» (вариант 2 — NOT mentioned)."
          }
        ]
      },
      {
        examNum: 7,
        key: 2,
        paragraphIndex: 3,
        keyLineRu: "bioluminescent jellyfish · ghostly blue light.",
        explainRu: "Blue — jellyfish; green — glowworms и starfish.",
        evidencePromptRu: "Найди contrast green vs blue.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "bioluminescent jellyfish"
          },
          {
            kind: "hit",
            sol: "e",
            text: "glowing with a ghostly blue light"
          },
          {
            kind: "hit",
            sol: "d",
            text: "glowworms and starfish, which cast green light",
            wrongOption: 1,
            distractExplainRu:
              "Starfish / glowworms — green light, не blue (вар. 1 и 3)."
          }
        ]
      },
      {
        examNum: 8,
        key: 3,
        paragraphIndex: 4,
        keyLineRu: "vital in the fight against climate change.",
        explainRu: "Парафраз deal with global warming.",
        evidencePromptRu: "Найди climate change в финале ответа Anderson.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "develop new medicines and technologies"
          },
          {
            kind: "hit",
            sol: "d",
            text: "develop new medicines and technologies",
            wrongOption: 1,
            distractExplainRu:
              "Medicines — да, но не «seaweed» specifically (вариант 1)."
          },
          {
            kind: "hit",
            sol: "e",
            text: "vital in the fight against climate change"
          },
          {
            kind: "hit",
            sol: "d",
            text: "how life adapts to extreme environments",
            wrongOption: 2,
            distractExplainRu:
              "Adapts to extreme environments — insight, не «help us survive» (вар. 2)."
          }
        ]
      },
      {
        examNum: 9,
        key: 2,
        paragraphIndex: 5,
        keyLineRu: "keep exploring, keep learning, and protect.",
        explainRu: "Learn, explore, protect — три глагола из финала.",
        evidencePromptRu: "Найди совет young listeners.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "keep exploring, keep learning, and protect our precious underwater world"
          },
          {
            kind: "hit",
            sol: "d",
            text: "remember, the ocean is full of wonders waiting to be discovered",
            wrongOption: 3,
            distractExplainRu:
              "Remember / discover — частично похоже, но ключ — explore, learn, protect (вар. 2)."
          }
        ]
      }
    ],

    shadowSpeakers: [
      {
        id: "Presenter",
        label: "Presenter",
        fullText:
          "Good morning, everyone, and welcome back to \"The Knowledge Hour\" on Radio Echo, your weekly dose of environmental news and fascinating discoveries! It's Wednesday today, and we're thrilled to have with us Professor Alice Anderson, a leading marine biologist who has dedicated her career to exploring the wonders of the underwater world. Professor Anderson, welcome to the show! Professor Anderson, throughout your career, you've participated in numerous oceanographic expeditions, published groundbreaking research papers, and even received prestigious awards for your contributions to marine science. How did you become interested in the ocean in the first place? That's a wonderful story! And your research has certainly helped us unlock many of the ocean's secrets. However, the ocean remains largely unexplored. What are some of the biggest challenges scientists face when going into the deep sea? It sounds quite nerve-wracking! But these challenges must lead to some truly remarkable discoveries, wouldn't you agree? Wow, that must have been an awesome sight! Professor Anderson, with all the environmental threats our oceans face today, do you believe continued deep-sea exploration is still important? Professor Anderson, your passion for the ocean is truly catching! Thank you for joining us today and sharing your insights with our listeners.",
        phrases: [
          {
            en: "your weekly dose of environmental news",
            ru: "еженедельная порция новостей об окружающей среде",
            tip: "3 · weekly"
          },
          { en: "It's Wednesday today", ru: "сегодня среда", tip: "3 · ключ" },
          { en: "exploring the wonders of the underwater world", ru: "изучение чудес подводного мира" },
          { en: "How did you become interested in the ocean", ru: "как вы заинтересовались океаном" },
          { en: "unlock many of the ocean's secrets", ru: "раскрыть многие тайны океана" },
          { en: "largely unexplored", ru: "во многом неизучен" },
          { en: "biggest challenges scientists face", ru: "главные трудности для учёных" },
          { en: "environmental threats our oceans face", ru: "экологические угрозы для океанов" },
          { en: "your passion for the ocean is truly catching", ru: "ваша страсть к океану заразительна" }
        ],
        chunks: [
          {
            text:
              "Good morning, everyone … welcome to the show!",
            showText: true
          },
          {
            text:
              "Professor Anderson, throughout your career … in the first place?",
            showText: true
          },
          {
            text:
              "That's a wonderful story! … going into the deep sea?",
            showText: true
          },
          {
            text:
              "It sounds quite nerve-wracking! … wouldn't you agree?",
            showText: true
          },
          {
            text:
              "Wow, that must have been an awesome sight! … still important?",
            showText: true
          },
          {
            text:
              "Professor Anderson, your passion … with our listeners.",
            showText: true
          }
        ]
      },
      {
        id: "Professor Anderson",
        label: "Professor Anderson",
        fullText:
          "Thank you so much for having me. It's a pleasure to be here. Well, to be honest, it all started with a simple family vacation when I was a child. We went diving off the coast, and that's when I first saw a coral reef bursting with life. It was a pleasant surprise! The vibrant colours and the incredible diversity of creatures were unlike anything I'd ever seen before. That's the moment I knew I wanted to spend my life learning more about this hidden world beneath the waves. That's a great question. The deep sea is a cruel environment. It's very dark and cold, and the pressure is extremely high. Designing equipment that can help with these conditions is a constant challenge. Additionally, navigating in the vast darkness is not easy. We rely on sophisticated sonar technology and submersibles, which are essentially underwater vehicles, to explore these depths. Absolutely! Every expedition brings new surprises. Just a few years ago, during a research dive in the Mariana Trench, the deepest part of the world's oceans, we discovered a colony of bioluminescent jellyfish that differed from any species previously documented. Unlike glowworms and starfish, which cast green light, they were glowing with a ghostly blue light. It was like something out of a science fiction movie! Absolutely! The deep sea plays a vital role in regulating our planet's climate. It also houses a vast pool of biodiversity that we're only beginning to understand. Studying these ecosystems can help us develop new medicines and technologies and provide valuable insights into how life adapts to extreme environments. This knowledge could be vital in the fight against climate change. Thank you for having me, it's been a pleasure. And to all the young listeners out there, remember, the ocean is full of wonders waiting to be discovered. So keep exploring, keep learning, and protect our precious underwater world!",
        phrases: [
          { en: "Thank you so much for having me", ru: "большое спасибо, что пригласили" },
          { en: "It's a pleasure to be here", ru: "рада быть здесь" },
          {
            en: "a simple family vacation when I was a child",
            ru: "простой семейный отпуск в детстве",
            tip: "5 · ловушка 2"
          },
          { en: "We went diving off the coast", ru: "мы ныряли у побережья" },
          {
            en: "first saw a coral reef bursting with life",
            ru: "впервые увидела коралловый риф, кишащий жизнью",
            tip: "5 · ключ"
          },
          { en: "a pleasant surprise", ru: "приятный сюрприз" },
          { en: "vibrant colours", ru: "яркие цвета" },
          { en: "incredible diversity of creatures", ru: "невероятное разнообразие существ" },
          {
            en: "That's the moment I knew",
            ru: "в тот момент я поняла",
            tip: "5 · spark"
          },
          { en: "hidden world beneath the waves", ru: "скрытый мир под волнами" },
          { en: "The deep sea is a cruel environment", ru: "глубокое море — суровая среда" },
          { en: "very dark and cold", ru: "очень тёмное и холодное" },
          {
            en: "the pressure is extremely high",
            ru: "давление чрезвычайно высокое",
            tip: "6 · challenge 1"
          },
          { en: "Designing equipment", ru: "конструирование оборудования" },
          { en: "a constant challenge", ru: "постоянная проблема / вызов" },
          {
            en: "navigating in the vast darkness is not easy",
            ru: "ориентироваться во мраке нелегко",
            tip: "6 · challenge 3"
          },
          {
            en: "sophisticated sonar technology",
            ru: "сложная сонарная технология",
            tip: "6 · tool, не challenge"
          },
          { en: "submersibles", ru: "батискафы / подводные аппараты" },
          { en: "underwater vehicles", ru: "подводные транспортные средства" },
          { en: "Every expedition brings new surprises", ru: "каждая экспедиция приносит сюрпризы" },
          { en: "research dive in the Mariana Trench", ru: "исследовательское погружение в Марианскую впадину" },
          { en: "the deepest part of the world's oceans", ru: "самая глубокая часть мирового океана" },
          {
            en: "bioluminescent jellyfish",
            ru: "светящиеся медузы",
            tip: "7 · ключ"
          },
          {
            en: "glowing with a ghostly blue light",
            ru: "светились призрачным синим светом",
            tip: "7 · blue"
          },
          {
            en: "glowworms and starfish, which cast green light",
            ru: "светлячки и морские звёзды — зелёный свет",
            tip: "7 · ловушка 1/3"
          },
          { en: "something out of a science fiction movie", ru: "как из научной фантастики" },
          { en: "regulating our planet's climate", ru: "регулирование климата планеты" },
          { en: "a vast pool of biodiversity", ru: "огромный резервуар биоразнообразия" },
          { en: "develop new medicines and technologies", ru: "разрабатывать новые лекарства и технологии" },
          { en: "how life adapts to extreme environments", ru: "как жизнь адаптируется к экстремальным условиям" },
          {
            en: "vital in the fight against climate change",
            ru: "жизненно важно в борьбе с изменением климата",
            tip: "8 · ключ"
          },
          { en: "the ocean is full of wonders waiting to be discovered", ru: "океан полон чудес, ждущих открытия" },
          {
            en: "keep exploring, keep learning, and protect our precious underwater world",
            ru: "продолжайте исследовать, учиться и защищать подводный мир",
            tip: "9 · ключ"
          }
        ],
        chunks: [
          {
            text:
              "Thank you so much … hidden world beneath the waves.",
            showText: true
          },
          {
            text:
              "That's a great question. … explore these depths.",
            showText: true
          },
          {
            text:
              "Absolutely! Every expedition … science fiction movie!",
            showText: true
          },
          {
            text:
              "Absolutely! The deep sea plays … fight against climate change.",
            showText: true
          },
          {
            text:
              "Thank you for having me … protect our precious underwater world!",
            showText: true
          }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
