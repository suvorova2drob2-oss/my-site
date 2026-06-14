/**
 * Unit 1 vocabulary: track from URL path or ?course=
 * - CPE Prep: unit1-vocabulary/cpe/
 */
(function () {
  try {
    var path = String(location.pathname || "").replace(/\\/g, "/").toLowerCase();
    var inCpeFolder =
      path.indexOf("/unit1-vocabulary/cpe/") >= 0 ||
      path.indexOf("/unit1-listening/cpe/") >= 0 ||
      path.indexOf("/unit1-reading/cpe/") >= 0 ||
      path.indexOf("/unit1-use-of-english/cpe/") >= 0 ||
      path.indexOf("/unit1-grammar/cpe/") >= 0;
    var p = new URLSearchParams(window.location.search || "");
    var rawQ = String(p.get("course") || "").toLowerCase();
    var course = rawQ === "cpe" || inCpeFolder ? "cpe" : "cpe";

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

    document.querySelectorAll("#back-link").forEach(function (back) {
      var toLevels = p.get("prep_stay") === "1" || !!p.get("backLabel");
      if (toLevels) {
        var levelsDepth = parseInt(back.getAttribute("data-u1-levels-depth"), 10);
        if (isNaN(levelsDepth)) levelsDepth = 3;
        var folderId = back.getAttribute("data-u1-prep-folder") || "prep_legacy_u1_vocab";
        back.href =
          relPrefix(levelsDepth) +
          "index.html?prep_stay=1&screen=unit1&prep_open_folder=" +
          encodeURIComponent(folderId);
        var lbl = p.get("backLabel");
        if (lbl) back.textContent = "\u2190 " + lbl;
        return;
      }

      var hubDepth = parseInt(back.getAttribute("data-u1-vocab-hub-depth"), 10);
      if (isNaN(hubDepth)) hubDepth = 1;
      back.href = withCourseQuery(relPrefix(hubDepth) + "index.html");
    });

    document.querySelectorAll("a.u1-cpe-sibling").forEach(function (a) {
      var h = a.getAttribute("href");
      if (!h) return;
      a.href = withCourseQuery(h);
    });
  } catch (e) {}
})();
