/**
 * OGE Reading · Unit 7 · Task 12 · New Zealand.
 * Трубанёва 2026 · Вариант 7. Текст слово в слово.
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u7-variant7-reading-match",
    unitOrder: 7,
    title: "Unit 7 · New Zealand",
    instructionHtml:
      "<strong>Задание 12.</strong> Определите, в каком из текстов <strong>A–F</strong> содержатся ответы на вопросы <strong>1–7</strong>. Один вопрос останется без ответа.",

    paragraphs: [
      {
        letter: "A",
        text:
          "It started at a school in 1823. A boy by the name of William Webb Willis felt bored with kicking a soccer ball, so he picked it up and ran with it. Actually, he had invented a new game, though at that time nobody knew about that. Today, rugby is the national sport of New Zealand. Adults and children adore watching it. Meanwhile, golf is the most popular participation sport in the country. It's the No.1 sport for men and the No.2 sport for women, just behind netball."
      },
      {
        letter: "B",
        text:
          "This word is used for absolutely different things. Kiwi is a slang word for a New Zealander. It is also the name of a New Zealand's native flightless bird. And we all know an exotic fruit named kiwi too! In fact, the local people call the fruit kiwifruit. Though it sounds surprising, the kiwifruit is not native to New Zealand — it comes from China. Nowadays, New Zealand exports the kiwifruit and it earns the country over a billion dollars a year."
      },
      {
        letter: "C",
        text:
          "New Zealand is located in the south-western part of the Pacific Ocean. The Maoris, the aboriginal inhabitants, called their land Aotearoa, which means 'land of the long white cloud'. It was first discovered by Europeans in 1642 when a Dutch sailor, Abel Tasman, arrived. However, he had to leave New Zealand very soon after several sailors from his crew were killed by Maoris. It was not until 1769 that English Captain James Cook arrived and marked the land on the map."
      },
      {
        letter: "D",
        text:
          "According to the latest data, there are about 600,000 Maori people. The Maori cherish their numerous old customs. One of the most famous is a greeting ritual called the Powhiri. In it, the aboriginals shake hands, kiss each other once on the cheek, or do a hongi. This is done by pressing one's nose and forehead (at the same time) to another person. The hongi literally means 'sharing of breath' and that the other person is no longer considered a visitor but a part of the community."
      },
      {
        letter: "E",
        text:
          "New Zealand is known for its landscape and national parks, Maori culture, clear water and unique wildlife. Amusingly, New Zealanders are called Kiwis. The country has three official languages: English, Maori and New Zealand Sign Language. It might be useful to know that New Zealand English sounds neither like American nor British English. The main distinguishing feature of the New Zealand dialect is that the speakers shorten the words so that they end in 'o', 'y' or 'ie'."
      },
      {
        letter: "F",
        text:
          "One of New Zealand's desserts is a meringue cake topped with whipped cream and fresh fruit slices. It's really very famous and popular with locals and tourists because it is delicious and has got a story behind it. The dessert was named in honour of the Russian ballerina Anna Pavlova who visited New Zealand in the 1920s. The people of faraway islands were deeply impressed by the talented ballet dancer who introduced traditions of the Russian ballet to them."
      }
    ],

    headlines: [
      { num: 1, text: "When did New Zealand appear on the maps?" },
      { num: 2, text: "How does New Zealand English differ from the other versions?" },
      { num: 3, text: "What product does New Zealand sell globally?" },
      { num: 4, text: "What is the national symbol of New Zealand?" },
      { num: 5, text: "What sports are popular in New Zealand?" },
      { num: 6, text: "What local traditions should a tourist be aware of?" },
      { num: 7, text: "Is there any link between Russian and New Zealand's culture?" }
    ],

    key: { A: 5, B: 3, C: 1, D: 6, E: 2, F: 7 },
    extraHeadlineNum: 4,

    explanationsRu: {
      A: "Регби и гольф → вопрос 5.",
      B: "Экспорт киви на миллиард долларов → вопрос 3.",
      C: "Кук нанёс землю на карту в 1769 → вопрос 1.",
      D: "Ритуал Powhiri и hongi → вопрос 6.",
      E: "Диалект: слова на o, y, ie → вопрос 2.",
      F: "Десерт в честь Анны Павловой → вопрос 7."
    },

    extraExplainRu:
      "Лишний вопрос <strong>4</strong> (национальный символ) — ни один текст его не называет."
  });
})(typeof window !== "undefined" ? window : this);
