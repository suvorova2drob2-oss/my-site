/**
 * EGE Live rooms — API + public site origin for student links.
 * Local: npm run live:rooms → http://127.0.0.1:8787
 * Production: set these before this file loads, or edit below.
 */
(function (W) {
  "use strict";
  if (!W.__EGE_LIVE_API_URL__) {
    W.__EGE_LIVE_API_URL__ = "http://127.0.0.1:8787/live";
  }
  // Student invite links must be http(s), not file://
  if (!W.__EGE_LIVE_PUBLIC_ORIGIN__) {
    W.__EGE_LIVE_PUBLIC_ORIGIN__ = "http://127.0.0.1:8787";
  }
})(typeof window !== "undefined" ? window : this);
