(function (w) {
  var pack = w.__EGE_SPEAKING_READ_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u16-singing-sands",
    unitLabel: "Unit 16",
    title: "Singing sands and Antarctic ice",
    lead:
      "Задание 1 · чтение вслух. Поющие пески и Антарктика — 3 абзаца.",
    paragraphs: [
      "Our world is full of mysteries. There are stunning icebergs, roaring waterfalls, dashing jungles and many more. There are also singing sands in Kazakhstan. \"Singing sands\" is the name of big dunes that produce various sounds in dry weather.",
      "The sounds can be heard several miles away and resemble sometimes organ music and sometimes the roars of an aircraft engine. According to local legends, such sounds are songs of desert ghosts and voices of fabulous beasts. Scientists however think that the grains of sands create those sounds as they rub against each other under a wind force.",
      "Another miracle can be seen in the Antarctic. These are waves frozen in the air. Of course, it is not a real tsunami. Water cannot freeze instantly and in motion, even in the freezing temperatures. This ice begins to melt in summer and then freezes again many years in a row forming natural sculptures for centuries."
    ],
    prepareSeconds: 90,
    readSeconds: 90,
    trickySpots: [
      {
        id: "dashing",
        label: "dashing jungles",
        match: ["dashing jungles", "dashing"],
        hint: "DASH-ing jungles — в списке mysteries."
      },
      {
        id: "kazakhstan",
        label: "Kazakhstan",
        match: ["kazakhstan"],
        hint: "Ka-zakh-STAN — singing sands in Kazakhstan."
      },
      {
        id: "dunes",
        label: "big dunes",
        match: ["dunes"],
        hint: "DUNES — produce various sounds in dry weather."
      },
      {
        id: "resemble",
        label: "resemble organ music",
        match: ["resemble"],
        hint: "re-SEM-ble — sometimes organ music, sometimes roars."
      },
      {
        id: "fabulous",
        label: "fabulous beasts",
        match: ["fabulous"],
        hint: "FAB-u-lous — voices of fabulous beasts."
      },
      {
        id: "grains",
        label: "grains of sands",
        match: ["grains of sands", "grains"],
        hint: "GRAINS of sands — as in тексте (grains of sands)."
      },
      {
        id: "antarctic",
        label: "Antarctic",
        match: ["antarctic"],
        hint: "ant-ARCT-ic — Another miracle in the Antarctic."
      },
      {
        id: "tsunami",
        label: "real tsunami",
        match: ["tsunami"],
        hint: "tsu-NA-mi — not a real tsunami."
      },
      {
        id: "sculptures",
        label: "natural sculptures",
        match: ["sculptures"],
        hint: "SCULP-tures — forming natural sculptures for centuries."
      }
    ],
    selfCheck: [
      "Я прочитал(а) текст до конца за отведённое время",
      "Singing sands и Kazakhstan — чётко",
      "Списки: icebergs, waterfalls, jungles — rising intonation",
      "Antarctic / tsunami / sculptures — без запинки",
      "Интонация в конце — falling"
    ]
  });
})(typeof window !== "undefined" ? window : this);
