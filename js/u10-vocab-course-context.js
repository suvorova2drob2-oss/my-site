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
    } else if (path.indexOf("/unit10-vocabulary/cpe/") >= 0 || path.indexOf("/use-of-english/unit10/cpe/") >= 0) {
      pathTrack = "cpe";
    }
    var rawQ = String(p.get("course") || "").toLowerCase();
    var course =
      rawQ === "fce" ? "fce" : rawQ === "cpe" ? "cpe" : pathTrack ? pathTrack : "cpe";
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

    /** @param {HTMLElement} el */
    function applyLevelsHome(el) {
      var d = parseInt(el.getAttribute("data-u10-levels-depth"), 10);
      if (isNaN(d) || d < 1) d = 1;
      el.setAttribute("href", levelsPath(d));
      el.textContent = course === "fce" ? "\u2190 Course home" : "\u2190 Levels";
    }

    document.querySelectorAll("[data-u10-levels-depth]").forEach(applyLevelsHome);

    document.querySelectorAll("a.u10-back-vocab-index").forEach(function (a) {
      var depth = parseInt(a.getAttribute("data-u10-vocab-hub-depth"), 10);
      if (isNaN(depth) || depth < 1) depth = 1;
      var prefix = "";
      for (var i = 0; i < depth; i++) prefix += "../";
      var hubFile = course === "fce" ? "fce/index.html" : "cpe/index.html";
      a.href = withCourseQuery(prefix + hubFile);
    });

    document.querySelectorAll("a.task-card.u10-task-from-vocab").forEach(function (a) {
      var h = a.getAttribute("href");
      if (!h) return;
      a.href = withCourseQuery(h);
    });

    document.querySelectorAll("a.u10-nav-sibling").forEach(function (a) {
      var hs = a.getAttribute("href");
      if (!hs) return;
      a.href = withCourseQuery(hs);
    });
  } catch (e) {}
})();
