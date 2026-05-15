/**

 * Prep hub — Level 10 Listening nest.

 * Контент четырёх тренажёров берётся из js/prep-listening-pack-registry.js (packId ниже).

 */

(function (W) {

    "use strict";



    var PACK_ID = "u10_p4_track10";



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

    var quad = build(PACK_ID);



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

        }

    };

})(typeof window !== "undefined" ? window : globalThis);


