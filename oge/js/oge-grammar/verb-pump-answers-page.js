(function (w) {
  "use strict";
  var root = document.getElementById("vp-ans-root");
  var kit = w.OGE_VERB_PUMP_KEYS;
  if (!root || !kit) return;

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  var rounds = kit.all();
  root.innerHTML =
    '<header class="vp-ref-head">' +
    '<p class="vp-kicker">Grammar Gym · ОГЭ</p>' +
    "<h1>Ответы · The Verb Pump</h1>" +
    "<p>Ключи ко всем уровням. В Live учитель видит ответы ученика после «Проверить уровень».</p>" +
    "</header>" +
    rounds
      .map(function (round) {
        return (
          '<section class="vp-ans-round"><h2 class="vp-ans-round-title">' +
          esc(round.label) +
          "</h2>" +
          round.stations
            .map(function (st) {
              return (
                '<div class="vp-ref-block"><h3>Уровень ' +
                esc(st.id) +
                " · " +
                esc(st.title) +
                "</h3><ol class=\"vp-ans-list\">" +
                st.items
                  .map(function (it) {
                    return (
                      "<li><strong>" +
                      esc(it.id) +
                      "</strong>" +
                      (it.prompt
                        ? '<span class="vp-ans-prompt">' + esc(it.prompt) + "</span>"
                        : "") +
                      '<span class="vp-ans-key">' +
                      esc(it.key) +
                      "</span></li>"
                    );
                  })
                  .join("") +
                "</ol></div>"
              );
            })
            .join("") +
          "</section>"
        );
      })
      .join("");
})(typeof window !== "undefined" ? window : this);
