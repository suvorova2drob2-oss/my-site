/**
 * Unit 7 · Black Friday reading — full-page phrase exercises (?from=reading).
 */
(function (W) {
  "use strict";

  function params() {
    return new URLSearchParams(W.location.search);
  }

  function readingBack(id) {
    var el = document.getElementById(id || "backLink");
    if (!el) return;
    if (params().get("from") === "reading") {
      el.href = "index.html";
      el.textContent = "\u2190 Black Friday";
    }
  }

  W.U7_BLACK_FRIDAY_EX_BOOT = {
    readingBack: readingBack,
    applyLabels: function (opts) {
      opts = opts || {};
      var tag = document.getElementById(opts.tagId || "personTag");
      var title = document.getElementById(opts.titleId || "pageTitle");
      if (tag) tag.textContent = "Reading · Unit 7 · Black Friday";
      if (title && opts.title) title.textContent = opts.title;
    }
  };
})(typeof window !== "undefined" ? window : globalThis);
