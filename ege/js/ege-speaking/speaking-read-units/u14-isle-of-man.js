(function (w) {
  var pack = w.__EGE_SPEAKING_READ_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u14-isle-of-man",
    unitLabel: "Unit 14",
    title: "The Isle of Man",
    lead:
      "Задание 1 · чтение вслух. Остров Мэн — 3 абзаца.",
    paragraphs: [
      "If you're not familiar with the Isle of Man, it's a green and pleasant island nation in the middle of the Irish Sea. At only about thirty miles long, it has an incredible choice of things to do and see especially if you're a fan of beautiful landscapes. A day trip around the Island can have you take in diverse and stunning landscapes and fascinating historical sites. For such a calm and peaceful island, it has a long history of conquest, kings, and ancient peoples.",
      "If you head all the way north, you'll get to the Point of Ayre. There you'll find a picturesque lighthouse on a long and open rocky beach.",
      "It takes seven hours and eighty miles to do a full tour around the Isle of Man. A full and action-packed day from the far north, right down to the south."
    ],
    prepareSeconds: 90,
    readSeconds: 90,
    trickySpots: [
      {
        id: "isle-of-man",
        label: "Isle of Man",
        match: ["isle of man"],
        hint: "ISLE of MAN — остров в Irish Sea."
      },
      {
        id: "irish-sea",
        label: "Irish Sea",
        match: ["irish sea"],
        hint: "IR-ish Sea — in the middle of the Irish Sea."
      },
      {
        id: "thirty-miles",
        label: "thirty miles long",
        match: ["thirty miles"],
        hint: "THIR-ty miles — about thirty miles long."
      },
      {
        id: "especially",
        label: "see especially if",
        match: ["especially"],
        hint: "es-PESH-ally — пауза: things to do and see, especially if…"
      },
      {
        id: "conquest",
        label: "history of conquest",
        match: ["conquest"],
        hint: "CON-quest — conquest, kings, and ancient peoples."
      },
      {
        id: "point-of-ayre",
        label: "Point of Ayre",
        match: ["point of ayre", "ayre"],
        hint: "Point of AIR — far north of the island."
      },
      {
        id: "picturesque",
        label: "picturesque lighthouse",
        match: ["picturesque"],
        hint: "pic-tur-ESQUE — picturesque lighthouse."
      },
      {
        id: "eighty-miles",
        label: "seven hours and eighty miles",
        match: ["seven hours", "eighty miles"],
        hint: "SEV-en hours and EIGHT-y miles — full tour."
      },
      {
        id: "action-packed",
        label: "action-packed day",
        match: ["action-packed", "action packed"],
        hint: "AC-tion-PACKED — full and action-packed day."
      }
    ],
    selfCheck: [
      "Я прочитал(а) текст до конца за отведённое время",
      "Isle of Man и Point of Ayre — чётко",
      "thirty miles / eighty miles — числа правильно",
      "Паузы между тремя абзацами",
      "Интонация в конце — falling"
    ]
  });
})(typeof window !== "undefined" ? window : this);
