/**
 * CPE Quick dictionary — FAB + side drawer (left or right).
 * Styles: css/cpe-quick-dictionary-drawer.css
 * Global: CPE_QUICK_DICTIONARY.mount({ rows, side, prefix, lede, groupHeadings })
 */
(function (W, D) {
    "use strict";

    function esc(text) {
        return String(text)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    function resolveRows(opts) {
        if (Array.isArray(opts.rows) && opts.rows.length) return opts.rows.slice();
        if (opts.rowsGlobal && W[opts.rowsGlobal] && W[opts.rowsGlobal].length) {
            return W[opts.rowsGlobal].slice();
        }
        return [];
    }

    function mount(opts) {
        opts = opts || {};
        var prefix = opts.prefix || "cpe-qdict";
        var fabId = prefix + "-fab";
        if (D.getElementById(fabId)) return null;

        var rows = resolveRows(opts);
        if (!rows.length) return null;

        var side = opts.side === "left" ? "left" : "right";
        var groupHeadings = opts.groupHeadings !== false;
        var lede =
            opts.lede ||
            "Key phrases from the text — same rows as the Word Bank deck for this reading.";

        if (opts.sortRows) {
            rows.sort(function (a, b) {
                var ga = String(a.group || "");
                var gb = String(b.group || "");
                if (ga !== gb) return ga.localeCompare(gb);
                return String(a.ans || "").localeCompare(String(b.ans || ""));
            });
        }

        var fab = D.createElement("button");
        fab.type = "button";
        fab.id = fabId;
        fab.className = "cpe-qdict-fab" + (side === "left" ? " cpe-qdict-fab--left" : "");
        fab.setAttribute("aria-expanded", "false");
        fab.setAttribute("aria-controls", prefix + "-drawer");
        fab.setAttribute("title", "Quick dictionary");
        fab.innerHTML =
            '<span class="cpe-qdict-fab-inner" aria-hidden="true">\uD83D\uDCD6</span>' +
            '<span class="cpe-qdict-fab-label">' +
            '<span class="cpe-qdict-fab-line">Quick</span>' +
            '<span class="cpe-qdict-fab-line">dictionary</span>' +
            "</span>";

        var backdrop = D.createElement("div");
        backdrop.id = prefix + "-backdrop";
        backdrop.className = "cpe-qdict-backdrop";
        backdrop.hidden = true;

        var drawer = D.createElement("aside");
        drawer.id = prefix + "-drawer";
        drawer.className =
            "cpe-qdict-drawer" + (side === "left" ? " cpe-qdict-drawer--left" : "");
        drawer.setAttribute("aria-label", "Quick dictionary");
        drawer.hidden = true;
        drawer.innerHTML =
            '<div class="cpe-qdict-drawer-head">' +
            '<span class="cpe-qdict-drawer-title">Quick dictionary</span>' +
            '<button type="button" class="cpe-qdict-drawer-x" aria-label="Close">\u00d7</button>' +
            "</div>" +
            '<div class="cpe-qdict-drawer-body">' +
            '<p class="cpe-qdict-lede">' +
            lede +
            "</p>" +
            '<label class="cpe-qdict-sr-only" for="' +
            prefix +
            '-filter">Filter by phrase or gloss</label>' +
            '<input type="search" id="' +
            prefix +
            '-filter" class="cpe-qdict-filter" placeholder="Filter by phrase or gloss\u2026" autocomplete="off" spellcheck="false" />' +
            '<div id="' +
            prefix +
            '-list" class="cpe-qdict-list-host"></div>' +
            "</div>";

        D.body.appendChild(backdrop);
        D.body.appendChild(drawer);
        D.body.appendChild(fab);

        if (side === "left") {
            D.body.classList.add("cpe-qdict-page--left");
        }

        var host = D.getElementById(prefix + "-list");
        var inp = D.getElementById(prefix + "-filter");
        var btnX = drawer.querySelector(".cpe-qdict-drawer-x");

        function render(filter) {
            if (!host) return;
            var f = (filter || "").trim().toLowerCase();
            host.innerHTML = "";
            var shown = 0;
            var lastGroup = null;

            rows.forEach(function (row) {
                var hay = (
                    String(row.ans || "") +
                    " " +
                    String(row.hint || "") +
                    " " +
                    String(row.group || "")
                ).toLowerCase();
                if (f && hay.indexOf(f) < 0) return;
                shown++;

                if (groupHeadings && row.group && row.group !== lastGroup) {
                    lastGroup = row.group;
                    var h = D.createElement("h4");
                    h.className = "cpe-qdict-group";
                    h.textContent = row.group;
                    host.appendChild(h);
                }

                var div = D.createElement("article");
                div.className = "cpe-qdict-entry";
                div.innerHTML =
                    '<p class="cpe-qdict-phrase">' +
                    esc(row.ans) +
                    "</p>" +
                    '<p class="cpe-qdict-def">' +
                    esc(row.hint) +
                    "</p>";
                host.appendChild(div);
            });

            if (!shown) {
                host.innerHTML = '<p class="cpe-qdict-empty">No matches.</p>';
            }
        }

        function setOpen(on) {
            var open = !!on;
            D.body.classList.toggle("cpe-qdict-open", open);
            backdrop.hidden = !open;
            drawer.hidden = !open;
            drawer.classList.toggle("is-visible", open);
            fab.setAttribute("aria-expanded", open ? "true" : "false");
            drawer.setAttribute("aria-hidden", open ? "false" : "true");
            if (open) render(inp && inp.value ? inp.value : "");
        }

        function closeDrawer() {
            setOpen(false);
        }

        fab.addEventListener("click", function () {
            setOpen(drawer.hidden || !drawer.classList.contains("is-visible"));
        });
        backdrop.addEventListener("click", closeDrawer);
        if (btnX) btnX.addEventListener("click", closeDrawer);
        if (inp) {
            inp.addEventListener("input", function () {
                render(inp.value);
            });
        }

        D.addEventListener("keydown", function (ev) {
            if (ev.key !== "Escape") return;
            if (!D.body.classList.contains("cpe-qdict-open")) return;
            ev.preventDefault();
            closeDrawer();
        });

        render("");
        return { close: closeDrawer, render: render, setOpen: setOpen };
    }

    W.CPE_QUICK_DICTIONARY = { mount: mount };
})(typeof window !== "undefined" ? window : globalThis, typeof document !== "undefined" ? document : null);
