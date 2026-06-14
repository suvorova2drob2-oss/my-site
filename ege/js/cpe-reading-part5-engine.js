/**
 * CPE Reading Part 5 — canonical engine (split layout + 6× MCQ + Evidence hunt).
 * Etalon shell: games/cpe/unit10/reading/
 * Styles: css/cpe-reading-part5-shell.css
 *
 * Global: CPE_READING_PART5.mountPage({ pack })
 * Every reading pack MUST include hunts[] — 6 tabs (Q1–Q6), evidence in paragraph.
 */
(function (W, D) {
    "use strict";

    var KEYS = ["A", "B", "C", "D"];

    function esc(text) {
        return String(text)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    function clearNode(el) {
        if (!el) return;
        while (el.firstChild) el.removeChild(el.firstChild);
    }

    function mk(tag, className, text) {
        var el = D.createElement(tag);
        if (className) el.className = className;
        if (typeof text === "string") el.textContent = text;
        return el;
    }

    function setText(id, text) {
        var el = D.getElementById(id);
        if (el && text != null && String(text).trim()) el.textContent = String(text);
    }

    function injectPassage(rootId, paragraphs, opts) {
        opts = opts || {};
        var root = D.getElementById(rootId || "passage-root");
        if (!root) return;
        if (opts.clear !== false) clearNode(root);
        if (!Array.isArray(paragraphs) || !paragraphs.length) return;
        paragraphs.forEach(function (html) {
            var wrap = mk("div");
            wrap.innerHTML = html;
            while (wrap.firstChild) root.appendChild(wrap.firstChild);
        });
    }

    function normalizeTapText(s) {
        return String(s || "")
            .replace(/\u2019|\u2018/g, "'")
            .replace(/\u201c|\u201d/g, '"')
            .replace(/\u2013|\u2014/g, "-");
    }

    function resolveTapPhrases(pack) {
        if (!pack) return [];
        if (Array.isArray(pack.tapPhrases) && pack.tapPhrases.length) {
            return pack.tapPhrases.slice();
        }
        if (pack.tapPhrasesGlobal && W[pack.tapPhrasesGlobal] && W[pack.tapPhrasesGlobal].length) {
            return W[pack.tapPhrasesGlobal].slice();
        }
        if (pack.lexisRowsGlobal && W[pack.lexisRowsGlobal]) {
            return (W[pack.lexisRowsGlobal] || [])
                .map(function (row) {
                    return { en: row.tap || row.ans, hint: row.hint || row.ru || "" };
                })
                .filter(function (p) {
                    return p.en;
                });
        }
        return [];
    }

    function collectPhraseMatches(text, sortedPhrases) {
        var s = normalizeTapText(String(text));
        var all = [];
        var i;
        var pair;
        var needle;
        var re;
        var m;
        var escNeedle;
        for (i = 0; i < sortedPhrases.length; i++) {
            pair = sortedPhrases[i];
            needle = normalizeTapText(String(pair.en || ""));
            if (!needle) continue;
            escNeedle = needle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            try {
                re = new RegExp(escNeedle, "gi");
            } catch (e0) {
                continue;
            }
            re.lastIndex = 0;
            while ((m = re.exec(s)) !== null) {
                if (!m[0].length) {
                    if (re.lastIndex === m.index) re.lastIndex++;
                    else break;
                    continue;
                }
                all.push({
                    start: m.index,
                    end: m.index + m[0].length,
                    hint: String(pair.hint || pair.ru || ""),
                });
            }
        }
        all.sort(function (a, b) {
            if (a.start !== b.start) return a.start - b.start;
            return b.end - b.start - (a.end - a.start);
        });
        var picked = [];
        var lastEnd = -1;
        var j;
        var x;
        for (j = 0; j < all.length; j++) {
            x = all[j];
            if (x.start >= lastEnd) {
                picked.push(x);
                lastEnd = x.end;
            }
        }
        return picked;
    }

    function wrapTapPlain(text, sortedPhrases) {
        var s = String(text || "");
        var sNorm = normalizeTapText(s);
        var picked = sortedPhrases.length ? collectPhraseMatches(sNorm, sortedPhrases) : [];
        var html = "";
        var pos = 0;
        var pi;
        var p;
        for (pi = 0; pi < picked.length; pi++) {
            p = picked[pi];
            if (p.start > pos) {
                html += esc(s.slice(pos, p.start));
            }
            html +=
                '<span class="cpe-r5-wtap" tabindex="0" role="button" data-hint="' +
                esc(p.hint) +
                '">' +
                esc(s.slice(p.start, p.end)) +
                "</span>";
            pos = p.end;
        }
        if (pos < s.length) {
            html += esc(s.slice(pos));
        }
        return html;
    }

    var passageTapDocBound = false;

    function ensurePassageWtip() {
        var tip = D.getElementById("cpe-r5-wtip");
        if (tip) return tip;
        tip = D.createElement("div");
        tip.id = "cpe-r5-wtip";
        tip.className = "cpe-r5-wtip";
        tip.hidden = true;
        D.body.appendChild(tip);
        return tip;
    }

    function closePassageWtip() {
        var tip = D.getElementById("cpe-r5-wtip");
        if (tip) tip.hidden = true;
    }

    function showPassageWtip(target) {
        var tip = ensurePassageWtip();
        var gloss = target.getAttribute("data-hint");
        if (gloss == null) return;
        tip.innerHTML =
            '<strong class="cpe-r5-wtip-phrase">' +
            esc(target.textContent) +
            "</strong>" +
            '<span class="cpe-r5-wtip-def">' +
            esc(gloss) +
            "</span>";
        tip.hidden = false;
        var r = target.getBoundingClientRect();
        var top = r.bottom + 8;
        var left = Math.max(8, Math.min(r.left, window.innerWidth - 280));
        if (top + 140 > window.innerHeight) {
            top = Math.max(8, r.top - 140);
        }
        tip.style.top = top + "px";
        tip.style.left = left + "px";
    }

    function bindPassageTapDocEvents() {
        if (passageTapDocBound) return;
        passageTapDocBound = true;
        D.addEventListener("click", function (ev) {
            var t = ev.target;
            if (t && t.closest && t.closest(".cpe-r5-wtap")) {
                showPassageWtip(t.closest(".cpe-r5-wtap"));
                ev.preventDefault();
                return;
            }
            if (ev.target.closest && ev.target.closest(".cpe-r5-wtip")) return;
            closePassageWtip();
        });
        D.addEventListener("keydown", function (ev) {
            if (ev.key !== "Enter" && ev.key !== " ") return;
            var t = ev.target;
            if (t && t.classList && t.classList.contains("cpe-r5-wtap")) {
                ev.preventDefault();
                showPassageWtip(t);
            }
        });
    }

    function mountPassageTapPhrases(rootId, phrases) {
        if (!phrases || !phrases.length) return;
        var root = D.getElementById(rootId || "passage-root");
        if (!root) return;
        var sorted = phrases.slice().sort(function (a, b) {
            return String(b.en || "").length - String(a.en || "").length;
        });
        var ps = root.querySelectorAll("p");
        for (var i = 0; i < ps.length; i++) {
            var text = ps[i].textContent || "";
            ps[i].innerHTML = wrapTapPlain(text, sorted);
        }
        bindPassageTapDocEvents();
        ensurePassageWtip();
    }

    function mountMcq(opts) {
        opts = opts || {};
        var pack = opts.data;
        if (!pack || !Array.isArray(pack.mcq) || !Array.isArray(pack.correct)) return null;

        var root = D.getElementById(opts.rootId || "mcq-root");
        var fb = D.getElementById(opts.feedbackId || "feedback");
        var btnCheck = D.getElementById(opts.checkBtnId || "btnCheck");
        var btnClear = D.getElementById(opts.clearBtnId || "btnClear");
        if (!root || !fb) return null;

        function clearMarks() {
            root.querySelectorAll(".opt-line").forEach(function (line) {
                line.classList.remove("ok", "bad-pick");
            });
        }

        function getChoice(i) {
            var el = root.querySelector('input[name="q' + i + '"]:checked');
            return el ? el.value : "";
        }

        function render() {
            clearNode(root);
            pack.mcq.forEach(function (item, qIdx) {
                var article = mk("article", "q");
                var stem = mk("p", "stem");
                stem.appendChild(mk("strong", "", String(qIdx + 1) + "."));
                stem.appendChild(D.createTextNode(" " + item.q));
                article.appendChild(stem);

                var ul = mk("ul", "opts");
                KEYS.forEach(function (k) {
                    if (!item.options || !item.options[k]) return;
                    var id = "q" + qIdx + k;
                    var li = mk("li", "opt-line");
                    li.dataset.q = String(qIdx);
                    li.dataset.k = k;

                    var input = D.createElement("input");
                    input.type = "radio";
                    input.name = "q" + qIdx;
                    input.value = k;
                    input.id = id;
                    input.addEventListener("change", function () {
                        clearMarks();
                        fb.textContent = "";
                        fb.innerHTML = "";
                    });

                    var label = D.createElement("label");
                    label.setAttribute("for", id);
                    label.appendChild(mk("span", "letter", k));
                    label.appendChild(D.createTextNode(" " + item.options[k]));

                    li.appendChild(input);
                    li.appendChild(label);
                    ul.appendChild(li);
                });
                article.appendChild(ul);
                root.appendChild(article);
            });
        }

        render();

        if (btnCheck) {
            btnCheck.addEventListener("click", function () {
                clearMarks();
                var n = pack.mcq.length;
                for (var i = 0; i < n; i++) {
                    if (!getChoice(i)) {
                        fb.textContent = "Choose A, B, C or D for every question, then check again.";
                        fb.innerHTML = "";
                        return;
                    }
                }
                var score = 0;
                for (var j = 0; j < n; j++) {
                    var pick = getChoice(j);
                    var ok = pick === pack.correct[j];
                    if (ok) score++;
                    var line = root.querySelector('.opt-line[data-q="' + j + '"][data-k="' + pick + '"]');
                    if (line) line.classList.add(ok ? "ok" : "bad-pick");
                    var correctLine = root.querySelector(
                        '.opt-line[data-q="' + j + '"][data-k="' + pack.correct[j] + '"]'
                    );
                    if (correctLine && !ok) correctLine.classList.add("ok");
                }
                fb.innerHTML =
                    score === n
                        ? "<strong>All " + n + " correct.</strong>"
                        : "Score: <strong>" +
                          score +
                          "</strong> / " +
                          n +
                          ". Green = correct; a red outline marks a wrong pick.";
            });
        }

        if (btnClear) {
            btnClear.addEventListener("click", function () {
                root.querySelectorAll('input[type="radio"]').forEach(function (r) {
                    r.checked = false;
                });
                clearMarks();
                fb.textContent = "";
                fb.innerHTML = "";
            });
        }

        return { render: render, clearMarks: clearMarks };
    }

    function stripPassageHtml(html) {
        var wrap = D.createElement("div");
        wrap.innerHTML = String(html || "");
        return wrap.textContent || "";
    }

    function evidenceChunks(hunt) {
        return (hunt.chunks || []).filter(function (c) {
            return c.sol === "e";
        });
    }

    function huntParagraphText(hunt, passageParagraphs) {
        if (hunt.paragraph) return normalizeTapText(stripPassageHtml(hunt.paragraph));
        if (
            hunt.paragraphIndex != null &&
            Array.isArray(passageParagraphs) &&
            passageParagraphs[hunt.paragraphIndex]
        ) {
            return normalizeTapText(stripPassageHtml(passageParagraphs[hunt.paragraphIndex]));
        }
        return "";
    }

    function buildEvidenceParagraphHtml(paragraphText, evidenceList, marks) {
        var raw = String(paragraphText || "");
        if (!raw) return "";
        var needles = [];
        var ei;
        for (ei = 0; ei < evidenceList.length; ei++) {
            var needle = normalizeTapText(evidenceList[ei].text || "");
            if (!needle || needles.indexOf(needle) >= 0) continue;
            if (normalizeTapText(raw).indexOf(needle) < 0) continue;
            needles.push(needle);
        }
        if (!needles.length) return esc(raw);
        needles.sort(function (a, b) {
            return b.length - a.length;
        });
        var parts = [{ text: raw, hit: null, evIdx: -1 }];
        needles.forEach(function (needle) {
            var hitIdx = -1;
            var hj;
            for (hj = 0; hj < evidenceList.length; hj++) {
                if (normalizeTapText(evidenceList[hj].text || "") === needle) {
                    hitIdx = hj;
                    break;
                }
            }
            var next = [];
            parts.forEach(function (part) {
                if (part.hit != null || part.text.indexOf(needle) < 0) {
                    next.push(part);
                    return;
                }
                var idx = part.text.indexOf(needle);
                if (idx > 0) next.push({ text: part.text.slice(0, idx), hit: null, evIdx: -1 });
                next.push({ text: needle, hit: needle, evIdx: hitIdx });
                if (idx + needle.length < part.text.length) {
                    next.push({ text: part.text.slice(idx + needle.length), hit: null, evIdx: -1 });
                }
            });
            parts = next;
        });
        var html = "";
        var pi;
        for (pi = 0; pi < parts.length; pi++) {
            if (parts[pi].hit != null && parts[pi].evIdx >= 0) {
                var marked = marks[parts[pi].evIdx];
                html +=
                    '<button type="button" class="hunt-ev-hit' +
                    (marked ? " is-marked" : "") +
                    '" data-ev="' +
                    String(parts[pi].evIdx) +
                    '">' +
                    esc(parts[pi].text) +
                    "</button>";
            } else {
                html += esc(parts[pi].text);
            }
        }
        return html;
    }

    function mountHunt(opts) {
        opts = opts || {};
        var HUNTS = opts.hunts;
        if (!Array.isArray(HUNTS) || !HUNTS.length) return null;

        var passageParagraphs = opts.passageParagraphs || [];

        var section = D.getElementById(opts.sectionId || "hunt-section");
        if (section) section.hidden = false;

        var huntQ = 0;
        var huntMarks = HUNTS.map(function (q) {
            return evidenceChunks(q).map(function () {
                return false;
            });
        });

        var huntTabs = D.getElementById(opts.tabsId || "huntTabs");
        var huntPrompt = D.getElementById(opts.promptId || "huntPrompt");
        var huntList = D.getElementById(opts.listId || "huntList");
        var huntFeedback = D.getElementById(opts.feedbackId || "huntFeedback");
        var huntExplain = D.getElementById(opts.explainId || "huntExplain");
        var huntExplainList = D.getElementById(opts.explainListId || "huntExplainList");
        var brushE = D.getElementById(opts.brushEId || "huntBrushE");
        var brushD = D.getElementById(opts.brushDId || "huntBrushD");
        var brushX = D.getElementById(opts.brushXId || "huntBrushX");
        var huntTools = section ? section.querySelector(".hunt-tools, .cpe-r5-hunt-tools") : null;
        var btnCheck = D.getElementById(opts.checkId || "huntCheck");
        var btnClear = D.getElementById(opts.clearId || "huntClear");

        if (!huntTabs || !huntPrompt || !huntList || !huntFeedback) return null;

        if (brushD) brushD.hidden = true;
        if (brushE) brushE.hidden = true;
        if (brushX) brushX.hidden = true;
        if (huntTools) huntTools.hidden = true;

        function usesParagraphMode(q) {
            return !!huntParagraphText(q, passageParagraphs);
        }

        function renderTabs() {
            clearNode(huntTabs);
            HUNTS.forEach(function (_, i) {
                var tab = mk("button", "hunt-tab" + (i === huntQ ? " active" : ""), "Q" + (i + 1));
                tab.type = "button";
                tab.dataset.q = String(i);
                tab.addEventListener("click", function () {
                    huntQ = Number(tab.dataset.q);
                    huntFeedback.textContent = "";
                    if (huntExplain) huntExplain.hidden = true;
                    renderTabs();
                    renderHunt();
                });
                huntTabs.appendChild(tab);
            });
        }

        function bindEvidenceHits(container) {
            container.querySelectorAll(".hunt-ev-hit").forEach(function (btn) {
                btn.addEventListener("click", function () {
                    var idx = Number(btn.getAttribute("data-ev"));
                    if (isNaN(idx)) return;
                    btn.classList.remove("hunt-bad");
                    huntMarks[huntQ][idx] = !huntMarks[huntQ][idx];
                    huntFeedback.textContent = "";
                    if (huntExplain) huntExplain.hidden = true;
                    renderHunt();
                });
            });
        }

        function renderParagraphHunt(q) {
            var ev = evidenceChunks(q);
            var para = huntParagraphText(q, passageParagraphs);
            huntList.className = (huntList.className || "")
                .replace(/\bhunt-list\b/g, "")
                .replace(/\bcpe-r5-hunt-list\b/g, "")
                .trim();
            if (huntList.className.indexOf("hunt-passage") < 0) {
                huntList.className = (huntList.className + " hunt-passage cpe-r5-hunt-passage").trim();
            }
            huntList.innerHTML = buildEvidenceParagraphHtml(para, ev, huntMarks[huntQ]);
            bindEvidenceHits(huntList);
        }

        function renderEvidenceListHunt(q) {
            var ev = evidenceChunks(q);
            huntList.className = (huntList.className || "")
                .replace(/\bhunt-passage\b/g, "")
                .replace(/\bcpe-r5-hunt-passage\b/g, "")
                .trim();
            if (huntList.className.indexOf("hunt-list") < 0) {
                huntList.className = (huntList.className + " hunt-list cpe-r5-hunt-list").trim();
            }
            clearNode(huntList);
            ev.forEach(function (chunk, i) {
                var cls = "hunt-hit hunt-ev-hit" + (huntMarks[huntQ][i] ? " is-marked is-evidence" : "");
                var btn = mk("button", cls, chunk.text);
                btn.type = "button";
                btn.dataset.ev = String(i);
                btn.addEventListener("click", function () {
                    var idx = Number(btn.dataset.ev);
                    btn.classList.remove("hunt-bad");
                    huntMarks[huntQ][idx] = !huntMarks[huntQ][idx];
                    huntFeedback.textContent = "";
                    if (huntExplain) huntExplain.hidden = true;
                    renderHunt();
                });
                huntList.appendChild(btn);
            });
        }

        function renderHunt() {
            var q = HUNTS[huntQ];
            huntPrompt.textContent = q.prompt;
            if (usesParagraphMode(q)) renderParagraphHunt(q);
            else renderEvidenceListHunt(q);
        }

        function showExplain(qi) {
            if (!huntExplain || !huntExplainList) return;
            var q = HUNTS[qi];
            clearNode(huntExplainList);
            evidenceChunks(q).forEach(function (chunk) {
                var li = D.createElement("li");
                li.appendChild(mk("span", "hunt-label e", "Evidence"));
                li.appendChild(D.createTextNode(chunk.text));
                li.appendChild(D.createElement("br"));
                var whySpan = mk("span", "", chunk.why);
                whySpan.style.color = "#9ec2e8";
                li.appendChild(whySpan);
                huntExplainList.appendChild(li);
            });
            huntExplain.hidden = false;
        }

        function checkHunt() {
            var q = HUNTS[huntQ];
            var marks = huntMarks[huntQ];
            var ev = evidenceChunks(q);
            var bad = 0;
            var missing = 0;
            huntList.querySelectorAll(".hunt-ev-hit").forEach(function (btn) {
                btn.classList.remove("hunt-bad");
            });
            for (var i = 0; i < ev.length; i++) {
                if (!marks[i]) {
                    missing++;
                    bad++;
                    var missEl = huntList.querySelector('.hunt-ev-hit[data-ev="' + i + '"]');
                    if (missEl) missEl.classList.add("hunt-bad");
                }
            }
            if (!bad) {
                huntFeedback.textContent =
                    "Correct — you highlighted all the evidence in this paragraph.";
                showExplain(huntQ);
            } else {
                if (huntExplain) huntExplain.hidden = true;
                huntFeedback.textContent =
                    missing === ev.length
                        ? "Tap the phrase(s) in the paragraph that support the answer, then check again."
                        : "Almost — highlight every evidence phrase (yellow outline = still missing).";
            }
        }

        function clearHuntQuestion() {
            huntMarks[huntQ] = huntMarks[huntQ].map(function () {
                return false;
            });
            huntFeedback.textContent = "";
            if (huntExplain) huntExplain.hidden = true;
            renderHunt();
        }

        if (btnCheck) btnCheck.addEventListener("click", checkHunt);
        if (btnClear) btnClear.addEventListener("click", clearHuntQuestion);

        renderTabs();
        renderHunt();
        return { renderTabs: renderTabs, renderHunt: renderHunt };
    }

    function mountQuickDictionary(pack, opts) {
        opts = opts || {};
        if (typeof W.CPE_QUICK_DICTIONARY === "undefined" || !W.CPE_QUICK_DICTIONARY.mount) return null;
        var qd = pack.quickDict || {};
        var mountOpts = {
            side: qd.side || opts.dictSide || "right",
            prefix: qd.prefix || opts.dictPrefix || "u12-r5-qdict",
            rowsGlobal: qd.rowsGlobal || pack.lexisRowsGlobal,
            rows: qd.rows || pack.quickDictRows,
            lede: qd.lede || pack.quickDictLede,
            groupHeadings: qd.groupHeadings,
        };
        if (!mountOpts.rows && !mountOpts.rowsGlobal) return null;
        return W.CPE_QUICK_DICTIONARY.mount(mountOpts);
    }

    function mountPage(opts) {
        opts = opts || {};
        var pack = opts.pack;
        if (!pack) return null;

        setText("page-tag", pack.unitTag || pack.tag || "");
        setText("page-title", pack.title || "");
        setText(
            "page-lead",
            pack.lead ||
                "Article + six multiple-choice questions. Text on the left, options on the right."
        );
        setText(
            "page-instr",
            pack.instr ||
                pack.blurb ||
                "For questions 1–6, choose the answer (A, B, C or D) which you think fits best according to the text."
        );
        setText("passage-head-title", pack.passageHead || pack.title || "");
        setText(
            "passage-head-hint",
            pack.passageHeadHint || "Read and locate evidence before checking."
        );

        if (!opts.skipPassage && Array.isArray(pack.passage) && pack.passage.length) {
            var passageRootId = opts.passageRootId || "passage-root";
            injectPassage(passageRootId, pack.passage, { clear: true });
            mountPassageTapPhrases(passageRootId, resolveTapPhrases(pack));
        }

        var mcqApi = mountMcq({
            data: { mcq: pack.mcq, correct: pack.correct },
            rootId: opts.mcqRootId,
            feedbackId: opts.feedbackId,
            checkBtnId: opts.checkBtnId,
            clearBtnId: opts.clearBtnId,
        });

        var huntApi = null;
        if (Array.isArray(pack.hunts) && pack.hunts.length) {
            huntApi = mountHunt({
                hunts: pack.hunts,
                passageParagraphs: pack.passage || [],
            });
        } else {
            var huntSection = D.getElementById("hunt-section");
            if (huntSection) huntSection.hidden = false;
            var huntFbMissing = D.getElementById("huntFeedback");
            if (huntFbMissing) {
                huntFbMissing.textContent =
                    "Evidence hunt: add hunts[] (6 question tabs) to this reading data pack.";
            }
            try {
                console.warn(
                    "[CPE Reading Part 5] hunts[] is required — 6 evidence tabs, one per MCQ item."
                );
            } catch (eHuntWarn) {}
        }

        mountQuickDictionary(pack, opts);

        return { mcq: mcqApi, hunt: huntApi };
    }

    W.CPE_READING_PART5 = {
        mountPage: mountPage,
        mountMcq: mountMcq,
        mountHunt: mountHunt,
        injectPassage: injectPassage,
    };
    W.CPE_READING_PART5_MCQ = { mount: mountMcq };
})(typeof window !== "undefined" ? window : globalThis, typeof document !== "undefined" ? document : null);
