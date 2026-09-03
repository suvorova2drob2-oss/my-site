/**
 * FCE class games Live — API URL (same backend as EGE: server/live-rooms-server.js).
 *
 * Local check: npm run live:local  OR  OPEN-FCE-CLASS-LIVE.bat
 * Then open http://127.0.0.1:8787/… (not file://)
 */
(function (W) {
  "use strict";

  var LIVE_HOST = "http://127.0.0.1:8787";
  var pageOrigin = LIVE_HOST;
  var apiOrigin = LIVE_HOST;
  var publicOrigin = LIVE_HOST;

  try {
    if (W.location && /^https?:$/i.test(String(W.location.protocol || ""))) {
      var host = String(W.location.host || "");
      if (host) {
        pageOrigin = String(W.location.protocol) + "//" + host;
      }
    }
  } catch (e) {}

  pageOrigin = String(pageOrigin || LIVE_HOST).replace(/\/$/, "");
  apiOrigin = pageOrigin;
  publicOrigin = pageOrigin;

  try {
    var hostname = String(W.location.hostname || "");
    var port = String(W.location.port || "");
    var isLocal = /^(localhost|127\.0\.0\.1)$/i.test(hostname);
    /* Vite (5173) and other dev servers do not run POST /live — talk to live:rooms on 8787 */
    if (isLocal && port && port !== "8787") {
      apiOrigin = LIVE_HOST;
      publicOrigin = LIVE_HOST;
    }
  } catch (e2) {}

  if (!W.__FCE_LIVE_API_URL__) {
    W.__FCE_LIVE_API_URL__ = apiOrigin + "/live";
  }
  if (!W.__FCE_LIVE_PUBLIC_ORIGIN__) {
    W.__FCE_LIVE_PUBLIC_ORIGIN__ = publicOrigin;
  }
})(typeof window !== "undefined" ? window : this);
