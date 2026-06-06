/**
 * ЕГЭ Listening TFNS · Unit 18 · Valentine's Day (Mary & John).
 */
(function (w) {
  var pack = w.__EGE_LISTENING_TFNS__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u18-valentines-day",
    unitOrder: 18,
    title: "Unit 18 · Valentine's Day",
    examSection: "§2 · True / False / Not Stated",
    headerTitle: "Mary & John · Valentine's Day",
    audioSrc:
      "https://storage.yandexcloud.net/cpeaudio/ege/18/%D0%92%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82%2018%20(mp3cut.net)%20(1).mp3",
    instructionHtml:
      "Вы услышите <strong>диалог</strong>. Определите, какие из утверждений <strong>A–G</strong> соответствуют содержанию текста (<strong>True +</strong>), какие <strong>не соответствуют</strong> (<strong>False −</strong>), и о каких <strong>нет информации</strong> (<strong>Not stated ?</strong>). Запись прослушивается <strong>дважды</strong>.",
    listenTipsRu:
      "<p><strong>Valentine's Day:</strong> one card or many, teachers and statistics, Christmas vs Valentines, Japan tradition, flower colours.</p>",
    statements: [
      { letter: "A", text: "John is going to send a Valentine to one person." },
      { letter: "B", text: "Maths teachers receive the most Valentines." },
      { letter: "C", text: "People generally send more Christmas cards than Valentines." },
      { letter: "D", text: "There is a survey about selling Valentines." },
      { letter: "E", text: "The most typical Valentine's Day presents are flowers and sweets." },
      { letter: "F", text: "Mary knows about some Valentine's Day traditions in a foreign country." },
      { letter: "G", text: "John considers colours when buying a bouquet." }
    ],
    key: {
      A: "f",
      B: "f",
      C: "t",
      D: "t",
      E: "ns",
      F: "t",
      G: "f"
    },
    dialogueParagraphs: [
      {
        turns: [
          { speaker: "Mary", text: "Hey, John! Tomorrow is Valentine's Day! Do you remember?" },
          {
            speaker: "John",
            text:
              "Do I remember? I've spent loads of money on Valentine cards, to say nothing of postage costs!"
          },
          {
            speaker: "Mary",
            text:
              "That's funny! I thought one was supposed to buy and send a card to just one person. Isn't that the point?"
          },
          {
            speaker: "John",
            text:
              "It used to be, but I think not anymore. You are expected to send cards to teachers, relatives, neighbours ... This is ridiculous — but be ready for some caustic comments if you forget somebody from this list! People have completely forgotten the fact that there was a time when this holiday was close to being forbidden — I guess it was in 1969."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Mary",
            text:
              "That's sad, but you are probably right. For example, have you heard that, according to the statistics, teachers receive the most Valentines, followed by kids, mothers and only then spouses or sweetheart?"
          },
          {
            speaker: "John",
            text:
              "This doesn't surprise me at all. Valentine's Day is probably the second largest card-sending holiday in the world."
          },
          { speaker: "Mary", text: "Only the second? Probably the ...?" },
          {
            speaker: "John",
            text:
              "I think you are missing Christmas, aren't you? You know Hallmark employs 80 people every year to research the sales pattern of previous Valentines. That is big business for them."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Mary",
            text:
              "Much depends on clever advertising; that's the fact. Do you know that in Japan after the successful campaign of a chocolate factory, women began to give men a box of sweets for Valentine's Day?"
          },
          {
            speaker: "John",
            text:
              "Never! I don't believe it! At least lucky men in Japan don't have to buy bunches of roses."
          }
        ]
      },
      {
        turns: [
          {
            speaker: "Mary",
            text:
              "A bouquet is important indeed. You don't want to send mixed signals with it, do you?"
          },
          { speaker: "John", text: "What do you mean?" },
          {
            speaker: "Mary",
            text:
              "The colour of flowers, of course! Red can mean romantic love or just deep respect. Peach can tell a person of your gratitude or appreciation. Pink symbolizes perfection and black says farewell. Imagine you mix blue and red or peach and pink."
          },
          {
            speaker: "John",
            text:
              "This is completely over my head. I doubt many people still remember these archaic rules."
          },
          { speaker: "Mary", text: "You never know! OK, I've got to go. See you tomorrow." },
          { speaker: "John", text: "All right. I hope you'll have a card for me!" },
          { speaker: "Mary", text: "I certainly will!" }
        ]
      }
    ],
    huntLabs: [
      {
        letter: "A",
        key: "f",
        paragraphIndex: 0,
        keyLineRu: "John says one-person sending used to be true, but not anymore.",
        explainRu: "Он говорит, что теперь cards are expected for many people.",
        evidencePromptRu: "<strong>A.</strong> Найдите not anymore / teachers, relatives, neighbours.",
        segments: [
          { kind: "hit", sol: "e", text: "It used to be, but I think not anymore" },
          { kind: "hit", sol: "e", text: "You are expected to send cards to teachers, relatives, neighbours" }
        ]
      },
      {
        letter: "B",
        key: "f",
        paragraphIndex: 1,
        keyLineRu: "Mary says teachers in general, not maths teachers specifically.",
        explainRu: "В утверждении добавлено лишнее уточнение maths.",
        evidencePromptRu: "<strong>B.</strong> Проверьте teachers receive the most Valentines.",
        segments: [
          { kind: "hit", sol: "e", text: "teachers receive the most Valentines" }
        ]
      },
      {
        letter: "C",
        key: "t",
        paragraphIndex: 1,
        keyLineRu: "Valentine's Day is second; Christmas is first.",
        explainRu: "Значит, Christmas cards typically outnumber Valentines.",
        evidencePromptRu: "<strong>C.</strong> Найдите second largest card-sending holiday / Christmas.",
        segments: [
          { kind: "hit", sol: "e", text: "the second largest card-sending holiday in the world" },
          { kind: "hit", sol: "e", text: "I think you are missing Christmas" }
        ]
      },
      {
        letter: "D",
        key: "t",
        paragraphIndex: 1,
        keyLineRu: "Hallmark researches sales patterns of previous Valentines.",
        explainRu: "Это и есть survey/research about selling Valentines.",
        evidencePromptRu: "<strong>D.</strong> Найдите research the sales pattern.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "Hallmark employs 80 people every year to research the sales pattern of previous Valentines"
          }
        ]
      },
      {
        letter: "E",
        key: "ns",
        paragraphIndex: 2,
        keyLineRu: "Flowers and sweets are mentioned, but the most typical presents are not named.",
        nsExplainRu: "Есть пример японской традиции со sweets и упоминание roses, но текст не говорит, что именно это самые типичные Valentine presents вообще.",
        evidencePromptRu: "<strong>E.</strong> Здесь важно заметить, что про most typical не сказано.",
        segments: []
      },
      {
        letter: "F",
        key: "t",
        paragraphIndex: 2,
        keyLineRu: "Mary knows a Japanese Valentine's tradition.",
        explainRu: "Она прямо рассказывает о традиции in Japan.",
        evidencePromptRu: "<strong>F.</strong> Найдите in Japan ... women began to give men a box of sweets.",
        segments: [
          {
            kind: "hit",
            sol: "e",
            text: "in Japan after the successful campaign of a chocolate factory, women began to give men a box of sweets"
          }
        ]
      },
      {
        letter: "G",
        key: "f",
        paragraphIndex: 3,
        keyLineRu: "John does not use bouquet colours; he says it is over his head.",
        explainRu: "Он скорее отвергает эти правила, чем следует им.",
        evidencePromptRu: "<strong>G.</strong> Найдите This is completely over my head.",
        segments: [
          { kind: "hit", sol: "e", text: "This is completely over my head" },
          { kind: "hit", sol: "e", text: "I doubt many people still remember these archaic rules" }
        ]
      }
    ],
    shadowSpeakers: [
      {
        id: "Mary",
        label: "Mary",
        fullText:
          "Hey, John! Tomorrow is Valentine's Day! Do you remember? That's funny! I thought one was supposed to buy and send a card to just one person. Isn't that the point? That's sad, but you are probably right. For example, have you heard that, according to the statistics, teachers receive the most Valentines, followed by kids, mothers and only then spouses or sweetheart? Much depends on clever advertising; that's the fact. Do you know that in Japan after the successful campaign of a chocolate factory, women began to give men a box of sweets for Valentine's Day? A bouquet is important indeed. You don't want to send mixed signals with it, do you? The colour of flowers, of course! Red can mean romantic love or just deep respect. Peach can tell a person of your gratitude or appreciation. Pink symbolizes perfection and black says farewell. Imagine you mix blue and red or peach and pink. You never know! OK, I've got to go. See you tomorrow. I certainly will!",
        phrases: [
          { en: "just one person", ru: "только одному человеку", tip: "A" },
          { en: "according to the statistics", ru: "согласно статистике", tip: "B/D" },
          { en: "teachers receive the most Valentines", ru: "учителя получают больше всего валентинок", tip: "B" },
          { en: "followed by kids, mothers", ru: "затем дети, мамы" },
          { en: "clever advertising", ru: "умная реклама" },
          { en: "in Japan", ru: "в Японии", tip: "F" },
          { en: "women began to give men a box of sweets", ru: "женщины начали дарить мужчинам коробку сладостей", tip: "F" },
          { en: "a bouquet is important indeed", ru: "букет действительно важен" },
          { en: "send mixed signals", ru: "послать смешанные сигналы" },
          { en: "the colour of flowers", ru: "цвет цветов" },
          { en: "romantic love", ru: "романтическая любовь" },
          { en: "deep respect", ru: "глубокое уважение" },
          { en: "gratitude or appreciation", ru: "благодарность или признательность" },
          { en: "symbolizes perfection", ru: "символизирует совершенство" },
          { en: "says farewell", ru: "означает прощание" }
        ],
        chunks: []
      },
      {
        id: "John",
        label: "John",
        fullText:
          "Do I remember? I've spent loads of money on Valentine cards, to say nothing of postage costs! It used to be, but I think not anymore. You are expected to send cards to teachers, relatives, neighbours ... This is ridiculous — but be ready for some caustic comments if you forget somebody from this list! People have completely forgotten the fact that there was a time when this holiday was close to being forbidden — I guess it was in 1969. This doesn't surprise me at all. Valentine's Day is probably the second largest card-sending holiday in the world. I think you are missing Christmas, aren't you? You know Hallmark employs 80 people every year to research the sales pattern of previous Valentines. That is big business for them. Never! I don't believe it! At least lucky men in Japan don't have to buy bunches of roses. What do you mean? This is completely over my head. I doubt many people still remember these archaic rules. All right. I hope you'll have a card for me!",
        phrases: [
          { en: "loads of money", ru: "куча денег" },
          { en: "postage costs", ru: "почтовые расходы" },
          { en: "It used to be", ru: "раньше так и было", tip: "A" },
          { en: "not anymore", ru: "уже не так", tip: "A" },
          { en: "teachers, relatives, neighbours", ru: "учителям, родственникам, соседям", tip: "A" },
          { en: "caustic comments", ru: "язвительные комментарии" },
          { en: "close to being forbidden", ru: "едва не был запрещён" },
          { en: "second largest card-sending holiday", ru: "второй по масштабу праздник открыток", tip: "C" },
          { en: "missing Christmas", ru: "забываешь про Christmas", tip: "C" },
          { en: "research the sales pattern", ru: "исследовать картину продаж", tip: "D" },
          { en: "big business", ru: "большой бизнес" },
          { en: "bunches of roses", ru: "букеты роз" },
          { en: "over my head", ru: "это выше моего понимания", tip: "G" },
          { en: "archaic rules", ru: "архаичные правила", tip: "G" }
        ],
        chunks: []
      }
    ]
  });
})(typeof window !== "undefined" ? window : this);
