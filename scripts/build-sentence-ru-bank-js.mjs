import fs from "fs";

const json = JSON.parse(
  fs.readFileSync("js/ege-listening/listening-sentence-ru-bank.json", "utf8")
);
const keys = Object.keys(json);
const filled = keys.filter((k) => json[k]).length;
console.log(`Bank: ${keys.length} keys, ${filled} filled, ${keys.length - filled} empty`);

const out =
  "/**\n * ЕГЭ Listening · полные переводы предложений (hover shadowing).\n */\n(function (w) {\n" +
  "  var api = w.__EGE_LISTENING_SENTENCE_RU__ || {};\n" +
  "  api.bank = " +
  JSON.stringify(json, null, 2) +
  ";\n" +
  "  w.__EGE_LISTENING_SENTENCE_RU__ = api;\n" +
  "})(typeof window !== 'undefined' ? window : this);\n";

fs.writeFileSync("js/ege-listening/ege-listening-sentence-ru-bank.js", out, "utf8");
console.log("Wrote js/ege-listening/ege-listening-sentence-ru-bank.js");
