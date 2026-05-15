/**
 * Общий sticky-движок для Unit 10 паков на базе plain-текста + GAME_ROWS (+ опциональный bank).
 * Регистрирует глобали {@link unit10RegisterPlainStickyPack}.
 */
(function (W) {
    "use strict";

    /**
     * @typedef {Object} PlainStickySpec
     * @property {string} mode — ключ задачи (Live / u9StickyShowTask)
     * @property {string} deckProp — имя массива на window
     * @property {string} renderFnName
     * @property {string} resetFnName
     * @property {string} domPrefix — префикс id: `${domPrefix}-board`, `-inp-i`, …
     * @property {string} doneElementId
     * @property {() => string} plainGetter
     * @property {() => *[]} rowsGetter
     * @property {() => *[]=} bankGetter
     * @property {() => string} speakerLabelGetter
     */

    /**
     * @param {PlainStickySpec} spec
     */
    W.unit10RegisterPlainStickyPack = function (spec) {
        var mode = spec.mode;
        var notifyKey = spec.notifyTaskKey || mode;
        var deckProp = spec.deckProp;
        var prefix = spec.domPrefix;
        var doneId = spec.doneElementId;

        W[deckProp] = W[deckProp] || [];

        function buildSource() {
            var out = [];
            var seen = {};
            var plain = spec.plainGetter();
            plain = typeof plain === "string" ? plain : "";
            var sp = spec.speakerLabelGetter();
            sp = typeof sp === "string" ? sp : "";

            function pushAns(ans) {
                if (!plain) return;
                var a = String(ans).trim();
                if (!a) return;
                var key =
                    typeof W.normalizeLexAns === "function" ? W.normalizeLexAns(a) : String(a).toLowerCase().trim();
                if (!key || seen[key]) return;
                seen[key] = true;
                if (typeof W.u9FallFindAnsSpan === "function" && W.u9FallFindAnsSpan(plain, a) == null) return;
                var ft =
                    typeof W.u9FallBuildGapLine === "function"
                        ? W.u9FallBuildGapLine(plain, a, sp)
                        : plain + " " + a;
                var ctx =
                    typeof W.u9ContextRestore === "function" ? W.u9ContextRestore(ft, a) : ft;
                out.push({ ans: a, context: ctx });
            }

            var bank = typeof spec.bankGetter === "function" ? spec.bankGetter() : null;
            if (bank && bank.length) {
                var bi;
                for (bi = 0; bi < bank.length; bi++) pushAns(bank[bi]);
                if (out.length) return out;
            }

            var rows = spec.rowsGetter() || [];
            var i;
            for (i = 0; i < rows.length; i++) {
                var row = rows[i];
                if (row && row.ans) pushAns(row.ans);
            }
            return out;
        }

        function updateDone() {
            var deck = W[deckProp] || [];
            var done = 0;
            var j;
            for (j = 0; j < deck.length; j++) {
                if (deck[j].ok) done++;
            }
            var el = document.getElementById(doneId);
            if (el) el.textContent = done + " / " + deck.length;
        }

        function check(idx) {
            var deck = W[deckProp] || [];
            var item = deck[idx];
            if (!item) return;
            var inp = document.getElementById(prefix + "-inp-" + idx);
            var fb = document.getElementById(prefix + "-fb-" + idx);
            var note = document.getElementById(prefix + "-note-" + idx);
            if (!inp || !fb || !note) return;
            var match =
                typeof W.lexAnsMatch === "function"
                    ? W.lexAnsMatch(inp.value, item.gap)
                    : String(inp.value || "")
                          .trim()
                          .toLowerCase() === String(item.gap || "").trim().toLowerCase();
            if (match) {
                item.ok = true;
                note.classList.add("done");
                fb.textContent = "Correct";
                fb.style.color = "var(--success)";
                inp.disabled = true;
                if (typeof W.prepLiveNotifyStickyItemSolved === "function") {
                    W.prepLiveNotifyStickyItemSolved(notifyKey, idx);
                }
            } else {
                fb.textContent = "Try again";
                fb.style.color = "var(--error)";
                if (typeof W.prepLiveNotifyStickyWrongAttempt === "function") {
                    W.prepLiveNotifyStickyWrongAttempt(notifyKey, idx, item, inp.value);
                }
            }
            updateDone();
        }

        function showAnswer(idx) {
            var deck = W[deckProp] || [];
            var item = deck[idx];
            if (!item) return;
            var inp = document.getElementById(prefix + "-inp-" + idx);
            var fb = document.getElementById(prefix + "-fb-" + idx);
            if (!inp || !fb) return;
            inp.value = item.gap;
            fb.textContent = "Answer shown";
            fb.style.color = "var(--muted)";
        }

        function toggleContext(idx) {
            var el = document.getElementById(prefix + "-ctx-" + idx);
            if (!el) return;
            el.classList.toggle("on");
        }

        W[spec.renderFnName] = function renderBoard() {
            var board = document.getElementById(prefix + "-board");
            if (!board) return;
            board.innerHTML = "";
            var src = buildSource();
            W[deckProp] = W.u9FallShuffle(
                src.map(function (row) {
                    var phrase = String(row.ans || "").trim();
                    var displayText = (row.context && String(row.context).trim()) || phrase;
                    var gap = W.u9ArtRestPickGap(phrase);
                    if (!gap) gap = phrase;
                    var displayLine = W.u9ArtRestGapText(displayText, gap);
                    if (displayLine.indexOf("____") < 0) {
                        gap = phrase;
                        displayLine = W.u9ArtRestGapText(displayText, gap);
                    }
                    if (displayLine.indexOf("____") < 0) {
                        displayText = phrase;
                        gap = W.u9ArtRestPickGap(phrase) || phrase;
                        displayLine = W.u9ArtRestGapText(displayText, gap);
                    }
                    return {
                        text: displayText,
                        gap: gap,
                        displayLine: displayLine,
                        ok: false,
                        context: row.context || displayText
                    };
                })
            ).filter(function (x) {
                return W.u9StickyDeckKeepGapPrompt(x.displayLine);
            });

            var deck = W[deckProp];
            var i;
            for (i = 0; i < deck.length; i++) {
                var note = document.createElement("div");
                note.className = "u9-sticky-note " + W.u9StickyColorClass(i);
                note.id = prefix + "-note-" + i;
                note.style.transform = "rotate(" + String((Math.random() * 8 - 4).toFixed(2)) + "deg)";
                var item = deck[i];
                var gapLine = document.createElement("div");
                gapLine.className = "u9-sticky-gap";
                W.u9StickyGapLineDom(gapLine, item.displayLine);
                var inp = document.createElement("input");
                inp.type = "text";
                inp.id = prefix + "-inp-" + i;
                inp.className = "u9-sticky-inp";
                inp.placeholder = "missing word";
                inp.setAttribute("autocomplete", "off");
                (function (idx) {
                    inp.addEventListener("keydown", function (ev) {
                        if (ev.key === "Enter") {
                            ev.preventDefault();
                            check(idx);
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
                        check(idx);
                    });
                })(i);
                var bShow = document.createElement("button");
                bShow.type = "button";
                bShow.className = "u9-sticky-btn";
                bShow.textContent = "Show answer";
                (function (idx) {
                    bShow.addEventListener("click", function () {
                        showAnswer(idx);
                    });
                })(i);
                var bCtx = document.createElement("button");
                bCtx.type = "button";
                bCtx.className = "u9-sticky-btn";
                bCtx.textContent = "Context";
                (function (idx) {
                    bCtx.addEventListener("click", function () {
                        toggleContext(idx);
                    });
                })(i);
                ctrl.appendChild(bCheck);
                ctrl.appendChild(bShow);
                ctrl.appendChild(bCtx);
                var fb = document.createElement("div");
                fb.className = "u9-sticky-fb";
                fb.id = prefix + "-fb-" + i;
                var ctx = document.createElement("div");
                ctx.className = "u9-sticky-context";
                ctx.id = prefix + "-ctx-" + i;
                ctx.textContent = item.context || item.text;
                note.appendChild(gapLine);
                note.appendChild(inp);
                note.appendChild(ctrl);
                note.appendChild(fb);
                note.appendChild(ctx);
                board.appendChild(note);
            }
            updateDone();
            if (typeof W.prepLiveStickyRefreshSlotsMeta === "function") W.prepLiveStickyRefreshSlotsMeta();
        };

        W[spec.resetFnName] = function resetUi() {
            W[spec.renderFnName]();
        };
    };

    W.unit10RegisterPlainStickyPack({
        mode: "u10books",
        notifyTaskKey: "u10books",
        deckProp: "u10BooksStickyDeck",
        renderFnName: "u10BooksStickyRenderBoard",
        resetFnName: "u10BooksStickyResetUI",
        domPrefix: "u10-books-sticky",
        doneElementId: "u10-books-sticky-done",
        plainGetter: function () {
            return W.U10_BOOKS_FILMS_LEXIS_PLAIN;
        },
        rowsGetter: function () {
            return W.U10_BOOKS_FILMS_LEXIS_GAME_ROWS;
        },
        bankGetter: function () {
            return W.U10_BOOKS_FILMS_EXERCISE_BANK;
        },
        speakerLabelGetter: function () {
            return typeof W.LEX_U10_BOOKS_FILMS_SPEAKER_LABEL === "string"
                ? W.LEX_U10_BOOKS_FILMS_SPEAKER_LABEL
                : "Unit 10 · Describing books & films";
        }
    });

    W.unit10RegisterPlainStickyPack({
        mode: "u10shakespeare",
        notifyTaskKey: "u10shakespeare",
        deckProp: "u10ShakespeareStickyDeck",
        renderFnName: "u10ShakespeareStickyRenderBoard",
        resetFnName: "u10ShakespeareStickyResetUI",
        domPrefix: "u10-shakespeare-sticky",
        doneElementId: "u10-shakespeare-sticky-done",
        plainGetter: function () {
            return W.U10_UOE_SHAKESPEARE_LEXIS_PLAIN;
        },
        rowsGetter: function () {
            return W.U10_UOE_SHAKESPEARE_LEXIS_GAME_ROWS;
        },
        speakerLabelGetter: function () {
            return typeof W.LEX_U10_UOE_SHAKESPEARE_SPEAKER_LABEL === "string"
                ? W.LEX_U10_UOE_SHAKESPEARE_SPEAKER_LABEL
                : "Shakespeare · Use of English";
        }
    });
})(typeof window !== "undefined" ? window : globalThis);
