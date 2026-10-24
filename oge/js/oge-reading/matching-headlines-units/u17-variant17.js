/**
 * OGE Reading · Unit 17 · Task 12 · Tea in Russia.
 * Трубанёва 2026 · Вариант 17. Текст слово в слово.
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u17-variant17-reading-match",
    unitOrder: 17,
    title: "Unit 17 · Tea in Russia",
    instructionHtml:
      "<strong>Задание 12.</strong> Определите, в каком из текстов <strong>A–F</strong> содержатся ответы на вопросы <strong>1–7</strong>. Один вопрос останется без ответа.",

    paragraphs: [
      {
        letter: "A",
        text:
          "China is the most famous tea importer, of course, but tea is cultivated not only there. Amazingly, tea is able to grow in much more northern places, even in Russia where, in 1814, the first tea plant was placed in Nikitsky Botanical Garden in Crimea. The first industrial Russian tea plantation was founded 70 years later, in 1885. Nowadays, the main area in Russia for tea production is in the Sochi area."
      },
      {
        letter: "B",
        text:
          "Historians say that in 1636, Russian Tsar Michael I sent his ambassador to a Mongolian ruler, Altyn Khan. When the ambassador's mission was over, Khan gave him nearly 70 kg of tea as a present for the Russian Tsar. At first, the Russian ambassador refused the present because he could not understand how the dead leaves could be used. However, Khan insisted and the tea was delivered to the Tsar."
      },
      {
        letter: "C",
        text:
          "Tea is more than just a drink for people. They have tea when they feel thirsty, they offer a cup of tea to their guests, and they drink it when they feel unwell and stressed out as a remedy. Tea contains many useful substances, such as essential oils, tannins, caffeine, vitamins, etc. Green tea, for example, protects teeth from caries and improves blood. It also has positive effects on the immune system."
      },
      {
        letter: "D",
        text:
          "Though there are some places in Russia where the climatic conditions allow growing tea, the amount of locally produced tea cannot meet the demands of the tea consumers. Most people believe that all the tea on the Russian market is provided by China, which is not true. Along with China, there are many other suppliers — Sri Lanka, India, Kenia, Vietnam and the list is not complete."
      },
      {
        letter: "E",
        text:
          "Russia has got its own symbol of the tea ceremony, which you can see in many pictures that depict the old Russian lifestyle. In modern Russia, people use kettles to boil water for tea, but in the 19–20th centuries samovars were very popular. The traditional samovar is a large metal container with a vertical pipe in the middle. Wood or coal in the pipe, used as fuel, kept the water hot for a long time."
      },
      {
        letter: "F",
        text:
          "Every year, Russians use 170,000 tons of dried tea leaves to make tea. And they make it in their own way, of course! Firstly, a quantity of dry tea, sufficient for several people, is brewed in a small teapot. Then, this concentrate is poured into the cups and some hot boiled water is added. Each person makes his tea as strong as he wants. Some sugar, lemon, honey or jam can be added to the taste."
      }
    ],

    headlines: [
      { num: 1, text: "How did tea appear in Russia?" },
      { num: 2, text: "What sorts of tea are popular in Russia?" },
      { num: 3, text: "Does tea grow in Russia?" },
      { num: 4, text: "How do people make tea in Russia?" },
      { num: 5, text: "What countries does Russia import tea from?" },
      { num: 6, text: "What devices do Russians use to make tea?" },
      { num: 7, text: "Why do people often use tea as a medicine?" }
    ],

    key: { A: 3, B: 1, C: 7, D: 5, E: 6, F: 4 },
    extraHeadlineNum: 2,

    explanationsRu: {
      A: "Чай растёт в Крыму и под Сочи → вопрос 3.",
      B: "Подарок Алтын-хана в 1636 году → вопрос 1.",
      C: "Чай пьют как средство, когда нездоровится → вопрос 7.",
      D: "Поставщики: Китай, Шри-Ланка, Индия, Кения, Вьетнам → вопрос 5.",
      E: "Самовар → вопрос 6.",
      F: "Как заваривают чай в России → вопрос 4."
    },

    extraExplainRu:
      "Лишний вопрос <strong>2</strong> (какие сорта чая популярны) — сорта по популярности не названы."
  });
})(typeof window !== "undefined" ? window : this);
