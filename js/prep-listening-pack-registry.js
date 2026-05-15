/**
 * CPE Listening — контент пакетов отдельно от страниц-движков (Exam / Lexical / Speaking / Audio).
 *
 * Новый материал: добавь объект в PREP_LISTENING_PACK_REGISTRY и подключи его в нужном hub-seeds
 * (например prep-hub-seeds-unit10-listening.js через packId).
 *
 * Поля quad[].path — относительно корня сайта, приставка enginesBase задаёт общую папку упражнений.
 */
(function (W) {
    "use strict";

    /** @typedef {{ taskId: string, title: string, subtitle: string, path: string }} ListeningQuadRow */

    /**
     * @typedef {{
     *   hubSeedIdStrip: string,
     *   prepOpenFolderId: string,
     *   nestedFolder: { title: string, subtitle: string },
     *   enginesBase: string,
     *   quad: ListeningQuadRow[]
     * }} ListeningPackDef
     */

    /** @type {Record<string, ListeningPackDef>} */
    var PREP_LISTENING_PACK_REGISTRY = {
        /** Unit 10 · Listening Part 4 · Track 10 (архитекторы / WB — текущий продакшен). */
        u10_p4_track10: {
            hubSeedIdStrip: "u10_listening_p4_hub_seed",
            prepOpenFolderId: "prep_legacy_u10_listening_p4",
            nestedFolder: {
                title: "Listening Part 4 · Multiple matching",
                subtitle: "CPE Part 4 — five short extracts, eight statements"
            },
            enginesBase: "Listening Part 4 Multiple matching/",
            quad: [
                {
                    taskId: "u10_listening_p4_exam",
                    title: "Exam trainer",
                    subtitle: "Part 4 multiple matching · Track 10 · key + Stage 2 hunt",
                    path: "exam trainer/p4-multiple-matching.html"
                },
                {
                    taskId: "u10_listening_p4_lexical",
                    title: "Lexical trainer",
                    subtitle: "Gap fill, app games, Stage 2 script (Track 10)",
                    path: "Lexical trainer/index.html"
                },
                {
                    taskId: "u10_listening_p4_speaking",
                    title: "Speaking trainer",
                    subtitle: "Shadowing, exam speakers, speedy typing",
                    path: "Speaking trainer/index.html"
                },
                {
                    taskId: "u10_listening_p4_audio",
                    title: "Audio trainer",
                    subtitle: "Track 10 player, transcript, shadowing / gap / typing",
                    path: "Audio trainer/index.html"
                }
            ]
        }
    };

    /**
     * Четыре prep-link задачи для хаба (порядок: Exam → Lexical → Speaking → Audio).
     * @param {string} packId
     * @returns {{ id: string, title: string, subtitle: string, kind: string, href: string }[]}
     */
    function buildListeningQuadPrepLinks(packId) {
        var pack = PREP_LISTENING_PACK_REGISTRY[packId];
        if (!pack || !Array.isArray(pack.quad)) return [];
        var base = pack.enginesBase || "";
        return pack.quad.map(function (row) {
            return {
                id: row.taskId,
                title: row.title,
                subtitle: row.subtitle,
                kind: "prep-link",
                href: base + row.path
            };
        });
    }

    /**
     * Список стабильных id задач (для миграций / фильтров в nest).
     * @param {string} packId
     * @returns {string[]}
     */
    function listeningQuadTaskIds(packId) {
        var pack = PREP_LISTENING_PACK_REGISTRY[packId];
        if (!pack || !Array.isArray(pack.quad)) return [];
        return pack.quad.map(function (row) {
            return row.taskId;
        });
    }

    W.PREP_LISTENING_PACK_REGISTRY = PREP_LISTENING_PACK_REGISTRY;
    W.buildListeningQuadPrepLinks = buildListeningQuadPrepLinks;
    W.listeningQuadTaskIds = listeningQuadTaskIds;
})(typeof window !== "undefined" ? window : globalThis);
