import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const htmlPath = path.join(root, "reading/going-vegan/jack-chain-lab.html");
const outPath = path.join(root, "js/unit12-jack-chain-lab.js");

const c = fs.readFileSync(htmlPath, "utf8");
const m = c.match(/<script>\s*\(function \(\) \{([\s\S]*)\}\)\(\);\s*<\/script>/);
if (!m) throw new Error("script block not found");

let inner = m[1];
const cut = inner.search(/\s*document\.getElementById\("btnCloseDock"\)/);
if (cut >= 0) inner = inner.slice(0, cut);

const out = `(function (W) {
  "use strict";
  var started = false;
${inner}
  function boot() {
    if (started || !document.getElementById("chainRail")) return;
    started = true;
    init();
    paintRail();
    paintChain();
    var btnClose = document.getElementById("btnCloseDock");
    var btnApply = document.getElementById("btnApply");
    if (btnClose) btnClose.addEventListener("click", closeDock);
    if (btnApply) {
      btnApply.addEventListener("click", function () {
        lines[active] = BLOCKS[active].build(picks[active]);
        paintChain();
        paintRail();
        closeDock();
      });
    }
  }
  W.U12_JACK_CHAIN_LAB = { boot: boot, closeDock: closeDock };
})(typeof window !== "undefined" ? window : this);
`;

fs.writeFileSync(outPath, out, "utf8");
console.log("Wrote", outPath);
