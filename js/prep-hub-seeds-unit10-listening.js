/**

 * Prep hub — Level 10 Listening nest.

 * Контент четырёх тренажёров берётся из js/prep-listening-pack-registry.js (packId ниже).

 */

(function (W) {

    "use strict";



    var PACK_ID = "u10_p4_track10";
    var PACK_ID_WB11 = "u10_p4_wb_track11";
    var PACK_ID_P2_WB12 = "u10_p2_wb_track12";



    var reg = W.PREP_LISTENING_PACK_REGISTRY;

    var build = W.buildListeningQuadPrepLinks;



    if (!reg || typeof build !== "function" || !reg[PACK_ID]) {

        try {

            console.warn(

                "[Prep hub] prep-hub-seeds-unit10-listening.js needs js/prep-listening-pack-registry.js before it (pack " +

                    PACK_ID +

                    ")."

            );

        } catch (e) {}

        return;

    }



    var packDef = reg[PACK_ID];
    var packDefWb11 = reg[PACK_ID_WB11] || null;
    var packDefP2Wb12 = reg[PACK_ID_P2_WB12] || null;
    var quad = build(PACK_ID);
    var quadWb11 = packDefWb11 ? build(PACK_ID_WB11) : [];
    var quadP2Wb12 = packDefP2Wb12 ? build(PACK_ID_P2_WB12) : [];



    W.PREP_HUB_U10_LISTENING_SEEDS = {

        folderListening: {

            title: "Listening",

            subtitle: "Unit 10 · open a section (each part uses its own trainers)"

        },

        part4: {

            packId: PACK_ID,

            folderTitle: packDef.nestedFolder.title,

            folderSubtitle: packDef.nestedFolder.subtitle,

            hubSeedIdStrip: packDef.hubSeedIdStrip,

            prepOpenFolderId: packDef.prepOpenFolderId,

            taskIdsOrdered: quad.map(function (t) {

                return t.id;

            }),

            defaultTasks: quad

        },
        part4Wb11: packDefWb11
            ? {
                  packId: PACK_ID_WB11,
                  folderTitle: packDefWb11.nestedFolder.title,
                  folderSubtitle: packDefWb11.nestedFolder.subtitle,
                  hubSeedIdStrip: packDefWb11.hubSeedIdStrip,
                  prepOpenFolderId: packDefWb11.prepOpenFolderId,
                  taskIdsOrdered: quadWb11.map(function (t) {
                      return t.id;
                  }),
                  defaultTasks: quadWb11
              }
            : null,
        part2Wb12: packDefP2Wb12
            ? {
                  packId: PACK_ID_P2_WB12,
                  folderTitle: packDefP2Wb12.nestedFolder.title,
                  folderSubtitle: packDefP2Wb12.nestedFolder.subtitle,
                  hubSeedIdStrip: packDefP2Wb12.hubSeedIdStrip,
                  prepOpenFolderId: packDefP2Wb12.prepOpenFolderId,
                  taskIdsOrdered: quadP2Wb12.map(function (t) {
                      return t.id;
                  }),
                  defaultTasks: quadP2Wb12
              }
            : null

        }

    };

})(typeof window !== "undefined" ? window : globalThis);


