/**
 * Карта источников лексических игр / Word Bank / fall pool (документация + ориентир для агентов).
 * Не исполняется движком автоматически — чтобы не ломать legacy-сборщики за один раз.
 *
 * При добавлении нового «plain + таблица hint/ans»:
 * 1) завести данные в отдельном js (как Unit 10 P4),
 * 2) добавить сюда строку в plainAnchoredRowPacks,
 * 3) в index.html подключить сборку через LexicalGamesPlainRowKit + спикер для фильтра.
 */
(function (W) {
    "use strict";

    W.LEXICAL_GAMES_SOURCE_MANIFEST = {
        version: 1,
        /** Одна таблица { hint, ans } + один plain — игры и Word Bank через LexicalGamesPlainRowKit */
        plainAnchoredRowPacks: [
            {
                id: "u10_p4_listening",
                description: "Unit 10 Listening Part 4 · SB Track 10 · монологи",
                dataFile: "js/listening-p4-wb10-pack.js",
                rowsGlobal: "U10_P4_LEXIS_GAME_ROWS",
                plainGlobal: "U10_P4_LEXIS_PLAIN",
                speakerGlobal: "LEX_U10_P4_SPEAKER_LABEL",
                wordBankThemeId: "u10_p4",
                treasureHuntSibling: "LEX_LISTENING_P4_WB10_DATA"
            },
            {
                id: "u10_books_films_vocab",
                description: "Unit 10 Describing books & films · коллокации из текстов",
                dataFile: "js/u10-books-films-lexis.js",
                rowsGlobal: "U10_BOOKS_FILMS_LEXIS_GAME_ROWS",
                plainGlobal: "U10_BOOKS_FILMS_LEXIS_PLAIN",
                speakerGlobal: "LEX_U10_BOOKS_FILMS_SPEAKER_LABEL",
                wordBankThemeId: "u10_books"
            },
            {
                id: "u10_uoe_shakespeare_vocab",
                description: "Unit 10 Use of English · Shakespeare Part 1 + literary WF phrases · keyed plain row kit",
                dataFile: "js/use-of-english/u10-uoe-shakespeare-lexicon.js",
                rowsGlobal: "U10_UOE_SHAKESPEARE_LEXIS_GAME_ROWS",
                plainGlobal: "U10_UOE_SHAKESPEARE_LEXIS_PLAIN",
                speakerGlobal: "LEX_U10_UOE_SHAKESPEARE_SPEAKER_LABEL",
                wordBankThemeId: "u10_uoe_shakespeare"
            }
        ],
        /** Куски ensureU9FallPool() со своей логикой (reading scrape, idioms, env, prep, interior, art, minds eye…) */
        customFallPoolSlices: [
            { id: "reading_contemporary_art_five", note: "Jack / Valentina / … scrape + zip tasks — cpeWbTheme robots", wordBankThemeId: "robots" },
            { id: "reading_must_know_u9", note: "U9_MUST_KNOW_* — contemporary_art WB", wordBankThemeId: "contemporary_art" },
            { id: "idioms_art_creativity", note: "LEX_IDIOM_* passage — idioms WB", wordBankThemeId: "idioms" },
            { id: "listening_making_mark", note: "LEX_LISTEN_* — listening WB", wordBankThemeId: "listening" },
            { id: "environment_collocations", note: "LEX_ENV_* / LEX_ENV2_* — завязка на тексты окружения", wordBankThemeId: null },
            { id: "prep_disk_phrases", note: "prepBuildAppLists / LEX_PREP_PHRASE_DATA — prep WB", wordBankThemeId: "prep" },
            { id: "interior_design_article", note: "INTERIOR_DESIGN_VOCAB_CORE — interior WB + typed trainer", wordBankThemeId: "interior" },
            { id: "listening_art_restoration", note: "ART_REST_LISTEN_DATA + plain — art_restoration WB", wordBankThemeId: "art_restoration" },
            { id: "listening_minds_eye_track10", note: "U9_MINDS_EYE_WB_LEAD + transcript — minds_eye WB", wordBankThemeId: "minds_eye" }
        ],
        /** Отдельный билдер слов для Tic-Tac-Toe — при новой теме дополнить unit9-ttt-word-bank.js */
        ticTacToeBuilderFile: "js/unit9-ttt-word-bank.js",
        hubWordBankScreen: "index.html · cpeWordBankRender / cpeWbItems",
        fallPoolBuilder: "index.html · ensureU9FallPool"
    };
})(typeof window !== "undefined" ? window : globalThis);
