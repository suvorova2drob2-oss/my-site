/**
 * Единое хранилище контента сайта (папки → разделы → задания).
 * Сохранение только в localStorage + синхронизация между вкладками (BroadcastChannel).
 * В браузере нельзя записать файл в папку проекта без сервера — после правок делай git push.
 */
(function (global) {
  var KEY = "prep-site-content-v1";
  var LEGACY = ["prep-course-cms-config-v1::site", "prep-course-cms-config-v1"];

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
    try {
      var raw = global.localStorage.getItem(KEY);
      if (raw) {
        var d = JSON.parse(raw);
        if (d && Array.isArray(d.folders)) return d;
      }
    } catch (e2) {}
    return defaultData();
  }

  function save(data) {
    try {
      global.localStorage.setItem(KEY, JSON.stringify(data));
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

  global.PrepSiteContent = {
    KEY: KEY,
    load: load,
    save: save,
    onSync: onSync,
    defaultData: defaultData
  };
})(typeof window !== "undefined" ? window : this);
