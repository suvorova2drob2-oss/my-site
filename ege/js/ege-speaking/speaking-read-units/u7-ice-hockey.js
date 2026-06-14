(function (w) {
  var pack = w.__EGE_SPEAKING_READ_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u7-ice-hockey",
    unitLabel: "Unit 7",
    title: "Ice hockey",
    lead:
      "Задание 1 · чтение вслух. История хоккея — 2 абзаца, числа и названия.",
    paragraphs: [
      "Ice hockey has a long history. It started on frozen lakes and rivers of Canadian winters in the 19th century. Now the games are played at high-tech arenas before 20,000 fans and are shown on TV. Though the rules and equipment have changed through the sport's 128-year history, the spirit of the game remains the same. Hockey has always been a sport of speed and grace mixed with a certain amount of violence.",
      "That combination has proven irresistible to fans for over a century. A crowd of 5,000 reportedly watched the first ever Stanley Cup competition in 1893. During the 2002/2003 season, attendance at national Hockey League games topped 20 million. The history of hockey holds more than just changing rules and regulations. A host of colourful characters, interesting traditions, and strange events mark hockey's timeline."
    ],
    prepareSeconds: 90,
    readSeconds: 90,
    trickySpots: [
      {
        id: "19th",
        label: "19th century",
        match: ["19th century", "19th"],
        hint: "NINE-teenth century — Canadian winters."
      },
      {
        id: "high-tech",
        label: "high-tech arenas",
        match: ["high-tech", "high tech"],
        hint: "HIGH-tech — современные арены."
      },
      {
        id: "20000-fans",
        label: "20,000 fans",
        match: ["20,000", "20000"],
        hint: "Twenty thousand fans — before 20,000 fans."
      },
      {
        id: "128-year",
        label: "128-year history",
        match: ["128-year", "128 year", "128"],
        hint: "One hundred and twenty-eight-year history."
      },
      {
        id: "irresistible",
        label: "proven irresistible",
        match: ["irresistible"],
        hint: "ir-re-ZIST-i-ble — that combination has proven irresistible."
      },
      {
        id: "stanley",
        label: "Stanley Cup",
        match: ["stanley cup"],
        hint: "STAN-ley Cup — first ever competition in 1893."
      },
      {
        id: "1893",
        label: "1893",
        match: ["1893"],
        hint: "Eighteen ninety-three."
      },
      {
        id: "2002-2003",
        label: "2002/2003 season",
        match: ["2002/2003", "2002", "2003"],
        hint: "Two thousand two / two thousand three season."
      },
      {
        id: "hockey-league",
        label: "Hockey League",
        match: ["hockey league"],
        hint: "national Hockey League — как в тексте, с заглавной H."
      },
      {
        id: "20-million",
        label: "20 million",
        match: ["20 million"],
        hint: "Twenty million — attendance topped 20 million."
      },
      {
        id: "colourful",
        label: "colourful characters",
        match: ["colourful"],
        hint: "COLOUR-ful — British spelling."
      }
    ],
    selfCheck: [
      "Я прочитал(а) текст до конца за отведённое время",
      "20,000 / 5,000 / 20 million и 1893 прочитаны правильно",
      "Stanley Cup и Hockey League — без запинки",
      "Паузы в списке colourful characters, interesting traditions…",
      "Интонация в конце — falling"
    ]
  });
})(typeof window !== "undefined" ? window : this);
