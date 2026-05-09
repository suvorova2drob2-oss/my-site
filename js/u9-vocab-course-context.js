/**
 * Unit 9 vocabulary folder: CPE vs FCE navigation.
 * ?course=fce from unit9.html (Mastering B2); default cpe from Levels hub if linked later.
 * See .cursor/rules/course-tracks-hub-separation.mdc
 */
(function () {
  try {
    var p = new URLSearchParams(window.location.search || "");
    var raw = (p.get("course") || "cpe").toLowerCase();
    var course = raw === "fce" ? "fce" : "cpe";
    window.U9_VOCAB_COURSE = course;

    function qCourse() {
      return course === "fce" ? "?course=fce" : "";
    }

    var el = document.getElementById("u9-nav-levels");
    if (el) {
      el.href = course === "fce" ? "../unit9.html" : "../index.html";
      el.textContent = course === "fce" ? "\u2190 Unit 9 menu" : "\u2190 Levels hub";
    }

    document.querySelectorAll("a.u9-back-vocab-index").forEach(function (a) {
      a.href = "../index.html" + qCourse();
    });

    document.querySelectorAll("a.task-card.u9-task-from-vocab").forEach(function (a) {
      var h = a.getAttribute("href");
      if (!h || course !== "fce" || h.indexOf("course=") >= 0) return;
      a.href = h + (h.indexOf("?") >= 0 ? "&" : "?") + "course=fce";
    });

    document.querySelectorAll("a.u9-nav-sibling").forEach(function (a) {
      var hs = a.getAttribute("href");
      if (!hs || hs.indexOf("course=") >= 0) return;
      a.href = hs + (hs.indexOf("?") >= 0 ? "&" : "?") + "course=" + encodeURIComponent(course);
    });
  } catch (e) {}
})();
