/**
 * Unit 10 vocabulary folder: CPE vs FCE navigation.
 * Append ?course=fce when opening from unit10.html (Mastering B2); default ?course=cpe from Prep / Levels hub.
 * See .cursor/rules/course-tracks-hub-separation.mdc
 */
(function () {
  try {
    var p = new URLSearchParams(window.location.search || "");
    var raw = (p.get("course") || "cpe").toLowerCase();
    var course = raw === "fce" ? "fce" : "cpe";
    window.U10_VOCAB_COURSE = course;

    function qCourse() {
      return course === "fce" ? "?course=fce" : "";
    }

    var el = document.getElementById("u10-nav-levels");
    if (el) {
      el.href = course === "fce" ? "../fce.html" : "../index.html";
      el.textContent = course === "fce" ? "\u2190 Course home" : "\u2190 Levels hub";
    }

    if (document.body.classList.contains("u10-vocab-books")) {
      var nbLeft = document.getElementById("nav-back");
      if (nbLeft) {
        nbLeft.href = course === "fce" ? "../../fce.html" : "../../index.html";
        nbLeft.textContent = course === "fce" ? "\u2190 Course home" : "\u2190 Levels hub";
      }
    }

    document.querySelectorAll("a.u10-back-vocab-index").forEach(function (a) {
      a.href = "../index.html" + qCourse();
    });

    document.querySelectorAll("a.task-card.u10-task-from-vocab").forEach(function (a) {
      var h = a.getAttribute("href");
      if (!h || course !== "fce" || h.indexOf("course=") >= 0) return;
      a.href = h + (h.indexOf("?") >= 0 ? "&" : "?") + "course=fce";
    });

    document.querySelectorAll("a.u10-nav-sibling").forEach(function (a) {
      var hs = a.getAttribute("href");
      if (!hs || hs.indexOf("course=") >= 0) return;
      a.href = hs + (hs.indexOf("?") >= 0 ? "&" : "?") + "course=" + encodeURIComponent(course);
    });
  } catch (e) {}
})();
