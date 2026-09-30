/**
 * Unit 7 · Black Friday reading — Phrases + Exercises FABs.
 */
(function (W) {
  "use strict";

  function boot() {
    var api = W.FCE_U7_BLACK_FRIDAY_LEXIS;
    if (!api || !W.FCE_COOL_PHRASES_DRAWER || typeof api.drawerSpeakers !== "function") {
      return;
    }

    function exHref(page) {
      return page + "?from=reading";
    }

    var links = [
      { label: "MCQ", href: exHref("phrase-mcq.html") },
      { label: "Gaps", href: exHref("phrase-gaps.html") },
      { label: "Paraphrase", href: exHref("paraphrase.html") },
      { label: "Role-play", href: exHref("role-play.html") },
      {
        label: "Lexical games · Word Bank",
        href: "../unit7-lexical-games.html"
      }
    ];

    var practiceLinkGroups = [
      {
        id: "black-friday",
        label: "Black Friday · reading",
        links: links
      }
    ];

    W.FCE_COOL_PHRASES_DRAWER.mount({
      id: "u7-black-friday",
      speakers: api.drawerSpeakers(),
      practiceLinkGroups: practiceLinkGroups,
      fabLine1: "Phrases",
      fabLine2: "Black Friday",
      fabTitle: "Black Friday · Cool Words",
      exercisesFabLine1: "Exercises",
      exercisesFabLine2: "Black Friday",
      exercisesFabTitle: "Exercises · Black Friday full page",
      exercisesDrawerTitle: "Exercises · Black Friday",
      exercisesDrawerAria: "Black Friday reading exercises",
      drawerTitle: "Phrases · Black Friday",
      drawerAria: "Black Friday reading phrases",
      speakerSelectLabel: "Text"
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})(typeof window !== "undefined" ? window : globalThis);
