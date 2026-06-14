/**
 * Prep hub — Level 9 linked folders (CPE Levels hub).
 */
(function (W) {
    "use strict";

    W.PREP_LEGACY_U9_VOCAB_FOLDER_ID = "prep_legacy_u9_vocab";

    function getU9VocabPack() {
        return W.PREP_HUB_U9_VOCAB_SEEDS || null;
    }

    function mergeSeededTasks(fld, seeds) {
        fld.tasks = Array.isArray(fld.tasks) ? fld.tasks : [];
        var ch = false;
        seeds.forEach(function (seedTask) {
            if (!seedTask || !seedTask.id) return;
            var idx = fld.tasks.findIndex(function (t) {
                return t && String(t.id) === String(seedTask.id);
            });
            if (idx === -1) {
                fld.tasks.push(seedTask);
                ch = true;
                return;
            }
            var cur = fld.tasks[idx];
            ["title", "subtitle", "kind", "href"].forEach(function (key) {
                if (seedTask[key] != null && cur[key] !== seedTask[key]) {
                    cur[key] = seedTask[key];
                    ch = true;
                }
            });
        });
        return ch;
    }

    function ensureLinkedFolder(opts) {
        if (typeof PrepSiteContent === "undefined" || !PrepSiteContent.load || !PrepSiteContent.save) return false;
        if (!opts || !opts.shell) return false;

        var d = PrepSiteContent.load();
        d.folders = d.folders || [];
        var id = String(opts.folderId == null ? "" : opts.folderId);
        var shell = opts.shell;
        var seeds = Array.isArray(opts.seeds) ? opts.seeds : [];
        var linkedUnit = opts.linkedUnit != null ? Number(opts.linkedUnit) : 9;

        for (var i = 0; i < d.folders.length; i++) {
            if (String(d.folders[i].id == null ? "" : d.folders[i].id) !== id) continue;
            var f = d.folders[i];
            var changed = false;
            if (Number(f.linkedUnit) !== linkedUnit) {
                f.linkedUnit = linkedUnit;
                changed = true;
            }
            if (f.parentFolderId) {
                delete f.parentFolderId;
                changed = true;
            }
            if (shell.title && f.title !== shell.title) {
                f.title = shell.title;
                changed = true;
            }
            if (shell.subtitle && f.subtitle !== shell.subtitle) {
                f.subtitle = shell.subtitle;
                changed = true;
            }
            if (mergeSeededTasks(f, seeds)) changed = true;
            if (changed) PrepSiteContent.save(d);
            return true;
        }

        d.folders.unshift({
            id: id,
            type: "folder",
            title: shell.title,
            subtitle: shell.subtitle,
            goal: "",
            linkedUnit: linkedUnit,
            sections: [],
            tasks: seeds.slice(),
        });
        PrepSiteContent.save(d);
        return true;
    }

    W.ensurePrepUnit9VocabularyFolder = function () {
        var pack = getU9VocabPack();
        if (!pack) {
            try {
                console.warn("[Prep hub] Missing PREP_HUB_U9_VOCAB_SEEDS — load js/prep-hub-seeds-unit9-vocabulary.js");
            } catch (eSeed) {}
            return false;
        }
        return ensureLinkedFolder({
            folderId: W.PREP_LEGACY_U9_VOCAB_FOLDER_ID,
            shell: pack.folderVocabulary,
            seeds: Array.isArray(pack.seededTasks) ? pack.seededTasks : [pack.correctOptionTask].filter(Boolean),
            linkedUnit: 9,
        });
    };

    W.ensurePrepUnit9LinkedShells = function () {
        W.ensurePrepUnit9VocabularyFolder();
    };

    W.prepHubUnit9EnsureByFolderId = function (folderId) {
        var fid = String(folderId == null ? "" : folderId);
        if (fid === String(W.PREP_LEGACY_U9_VOCAB_FOLDER_ID)) {
            W.ensurePrepUnit9VocabularyFolder();
            return true;
        }
        return false;
    };

    W.hubIsUnit9LegacyLinkedFolderId = function (folderId) {
        return String(folderId == null ? "" : folderId) === String(W.PREP_LEGACY_U9_VOCAB_FOLDER_ID);
    };

    W.hubUnit9LegacyFolderHubHref = function (folderId) {
        if (String(folderId || "") === String(W.PREP_LEGACY_U9_VOCAB_FOLDER_ID)) {
            return (
                "unit9-vocabulary/cpe/index.html?course=cpe&backLabel=" + encodeURIComponent("Level 9")
            );
        }
        return null;
    };
})(typeof window !== "undefined" ? window : globalThis);
