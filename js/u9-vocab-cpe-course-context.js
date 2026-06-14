/**
 * Unit 9 vocabulary — CPE Prep (unit9-vocabulary/cpe/).
 */
(function () {
  try {
    var path = String(location.pathname || "").replace(/\\/g, "/").toLowerCase();
    var inCpeFolder = path.indexOf("/unit9-vocabulary/cpe") >= 0;
    var p = new URLSearchParams(window.location.search || "");
    var rawQ = String(p.get("course") || "").toLowerCase();
    var course =
      rawQ === "fce"
        ? "fce"
        : inCpeFolder || rawQ === "cpe" || p.get("prep_stay") === "1" || !!p.get("backLabel")
          ? "cpe"
          : "fce";

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

    document.querySelectorAll("#back-link, .cpe-level-folder-back").forEach(function (back) {
      if (course !== "cpe") {
        var hubDepth = parseInt(back.getAttribute("data-u9-vocab-hub-depth"), 10);
        if (isNaN(hubDepth)) hubDepth = 1;
        back.href = relPrefix(hubDepth) + "index.html";
        return;
      }
      var levelsDepth = parseInt(back.getAttribute("data-u9-levels-depth"), 10);
      if (isNaN(levelsDepth)) levelsDepth = 2;
      var screen = back.getAttribute("data-u9-hub-screen") || "unit9";
      back.href =
        relPrefix(levelsDepth) + "index.html?prep_stay=1&screen=" + encodeURIComponent(screen);
      var lbl = p.get("backLabel");
      if (lbl && lbl.toLowerCase().indexOf("level") >= 0) {
        back.textContent = "\u2190 " + decodeURIComponent(String(lbl).replace(/\+/g, " "));
      }
    });

    document.querySelectorAll("a.u9-cpe-sibling").forEach(function (a) {
      var h = a.getAttribute("href");
      if (!h) return;
      if (course === "cpe") a.href = withCourseQuery(h);
    });

    if (course === "cpe" && inCpeFolder) {
      document.querySelectorAll("#u9-back-link, .cpe-vocab-back").forEach(function (el) {
        var back = p.get("back");
        var label = p.get("backLabel");
        if (back) {
          el.href = back;
          el.textContent =
            "\u2190 " + (label ? decodeURIComponent(String(label).replace(/\+/g, " ")) : "Back");
          return;
        }
        el.href = "../index.html?course=cpe&backLabel=" + encodeURIComponent("Vocabulary \u2014 Level 9");
        el.textContent = "\u2190 Vocabulary \u2014 Level 9";
      });
    }
  } catch (e) {}
})();
