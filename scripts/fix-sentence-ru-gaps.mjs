import fs from "fs";

const p = "js/ege-listening/listening-sentence-ru-bank.json";
const b = JSON.parse(fs.readFileSync(p, "utf8"));
b['" Yeah, I see what you mean.'] = b["Yeah, I see what you mean."];
b['" Been there, done that!'] = b["Been there, done that!"];
b['"'] = "";
fs.writeFileSync(p, JSON.stringify(b, null, 2));
