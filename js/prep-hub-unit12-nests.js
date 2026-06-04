/**

 * Prep hub — Level 12 linked folders (CPE Levels hub).

 * Load after prep-hub-seeds-unit12-vocabulary.js, prep-hub-seeds-unit12-reading.js, prep-hub-seeds-unit12-uoe.js, prep-site-content.js.

 */

(function (W) {

    "use strict";



    W.PREP_LEGACY_U12_LEXICAL_GAMES_FOLDER_ID = "prep_legacy_u12_lexical_games";

    W.PREP_LEGACY_U12_GAMES_FOLDER_ID = "prep_legacy_u12_games";

    W.PREP_LEGACY_U12_VOCAB_FOLDER_ID = "prep_legacy_u12_vocab";

    W.PREP_LEGACY_U12_READING_FOLDER_ID = "prep_legacy_u12_reading";

    W.PREP_LEGACY_U12_LISTENING_FOLDER_ID = "prep_legacy_u12_listening";

    W.PREP_LEGACY_U12_GRAMMAR_FOLDER_ID = "prep_legacy_u12_grammar";

    W.PREP_LEGACY_U12_UOE_FOLDER_ID = "prep_legacy_u12_uoe";



    var INLINE_READING_TASK = {

        id: "u12_reading_road_to_betterment_seed",

        title: "The Road to Betterment",

        subtitle: "Unit 12 · Reading Part 5 · 6× multiple choice (A–D)",

        kind: "prep-link",

        href:

            "unit12-reading/cpe/the-road-to-betterment/index.html?course=cpe&backLabel=" +

            encodeURIComponent("Reading — Level 12"),

    };



    var INLINE_READING_PACK = {

        folderReading: {

            title: "Reading",

            subtitle: "Unit 12 · Part 5 multiple choice (CPE)",

        },

        seededTasks: [INLINE_READING_TASK],

        taskIdsOrdered: [INLINE_READING_TASK.id],

        roadToBettermentTask: INLINE_READING_TASK,

    };



    function getU12ReadingPack() {

        return W.PREP_HUB_U12_READING_SEEDS || INLINE_READING_PACK;

    }



    function getU12ListeningPack() {

        return W.PREP_HUB_U12_LISTENING_SEEDS || null;

    }



    function getU12GrammarPack() {

        return W.PREP_HUB_U12_GRAMMAR_SEEDS || null;

    }



    function getU12UoePack() {

        return W.PREP_HUB_U12_UOE_SEEDS || null;

    }



    function getU12VocabPack() {

        return W.PREP_HUB_U12_VOCAB_SEEDS || null;

    }



    W.hubIsUnit12LegacyLinkedFolderId = function (folderId) {

        var s = String(folderId == null ? "" : folderId);

        return (

            s === String(W.PREP_LEGACY_U12_VOCAB_FOLDER_ID) ||

            s === String(W.PREP_LEGACY_U12_READING_FOLDER_ID) ||

            s === String(W.PREP_LEGACY_U12_LISTENING_FOLDER_ID) ||

            s === String(W.PREP_LEGACY_U12_GRAMMAR_FOLDER_ID) ||

            s === String(W.PREP_LEGACY_U12_UOE_FOLDER_ID)

        );

    };



    /** @param {string} folderId */

    W.hubLegacyU12LinkedFolderSortKey = function (folderId) {

        var s = String(folderId == null ? "" : folderId);

        if (s === String(W.PREP_LEGACY_U12_LEXICAL_GAMES_FOLDER_ID)) return 0;

        if (s === String(W.PREP_LEGACY_U12_GAMES_FOLDER_ID)) return 1;

        if (s === String(W.PREP_LEGACY_U12_VOCAB_FOLDER_ID)) return 2;

        if (s === String(W.PREP_LEGACY_U12_READING_FOLDER_ID)) return 3;

        if (s === String(W.PREP_LEGACY_U12_LISTENING_FOLDER_ID)) return 4;

        if (s === String(W.PREP_LEGACY_U12_GRAMMAR_FOLDER_ID)) return 5;

        if (s === String(W.PREP_LEGACY_U12_UOE_FOLDER_ID)) return 6;

        return 10;

    };



    W.ensurePrepUnit12LinkedShells = function () {

        W.ensurePrepUnit12VocabularyFolder();

        W.ensurePrepUnit12ReadingFolder();

        W.ensurePrepUnit12ListeningFolder();

        W.ensurePrepUnit12GrammarFolder();

        W.ensurePrepUnit12UoeFolder();

        W.ensurePrepUnit12LexicalGamesFolder();

        W.ensurePrepUnit12GamesFolder();

    };



    /**

     * @param {string} folderId

     * @returns {boolean}

     */

    W.prepHubUnit12EnsureByFolderId = function (folderId) {

        var fid = String(folderId == null ? "" : folderId);

        if (!fid) return false;

        if (fid === String(W.PREP_LEGACY_U12_VOCAB_FOLDER_ID)) {

            W.ensurePrepUnit12VocabularyFolder();

            return true;

        }

        if (fid === String(W.PREP_LEGACY_U12_READING_FOLDER_ID)) {

            W.ensurePrepUnit12ReadingFolder();

            return true;

        }

        if (fid === String(W.PREP_LEGACY_U12_LISTENING_FOLDER_ID)) {

            W.ensurePrepUnit12ListeningFolder();

            return true;

        }

        if (fid === String(W.PREP_LEGACY_U12_GRAMMAR_FOLDER_ID)) {

            W.ensurePrepUnit12GrammarFolder();

            return true;

        }

        if (fid === String(W.PREP_LEGACY_U12_UOE_FOLDER_ID)) {

            W.ensurePrepUnit12UoeFolder();

            return true;

        }

        if (fid === String(W.PREP_LEGACY_U12_LEXICAL_GAMES_FOLDER_ID)) {

            W.ensurePrepUnit12LexicalGamesFolder();

            return true;

        }

        if (fid === String(W.PREP_LEGACY_U12_GAMES_FOLDER_ID)) {

            W.ensurePrepUnit12GamesFolder();

            return true;

        }

        return false;

    };



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



    function prepMergeTasksUniqueU12(fld, additions) {

        fld.tasks = Array.isArray(fld.tasks) ? fld.tasks : [];

        var ch = false;

        (additions || []).forEach(function (t) {

            if (!t || !t.id) return;

            var tid = String(t.id);

            if (

                fld.tasks.some(function (x) {

                    return x && String(x.id) === tid;

                })

            ) {

                return;

            }

            fld.tasks.push(t);

            ch = true;

        });

        return ch;

    }



    function isU12UoeFolderTitle(title) {

        return String(title == null ? "" : title).trim().toLowerCase() === "use of english";

    }



    function reconcileU12UoeFolderTasks(fld, uoePack) {

        if (!fld || !uoePack) return false;

        fld.tasks = Array.isArray(fld.tasks) ? fld.tasks : [];

        var changed = false;

        var seeds = Array.isArray(uoePack.seededTasks) ? uoePack.seededTasks : [];

        seeds.forEach(function (seed) {

            if (!seed || !seed.id) return;

            for (var i = 0; i < fld.tasks.length; i++) {

                var t = fld.tasks[i];

                if (!t || String(t.id) !== String(seed.id)) continue;

                ["title", "subtitle", "href", "kind"].forEach(function (key) {

                    if (seed[key] != null && t[key] !== seed[key]) {

                        t[key] = seed[key];

                        changed = true;

                    }

                });

                break;

            }

        });

        if (Array.isArray(uoePack.taskIdsOrdered) && uoePack.taskIdsOrdered.length) {

            var order = uoePack.taskIdsOrdered.map(String);

            var byId = {};

            fld.tasks.forEach(function (t) {

                if (t && t.id != null) byId[String(t.id)] = t;

            });

            var reordered = [];

            order.forEach(function (oid) {

                if (byId[oid]) {

                    reordered.push(byId[oid]);

                    delete byId[oid];

                }

            });

            Object.keys(byId).forEach(function (k) {

                reordered.push(byId[k]);

            });

            if (

                reordered.length === fld.tasks.length &&

                reordered.some(function (t, idx) {

                    return t !== fld.tasks[idx];

                })

            ) {

                fld.tasks = reordered;

                changed = true;

            }

        }

        return changed;

    }



    function dedupeU12LinkedUoeFolders(linked) {

        linked = Array.isArray(linked) ? linked.slice() : [];

        var canonId = String(W.PREP_LEGACY_U12_UOE_FOLDER_ID);

        var hasCanon = linked.some(function (f) {

            return f && String(f.id) === canonId;

        });

        if (!hasCanon) return linked;

        return linked.filter(function (f) {

            if (!f || !isU12UoeFolderTitle(f.title)) return true;

            return String(f.id) === canonId;

        });

    }



    function findFolderInStore(folderId) {

        if (typeof PrepSiteContent === "undefined" || !PrepSiteContent.load) return null;

        var want = String(folderId == null ? "" : folderId);

        var folders = PrepSiteContent.load().folders || [];

        for (var i = 0; i < folders.length; i++) {

            if (folders[i] && String(folders[i].id == null ? "" : folders[i].id) === want) {

                return folders[i];

            }

        }

        return null;

    }



    function ensureLinkedFolder(opts) {

        if (typeof PrepSiteContent === "undefined" || !PrepSiteContent.load || !PrepSiteContent.save) return false;

        if (!opts || !opts.shell) return false;

        var d = PrepSiteContent.load();

        d.folders = d.folders || [];

        var id = String(opts.folderId == null ? "" : opts.folderId);

        var shell = opts.shell;

        var seeds = Array.isArray(opts.seeds) ? opts.seeds : [];

        var linkedUnit = opts.linkedUnit != null ? Number(opts.linkedUnit) : 12;



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



    function buildEphemeralU12Folder(folderId, shell, seeds) {

        return {

            id: folderId,

            type: "folder",

            title: shell.title,

            subtitle: shell.subtitle,

            goal: "",

            linkedUnit: 12,

            sections: [],

            tasks: seeds.slice(),

            __hubU12BuiltinEphemeral: true,

        };

    }



    function buildFallbackFolderRecord(folderId) {

        var fid = String(folderId || "");

        if (fid === String(W.PREP_LEGACY_U12_READING_FOLDER_ID)) {

            var readingPack = getU12ReadingPack();

            return buildEphemeralU12Folder(

                fid,

                readingPack.folderReading,

                Array.isArray(readingPack.seededTasks)

                    ? readingPack.seededTasks

                    : [readingPack.roadToBettermentTask].filter(Boolean)

            );

        }

        if (fid === String(W.PREP_LEGACY_U12_VOCAB_FOLDER_ID)) {

            var vocabPack = getU12VocabPack();

            if (!vocabPack || !vocabPack.folderVocabulary) return null;

            return buildEphemeralU12Folder(

                fid,

                vocabPack.folderVocabulary,

                Array.isArray(vocabPack.seededTasks)

                    ? vocabPack.seededTasks

                    : [vocabPack.sportsIdiomsTask].filter(Boolean)

            );

        }

        if (fid === String(W.PREP_LEGACY_U12_LISTENING_FOLDER_ID)) {

            var listeningPack = getU12ListeningPack();

            if (!listeningPack || !listeningPack.folderListening) return null;

            return buildEphemeralU12Folder(

                fid,

                listeningPack.folderListening,

                Array.isArray(listeningPack.seededTasks)

                    ? listeningPack.seededTasks

                    : [listeningPack.examTask].filter(Boolean)

            );

        }

        if (fid === String(W.PREP_LEGACY_U12_GRAMMAR_FOLDER_ID)) {

            var grammarPack = getU12GrammarPack();

            if (!grammarPack || !grammarPack.folderGrammar) return null;

            return buildEphemeralU12Folder(

                fid,

                grammarPack.folderGrammar,

                Array.isArray(grammarPack.seededTasks)

                    ? grammarPack.seededTasks

                    : [grammarPack.participleRefTask].filter(Boolean)

            );

        }

        if (fid === String(W.PREP_LEGACY_U12_UOE_FOLDER_ID)) {

            var uoePack = getU12UoePack();

            if (!uoePack || !uoePack.folderUseOfEnglish) return null;

            return buildEphemeralU12Folder(

                fid,

                uoePack.folderUseOfEnglish,

                Array.isArray(uoePack.seededTasks)

                    ? uoePack.seededTasks

                    : [uoePack.foodSupplementsMcTask].filter(Boolean)

            );

        }

        return null;

    }



    /** Ensure, load from CMS, or return built-in fallback folder record. */

    W.hubUnit12GetFolderRecord = function (folderId) {

        if (!W.hubIsUnit12LegacyLinkedFolderId(folderId)) return null;

        W.prepHubUnit12EnsureByFolderId(folderId);

        var stored = findFolderInStore(folderId);

        if (stored) return stored;

        return buildFallbackFolderRecord(folderId);

    };



    /** Direct hub page when in-app folder workspace cannot load CMS row. */

    W.hubUnit12LegacyFolderHubHref = function (folderId) {

        var fid = String(folderId || "");

        if (fid === String(W.PREP_LEGACY_U12_READING_FOLDER_ID)) {

            return (

                "unit12-reading/cpe/index.html?course=cpe&backLabel=" + encodeURIComponent("Level 12")

            );

        }

        if (fid === String(W.PREP_LEGACY_U12_VOCAB_FOLDER_ID)) {

            return (

                "unit12-vocabulary/cpe/index.html?course=cpe&backLabel=" + encodeURIComponent("Level 12")

            );

        }

        if (fid === String(W.PREP_LEGACY_U12_LISTENING_FOLDER_ID)) {

            return (

                "unit12-listening/index.html?course=cpe&backLabel=" + encodeURIComponent("Level 12")

            );

        }

        if (fid === String(W.PREP_LEGACY_U12_GRAMMAR_FOLDER_ID)) {

            return (

                "index.html?prep_stay=1&screen=unit12&prep_open_folder=" +

                encodeURIComponent(W.PREP_LEGACY_U12_GRAMMAR_FOLDER_ID)

            );

        }

        if (fid === String(W.PREP_LEGACY_U12_UOE_FOLDER_ID)) {

            return (

                "index.html?prep_stay=1&screen=unit12&prep_open_folder=" +

                encodeURIComponent(W.PREP_LEGACY_U12_UOE_FOLDER_ID)

            );

        }

        return null;

    };



    W.hubUnit12AugmentLinkedFolders = function (linked, allFolders) {

        linked = Array.isArray(linked) ? linked.slice() : [];

        allFolders = Array.isArray(allFolders) ? allFolders : [];



        var specs = [];

        if (W.PREP_HUB_U12_LEXICAL_GAMES_SEEDS && W.PREP_HUB_U12_LEXICAL_GAMES_SEEDS.folderLexical) {
            specs.push({
                id: W.PREP_LEGACY_U12_LEXICAL_GAMES_FOLDER_ID,
                shell: W.PREP_HUB_U12_LEXICAL_GAMES_SEEDS.folderLexical,
                seeds: [],
            });
        }

        if (W.PREP_HUB_U12_GAMES_SEEDS && W.PREP_HUB_U12_GAMES_SEEDS.folderGames) {
            specs.push({
                id: W.PREP_LEGACY_U12_GAMES_FOLDER_ID,
                shell: W.PREP_HUB_U12_GAMES_SEEDS.folderGames,
                seeds: W.PREP_HUB_U12_GAMES_SEEDS.hubTask ? [W.PREP_HUB_U12_GAMES_SEEDS.hubTask] : [],
            });
        }

        var vocabPack = getU12VocabPack();

        if (vocabPack && vocabPack.folderVocabulary) {

            specs.push({

                id: W.PREP_LEGACY_U12_VOCAB_FOLDER_ID,

                shell: vocabPack.folderVocabulary,

                seeds: Array.isArray(vocabPack.seededTasks)

                    ? vocabPack.seededTasks

                    : [vocabPack.sportsIdiomsTask].filter(Boolean),

            });

        }

        var readingPack = getU12ReadingPack();

        if (readingPack && readingPack.folderReading) {

            specs.push({

                id: W.PREP_LEGACY_U12_READING_FOLDER_ID,

                shell: readingPack.folderReading,

                seeds: Array.isArray(readingPack.seededTasks)

                    ? readingPack.seededTasks

                    : [readingPack.roadToBettermentTask].filter(Boolean),

            });

        }

        var listeningPack = getU12ListeningPack();

        if (listeningPack && listeningPack.folderListening) {

            specs.push({

                id: W.PREP_LEGACY_U12_LISTENING_FOLDER_ID,

                shell: listeningPack.folderListening,

                seeds: Array.isArray(listeningPack.seededTasks)

                    ? listeningPack.seededTasks

                    : [listeningPack.examTask].filter(Boolean),

            });

        }

        var grammarPack = getU12GrammarPack();

        if (grammarPack && grammarPack.folderGrammar) {

            specs.push({

                id: W.PREP_LEGACY_U12_GRAMMAR_FOLDER_ID,

                shell: grammarPack.folderGrammar,

                seeds: Array.isArray(grammarPack.seededTasks)

                    ? grammarPack.seededTasks

                    : [grammarPack.participleRefTask].filter(Boolean),

            });

        }

        var uoePack = getU12UoePack();

        if (uoePack && uoePack.folderUseOfEnglish) {

            specs.push({

                id: W.PREP_LEGACY_U12_UOE_FOLDER_ID,

                shell: uoePack.folderUseOfEnglish,

                seeds: Array.isArray(uoePack.seededTasks)

                    ? uoePack.seededTasks

                    : [uoePack.foodSupplementsMcTask].filter(Boolean),

            });

        }



        specs.forEach(function (spec) {

            var sid = String(spec.id);

            var already = linked.some(function (x) {

                return x && String(x.id) === sid;

            });

            if (already) return;



            try {

                ensureLinkedFolder({

                    folderId: spec.id,

                    shell: spec.shell,

                    seeds: spec.seeds,

                });

            } catch (eSeed) {}



            var fromStore = findFolderInStore(spec.id);

            if (fromStore && Number(fromStore.linkedUnit) === 12 && !fromStore.parentFolderId) {

                linked.push(fromStore);

                return;

            }



            linked.push(buildEphemeralU12Folder(spec.id, spec.shell, spec.seeds));

        });



        linked = dedupeU12LinkedUoeFolders(linked);

        linked.sort(function (a, b) {

            var ka = W.hubLegacyU12LinkedFolderSortKey(a.id);

            var kb = W.hubLegacyU12LinkedFolderSortKey(b.id);

            if (ka !== kb) return ka - kb;

            return 0;

        });



        return linked;

    };



    W.ensurePrepUnit12VocabularyFolder = function () {

        var pack = getU12VocabPack();

        if (!pack) {

            try {

                console.warn("[Prep hub] Missing PREP_HUB_U12_VOCAB_SEEDS — load js/prep-hub-seeds-unit12-vocabulary.js");

            } catch (eSeed) {}

            return false;

        }

        return ensureLinkedFolder({

            folderId: W.PREP_LEGACY_U12_VOCAB_FOLDER_ID,

            shell: pack.folderVocabulary,

            seeds: Array.isArray(pack.seededTasks) ? pack.seededTasks : [pack.sportsIdiomsTask].filter(Boolean),

        });

    };



    W.ensurePrepUnit12ReadingFolder = function () {

        var pack = getU12ReadingPack();

        return ensureLinkedFolder({

            folderId: W.PREP_LEGACY_U12_READING_FOLDER_ID,

            shell: pack.folderReading,

            seeds: Array.isArray(pack.seededTasks) ? pack.seededTasks : [pack.roadToBettermentTask].filter(Boolean),

        });

    };



    W.ensurePrepUnit12ListeningFolder = function () {

        var pack = getU12ListeningPack();

        if (!pack || !pack.folderListening) {

            try {

                console.warn(

                    "[Prep hub] Missing PREP_HUB_U12_LISTENING_SEEDS — load js/prep-hub-seeds-unit12-listening.js"

                );

            } catch (eSeed) {}

            return false;

        }

        var ok = ensureLinkedFolder({

            folderId: W.PREP_LEGACY_U12_LISTENING_FOLDER_ID,

            shell: pack.folderListening,

            seeds: Array.isArray(pack.seededTasks) ? pack.seededTasks : [pack.examTask].filter(Boolean),

        });

        if (typeof PrepSiteContent !== "undefined" && PrepSiteContent.load && PrepSiteContent.save) {

            var d = PrepSiteContent.load();

            var fid = String(W.PREP_LEGACY_U12_LISTENING_FOLDER_ID);

            var j;

            for (j = 0; j < (d.folders || []).length; j++) {

                var f = d.folders[j];

                if (!f || String(f.id) !== fid) continue;

                if (!Array.isArray(f.tasks)) break;

                var before = f.tasks.length;

                f.tasks = f.tasks.filter(function (t) {

                    return !t || String(t.id) !== "u12_listen_hub";

                });

                if (f.tasks.length !== before) PrepSiteContent.save(d);

                break;

            }

        }

        return ok;

    };



    function isStaleU12GrammarCpeTask(t) {

        if (!t) return false;

        var id = String(t.id == null ? "" : t.id).toLowerCase();

        var title = String(t.title == null ? "" : t.title).toLowerCase();

        var href = String(t.href == null ? "" : t.href).toLowerCase();

        if (id.indexOf("quantif") >= 0) return true;

        if (title.indexOf("quantifier") >= 0) return true;

        if (href.indexOf("quantifier") >= 0) return true;

        return false;

    }



    function reconcileU12GrammarFolderTasks(fld, grammarPack) {

        if (!fld || !grammarPack) return false;

        fld.tasks = Array.isArray(fld.tasks) ? fld.tasks : [];

        var changed = false;

        var before = fld.tasks.length;

        fld.tasks = fld.tasks.filter(function (t) {

            return !isStaleU12GrammarCpeTask(t);

        });

        if (fld.tasks.length !== before) changed = true;

        var seeds = Array.isArray(grammarPack.seededTasks) ? grammarPack.seededTasks : [];

        seeds.forEach(function (seed) {

            if (!seed || !seed.id) return;

            for (var i = 0; i < fld.tasks.length; i++) {

                var t = fld.tasks[i];

                if (!t || String(t.id) !== String(seed.id)) continue;

                ["title", "subtitle", "href", "kind"].forEach(function (key) {

                    if (seed[key] != null && t[key] !== seed[key]) {

                        t[key] = seed[key];

                        changed = true;

                    }

                });

                break;

            }

        });

        if (Array.isArray(grammarPack.taskIdsOrdered) && grammarPack.taskIdsOrdered.length) {

            var order = grammarPack.taskIdsOrdered.map(String);

            var byId = {};

            fld.tasks.forEach(function (t) {

                if (t && t.id != null) byId[String(t.id)] = t;

            });

            var reordered = [];

            order.forEach(function (oid) {

                if (byId[oid]) {

                    reordered.push(byId[oid]);

                    delete byId[oid];

                }

            });

            Object.keys(byId).forEach(function (k) {

                reordered.push(byId[k]);

            });

            if (

                reordered.length === fld.tasks.length &&

                reordered.some(function (t, idx) {

                    return t !== fld.tasks[idx];

                })

            ) {

                fld.tasks = reordered;

                changed = true;

            }

        }

        return changed;

    }



    W.ensurePrepUnit12GrammarFolder = function () {

        var pack = getU12GrammarPack();

        if (!pack || !pack.folderGrammar) {

            try {

                console.warn(

                    "[Prep hub] Missing PREP_HUB_U12_GRAMMAR_SEEDS — load js/prep-hub-seeds-unit12-grammar.js"

                );

            } catch (eSeed) {}

            return false;

        }

        var ok = ensureLinkedFolder({

            folderId: W.PREP_LEGACY_U12_GRAMMAR_FOLDER_ID,

            shell: pack.folderGrammar,

            seeds: Array.isArray(pack.seededTasks) ? pack.seededTasks : [pack.participleRefTask].filter(Boolean),

        });

        if (typeof PrepSiteContent !== "undefined" && PrepSiteContent.load && PrepSiteContent.save) {

            var d = PrepSiteContent.load();

            var fid = String(W.PREP_LEGACY_U12_GRAMMAR_FOLDER_ID);

            var j;

            for (j = 0; j < (d.folders || []).length; j++) {

                var f = d.folders[j];

                if (!f || String(f.id) !== fid) continue;

                var ch = reconcileU12GrammarFolderTasks(f, pack);

                if (pack.folderGrammar.subtitle && f.subtitle !== pack.folderGrammar.subtitle) {

                    f.subtitle = pack.folderGrammar.subtitle;

                    ch = true;

                }

                if (ch) PrepSiteContent.save(d);

                break;

            }

        }

        return ok;

    };



    W.ensurePrepUnit12UoeFolder = function () {

        var pack = getU12UoePack();

        if (!pack || !pack.folderUseOfEnglish) {

            try {

                console.warn(

                    "[Prep hub] Missing PREP_HUB_U12_UOE_SEEDS — load js/prep-hub-seeds-unit12-uoe.js"

                );

            } catch (eSeed) {}

            return false;

        }

        var seeds = Array.isArray(pack.seededTasks)

            ? pack.seededTasks

            : [pack.foodSupplementsMcTask].filter(Boolean);

        var ok = ensureLinkedFolder({

            folderId: W.PREP_LEGACY_U12_UOE_FOLDER_ID,

            shell: pack.folderUseOfEnglish,

            seeds: seeds,

        });

        if (typeof PrepSiteContent === "undefined" || !PrepSiteContent.load || !PrepSiteContent.save) {

            return ok;

        }

        var d = PrepSiteContent.load();

        d.folders = d.folders || [];

        var canonId = String(W.PREP_LEGACY_U12_UOE_FOLDER_ID);

        var canon = null;

        var dupIdx = [];

        var i;

        for (i = 0; i < d.folders.length; i++) {

            var f = d.folders[i];

            if (!f) continue;

            var fid = String(f.id == null ? "" : f.id);

            if (fid === canonId) {

                canon = f;

                continue;

            }

            if (Number(f.linkedUnit) === 12 && !f.parentFolderId && isU12UoeFolderTitle(f.title)) {

                dupIdx.push(i);

            }

        }

        var changed = false;

        if (!canon) {

            canon = {

                id: canonId,

                type: "folder",

                title: pack.folderUseOfEnglish.title,

                subtitle: pack.folderUseOfEnglish.subtitle,

                goal: "",

                linkedUnit: 12,

                sections: [],

                tasks: seeds.slice(),

            };

            d.folders.unshift(canon);

            changed = true;

        }

        for (i = dupIdx.length - 1; i >= 0; i--) {

            var dup = d.folders[dupIdx[i]];

            if (dup && prepMergeTasksUniqueU12(canon, dup.tasks || [])) changed = true;

            d.folders.splice(dupIdx[i], 1);

            changed = true;

        }

        if (canon.parentFolderId) {

            delete canon.parentFolderId;

            changed = true;

        }

        if (Number(canon.linkedUnit) !== 12) {

            canon.linkedUnit = 12;

            changed = true;

        }

        if (pack.folderUseOfEnglish.title && canon.title !== pack.folderUseOfEnglish.title) {

            canon.title = pack.folderUseOfEnglish.title;

            changed = true;

        }

        if (pack.folderUseOfEnglish.subtitle && canon.subtitle !== pack.folderUseOfEnglish.subtitle) {

            canon.subtitle = pack.folderUseOfEnglish.subtitle;

            changed = true;

        }

        if (mergeSeededTasks(canon, seeds)) changed = true;

        if (reconcileU12UoeFolderTasks(canon, pack)) changed = true;

        if (changed) PrepSiteContent.save(d);

        return ok || changed;

    };



    W.ensurePrepUnit12LexicalGamesFolder = function () {
        if (typeof PrepSiteContent === "undefined" || !PrepSiteContent.load || !PrepSiteContent.save) return;
        var d = PrepSiteContent.load();
        d.folders = d.folders || [];
        var id = W.PREP_LEGACY_U12_LEXICAL_GAMES_FOLDER_ID;
        var canonTitle = "Vocab Gym";
        var canonSubtitle =
            "Word Bank & phrase modes from Unit 12 reading + sports idioms · separate from textbook folders below";
        for (var i = 0; i < d.folders.length; i++) {
            if (String(d.folders[i].id == null ? "" : d.folders[i].id) !== String(id)) continue;
            var f = d.folders[i];
            var changed = false;
            if (Number(f.linkedUnit) !== 12) {
                f.linkedUnit = 12;
                changed = true;
            }
            if ((f.title || "").trim() !== canonTitle) {
                f.title = canonTitle;
                changed = true;
            }
            if ((f.subtitle || "").trim() !== canonSubtitle) {
                f.subtitle = canonSubtitle;
                changed = true;
            }
            if (changed) PrepSiteContent.save(d);
            return;
        }
        d.folders.unshift({
            id: id,
            type: "folder",
            title: canonTitle,
            subtitle: canonSubtitle,
            goal: "",
            linkedUnit: 12,
            sections: [],
            tasks: [],
        });
        PrepSiteContent.save(d);
    };



    W.ensurePrepUnit12GamesFolder = function () {
        if (typeof PrepSiteContent === "undefined" || !PrepSiteContent.load || !PrepSiteContent.save) return;
        var pack = W.PREP_HUB_U12_GAMES_SEEDS;
        if (!pack || !pack.hubTask) return;
        var id = W.PREP_LEGACY_U12_GAMES_FOLDER_ID;
        var canon = pack.hubTask;
        var d = PrepSiteContent.load();
        d.folders = d.folders || [];
        for (var j = 0; j < d.folders.length; j++) {
            if (String(d.folders[j].id == null ? "" : d.folders[j].id) !== String(id)) continue;
            var g = d.folders[j];
            var ch = false;
            if (Number(g.linkedUnit) !== 12) {
                g.linkedUnit = 12;
                ch = true;
            }
            if (pack.folderGames) {
                if ((g.title || "").trim() !== pack.folderGames.title) {
                    g.title = pack.folderGames.title;
                    ch = true;
                }
                if ((g.subtitle || "").trim() !== pack.folderGames.subtitle) {
                    g.subtitle = pack.folderGames.subtitle;
                    ch = true;
                }
            }
            g.tasks = Array.isArray(g.tasks) ? g.tasks : [];
            if (
                !g.tasks.some(function (t) {
                    return t && String(t.id) === String(canon.id);
                })
            ) {
                g.tasks.push(canon);
                ch = true;
            }
            if (ch) PrepSiteContent.save(d);
            return;
        }
        d.folders.unshift({
            id: id,
            type: "folder",
            title: pack.folderGames ? pack.folderGames.title : "Playground",
            subtitle: pack.folderGames ? pack.folderGames.subtitle : "Unit 12 · CPE",
            goal: "",
            linkedUnit: 12,
            sections: [],
            tasks: [canon],
        });
        PrepSiteContent.save(d);
    };



    function autoSeedOnReady() {

        try {

            W.ensurePrepUnit12LinkedShells();

        } catch (eAuto) {}

    }



    if (typeof document !== "undefined") {

        if (document.readyState === "loading") {

            document.addEventListener("DOMContentLoaded", autoSeedOnReady);

        } else {

            autoSeedOnReady();

        }

    }

})(typeof window !== "undefined" ? window : globalThis);


