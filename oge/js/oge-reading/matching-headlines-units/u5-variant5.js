/**
 * OGE Reading · Unit 5 · Task 12 · Australia.
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u5-variant5-reading-match",
    unitOrder: 5,
    title: "Unit 5 · Australia",
    instructionHtml:
      "<strong>Задание 12.</strong> Определите, в каком из текстов <strong>A–F</strong> содержатся ответы на вопросы <strong>1–7</strong>. Один вопрос останется без ответа.",

    paragraphs: [
      {
        letter: "A",
        text:
          "The history of Australia is quite complicated. The ancestors of the contemporary Australians came to the continent from all over the world, and the aboriginal tribes had lived there long before the immigrants came. Nowadays, the majority of Australians speak English, which is the national language of the country, but not the official one, as it is not registered in the Constitution. Along with English, there are about 250 Aboriginal languages spoken in the country."
      },
      {
        letter: "B",
        text:
          "Due to Australia's warm climate, children and grown-ups like spending time outdoors and enjoy sports. They go swimming, surfing, sailing and play tennis, cricket, and rugby. Also, Australians have their version of football — Australian Rules Football. According to their rules, the game is between two teams of 18 players competing on an oval pitch. The fundamental rule is that the players can touch the ball with any part of their bodies."
      },
      {
        letter: "C",
        text:
          "Most tourists coming to Australia want to see the world's largest coral reef. It is called the Great Barrier Reef and it is really great — about the size of 70 million football fields. Can you imagine? The Great Barrier Reef is home to thousands of different species, including some of the deadliest animals in the ocean. The Great Barrier Reef is on the UNESCO World Heritage site and is listed as one of the seven natural wonders of the world."
      },
      {
        letter: "D",
        text:
          "Australia occupies the whole continent. Together with New Zealand, Australia is sometimes called The Land Down Under due to its position in the southern hemisphere. Indeed, it looks like those two 'sit below' the other countries on the map. The continent is washed by the Indian Ocean and the Pacific Ocean. Whether it borders the Antarctic Ocean is still a disputable issue."
      },
      {
        letter: "E",
        text:
          "Australia's relief is very diverse. There are great deserts, beautiful rainforests and high snow capped mountains. There are areas with record-high temperatures. Due to its huge size, the country has several climatic zones. Most territories have four seasons (autumn, spring, summer and winter), although the tropical north has just two: wet season and dry season."
      },
      {
        letter: "F",
        text:
          "Australia is famous for its diverse wildlife, which includes unique animals like the kangaroo, emu, and koala. Interestingly, there are twice as many kangaroos as people in Australia! The image of the kangaroo can be seen everywhere — on the coins, stamps and various logos. The kangaroo is known for its ability to cover vast distances and move quickly, so its image symbolizes progress and moving forward."
      }
    ],

    headlines: [
      { num: 1, text: "Where on the globe can we find Australia?" },
      { num: 2, text: "What is the well-known symbol of Australia?" },
      { num: 3, text: "What is the official language of the country?" },
      { num: 4, text: "What natural wonder is Australia famous for?" },
      { num: 5, text: "What Australian animals are endangered?" },
      { num: 6, text: "What is the climate in Australia like?" },
      { num: 7, text: "What sports do Australians prefer?" }
    ],

    key: { A: 3, B: 7, C: 4, D: 1, E: 6, F: 2 },
    extraHeadlineNum: 5,

    explanationsRu: {
      A: "English — national, not official → вопрос 3.",
      B: "Swimming, surfing, rugby… → вопрос 7.",
      C: "Great Barrier Reef → вопрос 4.",
      D: "Land Down Under, southern hemisphere → вопрос 1.",
      E: "Climatic zones, seasons → вопрос 6.",
      F: "Kangaroo on coins and logos → вопрос 2."
    },

    extraExplainRu:
      "Лишний вопрос <strong>5</strong> (endangered animals) — ни один текст не отвечает."
  });
})(typeof window !== "undefined" ? window : this);
