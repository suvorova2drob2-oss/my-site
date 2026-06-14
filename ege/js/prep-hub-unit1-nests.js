/**
 * Prep hub — Level 1 linked folders (CPE Levels hub).
 * Load after prep-hub-seeds-unit1-vocabulary.js, prep-hub-seeds-unit1-grammar.js, prep-hub-seeds-unit1-reading.js, prep-hub-seeds-unit1-uoe.js, prep-site-content.js.
 */
(function (W) {
    "use strict";

    W.PREP_LEGACY_U1_VOCAB_FOLDER_ID = "prep_legacy_u1_vocab";
    W.PREP_LEGACY_U1_GRAMMAR_FOLDER_ID = "prep_legacy_u1_grammar";
    W.PREP_LEGACY_U1_LISTENING_FOLDER_ID = "prep_legacy_u1_listening";
    W.PREP_LEGACY_U1_READING_FOLDER_ID = "prep_legacy_u1_reading";
    W.PREP_LEGACY_U1_UOE_FOLDER_ID = "prep_legacy_u1_uoe";

    /** Part 6 moved from combined UoE folder → Reading folder */
    var U1_PART6_MIGRATED_TASK_IDS = ["u1_uoe_part6_super_recognisers"];

    function getU1VocabPack() {
        return W.PREP_HUB_U1_VOCAB_SEEDS || null;
    }

    function getU1GrammarPack() {
        return W.PREP_HUB_U1_GRAMMAR_SEEDS || null;
    }

    function getU1ListeningPack() {
        return W.PREP_HUB_U1_LISTENING_SEEDS || null;
    }

    function getU1ReadingPack() {
        return W.PREP_HUB_U1_READING_SEEDS || null;
    }

    function getU1UoePack() {
        return W.PREP_HUB_U1_UOE_SEEDS || null;
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

    function pruneMigratedTasks(fld, migratedIds) {
        if (!fld || !Array.isArray(fld.tasks) || !Array.isArray(migratedIds) || !migratedIds.length) return false;
        var before = fld.tasks.length;
        fld.tasks = fld.tasks.filter(function (t) {
            if (!t || t.id == null) return false;
            return migratedIds.indexOf(String(t.id)) === -1;
        });
        return fld.tasks.length !== before;
    }

    function ensureLinkedFolder(opts) {
        if (typeof PrepSiteContent === "undefined" || !PrepSiteContent.load || !PrepSiteContent.save) return false;
        if (!opts || !opts.shell) return false;

        var d = PrepSiteContent.load();
        d.folders = d.folders || [];
        var id = String(opts.folderId == null ? "" : opts.folderId);
        var shell = opts.shell;
        var seeds = Array.isArray(opts.seeds) ? opts.seeds : [];
        var linkedUnit = opts.linkedUnit != null ? Number(opts.linkedUnit) : 1;

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
            if (Array.isArray(opts.pruneTaskIds) && pruneMigratedTasks(f, opts.pruneTaskIds)) changed = true;
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

    W.hubLegacyU1LinkedFolderSortKey = function (folderId) {
        var s = String(folderId == null ? "" : folderId);
        if (s === String(W.PREP_LEGACY_U1_VOCAB_FOLDER_ID)) return 0;
        if (s === String(W.PREP_LEGACY_U1_GRAMMAR_FOLDER_ID)) return 1;
        if (s === String(W.PREP_LEGACY_U1_LISTENING_FOLDER_ID)) return 2;
        if (s === String(W.PREP_LEGACY_U1_READING_FOLDER_ID)) return 3;
        if (s === String(W.PREP_LEGACY_U1_UOE_FOLDER_ID)) return 4;
        return 10;
    };

    W.ensurePrepUnit1VocabularyFolder = function () {
        var pack = getU1VocabPack();
        if (!pack) {
            try {
                console.warn("[Prep hub] Missing PREP_HUB_U1_VOCAB_SEEDS — load js/prep-hub-seeds-unit1-vocabulary.js");
            } catch (eSeed) {}
            return false;
        }
        return ensureLinkedFolder({
            folderId: W.PREP_LEGACY_U1_VOCAB_FOLDER_ID,
            shell: pack.folderVocabulary,
            seeds: Array.isArray(pack.seededTasks)
                ? pack.seededTasks
                : [
                      pack.personalityIdiomsMatchingTask,
                      pack.feelingsEmotionsPrepositionsTask,
                      pack.feelingsEmotionsTask,
                      pack.sConsonantWordBoxTask,
                      pack.selfCompoundsTask,
                  ].filter(Boolean),
            linkedUnit: 1,
        });
    };

    W.ensurePrepUnit1GrammarFolder = function () {
        var pack = getU1GrammarPack();
        if (!pack) {
            try {
                console.warn("[Prep hub] Missing PREP_HUB_U1_GRAMMAR_SEEDS — load js/prep-hub-seeds-unit1-grammar.js");
            } catch (eSeed) {}
            return false;
        }
        return ensureLinkedFolder({
            folderId: W.PREP_LEGACY_U1_GRAMMAR_FOLDER_ID,
            shell: pack.folderGrammar,
            seeds: Array.isArray(pack.seededTasks)
                ? pack.seededTasks
                : [pack.thePresentTask].filter(Boolean),
            linkedUnit: 1,
        });
    };

    W.ensurePrepUnit1ListeningFolder = function () {
        var pack = getU1ListeningPack();
        if (!pack) {
            try {
                console.warn("[Prep hub] Missing PREP_HUB_U1_LISTENING_SEEDS — load js/prep-hub-seeds-unit1-listening.js");
            } catch (eSeed) {}
            return false;
        }
        return ensureLinkedFolder({
            folderId: W.PREP_LEGACY_U1_LISTENING_FOLDER_ID,
            shell: pack.folderListening,
            seeds: Array.isArray(pack.seededTasks) ? pack.seededTasks : [pack.part1Task].filter(Boolean),
            linkedUnit: 1,
        });
    };

    W.ensurePrepUnit1ReadingFolder = function () {
        var pack = getU1ReadingPack();
        if (!pack) {
            try {
                console.warn("[Prep hub] Missing PREP_HUB_U1_READING_SEEDS — load js/prep-hub-seeds-unit1-reading.js");
            } catch (eSeed) {}
            return false;
        }
        return ensureLinkedFolder({
            folderId: W.PREP_LEGACY_U1_READING_FOLDER_ID,
            shell: pack.folderReading,
            seeds: Array.isArray(pack.seededTasks)
                ? pack.seededTasks
                : [pack.part6SuperRecognisersTask].filter(Boolean),
            linkedUnit: 1,
        });
    };

    W.ensurePrepUnit1UoeFolder = function () {
        var pack = getU1UoePack();
        if (!pack) {
            try {
                console.warn("[Prep hub] Missing PREP_HUB_U1_UOE_SEEDS — load js/prep-hub-seeds-unit1-uoe.js");
            } catch (eSeed) {}
            return false;
        }
        return ensureLinkedFolder({
            folderId: W.PREP_LEGACY_U1_UOE_FOLDER_ID,
            shell: pack.folderUoe,
            seeds: Array.isArray(pack.seededTasks)
                ? pack.seededTasks
                : [pack.part1FashionForRentTask, pack.part2JobTitlesTask, pack.prepositionsDrillTask].filter(Boolean),
            linkedUnit: 1,
            pruneTaskIds: U1_PART6_MIGRATED_TASK_IDS,
        });
    };

    W.ensurePrepUnit1LinkedShells = function () {
        W.ensurePrepUnit1VocabularyFolder();
        W.ensurePrepUnit1GrammarFolder();
        W.ensurePrepUnit1ListeningFolder();
        W.ensurePrepUnit1ReadingFolder();
        W.ensurePrepUnit1UoeFolder();
    };

    W.prepHubUnit1EnsureByFolderId = function (folderId) {
        var fid = String(folderId == null ? "" : folderId);
        if (!fid) return false;
        if (fid === String(W.PREP_LEGACY_U1_VOCAB_FOLDER_ID)) {
            W.ensurePrepUnit1VocabularyFolder();
            return true;
        }
        if (fid === String(W.PREP_LEGACY_U1_GRAMMAR_FOLDER_ID)) {
            W.ensurePrepUnit1GrammarFolder();
            return true;
        }
        if (fid === String(W.PREP_LEGACY_U1_LISTENING_FOLDER_ID)) {
            W.ensurePrepUnit1ListeningFolder();
            return true;
        }
        if (fid === String(W.PREP_LEGACY_U1_READING_FOLDER_ID)) {
            W.ensurePrepUnit1ReadingFolder();
            return true;
        }
        if (fid === String(W.PREP_LEGACY_U1_UOE_FOLDER_ID)) {
            W.ensurePrepUnit1UoeFolder();
            return true;
        }
        return false;
    };

    W.hubUnit1LegacyFolderHubHref = function (folderId) {
        var fid = String(folderId || "");
        if (fid === String(W.PREP_LEGACY_U1_VOCAB_FOLDER_ID)) {
            return "unit1-vocabulary/cpe/index.html?course=cpe&backLabel=" + encodeURIComponent("Level 1");
        }
        if (fid === String(W.PREP_LEGACY_U1_GRAMMAR_FOLDER_ID)) {
            return "unit1-grammar/cpe/index.html?course=cpe&backLabel=" + encodeURIComponent("Level 1");
        }
        if (fid === String(W.PREP_LEGACY_U1_LISTENING_FOLDER_ID)) {
            return "unit1-listening/cpe/index.html?course=cpe&backLabel=" + encodeURIComponent("Level 1");
        }
        if (fid === String(W.PREP_LEGACY_U1_READING_FOLDER_ID)) {
            return "unit1-reading/cpe/index.html?course=cpe&backLabel=" + encodeURIComponent("Level 1");
        }
        if (fid === String(W.PREP_LEGACY_U1_UOE_FOLDER_ID)) {
            return "unit1-use-of-english/cpe/index.html?course=cpe&backLabel=" + encodeURIComponent("Level 1");
        }
        return null;
    };
})(typeof window !== "undefined" ? window : globalThis);
