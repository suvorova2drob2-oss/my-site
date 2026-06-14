(function (w) {
  var pack = w.__EGE_SPEAKING_READ_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u3-australia",
    unitLabel: "Unit 3",
    title: "Australia",
    lead:
      "Задание 1 · чтение вслух. География Австралии — 2 абзаца, ~170 слов.",
    paragraphs: [
      "Australia is the only country in the world that covers an entire continent. It is one of the largest countries on Earth. Although it is rich in natural resources and has a lot of fertile land, more than one-third of Australia is desert.",
      "Most Australian cities and farms are located in the southwest and southeast, where the climate is more comfortable. There are dense tropical rainforests in the northeast. They are the richest in plant and animal species. Subtropical rainforests are found near the mid-eastern coast. The famous outback contains the country's largest deserts, where there are high temperatures, little water, and almost no vegetation. Running around the eastern and southeastern edges of Australia is the Great Dividing Range. This 3,700-kilometre stretch of mountains sends water down into the most important rivers of Australia."
    ],
    prepareSeconds: 90,
    readSeconds: 90,
    trickySpots: [
      {
        id: "continent",
        label: "entire continent",
        match: ["entire continent", "continent"],
        hint: "en-TIRE con-ti-NENT — Australia covers an entire continent."
      },
      {
        id: "fertile",
        label: "fertile land",
        match: ["fertile"],
        hint: "FER-tile — плодородная земля, не «фертильный» по-русски."
      },
      {
        id: "one-third",
        label: "one-third",
        match: ["one-third", "one third"],
        hint: "ONE-third — более трети (more than one-third) is desert."
      },
      {
        id: "southwest",
        label: "southwest and southeast",
        match: ["southwest", "southeast"],
        hint: "SOUTH-west / south-EAST — направления; не сливайте в одно слово."
      },
      {
        id: "rainforests",
        label: "tropical rainforests",
        match: ["tropical rainforests", "rainforests"],
        hint: "TROP-i-cal RAIN-forests — dense in the northeast."
      },
      {
        id: "subtropical",
        label: "Subtropical rainforests",
        match: ["subtropical"],
        hint: "sub-TROP-i-cal — near the mid-eastern coast."
      },
      {
        id: "mid-eastern",
        label: "mid-eastern coast",
        match: ["mid-eastern", "mid eastern"],
        hint: "MID-eastern — средне-восточное побережье."
      },
      {
        id: "outback",
        label: "outback",
        match: ["outback"],
        hint: "OUT-back — знаменитая австралийская глубинка / bush."
      },
      {
        id: "vegetation",
        label: "vegetation",
        match: ["vegetation"],
        hint: "vej-i-TAY-shun — almost no vegetation in the deserts."
      },
      {
        id: "dividing-range",
        label: "Great Dividing Range",
        match: ["great dividing range", "dividing range"],
        hint: "Great di-VID-ing Range — главный горный хребет."
      },
      {
        id: "3700",
        label: "3,700-kilometre stretch",
        match: ["3,700", "3700", "kilometre"],
        hint: "Three thousand seven hundred kilometres — длинная цепь гор."
      },
      {
        id: "resources",
        label: "natural resources",
        match: ["natural resources", "resources"],
        hint: "re-SOUR-ces — rich in natural resources."
      }
    ],
    selfCheck: [
      "Я прочитал(а) текст до конца за отведённое время",
      "Число 3,700 и one-third прочитаны правильно",
      "Паузы между southwest / southeast и tropical / subtropical",
      "Great Dividing Range и outback — без запинки",
      "Интонация в конце предложений — falling, не «вопросительная»"
    ]
  });
})(typeof window !== "undefined" ? window : this);
