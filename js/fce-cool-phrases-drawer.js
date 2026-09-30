/**
 * Generic Cool Words / Phrases FAB + right drawer (Unit 1 lifestyle & clothes).
 * window.FCE_COOL_PHRASES_DRAWER.mount(opts) · unmount(id)
 */
(function (W) {
  "use strict";

  var mounted = Object.create(null);

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function listHtml(spk) {
    var rows = (spk && spk.phrases) || [];
    if (!rows.length) return '<p class="fce-u1-ph-empty">No phrases.</p>';
    var html = '<ul class="fce-u1-ph-list">';
    var lastGroup = "";
    var i;
    for (i = 0; i < rows.length; i++) {
      var p = rows[i];
      var group = p.group ? String(p.group) : "";
      if (group && group !== lastGroup) {
        html +=
          '<li class="fce-u1-ph-group" role="presentation">' +
          esc(group) +
          "</li>";
        lastGroup = group;
      }
      html +=
        '<li class="fce-u1-ph-item">' +
        '<p class="fce-u1-ph-en">' +
        esc(p.en) +
        "</p>";
      if (p.ru) {
        html += '<p class="fce-u1-ph-ru">' + esc(p.ru) + "</p>";
      }
      if (p.context) {
        html +=
          '<p class="fce-u1-ph-ctx"><span class="fce-u1-ph-k">In the text</span> ' +
          esc(p.context) +
          "</p>";
      }
      if (p.tip) {
        html +=
          '<p class="fce-u1-ph-tip"><span class="fce-u1-ph-k">Sense</span> ' +
          esc(p.tip) +
          "</p>";
      }
      html += "</li>";
    }
    html += "</ul>";
    return html;
  }

  function speakingHtml(speaking) {
    var groups = (speaking && speaking.groups) || [];
    if (!groups.length) return "";
    var html = "";
    var i;
    var j;
    for (i = 0; i < groups.length; i++) {
      var g = groups[i];
      var qs = g.questions || [];
      html += '<section class="fce-u1-ph-speak">';
      html += '<h3 class="fce-u1-ph-speak-title">' + esc(g.title) + "</h3>";
      if (g.kicker) {
        html += '<p class="fce-u1-ph-speak-kicker">' + esc(g.kicker) + "</p>";
      }
      html += '<ol class="fce-u1-ph-speak-qs">';
      for (j = 0; j < qs.length; j++) {
        html += "<li>" + esc(qs[j]) + "</li>";
      }
      html += "</ol></section>";
    }
    return html;
  }

  function normGap(s) {
    return String(s || "")
      .replace(/[\u2018\u2019]/g, "'")
      .replace(/[.,!?;:—–-]/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
  }

  function gapsHtml(pack) {
    var bank = pack.bank || [];
    var items = pack.items || [];
    var html =
      '<p class="fce-u1-ph-gaps-title">' +
      esc(pack.title || "Fill in the gaps") +
      "</p>";
    if (pack.note) {
      html += '<p class="fce-u1-ph-gaps-note">' + esc(pack.note) + "</p>";
    }
    html += '<div class="fce-u1-ph-gaps-bank"><strong>Phrases:</strong> ';
    html += esc(bank.join(", "));
    html += "</div><ol class=\"fce-u1-ph-gaps-list\">";
    var i;
    for (i = 0; i < items.length; i++) {
      var it = items[i];
      html +=
        '<li class="fce-u1-ph-gaps-item" data-gap-i="' +
        i +
        '"><p class="fce-u1-ph-gaps-line">' +
        esc(it.before || "") +
        ' <input type="text" class="fce-u1-ph-gaps-input" data-gap-input="' +
        i +
        '" autocomplete="off" spellcheck="false" aria-label="Gap ' +
        (i + 1) +
        '"> ' +
        esc(it.after || "") +
        '</p><p class="fce-u1-ph-gaps-key" data-gap-key="' +
        i +
        '" hidden></p></li>';
    }
    html +=
      '</ol><p class="fce-u1-ph-gaps-score" data-gap-score hidden></p>' +
      '<div class="fce-u1-ph-ex-nav">' +
      '<button type="button" class="fce-u1-ph-ex-back" data-gap-act="reset">Try again</button>' +
      '<button type="button" class="fce-u1-ph-ex-next" data-gap-act="check">Check</button>' +
      "</div>";
    return html;
  }

  function practiceLinksNav(links) {
    if (!links || !links.length) return "";
    var html = '<div class="fce-u1-ph-practice-btns">';
    var i;
    for (i = 0; i < links.length; i++) {
      html +=
        '<a class="fce-u1-ph-practice-btn" href="' +
        esc(links[i].href) +
        '">' +
        esc(links[i].label) +
        "</a>";
    }
    html += "</div>";
    return html;
  }

  function practiceLinkGroupsHtml(groups, mountId) {
    if (!groups || !groups.length) return "";
    var html =
      '<div class="fce-u1-ph-ex-groups" data-ex-groups="' +
      esc(mountId) +
      '">';
    html +=
      '<div class="fce-u1-ph-ex-person-bar" role="tablist" aria-label="Speaker">';
    var gi;
    for (gi = 0; gi < groups.length; gi++) {
      html +=
        '<button type="button" class="fce-u1-ph-ex-person' +
        (gi === 0 ? " is-on" : "") +
        '" role="tab" aria-selected="' +
        (gi === 0 ? "true" : "false") +
        '" data-ex-person="' +
        gi +
        '">' +
        esc(groups[gi].label || groups[gi].id || "Person") +
        "</button>";
    }
    html += "</div>";
    for (gi = 0; gi < groups.length; gi++) {
      html +=
        '<nav class="fce-u1-ph-practice fce-u1-ph-ex-person-panel' +
        (gi === 0 ? " is-on" : "") +
        '" role="tabpanel" data-ex-person-panel="' +
        gi +
        '" aria-label="' +
        esc(groups[gi].label || "") +
        '">';
      html += practiceLinksNav(groups[gi].links || []);
      html += "</nav>";
    }
    html += "</div>";
    return html;
  }

  function bindPracticeLinkGroups(modalEl) {
    if (!modalEl) return { applyPerson: function () {} };
    var root = modalEl.querySelector("[data-ex-groups]");
    if (!root) return { applyPerson: function () {} };

    function applyPerson(ix) {
      var n = Number(ix);
      if (isNaN(n) || n < 0) n = 0;
      root.querySelectorAll("[data-ex-person]").forEach(function (btn) {
        var on = Number(btn.getAttribute("data-ex-person")) === n;
        btn.classList.toggle("is-on", on);
        btn.setAttribute("aria-selected", on ? "true" : "false");
      });
      root.querySelectorAll("[data-ex-person-panel]").forEach(function (panel) {
        var on = Number(panel.getAttribute("data-ex-person-panel")) === n;
        panel.classList.toggle("is-on", on);
        panel.hidden = !on;
      });
    }

    root.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-ex-person]");
      if (!btn || !root.contains(btn)) return;
      applyPerson(btn.getAttribute("data-ex-person"));
    });

    applyPerson(0);
    return { applyPerson: applyPerson };
  }

  function markPhrases(text, phrases) {
    var safe = esc(text);
    var sorted = (phrases || []).slice().sort(function (a, b) {
      return String(b).length - String(a).length;
    });
    var i;
    for (i = 0; i < sorted.length; i++) {
      var p = esc(sorted[i]);
      if (!p) continue;
      var re = new RegExp(p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
      safe = safe.replace(re, function (m) {
        return '<mark class="fce-u1-ph-rp-hit">' + m + "</mark>";
      });
    }
    return safe;
  }

  function roleplayHtml(pack) {
    var people = pack.characters || [];
    var lines = pack.lines || [];
    var html = '<p class="fce-u1-ph-rp-kicker">Role-play</p>';
    html += '<h3 class="fce-u1-ph-rp-title">' + esc(pack.title || "Role-play") + "</h3>";
    html += '<ul class="fce-u1-ph-rp-cast">';
    var i;
    for (i = 0; i < people.length; i++) {
      html +=
        "<li><strong>" +
        esc(people[i].name) +
        "</strong> — " +
        esc(people[i].blurb || "") +
        "</li>";
    }
    html += "</ul>";
    html += '<div class="fce-u1-ph-rp-roles" role="group" aria-label="Your role">';
    html +=
      '<button type="button" class="fce-u1-ph-rp-role is-on" data-rp-role="both">Read both</button>';
    for (i = 0; i < people.length; i++) {
      html +=
        '<button type="button" class="fce-u1-ph-rp-role" data-rp-role="' +
        esc(people[i].id) +
        '">You = ' +
        esc(people[i].name) +
        "</button>";
    }
    html += "</div>";
    html += '<p class="fce-u1-ph-rp-hint" data-rp-hint>Read the dialogue. Target phrases are highlighted.</p>';
    html += '<ol class="fce-u1-ph-rp-script">';
    for (i = 0; i < lines.length; i++) {
      var line = lines[i];
      var who = people.filter(function (p) {
        return p.id === line.who;
      })[0];
      var name = who ? who.name : line.who;
      html +=
        '<li class="fce-u1-ph-rp-line" data-rp-who="' +
        esc(line.who) +
        '"><span class="fce-u1-ph-rp-name">' +
        esc(name) +
        '</span><p class="fce-u1-ph-rp-text">' +
        markPhrases(line.text, pack.highlights) +
        '</p><button type="button" class="fce-u1-ph-rp-cover" data-rp-show hidden>Your line</button></li>';
    }
    html += "</ol>";
    return html;
  }

  function unmount(id) {
    var st = mounted[id];
    if (!st) return;
    document.body.classList.remove(st.bodyOpenClass, "fce-u1-ph-fabs-hidden");
    if (st.onKey) document.removeEventListener("keydown", st.onKey);
    if (st.mount && st.mount.parentNode) st.mount.parentNode.removeChild(st.mount);
    delete mounted[id];
  }

  function mount(opts) {
    opts = opts || {};
    var id = opts.id || "default";
    unmount(id);

    var speakers = opts.speakers || [];
    if (!speakers.length) return null;

    var spkIx = 0;
    var bodyOpenClass = opts.bodyOpenClass || "fce-u1-phrases--open";
    var spkLabel = opts.speakerSelectLabel || "Speaker";

    var optsHtml = "";
    var i;
    for (i = 0; i < speakers.length; i++) {
      optsHtml +=
        '<option value="' + i + '">' + esc(speakers[i].label) + "</option>";
    }

    var hasSpeaking = !!(opts.speaking && opts.speaking.groups && opts.speaking.groups.length);
    if (!hasSpeaking) {
      for (i = 0; i < speakers.length; i++) {
        var spSp = speakers[i].speaking;
        if (spSp && spSp.groups && spSp.groups.length) {
          hasSpeaking = true;
          break;
        }
      }
    }
    var exercises = opts.exercises || [];
    var hasExercises = exercises.length > 0;
    var gaps = opts.gaps || null;
    var hasGaps = !!(gaps && gaps.items && gaps.items.length);
    var roleplay = opts.roleplay || null;
    var hasRoleplay = !!(roleplay && roleplay.lines && roleplay.lines.length);
    var keyword = opts.keyword || null;
    var kwVariants =
      keyword && keyword.variants && keyword.variants.length
        ? keyword.variants
        : keyword && keyword.items && keyword.items.length
          ? [keyword]
          : [];
    var hasKeyword = kwVariants.length > 0;
    var hasTabs = hasSpeaking || hasExercises || hasGaps || hasRoleplay || hasKeyword;
    var oneSpeaker = speakers.length < 2;
    var whoLine = oneSpeaker
      ? '<p class="fce-u1-ph-who">' + esc(speakers[0].label) + "</p>"
      : "";
    var speakerBarHtml = "";
    if (!oneSpeaker) {
      speakerBarHtml =
        '<div class="fce-u1-ph-ex-person-bar fce-u1-ph-spk-bar" role="tablist" aria-label="' +
        esc(spkLabel) +
        '">';
      for (i = 0; i < speakers.length; i++) {
        speakerBarHtml +=
          '<button type="button" class="fce-u1-ph-ex-person' +
          (i === 0 ? " is-on" : "") +
          '" role="tab" aria-selected="' +
          (i === 0 ? "true" : "false") +
          '" data-ph-spk="' +
          i +
          '">' +
          esc(speakers[i].label) +
          "</button>";
      }
      speakerBarHtml += "</div>";
    }
    function practiceLinksHtml(links, title) {
      if (!links || !links.length) return "";
      var html =
        '<nav class="fce-u1-ph-practice" aria-label="Practice pages">';
      if (title) {
        html +=
          '<p class="fce-u1-ph-practice-title">' + esc(title) + "</p>";
      }
      html += practiceLinksNav(links);
      html += "</nav>";
      return html;
    }

    var practiceLinks = opts.practiceLinks || [];
    var practiceLinkGroups = opts.practiceLinkGroups || [];
    var hasPracticeRail =
      practiceLinks.length > 0 || practiceLinkGroups.length > 0;

    function tabBtn(name, label, active) {
      return (
        '<button type="button" class="fce-u1-ph-tab' +
        (active ? " is-active" : "") +
        '" role="tab" aria-selected="' +
        (active ? "true" : "false") +
        '" data-ph-tab="' +
        name +
        '">' +
        label +
        "</button>"
      );
    }
    var tabsHtml = hasTabs
      ? '<div class="fce-u1-ph-tabs" role="tablist">' +
        tabBtn("phrases", "Phrases", true) +
        (hasSpeaking ? tabBtn("speaking", "Speaking", false) : "") +
        (hasExercises ? tabBtn("exercises", "Exercises", false) : "") +
        (hasGaps ? tabBtn("gaps", "Gaps", false) : "") +
        (hasRoleplay ? tabBtn("roleplay", "Role-play", false) : "") +
        (hasKeyword ? tabBtn("keyword", "Key word", false) : "") +
        "</div>"
      : "";

    var phrasesFabBtn =
      '<button type="button" class="fce-u1-ph-fab" id="fce-ph-fab-' +
      id +
      '" aria-expanded="false" aria-controls="fce-ph-drawer-' +
      id +
      '" title="' +
      esc(opts.fabTitle || "Phrases") +
      '">' +
      '<span class="fce-u1-ph-fab-text">' +
      '<span class="fce-u1-ph-fab-line">' +
      esc(opts.fabLine1 || "Phrases") +
      "</span>" +
      '<span class="fce-u1-ph-fab-line fce-u1-ph-fab-sub">' +
      esc(opts.fabLine2 || "") +
      "</span></span></button>";

    var exercisesFabBtn = hasPracticeRail
      ? '<button type="button" class="fce-u1-ph-fab fce-u1-ph-fab--ex" id="fce-ph-fab-ex-' +
        id +
        '" aria-expanded="false" aria-controls="fce-ph-ex-modal-' +
        id +
        '" title="' +
        esc(opts.exercisesFabTitle || "Exercises — full page") +
        '">' +
        '<span class="fce-u1-ph-fab-text">' +
        '<span class="fce-u1-ph-fab-line">' +
        esc(opts.exercisesFabLine1 || "Exercises") +
        "</span>" +
        '<span class="fce-u1-ph-fab-line fce-u1-ph-fab-sub">' +
        esc(opts.exercisesFabLine2 || opts.fabLine2 || "") +
        "</span></span></button>"
      : "";

    var fabRailHtml = hasPracticeRail
      ? '<div class="fce-u1-ph-fab-rail">' + phrasesFabBtn + exercisesFabBtn + "</div>"
      : phrasesFabBtn;

    var mountEl = document.createElement("div");
    mountEl.id = "fce-ph-mount-" + id;
    mountEl.innerHTML =
      fabRailHtml +
      '<div class="fce-u1-ph-backdrop" id="fce-ph-backdrop-' +
      id +
      '" hidden></div>' +
      '<aside class="fce-u1-ph-drawer" id="fce-ph-drawer-' +
      id +
      '" aria-label="' +
      esc(opts.drawerAria || "Cool Words") +
      '">' +
      '<div class="fce-u1-ph-drawer-head"><span>' +
      esc(opts.drawerTitle || "Phrases") +
      '</span><button type="button" class="fce-u1-ph-drawer-x" id="fce-ph-close-' +
      id +
      '" aria-label="Close">×</button></div>' +
      '<div class="fce-u1-ph-drawer-body">' +
      speakerBarHtml +
      tabsHtml +
      '<div id="fce-ph-panel-phrases-' +
      id +
      '">' +
      whoLine +
      '<div id="fce-ph-list-' +
      id +
      '"></div></div>' +
      (hasSpeaking
        ? '<div id="fce-ph-panel-speaking-' +
          id +
          '" hidden>' +
          speakingHtml(opts.speaking) +
          "</div>"
        : "") +
      (hasExercises
        ? '<div id="fce-ph-panel-exercises-' +
          id +
          '" class="fce-u1-ph-ex" hidden></div>'
        : "") +
      (hasGaps
        ? '<div id="fce-ph-panel-gaps-' + id + '" class="fce-u1-ph-gaps" hidden>' +
          gapsHtml(gaps) +
          "</div>"
        : "") +
      (hasRoleplay
        ? '<div id="fce-ph-panel-roleplay-' + id + '" class="fce-u1-ph-rp" hidden>' +
          roleplayHtml(roleplay) +
          "</div>"
        : "") +
      (hasKeyword
        ? '<div id="fce-ph-panel-keyword-' + id + '" class="fce-u1-ph-kw" hidden></div>'
        : "") +
      "</div></aside>" +
      (hasPracticeRail
        ? '<div class="fce-u1-ph-ex-modal" id="fce-ph-ex-modal-' +
          id +
          '" hidden aria-modal="true" aria-label="' +
          esc(opts.exercisesDrawerAria || "Exercises") +
          '">' +
          '<button type="button" class="fce-u1-ph-ex-modal-bg" id="fce-ph-ex-bg-' +
          id +
          '" aria-label="Close"></button>' +
          '<div class="fce-u1-ph-ex-modal-panel" role="dialog" aria-labelledby="fce-ph-ex-title-' +
          id +
          '">' +
          '<div class="fce-u1-ph-ex-modal-head">' +
          '<span id="fce-ph-ex-title-' +
          id +
          '">' +
          esc(opts.exercisesDrawerTitle || "Exercises") +
          '</span><button type="button" class="fce-u1-ph-drawer-x" id="fce-ph-close-ex-' +
          id +
          '" aria-label="Close">×</button></div>' +
          '<div class="fce-u1-ph-ex-modal-body">' +
          (practiceLinkGroups.length
            ? practiceLinkGroupsHtml(practiceLinkGroups, id)
            : practiceLinksHtml(practiceLinks, "")) +
          "</div></div></div>"
        : "");

    document.body.appendChild(mountEl);

    var listEl = document.getElementById("fce-ph-list-" + id);
    var fab = document.getElementById("fce-ph-fab-" + id);
    var fabEx = document.getElementById("fce-ph-fab-ex-" + id);
    var fabRail = mountEl.querySelector(".fce-u1-ph-fab-rail");
    var backdrop = document.getElementById("fce-ph-backdrop-" + id);
    var drawer = document.getElementById("fce-ph-drawer-" + id);
    var exModal = document.getElementById("fce-ph-ex-modal-" + id);
    var exModalBg = document.getElementById("fce-ph-ex-bg-" + id);
    var closeBtn = document.getElementById("fce-ph-close-" + id);
    var closeBtnEx = document.getElementById("fce-ph-close-ex-" + id);
    var exPersonSwitch = bindPracticeLinkGroups(exModal);

    function speakingFor(spk) {
      if (spk && spk.speaking && spk.speaking.groups && spk.speaking.groups.length) {
        return spk.speaking;
      }
      return opts.speaking;
    }

    function syncSpeakerTabs() {
      var activeBtn = null;
      mountEl.querySelectorAll("[data-ph-spk]").forEach(function (btn) {
        var on = Number(btn.getAttribute("data-ph-spk")) === spkIx;
        btn.classList.toggle("is-on", on);
        btn.setAttribute("aria-selected", on ? "true" : "false");
        if (on) activeBtn = btn;
      });
      if (activeBtn && activeBtn.scrollIntoView) {
        activeBtn.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
      }
    }

    function refresh() {
      var spk = speakers[spkIx] || speakers[0];
      if (listEl) listEl.innerHTML = listHtml(spk);
      syncSpeakerTabs();
      var speakPanelEl = document.getElementById("fce-ph-panel-speaking-" + id);
      if (speakPanelEl) {
        var spData = speakingFor(spk);
        if (spData && spData.groups && spData.groups.length) {
          speakPanelEl.innerHTML = speakingHtml(spData);
        } else {
          speakPanelEl.innerHTML =
            '<p class="fce-u1-ph-empty">Discussion prompts are for Luke — choose <strong>A · Luke</strong> above.</p>';
        }
      }
    }

    function closePhrases() {
      if (drawer) drawer.classList.remove("is-visible");
      if (fab) fab.setAttribute("aria-expanded", "false");
    }

    function closeExercises() {
      if (exModal) exModal.hidden = true;
      if (fabEx) fabEx.setAttribute("aria-expanded", "false");
      syncFabDock();
    }

    var fabHiddenClass = "fce-u1-ph-fabs-hidden";

    function syncFabDock() {
      var hide =
        (drawer && drawer.classList.contains("is-visible")) ||
        (exModal && !exModal.hidden);
      document.body.classList.toggle(fabHiddenClass, hide);
    }

    function syncBackdrop() {
      var phrasesOpen = drawer && drawer.classList.contains("is-visible");
      document.body.classList.toggle(bodyOpenClass, phrasesOpen);
      if (backdrop) backdrop.hidden = !phrasesOpen;
      syncFabDock();
    }

    function close() {
      closePhrases();
      closeExercises();
      syncBackdrop();
    }

    function open() {
      closeExercises();
      if (drawer) drawer.classList.add("is-visible");
      if (fab) fab.setAttribute("aria-expanded", "true");
      syncBackdrop();
    }

    function openEx() {
      closePhrases();
      syncBackdrop();
      if (exModal) exModal.hidden = false;
      if (fabEx) fabEx.setAttribute("aria-expanded", "true");
      if (practiceLinkGroups.length && exPersonSwitch.applyPerson) {
        var spkIxForEx = spkIx;
        if (spkIxForEx >= practiceLinkGroups.length) spkIxForEx = 0;
        exPersonSwitch.applyPerson(spkIxForEx);
      }
      syncFabDock();
    }

    function toggle() {
      if (drawer && drawer.classList.contains("is-visible")) closePhrases();
      else open();
      syncBackdrop();
    }

    function toggleEx() {
      if (exModal && !exModal.hidden) closeExercises();
      else openEx();
    }

    if (fab) fab.addEventListener("click", toggle);
    if (fabEx) fabEx.addEventListener("click", toggleEx);
    closeBtn.addEventListener("click", close);
    if (closeBtnEx) closeBtnEx.addEventListener("click", closeExercises);
    if (exModalBg) exModalBg.addEventListener("click", closeExercises);
    backdrop.addEventListener("click", close);
    mountEl.addEventListener("click", function (e) {
      var spkBtn = e.target.closest("[data-ph-spk]");
      if (!spkBtn || !drawer.contains(spkBtn)) return;
      spkIx = Number(spkBtn.getAttribute("data-ph-spk")) || 0;
      refresh();
    });
    if (hasTabs) {
      var tabBtns = mountEl.querySelectorAll("[data-ph-tab]");
      var phrasesPanel = document.getElementById("fce-ph-panel-phrases-" + id);
      var speakPanel = document.getElementById("fce-ph-panel-speaking-" + id);
      var exPanel = document.getElementById("fce-ph-panel-exercises-" + id);
      var gapsPanel = document.getElementById("fce-ph-panel-gaps-" + id);
      var rpPanel = document.getElementById("fce-ph-panel-roleplay-" + id);
      var kwPanel = document.getElementById("fce-ph-panel-keyword-" + id);
      var kwVar = 0;
      var kwIx = 0;
      var kwDone = false;
      var kwSaved = [];

      function kwPack() {
        return kwVariants[kwVar] || kwVariants[0] || { items: [] };
      }
      var exIx = 0;
      var exPicked = [];
      var exDone = false;

      function exHtml() {
        if (exDone) {
          var correctN = 0;
          var n;
          for (n = 0; n < exercises.length; n++) {
            if (exPicked[n] === exercises[n].answer) correctN++;
          }
          return (
            '<p class="fce-u1-ph-ex-done">' +
            correctN +
            " / " +
            exercises.length +
            "</p>" +
            '<p class="fce-u1-ph-ex-done-note">Готово. Можно пройти ещё раз.</p>' +
            '<div class="fce-u1-ph-ex-nav">' +
            '<button type="button" class="fce-u1-ph-ex-next" data-ex-nav="restart">Сначала</button>' +
            "</div>"
          );
        }
        var item = exercises[exIx];
        var picked = exPicked[exIx] || "";
        var segs = "";
        var s;
        for (s = 0; s < exercises.length; s++) {
          segs +=
            '<span class="fce-u1-ph-ex-seg' +
            (s <= exIx ? " is-on" : "") +
            '"></span>';
        }
        var opts = "";
        var c;
        var choices = item.choices || [];
        for (c = 0; c < choices.length; c++) {
          var ch = choices[c];
          var cls = "fce-u1-ph-ex-opt";
          if (picked) {
            if (ch.id === item.answer) cls += " is-ok";
            else if (ch.id === picked) cls += " is-bad";
          }
          opts +=
            '<button type="button" class="' +
            cls +
            '" data-ex-letter="' +
            esc(ch.id) +
            '"' +
            (picked ? " disabled" : "") +
            ">" +
            esc(ch.id) +
            ". " +
            esc(ch.text) +
            "</button>";
        }
        return (
          '<div class="fce-u1-ph-ex-top"><div class="fce-u1-ph-ex-bar" aria-hidden="true">' +
          segs +
          '</div><span class="fce-u1-ph-ex-count">' +
          (exIx + 1) +
          " / " +
          exercises.length +
          "</span></div>" +
          '<p class="fce-u1-ph-ex-q"><strong>' +
          (exIx + 1) +
          ".</strong> " +
          esc(item.prompt) +
          "</p>" +
          '<div class="fce-u1-ph-ex-opts">' +
          opts +
          "</div>" +
          (item.hint
            ? '<details class="fce-u1-ph-ex-hint"><summary>Показать подсказку</summary><p>' +
              esc(item.hint) +
              "</p></details>"
            : "") +
          '<div class="fce-u1-ph-ex-nav">' +
          '<button type="button" class="fce-u1-ph-ex-back" data-ex-nav="back"' +
          (exIx === 0 ? " hidden" : "") +
          ">Назад</button>" +
          '<button type="button" class="fce-u1-ph-ex-next" data-ex-nav="next">Следующий элемент</button>' +
          "</div>"
        );
      }

      function paintEx() {
        if (exPanel) exPanel.innerHTML = exHtml();
      }

      function kwMatches(item, value) {
        var got = normGap(value);
        if (!got) return false;
        if (item.key) {
          var word = normGap(item.key);
          var re = new RegExp(
            "(^| )" + word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "( |$)"
          );
          if (!re.test(got)) return false;
        }
        var answers = item.answers || [];
        var i;
        for (i = 0; i < answers.length; i++) {
          if (got === normGap(answers[i])) return true;
        }
        return false;
      }

      function kwVariantBar() {
        if (kwVariants.length < 2) return "";
        var html = '<div class="fce-u1-ph-kw-vars" role="group" aria-label="Variant">';
        var i;
        for (i = 0; i < kwVariants.length; i++) {
          html +=
            '<button type="button" class="fce-u1-ph-kw-var' +
            (i === kwVar ? " is-on" : "") +
            '" data-kw-var="' +
            i +
            '">' +
            esc(kwVariants[i].kicker || "Variant " + (i + 1)) +
            "</button>";
        }
        html += "</div>";
        return html;
      }

      function kwHtml() {
        var pack = kwPack();
        var items = pack.items || [];
        if (kwDone) {
          var correctN = 0;
          var n;
          for (n = 0; n < items.length; n++) {
            if (kwSaved[n] && kwSaved[n].ok) correctN++;
          }
          return (
            kwVariantBar() +
            '<p class="fce-u1-ph-ex-done">' +
            correctN +
            " / " +
            items.length +
            "</p>" +
            '<p class="fce-u1-ph-ex-done-note">Готово. Можно пройти ещё раз.</p>' +
            '<div class="fce-u1-ph-ex-nav">' +
            '<button type="button" class="fce-u1-ph-ex-next" data-kw-nav="restart">Сначала</button>' +
            "</div>"
          );
        }
        var item = items[kwIx];
        var saved = kwSaved[kwIx] || { value: "", checked: false, ok: false };
        var status = "";
        if (saved.checked && saved.ok) {
          status = '<p class="fce-u1-ph-kw-ok">Correct.</p>';
        } else if (saved.checked) {
          status =
            '<p class="fce-u1-ph-kw-key"><span>Key</span> ' +
            esc((item.answers || []).join(" / ")) +
            "</p>";
        }
        return (
          kwVariantBar() +
          '<h3 class="fce-u1-ph-kw-title">' +
          esc(pack.title || "Key word transformation") +
          "</h3>" +
          '<p class="fce-u1-ph-kw-note">' +
          esc(
            pack.note ||
              "Rewrite the sentence. Use the key word. Do not change its form."
          ) +
          "</p>" +
          '<p class="fce-u1-ph-kw-count">' +
          (kwIx + 1) +
          " / " +
          items.length +
          "</p>" +
          (pack.promptLabel
            ? '<p class="fce-u1-ph-kw-given">' + esc(pack.promptLabel) + "</p>"
            : "") +
          '<p class="fce-u1-ph-kw-src">' +
          esc(item.sentence) +
          "</p>" +
          (item.key
            ? '<p class="fce-u1-ph-kw-given">Key word: <strong>' +
              esc(item.key) +
              "</strong></p>"
            : "") +
          '<label class="fce-u1-ph-kw-lab">' +
          esc(pack.answerLabel || "Your sentence") +
          '<textarea class="fce-u1-ph-kw-input' +
          (saved.checked ? (saved.ok ? " is-ok" : " is-bad") : "") +
          '" data-kw-input rows="3"' +
          (saved.checked ? " readonly" : "") +
          ">" +
          esc(saved.value || "") +
          "</textarea></label>" +
          status +
          '<div class="fce-u1-ph-ex-nav">' +
          '<button type="button" class="fce-u1-ph-ex-back" data-kw-nav="back"' +
          (kwIx === 0 ? " hidden" : "") +
          ">Назад</button>" +
          (saved.checked
            ? '<button type="button" class="fce-u1-ph-ex-next" data-kw-nav="next">Следующий элемент</button>'
            : '<button type="button" class="fce-u1-ph-ex-next" data-kw-nav="check">Check</button>') +
          "</div>"
        );
      }

      function paintKw() {
        if (kwPanel) kwPanel.innerHTML = kwHtml();
      }

      function showTab(which) {
        tabBtns.forEach(function (b) {
          var on = b.getAttribute("data-ph-tab") === which;
          b.classList.toggle("is-active", on);
          b.setAttribute("aria-selected", on ? "true" : "false");
        });
        if (phrasesPanel) phrasesPanel.hidden = which !== "phrases";
        if (speakPanel) speakPanel.hidden = which !== "speaking";
        if (exPanel) exPanel.hidden = which !== "exercises";
        if (gapsPanel) gapsPanel.hidden = which !== "gaps";
        if (rpPanel) rpPanel.hidden = which !== "roleplay";
        if (kwPanel) kwPanel.hidden = which !== "keyword";
        var wide =
          which === "exercises" ||
          which === "gaps" ||
          which === "roleplay" ||
          which === "keyword";
        if (drawer) drawer.classList.toggle("is-ex-wide", wide);
        if (fabRail) fabRail.classList.toggle("is-ex-shift", wide);
        else if (fab) fab.classList.toggle("is-ex-shift", wide);
        if (which === "exercises") paintEx();
        if (which === "keyword") paintKw();
      }

      tabBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
          showTab(btn.getAttribute("data-ph-tab"));
        });
      });

      if (exPanel) {
        exPanel.addEventListener("click", function (e) {
          var letterBtn = e.target.closest("[data-ex-letter]");
          if (letterBtn && !exPicked[exIx]) {
            exPicked[exIx] = letterBtn.getAttribute("data-ex-letter");
            paintEx();
            return;
          }
          var nav = e.target.closest("[data-ex-nav]");
          if (!nav) return;
          var dir = nav.getAttribute("data-ex-nav");
          if (dir === "back" && exIx > 0) exIx--;
          else if (dir === "next") {
            if (exIx < exercises.length - 1) exIx++;
            else exDone = true;
          } else if (dir === "restart") {
            exIx = 0;
            exPicked = [];
            exDone = false;
          }
          paintEx();
        });
      }

      if (gapsPanel && hasGaps) {
        gapsPanel.addEventListener("click", function (e) {
          var act = e.target.closest("[data-gap-act]");
          if (!act) return;
          var kind = act.getAttribute("data-gap-act");
          var inputs = gapsPanel.querySelectorAll("[data-gap-input]");
          var scoreEl = gapsPanel.querySelector("[data-gap-score]");
          if (kind === "reset") {
            inputs.forEach(function (input) {
              input.value = "";
              input.classList.remove("is-ok", "is-bad");
            });
            gapsPanel.querySelectorAll("[data-gap-key]").forEach(function (k) {
              k.hidden = true;
              k.textContent = "";
            });
            if (scoreEl) {
              scoreEl.hidden = true;
              scoreEl.textContent = "";
            }
            return;
          }
          var okN = 0;
          var gi;
          for (gi = 0; gi < gaps.items.length; gi++) {
            var input = gapsPanel.querySelector('[data-gap-input="' + gi + '"]');
            var keyEl = gapsPanel.querySelector('[data-gap-key="' + gi + '"]');
            var accepted = gaps.items[gi].answers || [];
            var got = normGap(input ? input.value : "");
            var good = false;
            var ai;
            for (ai = 0; ai < accepted.length; ai++) {
              if (got && got === normGap(accepted[ai])) good = true;
            }
            if (input) {
              input.classList.toggle("is-ok", good);
              input.classList.toggle("is-bad", !good);
            }
            if (good) okN++;
            if (keyEl) {
              keyEl.hidden = good;
              keyEl.textContent = good ? "" : accepted[0];
            }
          }
          if (scoreEl) {
            scoreEl.hidden = false;
            scoreEl.textContent = okN + " / " + gaps.items.length;
          }
        });
      }

      if (rpPanel && hasRoleplay) {
        function applyRole(role) {
          var hint = rpPanel.querySelector("[data-rp-hint]");
          var whoName = "";
          var people = roleplay.characters || [];
          var pi;
          for (pi = 0; pi < people.length; pi++) {
            if (people[pi].id === role) whoName = people[pi].name;
          }
          if (hint) {
            hint.textContent =
              role === "both"
                ? "Read the dialogue. Target phrases are highlighted."
                : "You are " +
                  whoName +
                  ". Your lines are hidden — say them, then tap Your line to check.";
          }
          rpPanel.querySelectorAll("[data-rp-role]").forEach(function (btn) {
            btn.classList.toggle("is-on", btn.getAttribute("data-rp-role") === role);
          });
          rpPanel.querySelectorAll(".fce-u1-ph-rp-line").forEach(function (row) {
            var mine = role !== "both" && row.getAttribute("data-rp-who") === role;
            row.classList.toggle("is-mine", mine);
            row.classList.remove("is-open");
            var cover = row.querySelector("[data-rp-show]");
            if (cover) cover.hidden = !mine;
          });
        }
        rpPanel.addEventListener("click", function (e) {
          var roleBtn = e.target.closest("[data-rp-role]");
          if (roleBtn) {
            applyRole(roleBtn.getAttribute("data-rp-role"));
            return;
          }
          var showBtn = e.target.closest("[data-rp-show]");
          if (showBtn) {
            var row = showBtn.closest(".fce-u1-ph-rp-line");
            if (row) row.classList.toggle("is-open");
          }
        });
      }

      if (kwPanel && hasKeyword) {
        kwPanel.addEventListener("click", function (e) {
          var varBtn = e.target.closest("[data-kw-var]");
          if (varBtn) {
            kwVar = Number(varBtn.getAttribute("data-kw-var")) || 0;
            kwIx = 0;
            kwDone = false;
            kwSaved = [];
            paintKw();
            return;
          }
          var nav = e.target.closest("[data-kw-nav]");
          if (!nav) return;
          var dir = nav.getAttribute("data-kw-nav");
          var items = kwPack().items || [];
          if (dir === "check") {
            var input = kwPanel.querySelector("[data-kw-input]");
            var value = input ? input.value : "";
            var item = items[kwIx];
            kwSaved[kwIx] = {
              value: value,
              checked: true,
              ok: kwMatches(item, value)
            };
            paintKw();
            return;
          }
          if (dir === "back" && kwIx > 0) kwIx--;
          else if (dir === "next") {
            if (kwIx < items.length - 1) kwIx++;
            else kwDone = true;
          } else if (dir === "restart") {
            kwIx = 0;
            kwDone = false;
            kwSaved = [];
          }
          paintKw();
        });
      }
    }

    var onKey = function (e) {
      if (e.key !== "Escape") return;
      if (exModal && !exModal.hidden) {
        e.preventDefault();
        closeExercises();
        return;
      }
      if (document.body.classList.contains(bodyOpenClass)) {
        e.preventDefault();
        close();
      }
    };
    document.addEventListener("keydown", onKey);

    refresh();

    mounted[id] = {
      mount: mountEl,
      bodyOpenClass: bodyOpenClass,
      close: close,
      onKey: onKey,
      setSpeakers: function (next) {
        speakers = next || [];
        spkIx = 0;
        refresh();
      },
      show: function () {
        mountEl.style.display = "";
      },
      hide: function () {
        close();
        mountEl.style.display = "none";
      }
    };

    return mounted[id];
  }

  function show(id) {
    var st = mounted[id];
    if (st) st.show();
  }

  function hide(id) {
    var st = mounted[id];
    if (st) st.hide();
  }

  function close(id) {
    var st = mounted[id];
    if (st) st.close();
  }

  function bindRoleplayRoot(root, pack) {
    function applyRole(role) {
      var hint = root.querySelector("[data-rp-hint]");
      var whoName = "";
      var people = pack.characters || [];
      var pi;
      for (pi = 0; pi < people.length; pi++) {
        if (people[pi].id === role) whoName = people[pi].name;
      }
      if (hint) {
        hint.textContent =
          role === "both"
            ? "Read the dialogue. Target phrases are highlighted."
            : "You are " +
              whoName +
              ". Your lines are hidden — say them, then tap Your line to check.";
      }
      root.querySelectorAll("[data-rp-role]").forEach(function (btn) {
        btn.classList.toggle("is-on", btn.getAttribute("data-rp-role") === role);
      });
      root.querySelectorAll(".fce-u1-ph-rp-line").forEach(function (row) {
        var mine = role !== "both" && row.getAttribute("data-rp-who") === role;
        row.classList.toggle("is-mine", mine);
        row.classList.remove("is-open");
        var cover = row.querySelector("[data-rp-show]");
        if (cover) cover.hidden = !mine;
      });
    }
    root.addEventListener("click", function (e) {
      var roleBtn = e.target.closest("[data-rp-role]");
      if (roleBtn) {
        applyRole(roleBtn.getAttribute("data-rp-role"));
        return;
      }
      var showBtn = e.target.closest("[data-rp-show]");
      if (showBtn) {
        var row = showBtn.closest(".fce-u1-ph-rp-line");
        if (row) row.classList.toggle("is-open");
      }
    });
  }

  function mountRoleplayPage(rootId, pack) {
    var root = document.getElementById(rootId);
    if (!root || !pack) return;
    root.classList.add("fce-u1-ph-rp");
    root.innerHTML = roleplayHtml(pack);
    bindRoleplayRoot(root, pack);
  }

  W.FCE_COOL_PHRASES_DRAWER = {
    mount: mount,
    unmount: unmount,
    show: show,
    hide: hide,
    close: close,
    mountRoleplayPage: mountRoleplayPage
  };
})(typeof window !== "undefined" ? window : globalThis);
