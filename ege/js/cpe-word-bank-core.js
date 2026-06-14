/**
 * CPE Word Bank engine — themes, render, Memrise-style marks (extracted from index.html).
 * Depends on: lexical-games-plain-row-kit.js, u9Fall* helpers, LEX_* / U10 / U12 builders in index.html.
 */
var CPE_WB_KEY = 'masteringCpeWordBankV1';
var cpeWbTheme = 'robots';
var cpeWbFilter = 'all';
var cpeWbSort = 'dueFirst';
var cpeWbState = {};
var cpeWbReady = false;
var cpeWbCache = null;
var CPE_WB_STEPS = [1, 2, 4, 7, 14, 30];

function cpeWbLoadState() {
    try {
        var raw = localStorage.getItem(CPE_WB_KEY);
        cpeWbState = raw ? JSON.parse(raw) : {};
    } catch (e) {
        cpeWbState = {};
    }
}

function cpeWbSaveState() {
    localStorage.setItem(CPE_WB_KEY, JSON.stringify(cpeWbState));
}

function cpeWbNorm(s) {
    return String(s || '').toLowerCase().replace(/[^a-z0-9'\s-]/g, ' ').replace(/\s+/g, ' ').trim();
}

function cpeWbEsc(s) {
    return String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function cpeWbGet(id) {
    return cpeWbState[id] || { mark: '', streak: 0, nextAt: 0 };
}

function cpeWbDueNow(id) {
    var r = cpeWbGet(id);
    return !r.nextAt || r.nextAt <= Date.now();
}

function cpeWbDueLabel(id) {
    var r = cpeWbGet(id);
    if (!r.nextAt || r.nextAt <= Date.now()) return 'Due now';
    var days = Math.ceil((r.nextAt - Date.now()) / 86400000);
    return 'Next review in ' + days + 'd';
}

function cpeWbMark(id, mark) {
    if (mark === 'reset') {
        delete cpeWbState[id];
        cpeWbSaveState();
        return;
    }
    var old = cpeWbGet(id);
    if (mark === 'know') {
        var streak = Math.max(0, Number(old.streak || 0)) + 1;
        var stepIdx = Math.min(CPE_WB_STEPS.length - 1, streak - 1);
        cpeWbState[id] = {
            mark: 'know',
            streak: streak,
            nextAt: Date.now() + CPE_WB_STEPS[stepIdx] * 86400000
        };
    } else {
        cpeWbState[id] = {
            mark: 'learn',
            streak: 0,
            nextAt: Date.now()
        };
    }
    cpeWbSaveState();
}

function cpeWbBuildRobotsItems() {
    var pj = u9FallPassagePlain('u9v-reading');
    var pv = u9FallPassagePlain('u9val-reading');
    var pp = u9FallPassagePlain('u9pho-reading');
    var pr = u9FallPassagePlain('u9ric-reading');
    var pk = u9FallPassagePlain('u9kik-reading');
    var rows = []
        .concat(u9FallZipTasksWithSpeaker(u9LexJackTasks(), u9FallScrapePhrases('u9v-reading', '.u9v-click'), 'A Jack', pj))
        .concat(u9FallZipTasksWithSpeaker(u9LexValTasks(), u9FallScrapePhrases('u9val-reading', '.u9val-click'), 'B Valentina', pv))
        .concat(u9FallZipTasksWithSpeaker(u9LexPhoTasks(), u9FallScrapePhrases('u9pho-reading', '.u9pho-click'), 'C Phoebe', pp))
        .concat(u9FallZipTasksWithSpeaker(u9LexRicTasks(), u9FallScrapePhrases('u9ric-reading', '.u9ric-click'), 'D Richard', pr))
        .concat(u9FallZipTasksWithSpeaker(u9LexKikTasks(), u9FallScrapePhrases('u9kik-reading', '.u9kik-click'), 'E Kiki', pk));
    return rows
        .filter(function (x) { return !!(x && x.ans); })
        .map(function (x, i) {
            return {
                id: 'robots::' + i + '::' + x.speaker + '::' + x.ans,
                phrase: x.ans,
                hint: x.syn || '',
                speaker: x.speaker || 'Reading'
            };
        });
}

function cpeWbBuildIdiomsItems() {
    return LEX_IDIOM_DATA.map(function (d, i) {
        return {
            id: 'idioms::' + i + '::' + d.ans,
            phrase: d.ans,
            hint: d.hint || '',
            speaker: 'Idioms'
        };
    });
}

function cpeWbBuildListeningItems() {
    var rows = LEX_LISTEN_DATA.map(function (d, i) {
        return {
            id: 'listening::' + i + '::' + d.ans,
            phrase: d.ans,
            hint: d.hint || '',
            speaker: 'Listening'
        };
    });
    for (var j = 0; j < U9_LISTEN_SC_DATA.length; j++) {
        var s = U9_LISTEN_SC_DATA[j];
        rows.push({
            id: 'listening::sc::' + j + '::' + s.ans,
            phrase: s.ans,
            hint: s.hint || '',
            speaker: 'Listening (sentence completion)'
        });
    }
    return rows;
}

function cpeWbBuildMindsEyeItems() {
    if (typeof U9_MINDS_EYE_WB_LEAD === 'undefined' || !U9_MINDS_EYE_WB_LEAD.length) return [];
    var sp = "Listening: Painting with the mind's eye";
    var rows = [];
    for (var l = 0; l < U9_MINDS_EYE_WB_LEAD.length; l++) {
        var ld = U9_MINDS_EYE_WB_LEAD[l];
        if (!ld || !ld.phrase) continue;
        var para = String(ld.paraphrase != null ? ld.paraphrase : ld.hint || '').trim();
        var gru = String(ld.glossRu != null ? ld.glossRu : '').trim();
        var hint = gru ? para + ' \u2014 ' + gru : para;
        rows.push({
            id: 'minds_eye::wb::' + l + '::' + String(ld.phrase || ''),
            phrase: String(ld.phrase || '').trim(),
            hint: hint,
            speaker: sp
        });
    }
    return rows;
}

function cpeWbBuildPrepItems() {
    return LEX_PREP_PHRASE_DATA.map(function (d, i) {
        return {
            id: 'prep::' + i + '::' + d.ans,
            phrase: d.ans,
            hint: d.hint || '',
            speaker: LEX_PREP_SPEAKER_LABEL
        };
    });
}

function cpeWbBuildInteriorItems() {
    var C = typeof INTERIOR_DESIGN_VOCAB_CORE !== 'undefined' ? INTERIOR_DESIGN_VOCAB_CORE : null;
    var sp = C && C.lexicalGamesSpeaker ? C.lexicalGamesSpeaker : 'Interior design: Art & architecture';
    var items =
        C && C.treasureHuntRounds && C.treasureHuntRounds[0] && C.treasureHuntRounds[0].items
            ? C.treasureHuntRounds[0].items
            : [];
    return items.map(function (d, i) {
        var hint = d.paraphrase || '';
        if (d.paraphraseRu) {
            hint = hint + ' \u2014 ' + d.paraphraseRu;
        }
        return {
            id: 'interior::' + i + '::' + d.phrase,
            phrase: d.phrase,
            hint: hint,
            speaker: sp
        };
    });
}

function cpeWbBuildArtRestItems() {
    if (typeof ART_REST_LISTEN_DATA === 'undefined' || !ART_REST_LISTEN_DATA.length) return [];
    var sp =
        typeof LEX_ART_REST_SPEAKER === 'string' ? LEX_ART_REST_SPEAKER : 'Listening: Art restoration';
    return ART_REST_LISTEN_DATA.map(function (d, i) {
        return {
            id: 'artrest::' + i + '::' + d.ans,
            phrase: d.keyword,
            hint: d.definition || '',
            /** Transcript key phrase — used in Prep vault matching (enrich) and dedup, not the Word Bank title. */
            matchPhrase: d.ans,
            speaker: sp
        };
    });
}

function cpeWbBuildContemporaryArtItems() {
    if (typeof U9_MUST_KNOW_ITEMS === 'undefined' || !U9_MUST_KNOW_ITEMS.length) return [];
    var sp = U9_MUST_KNOW_SPEAKER || 'Contemporary art';
    return U9_MUST_KNOW_ITEMS.map(function (x, i) {
        return {
            id: 'mustknow::' + i + '::' + String(x.phrase || ''),
            phrase: x.phrase,
            hint: x.hint || '',
            speaker: sp
        };
    });
}

function cpeWbBuildU10P4Items() {
    var spP4 =
        typeof LEX_U10_P4_SPEAKER_LABEL === 'string'
            ? LEX_U10_P4_SPEAKER_LABEL
            : 'Listening: Part 4 · Unit 10 (SB 10.1)';
    var plain = u10P4LexPlainText();
    if (!plain || typeof U10_P4_LEXIS_GAME_ROWS === 'undefined' || !U10_P4_LEXIS_GAME_ROWS.length) {
        return [];
    }
    return lexicalGamesHintAnsRowsToWordBankItems(plain, U10_P4_LEXIS_GAME_ROWS, spP4, 'u10p4');
}

function cpeWbBuildU10BooksItems() {
    var spBf =
        typeof LEX_U10_BOOKS_FILMS_SPEAKER_LABEL === 'string'
            ? LEX_U10_BOOKS_FILMS_SPEAKER_LABEL
            : 'Unit 10 · Describing books & films';
    var plain = u10BooksFilmsLexPlainText();
    if (!plain || typeof U10_BOOKS_FILMS_LEXIS_GAME_ROWS === 'undefined' || !U10_BOOKS_FILMS_LEXIS_GAME_ROWS.length) {
        return [];
    }
    return lexicalGamesHintAnsRowsToWordBankItems(plain, U10_BOOKS_FILMS_LEXIS_GAME_ROWS, spBf, 'u10bf');
}

function cpeWbBuildU10ShakespeareItems() {
    var spSh =
        typeof LEX_U10_UOE_SHAKESPEARE_SPEAKER_LABEL === 'string'
            ? LEX_U10_UOE_SHAKESPEARE_SPEAKER_LABEL
            : 'Shakespeare · Use of English';
    var plainSh = u10ShakespeareLexPlainText();
    if (!plainSh || typeof U10_UOE_SHAKESPEARE_LEXIS_GAME_ROWS === 'undefined' || !U10_UOE_SHAKESPEARE_LEXIS_GAME_ROWS.length) {
        return [];
    }
    return lexicalGamesHintAnsRowsToWordBankItems(plainSh, U10_UOE_SHAKESPEARE_LEXIS_GAME_ROWS, spSh, 'u10shak');
}

function cpeWbBuildU10SimilesItems() {
    var spSm =
        typeof LEX_U10_SIMILES_SPEAKER_LABEL === 'string'
            ? LEX_U10_SIMILES_SPEAKER_LABEL
            : 'Unit 10 · Similes';
    var plainSm = u10SimilesLexPlainText();
    if (!plainSm || typeof U10_SIMILES_LEXIS_GAME_ROWS === 'undefined' || !U10_SIMILES_LEXIS_GAME_ROWS.length) {
        return [];
    }
    return lexicalGamesHintAnsRowsToWordBankItems(plainSm, U10_SIMILES_LEXIS_GAME_ROWS, spSm, 'u10sim');
}

/** Lazy Word Bank rows — build only the theme requested (opening lexical hub used to block on every theme at once). */
function cpeWbEnsureThemeBuilt(theme) {
    var t = theme || 'robots';
    if (!cpeWbCache) {
        cpeWbCache = {};
    }
    if (Object.prototype.hasOwnProperty.call(cpeWbCache, t)) {
        return;
    }
    var rows;
    switch (t) {
        case 'robots':
            rows = cpeWbBuildRobotsItems();
            break;
        case 'idioms':
            rows = cpeWbBuildIdiomsItems();
            break;
        case 'listening':
            rows = cpeWbBuildListeningItems();
            break;
        case 'minds_eye':
            rows = cpeWbBuildMindsEyeItems();
            break;
        case 'prep':
            rows = cpeWbBuildPrepItems();
            break;
        case 'interior':
            rows = cpeWbBuildInteriorItems();
            break;
        case 'art_restoration':
            rows = cpeWbBuildArtRestItems();
            break;
        case 'contemporary_art':
            rows = cpeWbBuildContemporaryArtItems();
            break;
        case 'u10_p4':
            rows = cpeWbBuildU10P4Items();
            break;
        case 'u10_books':
            rows = cpeWbBuildU10BooksItems();
            break;
        case 'u10_uoe_shakespeare':
            rows = cpeWbBuildU10ShakespeareItems();
            break;
        case 'u10_similes':
            rows = cpeWbBuildU10SimilesItems();
            break;
        case 'u12_reading_road_to_betterment':
            rows = typeof cpeWbBuildU12ReadingItems === 'function' ? cpeWbBuildU12ReadingItems() : [];
            break;
        case 'u12_sports_idioms':
            rows = typeof cpeWbBuildU12SportsItems === 'function' ? cpeWbBuildU12SportsItems() : [];
            break;
        case 'u12_multi_word_verbs':
            rows = typeof cpeWbBuildU12MultiWordVerbsItems === 'function' ? cpeWbBuildU12MultiWordVerbsItems() : [];
            break;
        case 'u12_listening_disabled_access':
            rows = typeof cpeWbBuildU12ListeningItems === 'function' ? cpeWbBuildU12ListeningItems() : [];
            break;
        default:
            rows = [];
    }
    cpeWbCache[t] = rows;
}

function cpeWbItems(theme) {
    cpeWbEnsureThemeBuilt(theme);
    return (cpeWbCache[theme || 'robots'] || []).slice();
}

function cpeWordBankRender() {
    var list = document.getElementById('cpe-wb-list');
    var stats = document.getElementById('cpe-wb-stats');
    var search = document.getElementById('cpe-wb-search');
    var sortSel = document.getElementById('cpe-wb-sort');
    if (!list || !stats || !search || !sortSel) return;

    var data = cpeWbItems(cpeWbTheme);
    var q = cpeWbNorm(search.value || '');
    var base = cpeWbFilter === 'due' ? data.filter(function (x) { return cpeWbDueNow(x.id); }) : data;
    var filtered = q
        ? base.filter(function (x) {
              return cpeWbNorm(x.phrase + ' ' + x.hint + ' ' + x.speaker).indexOf(q) !== -1;
          })
        : base;

    function cpeWbU12PackGroupRank(group, orderGlobal) {
        var order =
            typeof orderGlobal !== 'undefined' && orderGlobal.length ? orderGlobal : [];
        var g = String(group || '');
        for (var gri = 0; gri < order.length; gri++) {
            if (order[gri] === g) return gri;
        }
        return 99;
    }
    filtered.sort(function (a, b) {
        if (cpeWbTheme === 'u12_sports_idioms') {
            var ga = cpeWbU12PackGroupRank(a.group, U12_SPORTS_IDIOMS_GROUP_ORDER);
            var gb = cpeWbU12PackGroupRank(b.group, U12_SPORTS_IDIOMS_GROUP_ORDER);
            if (ga !== gb) return ga - gb;
        }
        if (cpeWbTheme === 'u12_multi_word_verbs') {
            var gma = cpeWbU12PackGroupRank(a.group, U12_MULTI_WORD_VERBS_GROUP_ORDER);
            var gmb = cpeWbU12PackGroupRank(b.group, U12_MULTI_WORD_VERBS_GROUP_ORDER);
            if (gma !== gmb) return gma - gmb;
        }
        if (cpeWbTheme === 'u12_listening_disabled_access') {
            var gla = cpeWbU12PackGroupRank(a.group, U12_LISTENING_DISABLED_ACCESS_GROUP_ORDER);
            var glb = cpeWbU12PackGroupRank(b.group, U12_LISTENING_DISABLED_ACCESS_GROUP_ORDER);
            if (gla !== glb) return gla - glb;
        }
        if (cpeWbSort === 'alpha') return a.phrase.localeCompare(b.phrase);
        var ad = cpeWbDueNow(a.id) ? 0 : 1;
        var bd = cpeWbDueNow(b.id) ? 0 : 1;
        if (ad !== bd) return ad - bd;
        return a.phrase.localeCompare(b.phrase);
    });

    var know = 0;
    var learn = 0;
    var i;
    for (i = 0; i < filtered.length; i++) {
        var m = cpeWbGet(filtered[i].id).mark;
        if (m === 'know') know++;
        else if (m === 'learn') learn++;
    }
    var due = data.filter(function (x) { return cpeWbDueNow(x.id); }).length;
    var unmarked = filtered.length - know - learn;

    stats.textContent =
        'Theme: ' +
        (cpeWbTheme === 'robots'
            ? 'Reading: The robots are taking over'
            : cpeWbTheme === 'contemporary_art'
              ? (typeof U9_MUST_KNOW_SPEAKER === 'string' ? U9_MUST_KNOW_SPEAKER : 'Contemporary art')
              : cpeWbTheme === 'listening'
                ? 'Listening: Making a mark'
                : cpeWbTheme === 'minds_eye'
                  ? "Listening: Painting with the mind's eye (Track 10)"
                : cpeWbTheme === 'prep'
                  ? LEX_PREP_SPEAKER_LABEL
                  : cpeWbTheme === 'interior'
                    ? typeof INTERIOR_DESIGN_VOCAB_CORE !== 'undefined' &&
                      INTERIOR_DESIGN_VOCAB_CORE.lexicalGamesSpeaker
                      ? INTERIOR_DESIGN_VOCAB_CORE.lexicalGamesSpeaker
                      : 'Interior design: Art & architecture'
                    : cpeWbTheme === 'art_restoration'
                      ? typeof LEX_ART_REST_SPEAKER === 'string'
                        ? LEX_ART_REST_SPEAKER
                        : 'Listening: Art restoration'
                      : cpeWbTheme === 'u10_p4'
                        ? 'Unit 10 · Listening Part 4 (SB 10.1)'
                        : cpeWbTheme === 'u10_books'
                          ? 'Unit 10 · Describing books & films'
                          : cpeWbTheme === 'u10_uoe_shakespeare'
                            ? 'Unit 10 · Shakespeare · Use of English'
                            : cpeWbTheme === 'u10_similes'
                              ? 'Unit 10 · Similes'
                              : cpeWbTheme === 'u12_reading_road_to_betterment'
                                ? 'Unit 12 · The Road to Betterment (Reading)'
                                : cpeWbTheme === 'u12_sports_idioms'
                                  ? 'Unit 12 · Sports idioms'
                                  : cpeWbTheme === 'u12_multi_word_verbs'
                                    ? 'Unit 12 · Multi-word verbs'
                                    : cpeWbTheme === 'u12_listening_disabled_access'
                                    ? 'Unit 12 · Listening (Track 12.1)'
                                    : 'Idioms: Art and creativity') +
        ' · Total: ' +
        filtered.length +
        ' · Due now: ' +
        due +
        ' · I know: ' +
        know +
        ' · Learning: ' +
        learn +
        ' · Unmarked: ' +
        unmarked;

    function cpeWbItemHtml(x) {
        var rec = cpeWbGet(x.id);
        var mark = rec.mark === 'know' ? 'I know' : rec.mark === 'learn' ? 'Learning' : 'Unmarked';
        return (
            '<li class="wb-item">' +
            '<div class="phrase">' +
            cpeWbEsc(x.phrase) +
            '</div>' +
            '<div class="hint">' +
            cpeWbEsc(x.hint) +
            '</div>' +
            '<div class="meta"><span class="status">' +
            mark +
            ' · ' +
            cpeWbDueLabel(x.id) +
            '</span><div class="act">' +
            '<button class="wb-mark-btn know" type="button" data-cpe-wb-mark="know" data-cpe-wb-id="' +
            cpeWbEsc(x.id) +
            '">Know</button>' +
            '<button class="wb-mark-btn learn" type="button" data-cpe-wb-mark="learn" data-cpe-wb-id="' +
            cpeWbEsc(x.id) +
            '">Learning</button>' +
            '<button class="wb-mark-btn reset" type="button" data-cpe-wb-mark="reset" data-cpe-wb-id="' +
            cpeWbEsc(x.id) +
            '">Reset</button>' +
            '</div></div>' +
            '</li>'
        );
    }
    if (
        cpeWbTheme === 'u12_sports_idioms' ||
        cpeWbTheme === 'u12_multi_word_verbs' ||
        cpeWbTheme === 'u12_listening_disabled_access'
    ) {
        var wbHtml = '';
        var lastGrp = '';
        for (var wbi = 0; wbi < filtered.length; wbi++) {
            var gx = filtered[wbi];
            var grp = String(gx.group || '').trim();
            if (grp && grp !== lastGrp) {
                wbHtml += '<li class="wb-group-head">' + cpeWbEsc(grp) + '</li>';
                lastGrp = grp;
            }
            wbHtml += cpeWbItemHtml(gx);
        }
        list.innerHTML = wbHtml || '<li class="wb-item">No matches.</li>';
    } else {
        list.innerHTML =
            filtered.map(cpeWbItemHtml).join('') || '<li class="wb-item">No matches.</li>';
    }
}

function cpeWordBankEnsureBind() {
    if (cpeWbReady) return;
    cpeWbReady = true;
    cpeWbLoadState();

    document.addEventListener('click', function (e) {
        var u10Tab = e.target.closest('#cpe-wb-u10-tabs .wb-u10-tab');
        if (u10Tab) {
            var pack = u10Tab.getAttribute('data-u10-wb-tab');
            if (pack === 'p4' || pack === 'books' || pack === 'shakespeare' || pack === 'similes') {
                u10LexPackTabSelect(pack);
                cpeWordBankRender();
            }
            return;
        }

        var u12Tab = e.target.closest('#cpe-wb-u12-tabs .wb-u12-tab');
        if (u12Tab) {
            var pack12 = u12Tab.getAttribute('data-u12-wb-tab');
            if (pack12 === 'reading' || pack12 === 'mwv' || pack12 === 'sports' || pack12 === 'listening') {
                u12LexPackTabSelect(pack12);
                cpeWordBankRender();
            }
            return;
        }

        var themeBtn = e.target.closest('#screen-unit9-wordbank .wb-theme-btn');
        if (themeBtn) {
            cpeWbTheme = themeBtn.getAttribute('data-cpe-wb-theme') || 'robots';
            var allTheme = document.querySelectorAll('#screen-unit9-wordbank .wb-theme-btn');
            for (var i = 0; i < allTheme.length; i++) {
                allTheme[i].classList.toggle('active', allTheme[i] === themeBtn);
            }
            cpeWordBankRender();
            return;
        }

        var filterBtn = e.target.closest('#screen-unit9-wordbank .wb-repeat-btn');
        if (filterBtn) {
            cpeWbFilter = filterBtn.getAttribute('data-cpe-wb-filter') || 'all';
            var allFilter = document.querySelectorAll('#screen-unit9-wordbank .wb-repeat-btn');
            for (var j = 0; j < allFilter.length; j++) {
                allFilter[j].classList.toggle('active', allFilter[j] === filterBtn);
            }
            cpeWordBankRender();
            return;
        }

        var markBtn = e.target.closest('#screen-unit9-wordbank .wb-mark-btn');
        if (markBtn) {
            var id = markBtn.getAttribute('data-cpe-wb-id') || '';
            var mark = markBtn.getAttribute('data-cpe-wb-mark') || '';
            if (id && mark) {
                cpeWbMark(id, mark);
                cpeWordBankRender();
            }
        }
    });

    document.addEventListener('input', function (e) {
        if (e.target && e.target.id === 'cpe-wb-search') cpeWordBankRender();
    });
    document.addEventListener('change', function (e) {
        if (e.target && e.target.id === 'cpe-wb-sort') {
            cpeWbSort = e.target.value || 'dueFirst';
            cpeWordBankRender();
        }
    });
}
