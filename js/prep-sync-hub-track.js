/**

 * CPE / FCE hub: pin active page track (scoped profile slot).

 * Load after prep-track-scope.js + prep-course-profile.js.

 */

(function (global) {

  var sc = global.document && global.document.currentScript;

  var want = String((sc && sc.getAttribute("data-track")) || global.__PREP_PAGE_TRACK__ || "").toLowerCase();

  if (want !== "cpe" && want !== "fce") return;

  global.__PREP_ACTIVE_TRACK__ = want;

  global.__PREP_PAGE_TRACK__ = want;

  try {

    var p = global.prepCourseProfile;

    if (!p || typeof p.load !== "function" || typeof p.save !== "function") return;

    var cur = p.load();

    if (cur.courseTrack === "creator") return;

    p.save({ courseTrack: want, courseId: want, wizardCompleted: cur.wizardCompleted !== false });

  } catch (e) {}

})(typeof window !== "undefined" ? window : this);

