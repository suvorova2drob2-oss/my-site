/**
 * Unit 10 vocabulary: track comes from ?course= or from URL folder …/unit10-vocabulary/fce/ vs …/cpe/.
 * - fce: Mastering B2 · home → fce.html
 * - cpe: Levels Prep · home → index.html
 *
 * Dedicated hubs: unit10-vocabulary/fce/index.html | unit10-vocabulary/cpe/index.html
 * See .cursor/rules/course-tracks-hub-separation.mdc
 */
(function () {
  try {
    var p = new URLSearchParams(window.location.search || "");
    var path = "";
    try {
      path = String(location.pathname || "").replace(/\\/g, "/").toLowerCase();
    } catch (ePath) {}
    var pathTrack = "";
    if (path.indexOf("/unit10-vocabulary/fce/") >= 0 || path.indexOf("/use-of-english/unit10/fce/") >= 0) {
      pathTrack = "fce";
    } else if (
      /\/unit10-vocabulary\/(phrasal-out|phrasal-up-out|prefix-out|crimes-and|criminal-titles|crime-punishment)/.test(path)
    ) {
      pathTrack = "fce";
    } else if (path.indexOf("/unit10-vocabulary/cpe/") >= 0 || path.indexOf("/use-of-english/unit10/cpe/") >= 0) {
      pathTrack = "cpe";
    }
    var rawQ = String(p.get("course") || "").toLowerCase();
    var course =
      rawQ === "fce" ? "fce" : rawQ === "cpe" ? "cpe" : pathTrack ? pathTrack : "cpe";
    if (path.indexOf("/unit10-vocabulary/fce/") >= 0) {
      course = "fce";
    }
    if (!rawQ && /\/unit\d+\.html$/i.test(path)) {
      course = "fce";
    }
    window.U10_VOCAB_COURSE = course;

    /** @param {string} href */
    function withCourseQuery(href) {
      var h = String(href || "").trim();
      if (!h || h.indexOf("course=") >= 0) return h;
      return h + (h.indexOf("?") >= 0 ? "&" : "?") + "course=" + encodeURIComponent(course);
    }

    function levelsPath(depth) {
      var prefix = "";
      for (var i = 0; i < depth; i++) prefix += "../";
      var file = course === "fce" ? "fce.html" : "index.html";
      return withCourseQuery(prefix + file);
    }

    var inCpeVocabHub =
      path.indexOf("/unit10-vocabulary/cpe/index.html") >= 0 ||
      /\/unit10-vocabulary\/cpe\/?$/.test(path);
    var inCpeVocabExercise =
      path.indexOf("/unit10-vocabulary/cpe/") >= 0 && !inCpeVocabHub;

    /** @param {HTMLElement} el */
    function applyLevelsHome(el) {
      var d = parseInt(el.getAttribute("data-u10-levels-depth"), 10);
      if (isNaN(d) || d < 1) d = 1;
      var prefix = "";
      for (var i = 0; i < d; i++) prefix += "../";
      if (course === "cpe" && inCpeVocabHub) {
        el.setAttribute("href", prefix + "index.html?prep_stay=1&screen=unit10");
        el.textContent = "\u2190 Level 10";
        return;
      }
      el.setAttribute("href", levelsPath(d));
      el.textContent = course === "fce" ? "\u2190 Course home" : "\u2190 Levels";
    }

    document.querySelectorAll("[data-u10-levels-depth]").forEach(applyLevelsHome);

    document.querySelectorAll("a.u10-back-vocab-index").forEach(function (a) {
      var depth = parseInt(a.getAttribute("data-u10-vocab-hub-depth"), 10);
      if (isNaN(depth) || depth < 1) depth = 1;
      var prefix = "";
      for (var i = 0; i < depth; i++) prefix += "../";
      var hubFile;
      if (course === "fce") {
        hubFile = inCpeVocabExercise ? "index.html" : "fce/index.html";
      } else if (inCpeVocabExercise) {
        hubFile = "index.html";
      } else {
        hubFile = "cpe/index.html";
      }
      a.href = withCourseQuery(prefix + hubFile);
    });

    document.querySelectorAll("a.task-card.u10-task-from-vocab, a.u10-task-from-vocab").forEach(function (a) {
      var h = a.getAttribute("href");
      if (!h) return;
      a.href = withCourseQuery(h);
    });

    document.querySelectorAll("a.u10-nav-sibling").forEach(function (a) {
      var hs = a.getAttribute("href");
      if (!hs) return;
      a.href = withCourseQuery(hs);
    });

    document.querySelectorAll("a.u10-back-unit10").forEach(function (a) {
      if (course !== "fce") return;
      var depth = parseInt(a.getAttribute("data-u10-unit-depth"), 10);
      if (isNaN(depth) || depth < 1) depth = 2;
      var prefix = "";
      for (var i = 0; i < depth; i++) prefix += "../";
      a.setAttribute("href", withCourseQuery(prefix + "unit10.html"));
      a.textContent = "\u2190 Unit 10";
    });

    document.querySelectorAll("[data-u10-cpe-only]").forEach(function (el) {
      if (course !== "cpe") {
        el.hidden = true;
        el.setAttribute("aria-hidden", "true");
      }
    });
  } catch (e) {}
})();
