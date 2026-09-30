/**
 * Copy generated bf-*.jpg from Cursor assets into unit7 memes folder.
 * Usage: node scripts/copy-u7-meme-jpgs.mjs [assetsDir]
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dest = path.join(
  __dirname,
  "..",
  "unit7-reading-black-friday",
  "memes",
  "img"
);
const defaultAssets = path.join(
  process.env.USERPROFILE || "",
  ".cursor",
  "projects",
  "c-Users-a9191-Desktop-my-site-fleabag",
  "assets"
);
const assetsDir = process.argv[2] || defaultAssets;

const ids = [
  "bf-scramble-discount",
  "bf-chaos-aisles",
  "bf-squabble-tvs",
  "bf-step-over-xbox",
  "bf-discount-bonanza",
  "bf-sinister-name",
  "bf-call-in-sick",
  "bf-traffic-congestion",
  "bf-cease-loss",
  "bf-red-to-black",
  "bf-unruly-scenes",
  "bf-embraced-mania",
  "bf-dishonest-practices",
  "bf-strain-staff",
  "bf-inflate-prices",
  "bf-inferior-products"
];

fs.mkdirSync(dest, { recursive: true });
let copied = 0;
for (const id of ids) {
  const name = id + ".jpg";
  const src = path.join(assetsDir, name);
  if (!fs.existsSync(src)) {
    console.warn("Missing:", src);
    continue;
  }
  fs.copyFileSync(src, path.join(dest, name));
  copied++;
}
console.log("Copied", copied, "of", ids.length, "→", dest);
