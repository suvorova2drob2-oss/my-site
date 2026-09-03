/**
 * FCE Class Live — Pictionary (draw on phone → guess on projector).
 *
 * FceClassPictLive.mount({
 *   deckPrefix: "fce-u1-pict",
 *   getPhrases: () => [{ phrase, pack }],
 *   getPack: () => "all"
 * });
 */
(function (W) {
  "use strict";

  var SS_HOST = "fcePictHostToken";
  var SS_ROOM = "fcePictRoomCode";
  var SS_PLAYER = "fcePictPlayerId";
  var SS_ROLE = "fcePictRole";
  var SS_NAME = "fcePictDisplayName";

  var DECK_PATH = "/class-games/pictionary.html";

  var state = {
    api: null,
    unsub: null,
    roomCode: "",
    hostToken: "",
    playerId: "",
    role: "",
    deckPrefix: "fce-u1-pict",
    getPhrases: null,
    getPack: null,
    lastGsVer: 0,
    lastPhase: "",
    lastSnap: null,
    pickedPhrase: "",
    submitted: false,
    drawing: false,
    lastX: 0,
    lastY: 0,
    canvas: null,
    ctx: null
  };

  function qs() {
    return new URLSearchParams(W.location.search);
  }

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function shuffle(a) {
    var x = a.slice();
    var i;
    for (i = x.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = x[i];
      x[i] = x[j];
      x[j] = t;
    }
    return x;
  }

  function deckId() {
    var pack = "";
    try {
      pack = String(state.getPack && state.getPack()) || "all";
    } catch (e) {}
    return state.deckPrefix + ":" + pack;
  }

  function ensureApi() {
    if (!W.LiveGameApi || !W.LiveGameHttp) {
      throw new Error("LiveGameApi not loaded");
    }
    var url = String(W.__FCE_LIVE_API_URL__ || "http://127.0.0.1:8787/live");
    var driver = W.LiveGameHttp.buildDriver(url);
    if (typeof driver.pictSubmit !== "function") {
      throw new Error("Live API driver outdated — refresh the page (Ctrl+F5)");
    }
    W.LiveGameApi.registerDriver("http", driver);
    state.api = W.LiveGameApi.createClient({ driver: "http" });
    return state.api;
  }

  function readName() {
    try {
      var n = sessionStorage.getItem(SS_NAME);
      if (n && n.trim()) return n.trim().slice(0, 40);
    } catch (e) {}
    return "";
  }

  function saveName(n) {
    try {
      sessionStorage.setItem(SS_NAME, n);
    } catch (e) {}
  }

  function filteredPhrases() {
    var list = (state.getPhrases && state.getPhrases()) || [];
    var pack = "";
    try {
      pack = String(state.getPack && state.getPack()) || "all";
    } catch (e2) {}
    if (!pack || pack === "all") return list.slice();
    return list.filter(function (p) {
      return p && (p.pack === pack || p.topicId === pack);
    });
  }

  function phrasePool() {
    return filteredPhrases()
      .map(function (p) {
        return String((p && p.phrase) || "").trim();
      })
      .filter(Boolean);
  }

  function pickThreeOptions() {
    var pool = phrasePool();
    if (pool.length <= 3) return shuffle(pool);
    return shuffle(pool).slice(0, 3);
  }

  function studentLink(code) {
    var origin = String(W.__FCE_LIVE_PUBLIC_ORIGIN__ || W.location.origin || "http://127.0.0.1:8787").replace(
      /\/$/,
      ""
    );
    var pack = "";
    try {
      pack = String(state.getPack && state.getPack()) || "";
    } catch (e) {}
    var unitN = qs().get("unit") || "1";
    var link =
      origin +
      DECK_PATH +
      "?unit=" +
      encodeURIComponent(unitN) +
      "&room=" +
      encodeURIComponent(String(code || "").toUpperCase()) +
      "&as=student";
    if (pack && pack !== "all") link += "&pack=" + encodeURIComponent(pack);
    return link;
  }

  function setMsg(node, text, ok) {
    if (!node) return;
    node.textContent = text || "";
    node.className = "fp-msg" + (ok === true ? " ok" : ok === false ? " bad" : "");
  }

  function subscribe() {
    if (state.unsub) state.unsub();
    if (!state.roomCode) return;
    state.unsub = ensureApi().subscribeRoom(state.roomCode, applySnapshot);
  }

  function submissionCount(gs) {
    var subs = (gs && gs.submissions) || {};
    var n = 0;
    Object.keys(subs).forEach(function (id) {
      if (subs[id] && subs[id].ready) n += 1;
    });
    return n;
  }

  function applySnapshot(snap) {
    if (!snap) return;
    state.lastSnap = snap;
    var gs = snap.gameState;
    if (gs && snap.gameStateVersion > state.lastGsVer) {
      state.lastGsVer = snap.gameStateVersion;
    }
    if (state.role === "host") {
      paintHostStatus(snap, gs);
      if (gs && gs.phase === "guess") {
        paintHostGallery(gs);
        W.document.body.classList.add("fp-guess-on");
      } else {
        hideHostGallery();
        W.document.body.classList.remove("fp-guess-on");
      }
    }
    if (state.role === "student") {
      paintDrawerFromGame(gs);
    }
    state.lastPhase = (gs && gs.phase) || state.lastPhase;
  }

  function hideHostGallery() {
    var g = document.getElementById("fpHostGallery");
    if (g) g.hidden = true;
  }

  function paintHostStatus(snap, gs) {
    var players = ((snap && snap.players) || []).filter(function (p) {
      return p && p.displayName && !p.isHost;
    });
    var list = document.getElementById("fpPlayerList");
    if (list) {
      list.textContent = players.length
        ? "Online: " + players.map(function (p) { return p.displayName; }).join(", ")
        : "Share the link — students draw on their phones.";
    }
    var readyEl = document.getElementById("fpReadyCount");
    if (readyEl && gs) {
      readyEl.textContent =
        gs.phase === "draw"
          ? submissionCount(gs) + " / " + players.length + " ready"
          : gs.phase === "guess"
            ? "Guessing — " + submissionCount(gs) + " drawings"
            : "Lobby";
    }
    var startDraw = document.getElementById("fpStartDraw");
    var startGuess = document.getElementById("fpStartGuess");
    if (startDraw) startDraw.hidden = !state.roomCode || (gs && gs.phase === "guess");
    if (startGuess) {
      startGuess.hidden = !gs || gs.phase !== "draw" || submissionCount(gs) < 1;
    }
  }

  function paintHostGallery(gs) {
    var shell = document.getElementById("fpHostGallery");
    if (!shell) return;
    shell.hidden = false;
    var subs = gs.submissions || {};
    var order = gs.galleryOrder || Object.keys(subs);
    var grid = document.getElementById("fpGalleryGrid");
    var spotlight = document.getElementById("fpGallerySpotlight");
    if (!grid) return;
    grid.innerHTML = "";
    order.forEach(function (pid, idx) {
      var sub = subs[pid];
      if (!sub || !sub.imageData) return;
      var card = document.createElement("button");
      card.type = "button";
      card.className = "fp-gallery-card";
      var num = document.createElement("span");
      num.className = "fp-gallery-num";
      num.textContent = String(idx + 1);
      var img = document.createElement("img");
      img.src = sub.imageData;
      img.alt = "Drawing " + (idx + 1);
      card.appendChild(num);
      card.appendChild(img);
      card.addEventListener("click", function () {
        showSpotlight(gs, pid, idx);
      });
      grid.appendChild(card);
    });
    if (spotlight && !spotlight.hidden) return;
    if (order.length) showSpotlight(gs, order[0], 0);
  }

  function showSpotlight(gs, pid, idx) {
    gs = (state.lastSnap && state.lastSnap.gameState) || gs;
    var subs = gs.submissions || {};
    var sub = subs[pid];
    var box = document.getElementById("fpGallerySpotlight");
    var shell = document.getElementById("fpHostGallery");
    if (!box || !sub) return;
    if (shell) shell.classList.add("fp-host-gallery--spot");
    box.hidden = false;
    var order = gs.galleryOrder || Object.keys(subs);
    document.getElementById("fpSpotImg").src = sub.imageData;
    document.getElementById("fpSpotNum").textContent = "Drawing " + (idx + 1) + " / " + order.length;
    var rev = document.getElementById("fpSpotReveal");
    var revealed = (gs.revealed && gs.revealed[pid]) || false;
    if (rev) {
      rev.hidden = revealed;
      rev.onclick = function () {
        rev.hidden = true;
        document.getElementById("fpSpotAnswer").hidden = false;
        document.getElementById("fpSpotAnswer").innerHTML =
          "<strong>" +
          esc(sub.displayName) +
          "</strong> · <em>" +
          esc(sub.phrase) +
          "</em>";
      };
    }
    if (revealed) {
      if (rev) rev.hidden = true;
      document.getElementById("fpSpotAnswer").hidden = false;
      document.getElementById("fpSpotAnswer").innerHTML =
        "<strong>" + esc(sub.displayName) + "</strong> · <em>" + esc(sub.phrase) + "</em>";
    } else {
      document.getElementById("fpSpotAnswer").hidden = true;
    }
    document.getElementById("fpSpotPrev").onclick = function () {
      var ni = (idx - 1 + order.length) % order.length;
      showSpotlight(gs, order[ni], ni);
    };
    document.getElementById("fpSpotNext").onclick = function () {
      var ni = (idx + 1) % order.length;
      showSpotlight(gs, order[ni], ni);
    };
    var backBtn = document.getElementById("fpSpotBack");
    if (backBtn) {
      backBtn.hidden = order.length <= 1;
      backBtn.onclick = function () {
        var shellEl = document.getElementById("fpHostGallery");
        if (shellEl) shellEl.classList.remove("fp-host-gallery--spot");
        box.hidden = true;
      };
    }
  }

  function showDrawerGate(show) {
    var gate = document.getElementById("fpGate");
    if (gate) gate.hidden = !show;
    W.document.body.classList.toggle("fp-gate-open", !!show);
    if (show) {
      var shell = document.getElementById("fpDrawerShell");
      if (shell) shell.hidden = true;
    }
  }

  function showDrawerShell(show) {
    var shell = document.getElementById("fpDrawerShell");
    if (shell) shell.hidden = !show;
    W.document.body.classList.toggle("fp-drawer", !!show);
  }

  function paintDrawerFromGame(gs) {
    if (!gs || !gs.phase || gs.phase === "lobby") {
      showDrawerShell(true);
      showPhase("wait");
      var lobby = document.getElementById("fpDrawerWaitMsg");
      if (lobby) lobby.textContent = "Waiting for the teacher to start the drawing round…";
      return;
    }
    if (gs.phase === "draw") {
      var subs = gs.submissions || {};
      var mine = subs[state.playerId];
      if (mine && mine.ready) {
        state.submitted = true;
        showDrawerShell(true);
        showPhase("wait");
        return;
      }
      if (!state.pickedPhrase) {
        showDrawerShell(true);
        showPhase("pick");
        paintPhraseOptions();
        return;
      }
      showDrawerShell(true);
      showPhase("draw");
      return;
    }
    if (gs.phase === "guess") {
      showDrawerShell(true);
      showPhase("wait");
      var hint = document.getElementById("fpDrawerWaitMsg");
      if (hint) hint.textContent = "Watch the screen — guess who drew what!";
      return;
    }
    showDrawerShell(false);
  }

  function showPhase(phase) {
    ["pick", "draw", "wait"].forEach(function (p) {
      var el = document.getElementById("fpPhase" + p.charAt(0).toUpperCase() + p.slice(1));
      if (el) el.hidden = phase !== p;
    });
  }

  function paintPhraseOptions() {
    var box = document.getElementById("fpPhraseOpts");
    if (!box) return;
    var opts = pickThreeOptions();
    box.innerHTML = "";
    opts.forEach(function (phrase) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "fp-phrase-opt";
      b.textContent = phrase;
      b.addEventListener("click", function () {
        state.pickedPhrase = phrase;
        document.getElementById("fpChosenPhrase").textContent = phrase;
        showPhase("draw");
        W.setTimeout(fitCanvas, 50);
      });
      box.appendChild(b);
    });
  }

  function fitCanvas() {
    var wrap = document.getElementById("fpCanvasWrap");
    if (!state.canvas || !state.ctx || !wrap) return;
    var w = Math.min(640, wrap.clientWidth || 320);
    var h = Math.min(420, Math.floor(w * 0.62));
    state.canvas.width = w;
    state.canvas.height = h;
    state.ctx.fillStyle = "#ffffff";
    state.ctx.fillRect(0, 0, w, h);
    state.ctx.lineCap = "round";
    state.ctx.lineJoin = "round";
  }

  function wireCanvas() {
    state.canvas = document.getElementById("fpDraw");
    if (!state.canvas) return;
    state.ctx = state.canvas.getContext("2d");
    state.canvas.addEventListener("mousedown", startDraw);
    state.canvas.addEventListener("mousemove", doDraw);
    state.canvas.addEventListener("mouseup", endDraw);
    state.canvas.addEventListener("mouseleave", endDraw);
    state.canvas.addEventListener("touchstart", startDraw, { passive: false });
    state.canvas.addEventListener("touchmove", doDraw, { passive: false });
    state.canvas.addEventListener("touchend", endDraw);
    W.addEventListener("resize", function () {
      if (W.document.body.classList.contains("fp-drawer")) fitCanvas();
    });
  }

  function pos(e) {
    var r = state.canvas.getBoundingClientRect();
    var cx = (e.touches ? e.touches[0].clientX : e.clientX) - r.left;
    var cy = (e.touches ? e.touches[0].clientY : e.clientY) - r.top;
    return {
      x: cx * (state.canvas.width / r.width),
      y: cy * (state.canvas.height / r.height)
    };
  }

  function lineStyle() {
    if (!state.ctx) return;
    var c = document.getElementById("fpPenColor");
    var s = document.getElementById("fpPenSize");
    state.ctx.strokeStyle = c ? c.value : "#111";
    state.ctx.lineWidth = s ? parseInt(s.value, 10) : 4;
  }

  function startDraw(e) {
    if (e.type === "touchstart") e.preventDefault();
    state.drawing = true;
    var p = pos(e);
    state.lastX = p.x;
    state.lastY = p.y;
    lineStyle();
  }

  function doDraw(e) {
    if (!state.drawing || !state.ctx) return;
    if (e.type === "touchmove") e.preventDefault();
    var p = pos(e);
    lineStyle();
    state.ctx.beginPath();
    state.ctx.moveTo(state.lastX, state.lastY);
    state.ctx.lineTo(p.x, p.y);
    state.ctx.stroke();
    state.lastX = p.x;
    state.lastY = p.y;
  }

  function endDraw() {
    state.drawing = false;
  }

  function clearCanvas() {
    if (!state.canvas || !state.ctx) return;
    state.ctx.fillStyle = "#ffffff";
    state.ctx.fillRect(0, 0, state.canvas.width, state.canvas.height);
  }

  function submitDrawing() {
    if (!state.pickedPhrase || !state.canvas) return;
    var msg = document.getElementById("fpDrawerMsg");
    setMsg(msg, "Sending…", null);
    var img = state.canvas.toDataURL("image/jpeg", 0.58);
    ensureApi()
      .pictSubmit({
        roomCode: state.roomCode,
        playerId: state.playerId,
        phrase: state.pickedPhrase,
        imageData: img
      })
      .then(function () {
        state.submitted = true;
        setMsg(msg, "", null);
        showPhase("wait");
        subscribe();
      })
      .catch(function (err) {
        setMsg(msg, String(err.message || err), false);
      });
  }

  function tryAutoRejoinStudent() {
    if (qs().get("as") !== "student" || !state.roomCode) return Promise.resolve(false);
    var savedId = "";
    var savedRoom = "";
    var savedName = readName();
    try {
      savedId = sessionStorage.getItem(SS_PLAYER) || "";
      savedRoom = sessionStorage.getItem(SS_ROOM) || "";
    } catch (e) {}
    if (!savedId || savedRoom !== state.roomCode || !savedName) return Promise.resolve(false);
    state.playerId = savedId;
    return ensureApi()
      .getSnapshot(state.roomCode)
      .then(function (snap) {
        var found = ((snap && snap.players) || []).some(function (p) {
          return p && (p.id === savedId || p.playerId === savedId) && !p.isHost;
        });
        if (!found) return false;
        state.role = "student";
        try {
          sessionStorage.setItem(SS_ROLE, "student");
        } catch (e2) {}
        subscribe();
        showDrawerGate(false);
        showDrawerShell(true);
        W.document.body.classList.add("fp-student");
        paintDrawerFromGame(snap.gameState);
        return true;
      })
      .catch(function () {
        return false;
      });
  }

  function joinAsStudent(name) {
    return ensureApi()
      .joinRoom({ roomCode: state.roomCode, displayName: name })
      .then(function (res) {
        state.playerId = res.playerId;
        state.role = "student";
        try {
          sessionStorage.setItem(SS_PLAYER, state.playerId);
          sessionStorage.setItem(SS_ROLE, "student");
          sessionStorage.setItem(SS_ROOM, state.roomCode);
          sessionStorage.removeItem(SS_HOST);
        } catch (e) {}
        saveName(name);
        subscribe();
        showDrawerGate(false);
        showDrawerShell(true);
        W.document.body.classList.add("fp-student");
      });
  }

  function startDrawRound() {
    var msg = document.getElementById("fpHostMsg");
    setMsg(msg, "Starting draw round…", null);
    ensureApi()
      .setGameState({
        roomCode: state.roomCode,
        hostToken: state.hostToken,
        gameState: {
          v: 1,
          phase: "draw",
          pack: String(state.getPack && state.getPack()) || "all",
          submissions: {},
          revealed: {}
        },
        baseVersion: state.lastGsVer,
        clearPending: true
      })
      .then(function (res) {
        if (res && res.gameStateVersion != null) state.lastGsVer = res.gameStateVersion;
        setMsg(msg, "Students: pick a phrase and draw on your phones.", true);
      })
      .catch(function (err) {
        setMsg(msg, String(err.message || err), false);
      });
  }

  function startGuessRound() {
    var msg = document.getElementById("fpHostMsg");
    ensureApi()
      .getSnapshot(state.roomCode)
      .then(function (snap) {
        var gs = (snap && snap.gameState) || {};
        var subs = gs.submissions || {};
        var ids = Object.keys(subs).filter(function (id) {
          return subs[id] && subs[id].ready && subs[id].imageData;
        });
        if (!ids.length) {
          setMsg(msg, "No drawings yet.", false);
          return;
        }
        var order = shuffle(ids);
        return ensureApi().setGameState({
          roomCode: state.roomCode,
          hostToken: state.hostToken,
          gameState: {
            v: 1,
            phase: "guess",
            pack: gs.pack || "all",
            submissions: subs,
            galleryOrder: order,
            revealed: {}
          },
          baseVersion: state.lastGsVer,
          clearPending: false
        });
      })
      .then(function (res) {
        if (!res) return;
        if (res.gameStateVersion != null) state.lastGsVer = res.gameStateVersion;
        setMsg(msg, "Guess who drew what — tap a drawing to reveal.", true);
      })
      .catch(function (err) {
        setMsg(msg, String(err.message || err), false);
      });
  }

  function injectUi() {
    if (document.getElementById("fpFab")) return;

    var fab = document.createElement("button");
    fab.type = "button";
    fab.className = "fp-fab";
    fab.id = "fpFab";
    fab.textContent = "Live";
    document.body.appendChild(fab);

    var panel = document.createElement("div");
    panel.className = "fp-panel";
    panel.id = "fpPanel";
    panel.hidden = true;
    panel.innerHTML =
      '<div class="fp-panel-inner">' +
      '<div class="fp-panel-hd"><strong>Pictionary Live</strong><button type="button" class="fp-x" id="fpClose">&times;</button></div>' +
      '<p class="fp-muted">Ученики по ссылке → выбирают фразу → рисуют → <strong>Ready</strong>. Вы на экране угадываете, кто что нарисовал.</p>' +
      '<button type="button" class="fp-btn fp-btn--pri" id="fpCreate">Create room</button>' +
      '<p class="fp-code" id="fpCodeRow" hidden>Code: <strong id="fpCodeLbl"></strong></p>' +
      '<button type="button" class="fp-btn" id="fpCopy" hidden>Copy student link</button>' +
      '<input class="fp-link" id="fpLink" readonly hidden />' +
      '<p class="fp-msg" id="fpHostMsg"></p>' +
      '<p class="fp-muted" id="fpPlayerList">Create room and share the link.</p>' +
      '<p class="fp-ready-count" id="fpReadyCount">Lobby</p>' +
      '<button type="button" class="fp-btn fp-btn--gold" id="fpStartDraw" hidden>Start drawing round</button>' +
      '<button type="button" class="fp-btn fp-btn--pri" id="fpStartGuess" hidden>Start guessing on screen</button>' +
      "</div>";
    document.body.appendChild(panel);

    var gate = document.createElement("div");
    gate.className = "fp-gate";
    gate.id = "fpGate";
    gate.hidden = true;
    gate.innerHTML =
      '<div class="fp-gate-card">' +
      "<h2>Pictionary</h2>" +
      '<p class="fp-muted">Room <strong id="fpGateCode"></strong></p>' +
      '<label class="fp-lbl">Your name</label>' +
      '<input type="text" id="fpName" maxlength="40" placeholder="Anna" autocomplete="nickname" />' +
      '<button type="button" class="fp-btn fp-btn--pri" id="fpJoin">Join &amp; draw</button>' +
      '<p class="fp-msg" id="fpJoinMsg"></p>' +
      "</div>";
    document.body.appendChild(gate);

    var drawer = document.createElement("div");
    drawer.className = "fp-drawer-shell";
    drawer.id = "fpDrawerShell";
    drawer.hidden = true;
    drawer.innerHTML =
      '<div class="fp-drawer-inner">' +
      '<div id="fpPhasePick">' +
      "<h2>Pick a phrase to draw</h2>" +
      '<p class="fp-muted">Tap one — others won&rsquo;t see your choice until reveal.</p>' +
      '<div class="fp-phrase-opts" id="fpPhraseOpts"></div>' +
      "</div>" +
      '<div id="fpPhaseDraw" hidden>' +
      "<h2>Draw: <span id=\"fpChosenPhrase\" class=\"fp-chosen\"></span></h2>" +
      '<div class="fp-tools">' +
      '<label>Pen <input type="color" id="fpPenColor" value="#111827" /></label>' +
      '<label>Size <input type="range" id="fpPenSize" min="2" max="14" value="4" /></label>' +
      '<button type="button" class="fp-btn fp-btn--sec" id="fpClear">Clear</button>' +
      "</div>" +
      '<div class="fp-canvas-wrap" id="fpCanvasWrap"><canvas id="fpDraw"></canvas></div>' +
      '<button type="button" class="fp-btn fp-btn--pri fp-btn--lg" id="fpReady">I&rsquo;m ready!</button>' +
      '<p class="fp-msg" id="fpDrawerMsg"></p>' +
      "</div>" +
      '<div id="fpPhaseWait" hidden>' +
      "<h2>Done!</h2>" +
      '<p class="fp-muted" id="fpDrawerWaitMsg">Waiting for the teacher to start guessing on the screen…</p>' +
      "</div>" +
      "</div>";
    document.body.appendChild(drawer);

    var gallery = document.createElement("div");
    gallery.className = "fp-host-gallery";
    gallery.id = "fpHostGallery";
    gallery.hidden = true;
    gallery.innerHTML =
      '<h2 class="fp-gallery-title">Who drew what?</h2>' +
      '<p class="fp-muted fp-gallery-lead">Class guesses — then tap <strong>Reveal</strong>.</p>' +
      '<div class="fp-gallery-grid" id="fpGalleryGrid"></div>' +
      '<div class="fp-gallery-spotlight" id="fpGallerySpotlight" hidden>' +
      '<button type="button" class="fp-btn fp-btn--sec fp-gallery-back" id="fpSpotBack">&larr; All drawings</button>' +
      '<p class="fp-spot-num" id="fpSpotNum"></p>' +
      '<img id="fpSpotImg" alt="" />' +
      '<p class="fp-spot-answer" id="fpSpotAnswer" hidden></p>' +
      '<button type="button" class="fp-btn fp-btn--pri" id="fpSpotReveal">Reveal who &amp; what</button>' +
      '<div class="fp-spot-nav">' +
      '<button type="button" class="fp-btn fp-btn--sec" id="fpSpotPrev">&larr; Prev</button>' +
      '<button type="button" class="fp-btn fp-btn--sec" id="fpSpotNext">Next &rarr;</button>' +
      "</div></div>";
    document.body.appendChild(gallery);

    fab.addEventListener("click", function () {
      panel.hidden = !panel.hidden;
    });
    document.getElementById("fpClose").addEventListener("click", function () {
      panel.hidden = true;
    });
    document.getElementById("fpCreate").addEventListener("click", function () {
      var msg = document.getElementById("fpHostMsg");
      setMsg(msg, "Creating…", null);
      ensureApi()
        .createRoom({
          deckId: deckId(),
          unitId: String(state.getPack && state.getPack()) || "",
          requestOrigin: W.location.origin
        })
        .then(function (res) {
          state.roomCode = res.roomCode;
          state.hostToken = res.hostToken;
          state.role = "host";
          try {
            sessionStorage.setItem(SS_HOST, state.hostToken);
            sessionStorage.setItem(SS_ROOM, state.roomCode);
            sessionStorage.setItem(SS_ROLE, "host");
          } catch (e) {}
          var link = studentLink(state.roomCode);
          document.getElementById("fpLink").value = link;
          document.getElementById("fpLink").hidden = false;
          document.getElementById("fpCopy").hidden = false;
          document.getElementById("fpCodeRow").hidden = false;
          document.getElementById("fpCodeLbl").textContent = state.roomCode;
          document.getElementById("fpStartDraw").hidden = false;
          setMsg(msg, "Room " + state.roomCode + " · link copied", true);
          if (navigator.clipboard) navigator.clipboard.writeText(link);
          subscribe();
          W.document.body.classList.add("fp-host");
          panel.hidden = false;
        })
        .catch(function (err) {
          setMsg(msg, String(err.message || err), false);
        });
    });
    document.getElementById("fpCopy").addEventListener("click", function () {
      var v = document.getElementById("fpLink").value;
      if (navigator.clipboard) navigator.clipboard.writeText(v);
      setMsg(document.getElementById("fpHostMsg"), "Link copied.", true);
    });
    document.getElementById("fpStartDraw").addEventListener("click", startDrawRound);
    document.getElementById("fpStartGuess").addEventListener("click", startGuessRound);
    document.getElementById("fpJoin").addEventListener("click", function () {
      var name = String(document.getElementById("fpName").value || "").trim();
      if (!name) {
        setMsg(document.getElementById("fpJoinMsg"), "Enter your name.", false);
        return;
      }
      joinAsStudent(name).catch(function (err) {
        setMsg(document.getElementById("fpJoinMsg"), String(err.message || err), false);
      });
    });
    document.getElementById("fpClear").addEventListener("click", clearCanvas);
    document.getElementById("fpReady").addEventListener("click", submitDrawing);
    wireCanvas();
  }

  function mount(opts) {
    opts = opts || {};
    state.deckPrefix = opts.deckPrefix || "fce-u1-pict";
    state.getPhrases = opts.getPhrases || null;
    state.getPack = opts.getPack || null;
    injectUi();

    var room = qs().get("room");
    if (room) {
      state.roomCode = String(room).toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 12);
      var gateCode = document.getElementById("fpGateCode");
      if (gateCode) gateCode.textContent = state.roomCode;

      if (qs().get("as") === "student") {
        try {
          sessionStorage.removeItem(SS_HOST);
          if (sessionStorage.getItem(SS_ROLE) === "host") sessionStorage.removeItem(SS_ROLE);
        } catch (e) {}
        var nameIn = document.getElementById("fpName");
        if (nameIn && readName()) nameIn.value = readName();
        tryAutoRejoinStudent().then(function (ok) {
          if (!ok) showDrawerGate(true);
        });
      } else {
        try {
          if (
            sessionStorage.getItem(SS_ROLE) === "host" &&
            sessionStorage.getItem(SS_ROOM) === state.roomCode &&
            sessionStorage.getItem(SS_HOST)
          ) {
            state.hostToken = sessionStorage.getItem(SS_HOST);
            state.role = "host";
            subscribe();
            W.document.body.classList.add("fp-host");
            document.getElementById("fpStartDraw").hidden = false;
            var inp = document.getElementById("fpLink");
            if (inp) {
              inp.value = studentLink(state.roomCode);
              inp.hidden = false;
            }
            document.getElementById("fpCopy").hidden = false;
            document.getElementById("fpCodeRow").hidden = false;
            document.getElementById("fpCodeLbl").textContent = state.roomCode;
          }
        } catch (e2) {}
      }
    }
  }

  W.FceClassPictLive = { mount: mount };
})(typeof window !== "undefined" ? window : globalThis);
