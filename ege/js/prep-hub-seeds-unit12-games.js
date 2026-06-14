/**
 * Prep hub — Level 12 · Playground (CPE class formats hub).
 */
(function (W) {
    "use strict";

    var gamesHub = {
        id: "u12_games_cpe_hub",
        title: "Playground · Unit 12 · CPE",
        subtitle: "Class-style game shells · decks lined up with this unit",
        kind: "prep-link",
        href: "games/cpe/unit12/index.html?course=cpe",
    };

    W.PREP_HUB_U12_GAMES_SEEDS = {
        folderGames: {
            title: "Playground",
            subtitle: "Unit 12 · CPE · lesson decks & group formats (off-scriptbook hub)",
        },
        hubTask: gamesHub,
        taskIdsOrdered: [gamesHub.id],
    };
})(typeof window !== "undefined" ? window : globalThis);
