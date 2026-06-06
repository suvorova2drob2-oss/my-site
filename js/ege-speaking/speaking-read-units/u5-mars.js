(function (w) {
  var pack = w.__EGE_SPEAKING_READ_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u5-mars",
    unitLabel: "Unit 5",
    title: "Mars",
    lead:
      "Задание 1 · чтение вслух. Красная планета — 2 абзаца, числа и названия.",
    paragraphs: [
      "Mars is our neighbour, the fourth planet outward from the Sun. Its rusty-red surface has earned Mars the nickname \u201cThe Red Planet\u201d. Mars is a little smaller than Earth, with a day that's very similar in length to ours. It is just a bit longer, at 24 hours and 37 minutes. However, a year on Mars is much longer, lasting for almost two Earth years, or 687 Earth days.",
      "At around half the size of Earth, Mars is a rocky world with a thin atmosphere. This means the days are very hot, but the nights are freezing cold. Exploration missions have found evidence of ancient water on Mars, in the form of dried-up riverbeds and vast canyons. This suggests that Mars may have once been a much wetter and warmer place. Today, rovers like the Curiosity rover, search for signs of past or even present life on Mars, making it a key target in our quest to understand if we are alone in the universe."
    ],
    prepareSeconds: 90,
    readSeconds: 90,
    trickySpots: [
      {
        id: "neighbour",
        label: "neighbour",
        match: ["neighbour"],
        hint: "NEIGH-bour — British spelling; our neighbour."
      },
      {
        id: "outward",
        label: "outward from the Sun",
        match: ["outward"],
        hint: "OUT-ward — fourth planet outward from the Sun."
      },
      {
        id: "rusty-red",
        label: "rusty-red surface",
        match: ["rusty-red", "rusty red"],
        hint: "RUST-y-red — «ржаво-красная» поверхность."
      },
      {
        id: "red-planet",
        label: "\u201cThe Red Planet\u201d",
        match: ["the red planet", "red planet"],
        hint: "Nickname — пауза, чётко The Red Planet."
      },
      {
        id: "24-37",
        label: "24 hours and 37 minutes",
        match: ["24 hours and 37 minutes", "37 minutes"],
        hint: "Twenty-four hours and thirty-seven minutes."
      },
      {
        id: "687",
        label: "687 Earth days",
        match: ["687", "earth days"],
        hint: "Six hundred and eighty-seven Earth days."
      },
      {
        id: "atmosphere",
        label: "thin atmosphere",
        match: ["atmosphere"],
        hint: "AT-mos-phere — thin atmosphere on Mars."
      },
      {
        id: "riverbeds",
        label: "dried-up riverbeds",
        match: ["dried-up riverbeds", "riverbeds"],
        hint: "DRIED-up RIVER-beds — высохшие русла."
      },
      {
        id: "canyons",
        label: "vast canyons",
        match: ["canyons"],
        hint: "VAST CAN-yons — огромные каньоны."
      },
      {
        id: "curiosity",
        label: "Curiosity rover",
        match: ["curiosity rover", "curiosity"],
        hint: "cu-ri-OS-i-ty RO-ver — название марсохода."
      },
      {
        id: "universe",
        label: "alone in the universe",
        match: ["universe"],
        hint: "U-ni-verse — финальная фраза; falling intonation."
      }
    ],
    selfCheck: [
      "Я прочитал(а) текст до конца за отведённое время",
      "24 hours and 37 minutes и 687 Earth days прочитаны правильно",
      "The Red Planet и Curiosity rover — с паузами",
      "dried-up riverbeds / vast canyons — без запинки",
      "Интонация в конце — falling, особенно in the universe"
    ]
  });
})(typeof window !== "undefined" ? window : this);
