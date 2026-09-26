/**
 * Making a positive change — full-page exercises (?person=luke|sophia).
 */
(function (W) {
  "use strict";

  function params() {
    return new URLSearchParams(W.location.search);
  }

  function isSophia() {
    return params().get("person") === "sophia";
  }

  function readingBack(id) {
    var el = document.getElementById(id || "backLink");
    if (!el) return;
    if (params().get("from") === "reading") {
      el.href = "../../unit1-reading/making-a-positive-change/index.html";
      el.textContent = "\u2190 Making a positive change";
    }
  }

  function pageHref(pageFile, person) {
    var p = new URLSearchParams();
    if (params().get("from") === "reading") p.set("from", "reading");
    p.set("person", person);
    return pageFile + "?" + p.toString();
  }

  function mountPersonBar(containerId, pageFile) {
    var root = document.getElementById(containerId);
    if (!root) return;
    var sophia = isSophia();
    root.innerHTML =
      '<div class="pc-person-bar" role="group" aria-label="Speaker">' +
      '<a class="pc-person' +
      (sophia ? "" : " is-on") +
      '" href="' +
      pageHref(pageFile, "luke") +
      '">A · Luke</a>' +
      '<a class="pc-person' +
      (sophia ? " is-on" : "") +
      '" href="' +
      pageHref(pageFile, "sophia") +
      '">B · Sophia</a>' +
      "</div>";
  }

  function applyPersonLabels(opts) {
    opts = opts || {};
    var sophia = isSophia();
    var tag = document.getElementById(opts.tagId || "personTag");
    var title = document.getElementById(opts.titleId || "pageTitle");
    if (tag) {
      tag.textContent = sophia
        ? "Vocabulary · Lifestyle · Sophia"
        : "Vocabulary · Lifestyle · Luke";
    }
    if (title && opts.titles) {
      title.textContent = sophia ? opts.titles.sophia : opts.titles.luke;
    }
    if (opts.bodyClass) {
      document.body.classList.toggle("pc-ex--sophia", sophia);
    }
  }

  function pack() {
    return W.U1_LUKE_LIFESTYLE_PACK || {};
  }

  W.U1_PC_EX_BOOT = {
    isSophia: isSophia,
    readingBack: readingBack,
    mountPersonBar: mountPersonBar,
    applyPersonLabels: applyPersonLabels,
    pack: pack
  };
})(typeof window !== "undefined" ? window : globalThis);
