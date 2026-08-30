/**
 * Movie Club sessions → same shape as Fleabag workshop sessions
 * so fleabag-lesson.js / buildFlow can run unchanged.
 *
 * Real packs (e.g. Sterling Point) register on window.MOVIE_CLUB_PACKS[id]
 * and replace the stub session for that catalog id.
 */
(function (global) {
  var catalog = global.MOVIE_CLUB_CATALOG || [];
  var packs = global.MOVIE_CLUB_PACKS || {};

  function splitThemes(themes) {
    return String(themes || "")
      .split("·")
      .map(function (t) {
        return t.replace(/\s+/g, " ").trim();
      })
      .filter(Boolean);
  }

  function stubBeats(item, n) {
    var themes = splitThemes(item.themes);
    var out = [];
    var i;
    for (i = 1; i <= n; i++) {
      var seed =
        themes[(i - 1) % Math.max(themes.length, 1)] ||
        item.themes ||
        "What landed for you in this moment?";
      out.push({
        id: "beat-" + i,
        label: "Beat " + i,
        teacher:
          "Stub · pack coming soon. Cover themes stay on the table: " +
          (item.themes || "TBD") +
          ".",
        blocks: ["watch", "phrases", "speak"],
        phrases: [],
        watch: {
          note:
            (item.episode || item.title) +
            " · clip / timecode TBD for Beat " +
            i +
            ".",
        },
        speak: {
          mission:
            "Personal English · 60–90 s · steal cover themes when they fit.",
          starters: [
            "In this world…",
            "What surprised me was…",
            "I’d argue that…",
          ],
          questions: [
            {
              q:
                "Discussion seed · " +
                seed +
                " — what do you see here? Have you lived a version of this?",
              examples: [
                "Name the behaviour without naming the plot spoiler.",
                "One personal parallel — keep it light.",
                "Other side: can you defend the opposite take?",
              ],
            },
          ],
        },
      });
    }
    return out;
  }

  function catalogToSession(item) {
    if (!item || item.href) return null;
    if (packs[item.id]) return packs[item.id];
    var isFilm = item.kind === "film";
    var nBeats = isFilm ? 8 : 6;
    return {
      id: item.id,
      season: 1,
      num: 1,
      title: item.title,
      icon: isFilm ? "🎬" : "📺",
      tagline: item.themes || item.kicker || "",
      synopsis:
        (item.episode ? item.episode + " · " : "") +
        (item.kicker ? item.kicker + ". " : "") +
        (item.themes || "Discussion themes TBD."),
      beats: stubBeats(item, nBeats),
      finale: {
        prompt:
          "Improv · 60 s · stay inside the cover themes: " +
          (item.themes || item.title) +
          ".",
      },
      homework: {
        note:
          "When clips land: shadow 3–5 lines × 3 takes. Until then — rewatch the episode/film and jot lines that match: " +
          (item.themes || "the cover themes") +
          ".",
      },
    };
  }

  var BY_ID = {};
  catalog.forEach(function (item) {
    var s = catalogToSession(item);
    if (s) BY_ID[s.id] = s;
  });

  function getSession(id) {
    return BY_ID[id] || packs[id] || null;
  }

  /** Same API fleabag-lesson.js expects */
  global.FLEABAG_WORKSHOP_getSession = getSession;
  global.MOVIE_CLUB_getSession = getSession;
  global.MOVIE_CLUB_SESSIONS = BY_ID;
})(typeof window !== "undefined" ? window : globalThis);
