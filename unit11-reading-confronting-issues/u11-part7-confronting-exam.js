/**
 * FCE-style Reading Part 7 — Confronting issues (four extracts).
 * Engine: js/fce-reading-part7-matching-engine.js
 */
(function () {
  if (!window.FCE_READING_PART7) return;

  var NAMES = {
    A: "Land reclamation",
    B: "Cloud seeding",
    C: "Underwater farming (Nemo\u2019s Garden)",
    D: "Recycling dog waste (biodigester)"
  };

  FCE_READING_PART7.mountPage({
    pack: {
      letters: ["A", "B", "C", "D"],
      names: NAMES,
      examId: "unit11ConfrontingPart7",
      examLabel: "Reading: Confronting issues \u2014 Part 7 multiple matching",
      key: { 1: "C", 2: "B", 3: "C", 4: "A", 5: "B", 6: "D", 7: "A", 8: "C", 9: "D", 10: "B" },
      explanations: {
        1: {
          letter: "C",
          quote:
            "He started off growing basil in a miniature version of the 2\u00A0000 litre biospheres currently in use, and over the next few years the underwater habitat just got bigger and bigger as more money was put into the project."
        },
        2: {
          letter: "B",
          quote:
            "But what many people don\u2019t realise is that it\u2019s been around for several decades and has been employed in over fifty countries."
        },
        3: {
          letter: "C",
          quote:
            "Sergio Gamberini \u2026 came up with the concept whilst on a diving holiday in the area in 2012."
        },
        4: {
          letter: "A",
          quote:
            "In some areas fish stocks have been drastically reduced, putting the livelihoods of local fishermen at risk."
        },
        5: {
          letter: "B",
          quote:
            "Whether it works or not is still open to debate; as yet, there is no definitive scientific evidence that it does."
        },
        6: {
          letter: "D",
          quote: "but it should serve to teach people how waste can be useful"
        },
        7: {
          letter: "A",
          quote:
            "the last few years have seen a huge explosion in the number of land reclamation projects"
        },
        8: {
          letter: "C",
          quote:
            "Although still in its early stages, there is optimism that this sustainable form of agriculture could be extended and put to use on a larger scale"
        },
        9: {
          letter: "D",
          quote:
            "Harper ran trials on the lamp for over two years before it was put into full working operation at the end of 2017."
        },
        10: {
          letter: "B",
          quote: "cloud seeding is receiving an increasing amount of press attention"
        }
      },
      statements: [
        { id: 1, text: "the gradual growth of the project from a very small-scale trial?" },
        {
          id: 2,
          text: "a widespread lack of awareness of how long the procedure has already been in use?"
        },
        { id: 3, text: "where the original idea for the procedure first occurred to someone?" },
        {
          id: 4,
          text: "the risk that local people\u2019s means of making a living may be damaged?"
        },
        { id: 5, text: "doubts about whether the procedure really works as claimed?" },
        { id: 6, text: "an aim to help the public understand that waste can be valuable?" },
        {
          id: 7,
          text: "a sharp recent increase in how many schemes of this kind are being carried out?"
        },
        { id: 8, text: "optimism that the approach could be applied more widely in future?" },
        {
          id: 9,
          text: "formal testing over a substantial period before the device was used for real?"
        },
        { id: 10, text: "greater interest from newspapers and other media?" }
      ],
      passages: [
        {
          letter: "A",
          short: "Land",
          name: NAMES.A,
          body:
            "<p>With a rapidly growing world population, one way for a country to increase the amount of land available for housing is to reclaim it from the sea. Shorelines can be extended, natural islands can be joined to the coastline, and artificial islands can be built from nothing.</p>" +
            "<p>Some Asian countries have been reclaiming land for the past two centuries \u2014 Singapore\u2019s land area has expanded by 25 per cent in that time \u2014 but the last few years have seen a huge explosion in the number of land reclamation projects. There are numerous examples on China\u2019s 14\u00A0500 kilometre coastline, including the brand-new city of Nanhui, built on 133 square kilometres of land, almost half of which was reclaimed from the sea.</p>" +
            "<p>There may be a price to pay, though. Land reclamation can put enormous pressure on the environment, polluting the sea and destroying habitats for marine life. In some areas fish stocks have been drastically reduced, putting the livelihoods of local fishermen at risk.</p>"
        },
        {
          letter: "B",
          short: "Cloud",
          name: NAMES.B,
          body:
            "<p>Some countries, such as the United Arab Emirates, respond to increasing water scarcity with a procedure called cloud seeding, whereby chemicals such as silver iodide or dry ice are released by aircraft or fired from the ground into clouds in order to increase the chance of rain or snowfall.</p>" +
            "<p>With the UN predicting water shortages for 40 per cent of the world\u2019s population by 2030, cloud seeding is receiving an increasing amount of press attention. But what many people don\u2019t realise is that it\u2019s been around for several decades and has been employed in over fifty countries. Whether it works or not is still open to debate; as yet, there is no definitive scientific evidence that it does, although the six-year Wyoming Weather Modification Pilot Project concluded in 2013 that cloud seeding can increase precipitation by between 5 and 15 per cent. On the downside, it\u2019s thought to have been the cause of serious flooding in some of the countries where it\u2019s been used.</p>"
        },
        {
          letter: "C",
          short: "Nemo",
          name: NAMES.C,
          body:
            "<p>Growing vegetables under the sea may seem like something out of a science fiction novel, but Nemo\u2019s Garden, situated off the coast of Noli on the Italian Riviera, is very much a reality, producing anything from lettuce and tomatoes to peas, beans, and even flowers.</p>" +
            "<p>Sergio Gamberini, a scuba diver and amateur gardener, came up with the concept whilst on a diving holiday in the area in 2012. He started off growing basil in a miniature version of the 2\u00A0000 litre biospheres currently in use, and over the next few years the underwater habitat just got bigger and bigger as more money was put into the project.</p>" +
            "<p>The temperature inside the biospheres is stable, no pests can wander in, so there\u2019s no need for pesticides, and sea water inside the structures evaporates, condenses on the roof and then drips back down as fresh water to feed the plants.</p>" +
            "<p>Although still in its early stages, there is optimism that this sustainable form of agriculture could be extended and put to use on a larger scale, offering a possible solution to the shortage of farmland.</p>"
        },
        {
          letter: "D",
          short: "Dog waste",
          name: NAMES.D,
          body:
            "<p>A streetlamp powered by dog waste is helping to keep the streets clean, as well as lighting up the area outside the UK home of its inventor, Brian Harper.</p>" +
            "<p>Dog walkers pick up their pet\u2019s mess in a free paper bag, place it into a container and turn a handle to move the mess into a biodigester. Here it is broken down by microorganisms to produce methane, which fuels the light.</p>" +
            "<p>Harper ran trials on the lamp for over two years before it was put into full working operation at the end of 2017. Ten bags of waste can power the light for two hours, which won\u2019t put an end to the world\u2019s energy crisis, but it should serve to teach people how waste can be useful.</p>" +
            "<p>Schemes using dog and other animal waste as a fuel source are being adopted in a number of other countries, from Canada to India.</p>"
        }
      ]
    }
  });
})();
