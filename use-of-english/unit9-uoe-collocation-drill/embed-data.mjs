/** Re-run after editing items.json: node embed-data.mjs */
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
const dir = dirname(fileURLToPath(import.meta.url));
const indexPath = join(dir, "index.html");
const itemsPath = join(dir, "items.json");
const json = fs.readFileSync(itemsPath, "utf8").trim();
const block =
  '<script id="u9-drill-data" type="application/json">\n' + json + "\n</script>\n  ";
let html = fs.readFileSync(indexPath, "utf8");
const re = /<script id="u9-drill-data" type="application\/json">[\s\S]*?<\/script>\s*/;
if (re.test(html)) {
  html = html.replace(re, block);
} else {
  html = html.replace(
    '<script src="../../js/unit9-uoe-collocation-drill.js"></script>',
    block + '<script src="../../js/unit9-uoe-collocation-drill.js"></script>'
  );
}
fs.writeFileSync(indexPath, html, "utf8");
