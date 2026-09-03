import fs from "fs";

const old =
  '<li><span class="cg-stub-title">4 фрагмента текста, пропуски 1–8</span><p>Текст слева, банк фраз справа (drag + клик). Заглушка — пришлите текст и ключ.</p></li>';

for (let u = 2; u <= 12; u += 1) {
  const p = `unit${u}-class-games.html`;
  let h = fs.readFileSync(p, "utf8");
  if (h.includes("exam-numbered-gaps.html")) {
    console.log("skip", u);
    continue;
  }
  if (!h.includes(old)) {
    console.log("no match", u);
    continue;
  }
  h = h.replace(
    old,
    `<li><a href="exam-numbered-gaps.html?unit=${u}">4 фрагмента текста, пропуски 1–8</a><p>Текст слева, банк фраз справа (drag + клик). Галочками выберите текст.</p></li>`
  );
  fs.writeFileSync(p, h);
  console.log("patched", u);
}
