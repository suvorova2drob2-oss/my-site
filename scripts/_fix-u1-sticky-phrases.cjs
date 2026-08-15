const fs = require("fs");
const p = "js/unit1-lifestyle-lexis.js";
let s = fs.readFileSync(p, "utf8");

/** Map current (too-short) sticky → natural cool-word chunk in the text. */
const map = {
  fun: "not really my idea of fun",
  realise: "realise it's important",
  scripts: "scripts lying all over the place",
  mess: "a bit of a mess",
  track: "lose track of time",
  passionate: "passionate about history",
  late: "turned up late",
  unwinding: "a few hours unwinding",
  bedtime: "bedtime is often",
  light: "out like a light",
  fact: "love the fact",
  walk: "a short walk from",
  reasonably: "get up reasonably late",
  setting: "setting off for work",
  qualified: "fully qualified",
  tend: "tend to get",
  sleep: "catch up on my sleep",
  carry: "carry on doing this",
  settle: "settle down",
  steady: "steady and secure",
  mind: "made up my mind",
  out: "out all day",
  exercise: "as much exercise as I'd like",
  variety: "especially the variety",
  cuddly: "not all cuddly",
  off: "put some people off",
  loads: "loads of free time",
  marriage: "fit marriage in",
  rope: "hanging on a rope",
  living: "make a living",
  funding: "provide funding",
  unconventional: "unconventional way of life",
  encourage: "actively encourage",
  alive: "feel alive"
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
