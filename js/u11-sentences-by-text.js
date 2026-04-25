/**
 * Unit 11 — Confronting issues. Standalone English sentences (from / aligned with) texts
 * text-01…04. Used by domino / chain games. `t` = 1|2|3|4 → Text A|B|C|D.
 * @type {{ id: string, t: 1|2|3|4, s: string, title: string }[]}
 */
(function (G) {
  "use strict";
  G = typeof globalThis !== "undefined" ? globalThis : G;
  if (!G) G = typeof window !== "undefined" ? window : this;

  G.U11_SENTENCE_CARD_META = {
    1: { key: "A", title: "A LAND RECLAMATION" },
    2: { key: "B", title: "B CLOUD SEEDING" },
    3: { key: "C", title: "C UNDERWATER FARMING" },
    4: { key: "D", title: "D RECYCLING DOG WASTE" }
  };

  /** @type {{ id: string, t: 1|2|3|4, s: string, title: string }[]} */
  G.U11_SENTENCE_DOMINO = [
    { id: "A1", t: 1, s: "With a rapidly growing world population, one way to increase the amount of land available for housing is to reclaim it from the sea.", title: "A" },
    { id: "A2", t: 1, s: "Shorelines can be extended, natural islands can be joined to the coastline, and artificial islands can be built from nothing.", title: "A" },
    { id: "A3", t: 1, s: "The last few years have seen a huge explosion in the number of land reclamation projects, with numerous examples on China’s 14,500-kilometre coastline.", title: "A" },
    { id: "A4", t: 1, s: "The brand-new city of Nanhui was built on 133 square kilometres of land, almost half of which was reclaimed from the sea.", title: "A" },
    { id: "A5", t: 1, s: "There may be a price to pay, though: land reclamation can put enormous pressure on the environment, polluting the sea and destroying habitats for marine life.", title: "A" },
    { id: "A6", t: 1, s: "In some areas fish stocks have been drastically reduced, putting the livelihoods of local fishermen at risk.", title: "A" },
    { id: "A7", t: 1, s: "Singapore’s land area has expanded by 25 per cent in two centuries as the country has been reclaiming land.", title: "A" },
    { id: "A8", t: 1, s: "Land reclamation may succeed in creating space for cities, but it can damage marine ecosystems that people depend on.", title: "A" },
    { id: "A9", t: 1, s: "Wetland loss and siltation are often cited as side effects of large-scale land reclamation near crowded coasts.", title: "A" },
    { id: "A10", t: 1, s: "In debates about development, the trade-off between new land and environmental harm remains politically sensitive.", title: "A" },

    { id: "B1", t: 2, s: "Some countries respond to increasing water scarcity with cloud seeding, whereby chemicals are released by aircraft or fired from the ground into clouds.", title: "B" },
    { id: "B2", t: 2, s: "The aim is to increase the chance of rain or snowfall when water shortages threaten people and agriculture.", title: "B" },
    { id: "B3", t: 2, s: "With the UN predicting water shortages for 40 per cent of the world’s population by 2030, cloud seeding is receiving an increasing amount of press attention.", title: "B" },
    { id: "B4", t: 2, s: "What many people don’t realise is that it’s been around for several decades and has been employed in over fifty countries.", title: "B" },
    { id: "B5", t: 2, s: "Whether it works or not is still open to debate; as yet, there is no definitive scientific evidence that it does.", title: "B" },
    { id: "B6", t: 2, s: "The Wyoming Weather Modification Pilot Project concluded in 2013 that cloud seeding can increase precipitation by between 5 and 15 per cent.", title: "B" },
    { id: "B7", t: 2, s: "On the downside, it’s thought to have been the cause of serious flooding in some of the countries where it’s been used.", title: "B" },
    { id: "B8", t: 2, s: "Silver iodide and dry ice are among the substances used to “seed” clouds in order to nudge the weather.", title: "B" },
    { id: "B9", t: 2, s: "Critics ask whether the money spent on weather modification would be better invested in long-term water infrastructure.", title: "B" },
    { id: "B10", t: 2, s: "In arid regions, any extra rainfall can sound like a miracle — until a storm causes damage someone else has to pay for.", title: "B" },

    { id: "C1", t: 3, s: "Growing vegetables under the sea may seem like something out of a science fiction novel, but Nemo’s Garden off the coast of Noli is very much a reality.", title: "C" },
    { id: "C2", t: 3, s: "The project is producing anything from lettuce and tomatoes to peas, beans, and even flowers under water.", title: "C" },
    { id: "C3", t: 3, s: "Sergio Gamberini, a scuba diver and amateur gardener, came up with the concept while on a diving holiday in the area in 2012.", title: "C" },
    { id: "C4", t: 3, s: "He started off growing basil in a miniature version of the 2,000-litre biospheres now in use.", title: "C" },
    { id: "C5", t: 3, s: "Over the next few years the underwater habitat got bigger and bigger as more money was put into the project.", title: "C" },
    { id: "C6", t: 3, s: "The temperature inside the biospheres is stable, and no pests can wander in, so there’s no need for pesticides.", title: "C" },
    { id: "C7", t: 3, s: "Sea water inside the structures evaporates, condenses on the roof and then drips back down as fresh water to feed the plants.", title: "C" },
    { id: "C8", t: 3, s: "Although still in its early stages, there is optimism that this sustainable form of agriculture could be extended and put to use on a larger scale.", title: "C" },
    { id: "C9", t: 3, s: "The idea offers a possible solution to the shortage of farmland in a warming world, at least in coastal regions with calm seas.", title: "C" },
    { id: "C10", t: 3, s: "Underwater “greenhouses” have to prove they can pay for themselves before the model spreads far beyond a few trial sites.", title: "C" },
    { id: "C11", t: 3, s: "Gamberini’s experiment blurs the line between diving tourism and agri-tech innovation.", title: "C" },
    { id: "C12", t: 3, s: "Plants in biospheres respond to a stable micro-climate, much like a high-tech polytunnel on land.", title: "C" },

    { id: "D1", t: 4, s: "A streetlamp powered by dog waste is helping to keep the streets clean, as well as lighting the area outside the UK home of its inventor, Brian Harper.", title: "D" },
    { id: "D2", t: 4, s: "Dog walkers pick up their pet’s mess in a free paper bag, place it into a container and turn a handle to move the mess into a biodigester.", title: "D" },
    { id: "D3", t: 4, s: "Here it is broken down by microorganisms to produce methane, which fuels the light.", title: "D" },
    { id: "D4", t: 4, s: "Harper ran trials on the lamp for over two years before it was put into full working operation at the end of 2017.", title: "D" },
    { id: "D5", t: 4, s: "Ten bags of waste can power the light for two hours, which won’t put an end to the world’s energy crisis, but it should serve to teach people how waste can be useful.", title: "D" },
    { id: "D6", t: 4, s: "Schemes using dog and other animal waste as a fuel source are being adopted in a number of other countries, from Canada to India.", title: "D" },
    { id: "D7", t: 4, s: "The design turns an everyday nuisance on the pavement into a small, visible loop of local energy production.", title: "D" },
    { id: "D8", t: 4, s: "Councils and dog owners alike get a practical lesson in what anaerobic digestion can do in a public space.", title: "D" },
    { id: "D9", t: 4, s: "A single lamp won’t decarbonise a city, but it can nudge people to see organic refuse as a resource, not just rubbish.", title: "D" },
    { id: "D10", t: 4, s: "Where dog waste is collected reliably, the same technology could in principle be scaled to larger digesters in parks.", title: "D" }
  ];

  /**
   * Двусторонние «камни» как в домино: L и R &mdash; половинки (текст 1&ndash;4 + предложение).
   * 10 пар (A&le;A, A&le;B, &hellip; D&le;D) × 3 варианта = 30 костяшек.
   */
  G.U11_buildDoubleDominoDeck = function () {
    if (!G.U11_SENTENCE_DOMINO || !G.U11_SENTENCE_DOMINO.length) return [];
    var byT = { 1: [], 2: [], 3: [], 4: [] };
    G.U11_SENTENCE_DOMINO.forEach(function (c) {
      if (byT[c.t]) byT[c.t].push(c.s);
    });
    function pick(t, avoid) {
      var arr = byT[t];
      if (!arr || !arr.length) return "";
      var pool = arr.filter(function (s) { return s !== avoid; });
      var use = pool.length ? pool : arr;
      return use[Math.floor(Math.random() * use.length)];
    }
    var tiles = [];
    var n = 0;
    for (var a = 1; a <= 4; a++) {
      for (var b = a; b <= 4; b++) {
        for (var k = 0; k < 3; k++) {
          var sL = a === b ? pick(a) : pick(a);
          var sR = a === b ? pick(b, sL) : pick(b);
          tiles.push({ id: "DD" + n++, L: { t: a, s: sL }, R: { t: b, s: sR } });
        }
      }
    }
    return tiles;
  };
})(typeof globalThis !== "undefined" ? globalThis : this);
