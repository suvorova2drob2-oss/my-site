/**
 * Unit 10 Part 4 — Sticky notes board (standalone module).
 * Built only from U10_P4_LEXIS_GAME_ROWS + hints — no transcript scan (fast local open).
 * Loaded after the main index inline bundle so globals like normalizeLexAns exist.
 */
(function (W) {
    "use strict";

    var MODULE_TAG = "[unit10-p4-sticky-board] v6 loaded";

    function normKey(ans) {
        if (typeof W.normalizeLexAns === "function") return W.normalizeLexAns(ans);
        return String(ans || "")
            .toLowerCase()
            .trim()
            .replace(/\s+/g, " ");
    }

    function shuffle(arr) {
        if (typeof W.u9FallShuffle === "function") return W.u9FallShuffle(arr);
        var a = arr.slice();
        var i;
        for (i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var t = a[i];
            a[i] = a[j];
            a[j] = t;
        }
        return a;
    }

    /** Prefer hub globals (index bundle) so gap layout stays in sync with other sticky boards. */
    function pickGap(phrase) {
        if (typeof W.u9ArtRestPickGap === "function") return W.u9ArtRestPickGap(phrase);
        return String(phrase || "")
            .trim()
            .split(/\s+/)
            .pop()
            .replace(/^[^A-Za-z']+|[^A-Za-z']+$/g, "")
            .toLowerCase();
    }

    function gapText(text, gapWord) {
        if (typeof W.u9ArtRestGapText === "function") return W.u9ArtRestGapText(text, gapWord);
        return String(text || "");
    }

    function gapLineDom(el, fullLine) {
        if (typeof W.u9StickyGapLineDom === "function") return W.u9StickyGapLineDom(el, fullLine);
        if (!el) return;
        el.textContent = String(fullLine || "");
    }

    function deckKeep(line) {
        if (typeof W.u9StickyDeckKeepGapPrompt === "function") return W.u9StickyDeckKeepGapPrompt(line);
        return !!(line && line.indexOf("____") >= 0);
    }

    var srcCache = null;

    function buildSource() {
        var rows =
            typeof W.U10_P4_LEXIS_GAME_ROWS !== "undefined" && W.U10_P4_LEXIS_GAME_ROWS.length
                ? W.U10_P4_LEXIS_GAME_ROWS
                : [];
        var rl = rows.length;
        if (srcCache && srcCache.rl === rl) {
            return srcCache.out.slice();
        }
        var out = [];
        var seen = {};
        var i;
        for (i = 0; i < rl; i++) {
            var row = rows[i];
            if (!row || !row.ans) continue;
            var ans = String(row.ans).trim();
            if (!ans) continue;
            var key = normKey(ans);
            if (!key || seen[key]) continue;
            seen[key] = true;
            var hint = row.hint != null ? String(row.hint).trim() : "";
            var ctx = hint ? hint + "\n\nExact phrase: " + ans : ans;
            out.push({ ans: ans, context: ctx });
        }
        srcCache = { rl: rl, out: out };
        return out.slice();
    }

    W.u10P4StickyDeck = W.u10P4StickyDeck || [];

    W.u10P4StickyBuildSource = buildSource;

    W.u10P4StickyUpdateDone = function () {
        var done = 0;
        var deck = W.u10P4StickyDeck || [];
        var i;
        for (i = 0; i < deck.length; i++) {
            if (deck[i].ok) done++;
        }
        var el = document.getElementById("u10-p4-sticky-done");
        if (el) el.textContent = done + " / " + deck.length;
    };

    W.u10P4StickyCheck = function (idx) {
        var deck = W.u10P4StickyDeck || [];
        var item = deck[idx];
        if (!item) return;
        var inp = document.getElementById("u10-p4-sticky-inp-" + idx);
        var fb = document.getElementById("u10-p4-sticky-fb-" + idx);
        var note = document.getElementById("u10-p4-sticky-note-" + idx);
        if (!inp || !fb || !note) return;
        var match = typeof W.lexAnsMatch === "function" ? W.lexAnsMatch(inp.value, item.gap) : String(inp.value).trim().toLowerCase() === String(item.gap).trim().toLowerCase();
        if (match) {
            item.ok = true;
            note.classList.add("done");
            fb.textContent = "Correct";
            fb.style.color = "var(--success)";
            inp.disabled = true;
            if (typeof W.prepLiveNotifyStickyItemSolved === "function") {
                W.prepLiveNotifyStickyItemSolved("u10p4", idx);
            }
        } else {
            fb.textContent = "Try again";
            fb.style.color = "var(--error)";
            if (typeof W.prepLiveNotifyStickyWrongAttempt === "function") {
                W.prepLiveNotifyStickyWrongAttempt("u10p4", idx, item, inp.value);
            }
        }
        W.u10P4StickyUpdateDone();
    };

    W.u10P4StickyShowAnswer = function (idx) {
        var deck = W.u10P4StickyDeck || [];
        var item = deck[idx];
        if (!item) return;
        var inp = document.getElementById("u10-p4-sticky-inp-" + idx);
        var fb = document.getElementById("u10-p4-sticky-fb-" + idx);
        if (!inp || !fb) return;
        inp.value = item.gap;
        fb.textContent = "Answer shown";
        fb.style.color = "var(--muted)";
    };

    W.u10P4StickyToggleContext = function (idx) {
        var el = document.getElementById("u10-p4-sticky-ctx-" + idx);
        if (!el) return;
        el.classList.toggle("on");
    };

    W.u10P4StickyRenderBoard = function () {
        var board = document.getElementById("u10-p4-sticky-board");
        if (!board) return;
        board.innerHTML = "";
        var src = buildSource();
        var colorFn =
            typeof W.u9StickyColorClass === "function"
                ? W.u9StickyColorClass
                : function (i) {
                      return "u9-note-yellow";
                  };
        W.u10P4StickyDeck = shuffle(
            src.map(function (row) {
                var gap = pickGap(row.ans);
                var displayLine = gapText(row.ans, gap);
                return {
                    text: row.ans,
                    gap: gap,
                    displayLine: displayLine,
                    ok: false,
                    context: row.context || row.ans
                };
            })
        ).filter(function (x) {
            return deckKeep(x.displayLine);
        });
        var deck = W.u10P4StickyDeck;
        var i;
        for (i = 0; i < deck.length; i++) {
            var note = document.createElement("div");
            note.className = "u9-sticky-note " + colorFn(i);
            note.id = "u10-p4-sticky-note-" + i;
            note.style.transform = "rotate(" + String((Math.random() * 8 - 4).toFixed(2)) + "deg)";
            var item = deck[i];
            var gapLine = document.createElement("div");
            gapLine.className = "u9-sticky-gap";
            gapLineDom(gapLine, item.displayLine);
            var inp = document.createElement("input");
            inp.type = "text";
            inp.id = "u10-p4-sticky-inp-" + i;
            inp.className = "u9-sticky-inp";
            inp.placeholder = "missing word";
            inp.setAttribute("autocomplete", "off");
            (function (idx) {
                inp.addEventListener("keydown", function (ev) {
                    if (ev.key === "Enter") {
                        ev.preventDefault();
                        W.u10P4StickyCheck(idx);
                    }
                });
            })(i);
            var ctrl = document.createElement("div");
            ctrl.className = "u9-sticky-ctrl";
            var bCheck = document.createElement("button");
            bCheck.type = "button";
            bCheck.className = "u9-sticky-btn";
            bCheck.textContent = "Check";
            (function (idx) {
                bCheck.addEventListener("click", function () {
                    W.u10P4StickyCheck(idx);
                });
            })(i);
            var bShow = document.createElement("button");
            bShow.type = "button";
            bShow.className = "u9-sticky-btn";
            bShow.textContent = "Show answer";
            (function (idx) {
                bShow.addEventListener("click", function () {
                    W.u10P4StickyShowAnswer(idx);
                });
            })(i);
            var bCtx = document.createElement("button");
            bCtx.type = "button";
            bCtx.className = "u9-sticky-btn";
            bCtx.textContent = "Context";
            (function (idx) {
                bCtx.addEventListener("click", function () {
                    W.u10P4StickyToggleContext(idx);
                });
            })(i);
            ctrl.appendChild(bCheck);
            ctrl.appendChild(bShow);
            ctrl.appendChild(bCtx);
            var fb = document.createElement("div");
            fb.className = "u9-sticky-fb";
            fb.id = "u10-p4-sticky-fb-" + i;
            var ctx = document.createElement("div");
            ctx.className = "u9-sticky-context";
            ctx.id = "u10-p4-sticky-ctx-" + i;
            ctx.textContent = item.context || item.text;
            note.appendChild(gapLine);
            note.appendChild(inp);
            note.appendChild(ctrl);
            note.appendChild(fb);
            note.appendChild(ctx);
            board.appendChild(note);
        }
        W.u10P4StickyUpdateDone();
        if (typeof W.prepLiveStickyRefreshSlotsMeta === "function") {
            W.prepLiveStickyRefreshSlotsMeta();
        }
    };

    W.u10P4StickyResetUI = function () {
        W.u10P4StickyRenderBoard();
    };

    try {
        console.info(MODULE_TAG);
    } catch (eLog) {}
})(typeof window !== "undefined" ? window : globalThis);
