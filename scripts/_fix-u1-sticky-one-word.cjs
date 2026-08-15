const fs = require("fs");
const p = "js/unit1-lifestyle-lexis.js";
let s = fs.readFileSync(p, "utf8");
const map = {
  "idea of fun": "fun",
  "realise it's important": "realise",
  "scripts lying": "scripts",
  "a bit of a mess": "mess",
  "lose track of time": "track",
  "passionate about history": "passionate",
  "turned up late": "late",
  "one or two": "bedtime",
  "out like a light": "light",
  "love the fact": "fact",
  "short walk from": "walk",
  "reasonably late": "reasonably",
  "setting off for work": "setting",
  "fully qualified": "qualified",
  "tend to get": "tend",
  "catch up on my sleep": "sleep",
  "carry on doing": "carry",
  "settle down": "settle",
  "steady and secure": "steady",
  "made up my mind": "mind",
  "out all day": "out",
  "as much exercise": "exercise",
  "especially the variety": "variety",
  "not all cuddly": "cuddly",
  "put some people off": "off",
  "loads of free time": "loads",
  "fit marriage in": "marriage",
  "hanging on a rope": "rope",
  "make a living": "living",
  "food and equipment": "funding",
  "unconventional way of life": "unconventional",
  "actively encourage": "encourage",
  "feel alive": "alive"
};
let n = 0;
for (const [k, v] of Object.entries(map)) {
  const from = 'stickyAnswer: "' + k + '"';
  const to = 'stickyAnswer: "' + v + '"';
  if (!s.includes(from)) {
    console.log("MISS", k);
    continue;
  }
  s = s.split(from).join(to);
  n += 1;
}
fs.writeFileSync(p, s);
console.log("replaced", n);
