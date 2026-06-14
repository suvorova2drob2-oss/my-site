/**
 * ЕГЭ Listening TFNS · Unit 7 · Volunteer meeting (Mary & Jack).
 */
(function (w) {
  var pack = w.__EGE_LISTENING_TFNS__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u7-volunteer-meeting",
    unitOrder: 7,
    title: "Unit 7 · Volunteer meeting",
    examSection: "§2 · True / False / Not Stated",
    headerTitle: "Mary & Jack · school volunteering",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/7/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%207%20(mp3cut.net)%20(1).mp3",
    instructionHtml:
      "Вы услышите <strong>разговор двух подростков</strong>. Определите, какие из утверждений <strong>A-G</strong> соответствуют содержанию текста (<strong>True +</strong>), какие <strong>не соответствуют</strong> (<strong>False -</strong>), и о каких <strong>нет информации</strong> (<strong>Not stated ?</strong>). Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>Главный навык:</strong> отличать, что прямо сказано, что опровергнуто, а чего вообще нет.</p>" +
      "<ul>" +
      "<li><strong>A</strong> - Mary <em>ran into</em> Jack at the meeting, то есть они не пришли вместе.</li>" +
      "<li><strong>B</strong> - про маму Mary сказано прямо: volunteering helped her overcome shyness.</li>" +
      "<li><strong>C</strong> - про dad Jack ничего нет: не путай с <em>my mom</em> у Mary и с самим Jack.</li>" +
      "<li><strong>F</strong> - hospitals / health centres / libraries описывают проекты, а не прошлогоднюю работу Jack.</li>" +
      "<li><strong>G</strong> - Mary учит French, а Spanish только собирается начать, так что fluently - неверно.</li>" +
      "</ul>",
    statements: [
      { letter: "A", text: "Mary and Jack came together to the meeting." },
      { letter: "B", text: "Volunteering helped Mary's mom to become more confident." },
      { letter: "C", text: "Jack's dad used to be a volunteer while at school." },
      { letter: "D", text: "Volunteering helped Jack to make new friends." },
      { letter: "E", text: "Mary read the leaflet from cover to cover." },
      { letter: "F", text: "Last year Jack volunteered at the local hospital." },
      { letter: "G", text: "Mary speaks French fluently." }
    ],
    key: {
      A: "f",
      B: "t",
      C: "ns",
      D: "t",
      E: "f",
      F: "ns",
      G: "f"
    },
    dialogueParagraphs: [
      {
        turns: [
          {
            speaker: "Mary",
            text: "Hi, Jack! I didn't expect to see you here today."
          },
          {
            speaker: "Jack",
            text: "Hello, Mary! A pleasant surprise, isn't it? How are you doing?"
          },
          {
            speaker: "Mary",
            text:
              "All in all - fine, I guess. I'm glad I ran into you. This is my first time attending such an event. Would you keep me company?"
          },
          {
            speaker: "Jack",
            text: "Absolutely! Let's take a seat. So, why volunteering?"
          },
          {
            speaker: "Mary",
            text:
              "Well, my mom volunteered when she was at school. She had to communicate with so many people that it helped her to overcome her shyness. It seems that I have a similar issue. Mom calls it 'an awkward self-consciousness of adolescence.' So, here I am - following in my mom's footsteps. What about you?"
          },
          {
            speaker: "Jack",
            text:
              "Oh, I enjoy interacting with others, and a bunch of regular meetings is part and parcel of volunteering. It allowed me to make many friends from other schools last year."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Mary",
            text:
              "It seems like volunteering brings people together. Do you know the projects our school participates in?"
          },
          {
            speaker: "Jack",
            text: "Didn't you read the brochure before coming here? It's all there."
          },
          {
            speaker: "Mary",
            text: "Nope, I didn't have the time."
          },
          {
            speaker: "Jack",
            text:
              "Well, there are roles within the local community where you work mainly with people from our area, and support them with some tasks in their daily lives. These are based mostly in hospitals, health centres, and libraries."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Mary",
            text: "I don't think those ones are for me. I'm not into health or working with the elderly."
          },
          {
            speaker: "Jack",
            text:
              "Then probably you can make a difference at our school - helping primary school students with their reading."
          },
          {
            speaker: "Mary",
            text: "What does it include?"
          },
          {
            speaker: "Jack",
            text:
              "You can become their reading partner and help them turn into proficient readers. Or, if you are of the artistic mind - which you are, as I know - you can tutor them in drama or give free art lessons."
          },
          {
            speaker: "Mary",
            text: "Should I have good grades?"
          },
          {
            speaker: "Jack",
            text:
              "I'm not sure, but I would say that's taken for granted. You may ask Ms Rodriguez. I'm sure she knows the answer."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Mary",
            text: "I see... Is there anything that can take me outside our town?"
          },
          {
            speaker: "Jack",
            text:
              "I'm not sure about this year, but two years ago they offered a few places at a rainforest conservation program in Costa Rica."
          },
          {
            speaker: "Mary",
            text:
              "Wow, that sounds like just what I need - living in the heart of the jungle, meeting jaguars, riding sea turtles..."
          },
          {
            speaker: "Jack",
            text:
              "Hey, daydreamer, you should stop right here unless your second language is Spanish. It was a must, if I'm not mistaken."
          },
          {
            speaker: "Mary",
            text:
              "I've been studying French for some time, but I can take up Spanish classes as well. Oh, look, the meeting is about to start."
          },
          {
            speaker: "Jack",
            text: "Yeah, let's listen."
          }
        ]
      }
    ],
    huntLabs: [
      {
        letter: "A",
        key: "f",
        paragraphIndex: 0,
        keyLineRu: "False - Mary ran into Jack at the meeting; they did not come together.",
        explainRu:
          "Mary прямо говорит: <em>I'm glad I ran into you</em> и <em>This is my first time attending such an event</em>. Значит, она встретила Jack уже на месте.",
        evidencePromptRu: "Найди, как Mary описывает встречу с Jack.",
        segments: [
          { kind: "hit", sol: "e", text: "I'm glad I ran into you" },
          {
            kind: "hit",
            sol: "d",
            text: "Would you keep me company",
            distractExplainRu:
              "Mary просит Jack побыть с ней на встрече, потому что встретила его уже там, а не пришла вместе."
          }
        ]
      },
      {
        letter: "B",
        key: "t",
        paragraphIndex: 0,
        keyLineRu: "True - Mary's mom overcame her shyness through volunteering.",
        explainRu:
          "Про маму Mary сказано прямо: volunteering helped her <em>overcome her shyness</em>.",
        evidencePromptRu: "Найди, чем volunteering помогло маме Mary.",
        segments: [
          { kind: "hit", sol: "e", text: "my mom volunteered when she was at school" },
          {
            kind: "hit",
            sol: "e",
            text: "it helped her to overcome her shyness"
          }
        ]
      },
      {
        letter: "C",
        key: "ns",
        paragraphIndex: 0,
        keyLineRu: "Not stated - there is no information about Jack's dad being a volunteer.",
        nsExplainRu:
          "В диалоге есть информация о маме Mary и о самом Jack, но про отца Jack не говорится вообще.",
        evidencePromptRu: "Прочитай начало: про dad Jack ничего нет.",
        segments: []
      },
      {
        letter: "D",
        key: "t",
        paragraphIndex: 0,
        keyLineRu: "True - volunteering helped Jack make friends from other schools.",
        explainRu:
          "Jack говорит: <em>It allowed me to make many friends from other schools last year</em>.",
        evidencePromptRu: "Найди, что volunteering дало Jack.",
        segments: [
          { kind: "hit", sol: "e", text: "I enjoy interacting with others" },
          {
            kind: "hit",
            sol: "e",
            text: "It allowed me to make many friends from other schools last year"
          }
        ]
      },
      {
        letter: "E",
        key: "f",
        paragraphIndex: 1,
        keyLineRu: "False - Mary says she did not have time to read the brochure.",
        explainRu:
          "Jack asks about the brochure, and Mary answers: <em>Nope, I didn't have the time</em>.",
        evidencePromptRu: "Найди ответ Mary про leaflet / brochure.",
        segments: [
          {
            kind: "hit",
            sol: "d",
            text: "Didn't you read the brochure before coming here",
            distractExplainRu:
              "Это вопрос Jack, а не факт о Mary. Дальше Mary отрицает, что прочитала brochure."
          },
          { kind: "hit", sol: "e", text: "Nope, I didn't have the time" }
        ]
      },
      {
        letter: "F",
        key: "ns",
        paragraphIndex: 1,
        keyLineRu: "Not stated - hospitals are mentioned as project locations, not as Jack's last year's placement.",
        nsExplainRu:
          "Jack перечисляет, где бывают volunteer roles: <em>hospitals, health centres, and libraries</em>. Но он не говорит, что сам работал именно в hospital last year.",
        evidencePromptRu: "Прочитай блок про local community roles: это описание проектов, не биография Jack.",
        segments: []
      },
      {
        letter: "G",
        key: "f",
        paragraphIndex: 3,
        keyLineRu: "False - Mary studies French; Spanish is only a possible next step.",
        explainRu:
          "Mary says she has been studying French for some time, and can <em>take up Spanish classes</em> as well. Это не fluent French.",
        evidencePromptRu: "Найди, что Mary говорит про French and Spanish.",
        segments: [
          {
            kind: "hit",
            sol: "d",
            text: "unless your second language is Spanish",
            distractExplainRu:
              "Spanish нужен для Costa Rica program, но Mary не говорит, что уже знает Spanish."
          },
          {
            kind: "hit",
            sol: "e",
            text: "I've been studying French for some time, but I can take up Spanish classes as well"
          }
        ]
      }
    ],
    shadowSpeakers: [
      {
        id: "Mary",
        label: "Mary",
        fullText:
          "Hi, Jack! I didn't expect to see you here today. All in all - fine, I guess. I'm glad I ran into you. This is my first time attending such an event. Would you keep me company? Well, my mom volunteered when she was at school. She had to communicate with so many people that it helped her to overcome her shyness. It seems that I have a similar issue. Mom calls it 'an awkward self-consciousness of adolescence.' So, here I am - following in my mom's footsteps. What about you? It seems like volunteering brings people together. Do you know the projects our school participates in? Nope, I didn't have the time. I don't think those ones are for me. I'm not into health or working with the elderly. What does it include? Should I have good grades? I see... Is there anything that can take me outside our town? Wow, that sounds like just what I need - living in the heart of the jungle, meeting jaguars, riding sea turtles... I've been studying French for some time, but I can take up Spanish classes as well. Oh, look, the meeting is about to start.",
        phrases: [
          { en: "I didn't expect to see you here today", ru: "не ожидала увидеть тебя здесь сегодня" },
          { en: "All in all - fine, I guess", ru: "в целом всё нормально, наверное" },
          { en: "I'm glad I ran into you", ru: "я рада, что случайно встретила тебя", tip: "A · False" },
          { en: "first time attending such an event", ru: "впервые на таком мероприятии" },
          { en: "Would you keep me company", ru: "составишь мне компанию?" },
          { en: "my mom volunteered when she was at school", ru: "моя мама была волонтёром в школе", tip: "B · True" },
          { en: "helped her to overcome her shyness", ru: "помогло ей преодолеть застенчивость", tip: "B · True" },
          { en: "I have a similar issue", ru: "у меня похожая проблема" },
          { en: "an awkward self-consciousness of adolescence", ru: "неловкая подростковая зажатость" },
          { en: "following in my mom's footsteps", ru: "иду по маминым стопам" },
          { en: "brings people together", ru: "сближает людей" },
          { en: "projects our school participates in", ru: "проекты, в которых участвует наша школа" },
          { en: "I didn't have the time", ru: "у меня не было времени", tip: "E · False" },
          { en: "those ones are for me", ru: "это мне подходит" },
          { en: "working with the elderly", ru: "работать с пожилыми" },
          { en: "What does it include", ru: "что это включает?" },
          { en: "Should I have good grades", ru: "у меня должны быть хорошие оценки?" },
          { en: "take me outside our town", ru: "вывезет меня за пределы нашего города" },
          { en: "living in the heart of the jungle", ru: "жить в самом сердце джунглей" },
          { en: "meeting jaguars", ru: "встречать ягуаров" },
          { en: "riding sea turtles", ru: "кататься на морских черепахах" },
          { en: "I've been studying French for some time", ru: "я уже какое-то время учу французский", tip: "G · False" },
          { en: "take up Spanish classes as well", ru: "могу ещё начать заниматься испанским", tip: "G · False" },
          { en: "the meeting is about to start", ru: "встреча вот-вот начнётся" }
        ],
        chunks: [
          {
            text:
              "Hi, Jack! I didn't expect to see you here today. All in all - fine, I guess. I'm glad I ran into you. This is my first time attending such an event. Would you keep me company?",
            showText: true
          },
          {
            text:
              "Well, my mom volunteered when she was at school. She had to communicate with so many people that it helped her to overcome her shyness. It seems that I have a similar issue. Mom calls it 'an awkward self-consciousness of adolescence.' So, here I am - following in my mom's footsteps. What about you?",
            showText: true
          },
          {
            text:
              "It seems like volunteering brings people together. Do you know the projects our school participates in? Nope, I didn't have the time.",
            showText: true
          },
          {
            text:
              "I don't think those ones are for me. I'm not into health or working with the elderly. What does it include? Should I have good grades?",
            showText: true
          },
          {
            text:
              "I see... Is there anything that can take me outside our town? Wow, that sounds like just what I need - living in the heart of the jungle, meeting jaguars, riding sea turtles... I've been studying French for some time, but I can take up Spanish classes as well. Oh, look, the meeting is about to start.",
            showText: false
          }
        ]
      },
      {
        id: "Jack",
        label: "Jack",
        fullText:
          "Hello, Mary! A pleasant surprise, isn't it? How are you doing? Absolutely! Let's take a seat. So, why volunteering? Oh, I enjoy interacting with others, and a bunch of regular meetings is part and parcel of volunteering. It allowed me to make many friends from other schools last year. Didn't you read the brochure before coming here? It's all there. Well, there are roles within the local community where you work mainly with people from our area, and support them with some tasks in their daily lives. These are based mostly in hospitals, health centres, and libraries. Then probably you can make a difference at our school - helping primary school students with their reading. You can become their reading partner and help them turn into proficient readers. Or, if you are of the artistic mind - which you are, as I know - you can tutor them in drama or give free art lessons. I'm not sure, but I would say that's taken for granted. You may ask Ms Rodriguez. I'm sure she knows the answer. I'm not sure about this year, but two years ago they offered a few places at a rainforest conservation program in Costa Rica. Hey, daydreamer, you should stop right here unless your second language is Spanish. It was a must, if I'm not mistaken. Yeah, let's listen.",
        phrases: [
          { en: "A pleasant surprise", ru: "приятный сюрприз" },
          { en: "How are you doing", ru: "как ты поживаешь?" },
          { en: "Let's take a seat", ru: "давай присядем" },
          { en: "why volunteering", ru: "почему именно волонтёрство?" },
          { en: "I enjoy interacting with others", ru: "мне нравится общаться с другими", tip: "D · True" },
          { en: "a bunch of regular meetings", ru: "куча регулярных встреч" },
          { en: "part and parcel of volunteering", ru: "неотъемлемая часть волонтёрства" },
          { en: "allowed me to make many friends", ru: "помогло мне завести много друзей", tip: "D · True" },
          { en: "from other schools last year", ru: "из других школ в прошлом году", tip: "D · True" },
          { en: "read the brochure", ru: "прочитать брошюру" },
          { en: "It's all there", ru: "там всё есть" },
          { en: "roles within the local community", ru: "роли внутри местного сообщества" },
          { en: "work mainly with people from our area", ru: "работаешь в основном с людьми из нашего района" },
          { en: "support them with some tasks", ru: "помогаешь им с некоторыми делами" },
          { en: "their daily lives", ru: "в повседневной жизни" },
          { en: "based mostly in hospitals, health centres, and libraries", ru: "в основном это происходит в больницах, медцентрах и библиотеках", tip: "F · NS" },
          { en: "make a difference at our school", ru: "можешь реально помочь в нашей школе" },
          { en: "primary school students", ru: "ученики начальной школы" },
          { en: "reading partner", ru: "партнёр по чтению" },
          { en: "turn into proficient readers", ru: "помочь им стать хорошими читателями" },
          { en: "of the artistic mind", ru: "творческого склада" },
          { en: "tutor them in drama", ru: "заниматься с ними драмой / театром" },
          { en: "give free art lessons", ru: "давать бесплатные уроки рисования" },
          { en: "taken for granted", ru: "само собой разумеется" },
          { en: "rainforest conservation program", ru: "программа по сохранению тропического леса" },
          { en: "in Costa Rica", ru: "в Коста-Рике" },
          { en: "your second language is Spanish", ru: "твой второй язык - испанский", tip: "G · False" },
          { en: "It was a must", ru: "это было обязательным условием" },
          { en: "if I'm not mistaken", ru: "если я не ошибаюсь" },
          { en: "Yeah, let's listen", ru: "да, давай послушаем" }
        ],
        chunks: [
          {
            text:
              "Hello, Mary! A pleasant surprise, isn't it? How are you doing? Absolutely! Let's take a seat. So, why volunteering?",
            showText: true
          },
          {
            text:
              "Oh, I enjoy interacting with others, and a bunch of regular meetings is part and parcel of volunteering. It allowed me to make many friends from other schools last year.",
            showText: true
          },
          {
            text:
              "Didn't you read the brochure before coming here? It's all there. Well, there are roles within the local community where you work mainly with people from our area, and support them with some tasks in their daily lives. These are based mostly in hospitals, health centres, and libraries.",
            showText: true
          },
          {
            text:
              "Then probably you can make a difference at our school - helping primary school students with their reading. You can become their reading partner and help them turn into proficient readers. Or, if you are of the artistic mind - which you are, as I know - you can tutor them in drama or give free art lessons. I'm not sure, but I would say that's taken for granted. You may ask Ms Rodriguez. I'm sure she knows the answer.",
            showText: true
          },
          {
            text:
              "I'm not sure about this year, but two years ago they offered a few places at a rainforest conservation program in Costa Rica. Hey, daydreamer, you should stop right here unless your second language is Spanish. It was a must, if I'm not mistaken. Yeah, let's listen.",
            showText: false
          }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
