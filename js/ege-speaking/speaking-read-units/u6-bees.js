(function (w) {
  var pack = w.__EGE_SPEAKING_READ_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u6-bees",
    unitLabel: "Unit 6",
    title: "How bees communicate",
    lead:
      "Задание 1 · чтение вслух. Пчёлы и waggle dance — 2 абзаца.",
    paragraphs: [
      "Bees are incredibly important insects that play a vital role in our world. There are over 20,000 different bee species, all with different shapes, sizes, and colours. Unlike humans, who use words, bees communicate through a combination of movement, scent, and touch.",
      "One of the most famous bee dances is the 'waggle dance'. When a bee finds a good source of nectar, it returns to the hive and performs a special dance in the shape of a figure eight. The direction of the waggle tells other bees the direction of the food source relative to the position of the sun. The length of the dance tells them how far away the food is \u2014 the longer the dance, the further the journey! This amazing 'bee language' allows them to work together to find food and keep the hive healthy. In addition to the waggle dance, bees also use special scents to communicate danger, signal the presence of their queen, and even warn other bees about bad-tasting flowers."
    ],
    prepareSeconds: 90,
    readSeconds: 90,
    trickySpots: [
      {
        id: "20000",
        label: "20,000 bee species",
        match: ["20,000", "20000"],
        hint: "Twenty thousand — over 20,000 different bee species."
      },
      {
        id: "colours",
        label: "colours",
        match: ["colours"],
        hint: "CO-lours — British spelling."
      },
      {
        id: "scent",
        label: "scent and touch",
        match: ["scent"],
        hint: "SCENT — movement, scent, and touch (rising list)."
      },
      {
        id: "waggle",
        label: "'waggle dance'",
        match: ["waggle dance", "waggle"],
        hint: "WAG-gle dance — figure eight in the hive."
      },
      {
        id: "nectar",
        label: "source of nectar",
        match: ["nectar"],
        hint: "NEC-tar — good source of nectar."
      },
      {
        id: "figure-eight",
        label: "figure eight",
        match: ["figure eight"],
        hint: "FIG-ure EIGHT — shape of the dance."
      },
      {
        id: "relative",
        label: "relative to the position of the sun",
        match: ["relative"],
        hint: "REL-a-tive — direction relative to the sun."
      },
      {
        id: "further",
        label: "the further the journey",
        match: ["further"],
        hint: "FUR-ther — British; the longer the dance, the further…"
      },
      {
        id: "bee-language",
        label: "'bee language'",
        match: ["bee language"],
        hint: "Bee LANGUAGE — пауза; amazing 'bee language'."
      },
      {
        id: "bad-tasting",
        label: "bad-tasting flowers",
        match: ["bad-tasting", "bad tasting"],
        hint: "BAD-TAST-ing — warn about bad-tasting flowers."
      }
    ],
    selfCheck: [
      "Я прочитал(а) текст до конца за отведённое время",
      "20,000 прочитано правильно",
      "waggle dance и figure eight — чётко и с паузами",
      "Пауза перед the longer the dance, the further the journey",
      "Интонация в конце — falling; восклицание на journey — умеренно"
    ]
  });
})(typeof window !== "undefined" ? window : this);
