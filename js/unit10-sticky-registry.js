/**
 * Unit 10 lexical sticky packs — один источник: режим Live / вкладки / подписи / DOM ids.
 * Новый текст (например переводчики): добавьте объект в UNIT10_STICKY_PACKS и зарегистрируйте рендер (plain-kit или отдельный модуль).
 */
(function (W) {
    "use strict";

    /** @type {Unit10StickyPack[]} */
    W.UNIT10_STICKY_PACKS = [
        {
            mode: "u10p4",
            deckProp: "u10P4StickyDeck",
            renderGlobal: "u10P4StickyRenderBoard",
            resetGlobal: "u10P4StickyResetUI",
            gapCueKind: "artrest",
            tabId: "u10-sticky-tab-u10p4",
            taskPanelId: "u10-sticky-task-u10p4",
            boardId: "u10-p4-sticky-board",
            doneId: "u10-p4-sticky-done",
            labels: {
                hubTab: "Task 1: Listening multiple matching (Part 4)",
                l9Tab: "Task 10: Unit 10 Part 4",
                liveScopeLabel: "Task 10: Unit 10 Part 4 only",
                panelLeadHtml:
                    "Task 10. <b>Listening Part 4</b> (SB 10.1) phrases only. One missing word per sticky; <b>Context</b> shows the full line.",
                resetBtn: "Reset Part 4"
            }
        },
        {
            mode: "u10books",
            deckProp: "u10BooksStickyDeck",
            renderGlobal: "u10BooksStickyRenderBoard",
            resetGlobal: "u10BooksStickyResetUI",
            gapCueKind: "artrest",
            tabId: "u10-sticky-tab-u10books",
            taskPanelId: "u10-sticky-task-u10books",
            boardId: "u10-books-sticky-board",
            doneId: "u10-books-sticky-done",
            labels: {
                hubTab: "Task 2: Books & films (Ex. 1–2 bank)",
                l9Tab: "Task 11: books & films",
                liveScopeLabel: "Task 11: Unit 10 books & films only",
                panelLeadHtml:
                    "Task 2. <b>Describing books &amp; films</b> — all <b>twelve</b> chunks from textbook Exercises 1–2 (same word bank as the vocabulary folder).",
                resetBtn: "Reset books & films"
            }
        },
        {
            mode: "u10shakespeare",
            deckProp: "u10ShakespeareStickyDeck",
            renderGlobal: "u10ShakespeareStickyRenderBoard",
            resetGlobal: "u10ShakespeareStickyResetUI",
            gapCueKind: "artrest",
            tabId: "u10-sticky-tab-u10shakespeare",
            taskPanelId: "u10-sticky-task-u10shakespeare",
            boardId: "u10-shakespeare-sticky-board",
            doneId: "u10-shakespeare-sticky-done",
            labels: {
                hubTab: "Task 3: Shakespeare · Use of English",
                l9Tab: "Task 12: Shakespeare · Use of English",
                liveScopeLabel: "Task 12: Shakespeare · Use of English only",
                panelLeadHtml:
                    "<b>Shakespeare · Use of English</b> — same <b>ten</b> phrases as the Unit&nbsp;10 Word Bank tab for this pack (<em>Was Shakespeare a woman?</em>). One missing word per sticky; <b>Context</b> shows the full line.",
                resetBtn: "Reset Shakespeare UoE"
            }
        }
    ];

    var BY = {};
    W.UNIT10_STICKY_PACKS.forEach(function (p) {
        BY[p.mode] = p;
    });
    W.UNIT10_STICKY_PACK_BY_MODE = BY;

    /**
     * @returns {string[]}
     */
    W.unit10StickyPackModes = function () {
        return W.UNIT10_STICKY_PACKS.map(function (p) {
            return p.mode;
        });
    };

    W.unit10StickyIsPackMode = function (m) {
        return !!BY[String(m || "")];
    };

    /** Связка с вкладкой Word Bank / Lexical games (`p4` | `books` | `shakespeare`). */
    W.unit10LexGamesPackToStickyMode = function (pack) {
        if (pack === "books") return "u10books";
        if (pack === "shakespeare") return "u10shakespeare";
        return "u10p4";
    };

    W.prepLiveStickyTabIdForMode = function (mode) {
        var pk = BY[String(mode || "")];
        if (pk) return pk.tabId;
        return "u9-sticky-tab-" + String(mode || "");
    };

    W.unit10StickySyncPackTabLabels = function (hubU10) {
        var u10 = !!hubU10;
        W.UNIT10_STICKY_PACKS.forEach(function (p) {
            var el = document.getElementById(p.tabId);
            if (el) el.textContent = u10 ? p.labels.hubTab : p.labels.l9Tab;
        });
    };

    W.unit10StickyTogglePackUi = function (mode) {
        W.UNIT10_STICKY_PACKS.forEach(function (p) {
            var on = mode === p.mode;
            var taskEl = document.getElementById(p.taskPanelId);
            var tabEl = document.getElementById(p.tabId);
            if (taskEl) taskEl.classList.toggle("active", on);
            if (tabEl) tabEl.classList.toggle("active", on);
        });
    };

    W.unit10StickyRenderAllPacks = function () {
        W.UNIT10_STICKY_PACKS.forEach(function (p) {
            var fn = W[p.renderGlobal];
            if (typeof fn === "function") fn();
        });
    };

    W.unit10StickyPrimeLazyModes = function (hub) {
        var modes = W.unit10StickyPackModes();
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

    /** Вкладки и панели Unit 10 — монтируются один раз (ids без префикса u9-sticky-task-u10*). */
    W.unit10StickyEnsureDom = function () {
        var tabsMount = document.getElementById("u10-sticky-tabs-mount");
        var tasksMount = document.getElementById("u10-sticky-tasks-mount");
        if (!tabsMount || !tasksMount || tabsMount.dataset.unit10StickyMounted === "1") return;

        W.UNIT10_STICKY_PACKS.forEach(function (p) {
            var tab = document.createElement("button");
            tab.type = "button";
            tab.id = p.tabId;
            tab.className = "u9-sticky-tab u9-sticky-pack-u10";
            tab.setAttribute("data-sticky-mode", p.mode);
            tab.textContent = p.labels.l9Tab;
            tab.addEventListener("click", function () {
                if (typeof W.u9StickyShowTask === "function") W.u9StickyShowTask(p.mode);
            });
            tabsMount.appendChild(tab);

            var panel = document.createElement("div");
            panel.id = p.taskPanelId;
            panel.className = "u9-sticky-task u9-sticky-pack-u10";
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
                "<span>Done: <b id=\"" +
                escAttr(p.doneId) +
                "\">0 / 0</b></span>";

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

        tabsMount.dataset.unit10StickyMounted = "1";
        tasksMount.dataset.unit10StickyMounted = "1";
    };

    /** Дописать опции Live после базовых L9 (option-элементы для u10* не хранятся в index.html). */
    W.unit10StickyAppendLiveScopeOptions = function () {
        var sel = document.getElementById("prep-live-sticky-scope");
        if (!sel || sel.dataset.unit10StickyScopeOpts === "1") return;
        W.UNIT10_STICKY_PACKS.forEach(function (p) {
            var o = document.createElement("option");
            o.value = p.mode;
            o.textContent = p.labels.liveScopeLabel;
            sel.appendChild(o);
        });
        sel.dataset.unit10StickyScopeOpts = "1";
    };

    W.unit10StickySyncGlobalHint = function (hubU10) {
        var el = document.querySelector(".u9-sticky-hint-u10");
        if (!el || !W.UNIT10_STICKY_PACKS.length) return;
        var u10 = !!hubU10;
        var n0 = u10 ? 1 : 10;
        var parts = W.UNIT10_STICKY_PACKS.map(function (p, i) {
            var raw = u10 ? p.labels.hubTab : p.labels.l9Tab;
            var body = String(raw || "")
                .replace(/^Task\s*\d+:\s*/i, "")
                .trim();
            return "<strong>Task " + String(n0 + i) + "</strong> — " + body;
        });
        el.innerHTML = parts.join(". ");
    };

    function boot() {
        W.unit10StickyEnsureDom();
        W.unit10StickyAppendLiveScopeOptions();
        W.unit10StickySyncGlobalHint(false);
    }
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
    else boot();
})(typeof window !== "undefined" ? window : globalThis);
