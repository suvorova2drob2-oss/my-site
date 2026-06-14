import fs from "fs";
import path from "path";

const dir = "use-of-english/part3-word-formation";
const files = [
  "unit12-pickleball-padel.html",
  "unit5-boarding-schools.html",
  "unit6-hove-flatshare.html",
  "unit8-monorails.html",
  "nouns-laptop-tech.html",
  "unit2-art-of-sushi.html",
  "unit2-home-away-from-home.html",
];
const link =
  '  <link rel="stylesheet" href="../../css/cpe-uoe-part3-wf-shell.css" />\n';
const wide = new Set([
  "unit5-boarding-schools.html",
  "unit6-hove-flatshare.html",
  "unit8-monorails.html",
  "nouns-laptop-tech.html",
]);

for (const f of files) {
  const p = path.join(dir, f);
  let html = fs.readFileSync(p, "utf8");
  html = html.replace(/<style>[\s\S]*?<\/style>\s*/i, link);
  html = html.replace(/<body>/i, '<body class="cpe-p3-body">');
  if (wide.has(f)) {
    html = html.replace(/<main class="page">/, '<main class="page page--wide">');
  }
  fs.writeFileSync(p, html);
  console.log("updated", f);
}
