/**
 * Vocabulary word-box gap-fill — click bank chip → fill active (or next empty) gap.
 * Etalon UX: unit7-vocabulary/shopping-paragraph-gaps/index.html
 * Global: PREP_VOCAB_WORD_BOX_GAPS.mount({ ... })
 */
(function (W) {
    "use strict";

    /**
     * @param {object} opts
     * @param {HTMLElement|string} opts.bankRoot — container with `.bank-chip[data-word]`
     * @param {number[]|string[]} opts.gapIds — gap numbers (1-based) or full element ids
     * @param {string} [opts.gapIdPrefix='gap-'] — prefix when gapIds are numbers
     * @param {string} [opts.gapSelector='.gap-input, .gap-word'] — used if gapIds omitted
     * @param {() => void} [opts.onFill] — e.g. hide feedback panel
     */
    function mount(opts) {
        opts = opts || {};
        var gapIdPrefix = opts.gapIdPrefix != null ? String(opts.gapIdPrefix) : "gap-";
        var gapSelector = opts.gapSelector || ".gap-input, .gap-word";
        var bankRoot =
            typeof opts.bankRoot === "string" ? document.querySelector(opts.bankRoot) : opts.bankRoot;
        var lastFocus = null;

        function resolveGaps() {
            if (Array.isArray(opts.gapIds) && opts.gapIds.length) {
                return opts.gapIds
                    .map(function (id) {
                        if (typeof id === "number") return document.getElementById(gapIdPrefix + id);
                        return document.getElementById(String(id));
                    })
                    .filter(Boolean);
            }
            return Array.prototype.slice.call(document.querySelectorAll(gapSelector));
        }

        var gaps = resolveGaps();
        if (!gaps.length) return { gaps: [], bankRoot: bankRoot };

        function clearActive() {
            gaps.forEach(function (el) {
                el.classList.remove("is-active");
            });
        }

        function setActive(el) {
            clearActive();
            if (el) {
                el.classList.add("is-active");
                lastFocus = el;
            }
        }

        function firstEmptyGap() {
            for (var i = 0; i < gaps.length; i++) {
                if (!String(gaps[i].value || "").trim()) return gaps[i];
            }
            return null;
        }

        function targetGap() {
            if (lastFocus && gaps.indexOf(lastFocus) >= 0) return lastFocus;
            var empty = firstEmptyGap();
            return empty || gaps[0];
        }

        function afterFill(el) {
            el.classList.remove("is-ok", "is-bad");
            if (typeof opts.onFill === "function") opts.onFill(el);
        }

        gaps.forEach(function (el) {
            el.addEventListener("focus", function () {
                setActive(this);
            });
            el.addEventListener("click", function () {
                setActive(this);
            });
        });

        if (bankRoot) {
            bankRoot.querySelectorAll(".bank-chip[data-word]").forEach(function (chip) {
                chip.addEventListener("click", function () {
                    var w = chip.getAttribute("data-word") || "";
                    var target = targetGap();
                    if (!target) return;
                    target.value = w;
                    afterFill(target);
                    target.focus();
                    setActive(target);
                });
            });
        }

        return {
            gaps: gaps,
            bankRoot: bankRoot,
            clearActive: clearActive,
            setActive: setActive,
        };
    }

    W.PREP_VOCAB_WORD_BOX_GAPS = { mount: mount };
})(typeof window !== "undefined" ? window : globalThis);
