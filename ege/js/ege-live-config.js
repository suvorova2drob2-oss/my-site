/**
 * EGE Live rooms — API + public site origin for student links.
 *
 * If the page is opened via http(s) (VPS IP / domain), API and invite links
 * follow the same host automatically. Local fallback: 127.0.0.1:8787.
 */
(function (W) {
  "use strict";

  var fallback = "http://127.0.0.1:8787";
  var origin = fallback;
  try {
    if (W.location && /^https?:$/i.test(String(W.location.protocol || ""))) {
      origin = String(W.location.protocol) + "//" + String(W.location.host || "");
      if (!W.location.host) origin = fallback;
    }
  } catch (e) {
    origin = fallback;
  }

  if (!W.__EGE_LIVE_API_URL__) {
    W.__EGE_LIVE_API_URL__ = origin.replace(/\/$/, "") + "/live";
  }
  if (!W.__EGE_LIVE_PUBLIC_ORIGIN__) {
    W.__EGE_LIVE_PUBLIC_ORIGIN__ = origin.replace(/\/$/, "");
  }
})(typeof window !== "undefined" ? window : this);
