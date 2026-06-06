(function (w) {
  var pack = w.__EGE_SPEAKING_READ_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u12-football-history",
    unitLabel: "Unit 12",
    title: "Football history",
    lead:
      "Задание 1 · чтение вслух. История футбола — 3 абзаца.",
    paragraphs: [
      "Football (or soccer as the game is called in some parts of the world) has a long history. Football in its current form arose in England in the middle of the 19th century. But alternative versions of the game existed much earlier and are a part of the football history..",
      "The first known examples of a team game involving a ball, which was made out of a rock, occurred in ancient cultures over 3,000 years ago in pre-Columbian America. In some ritual occasions, the ball would symbolize the sun and the captain of the losing team would be sacrificed to the gods. A unique feature of these ball game versions was a bouncing ball made of rubber no other early culture had access to rubber.",
      "The first known ball game which also involved kicking took place in China in the 3rd century BC. It was played with a round ball on an area of a square."
    ],
    prepareSeconds: 90,
    readSeconds: 90,
    trickySpots: [
      {
        id: "soccer",
        label: "soccer",
        match: ["soccer"],
        hint: "SOC-cer — or soccer as the game is called…"
      },
      {
        id: "19th",
        label: "19th century",
        match: ["19th century", "19th"],
        hint: "NINE-teenth century — England, middle of the 19th century."
      },
      {
        id: "pre-columbian",
        label: "pre-Columbian America",
        match: ["pre-columbian", "pre columbian"],
        hint: "pre-co-LUM-bi-an — over 3,000 years ago."
      },
      {
        id: "3000",
        label: "3,000 years ago",
        match: ["3,000", "3000"],
        hint: "Three thousand years ago."
      },
      {
        id: "symbolize",
        label: "symbolize the sun",
        match: ["symbolize"],
        hint: "SYM-bo-lize — ritual occasions."
      },
      {
        id: "sacrificed",
        label: "sacrificed to the gods",
        match: ["sacrificed"],
        hint: "SAC-ri-ficed — captain of the losing team."
      },
      {
        id: "rubber",
        label: "ball made of rubber",
        match: ["rubber"],
        hint: "RUB-ber — bouncing ball made of rubber… had access to rubber."
      },
      {
        id: "3rd-century",
        label: "3rd century BC",
        match: ["3rd century bc", "3rd century"],
        hint: "THIRD century B C — China."
      },
      {
        id: "involving",
        label: "involving kicking",
        match: ["involving kicking", "involving"],
        hint: "in-VOLV-ing — ball game which also involved kicking."
      }
    ],
    selfCheck: [
      "Я прочитал(а) текст до конца за отведённое время",
      "3,000 и 3rd century BC прочитаны правильно",
      "pre-Columbian, sacrificed, rubber — без запинки",
      "Паузы между тремя абзацами (England → America → China)",
      "Интонация в конце — falling"
    ]
  });
})(typeof window !== "undefined" ? window : this);
