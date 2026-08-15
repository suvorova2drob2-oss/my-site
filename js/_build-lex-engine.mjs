/**
 * Extract shared Vocabulary Games CSS + engine from unit10-lexical-games.html
 */
import fs from "fs";
import path from "path";

const root = "c:/Users/a9191/Desktop/my-site";
const html = fs
  .readFileSync(path.join(root, "unit10-lexical-games.html"), "utf8")
  .replace(/\r\n/g, "\n");

const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
if (!styleMatch) throw new Error("style missing");
fs.writeFileSync(
  path.join(root, "css/fce-unit-lexical-games.css"),
  "/* Shared Mastering B2 — unit Vocabulary Games */\n" + styleMatch[1].trim() + "\n"
);

const m = html.match(
  /<script src="js\/mastering-b2-daily-activity\.js"><\/script>\n\s*<script>\n([\s\S]*?)\n\s*<\/script>\n<script src="js\/mastering-b2-skill-progress/
);
if (!m) throw new Error("script block missing");

let body = m[1];
body = body
  .replace(
    'const CARDS_MARKS_KEY = "masteringB2Unit12DefinitionCardsMarks";',
    "const CARDS_MARKS_KEY = STOR_PREFIX + \"CardsMarks\";"
  )
  .replace(
    'const SRS_KEY = "masteringB2Unit12Srs";',
    "const SRS_KEY = STOR_PREFIX + \"Srs\";"
  );

const engine = `/**
 * Shared Mastering B2 Vocabulary Games engine.
 * All trainers: Lexical trainer, Definition cards, Lexical drop, Paraphrase pick,
 * 60-second express, Echo Run, Pair Blitz, Word Bank.
 *
 * Before this file, set:
 *   window.FCE_UNIT_LEX_GAMES = { unit, themes: [ {label, short, blurb, blocks, dropLines}, ×3 ], ... }
 */
(function () {
  "use strict";
  var CFG = window.FCE_UNIT_LEX_GAMES || {};
  var unit = Number(CFG.unit) || 0;
  var themes = CFG.themes || [];
  function themeAt(i) {
    return (
      themes[i] || {
        id: "t" + i,
        label: "Theme " + (i + 1),
        short: String.fromCharCode(65 + i),
        blurb: " Stub until phrase list arrives.",
        blocks: [],
        dropLines: []
      }
    );
  }
  var T0 = themeAt(0);
  var T1 = themeAt(1);
  var T2 = themeAt(2);
  var STOR_PREFIX = "mb2u" + unit + "Lex";

  (function paintChrome() {
    var h1 = document.getElementById("lexGamesTitle");
    var back = document.getElementById("lexGamesBack");
    var sub = document.getElementById("lexGamesSubtitle");
    var vocab = document.getElementById("lexGamesVocabLink");
    if (h1) h1.textContent = CFG.title || ("Lexical games — Unit " + unit);
    if (back) {
      back.href = CFG.backHref || ("unit" + unit + ".html");
      back.textContent = CFG.backLabel || ("Back to Unit " + unit);
    }
    if (sub) {
      sub.innerHTML =
        CFG.subtitleHtml ||
        ("<b>Lexical games, Unit " +
          unit +
          ".</b> Stub themes — send phrase lists per topic. Click a folder; only one is open at a time.");
    }
    if (vocab) {
      if (CFG.vocabHubHref) {
        vocab.href = CFG.vocabHubHref;
        vocab.hidden = false;
        vocab.textContent =
          CFG.vocabHubLabel || ("Unit " + unit + " Vocabulary hub →");
      } else {
        vocab.hidden = true;
      }
    }
    function setText(sel, text) {
      document.querySelectorAll(sel).forEach(function (el) {
        el.textContent = text;
      });
    }
    function setHtml(sel, html) {
      document.querySelectorAll(sel).forEach(function (el) {
        el.innerHTML = html;
      });
    }
    setText("[data-lex-theme-label='0']", T0.short || T0.label || "A");
    setText("[data-lex-theme-label='1']", T1.short || T1.label || "B");
    setText("[data-lex-theme-label='2']", T2.short || T2.label || "C");
    setHtml(
      "[data-lex-theme-title='0']",
      "<b>" + (T0.label || "Theme A") + "</b>" + (T0.blurb || " Stub pack.")
    );
    setHtml(
      "[data-lex-theme-title='1']",
      "<b>" + (T1.label || "Theme B") + "</b>" + (T1.blurb || " Stub pack.")
    );
    setHtml(
      "[data-lex-theme-title='2']",
      "<b>" + (T2.label || "Theme C") + "</b>" + (T2.blurb || " Stub pack.")
    );
  })();

  /* Stable internal pack keys (engine body) */
  window.UNIT10_PHRASAL_BLOCKS = T0.blocks || [];
  window.UNIT10_CRIME_BLOCKS = T1.blocks || [];
  window.UNIT10_STORIES_BLOCKS = T2.blocks || [];
  window.UNIT10_DROP_PHRASAL =
    T0.dropLines || ["PLACEHOLDER · pack coming soon."];
  window.UNIT10_DROP_CRIME =
    T1.dropLines || ["PLACEHOLDER · pack coming soon."];
  window.UNIT10_DROP_STORIES =
    T2.dropLines || ["PLACEHOLDER · pack coming soon."];

${body}
})();
`;

fs.writeFileSync(path.join(root, "js/fce-unit-lexical-games-engine.js"), engine);
console.log("css+engine ok", engine.length);
