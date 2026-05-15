/**
 * Полный «комбо-юнит» ЕГЭ: 10 блоков (3 reading + 3 writing + WF + grammar + UoE + MC).
 * Сохранение: localStorage ege_full_pack_progress.
 * Reading §10/§11 подтягиваются из уже существующих мостов при открытии Statistics Hub.
 * Остальные фазы — через recordPhase(packId, slug, percent) из страниц тренажёров (подключать по мере готовности).
 */
(function (w) {
  var KEY = "ege_full_pack_progress";
  var PACK_ID = "ege_combo_v1";

  var PHASES = [
    {
      slug: "reading_1",
      label: "Reading · Matching headlines (§10)",
      legacySync: "mh"
    },
    {
      slug: "reading_2",
      label: "Reading · Gapped text (§11)",
      legacySync: "gt"
    },
    {
      slug: "reading_3",
      label: "Reading · Multiple choice (текст)",
      legacySync: "mcr"
    },
    { slug: "writing_1", label: "Writing · задание 1", legacySync: null },
    { slug: "writing_2", label: "Writing · задание 2", legacySync: null },
    { slug: "writing_3", label: "Writing · задание 3", legacySync: null },
    {
      slug: "word_formation",
      label: "Word formation",
      legacySync: null
    },
    { slug: "grammar", label: "Grammar", legacySync: null },
    {
      slug: "use_of_english",
      label: "Use of English",
      legacySync: null
    },
    {
      slug: "multiple_choice",
      label: "Multiple choice · лексика (30–36)",
      legacySync: null
    }
  ];

  function readRaw() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return { packs: {} };
      var o = JSON.parse(raw);
      if (!o || typeof o !== "object") return { packs: {} };
      if (!o.packs || typeof o.packs !== "object") o.packs = {};
      return o;
    } catch (e1) {
      return { packs: {} };
    }
  }

  function writeRaw(o) {
    try {
      localStorage.setItem(KEY, JSON.stringify(o));
    } catch (e2) {}
  }

  function ensurePack(root, packId) {
    var id = String(packId || PACK_ID);
    if (!root.packs[id]) {
      root.packs[id] = { phases: {}, updatedAt: 0 };
    }
    return root.packs[id];
  }

  function aggregateBestFromMap(data) {
    var ids = Object.keys(data || {});
    var sum = 0;
    var c = 0;
    var i;
    for (i = 0; i < ids.length; i++) {
      var row = data[ids[i]];
      if (row && typeof row.best === "number") {
        sum += row.best;
        c++;
      }
    }
    return c ? Math.round(sum / c) : null;
  }

  function legacyMhAggregate() {
    var m = w.__egeReadingMatchingStats;
    if (!m || typeof m.readRaw !== "function") return null;
    return aggregateBestFromMap(m.readRaw());
  }

  function legacyGtAggregate() {
    var g = w.__egeReadingGappedTextStats;
    if (!g || typeof g.readRaw !== "function") return null;
    return aggregateBestFromMap(g.readRaw());
  }

  function legacyMcAggregate() {
    var m = w.__egeReadingMcStats;
    if (!m || typeof m.readRaw !== "function") return null;
    return aggregateBestFromMap(m.readRaw());
  }

  /** Обновить reading_1 / reading_2 / reading_3 из мостов (без увеличения n — только зеркало лучшего агрегата). */
  function syncReadingFromLegacyBridges(packId) {
    var root = readRaw();
    var pack = ensurePack(root, packId);
    var mh = legacyMhAggregate();
    var gt = legacyGtAggregate();
    var mc = legacyMcAggregate();
    var now = Date.now();
    if (mh != null && mh >= 0) {
      if (!pack.phases.reading_1) pack.phases.reading_1 = {};
      var r1 = pack.phases.reading_1;
      r1.best = Math.max(r1.best || 0, mh);
      r1.last = mh;
      if (mh > 0) r1.n = Math.max(r1.n || 0, 1);
      r1.at = now;
      r1.fromLegacy = "mh";
    }
    if (gt != null && gt >= 0) {
      if (!pack.phases.reading_2) pack.phases.reading_2 = {};
      var r2 = pack.phases.reading_2;
      r2.best = Math.max(r2.best || 0, gt);
      r2.last = gt;
      if (gt > 0) r2.n = Math.max(r2.n || 0, 1);
      r2.at = now;
      r2.fromLegacy = "gt";
    }
    if (mc != null && mc >= 0) {
      if (!pack.phases.reading_3) pack.phases.reading_3 = {};
      var r3 = pack.phases.reading_3;
      r3.best = Math.max(r3.best || 0, mc);
      r3.last = mc;
      if (mc > 0) r3.n = Math.max(r3.n || 0, 1);
      r3.at = now;
      r3.fromLegacy = "mcr";
    }
    pack.updatedAt = now;
    writeRaw(root);
  }

  function recordPhase(packId, slug, percent) {
    var id = String(packId || PACK_ID);
    var p = Math.max(0, Math.min(100, Math.round(Number(percent) || 0)));
    var s = String(slug || "");
    if (!s) return null;
    var ok = false;
    var i;
    for (i = 0; i < PHASES.length; i++) {
      if (PHASES[i].slug === s) {
        ok = true;
        break;
      }
    }
    if (!ok) return null;

    var root = readRaw();
    var pack = ensurePack(root, id);
    if (!pack.phases[s]) pack.phases[s] = {};
    var row = pack.phases[s];
    row.last = p;
    row.best = Math.max(row.best || 0, p);
    row.n = (row.n || 0) + 1;
    row.at = Date.now();
    delete row.fromLegacy;
    pack.updatedAt = row.at;
    writeRaw(root);
    return row;
  }

  function phaseTouched(row) {
    if (!row) return false;
    return (row.n || 0) > 0 || (row.best || 0) > 0;
  }

  function getDashboard(packId) {
    syncReadingFromLegacyBridges(packId || PACK_ID);
    var root = readRaw();
    var pack = ensurePack(root, packId || PACK_ID);
    var list = [];
    var touched = 0;
    var sumBest = 0;
    var i;
    var def;
    var row;
    var touch;
    var b;
    for (i = 0; i < PHASES.length; i++) {
      def = PHASES[i];
      row = pack.phases[def.slug] || null;
      touch = phaseTouched(row);
      if (touch) touched++;
      b = row && typeof row.best === "number" ? row.best : 0;
      sumBest += b;
      list.push({
        slug: def.slug,
        label: def.label,
        best: row ? row.best : 0,
        n: row ? row.n || 0 : 0,
        touched: touch
      });
    }
    var total = PHASES.length;
    var isComplete = touched === total;
    var fullAverage = isComplete ? Math.round(sumBest / total) : null;
    return {
      packId: String(packId || PACK_ID),
      phases: list,
      touchedCount: touched,
      totalPhases: total,
      isComplete: isComplete,
      fullAverage: fullAverage,
      sumBest: sumBest
    };
  }

  function clearAll() {
    try {
      localStorage.removeItem(KEY);
    } catch (e3) {}
  }

  w.__egeFullPackStats = {
    KEY: KEY,
    PACK_ID: PACK_ID,
    PHASES: PHASES,
    syncReadingFromLegacyBridges: syncReadingFromLegacyBridges,
    recordPhase: recordPhase,
    getDashboard: getDashboard,
    clearAll: clearAll,
    readRaw: readRaw
  };
})(window);
