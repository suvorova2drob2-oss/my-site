/**
 * OGE Reading · Unit 20 · Task 12 · The Swallow's Nest.
 * Трубанёва 2026 · Вариант 20. Текст слово в слово.
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u20-variant20-reading-match",
    unitOrder: 20,
    title: "Unit 20 · The Swallow's Nest",
    instructionHtml:
      "<strong>Задание 12.</strong> Определите, в каком из текстов <strong>A–F</strong> содержатся ответы на вопросы <strong>1–7</strong>. Один вопрос останется без ответа.",

    paragraphs: [
      {
        letter: "A",
        text:
          "The Swallow's Nest is the name of an old castle. You may be curious why it is called that. Is it because the place is popular with the small cute birds that like nesting under the roofs of houses? Not exactly. The castle itself is attached to a rock and reminds us of the nest of a swallow. The castle is not large, its height is about twelve meters, but you will never forget that elegant and airy construction in Neo-Gothic style, attached to the edge of the high rock over the sea."
      },
      {
        letter: "B",
        text:
          "The earthquake which happened in 1927 caused a huge crack in the rock and the Swallow's nest was closed to the public for about 40 years. Fortunately, the castle itself was almost undamaged. The amazing construction, created by the architect Leonid Sherwood, was surprisingly strong and able to survive through the disaster. Leonid Sherwood, born in Moscow in 1871, was also well-known as a sculptor, famous for his monumental art projects."
      },
      {
        letter: "C",
        text:
          "For a long time after the earthquake the Swallow's Nest was practically inaccessible to the public. Safe visiting of the castle only became possible again when the cliff was reinforced with concrete. It is possible to access the cliff by boat or by The Tsar's Path which was created in 1861 for the Russian Tsar Alexander III. Nowadays the path starts out at Livadia Palace and runs for 6.7 kilometers, 150 meters above the sea."
      },
      {
        letter: "D",
        text:
          "The Swallow's Nest is one of the main tourist attractions in Crimea. Nobody lives there now, but originally the castle was built for Baron von Steingel in 1912 and was sold two years after. Since the Revolution of 1917, the building has been used only as a place for excursions. The only exception was made for a local reading club that hosted their events in the castle. That did not last long for safety reasons as the place had survived a serious earthquake."
      },
      {
        letter: "E",
        text:
          "The Swallow's Nest is only 20 meters long and 10 meters wide. Inside, there is a foyer, a guest room, and two bedrooms. The staircase takes you from the ground floor to the tower. The space is arranged in elegant creamy and golden-brown colours. Beautiful wooden panels are the dominating elements of the decor. Though not a lot of people have visited the Swallow's Nest, many know how it looks from inside because it was featured in a few very popular films."
      },
      {
        letter: "F",
        text:
          "The Russian Tsar's family enjoyed spending summers in Crimea due to the sunny weather, wonderful air and the beautiful scenery of the place. Nowadays, the tourists visiting the Swallow's Nest say that the place is amazing in any weather. It looks grand in spring, autumn and summer. There is of course a risk of cold and windy winter days, when the sea is rough and grey, but the unpleasant weather does not usually last for long."
      }
    ],

    headlines: [
      { num: 1, text: "What does the Swallow's Nest look like?" },
      { num: 2, text: "When was the Swallow's Nest built?" },
      { num: 3, text: "Who designed the Swallow's Nest?" },
      { num: 4, text: "What is the interior of the Swallow's Nest like?" },
      { num: 5, text: "How can tourists get to the Swallow's Nest?" },
      { num: 6, text: "What season is the best for visiting the Swallow's Nest?" },
      { num: 7, text: "What cultural events are held in the Swallow's Nest nowadays?" }
    ],

    key: { A: 1, B: 3, C: 5, D: 2, E: 4, F: 6 },
    extraHeadlineNum: 7,

    explanationsRu: {
      A: "Вид замка: высота, неоготика, скала над морем → вопрос 1.",
      B: "Архитектор Леонид Шервуд → вопрос 3.",
      C: "Добраться лодкой или по Царской тропе → вопрос 5.",
      D: "Построен для барона фон Штейнгеля в 1912 → вопрос 2.",
      E: "Фойе, спальни, кремовые и золотисто-коричневые цвета → вопрос 4.",
      F: "Весна, осень и лето; зимой погода ненадолго портится → вопрос 6."
    },

    extraExplainRu:
      "Лишний вопрос <strong>7</strong> (культурные события сейчас) — читательский клуб в тексте уже не действует, нынешние события не описаны."
  });
})(typeof window !== "undefined" ? window : this);
