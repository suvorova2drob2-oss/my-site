(function (w) {
  var pack = w.__EGE_SPEAKING_READ_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u19-japan",
    unitLabel: "Unit 19",
    title: "Japan",
    lead:
      "Задание 1 · чтение вслух. Япония — география и население, 2 абзаца.",
    paragraphs: [
      "Japan is an island nation in East Asia, located in the North Pacific Ocean off the coast of the Asian continent. Japan comprises the four main islands in addition to numerous smaller islands. Tokyo is the country's capital and largest city. Mountains dominate Japan's landscape, covering 75 to 80% of the country. Historically, the mountains were barriers to transportation, limiting the economic development of isolated areas. However, with the development of tunnels, bridges, and air transportation in the modern era, the mountains are no longer an obstacle. The Japanese have long celebrated the beauty of their mountains in art and literature, and today many mountain areas are preserved in national parks.",
      "Most of Japan's people live on plains and lowlands found mainly along the lower courses of the country's major rivers, on the lowest slopes of mountain ranges, and along the sea coast. This concentration of people makes Japan one of the world's most crowded countries."
    ],
    prepareSeconds: 90,
    readSeconds: 90,
    trickySpots: [
      {
        id: "pacific",
        label: "North Pacific Ocean",
        match: ["north pacific ocean", "pacific ocean"],
        hint: "North pa-CIF-ic Ocean — off the coast of the Asian continent."
      },
      {
        id: "comprises",
        label: "Japan comprises",
        match: ["comprises"],
        hint: "com-PRISES — four main islands."
      },
      {
        id: "dominate",
        label: "Mountains dominate",
        match: ["dominate"],
        hint: "DOM-i-nate — covering 75 to 80% of the country."
      },
      {
        id: "75-80",
        label: "75 to 80%",
        match: ["75 to 80", "75", "80%"],
        hint: "Seventy-five to eighty percent."
      },
      {
        id: "transportation",
        label: "air transportation",
        match: ["transportation"],
        hint: "trans-por-TAY-shun — tunnels, bridges, and air transportation."
      },
      {
        id: "obstacle",
        label: "no longer an obstacle",
        match: ["obstacle"],
        hint: "OB-stacle — mountains are no longer an obstacle."
      },
      {
        id: "national-parks",
        label: "national parks",
        match: ["national parks"],
        hint: "NA-tional PARKS — preserved in national parks."
      },
      {
        id: "lowlands",
        label: "plains and lowlands",
        match: ["lowlands"],
        hint: "LOW-lands — along rivers and sea coast."
      },
      {
        id: "concentration",
        label: "concentration of people",
        match: ["concentration"],
        hint: "con-cen-TRAY-shun — makes Japan one of the most crowded countries."
      }
    ],
    selfCheck: [
      "Я прочитал(а) текст до конца за отведённое время",
      "75 to 80% прочитано правильно",
      "Tokyo, national parks, lowlands — без запинки",
      "Пауза между абзацами (горы → население)",
      "Интонация в конце — falling"
    ]
  });
})(typeof window !== "undefined" ? window : this);
