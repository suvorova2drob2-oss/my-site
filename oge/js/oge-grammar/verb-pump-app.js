/**
 * ОГЭ · The Verb Pump — interactive stations + Live classroom payload.
 */
(function (w) {
  "use strict";

  var cfg = w.OGE_GYM_ENGINE_CONFIG || null;
  var pack = w.OGE_VERB_PUMP;
  var root = document.getElementById((cfg && cfg.rootId) || "vp-app");
  if (!root) return;

  var rounds;
  if (cfg && cfg.rounds && cfg.rounds.length) {
    rounds = cfg.rounds;
  } else if (pack) {
    rounds = [
      {
        id: "mix",
        label: "Simple × Continuous",
        blurb: "Present simple vs present continuous — habits, facts, and actions happening now.",
        rules: ["Simple · habit, fact, state", "Continuous · now, temporary, annoyed + always"],
        stations: pack.stations
      }
    ];
    if (w.OGE_VERB_PUMP_SIMPLE && w.OGE_VERB_PUMP_SIMPLE.stations) {
      rounds.push(w.OGE_VERB_PUMP_SIMPLE);
    }
  } else {
    return;
  }

  var state = {
    round: rounds[0].id,
    stationId: (rounds[0].stations[0] && rounds[0].stations[0].id) || "A",
    liveById: {},
    stationChecked: {},
    showKeys: false
  };

  function parseHash() {
    var h = String(location.hash || "")
      .replace(/^#/, "")
      .trim();
    if (h === "simple" && rounds.length > 1) return { round: "simple", station: "A" };
    var m = h.match(/^(mix|simple)-([A-F])$/i);
    if (m) return { round: m[1].toLowerCase(), station: m[2].toUpperCase() };
    if (rounds.length === 1) {
      var num = h.match(/^([0-9]+)$/);
      if (num) return { round: rounds[0].id, station: num[1] };
    }
    return null;
  }

  try {
    var fromHash = parseHash();
    if (fromHash) {
      state.round = fromHash.round;
      state.stationId = fromHash.station;
    }
  } catch (eHash) {}
  ensureStationId();

  function liveItemId(item) {
    return state.round + "-" + item.id;
  }

  function syncHash() {
    try {
      if (rounds.length === 1) {
        history.replaceState(null, "", "#" + state.stationId);
      } else {
        history.replaceState(null, "", "#" + state.round + "-" + state.stationId);
      }
    } catch (eH) {}
  }

  function stationList() {
    return activeRound().stations;
  }

  function activeStation() {
    var list = stationList();
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i].id === state.stationId) return list[i];
    }
    return list[0];
  }

  function stationIndex() {
    var list = stationList();
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i].id === state.stationId) return i;
    }
    return 0;
  }

  function isStationUnlocked(stationId) {
    var list = stationList();
    var idx = -1;
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i].id === stationId) {
        idx = i;
        break;
      }
    }
    if (idx <= 0) return true;
    return !!state.stationChecked[list[idx - 1].id];
  }

  function roundItemTotal() {
    var total = 0;
    var list = stationList();
    var s;
    for (s = 0; s < list.length; s++) total += list[s].items.length;
    return total;
  }

  function roundProgress() {
    var items = livePayloadItems();
    var ok = 0;
    var i;
    for (i = 0; i < items.length; i++) if (items[i].correct) ok += 1;
    var total = roundItemTotal();
    var pct = total ? Math.round((100 * ok) / total) : 0;
    return { ok: ok, total: total, pct: pct };
  }

  function allStationsChecked() {
    var list = stationList();
    var i;
    for (i = 0; i < list.length; i++) {
      if (!state.stationChecked[list[i].id]) return false;
    }
    return list.length > 0;
  }

  function lastStationId() {
    var list = stationList();
    return list.length ? list[list.length - 1].id : "";
  }

  function isLastStation(stationId) {
    return !!stationId && stationId === lastStationId();
  }

  function applyMarksFromCache(station) {
    var i;
    for (i = 0; i < station.items.length; i++) {
      var item = station.items[i];
      var row = state.liveById[liveItemId(item)];
      var card = cardById(item.id);
      if (!row || !card) continue;
      markCard(card, row);
    }
  }

  function levelReportHtml(station, rows) {
    var okN = 0;
    var wrong = [];
    var i;
    for (i = 0; i < rows.length; i++) {
      if (rows[i].correct && rows[i].filled) okN += 1;
      else wrong.push(rows[i]);
    }
    var pct = rows.length ? Math.round((100 * okN) / rows.length) : 0;
    var next = stationList()[stationIndex() + 1];
    var html =
      '<aside class="vp-report">' +
      "<h3>Level " +
      esc(station.id) +
      " · " +
      pct +
      "%</h3>" +
      "<p>" +
      okN +
      " / " +
      rows.length +
      " correct on this level.</p>";
    if (wrong.length) {
      html += '<ul class="vp-report-list">';
      for (i = 0; i < wrong.length; i++) {
        var r = wrong[i];
        html +=
          "<li><strong>" +
          esc(r.label) +
          "</strong>" +
          (r.prompt ? '<span class="vp-report-p">' + esc(r.prompt) + "</span>" : "") +
          '<span class="vp-report-yours">Yours: ' +
          esc(r.answerText) +
          "</span>" +
          '<span class="vp-report-key">Correct: ' +
          esc(r.expectedText) +
          "</span></li>";
      }
      html += "</ul>";
    } else {
      html += '<p class="vp-report-ok">Perfect — no mistakes on this level.</p>';
    }
    if (next && isStationUnlocked(next.id)) {
      html +=
        '<button type="button" class="vp-report-next" data-station="' +
        esc(next.id) +
        '">Continue to level ' +
        esc(next.id) +
        " →</button>";
    }
    if (isLastStation(station.id)) {
      var round = roundProgress();
      var last = lastStationId();
      html +=
        '<div class="vp-report-round-final">' +
        '<p class="vp-report-round-kicker">Round complete · all levels</p>' +
        '<p class="vp-report-round-pct">' +
        round.pct +
        "%</p>" +
        "<p>" +
        round.ok +
        " / " +
        round.total +
        " correct in this round.</p></div>";
    }
    html += "</aside>";
    return html;
  }

  function mountLevelReport(station, rows) {
    var section = root.querySelector('.vp-station[data-station="' + station.id + '"]');
    if (!section) return;
    var old = section.querySelector(".vp-report");
    if (old) old.remove();
    section.insertAdjacentHTML("beforeend", levelReportHtml(station, rows));
    section.classList.add("is-checked");
  }

  function updateRoundProgressUi() {
    var bar = document.getElementById("vp-round-progress");
    if (!bar) return;
    var prog = roundProgress();
    var checked = 0;
    var list = stationList();
    var i;
    for (i = 0; i < list.length; i++) if (state.stationChecked[list[i].id]) checked += 1;
    bar.innerHTML =
      '<div class="vp-progress-track"><div class="vp-progress-fill" style="width:' +
      prog.pct +
      '%"></div></div>' +
      '<p class="vp-progress-label">Round progress: <strong>' +
      prog.pct +
      "%</strong> · " +
      prog.ok +
      " / " +
      prog.total +
      " · levels done " +
      checked +
      " / " +
      list.length +
      "</p>";
  }

  function showRoundComplete() {
    var prog = roundProgress();
    var modal = document.getElementById("vp-round-modal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "vp-round-modal";
      modal.className = "vp-round-modal";
      modal.innerHTML =
        '<div class="vp-round-modal-card" role="dialog" aria-modal="true">' +
        '<p class="vp-kicker">Round complete</p>' +
        '<h2 id="vp-round-modal-title"></h2>' +
        '<p id="vp-round-modal-body"></p>' +
        '<button type="button" id="vp-round-modal-close">Close</button></div>';
      document.body.appendChild(modal);
      document.getElementById("vp-round-modal-close").addEventListener("click", function () {
        modal.hidden = true;
      });
    }
    document.getElementById("vp-round-modal-title").textContent = prog.pct + "%";
    document.getElementById("vp-round-modal-body").textContent =
      "You finished all levels in this round: " +
      prog.ok +
      " / " +
      prog.total +
      " correct. Your teacher sees the same score in Live.";
    modal.hidden = false;
  }

  function activeRound() {
    var i;
    for (i = 0; i < rounds.length; i++) {
      if (rounds[i].id === state.round) return rounds[i];
    }
    return rounds[0];
  }

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function norm(s) {
    return String(s || "")
      .replace(/[\u2018\u2019\u2032]/g, "'")
      .replace(/,/g, "")
      .replace(/[.?!]+$/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
  }

  function shuffle(list) {
    var a = list.slice();
    var i;
    for (i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  }

  function inList(value, answers) {
    var n = norm(value);
    if (!n) return false;
    var i;
    for (i = 0; i < answers.length; i++) {
      if (norm(answers[i]) === n) return true;
    }
    return false;
  }

  function glue(before, fieldHtml, after) {
    var b = before || "";
    var a = after || "";
    var html = "";
    if (b) html += esc(b) + " ";
    html += fieldHtml;
    if (a) {
      if (/^[.,!?]/.test(a)) html += esc(a);
      else html += " " + esc(a);
    }
    return html;
  }

  function cardOpen(item, inner) {
    return (
      '<article class="vp-card" data-id="' +
      esc(item.id) +
      '">' +
      '<div class="vp-card-no">' +
      esc(item.label || item.id) +
      "</div>" +
      inner +
      '<p class="vp-key" hidden></p>' +
      "</article>"
    );
  }

  function renderBuild(item) {
    var chips = shuffle(item.chips)
      .map(function (chip, i) {
        return (
          '<button type="button" class="vp-chip" data-chip="' +
          i +
          '">' +
          esc(chip) +
          "</button>"
        );
      })
      .join("");
    return cardOpen(
      item,
      '<div class="vp-shot-wrap"><img class="vp-shot" src="' +
        esc(item.img) +
        '" alt="' +
        esc(item.alt) +
        '" loading="lazy" decoding="async" /></div>' +
        '<p class="vp-cues">' +
        esc(item.cues) +
        "</p>" +
        '<div class="vp-tray" data-role="tray"></div>' +
        '<div class="vp-pool" data-role="pool">' +
        chips +
        "</div>"
    );
  }

  function renderType(item) {
    var field =
      '<input class="vp-gap" data-role="gap" autocomplete="off" spellcheck="false" aria-label="' +
      esc(item.cue) +
      '" />' +
      '<span class="vp-cue">(' +
      esc(item.cue) +
      ")</span>";
    return cardOpen(item, '<p class="vp-line">' + glue(item.before, field, item.after) + "</p>");
  }

  function renderFix(item) {
    var field =
      '<input class="vp-gap vp-gap--fix" data-role="gap" autocomplete="off" spellcheck="false" placeholder="' +
      esc(item.wrong) +
      '" aria-label="Corrected phrase" />';
    return cardOpen(
      item,
      '<p class="vp-line vp-line--wrong"><span class="vp-badbit">' +
        esc(item.wrong) +
        "</span></p>" +
        '<p class="vp-line">' +
        glue(item.before, field, item.after) +
        "</p>"
    );
  }

  function renderChoice(item) {
    var buttons = item.choices
      .map(function (choice) {
        return (
          '<button type="button" class="vp-pick" data-choice="' +
          esc(choice) +
          '">' +
          esc(choice) +
          "</button>"
        );
      })
      .join("");
    return cardOpen(
      item,
      '<p class="vp-line">' + esc(item.prompt) + "</p>" + '<div class="vp-picks">' + buttons + "</div>"
    );
  }

  function renderBank(item) {
    var html = '<p class="vp-line">';
    var g = 0;
    var p;
    for (p = 0; p < item.parts.length; p++) {
      if (p > 0) {
        html +=
          ' <input class="vp-gap" data-role="gap" data-gap="' +
          g +
          '" autocomplete="off" spellcheck="false" aria-label="Gap ' +
          (g + 1) +
          '" /> ';
        g += 1;
      }
      html += esc(item.parts[p]);
    }
    html += "</p>";
    if (item.cue) {
      html += '<p class="vp-cue-line"><span class="vp-cue">(' + esc(item.cue) + ")</span></p>";
    }
    return cardOpen(item, html);
  }

  function renderPair(item) {
    return cardOpen(
      item,
      '<p class="vp-line">' +
        esc(item.prompt) +
        "</p>" +
        '<label class="vp-pair"><span>Question</span><input class="vp-gap vp-gap--fix" data-role="gap" data-gap="0" autocomplete="off" spellcheck="false" /></label>' +
        '<label class="vp-pair"><span>Short answer</span><input class="vp-gap vp-gap--fix" data-role="gap" data-gap="1" autocomplete="off" spellcheck="false" /></label>'
    );
  }

  function renderStation(station) {
    var items = station.items
      .map(function (item) {
        if (station.kind === "build") return renderBuild(item);
        if (station.kind === "type") return renderType(item);
        if (station.kind === "fix") return renderFix(item);
        if (station.kind === "choice") return renderChoice(item);
        if (station.kind === "pair") return renderPair(item);
        return renderBank(item);
      })
      .join("");
    var bank = "";
    if (station.bank) {
      bank =
        '<div class="vp-bank">' +
        station.bank
          .map(function (word) {
            return '<button type="button" class="vp-bank-word" data-word="' + esc(word) + '">' + esc(word) + "</button>";
          })
          .join("") +
        "</div>";
    }
    var active = station.id === state.stationId;
    return (
      '<section class="vp-station' +
      (active ? " is-active" : "") +
      '" id="vp-' +
      station.id +
      '" data-station="' +
      esc(station.id) +
      '">' +
      '<header class="vp-station-head"><span>' +
      esc(station.kicker) +
      "</span><h2>" +
      esc(station.title) +
      "</h2></header>" +
      "<p>" +
      esc(station.instruction) +
      "</p>" +
      (station.preface ? '<p class="vp-letter">' + esc(station.preface) + "</p>" : "") +
      bank +
      '<div class="vp-cards">' +
      items +
      "</div>" +
      (station.closing ? '<p class="vp-letter">' + esc(station.closing) + "</p>" : "") +
      "</section>"
    );
  }

  function findItem(id) {
    var s;
    var i;
    var stations = activeRound().stations;
    for (s = 0; s < stations.length; s++) {
      var station = stations[s];
      for (i = 0; i < station.items.length; i++) {
        if (station.items[i].id === id) return { station: station, item: station.items[i] };
      }
    }
    return null;
  }

  function cardById(id) {
    return root.querySelector('.vp-card[data-id="' + id + '"]');
  }

  function trayWords(card) {
    var buttons = card.querySelectorAll('[data-role="tray"] .vp-chip');
    var words = [];
    var i;
    for (i = 0; i < buttons.length; i++) words.push(buttons[i].textContent);
    return words;
  }

  function buildAnswer(item, words) {
    var joined = words.join(" ");
    var i;
    for (i = 0; i < item.orders.length; i++) {
      if (norm(item.orders[i].join(" ")) === norm(joined)) return true;
    }
    return false;
  }

  function expectedLine(station, item) {
    if (w.OGE_VERB_PUMP_KEYS && w.OGE_VERB_PUMP_KEYS.keyForItem) {
      return w.OGE_VERB_PUMP_KEYS.keyForItem(station, item);
    }
    return "";
  }

  function showKey(card, text) {
    var key = card.querySelector(".vp-key");
    if (!key) return;
    key.hidden = false;
    key.textContent = text;
  }

  function applyShowKeysToStation() {
    var station = activeStation();
    var section = root.querySelector(".vp-station.is-active");
    if (!section) return;
    section.classList.toggle("vp-show-keys", state.showKeys);
    if (!state.showKeys) return;
    var i;
    for (i = 0; i < station.items.length; i++) {
      var item = station.items[i];
      var card = cardById(item.id);
      if (!card || card.classList.contains("is-bad")) continue;
      showKey(card, expectedLine(station, item));
    }
  }

  function toggleShowKeys() {
    state.showKeys = !state.showKeys;
    var btn = document.getElementById("vp-keys");
    if (btn) btn.classList.toggle("is-on", state.showKeys);
    applyShowKeysToStation();
  }

  function readCard(station, item, card) {
    var prompt = item.cues || item.prompt || "";
    var answer = "";
    var expected = "";
    var ok = false;
    var filled = false;

    if (station.kind === "build") {
      var words = trayWords(card);
      answer = words.join(" ");
      expected = item.orders[0].join(" ") + ".";
      filled = words.length > 0;
      ok = buildAnswer(item, words);
      prompt = item.cues;
    } else if (station.kind === "type" || station.kind === "fix") {
      var input = card.querySelector('[data-role="gap"]');
      answer = input ? input.value : "";
      expected = item.expected;
      filled = norm(answer).length > 0;
      ok = inList(answer, item.answers);
      prompt =
        station.kind === "fix"
          ? [item.before, item.wrong, item.after].filter(Boolean).join(" ")
          : [item.before, "(" + item.cue + ")", item.after].filter(Boolean).join(" ");
    } else if (station.kind === "pair") {
      var pairGaps = card.querySelectorAll('[data-role="gap"]');
      var pairBits = [];
      var pairAll = true;
      var pairAny = false;
      var pg;
      for (pg = 0; pg < pairGaps.length; pg++) {
        pairBits.push(pairGaps[pg].value);
        if (!norm(pairGaps[pg].value)) pairAll = false;
        else pairAny = true;
      }
      answer = pairBits.join(" / ");
      expected = item.gaps
        .map(function (gap) {
          return gap.expected;
        })
        .join(" / ");
      filled = pairAny;
      ok =
        pairAll &&
        item.gaps.every(function (gap, idx) {
          return inList(pairBits[idx], gap.answers);
        });
      prompt = item.prompt;
    } else if (station.kind === "choice") {
      var picked = card.querySelector(".vp-pick.is-on");
      answer = picked ? picked.getAttribute("data-choice") : "";
      expected = item.answer;
      filled = !!answer;
      ok = norm(answer) === norm(item.answer);
      prompt = item.prompt;
    } else {
      var gaps = card.querySelectorAll('[data-role="gap"]');
      var bits = [];
      var all = true;
      var any = false;
      var g;
      for (g = 0; g < gaps.length; g++) {
        bits.push(gaps[g].value);
        if (!norm(gaps[g].value)) all = false;
        else any = true;
      }
      answer = bits.join(" / ");
      expected = item.gaps
        .map(function (gap) {
          return gap.expected;
        })
        .join(" / ");
      filled = any;
      ok =
        all &&
        item.gaps.every(function (gap, idx) {
          return inList(bits[idx], gap.answers);
        });
      prompt = item.prompt || item.parts.join(" ____ ");
      if (item.cue) prompt += " (" + item.cue + ")";
    }

    var lid = liveItemId(item);
    return {
      id: lid,
      label: item.label || item.id,
      prompt: prompt,
      answer: answer,
      expected: expected,
      answerText: answer || "—",
      expectedText: expected || "—",
      correct: ok,
      filled: filled
    };
  }

  function markCard(card, row) {
    card.classList.remove("is-ok", "is-bad");
    if (!row.filled) {
      card.classList.add("is-bad");
      showKey(card, "Answer required · " + row.expectedText);
      return;
    }
    if (row.correct) {
      card.classList.add("is-ok");
      if (state.showKeys) showKey(card, row.expectedText);
      else {
        var keyOk = card.querySelector(".vp-key");
        if (keyOk) keyOk.hidden = true;
      }
      return;
    }
    card.classList.add("is-bad");
    showKey(card, "Correct: " + row.expectedText);
  }

  function collectForStation(station) {
    var rows = [];
    var i;
    for (i = 0; i < station.items.length; i++) {
      var item = station.items[i];
      var card = cardById(item.id);
      if (!card) continue;
      var row = readCard(station, item, card);
      rows.push(row);
      markCard(card, row);
    }
    return rows;
  }

  function livePayloadItems() {
    return Object.keys(state.liveById)
      .sort()
      .map(function (k) {
        return state.liveById[k];
      });
  }

  function pushLive(final) {
    if (!w.EgeLiveRoom || typeof w.EgeLiveRoom.notifyProgress !== "function") return;
    var items = livePayloadItems();
    var ok = 0;
    var i;
    for (i = 0; i < items.length; i++) if (items[i].correct) ok += 1;
    w.EgeLiveRoom.notifyProgress({
      correct: ok,
      total: items.length,
      draft: !final,
      items: items
    });
  }

  function checkCurrentLevel() {
    var station = activeStation();
    if (!station) return;
    var rows = collectForStation(station);
    var ok = 0;
    var i;
    for (i = 0; i < rows.length; i++) {
      state.liveById[rows[i].id] = rows[i];
      if (rows[i].correct) ok += 1;
    }
    state.stationChecked[station.id] = true;
    mountLevelReport(station, rows);
    var line = document.getElementById("vp-score");
    if (line) {
      line.hidden = false;
      var levelPct = rows.length ? Math.round((100 * ok) / rows.length) : 0;
      if (isLastStation(station.id)) {
        var roundDone = roundProgress();
        line.textContent =
          "Round result: " +
          roundDone.pct +
          "% (" +
          roundDone.ok +
          "/" +
          roundDone.total +
          ") · Level " +
          station.id +
          ": " +
          levelPct +
          "%";
      } else {
        line.textContent = "Level " + station.id + ": " + levelPct + "% (" + ok + "/" + rows.length + ")";
      }
    }
    updateLevelNav();
    updateRoundProgressUi();
    pushLive(true);
    if (isLastStation(station.id) || allStationsChecked()) {
      showRoundComplete();
      var bar = document.getElementById("vp-round-progress");
      if (bar) bar.classList.add("vp-round-progress--done");
    }
  }

  function clearMarks() {
    if (state.stationChecked[state.stationId]) return;
    var cards = root.querySelectorAll(".vp-card");
    var i;
    for (i = 0; i < cards.length; i++) {
      cards[i].classList.remove("is-ok", "is-bad");
      var key = cards[i].querySelector(".vp-key");
      if (key) {
        key.hidden = true;
        key.textContent = "";
      }
    }
    var line = document.getElementById("vp-score");
    if (line) line.hidden = true;
  }

  function onPoolClick(event) {
    var chip = event.target.closest(".vp-chip");
    if (!chip) return;
    var card = chip.closest(".vp-card");
    if (!card) return;
    var tray = card.querySelector('[data-role="tray"]');
    var pool = card.querySelector('[data-role="pool"]');
    if (chip.parentElement === pool) tray.appendChild(chip);
    else pool.appendChild(chip);
    clearMarks();
  }

  function onPick(event) {
    var btn = event.target.closest(".vp-pick");
    if (!btn) return;
    var card = btn.closest(".vp-card");
    var all = card.querySelectorAll(".vp-pick");
    var i;
    for (i = 0; i < all.length; i++) all[i].classList.remove("is-on");
    btn.classList.add("is-on");
    clearMarks();
  }

  function focusedGap(station) {
    var el = document.activeElement;
    if (el && station && station.contains(el) && el.getAttribute("data-role") === "gap") return el;
    var gaps = station ? station.querySelectorAll("[data-role='gap']") : [];
    var i;
    for (i = 0; i < gaps.length; i++) {
      if (!norm(gaps[i].value)) return gaps[i];
    }
    return gaps[0] || null;
  }

  function onBank(event) {
    var btn = event.target.closest(".vp-bank-word");
    if (!btn) return;
    var station = btn.closest(".vp-station");
    var gap = focusedGap(station);
    if (!gap) return;
    var word = btn.getAttribute("data-word") || "";
    gap.focus();
    if (!norm(gap.value)) gap.value = word;
    else gap.value = (gap.value.replace(/\s+$/, "") + " " + word).trim();
    clearMarks();
  }

  function resetAll() {
    state.liveById = {};
    state.stationChecked = {};
    state.showKeys = false;
    state.stationId = stationList()[0] ? stationList()[0].id : "A";
    var modal = document.getElementById("vp-round-modal");
    if (modal) modal.hidden = true;
    root.innerHTML = paint();
    clearMarks();
    syncHash();
    bindDock();
  }

  function ensureStationId() {
    var list = stationList();
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i].id === state.stationId && isStationUnlocked(state.stationId)) return;
    }
    for (i = 0; i < list.length; i++) {
      if (isStationUnlocked(list[i].id)) {
        state.stationId = list[i].id;
        return;
      }
    }
    state.stationId = list[0] ? list[0].id : "A";
  }

  function setRound(id) {
    state.round = id;
    state.liveById = {};
    state.stationChecked = {};
    state.showKeys = false;
    ensureStationId();
    root.innerHTML = paint();
    clearMarks();
    syncHash();
    bindDock();
  }

  function setStation(id) {
    if (!id || id === state.stationId) return;
    if (!isStationUnlocked(id)) return;
    state.stationId = id;
    state.showKeys = false;
    var keysBtn = document.getElementById("vp-keys");
    if (keysBtn) keysBtn.classList.remove("is-on");
    syncHash();
    applyStationVisibility();
    updateLevelNav();
    updateStepLabel();
    clearMarks();
    root.querySelectorAll(".vp-station").forEach(function (node) {
      node.classList.remove("vp-show-keys");
    });
    if (state.stationChecked[id]) applyMarksFromCache(activeStation());
    try {
      root.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (eSc) {}
  }

  function applyStationVisibility() {
    var nodes = root.querySelectorAll(".vp-station");
    var i;
    for (i = 0; i < nodes.length; i++) {
      var sid = nodes[i].getAttribute("data-station");
      nodes[i].classList.toggle("is-active", sid === state.stationId);
    }
  }

  function updateLevelNav() {
    var buttons = root.querySelectorAll(".vp-level");
    var i;
    for (i = 0; i < buttons.length; i++) {
      var sid = buttons[i].getAttribute("data-station");
      buttons[i].classList.toggle("is-on", sid === state.stationId);
      buttons[i].classList.toggle("is-done", !!state.stationChecked[sid]);
      buttons[i].classList.toggle("is-locked", !isStationUnlocked(sid));
      buttons[i].disabled = !isStationUnlocked(sid);
    }
  }

  function updateStepLabel() {
    var el = document.getElementById("vp-step");
    if (!el) return;
    var list = stationList();
    el.textContent =
      "Level " + (stationIndex() + 1) + " / " + list.length + " · " + state.stationId;
  }

  function onRound(event) {
    var btn = event.target.closest("[data-round]");
    if (!btn || !root.contains(btn)) return;
    var id = btn.getAttribute("data-round");
    if (!id || id === state.round) return;
    setRound(id);
  }

  function onLevel(event) {
    var btn = event.target.closest("[data-station]");
    if (!btn || !root.contains(btn)) return;
    if (btn.classList.contains("is-locked") || btn.disabled) return;
    setStation(btn.getAttribute("data-station"));
  }

  function onReportNext(event) {
    var btn = event.target.closest(".vp-report-next");
    if (!btn || !root.contains(btn)) return;
    setStation(btn.getAttribute("data-station"));
  }

  function stepStation(delta) {
    var list = stationList();
    var idx = stationIndex() + delta;
    if (idx < 0 || idx >= list.length) return;
    if (delta > 0 && !isStationUnlocked(list[idx].id)) return;
    setStation(list[idx].id);
  }

  function paint() {
    var round = activeRound();
    var nav = round.stations
      .map(function (station) {
        var done = state.stationChecked[station.id] ? " is-done" : "";
        var on = station.id === state.stationId ? " is-on" : "";
        var locked = !isStationUnlocked(station.id) ? " is-locked" : "";
        return (
          '<button type="button" class="vp-level' +
          on +
          done +
          locked +
          '" data-station="' +
          esc(station.id) +
          '"' +
          (!isStationUnlocked(station.id) ? " disabled" : "") +
          ">" +
          esc(station.id) +
          "</button>"
        );
      })
      .join("");
    var switches =
      rounds.length > 1
        ? rounds
            .map(function (item) {
              return (
                '<button type="button" class="vp-round' +
                (item.id === round.id ? " is-on" : "") +
                '" data-round="' +
                esc(item.id) +
                '">' +
                esc(item.label) +
                "</button>"
              );
            })
            .join("")
        : "";
    var rules = (round.rules || [])
      .map(function (rule) {
        return "<span>" + esc(rule) + "</span>";
      })
      .join("");
    return (
      '<div class="vp-hero">' +
      '<p class="vp-kicker">' +
      esc((cfg && cfg.kicker) || "Grammar Gym · OGE") +
      "</p>" +
      "<h1>" +
      esc((cfg && cfg.heroTitle) || "The Verb Pump") +
      "</h1>" +
      '<div id="vp-round-progress" class="vp-round-progress"></div>' +
      (switches ? '<div class="vp-rounds">' + switches + "</div>" : "") +
      "<p>" +
      esc(round.blurb || "") +
      "</p>" +
      (cfg && cfg.refHref
        ? '<div class="vp-hero-links"><a href="' + esc(cfg.refHref) + '">Grammar reference</a></div>'
        : '<div class="vp-hero-links"><a href="oge-grammar-gym-verb-pump-reference.html">Grammar reference</a></div>') +
      '<div class="vp-rules">' +
      rules +
      "</div></div>" +
      '<nav class="vp-levels" aria-label="Levels">' +
      nav +
      "</nav>" +
      '<p class="vp-step" id="vp-step"></p>' +
      '<p class="vp-live-hint">' +
      esc(
        (cfg && cfg.liveHint) ||
          "Complete level A to unlock B, and so on. In Live, tap the ranking chip (top right) to see class place and scores."
      ) +
      "</p>" +
      round.stations.map(renderStation).join("")
    );
  }

  function bind() {
    root.addEventListener("click", onRound);
    root.addEventListener("click", onLevel);
    root.addEventListener("click", onReportNext);
    root.addEventListener("click", onPoolClick);
    root.addEventListener("click", onPick);
    root.addEventListener("click", onBank);
    root.addEventListener("input", clearMarks);
  }

  function bindDock() {
    var checkBtn = document.getElementById("vp-check");
    var resetBtn = document.getElementById("vp-reset");
    var prevBtn = document.getElementById("vp-prev");
    var nextBtn = document.getElementById("vp-next");
    var keysBtn = document.getElementById("vp-keys");
    if (keysBtn) keysBtn.onclick = toggleShowKeys;
    if (checkBtn) {
      checkBtn.onclick = function () {
        checkCurrentLevel();
      };
    }
    if (resetBtn) resetBtn.onclick = resetAll;
    if (prevBtn) {
      prevBtn.onclick = function () {
        stepStation(-1);
      };
    }
    if (nextBtn) {
      nextBtn.onclick = function () {
        stepStation(1);
      };
    }
    updateStepLabel();
    updateLevelNav();
    updateRoundProgressUi();
  }

  root.innerHTML = paint();
  bind();
  bindDock();
  syncHash();

  state.ready = true;
})(typeof window !== "undefined" ? window : this);
