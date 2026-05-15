/**
 * Prep hub — Level 10 linked folders & nested shells (Vocabulary, Lexical games, Grammar, Use of English, Listening).
 *
 * Load order (see index.html): after `prep-site-content.js` and all `prep-hub-seeds-unit10-*.js`
 * (grammar, listening registry + seeds, uoe seeds).
 *
 * Exposes globals on `window` so the main hub script keeps working without a bundler.
 */
(function (W) {
    "use strict";

    /** Level 10 — seeded "Vocabulary" folder (linked only). */
    W.PREP_LEGACY_U10_VOCAB_FOLDER_ID = "prep_legacy_u10_vocab";
    /** Level 10 — Lexical games entry (vault / Word Bank jump). */
    W.PREP_LEGACY_U10_LEXICAL_GAMES_FOLDER_ID = "prep_legacy_u10_lexical_games";
    /** Level 10 — Listening parent folder. */
    W.PREP_LEGACY_U10_LISTENING_FOLDER_ID = "prep_legacy_u10_listening";
    /** Nested: Part 4 multiple matching quad. */
    W.PREP_LEGACY_U10_LISTENING_P4_FOLDER_ID = "prep_legacy_u10_listening_p4";
    /** Level 10 — Grammar parent folder. */
    W.PREP_LEGACY_U10_GRAMMAR_FOLDER_ID = "prep_legacy_u10_grammar";
    /** Level 10 — «Use of English» на сетке; Part 1 MC — задачи на этой папке (без вложенной папки MC). */
    W.PREP_LEGACY_U10_UOE_FOLDER_ID = "prep_legacy_u10_uoe";
    /** Устаревшая вложенная MC-папка — только миграция + редирект deep-link → родитель. */
    W.PREP_LEGACY_U10_UOE_MC_FOLDER_ID = "prep_legacy_u10_uoe_mc_cloze";
    /** Nested under Grammar: Inversion. */
    W.PREP_LEGACY_U10_INVERSION_FOLDER_ID = "prep_legacy_u10_inversion";
    /** Nested under Grammar: Cleft sentences. */
    W.PREP_LEGACY_U10_CLEFT_FOLDER_ID = "prep_legacy_u10_cleft";

    /** @param {string} folderId */
    W.hubLegacyU10LinkedFolderSortKey = function (folderId) {
        var s = String(folderId == null ? "" : folderId);
        if (s === String(W.PREP_LEGACY_U10_LEXICAL_GAMES_FOLDER_ID)) return 0;
        if (s === String(W.PREP_LEGACY_U10_VOCAB_FOLDER_ID)) return 1;
        if (s === String(W.PREP_LEGACY_U10_GRAMMAR_FOLDER_ID)) return 2;
        if (s === String(W.PREP_LEGACY_U10_UOE_FOLDER_ID)) return 3;
        if (s === String(W.PREP_LEGACY_U10_LISTENING_FOLDER_ID)) return 4;
        return 10;
    };

    /**
     * Dedupe merge for nested folder tasks (Prep hub migrations).
     * @param {{ tasks?: unknown[] }} fld
     * @param {Array<{ id?: string }>} additions
     * @returns {boolean}
     */
    function prepMergeTasksUnique(fld, additions) {
        fld.tasks = Array.isArray(fld.tasks) ? fld.tasks : [];
        var ch = false;
        additions.forEach(function (t) {
            if (!t || !t.id) return;
            var tid = String(t.id);
            if (
                !fld.tasks.some(function (x) {
                    return x && String(x.id) === tid;
                })
            ) {
                fld.tasks.push(t);
                ch = true;
            }
        });
        return ch;
    }

    /**
     * Ensure Level 10 linked-folder rows exist / stay migrated (single call site from hub bootstrap).
     */
    W.ensurePrepUnit10LinkedShells = function () {
        W.ensurePrepUnit10VocabularyFolder();
        W.ensurePrepUnit10ListeningNest();
        W.ensurePrepUnit10LexicalGamesFolder();
        W.ensurePrepUnit10GrammarNest();
        W.ensurePrepUnit10UoeNest();
    };

    /**
     * Hydrate folders from disk seeds when PrepSiteContent has a stale / missing row.
     * @param {string} folderId
     * @returns {boolean} true if this id belongs to Unit 10 legacy shells and an ensure* ran
     */
    W.prepHubUnit10EnsureByFolderId = function (folderId) {
        var fid = String(folderId == null ? "" : folderId);
        if (!fid) return false;
        if (fid === String(W.PREP_LEGACY_U10_VOCAB_FOLDER_ID)) {
            W.ensurePrepUnit10VocabularyFolder();
            return true;
        }
        if (fid === String(W.PREP_LEGACY_U10_LEXICAL_GAMES_FOLDER_ID)) {
            W.ensurePrepUnit10LexicalGamesFolder();
            return true;
        }
        if (
            fid === String(W.PREP_LEGACY_U10_LISTENING_FOLDER_ID) ||
            fid === String(W.PREP_LEGACY_U10_LISTENING_P4_FOLDER_ID)
        ) {
            W.ensurePrepUnit10ListeningNest();
            return true;
        }
        if (
            fid === String(W.PREP_LEGACY_U10_GRAMMAR_FOLDER_ID) ||
            fid === String(W.PREP_LEGACY_U10_INVERSION_FOLDER_ID) ||
            fid === String(W.PREP_LEGACY_U10_CLEFT_FOLDER_ID)
        ) {
            W.ensurePrepUnit10GrammarNest();
            return true;
        }
        if (fid === String(W.PREP_LEGACY_U10_UOE_FOLDER_ID) || fid === String(W.PREP_LEGACY_U10_UOE_MC_FOLDER_ID)) {
            W.ensurePrepUnit10UoeNest();
            return true;
        }
        return false;
    };

    /**
     * Stable sibling order under Grammar parent (returns null = fallback to folder-array index).
     * @returns {number|null}
     */
    W.prepHubUnit10CompareNestedFolders = function (parentFolderId, folderIdA, folderIdB) {
        var pid = String(parentFolderId);
        var fa = String(folderIdA);
        var fb = String(folderIdB);
        if (pid === String(W.PREP_LEGACY_U10_GRAMMAR_FOLDER_ID)) {
            function grammarNestKey(fid) {
                if (String(fid) === String(W.PREP_LEGACY_U10_INVERSION_FOLDER_ID)) return 0;
                if (String(fid) === String(W.PREP_LEGACY_U10_CLEFT_FOLDER_ID)) return 1;
                return 50;
            }
            var ka = grammarNestKey(fa);
            var kb = grammarNestKey(fb);
            if (ka !== kb) return ka - kb;
        }
        return null;
    };

    /** Старый deep-link на удалённую вложенную MC-папку → открыть Use of English. */
    W.prepHubNormalizeLegacyFolderId = function (folderId) {
        var s = String(folderId == null ? "" : folderId);
        if (s === String(W.PREP_LEGACY_U10_UOE_MC_FOLDER_ID)) return W.PREP_LEGACY_U10_UOE_FOLDER_ID;
        return folderId;
    };

    /**
     * Level 10 — seeded linked folder «Vocabulary» (first card under Level 10 prep list).
     */
    W.ensurePrepUnit10VocabularyFolder = function () {
        if (typeof PrepSiteContent === "undefined" || !PrepSiteContent.load || !PrepSiteContent.save) return;
        var d = PrepSiteContent.load();
        d.folders = d.folders || [];
        var id = W.PREP_LEGACY_U10_VOCAB_FOLDER_ID;
        var seedTask = {
            id: "u10_describing_books_films_seed",
            title: "Describing books and films",
            subtitle: "Unit 10 · textbook Exercise 1 · 12-gap word bank · four reviews",
            kind: "prep-link",
            href: "unit10-vocabulary/describing-books-films/index.html"
        };
        var seedTask2 = {
            id: "u10_describing_meanings_seed",
            title: "Describing books and films — Exercise 2",
            subtitle: "Match meanings to phrases from Exercise 1",
            kind: "prep-link",
            href: "unit10-vocabulary/describing-books-meanings/index.html"
        };
        var seedTaskSimiles = {
            id: "u10_similes_seed",
            title: "Similes — Exercises 1–2",
            subtitle: "Unit 10 · verbs + like… · adjectives + as… as · quick dictionary",
            kind: "prep-link",
            href: "unit10-vocabulary/similes/index.html"
        };
        function ensureTasksOnFolder(fld) {
            fld.tasks = Array.isArray(fld.tasks) ? fld.tasks : [];
            var ch = false;
            if (!fld.tasks.some(function (t) {
                return t && String(t.id) === String(seedTask.id);
            })) {
                fld.tasks.push(seedTask);
                ch = true;
            }
            if (!fld.tasks.some(function (t) {
                return t && String(t.id) === String(seedTask2.id);
            })) {
                fld.tasks.push(seedTask2);
                ch = true;
            }
            if (!fld.tasks.some(function (t) {
                return t && String(t.id) === String(seedTaskSimiles.id);
            })) {
                fld.tasks.push(seedTaskSimiles);
                ch = true;
            }
            return ch;
        }
        for (var i = 0; i < d.folders.length; i++) {
            if (String(d.folders[i].id == null ? "" : d.folders[i].id) !== String(id)) continue;
            var f = d.folders[i];
            if (f.linkedUnit !== 10) {
                f.linkedUnit = 10;
                PrepSiteContent.save(d);
            }
            if (ensureTasksOnFolder(f)) PrepSiteContent.save(d);
            return;
        }
        d.folders.unshift({
            id: id,
            type: "folder",
            title: "Vocabulary",
            subtitle: "Books & films · similes (same list as site folder)",
            goal: "",
            linkedUnit: 10,
            sections: [],
            tasks: [seedTask, seedTask2, seedTaskSimiles]
        });
        PrepSiteContent.save(d);
    };

    /**
     * Level 10 — Grammar «matryoshka»: Inversion + Cleft nested inside Grammar.
     */
    W.ensurePrepUnit10GrammarNest = function () {
        if (typeof PrepSiteContent === "undefined" || !PrepSiteContent.load || !PrepSiteContent.save) return;
        var pack = typeof W !== "undefined" && W.PREP_HUB_U10_GRAMMAR_SEEDS;
        if (!pack) {
            try {
                console.warn("[Prep hub] Missing PREP_HUB_U10_GRAMMAR_SEEDS — load js/prep-hub-seeds-unit10-grammar.js");
            } catch (ePack) {}
            return;
        }
        var gid = W.PREP_LEGACY_U10_GRAMMAR_FOLDER_ID;
        var invId = W.PREP_LEGACY_U10_INVERSION_FOLDER_ID;
        var clId = W.PREP_LEGACY_U10_CLEFT_FOLDER_ID;
        var LEGACY_IDS = pack.legacyTaskIdsToStrip;
        var INV_ORDER = pack.inversionTaskOrder;
        var builtinInvIds = pack.inversionBuiltinTaskIds;
        var seedInversion = pack.seeds.inversionReference;
        var seedInversionEx = pack.seeds.inversionExercise1;
        var seedInversionEx2 = pack.seeds.inversionExercise2;
        var seedInversionRewrite = pack.seeds.inversionRewrite;
        var seedCleft = pack.seeds.cleftReference;
        var cleftSeedId = pack.cleftSeedId;
        function reorderInv(tsk) {
            var heads = [];
            INV_ORDER.forEach(function (oid) {
                var hit = (tsk || []).filter(function (x) {
                    return x && String(x.id) === oid;
                })[0];
                if (hit) heads.push(hit);
            });
            var tail = (tsk || []).filter(function (x) {
                return x && INV_ORDER.indexOf(String(x.id)) < 0;
            });
            return heads.concat(tail);
        }
        function patchInvTasks(fld) {
            fld.tasks = Array.isArray(fld.tasks) ? fld.tasks : [];
            var ch = false;
            var next = fld.tasks.filter(function (t) {
                if (!t) return false;
                if (LEGACY_IDS.indexOf(String(t.id)) >= 0) {
                    ch = true;
                    return false;
                }
                if (String(t.id) === String(cleftSeedId)) {
                    ch = true;
                    return false;
                }
                return true;
            });
            if (next.length !== fld.tasks.length) fld.tasks = next;
            if (!fld.tasks.some(function (t) {
                return t && String(t.id) === String(seedInversion.id);
            })) {
                fld.tasks.push(seedInversion);
                ch = true;
            }
            if (!fld.tasks.some(function (t) {
                return t && String(t.id) === String(seedInversionEx.id);
            })) {
                fld.tasks.push(seedInversionEx);
                ch = true;
            }
            if (!fld.tasks.some(function (t) {
                return t && String(t.id) === String(seedInversionEx2.id);
            })) {
                fld.tasks.push(seedInversionEx2);
                ch = true;
            }
            if (!fld.tasks.some(function (t) {
                return t && String(t.id) === String(seedInversionRewrite.id);
            })) {
                fld.tasks.push(seedInversionRewrite);
                ch = true;
            }
            var idsBefore = fld.tasks
                .map(function (t) {
                    return t && t.id;
                })
                .join("|");
            fld.tasks = reorderInv(fld.tasks);
            if (
                fld.tasks
                    .map(function (t) {
                        return t && t.id;
                    })
                    .join("|") !== idsBefore
            )
                ch = true;
            return ch;
        }
        function patchCleftTasks(fld) {
            fld.tasks = Array.isArray(fld.tasks) ? fld.tasks : [];
            var ch = false;
            if (!fld.tasks.some(function (t) {
                return t && String(t.id) === String(seedCleft.id);
            })) {
                fld.tasks.push(seedCleft);
                ch = true;
            }
            fld.tasks = fld.tasks.filter(function (t) {
                if (!t) return false;
                if (INV_ORDER.indexOf(String(t.id)) >= 0) {
                    ch = true;
                    return false;
                }
                return true;
            });
            return ch;
        }

        var d = PrepSiteContent.load();
        d.folders = d.folders || [];
        var changed = false;

        var g = null;
        for (var gi = 0; gi < d.folders.length; gi++) {
            if (String(d.folders[gi].id == null ? "" : d.folders[gi].id) === String(gid)) {
                g = d.folders[gi];
                break;
            }
        }
        if (!g) {
            g = {
                id: gid,
                type: "folder",
                title: pack.folderGrammar.title,
                subtitle: pack.folderGrammar.subtitle,
                goal: "",
                linkedUnit: 10,
                sections: [],
                tasks: []
            };
            d.folders.push(g);
            changed = true;
        }
        if (g.parentFolderId) {
            delete g.parentFolderId;
            changed = true;
        }
        if (Number(g.linkedUnit) !== 10) {
            g.linkedUnit = 10;
            changed = true;
        }

        var spillInv = [];
        var spillCl = [];
        var keepParent = [];
        (g.tasks || []).forEach(function (t) {
            if (!t || !t.id) return;
            var tid = String(t.id);
            if (LEGACY_IDS.indexOf(tid) >= 0) {
                changed = true;
                return;
            }
            if (builtinInvIds[tid]) {
                spillInv.push(t);
                changed = true;
                return;
            }
            if (tid === String(cleftSeedId)) {
                spillCl.push(t);
                changed = true;
                return;
            }
            keepParent.push(t);
        });
        if (keepParent.length !== (g.tasks || []).length) {
            g.tasks = keepParent;
        }

        var inv = null;
        var cl = null;
        for (var ii = 0; ii < d.folders.length; ii++) {
            var xf = d.folders[ii];
            var xid = String(xf.id == null ? "" : xf.id);
            if (xid === String(invId)) inv = xf;
            else if (xid === String(clId)) cl = xf;
        }

        if (!inv) {
            inv = {
                id: invId,
                type: "folder",
                title: pack.folderInversion.title,
                subtitle: pack.folderInversion.subtitle,
                goal: "",
                linkedUnit: 10,
                parentFolderId: gid,
                sections: [],
                tasks: pack.defaultInversionTasks.slice()
            };
            d.folders.push(inv);
            changed = true;
        }
        if (String(inv.parentFolderId) !== String(gid)) {
            inv.parentFolderId = gid;
            changed = true;
        }
        if (Number(inv.linkedUnit) !== 10) {
            inv.linkedUnit = 10;
            changed = true;
        }
        if (prepMergeTasksUnique(inv, spillInv)) changed = true;
        if (patchInvTasks(inv)) changed = true;

        if (!cl) {
            cl = {
                id: clId,
                type: "folder",
                title: pack.folderCleft.title,
                subtitle: pack.folderCleft.subtitle,
                goal: "",
                linkedUnit: 10,
                parentFolderId: gid,
                sections: [],
                tasks: pack.defaultCleftTasks.slice()
            };
            d.folders.push(cl);
            changed = true;
        }
        if (String(cl.parentFolderId) !== String(gid)) {
            cl.parentFolderId = gid;
            changed = true;
        }
        if (Number(cl.linkedUnit) !== 10) {
            cl.linkedUnit = 10;
            changed = true;
        }
        if (prepMergeTasksUnique(cl, spillCl)) changed = true;
        if (patchCleftTasks(cl)) changed = true;

        if (changed) PrepSiteContent.save(d);
    };

    /**
     * Level 10 — Use of English: сидированный Part 1 MC (Шекспир) лежит прямо на папке (два уровня: юнит → UoE → задача).
     * Удаляет legacy prep_legacy_u10_uoe_mc_cloze и сливает её tasks в родителя.
     */
    W.ensurePrepUnit10UoeNest = function () {
        if (typeof PrepSiteContent === "undefined" || !PrepSiteContent.load || !PrepSiteContent.save) return;
        var pack = typeof W !== "undefined" && W.PREP_HUB_U10_UOE_SEEDS;
        if (!pack) {
            try {
                console.warn("[Prep hub] Missing PREP_HUB_U10_UOE_SEEDS — load js/prep-hub-seeds-unit10-uoe.js");
            } catch (eUoe) {}
            return;
        }
        var uid = W.PREP_LEGACY_U10_UOE_FOLDER_ID;
        var legacyMcId = W.PREP_LEGACY_U10_UOE_MC_FOLDER_ID;
        var shell = pack.folderUseOfEnglish;
        var taskmeta = pack.part1McSeeded;
        var seedIds = taskmeta.taskIdsOrdered.slice();
        var hubSeedStrip = taskmeta.hubSeedIdStrip;
        /* Больше не в CPE Prep: WF по тексту Private investigators (остаётся в FCE · unit10 → disk folder). */
        var retiredU10UoePrepLinkIds = ["u10_uoe_wf_private_investigators"];

        function patchSeededTasks(fld) {
            fld.tasks = Array.isArray(fld.tasks) ? fld.tasks : [];
            var hasAll = seedIds.every(function (fid) {
                return fld.tasks.some(function (t) {
                    return t && String(t.id) === fid;
                });
            });
            if (hasAll) return false;
            fld.tasks = fld.tasks.filter(function (t) {
                if (!t) return false;
                var tid = String(t.id);
                if (hubSeedStrip != null && String(hubSeedStrip) !== "" && tid === String(hubSeedStrip)) return false;
                if (seedIds.indexOf(tid) >= 0) return false;
                return true;
            });
            taskmeta.defaultTasks.forEach(function (dt) {
                fld.tasks.push(dt);
            });
            return true;
        }

        var d = PrepSiteContent.load();
        d.folders = d.folders || [];
        var changed = false;

        var legacyIdx = -1;
        var legacyMc = null;
        for (var li = 0; li < d.folders.length; li++) {
            if (String(d.folders[li].id == null ? "" : d.folders[li].id) === String(legacyMcId)) {
                legacyMc = d.folders[li];
                legacyIdx = li;
                break;
            }
        }

        var g = null;
        for (var gi = 0; gi < d.folders.length; gi++) {
            if (String(d.folders[gi].id == null ? "" : d.folders[gi].id) === String(uid)) {
                g = d.folders[gi];
                break;
            }
        }
        if (!g) {
            g = {
                id: uid,
                type: "folder",
                title: shell.title,
                subtitle: shell.subtitle,
                goal: "",
                linkedUnit: 10,
                sections: [],
                tasks: []
            };
            d.folders.push(g);
            changed = true;
        }
        if (g.parentFolderId) {
            delete g.parentFolderId;
            changed = true;
        }
        if (Number(g.linkedUnit) !== 10) {
            g.linkedUnit = 10;
            changed = true;
        }
        if ((g.title || "").trim() !== shell.title || (g.subtitle || "").trim() !== shell.subtitle) {
            g.title = shell.title;
            g.subtitle = shell.subtitle;
            changed = true;
        }

        if (legacyMc) {
            if (prepMergeTasksUnique(g, legacyMc.tasks || [])) changed = true;
            d.folders.splice(legacyIdx, 1);
            changed = true;
        }

        g.tasks = Array.isArray(g.tasks) ? g.tasks : [];
        var retireLen = g.tasks.length;
        g.tasks = g.tasks.filter(function (rt) {
            if (!rt || rt.id == null) return true;
            return retiredU10UoePrepLinkIds.indexOf(String(rt.id)) < 0;
        });
        if (g.tasks.length !== retireLen) changed = true;

        if (patchSeededTasks(g)) changed = true;

        /* Keep disk prep-link hrefs in sync with PREP_HUB_U10_UOE_SEEDS (e.g. course=cpe). */
        g.tasks = Array.isArray(g.tasks) ? g.tasks : [];
        var canonUoeById = {};
        taskmeta.defaultTasks.forEach(function (dt) {
            if (dt && dt.id) canonUoeById[String(dt.id)] = dt;
        });
        for (var uoeTi = 0; uoeTi < g.tasks.length; uoeTi++) {
            var uoeT = g.tasks[uoeTi];
            if (!uoeT || String(uoeT.kind || "") !== "prep-link" || uoeT.id == null) continue;
            var canon = canonUoeById[String(uoeT.id)];
            if (!canon || !canon.href) continue;
            if (String(uoeT.href || "") !== String(canon.href)) {
                uoeT.href = canon.href;
                changed = true;
            }
        }

        if (changed) PrepSiteContent.save(d);
    };

    /**
     * Level 10 — Listening parent + Part 4 nested folder (quad from registry).
     */
    W.ensurePrepUnit10ListeningNest = function () {
        if (typeof PrepSiteContent === "undefined" || !PrepSiteContent.load || !PrepSiteContent.save) return;
        var pack = typeof W !== "undefined" && W.PREP_HUB_U10_LISTENING_SEEDS;
        if (!pack) {
            try {
                console.warn("[Prep hub] Missing PREP_HUB_U10_LISTENING_SEEDS — load js/prep-hub-seeds-unit10-listening.js");
            } catch (eLs) {}
            return;
        }
        var lid = W.PREP_LEGACY_U10_LISTENING_FOLDER_ID;
        var p4id = W.PREP_LEGACY_U10_LISTENING_P4_FOLDER_ID;
        var part4meta = pack.part4;
        var fourIds = part4meta.taskIdsOrdered.slice();
        var hubSeedStrip = part4meta.hubSeedIdStrip;

        function patchPart4Tasks(fld) {
            fld.tasks = Array.isArray(fld.tasks) ? fld.tasks : [];
            var hasAll = fourIds.every(function (fid) {
                return fld.tasks.some(function (t) {
                    return t && String(t.id) === fid;
                });
            });
            if (hasAll) return false;
            fld.tasks = fld.tasks.filter(function (t) {
                if (!t) return false;
                var tid = String(t.id);
                if (tid === hubSeedStrip) return false;
                if (fourIds.indexOf(tid) >= 0) return false;
                return true;
            });
            fld.tasks.push(
                part4meta.defaultTasks[0],
                part4meta.defaultTasks[1],
                part4meta.defaultTasks[2],
                part4meta.defaultTasks[3]
            );
            return true;
        }

        var d = PrepSiteContent.load();
        d.folders = d.folders || [];
        var changed = false;

        var g = null;
        for (var gi = 0; gi < d.folders.length; gi++) {
            if (String(d.folders[gi].id == null ? "" : d.folders[gi].id) === String(lid)) {
                g = d.folders[gi];
                break;
            }
        }
        if (!g) {
            g = {
                id: lid,
                type: "folder",
                title: pack.folderListening.title,
                subtitle: pack.folderListening.subtitle,
                goal: "",
                linkedUnit: 10,
                sections: [],
                tasks: []
            };
            d.folders.push(g);
            changed = true;
        }
        if (g.parentFolderId) {
            delete g.parentFolderId;
            changed = true;
        }
        if (Number(g.linkedUnit) !== 10) {
            g.linkedUnit = 10;
            changed = true;
        }

        var spillP4 = [];
        var keepParent = [];
        (g.tasks || []).forEach(function (t) {
            if (!t || !t.id) return;
            var tid = String(t.id);
            if (fourIds.indexOf(tid) >= 0 || tid === String(hubSeedStrip)) {
                spillP4.push(t);
                changed = true;
                return;
            }
            keepParent.push(t);
        });
        if (keepParent.length !== (g.tasks || []).length) {
            g.tasks = keepParent;
        }

        var p4 = null;
        for (var pi = 0; pi < d.folders.length; pi++) {
            if (String(d.folders[pi].id == null ? "" : d.folders[pi].id) === String(p4id)) {
                p4 = d.folders[pi];
                break;
            }
        }
        if (!p4) {
            p4 = {
                id: p4id,
                type: "folder",
                title: part4meta.folderTitle,
                subtitle: part4meta.folderSubtitle,
                goal: "",
                linkedUnit: 10,
                parentFolderId: lid,
                sections: [],
                tasks: part4meta.defaultTasks.slice()
            };
            d.folders.push(p4);
            changed = true;
            if (prepMergeTasksUnique(p4, spillP4)) changed = true;
            if (patchPart4Tasks(p4)) changed = true;
        } else {
            if (String(p4.parentFolderId) !== String(lid)) {
                p4.parentFolderId = lid;
                changed = true;
            }
            if (Number(p4.linkedUnit) !== 10) {
                p4.linkedUnit = 10;
                changed = true;
            }
            if (prepMergeTasksUnique(p4, spillP4)) changed = true;
            if (patchPart4Tasks(p4)) changed = true;
        }

        if (changed) PrepSiteContent.save(d);
    };

    /**
     * Level 10 — Lexical games linked folder (empty tasks; opens vault flow).
     */
    W.ensurePrepUnit10LexicalGamesFolder = function () {
        if (typeof PrepSiteContent === "undefined" || !PrepSiteContent.load || !PrepSiteContent.save) return;
        var d = PrepSiteContent.load();
        d.folders = d.folders || [];
        var id = W.PREP_LEGACY_U10_LEXICAL_GAMES_FOLDER_ID;
        var launcherId = "u10_lexical_games_app";
        function stripLauncherTile(fld) {
            fld.tasks = Array.isArray(fld.tasks) ? fld.tasks : [];
            var next = fld.tasks.filter(function (t) {
                return !t || String(t.id) !== launcherId;
            });
            var changed = next.length !== fld.tasks.length;
            fld.tasks = next;
            return changed;
        }
        for (var i = 0; i < d.folders.length; i++) {
            if (String(d.folders[i].id == null ? "" : d.folders[i].id) !== String(id)) continue;
            var f = d.folders[i];
            if (f.linkedUnit !== 10) {
                f.linkedUnit = 10;
                PrepSiteContent.save(d);
            }
            if (stripLauncherTile(f)) PrepSiteContent.save(d);
            return;
        }
        d.folders.unshift({
            id: id,
            type: "folder",
            title: "Lexical games",
            subtitle: "Unit 10 · Listening Part 4 phrase bank (SB 10.1)",
            goal: "",
            linkedUnit: 10,
            sections: [],
            tasks: []
        });
        PrepSiteContent.save(d);
    };
})(typeof window !== "undefined" ? window : globalThis);
