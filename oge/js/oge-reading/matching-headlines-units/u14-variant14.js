/**
 * OGE Reading · Unit 14 · Task 12 · The Volga.
 * Трубанёва 2026 · Вариант 14. Текст слово в слово.
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u14-variant14-reading-match",
    unitOrder: 14,
    title: "Unit 14 · The Volga",
    instructionHtml:
      "<strong>Задание 12.</strong> Определите, в каком из текстов <strong>A–F</strong> содержатся ответы на вопросы <strong>1–7</strong>. Один вопрос останется без ответа.",

    paragraphs: [
      {
        letter: "A",
        text:
          "The basin of the Volga includes most of Western Russia, an area that is home to eleven large and important cities in Russia. No wonder the river has played an important role in the history and culture of the Russians. There are different opinions about the meaning of the word Volga. Some scientists say it is derived from early Slavic language roots and means wetness or moisture, others consider that word comes from the Finnish valka, which means white, clear."
      },
      {
        letter: "B",
        text:
          "The Volga region has always been a nice place to live and a great attraction to tourists. Sadly, pollution in some parts of the Volga has now reached a critical level. According to government reports, a great amount of waste is thrown into the river every year by factories and cities along its banks. Recently, a federal program for improving the ecological situation and restoring water purity of the Volga has been discussed and accepted."
      },
      {
        letter: "C",
        text:
          "The Volga River is magic with its beauty. It has always inspired writers, musicians and artists to create their masterpieces. Isaac Levitan, an outstanding landscape artist, created some of his best works when he lived in a small town on the Volga. In his works, he showed the river and its landscapes with forests, valleys and fields. Nowadays his famous paintings Evening on the Volga, After the Rain and Fresh breeze. Volga are displayed in the Tretyakov Gallery."
      },
      {
        letter: "D",
        text:
          "Every year in May, numerous festivals and events are held in cities and towns which are situated on the Volga banks. They are united by one theme — the famous Russian River. In fact, in 2008, it was decided to establish Volga Day and to include it in the international ecological calendar. The aim of the events is to draw attention to the ecological status of the river. Volga Day could encourage the local population to take part in conservation activities."
      },
      {
        letter: "E",
        text:
          "The Volga River, no doubt, is the most famous Russian river. Its length is about 3530 km. It is one of the largest rivers in the world and the longest river in Europe. A lot of beautiful old cities were set on its banks. The great river is navigable for almost all of its length, though it freezes for three months every year. The Volga flows from the Valdai Hills, which are in the north-west of Central Russia, and runs down into the Caspian Sea."
      },
      {
        letter: "F",
        text:
          "The Volga Delta is the largest river delta in Europe. The delta is famous for its wildlife. It is the only place in Russia where flamingos and pelicans live. Due to the specific environment, beautiful lotus flowers grow there. The white, pink, red, blue and yellow lotus flowers are in bloom for about two months a year, usually in the second part of the summer. The total area of lotus fields in the Volga Delta is about several hundred hectares."
      }
    ],

    headlines: [
      { num: 1, text: "Where does the Volga start?" },
      { num: 2, text: "What does the name of the river mean?" },
      { num: 3, text: "What does the flora and fauna of the river basin look like?" },
      { num: 4, text: "What ecological problems does the Volga region have?" },
      { num: 5, text: "When does the Volga navigation season start?" },
      { num: 6, text: "How do people celebrate the special day of the river?" },
      { num: 7, text: "What role does the Volga play in Russian culture?" }
    ],

    key: { A: 2, B: 4, C: 7, D: 6, E: 1, F: 3 },
    extraHeadlineNum: 5,

    explanationsRu: {
      A: "Происхождение слова Volga → вопрос 2.",
      B: "Загрязнение и федеральная программа → вопрос 4.",
      C: "Река вдохновляла писателей и Левитана → вопрос 7.",
      D: "Праздники и День Волги → вопрос 6.",
      E: "Исток — Валдайская возвышенность → вопрос 1.",
      F: "Фламинго, пеликаны и лотосы в дельте → вопрос 3."
    },

    extraExplainRu:
      "Лишний вопрос <strong>5</strong> (когда начинается навигация) — сказано только, что река замерзает на три месяца."
  });
})(typeof window !== "undefined" ? window : this);
