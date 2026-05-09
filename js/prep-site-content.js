/**
 * Единое хранилище контента сайта (папки → разделы → задания).
 * localStorage + BroadcastChannel. Если подключён PrepCloudClient,
 * при save() данные уходят в облако; при загрузке страницы — PrepSiteContent.hydrateFromCloud().
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

  /**
   * Pull course folders from the cloud when PrepCloudClient is loaded and URL/key are set.
   * Safe no-op (resolves false) when cloud is not configured.
   */
  function hydrateFromCloud() {
    try {
      if (global.__PREP_BOXED_SITE__ === true) {
        return Promise.resolve(false);
      }
      var PC = global.PrepCloudClient;
      if (
        !PC ||
        typeof PC.pullCourseSnapshot !== "function" ||
        typeof PC.isReadConfigured !== "function" ||
        !PC.isReadConfigured()
      ) {
        return Promise.resolve(false);
      }
      var cid = getCourseId();
      return PC.pullCourseSnapshot(cid)
        .then(function (snap) {
          if (!snap || snap.data == null) return false;
          var data = snap.data;
          if (!data || !Array.isArray(data.folders)) return false;
          try {
            global.localStorage.setItem(namespacedKey(cid), JSON.stringify(data));
          } catch (eStore) {}
          broadcast();
          return true;
        })
        .catch(function () {
          return false;
        });
    } catch (e) {
      return Promise.resolve(false);
    }
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

/**
 * Mastering B2 (FCE) vs CPE: session flag + ?course=fce on in-page links.
 * Runs wherever prep-site-content.js is included (unit hubs, games, Level pages).
 */
(function () {
  var SS_KEY = "mb2FceSession";

  function onReady(fn) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  }

  function syncSessionFromUrl() {
    try {
      var course = String(new URLSearchParams(location.search || "").get("course") || "").toLowerCase();
      if (course === "fce") {
        sessionStorage.setItem(SS_KEY, "1");
      } else if (course === "cpe") {
        sessionStorage.removeItem(SS_KEY);
      }
    } catch (e) {}
  }

  function isFceCourseMode() {
    try {
      var course = String(new URLSearchParams(location.search || "").get("course") || "").toLowerCase();
      if (course === "cpe") return false;
      if (course === "fce") return true;
      return sessionStorage.getItem(SS_KEY) === "1";
    } catch (e) {
      return false;
    }
  }

  function shouldSkipRewrite(absUrl, rawHref) {
    if (/[?&]course=/i.test(rawHref)) return true;
    try {
      var path = absUrl.pathname || "";
      var parts = path.split("/").filter(Boolean);
      var last = parts.length ? parts[parts.length - 1] : "";
      if (parts.length === 1 && /^index\.html$/i.test(last)) return true;
    } catch (e) {}
    return false;
  }

  function withCourseFceParam(rawHref) {
    var hashIdx = rawHref.indexOf("#");
    var base = hashIdx >= 0 ? rawHref.slice(0, hashIdx) : rawHref;
    var hash = hashIdx >= 0 ? rawHref.slice(hashIdx) : "";
    var sep = base.indexOf("?") >= 0 ? "&" : "?";
    return base + sep + "course=fce" + hash;
  }

  onReady(function () {
    syncSessionFromUrl();
    if (!isFceCourseMode()) return;

    var homeLink = document.getElementById("mb2-course-home-link");
    if (homeLink) homeLink.setAttribute("href", "fce.html");

    var nodes = document.querySelectorAll("a[href]");
    for (var i = 0; i < nodes.length; i++) {
      var a = nodes[i];
      if (a === homeLink) continue;
      var raw = a.getAttribute("href");
      if (!raw || raw.charAt(0) === "#") continue;
      if (/^(mailto|javascript):/i.test(raw)) continue;

      var abs;
      try {
        abs = new URL(raw, location.href);
      } catch (e) {
        continue;
      }

      if (abs.origin !== location.origin) continue;
      if (shouldSkipRewrite(abs, raw)) continue;

      a.setAttribute("href", withCourseFceParam(raw));
    }
  });
})();
