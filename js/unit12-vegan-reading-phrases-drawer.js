/**

 * Unit 12 · Going vegan (Reading Part 7) — Cool phrases + Exercises FABs.

 */

(function (W) {

  "use strict";



  function boot() {

    var api = W.FCE_U12_VEGAN_READING_LEXIS;

    if (!api || !W.FCE_COOL_PHRASES_DRAWER || typeof api.drawerSpeakers !== "function") {

      return;

    }



    function exHref(page, speakerId) {

      return (

        "going-vegan/" +

        page +

        "?from=reading&speaker=" +

        encodeURIComponent(speakerId)

      );

    }



    function linksFor(speakerId) {

      var links = [

        { label: "MCQ", href: exHref("phrase-mcq.html", speakerId) },

        { label: "Gaps", href: exHref("phrase-gaps.html", speakerId) },

        { label: "Key word", href: exHref("key-word.html", speakerId) },

        { label: "Paraphrase", href: exHref("paraphrase.html", speakerId) },

        { label: "Role-play", href: exHref("role-play.html", speakerId) }

      ];

      if (speakerId === "jack") {

        links.unshift({

          label: "Jack's story",

          href: exHref("jack-story-studio.html", speakerId)

        });

      }

      return links;

    }



    var speakers = api.speakers || [];

    var practiceLinkGroups = speakers.map(function (sp) {

      return {

        id: sp.id,

        label: sp.label || sp.id,

        links: linksFor(sp.id)

      };

    });



    W.FCE_COOL_PHRASES_DRAWER.mount({

      id: "u12-vegan-reading",

      speakers: api.drawerSpeakers(),

      practiceLinkGroups: practiceLinkGroups,

      fabLine1: "Cool",

      fabLine2: "phrases",

      fabTitle: "Cool phrases — Going vegan",

      exercisesFabLine1: "Exercises",

      exercisesFabLine2: "Part 7",

      exercisesFabTitle: "Exercises · Going vegan full page",

      exercisesDrawerTitle: "Exercises · Part 7",

      exercisesDrawerAria: "Going vegan reading exercises",

      drawerTitle: "Cool phrases · Part 7",

      drawerAria: "Going vegan Cool phrases",

      speakerSelectLabel: "Speaker"

    });

  }



  if (document.readyState === "loading") {

    document.addEventListener("DOMContentLoaded", boot);

  } else {

    boot();

  }

})(typeof window !== "undefined" ? window : globalThis);

