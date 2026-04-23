/**
 * Cross-origin Netlify split (CPE / EGE / FCE = different domains): localStorage is not shared.
 * My courses appends ?prep_carry_name=… when navigating; this runs first on the target page
 * and merges the name into the same keys as index.html (english_mastery_perfect + fallback).
 */
(function (global) {
    var KEY = "prep-player-display-name-v1";
    var MAIN = "english_mastery_perfect";

    function apply() {
        try {
            var params = new global.URLSearchParams(global.location.search || "");
            if (!params.has("prep_carry_name")) return;
            var name = String(params.get("prep_carry_name") || "").trim().slice(0, 60);
            params.delete("prep_carry_name");
            var qs = params.toString();
            try {
                global.history.replaceState(
                    {},
                    "",
                    global.location.pathname + (qs ? "?" + qs : "") + (global.location.hash || "")
                );
            } catch (eH) {}
            if (!name) return;
            try {
                global.localStorage.setItem(KEY, name);
            } catch (eK) {}
            try {
                var raw = global.localStorage.getItem(MAIN);
                var p = raw ? JSON.parse(raw) : {};
                if (!p || typeof p !== "object") p = {};
                p.name = name;
                global.localStorage.setItem(MAIN, JSON.stringify(p));
            } catch (eM) {
                try {
                    global.localStorage.setItem(MAIN, JSON.stringify({ name: name }));
                } catch (e2) {}
            }
        } catch (e) {}
    }
    apply();
})(typeof window !== "undefined" ? window : this);
