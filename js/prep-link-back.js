/**
 * Sets href on anchors with class .prep-link-back from URL ?back= (decoded),
 * else from <html data-prep-back-default="...">.
 * Use with hub prep-link tasks (?course=cpe&back=…) so «Back» returns to the folder workspace.
 */
(function () {
  function safeDec(raw) {
    if (raw == null) return "";
    try {
      var s = decodeURIComponent(String(raw).trim());
      if (!s) return "";
      if (/^\s*javascript:/i.test(s) || /^\s*data:/i.test(s)) return "";
      if (/^https?:\/\//i.test(s)) {
        var u = new URL(s, window.location.href);
        if (u.origin !== window.location.origin) return "";
        return u.pathname + u.search + u.hash;
      }
      return s;
    } catch (e) {
      return "";
    }
  }
  var fb = document.documentElement && document.documentElement.getAttribute("data-prep-back-default");
  var fallback = (fb && String(fb).trim()) || "index.html";
  var q = new URLSearchParams(window.location.search);
  var href = safeDec(q.get("back")) || fallback;
  document.querySelectorAll("a.prep-link-back").forEach(function (a) {
    a.setAttribute("href", href);
  });
})();
