/**
 * ЕГЭ Listening MC · Unit 3 · The Big Picture · Dr. Alice Green.
 */
(function (w) {
  var pack = w.__EGE_LISTENING_MC__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u3-big-picture",
    unitOrder: 3,
    title: "Unit 3 · The Big Picture",
    examSection: "§3 · Multiple Choice",
    headerTitle: "Mathew & Dr. Alice Green · environment",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/3/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%203%20(mp3cut.net)%20(2).mp3",
    instructionHtml:
      "Вы услышите <strong>интервью с учёным</strong>. В заданиях <strong>3–9</strong> выберите <strong>один</strong> из трёх вариантов ответа. Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>Главный навык:</strong> один верный смысл из трёх формулировок — часто это парафраз.</p>" +
      "<ul>" +
      "<li><strong>Ловушка №1:</strong> <em>Radio Frequency X</em> / <em>99.9 FM</em> — не название шоу (вопрос 3).</li>" +
      "<li><strong>Ловушка №2:</strong> beauty of nature и forest exploration — контекст, но «That's when I knew» после <em>negative impact</em> (вопрос 5).</li>" +
      "<li><strong>Ловушка №3:</strong> pollution есть, но <em>water pollution</em> отдельно не назван (вопрос 6).</li>" +
      "<li>Второе прослушивание — для спорных 5–9.</li>" +
      "</ul>",

    questions: [
      {
        examNum: 3,
        prompt: "What is the name of the show?",
        key: 3,
        choices: [
          { num: 1, text: "Life on 99.9" },
          { num: 2, text: "Frequency X" },
          { num: 3, text: "The Big Picture" }
        ],
        explainRu:
          "Ведущий: welcome back to «The Big Picture» — это название программы.",
        distractorWrongRu: {
          1: "99.9 FM — частота, не название шоу.",
          2: "Radio Frequency X — название станции, не программы."
        }
      },
      {
        examNum: 4,
        prompt:
          "What do we learn about Dr. Alice Green at the beginning of the interview?",
        key: 2,
        choices: [
          { num: 1, text: "She is an honoured university professor." },
          { num: 2, text: "She has more than 20 years of experience." },
          { num: 3, text: "She earned a Nobel Prize for the environment." }
        ],
        explainRu:
          "Actively involved in environmental protection for <em>over two decades</em> — более 20 лет опыта.",
        distractorWrongRu: {
          1: "University professor в начале не названа.",
          3: "Nobel Prize не упоминается — только awards за contributions."
        }
      },
      {
        examNum: 5,
        prompt: "What influenced Dr. Green's choice of studying environment?",
        key: 3,
        choices: [
          { num: 1, text: "The beauty of the world." },
          { num: 2, text: "Hours of forest exploration." },
          { num: 3, text: "The way people treat nature." }
        ],
        explainRu:
          "«That's when I knew» — после negative impact humans were having: pollution and deforestation.",
        distractorWrongRu: {
          1: "Beauty — впечатление, но решающий момент — harm from humans.",
          2: "Forest exploration — фон детства, не главная причина выбора."
        }
      },
      {
        examNum: 6,
        prompt: "Which environmental problem is NOT mentioned by Dr. Green?",
        key: 1,
        choices: [
          { num: 1, text: "Water pollution." },
          { num: 2, text: "Climate change." },
          { num: 3, text: "Rising sea levels." }
        ],
        explainRu:
          "Climate change и rising sea levels названы; water pollution как отдельная проблема — нет (только pollution общим словом).",
        distractorWrongRu: {
          2: "Climate change — «undoubtedly the most urgent one».",
          3: "Rising sea levels — в списке последствий."
        }
      },
      {
        examNum: 7,
        prompt:
          "According to Dr. Green, … are responsible for saving the environment.",
        key: 3,
        choices: [
          { num: 1, text: "people themselves" },
          { num: 2, text: "governments" },
          { num: 3, text: "both people and the state" }
        ],
        explainRu:
          "Change starts with each of us + strong policies from governments — и люди, и государство.",
        distractorWrongRu: {
          1: "Individual actions alone won't be enough — только людей мало.",
          2: "Governments нужны, но не без людей — оба."
        }
      },
      {
        examNum: 8,
        prompt: "Where does Dr. Green recommend looking for information?",
        key: 1,
        choices: [
          { num: 1, text: "Websites of universities." },
          { num: 2, text: "Environmental blogs." },
          { num: 3, text: "Social media." }
        ],
        explainRu:
          "Universities with strong science programmes (+ environmental organisations) — не blogs/social media.",
        distractorWrongRu: {
          2: "Wouldn't recommend blogs — прямой отказ.",
          3: "Wouldn't recommend social media — прямой отказ."
        }
      },
      {
        examNum: 9,
        prompt: "What does Dr. Green advise young people to do?",
        key: 2,
        choices: [
          { num: 1, text: "Always work hard." },
          { num: 2, text: "Do what can be done." },
          { num: 3, text: "Be brave in facing hardships." }
        ],
        explainRu:
          "There's so much you can do + even small actions can make a difference — делай то, что можешь.",
        distractorWrongRu: {
          1: "Always work hard — другая формулировка, не из совета.",
          3: "Don't be discouraged — близко, но ключ — действия (activism, clean-up, projects)."
        }
      }
    ],

    dialogueParagraphs: [
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "Good evening, everyone. It's Sunday morning, and we are here to welcome you back to \"The Big Picture\". We are on Radio Frequency X, broadcasting live on 99.9 FM. Today we're talking about something that affects each and every one of us: the environment. And here with me in the studio is Dr. Alice Green, a renowned scientist who has been actively involved in environmental protection for over two decades. Dr. Green, welcome to the show!"
          },
          {
            speaker: "Dr. Alice Green",
            text: "Thank you, Mathew. It's a pleasure to be here!"
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "Dr. Green, throughout your career, you've participated in numerous international conferences on environmental issues. You've read public lectures and even received awards for your outstanding contributions to the field. What initially sparked your passion for the environment?"
          },
          {
            speaker: "Dr. Alice Green",
            text:
              "Well, it all started in my childhood. I grew up surrounded by nature. I used to spend countless hours exploring the forests near my home. Seeing the beauty of the natural world left a strong impression on me. But the important moment was when I noticed the negative impact humans were having on the environment — things like pollution and deforestation. That's when I knew I wanted to dedicate myself to protecting our planet."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "What do you think are the most pressing issues our planet faces today?"
          },
          {
            speaker: "Dr. Alice Green",
            text:
              "That's a complex question. There are certainly many challenges we need to address. But if I had to pinpoint a few, I'd say climate change is undoubtedly the most urgent one. Rising global temperatures are having a catastrophic effect on our planet. They cause extreme weather events, rising sea levels, and disrupt ecosystems. We must act quickly to reduce the effects of climate change."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "Absolutely. And what about the solutions, Dr. Green? What steps can we take as individuals and as a society to address these issues?"
          },
          {
            speaker: "Dr. Alice Green",
            text:
              "I believe that change starts with each of us. Simple things like using reusable shopping bags and being mindful of our energy consumption all contribute to a more environmentally-friendly lifestyle. But, of course, individual actions alone won't be enough. We need strong environmental policies and regulations from governments, as well as continued research and development of sustainable technologies."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "That's great advice, Dr. Green. Where would you recommend our listeners look for reliable information on environmental topics?"
          },
          {
            speaker: "Dr. Alice Green",
            text:
              "Well, there can be a lot of misinformation online, so I wouldn't recommend blogs or social media. Instead, visit the websites of well-established environmental organisations or universities that have strong science programmes. They are great sources of reliable information."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "Thank you for that tip, Dr. Green. What message would you give to young people who are concerned about the state of our planet?"
          },
          {
            speaker: "Dr. Alice Green",
            text:
              "To all the young listeners out there, I want to say that your voice matters. Don't be discouraged by the challenges we face. There's so much you can do! Get involved in environmental activism, participate in clean-up initiatives, or even start your own environmental project in your community. Remember, even small actions can make a difference. And the most important thing is to stay hopeful. There are many people working hard to protect our planet, and together, we can make a positive change."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Presenter",
            text:
              "That's a very inspiring message, Dr. Green. Thank you for joining us today and sharing your valuable insights with our listeners."
          },
          {
            speaker: "Dr. Alice Green",
            text: "Thank you for having me, it was a pleasure being here."
          }
        ]
      }
    ],

    huntLabs: [
      {
        examNum: 3,
        key: 3,
        paragraphIndex: 0,
        keyLineRu: "The Big Picture — название шоу.",
        explainRu: "Welcome back to «The Big Picture».",
        evidencePromptRu: "Найди название программы.",
        segments: [
          { kind: "hit", sol: "e", text: "The Big Picture" },
          {
            kind: "hit",
            sol: "d",
            text: "Radio Frequency X",
            wrongOption: 2,
            distractExplainRu: "Frequency X — станция, не шоу (вар. 2)."
          },
          {
            kind: "hit",
            sol: "d",
            text: "99.9 FM",
            wrongOption: 1,
            distractExplainRu: "99.9 — частота, не Life on 99.9 (вар. 1)."
          }
        ]
      },
      {
        examNum: 4,
        key: 2,
        paragraphIndex: 0,
        keyLineRu: "over two decades of environmental protection.",
        explainRu: "More than 20 years of experience.",
        evidencePromptRu: "Найди, сколько лет Dr. Green в environmental protection.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "actively involved in environmental protection for over two decades"
          },
          {
            kind: "hit",
            sol: "d",
            text: "a renowned scientist",
            wrongOption: 1,
            distractExplainRu: "Renowned scientist ≠ honoured university professor (вар. 1)."
          }
        ]
      },
      {
        examNum: 5,
        key: 3,
        paragraphIndex: 1,
        keyLineRu: "negative impact humans were having — pollution and deforestation.",
        explainRu: "The way people treat nature — решающий момент.",
        evidencePromptRu: "Найди «That's when I knew» и причину.",
        segments: [
          {
            kind: "hit",
            sol: "d",
            text: "Seeing the beauty of the natural world left a strong impression on me",
            wrongOption: 1,
            distractExplainRu: "Beauty of the world — впечатление, не решающий выбор (вар. 1)."
          },
          {
            kind: "hit",
            sol: "d",
            text: "spend countless hours exploring the forests near my home",
            wrongOption: 2,
            distractExplainRu: "Forest exploration — фон, не «when I knew» (вар. 2)."
          },
          {
            kind: "hit",
            sol: "e",
            text: "the negative impact humans were having on the environment"
          },
          {
            kind: "hit",
            sol: "e",
            text: "things like pollution and deforestation"
          },
          {
            kind: "hit",
            sol: "e",
            text: "That's when I knew I wanted to dedicate myself to protecting our planet"
          }
        ]
      },
      {
        examNum: 6,
        key: 1,
        paragraphIndex: 2,
        keyLineRu: "Water pollution не назван; climate change и sea levels — да.",
        explainRu: "Pollution общим словом в детстве; в проблемах сегодня — climate + sea levels.",
        evidencePromptRu: "Сравни, что названо в абзаце про pressing issues.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "climate change is undoubtedly the most urgent one"
          },
          {
            kind: "hit",
            sol: "e",
            text: "rising sea levels"
          }
        ]
      },
      {
        examNum: 7,
        key: 3,
        paragraphIndex: 3,
        keyLineRu: "each of us + policies from governments.",
        explainRu: "Both people and the state.",
        evidencePromptRu: "Найди individual actions и government policies.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "change starts with each of us"
          },
          {
            kind: "hit",
            sol: "d",
            text: "individual actions alone won't be enough",
            wrongOption: 1,
            distractExplainRu: "Only people (вар. 1) — недостаточно по тексту."
          },
          {
            kind: "hit",
            sol: "e",
            text: "strong environmental policies and regulations from governments"
          }
        ]
      },
      {
        examNum: 8,
        key: 1,
        paragraphIndex: 4,
        keyLineRu: "universities with strong science programmes — да; blogs/social media — нет.",
        explainRu: "Websites of universities (и orgs) — reliable source.",
        evidencePromptRu: "Найди, что recommend и что wouldn't recommend.",
        segments: [
          {
            kind: "hit",
            sol: "d",
            text: "I wouldn't recommend blogs or social media",
            wrongOption: 2,
            distractExplainRu: "Blogs/social media — отвергнуты (вар. 2 и 3)."
          },
          {
            kind: "hit",
            sol: "e",
            text: "universities that have strong science programmes"
          }
        ]
      },
      {
        examNum: 9,
        key: 2,
        paragraphIndex: 5,
        keyLineRu: "There's so much you can do · small actions can make a difference.",
        explainRu: "Do what can be done — activism, clean-up, projects.",
        evidencePromptRu: "Найди совет young listeners.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "There's so much you can do"
          },
          {
            kind: "hit",
            sol: "e",
            text: "Get involved in environmental activism"
          },
          {
            kind: "hit",
            sol: "e",
            text: "even small actions can make a difference"
          },
          {
            kind: "hit",
            sol: "d",
            text: "Don't be discouraged by the challenges we face",
            wrongOption: 3,
            distractExplainRu: "Don't be discouraged ≈ brave, но ключ — делать что можешь (вар. 2)."
          }
        ]
      }
    ],

    shadowSpeakers: [
      {
        id: "Presenter",
        label: "Presenter (Mathew)",
        fullText:
          "Good evening, everyone. It's Sunday morning, and we are here to welcome you back to \"The Big Picture\". We are on Radio Frequency X, broadcasting live on 99.9 FM. Today we're talking about something that affects each and every one of us: the environment. And here with me in the studio is Dr. Alice Green, a renowned scientist who has been actively involved in environmental protection for over two decades. Dr. Green, welcome to the show! Dr. Green, throughout your career, you've participated in numerous international conferences on environmental issues. You've read public lectures and even received awards for your outstanding contributions to the field. What initially sparked your passion for the environment? What do you think are the most pressing issues our planet faces today? Absolutely. And what about the solutions, Dr. Green? What steps can we take as individuals and as a society to address these issues? That's great advice, Dr. Green. Where would you recommend our listeners look for reliable information on environmental topics? Thank you for that tip, Dr. Green. What message would you give to young people who are concerned about the state of our planet? That's a very inspiring message, Dr. Green. Thank you for joining us today and sharing your valuable insights with our listeners.",
        phrases: [
          { en: "affects each and every one of us", ru: "касается каждого из нас" },
          {
            en: "environmental protection for over two decades",
            ru: "защита окружающей среды более двух десятилетий",
            tip: "4 · ключ"
          },
          { en: "sparked your passion for the environment", ru: "разожгла страсть к экологии" },
          { en: "most pressing issues our planet faces", ru: "самые насущные проблемы планеты" },
          { en: "as individuals and as a society", ru: "как личности и как общество" },
          { en: "reliable information on environmental topics", ru: "достоверная информация по экологии" },
          { en: "concerned about the state of our planet", ru: "обеспокоены состоянием планеты" },
          { en: "sharing your valuable insights", ru: "делиться ценными мыслями" }
        ],
        chunks: [
          {
            text:
              "Good evening, everyone … Dr. Green, welcome to the show!",
            showText: true
          },
          {
            text:
              "Dr. Green, throughout your career … passion for the environment?",
            showText: true
          },
          {
            text:
              "What do you think are the most pressing issues … faces today?",
            showText: true
          },
          {
            text:
              "Absolutely. And what about the solutions … address these issues?",
            showText: true
          },
          {
            text:
              "That's great advice … environmental topics?",
            showText: true
          },
          {
            text:
              "Thank you for that tip … state of our planet?",
            showText: true
          },
          {
            text:
              "That's a very inspiring message … with our listeners.",
            showText: true
          }
        ]
      },
      {
        id: "Dr. Alice Green",
        label: "Dr. Alice Green",
        fullText:
          "Thank you, Mathew. It's a pleasure to be here! Well, it all started in my childhood. I grew up surrounded by nature. I used to spend countless hours exploring the forests near my home. Seeing the beauty of the natural world left a strong impression on me. But the important moment was when I noticed the negative impact humans were having on the environment — things like pollution and deforestation. That's when I knew I wanted to dedicate myself to protecting our planet. That's a complex question. There are certainly many challenges we need to address. But if I had to pinpoint a few, I'd say climate change is undoubtedly the most urgent one. Rising global temperatures are having a catastrophic effect on our planet. They cause extreme weather events, rising sea levels, and disrupt ecosystems. We must act quickly to reduce the effects of climate change. I believe that change starts with each of us. Simple things like using reusable shopping bags and being mindful of our energy consumption all contribute to a more environmentally-friendly lifestyle. But, of course, individual actions alone won't be enough. We need strong environmental policies and regulations from governments, as well as continued research and development of sustainable technologies. Well, there can be a lot of misinformation online, so I wouldn't recommend blogs or social media. Instead, visit the websites of well-established environmental organisations or universities that have strong science programmes. They are great sources of reliable information. To all the young listeners out there, I want to say that your voice matters. Don't be discouraged by the challenges we face. There's so much you can do! Get involved in environmental activism, participate in clean-up initiatives, or even start your own environmental project in your community. Remember, even small actions can make a difference. And the most important thing is to stay hopeful. There are many people working hard to protect our planet, and together, we can make a positive change. Thank you for having me, it was a pleasure being here.",
        phrases: [
          { en: "It's a pleasure to be here", ru: "рада быть здесь" },
          { en: "it all started in my childhood", ru: "всё началось в детстве" },
          { en: "grew up surrounded by nature", ru: "выросла в окружении природы" },
          {
            en: "exploring the forests near my home",
            ru: "исследовала леса рядом с домом",
            tip: "5 · ловушка 2"
          },
          {
            en: "beauty of the natural world",
            ru: "красота природного мира",
            tip: "5 · ловушка 1"
          },
          {
            en: "the negative impact humans were having on the environment",
            ru: "негативное влияние людей на среду",
            tip: "5 · ключ"
          },
          { en: "pollution and deforestation", ru: "загрязнение и вырубка лесов", tip: "5 · ключ" },
          { en: "dedicate myself to protecting our planet", ru: "посвятить себя защите планеты" },
          { en: "climate change is undoubtedly the most urgent one", ru: "изменение климата — самое срочное", tip: "6 · named" },
          { en: "Rising global temperatures", ru: "рост глобальной температуры" },
          { en: "extreme weather events", ru: "экстремальные погодные явления" },
          { en: "rising sea levels", ru: "повышение уровня моря", tip: "6 · named" },
          { en: "disrupt ecosystems", ru: "нарушать экосистемы" },
          { en: "change starts with each of us", ru: "перемены начинаются с каждого", tip: "7 · people" },
          { en: "reusable shopping bags", ru: "многоразовые сумки для покупок" },
          { en: "mindful of our energy consumption", ru: "следить за расходом энергии" },
          { en: "individual actions alone won't be enough", ru: "одних личных действий мало", tip: "7 · not only people" },
          {
            en: "environmental policies and regulations from governments",
            ru: "экологическая политика и регулирование от правительств",
            tip: "7 · state"
          },
          { en: "sustainable technologies", ru: "устойчивые технологии" },
          { en: "misinformation online", ru: "дезинформация в интернете" },
          { en: "wouldn't recommend blogs or social media", ru: "не советую блоги и соцсети", tip: "8 · ловушка 2/3" },
          {
            en: "universities that have strong science programmes",
            ru: "университеты с сильными научными программами",
            tip: "8 · ключ"
          },
          { en: "your voice matters", ru: "ваш голос важен" },
          { en: "Don't be discouraged by the challenges", ru: "не унывайте из‑за трудностей", tip: "9 · ловушка 3" },
          { en: "There's so much you can do", ru: "вы можете сделать так много", tip: "9 · ключ" },
          { en: "environmental activism", ru: "экологический активизм" },
          { en: "clean-up initiatives", ru: "инициативы по уборке" },
          { en: "start your own environmental project", ru: "запустить свой экопроект" },
          { en: "even small actions can make a difference", ru: "даже маленькие действия имеют значение", tip: "9 · ключ" },
          { en: "stay hopeful", ru: "сохранять надежду" },
          { en: "make a positive change", ru: "произвести позитивные изменения" }
        ],
        chunks: [
          {
            text:
              "Thank you, Mathew … protecting our planet.",
            showText: true
          },
          {
            text:
              "That's a complex question … effects of climate change.",
            showText: true
          },
          {
            text:
              "I believe that change starts … sustainable technologies.",
            showText: true
          },
          {
            text:
              "Well, there can be a lot of misinformation … reliable information.",
            showText: true
          },
          {
            text:
              "To all the young listeners … make a positive change.",
            showText: true
          },
          { text: "Thank you for having me, it was a pleasure being here.", showText: true }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
