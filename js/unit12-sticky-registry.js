/**
 * Unit 12 lexical sticky packs — Reading + Sports idioms + Listening (mirrors Unit 10 registry).
 */
(function (W) {
    "use strict";

    W.UNIT12_STICKY_PACKS = [
        {
            mode: "u12reading",
            deckProp: "u12ReadingStickyDeck",
            renderGlobal: "u12ReadingStickyRenderBoard",
            resetGlobal: "u12ReadingStickyResetUI",
            gapCueKind: "artrest",
            tabId: "u12-sticky-tab-reading",
            taskPanelId: "u12-sticky-task-reading",
            boardId: "u12-reading-sticky-board",
            doneId: "u12-reading-sticky-done",
            labels: {
                hubTab: "The Road to Betterment · Reading",
                l9Tab: "Task 14: U12 Reading",
                liveScopeLabel: "Task 14: Unit 12 Reading only",
                panelLeadHtml:
                    "<b>The Road to Betterment</b> (Part 5) — same phrases as the <b>Reading</b> Word Bank tab. One missing word per sticky; <b>Context</b> shows the full line.",
                resetBtn: "Reset Reading pack",
            },
        },
        {
            mode: "u12sports",
            deckProp: "u12SportsStickyDeck",
            renderGlobal: "u12SportsStickyRenderBoard",
            resetGlobal: "u12SportsStickyResetUI",
            gapCueKind: "artrest",
            tabId: "u12-sticky-tab-sports",
            taskPanelId: "u12-sticky-task-sports",
            boardId: "u12-sports-sticky-board",
            doneId: "u12-sports-sticky-done",
            labels: {
                hubTab: "Sports idioms · Vocabulary",
                l9Tab: "Task 15: U12 Sports idioms",
                liveScopeLabel: "Task 15: Unit 12 sports idioms only",
                panelLeadHtml:
                    "<b>Sports idioms</b> — same deck as the <b>Sports idioms</b> Word Bank tab (phrase bank + word box + discussing pairs). One missing word per sticky.",
                resetBtn: "Reset sports idioms",
            },
        },
        {
            mode: "u12mwv",
            deckProp: "u12MwvStickyDeck",
            renderGlobal: "u12MwvStickyRenderBoard",
            resetGlobal: "u12MwvStickyResetUI",
            gapCueKind: "artrest",
            tabId: "u12-sticky-tab-mwv",
            taskPanelId: "u12-sticky-task-mwv",
            boardId: "u12-mwv-sticky-board",
            doneId: "u12-mwv-sticky-done",
            labels: {
                hubTab: "Multi-word verbs · Vocabulary",
                l9Tab: "Task 16: U12 Multi-word verbs",
                liveScopeLabel: "Task 16: Unit 12 multi-word verbs only",
                panelLeadHtml:
                    "<b>Multi-word verbs</b> — same deck as the <b>Multi-word verbs</b> Word Bank tab (listening + verb box). One missing word per sticky; <b>Context</b> shows the full line.",
                resetBtn: "Reset multi-word verbs",
            },
        },
        {
            mode: "u12listening",
            deckProp: "u12ListeningStickyDeck",
            renderGlobal: "u12ListeningStickyRenderBoard",
            resetGlobal: "u12ListeningStickyResetUI",
            gapCueKind: "artrest",
            tabId: "u12-sticky-tab-listening",
            taskPanelId: "u12-sticky-task-listening",
            boardId: "u12-listening-sticky-board",
            doneId: "u12-listening-sticky-done",
            labels: {
                hubTab: "Listening · Track 12.1",
                l9Tab: "Task 17: U12 Listening",
                liveScopeLabel: "Task 17: Unit 12 Listening only",
                panelLeadHtml:
                    "<b>Disabled access</b> (SB Track 12.1) — same phrases as the <b>Listening</b> Word Bank tab. One missing word per sticky; <b>Context</b> shows the full line.",
                resetBtn: "Reset listening pack",
            },
        },
    ];

    var BY = {};
    W.UNIT12_STICKY_PACKS.forEach(function (p) {
        BY[p.mode] = p;
    });
    W.UNIT12_STICKY_PACK_BY_MODE = BY;

    W.unit12StickyPackModes = function () {
        return W.UNIT12_STICKY_PACKS.map(function (p) {
            return p.mode;
        });
    };

    W.unit12StickyIsPackMode = function (m) {
        return !!BY[String(m || "")];
    };

    W.u12LexGamesPackToStickyMode = function (pack) {
        if (pack === "sports") return "u12sports";
        if (pack === "listening") return "u12listening";
        if (pack === "mwv") return "u12mwv";
        return "u12reading";
    };

    W.prepLiveStickyTabIdForModeU12 = function (mode) {
        var pk = BY[String(mode || "")];
        if (pk) return pk.tabId;
        return null;
    };

    W.unit12StickySyncPackTabLabels = function (hubU12) {
        var u12 = !!hubU12;
        W.UNIT12_STICKY_PACKS.forEach(function (p) {
            var el = document.getElementById(p.tabId);
            if (el) el.textContent = u12 ? p.labels.hubTab : p.labels.l9Tab;
        });
    };

    W.unit12StickyTogglePackUi = function (mode) {
        W.UNIT12_STICKY_PACKS.forEach(function (p) {
            var on = mode === p.mode;
            var taskEl = document.getElementById(p.taskPanelId);
            var tabEl = document.getElementById(p.tabId);
            if (taskEl) taskEl.classList.toggle("active", on);
            if (tabEl) tabEl.classList.toggle("active", on);
        });
    };

    W.unit12StickyRenderAllPacks = function () {
        W.UNIT12_STICKY_PACKS.forEach(function (p) {
            var fn = W[p.renderGlobal];
            if (typeof fn === "function") fn();
        });
    };

    W.unit12StickyPrimeLazyModes = function (hub) {
        var modes = W.unit12StickyPackModes();
        var i;
        for (i = 0; i < modes.length; i++) {
            hub.stickyLazyModes[modes[i]] = true;
        }
    };

    function escAttr(s) {
        return String(s || "")
            .replace(/&/g, "&amp;")
            .replace(/"/g, "&quot;")
            .replace(/</g, "&lt;");
    }

    W.unit12StickyEnsureDom = function () {
        var tabsMount = document.getElementById("u12-sticky-tabs-mount");
        var tasksMount = document.getElementById("u12-sticky-tasks-mount");
        if (!tabsMount || !tasksMount || tabsMount.dataset.unit12StickyMounted === "1") return;

        W.UNIT12_STICKY_PACKS.forEach(function (p) {
            var tab = document.createElement("button");
            tab.type = "button";
            tab.id = p.tabId;
            tab.className = "u9-sticky-tab u9-sticky-pack-u12";
            tab.setAttribute("data-sticky-mode", p.mode);
            tab.textContent = p.labels.l9Tab;
            tab.addEventListener("click", function () {
                if (typeof W.u9StickyShowTask === "function") W.u9StickyShowTask(p.mode);
            });
            tabsMount.appendChild(tab);

            var panel = document.createElement("div");
            panel.id = p.taskPanelId;
            panel.className = "u9-sticky-task u9-sticky-pack-u12";
            panel.setAttribute("data-sticky-mode", p.mode);
            panel.setAttribute("data-sticky-deck", p.deckProp);

            var lead = document.createElement("p");
            lead.style.margin = "0 0 12px";
            lead.style.fontSize = "13px";
            lead.style.color = "var(--muted)";
            lead.style.lineHeight = "1.5";
            lead.innerHTML = p.labels.panelLeadHtml;

            var hud = document.createElement("div");
            hud.className = "u9-sticky-hud";
            hud.innerHTML =
                "<span>Done: <b id=\"" + escAttr(p.doneId) + "\">0 / 0</b></span>";

            var resetBtn = document.createElement("button");
            resetBtn.type = "button";
            resetBtn.className = "btn btn-secondary";
            resetBtn.style.padding = "6px 10px";
            resetBtn.style.fontSize = "12px";
            resetBtn.textContent = p.labels.resetBtn;
            (function (resetName) {
                resetBtn.addEventListener("click", function () {
                    var fn = W[resetName];
                    if (typeof fn === "function") fn();
                });
            })(p.resetGlobal);
            hud.appendChild(resetBtn);

            var board = document.createElement("div");
            board.id = p.boardId;
            board.className = "u9-sticky-board";

            panel.appendChild(lead);
            panel.appendChild(hud);
            panel.appendChild(board);
            tasksMount.appendChild(panel);
        });

        tabsMount.dataset.unit12StickyMounted = "1";
        tasksMount.dataset.unit12StickyMounted = "1";
    };

    W.unit12StickyAppendLiveScopeOptions = function () {
        var sel = document.getElementById("prep-live-sticky-scope");
        if (!sel || sel.dataset.unit12StickyScopeOpts === "1") return;
        W.UNIT12_STICKY_PACKS.forEach(function (p) {
            var o = document.createElement("option");
            o.value = p.mode;
            o.textContent = p.labels.liveScopeLabel;
            sel.appendChild(o);
        });
        sel.dataset.unit12StickyScopeOpts = "1";
    };

    W.unit12StickySyncGlobalHint = function (hubU12) {
        var el = document.querySelector(".u9-sticky-hint-u12");
        if (!el || !W.UNIT12_STICKY_PACKS.length) return;
        var parts = W.UNIT12_STICKY_PACKS.map(function (p, i) {
            var raw = hubU12 ? p.labels.hubTab : p.labels.l9Tab;
            var body = String(raw || "").replace(/^Task\s*\d+:\s*/i, "").trim();
            return "<strong>Pack " + String(i + 1) + "</strong> — " + body;
        });
        el.innerHTML = parts.join(". ");
    };

    function boot() {
        W.unit12StickyEnsureDom();
        W.unit12StickyAppendLiveScopeOptions();
        W.unit12StickySyncGlobalHint(false);
    }
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
    else boot();
})(typeof window !== "undefined" ? window : globalThis);
