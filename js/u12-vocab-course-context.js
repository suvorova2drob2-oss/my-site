/**
 * Unit 12 vocabulary: track from URL path or ?course=
 * - FCE / Mastering B2: unit12-vocabulary/index.html + exercises at repo root of folder
 * - CPE Prep: unit12-vocabulary/cpe/
 *
 * See .cursor/rules/fce-cpe-content-folder-split.mdc
 */
(function () {
  try {
    var path = String(location.pathname || "").replace(/\\/g, "/").toLowerCase();
    var inCpeFolder = path.indexOf("/unit12-vocabulary/cpe/") >= 0;
    var p = new URLSearchParams(window.location.search || "");
    var rawQ = String(p.get("course") || "").toLowerCase();
    var course =
      rawQ === "fce" ? "fce" : rawQ === "cpe" || inCpeFolder ? "cpe" : "fce";
    window.U12_VOCAB_COURSE = course;

    /** @param {string} href */
    function withCourseQuery(href) {
      var h = String(href || "").trim();
      if (!h || h.indexOf("course=") >= 0) return h;
      return h + (h.indexOf("?") >= 0 ? "&" : "?") + "course=" + encodeURIComponent(course);
    }

    function relPrefix(depth) {
      var prefix = "";
      for (var i = 0; i < depth; i++) prefix += "../";
      return prefix;
    }

    document.querySelectorAll("a.u12-back-vocab-index").forEach(function (a) {
      var depth = parseInt(a.getAttribute("data-u12-vocab-hub-depth"), 10);
      if (isNaN(depth) || depth < 1) depth = 1;
      if (course === "cpe") {
        a.href = withCourseQuery(relPrefix(depth) + "cpe/index.html");
      } else {
        a.href = relPrefix(depth) + "index.html";
      }
    });

    document.querySelectorAll("a.u12-back-fce-unit").forEach(function (a) {
      var depth = parseInt(a.getAttribute("data-u12-unit-depth"), 10);
      if (isNaN(depth) || depth < 1) depth = 2;
      a.href = relPrefix(depth) + "unit12.html";
    });

    document.querySelectorAll("#back-link").forEach(function (back) {
      if (course !== "cpe") return;

      var toLevels = p.get("prep_stay") === "1" || !!p.get("backLabel");
      if (toLevels) {
        var levelsDepth = parseInt(back.getAttribute("data-u12-levels-depth"), 10);
        if (isNaN(levelsDepth)) levelsDepth = 3;
        var folderId =
          back.getAttribute("data-u12-prep-folder") || "prep_legacy_u12_vocab";
        back.href =
          relPrefix(levelsDepth) +
          "index.html?prep_stay=1&screen=unit12&prep_open_folder=" +
          encodeURIComponent(folderId);
        var lbl = p.get("backLabel");
        if (lbl) back.textContent = "\u2190 " + lbl;
        return;
      }

      var hubDepth = parseInt(back.getAttribute("data-u12-vocab-hub-depth"), 10);
      if (isNaN(hubDepth)) hubDepth = 1;
      back.href = withCourseQuery(relPrefix(hubDepth) + "index.html");
    });

    document.querySelectorAll("a.u12-cpe-sibling").forEach(function (a) {
      var h = a.getAttribute("href");
      if (!h) return;
      a.href = withCourseQuery(h);
    });
  } catch (e) {}
})();
