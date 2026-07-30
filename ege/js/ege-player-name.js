/**
 * Shared display name for EGE (and Prep/FCE keys on the same origin).
 * Returning visitors reuse the saved name for Live auto-join and UI greetings.
 *
 *   EgePlayerName.get() → string ("" if none)
 *   EgePlayerName.set(name) → boolean
 *   EgePlayerName.clear()
 */
(function (W) {
  "use strict";

  var EGE_KEY = "egePlayerDisplayName";
  var PREP_KEY = "prep-player-display-name-v1";
  var FCE_KEY = "masteringB2PlayerName";
  var MAIN_KEY = "english_mastery_perfect";

  function clean(n) {
    return String(n || "")
      .trim()
      .replace(/\s+/g, " ")
      .slice(0, 40);
  }

  function get() {
    var keys = [EGE_KEY, PREP_KEY, FCE_KEY];
    var i;
    for (i = 0; i < keys.length; i++) {
      try {
        var v = clean(localStorage.getItem(keys[i]));
        if (v) return v;
      } catch (e1) {}
    }
    try {
      var raw = localStorage.getItem(MAIN_KEY);
      if (!raw) return "";
      var p = JSON.parse(raw);
      return clean(p && p.name);
    } catch (e2) {
      return "";
    }
  }

  function set(name) {
    var n = clean(name);
    if (!n) return false;
    try {
      localStorage.setItem(EGE_KEY, n);
    } catch (eA) {}
    try {
      localStorage.setItem(PREP_KEY, n);
    } catch (eB) {}
    try {
      localStorage.setItem(FCE_KEY, n);
    } catch (eC) {}
    try {
      var raw = localStorage.getItem(MAIN_KEY);
      var p = raw ? JSON.parse(raw) : {};
      if (!p || typeof p !== "object") p = {};
      p.name = n;
      localStorage.setItem(MAIN_KEY, JSON.stringify(p));
    } catch (eD) {
      try {
        localStorage.setItem(MAIN_KEY, JSON.stringify({ name: n }));
      } catch (eE) {}
    }
    try {
      document.cookie =
        "prep_player_display=" +
        encodeURIComponent(n) +
        ";path=/;max-age=" +
        60 * 60 * 24 * 400 +
        ";SameSite=Lax";
    } catch (eF) {}
    return true;
  }

  function clear() {
    try {
      localStorage.removeItem(EGE_KEY);
    } catch (e1) {}
  }

  W.EgePlayerName = {
    KEY: EGE_KEY,
    get: get,
    set: set,
    clear: clear
  };
})(typeof window !== "undefined" ? window : this);
