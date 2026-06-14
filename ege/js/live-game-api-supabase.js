/**
 * Supabase driver for LiveGameApi (RPC + Realtime).
 * Load order:
 *   1) @supabase/supabase-js from CDN (global supabase.createClient)
 *   2) js/live-game-api.js
 *   3) this file
 *
 * Required RPCs in Postgres: create_live_room, join_live_room, get_live_room_snapshot,
 *   add_live_player_score, host_set_live_phase, host_advance_live_card
 *   (see infra/supabase/rpc-live-room-snapshot.sql)
 *
 * LiveGameApi.registerDriver("supabase", LiveGameSupabase.buildDriver({ url, key }));
 * LiveGameApi.createClient({ driver: "supabase" });
 */
(function (W) {
  "use strict";

  function getCreateClient() {
    var mod = W.supabase;
    if (!mod || typeof mod.createClient !== "function") {
      throw new Error("[LiveGameSupabase] Load @supabase/supabase-js before this script (global supabase.createClient).");
    }
    return mod.createClient;
  }

  function firstRow(data) {
    if (data == null) return null;
    if (Array.isArray(data)) return data.length ? data[0] : null;
    return data;
  }

  function mapSnapshotJson(j) {
    if (!j || typeof j !== "object") return null;
    var players = Array.isArray(j.players) ? j.players : [];
    var lb = players
      .map(function (p) {
        return {
          playerId: String(p.id || ""),
          displayName: String(p.displayName || ""),
          score: Number(p.score) || 0
        };
      })
      .sort(function (a, b) {
        return b.score - a.score || a.displayName.localeCompare(b.displayName);
      });
    var roster = players.map(function (p) {
      return { id: String(p.id || ""), displayName: String(p.displayName || "") };
    });
    return {
      roomCode: String(j.roomCode || ""),
      deckId: String(j.deckId || ""),
      phase: j.phase || "lobby",
      cardIndex: Number(j.cardIndex) || 0,
      leaderboard: lb,
      players: roster
    };
  }

  function buildSupabaseDriver(cfg) {
    cfg = cfg || {};
    var url = String(cfg.url || W.__LIVE_SUPABASE_URL__ || "").trim();
    var key = String(cfg.key || W.__LIVE_SUPABASE_KEY__ || "").trim();
    var createClient = cfg.createClient || getCreateClient();
    if (!url || !key) {
      throw new Error("[LiveGameSupabase] Missing url/key (pass buildDriver({ url, key }) or set window.__LIVE_SUPABASE_URL__ / __LIVE_SUPABASE_KEY__).");
    }
    var client = createClient(url, key);

    function rpc(name, args) {
      return client.rpc(name, args || {}).then(function (res) {
        if (res.error) throw new Error(res.error.message || String(res.error));
        return res.data;
      });
    }

    return {
      createRoom: function (p) {
        var deckId = String((p && p.deckId) || "prep-vault");
        return rpc("create_live_room", { p_deck_id: deckId }).then(function (data) {
          var row = firstRow(data);
          if (!row) throw new Error("create_live_room returned no row");
          return {
            roomCode: String(row.room_code || row.roomCode || "").toUpperCase(),
            hostToken: String(row.host_token || row.hostToken || "")
          };
        });
      },

      joinRoom: function (p) {
        var code = String((p && p.roomCode) || "").toUpperCase().trim();
        var name = String((p && p.displayName) || "Student").trim().slice(0, 40);
        return rpc("join_live_room", { p_room_code: code, p_display_name: name }).then(function (data) {
          var id = data;
          if (id && typeof id === "object" && id.join_live_room != null) id = id.join_live_room;
          return { playerId: String(id), displayName: name };
        });
      },

      submitAnswer: function (p) {
        var delta = 0;
        if (p && p.correct) {
          delta = 10;
          if (p.latencyMs != null && p.latencyMs < 2500) {
            delta += Math.max(0, Math.min(5, Math.floor((2500 - p.latencyMs) / 400)));
          }
        }
        if (!delta) return Promise.resolve();
        return rpc("add_live_player_score", {
          p_player_id: p.playerId,
          p_delta: delta
        }).then(function () {});
      },

      getSnapshot: function (roomCode) {
        var code = String(roomCode || "").toUpperCase().trim();
        return rpc("get_live_room_snapshot", { p_room_code: code }).then(function (data) {
          if (data == null || data === "null") return null;
          var j = typeof data === "string" ? JSON.parse(data) : data;
          return mapSnapshotJson(j);
        });
      },

      setPhase: function (params) {
        return rpc("host_set_live_phase", {
          p_room_code: params.roomCode,
          p_host_token: params.hostToken,
          p_phase: params.phase
        }).then(function () {});
      },

      advanceCard: function (params) {
        return rpc("host_advance_live_card", {
          p_room_code: params.roomCode,
          p_host_token: params.hostToken,
          p_card_index: Math.max(0, Math.floor(Number(params.cardIndex) || 0))
        }).then(function () {});
      },

      subscribeRoom: function (roomCode, listener) {
        var code = String(roomCode).toUpperCase().trim();
        var last = "";
        function push(snap) {
          var s = JSON.stringify(snap);
          if (s !== last) {
            last = s;
            listener(snap);
          }
        }
        function tick() {
          return client
            .rpc("get_live_room_snapshot", { p_room_code: code })
            .then(function (res) {
              if (res.error) return;
              var data = res.data;
              if (data == null || data === "null") return;
              var j = typeof data === "string" ? JSON.parse(data) : data;
              var snap = mapSnapshotJson(j);
              if (snap) push(snap);
            });
        }
        var ch = client
          .channel("live_players:" + code)
          .on(
            "postgres_changes",
            { event: "*", schema: "public", table: "live_players", filter: "room_code=eq." + code },
            function () {
              tick();
            }
          )
          .subscribe();
        var poll = setInterval(function () {
          tick();
        }, 2000);
        tick();
        return function () {
          clearInterval(poll);
          try {
            client.removeChannel(ch);
          } catch (e) {}
        };
      }
    };
  }

  W.LiveGameSupabase = { buildDriver: buildSupabaseDriver };
})(typeof window !== "undefined" ? window : this);
