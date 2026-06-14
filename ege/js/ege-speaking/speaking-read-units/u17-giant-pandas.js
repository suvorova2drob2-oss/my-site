(function (w) {
  var pack = w.__EGE_SPEAKING_READ_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u17-giant-pandas",
    unitLabel: "Unit 17",
    title: "Giant pandas",
    lead:
      "Задание 1 · чтение вслух. Большие панды — 3 абзаца.",
    paragraphs: [
      "High in bamboo forests in the rainy mountains of China lives one of the world's rarest mammals: the giant panda. Only about 1,500 of these black-and-white relatives of bears survive in the wild.",
      "Pandas eat almost nothing but bamboo shoots and leaves. Occasionally they eat other vegetation, fish, or small animals, but bamboo accounts for 99% of their diets. Pandas cat fast, they eat a lot, and they spend about 12 hours a day doing it. The reason is they digest only a fifth of what they eat. Overall, bamboo is not very nutritious. To stay healthy, they have to eat a lot.",
      "The shape of teeth helps pandas crush bamboo shoots and leaves. To get the bamboo to their mouths, they hold it with their front paws. A panda should have at least two bamboo species where it lives, or it will starve. A lack of bamboo threatens the limited panda population."
    ],
    prepareSeconds: 90,
    readSeconds: 90,
    trickySpots: [
      {
        id: "1500",
        label: "1,500",
        match: ["1,500", "1500"],
        hint: "Fifteen hundred — survive in the wild."
      },
      {
        id: "black-and-white",
        label: "black-and-white",
        match: ["black-and-white", "black and white"],
        hint: "BLACK-and-WHITE relatives of bears."
      },
      {
        id: "vegetation",
        label: "vegetation",
        match: ["vegetation"],
        hint: "veg-e-TAY-shun — other vegetation, fish, or small animals."
      },
      {
        id: "accounts",
        label: "accounts for 99%",
        match: ["accounts for", "accounts"],
        hint: "ac-COUNTS for 99% of their diets."
      },
      {
        id: "cat-fast",
        label: "Pandas cat fast",
        match: ["cat fast"],
        hint: "Как в тексте: Pandas cat fast — читайте слово как напечатано."
      },
      {
        id: "nutritious",
        label: "not very nutritious",
        match: ["nutritious"],
        hint: "nu-TRISH-us — bamboo is not very nutritious."
      },
      {
        id: "digest",
        label: "digest only a fifth",
        match: ["digest", "a fifth"],
        hint: "di-JEST — only a fifth of what they eat."
      },
      {
        id: "species",
        label: "two bamboo species",
        match: ["species"],
        hint: "SPE-cies — at least two bamboo species."
      },
      {
        id: "population",
        label: "panda population",
        match: ["population"],
        hint: "pop-u-LAY-shun — threatens the limited panda population."
      }
    ],
    selfCheck: [
      "Я прочитал(а) текст до конца за отведённое время",
      "1,500 и 99% прочитаны правильно",
      "Pandas cat fast — как в тексте, без «исправления»",
      "nutritious, species, population — без запинки",
      "Интонация в конце — falling"
    ]
  });
})(typeof window !== "undefined" ? window : this);
