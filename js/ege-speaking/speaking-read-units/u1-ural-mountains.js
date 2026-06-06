(function (w) {
  var pack = w.__EGE_SPEAKING_READ_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u1-ural-mountains",
    unitLabel: "Unit 1",
    title: "The Ural Mountains",
    lead:
      "Задание 1 · чтение вслух. Текст про Уральские горы — типичный формат ЕГЭ (~145 слов, 2 абзаца).",
    paragraphs: [
      "The Ural Mountains of Russia form the traditional boundary between Europe and Asia. The Urals are about 2,500 kilometres long. They extend from the Kara Sea in the north to the Ural River in the south. The highest peak is Mount Narodnaya at 1,895 metres.",
      "The northern slopes of the Urals are mostly covered with forests. Common trees include oak, linden, elm, fir, pine, and spruce. Treeless land called tundra is found in the far north, especially at high elevations. Arctic foxes, reindeer, brown bears, lynx, wolverines, and elk are among the animals of the range. A couple of centuries ago, the fauna was richer than it is today. Farming, hunting, and deforestation destroyed the habitats of many animals. Wild horses have disappeared. Herds of deer have migrated deep into the tundra. At the same time, hamsters and field mice have spread in the land now used for farming."
    ],
    prepareSeconds: 90,
    readSeconds: 90,
    trickySpots: [
      {
        id: "ural",
        label: "Ural Mountains / Urals",
        match: ["ural mountains", "urals"],
        hint: "Йура́л — ударение на первый слог. The Urals are…"
      },
      {
        id: "boundary",
        label: "boundary",
        match: ["boundary"],
        hint: "BOUND-ary — граница между Europe and Asia."
      },
      {
        id: "2500",
        label: "2,500 kilometres",
        match: ["2,500", "2500", "kilometres"],
        hint: "Two thousand five hundred kilometres — не two thousand and five hundred."
      },
      {
        id: "kara",
        label: "Kara Sea",
        match: ["kara sea"],
        hint: "KAH-ra Sea — от севера."
      },
      {
        id: "ural-river",
        label: "Ural River",
        match: ["ural river"],
        hint: "Река Урал — to the south."
      },
      {
        id: "narodnaya",
        label: "Mount Narodnaya",
        match: ["mount narodnaya", "narodnaya"],
        hint: "Mount nar-RAD-nya — highest peak."
      },
      {
        id: "1895",
        label: "1,895 metres",
        match: ["1,895", "1895", "metres"],
        hint: "One thousand eight hundred and ninety-five metres."
      },
      {
        id: "linden",
        label: "linden",
        match: ["linden"],
        hint: "LIND-en — в списке деревьев, rising intonation до spruce."
      },
      {
        id: "tundra",
        label: "tundra",
        match: ["tundra"],
        hint: "TUN-dra — treeless land in the far north."
      },
      {
        id: "elevations",
        label: "elevations",
        match: ["elevations"],
        hint: "el-e-VAY-shions — at high elevations."
      },
      {
        id: "lynx",
        label: "lynx",
        match: ["lynx"],
        hint: "Links — дикая кошка в списке animals."
      },
      {
        id: "wolverines",
        label: "wolverines",
        match: ["wolverines"],
        hint: "WOL-ver-ines — не путать с wolves."
      },
      {
        id: "fauna",
        label: "fauna",
        match: ["fauna"],
        hint: "FAW-na — animal life of the range."
      },
      {
        id: "deforestation",
        label: "deforestation",
        match: ["deforestation"],
        hint: "dee-for-est-AY-shun — destroyed the habitats."
      },
      {
        id: "habitats",
        label: "habitats",
        match: ["habitats"],
        hint: "HAB-i-tats — места обитания animals."
      }
    ],
    selfCheck: [
      "Я прочитал(а) текст до конца за отведённое время",
      "Я сделал(а) паузы и rising intonation в списках (trees / animals)",
      "Числа 2,500 и 1,895 прочитаны правильно",
      "Ударения в сложных словах (Narodnaya, tundra, deforestation) проверены",
      "Интонация в конце предложений — falling, не «вопросительная»"
    ]
  });
})(typeof window !== "undefined" ? window : this);
