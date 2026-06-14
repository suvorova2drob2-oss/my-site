/**
 * +Folder / +Activity for on-disk index.html pages.
 * Rows are tagged with prepPageKey (this page only); without prepPageKey they are not listed.
 * Optional data-linked-unit="N" — also show the tile under Levels → Level N in the main app (omit by default).
 * If a .folders block precedes .prep-disk-strip-host, new cards are inserted there (fourth tile beside static ones).
 */
(function (global) {
    if (global.__PREP_CONTENT_TOOLS_ENABLED__ !== true) {
        try {
            if (typeof sessionStorage !== "undefined" && sessionStorage.getItem("prep_content_tools_session") === "1") {
                global.__PREP_CONTENT_TOOLS_ENABLED__ = true;
            }
        } catch (e0) {}
    }
    if (global.__PREP_CONTENT_TOOLS_ENABLED__ !== true) return;

    function prepCourseCmsSessionOn() {
        try {
            if (typeof global.prepCourseCmsAvailable === "function") return global.prepCourseCmsAvailable();
            return typeof sessionStorage !== "undefined" && sessionStorage.getItem("prep_course_cms_session") === "1";
        } catch (eCms) {
            return false;
        }
    }

    var HUB_VM_KEY = "prep-hub-view-mode-v1";

    function isEditMode() {
        return false;
    }

    function siteRootHref() {
        var scripts = document.getElementsByTagName("script");
        for (var i = scripts.length - 1; i >= 0; i--) {
            var s = scripts[i].src;
            if (s && /\/js\/prep-disk-hub-strip\.js/i.test(s)) {
                return s.replace(/\/js\/prep-disk-hub-strip\.js(\?.*)?$/i, "/");
            }
        }
        return "";
    }

    function injectCssOnce() {
        if (document.getElementById("prep-disk-hub-strip-styles")) return;
        var st = document.createElement("style");
        st.id = "prep-disk-hub-strip-styles";
        st.textContent =
            ".prep-disk-strip{margin-top:18px;padding-top:14px;border-top:1px solid rgba(255,255,255,.08)}" +
            ".prep-disk-strip-hint{font-size:12px;color:#94a3b8;margin:0 0 10px;line-height:1.45}" +
            ".prep-disk-strip-grid{display:flex;flex-wrap:wrap;gap:12px}" +
            ".prep-disk-strip-card{flex:1 1 200px;min-width:160px;margin:0;cursor:pointer;background:#0f172a;border:1px solid #334155;border-radius:14px;padding:14px 16px;text-align:left;color:#f1f5f9;font:inherit;-webkit-tap-highlight-color:transparent;touch-action:manipulation}" +
            ".prep-disk-strip-card:hover{border-color:#38bdf8}" +
            ".prep-disk-strip-card strong{display:block;font-size:0.98rem;margin-bottom:4px}" +
            ".prep-disk-strip-card .sub{font-size:12px;color:#94a3b8;line-height:1.4;margin-top:4px}" +
            ".prep-disk-strip-card .go{font-size:11px;color:#38bdf8;font-weight:600;margin-top:8px}" +
            ".prep-disk-created{margin-top:14px}" +
            ".prep-disk-created-title{font-size:12px;color:#94a3b8;margin:0 0 8px;font-weight:600}" +
            "@media(max-width:720px){.prep-disk-strip-grid{flex-direction:column}.prep-disk-strip-card{flex:1 1 auto;min-width:0;width:100%;min-height:48px}}" +
            ".prep-disk-m{position:fixed;inset:0;z-index:500;display:flex;align-items:center;justify-content:center;padding:max(16px,env(safe-area-inset-top)) max(16px,env(safe-area-inset-right)) max(16px,env(safe-area-inset-bottom)) max(16px,env(safe-area-inset-left));box-sizing:border-box}" +
            ".prep-disk-m[hidden]{display:none!important}" +
            ".prep-disk-m-back{position:absolute;inset:0;background:rgba(2,6,23,.72)}" +
            ".prep-disk-m-card{position:relative;width:min(420px,100%);max-height:min(90vh,640px);overflow:auto;border-radius:16px;border:1px solid #334155;background:#1e293b;padding:20px 20px 18px;box-shadow:0 24px 60px rgba(0,0,0,.55);text-align:left;color:#f1f5f9;font-family:inherit}" +
            ".prep-disk-m-h3{margin:0 0 14px;font-size:1.15rem;color:#f1f5f9}" +
            ".prep-disk-m-label{display:block;font-size:.78rem;color:#94a3b8;margin:10px 0 5px}" +
            ".prep-disk-m-req{color:#f87171;font-weight:800}" +
            ".prep-disk-m-opt{font-weight:400;opacity:.85}" +
            ".prep-disk-m-inp,.prep-disk-m-ta{width:100%;box-sizing:border-box;border-radius:10px;border:1px solid #334155;background:#0f172a;color:#e2e8f0;font-size:.95rem;padding:10px 12px}" +
            ".prep-disk-m-ta{resize:vertical;min-height:72px}" +
            ".prep-disk-m-err{color:#fca5a5;font-size:.85rem;margin:10px 0 0}" +
            ".prep-disk-m-actions{display:flex;justify-content:flex-end;gap:10px;margin-top:18px;flex-wrap:wrap}" +
            ".prep-disk-m-typehint{font-size:11px;color:#64748b;margin:-2px 0 12px;line-height:1.35}" +
            ".prep-disk-card-engine{font-size:11px;color:#64748b;margin-top:6px;line-height:1.35}" +
            ".prep-disk-inj-wrap,.prep-disk-static-wrap{position:relative;display:block;margin:0;overflow:visible}" +
            ".prep-disk-inj-wrap>a.folder,.prep-disk-static-wrap>a.folder{padding:14px 44px 14px 16px;box-sizing:border-box;min-height:48px}" +
            ".prep-disk-ovf{position:absolute;top:8px;right:8px;z-index:6}" +
            ".prep-disk-ovf-btn{width:36px;height:36px;border-radius:10px;border:1px solid #334155;background:#0f172a;color:#e2e8f0;font-size:20px;line-height:1;cursor:pointer;padding:0;-webkit-tap-highlight-color:transparent;touch-action:manipulation}" +
            ".prep-disk-ovf-btn:hover{border-color:#38bdf8;color:#38bdf8}" +
            ".prep-disk-ovf-menu{position:absolute;top:100%;right:0;margin-top:4px;min-width:210px;border-radius:12px;border:1px solid #334155;background:#1e293b;box-shadow:0 16px 40px rgba(0,0,0,.5);padding:6px;display:none;flex-direction:column;gap:2px;z-index:20}" +
            ".prep-disk-ovf-menu.on{display:flex}" +
            ".prep-disk-ovf-item{display:block;width:100%;text-align:left;border:0;background:transparent;color:#e2e8f0;font-size:13px;padding:10px 12px;border-radius:8px;cursor:pointer;font:inherit}" +
            ".prep-disk-ovf-item:hover{background:#0f172a}" +
            ".prep-disk-ovf-item.prep-disk-ovf-danger{color:#fca5a5}" +
            ".prep-disk-m-card.prep-disk-m--static-only label[for=\"prep-disk-fld-goal\"],.prep-disk-m-card.prep-disk-m--static-only #prep-disk-fld-goal{display:none!important}";
        document.head.appendChild(st);
    }

    var STATIC_FOLDERS_KEY = "prep-disk-static-folders-v1";

    function prepDiskCloseAllOverflows() {
        var open = document.querySelectorAll(".prep-disk-ovf-menu.on");
        for (var i = 0; i < open.length; i++) open[i].classList.remove("on");
    }

    function prepDiskWireOvfDocCloseOnce() {
        if (global.prepDiskHubStrip._ovfDocWired) return;
        global.prepDiskHubStrip._ovfDocWired = true;
        document.addEventListener("click", function () {
            prepDiskCloseAllOverflows();
        });
    }

    function staticNormHref(href) {
        return String(href || "").trim().split("#")[0].replace(/^\.\//, "");
    }

    function staticFolderKeyFromHref(href) {
        var n = staticNormHref(href);
        return n || "_link";
    }

    function staticLoadPage(pageKey) {
        try {
            var all = JSON.parse(localStorage.getItem(STATIC_FOLDERS_KEY) || "{}");
            var st = all[pageKey] || {};
            st.order = Array.isArray(st.order) ? st.order : [];
            st.meta = st.meta && typeof st.meta === "object" ? st.meta : {};
            st.hidden = st.hidden && typeof st.hidden === "object" ? st.hidden : {};
            return st;
        } catch (e0) {
            return { order: [], meta: {}, hidden: {} };
        }
    }

    function staticSavePage(pageKey, st) {
        try {
            var all = JSON.parse(localStorage.getItem(STATIC_FOLDERS_KEY) || "{}");
        } catch (e1) {
            all = {};
        }
        all[pageKey] = st;
        localStorage.setItem(STATIC_FOLDERS_KEY, JSON.stringify(all));
        try {
            global.dispatchEvent(new CustomEvent("prep-disk-static-changed", { detail: { pageKey: pageKey } }));
        } catch (e2) {}
    }

    function prepDiskReorderDynamicFolder(pageKey, folderId, delta) {
        if (!global.PrepSiteContent || !PrepSiteContent.load || !PrepSiteContent.save) return;
        var d = PrepSiteContent.load();
        var folders = d.folders || [];
        var mover = null;
        for (var m = 0; m < folders.length; m++) {
            if (folders[m].id === folderId) {
                mover = folders[m];
                break;
            }
        }
        if (!mover || String(mover.prepPageKey || "") !== String(pageKey)) return;
        var par = mover.parentFolderId != null && String(mover.parentFolderId).trim() !== ""
            ? String(mover.parentFolderId).trim()
            : "";
        var indices = [];
        for (var i = 0; i < folders.length; i++) {
            if (folders[i].prepPageKey !== pageKey) continue;
            var p2 =
                folders[i].parentFolderId != null && String(folders[i].parentFolderId).trim() !== ""
                    ? String(folders[i].parentFolderId).trim()
                    : "";
            if (p2 !== par) continue;
            indices.push(i);
        }
        var pos = -1;
        for (var j = 0; j < indices.length; j++) {
            if (folders[indices[j]].id === folderId) {
                pos = j;
                break;
            }
        }
        var nj = pos + delta;
        if (pos < 0 || nj < 0 || nj >= indices.length) return;
        var ia = indices[pos];
        var ib = indices[nj];
        var t = folders[ia];
        folders[ia] = folders[ib];
        folders[ib] = t;
        PrepSiteContent.save(d);
    }

    function prepDiskInstallOverflowMenu(wrap, items) {
        prepDiskWireOvfDocCloseOnce();
        var existing = wrap.querySelector(".prep-disk-ovf");
        if (existing) existing.parentNode.removeChild(existing);
        var root = document.createElement("div");
        root.className = "prep-disk-ovf";
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "prep-disk-ovf-btn";
        btn.setAttribute("aria-label", "More");
        btn.textContent = "\u22ee";
        var menu = document.createElement("div");
        menu.className = "prep-disk-ovf-menu";
        for (var i = 0; i < items.length; i++) {
            (function (it) {
                var b = document.createElement("button");
                b.type = "button";
                b.className = "prep-disk-ovf-item" + (it.danger ? " prep-disk-ovf-danger" : "");
                b.textContent = it.label;
                b.onclick = function (ev) {
                    ev.preventDefault();
                    ev.stopPropagation();
                    prepDiskCloseAllOverflows();
                    if (typeof it.onClick === "function") it.onClick();
                };
                menu.appendChild(b);
            })(items[i]);
        }
        btn.addEventListener("click", function (ev) {
            ev.preventDefault();
            ev.stopPropagation();
            var was = menu.classList.contains("on");
            prepDiskCloseAllOverflows();
            if (!was) menu.classList.add("on");
        });
        root.appendChild(btn);
        root.appendChild(menu);
        wrap.appendChild(root);
    }

    function prepDiskCollectStaticFolderItems(grid) {
        var out = [];
        for (var i = 0; i < grid.children.length; i++) {
            var c = grid.children[i];
            if (c.classList && c.classList.contains("prep-disk-inj-wrap")) continue;
            var a = null;
            var wrapEl = null;
            if (c.classList && c.classList.contains("prep-disk-static-wrap")) {
                wrapEl = c;
                a = c.querySelector("a.folder");
            } else if (c.tagName === "A" && c.classList && c.classList.contains("folder")) {
                a = c;
            }
            if (!a) continue;
            var key = staticFolderKeyFromHref(a.getAttribute("href"));
            out.push({ key: key, anchor: a, wrap: wrapEl });
        }
        return out;
    }

    function prepDiskApplyStaticFoldersInGrid(grid, pageKey, edit, onRefresh) {
        if (!grid) return;
        var items = prepDiskCollectStaticFolderItems(grid);
        if (!items.length) return;
        for (var w = 0; w < items.length; w++) {
            var it0 = items[w];
            if (!it0.wrap && it0.anchor.parentNode) {
                var wn = document.createElement("div");
                wn.className = "prep-disk-static-wrap";
                it0.anchor.parentNode.insertBefore(wn, it0.anchor);
                wn.appendChild(it0.anchor);
                it0.wrap = wn;
            }
            var a0 = it0.anchor;
            if (!a0.getAttribute("data-prep-default-title")) {
                var s0 = a0.querySelector("strong");
                var p0 = a0.querySelector("span");
                a0.setAttribute("data-prep-default-title", s0 ? s0.textContent.trim() : "");
                a0.setAttribute("data-prep-default-sub", p0 ? p0.textContent.trim() : "");
            }
        }
        var st = staticLoadPage(pageKey);
        var keys = [];
        for (var k = 0; k < items.length; k++) keys.push(items[k].key);
        var orderBefore = JSON.stringify(st.order);
        if (!st.order.length) {
            st.order = keys.slice();
        } else {
            st.order = st.order.filter(function (x) {
                return keys.indexOf(x) >= 0;
            });
            for (var a = 0; a < keys.length; a++) {
                if (st.order.indexOf(keys[a]) < 0) st.order.push(keys[a]);
            }
        }
        if (JSON.stringify(st.order) !== orderBefore) {
            staticSavePage(pageKey, st);
        }
        var keyToWrap = {};
        for (var b = 0; b < items.length; b++) keyToWrap[items[b].key] = items[b].wrap;
        var firstInj = null;
        for (var qi = 0; qi < grid.children.length; qi++) {
            var chQi = grid.children[qi];
            if (chQi.classList && chQi.classList.contains("prep-disk-inj-wrap")) {
                firstInj = chQi;
                break;
            }
        }
        var frag = document.createDocumentFragment();
        for (var o = 0; o < st.order.length; o++) {
            var ww = keyToWrap[st.order[o]];
            if (ww) frag.appendChild(ww);
        }
        if (firstInj) grid.insertBefore(frag, firstInj);
        else grid.appendChild(frag);
        for (var h = 0; h < st.order.length; h++) {
            var keyH = st.order[h];
            var wrapH = keyToWrap[keyH];
            if (!wrapH) continue;
            var anch = wrapH.querySelector("a.folder");
            if (!anch) continue;
            if (st.hidden && st.hidden[keyH]) wrapH.style.display = "none";
            else wrapH.style.display = "";
            var defT = anch.getAttribute("data-prep-default-title") || "";
            var defS = anch.getAttribute("data-prep-default-sub") || "";
            var mh = st.meta && st.meta[keyH];
            var strong = anch.querySelector("strong");
            var span = anch.querySelector("span");
            if (strong) strong.textContent = mh && mh.title != null && String(mh.title).length ? mh.title : defT;
            if (span) span.textContent = mh && mh.subtitle != null && String(mh.subtitle).length ? mh.subtitle : defS;
        }
        var oldOvf = grid.querySelectorAll(".prep-disk-static-wrap .prep-disk-ovf");
        for (var r = 0; r < oldOvf.length; r++) oldOvf[r].parentNode.removeChild(oldOvf[r]);
        if (!edit) return;
        for (var e = 0; e < st.order.length; e++) {
            var keyE = st.order[e];
            var wrapE = keyToWrap[keyE];
            if (!wrapE || (st.hidden && st.hidden[keyE])) continue;
            (function (folderKey, wrapRef) {
                prepDiskInstallOverflowMenu(wrapRef, [
                    {
                        label: "Rename\u2026",
                        onClick: function () {
                            var ax = wrapRef.querySelector("a.folder");
                            if (!ax) return;
                            prepDiskOpenStaticEdit(pageKey, folderKey, ax, onRefresh);
                        }
                    },
                    {
                        label: "Move up",
                        onClick: function () {
                            var stU = staticLoadPage(pageKey);
                            var ix = stU.order.indexOf(folderKey);
                            if (ix <= 0) return;
                            var t = stU.order[ix - 1];
                            stU.order[ix - 1] = stU.order[ix];
                            stU.order[ix] = t;
                            staticSavePage(pageKey, stU);
                            onRefresh();
                        }
                    },
                    {
                        label: "Move down",
                        onClick: function () {
                            var stD = staticLoadPage(pageKey);
                            var i2 = stD.order.indexOf(folderKey);
                            if (i2 < 0 || i2 >= stD.order.length - 1) return;
                            var t2 = stD.order[i2 + 1];
                            stD.order[i2 + 1] = stD.order[i2];
                            stD.order[i2] = t2;
                            staticSavePage(pageKey, stD);
                            onRefresh();
                        }
                    },
                    {
                        label: "Delete\u2026",
                        danger: true,
                        onClick: function () {
                            if (
                                !global.confirm(
                                    "Hide this folder card from the list? You can restore it by clearing site data for this page."
                                )
                            )
                                return;
                            var stX = staticLoadPage(pageKey);
                            stX.hidden = stX.hidden || {};
                            stX.hidden[folderKey] = true;
                            staticSavePage(pageKey, stX);
                            onRefresh();
                        }
                    }
                ]);
            })(keyE, wrapE);
        }
    }

    function prepDiskOpenStaticEdit(pageKey, folderKey, anchor, afterSave) {
        prepDiskEnsureModalRoot();
        var defT = anchor.getAttribute("data-prep-default-title") || "";
        var defS = anchor.getAttribute("data-prep-default-sub") || "";
        global.prepDiskHubStrip._pendingDisk = {
            kind: "static-meta",
            pageKey: pageKey,
            folderKey: folderKey,
            defaultTitle: defT,
            defaultSub: defS,
            afterSave: afterSave
        };
        var mh = document.getElementById("prep-disk-m-folder-h");
        if (mh) mh.textContent = "Rename card";
        var card = document.querySelector("#prep-disk-modal-folder .prep-disk-m-card");
        if (card) card.classList.add("prep-disk-m--static-only");
        var m = document.getElementById("prep-disk-modal-folder");
        var ti = document.getElementById("prep-disk-fld-title");
        var sb = document.getElementById("prep-disk-fld-subtitle");
        var gl = document.getElementById("prep-disk-fld-goal");
        var er = document.getElementById("prep-disk-fld-err");
        var sStrong = anchor.querySelector("strong");
        var sSpan = anchor.querySelector("span");
        if (ti) ti.value = sStrong ? sStrong.textContent.trim() : "";
        if (sb) sb.value = sSpan ? sSpan.textContent.trim() : "";
        if (gl) gl.value = "";
        if (er) {
            er.hidden = true;
            er.textContent = "";
        }
        if (m) m.hidden = false;
        if (sb) sb.focus();
    }

    function diskActivityEngineLine(uoe) {
        if (uoe === "part1-mc-cloze") {
            return "Use of English — Part 1 multiple-choice cloze · uoeEngine: part1-mc-cloze";
        }
        return "Activity engine · uoeEngine: " + String(uoe || "—");
    }

    /** Same values as index.html #hub-task-type; maps to PrepSiteContent uoeEngine. */
    function diskHubKindToUoeEngine(kind) {
        if (kind === "uoe-part1") return "part1-mc-cloze";
        return "part1-mc-cloze";
    }

    function diskDefaultSubtitleForKind(kind) {
        if (kind === "uoe-part1") return "Part 1 multiple-choice cloze";
        return "Activity";
    }

    function prepDiskSyncActTypeHint() {
        var sel = document.getElementById("prep-disk-act-type");
        var hint = document.getElementById("prep-disk-act-type-hint");
        if (!hint) return;
        if (!sel || !sel.value) {
            hint.textContent = "";
            return;
        }
        hint.textContent = "type: " + sel.value;
    }

    function prepDiskEnsureModalRoot() {
        if (document.getElementById("prep-disk-modal-folder")) return;
        var layer = document.createElement("div");
        layer.id = "prep-disk-modal-layer";
        layer.innerHTML =
            "<div class=\"prep-disk-m\" id=\"prep-disk-modal-folder\" hidden>" +
            "<div class=\"prep-disk-m-back\" data-pd-close=\"folder\"></div>" +
            "<div class=\"prep-disk-m-card\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"prep-disk-m-folder-h\">" +
            "<h3 class=\"prep-disk-m-h3\" id=\"prep-disk-m-folder-h\">New folder</h3>" +
            "<label class=\"prep-disk-m-label\" for=\"prep-disk-fld-title\">Title <span class=\"prep-disk-m-opt\">(optional)</span></label>" +
            "<input type=\"text\" id=\"prep-disk-fld-title\" class=\"prep-disk-m-inp\" placeholder=\"e.g. Exam pack\" autocomplete=\"off\" />" +
            "<label class=\"prep-disk-m-label\" for=\"prep-disk-fld-subtitle\">Subtitle <span class=\"prep-disk-m-req\">*</span></label>" +
            "<input type=\"text\" id=\"prep-disk-fld-subtitle\" class=\"prep-disk-m-inp\" placeholder=\"Short line under the title\" autocomplete=\"off\" />" +
            "<label class=\"prep-disk-m-label\" for=\"prep-disk-fld-goal\">Level goal <span class=\"prep-disk-m-opt\">(optional)</span></label>" +
            "<textarea id=\"prep-disk-fld-goal\" class=\"prep-disk-m-ta\" placeholder=\"Learning outcomes…\"></textarea>" +
            "<p id=\"prep-disk-fld-err\" class=\"prep-disk-m-err\" hidden></p>" +
            "<div class=\"prep-disk-m-actions\">" +
            "<button type=\"button\" class=\"prep-disk-m-btn-cancel\" data-pd-close=\"folder\">Cancel</button>" +
            "<button type=\"button\" id=\"prep-disk-fld-save\" class=\"prep-disk-m-btn-save\">Save</button>" +
            "</div></div></div>" +
            "<div class=\"prep-disk-m\" id=\"prep-disk-modal-act\" hidden>" +
            "<div class=\"prep-disk-m-back\" data-pd-close=\"act\"></div>" +
            "<div class=\"prep-disk-m-card\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"prep-disk-m-act-h\">" +
            "<h3 class=\"prep-disk-m-h3\" id=\"prep-disk-m-act-h\">New activity</h3>" +
            "<label class=\"prep-disk-m-label\" for=\"prep-disk-act-title\">Title <span class=\"prep-disk-m-req\">*</span></label>" +
            "<input type=\"text\" id=\"prep-disk-act-title\" class=\"prep-disk-m-inp\" placeholder=\"Task name\" autocomplete=\"off\" />" +
            "<label class=\"prep-disk-m-label\" for=\"prep-disk-act-type\">Type</label>" +
            "<select id=\"prep-disk-act-type\" class=\"prep-disk-m-inp\">" +
            "<option value=\"uoe-part1\">Use of English — Multiple choice (Part 1 cloze)</option>" +
            "<option value=\"__soon__\" disabled>More activity types (coming soon)</option>" +
            "</select>" +
            "<p id=\"prep-disk-act-type-hint\" class=\"prep-disk-m-typehint\" aria-live=\"polite\"></p>" +
            "<label class=\"prep-disk-m-label\" for=\"prep-disk-act-sub\">Description <span class=\"prep-disk-m-opt\">(optional)</span></label>" +
            "<textarea id=\"prep-disk-act-sub\" class=\"prep-disk-m-ta\" placeholder=\"Line under the title\"></textarea>" +
            "<p id=\"prep-disk-act-err\" class=\"prep-disk-m-err\" hidden></p>" +
            "<div class=\"prep-disk-m-actions\">" +
            "<button type=\"button\" data-pd-close=\"act\">Cancel</button>" +
            "<button type=\"button\" id=\"prep-disk-act-save\">Save</button>" +
            "</div></div></div>";
        document.body.appendChild(layer);
        var selAct = document.getElementById("prep-disk-act-type");
        if (selAct && !selAct.getAttribute("data-pd-hint-wired")) {
            selAct.setAttribute("data-pd-hint-wired", "1");
            selAct.addEventListener("change", prepDiskSyncActTypeHint);
        }
        var stb = document.createElement("style");
        stb.id = "prep-disk-modal-btn-styles";
        stb.textContent =
            ".prep-disk-m-actions button{padding:10px 16px;border-radius:10px;font:inherit;cursor:pointer;border:1px solid #334155;background:#0f172a;color:#e2e8f0}" +
            ".prep-disk-m-actions .prep-disk-m-btn-save,#prep-disk-act-save{background:#38bdf8;border-color:#38bdf8;color:#0f172a;font-weight:600}";
        document.head.appendChild(stb);
        function closeFolder() {
            var m = document.getElementById("prep-disk-modal-folder");
            if (m) m.hidden = true;
            var cardCl = document.querySelector("#prep-disk-modal-folder .prep-disk-m-card");
            if (cardCl) cardCl.classList.remove("prep-disk-m--static-only");
        }
        function closeAct() {
            var m = document.getElementById("prep-disk-modal-act");
            if (m) m.hidden = true;
        }
        layer.addEventListener("click", function (ev) {
            var t = ev.target;
            if (!t || !t.getAttribute) return;
            var c = t.getAttribute("data-pd-close");
            if (c === "folder") closeFolder();
            if (c === "act") closeAct();
        });
        document.getElementById("prep-disk-fld-save").onclick = function () {
            var p = global.prepDiskHubStrip._pendingDisk;
            if (!p) return;
            if (p.kind === "static-meta") {
                var errS = document.getElementById("prep-disk-fld-err");
                var tiS = document.getElementById("prep-disk-fld-title");
                var stS = document.getElementById("prep-disk-fld-subtitle");
                var titleS = (tiS && tiS.value) || "";
                var subtitleS = (stS && stS.value) || "";
                var finT = String(titleS).trim() || p.defaultTitle || "";
                var finS = String(subtitleS).trim() || p.defaultSub || "";
                if (!finT && !finS) {
                    if (errS) {
                        errS.textContent = "Enter a title or subtitle.";
                        errS.hidden = false;
                    }
                    return;
                }
                if (errS) errS.hidden = true;
                try {
                    var stPg = staticLoadPage(p.pageKey);
                    stPg.meta = stPg.meta || {};
                    stPg.meta[p.folderKey] = { title: finT, subtitle: finS };
                    staticSavePage(p.pageKey, stPg);
                } catch (eSt) {
                    alert("Error: " + (eSt && eSt.message ? eSt.message : String(eSt)));
                    return;
                }
                closeFolder();
                if (typeof p.afterSave === "function") p.afterSave();
                return;
            }
            if (p.kind !== "folder" && p.kind !== "folder-edit") return;
            var err = document.getElementById("prep-disk-fld-err");
            var subtitle = (document.getElementById("prep-disk-fld-subtitle") && document.getElementById("prep-disk-fld-subtitle").value) || "";
            if (!String(subtitle).trim()) {
                if (err) {
                    err.textContent = "Enter at least a subtitle.";
                    err.hidden = false;
                }
                return;
            }
            if (err) err.hidden = true;
            var title = (document.getElementById("prep-disk-fld-title") && document.getElementById("prep-disk-fld-title").value) || "";
            var goal = (document.getElementById("prep-disk-fld-goal") && document.getElementById("prep-disk-fld-goal").value) || "";
            try {
                var d = PrepSiteContent.load();
                d.folders = d.folders || [];
                if (p.kind === "folder-edit") {
                    var fE = (d.folders || []).find(function (x) {
                        return x.id === p.folderId;
                    });
                    if (!fE || String(fE.prepPageKey || "") !== String(p.pageKey)) {
                        alert("Record not found on this page.");
                        return;
                    }
                    fE.title = String(title).trim();
                    fE.subtitle = String(subtitle).trim();
                    fE.goal = String(goal).trim();
                    PrepSiteContent.save(d);
                } else {
                    var rec = {
                        id: "fold_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 8),
                        type: "folder",
                        title: String(title).trim(),
                        subtitle: String(subtitle).trim(),
                        goal: String(goal).trim(),
                        prepPageKey: p.pageKey,
                        sections: [],
                        tasks: []
                    };
                    if (p.linkedUnit != null) rec.linkedUnit = p.linkedUnit;
                    if (p.parentFolderId) rec.parentFolderId = p.parentFolderId;
                    d.folders.push(rec);
                    PrepSiteContent.save(d);
                }
            } catch (e1) {
                alert("Error: " + (e1 && e1.message ? e1.message : String(e1)));
                return;
            }
            closeFolder();
            if (typeof p.afterSave === "function") p.afterSave();
        };
        if (!global.prepDiskHubStrip._diskEscWired) {
            global.prepDiskHubStrip._diskEscWired = true;
            document.addEventListener("keydown", function (ev) {
                if (ev.key !== "Escape") return;
                var mf = document.getElementById("prep-disk-modal-folder");
                var ma = document.getElementById("prep-disk-modal-act");
                if (mf && !mf.hidden) {
                    mf.hidden = true;
                    var cardE = document.querySelector("#prep-disk-modal-folder .prep-disk-m-card");
                    if (cardE) cardE.classList.remove("prep-disk-m--static-only");
                } else if (ma && !ma.hidden) ma.hidden = true;
            });
        }
        document.getElementById("prep-disk-act-save").onclick = function () {
            var p = global.prepDiskHubStrip._pendingDisk;
            if (!p || (p.kind !== "activity" && p.kind !== "activity-edit")) return;
            var err = document.getElementById("prep-disk-act-err");
            var title = (document.getElementById("prep-disk-act-title") && document.getElementById("prep-disk-act-title").value) || "";
            if (!String(title).trim()) {
                if (err) {
                    err.textContent = "Enter a title.";
                    err.hidden = false;
                }
                return;
            }
            if (err) err.hidden = true;
            var desc = (document.getElementById("prep-disk-act-sub") && document.getElementById("prep-disk-act-sub").value) || "";
            var selKind = document.getElementById("prep-disk-act-type");
            var kind = selKind && selKind.value ? String(selKind.value) : "uoe-part1";
            var uoeEng = diskHubKindToUoeEngine(kind);
            var subDefault = diskDefaultSubtitleForKind(kind);
            try {
                var d2 = PrepSiteContent.load();
                d2.folders = d2.folders || [];
                if (p.kind === "activity-edit") {
                    var aE = (d2.folders || []).find(function (x) {
                        return x.id === p.activityId;
                    });
                    if (!aE || String(aE.prepPageKey || "") !== String(p.pageKey)) {
                        alert("Record not found on this page.");
                        return;
                    }
                    aE.title = String(title).trim();
                    aE.subtitle = String(desc).trim() || subDefault;
                    aE.uoeEngine = uoeEng;
                    aE.prepTaskKind = kind;
                    PrepSiteContent.save(d2);
                } else {
                    var rec2 = {
                        id: "act_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 8),
                        type: "activity",
                        uoeEngine: uoeEng,
                        prepTaskKind: kind,
                        title: String(title).trim(),
                        subtitle: String(desc).trim() || subDefault,
                        prepPageKey: p.pageKey,
                        sections: [],
                        tasks: []
                    };
                    if (p.linkedUnit != null) rec2.linkedUnit = p.linkedUnit;
                    if (p.parentFolderId) rec2.parentFolderId = p.parentFolderId;
                    d2.folders.push(rec2);
                    PrepSiteContent.save(d2);
                }
            } catch (e2) {
                alert("Error: " + (e2 && e2.message ? e2.message : String(e2)));
                return;
            }
            closeAct();
            if (typeof p.afterSave === "function") p.afterSave();
        };
    }

    function prepDiskOpenFolderModal(afterSave, ctx) {
        prepDiskEnsureModalRoot();
        global.prepDiskHubStrip._pendingDisk = { kind: "folder", afterSave: afterSave, pageKey: ctx.pageKey, linkedUnit: ctx.linkedUnit, parentFolderId: ctx.parentFolderId };
        var mh = document.getElementById("prep-disk-m-folder-h");
        if (mh) mh.textContent = "New folder";
        var m = document.getElementById("prep-disk-modal-folder");
        var cardRm = document.querySelector("#prep-disk-modal-folder .prep-disk-m-card");
        if (cardRm) cardRm.classList.remove("prep-disk-m--static-only");
        var ti = document.getElementById("prep-disk-fld-title");
        var st = document.getElementById("prep-disk-fld-subtitle");
        var gl = document.getElementById("prep-disk-fld-goal");
        var er = document.getElementById("prep-disk-fld-err");
        if (ti) ti.value = "";
        if (st) st.value = "";
        if (gl) gl.value = "";
        if (er) {
            er.hidden = true;
            er.textContent = "";
        }
        if (m) m.hidden = false;
        if (st) st.focus();
    }

    function prepDiskOpenFolderEdit(afterSave, ctx, rec) {
        prepDiskEnsureModalRoot();
        global.prepDiskHubStrip._pendingDisk = {
            kind: "folder-edit",
            folderId: rec.id,
            afterSave: afterSave,
            pageKey: ctx.pageKey
        };
        var mh = document.getElementById("prep-disk-m-folder-h");
        if (mh) mh.textContent = "Rename folder";
        var cardRm2 = document.querySelector("#prep-disk-modal-folder .prep-disk-m-card");
        if (cardRm2) cardRm2.classList.remove("prep-disk-m--static-only");
        var m = document.getElementById("prep-disk-modal-folder");
        var ti = document.getElementById("prep-disk-fld-title");
        var st = document.getElementById("prep-disk-fld-subtitle");
        var gl = document.getElementById("prep-disk-fld-goal");
        var er = document.getElementById("prep-disk-fld-err");
        if (ti) ti.value = (rec.title || "").trim();
        if (st) st.value = (rec.subtitle || "").trim();
        if (gl) gl.value = (rec.goal || "").trim();
        if (er) {
            er.hidden = true;
            er.textContent = "";
        }
        if (m) m.hidden = false;
        if (st) st.focus();
    }

    function prepDiskOpenActivityModal(afterSave, ctx) {
        prepDiskEnsureModalRoot();
        global.prepDiskHubStrip._pendingDisk = { kind: "activity", afterSave: afterSave, pageKey: ctx.pageKey, linkedUnit: ctx.linkedUnit, parentFolderId: ctx.parentFolderId };
        var mh = document.getElementById("prep-disk-m-act-h");
        if (mh) mh.textContent = "New activity";
        var m = document.getElementById("prep-disk-modal-act");
        var ti = document.getElementById("prep-disk-act-title");
        var sb = document.getElementById("prep-disk-act-sub");
        var er = document.getElementById("prep-disk-act-err");
        if (ti) ti.value = "";
        if (sb) sb.value = "";
        if (er) {
            er.hidden = true;
            er.textContent = "";
        }
        var selT = document.getElementById("prep-disk-act-type");
        if (selT) {
            selT.selectedIndex = 0;
        }
        prepDiskSyncActTypeHint();
        if (m) m.hidden = false;
        if (ti) ti.focus();
    }

    function prepDiskOpenActivityEdit(afterSave, ctx, rec) {
        prepDiskEnsureModalRoot();
        global.prepDiskHubStrip._pendingDisk = {
            kind: "activity-edit",
            activityId: rec.id,
            afterSave: afterSave,
            pageKey: ctx.pageKey
        };
        var mh = document.getElementById("prep-disk-m-act-h");
        if (mh) mh.textContent = "Rename activity";
        var m = document.getElementById("prep-disk-modal-act");
        var ti = document.getElementById("prep-disk-act-title");
        var sb = document.getElementById("prep-disk-act-sub");
        var er = document.getElementById("prep-disk-act-err");
        if (ti) ti.value = (rec.title || "").trim();
        if (sb) sb.value = (rec.subtitle || "").trim();
        if (er) {
            er.hidden = true;
            er.textContent = "";
        }
        var selT = document.getElementById("prep-disk-act-type");
        if (selT) {
            var pk = String(rec.prepTaskKind || "uoe-part1");
            var opts = selT.querySelectorAll("option");
            var hit = false;
            for (var oi = 0; oi < opts.length; oi++) {
                if (opts[oi].value === pk && !opts[oi].disabled) {
                    selT.selectedIndex = oi;
                    hit = true;
                    break;
                }
            }
            if (!hit) selT.selectedIndex = 0;
        }
        prepDiskSyncActTypeHint();
        if (m) m.hidden = false;
        if (ti) ti.focus();
    }

    function cmsHref(folderId) {
        var root = siteRootHref();
        if (!root) root = "../";
        if (!prepCourseCmsSessionOn()) {
            return root + "index.html?prep_stay=1&prep_open_folder=" + encodeURIComponent(folderId);
        }
        var mode = isEditMode() ? "admin" : "student";
        var back = encodeURIComponent(location.pathname + (location.search || ""));
        return (
            root +
            "course-cms/index.html?mode=" +
            mode +
            "&folder=" +
            encodeURIComponent(folderId) +
            "&back=" +
            back +
            "&backLabel=" +
            encodeURIComponent(document.title || "Back")
        );
    }

    function uoeHref(rec) {
        var root = siteRootHref();
        if (!root) root = "../";
        var back = encodeURIComponent(location.pathname + (location.search || ""));
        var q =
            "?context=" +
            encodeURIComponent("prep-hub-" + rec.id) +
            "&back=" +
            back +
            "&backLabel=" +
            encodeURIComponent(document.title || "Back");
        if (isEditMode()) q += "&prepView=edit&admin=1";
        var actTitle = (rec && (rec.title || rec.name || rec.label || "")).trim();
        if (actTitle) q += "&activityTitle=" + encodeURIComponent(actTitle);
        return root + "use-of-english/part1-mc-cloze/index.html" + q;
    }

    function mount(host) {
        if (!host) return;
        injectCssOnce();

        var pageKey = (host.getAttribute("data-prep-page-key") || "").trim();
        if (!pageKey) {
            pageKey = "disk-" + String(location.pathname || "page").replace(/[^\w\-]+/g, "-").slice(-60);
            host.setAttribute("data-prep-page-key", pageKey);
        }

        var linkedRaw = host.getAttribute("data-linked-unit");
        var linkedUnit =
            linkedRaw != null && linkedRaw !== "" && !isNaN(Number(linkedRaw)) ? Number(linkedRaw) : null;
        var parentFolderId = host.getAttribute("data-parent-folder-id");
        if (!parentFolderId || String(parentFolderId).trim() === "") {
            parentFolderId = null;
        } else {
            parentFolderId = String(parentFolderId).trim();
        }

        var listId = "prep-disk-created-" + pageKey.replace(/[^\w]/g, "_");
        var INJ = "data-prep-disk-injected";

        function resolveTargetFoldersGrid() {
            if (host.getAttribute("data-merge-folders") === "0") return null;
            var prev = host.previousElementSibling;
            if (prev && prev.nodeType === 1 && prev.classList && prev.classList.contains("folders")) {
                return prev;
            }
            return null;
        }

        function clearInjectedFromGrid(grid) {
            if (!grid) return;
            var marked = grid.querySelectorAll("[" + INJ + "]");
            for (var i = 0; i < marked.length; i++) {
                if (marked[i].parentNode) marked[i].parentNode.removeChild(marked[i]);
            }
        }

        function listMine() {
            if (!global.PrepSiteContent || !PrepSiteContent.load) return [];
            var all = PrepSiteContent.load().folders || [];
            var out = [];
            var wantPar = parentFolderId ? String(parentFolderId) : "";
            for (var i = 0; i < all.length; i++) {
                if (all[i].prepPageKey !== pageKey) continue;
                var p = all[i].parentFolderId != null && String(all[i].parentFolderId).trim() !== ""
                    ? String(all[i].parentFolderId).trim()
                    : "";
                if (wantPar) {
                    if (p !== wantPar) continue;
                } else if (p) continue;
                out.push(all[i]);
            }
            return out;
        }

        function render() {
            if (!global.PrepSiteContent || !PrepSiteContent.load) {
                host.innerHTML =
                    "<p class=\"prep-disk-strip-hint\">prep-site-content.js did not load — check the path to /js/.</p>";
                return;
            }
            var edit = isEditMode();
            var fileNote =
                location.protocol === "file:"
                    ? "<p class=\"prep-disk-strip-hint\" style=\"opacity:.9\">Opened as file:// — for one shared store with the hub, serve over http (e.g. Live Server).</p>"
                    : "";

            if (!edit) {
                host.innerHTML =
                    fileNote +
                    "<p class=\"prep-disk-strip-hint\">Turn on <strong>Edit</strong> on the main <strong>Units</strong> hub and refresh this page.</p>" +
                    '<div id="' +
                    listId +
                    '" class="prep-disk-created"></div>';
                fillCreatedDom();
                return;
            }

            function fillCreatedDom() {
                var wrap = document.getElementById(listId);
                var extGrid = resolveTargetFoldersGrid();
                if (extGrid) {
                    prepDiskApplyStaticFoldersInGrid(extGrid, pageKey, edit, render);
                    clearInjectedFromGrid(extGrid);
                }
                if (!wrap) return;
                while (wrap.firstChild) wrap.removeChild(wrap.firstChild);
                var rows = listMine();
                if (!rows.length) {
                    wrap.style.display = "none";
                    return;
                }
                var appendTarget = extGrid || null;
                if (appendTarget) {
                    wrap.style.display = "none";
                } else {
                    wrap.style.display = "block";
                    var title = document.createElement("p");
                    title.className = "prep-disk-created-title";
                    title.textContent = "Created on this page (" + rows.length + ")";
                    wrap.appendChild(title);
                    appendTarget = document.createElement("div");
                    appendTarget.className = "folders";
                    wrap.appendChild(appendTarget);
                }
                for (var j = 0; j < rows.length; j++) {
                    var f = rows[j];
                    var isAct = f.type === "activity" && f.uoeEngine === "part1-mc-cloze";
                    var a = document.createElement("a");
                    a.className = "folder";
                    a.href = isAct ? uoeHref(f) : cmsHref(f.id);
                    var strong = document.createElement("strong");
                    strong.textContent = isAct
                        ? (f.title || "Activity").trim() || "Activity"
                        : ((f.title || "").trim() || (f.subtitle || "").trim() || "Folder");
                    var span = document.createElement("span");
                    span.textContent = isAct
                        ? (f.subtitle || "Part 1 cloze").trim()
                        : ((f.subtitle || "").trim() || (f.goal || "").trim() || "Open in CMS");
                    var go = document.createElement("div");
                    go.className = "go";
                    go.textContent = isAct ? "Open →" : "Folder → open";
                    a.appendChild(strong);
                    a.appendChild(span);
                    a.appendChild(go);
                    if (f.type === "activity") {
                        var engLine = document.createElement("div");
                        engLine.className = "prep-disk-card-engine";
                        engLine.textContent = diskActivityEngineLine(f.uoeEngine);
                        a.appendChild(engLine);
                    }
                    var delLabel =
                        f.type === "activity"
                            ? ((f.title || "Activity").trim() || "Activity")
                            : ((f.title || "").trim() || (f.subtitle || "").trim() || "Folder");
                    var node = a;
                    if (edit) {
                        var wrap = document.createElement("div");
                        wrap.className = "prep-disk-inj-wrap";
                        wrap.setAttribute(INJ, "1");
                        wrap.appendChild(a);
                        (function (recRow, actFlag, fid, lab) {
                            prepDiskInstallOverflowMenu(wrap, [
                                {
                                    label: "Rename\u2026",
                                    onClick: function () {
                                        if (actFlag) {
                                            prepDiskOpenActivityEdit(
                                                render,
                                                { pageKey: pageKey, linkedUnit: linkedUnit, parentFolderId: parentFolderId },
                                                recRow
                                            );
                                        } else {
                                            prepDiskOpenFolderEdit(
                                                render,
                                                { pageKey: pageKey, linkedUnit: linkedUnit, parentFolderId: parentFolderId },
                                                recRow
                                            );
                                        }
                                    }
                                },
                                {
                                    label: "Move up",
                                    onClick: function () {
                                        prepDiskReorderDynamicFolder(pageKey, fid, -1);
                                        render();
                                    }
                                },
                                {
                                    label: "Move down",
                                    onClick: function () {
                                        prepDiskReorderDynamicFolder(pageKey, fid, 1);
                                        render();
                                    }
                                },
                                {
                                    label: "Delete\u2026",
                                    danger: true,
                                    onClick: function () {
                                        if (!confirm('Delete "' + lab + '"?')) return;
                                        if (!global.PrepSiteContent || !PrepSiteContent.load || !PrepSiteContent.save) return;
                                        try {
                                            var d3 = PrepSiteContent.load();
                                            d3.folders = (d3.folders || []).filter(function (x) {
                                                return x.id !== fid;
                                            });
                                            PrepSiteContent.save(d3);
                                        } catch (eDel) {
                                            alert("Error: " + (eDel && eDel.message ? eDel.message : String(eDel)));
                                            return;
                                        }
                                        render();
                                    }
                                }
                            ]);
                        })(f, isAct, f.id, delLabel);
                        node = wrap;
                    } else {
                        a.setAttribute(INJ, "1");
                    }
                    appendTarget.appendChild(node);
                }
            }

            host.innerHTML =
                fileNote +
                "<p class=\"prep-disk-strip-hint\">" +
                "<strong>+ Folder</strong> / <strong>+ Activity</strong> — tiles are added to the list above (after static ones). " +
                (linkedUnit != null
                    ? "Tiles also appear in the app: <strong>Levels → Level " + linkedUnit + "</strong>."
                    : "") +
                "</p>" +
                '<div class="prep-disk-strip"><div class="prep-disk-strip-grid">' +
                '<button type="button" class="prep-disk-strip-card" data-act="folder">' +
                "<strong>+ Folder</strong>" +
                '<div class="sub">New folder in the CMS (listed below).</div>' +
                '<div class="go">Create →</div></button>' +
                '<button type="button" class="prep-disk-strip-card" data-act="activity">' +
                "<strong>+ Activity</strong>" +
                '<div class="sub">Part 1 multiple-choice cloze.</div>' +
                '<div class="go">Create →</div></button>' +
                "</div></div>" +
                '<div id="' +
                listId +
                '" class="prep-disk-created"></div>';

            var bFolder = host.querySelector("[data-act=\"folder\"]");
            var bAct = host.querySelector("[data-act=\"activity\"]");
            if (bFolder) bFolder.onclick = function () {
                addFolder();
            };
            if (bAct) bAct.onclick = function () {
                addActivity();
            };
            fillCreatedDom();
        }

        function addFolder() {
            prepDiskOpenFolderModal(render, {
                pageKey: pageKey,
                linkedUnit: linkedUnit,
                parentFolderId: parentFolderId
            });
        }

        function addActivity() {
            prepDiskOpenActivityModal(render, {
                pageKey: pageKey,
                linkedUnit: linkedUnit,
                parentFolderId: parentFolderId
            });
        }

        render();
        if (!host.getAttribute("data-prep-strip-wired")) {
            host.setAttribute("data-prep-strip-wired", "1");
            global.addEventListener("storage", function (ev) {
                if (ev.key === HUB_VM_KEY) render();
            });
            global.addEventListener("prep-hub-view-mode-changed", render);
            global.addEventListener("prep-site-content-save", render);
            global.addEventListener("prep-disk-static-changed", function (ev) {
                try {
                    if (ev && ev.detail && ev.detail.pageKey === pageKey) render();
                } catch (eStat) {}
            });
        }
    }

    global.prepDiskHubStrip = global.prepDiskHubStrip || {};
    global.prepDiskHubStrip._pendingDisk = global.prepDiskHubStrip._pendingDisk || null;
    global.prepDiskHubStrip._diskEscWired = global.prepDiskHubStrip._diskEscWired || false;
    global.prepDiskHubStrip.mount = mount;
})(typeof window !== "undefined" ? window : this);
