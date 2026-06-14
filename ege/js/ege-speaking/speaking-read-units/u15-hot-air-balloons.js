(function (w) {
  var pack = w.__EGE_SPEAKING_READ_DATA__;
  if (!pack || !Array.isArray(pack.units)) return;
  pack.units.push({
    id: "u15-hot-air-balloons",
    unitLabel: "Unit 15",
    title: "Hot air balloons",
    lead:
      "Задание 1 · чтение вслух. Воздушные шары — 3 абзаца.",
    paragraphs: [
      "The first human carrying flight technology was the hot air balloon. While unmanned balloons have been around in some form for thousands of years, the first flight with people on board was in 1782.",
      "The large balloon on top is called an \u201cenvelope\u201d. It holds hot air created by a heat source known as a burner. The burner creates an open flame by burning a mix of propane and air. Hot air balloons are capable of floating because the hot air inside the envelope has a lower density than the colder air outside. The top of the balloon usually has a vent which allows the pilot to control the speed of ascent or descent. Passengers typically stand in a basket beneath the envelope.",
      "While most envelopes have a standard balloon shape, others are designed to look like animals, cartoon characters and other fun objects."
    ],
    prepareSeconds: 90,
    readSeconds: 90,
    trickySpots: [
      {
        id: "unmanned",
        label: "unmanned balloons",
        match: ["unmanned"],
        hint: "un-MANNED — без людей on board."
      },
      {
        id: "1782",
        label: "1782",
        match: ["1782"],
        hint: "Seventeen eighty-two — first flight with people."
      },
      {
        id: "envelope",
        label: "\u201cenvelope\u201d",
        match: ["envelope"],
        hint: "EN-ve-lope — large balloon on top (not a letter!)."
      },
      {
        id: "propane",
        label: "propane and air",
        match: ["propane"],
        hint: "PRO-pane — mix of propane and air."
      },
      {
        id: "density",
        label: "lower density",
        match: ["density"],
        hint: "DEN-sity — lower density than colder air outside."
      },
      {
        id: "ascent",
        label: "ascent or descent",
        match: ["ascent", "descent"],
        hint: "a-SCENT / de-SCENT — speed of ascent or descent."
      },
      {
        id: "beneath",
        label: "basket beneath the envelope",
        match: ["beneath"],
        hint: "be-NEATH — passengers stand in a basket beneath."
      },
      {
        id: "capable",
        label: "capable of floating",
        match: ["capable"],
        hint: "CAP-a-ble of floating — because hot air is less dense."
      }
    ],
    selfCheck: [
      "Я прочитал(а) текст до конца за отведённое время",
      "1782 прочитано правильно",
      "envelope, propane, ascent/descent — без запинки",
      "Паузы между абзацами (history → how it works → shapes)",
      "Интонация в конце — falling"
    ]
  });
})(typeof window !== "undefined" ? window : this);
