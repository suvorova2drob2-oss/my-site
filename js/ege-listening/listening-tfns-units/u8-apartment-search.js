/**
 * ЕГЭ Listening TFNS · Unit 8 · Apartment search (Emile & Samantha).
 */
(function (w) {
  var pack = w.__EGE_LISTENING_TFNS__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u8-apartment-search",
    unitOrder: 8,
    title: "Unit 8 · Apartment search",
    examSection: "§2 · True / False / Not Stated",
    headerTitle: "Emile & Samantha · new apartment",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/8/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%208%20(mp3cut.net)%20(1).mp3",
    instructionHtml:
      "Вы услышите <strong>разговор двух друзей</strong>. Определите, какие из утверждений <strong>A–G</strong> соответствуют содержанию текста (<strong>True +</strong>), какие <strong>не соответствуют</strong> (<strong>False −</strong>), и о каких <strong>нет информации</strong> (<strong>Not stated ?</strong>). Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>На что смотреть:</strong></p>" +
      "<ul>" +
      "<li><strong>A</strong> — Emile говорит, что <em>planned to</em>, но так и не приходил: это первый визит.</li>" +
      "<li><strong>B</strong> — про вид из окон / city centre ничего нет; только dark и noisy.</li>" +
      "<li><strong>C</strong> — Samantha хочет <em>change the district itself</em> → False.</li>" +
      "<li><strong>D</strong> — Emile <em>предлагает</em> дома у парка, но не говорит, что живёт там.</li>" +
      "<li><strong>E</strong> — balcony = <em>cherry on the cake</em>, не must.</li>" +
      "<li><strong>F</strong> — <em>I don't have a car</em> → False.</li>" +
      "<li><strong>G</strong> — <em>take my laptop</em> + <em>what's on the market</em> → поиск в интернете.</li>" +
      "</ul>",
    statements: [
      { letter: "A", text: "Emile has never been at Samantha's place." },
      { letter: "B", text: "Samantha's windows overlook the city centre." },
      { letter: "C", text: "Samantha would like to stay in the same area." },
      { letter: "D", text: "Emile lives in the new block of flats next to the University." },
      { letter: "E", text: "A balcony is a must in Samantha's new apartment." },
      { letter: "F", text: "Samantha drives to work." },
      { letter: "G", text: "Emile is going to search for the apartment on the Internet." }
    ],
    key: {
      A: "t",
      B: "ns",
      C: "f",
      D: "ns",
      E: "f",
      F: "f",
      G: "t"
    },
    dialogueParagraphs: [
      {
        turns: [
          { speaker: "Emile", text: "Samantha, are you home?" },
          { speaker: "Samantha", text: "Yeah, I'm here. Come in." },
          { speaker: "Emile", text: "Hi! It wasn't easy to find your place." },
          {
            speaker: "Samantha",
            text: "Is it your first visit? I thought you were here a couple of times."
          },
          { speaker: "Emile", text: "Yeah, I planned to, but no. I like it, by the way." },
          {
            speaker: "Samantha",
            text:
              "Funny, I don't. I'm so fed up with it. Have you noticed how dark it is in here? No sunlight at all. And it's always noisy — so noisy that I do not dare to open the windows."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Emile",
            text:
              "I can help you find a better place. There are plenty of apartments available in the city. Do you have a particular area in mind where you want to live?"
          },
          {
            speaker: "Samantha",
            text:
              "I would change the district itself, but I would like some place quieter and closer to the underground."
          },
          {
            speaker: "Emile",
            text:
              "Hmm. Do you know the park next to the Uni? On the other side of it, there are a few new blocks of flats. They are a bit far from the library, but pretty close to the pool."
          },
          { speaker: "Samantha", text: "Sounds good." }
        ]
      },
      {
        turns: [
          { speaker: "Emile", text: "Do you own this place? Do you plan to sell it first?" },
          {
            speaker: "Samantha",
            text:
              "I rent it. And the landlord has just raised the monthly rent. It's over 15 000 a month, and I'd like to stay within the 10 000 range."
          },
          {
            speaker: "Emile",
            text:
              "Well, if you are looking for something similar to this one — a two-bedroom apartment with a living room and a balcony — I doubt it's possible."
          },
          {
            speaker: "Samantha",
            text:
              "A one-bedroom apartment with a living room would be enough. A balcony would be a cherry on the cake."
          },
          { speaker: "Emile", text: "That should not be difficult to find." }
        ]
      },
      {
        turns: [
          {
            speaker: "Samantha",
            text:
              "I'm also hoping to find an apartment that has a gym or fitness centre in the building. I don't want to have to pay for a separate gym membership."
          },
          {
            speaker: "Emile",
            text:
              "That's a great idea. I heard those buildings next to the park have a fitness center, but we'll have to check. Have you thought about any other amenities you'd like to have?"
          },
          {
            speaker: "Samantha",
            text:
              "Well, I do a lot of cooking, so having a kitchen with modern appliances is important to me. And I love having a washer and dryer in the unit, so I don't have to go to a laundromat."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Emile",
            text:
              "Those are both important things to consider. We can make sure to include those features in the search. And what about parking? Do you need a designated spot?"
          },
          { speaker: "Samantha", text: "I don't have a car." },
          {
            speaker: "Emile",
            text:
              "So that's one less thing to worry about! Do you want a doorman or a secure entry system?"
          },
          { speaker: "Samantha", text: "Sure. Safety is a top priority for me." },
          {
            speaker: "Emile",
            text:
              "Noted. We'll look for buildings with those features as well. Finally, when are you moving out?"
          },
          { speaker: "Samantha", text: "I'd say within the next month, if possible." },
          {
            speaker: "Emile",
            text: "I'll take my laptop, and we'll see what's on the market for you."
          }
        ]
      }
    ],
    huntLabs: [
      {
        letter: "A",
        key: "t",
        paragraphIndex: 0,
        keyLineRu: "True — Emile подтверждает, что раньше так и не приходил: это первый визит.",
        explainRu:
          "Samantha спрашивает, первый ли это визит. Emile отвечает: <em>Yeah, I planned to, but no</em> — хотел прийти раньше, но не приходил.",
        evidencePromptRu: "Найди, что Emile говорит про прежние визиты.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "Is it your first visit? I thought you were here a couple of times."
          },
          { kind: "hit", sol: "e", text: "Yeah, I planned to, but no" }
        ]
      },
      {
        letter: "B",
        key: "ns",
        paragraphIndex: 0,
        keyLineRu: "Not stated — про вид на city centre ничего не сказано.",
        nsExplainRu:
          "Samantha жалуется, что темно и шумно, но не упоминает вид из окон и тем более city centre.",
        evidencePromptRu: "Прочитай жалобы Samantha: там нет city centre.",
        segments: []
      },
      {
        letter: "C",
        key: "f",
        paragraphIndex: 1,
        keyLineRu: "False — Samantha хочет сменить район, а не остаться в том же.",
        explainRu:
          "Samantha говорит прямо: <em>I would change the district itself</em>.",
        evidencePromptRu: "Найди, хочет ли Samantha остаться в том же районе.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "I would change the district itself"
          },
          {
            kind: "hit",
            sol: "d",
            text: "I would like some place quieter and closer to the underground",
            distractExplainRu:
              "Она ищет более тихое место ближе к метро — это не «остаться в том же районе»."
          }
        ]
      },
      {
        letter: "D",
        key: "ns",
        paragraphIndex: 1,
        keyLineRu: "Not stated — Emile советует дома у парка, но не говорит, что живёт там.",
        nsExplainRu:
          "Emile упоминает <em>new blocks of flats</em> у парка как вариант для Samantha. Про своё жильё он ничего не говорит.",
        evidencePromptRu: "Прочитай блок про park next to the Uni: это совет, не рассказ о себе.",
        segments: []
      },
      {
        letter: "E",
        key: "f",
        paragraphIndex: 2,
        keyLineRu: "False — балкон для Samantha приятный бонус, а не must.",
        explainRu:
          "Samantha говорит: <em>A balcony would be a cherry on the cake</em> — то есть «вишенка на торте», не обязательное условие.",
        evidencePromptRu: "Найди, как Samantha описывает balcony.",
        segments: [
          {
            kind: "hit",
            sol: "d",
            text: "a two-bedroom apartment with a living room and a balcony",
            distractExplainRu:
              "Emile описывает дорогой вариант «как этот», но Samantha выбирает one-bedroom."
          },
          {
            kind: "hit",
            sol: "e",
            text: "A balcony would be a cherry on the cake"
          }
        ]
      },
      {
        letter: "F",
        key: "f",
        paragraphIndex: 4,
        keyLineRu: "False — у Samantha нет машины.",
        explainRu:
          "На вопрос про parking Samantha отвечает: <em>I don't have a car</em>.",
        evidencePromptRu: "Найди ответ Samantha про parking / car.",
        segments: [
          {
            kind: "hit",
            sol: "d",
            text: "Do you need a designated spot",
            distractExplainRu: "Emile спрашивает про парковку, но Samantha отвечает, что машины нет."
          },
          { kind: "hit", sol: "e", text: "I don't have a car" }
        ]
      },
      {
        letter: "G",
        key: "t",
        paragraphIndex: 4,
        keyLineRu: "True — Emile возьмёт ноутбук и посмотрит, что есть на рынке.",
        explainRu:
          "Emile говорит: <em>I'll take my laptop, and we'll see what's on the market for you</em> — поиск квартир через интернет.",
        evidencePromptRu: "Найди финальную фразу Emile про laptop и market.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "I'll take my laptop, and we'll see what's on the market for you"
          }
        ]
      }
    ],
    shadowSpeakers: [
      {
        id: "Emile",
        label: "Emile",
        fullText:
          "Samantha, are you home? Hi! It wasn't easy to find your place. Yeah, I planned to, but no. I like it, by the way. I can help you find a better place. There are plenty of apartments available in the city. Do you have a particular area in mind where you want to live? Hmm. Do you know the park next to the Uni? On the other side of it, there are a few new blocks of flats. They are a bit far from the library, but pretty close to the pool. Do you own this place? Do you plan to sell it first? Well, if you are looking for something similar to this one — a two-bedroom apartment with a living room and a balcony — I doubt it's possible. That should not be difficult to find. That's a great idea. I heard those buildings next to the park have a fitness center, but we'll have to check. Have you thought about any other amenities you'd like to have? Those are both important things to consider. We can make sure to include those features in the search. And what about parking? Do you need a designated spot? So that's one less thing to worry about! Do you want a doorman or a secure entry system? Noted. We'll look for buildings with those features as well. Finally, when are you moving out? I'll take my laptop, and we'll see what's on the market for you.",
        phrases: [
          { en: "It wasn't easy to find your place", ru: "было нелегко найти твою квартиру" },
          { en: "Yeah, I planned to, but no", ru: "да, я планировал, но нет", tip: "A · True" },
          { en: "I like it, by the way", ru: "мне, кстати, нравится" },
          { en: "help you find a better place", ru: "помочь тебе найти место получше" },
          { en: "plenty of apartments available in the city", ru: "в городе много свободных квартир" },
          { en: "a particular area in mind", ru: "конкретный район в голове" },
          { en: "the park next to the Uni", ru: "парк рядом с университетом", tip: "D · NS" },
          { en: "new blocks of flats", ru: "новые жилые дома", tip: "D · NS" },
          { en: "a bit far from the library", ru: "немного далеко от библиотеки" },
          { en: "pretty close to the pool", ru: "довольно близко к бассейну" },
          { en: "Do you own this place", ru: "эта квартира твоя?" },
          { en: "plan to sell it first", ru: "сначала собираешься продать её?" },
          { en: "two-bedroom apartment with a living room and a balcony", ru: "двухкомнатная квартира с гостиной и балконом" },
          { en: "I doubt it's possible", ru: "сомневаюсь, что это возможно" },
          { en: "should not be difficult to find", ru: "найти не должно быть сложно" },
          { en: "fitness center", ru: "фитнес-центр" },
          { en: "we'll have to check", ru: "надо будет проверить" },
          { en: "other amenities you'd like to have", ru: "другие удобства, которые ты хотела бы" },
          { en: "include those features in the search", ru: "учесть эти параметры в поиске" },
          { en: "designated spot", ru: "закреплённое место" },
          { en: "one less thing to worry about", ru: "на одну заботу меньше" },
          { en: "doorman or a secure entry system", ru: "консьерж или система безопасного входа" },
          { en: "look for buildings with those features", ru: "искать дома с такими удобствами" },
          { en: "when are you moving out", ru: "когда ты съезжаешь?" },
          { en: "I'll take my laptop", ru: "я возьму ноутбук", tip: "G · True" },
          { en: "what's on the market for you", ru: "что есть на рынке для тебя", tip: "G · True" }
        ],
        chunks: [
          {
            text:
              "Samantha, are you home? Hi! It wasn't easy to find your place. Yeah, I planned to, but no. I like it, by the way.",
            showText: true
          },
          {
            text:
              "I can help you find a better place. There are plenty of apartments available in the city. Do you have a particular area in mind where you want to live?",
            showText: true
          },
          {
            text:
              "Hmm. Do you know the park next to the Uni? On the other side of it, there are a few new blocks of flats. They are a bit far from the library, but pretty close to the pool.",
            showText: true
          },
          {
            text:
              "Do you own this place? Do you plan to sell it first? Well, if you are looking for something similar to this one — a two-bedroom apartment with a living room and a balcony — I doubt it's possible. That should not be difficult to find.",
            showText: true
          },
          {
            text:
              "That's a great idea. I heard those buildings next to the park have a fitness center, but we'll have to check. Have you thought about any other amenities you'd like to have? Those are both important things to consider. We can make sure to include those features in the search. And what about parking? Do you need a designated spot? So that's one less thing to worry about! Do you want a doorman or a secure entry system? Noted. We'll look for buildings with those features as well. Finally, when are you moving out? I'll take my laptop, and we'll see what's on the market for you.",
            showText: false
          }
        ]
      },
      {
        id: "Samantha",
        label: "Samantha",
        fullText:
          "Yeah, I'm here. Come in. Is it your first visit? I thought you were here a couple of times. Funny, I don't. I'm so fed up with it. Have you noticed how dark it is in here? No sunlight at all. And it's always noisy — so noisy that I do not dare to open the windows. I would change the district itself, but I would like some place quieter and closer to the underground. Sounds good. I rent it. And the landlord has just raised the monthly rent. It's over 15 000 a month, and I'd like to stay within the 10 000 range. A one-bedroom apartment with a living room would be enough. A balcony would be a cherry on the cake. I'm also hoping to find an apartment that has a gym or fitness centre in the building. I don't want to have to pay for a separate gym membership. Well, I do a lot of cooking, so having a kitchen with modern appliances is important to me. And I love having a washer and dryer in the unit, so I don't have to go to a laundromat. I don't have a car. Sure. Safety is a top priority for me. I'd say within the next month, if possible.",
        phrases: [
          { en: "Yeah, I'm here. Come in", ru: "да, я дома. заходи" },
          { en: "Is it your first visit", ru: "это твой первый визит?", tip: "A · True" },
          { en: "you were here a couple of times", ru: "ты уже бывал здесь пару раз" },
          { en: "I'm so fed up with it", ru: "я так от этого устала" },
          { en: "how dark it is in here", ru: "как здесь темно", tip: "B · NS" },
          { en: "No sunlight at all", ru: "совсем нет солнечного света", tip: "B · NS" },
          { en: "always noisy", ru: "всегда шумно" },
          { en: "do not dare to open the windows", ru: "не решаюсь открывать окна" },
          { en: "change the district itself", ru: "сменить сам район", tip: "C · False" },
          { en: "quieter and closer to the underground", ru: "тише и ближе к метро" },
          { en: "Sounds good", ru: "звучит неплохо" },
          { en: "I rent it", ru: "я снимаю её" },
          { en: "landlord has just raised the monthly rent", ru: "арендодатель только что поднял ежемесячную плату" },
          { en: "over 15 000 a month", ru: "больше 15 000 в месяц" },
          { en: "stay within the 10 000 range", ru: "укладываться в 10 000" },
          { en: "one-bedroom apartment with a living room", ru: "однокомнатная квартира с гостиной" },
          { en: "would be enough", ru: "было бы достаточно" },
          { en: "A balcony would be a cherry on the cake", ru: "балкон был бы вишенкой на торте", tip: "E · False" },
          { en: "gym or fitness centre in the building", ru: "спортзал или фитнес-центр в доме" },
          { en: "separate gym membership", ru: "отдельный абонемент в спортзал" },
          { en: "kitchen with modern appliances", ru: "кухня с современной техникой" },
          { en: "washer and dryer in the unit", ru: "стиральная и сушильная машины в квартире" },
          { en: "go to a laundromat", ru: "ходить в прачечную самообслуживания" },
          { en: "I don't have a car", ru: "у меня нет машины", tip: "F · False" },
          { en: "Safety is a top priority for me", ru: "безопасность для меня на первом месте" },
          { en: "within the next month", ru: "в течение следующего месяца" }
        ],
        chunks: [
          {
            text:
              "Yeah, I'm here. Come in. Is it your first visit? I thought you were here a couple of times.",
            showText: true
          },
          {
            text:
              "Funny, I don't. I'm so fed up with it. Have you noticed how dark it is in here? No sunlight at all. And it's always noisy — so noisy that I do not dare to open the windows.",
            showText: true
          },
          {
            text:
              "I would change the district itself, but I would like some place quieter and closer to the underground. Sounds good.",
            showText: true
          },
          {
            text:
              "I rent it. And the landlord has just raised the monthly rent. It's over 15 000 a month, and I'd like to stay within the 10 000 range. A one-bedroom apartment with a living room would be enough. A balcony would be a cherry on the cake.",
            showText: true
          },
          {
            text:
              "I'm also hoping to find an apartment that has a gym or fitness centre in the building. I don't want to have to pay for a separate gym membership. Well, I do a lot of cooking, so having a kitchen with modern appliances is important to me. And I love having a washer and dryer in the unit, so I don't have to go to a laundromat. I don't have a car. Sure. Safety is a top priority for me. I'd say within the next month, if possible.",
            showText: false
          }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
