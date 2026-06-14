/**
 * Активный курс / трек для PrepSiteContent + тема пустого / creator hub.
 */
(function (global) {
    var PROFILE_KEY = "prep-course-profile-v1";

    function getStorageTrack() {
        try {
            if (global.prepTrackScope && typeof global.prepTrackScope.get === "function") {
                var scoped = global.prepTrackScope.get();
                if (scoped === "cpe" || scoped === "ege" || scoped === "fce") return scoped;
            }
        } catch (eSc) {}
        var pt = normTrack(global.__PREP_ACTIVE_TRACK__ || global.__PREP_PAGE_TRACK__);
        if (pt) return pt;
        return "cpe";
    }

    function normTrack(t) {
        var s = String(t || "").toLowerCase();
        if (s === "cpe" || s === "ege" || s === "fce") return s;
        return "";
    }

    function profileStorageKey() {
        if (global.prepTrackScope && typeof global.prepTrackScope.profileStorageKey === "function") {
            return global.prepTrackScope.profileStorageKey(PROFILE_KEY);
        }
        return PROFILE_KEY + "::" + getStorageTrack();
    }

    function migrateLegacyProfileToScoped() {
        try {
            var legacy = global.localStorage.getItem(PROFILE_KEY);
            if (!legacy) return;
            var j = {};
            try {
                j = JSON.parse(legacy);
            } catch (eParse) {
                j = {};
            }
            var legacyTrack = "cpe";
            if (j && j.courseTrack === "ege") legacyTrack = "ege";
            else if (j && j.courseTrack === "fce") legacyTrack = "fce";
            var targets = { cpe: false, ege: false, fce: false };
            targets[legacyTrack] = true;
            targets.cpe = true;
            for (var tr in targets) {
                if (!targets.hasOwnProperty(tr)) continue;
                var k = PROFILE_KEY + "::" + tr;
                if (global.localStorage.getItem(k)) continue;
                if (tr === legacyTrack) {
                    global.localStorage.setItem(k, legacy);
                } else if (tr === "cpe" && legacyTrack !== "cpe") {
                    global.localStorage.setItem(k, JSON.stringify(defaults()));
                }
            }
        } catch (eM) {}
    }

    function pinProfileToPageTrack(d) {
        var pageTrack = getStorageTrack();
        if (pageTrack === "ege" || pageTrack === "fce") {
            d.courseTrack = pageTrack;
            d.courseId = pageTrack;
            return d;
        }
        if (d.courseTrack !== "creator") {
            d.courseTrack = "cpe";
            d.courseId = "cpe";
        }
        return d;
    }

    function defaults() {
        return {
            wizardCompleted: false,
            courseTrack: "cpe",
            courseId: "cpe",
            prepRole: "student",
            emptyHubTheme: "dark",
            creatorCourses: []
        };
    }

    function isCreatorStorageId(id) {
        return /^cr_[a-z0-9]{6,32}$/i.test(String(id || ""));
    }

    function newCreatorId() {
        return "cr_" + Math.random().toString(36).slice(2, 12) + Math.random().toString(36).slice(2, 8);
    }

    function normalizeCourseTrack(t) {
        var s = String(t || "cpe").toLowerCase();
        if (s === "creator" || s === "cpe" || s === "ege" || s === "fce") return s;
        return "cpe";
    }

    function normalizePrepRole(r) {
        var s = String(r || "student").toLowerCase();
        if (s === "teacher" || s === "student" || s === "creator") return s;
        return "student";
    }

    /**
     * Storage namespace for PrepSiteContent (cpe | ege | fce | cr_*).
     */
    function normalizeCourseId(id) {
        var s = String(id || "cpe");
        if (s === "custom") return "empty";
        if (s === "cpe" || s === "ege" || s === "fce") return s;
        if (s === "empty") return "empty";
        if (isCreatorStorageId(s)) return s;
        return "cpe";
    }

    function copyStorageNs(fromNs, toNs) {
        var KEY = "prep-site-content-v1";
        try {
            var raw = global.localStorage.getItem(KEY + "::" + fromNs);
            if (raw && !global.localStorage.getItem(KEY + "::" + toNs)) {
                global.localStorage.setItem(KEY + "::" + toNs, raw);
            }
        } catch (e) {}
    }

    function migrateProfileObject(j, d) {
        var hasTrack = j && typeof j.courseTrack === "string" && j.courseTrack;
        var rawCid = j && j.courseId ? String(j.courseId) : "";
        var cid = normalizeCourseId(rawCid);

        if (!hasTrack) {
            if (cid === "empty" || rawCid === "empty") {
                var nid = newCreatorId();
                copyStorageNs("empty", nid);
                copyStorageNs("custom", nid);
                d.courseTrack = "creator";
                d.prepRole = "creator";
                d.courseId = nid;
                d.creatorCourses = [{ id: nid, name: "", theme: d.emptyHubTheme === "light" ? "light" : "dark" }];
                d.wizardCompleted = !!j.wizardCompleted;
                return;
            }
            if (cid === "ege" || cid === "fce") {
                d.courseTrack = cid;
                d.courseId = cid;
            } else {
                d.courseTrack = "cpe";
                d.courseId = "cpe";
            }
            if (j && typeof j.prepRole === "string") d.prepRole = normalizePrepRole(j.prepRole);
            else d.prepRole = "student";
            d.wizardCompleted = j.wizardCompleted !== false;
            return;
        }

        d.courseTrack = normalizeCourseTrack(j.courseTrack);
        d.prepRole = normalizePrepRole(j.prepRole);
        d.wizardCompleted = !!j.wizardCompleted;

        if (d.courseTrack === "creator") {
            var courses = Array.isArray(j.creatorCourses) ? j.creatorCourses.slice() : [];
            for (var i = 0; i < courses.length; i++) {
                if (!courses[i] || typeof courses[i] !== "object") continue;
                var tid = normalizeCourseId(courses[i].id);
                if (!isCreatorStorageId(tid)) continue;
                courses[i].id = tid;
                courses[i].name = typeof courses[i].name === "string" ? courses[i].name : "";
                courses[i].theme = courses[i].theme === "light" ? "light" : "dark";
            }
            courses = courses.filter(function (c) {
                return c && isCreatorStorageId(c.id);
            });
            if (!courses.length) {
                var nid2 = newCreatorId();
                courses.push({ id: nid2, name: "", theme: d.emptyHubTheme === "light" ? "light" : "dark" });
            }
            d.creatorCourses = courses;
            var wantId = normalizeCourseId(j.courseId);
            if (isCreatorStorageId(wantId) && courses.some(function (c) { return c.id === wantId; })) {
                d.courseId = wantId;
            } else {
                d.courseId = courses[0].id;
            }
            return;
        }

        d.creatorCourses = Array.isArray(j.creatorCourses) ? j.creatorCourses : [];
        d.courseId = d.courseTrack;
    }

    function ensureLegacyProfileMigrated() {
        try {
            if (global.localStorage.getItem(PROFILE_KEY)) return;
            var raw =
                global.localStorage.getItem("prep-site-content-v1::cpe") ||
                global.localStorage.getItem("prep-site-content-v1");
            if (!raw) return;
            var j = JSON.parse(raw);
            if (j && Array.isArray(j.folders) && j.folders.length > 0) {
                global.localStorage.setItem(
                    PROFILE_KEY,
                    JSON.stringify({
                        wizardCompleted: true,
                        courseTrack: "cpe",
                        courseId: "cpe",
                        prepRole: "student",
                        emptyHubTheme: "dark",
                        creatorCourses: []
                    })
                );
            }
        } catch (e) {}
    }

    function load() {
        migrateLegacyProfileToScoped();
        ensureLegacyProfileMigrated();
        var d = defaults();
        try {
            var j = JSON.parse(global.localStorage.getItem(profileStorageKey()) || "{}");
            if (j && typeof j === "object") {
                var persist =
                    (!j.courseTrack && String(j.courseId || "") === "empty") ||
                    (j.courseTrack === "creator" &&
                        (!Array.isArray(j.creatorCourses) || j.creatorCourses.length === 0));
                if (typeof j.wizardCompleted === "boolean") d.wizardCompleted = j.wizardCompleted;
                if (j.emptyHubTheme === "light" || j.emptyHubTheme === "dark") {
                    d.emptyHubTheme = j.emptyHubTheme;
                } else if (j.customSkin) {
                    d.emptyHubTheme = "dark";
                }
                migrateProfileObject(j, d);
                d = pinProfileToPageTrack(d);
                if (persist) {
                    try {
                        global.localStorage.setItem(profileStorageKey(), JSON.stringify(d));
                    } catch (eP) {}
                }
            } else {
                d = pinProfileToPageTrack(d);
            }
        } catch (e) {
            return pinProfileToPageTrack(defaults());
        }
        return d;
    }

    function syncCreatorCourseMeta(cur) {
        if (cur.courseTrack !== "creator" || !isCreatorStorageId(cur.courseId)) return cur;
        var list = cur.creatorCourses || [];
        var found = false;
        for (var i = 0; i < list.length; i++) {
            if (list[i].id === cur.courseId) {
                found = true;
                break;
            }
        }
        if (!found) {
            list.push({
                id: cur.courseId,
                name: "",
                theme: cur.emptyHubTheme === "light" ? "light" : "dark"
            });
            cur.creatorCourses = list;
        }
        return cur;
    }

    function save(patch) {
        var cur = load();
        if (patch && typeof patch === "object") {
            if (typeof patch.wizardCompleted === "boolean") cur.wizardCompleted = patch.wizardCompleted;
            if (patch.emptyHubTheme === "light" || patch.emptyHubTheme === "dark") {
                cur.emptyHubTheme = patch.emptyHubTheme;
            }
            if (patch.courseTrack != null) {
                cur.courseTrack = normalizeCourseTrack(patch.courseTrack);
            }
            if (patch.prepRole != null) {
                cur.prepRole = normalizePrepRole(patch.prepRole);
            }
            if (patch.creatorCourses != null && Array.isArray(patch.creatorCourses)) {
                cur.creatorCourses = patch.creatorCourses;
            }
            if (patch.courseId != null) {
                cur.courseId = normalizeCourseId(patch.courseId);
            }
            if (cur.courseTrack === "cpe" || cur.courseTrack === "ege" || cur.courseTrack === "fce") {
                cur.courseId = cur.courseTrack;
            }
            if (cur.courseTrack === "creator") {
                cur = syncCreatorCourseMeta(cur);
                for (var k = 0; k < cur.creatorCourses.length; k++) {
                    var c = cur.creatorCourses[k];
                    if (c.id === cur.courseId && patch.emptyHubTheme) {
                        c.theme = patch.emptyHubTheme === "light" ? "light" : "dark";
                    }
                }
            }
        }
        cur = pinProfileToPageTrack(cur);
        global.localStorage.setItem(profileStorageKey(), JSON.stringify(cur));
        applyDom();
        try {
            global.dispatchEvent(new CustomEvent("prep-course-profile-changed", { detail: cur }));
        } catch (e2) {}
        return cur;
    }

    function themeForActiveCourse(p) {
        var cid = normalizeCourseId(p.courseId || "cpe");
        if (p.courseTrack === "creator" && isCreatorStorageId(cid)) {
            var list = p.creatorCourses || [];
            for (var i = 0; i < list.length; i++) {
                if (list[i].id === cid) {
                    return list[i].theme === "light" ? "light" : "dark";
                }
            }
        }
        if (normalizeCourseId(p.courseId) === "empty") {
            return p.emptyHubTheme === "light" ? "light" : "dark";
        }
        return p.emptyHubTheme === "light" ? "light" : "dark";
    }

    function applyDom() {
        var body = global.document && global.document.body;
        if (!body) return;
        var p = load();
        var cid = normalizeCourseId(p.courseId || "cpe");
        body.setAttribute("data-prep-active-course", cid);
        if (p.courseTrack === "creator" || cid === "empty") {
            body.setAttribute("data-prep-hub-theme", themeForActiveCourse(p) === "light" ? "light" : "dark");
            body.setAttribute("data-prep-hub-scope", p.courseTrack === "creator" ? "creator" : "empty");
        } else {
            body.removeAttribute("data-prep-hub-theme");
            body.removeAttribute("data-prep-hub-scope");
        }
    }

    function completeWizard(courseId, emptyTheme) {
        var cid = normalizeCourseId(courseId);
        if (cid === "empty") {
            var nid = newCreatorId();
            var th = emptyTheme === "light" ? "light" : "dark";
            return save({
                wizardCompleted: true,
                courseTrack: "creator",
                prepRole: "creator",
                courseId: nid,
                creatorCourses: [{ id: nid, name: "", theme: th }],
                emptyHubTheme: th
            });
        }
        var patchC = { wizardCompleted: true, courseTrack: cid, courseId: cid };
        if (emptyTheme === "light" || emptyTheme === "dark") patchC.emptyHubTheme = emptyTheme;
        return save(patchC);
    }

    function needsWizard() {
        return !load().wizardCompleted;
    }

    function isEmptyHubWorkspace() {
        var p = load();
        if (p.courseTrack === "creator") return true;
        return normalizeCourseId(p.courseId) === "empty";
    }

    function hubHeaderStorageSuffix() {
        var pageTrack = getStorageTrack();
        if (pageTrack === "ege" || pageTrack === "fce") return pageTrack;
        var p = load();
        if (p.courseTrack === "creator" && isCreatorStorageId(normalizeCourseId(p.courseId))) {
            return p.courseId;
        }
        if (normalizeCourseId(p.courseId) === "empty") return "empty";
        return "cpe";
    }

    function addCreatorCourse(meta) {
        meta = meta || {};
        var cur = load();
        if (cur.courseTrack !== "creator") {
            cur.courseTrack = "creator";
            cur.prepRole = "creator";
        }
        var nid = newCreatorId();
        var th = meta.theme === "light" ? "light" : "dark";
        var list = (cur.creatorCourses || []).slice();
        list.push({
            id: nid,
            name: typeof meta.name === "string" ? meta.name : "",
            theme: th
        });
        return save({
            courseTrack: "creator",
            prepRole: "creator",
            courseId: nid,
            creatorCourses: list,
            emptyHubTheme: th,
            wizardCompleted: true
        });
    }

    function switchCreatorCourse(id) {
        var cid = normalizeCourseId(id);
        if (!isCreatorStorageId(cid)) return load();
        var cur = load();
        var list = cur.creatorCourses || [];
        if (!list.some(function (c) { return c.id === cid; })) return cur;
        return save({ courseTrack: "creator", prepRole: "creator", courseId: cid, wizardCompleted: true });
    }

    function renameCreatorCourse(id, name) {
        var cid = normalizeCourseId(id);
        if (!isCreatorStorageId(cid)) return load();
        var cur = load();
        var list = (cur.creatorCourses || []).slice();
        for (var i = 0; i < list.length; i++) {
            if (list[i].id === cid) {
                list[i].name = String(name || "");
                break;
            }
        }
        return save({ creatorCourses: list });
    }

    global.prepCourseProfile = {
        PROFILE_KEY: PROFILE_KEY,
        getStorageTrack: getStorageTrack,
        profileStorageKey: profileStorageKey,
        normalizeCourseId: normalizeCourseId,
        normalizeCourseTrack: normalizeCourseTrack,
        newCreatorId: newCreatorId,
        load: load,
        save: save,
        applyDom: applyDom,
        completeWizard: completeWizard,
        needsWizard: needsWizard,
        isEmptyHubWorkspace: isEmptyHubWorkspace,
        hubHeaderStorageSuffix: hubHeaderStorageSuffix,
        addCreatorCourse: addCreatorCourse,
        switchCreatorCourse: switchCreatorCourse,
        renameCreatorCourse: renameCreatorCourse
    };

    try {
        if (global.document && global.document.body) applyDom();
    } catch (e3) {}
})(typeof window !== "undefined" ? window : this);
