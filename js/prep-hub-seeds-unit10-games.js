/**
 * Prep hub — Level 10 · Playground (CPE class formats hub).
 * Consumed by ensurePrepUnit10GamesFolder() in prep-hub-unit10-nests.js.
 */
(function (W) {
    "use strict";

    var gamesHub = {
        id: "u10_games_cpe_hub",
        title: "Playground · Unit 10 · CPE",
        subtitle: "Class-style game shells · decks lined up with this unit",
        kind: "prep-link",
        href: "games/cpe/unit10/index.html?course=cpe"
    };

    W.PREP_HUB_U10_GAMES_SEEDS = {
        folderGames: {
            title: "Playground",
            subtitle: "Unit 10 · CPE · lesson decks & group formats (off-scriptbook hub)"
        },
        hubTask: gamesHub,
        taskIdsOrdered: [gamesHub.id]
    };
})(typeof window !== "undefined" ? window : globalThis);
