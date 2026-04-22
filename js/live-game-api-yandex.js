/**
 * HTTP driver for LiveGameApi → Yandex Cloud Function (POST JSON { op, ... }).
 * Load after live-game-api.js, then:
 *   LiveGameApi.registerDriver("yandexHttp", LiveGameYandex.buildDriver(baseUrl));
 *   LiveGameApi.createClient({ driver: "yandexHttp" });
 */
(function (W) {
  "use strict";

  function buildYandexHttpDriver(apiBaseUrl) {
    var base = String(apiBaseUrl || "").replace(/\/$/, "");

    function post(op, payload) {
      return fetch(base, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.assign({ op: op }, payload || {})),
      })
        .then(function (res) {
          return res.text().then(function (text) {
            var j = null;
            try {
              j = text ? JSON.parse(text) : {};
            } catch (e) {
              throw new Error("Bad JSON: " + (text || "").slice(0, 120));
            }
            return { res: res, j: j };
          });
        })
        .then(function (x) {
          if (!x.j || !x.j.ok) {
            throw new Error((x.j && x.j.error) || "Request failed (" + x.res.status + ")");
          }
          return x.j.result;
        });
    }

    return {
      createRoom: function (p) {
        return post("createRoom", p);
      },
      joinRoom: function (p) {
        return post("joinRoom", p);
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
      subscribeRoom: function (roomCode, listener) {
        var code = String(roomCode).toUpperCase().trim();
        var last = "";
        function tick() {
          post("getSnapshot", { roomCode: code }).then(
            function (snap) {
              var s = JSON.stringify(snap);
              if (s !== last) {
                last = s;
                listener(snap);
              }
            },
            function () {}
          );
        }
        var id = setInterval(tick, 900);
        tick();
        return function () {
          clearInterval(id);
        };
      },
    };
  }

  W.LiveGameYandex = { buildDriver: buildYandexHttpDriver };
})(typeof window !== "undefined" ? window : this);
