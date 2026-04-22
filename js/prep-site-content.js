/**
 * Единое хранилище контента сайта (папки → разделы → задания).
 * localStorage + BroadcastChannel. Если подключён PrepCloudClient (см. infra/supabase/PREP-CLOUD.md),
 * при save() данные уходят в Supabase; при загрузке страницы вызывай PrepSiteContent.hydrateFromCloud().
 */
(function (global) {
  var KEY = "prep-site-content-v1";
  var PROFILE_KEY = "prep-course-profile-v1";
  var LEGACY = ["prep-course-cms-config-v1::site", "prep-course-cms-config-v1"];

  function normalizeStorageCourseId(id) {
    var s = String(id || "cpe");
    if (s === "custom") return "empty";
    if (s === "cpe" || s === "ege" || s === "fce" || s === "empty") return s;
    if (/^cr_[a-z0-9]{6,32}$/i.test(s)) return s;
    return "cpe";
  }

  function getCourseId() {
    try {
      if (global.prepCourseProfile && typeof global.prepCourseProfile.load === "function") {
        var p = global.prepCourseProfile.load();
        if (p && p.courseId) {
          if (typeof global.prepCourseProfile.normalizeCourseId === "function") {
            return global.prepCourseProfile.normalizeCourseId(p.courseId);
          }
          return normalizeStorageCourseId(p.courseId);
        }
      }
    } catch (e0) {}
    try {
      var j = JSON.parse(global.localStorage.getItem(PROFILE_KEY) || "{}");
      if (j && j.courseId) return normalizeStorageCourseId(j.courseId);
    } catch (e0b) {}
    return "cpe";
  }

  function namespacedKey(courseId) {
    return KEY + "::" + (courseId || "cpe");
  }

  function activeKey() {
    return namespacedKey(getCourseId());
  }

  function migrateUnprefixedToCpe() {
    try {
      var kCpe = namespacedKey("cpe");
      if (global.localStorage.getItem(kCpe)) return;
      var raw = global.localStorage.getItem(KEY);
      if (!raw) return;
      global.localStorage.setItem(kCpe, raw);
    } catch (eM) {}
  }

  var bc = null;
  try {
    bc = new BroadcastChannel("prep-site-content");
  } catch (e1) {}

  function broadcast() {
    if (bc) {
      try {
        bc.postMessage({ type: "save", t: Date.now() });
      } catch (e2) {}
    }
    try {
      global.dispatchEvent(new CustomEvent("prep-site-content-save"));
    } catch (e3) {}
  }

  function defaultData() {
    return { version: 2, title: "Курсы", folders: [] };
  }

  function migrateIfEmpty() {
    try {
      if (global.localStorage.getItem(KEY)) return;
      for (var i = 0; i < LEGACY.length; i++) {
        var raw = global.localStorage.getItem(LEGACY[i]);
        if (raw) {
          var j = JSON.parse(raw);
          if (j && j.folders) {
            global.localStorage.setItem(KEY, JSON.stringify(j));
            return;
          }
        }
      }
    } catch (e) {}
  }

  function load() {
    migrateIfEmpty();
    migrateUnprefixedToCpe();
    var k = activeKey();
    try {
      var raw = global.localStorage.getItem(k);
      if (!raw && k === namespacedKey("empty")) {
        var legacyCustom = global.localStorage.getItem(namespacedKey("custom"));
        if (legacyCustom) {
          global.localStorage.setItem(k, legacyCustom);
          raw = legacyCustom;
        }
      }
      if (raw) {
        var d = JSON.parse(raw);
        if (d && Array.isArray(d.folders)) return d;
      }
    } catch (e2) {}
    return defaultData();
  }

  function save(data) {
    try {
      global.localStorage.setItem(activeKey(), JSON.stringify(data));
    } catch (e) {}
    broadcast();
  }

  var syncFns = [];

  function onSync(fn) {
    if (typeof fn !== "function") return;
    syncFns.push(fn);
  }

  function runSync() {
    syncFns.forEach(function (f) {
      try {
        f();
      } catch (e) {}
    });
  }

  if (bc) {
    bc.addEventListener("message", function () {
      runSync();
    });
  }
  try {
    global.addEventListener("prep-site-content-save", runSync);
  } catch (e4) {}

  try {
    global.addEventListener("prep-course-profile-changed", function () {
      runSync();
    });
  } catch (e5) {}

  global.PrepSiteContent = {
    KEY: KEY,
    getCourseId: getCourseId,
    activeStorageKey: activeKey,
    load: load,
    save: save,
    hydrateFromCloud: hydrateFromCloud,
    onSync: onSync,
    defaultData: defaultData
  };
})(typeof window !== "undefined" ? window : this);
