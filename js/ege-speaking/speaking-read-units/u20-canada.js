(function (w) {
  var pack = w.__EGE_SPEAKING_READ_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u20-canada",
    unitLabel: "Unit 20",
    title: "Canada",
    lead:
      "Задание 1 · чтение всlух. Канада — история и народы, 2 абзаца.",
    paragraphs: [
      "Canada's original inhabitants are Indians. The very name Canada comes from a word meaning \"village\" in one of the local languages of Indian tribes. These tribes had lived on the territory of modern Canada before the first Europeans arrived in the 11th century. More Europeans came in the 16th century and were made welcome because they brought manufactured goods and traded them for furs and other native products. The Europeans settled down and gradually displaced Indians over the next 250 years.",
      "European settlers came in a series of waves. First were the French, followed by the English, and these two groups are considered the founding nations. France lost its part of the territory to Britain in a war in 1760, but most of the French-speaking colonists remained. Their effort to preserve their language and culture is still a continuing theme of Canadian history and has led in recent years to a movement to become independent from the rest of Canada."
    ],
    prepareSeconds: 90,
    readSeconds: 90,
    trickySpots: [
      {
        id: "inhabitants",
        label: "original inhabitants",
        match: ["inhabitants"],
        hint: "in-HAB-it-ants — Canada's original inhabitants."
      },
      {
        id: "village",
        label: "meaning \"village\"",
        match: ["village"],
        hint: "VIL-lage — the name Canada comes from a word meaning village."
      },
      {
        id: "11th",
        label: "11th century",
        match: ["11th century", "11th"],
        hint: "ELEVENTH century — first Europeans arrived."
      },
      {
        id: "16th",
        label: "16th century",
        match: ["16th century", "16th"],
        hint: "SIXTEENTH century — more Europeans came."
      },
      {
        id: "manufactured",
        label: "manufactured goods",
        match: ["manufactured"],
        hint: "man-u-FAC-tured goods — traded for furs."
      },
      {
        id: "displaced",
        label: "gradually displaced",
        match: ["displaced"],
        hint: "dis-PLACED — over the next 250 years."
      },
      {
        id: "250",
        label: "250 years",
        match: ["250"],
        hint: "Two hundred and fifty years."
      },
      {
        id: "founding",
        label: "founding nations",
        match: ["founding nations", "founding"],
        hint: "FOUND-ing NAY-shions — French and English."
      },
      {
        id: "1760",
        label: "1760",
        match: ["1760"],
        hint: "Seventeen sixty — war with Britain."
      },
      {
        id: "french-speaking",
        label: "French-speaking colonists",
        match: ["french-speaking", "french speaking"],
        hint: "FRENCH-SPEAK-ing colonists remained."
      },
      {
        id: "independent",
        label: "independent from the rest of Canada",
        match: ["independent"],
        hint: "in-de-PEND-ent — movement in recent years."
      }
    ],
    selfCheck: [
      "Я прочитал(а) текст до конца за отведённое время",
      "11th / 16th century и 1760 / 250 years — правильно",
      "founding nations, French-speaking — без запинки",
      "Пауза между абзацами (Indians → European settlers)",
      "Интонация в конце — falling"
    ]
  });
})(typeof window !== "undefined" ? window : this);
