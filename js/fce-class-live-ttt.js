/**
 * FCE Class Live — Tic-tac-toe rooms (teacher link + student names + synced board).
 *
 * FceClassLiveTtt.mount({
 *   deckPrefix: "fce-u1-ttt-gaps",
 *   getEngine: () => engineApi,
 *   getPack: () => "all",
 *   onRostersFromLive: (rx, ro) => {}
 * })
 */
(function (W) {
  "use strict";

  var SS_HOST = "fceLiveHostToken";
  var SS_ROOM = "fceLiveRoomCode";
  var SS_PLAYER = "fceLivePlayerId";
  var SS_ROLE = "fceLiveRole";
  var SS_NAME = "fceLiveDisplayName";
  var SS_TEAM = "fceLiveTeam";
  var SS_HOST_PLAYING = "fceLiveHostPlaying";

  var state = {
    api: null,
    unsub: null,
    roomCode: "",
    hostToken: "",
    playerId: "",
    role: "",
    team: "",
    hostPlaying: false,
    deckPrefix: "fce-u1-ttt-gaps",
    getEngine: null,
    getPack: null,
    answerMode: "teacher-mcq",
    lastGsVer: 0,
    lastActionAt: 0,
    lastPhase: "",
    lastPlayerCount: 0,
    introPlayed: false,
    joinedAsPlayer: false,
    replacePlayerId: ""
  };

  function splashGridMarkup() {
    return (
      '<div class="fcl-splash-grid" aria-hidden="true">' +
      '<span class="fcl-splash-cell fcl-splash-cell--x">X</span>' +
      '<span class="fcl-splash-cell"></span>' +
      '<span class="fcl-splash-cell fcl-splash-cell--o">O</span>' +
      '<span class="fcl-splash-cell"></span>' +
      '<span class="fcl-splash-cell fcl-splash-cell--x">X</span>' +
      '<span class="fcl-splash-cell"></span>' +
      '<span class="fcl-splash-cell"></span>' +
      '<span class="fcl-splash-cell fcl-splash-cell--o">O</span>' +
      '<span class="fcl-splash-cell"></span>' +
      "</div>"
    );
  }

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

  function deckId() {
    var pack = "";
    try {
      pack = String(state.getPack && state.getPack()) || "all";
    } catch (e) {}
    return state.deckPrefix + ":" + pack;
  }

  /** Same paths as server/live-rooms-server.js DECK_PATHS */
  var DECK_PATH_HINTS = {
    "fce-u1-ttt-gaps": "/unit1-class-games/tic-tac-toe-gaps.html",
    "fce-u1-ttt-pair": "/unit1-class-games/pair-questions.html"
  };

  function isBadWebPath(path) {
    var p = String(path || "");
    if (!p || p.charAt(0) !== "/") return true;
    /* file:// on Windows → /C:/Users/... */
    if (/^\/[A-Za-z]:\//.test(p)) return true;
    return false;
  }

  function deckPathHint() {
    var hinted = DECK_PATH_HINTS[state.deckPrefix];
    if (hinted) return hinted;
    try {
      var p = W.location.pathname || "";
      if (!isBadWebPath(p)) return p;
    } catch (e) {}
    return "/unit1-class-games/tic-tac-toe-gaps.html";
  }

  function pathFromUrl(link) {
    try {
      return new URL(link).pathname;
    } catch (e) {
      return "";
    }
  }

  function ensureApi() {
    if (state.api) return state.api;
    if (!W.LiveGameApi || !W.LiveGameHttp) {
      throw new Error("LiveGameApi not loaded");
    }
    var url = String(W.__FCE_LIVE_API_URL__ || "http://127.0.0.1:8787/live");
    W.LiveGameApi.registerDriver("http", W.LiveGameHttp.buildDriver(url));
    state.api = W.LiveGameApi.createClient({ driver: "http" });
    return state.api;
  }

  function liveHealthUrl() {
    var base = String(W.__FCE_LIVE_API_URL__ || "http://127.0.0.1:8787/live").replace(
      /\/live\/?$/,
      ""
    );
    return base + "/health";
  }

  function pingLiveServer(cb) {
    var url = liveHealthUrl();
    if (!W.fetch) {
      cb(false);
      return;
    }
    W.fetch(url)
      .then(function (r) {
        cb(!!(r && r.ok));
      })
      .catch(function () {
        cb(false);
      });
  }

  function liveServerHelpHtml() {
    return (
      "Сервер Live не запущен. " +
      "Дважды щёлкните <strong>OPEN-FCE-CLASS-LIVE.bat</strong> в папке проекта " +
      "(чёрное окно не закрывать). " +
      "Или в терминале: <strong>npm run live:local</strong>."
    );
  }

  function formatJoinError(err) {
    var msg = String((err && err.message) || err || "");
    if (/fetch|network|failed/i.test(msg)) {
      return (
        "Не удалось связаться с сервером Live. " +
        "Если в ссылке <strong>127.0.0.1</strong> — с телефона не откроется: " +
        "учитель должен создать комнату через IP Wi‑Fi (192.168…), см. чёрное окно live:local. " +
        "Сервер Live должен быть запущен на компьютере учителя."
      );
    }
    if (/not found/i.test(msg)) {
      return "Комната не найдена — сервер перезапустили. Попросите учителя нажать Create room ещё раз.";
    }
    return msg;
  }

  function linkUsesLocalhostOnly(link) {
    return /https?:\/\/127\.0\.0\.1/i.test(String(link || ""));
  }

  function ensureStudentInviteParams(link) {
    var raw = String(link || "").trim();
    if (!raw) return raw;
    try {
      var u = new URL(raw, W.location.href);
      u.searchParams.set("as", "student");
      return u.href;
    } catch (e) {
      if (/[?&]as=student(?:&|$)/i.test(raw)) return raw;
      return raw + (raw.indexOf("?") >= 0 ? "&" : "?") + "as=student";
    }
  }

  function inviteLinkFromServer(res, roomCode) {
    /* Prefer link from deck registry (EGE pattern) — never file:// pathname */
    var local = ensureStudentInviteParams(
      String(studentLink(roomCode) || "")
        .trim()
        .replace(/\s+/g, "")
    );
    if (local && local.indexOf("room=") >= 0 && !isBadWebPath(pathFromUrl(local))) {
      return local;
    }
    var remote = ensureStudentInviteParams(
      String((res && res.studentUrl) || "")
        .trim()
        .replace(/\s+/g, "")
    );
    return remote || local;
  }

  function syncUrlWithRoom(code) {
    try {
      var u = new URL(W.location.href);
      if (code) u.searchParams.set("room", String(code).toUpperCase());
      else u.searchParams.delete("room");
      W.history.replaceState({}, "", u.pathname + u.search + u.hash);
    } catch (e) {}
  }

  function openPanel(show) {
    var panel = document.getElementById("fclPanel");
    if (!panel) return;
    panel.hidden = show === false;
  }

  function showStudentGate(show) {
    var gate = document.getElementById("fclGate");
    if (gate) gate.hidden = !show;
    W.document.body.classList.toggle("fcl-gate-open", !!show);
    if (show) {
      showStudentShell(false);
      W.document.body.classList.remove("fcl-student");
    }
  }

  function resetStudentJoinLocal() {
    state.joinedAsPlayer = false;
    state.playerId = "";
    state.team = "";
    if (state.role === "student") state.role = "";
    try {
      sessionStorage.removeItem(SS_PLAYER);
      sessionStorage.removeItem(SS_TEAM);
      if (sessionStorage.getItem(SS_ROLE) === "student") {
        sessionStorage.removeItem(SS_ROLE);
      }
      sessionStorage.removeItem(SS_HOST_PLAYING);
    } catch (e) {}
  }

  function clearHostSessionForStudentEntry() {
    try {
      sessionStorage.removeItem(SS_HOST);
      sessionStorage.removeItem(SS_HOST_PLAYING);
      if (sessionStorage.getItem(SS_ROLE) === "host") {
        sessionStorage.removeItem(SS_ROLE);
      }
    } catch (e) {}
  }

  function openStudentGatePrefill() {
    showStudentGate(true);
    openPanel(false);
    showStudentShell(false);
    W.document.body.classList.remove(
      "fcl-host",
      "fcl-student",
      "fcl-host-playing",
      "fcl-game-on"
    );
    var nameInp = document.getElementById("fclName");
    var saved = readName();
    if (nameInp) {
      if (saved) nameInp.value = saved;
      W.setTimeout(function () {
        nameInp.focus();
      }, 100);
    }
  }

  function isStudentJoinUrl() {
    return qs().get("as") === "student";
  }

  function syncNameFromSnapshot(snap) {
    if (!state.playerId || !snap || !snap.players) return;
    var me = null;
    (snap.players || []).forEach(function (p) {
      if (p && p.id === state.playerId) me = p;
    });
    if (me && me.displayName) {
      saveName(me.displayName);
      if (me.team === "O" || me.team === "X") state.team = me.team;
    }
  }

  function canAutoRejoinStudent() {
    try {
      var savedName = readName();
      var pid = sessionStorage.getItem(SS_PLAYER);
      return !!(
        savedName &&
        pid &&
        sessionStorage.getItem(SS_ROOM) === state.roomCode &&
        sessionStorage.getItem(SS_ROLE) === "student"
      );
    } catch (e) {
      return false;
    }
  }

  function beginStudentJoin(name) {
    saveName(name);
    var replaceId = state.replacePlayerId || "";
    state.replacePlayerId = "";
    state.playerId = "";
    state.role = "";
    state.team = "";
    state.joinedAsPlayer = false;
    try {
      sessionStorage.removeItem(SS_PLAYER);
      sessionStorage.removeItem(SS_TEAM);
      sessionStorage.removeItem(SS_HOST_PLAYING);
    } catch (e) {}
    return joinAsStudent(name, replaceId);
  }

  function studentLink(code) {
    var origin = String(W.__FCE_LIVE_PUBLIC_ORIGIN__ || "").replace(/\/$/, "");
    if (!origin) {
      try {
        if (W.location.protocol === "http:" || W.location.protocol === "https:") {
          origin = W.location.protocol + "//" + W.location.host;
        }
      } catch (eO) {}
    }
    if (!origin) origin = "http://127.0.0.1:8787";

    var path = deckPathHint();
    if (!/\.html(?:$|\?)/i.test(path)) {
      path = DECK_PATH_HINTS[state.deckPrefix] || "/unit1-class-games/tic-tac-toe-gaps.html";
    }
    if (path.charAt(0) !== "/") path = "/" + path;

    var pack = "";
    try {
      pack = String(state.getPack && state.getPack()) || "";
    } catch (e2) {}
    var link =
      origin + path + "?room=" + encodeURIComponent(String(code || "").toUpperCase()) + "&as=student";
    if (pack && pack !== "all") link += "&pack=" + encodeURIComponent(pack);
    return link;
  }

  function setMsg(node, text, ok) {
    if (!node) return;
    node.textContent = text || "";
    node.className = "fcl-msg" + (ok === true ? " ok" : ok === false ? " bad" : "");
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

  function rostersFromPlayers(players) {
    var rx = [];
    var ro = [];
    (players || []).forEach(function (p) {
      if (!p || !p.displayName) return;
      if (p.team === "X") rx.push(p.displayName);
      else if (p.team === "O") ro.push(p.displayName);
    });
    return { rx: rx, ro: ro };
  }

  function publishState(clearPending) {
    var eng = state.getEngine && state.getEngine();
    if (!eng || !eng.exportState || state.role !== "host" || !state.roomCode) return;
    var gs = eng.exportState();
    gs.answerMode = state.answerMode;
    ensureApi()
      .setGameState({
        roomCode: state.roomCode,
        hostToken: state.hostToken,
        gameState: gs,
        baseVersion: state.lastGsVer,
        clearPending: !!clearPending
      })
      .then(function (res) {
        if (res && res.gameStateVersion != null) {
          state.lastGsVer = res.gameStateVersion;
        }
      })
      .catch(function () {});
  }

  function processPending(snap) {
    if (state.role !== "host" || !snap || !snap.pendingTttActions) return;
    var eng = state.getEngine && state.getEngine();
    if (!eng || !eng.applyStudentAction) return;
    var list = snap.pendingTttActions;
    var i;
    for (i = 0; i < list.length; i++) {
      var a = list[i];
      if (!a || !a.at || a.at <= state.lastActionAt) continue;
      var handled =
        (eng.applyStudentPick && eng.applyStudentPick(a)) ||
        (eng.applyStudentAction && eng.applyStudentAction(a));
      if (handled) {
        state.lastActionAt = a.at;
        publishState(true);
      }
    }
  }

  function showRosterDock(show) {
    var fold = document.getElementById("fclLobbyRosterFold");
    if (fold) fold.hidden = !show;
  }

  function showStudentShell(show) {
    var shell = document.getElementById("fclStudentShell");
    if (shell) shell.hidden = !show;
  }

  function teamLabel(team) {
    if (team === "X") return "Crosses · X";
    if (team === "O") return "Noughts · O";
    return "—";
  }

  function rostersFromTextareas() {
    function parse(el) {
      if (!el) return [];
      return String(el.value || "")
        .split(/\n|,/)
        .map(function (s) {
          return s.trim();
        })
        .filter(Boolean)
        .slice(0, 24);
    }
    return { rx: parse(document.getElementById("tttRosterX")), ro: parse(document.getElementById("tttRosterO")) };
  }

  function rostersForLiveStart(snap) {
    var fromServer = rostersFromPlayers((snap && snap.players) || []);
    var students = ((snap && snap.players) || []).filter(function (p) {
      return p && p.displayName && !p.isHost;
    });
    if (students.length >= 2 && fromServer.rx.length && fromServer.ro.length) {
      return fromServer;
    }
    var local = rostersFromTextareas();
    if (local.rx.length >= 1 && local.ro.length >= 1) {
      return local;
    }
    return null;
  }

  function paintHostLobbyStatus(players) {
    var countEl = document.getElementById("fclRosterCount");
    var list = (players || []).filter(function (p) {
      return p && p.displayName && !p.isHost;
    });
    if (countEl) countEl.textContent = String(list.length);
    var mini = document.getElementById("fclPlayerList");
    if (mini) {
      mini.textContent = list.length
        ? "Online: " + list.map(function (p) { return p.displayName; }).join(", ")
        : "No one online yet — type names on the board below, then Start live game.";
    }
    var fold = document.getElementById("fclLobbyRosterFold");
    if (fold && state.role === "host" && state.roomCode) {
      fold.hidden = list.length < 1;
    }
    var boxX = document.getElementById("fclRosterMiniX");
    var boxO = document.getElementById("fclRosterMiniO");
    if (!boxX || !boxO) return;
    var xHtml = [];
    var oHtml = [];
    list.forEach(function (p) {
      var row =
        '<span class="fcl-roster-mini-chip fcl-roster-mini-chip--' +
        (p.team === "O" ? "o" : p.team === "X" ? "x" : "u") +
        '">' +
        esc(p.displayName) +
        "</span>";
      if (p.team === "O") oHtml.push(row);
      else if (p.team === "X") xHtml.push(row);
      else xHtml.push(row);
    });
    boxX.innerHTML = xHtml.length ? xHtml.join("") : "—";
    boxO.innerHTML = oHtml.length ? oHtml.join("") : "—";
    syncTextareasFromOnline(list);
  }

  function syncTextareasFromOnline(list) {
    if (state.role !== "host" || state.lastPhase === "playing") return;
    var rx = [];
    var ro = [];
    (list || []).forEach(function (p) {
      if (!p || !p.displayName) return;
      if (p.team === "O") ro.push(p.displayName);
      else if (p.team === "X") rx.push(p.displayName);
    });
    if (!rx.length && !ro.length) return;
    var tx = document.getElementById("tttRosterX");
    var to = document.getElementById("tttRosterO");
    if (tx && rx.length) tx.value = rx.join("\n");
    if (to && ro.length) to.value = ro.join("\n");
  }

  function paintRosterDock(players) {
    paintHostLobbyStatus(players);
  }

  function paintStudentLobbyRoster(snap) {
    var box = document.getElementById("fclStudentLobbyRoster");
    if (!box) return;
    var list = ((snap && snap.players) || []).filter(function (p) {
      return p && p.displayName && !p.isHost;
    });
    if (!list.length) {
      box.innerHTML = '<p class="fcl-muted">You are first — others will appear here.</p>';
      return;
    }
    box.innerHTML =
      '<div class="fcl-student-lobby-cols">' +
      '<div><span class="fcl-roster-col-k">X</span>' +
      list
        .filter(function (p) {
          return p.team === "X";
        })
        .map(function (p) {
          return '<span class="fcl-student-lobby-chip">' + esc(p.displayName) + "</span>";
        })
        .join("") +
      "</div>" +
      '<div><span class="fcl-roster-col-k">O</span>' +
      list
        .filter(function (p) {
          return p.team === "O";
        })
        .map(function (p) {
          return '<span class="fcl-student-lobby-chip">' + esc(p.displayName) + "</span>";
        })
        .join("") +
      "</div></div>";
  }

  function lobbyPlayerCount(snap) {
    return ((snap && snap.players) || []).filter(function (p) {
      return p && p.displayName && !p.isHost;
    }).length;
  }

  function lobbyPulseText(snap) {
    var n = lobbyPlayerCount(snap);
    if (state.role === "host" && state.hostPlaying) {
      if (n < 2) return "Share the link — waiting for your partner…";
      return "Ready! Press Start live game in the Live panel →";
    }
    if (n < 2) return "Waiting for more players to join…";
    return "Waiting for the teacher to start…";
  }

  function paintStudentLobby(snap) {
    syncNameFromSnapshot(snap);
    if (
      state.role === "student" &&
      (!state.joinedAsPlayer || !state.playerId || !readName())
    ) {
      openStudentGatePrefill();
      return;
    }
    var lobby = document.getElementById("fclStudentLobby");
    var game = document.getElementById("fclStudentGame");
    var intro = document.getElementById("fclStudentIntro");
    if (intro) intro.hidden = true;
    if (game) game.hidden = true;
    if (!lobby) return;
    lobby.hidden = false;

    var teamEl = document.getElementById("fclStudentTeamBadge");
    if (teamEl) {
      teamEl.textContent = teamLabel(state.team);
      teamEl.className =
        "fcl-student-team fcl-student-team--" + (state.team === "O" ? "o" : "x");
    }
    var nameEl = document.getElementById("fclStudentNameLbl");
    var saved = readName();
    if (nameEl) nameEl.textContent = saved || "…";

    paintStudentLobbyRoster(snap);

    var pulse = document.getElementById("fclStudentLobbyPulse");
    if (pulse) pulse.textContent = lobbyPulseText(snap);
  }

  function updateHostPlayUi() {
    var fold = document.getElementById("fclHostPlayFold");
    var joinBtn = document.getElementById("fclHostPlayJoin");
    var nameInp = document.getElementById("fclHostPlayName");
    var status = document.getElementById("fclHostPlayMsg");
    if (fold) fold.hidden = !state.roomCode || state.role !== "host";
    if (state.hostPlaying) {
      if (joinBtn) joinBtn.hidden = true;
      if (nameInp) nameInp.hidden = true;
      if (status) {
        status.textContent =
          "You: " + (readName() || "—") + " · " + teamLabel(state.team);
        status.className = "fcl-msg ok";
      }
    } else {
      if (joinBtn) joinBtn.hidden = false;
      if (nameInp) {
        nameInp.hidden = false;
        if (!nameInp.value && readName()) nameInp.value = readName();
      }
      if (status) {
        status.textContent = "";
        status.className = "fcl-msg";
      }
    }
  }

  function updateHostProjectorUi() {
    var isHost = state.role === "host" && !!state.roomCode;
    W.document.body.classList.toggle("fcl-host", isHost);
    var localStart = document.getElementById("tttBtnStart");
    if (localStart) localStart.hidden = isHost;
    var setupSub = document.querySelector("#tttSetup .sub");
    if (setupSub) {
      setupSub.innerHTML = isHost
        ? "<strong>Live:</strong> type names for X and O below, then <strong>Start live game</strong> in Live. Gap questions stay on this screen only."
        : "Local: type rosters below. <strong>Live</strong>: students join with name only — teams assigned automatically.";
    }
  }

  function notifyHostPlayerJoin(snap) {
    var list = ((snap && snap.players) || []).filter(function (p) {
      return p && p.displayName && !p.isHost;
    });
    var n = list.length;
    if (state.lastPlayerCount > 0 && n > state.lastPlayerCount) {
      if (n === 1) {
        setMsg(document.getElementById("fclHostMsg"), list[0].displayName + " joined online.", true);
      } else {
        setMsg(
          document.getElementById("fclHostMsg"),
          list[list.length - 1].displayName + " joined · " + n + " online",
          true
        );
      }
    }
    state.lastPlayerCount = n;
    paintHostLobbyStatus(list);
  }

  function playStudentIntro(snap) {
    if (state.introPlayed) return;
    state.introPlayed = true;
    var lobby = document.getElementById("fclStudentLobby");
    var intro = document.getElementById("fclStudentIntro");
    var game = document.getElementById("fclStudentGame");
    if (lobby) lobby.hidden = true;
    if (game) game.hidden = true;
    if (!intro) return;
    intro.hidden = false;
    var teamBig = document.getElementById("fclIntroTeam");
    if (teamBig) {
      teamBig.textContent = state.team === "O" ? "O" : "X";
      teamBig.className =
        "fcl-intro-team fcl-intro-team--" + (state.team === "O" ? "o" : "x");
    }
    var sub = document.getElementById("fclIntroSub");
    if (sub) {
      sub.textContent =
        state.team === "O"
          ? "Noughts — watch the board, jump in on your turn!"
          : "Crosses — watch the board, jump in on your turn!";
    }
    W.setTimeout(function () {
      intro.hidden = true;
      paintStudentPlaying(snap);
    }, 2600);
  }

  function paintStudentBoard(gs, options) {
    var boardEl = document.getElementById("fclStudentBoard");
    if (!boardEl) return;
    options = options || {};
    boardEl.innerHTML = "";
    if (!gs || !gs.board) return;
    var canPick = !!options.canPick;
    var onPick = typeof options.onPick === "function" ? options.onPick : null;
    var i;
    for (i = 0; i < 9; i++) {
      var btn = W.document.createElement("button");
      btn.type = "button";
      btn.className = "fcl-stu-cell";
      btn.setAttribute("data-i", String(i));
      if (gs.board[i]) {
        btn.className += " fcl-stu-cell--" + String(gs.board[i]).toLowerCase();
        btn.className += " fcl-stu-cell--taken";
        btn.textContent = gs.board[i];
        btn.disabled = true;
      } else {
        btn.innerHTML = '<span class="fcl-stu-cell-num">' + String(i + 1) + "</span>";
        if (gs.activeCell === i) btn.className += " fcl-stu-cell--active";
        if (canPick && onPick) {
          (function (cell) {
            btn.addEventListener("click", function () {
              onPick(cell);
            });
          })(i);
        } else {
          btn.disabled = true;
        }
      }
      boardEl.appendChild(btn);
    }
  }

  function paintStudentPlaying(snap) {
    var lobby = document.getElementById("fclStudentLobby");
    var game = document.getElementById("fclStudentGame");
    if (lobby) lobby.hidden = true;
    if (!game) return;
    game.hidden = false;

    var gs = snap && snap.gameState;
    var status = document.getElementById("fclStudentGameStatus");
    if (!gs) {
      if (status) status.textContent = "Connecting to the game…";
      return;
    }

    var sym = gs.move % 2 === 0 ? "X" : "O";
    var roster = sym === "X" ? gs.rosterX : gs.rosterO;
    var idx = sym === "X" ? gs.turnIndexX : gs.turnIndexO;
    var speaker = roster && roster.length ? roster[idx % roster.length] : "—";
    var myName = readName();
    var isMyTurn =
      String(myName || "").trim().toLowerCase() ===
      String(speaker || "").trim().toLowerCase();

    if (status) {
      if (gs.over) {
        status.textContent = "Round over — watch the screen.";
      } else if (isMyTurn && gs.activeCell != null && !gs.qLocked) {
        status.textContent = "Your turn! Answer below.";
      } else if (isMyTurn && gs.activeCell == null) {
        status.textContent =
          gs.answerMode && String(gs.answerMode).indexOf("student") === 0
            ? "Your turn — tap a square on the board below."
            : "Your turn — wait for a square on the projector.";
      } else if (isMyTurn) {
        status.textContent = "Your turn — wait for a square on the board.";
      } else {
        status.textContent = speaker + " (" + sym + ") · watch the board";
      }
    }

    var eng = state.getEngine && state.getEngine();
    if (eng && eng.renderStudentPanel) {
      eng.renderStudentPanel(snap, state.playerId);
    }
  }

  function resetHostBoardUi() {
    W.document.body.classList.remove("ttt-body--playing");
    var setup = document.getElementById("tttSetupBlock");
    var game = document.getElementById("tttScreenGame");
    if (setup) setup.hidden = false;
    if (game) {
      game.classList.remove("is-on");
      game.setAttribute("aria-hidden", "true");
    }
  }

  function applySnapshot(snap) {
    if (!snap) return;
    var eng = state.getEngine && state.getEngine();
    var importGs =
      snap.gameState &&
      snap.gameStateVersion > state.lastGsVer &&
      eng &&
      eng.importState &&
      (state.role === "student" || snap.phase === "playing");
    if (importGs) {
      state.lastGsVer = snap.gameStateVersion;
      eng.importState(snap.gameState);
      if (snap.gameState.answerMode) {
        state.answerMode = snap.gameState.answerMode;
        var sel = document.getElementById("fclAnswerMode");
        if (sel) sel.value = state.answerMode;
      }
    }
    if (state.role === "host") {
      showStudentGate(false);
      showStudentShell(false);
      W.document.body.classList.remove("fcl-student", "fcl-host-playing", "fcl-game-on");
      if (snap.phase === "lobby" && state.lastPhase === "playing") {
        resetHostBoardUi();
      }
      processPending(snap);
      paintHostLobbyStatus(snap.players || []);
      notifyHostPlayerJoin(snap);
      updateHostPlayUi();
    }
    if (state.role === "student") {
      syncNameFromSnapshot(snap);
      if (!state.joinedAsPlayer || !state.playerId || !readName()) {
        openStudentGatePrefill();
        return;
      }
      showStudentGate(false);
      showStudentShell(true);
      W.document.body.classList.add("fcl-student");
      if (snap.phase === "lobby") {
        state.introPlayed = false;
        paintStudentLobby(snap);
      } else if (snap.phase === "playing") {
        if (state.lastPhase !== "playing") {
          playStudentIntro(snap);
        } else {
          paintStudentPlaying(snap);
        }
      }
    }
    state.lastPhase = snap.phase || state.lastPhase;
  }

  function paintLobbyPlayers(players) {
    paintRosterDock(players);
  }

  function subscribe() {
    if (state.unsub) state.unsub();
    if (!state.roomCode) return;
    state.unsub = ensureApi().subscribeRoom(state.roomCode, applySnapshot);
  }

  function joinAsStudent(name, replacePlayerId) {
    var code = state.roomCode;
    var payload = { roomCode: code, displayName: name };
    if (replacePlayerId) payload.replacePlayerId = replacePlayerId;
    return ensureApi()
      .joinRoom(payload)
      .then(function (res) {
        state.playerId = res.playerId;
        state.role = "student";
        state.team = res.team === "O" ? "O" : "X";
        state.joinedAsPlayer = true;
        try {
          sessionStorage.setItem(SS_PLAYER, state.playerId);
          sessionStorage.setItem(SS_ROLE, "student");
          sessionStorage.setItem(SS_TEAM, state.team);
          sessionStorage.setItem(SS_ROOM, code);
          sessionStorage.removeItem(SS_HOST);
          sessionStorage.removeItem(SS_HOST_PLAYING);
        } catch (e) {}
        saveName(name);
        subscribe();
        showStudentGate(false);
        showStudentShell(true);
        W.document.body.classList.add("fcl-student");
        W.document.body.classList.remove("fcl-host", "fcl-host-playing");
      });
  }

  function joinAsHostPlayer(name) {
    if (state.role !== "host" || !state.roomCode) {
      return Promise.reject(new Error("Create room first"));
    }
    return ensureApi()
      .joinRoom({ roomCode: state.roomCode, displayName: name })
      .then(function (res) {
        state.hostPlaying = true;
        state.playerId = res.playerId;
        state.team = res.team === "O" ? "O" : "X";
        state.joinedAsPlayer = true;
        saveName(name);
        try {
          sessionStorage.setItem(SS_PLAYER, state.playerId);
          sessionStorage.setItem(SS_TEAM, state.team);
          sessionStorage.setItem(SS_HOST_PLAYING, "1");
        } catch (e) {}
        updateHostPlayUi();
        subscribe();
        return ensureApi().getSnapshot(state.roomCode).then(function (snap) {
          applySnapshot(snap);
        });
      });
  }

  function startHostGame() {
    var msgEl = document.getElementById("fclHostMsg");
    var eng = state.getEngine && state.getEngine();
    if (!eng) {
      setMsg(msgEl, "Game engine not ready — refresh the page.", false);
      return;
    }
    if (state.role !== "host" || !state.roomCode || !state.hostToken) {
      setMsg(msgEl, "Create room first (Live → Create room).", false);
      return;
    }
    setMsg(msgEl, "Starting…", null);
    ensureApi()
      .getSnapshot(state.roomCode)
      .then(function (snap) {
        var ro = rostersForLiveStart(snap);
        if (!ro || ro.rx.length < 1 || ro.ro.length < 1) {
          setMsg(
            msgEl,
            "Enter at least one name for X and one for O on the board (or wait for students online).",
            false
          );
          return;
        }
        var tx = document.getElementById("tttRosterX");
        var to = document.getElementById("tttRosterO");
        if (tx) tx.value = ro.rx.join("\n");
        if (to) to.value = ro.ro.join("\n");
        return ensureApi()
          .setPhase({
            roomCode: state.roomCode,
            hostToken: state.hostToken,
            phase: "playing"
          })
          .then(function () {
            if (eng.startLiveRound) {
              eng.startLiveRound({
                rosterX: ro.rx,
                rosterO: ro.ro,
                answerMode: state.answerMode,
                liveRole: "host"
              });
            } else if (eng.newRound) {
              eng.newRound();
            }
            publishState(true);
            setMsg(msgEl, "Live game started!", true);
          });
      })
      .catch(function (err) {
        setMsg(msgEl, formatJoinError(err), false);
      });
  }

  function endHostGame() {
    var msgEl = document.getElementById("fclHostMsg");
    if (state.role !== "host" || !state.roomCode || !state.hostToken) {
      setMsg(msgEl, "No active room.", false);
      return;
    }
    setMsg(msgEl, "Ending game…", null);
    ensureApi()
      .setPhase({
        roomCode: state.roomCode,
        hostToken: state.hostToken,
        phase: "lobby"
      })
      .then(function () {
        return ensureApi().setGameState({
          roomCode: state.roomCode,
          hostToken: state.hostToken,
          gameState: null,
          baseVersion: state.lastGsVer,
          clearPending: true
        });
      })
      .then(function (res) {
        if (res && res.gameStateVersion != null) {
          state.lastGsVer = res.gameStateVersion;
        }
        state.lastPhase = "lobby";
        state.introPlayed = false;
        resetHostBoardUi();
        setMsg(msgEl, "Game ended — board reset.", true);
        paintHostLobbyStatus([]);
      })
      .catch(function (err) {
        setMsg(msgEl, formatJoinError(err), false);
      });
  }

  function injectUi() {
    if (document.getElementById("fclFab")) return;

    var fab = document.createElement("button");
    fab.type = "button";
    fab.className = "fcl-fab";
    fab.id = "fclFab";
    fab.textContent = "Live";
    document.body.appendChild(fab);

    var panel = document.createElement("div");
    panel.className = "fcl-panel";
    panel.id = "fclPanel";
    panel.hidden = true;
    panel.innerHTML =
      '<div class="fcl-panel-inner">' +
      '<div class="fcl-panel-hd"><strong>Class Live</strong><button type="button" class="fcl-x" id="fclClose" aria-label="Close">&times;</button></div>' +
      '<div id="fclHostBlock">' +
      '<p class="fcl-muted fcl-host-projector-tip">На экране — только gaps и доска. Имена игроков введите ниже (X / O), затем <strong>Start live game</strong>.</p>' +
      '<button type="button" class="fcl-btn fcl-btn--pri fcl-btn--lg" id="fclCreate">Create room</button>' +
      '<p class="fcl-code-row" id="fclCodeRow" hidden>Code: <strong id="fclCodeLbl">—</strong></p>' +
      '<label class="fcl-lbl">Answer mode</label>' +
      '<select id="fclAnswerMode" class="fcl-select">' +
      '<option value="teacher-mcq">Teacher picks A–D (projector)</option>' +
      '<option value="student-mcq">Student picks A–D on phone</option>' +
      '<option value="student-type">Student types answer</option>' +
      '<option value="teacher-judge">Teacher judges orally (Got it / pass)</option>' +
      "</select>" +
      '<div class="fcl-row">' +
      '<button type="button" class="fcl-btn" id="fclCopy" hidden>Copy student link</button>' +
      '<button type="button" class="fcl-btn" id="fclOpenStudent" hidden>Open student view ↗</button>' +
      "</div>" +
      '<input type="text" class="fcl-link" id="fclLink" readonly hidden />' +
      '<p class="fcl-msg" id="fclHostMsg"></p>' +
      '<p class="fcl-muted" id="fclPlayerList">Create room, then type names on the board.</p>' +
      '<details class="fcl-lobby-roster-fold" id="fclLobbyRosterFold" hidden>' +
      '<summary>Online players · <span id="fclRosterCount">0</span></summary>' +
      '<div class="fcl-roster-mini-cols">' +
      '<div><span class="fcl-roster-col-k">X</span> <span id="fclRosterMiniX">—</span></div>' +
      '<div><span class="fcl-roster-col-k">O</span> <span id="fclRosterMiniO">—</span></div>' +
      "</div></details>" +
      '<details class="fcl-host-play-fold" id="fclHostPlayFold" hidden>' +
      '<summary>Teacher also plays (1-on-1 online)</summary>' +
      '<div class="fcl-host-play" id="fclHostPlayBlock">' +
      '<p class="fcl-muted fcl-host-play-lead">Rare mode: you join as a player on your phone. For class on projector, skip this.</p>' +
      '<label class="fcl-lbl">Your name on the board</label>' +
      '<input type="text" class="fcl-host-play-name" id="fclHostPlayName" maxlength="40" autocomplete="nickname" placeholder="Maria" />' +
      '<button type="button" class="fcl-btn fcl-btn--pri" id="fclHostPlayJoin">I\'m playing too</button>' +
      '<p class="fcl-msg" id="fclHostPlayMsg"></p>' +
      "</div></details>" +
      '<button type="button" class="fcl-btn fcl-btn--gold fcl-btn--lg" id="fclStart" hidden>Start live game</button>' +
      '<button type="button" class="fcl-btn fcl-btn--warn fcl-btn--lg" id="fclEnd" hidden>End live game</button>' +
      "</div>" +
      "</div>";
    document.body.appendChild(panel);

    var gate = document.createElement("div");
    gate.className = "fcl-gate";
    gate.id = "fclGate";
    gate.hidden = true;
    gate.innerHTML =
      '<div class="fcl-gate-card fcl-gate-card--splash">' +
      splashGridMarkup() +
      '<p class="fcl-splash-k">Class Live</p>' +
      "<h2 class=\"fcl-splash-title\">Tic-Tac-Toe</h2>" +
      '<p class="fcl-muted">Room code: <strong class="fcl-gate-code" id="fclGateCode"></strong></p>' +
      '<p class="fcl-muted fcl-gate-note">Enter your name — team X or O is assigned automatically.</p>' +
      '<label class="fcl-lbl">Your name</label>' +
      '<input type="text" id="fclName" maxlength="40" autocomplete="nickname" placeholder="Anna" />' +
      '<button type="button" class="fcl-btn fcl-btn--pri fcl-btn--lg" id="fclJoin">Join game</button>' +
      '<p class="fcl-msg" id="fclJoinMsg"></p>' +
      '<p class="fcl-gate-host-tip">Ведёте урок? <strong>Live</strong> → <strong>Create room</strong>. Тест ученика — откройте <strong>скопированную ссылку</strong> (в ней режим ученика).</p>' +
      "</div>";
    document.body.appendChild(gate);

    var studentShell = document.createElement("div");
    studentShell.className = "fcl-student-shell";
    studentShell.id = "fclStudentShell";
    studentShell.hidden = true;
    studentShell.innerHTML =
      '<div class="fcl-student-lobby" id="fclStudentLobby">' +
      splashGridMarkup() +
      '<p class="fcl-splash-k">Class Live</p>' +
      '<h1 class="fcl-splash-title">Tic-Tac-Toe</h1>' +
      '<p class="fcl-splash-greeting">Hi, <span id="fclStudentNameLbl">…</span>!</p>' +
      '<p class="fcl-student-team" id="fclStudentTeamBadge">Crosses · X</p>' +
      '<p class="fcl-student-lobby-pulse" id="fclStudentLobbyPulse">Waiting for the teacher to start…</p>' +
      '<div class="fcl-student-lobby-roster" id="fclStudentLobbyRoster"></div>' +
      '<button type="button" class="fcl-btn fcl-btn--sec fcl-change-name" id="fclChangeName">Change name</button>' +
      "</div>" +
      '<div class="fcl-student-intro" id="fclStudentIntro" hidden>' +
      '<p class="fcl-intro-k">Game on</p>' +
      '<div class="fcl-intro-team" id="fclIntroTeam">X</div>' +
      '<p class="fcl-intro-sub" id="fclIntroSub">Crosses — good luck!</p>' +
      "</div>" +
      '<div class="fcl-student-game" id="fclStudentGame" hidden>' +
      '<p class="fcl-student-game-k">Live game</p>' +
      '<p class="fcl-student-game-status" id="fclStudentGameStatus">Watch the board</p>' +
      '<div class="fcl-student-board" id="fclStudentBoard" role="grid" aria-label="Tic-tac-toe board"></div>' +
      '<div class="fcl-student-play-inner" id="fclStudentPlayInner"></div>' +
      "</div>";
    document.body.appendChild(studentShell);

    fab.addEventListener("click", function () {
      var panel = document.getElementById("fclPanel");
      if (!panel) return;
      if (state.role === "host" && state.roomCode) {
        showStudentGate(false);
      }
      panel.hidden = !panel.hidden;
      if (!panel.hidden && state.role !== "host") {
        pingLiveServer(function (ok) {
          if (!ok) {
            var msgEl = document.getElementById("fclHostMsg");
            if (msgEl) {
              msgEl.innerHTML = liveServerHelpHtml();
              msgEl.className = "fcl-msg bad";
            }
          }
        });
      }
    });
    document.getElementById("fclClose").addEventListener("click", function () {
      panel.hidden = true;
    });
    document.getElementById("fclAnswerMode").addEventListener("change", function (e) {
      state.answerMode = e.target.value;
      var eng = state.getEngine && state.getEngine();
      if (eng && eng.setAnswerMode) eng.setAnswerMode(state.answerMode);
      publishState(false);
    });
    document.getElementById("fclCreate").addEventListener("click", function () {
      var msgEl = document.getElementById("fclHostMsg");
      setMsg(msgEl, "Creating room…", null);
      try {
        ensureApi();
      } catch (e0) {
        setMsg(msgEl, (e0 && e0.message) || "Live API not loaded", false);
        return;
      }
      ensureApi()
        .createRoom({
          deckId: deckId(),
          unitId: state.getPack && state.getPack(),
          requestOrigin: W.location.origin
        })
        .then(function (res) {
          state.roomCode = res.roomCode;
          state.hostToken = res.hostToken;
          state.role = "host";
          state.playerId = "";
          state.team = "";
          state.lastGsVer = 0;
          state.lastPhase = "lobby";
          state.introPlayed = false;
          state.hostPlaying = false;
          state.lastPlayerCount = 0;
          try {
            sessionStorage.setItem(SS_HOST, state.hostToken);
            sessionStorage.setItem(SS_ROOM, state.roomCode);
            sessionStorage.setItem(SS_ROLE, "host");
            sessionStorage.removeItem(SS_PLAYER);
            sessionStorage.removeItem(SS_TEAM);
            sessionStorage.removeItem(SS_HOST_PLAYING);
          } catch (e) {}
          syncUrlWithRoom(state.roomCode);
          var link = inviteLinkFromServer(res, state.roomCode);
          var inp = document.getElementById("fclLink");
          inp.value = link;
          inp.hidden = false;
          document.getElementById("fclCopy").hidden = false;
          var openStu = document.getElementById("fclOpenStudent");
          if (openStu) openStu.hidden = false;
          document.getElementById("fclStart").hidden = false;
          var endBtn = document.getElementById("fclEnd");
          if (endBtn) endBtn.hidden = false;
          var codeRow = document.getElementById("fclCodeRow");
          var codeLbl = document.getElementById("fclCodeLbl");
          if (codeRow) codeRow.hidden = false;
          if (codeLbl) codeLbl.textContent = state.roomCode;
          var okMsg = "Room " + state.roomCode + " · link copied";
          if (linkUsesLocalhostOnly(link)) {
            okMsg +=
              ". ⚠ С телефона не откроется — откройте игру через IP Wi‑Fi (см. окно live:local) и создайте комнату снова.";
          }
          setMsg(document.getElementById("fclHostMsg"), okMsg, !linkUsesLocalhostOnly(link));
          subscribe();
          restoreHostUi();
          showRosterDock(true);
          updateHostPlayUi();
          updateHostProjectorUi();
          if (navigator.clipboard) navigator.clipboard.writeText(link);
        })
        .catch(function (err) {
          var msg = String(err.message || err);
          if (/fetch|network|failed/i.test(msg)) {
            setMsg(document.getElementById("fclHostMsg"), "", false);
            document.getElementById("fclHostMsg").innerHTML = liveServerHelpHtml();
          } else {
            setMsg(document.getElementById("fclHostMsg"), msg, false);
          }
        });
    });
    document.getElementById("fclCopy").addEventListener("click", function () {
      var v = ensureStudentInviteParams(document.getElementById("fclLink").value);
      if (navigator.clipboard) navigator.clipboard.writeText(v);
      setMsg(document.getElementById("fclHostMsg"), "Link copied (student mode).", true);
    });
    document.getElementById("fclOpenStudent").addEventListener("click", function () {
      if (!state.roomCode) return;
      var url = ensureStudentInviteParams(studentLink(state.roomCode));
      W.open(url, "_blank", "noopener,noreferrer");
    });
    document.getElementById("fclChangeName").addEventListener("click", function () {
      state.replacePlayerId = state.playerId || "";
      if (state.unsub) {
        state.unsub();
        state.unsub = null;
      }
      resetStudentJoinLocal();
      openStudentGatePrefill();
    });
    document.getElementById("fclStart").addEventListener("click", startHostGame);
    document.getElementById("fclEnd").addEventListener("click", endHostGame);
    document.getElementById("fclHostPlayJoin").addEventListener("click", function () {
      var name = String(
        (document.getElementById("fclHostPlayName") || {}).value || ""
      ).trim();
      if (!name) {
        setMsg(document.getElementById("fclHostPlayMsg"), "Enter your name first.", false);
        return;
      }
      joinAsHostPlayer(name).catch(function (err) {
        setMsg(document.getElementById("fclHostPlayMsg"), formatJoinError(err), false);
      });
    });
    var hostPlayName = document.getElementById("fclHostPlayName");
    if (hostPlayName) {
      hostPlayName.addEventListener("keydown", function (ev) {
        if (ev.key === "Enter") document.getElementById("fclHostPlayJoin").click();
      });
    }
    document.getElementById("fclJoin").addEventListener("click", function () {
      var name = String(document.getElementById("fclName").value || "").trim();
      if (!name) {
        setMsg(document.getElementById("fclJoinMsg"), "Enter your name.", false);
        return;
      }
      beginStudentJoin(name).catch(function (err) {
        var el = document.getElementById("fclJoinMsg");
        if (el) {
          el.innerHTML = formatJoinError(err);
          el.className = "fcl-msg bad";
        }
      });
    });
    var nameInp = document.getElementById("fclName");
    if (nameInp) {
      nameInp.addEventListener("keydown", function (ev) {
        if (ev.key === "Enter") document.getElementById("fclJoin").click();
      });
    }
  }

  function restoreHostPlayingFromStorage() {
    try {
      if (
        sessionStorage.getItem(SS_HOST_PLAYING) === "1" &&
        sessionStorage.getItem(SS_PLAYER) &&
        sessionStorage.getItem(SS_ROOM) === state.roomCode
      ) {
        state.hostPlaying = true;
        state.playerId = sessionStorage.getItem(SS_PLAYER);
        state.team = sessionStorage.getItem(SS_TEAM) || "";
        state.joinedAsPlayer = true;
        return true;
      }
    } catch (e) {}
    return false;
  }

  function restoreHostUi() {
    if (!state.roomCode || !state.hostToken) return;
    state.role = "host";
    state.introPlayed = false;
    restoreHostPlayingFromStorage();
    if (!state.hostPlaying) {
      state.playerId = "";
      state.team = "";
    }
    var inp = document.getElementById("fclLink");
    if (inp) {
      inp.value = ensureStudentInviteParams(studentLink(state.roomCode));
      inp.hidden = false;
    }
    var copy = document.getElementById("fclCopy");
    var openStu = document.getElementById("fclOpenStudent");
    var start = document.getElementById("fclStart");
    var endBtn = document.getElementById("fclEnd");
    if (copy) copy.hidden = false;
    if (openStu) openStu.hidden = false;
    if (start) start.hidden = false;
    if (endBtn) endBtn.hidden = false;
    var codeRow = document.getElementById("fclCodeRow");
    var codeLbl = document.getElementById("fclCodeLbl");
    if (codeRow) codeRow.hidden = false;
    if (codeLbl) codeLbl.textContent = state.roomCode;
    setMsg(document.getElementById("fclHostMsg"), "Room " + state.roomCode + " · host", true);
    subscribe();
    showStudentGate(false);
    if (!state.hostPlaying) showStudentShell(false);
    openPanel(true);
    showRosterDock(true);
    updateHostPlayUi();
    updateHostProjectorUi();
  }

  function tryRestoreHostFromStorage(expectedRoom) {
    try {
      if (
        sessionStorage.getItem(SS_ROLE) === "host" &&
        sessionStorage.getItem(SS_ROOM) === expectedRoom &&
        sessionStorage.getItem(SS_HOST)
      ) {
        state.roomCode = expectedRoom;
        state.hostToken = sessionStorage.getItem(SS_HOST);
        state.role = "host";
        restoreHostUi();
        return true;
      }
    } catch (e) {}
    return false;
  }

  function mount(opts) {
    opts = opts || {};
    state.deckPrefix = opts.deckPrefix || "fce-u1-ttt-gaps";
    state.getEngine = opts.getEngine || null;
    state.getPack = opts.getPack || null;
    state.judgeOnly = !!opts.judgeOnly;
    injectUi();
    if (W.location.protocol === "file:") {
      var fileWarn = document.getElementById("fclHostMsg");
      if (fileWarn) {
        fileWarn.innerHTML =
          "Страница открыта как <strong>file://</strong> — Live так не работает. " +
          "Запустите <strong>OPEN-FCE-CLASS-LIVE.bat</strong> и откройте игру через " +
          "<strong>http://127.0.0.1:8787" +
          esc(deckPathHint()) +
          "</strong>";
        fileWarn.className = "fcl-msg bad";
      }
    }
    if (state.judgeOnly) {
      state.answerMode = "teacher-judge";
      var modeRow = document.getElementById("fclAnswerMode");
      if (modeRow && modeRow.parentElement) {
        modeRow.parentElement.hidden = true;
      }
    }

    var room = qs().get("room");
    if (room) {
      state.roomCode = String(room).toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 12);
      W.document.body.classList.add("fcl-has-room");
      var gateCodeEl = document.getElementById("fclGateCode");
      if (gateCodeEl) gateCodeEl.textContent = state.roomCode || "—";

      var forceStudent = isStudentJoinUrl();
      var restoredHost = !forceStudent && tryRestoreHostFromStorage(state.roomCode);

      if (forceStudent) {
        clearHostSessionForStudentEntry();
        resetStudentJoinLocal();
        openStudentGatePrefill();
      } else if (restoredHost) {
        syncUrlWithRoom(state.roomCode);
      } else if (canAutoRejoinStudent()) {
        state.playerId = sessionStorage.getItem(SS_PLAYER);
        state.role = "student";
        state.team = sessionStorage.getItem(SS_TEAM) || "";
        state.joinedAsPlayer = true;
        subscribe();
        showStudentGate(false);
        showStudentShell(true);
        W.document.body.classList.add("fcl-student");
        W.document.body.classList.remove("fcl-host", "fcl-host-playing");
        openPanel(false);
      } else {
        resetStudentJoinLocal();
        openStudentGatePrefill();
      }
    } else {
      showStudentGate(false);
      try {
        if (sessionStorage.getItem(SS_ROLE) === "host") {
          state.roomCode = sessionStorage.getItem(SS_ROOM) || "";
          state.hostToken = sessionStorage.getItem(SS_HOST) || "";
          state.role = "host";
          if (state.roomCode) {
            syncUrlWithRoom(state.roomCode);
            restoreHostUi();
          }
        }
      } catch (e2) {}
    }

    if (qs().get("live_host") === "1") openPanel(true);

    return {
      isHost: function () {
        return state.role === "host";
      },
      isStudent: function () {
        return state.role === "student";
      },
      isHostPlaying: function () {
        return !!state.hostPlaying;
      },
      getPlayerId: function () {
        return state.playerId;
      },
      getTeam: function () {
        return state.team;
      },
      getAnswerMode: function () {
        return state.answerMode;
      },
      publishState: publishState,
      submitStudentMcq: function (cell, idx) {
        if (state.role !== "student" || !state.playerId) return Promise.resolve();
        return ensureApi().tttSubmit({
          roomCode: state.roomCode,
          playerId: state.playerId,
          kind: "mcq",
          cell: cell,
          value: String(idx)
        });
      },
      submitStudentType: function (cell, text) {
        if (state.role !== "student" || !state.playerId) return Promise.resolve();
        return ensureApi().tttSubmit({
          roomCode: state.roomCode,
          playerId: state.playerId,
          kind: "type",
          cell: cell,
          value: String(text || "")
        });
      },
      submitStudentPick: function (cell) {
        if (state.role !== "student" || !state.playerId) return Promise.resolve();
        return ensureApi().tttSubmit({
          roomCode: state.roomCode,
          playerId: state.playerId,
          kind: "pick",
          cell: cell,
          value: ""
        });
      }
    };
  }

  W.FceClassLiveTtt = { mount: mount, paintStudentBoard: paintStudentBoard };
})(typeof window !== "undefined" ? window : globalThis);
