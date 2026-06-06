(function (w) {
  var pack = w.__EGE_SPEAKING_READ_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u11-global-warming",
    unitLabel: "Unit 11",
    title: "Global warming",
    lead:
      "Задание 1 · чтение вслух. Глобальное потепление — один абзац.",
    paragraphs: [
      "Even though you might think that global warming is not a burning issue, there are many dangers. The gradual heating of Earth's surface, oceans and atmosphere is something that is happening in real life in many places. The consequences and effects of global warming are measurable and visible. Scientists report that ice is melting in both polar ice caps and mountain glaciers. Lakes around the world are warming rapidly changing animals' migration patterns and plants' blooming dates. The most immediate and obvious consequence of global warming is the increase in temperatures around the world. As global average temperatures warm, weather patterns are changing. These changes will likely include major shifts in wind patterns, annual precipitation, and seasonal temperature variations."
    ],
    prepareSeconds: 90,
    readSeconds: 90,
    trickySpots: [
      {
        id: "burning-issue",
        label: "burning issue",
        match: ["burning issue"],
        hint: "BURN-ing IS-sue — «острая проблема», не «горящая» буквально."
      },
      {
        id: "gradual",
        label: "gradual heating",
        match: ["gradual"],
        hint: "GRAD-u-al — постепенный нагрев surface, oceans and atmosphere."
      },
      {
        id: "measurable",
        label: "measurable and visible",
        match: ["measurable", "visible"],
        hint: "MEAS-ur-a-ble — consequences are measurable and visible."
      },
      {
        id: "glaciers",
        label: "mountain glaciers",
        match: ["glaciers", "polar ice caps"],
        hint: "GLA-ciers — polar ice caps and mountain glaciers."
      },
      {
        id: "migration",
        label: "migration patterns",
        match: ["migration patterns", "migration"],
        hint: "mi-GRAY-shun — animals' migration patterns."
      },
      {
        id: "blooming",
        label: "blooming dates",
        match: ["blooming dates", "blooming"],
        hint: "BLOOM-ing dates — plants' blooming dates."
      },
      {
        id: "precipitation",
        label: "annual precipitation",
        match: ["precipitation"],
        hint: "pre-cip-i-TAY-shun — annual precipitation."
      },
      {
        id: "seasonal",
        label: "seasonal temperature variations",
        match: ["seasonal", "variations"],
        hint: "SEA-son-al — финальный список: wind patterns, precipitation, variations."
      },
      {
        id: "rapidly",
        label: "warming rapidly changing",
        match: ["warming rapidly"],
        hint: "Пауза/intonation: lakes are warming rapidly — changing patterns…"
      }
    ],
    selfCheck: [
      "Я прочитал(а) текст до конца за отведённое время",
      "glaciers, migration, precipitation — без запинки",
      "Паузы в финальном списке: wind patterns, precipitation, variations",
      "Even though — linking intonation в начале",
      "Интонация в конце — falling"
    ]
  });
})(typeof window !== "undefined" ? window : this);
