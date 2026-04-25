/**
 * Unit 11 — Eco-Uno: phrase cards by theme (A–D) and type (Problem / Solution / Action / Impact).
 * U11_ECO_UNO_META keys A–D match “Text A” … “Text D” in the Confronting issues reading block.
 * Specials: draw2, skip, reverse, wild.
 */
(function (G) {
  "use strict";
  G = typeof globalThis !== "undefined" ? globalThis : G;
  if (!G) G = typeof window !== "undefined" ? window : this;

  G.U11_ECO_UNO_META = {
    1: { key: "A", name: "Land Reclamation", short: "Land & Sea", emoji: "🟦" },
    2: { key: "B", name: "Cloud Seeding", short: "Weather & Water", emoji: "⬜" },
    3: { key: "C", name: "Underwater Farming", short: "Agriculture", emoji: "🟩" },
    4: { key: "D", name: "Recycling Dog Waste", short: "Energy & Waste", emoji: "🟫" }
  };

  G.U11_ECO_UNO_KIND = {
    problem: { label: "Problem", sh: "P" },
    solution: { label: "Solution", sh: "S" },
    action: { label: "Action", sh: "A" },
    impact: { label: "Impact", sh: "I" }
  };

  /**
   * @param {1|2|3|4} t
   * @param {'problem'|'solution'|'action'|'impact'} kind
   * @param {string} text
   * @param {string} id
   */
  function n(t, kind, text, id) {
    return { id: id, t: t, kind: kind, text: text, special: null };
  }

  function s(t, sp, id) {
    var label = { draw2: "Eco-Crisis (+2)", skip: "Natural Disaster (skip)", reverse: "Renewable Energy (reverse)", wild: "Global Innovation (choose theme)" }[sp] || sp;
    return { id: id, t: t, kind: "special", text: label, special: sp };
  }
  function wild(id) {
    return { id: id, t: 0, kind: "special", text: "Global Innovation (choose theme)", special: "wild" };
  }

  G.U11_ECO_UNO_CARDS = [
    n(1, "problem", "Polluting the sea", "A-P1"), n(1, "problem", "Destroying habitats for marine life", "A-P2"), n(1, "problem", "Fish stocks drastically reduced", "A-P3"),
    n(1, "solution", "Increase the amount of land available", "A-S1"), n(1, "solution", "Reclaim land from the sea", "A-S2"), n(1, "solution", "Build artificial islands", "A-S3"),
    n(1, "action", "Extend shorelines", "A-A1"), n(1, "action", "Join natural islands to the coastline", "A-A2"), n(1, "action", "Put enormous pressure on the environment", "A-A3"),
    n(1, "impact", "Put the livelihoods of local fishermen at risk", "A-I1"), n(1, "impact", "Expand land area", "A-I2"), n(1, "impact", "Create a brand-new city", "A-I3"),

    n(2, "problem", "Increasing water scarcity", "B-P1"), n(2, "problem", "Predict water shortages", "B-P2"), n(2, "problem", "Serious flooding", "B-P3"),
    n(2, "solution", "Increase the chance of rain or snowfall", "B-S1"), n(2, "solution", "Increase precipitation", "B-S2"), n(2, "solution", "Weather Modification Pilot Project", "B-S3"),
    n(2, "action", "Release chemicals from aircraft", "B-A1"), n(2, "action", "Fire chemicals from the ground", "B-A2"), n(2, "action", "Employ a procedure", "B-A3"),
    n(2, "impact", "Receive an increasing amount of press attention", "B-I1"), n(2, "impact", "Be open to debate", "B-I2"), n(2, "impact", "Lack of definitive scientific evidence", "B-I3"),

    n(3, "problem", "Shortage of farmland", "C-P1"), n(3, "problem", "Pests wandering in", "C-P2"), n(3, "problem", "Use of pesticides", "C-P3"),
    n(3, "solution", "Sustainable form of agriculture", "C-S1"), n(3, "solution", "Growing vegetables under the sea", "C-S2"), n(3, "solution", "Offer a possible solution", "C-S3"),
    n(3, "action", "Condense on the roof (sea water in biospheres)", "C-A1"), n(3, "action", "Put more money into the project", "C-A2"), n(3, "action", "Extend to a larger scale", "C-A3"),
    n(3, "impact", "Stable temperature", "C-I1"), n(3, "impact", "Produce fresh water to feed the plants", "C-I2"), n(3, "impact", "Something out of a science fiction novel", "C-I3"),

    n(4, "problem", "World’s energy crisis", "D-P1"), n(4, "problem", "Pet’s mess on the streets", "D-P2"), n(4, "problem", "Need to keep the streets clean", "D-P3"),
    n(4, "solution", "Use animal waste as a fuel source", "D-S1"), n(4, "solution", "Power the streetlamp (with that energy)", "D-S2"), n(4, "solution", "Move the mess into a biodigester", "D-S3"),
    n(4, "action", "Pick up mess in a paper bag", "D-A1"), n(4, "action", "Break down by microorganisms", "D-A2"), n(4, "action", "Produce methane", "D-A3"),
    n(4, "impact", "Fuel the light", "D-I1"), n(4, "impact", "Teach people how waste can be useful", "D-I2"), n(4, "impact", "Schemes being adopted in other countries", "D-I3")
  ];

  (function addSpecials() {
    for (var c = 1; c <= 4; c++) {
      G.U11_ECO_UNO_CARDS.push(s(c, "draw2", "X2-" + c + "-1"));
      G.U11_ECO_UNO_CARDS.push(s(c, "skip", "XSK-" + c));
      G.U11_ECO_UNO_CARDS.push(s(c, "reverse", "XRV-" + c));
    }
    G.U11_ECO_UNO_CARDS.push(wild("W-1"), wild("W-2"), wild("W-3"), wild("W-4"));
  })();
})(typeof globalThis !== "undefined" ? globalThis : this);
