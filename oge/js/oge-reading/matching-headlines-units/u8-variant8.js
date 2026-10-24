/**
 * OGE Reading · Unit 8 · Task 12 · Maslenitsa.
 * Трубанёва 2026 · Вариант 8. Текст слово в слово.
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u8-variant8-reading-match",
    unitOrder: 8,
    title: "Unit 8 · Maslenitsa",
    instructionHtml:
      "<strong>Задание 12.</strong> Определите, в каком из текстов <strong>A–F</strong> содержатся ответы на вопросы <strong>1–7</strong>. Один вопрос останется без ответа.",

    paragraphs: [
      {
        letter: "A",
        text:
          "Pancakes are a very popular dish of Russian cuisine. People cook them not only for Maslenitsa but for their everyday meals too. All you need is some flour, milk, eggs, salt and sugar. Stir the eggs with sugar and add the milk. Then start adding the flour (very slowly), stirring the mixture. Now everything is ready for baking pancakes on the hot frying pan. Actually, the recipe for pancakes is not complicated at all, but you need some practice to make them well."
      },
      {
        letter: "B",
        text:
          "The circle has always been considered a holy shape in Russia. According to old beliefs, it protected people from evil. At Maslenitsa, the Russians made pancakes, decorated the wheels of their carts, and danced the khorovod (the round folk dance). The aim of all those ceremonies was to please the Sun so that it would be kinder to people. Another obvious reason for that is a very trivial one — most pans have always been made as a circle which is the most convenient geometrical shape."
      },
      {
        letter: "C",
        text:
          "Nowadays, people are getting more and more interested in learning about each other's holidays and cultures. Every year since 2009 to 2022, the Russian pianist and producer Balakleets organized a week-long celebration of Russian culture around London. The festival included various events from the world of music, art and cinema, along with a reception in the House of Commons. It was held at the same time as Maslenitsa and, of course, it included making and tasting pancakes."
      },
      {
        letter: "D",
        text:
          "Maslenitsa is one of the nicest holidays in Russia. It is connected with the tradition of baking pancakes. Hot, round, and golden pancakes look like little suns. It is believed that they help to warm up the frozen earth. In the old days, pancakes were cooked from buckwheat flour, which gave them a red colour. They were usually served with butter to make them taste soft and tender. Actually, the word Maslenitsa comes from maslo, which means butter in Russian."
      },
      {
        letter: "E",
        text:
          "Maslenitsa is celebrated for a whole week. The last day is Sunday and it is really a special day. According to tradition, people ask for forgiveness from all their close relatives and friends. They call each other, send messages and ask to forgive them for all the bad things they have done during the year. It sounds very sweet. Psychologists say that people should address their nearest and dearest more often and ask for forgiveness. It often helps to improve their relationship."
      },
      {
        letter: "F",
        text:
          "Maslenitsa is very popular with people of all ages. Originally Maslenitsa was a sad day to remember dead relatives. However, people needed more fun after the long and severe winter, which was over at last. They turned the sad holiday into the jolly Maslenitsa with pancakes. There was lots of entertainment — horse sleigh riding, snowball fighting, visiting relatives and eating pancakes. Now Maslenitsa is associated with the end of winter and the start of spring."
      }
    ],

    headlines: [
      { num: 1, text: "What do people celebrate at Maslenitsa?" },
      { num: 2, text: "How did the holiday get its name?" },
      { num: 3, text: "How do people decorate their houses for Maslenitsa?" },
      { num: 4, text: "Is it difficult to cook Maslenitsa pancakes?" },
      { num: 5, text: "Why are the pancakes round?" },
      { num: 6, text: "Why do people say Sorry at the end of the holiday?" },
      { num: 7, text: "Is Maslenitsa celebrated in other countries?" }
    ],

    key: { A: 4, B: 5, C: 7, D: 2, E: 6, F: 1 },
    extraHeadlineNum: 3,

    explanationsRu: {
      A: "Рецепт простой, нужна практика → вопрос 4.",
      B: "Круг, солнце и форма сковороды → вопрос 5.",
      C: "Фестиваль в Лондоне → вопрос 7.",
      D: "Maslenitsa от maslo, butter → вопрос 2.",
      E: "В воскресенье просят прощения → вопрос 6.",
      F: "Конец зимы и начало весны → вопрос 1."
    },

    extraExplainRu:
      "Лишний вопрос <strong>3</strong> (украшение домов) — ни один текст про это не говорит."
  });
})(typeof window !== "undefined" ? window : this);
