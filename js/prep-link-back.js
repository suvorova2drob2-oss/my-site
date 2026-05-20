/**
 * Sets href on anchors with class .prep-link-back from URL ?back= (decoded),
 * else from <html data-prep-back-default="...">.
 * Use with hub prep-link tasks (?course=cpe&back=…) so «Back» returns to the folder workspace.
 */
(function () {
  function sanitizeReturnHref(raw) {
    if (raw == null) return "";
    var s = String(raw).trim();
    if (!s) return "";
    try {
      s = decodeURIComponent(s);
    } catch (e0) {}
    if (!s) return "";
    if (/^\s*(?:javascript|data|vbscript):/i.test(s)) return "";
    if (/^\s*\/\//.test(s)) return "";
    try {
      var u = new URL(s, window.location.href);
      if (u.origin !== window.location.origin) return "";
      return u.pathname + u.search + u.hash;
    } catch (e1) {
      return "";
    }
  }
  var fb = document.documentElement && document.documentElement.getAttribute("data-prep-back-default");
  var fallback = sanitizeReturnHref((fb && String(fb).trim()) || "index.html") || "index.html";
  var q = new URLSearchParams(window.location.search);
  var href = sanitizeReturnHref(q.get("back")) || fallback;
  document.querySelectorAll("a.prep-link-back").forEach(function (a) {
    a.setAttribute("href", href);
  });
})();
