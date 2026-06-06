(function (w) {
  var pack = w.__EGE_SPEAKING_READ_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u10-polar-bear-climate",
    unitLabel: "Unit 10",
    title: "Polar bears and climate change",
    lead:
      "Задание 1 · чтение вслух. Белые медведи и климат — 2 абзаца.",
    paragraphs: [
      "A polar bear walks along a rocky shore, looking for food. The bear would usually be on the sea ice hunting for seals, pouncing when the seal comes up to breathe. But the ice has started to melt earlier and re-form later than it was in the past. Without the sea ice, the polar bear must scavenge for other, less nutritious food. These changes in polar sea ice are a result of climate change. But this isn't just affecting polar bears \u2014 climate change affects everyone.",
      "Changes in Earth's climate are caused by how much of the Sun's energy is absorbed by the atmosphere. In fact, over the past 650,000 years, our planet has gone through seven ice ages and warming periods. But during the past few hundred years, oil, gas, and coal have powered homes, cars, and factories. That increases Earth's temperature, which contributes to the planet's warming."
    ],
    prepareSeconds: 90,
    readSeconds: 90,
    trickySpots: [
      {
        id: "pouncing",
        label: "pouncing",
        match: ["pouncing"],
        hint: "POUN-cing — hunting for seals, pouncing when the seal comes up."
      },
      {
        id: "re-form",
        label: "re-form later",
        match: ["re-form", "reform"],
        hint: "RE-FORM — melt earlier and re-form later."
      },
      {
        id: "scavenge",
        label: "scavenge",
        match: ["scavenge"],
        hint: "SCAV-enge — искать остатки пищи; less nutritious food."
      },
      {
        id: "nutritious",
        label: "less nutritious",
        match: ["nutritious"],
        hint: "nu-TRISH-us — less nutritious food."
      },
      {
        id: "650000",
        label: "650,000 years",
        match: ["650,000", "650000"],
        hint: "Six hundred and fifty thousand years."
      },
      {
        id: "ice-ages",
        label: "ice ages",
        match: ["ice ages"],
        hint: "ICE ages — seven ice ages and warming periods."
      },
      {
        id: "atmosphere",
        label: "atmosphere",
        match: ["atmosphere"],
        hint: "AT-mos-phere — absorbed by the atmosphere."
      },
      {
        id: "contributes",
        label: "contributes to",
        match: ["contributes"],
        hint: "con-TRIB-utes — contributes to the planet's warming."
      },
      {
        id: "polar",
        label: "polar bear / polar sea ice",
        match: ["polar bear", "polar sea ice", "polar"],
        hint: "PO-lar — ударение на первый слог."
      },
      {
        id: "everyone",
        label: "affects everyone",
        match: ["everyone"],
        hint: "EV-ery-one — climate change affects everyone."
      }
    ],
    selfCheck: [
      "Я прочитал(а) текст до конца за отведённое время",
      "650,000 years прочитано правильно",
      "re-form, scavenge, nutritious — без запинки",
      "Пауза на тире: polar bears — climate change affects everyone",
      "Интонация в конце — falling"
    ]
  });
})(typeof window !== "undefined" ? window : this);
