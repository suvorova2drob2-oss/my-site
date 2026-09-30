/**
 * SB 1.2 Listening — full-page exercises (?speaker=sp1&from=listening).
 */
(function (W) {
  "use strict";

  var IDS = ["sp1", "sp2", "sp3", "sp5", "sp8"];

  function params() {
    return new URLSearchParams(W.location.search);
  }

  function currentSpeaker() {
    var p = params().get("speaker") || "sp1";
    return IDS.indexOf(p) >= 0 ? p : "sp1";
  }

  function speakerLabel(id) {
    var sp = W.U1_SB12_LISTENING_PACK && W.U1_SB12_LISTENING_PACK.speakerById(id);
    return (sp && sp.label) || id;
  }

  function listeningBack(id) {
    var el = document.getElementById(id || "backLink");
    if (!el) return;
    if (params().get("from") === "listening") {
      el.href = "index.html";
      el.textContent = "\u2190 SB 1.2 Listening";
    }
  }

  function pageHref(pageFile, speakerId) {
    var p = new URLSearchParams();
    if (params().get("from") === "listening") p.set("from", "listening");
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
      tag.textContent = "Listening · SB 1.2 · " + speakerLabel(sid);
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

  function nextSpeakerHref(pageFile) {
    var next = nextSpeakerId();
    if (!next) return null;
    return pageHref(pageFile, next);
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

  W.U1_SB12_EX_BOOT = {
    speakerIds: IDS,
    currentSpeaker: currentSpeaker,
    speakerLabel: speakerLabel,
    listeningBack: listeningBack,
    mountPersonBar: mountPersonBar,
    applyPersonLabels: applyPersonLabels,
    nextSpeakerHref: nextSpeakerHref,
    nextSpeakerCta: nextSpeakerCta,
    mountNextSpeakerLink: mountNextSpeakerLink
  };
})(typeof window !== "undefined" ? window : globalThis);
