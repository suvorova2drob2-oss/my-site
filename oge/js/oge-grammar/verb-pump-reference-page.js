(function (w) {
  "use strict";
  var data = w.OGE_VERB_PUMP_REF;
  var root = document.getElementById("vp-ref-root");
  if (!data || !root) return;

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function renderBlock(block) {
    var inner = "";
    if (block.rows) {
      inner +=
        '<table class="vp-ref-table"><tbody>' +
        block.rows
          .map(function (row) {
            return (
              "<tr><th>" +
              esc(row[0]) +
              "</th><td>" +
              esc(row[1]) +
              "</td><td><em>" +
              esc(row[2]) +
              "</em></td></tr>"
            );
          })
          .join("") +
        "</tbody></table>";
    }
    if (block.bullets) {
      inner +=
        '<ul class="vp-ref-list">' +
        block.bullets
          .map(function (b) {
            return (
              "<li><span class=\"vp-ref-ru\">" +
              esc(b.ru) +
              '</span><span class="vp-ref-en">' +
              esc(b.en) +
              "</span></li>"
            );
          })
          .join("") +
        "</ul>";
    }
    if (block.html) inner += block.html;
    return (
      '<section class="vp-ref-block" id="' +
      esc(block.id) +
      '"><h2>' +
      esc(block.title) +
      "</h2>" +
      inner +
      "</section>"
    );
  }

  root.innerHTML =
    '<header class="vp-ref-head">' +
    '<p class="vp-kicker">Grammar Gym · ОГЭ</p>' +
    "<h1>" +
    esc(data.title) +
    "</h1>" +
    "<p>" +
    esc(data.subtitle) +
    "</p>" +
    '<nav class="vp-ref-jump">' +
    data.blocks
      .map(function (b) {
        return '<a href="#' + esc(b.id) + '">' + esc(b.title.split(" — ")[0]) + "</a>";
      })
      .join("") +
    "</nav></header>" +
    data.blocks.map(renderBlock).join("");
})(typeof window !== "undefined" ? window : this);
