/**
 * Generic HTTP driver for LiveGameApi (local Node or any VPS).
 * Same wire format as Yandex: POST JSON { op, ... } → { ok, result }.
 *
 *   LiveGameApi.registerDriver("http", LiveGameHttp.buildDriver(baseUrl));
 *   LiveGameApi.createClient({ driver: "http" });
 *
 * baseUrl examples:
 *   http://127.0.0.1:8787/live
 *   https://live.example.ru/live
 */
(function (W) {
  "use strict";

  function buildHttpDriver(apiBaseUrl) {
    var base = String(apiBaseUrl || "").replace(/\/$/, "");

    function post(op, payload) {
      return fetch(base, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.assign({ op: op }, payload || {}))
      }).then(function (res) {
        return res.text().then(function (text) {
          var j = null;
          try {
            j = text ? JSON.parse(text) : {};
          } catch (e) {
            throw new Error("Bad JSON: " + (text || "").slice(0, 120));
          }
          if (!j || !j.ok) {
            throw new Error((j && j.error) || "Request failed (" + res.status + ")");
          }
          return j.result;
        });
      });
    }

    return {
      createRoom: function (p) {
        return post("createRoom", p);
      },
      joinRoom: function (p) {
        return post("joinRoom", p);
      },
      renamePlayer: function (p) {
        return post("renamePlayer", p);
      },
      submitAnswer: function (p) {
        return post("submitAnswer", p);
      },
      getSnapshot: function (roomCode) {
        return post("getSnapshot", { roomCode: roomCode });
      },
      setPhase: function (p) {
        return post("setPhase", p);
      },
      advanceCard: function (p) {
        return post("advanceCard", p);
      },
      closeRoom: function (p) {
        return post("closeRoom", p);
      },
      subscribeRoom: function (roomCode, listener) {
        var code = String(roomCode).toUpperCase().trim();
        var last = "";
        var gone = false;
        function tick() {
          if (gone) return;
          post("getSnapshot", { roomCode: code }).then(
            function (snap) {
              if (!snap) {
                gone = true;
                listener(null);
                return;
              }
              var s = JSON.stringify(snap);
              if (s !== last) {
                last = s;
                listener(snap);
              }
            },
            function (err) {
              var msg = String((err && err.message) || err || "");
              if (/not found|Room not found/i.test(msg)) {
                gone = true;
                listener(null);
              }
            }
          );
        }
        var id = setInterval(tick, 900);
        tick();
        return function () {
          gone = true;
          clearInterval(id);
        };
      }
    };
  }

  W.LiveGameHttp = { buildDriver: buildHttpDriver };
})(typeof window !== "undefined" ? window : this);
