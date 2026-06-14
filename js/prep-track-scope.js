/**
 * Page track scope (cpe | ege | fce) — must load before prep-course-profile.js.
 * Each hub keeps its own profile slot; tracks do not overwrite each other.
 *
 * Set window.__PREP_PAGE_TRACK__ in HTML head, or:
 * <script src="js/prep-track-scope.js" data-track="cpe|ege|fce" vite-ignore></script>
 */
(function (global) {
  function norm(t) {
    var s = String(t || "").trim().toLowerCase();
    if (s === "cpe" || s === "ege" || s === "fce") return s;
    return "";
  }

  function fromPath() {
    try {
      var p = String(global.location.pathname || "").replace(/\\/g, "/").toLowerCase();
      if (/\/ege(\/|$)/.test(p) || /(^|\/)ege\.html$/.test(p) || /(^|\/)ege-[^/]+\.html$/.test(p)) {
        return "ege";
      }
      if (/\/fce(\/|$)/.test(p)) return "fce";
      if (/\/cpe(\/|$)/.test(p) || /-vocabulary\/cpe/.test(p) || /-use-of-english\/cpe/.test(p)) {
        return "cpe";
      }
      if (/(^|\/)index\.html$/.test(p) || /\/$/.test(p)) return "cpe";
    } catch (e) {}
    return "";
  }

  var sc = global.document && global.document.currentScript;
  var track =
    norm(sc && sc.getAttribute("data-track")) ||
    norm(global.__PREP_PAGE_TRACK__) ||
    norm(global.__PREP_DEPLOY_TRACK__) ||
    fromPath() ||
    "cpe";

  global.__PREP_ACTIVE_TRACK__ = track;
  global.__PREP_PAGE_TRACK__ = track;

  global.prepTrackScope = {
    get: function () {
      return norm(global.__PREP_ACTIVE_TRACK__) || "cpe";
    },
    profileKeySuffix: function (optionalTrack) {
      return norm(optionalTrack) || norm(global.__PREP_ACTIVE_TRACK__) || "cpe";
    },
    profileStorageKey: function (baseKey, optionalTrack) {
      return String(baseKey || "prep-course-profile-v1") + "::" + this.profileKeySuffix(optionalTrack);
    },
    isExamHub: function (t) {
      t = norm(t || global.__PREP_ACTIVE_TRACK__);
      return t === "cpe" || t === "ege" || t === "fce";
    },
  };
})(typeof window !== "undefined" ? window : this);
