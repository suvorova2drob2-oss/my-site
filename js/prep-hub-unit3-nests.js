/**
 * Prep hub — Level 3 linked folders (CPE Levels hub).
 * Load after prep-hub-seeds-unit3-vocabulary.js, prep-hub-seeds-unit3-reading.js, prep-hub-seeds-unit3-listening.js, prep-hub-seeds-unit3-uoe.js and prep-site-content.js.
 */
(function (W) {
    "use strict";

    W.PREP_LEGACY_U3_VOCAB_FOLDER_ID = "prep_legacy_u3_vocab";
    W.PREP_LEGACY_U3_READING_FOLDER_ID = "prep_legacy_u3_reading";
    W.PREP_LEGACY_U3_LISTENING_FOLDER_ID = "prep_legacy_u3_listening";
    W.PREP_LEGACY_U3_UOE_FOLDER_ID = "prep_legacy_u3_uoe";

    function getU3VocabPack() {
        return W.PREP_HUB_U3_VOCAB_SEEDS || null;
    }

    function getU3ReadingPack() {
        return W.PREP_HUB_U3_READING_SEEDS || null;
    }

    function getU3ListeningPack() {
        return W.PREP_HUB_U3_LISTENING_SEEDS || null;
    }

    function getU3UoePack() {
        return W.PREP_HUB_U3_UOE_SEEDS || null;
    }

    function mergeSeededTasks(fld, seeds) {
        fld.tasks = Array.isArray(fld.tasks) ? fld.tasks : [];
        var ch = false;
        seeds.forEach(function (seedTask) {
            if (!seedTask || !seedTask.id) return;
            if (
                !fld.tasks.some(function (t) {
                    return t && String(t.id) === String(seedTask.id);
                })
            ) {
                fld.tasks.push(seedTask);
                ch = true;
            }
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
        var linkedUnit = opts.linkedUnit != null ? Number(opts.linkedUnit) : 3;

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

    W.hubLegacyU3LinkedFolderSortKey = function (folderId) {
        var s = String(folderId == null ? "" : folderId);
        if (s === String(W.PREP_LEGACY_U3_VOCAB_FOLDER_ID)) return 0;
        if (s === String(W.PREP_LEGACY_U3_READING_FOLDER_ID)) return 1;
        if (s === String(W.PREP_LEGACY_U3_LISTENING_FOLDER_ID)) return 2;
        if (s === String(W.PREP_LEGACY_U3_UOE_FOLDER_ID)) return 3;
        return 10;
    };

    W.ensurePrepUnit3VocabularyFolder = function () {
        var pack = getU3VocabPack();
        if (!pack) {
            try {
                console.warn("[Prep hub] Missing PREP_HUB_U3_VOCAB_SEEDS — load js/prep-hub-seeds-unit3-vocabulary.js");
            } catch (eSeed) {}
            return false;
        }
        return ensureLinkedFolder({
            folderId: W.PREP_LEGACY_U3_VOCAB_FOLDER_ID,
            shell: pack.folderVocabulary,
            seeds: Array.isArray(pack.seededTasks)
                ? pack.seededTasks
                : [pack.readingPhrasalVerbsTask, pack.semmelweisMatchingTask].filter(Boolean),
            linkedUnit: 3,
        });
    };

    W.ensurePrepUnit3ReadingFolder = function () {
        var pack = getU3ReadingPack();
        if (!pack) {
            try {
                console.warn("[Prep hub] Missing PREP_HUB_U3_READING_SEEDS — load js/prep-hub-seeds-unit3-reading.js");
            } catch (eSeed) {}
            return false;
        }
        return ensureLinkedFolder({
            folderId: W.PREP_LEGACY_U3_READING_FOLDER_ID,
            shell: pack.folderReading,
            seeds: Array.isArray(pack.seededTasks) ? pack.seededTasks : [pack.innovationLimitsTask].filter(Boolean),
            linkedUnit: 3,
        });
    };

    W.ensurePrepUnit3ListeningFolder = function () {
        var pack = getU3ListeningPack();
        if (!pack) {
            try {
                console.warn("[Prep hub] Missing PREP_HUB_U3_LISTENING_SEEDS — load js/prep-hub-seeds-unit3-listening.js");
            } catch (eSeed) {}
            return false;
        }
        return ensureLinkedFolder({
            folderId: W.PREP_LEGACY_U3_LISTENING_FOLDER_ID,
            shell: pack.folderListening,
            seeds: Array.isArray(pack.seededTasks)
                ? pack.seededTasks
                : [pack.part1McTask, pack.part4MatchingTask].filter(Boolean),
            linkedUnit: 3,
        });
    };

    W.ensurePrepUnit3UoeFolder = function () {
        var pack = getU3UoePack();
        if (!pack) {
            try {
                console.warn("[Prep hub] Missing PREP_HUB_U3_UOE_SEEDS — load js/prep-hub-seeds-unit3-uoe.js");
            } catch (eSeed) {}
            return false;
        }
        return ensureLinkedFolder({
            folderId: W.PREP_LEGACY_U3_UOE_FOLDER_ID,
            shell: pack.folderUoe,
            seeds: Array.isArray(pack.seededTasks) ? pack.seededTasks : [pack.part3NicaraguanSlTask].filter(Boolean),
            linkedUnit: 3,
        });
    };

    W.ensurePrepUnit3LinkedShells = function () {
        W.ensurePrepUnit3VocabularyFolder();
        W.ensurePrepUnit3ReadingFolder();
        W.ensurePrepUnit3ListeningFolder();
        W.ensurePrepUnit3UoeFolder();
    };

    W.prepHubUnit3EnsureByFolderId = function (folderId) {
        var fid = String(folderId == null ? "" : folderId);
        if (!fid) return false;
        if (fid === String(W.PREP_LEGACY_U3_VOCAB_FOLDER_ID)) {
            W.ensurePrepUnit3VocabularyFolder();
            return true;
        }
        if (fid === String(W.PREP_LEGACY_U3_READING_FOLDER_ID)) {
            W.ensurePrepUnit3ReadingFolder();
            return true;
        }
        if (fid === String(W.PREP_LEGACY_U3_LISTENING_FOLDER_ID)) {
            W.ensurePrepUnit3ListeningFolder();
            return true;
        }
        if (fid === String(W.PREP_LEGACY_U3_UOE_FOLDER_ID)) {
            W.ensurePrepUnit3UoeFolder();
            return true;
        }
        return false;
    };

    W.hubUnit3LegacyFolderHubHref = function (folderId) {
        var fid = String(folderId || "");
        if (fid === String(W.PREP_LEGACY_U3_VOCAB_FOLDER_ID)) {
            return "unit3-vocabulary/cpe/index.html?course=cpe&backLabel=" + encodeURIComponent("Level 3");
        }
        if (fid === String(W.PREP_LEGACY_U3_READING_FOLDER_ID)) {
            return "unit3-reading/cpe/index.html?course=cpe&backLabel=" + encodeURIComponent("Level 3");
        }
        if (fid === String(W.PREP_LEGACY_U3_LISTENING_FOLDER_ID)) {
            return "unit3-listening/cpe/index.html?course=cpe&backLabel=" + encodeURIComponent("Level 3");
        }
        if (fid === String(W.PREP_LEGACY_U3_UOE_FOLDER_ID)) {
            return "unit3-use-of-english/cpe/index.html?course=cpe&backLabel=" + encodeURIComponent("Level 3");
        }
        return null;
    };
})(typeof window !== "undefined" ? window : globalThis);
