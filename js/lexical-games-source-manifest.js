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
            },
            {
                id: "u10_similes_vocab",
                description: "Unit 10 Similes · vocabulary folder (CPE) · keyed plain row kit",
                dataFile: "js/u10-similes-lexis.js",
                rowsGlobal: "U10_SIMILES_LEXIS_GAME_ROWS",
                plainGlobal: "U10_SIMILES_LEXIS_PLAIN",
                speakerGlobal: "LEX_U10_SIMILES_SPEAKER_LABEL",
                wordBankThemeId: "u10_similes"
            },
            {
                id: "u12_reading_road_to_betterment",
                description: "Unit 12 Reading · The Road to Betterment (Part 5) · phrase deck + quick dictionary",
                dataFile: "js/unit12-reading-road-to-betterment-lexicon.js",
                rowsGlobal: "U12_READING_ROAD_TO_BETTERMENT_LEXIS_GAME_ROWS",
                plainGlobal: "U12_READING_ROAD_TO_BETTERMENT_LEXIS_PLAIN",
                speakerGlobal: "LEX_U12_READING_ROAD_TO_BETTERMENT_LABEL",
                wordBankThemeId: "u12_reading_road_to_betterment",
                quickDictionaryEngine: "js/cpe-quick-dictionary-drawer.js"
            },
            {
                id: "u12_sports_idioms",
                description: "Unit 12 Vocabulary · Sports idioms · phrase deck",
                dataFile: "js/unit12-sports-idioms-lexicon.js",
                rowsGlobal: "U12_SPORTS_IDIOMS_LEXIS_GAME_ROWS",
                plainGlobal: "U12_SPORTS_IDIOMS_LEXIS_PLAIN",
                speakerGlobal: "LEX_U12_SPORTS_IDIOMS_LABEL",
                wordBankThemeId: "u12_sports_idioms"
            },
            {
                id: "u12_listening_disabled_access",
                description: "Unit 12 Listening · SB Track 12.1 Disabled access · phrase deck + quick dictionary",
                dataFile: "js/unit12-listening-sb12-1-disabled-access-lexicon.js",
                rowsGlobal: "U12_LISTENING_DISABLED_ACCESS_LEXIS_GAME_ROWS",
                plainGlobal: "U12_LISTENING_DISABLED_ACCESS_LEXIS_PLAIN",
                speakerGlobal: "LEX_U12_LISTENING_DISABLED_ACCESS_LABEL",
                wordBankThemeId: "u12_listening_disabled_access",
                quickDictionaryEngine: "js/cpe-quick-dictionary-drawer.js"
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
        unit10TttWordBankFile: "js/unit10-ttt-word-bank.js",
        unit10TttPage: "vocabulary-tic-tac-toe-unit10.html",
        unit12TttWordBankFile: "js/unit12-ttt-word-bank.js",
        unit12TttPage: "vocabulary-tic-tac-toe-unit12.html",
        unit12SnowballWordBankFile: "js/unit12-snowball-wordbank.js",
        unit12PlaygroundShellFile: "js/prep-u12-playground-shell.js",
        unit12PlaygroundHub: "games/cpe/unit12/index.html",
        unit12PlaygroundLexisScriptOrderHint:
            "games/cpe/unit12/echo-minute.html — unit12-reading + sports-idioms + listening lexicon → unit12-snowball-wordbank → engine",
        /** Vocab Gym hub bridge (Unit 10 / 12): tabs → Word Bank + fall pool filter + sticky / vault / TTT */
        /** Unit 10 Vocab Gym bridge — inline in index.html (u10LexGamesActive, openUnit10LexGamesHub, …) */
        unit12LexGamesBridgeFile: "js/prep-hub-unit12-lexgames.js",
        unit10StickyRegistryFile: "js/unit10-sticky-registry.js",
        unit12StickyRegistryFile: "js/unit12-sticky-registry.js",
        unit12StickyPacksFile: "js/unit12-sticky-packs.js",
        vocabGymGameSurfaces: [
            "wordBank",
            "flip",
            "fall",
            "mcq",
            "express",
            "hear",
            "hearPar",
            "match",
            "sticky",
            "ticTacToe",
            "prepVault"
        ],
        /** Unit 10 playground Snowball — темы = те же plainAnchoredRowPacks (см. unit10-snowball-wordbank.js) */
        unit10SnowballWordBankFile: "js/unit10-snowball-wordbank.js",
        /** Эталон порядка подключения лексики на страницах playground: listening-p4-wb10-pack → books → shakespeare → similes → unit10-snowball-wordbank (как в echo-minute.html). */
        unit10PlaygroundLexisScriptOrderHint: "games/cpe/unit10/echo-minute.html — блок из пяти скриптов перед движком",
        /** Общий движок цепочки фраз (mount + fillThemeRail); страницы юнитов подключают свой wordbank-модуль */
        snowballPhrasesEngineFile: "js/prep-snowball-phrases-engine.js",
        /** Playground Unit 10 · голосовое бинго 3×3 (prep-retell-chain-speech-match + этот движок) */
        voiceBingoEngineFile: "js/prep-voice-bingo-engine.js",
        /** Playground · Echo Minute — 60s sprint: TTS definition (hidden text), voice/type answer + skip */
        echoMinuteEngineFile: "js/prep-echo-minute-engine.js",
        /** Playground · Alias — block-based card grid (prep-alias-engine.css + mount) */
        aliasEngineFile: "js/prep-alias-engine.js",
        aliasEngineCssFile: "css/prep-alias-engine.css",
        unit12AliasPageFile: "games/cpe/unit12/alias.html",
        /** Playground · Pictionary — canvas draw + host guess grid (prep-pictionary-engine.css + mount) */
        pictionaryEngineFile: "js/prep-pictionary-engine.js",
        pictionaryEngineCssFile: "css/prep-pictionary-engine.css",
        unit12PictionaryPageFile: "games/cpe/unit12/pictionary.html",
        /** CPE Listening Part 3 MC — 2-stage (MC + hunt), grey shell */
        cpeListeningP3McEngineFile: "js/cpe-listening-p3-mc-engine.js",
        cpeListeningP3McHuntFile: "js/cpe-listening-p3-mc-hunt.js",
        cpeListeningP3McCssFile: "css/cpe-listening-p3-mc-shell.css",
        unit12ListeningP3PageFile: "unit12-listening/part3-disabled-access/index.html",
        unit12Listening121LexiconFile: "js/unit12-listening-sb12-1-disabled-access-lexicon.js",
        cpeListeningTranscriptPhrasesFile: "js/cpe-listening-transcript-phrases.js",
        /** Playground · Shadowing Star — shadowing with class audio + runner-style mic feedback */
        shadowingStarEngineFile: "js/prep-shadowing-star-engine.js",
        /** Playground · Gap Audio Round — SB 10.1 full track + typed gaps per sentence (see js/unit10-gap-audio-round-data.js) */
        gapAudioRoundEngineFile: "js/prep-gap-audio-round-engine.js",
        /** Unit 10 Millionaire — passage facts + text gaps + synonym MCQs · games/cpe/unit10/millionaire/index.html */
        millionaireU10LexisBuilderFile: "js/prep-millionaire-u10-lexis.js",
        hubWordBankScreen: "index.html · cpeWordBankRender / cpeWbItems",
        fallPoolBuilder: "index.html · ensureU9FallPool"
    };
})(typeof window !== "undefined" ? window : globalThis);
