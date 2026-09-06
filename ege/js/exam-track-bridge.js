/**
 * EGE / OGE exam pages: track-aware localStorage keys and hub links.
 * Load after __PREP_PAGE_TRACK__ is set (prep-ege-track / prep-oge-track).
 */
(function (w) {
  function trackId() {
    var t = String(w.__PREP_PAGE_TRACK__ || w.__PREP_ACTIVE_TRACK__ || "ege").toLowerCase();
    return t === "oge" ? "oge" : "ege";
  }

  w.__examTrackBridge = {
    trackId: trackId,
    storageKey: function (suffix) {
      return trackId() + "_" + String(suffix || "");
    },
    examHref: function (page) {
      var name = String(page || "");
      if (name.indexOf("oge-") === 0 || name.indexOf("ege-") === 0) return name;
      return (trackId() === "oge" ? "oge-" : "ege-") + name;
    },
    activityStorageKey: function () {
      return trackId() === "oge" ? "oge_activity_v1" : "ege_activity_v1";
    },
    statisticsStorageKey: function () {
      return trackId() === "oge" ? "ogeStatisticsDemoState" : "egeStatisticsDemoState";
    },
    hubHref: function () {
      return trackId() === "oge" ? "oge.html" : "ege.html";
    },
    liveDeckPrefix: function (defaultDeck) {
      if (w.__examLiveDeckOverride) return String(w.__examLiveDeckOverride);
      var d = String(defaultDeck || "");
      if (trackId() === "oge" && d.indexOf("ege-") === 0) {
        return "oge-" + d.slice(4);
      }
      return d;
    }
  };
})(typeof window !== "undefined" ? window : this);
