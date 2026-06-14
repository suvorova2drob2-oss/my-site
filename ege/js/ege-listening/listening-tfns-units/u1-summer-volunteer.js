/**
 * ЕГЭ Listening TFNS · Unit 1 · Summer volunteer (Kate & Alex).
 */
(function (w) {
  var pack = w.__EGE_LISTENING_TFNS__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u1-summer-volunteer",
    unitOrder: 1,
    title: "Unit 1 · Summer volunteer",
    examSection: "§2 · True / False / Not Stated",
    headerTitle: "Kate & Alex · summer plans",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%201%20(mp3cut.net)%20(1).mp3",
    instructionHtml:
      "Вы услышите <strong>разговор двух друзей</strong>. Определите, какие из утверждений <strong>A–G</strong> соответствуют содержанию текста (<strong>True +</strong>), какие <strong>не соответствуют</strong> (<strong>False −</strong>), и о каких <strong>нет информации</strong> (<strong>Not stated ?</strong>). Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>Главный навык:</strong> три решения — не угадывай «по смыслу».</p>" +
      "<ul>" +
      "<li><strong>True (+)</strong> — в диалоге <em>прямо сказано</em> или однозначно следует (*not just scooping ice cream again* → работала в мороженом).</li>" +
      "<li><strong>False (−)</strong> — в тексте <em>наоборот</em> (*was so boring* ≠ enjoyed the job).</li>" +
      "<li><strong>Not stated (?)</strong> — тема <em>не звучит</em> (Alex переживал про деньги и язык — <em>не про дружбу</em>).</li>" +
      "<li>Ловушка: перепутать <strong>False</strong> и <strong>Not stated</strong>.</li>" +
      "</ul>",
    statements: [
      { letter: "A", text: "Kate worked at an ice cream shop last summer." },
      { letter: "B", text: "Alex enjoyed his summer job last year." },
      { letter: "C", text: "Kate is amazed at Alex's search skills." },
      { letter: "D", text: "Alex prefers to work with children." },
      {
        letter: "E",
        text: "The environmental programme doesn't require fluent Russian."
      },
      { letter: "F", text: "Alex is worried about making friends in Russia." },
      {
        letter: "G",
        text: "Kate is looking forward to volunteering with Alex."
      }
    ],
    key: {
      A: "t",
      B: "f",
      C: "ns",
      D: "f",
      E: "t",
      F: "ns",
      G: "t"
    },
    dialogueParagraphs: [
      {
        turns: [
          {
            speaker: "Kate",
            text: "Hey Alex, haven't seen you for ages! How was your spring break?"
          },
          {
            speaker: "Alex",
            text:
              "Hey Kate! It was alright, just chilled at home mostly. What about you? Did you decide on anything for summer yet?"
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Kate",
            text:
              "Not yet, but this year I really want to do something different, you know, not just scooping ice cream again."
          },
          {
            speaker: "Alex",
            text:
              "Ugh, tell me about it! Flipping burgers all summer was so boring last year. Maybe we could look for something together?"
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Kate",
            text:
              "Great idea! There's this website my cousin told me about. It lists all kinds of summer opportunities for young people. Let's check it out now."
          },
          {
            speaker: "Alex",
            text: "Wow! You've got a new phone. It's nice and shiny, but a bit tiny."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Kate",
            text: "I just need to find my phone. Wait a sec. I do! Do you like it?"
          },
          {
            speaker: "Alex",
            text: "Let's use mine, it has a bigger screen."
          }
        ]
      },
      {
        turns: [
          { speaker: "Kate", text: "Ok. Type this URL." },
          {
            speaker: "Alex",
            text:
              "Done! Kate, you were right! There's a bunch of stuff here! There are internships, summer camps, even some volunteer programmes."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Kate",
            text:
              "Look, there's this program at the community center where they help out with kids' activities over the summer. It looks fun. We could hang out with the little ones, play games, stuff like that."
          },
          {
            speaker: "Alex",
            text: "No, I'm not into kids. My younger brother drives me nuts."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Kate",
            text:
              "What about the environment? There's a volunteer programme in a small village in Russia. They need help with environmental projects — things like cleaning up rivers and planting trees. It sounds cool, right?"
          },
          {
            speaker: "Alex",
            text:
              "Russia? That's pretty far! And wouldn't we need to speak, like, perfect Russian?"
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Kate",
            text:
              "Not necessarily. They say basic English is okay, and they even provide language classes during the programme. Imagine spending the summer in a new country, helping the environment, and learning a new language — it would be an amazing experience!"
          },
          {
            speaker: "Alex",
            text:
              "Hmmm, it does sound interesting, but wouldn't it be expensive? Flights, accommodation..."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Kate",
            text:
              "Actually, it says most of the costs are covered by the programme. We just need to pay a small registration fee."
          },
          { speaker: "Alex", text: "Wow, that changes things!" }
        ]
      },
      {
        turns: [
          {
            speaker: "Kate",
            text:
              "I know what you mean, but there are reviews on the website from other volunteers, and, as I see, they all had a fantastic time. They say the people are super friendly and welcoming."
          },
          {
            speaker: "Alex",
            text:
              "Okay, I admit it sounds tempting, but are you sure? I mean, Russia can seem a bit mysterious sometimes."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Kate",
            text: "Maybe not! Especially if we volunteer together."
          },
          {
            speaker: "Alex",
            text:
              "Let's check out the programme details. Maybe this summer won't be so boring after all!"
          }
        ]
      }
    ],
    huntLabs: [
      {
        letter: "A",
        key: "t",
        paragraphIndex: 1,
        keyLineRu: "True — Kate говорит: not just scooping ice cream again.",
        explainRu:
          "Снова «scooping ice cream» → прошлым летом она уже работала в мороженом.",
        evidencePromptRu: "Найди фразу, откуда следует, что Kate уже работала с мороженым.",
        segments: [
          { kind: "hit", sol: "e", text: "not just scooping ice cream again" }
        ]
      },
      {
        letter: "B",
        key: "f",
        paragraphIndex: 1,
        keyLineRu: "False — Alex: flipping burgers … was so boring.",
        explainRu: "Enjoyed ≠ boring last year.",
        evidencePromptRu: "Найди фразу, где Alex говорит, что прошлая работа была скучной.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "Flipping burgers all summer was so boring last year"
          }
        ]
      },
      {
        letter: "C",
        key: "ns",
        paragraphIndex: 4,
        keyLineRu: "Not stated — про «удивление навыкам поиска Alex» не сказано.",
        nsExplainRu:
          "Kate находит сайт, Alex вводит URL и находит программы — но нигде нет, что Kate восхищена его search skills.",
        evidencePromptRu: "Прочитай абзац — отмечать в тексте нечего.",
        segments: []
      },
      {
        letter: "D",
        key: "f",
        paragraphIndex: 5,
        keyLineRu: "False — Alex: No, I'm not into kids.",
        explainRu: "Prefers to work with children — прямо опровергнуто.",
        evidencePromptRu: "Найди отказ Alex от работы с детьми.",
        segments: [{ kind: "hit", sol: "e", text: "No, I'm not into kids" }]
      },
      {
        letter: "E",
        key: "t",
        paragraphIndex: 7,
        keyLineRu: "True — perfect Russian не нужен; basic English is okay.",
        explainRu:
          "Fluent Russian не требуется — достаточно базового English + языковые классы.",
        evidencePromptRu: "Найди фразу про языковые требования программы.",
        segments: [
          { kind: "hit", sol: "e", text: "Not necessarily. They say basic English is okay" }
        ]
      },
      {
        letter: "F",
        key: "ns",
        paragraphIndex: 9,
        keyLineRu: "Not stated — Alex не говорит, что боится не найти друзей.",
        nsExplainRu:
          "Alex переживает: далеко, язык, дорого, «mysterious». Kate про friendly people — из отзывов. Про making friends Alex не говорит.",
        evidencePromptRu: "Not stated — в этом абзаце нет темы «дружба».",
        segments: []
      },
      {
        letter: "G",
        key: "t",
        paragraphIndex: 10,
        keyLineRu: "True — Kate: Especially if we volunteer together.",
        explainRu: "Looking forward to volunteering with Alex — прямо в финале.",
        evidencePromptRu: "Найди финальную фразу Kate про совместное волонтёрство.",
        segments: [
          { kind: "hit", sol: "e", text: "Especially if we volunteer together" }
        ]
      }
    ],
    shadowSpeakers: [
      {
        id: "Kate",
        label: "Kate",
        fullText:
          "Hey Alex, haven't seen you for ages! How was your spring break? Not yet, but this year I really want to do something different, you know, not just scooping ice cream again. Great idea! There's this website my cousin told me about. It lists all kinds of summer opportunities for young people. Let's check it out now. I just need to find my phone. Wait a sec. I do! Do you like it? Ok. Type this URL. Look, there's this program at the community center where they help out with kids' activities over the summer. It looks fun. We could hang out with the little ones, play games, stuff like that. What about the environment? There's a volunteer programme in a small village in Russia. They need help with environmental projects — things like cleaning up rivers and planting trees. It sounds cool, right? Not necessarily. They say basic English is okay, and they even provide language classes during the programme. Imagine spending the summer in a new country, helping the environment, and learning a new language — it would be an amazing experience! Actually, it says most of the costs are covered by the programme. We just need to pay a small registration fee. I know what you mean, but there are reviews on the website from other volunteers, and, as I see, they all had a fantastic time. They say the people are super friendly and welcoming. Maybe not! Especially if we volunteer together.",
        phrases: [
          { en: "haven't seen you for ages", ru: "давно не виделись" },
          { en: "How was your spring break?", ru: "как прошли весенние каникулы?" },
          { en: "do something different", ru: "сделать что-то другое" },
          {
            en: "not just scooping ice cream again",
            ru: "не просто снова раздавать мороженое",
            tip: "A · True"
          },
          { en: "scooping ice cream", ru: "раздавать мороженое (на работе)" },
          { en: "Great idea!", ru: "Отличная идея!" },
          { en: "website my cousin told me about", ru: "сайт, о котором рассказал двоюродный брат" },
          { en: "summer opportunities for young people", ru: "летние возможности для молодёжи" },
          { en: "Let's check it out", ru: "давай посмотрим / проверим" },
          { en: "find my phone", ru: "найти телефон" },
          { en: "Type this URL", ru: "введи этот URL / адрес сайта" },
          { en: "program at the community center", ru: "программа в общественном центре" },
          { en: "help out with kids' activities", ru: "помогать с детскими занятиями" },
          { en: "hang out with the little ones", ru: "проводить время с малышами" },
          { en: "play games, stuff like that", ru: "играть в игры и тому подобное" },
          { en: "volunteer programme in a small village", ru: "волонтёрская программа в маленькой деревне" },
          { en: "environmental projects", ru: "экологические проекты" },
          { en: "cleaning up rivers", ru: "очистка рек" },
          { en: "planting trees", ru: "посадка деревьев" },
          { en: "It sounds cool, right?", ru: "звучит круто, правда?" },
          { en: "Not necessarily", ru: "не обязательно / необязательно" },
          {
            en: "basic English is okay",
            ru: "достаточно базового английского",
            tip: "E · True"
          },
          { en: "provide language classes", ru: "предоставляют языковые занятия" },
          { en: "during the programme", ru: "в ходе программы" },
          { en: "spending the summer in a new country", ru: "провести лето в новой стране" },
          { en: "learning a new language", ru: "изучение нового языка" },
          { en: "an amazing experience", ru: "потрясающий / невероятный опыт" },
          { en: "costs are covered by the programme", ru: "расходы покрываются программой" },
          { en: "pay a small registration fee", ru: "заплатить небольшой регистрационный взнос" },
          { en: "reviews on the website", ru: "отзывы на сайте" },
          { en: "from other volunteers", ru: "от других волонтёров" },
          { en: "had a fantastic time", ru: "отлично провели время" },
          { en: "super friendly and welcoming", ru: "очень дружелюбные и гостеприимные" },
          {
            en: "Especially if we volunteer together",
            ru: "особенно если будем волонтёрить вместе",
            tip: "G · True"
          },
          { en: "volunteer together", ru: "волонтёрить вместе" }
        ],
        chunks: [
          {
            text:
              "Hey Alex, haven't seen you for ages! … not just scooping ice cream again.",
            showText: true
          },
          {
            text:
              "Great idea! There's this website … Let's check it out now.",
            showText: true
          },
          {
            text:
              "Look, there's this program at the community center … play games, stuff like that.",
            showText: true
          },
          {
            text:
              "What about the environment? … cleaning up rivers and planting trees.",
            showText: true
          },
          {
            text:
              "Not necessarily. They say basic English is okay … amazing experience!",
            showText: true
          },
          {
            text:
              "Actually, it says most of the costs are covered … super friendly and welcoming.",
            showText: true
          },
          { text: "Maybe not! Especially if we volunteer together.", showText: true }
        ]
      },
      {
        id: "Alex",
        label: "Alex",
        fullText:
          "Hey Kate! It was alright, just chilled at home mostly. What about you? Did you decide on anything for summer yet? Ugh, tell me about it! Flipping burgers all summer was so boring last year. Maybe we could look for something together? Wow! You've got a new phone. It's nice and shiny, but a bit tiny. Let's use mine, it has a bigger screen. Done! Kate, you were right! There's a bunch of stuff here! There are internships, summer camps, even some volunteer programmes. No, I'm not into kids. My younger brother drives me nuts. Russia? That's pretty far! And wouldn't we need to speak, like, perfect Russian? Hmmm, it does sound interesting, but wouldn't it be expensive? Flights, accommodation... Wow, that changes things! Okay, I admit it sounds tempting, but are you sure? I mean, Russia can seem a bit mysterious sometimes. Let's check out the programme details. Maybe this summer won't be so boring after all!",
        phrases: [
          { en: "just chilled at home mostly", ru: "в основном просто отдыхал дома" },
          { en: "decide on anything for summer", ru: "решить что-то насчёт лета" },
          { en: "tell me about it", ru: "расскажи / и у меня так же (сочувствие)" },
          { en: "Flipping burgers all summer", ru: "всё лето жарил бургеры на работе", tip: "B · False" },
          {
            en: "was so boring last year",
            ru: "было так скучно в прошлом году",
            tip: "B · enjoyed ≠ boring"
          },
          { en: "look for something together", ru: "искать что-то вместе" },
          { en: "You've got a new phone", ru: "у тебя новый телефон" },
          { en: "nice and shiny", ru: "красивый и блестящий" },
          { en: "a bit tiny", ru: "немного маленький (экран)" },
          { en: "use mine, it has a bigger screen", ru: "давай мой — экран побольше" },
          { en: "Kate, you were right", ru: "Кейт, ты была права" },
          { en: "a bunch of stuff here", ru: "куча всего / много вариантов" },
          { en: "internships, summer camps", ru: "стажировки, летние лагеря" },
          { en: "even some volunteer programmes", ru: "даже волонтёрские программы" },
          { en: "No, I'm not into kids", ru: "нет, я не люблю работать с детьми", tip: "D · False" },
          { en: "not into kids", ru: "не люблю детей (в работе)" },
          { en: "My younger brother drives me nuts", ru: "младший брат сводит меня с ума" },
          { en: "That's pretty far", ru: "это довольно далеко" },
          {
            en: "speak, like, perfect Russian",
            ru: "говорить, типа, идеальный русский",
            tip: "E · ловушка vs basic English"
          },
          { en: "it does sound interesting", ru: "звучит интересно, правда" },
          {
            en: "wouldn't it be expensive",
            ru: "разве это не будет дорого",
            tip: "F · про деньги, не про дружбу"
          },
          { en: "Flights, accommodation", ru: "перелёты, проживание" },
          { en: "Wow, that changes things", ru: "ого, это меняет дело" },
          { en: "sounds tempting", ru: "звучит заманчиво" },
          { en: "are you sure", ru: "ты уверена?" },
          {
            en: "Russia can seem a bit mysterious sometimes",
            ru: "Россия иногда кажется немного загадочной",
            tip: "F · NS про friends"
          },
          { en: "check out the programme details", ru: "посмотреть детали программы" },
          {
            en: "won't be so boring after all",
            ru: "всё-таки не будет так скучно"
          }
        ],
        chunks: [
          {
            text:
              "Hey Kate! It was alright … Did you decide on anything for summer yet?",
            showText: true
          },
          {
            text:
              "Ugh, tell me about it! Flipping burgers all summer was so boring last year.",
            showText: true
          },
          {
            text:
              "Wow! You've got a new phone … Done! Kate, you were right!",
            showText: true
          },
          { text: "No, I'm not into kids. My younger brother drives me nuts.", showText: true },
          {
            text:
              "Russia? That's pretty far! … perfect Russian?",
            showText: true
          },
          {
            text:
              "Hmmm, it does sound interesting, but wouldn't it be expensive?",
            showText: true
          },
          {
            text:
              "Wow, that changes things! … Russia can seem a bit mysterious sometimes.",
            showText: true
          },
          {
            text:
              "Let's check out the programme details. Maybe this summer won't be so boring after all!",
            showText: true
          }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
