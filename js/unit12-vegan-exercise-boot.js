/**
 * Unit 12 · Going vegan (Reading Part 7) — full-page phrase exercises (?speaker=jack&from=reading).
 */
(function (W) {
  "use strict";

  var IDS = ["jack", "sarah", "maya", "justin", "rhona"];

  function params() {
    return new URLSearchParams(W.location.search);
  }

  function currentSpeaker() {
    var p = params().get("speaker") || "jack";
    return IDS.indexOf(p) >= 0 ? p : "jack";
  }

  function speakerById(id) {
    var api = W.FCE_U12_VEGAN_READING_LEXIS;
    var list = (api && api.speakers) || [];
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i].id === id) return list[i];
    }
    return list[0] || null;
  }

  function speakerLabel(id) {
    var sp = speakerById(id);
    if (!sp) return id;
    return sp.label || id;
  }

  function readingBack(id) {
    var el = document.getElementById(id || "backLink");
    if (!el) return;
    if (params().get("from") === "reading") {
      el.href = "../part1-vegan-matching.html";
      el.textContent = "\u2190 Going vegan · Part 7";
    }
  }

  function pageHref(pageFile, speakerId) {
    var p = new URLSearchParams();
    if (params().get("from") === "reading") p.set("from", "reading");
    p.set("speaker", speakerId);
    return pageFile + "?" + p.toString();
  }

  function mountPersonBar(containerId, pageFile) {
    var root = document.getElementById(containerId);
    if (!root) return;
    var cur = currentSpeaker();
    var html =
      '<div class="pc-person-bar" role="group" aria-label="Speaker">';
    var i;
    for (i = 0; i < IDS.length; i++) {
      var sid = IDS[i];
      html +=
        '<a class="pc-person' +
        (sid === cur ? " is-on" : "") +
        '" href="' +
        pageHref(pageFile, sid) +
        '">' +
        speakerLabel(sid) +
        "</a>";
    }
    html += "</div>";
    root.innerHTML = html;
    var on = root.querySelector(".pc-person.is-on");
    if (on && on.scrollIntoView) {
      on.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
    }
  }

  function applyPersonLabels(opts) {
    opts = opts || {};
    var sid = currentSpeaker();
    var tag = document.getElementById(opts.tagId || "personTag");
    var title = document.getElementById(opts.titleId || "pageTitle");
    if (tag) {
      tag.textContent = "Reading · Part 7 · Going vegan · " + speakerLabel(sid);
    }
    if (title && opts.titles && opts.titles.default) {
      title.textContent = opts.titles.default;
    }
  }

  function nextSpeakerId() {
    var i = IDS.indexOf(currentSpeaker());
    if (i < 0 || i >= IDS.length - 1) return null;
    return IDS[i + 1];
  }

  function nextSpeakerCta(pageFile) {
    var next = nextSpeakerId();
    if (!next) return null;
    return {
      href: pageHref(pageFile, next),
      label: speakerLabel(next) + " \u2192"
    };
  }

  function mountNextSpeakerLink(containerId, pageFile) {
    var el = document.getElementById(containerId);
    if (!el) return;
    var cta = nextSpeakerCta(pageFile);
    if (!cta) {
      el.innerHTML = "";
      return;
    }
    el.innerHTML =
      '<div class="sb12-next-speaker-wrap"><a class="sb12-next-speaker" href="' +
      cta.href +
      '">' +
      cta.label +
      "</a></div>";
  }

  W.U12_VEGAN_EX_BOOT = {
    speakerIds: IDS,
    currentSpeaker: currentSpeaker,
    speakerLabel: speakerLabel,
    speakerById: speakerById,
    readingBack: readingBack,
    mountPersonBar: mountPersonBar,
    applyPersonLabels: applyPersonLabels,
    nextSpeakerCta: nextSpeakerCta,
    mountNextSpeakerLink: mountNextSpeakerLink
  };
})(typeof window !== "undefined" ? window : globalThis);
