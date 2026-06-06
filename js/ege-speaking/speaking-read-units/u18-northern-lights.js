(function (w) {
  var pack = w.__EGE_SPEAKING_READ_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u18-northern-lights",
    unitLabel: "Unit 18",
    title: "The Northern Lights",
    lead:
      "Задание 1 · чтение вслух. Северное сияние — 2 абзаца.",
    paragraphs: [
      "People have always told stories and legends to explain natural, but mysterious, occurrences such as the Northern Lights. The Vikings believed the Northern Lights were caused by the shining weapons of warriors. The Alaskan people thought the lights were the souls of salmon, deer and other animals. The Indians told the stories of giants living in the North and thought the lights were their torches.",
      "The Northern Lights are actually caused by electrons from solar winds. They are attracted to the poles by the magnetic fields found there. They mix with gases in the atmosphere which causes the gases to glow. The Northern Lights are most visible in the far north. They are typically green, purple, red or blue.."
    ],
    prepareSeconds: 90,
    readSeconds: 90,
    trickySpots: [
      {
        id: "occurrences",
        label: "mysterious occurrences",
        match: ["occurrences"],
        hint: "oc-CUR-rences — natural, but mysterious, occurrences."
      },
      {
        id: "vikings",
        label: "The Vikings",
        match: ["vikings"],
        hint: "VI-kings — shining weapons of warriors."
      },
      {
        id: "alaskan",
        label: "Alaskan people",
        match: ["alaskan"],
        hint: "a-LAS-kan — souls of salmon, deer and other animals."
      },
      {
        id: "salmon",
        label: "salmon",
        match: ["salmon"],
        hint: "SAM-on — в списке animals."
      },
      {
        id: "torches",
        label: "their torches",
        match: ["torches"],
        hint: "TOR-ches — lights were their torches."
      },
      {
        id: "electrons",
        label: "electrons from solar winds",
        match: ["electrons", "solar winds"],
        hint: "e-LEC-trons — SOL-ar winds."
      },
      {
        id: "magnetic",
        label: "magnetic fields",
        match: ["magnetic fields", "magnetic"],
        hint: "mag-NET-ic fields — attracted to the poles."
      },
      {
        id: "atmosphere",
        label: "gases in the atmosphere",
        match: ["atmosphere"],
        hint: "AT-mos-phere — causes the gases to glow."
      },
      {
        id: "purple",
        label: "green, purple, red or blue",
        match: ["purple"],
        hint: "Финальный список цветов — rising, then falling on blue.."
      }
    ],
    selfCheck: [
      "Я прочитал(а) текст до конца за отведённое время",
      "Northern Lights — одинаково в обоих абзацах",
      "legends (абзац 1) vs electrons (абзац 2) — разная интонация",
      "Список цветов: green, purple, red or blue",
      "Интонация в конце — falling (как в тексте: blue..)"
    ]
  });
})(typeof window !== "undefined" ? window : this);
