/**
 * OGE Reading · Unit 4 · Task 12 · Water.
 */
(function (w) {
  var pack = w.__EGE_READING_MATCHING_HEADLINES__;
  if (!pack || !Array.isArray(pack.units)) return;

  pack.units.push({
    id: "u4-variant4-reading-match",
    unitOrder: 4,
    title: "Unit 4 · Water",
    instructionHtml:
      "<strong>Задание 12.</strong> Определите, в каком из текстов <strong>A–F</strong> содержатся ответы на вопросы <strong>1–7</strong>. Один вопрос останется без ответа.",

    paragraphs: [
      {
        letter: "A",
        text:
          "Water pollution is very widespread and causes lots of problems to nature and people. Industrial waste from plants, oil spills, and lots of plastic litter in the water poison the planet. The pollution makes water unsuitable for drinking and bathing. Polluted water may cause diseases and even human deaths. The scientists claim that water pollution kills around 10,000 people around the world every day."
      },
      {
        letter: "B",
        text:
          "Earth is often called the blue planet due to the great amount of water it has. Until recently, scientists believed that it appeared after the first galaxies were formed. The latest studies, however, prove the opposite. Scientists used computer simulations and found out that water as a substance appeared billions of years earlier, at the time of the first explosion. The freed oxygen molecules accumulated, which eventually led to the formation of water."
      },
      {
        letter: "C",
        text:
          "Though the amount of water on the planet is impressive, the sources of fresh drinking water are quite limited. We should be wise when using it. It isn't difficult to start saving water. All we need to do is to change some of our habits. Just don't forget to turn off the tap while brushing your teeth, take a faster shower and avoid disposable bottles. As easy as that."
      },
      {
        letter: "D",
        text:
          "From ancient times, people wanted to know whether life exists somewhere beyond the Earth. Naturally, the search for extraterrestrials goes hand-in-hand with the search for water in space. The presence of water is crucial as it is a fundamental condition for the existence of life. The explorations of the Solar System have proved that water exists on some of its objects. Together with oxygen and a source of energy, it creates the necessary conditions for life to appear."
      },
      {
        letter: "E",
        text:
          "Though water is a clear substance, it may look different. As water can reflect sun rays, the seas sometimes look blue or green or golden. In the mountains, waterfalls look crystal clear or white. Lowland and desert rivers carry a lot of sand and clay, which makes the water yellowish and muddy. Rivers in the jungle can be black as they run through forest areas, and lots of wood gets into them."
      },
      {
        letter: "F",
        text:
          "Water looks like a simple thing. Indeed, it is just a transparent liquid with no smell or taste. This liquid, however, is the basis of all living things on our planet. No animal, insect, plant or human can survive without it. Water is also a safe and renewable source of energy and is crucial for all industries. Even the information technology sector needs it. Did you know that purified water is used for cleaning microchips?"
      }
    ],

    headlines: [
      { num: 1, text: "When did water appear in the Universe?" },
      { num: 2, text: "Why is water so important for us?" },
      { num: 3, text: "What colour is water?" },
      { num: 4, text: "Where is the largest source of drinking water?" },
      { num: 5, text: "Is there water on the other planets?" },
      { num: 6, text: "Why is water pollution dangerous?" },
      { num: 7, text: "What can we do to save water?" }
    ],

    key: { A: 6, B: 1, C: 7, D: 5, E: 3, F: 2 },
    extraHeadlineNum: 4,

    explanationsRu: {
      A: "Pollution, diseases → вопрос 6.",
      B: "First explosion → вопрос 1.",
      C: "Saving water habits → вопрос 7.",
      D: "Water in the Solar System → вопрос 5.",
      E: "Blue, green, golden… → вопрос 3.",
      F: "Basis of all living things → вопрос 2."
    },

    extraExplainRu:
      "Лишний вопрос <strong>4</strong> (largest source of drinking water) — ни один текст не отвечает."
  });
})(typeof window !== "undefined" ? window : this);
