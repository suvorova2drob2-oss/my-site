/**
 * ЕГЭ Listening TFNS · Unit 5 · Mexico trip (Maria & Sam).
 */
(function (w) {
  var pack = w.__EGE_LISTENING_TFNS__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u5-mexico-trip",
    unitOrder: 5,
    title: "Unit 5 · Mexico trip",
    examSection: "§2 · True / False / Not Stated",
    headerTitle: "Maria & Sam · Oaxaca food & ruins",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/5/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%205%20(mp3cut.net)%20(1).mp3",
    instructionHtml:
      "Вы услышите <strong>разговор двух друзей</strong>. Определите, какие из утверждений <strong>A–G</strong> соответствуют содержанию текста (<strong>True +</strong>), какие <strong>не соответствуют</strong> (<strong>False −</strong>), и о каких <strong>нет информации</strong> (<strong>Not stated ?</strong>). Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>Главный навык:</strong> три решения — не угадывай «по смыслу».</p>" +
      "<ul>" +
      "<li><strong>True (+)</strong> — в диалоге <em>прямо сказано</em> (*I brought some cocadas* → E).</li>" +
      "<li><strong>False (−)</strong> — в тексте <em>наоборот</em> (corn, не rice → C; <em>desserts</em>, не desert → D).</li>" +
      "<li><strong>Not stated (?)</strong> — Mexico ≠ Christmas holidays (A).</li>" +
      "<li>Ловушка: <strong>desert</strong> (пустыня) vs <strong>dessert</strong> (десерт) в D.</li>" +
      "</ul>",
    statements: [
      { letter: "A", text: "Maria went to Mexico for Christmas holidays." },
      { letter: "B", text: "Maria ate traditional food most of the time." },
      { letter: "C", text: "Maria learned how to cook rice." },
      { letter: "D", text: "Sam would like to visit a desert." },
      { letter: "E", text: "Maria brought sweets as a souvenir for Sam." },
      { letter: "F", text: "Sam greatly dislikes insects." },
      { letter: "G", text: "Sam is going to have lunch soon." }
    ],
    key: {
      A: "ns",
      B: "t",
      C: "f",
      D: "f",
      E: "t",
      F: "t",
      G: "t"
    },
    dialogueParagraphs: [
      {
        turns: [
          {
            speaker: "Maria",
            text: "Hey, Sam, guess what? I'm back from Mexico!"
          },
          {
            speaker: "Sam",
            text:
              "No way! Maria, how was it? Did you try all the amazing food I was telling you about?"
          },
          {
            speaker: "Maria",
            text:
              "You won't believe it! It was even better than I imagined. Oaxaca is this incredible city, and we basically ate our way through it for a whole week."
          },
          {
            speaker: "Sam",
            text: "Seriously? Tell me everything! What did you eat first?"
          },
          {
            speaker: "Maria",
            text:
              "Well, the very first night, we had this fancy welcome dinner at a rooftop restaurant. The view was breathtaking, and the food... wow!"
          },
          {
            speaker: "Sam",
            text: "Sounds fancy! Did you learn anything about the food?"
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Maria",
            text:
              "Actually, yeah! The next day, we went to this market and had a typical Oaxacan breakfast. Then we explored some villages and learned how they make crafts and pottery. It was cool to see how much their culture is tied to food."
          },
          { speaker: "Sam", text: "Did you do any cooking yourself?" },
          {
            speaker: "Maria",
            text:
              "We sure did! We took a cooking class with a famous chef and learned how to make some traditional dishes using all kinds of corn. We learned all about its history, and it turns out some of the oldest known corn comes from caves! Pretty cool, right?"
          },
          {
            speaker: "Sam",
            text:
              "Wow, that sounds amazing! Did you get to see any ancient ruins while you were eating?"
          },
          {
            speaker: "Maria",
            text:
              "Haha, well, yes, we did see some ruins! We went to this huge archaeological site called Monte Albán. It was incredible to learn about the Zapotec people who built it. And guess what? We had lunch at another chef's house nearby. He cooked these amazing dishes from a different region of Oaxaca."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Sam",
            text:
              "Oh! That was one of my dreams, to taste some traditional desserts at a historical site there. Especially that, hmm, you know, the cake which is made of milk. Don't remember what it is called."
          },
          {
            speaker: "Maria",
            text:
              "I guess you are talking about tres leches, a delicious cake soaked in three kinds of milk."
          },
          {
            speaker: "Sam",
            text: "I do! Did you try it? Did you bring a slice back for me?"
          },
          {
            speaker: "Maria",
            text:
              "We didn't, and I don't have any with me. Instead, we tried fried plantains dusted with cinnamon and I brought some cocadas for you."
          },
          {
            speaker: "Sam",
            text:
              "Cocadas? Sounds like cockroaches. Hope there are no bugs inside. I can't stand them."
          },
          {
            speaker: "Maria",
            text:
              "You are such a girl! Of course, no cockroaches. These are coconut candies. Here they are! Try one now!"
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Sam",
            text:
              "If you don't mind, I'll do it a bit later. I didn't have my lunch yet and don't want to spoil my appetite. By the way, did you see any other ruins besides Monte Albán?"
          },
          {
            speaker: "Maria",
            text:
              "We did! We went to a beautiful 16th-century monastery called Santiago Apóstol. It has this amazing open-air basilica with no roof!"
          },
          {
            speaker: "Sam",
            text:
              "This trip sounds amazing, Maria! I'm so jealous! Maybe I can convince you to take me in your luggage next time."
          },
          { speaker: "Maria", text: "Haha, very funny." }
        ]
      }
    ],
    huntLabs: [
      {
        letter: "A",
        key: "ns",
        paragraphIndex: 0,
        keyLineRu: "Not stated — про Christmas holidays не сказано.",
        nsExplainRu:
          "Maria была в Mexico / Oaxaca неделю — но <em>когда</em> ездила (Christmas или нет) в диалоге не звучит.",
        evidencePromptRu: "Прочитай начало — отмечать нечего.",
        segments: []
      },
      {
        letter: "B",
        key: "t",
        paragraphIndex: 0,
        keyLineRu: "True — ate our way through Oaxaca; typical Oaxacan breakfast.",
        explainRu:
          "Неделя еды в Oaxaca + typical Oaxacan breakfast и traditional dishes → traditional food most of the time.",
        evidencePromptRu: "Найди фразы про еду в Oaxaca.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "we basically ate our way through it for a whole week"
          },
          {
            kind: "hit",
            sol: "e",
            text: "had a typical Oaxacan breakfast"
          },
          {
            kind: "hit",
            sol: "e",
            text: "learned how to make some traditional dishes"
          }
        ]
      },
      {
        letter: "C",
        key: "f",
        paragraphIndex: 1,
        keyLineRu: "False — cooking class про corn, не rice.",
        explainRu:
          "Maria училась готовить traditional dishes <em>using all kinds of corn</em> — про rice ничего.",
        evidencePromptRu: "Найди, чему учили на cooking class.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "learned how to make some traditional dishes using all kinds of corn"
          }
        ]
      },
      {
        letter: "D",
        key: "f",
        paragraphIndex: 2,
        keyLineRu: "False — desserts at a historical site, не visit a desert.",
        explainRu:
          "Sam мечтает <em>taste traditional desserts</em> at a historical site — не «visit a desert» (пустыню).",
        evidencePromptRu: "Найди мечту Sam про desserts / historical site.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "to taste some traditional desserts at a historical site there"
          }
        ]
      },
      {
        letter: "E",
        key: "t",
        paragraphIndex: 2,
        keyLineRu: "True — I brought some cocadas for you.",
        explainRu:
          "Cocadas = coconut candies — сладости-сувенир для Sam.",
        evidencePromptRu: "Найди, что Maria привезла Sam.",
        segments: [
          { kind: "hit", sol: "e", text: "I brought some cocadas for you" },
          { kind: "hit", sol: "e", text: "These are coconut candies" }
        ]
      },
      {
        letter: "F",
        key: "t",
        paragraphIndex: 2,
        keyLineRu: "True — Hope there are no bugs inside. I can't stand them.",
        explainRu:
          "Sam не переносит насекомых — прямо в тексте.",
        evidencePromptRu: "Найди реакцию Sam на «bugs».",
        segments: [
          { kind: "hit", sol: "e", text: "Hope there are no bugs inside. I can't stand them" }
        ]
      },
      {
        letter: "G",
        key: "t",
        paragraphIndex: 3,
        keyLineRu: "True — I didn't have my lunch yet.",
        explainRu:
          "Sam ещё не обедал и откладывает candy, чтобы не spoil appetite → собирается пообедать.",
        evidencePromptRu: "Найди фразу Sam про lunch.",
        segments: [
          { kind: "hit", sol: "e", text: "I didn't have my lunch yet and don't want to spoil my appetite" }
        ]
      }
    ],
    shadowSpeakers: [
      {
        id: "Maria",
        label: "Maria",
        fullText:
          "Hey, Sam, guess what? I'm back from Mexico! You won't believe it! It was even better than I imagined. Oaxaca is this incredible city, and we basically ate our way through it for a whole week. Well, the very first night, we had this fancy welcome dinner at a rooftop restaurant. The view was breathtaking, and the food... wow! Actually, yeah! The next day, we went to this market and had a typical Oaxacan breakfast. Then we explored some villages and learned how they make crafts and pottery. It was cool to see how much their culture is tied to food. We sure did! We took a cooking class with a famous chef and learned how to make some traditional dishes using all kinds of corn. We learned all about its history, and it turns out some of the oldest known corn comes from caves! Pretty cool, right? Haha, well, yes, we did see some ruins! We went to this huge archaeological site called Monte Albán. It was incredible to learn about the Zapotec people who built it. And guess what? We had lunch at another chef's house nearby. He cooked these amazing dishes from a different region of Oaxaca. I guess you are talking about tres leches, a delicious cake soaked in three kinds of milk. We didn't, and I don't have any with me. Instead, we tried fried plantains dusted with cinnamon and I brought some cocadas for you. You are such a girl! Of course, no cockroaches. These are coconut candies. Here they are! Try one now! We did! We went to a beautiful 16th-century monastery called Santiago Apóstol. It has this amazing open-air basilica with no roof! Haha, very funny.",
        phrases: [
          { en: "I'm back from Mexico", ru: "я вернулась из Мексики", tip: "A · NS · no Christmas" },
          {
            en: "we basically ate our way through it for a whole week",
            ru: "целую неделю мы буквально «ели» город",
            tip: "B · True"
          },
          { en: "fancy welcome dinner at a rooftop restaurant", ru: "нарядный приветственный ужин на крыше" },
          {
            en: "had a typical Oaxacan breakfast",
            ru: "типичный местный завтрак в Оахаке",
            tip: "B · True"
          },
          { en: "their culture is tied to food", ru: "их культура тесно связана с едой" },
          {
            en: "traditional dishes using all kinds of corn",
            ru: "традиционные блюда из разных видов кукурузы",
            tip: "C · False · not rice"
          },
          { en: "some of the oldest known corn comes from caves", ru: "древнейшая известная кукуруза — из пещер" },
          { en: "archaeological site called Monte Albán", ru: "археологический памятник Monte Albán" },
          { en: "learn about the Zapotec people", ru: "узнали про народ сапотеков" },
          { en: "dishes from a different region of Oaxaca", ru: "блюда из другого района Оахаки" },
          {
            en: "tres leches, a delicious cake soaked in three kinds of milk",
            ru: "tres leches — торт, пропитанный тремя видами молока"
          },
          { en: "fried plantains dusted with cinnamon", ru: "жареные бананы plantain с корицей" },
          {
            en: "I brought some cocadas for you",
            ru: "привезла тебе cocadas (кокосовые конфеты)",
            tip: "E · True"
          },
          { en: "These are coconut candies", ru: "это кокосовые конфеты" },
          {
            en: "16th-century monastery called Santiago Apóstol",
            ru: "монастырь Santiago Apóstol XVI века"
          },
          { en: "open-air basilica with no roof", ru: "открытая базилика без крыши" }
        ],
        chunks: [
          {
            text: "Hey, Sam, guess what? … and the food... wow!",
            showText: true
          },
          {
            text:
              "Actually, yeah! … Pretty cool, right?",
            showText: true
          },
          {
            text:
              "Haha, well, yes, we did see some ruins! … from a different region of Oaxaca.",
            showText: true
          },
          {
            text:
              "I guess you are talking about tres leches … Try one now!",
            showText: true
          },
          {
            text:
              "We did! We went to a beautiful 16th-century monastery … Haha, very funny.",
            showText: true
          }
        ]
      },
      {
        id: "Sam",
        label: "Sam",
        fullText:
          "No way! Maria, how was it? Did you try all the amazing food I was telling you about? Seriously? Tell me everything! What did you eat first? Sounds fancy! Did you learn anything about the food? Did you do any cooking yourself? Wow, that sounds amazing! Did you get to see any ancient ruins while you were eating? Oh! That was one of my dreams, to taste some traditional desserts at a historical site there. Especially that, hmm, you know, the cake which is made of milk. Don't remember what it is called. I do! Did you try it? Did you bring a slice back for me? Cocadas? Sounds like cockroaches. Hope there are no bugs inside. I can't stand them. If you don't mind, I'll do it a bit later. I didn't have my lunch yet and don't want to spoil my appetite. By the way, did you see any other ruins besides Monte Albán? This trip sounds amazing, Maria! I'm so jealous! Maybe I can convince you to take me in your luggage next time.",
        phrases: [
          { en: "Did you try all the amazing food", ru: "ты попробовала всю ту потрясающую еду?" },
          { en: "Tell me everything! What did you eat first?", ru: "расскажи всё! с чего ты начала?" },
          { en: "Did you learn anything about the food?", ru: "узнала что-нибудь про местную еду?" },
          { en: "Did you do any cooking yourself?", ru: "сама что-нибудь готовила?" },
          { en: "Did you get to see any ancient ruins", ru: "видела древние руины?" },
          {
            en: "to taste some traditional desserts at a historical site there",
            ru: "попробовать традиционные десерты на историческом месте",
            tip: "D · False · dessert, not desert"
          },
          { en: "the cake which is made of milk", ru: "торт на молоке (молочный торт)" },
          { en: "Did you bring a slice back for me?", ru: "привезла мне кусочек?" },
          { en: "Sounds like cockroaches", ru: "звучит как тараканы" },
          {
            en: "Hope there are no bugs inside. I can't stand them",
            ru: "надеюсь, там нет жуков — терпеть их не могу",
            tip: "F · True"
          },
          {
            en: "I didn't have my lunch yet and don't want to spoil my appetite",
            ru: "я ещё не обедал и не хочу испортить аппетит",
            tip: "G · True"
          },
          { en: "did you see any other ruins besides Monte Albán", ru: "видела другие руины, кроме Monte Albán?" },
          { en: "I'm so jealous", ru: "как я тебе завидую!" },
          { en: "take me in your luggage next time", ru: "увези меня в чемодане в следующий раз" }
        ],
        chunks: [
          {
            text:
              "No way! Maria, how was it? … Did you learn anything about the food?",
            showText: true
          },
          {
            text:
              "Did you do any cooking yourself? … while you were eating?",
            showText: true
          },
          {
            text:
              "Oh! That was one of my dreams … Don't remember what it is called.",
            showText: true
          },
          {
            text:
              "I do! Did you try it? … I can't stand them.",
            showText: true
          },
          {
            text:
              "If you don't mind, I'll do it a bit later … take me in your luggage next time.",
            showText: true
          }
        ]
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
