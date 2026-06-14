/**
 * Live game / classroom session API — single place to swap Supabase ↔ Yandex ↔ custom HTTP.
 *
 * Usage:
 *   const api = LiveGameApi.createClient({ driver: "stub" });
 *   Later: LiveGameApi.registerDriver("supabase", mySupabaseAdapter);
 *   const api = LiveGameApi.createClient({ driver: "supabase", url: "...", anonKey: "..." });
 *
 * Do not call Supabase (or any SDK) from random pages — only from a driver registered here.
 */
(function (W) {
  "use strict";

  /** @typedef {{ deckId: string, hostDisplayName: string }} CreateRoomParams */
  /** @typedef {{ roomCode: string, hostToken: string }} CreateRoomResult */
  /** @typedef {{ roomCode: string, displayName: string }} JoinRoomParams */
  /** @typedef {{ playerId: string, displayName: string }} JoinRoomResult */
  /** @typedef {{ roomCode: string, playerId: string, cardId: string, text: string, correct: boolean, latencyMs?: number }} SubmitAnswerParams */
  /** @typedef {{ roomCode: string, hostToken: string, phase: "lobby"|"playing"|"leaderboard", payload?: Object }} HostSetPhaseParams */
  /** @typedef {{ roomCode: string, hostToken: string, cardIndex: number }} HostAdvanceCardParams */
  /**
   * @typedef {Object} LiveLeaderboardRow
   * @property {string} playerId
   * @property {string} displayName
   * @property {number} score
   */
  /**
   * @typedef {Object} LiveRoomSnapshot
   * @property {string} roomCode
   * @property {string} deckId
   * @property {"lobby"|"playing"|"leaderboard"} phase
   * @property {number} cardIndex
   * @property {LiveLeaderboardRow[]} leaderboard
   * @property {{ id: string, displayName: string }[]} players
   */

  var drivers = {};

  function randomToken(len) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
    var s = "";
    for (var i = 0; i < (len || 12); i += 1) s += alphabet[Math.floor(Math.random() * alphabet.length)];
    return s;
  }

  function requiredDriverMethods() {
    return [
      "createRoom",
      "joinRoom",
      "submitAnswer",
      "subscribeRoom",
      "getSnapshot",
      "setPhase",
      "advanceCard"
    ];
  }

  function assertDriver(name, d) {
    var need = requiredDriverMethods();
    for (var i = 0; i < need.length; i += 1) {
      if (typeof d[need[i]] !== "function") {
        throw new Error("[LiveGameApi] Driver \"" + name + "\" missing method: " + need[i]);
      }
    }
  }

  /**
   * Register a backend implementation (e.g. supabase, yandexHttp).
   * @param {string} name
   * @param {Object} implementation
   */
  function registerDriver(name, implementation) {
    assertDriver(name, implementation);
    drivers[name] = implementation;
  }

  function getDriver(name) {
    var d = drivers[name];
    if (!d) throw new Error("[LiveGameApi] Unknown driver: " + name);
    return d;
  }

  /**
   * In-memory stub for local demos and UI wiring. Not for production.
   */
  function createStubDriver() {
    /** @type {Map<string, Object>} */
    var rooms = new Map();

    function snapshot(roomCode) {
      var r = rooms.get(roomCode);
      if (!r) return null;
      var lb = [];
      r.players.forEach(function (p, id) {
        lb.push({ playerId: id, displayName: p.displayName, score: p.score || 0 });
      });
      lb.sort(function (a, b) {
        return b.score - a.score || a.displayName.localeCompare(b.displayName);
      });
      var players = [];
      r.players.forEach(function (p, id) {
        players.push({ id: id, displayName: p.displayName });
      });
      return {
        roomCode: roomCode,
        deckId: r.deckId,
        phase: r.phase,
        cardIndex: r.cardIndex,
        leaderboard: lb,
        players: players
      };
    }

    function emit(roomCode) {
      var r = rooms.get(roomCode);
      if (!r) return;
      var snap = snapshot(roomCode);
      r.listeners.forEach(function (fn) {
        try {
          fn(snap);
        } catch (e) {
          console.warn("[LiveGameApi stub] listener error", e);
        }
      });
    }

    return {
      createRoom: function (params) {
        var roomCode = randomToken(5).toUpperCase();
        var hostToken = randomToken(24);
        var deckId = String((params && params.deckId) || "going-vegan");
        var hostName = String((params && params.hostDisplayName) || "Host");
        rooms.set(roomCode, {
          deckId: deckId,
          hostToken: hostToken,
          phase: "lobby",
          cardIndex: 0,
          players: new Map(),
          listeners: new Set()
        });
        var hostId = "p_host_" + randomToken(6);
        rooms.get(roomCode).players.set(hostId, { displayName: hostName, score: 0, isHost: true });
        return Promise.resolve({ roomCode: roomCode, hostToken: hostToken });
      },

      joinRoom: function (params) {
        var code = String((params && params.roomCode) || "").toUpperCase().trim();
        var r = rooms.get(code);
        if (!r) return Promise.reject(new Error("Room not found"));
        var name = String((params && params.displayName) || "Student").trim().slice(0, 40);
        var id = "p_" + randomToken(8);
        r.players.set(id, { displayName: name, score: 0, isHost: false });
        emit(code);
        return Promise.resolve({ playerId: id, displayName: name });
      },

      submitAnswer: function (params) {
        var code = String(params && params.roomCode).toUpperCase().trim();
        var r = rooms.get(code);
        if (!r) return Promise.reject(new Error("Room not found"));
        var pid = String(params && params.playerId);
        var p = r.players.get(pid);
        if (!p) return Promise.reject(new Error("Player not found"));
        if (params && params.correct) {
          var base = 10;
          var bonus = 0;
          if (params.latencyMs != null && params.latencyMs < 2500) bonus = Math.max(0, Math.min(5, Math.floor((2500 - params.latencyMs) / 400)));
          p.score = (p.score || 0) + base + bonus;
        }
        emit(code);
        return Promise.resolve();
      },

      subscribeRoom: function (roomCode, listener) {
        var code = String(roomCode).toUpperCase().trim();
        var r = rooms.get(code);
        if (!r) return function () {};
        r.listeners.add(listener);
        listener(snapshot(code));
        return function () {
          r.listeners.delete(listener);
        };
      },

      getSnapshot: function (roomCode) {
        return snapshot(String(roomCode).toUpperCase().trim());
      },

      setPhase: function (params) {
        var code = String(params && params.roomCode).toUpperCase().trim();
        var r = rooms.get(code);
        if (!r) return Promise.reject(new Error("Room not found"));
        if (!params || params.hostToken !== r.hostToken) return Promise.reject(new Error("Host only"));
        r.phase = params.phase || "lobby";
        emit(code);
        return Promise.resolve();
      },

      advanceCard: function (params) {
        var code = String(params && params.roomCode).toUpperCase().trim();
        var r = rooms.get(code);
        if (!r) return Promise.reject(new Error("Room not found"));
        if (!params || params.hostToken !== r.hostToken) return Promise.reject(new Error("Host only"));
        r.cardIndex = Math.max(0, Math.floor(Number(params.cardIndex) || 0));
        emit(code);
        return Promise.resolve();
      }
    };
  }

  registerDriver("stub", createStubDriver());

  /**
   * @param {{ driver?: string } & Object} options
   */
  function createClient(options) {
    var opts = options || {};
    var name = String(opts.driver || "stub");
    var driver = getDriver(name);
    return {
      driverName: name,
      createRoom: function (p) {
        return driver.createRoom(p);
      },
      joinRoom: function (p) {
        return driver.joinRoom(p);
      },
      submitAnswer: function (p) {
        return driver.submitAnswer(p);
      },
      subscribeRoom: function (code, listener) {
        return driver.subscribeRoom(code, listener);
      },
      getSnapshot: function (code) {
        return driver.getSnapshot(code);
      },
      setPhase: function (p) {
        return driver.setPhase(p);
      },
      advanceCard: function (p) {
        return driver.advanceCard(p);
      }
    };
  }

  W.LiveGameApi = {
    registerDriver: registerDriver,
    createClient: createClient,
    DRIVER_STUB: "stub",
    requiredDriverMethods: requiredDriverMethods
  };
})(typeof window !== "undefined" ? window : this);
