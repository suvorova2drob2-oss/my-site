/**
 * Level 12 Vocab Gym — Word Bank tabs + pool filter (mirrors Unit 10 pattern).
 */
(function (W) {
    "use strict";

    W.u12LexGamesActive = false;
    W.u12LexGamesPack = "reading";

    W.u12LexThemeFromPack = function () {
        if (W.u12LexGamesPack === "sports") return "u12_sports_idioms";
        if (W.u12LexGamesPack === "listening") return "u12_listening_disabled_access";
        return "u12_reading_road_to_betterment";
    };

    /** Vocab Gym engine — pack ids per game surface (mirrors Unit 10). */
    W.U12_VOCAB_GYM_GAME_MODES = {
        wordBankTabs: [
            { id: "reading", theme: "u12_reading_road_to_betterment", label: "The Road to Betterment · Reading" },
            { id: "sports", theme: "u12_sports_idioms", label: "Sports idioms · Vocabulary" },
            { id: "listening", theme: "u12_listening_disabled_access", label: "Listening · Track 12.1" },
        ],
        sticky: { reading: "u12reading", sports: "u12sports", listening: "u12listening" },
        ttt: {
            href: "vocabulary-tic-tac-toe-unit12.html",
            topicsGlobal: "VOCAB_TTT_U12_TOPIC_LIST",
            wordsGlobal: "VOCAB_TTT_U12_WORDS",
        },
        vault: {
            reading: "u12_reading_road_to_betterment",
            sports: "u12_sports_idioms",
            listening: "u12_listening_disabled_access",
        },
    };

    W.u12LexGamesPackToVaultPack = function (pack) {
        var m = W.U12_VOCAB_GYM_GAME_MODES.vault;
        if (pack === "sports") return m.sports;
        if (pack === "listening") return m.listening;
        return m.reading;
    };

    W.u12LexPackTabsSyncUI = function () {
        var wbTabs = document.querySelectorAll("#cpe-wb-u12-tabs .wb-u12-tab");
        var w;
        for (w = 0; w < wbTabs.length; w++) {
            var tb = wbTabs[w];
            var wbPack = tb.getAttribute("data-u12-wb-tab");
            var on = wbPack === W.u12LexGamesPack;
            tb.classList.toggle("active", on);
            tb.setAttribute("aria-selected", on ? "true" : "false");
        }
    };

    W.u12LexSetPack = function (pack) {
        W.u12LexGamesPack =
            pack === "sports" ? "sports" : pack === "listening" ? "listening" : "reading";
        W.u12LexGamesApplyPoolFilter();
        W.u12LexPackTabsSyncUI();
    };

    W.u12LexPackTabSelect = function (pack) {
        W.u12LexSetPack(
            pack === "sports" ? "sports" : pack === "listening" ? "listening" : "reading"
        );
        var wbScr = document.getElementById("screen-unit9-wordbank");
        if (wbScr && wbScr.classList.contains("u12-wb-only") && wbScr.classList.contains("active")) {
            cpeWbTheme = W.u12LexThemeFromPack();
            cpeWordBankRender();
        }
    };

    W.u12LexGamesApplyPoolFilter = function () {
        var spRead =
            typeof LEX_U12_READING_ROAD_TO_BETTERMENT_LABEL === "string"
                ? LEX_U12_READING_ROAD_TO_BETTERMENT_LABEL
                : "Reading: The Road to Betterment · Unit 12 (Part 5)";
        var spSports =
            typeof LEX_U12_SPORTS_IDIOMS_LABEL === "string"
                ? LEX_U12_SPORTS_IDIOMS_LABEL
                : "Vocabulary: Sports idioms · Unit 12";
        var spListen =
            typeof LEX_U12_LISTENING_DISABLED_ACCESS_LABEL === "string"
                ? LEX_U12_LISTENING_DISABLED_ACCESS_LABEL
                : "Listening: Disabled access · Unit 12 (SB Track 12.1)";
        u9FallSpeakerFilter =
            W.u12LexGamesPack === "sports"
                ? [spSports]
                : W.u12LexGamesPack === "listening"
                  ? [spListen]
                  : [spRead];
    };

    W.u12ReadingLexPlainText = function () {
        return typeof U12_READING_ROAD_TO_BETTERMENT_LEXIS_PLAIN === "string"
            ? U12_READING_ROAD_TO_BETTERMENT_LEXIS_PLAIN
            : "";
    };

    W.u12SportsIdiomsLexPlainText = function () {
        return typeof U12_SPORTS_IDIOMS_LEXIS_PLAIN === "string" ? U12_SPORTS_IDIOMS_LEXIS_PLAIN : "";
    };

    W.u12ReadingLexFallItems = function () {
        var plain = W.u12ReadingLexPlainText();
        var sp =
            typeof LEX_U12_READING_ROAD_TO_BETTERMENT_LABEL === "string"
                ? LEX_U12_READING_ROAD_TO_BETTERMENT_LABEL
                : "Reading: The Road to Betterment · Unit 12 (Part 5)";
        if (
            !plain ||
            typeof U12_READING_ROAD_TO_BETTERMENT_LEXIS_GAME_ROWS === "undefined" ||
            !U12_READING_ROAD_TO_BETTERMENT_LEXIS_GAME_ROWS.length
        ) {
            return [];
        }
        return lexicalGamesHintAnsRowsToFallPoolRows(
            plain,
            U12_READING_ROAD_TO_BETTERMENT_LEXIS_GAME_ROWS,
            sp
        );
    };

    W.u12SportsIdiomsLexFallItems = function () {
        var plain = W.u12SportsIdiomsLexPlainText();
        var sp =
            typeof LEX_U12_SPORTS_IDIOMS_LABEL === "string"
                ? LEX_U12_SPORTS_IDIOMS_LABEL
                : "Vocabulary: Sports idioms · Unit 12";
        if (
            !plain ||
            typeof U12_SPORTS_IDIOMS_LEXIS_GAME_ROWS === "undefined" ||
            !U12_SPORTS_IDIOMS_LEXIS_GAME_ROWS.length
        ) {
            return [];
        }
        return lexicalGamesHintAnsRowsToFallPoolRows(plain, U12_SPORTS_IDIOMS_LEXIS_GAME_ROWS, sp);
    };

    W.u12ListeningDisabledAccessLexPlainText = function () {
        return typeof U12_LISTENING_DISABLED_ACCESS_LEXIS_PLAIN === "string"
            ? U12_LISTENING_DISABLED_ACCESS_LEXIS_PLAIN
            : "";
    };

    W.u12ListeningDisabledAccessLexFallItems = function () {
        var plain = W.u12ListeningDisabledAccessLexPlainText();
        var sp =
            typeof LEX_U12_LISTENING_DISABLED_ACCESS_LABEL === "string"
                ? LEX_U12_LISTENING_DISABLED_ACCESS_LABEL
                : "Listening: Disabled access · Unit 12 (SB Track 12.1)";
        if (
            !plain ||
            typeof U12_LISTENING_DISABLED_ACCESS_LEXIS_GAME_ROWS === "undefined" ||
            !U12_LISTENING_DISABLED_ACCESS_LEXIS_GAME_ROWS.length
        ) {
            return [];
        }
        return lexicalGamesHintAnsRowsToFallPoolRows(
            plain,
            U12_LISTENING_DISABLED_ACCESS_LEXIS_GAME_ROWS,
            sp
        );
    };

    W.cpeWbBuildU12ReadingItems = function () {
        var sp =
            typeof LEX_U12_READING_ROAD_TO_BETTERMENT_LABEL === "string"
                ? LEX_U12_READING_ROAD_TO_BETTERMENT_LABEL
                : "Reading: The Road to Betterment · Unit 12 (Part 5)";
        var plain = W.u12ReadingLexPlainText();
        if (
            !plain ||
            typeof U12_READING_ROAD_TO_BETTERMENT_LEXIS_GAME_ROWS === "undefined" ||
            !U12_READING_ROAD_TO_BETTERMENT_LEXIS_GAME_ROWS.length
        ) {
            return [];
        }
        return lexicalGamesHintAnsRowsToWordBankItems(
            plain,
            U12_READING_ROAD_TO_BETTERMENT_LEXIS_GAME_ROWS,
            sp,
            "u12read"
        );
    };

    W.cpeWbBuildU12SportsItems = function () {
        var sp =
            typeof LEX_U12_SPORTS_IDIOMS_LABEL === "string"
                ? LEX_U12_SPORTS_IDIOMS_LABEL
                : "Vocabulary: Sports idioms · Unit 12";
        var plain = W.u12SportsIdiomsLexPlainText();
        if (
            !plain ||
            typeof U12_SPORTS_IDIOMS_LEXIS_GAME_ROWS === "undefined" ||
            !U12_SPORTS_IDIOMS_LEXIS_GAME_ROWS.length
        ) {
            return [];
        }
        return lexicalGamesHintAnsRowsToWordBankItems(plain, U12_SPORTS_IDIOMS_LEXIS_GAME_ROWS, sp, "u12sport");
    };

    W.cpeWbBuildU12ListeningItems = function () {
        var sp =
            typeof LEX_U12_LISTENING_DISABLED_ACCESS_LABEL === "string"
                ? LEX_U12_LISTENING_DISABLED_ACCESS_LABEL
                : "Listening: Disabled access · Unit 12 (SB Track 12.1)";
        var plain = W.u12ListeningDisabledAccessLexPlainText();
        if (
            !plain ||
            typeof U12_LISTENING_DISABLED_ACCESS_LEXIS_GAME_ROWS === "undefined" ||
            !U12_LISTENING_DISABLED_ACCESS_LEXIS_GAME_ROWS.length
        ) {
            return [];
        }
        return lexicalGamesHintAnsRowsToWordBankItems(
            plain,
            U12_LISTENING_DISABLED_ACCESS_LEXIS_GAME_ROWS,
            sp,
            "u12listen"
        );
    };

    W.openUnit12LexReadingPick = function (mode) {
        u9PendingLexGame = mode || "fall";
        u9FallStopLoop();
        u9FallHideModal();
        var scr = document.getElementById("screen-unit9-fall");
        if (scr) scr.classList.remove("playing");
        ensureU9FallPool();
        W.u12LexGamesApplyPoolFilter();
        if (u9PendingLexGame === "flip") openUnit9LexFlipGame();
        else if (u9PendingLexGame === "mcq") openUnit9McqGame();
        else if (u9PendingLexGame === "express") openUnit9ExpressGame();
        else if (u9PendingLexGame === "hear") openUnit9HearGame();
        else if (u9PendingLexGame === "hearPar") openUnit9HparGame();
        else if (u9PendingLexGame === "match") openUnit9MatchGame();
        else if (u9PendingLexGame === "sticky") W.openUnit12StickyGame();
        else openUnit9FallGame();
    };

    W.openUnit12StickyGame = function () {
        if (!prepLiveIsStudentSession) {
            try {
                window.prepLiveStickyStudentJoin = false;
            } catch (eSt) {}
        }
        W.u12LexGamesActive = true;
        u10LexGamesActive = false;
        W.u12LexGamesApplyPoolFilter();
        prepCourseHub.stickyLazyModes = prepCourseHub.stickyLazyModes || {};
        showScreen("screen-unit9-lex-sticky");
        window.requestAnimationFrame(function () {
            if (typeof unit12StickyPrimeLazyModes === "function") unit12StickyPrimeLazyModes(prepCourseHub);
            if (typeof unit12StickyRenderAllPacks === "function") unit12StickyRenderAllPacks();
            var sm =
                typeof u12LexGamesPackToStickyMode === "function"
                    ? u12LexGamesPackToStickyMode(W.u12LexGamesPack)
                    : "u12reading";
            u9StickyShowTask(sm);
        });
    };

    W.openUnit12PrepEscapeRoom = function () {
        W.u12LexGamesActive = true;
        u10LexGamesActive = false;
        prepEscapeReturnToUnit10LexGames = false;
        prepEscapeReturnToUnit12LexGames = true;
        prepEscapeInitialPack = W.u12LexGamesPackToVaultPack(W.u12LexGamesPack);
        openUnit9PrepEscapeRoom();
    };

    W.openUnit12WordBank = function (theme) {
        W.u12LexGamesActive = true;
        u10LexGamesActive = false;
        var th =
            theme === "u12_sports_idioms"
                ? "u12_sports_idioms"
                : theme === "u12_listening_disabled_access"
                  ? "u12_listening_disabled_access"
                  : theme === "u12_reading_road_to_betterment"
                    ? "u12_reading_road_to_betterment"
                    : W.u12LexThemeFromPack();
        W.u12LexSetPack(
            th === "u12_sports_idioms"
                ? "sports"
                : th === "u12_listening_disabled_access"
                  ? "listening"
                  : "reading"
        );
        cpeWbTheme = th;
        cpeWordBankEnsureBind();
        var wbScr = document.getElementById("screen-unit9-wordbank");
        if (wbScr) {
            wbScr.classList.add("u12-wb-only");
            wbScr.classList.remove("u10-wb-only");
        }
        var leadDef = document.getElementById("cpe-wb-lead-default");
        var leadU10 = document.getElementById("cpe-wb-lead-u10");
        var leadU12 = document.getElementById("cpe-wb-lead-u12");
        if (leadDef) leadDef.hidden = true;
        if (leadU10) leadU10.hidden = true;
        if (leadU12) leadU12.hidden = false;
        var u10t = document.getElementById("cpe-wb-u10-tabs");
        if (u10t) u10t.hidden = true;
        var u10m = document.getElementById("cpe-wb-u10-modes");
        if (u10m) u10m.hidden = true;
        var u12t = document.getElementById("cpe-wb-u12-tabs");
        if (u12t) u12t.hidden = false;
        var u12m = document.getElementById("cpe-wb-u12-modes");
        if (u12m) u12m.hidden = false;
        var wbBack = document.getElementById("cpe-wb-hub-back");
        if (wbBack) wbBack.textContent = "\u2190 Level 12";
        var listShell = document.getElementById("cpe-wb-list");
        var statsShell = document.getElementById("cpe-wb-stats");
        if (listShell) listShell.innerHTML = "";
        if (statsShell) statsShell.textContent = "";
        showScreen("screen-unit9-wordbank");
        u9LexRefreshHubTicks();
        window.requestAnimationFrame(function () {
            cpeWordBankRender();
        });
    };

    W.hubReturnToUnit12LexicalGamesFolder = function () {
        try {
            var u = new URL(window.location.href);
            var changed = false;
            if (u.searchParams.has("u9_speak")) {
                u.searchParams.delete("u9_speak");
                changed = true;
            }
            if (u.searchParams.has("u9_lex_th")) {
                u.searchParams.delete("u9_lex_th");
                changed = true;
            }
            if (changed) {
                var qs = u.searchParams.toString();
                history.replaceState({}, "", u.pathname + (qs ? "?" + qs : "") + (u.hash || ""));
            }
        } catch (errL12g) {}
        W.u12LexGamesActive = false;
        u9FallSpeakerFilter = null;
        if (typeof openGenericUnitMenu === "function") {
            openGenericUnitMenu(12);
        } else if (typeof openBuiltInUnitMenu === "function") {
            openBuiltInUnitMenu(12);
        }
    };

    W.openUnit12LexGamesHub = function () {
        W.u12LexGamesActive = true;
        u10LexGamesActive = false;
        prepEscapeReturnToUnit12LexGames = false;
        u10LexTrainerReturnToHub = false;
        lexGamesHubIsUnit8 = false;
        prepLiveDisconnect();
        prepEscapeClearSkipTimers();
        prepEscapeStopTimer();
        prepEscapeIsLockout = false;
        prepEscapeHideLockoutUI();
        u9FallStopLoop();
        u9FallHideModal();
        u9McqResetUI();
        u9HearResetUI();
        u9HparResetUI();
        u9MatchResetUI();
        u9ExpressResetUI();
        u9FlipResetUI();
        if (typeof speechSynthesis !== "undefined") speechSynthesis.cancel();
        var scrf = document.getElementById("screen-unit9-fall");
        if (scrf) {
            scrf.classList.remove("playing");
            var intro = document.getElementById("u9-fall-intro");
            var play = document.getElementById("u9-fall-play");
            if (intro) intro.style.display = "";
            if (play) play.style.display = "";
        }
        u9FallRunQueue = [];
        u9FallRunTarget = 0;
        u9FallRunDone = 0;
        u9FallRoundNumber = 0;
        u9FallResetSessionState();
        u9FallHideAnswerRevealBig();
        u9LexProgressSet("u9-fall-prog-label", "u9-fall-prog-fill", 0, 0);
        W.openUnit12WordBank();
    };

    W.hubPrepPlaygroundHrefU12 = function () {
        var pgHref = "games/cpe/unit12/index.html?course=cpe";
        try {
            if (
                typeof PREP_HUB_U12_GAMES_SEEDS !== "undefined" &&
                PREP_HUB_U12_GAMES_SEEDS.hubTask &&
                PREP_HUB_U12_GAMES_SEEDS.hubTask.href
            ) {
                var h = String(PREP_HUB_U12_GAMES_SEEDS.hubTask.href || "").trim();
                if (h) pgHref = h;
            }
        } catch (ePg) {}
        try {
            var u = new URL(pgHref, window.location.href);
            if (!u.searchParams.has("back")) {
                u.searchParams.set(
                    "back",
                    (window.location.pathname || "/index.html") + "?prep_stay=1&screen=unit12"
                );
            }
            return u.pathname + u.search + u.hash;
        } catch (ePgBack) {
            return pgHref;
        }
    };
})(typeof window !== "undefined" ? window : globalThis);
