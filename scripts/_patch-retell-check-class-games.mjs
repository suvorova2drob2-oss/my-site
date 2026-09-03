import fs from "fs";

function block(n) {
  return `    <div class="sec">
      <h2>Retell check</h2>
      <ul>
        <li>
          <a href="retell-check.html?unit=${n}">Retell check</a>
          <p>Step 1: текст с пунктирными фразами → Step 2: пересказ с таймером. Галочками выберите текст.</p>
        </li>
      </ul>
    </div>

`;
}

for (let n = 2; n <= 12; n += 1) {
  const p = `unit${n}-class-games.html`;
  if (!fs.existsSync(p)) {
    console.log("skip", p);
    continue;
  }
  let h = fs.readFileSync(p, "utf8");
  if (h.includes("Retell check")) {
    console.log("already", n);
    continue;
  }
  const m = h.match(/<p class="count">[\s\S]*?<\/p>\s*/);
  if (!m) {
    console.log("no count", n);
    continue;
  }
  h = h.replace(m[0], m[0] + block(n));
  fs.writeFileSync(p, h);
  console.log("patched", n);
}
