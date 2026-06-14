/**
 * ЕГЭ hub (ege/ege.html): scoped profile slot ege — не трогает cpe/fce.
 * Подключать после prep-track-scope.js + prep-course-profile.js.
 */
(function (global) {
  global.__PREP_DEPLOY_TRACK__ = "ege";
  global.__PREP_ACTIVE_TRACK__ = "ege";
  global.__PREP_PAGE_TRACK__ = "ege";

  function syncProfile() {
    try {
      var p = global.prepCourseProfile;
      if (!p || typeof p.load !== "function" || typeof p.save !== "function") return;
      var cur = p.load();
      if (cur.courseTrack === "ege" && p.normalizeCourseId(cur.courseId) === "ege") return;
      p.save({
        courseTrack: "ege",
        courseId: "ege",
        wizardCompleted: cur.wizardCompleted !== false,
      });
    } catch (e) {}
  }

  if (global.prepCourseProfile) {
    syncProfile();
  } else {
    global.addEventListener("load", syncProfile);
  }
})(typeof window !== "undefined" ? window : this);
