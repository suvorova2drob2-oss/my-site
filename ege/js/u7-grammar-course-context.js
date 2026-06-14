/**
 * Unit 7 grammar folder: CPE vs FCE (same pattern as u8-grammar-course-context.js).
 */
(function () {
  try {
    var p = new URLSearchParams(window.location.search || "");
    var raw = (p.get("course") || "cpe").toLowerCase();
    var course = raw === "fce" ? "fce" : "cpe";
    window.U7_GRAMMAR_COURSE = course;

    function qCourse() {
      return course === "fce" ? "?course=fce" : "";
    }

    var el = document.getElementById("u7g-nav-home");
    if (el) {
      el.href = course === "fce" ? "../unit7.html" : "../index.html";
      el.textContent = course === "fce" ? "\u2190 Unit 7 menu" : "\u2190 Levels hub";
    }

    document.querySelectorAll("a.u7g-back-grammar-index").forEach(function (a) {
      a.href = "../index.html" + qCourse();
    });

    document.querySelectorAll("a.task-card.u7g-task-from-grammar").forEach(function (a) {
      var h = a.getAttribute("href");
      if (!h || course !== "fce" || h.indexOf("course=") >= 0) return;
      a.href = h + (h.indexOf("?") >= 0 ? "&" : "?") + "course=fce";
    });

    document.querySelectorAll("a.u7g-nav-sibling").forEach(function (a) {
      var hs = a.getAttribute("href");
      if (!hs || hs.indexOf("course=") >= 0) return;
      a.href = hs + (hs.indexOf("?") >= 0 ? "&" : "?") + "course=" + encodeURIComponent(course);
    });
  } catch (e) {}
})();
