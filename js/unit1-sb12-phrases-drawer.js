/**
 * Unit 1 · SB 1.2 — Phrases + Exercises FABs (Listening).
 */
(function (W) {
  "use strict";

  function boot() {
    var api = W.FCE_U1_SB12_LEXIS;
    var pack = W.U1_SB12_LISTENING_PACK;
    if (!api || !W.FCE_COOL_PHRASES_DRAWER || typeof api.drawerSpeakers !== "function") {
      return;
    }

    function exHref(page, speakerId) {
      return page + "?from=listening&speaker=" + encodeURIComponent(speakerId);
    }

    function linksFor(speakerId) {
      return [
        { label: "MCQ", href: exHref("phrase-mcq.html", speakerId) },
        { label: "Gaps", href: exHref("phrase-gaps.html", speakerId) },
        { label: "Paraphrase", href: exHref("paraphrase.html", speakerId) },
        { label: "Role-play", href: exHref("role-play.html", speakerId) }
      ];
    }

    var ids =
      (pack && pack.speakerIds) ||
      (api.speakers || []).map(function (sp) {
        return sp.id;
      });

    var practiceLinkGroups = ids.map(function (sid) {
      var sp = pack && pack.speakerById ? pack.speakerById(sid) : null;
      return {
        id: sid,
        label: (sp && sp.label) || sid,
        links: linksFor(sid)
      };
    });

    W.FCE_COOL_PHRASES_DRAWER.mount({
      id: "sb12",
      speakers: api.drawerSpeakers(),
      practiceLinkGroups: practiceLinkGroups,
      fabLine1: "Phrases",
      fabLine2: "SB 1.2",
      fabTitle: "SB 1.2 phrases",
      exercisesFabLine1: "Exercises",
      exercisesFabLine2: "SB 1.2",
      exercisesFabTitle: "Exercises · SB 1.2 full page",
      exercisesDrawerTitle: "Exercises · Track 1.2",
      exercisesDrawerAria: "SB 1.2 listening exercises",
      drawerTitle: "Phrases · SB 1.2",
      drawerAria: "SB 1.2 Cool Words",
      speakerSelectLabel: "Speaker"
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})(typeof window !== "undefined" ? window : globalThis);
