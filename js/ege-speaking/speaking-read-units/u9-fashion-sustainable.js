(function (w) {
  var pack = w.__EGE_SPEAKING_READ_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u9-fashion-sustainable",
    unitLabel: "Unit 9",
    title: "Sustainable fashion",
    lead:
      "Задание 1 · чтение вслух. Мода и устойчивость — 2 абзаца.",
    paragraphs: [
      "The fashion industry is considered to be one of the fastest-growing industries today, yet it has faced some significant challenges throughout its history. It's not a secret that fashion industry takes its negative toll on the environment. Clothes production cannot cope with limited water consumption, and its carbon footprint increases daily. People buy tons of cheap garments which end up in landfills in less than a month. The situation might get worse if consumers don't change their habits in the coming years.",
      "There are some healthy fashion trends that may help to make fashion sustainable. Consumers are choosing brands that do not hurt animals and the planet in the process. The younger generation chooses second-hand shopping giving clothes another life. And brands promote recycling to save on raw material and natural resources."
    ],
    prepareSeconds: 90,
    readSeconds: 90,
    trickySpots: [
      {
        id: "fastest-growing",
        label: "fastest-growing",
        match: ["fastest-growing", "fastest growing"],
        hint: "FAST-est-GROW-ing — one of the fastest-growing industries."
      },
      {
        id: "toll",
        label: "negative toll",
        match: ["negative toll", "toll"],
        hint: "TOLL on the environment — негативное влияние."
      },
      {
        id: "consumption",
        label: "water consumption",
        match: ["consumption"],
        hint: "con-SUMP-tion — limited water consumption."
      },
      {
        id: "carbon",
        label: "carbon footprint",
        match: ["carbon footprint", "carbon"],
        hint: "CAR-bon FOOT-print — углеродный след."
      },
      {
        id: "landfills",
        label: "landfills",
        match: ["landfills"],
        hint: "LAND-fills — end up in landfills."
      },
      {
        id: "sustainable",
        label: "fashion sustainable",
        match: ["sustainable"],
        hint: "sus-TAY-na-ble — make fashion sustainable."
      },
      {
        id: "second-hand",
        label: "second-hand shopping",
        match: ["second-hand", "second hand"],
        hint: "SECOND-hand — younger generation chooses second-hand shopping."
      },
      {
        id: "raw-material",
        label: "raw material",
        match: ["raw material"],
        hint: "RAW ma-TE-rial — в тексте в единственном числе."
      }
    ],
    selfCheck: [
      "Я прочитал(а) текст до конца за отведённое время",
      "Пауза между проблемой (абзац 1) и trends (абзац 2)",
      "carbon footprint, landfills, sustainable — без запинки",
      "raw material — как в тексте (singular)",
      "Интонация в конце — falling"
    ]
  });
})(typeof window !== "undefined" ? window : this);
