/**
 * EGE Live rooms — API + public site origin for student links.
 *
 * Local first: if the page is opened on localhost / 127.0.0.1, use that host.
 * On the VPS IP or a real domain, use the page host.
 * file:// falls back to local live:rooms.
 *
 * Override anytime before this file loads:
 *   window.__EGE_LIVE_API_URL__ / window.__EGE_LIVE_PUBLIC_ORIGIN__
 */
(function (W) {
  "use strict";

  var LOCAL = "http://127.0.0.1:8787";
  var origin = LOCAL;

  try {
    if (W.location && /^https?:$/i.test(String(W.location.protocol || ""))) {
      var host = String(W.location.host || "");
      if (host) {
        origin = String(W.location.protocol) + "//" + host;
      }
    }
  } catch (e) {}

  origin = String(origin || LOCAL).replace(/\/$/, "");

  if (!W.__EGE_LIVE_API_URL__) {
    W.__EGE_LIVE_API_URL__ = origin + "/live";
  }
  if (!W.__EGE_LIVE_PUBLIC_ORIGIN__) {
    W.__EGE_LIVE_PUBLIC_ORIGIN__ = origin;
  }
})(typeof window !== "undefined" ? window : this);
