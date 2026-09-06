/**
 * OGE Reading · Unit 2 · Task 12 · Mountains.
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u2-variant2-reading-match",
    unitOrder: 2,
    title: "Unit 2 · Mountains",
    instructionHtml:
      "<strong>Задание 12.</strong> Определите, в каком из текстов <strong>A–F</strong> содержатся ответы на вопросы <strong>1–7</strong>. Один вопрос останется без ответа.",

    paragraphs: [
      {
        letter: "A",
        text:
          "Mountains not only add beauty to our planet but also perform important ecological functions. They act as natural barriers against massive soil movement, floods, and other environmental disasters. More than half of the world's fresh water comes from the mountains, and many major rivers are fed by mountain springs. Besides, you can find a wide range of plants and animals there."
      },
      {
        letter: "B",
        text:
          "Have you ever been to the mountains? Some people prefer plains, though others claim there's nothing more beautiful than mountains. Anyway, mountains are an important element of the natural relief of the planet and are homes to different plants, animals and people. There are about 100 large mountain ranges on the planet, and approximately one-tenth of the Earth's population lives on the mountain slopes."
      },
      {
        letter: "C",
        text:
          "Mountaineers say that mountains never look the same. They have their unique personalities and may change their mood. Indeed, even a person who knows nothing about mountains can see how different they are. Though marked brown on geographical maps, in reality, the mountains may look brown, green, blue, grey, and white. In the China National Geopark, one can find purple, terracotta, yellow and orange rocks."
      },
      {
        letter: "D",
        text:
          "People have always found mountains magnetic. More than 50 million holiday-makers go to the mountains each year. Summer or winter, nature is stunning and there are always lots of activities to do. Some people hike and climb, go mountain biking and horse riding there. The others enjoy skiing, and ski resorts are always full of tourists. There are also people who go to the mountains to watch and take photos of animals and birds."
      },
      {
        letter: "E",
        text:
          "Mountains support diverse wildlife. Different species of plants and animals can be found at different heights. They have adapted to the special conditions — cold temperatures, low oxygen and steep landscape. Bears, wolves, and snow leopards have thick fur that helps them endure the harsh climate. Mountain animals are amazing! Some of them, like goats, demonstrate superb climbing skills."
      },
      {
        letter: "F",
        text:
          "Mountains exist on every continent and even underwater. They are typically formed through tectonic plate movements, volcanic activity, or erosion. Of course, the process of mountain formation was much more rapid when our planet was younger, but it is still going on. Some mountains are getting a bit higher each year, and some are getting a bit shorter."
      }
    ],

    headlines: [
      { num: 1, text: "Are there many mountains on Earth?" },
      { num: 2, text: "How do mountains appear on the planet?" },
      { num: 3, text: "Are there mountains on other planets?" },
      { num: 4, text: "What colour can mountains be?" },
      { num: 5, text: "How do mountains influence the life of the planet?" },
      { num: 6, text: "What do the flora and fauna of mountains look like?" },
      { num: 7, text: "Why do mountains attract people?" }
    ],

    key: { A: 5, B: 1, C: 4, D: 7, E: 6, F: 2 },
    extraHeadlineNum: 3,

    explanationsRu: {
      A: "Экологические функции и вода → вопрос 5.",
      B: "100 ranges, population on slopes → вопрос 1.",
      C: "Brown, green, blue… → вопрос 4.",
      D: "Holiday-makers, activities → вопрос 7.",
      E: "Wildlife at different heights → вопрос 6.",
      F: "Tectonic plates, volcanic activity → вопрос 2."
    },

    extraExplainRu:
      "Лишний вопрос <strong>3</strong> (mountains on other planets) — в текстах не сказано."
  });
})(typeof window !== "undefined" ? window : this);
