/**
 * Движок баннера «Следующая встреча».
 * Дата лежит в speaking-next-data.js — этот файл обычно не трогай.
 */
(function (global) {
  var STORAGE_KEY = "speaking_next_v1";

  var FALLBACK = {
    date: "2026-08-08",
    time: "14:00",
    track: "Fleabag",
    hubSpots: "Есть места · забронировать на сайте",
    scheduleMeta: "Есть места · Fleabag speaking club · онлайн",
  };

  var WEEKDAYS = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  var MONTHS = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  function baseDefault() {
    return normalize(global.SPEAKING_NEXT_DEFAULT || FALLBACK);
  }

  function parseDate(iso) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso || "").trim());
    if (!m) return null;
    var y = +m[1];
    var mo = +m[2] - 1;
    var d = +m[3];
    var dt = new Date(y, mo, d);
    if (dt.getFullYear() !== y || dt.getMonth() !== mo || dt.getDate() !== d) {
      return null;
    }
    return dt;
  }

  function normalize(raw) {
    var o = Object.assign({}, FALLBACK, raw || {});
    o.date = String(o.date || "").trim();
    o.time = String(o.time || "14:00").trim();
    o.track = String(o.track || "Fleabag").trim();
    o.hubSpots = String(o.hubSpots || FALLBACK.hubSpots).trim();
    o.scheduleMeta = String(o.scheduleMeta || FALLBACK.scheduleMeta).trim();
    return o;
  }

  function loadStored() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var o = JSON.parse(raw);
      return o && typeof o === "object" ? normalize(o) : null;
    } catch (e) {
      return null;
    }
  }

  function saveStored(cfg) {
    var o = normalize(cfg);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(o));
    } catch (e) {}
    return o;
  }

  function clearStored() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  }

  function getConfig() {
    return loadStored() || baseDefault();
  }

  function slug(s) {
    return (
      String(s || "club")
        .toLowerCase()
        .replace(/[^a-z0-9а-яё]+/gi, "-")
        .replace(/^-|-$/g, "")
        .slice(0, 32) || "club"
    );
  }

  function formatParts(cfg) {
    cfg = normalize(cfg);
    var dt = parseDate(cfg.date);
    if (!dt) {
      return {
        hubLine: cfg.date + " · " + cfg.time + " · " + cfg.track,
        scheduleTitle: cfg.date + " · " + cfg.time + " МСК",
        scheduleWhen: cfg.date + " · " + cfg.time + " МСК",
        sessionLabel: cfg.date + " · " + cfg.time + " · " + cfg.track,
        sessionId: (cfg.date || "date") + "-" + slug(cfg.track),
      };
    }
    var weekday = WEEKDAYS[dt.getDay()];
    var dayMonth = dt.getDate() + " " + MONTHS[dt.getMonth()];
    var year = String(dt.getFullYear());
    return {
      hubLine: weekday + ", " + dayMonth + " · " + cfg.time + " · " + cfg.track,
      scheduleTitle: weekday + ", " + dayMonth + " · " + cfg.time + " МСК",
      scheduleWhen: weekday + " · " + dayMonth + " " + year + " · " + cfg.time + " МСК",
      sessionLabel:
        weekday + " " + dayMonth + " " + year + " · " + cfg.time + " · " + cfg.track,
      sessionId: cfg.date + "-" + slug(cfg.track),
    };
  }

  function setText(id, text) {
    var el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  function apply(cfg) {
    cfg = normalize(cfg || getConfig());
    var p = formatParts(cfg);

    setText("speaking-next-hub-line", p.hubLine);
    setText("speaking-next-hub-spots", cfg.hubSpots);
    setText("speaking-next-sch-title", p.scheduleTitle);
    setText("speaking-next-sch-meta", cfg.scheduleMeta);
    setText("speaking-next-sch-when", p.scheduleWhen);

    var card = document.querySelector("[data-session]");
    if (card) card.setAttribute("data-session", p.sessionId);

    var name = document.querySelector(".sch-name");
    if (name && cfg.track) {
      name.textContent = cfg.track + " · speaking club";
    }

    global.__SPEAKING_NEXT__ = cfg;
    global.__SPEAKING_NEXT_PARTS__ = p;
    return { cfg: cfg, parts: p };
  }

  function dataFileSource(cfg) {
    cfg = normalize(cfg);
    return (
      "/**\n" +
      " * СЛЕДУЮЩАЯ ВСТРЕЧА — правь только этот файл (или кнопку «Изменить дату» в schedule.html).\n" +
      " * После правки залей workshops/js/speaking-next-data.js на сайт вместе с остальным.\n" +
      " */\n" +
      "window.SPEAKING_NEXT_DEFAULT = " +
      JSON.stringify(
        {
          date: cfg.date,
          time: cfg.time,
          track: cfg.track,
          hubSpots: cfg.hubSpots,
          scheduleMeta: cfg.scheduleMeta,
        },
        null,
        2
      ) +
      ";\n"
    );
  }

  function downloadDataFile(cfg) {
    var text = dataFileSource(cfg);
    var blob = new Blob([text], { type: "application/javascript;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "speaking-next-data.js";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 1000);
  }

  function run() {
    apply(getConfig());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }

  global.SpeakingNext = {
    STORAGE_KEY: STORAGE_KEY,
    getDefault: baseDefault,
    getConfig: getConfig,
    saveStored: saveStored,
    clearStored: clearStored,
    formatParts: formatParts,
    apply: apply,
    dataFileSource: dataFileSource,
    downloadDataFile: downloadDataFile,
  };
})(window);
