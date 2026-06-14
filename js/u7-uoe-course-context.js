/**
 * Unit 7 Use of English — CPE Prep back links from unit7-use-of-english/cpe/
 */
(function () {
  try {
    var path = String(location.pathname || "").replace(/\\/g, "/").toLowerCase();
    var inCpeFolder = path.indexOf("/unit7-use-of-english/cpe/") >= 0;
    if (!inCpeFolder) return;

    var p = new URLSearchParams(window.location.search || "");

    function relPrefix(depth) {
      var prefix = "";
      for (var i = 0; i < depth; i++) prefix += "../";
      return prefix;
    }

    document.querySelectorAll("#back-link, .cpe-level-folder-back").forEach(function (back) {
      var levelsDepth = parseInt(back.getAttribute("data-u7-levels-depth"), 10);
      if (isNaN(levelsDepth)) levelsDepth = 2;
      var screen = back.getAttribute("data-u7-hub-screen") || "unit7";
      back.href =
        relPrefix(levelsDepth) + "index.html?prep_stay=1&screen=" + encodeURIComponent(screen);
      var lbl = p.get("backLabel");
      if (lbl) back.textContent = "\u2190 " + decodeURIComponent(String(lbl).replace(/\+/g, " "));
    });

    document.querySelectorAll("a.u7-cpe-sibling").forEach(function (a) {
      var h = a.getAttribute("href");
      if (!h || h.indexOf("course=") >= 0) return;
      a.href = h + (h.indexOf("?") >= 0 ? "&" : "?") + "course=cpe";
    });
  } catch (e) {}
})();
