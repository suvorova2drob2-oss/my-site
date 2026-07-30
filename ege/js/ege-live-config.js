/**
 * EGE Live rooms — API + public site origin for student links.
 *
 * Default = this VPS (so invite links work for students).
 * If the page is opened on another real host/domain (not localhost), use that host.
 * Override anytime before this file loads: window.__EGE_LIVE_API_URL__ / __EGE_LIVE_PUBLIC_ORIGIN__.
 */
(function (W) {
  "use strict";

  var VPS_ORIGIN = "http://77.110.113.165:8787";
  var origin = VPS_ORIGIN;

  try {
    if (W.location && /^https?:$/i.test(String(W.location.protocol || ""))) {
      var host = String(W.location.host || "");
      if (host && !/^(localhost|127\.0\.0\.1)(:\d+)?$/i.test(host)) {
        origin = String(W.location.protocol) + "//" + host;
      }
    }
  } catch (e) {}

  origin = String(origin || VPS_ORIGIN).replace(/\/$/, "");

  if (!W.__EGE_LIVE_API_URL__) {
    W.__EGE_LIVE_API_URL__ = origin + "/live";
  }
  if (!W.__EGE_LIVE_PUBLIC_ORIGIN__) {
    W.__EGE_LIVE_PUBLIC_ORIGIN__ = origin;
  }
})(typeof window !== "undefined" ? window : this);
