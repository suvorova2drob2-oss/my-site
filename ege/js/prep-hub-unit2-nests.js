/**
 * Prep hub — Level 2 linked folders (CPE Levels hub).
 * Load after prep-hub-seeds-unit2-vocabulary.js, prep-hub-seeds-unit2-grammar.js, prep-hub-seeds-unit2-reading.js, prep-hub-seeds-unit2-listening.js, prep-hub-seeds-unit2-uoe.js, prep-site-content.js.
 */
(function (W) {
    "use strict";

    W.PREP_LEGACY_U2_VOCAB_FOLDER_ID = "prep_legacy_u2_vocab";
    W.PREP_LEGACY_U2_GRAMMAR_FOLDER_ID = "prep_legacy_u2_grammar";
    W.PREP_LEGACY_U2_READING_FOLDER_ID = "prep_legacy_u2_reading";
    W.PREP_LEGACY_U2_LISTENING_FOLDER_ID = "prep_legacy_u2_listening";
    W.PREP_LEGACY_U2_UOE_FOLDER_ID = "prep_legacy_u2_uoe";

    function getU2VocabPack() {
        return W.PREP_HUB_U2_VOCAB_SEEDS || null;
    }

    function getU2GrammarPack() {
        return W.PREP_HUB_U2_GRAMMAR_SEEDS || null;
    }

    function getU2ReadingPack() {
        return W.PREP_HUB_U2_READING_SEEDS || null;
    }

    function getU2ListeningPack() {
        return W.PREP_HUB_U2_LISTENING_SEEDS || null;
    }

    function getU2UoePack() {
        return W.PREP_HUB_U2_UOE_SEEDS || null;
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
        var linkedUnit = opts.linkedUnit != null ? Number(opts.linkedUnit) : 2;

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

    W.hubLegacyU2LinkedFolderSortKey = function (folderId) {
        var s = String(folderId == null ? "" : folderId);
        if (s === String(W.PREP_LEGACY_U2_VOCAB_FOLDER_ID)) return 0;
        if (s === String(W.PREP_LEGACY_U2_GRAMMAR_FOLDER_ID)) return 1;
        if (s === String(W.PREP_LEGACY_U2_READING_FOLDER_ID)) return 2;
        if (s === String(W.PREP_LEGACY_U2_LISTENING_FOLDER_ID)) return 3;
        if (s === String(W.PREP_LEGACY_U2_UOE_FOLDER_ID)) return 4;
        return 10;
    };

    W.ensurePrepUnit2VocabularyFolder = function () {
        var pack = getU2VocabPack();
        if (!pack) {
            try {
                console.warn("[Prep hub] Missing PREP_HUB_U2_VOCAB_SEEDS — load js/prep-hub-seeds-unit2-vocabulary.js");
            } catch (eSeed) {}
            return false;
        }
        return ensureLinkedFolder({
            folderId: W.PREP_LEGACY_U2_VOCAB_FOLDER_ID,
            shell: pack.folderVocabulary,
            seeds: Array.isArray(pack.seededTasks)
                ? pack.seededTasks
                : [
                      pack.travelSentenceAlternativesTask,
                      pack.travelCollocationsTask,
                      pack.travelBoxCollocationsTask,
                  ].filter(Boolean),
            linkedUnit: 2,
        });
    };

    W.ensurePrepUnit2GrammarFolder = function () {
        var pack = getU2GrammarPack();
        if (!pack) {
            try {
                console.warn("[Prep hub] Missing PREP_HUB_U2_GRAMMAR_SEEDS — load js/prep-hub-seeds-unit2-grammar.js");
            } catch (eSeed) {}
            return false;
        }
        return ensureLinkedFolder({
            folderId: W.PREP_LEGACY_U2_GRAMMAR_FOLDER_ID,
            shell: pack.folderGrammar,
            seeds: Array.isArray(pack.seededTasks)
                ? pack.seededTasks
                : [pack.adverbsAdverbialPhrasesTask].filter(Boolean),
            linkedUnit: 2,
        });
    };

    W.ensurePrepUnit2ReadingFolder = function () {
        var pack = getU2ReadingPack();
        if (!pack) {
            try {
                console.warn("[Prep hub] Missing PREP_HUB_U2_READING_SEEDS — load js/prep-hub-seeds-unit2-reading.js");
            } catch (eSeed) {}
            return false;
        }
        return ensureLinkedFolder({
            folderId: W.PREP_LEGACY_U2_READING_FOLDER_ID,
            shell: pack.folderReading,
            seeds: Array.isArray(pack.seededTasks) ? pack.seededTasks : [pack.filmTourismTask].filter(Boolean),
            linkedUnit: 2,
        });
    };

    W.ensurePrepUnit2ListeningFolder = function () {
        var pack = getU2ListeningPack();
        if (!pack) {
            try {
                console.warn("[Prep hub] Missing PREP_HUB_U2_LISTENING_SEEDS — load js/prep-hub-seeds-unit2-listening.js");
            } catch (eSeed) {}
            return false;
        }
        return ensureLinkedFolder({
            folderId: W.PREP_LEGACY_U2_LISTENING_FOLDER_ID,
            shell: pack.folderListening,
            seeds: Array.isArray(pack.seededTasks) ? pack.seededTasks : [pack.part2WildernessTask].filter(Boolean),
            linkedUnit: 2,
        });
    };

    W.ensurePrepUnit2UoeFolder = function () {
        var pack = getU2UoePack();
        if (!pack) {
            try {
                console.warn("[Prep hub] Missing PREP_HUB_U2_UOE_SEEDS — load js/prep-hub-seeds-unit2-uoe.js");
            } catch (eSeed) {}
            return false;
        }
        return ensureLinkedFolder({
            folderId: W.PREP_LEGACY_U2_UOE_FOLDER_ID,
            shell: pack.folderUoe,
            seeds: Array.isArray(pack.seededTasks)
                ? pack.seededTasks
                : [pack.wordFormationAdverbsTask].filter(Boolean),
            linkedUnit: 2,
        });
    };

    W.ensurePrepUnit2LinkedShells = function () {
        W.ensurePrepUnit2VocabularyFolder();
        W.ensurePrepUnit2GrammarFolder();
        W.ensurePrepUnit2ReadingFolder();
        W.ensurePrepUnit2ListeningFolder();
        W.ensurePrepUnit2UoeFolder();
    };

    W.prepHubUnit2EnsureByFolderId = function (folderId) {
        var fid = String(folderId == null ? "" : folderId);
        if (!fid) return false;
        if (fid === String(W.PREP_LEGACY_U2_VOCAB_FOLDER_ID)) {
            W.ensurePrepUnit2VocabularyFolder();
            return true;
        }
        if (fid === String(W.PREP_LEGACY_U2_GRAMMAR_FOLDER_ID)) {
            W.ensurePrepUnit2GrammarFolder();
            return true;
        }
        if (fid === String(W.PREP_LEGACY_U2_READING_FOLDER_ID)) {
            W.ensurePrepUnit2ReadingFolder();
            return true;
        }
        if (fid === String(W.PREP_LEGACY_U2_LISTENING_FOLDER_ID)) {
            W.ensurePrepUnit2ListeningFolder();
            return true;
        }
        if (fid === String(W.PREP_LEGACY_U2_UOE_FOLDER_ID)) {
            W.ensurePrepUnit2UoeFolder();
            return true;
        }
        return false;
    };

    W.hubUnit2LegacyFolderHubHref = function (folderId) {
        var fid = String(folderId || "");
        if (fid === String(W.PREP_LEGACY_U2_VOCAB_FOLDER_ID)) {
            return "unit2-vocabulary/cpe/index.html?course=cpe&backLabel=" + encodeURIComponent("Level 2");
        }
        if (fid === String(W.PREP_LEGACY_U2_GRAMMAR_FOLDER_ID)) {
            return "unit2-grammar/cpe/index.html?course=cpe&backLabel=" + encodeURIComponent("Level 2");
        }
        if (fid === String(W.PREP_LEGACY_U2_READING_FOLDER_ID)) {
            return "unit2-reading/cpe/index.html?course=cpe&backLabel=" + encodeURIComponent("Level 2");
        }
        if (fid === String(W.PREP_LEGACY_U2_LISTENING_FOLDER_ID)) {
            return "unit2-listening/cpe/index.html?course=cpe&backLabel=" + encodeURIComponent("Level 2");
        }
        if (fid === String(W.PREP_LEGACY_U2_UOE_FOLDER_ID)) {
            return "unit2-use-of-english/cpe/index.html?course=cpe&backLabel=" + encodeURIComponent("Level 2");
        }
        return null;
    };
})(typeof window !== "undefined" ? window : globalThis);
