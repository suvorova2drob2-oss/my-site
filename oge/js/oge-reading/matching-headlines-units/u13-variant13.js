/**
 * OGE Reading · Unit 13 · Task 12 · Malta.
 * Трубанёва 2026 · Вариант 13. Текст слово в слово.
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u13-variant13-reading-match",
    unitOrder: 13,
    title: "Unit 13 · Malta",
    instructionHtml:
      "<strong>Задание 12.</strong> Определите, в каком из текстов <strong>A–F</strong> содержатся ответы на вопросы <strong>1–7</strong>. Один вопрос останется без ответа.",

    paragraphs: [
      {
        letter: "A",
        text:
          "If you come to Malta, you will hear English everywhere and there is a good reason for that. The British ruled Malta for 150 years and independence came only in 1964. Naturally, the Maltese adopted the British system of administration, education and legislation. Signs of British lifestyle are everywhere. There is even a British-style Labour Party office on Republic Street. The British feel at home in Malta, as cars drive on the left side of the road."
      },
      {
        letter: "B",
        text:
          "To learn the history of a country, visit its libraries! But if you want to truly understand its people — try their food! There are lots of small old restaurants that keep their culinary traditions. Lots of Maltese dishes are the result of the long relationship between Malta's native population and the many conquerors who occupied the Maltese Islands over the centuries. The island's food is an interesting combination of Italian, African and English ingredients."
      },
      {
        letter: "C",
        text:
          "There are special factories in Malta that remove salt from the sea water and produce water suitable for drinking and watering the plants. In fact, Malta has no rivers or lakes. Many rely on rain, which does not come every summer but can cause floods in winter. If you're in Malta during the summer months, there's no need for an umbrella. Summer is very hot and the sun is bright. But come in October and the islands are flooded with rain."
      },
      {
        letter: "D",
        text:
          "Malta is not one island, as most people think, but five. The population is not large — it is only about 500,000 people. English, which is the official language, is spoken by almost everyone. Another official language is Maltese, a dialect of Arabic, which is written in the Latin alphabet. Today, Malta fully understands the importance of its position between Europe and the Middle East. Besides the European languages such as English and Italian, many Maltese also speak Arabic."
      },
      {
        letter: "E",
        text:
          "The history of Malta is concentrated in its main city, Valletta. It is often called a city built by gentlemen for gentlemen. It was created by the Knights of Malta and is perhaps Malta's greatest treasure, Impressive walls and towers still surround the city. Valletta is a must-see city, with its narrow streets, churches, palaces, museums and baroque buildings, According to UNESCO, the Maltese capital, Valletta, is one of the most concentrated historical areas in the world."
      },
      {
        letter: "F",
        text:
          "Malta is one of only a few truly bilingual countries. English language books and magazines are sold everywhere, many TV and radio channels broadcast in English, movies are in English, and much of the islands' cultural programme is in English too. This, together with an excellent climate and the option to combine learning and holidays, makes Malta a popular place for studying English. No wonder Maltese language schools are always in demand."
      }
    ],

    headlines: [
      { num: 1, text: "Why is Malta attractive to learners of English?" },
      { num: 2, text: "Which Maltese city has got the oldest English language school?" },
      { num: 3, text: "What languages are spoken in Malta?" },
      { num: 4, text: "What do Malta and Great Britain have in common?" },
      { num: 5, text: "What is the weather like in Malta?" },
      { num: 6, text: "What is the Maltese capital famous for?" },
      { num: 7, text: "What are the Maltese cooking traditions?" }
    ],

    key: { A: 4, B: 7, C: 5, D: 3, E: 6, F: 1 },
    extraHeadlineNum: 2,

    explanationsRu: {
      A: "Британское правление, левостороннее движение → вопрос 4.",
      B: "Блюда Мальты и влияние завоевателей → вопрос 7.",
      C: "Жаркое лето и дожди в октябре → вопрос 5.",
      D: "Английский, мальтийский и арабский → вопрос 3.",
      E: "Валлетта, стены, дворцы, ЮНЕСКО → вопрос 6.",
      F: "Английский вокруг и языковые школы → вопрос 1."
    },

    extraExplainRu:
      "Лишний вопрос <strong>2</strong> (в каком городе самая старая школа английского) — такого города в текстах нет."
  });
})(typeof window !== "undefined" ? window : this);
