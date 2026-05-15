/**
 * Родной хаб CPE (index.html) или FCE (fce.html): закрепляет courseId / courseTrack,
 * чтобы после страниц ЕГЭ на том же origin PrepSiteContent не оставался в namespace ege.
 * Создательский курс (courseTrack creator) не перезаписываем.
 *
 * Подключение: <script src="…/prep-sync-hub-track.js" data-track="cpe|fce" vite-ignore></script>
 * сразу после js/prep-course-profile.js.
 */
(function (global) {
  var sc = global.document && global.document.currentScript;
  var want = String((sc && sc.getAttribute("data-track")) || "").toLowerCase();
  if (want !== "cpe" && want !== "fce") return;
  try {
    var p = global.prepCourseProfile;
    if (!p || typeof p.load !== "function" || typeof p.save !== "function") return;
    var cur = p.load();
    if (cur.courseTrack === "creator") return;
    var cid = p.normalizeCourseId ? p.normalizeCourseId(cur.courseId) : String(cur.courseId || "");
    if (cur.courseTrack === want && cid === want) return;
    p.save({
      courseTrack: want,
      courseId: want,
      wizardCompleted: cur.wizardCompleted !== false,
    });
  } catch (e) {}
})(typeof window !== "undefined" ? window : this);
