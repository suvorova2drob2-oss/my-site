/**
 * ОГЭ hub (oge/oge.html): scoped profile slot oge — не трогает cpe/fce/ege.
 * Подключать после prep-track-scope.js + prep-course-profile.js.
 */
(function (global) {
  global.__PREP_DEPLOY_TRACK__ = "oge";
  global.__PREP_ACTIVE_TRACK__ = "oge";
  global.__PREP_PAGE_TRACK__ = "oge";

  function syncProfile() {
    try {
      var p = global.prepCourseProfile;
      if (!p || typeof p.load !== "function" || typeof p.save !== "function") return;
      var cur = p.load();
      if (cur.courseTrack === "oge" && p.normalizeCourseId(cur.courseId) === "oge") return;
      p.save({
        courseTrack: "oge",
        courseId: "oge",
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
