/**
 * Unit 10 · Use of English · «Was Shakespeare a woman?» (Part 1 MC cloze)
 *
 * — Мини-словарь на странице задания: см. mount в конце (context=unit10-uoe-shakespeare).
 * — Лексические игры / Word Bank: hint/ans + plain для LexicalGamesPlainRowKit (манифест).
 */
(function (W) {
    "use strict";

    /** Word Bank, Lexical drop, фильтры по спикеру. */
    W.LEX_U10_UOE_SHAKESPEARE_SPEAKER_LABEL = "Shakespeare · Use of English";

    /** Заполненный текст — якорь для Word Bank / игр; каждый {@link U10_UOE_SHAKESPEARE_LEXIS_GAME_ROWS}[].ans непрерывно входит в этот текст. */
    W.U10_UOE_SHAKESPEARE_LEXIS_PLAIN =
        "Few topics excite aficionados as much as the perennial question of Shakespeare's true identity. " +
        "Scholars raise questions over how one playwright could keep single-handedly creating so much verse " +
        "without time to travel to settings mirrored on stage. Later editors helped create a body of work that reads " +
        "larger than one touring life, while rumours whisper some lordlings chose to write plays under his name to dodge scandal. " +
        "Whenever gossip comes to the fore, vehement fans treat fresh doubt as tantamount to heresy.";

    /**
     * Карточки словаря на странице задания (англо-английские пояснения).
     * @type {{ phrase: string, definitionEn: string }[]}
     */
    W.U10_UOE_SHAKESPEARE_LEXICON_ENTRIES = [
        {
            phrase: "excite aficionados",
            definitionEn:
                "To stir strong interest or enthusiasm among people who are devoted followers of a subject, genre, or artist."
        },
        {
            phrase: "raise questions over [something]",
            definitionEn:
                "To make people doubt whether something is accurate, fair, or trustworthy — similar to casting doubt on a claim."
        },
        {
            phrase: "create a body of work",
            definitionEn:
                "To produce a coherent set of creative pieces over time — plays, poems, novels, etc., viewed as one achievement."
        },
        {
            phrase: "travel to settings",
            definitionEn:
                "To visit (or know firsthand) the real places where stories unfold; often contrasted with only imagining them."
        },
        {
            phrase: "write plays under [someone's] name",
            definitionEn:
                "To have drama credited to another identity — sometimes implying secrecy, disguise, or proxy authorship."
        },
        {
            phrase: "perennial question",
            definitionEn:
                "A debate that keeps returning — familiar, long-running, and never fully settled."
        },
        {
            phrase: "single-handedly creating",
            definitionEn:
                "Building or producing something entirely alone, without partners or co-authors sharing the labour."
        },
        {
            phrase: "come to the fore",
            definitionEn:
                "To move into public attention so that people notice and discuss it widely — emerge as prominent."
        },
        {
            phrase: "tantamount to heresy",
            definitionEn:
                "So offensive to a group's core beliefs that rejecting it feels almost like attacking sacred doctrine."
        },
        {
            phrase: "vehement fans",
            definitionEn:
                "Supporters who react with fierce, loud conviction — sharper than simply saying they are passionate."
        }
    ];

    /**
     * Игры / Word Bank: hint — English gloss only.
     * ans — непрерывный фрагмент из {@link U10_UOE_SHAKESPEARE_LEXIS_PLAIN}.
     */
    W.U10_UOE_SHAKESPEARE_LEXIS_GAME_ROWS = [
        {
            hint: "To stir strong interest among people who deeply love the topic or the debate.",
            ans: "excite aficionados"
        },
        {
            hint: "People start doubting whether a claim still holds — classroom synonym might be \"cast doubt on\".",
            ans: "raise questions over"
        },
        {
            hint: "To produce the full set of creative pieces someone is remembered for, seen as one achievement.",
            ans: "create a body of work"
        },
        {
            hint: "Actually going to the places stories describe — not only imagining them from books.",
            ans: "travel to settings"
        },
        {
            hint: "Publish drama while another person appears as the credited author on the title page.",
            ans: "write plays under his name"
        },
        {
            hint: "An argument everyone keeps reopening — it never quite disappears from discussion.",
            ans: "perennial question"
        },
        {
            hint: "Making something huge entirely alone, with no co-authors sharing the workload.",
            ans: "single-handedly creating"
        },
        {
            hint: "Suddenly becomes what everyone notices and talks about in public.",
            ans: "come to the fore"
        },
        {
            hint: "So shocking to believers it feels like attacking something sacred or unquestionable.",
            ans: "tantamount to heresy"
        },
        {
            hint: "Supporters who answer back with fierce emotion — not mild or polite agreement.",
            ans: "vehement fans"
        }
    ];

    /**
     * Literary translation WF · коллокации: добавляются в тот же plain / GAME_ROWS, что и Shakespeare pack,
     * чтобы строки попадали в лексические игры и Word Bank на вкладке Shakespeare Unit 10.
     */
    var U10_UOE_LITERARY_WF_LEXIS_APPEND_PLAIN =
        " In academic prose, precision is often taken as read among specialists. Revising shows a keen commitment to clarity when arguments matter. A marginal comment should remain unobtrusive beside the body paragraph. Bold borders must be used sparingly on worksheets. A loud colour shift can be jarring on a projector slide.";

    W.U10_UOE_SHAKESPEARE_LEXIS_PLAIN += U10_UOE_LITERARY_WF_LEXIS_APPEND_PLAIN;

    var U10_UOE_LITERARY_WF_LEXIS_APPEND_ROWS = [
        {
            hint: "Accepted without extra argument — everyone already treats it as agreed in that community.",
            ans: "taken as read"
        },
        {
            hint: "Shows strong, eager dedication toward a standard — here before the noun clarity.",
            ans: "keen commitment to"
        },
        {
            hint: "Stays subtle so it never steals attention from the main message nearby.",
            ans: "remain unobtrusive"
        },
        {
            hint: "Applied only in small amounts — the opposite of plastering the page with effects.",
            ans: "used sparingly"
        },
        {
            hint: "Strikes readers as harsh or out of place because it clashes with its surroundings.",
            ans: "can be jarring"
        }
    ];

    for (var litRx = 0; litRx < U10_UOE_LITERARY_WF_LEXIS_APPEND_ROWS.length; litRx++) {
        W.U10_UOE_SHAKESPEARE_LEXIS_GAME_ROWS.push(U10_UOE_LITERARY_WF_LEXIS_APPEND_ROWS[litRx]);
    }

    /**
     * Карточки для FAB Quick dictionary на literary-translation-pitfalls.html (EN–EN).
     * @type {{ phrase: string, definitionEn: string }[]}
     */
    W.U10_UOE_LITERARY_WF_QUICK_DICT_ENTRIES = [
        {
            phrase: "be / is taken as read",
            definitionEn:
                "Treated as already agreed among specialists — nobody expects long proof because the point is considered obvious in context."
        },
        {
            phrase: "keen commitment to [something]",
            definitionEn:
                "Strong, eager loyalty toward a goal or standard — sharper than simply saying you \"support\" it."
        },
        {
            phrase: "remain unobtrusive",
            definitionEn:
                "Stay unnoticed so the reader keeps focus on the main argument instead of the ornament."
        },
        {
            phrase: "use [something] sparingly",
            definitionEn:
                "Apply it only in small doses — avoid overdoing the effect so it stays tasteful."
        },
        {
            phrase: "can be jarring · jarring",
            definitionEn:
                "Can feel harsh or misplaced because it clashes with everything around it and unsettles the audience."
        }
    ];

    function esc(s) {
        return String(s == null ? "" : s)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    function mountPart1ShakespeareDictionary() {
        var sp = new URLSearchParams(W.location.search || "");
        if (String(sp.get("context") || "").trim() !== "unit10-uoe-shakespeare") return;

        function build() {
            if (document.getElementById("p1mc-shakespeare-dict-fab")) return;

            var entries = W.U10_UOE_SHAKESPEARE_LEXICON_ENTRIES || [];
            var inner = entries
                .map(function (row) {
                    return (
                        '<article class="p1mc-dict-entry"><h3 class="p1mc-dict-phrase">' +
                        esc(row.phrase) +
                        '</h3><p class="p1mc-dict-def">' +
                        esc(row.definitionEn) +
                        "</p></article>"
                    );
                })
                .join("");

            var fab = document.createElement("button");
            fab.type = "button";
            fab.id = "p1mc-shakespeare-dict-fab";
            fab.className = "p1mc-dict-fab";
            fab.setAttribute("aria-expanded", "false");
            fab.setAttribute("aria-controls", "p1mc-shakespeare-dict-drawer");
            fab.setAttribute("title", "Quick dictionary");
            fab.innerHTML =
                '<span class="p1mc-dict-fab-inner" aria-hidden="true">\uD83D\uDCD6</span>' +
                '<span class="p1mc-dict-fab-label">' +
                '<span class="p1mc-dict-fab-line">Quick</span>' +
                '<span class="p1mc-dict-fab-line">dictionary</span>' +
                "</span>";

            var backdrop = document.createElement("div");
            backdrop.id = "p1mc-shakespeare-dict-backdrop";
            backdrop.className = "p1mc-dict-backdrop";
            backdrop.hidden = true;

            var drawer = document.createElement("aside");
            drawer.id = "p1mc-shakespeare-dict-drawer";
            drawer.className = "p1mc-dict-drawer";
            drawer.setAttribute("aria-label", "Quick dictionary — key phrases");
            drawer.hidden = true;
            drawer.innerHTML =
                '<div class="p1mc-dict-drawer-head">' +
                '<span class="p1mc-dict-drawer-title">Quick dictionary</span>' +
                '<button type="button" class="p1mc-dict-drawer-x" aria-label="Close dictionary">\u00d7</button>' +
                '</div><div class="p1mc-dict-drawer-body">' +
                '<p class="p1mc-dict-lede">Short English explanations for useful phrases from the text.</p>' +
                inner +
                "</div>";

            document.body.appendChild(backdrop);
            document.body.appendChild(drawer);
            document.body.appendChild(fab);

            var btnX = drawer.querySelector(".p1mc-dict-drawer-x");

            function setOpen(on) {
                var open = !!on;
                document.body.classList.toggle("part1-mc--dict-open", open);
                backdrop.hidden = !open;
                drawer.hidden = !open;
                drawer.classList.toggle("is-visible", open);
                fab.setAttribute("aria-expanded", open ? "true" : "false");
            }

            function closeDict() {
                setOpen(false);
            }

            fab.addEventListener("click", function () {
                var next = backdrop.hidden;
                setOpen(next);
            });
            backdrop.addEventListener("click", closeDict);
            if (btnX) btnX.addEventListener("click", closeDict);

            document.addEventListener(
                "keydown",
                function (e) {
                    if (e.key !== "Escape") return;
                    if (!document.body.classList.contains("part1-mc--dict-open")) return;
                    e.preventDefault();
                    closeDict();
                },
                true
            );
        }

        if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build);
        else build();
    }

    /** FAB + drawer · literary WF page (English–English quick dictionary). */
    function mountLiteraryWfQuickDictionary() {
        var path = "";
        try {
            path = String(W.location.pathname || "");
        } catch (ePath) {}
        if (!/literary-translation-pitfalls\.html/i.test(path)) return;

        function buildLit() {
            if (document.getElementById("litwf-dict-fab")) return;

            var entries = W.U10_UOE_LITERARY_WF_QUICK_DICT_ENTRIES || [];
            var inner = entries
                .map(function (row) {
                    return (
                        '<article class="litwf-dict-entry"><h3 class="litwf-dict-phrase">' +
                        esc(row.phrase) +
                        '</h3><p class="litwf-dict-def">' +
                        esc(row.definitionEn) +
                        "</p></article>"
                    );
                })
                .join("");

            var fab = document.createElement("button");
            fab.type = "button";
            fab.id = "litwf-dict-fab";
            fab.className = "litwf-dict-fab";
            fab.setAttribute("aria-expanded", "false");
            fab.setAttribute("aria-controls", "litwf-dict-drawer");
            fab.setAttribute("title", "Quick dictionary");
            fab.innerHTML =
                '<span class="litwf-dict-fab-inner" aria-hidden="true">\uD83D\uDCD6</span>' +
                '<span class="litwf-dict-fab-label">' +
                '<span class="litwf-dict-fab-line">Quick</span>' +
                '<span class="litwf-dict-fab-line">dictionary</span>' +
                "</span>";

            var backdrop = document.createElement("div");
            backdrop.id = "litwf-dict-backdrop";
            backdrop.className = "litwf-dict-backdrop";
            backdrop.hidden = true;

            var drawer = document.createElement("aside");
            drawer.id = "litwf-dict-drawer";
            drawer.className = "litwf-dict-drawer";
            drawer.setAttribute("aria-label", "Quick dictionary");
            drawer.hidden = true;
            drawer.innerHTML =
                '<div class="litwf-dict-drawer-head">' +
                '<span class="litwf-dict-drawer-title">Quick dictionary</span>' +
                '<button type="button" class="litwf-dict-drawer-x" aria-label="Close">\u00d7</button>' +
                '</div><div class="litwf-dict-drawer-body">' +
                '<p class="litwf-dict-lede">English explanations for useful phrases from this task.</p>' +
                inner +
                "</div>";

            document.body.appendChild(backdrop);
            document.body.appendChild(drawer);
            document.body.appendChild(fab);

            var btnX = drawer.querySelector(".litwf-dict-drawer-x");

            function setOpen(on) {
                var open = !!on;
                document.body.classList.toggle("litwf-exercise--dict-open", open);
                backdrop.hidden = !open;
                drawer.hidden = !open;
                drawer.classList.toggle("is-visible", open);
                fab.setAttribute("aria-expanded", open ? "true" : "false");
            }

            function closeDict() {
                setOpen(false);
            }

            fab.addEventListener("click", function () {
                setOpen(backdrop.hidden);
            });
            backdrop.addEventListener("click", closeDict);
            if (btnX) btnX.addEventListener("click", closeDict);

            document.addEventListener(
                "keydown",
                function (e) {
                    if (e.key !== "Escape") return;
                    if (!document.body.classList.contains("litwf-exercise--dict-open")) return;
                    e.preventDefault();
                    closeDict();
                },
                true
            );
        }

        if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", buildLit);
        else buildLit();
    }

    mountPart1ShakespeareDictionary();
    mountLiteraryWfQuickDictionary();
})(typeof window !== "undefined" ? window : globalThis);
