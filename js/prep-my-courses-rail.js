/**
 * Shared "My courses" rail: CPE (index.html), EGE (ege.html), FCE (fce.html), Creator (index + profile).
 */
(function (global) {
    var STORAGE_CPE = "english_mastery_perfect";

    function siteRoot() {
        var scripts = document.getElementsByTagName("script");
        for (var i = scripts.length - 1; i >= 0; i--) {
            var s = scripts[i].src || "";
            if (/\/js\/prep-my-courses-rail\.js(\?|$)/i.test(s)) {
                return s.replace(/\/js\/prep-my-courses-rail\.js(\?.*)?$/i, "/");
            }
        }
        return "";
    }

    function currentLeafFile() {
        var p = String(global.location.pathname || "").replace(/\\/g, "/");
        var leaf = p.split("/").pop() || "";
        if (!leaf || leaf.indexOf(".") === -1) return "index.html";
        return leaf;
    }

    function isIndexApp() {
        var f = currentLeafFile().toLowerCase();
        if (f === "index.html") return true;
        if (f && /\.html$/i.test(f) && f !== "index.html") return false;
        return true;
    }

    function isFcePage() {
        return /fce\.html/i.test(currentLeafFile());
    }

    function isEgePage() {
        return /ege\.html/i.test(currentLeafFile());
    }

    function readCpeUser() {
        try {
            var p = JSON.parse(global.localStorage.getItem(STORAGE_CPE) || "{}");
            return {
                name: p.name || "",
                liveRole: p.liveRole === "teacher" ? "teacher" : "student",
                prepPlatformSwitch: !!p.prepPlatformSwitch
            };
        } catch (e) {
            return { name: "", liveRole: "student", prepPlatformSwitch: false };
        }
    }

    function railAllowed(screenId) {
        if (isFcePage() || isEgePage()) return true;
        var u = readCpeUser();
        if (!u.name) return false;
        if (screenId === "screen-login") return false;
        return u.liveRole === "teacher";
    }

    function injectStylesOnce() {
        if (document.getElementById("prep-my-courses-rail-styles-v2")) return;
        var leg = document.getElementById("prep-my-courses-rail-styles");
        if (leg) leg.remove();
        var st = document.createElement("style");
        st.id = "prep-my-courses-rail-styles-v2";
        st.textContent =
            ".prep-my-courses-rail{--rail-card:#1e293b;--rail-border:#334155;--rail-text:#f1f5f9;--rail-muted:#94a3b8;--rail-inset:#0f172a;--rail-primary:#38bdf8;--rail-ring:rgba(56,189,248,.35);position:fixed;top:50%;right:0;transform:translateY(-50%);z-index:10000;display:flex;flex-direction:row;align-items:stretch;max-height:min(520px,calc(100vh - 24px));font-size:13px;color:var(--rail-text);pointer-events:none;font-family:system-ui,-apple-system,Segoe UI,sans-serif;-webkit-tap-highlight-color:transparent}" +
            ".prep-my-courses-rail>*{pointer-events:auto}" +
            ".prep-rail-handle{writing-mode:vertical-rl;text-orientation:mixed;transform:rotate(180deg);border:1px solid var(--rail-border);border-right:0;border-radius:10px 0 0 10px;background:var(--rail-card);color:var(--rail-muted);font-weight:800;font-size:11px;letter-spacing:.06em;text-transform:uppercase;padding:14px 8px;cursor:pointer;box-shadow:0 8px 24px rgba(0,0,0,.35);touch-action:manipulation;min-height:44px}" +
            ".prep-rail-handle:hover{color:var(--rail-primary);border-color:var(--rail-primary)}" +
            ".prep-rail-panel{width:min(260px,calc(100vw - 56px));background:var(--rail-card);border:1px solid var(--rail-border);border-radius:12px 0 0 12px;padding:12px 12px 14px;box-shadow:0 8px 24px rgba(0,0,0,.35);overflow:auto;-webkit-overflow-scrolling:touch;display:flex;flex-direction:column;gap:10px}" +
            ".prep-rail-panel[hidden]{display:none!important}" +
            ".prep-rail-head{font-weight:800;font-size:.95rem;margin:0}" +
            ".prep-rail-note{margin:0;font-size:11px;color:var(--rail-muted);line-height:1.4}" +
            ".prep-rail-tracks{display:flex;flex-direction:column;gap:8px}" +
            ".prep-rail-btn{width:100%;text-align:left;padding:12px 12px;border-radius:10px;border:2px solid var(--rail-border);background:var(--rail-inset);color:var(--rail-text);font:inherit;font-weight:700;cursor:pointer;touch-action:manipulation;min-height:44px}" +
            ".prep-rail-btn:hover{border-color:var(--rail-primary)}" +
            ".prep-rail-btn.is-active{border-color:var(--rail-primary);box-shadow:0 0 0 2px var(--rail-ring)}" +
            ".prep-rail-creator-wrap label{display:block;font-size:11px;font-weight:700;color:var(--rail-muted);margin-bottom:4px}" +
            ".prep-rail-creator-wrap select{width:100%;border-radius:8px;border:1px solid var(--rail-border);background:var(--rail-inset);color:var(--rail-text);padding:10px 8px;font-size:16px;margin-bottom:8px;min-height:44px;box-sizing:border-box}" +
            ".prep-rail-creator-wrap .prep-rail-new{font:inherit;width:100%;padding:12px 10px;border-radius:10px;border:1px solid var(--rail-border);background:var(--rail-inset);color:var(--rail-text);font-weight:600;cursor:pointer;font-size:14px;touch-action:manipulation;min-height:44px}" +
            ".prep-rail-creator-wrap .prep-rail-new:hover{border-color:var(--rail-primary)}" +
            "@media (max-width:720px){.prep-my-courses-rail{top:auto;bottom:max(10px,env(safe-area-inset-bottom,0px));right:max(8px,env(safe-area-inset-right,0px));transform:none;flex-direction:column-reverse;align-items:flex-end;max-height:min(75vh,calc(100vh - 100px))}" +
            ".prep-rail-handle{writing-mode:horizontal-tb;transform:none;border-right:1px solid var(--rail-border);border-radius:12px;padding:12px 16px;letter-spacing:.04em}" +
            ".prep-rail-panel{width:min(calc(100vw - 20px),320px);max-height:min(58vh,420px);border-radius:12px}}" +
            "@media (max-width:720px) and (orientation:landscape){.prep-my-courses-rail{max-height:min(88vh,calc(100vh - 56px))}.prep-rail-panel{max-height:min(70vh,360px)}}" +
            "@media (min-width:721px) and (max-height:520px){.prep-my-courses-rail{top:auto;bottom:max(8px,env(safe-area-inset-bottom,0px));transform:none;max-height:min(80vh,calc(100vh - 16px))}}";
        document.head.appendChild(st);
    }

    function ensureMarkup() {
        if (document.getElementById("prep-my-courses-rail")) return;
        var aside = document.createElement("aside");
        aside.id = "prep-my-courses-rail";
        aside.className = "prep-my-courses-rail";
        aside.setAttribute("aria-label", "My courses");
        aside.innerHTML =
            '<div id="prep-rail-panel" class="prep-rail-panel" hidden>' +
            '<p class="prep-rail-head">My courses</p>' +
            '<p class="prep-rail-note" id="prep-rail-note"></p>' +
            '<div class="prep-rail-tracks">' +
            '<button type="button" class="prep-rail-btn" data-prep-rail-track="cpe">CPE — English Mastery Pro (hub)</button>' +
            '<button type="button" class="prep-rail-btn" data-prep-rail-track="ege">EGE — ЕГЭ hub (ege.html)</button>' +
            '<button type="button" class="prep-rail-btn" data-prep-rail-track="fce">FCE — Mastering B2 (fce.html)</button>' +
            '<button type="button" class="prep-rail-btn" data-prep-rail-track="creator">Creator — empty courses (CPE app)</button>' +
            "</div>" +
            '<div id="prep-rail-creator-wrap" class="prep-rail-creator-wrap" hidden>' +
            '<label for="prep-rail-creator-select">Active creator course</label>' +
            '<select id="prep-rail-creator-select" autocomplete="off"></select>' +
            '<label for="prep-rail-creator-theme">Theme</label>' +
            '<select id="prep-rail-creator-theme" autocomplete="off">' +
            '<option value="dark">Dark</option><option value="light">Light</option></select>' +
            '<button type="button" class="prep-rail-new" id="prep-rail-creator-new">+ New course…</button>' +
            "</div>" +
            "</div>" +
            '<button type="button" class="prep-rail-handle" id="prep-rail-handle" aria-expanded="false">My courses</button>';
        document.body.appendChild(aside);
    }

    var wired = false;

    function dispatchWorkspaceChanged() {
        try {
            global.dispatchEvent(new CustomEvent("prep-workspace-changed"));
        } catch (e) {}
    }

    function liveRoleForSave() {
        var u = readCpeUser();
        if (u.liveRole === "teacher") return "teacher";
        try {
            if (global.localStorage.getItem("masteringB2PlayerName")) return "teacher";
        } catch (eF) {}
        return "student";
    }

    function applyTrack(track) {
        if (!global.prepCourseProfile || !global.prepCourseProfile.save) return;
        if (track === "creator") {
            var cur = global.prepCourseProfile.load();
            var courses = cur.creatorCourses || [];
            if (!courses.length) {
                global.prepCourseProfile.addCreatorCourse({ name: "My course", theme: "dark" });
            } else {
                var active = cur.courseId;
                if (!courses.some(function (c) { return c.id === active; })) active = courses[0].id;
                global.prepCourseProfile.save({
                    courseTrack: "creator",
                    prepRole: "creator",
                    courseId: active,
                    wizardCompleted: true
                });
            }
        } else {
            global.prepCourseProfile.save({
                courseTrack: track,
                prepRole: liveRoleForSave(),
                wizardCompleted: true
            });
        }

        var file = "index.html";
        if (track === "fce") file = "fce.html";
        else if (track === "ege") file = "ege.html";
        else file = "index.html";

        var leaf = currentLeafFile();
        var same =
            (file === "index.html" && isIndexApp()) ||
            (file === "fce.html" && /fce\.html/i.test(leaf)) ||
            (file === "ege.html" && /ege\.html/i.test(leaf));

        if (same) {
            dispatchWorkspaceChanged();
            return;
        }

        global.location.href = siteRoot() + file;
    }

    function wireOnce() {
        if (wired) return;
        var rail = document.getElementById("prep-my-courses-rail");
        var handle = document.getElementById("prep-rail-handle");
        var panel = document.getElementById("prep-rail-panel");
        if (!rail || !handle || !panel) return;
        wired = true;
        handle.addEventListener("click", function () {
            var isHidden = panel.hasAttribute("hidden");
            if (isHidden) {
                panel.removeAttribute("hidden");
                handle.setAttribute("aria-expanded", "true");
            } else {
                panel.setAttribute("hidden", "");
                handle.setAttribute("aria-expanded", "false");
            }
        });
        var tracks = rail.querySelectorAll(".prep-rail-btn[data-prep-rail-track]");
        for (var i = 0; i < tracks.length; i++) {
            tracks[i].addEventListener("click", function () {
                applyTrack(this.getAttribute("data-prep-rail-track"));
            });
        }
        var crSel = document.getElementById("prep-rail-creator-select");
        if (crSel) {
            crSel.addEventListener("change", function () {
                var v = crSel.value;
                if (v === "__new__") {
                    addCreatorCourseFlow();
                    return;
                }
                global.prepCourseProfile.switchCreatorCourse(v);
                dispatchWorkspaceChanged();
            });
        }
        var crNew = document.getElementById("prep-rail-creator-new");
        if (crNew) {
            crNew.addEventListener("click", function () {
                addCreatorCourseFlow();
            });
        }
        rail.addEventListener("change", function (ev) {
            var t = ev.target;
            if (!t || t.id !== "prep-rail-creator-theme" || !global.prepCourseProfile) return;
            var th = t.value === "light" ? "light" : "dark";
            var prof = global.prepCourseProfile.load();
            var list = (prof.creatorCourses || []).slice();
            var cid = prof.courseId;
            for (var ti = 0; ti < list.length; ti++) {
                if (list[ti].id === cid) list[ti].theme = th;
            }
            global.prepCourseProfile.save({
                creatorCourses: list,
                emptyHubTheme: th,
                wizardCompleted: true
            });
            dispatchWorkspaceChanged();
        });
    }

    function addCreatorCourseFlow() {
        if (!isIndexApp()) {
            applyTrack("creator");
            return;
        }
        var nm = global.prompt("Name for the new course?", "My course");
        if (nm == null) {
            sync(global.document.querySelector(".screen.active") ? global.document.querySelector(".screen.active").id : null);
            return;
        }
        global.prepCourseProfile.addCreatorCourse({ name: String(nm).trim() || "My course", theme: "dark" });
        dispatchWorkspaceChanged();
    }

    function sync(screenId) {
        injectStylesOnce();
        ensureMarkup();
        wireOnce();
        var rail = document.getElementById("prep-my-courses-rail");
        var note = document.getElementById("prep-rail-note");
        if (!rail) return;
        if (!railAllowed(screenId)) {
            rail.hidden = true;
            return;
        }
        rail.hidden = false;
        if (note) {
            note.textContent = isIndexApp()
                ? "Each track opens its own home: CPE hub here, EGE and FCE on their pages. Creator stays in this app."
                : "Open the real course home for each exam. FCE and EGE are separate sites in this folder.";
        }
        if (!global.prepCourseProfile || !global.prepCourseProfile.load) return;
        var prof = global.prepCourseProfile.load();
        var profTr = prof.courseTrack || "cpe";
        var buttons = rail.querySelectorAll(".prep-rail-btn[data-prep-rail-track]");
        for (var i = 0; i < buttons.length; i++) {
            var b = buttons[i];
            var tt = b.getAttribute("data-prep-rail-track");
            var active = false;
            if (tt === "creator" && profTr === "creator" && isIndexApp()) active = true;
            else if (tt === "cpe" && profTr === "cpe" && isIndexApp()) active = true;
            else if (tt === "ege" && (isEgePage() || (isIndexApp() && profTr === "ege"))) active = true;
            else if (tt === "fce" && (isFcePage() || (isIndexApp() && profTr === "fce"))) active = true;
            b.classList.toggle("is-active", active);
        }
        var crWrap = document.getElementById("prep-rail-creator-wrap");
        var crSel = document.getElementById("prep-rail-creator-select");
        if (crWrap && crSel) {
            var showCr = isIndexApp() && profTr === "creator";
            crWrap.hidden = !showCr;
            if (showCr) {
                if (!document.getElementById("prep-rail-creator-theme")) {
                    var crNewBtn = document.getElementById("prep-rail-creator-new");
                    var labT = document.createElement("label");
                    labT.setAttribute("for", "prep-rail-creator-theme");
                    labT.textContent = "Theme";
                    var thSel = document.createElement("select");
                    thSel.id = "prep-rail-creator-theme";
                    thSel.setAttribute("autocomplete", "off");
                    thSel.innerHTML = '<option value="dark">Dark</option><option value="light">Light</option>';
                    if (crNewBtn && crNewBtn.parentNode === crWrap) {
                        crWrap.insertBefore(labT, crNewBtn);
                        crWrap.insertBefore(thSel, crNewBtn);
                    } else {
                        crWrap.appendChild(labT);
                        crWrap.appendChild(thSel);
                    }
                }
                crSel.innerHTML = "";
                var courses = prof.creatorCourses || [];
                var curId = prof.courseId || "";
                for (var j = 0; j < courses.length; j++) {
                    var c = courses[j];
                    var opt = document.createElement("option");
                    opt.value = c.id;
                    opt.textContent = (c.name || "").trim() || "Untitled";
                    crSel.appendChild(opt);
                }
                var oNew = document.createElement("option");
                oNew.value = "__new__";
                oNew.textContent = "+ New course…";
                crSel.appendChild(oNew);
                if (courses.some(function (x) { return x.id === curId; })) crSel.value = curId;
                else if (courses.length) crSel.value = courses[0].id;
                var themeSel = document.getElementById("prep-rail-creator-theme");
                if (themeSel) {
                    var activeTheme = "dark";
                    for (var k = 0; k < courses.length; k++) {
                        if (courses[k].id === curId) {
                            activeTheme = courses[k].theme === "light" ? "light" : "dark";
                            break;
                        }
                    }
                    themeSel.value = activeTheme;
                }
            }
        }
    }

    global.PrepMyCoursesRail = {
        sync: sync,
        siteRoot: siteRoot,
        applyTrack: applyTrack
    };

    try {
        if (isFcePage() || isEgePage()) {
            if (document.readyState === "loading") {
                document.addEventListener("DOMContentLoaded", function () {
                    sync(null);
                });
            } else {
                sync(null);
            }
        }
    } catch (e2) {}
})(typeof window !== "undefined" ? window : this);
