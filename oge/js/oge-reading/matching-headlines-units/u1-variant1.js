/**
 * OGE Reading · Unit 1 · Task 12 · Kremlin New Year tree.
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u1-variant1-reading-match",
    unitOrder: 1,
    title: "Unit 1 · Kremlin New Year tree",
    instructionHtml:
      "<strong>Задание 12.</strong> Определите, в каком из текстов <strong>A–F</strong> содержатся ответы на вопросы <strong>1–7</strong>. Один вопрос останется без ответа.",

    paragraphs: [
      {
        letter: "A",
        text:
          "After the New Year tree is safely assembled in Sobornaya Square, it is dressed in lights and about three thousand colourful ornaments. Most of the ornaments are hand-made, and the craftsmen create them according to a special order. Most items are used for more than one season. The New Year baubles can be in the colours of the state flag or they can display the scenes from Russian folk tales."
      },
      {
        letter: "B",
        text:
          "Each December, the decorated New Year tree is placed in Sobornaya Square. Transporting such a big tree to the Kremlin is challenging, and the safety measures are always observed. The tree is carried on a long vehicle, which is escorted by Father Frost's festive carriage. Father Frost carries a special allowance scroll. When the procession arrives at the Kremlin wall, he passes the scroll to the guard to let the tree in."
      },
      {
        letter: "C",
        text:
          "It has become a tradition to install the New Year tree in Sobornaya Square in the Kremlin. The tree should be perfect, and the people who organise the event choose it very carefully. They start looking for it in the summer! Indeed, to look impressive, the fir tree should be huge. The foresters of the Moscow region usually look for the one about 30 metres high, with a perimeter of about 10 metres. To grow that large, the tree has to be rather old."
      },
      {
        letter: "D",
        text:
          "Another well-known Kremlin tradition is a special New Year Event for children. The kids of all ages enjoy wonderful performances staged by famous producers, musicians and dancers. The little guests are delighted to get the presents — colourful tins with sweets and chocolates."
      },
      {
        letter: "E",
        text:
          "When the celebrations are over, thousands of baubles and a kilometre of garlands go from the Kremlin New Year Tree straight into the storage boxes. The tree itself is not thrown away either. The valuable wood is used to make hockey clubs and photo frames. The fir needles are good as an alternative bedding for animals on the farm. Even the seeds from the cones are used to plant new trees. They may grow and come to the Kremlin again, 100 years later!"
      },
      {
        letter: "F",
        text:
          "It's common knowledge that the tradition of decorating the New Year tree in Russia comes from Peter the Great. It was disrupted for a few decades, but fortunately was restored in the middle of the 20th century. Nowadays, the New Year celebration in the Kremlin is taken very seriously and the Administration of the President is in charge of it. In fact, they supervise the whole event, including transportation, decoration and utilisation of the tree."
      }
    ],

    headlines: [
      { num: 1, text: "What are the requirements for the Kremlin New Year tree?" },
      { num: 2, text: "How is the New Year tree delivered to the Kremlin?" },
      { num: 3, text: "Who is responsible for the New Year tree decoration?" },
      { num: 4, text: "What is the New Year tree decorated with?" },
      { num: 5, text: "What public events are organized in the Kremlin during New Year holidays?" },
      { num: 6, text: "Where can one buy a ticket for the New Year performance in the Kremlin?" },
      { num: 7, text: "What happens to the New Year tree after the holiday season?" }
    ],

    key: { A: 4, B: 2, C: 1, D: 5, E: 7, F: 3 },
    extraHeadlineNum: 6,

    explanationsRu: {
      A: "Украшения и ornaments → вопрос 4.",
      B: "Доставка на vehicle → вопрос 2.",
      C: "Требования к размеру и выбору → вопрос 1.",
      D: "Детское мероприятие → вопрос 5.",
      E: "После праздников — переработка → вопрос 7.",
      F: "Administration of the President → вопрос 3."
    },

    extraExplainRu:
      "Лишний вопрос <strong>6</strong> (билеты на performance) — ни один текст не про покупку билетов."
  });
})(typeof window !== "undefined" ? window : this);
