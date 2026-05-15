/**
 * ЕГЭ-only origins: фиксируем трек и профиль курса в localStorage,
 * чтобы PrepSiteContent не читал пространство cpe по умолчанию.
 * Подключать после js/prep-course-profile.js (если он есть на странице).
 *
 * На общем localhost после ЕГЭ откройте CPE hub (index.html) или FCE (fce.html) —
 * там js/prep-sync-hub-track.js вернёт профиль в cpe/fce (кроме режима creator).
 */
(function (global) {
  global.__PREP_DEPLOY_TRACK__ = "ege";

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
