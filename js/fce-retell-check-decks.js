/**
 * Retell check — deck registry per unit.
 * Each deck: { id, label, readTitle, blocks[] }
 *
 * window.FCE_RETELL_CHECK_DECKS
 */
(function (W) {
  "use strict";

  function blocksFrom(globalKey) {
    return W[globalKey] ? W[globalKey].slice() : [];
  }

  /** @type {Record<number, {id:string,label:string,readTitle:string,blurb:string,blocksKey:string}[]>} */
  var BY_UNIT = {
    1: [
      {
        id: "lifestyle",
        label: "Lifestyle",
        readTitle: "Reading — This is your life",
        blurb: "Lucas · Maja · Reo · Ben (4)",
        blocksKey: "U1_LIFESTYLE_RETELL_BLOCKS"
      },
      {
        id: "clothes",
        label: "Clothes",
        readTitle: "Listening — SB 1.1 · Clothes",
        blurb: "Speakers 1–5 (5)",
        blocksKey: "U1_CLOTHES_RETELL_BLOCKS"
      }
    ]
  };

  W.FCE_RETELL_CHECK_DECKS = {
    byUnit: BY_UNIT,
    getDecks: function (unit) {
      var n = parseInt(unit, 10);
      var rows = BY_UNIT[n] || [];
      return rows.map(function (row) {
        return {
          id: row.id,
          label: row.label,
          readTitle: row.readTitle,
          blurb: row.blurb,
          blocks: blocksFrom(row.blocksKey)
        };
      }).filter(function (d) {
        return d.blocks && d.blocks.length;
      });
    }
  };
})(typeof window !== "undefined" ? window : globalThis);
