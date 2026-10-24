/**
 * OGE Reading · Unit 6 · Task 12 · The Arctic.
 * Трубанёва 2026 · Вариант 6. Текст слово в слово.
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u6-variant6-reading-match",
    unitOrder: 6,
    title: "Unit 6 · The Arctic",
    instructionHtml:
      "<strong>Задание 12.</strong> Определите, в каком из текстов <strong>A–F</strong> содержатся ответы на вопросы <strong>1–7</strong>. Один вопрос останется без ответа.",

    paragraphs: [
      {
        letter: "A",
        text:
          "The Arctic is not just a cold territory — it looks nothing like any other place on the Earth. There are no days and nights in the usual sense — the polar day and polar night last six months each. The Arctic life is characterized by short summers and long, cold winters, with temperatures well below freezing. In the summer, due to the long days of sunshine, the upper layer of the land thaws a bit, which makes it possible for some plants to grow."
      },
      {
        letter: "B",
        text:
          "The huge territory of the Arctic region is almost entirely covered by water, much of which is frozen. Lately, due to climate change, the ice covering has been reducing dramatically. The ice zones are getting smaller and the ice layers are getting thinner. Scientists say that the temperatures in the Arctic continue to rise, which, in their opinion, may trigger all sorts of extreme weather far beyond the Arctic."
      },
      {
        letter: "C",
        text:
          "The Arctic is a remote, cold and harsh territory, but for some reason, it has always attracted people. There are lots of books and films about that mysterious place. However, we don't know much about the Arctic and even its name is misleading. It would be logical to suppose that the Arctic comes from the Greek word Arktos, which means bear, but it's not like that! Most researchers believe that the name refers to two groups of stars — Little Bear and Great Bear."
      },
      {
        letter: "D",
        text:
          "Despite the harsh and cold climate, about four million people call the Arctic their home. Native people tend to live in small settlements and towns. In the 1900s, many people from different countries moved to the Arctic and settled there due to the development of mining, oil drilling and other industries. Since then, lots of oil, gas and minerals, such as copper, nickel and zinc have been extracted."
      },
      {
        letter: "E",
        text:
          "People who are not keen on geography may confuse the Arctic and Antarctica, which is not surprising — both territories are very cold and are covered with ice. But they are very different indeed! Antarctica is in the Southern hemisphere and it's a continent, which means the ice lies on the land. While the Arctic is at the cap of the Northern hemisphere and there's no land under the thick ice — the Arctic is the frozen ocean with some patches of land surrounding it."
      },
      {
        letter: "F",
        text:
          "In fact, the Arctic is extremely poor in vegetation but it's not a desert at all! The ice and water territories of the Arctic are inhabited by many animals. There are bowhead whales, beluga whales, walruses, polar bears and others. They are perfectly adapted to the harsh living conditions but are helpless to fight against people's expanding activities and global warming. Recently, the Russian Arctic National Park was created, which gives the animals a better chance to survive."
      }
    ],

    headlines: [
      { num: 1, text: "What does the name of the region mean?" },
      { num: 2, text: "What is the symbol of the Arctic?" },
      { num: 3, text: "Where is the Arctic located?" },
      { num: 4, text: "What is the climate like in the Arctic?" },
      { num: 5, text: "What natural resources is the Arctic rich in?" },
      { num: 6, text: "Does the fauna of the Arctic need protection?" },
      { num: 7, text: "How does global warming affect the Arctic?" }
    ],

    key: { A: 4, B: 7, C: 1, D: 5, E: 3, F: 6 },
    extraHeadlineNum: 2,

    explanationsRu: {
      A: "Полярный день и ночь, короткое лето → вопрос 4.",
      B: "Лёд тает, температура растёт → вопрос 7.",
      C: "Имя от звёзд Little Bear и Great Bear, не от греческого bear → вопрос 1.",
      D: "Нефть, газ, медь, никель, цинк → вопрос 5.",
      E: "Где лежит Арктика и чем она не Антарктида → вопрос 3.",
      F: "Животные не справляются с потеплением, создан парк → вопрос 6."
    },

    extraExplainRu:
      "Лишний вопрос <strong>2</strong> (символ Арктики) — ни один текст его не называет."
  });
})(typeof window !== "undefined" ? window : this);
