/**

 * Making a positive change — Phrases FAB (Luke). Practice opens full pages.

 */

(function (W) {

  "use strict";



  var BASE = "../../unit1-vocabulary/lifestyle/";



  function exHref(page, person) {

    return BASE + page + "?from=reading&person=" + person;

  }



  function linksFor(person) {

    return [

      { label: "MCQ", href: exHref("luke-phrase-mcq.html", person) },

      { label: "Gaps", href: exHref("luke-phrase-gaps.html", person) },

      { label: "Key word", href: exHref("luke-key-word.html", person) },

      { label: "Paraphrase", href: exHref("luke-paraphrase.html", person) },

      { label: "Role-play", href: exHref("luke-role-play.html", person) }

    ];

  }



  function boot() {

    var P = W.U1_LUKE_LIFESTYLE_PACK;

    if (!P || !W.FCE_COOL_PHRASES_DRAWER) return;

    W.FCE_COOL_PHRASES_DRAWER.mount({

      id: "positive-change",

      speakers: [

        {

          id: "luke",

          letter: "A",

          label: "A · Luke",

          phrases: P.phrases,

          speaking: P.speaking

        },

        {

          id: "sophia",

          letter: "B",

          label: "B · Sophia",

          phrases: P.phrasesSophia || [],

          speaking: P.speakingSophia

        }

      ],

      practiceLinkGroups: [

        { id: "luke", label: "A · Luke", links: linksFor("luke") },

        { id: "sophia", label: "B · Sophia", links: linksFor("sophia") }

      ],

      fabLine1: "Phrases",

      fabLine2: "Lifestyle",

      fabTitle: "Phrases · Making a positive change",

      exercisesFabLine1: "Exercises",

      exercisesFabLine2: "Lifestyle",

      exercisesFabTitle: "Exercises · full page",

      exercisesDrawerTitle: "Exercises · Part 7",

      exercisesDrawerAria: "Part 7 lifestyle exercises",

      drawerTitle: "Phrases · Part 7",

      drawerAria: "Phrases · Luke and Sophia",

      speakerSelectLabel: "Person"

    });

  }



  if (document.readyState === "loading") {

    document.addEventListener("DOMContentLoaded", boot);

  } else {

    boot();

  }

})(typeof window !== "undefined" ? window : globalThis);

