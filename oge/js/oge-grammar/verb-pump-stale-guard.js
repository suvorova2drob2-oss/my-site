/**
 * If the browser cached an old verb-pump-app.js, reload once with ?vp= rev query.
 */
(function (W) {
  "use strict";
  var need = W.__OGE_VP_NEED_REV;
  if (!need) return;
  if (W.__OGE_VP_ENGINE_REV === need) return;
  try {
    var u = new URL(W.location.href);
    if (u.searchParams.get("vp") === String(need)) return;
    u.searchParams.set("vp", String(need));
    W.location.replace(u.toString());
  } catch (e) {
    /* ignore */
  }
})(typeof window !== "undefined" ? window : this);
