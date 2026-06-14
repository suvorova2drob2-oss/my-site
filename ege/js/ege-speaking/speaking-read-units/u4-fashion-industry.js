(function (w) {
  var pack = w.__EGE_SPEAKING_READ_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u4-fashion-industry",
    unitLabel: "Unit 4",
    title: "The fashion industry",
    lead:
      "Задание 1 · чтение вслух. Мода и экология — 2 абзаца.",
    paragraphs: [
      "The fashion industry is considered to be one of the fastest-growing industries today, yet it has faced some significant challenges throughout its history. It's not a secret that fashion industry takes its negative toll on the environment. Clothes production cannot cope with limited water consumption, and its carbon footprint increases daily. People buy tons of cheap garments which end up in landfills in less than a month. The situation might get worse if consumers don't change their habits in the coming years.",
      "There are some healthy fashion trends that may help to make fashion sustainable. Consumers are choosing brands that do not hurt animals and the planet in the process. The younger generation chooses second-hand shopping giving clothes another life. And brands promote recycling to save on raw materials and natural resources."
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
        id: "throughout",
        label: "throughout its history",
        match: ["throughout"],
        hint: "through-OUT — на протяжении истории."
      },
      {
        id: "toll",
        label: "negative toll",
        match: ["negative toll", "toll"],
        hint: "TOLL on the environment — «негативное влияние»."
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
        id: "garments",
        label: "cheap garments",
        match: ["garments"],
        hint: "GAR-ments — одежда; tons of cheap garments."
      },
      {
        id: "landfills",
        label: "landfills",
        match: ["landfills"],
        hint: "LAND-fills — свалки; end up in landfills."
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
        hint: "SECOND-hand — секонд-хенд, без паузы внутри."
      },
      {
        id: "raw-materials",
        label: "raw materials",
        match: ["raw materials"],
        hint: "RAW ma-TE-ri-als — сырьё для recycling."
      }
    ],
    selfCheck: [
      "Я прочитал(а) текст до конца за отведённое время",
      "Пауза между проблемой (абзац 1) и решениями (абзац 2)",
      "carbon footprint, landfills, sustainable — без запинки",
      "second-hand shopping — прочитано как одно выражение",
      "Интонация в конце предложений — falling"
    ]
  });
})(typeof window !== "undefined" ? window : this);
