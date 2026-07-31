from pathlib import Path
import re

root = Path(r"c:\Users\a9191\Desktop\my-site")

CANDIDATES = [
    "unit6-grammar/index.html",
    "unit7-grammar/index.html",
    "unit8-grammar/index.html",
    "unit9-vocabulary/index.html",
    "unit9-grammar/index.html",
    "unit10-speaking/index.html",
    "unit10-vocabulary/fce/index.html",
    "listening/unit8/fce/index.html",
    "listening/unit9/fce/index.html",
    "listening/unit10/fce/index.html",
    "listening/unit12/fce/index.html",
    "use-of-english/unit5/index.html",
    "use-of-english/unit6/index.html",
    "use-of-english/unit7/index.html",
    "use-of-english/unit8/index.html",
    "use-of-english/unit9/index.html",
    "use-of-english/unit10/fce/index.html",
    "unit11-vocabulary/index.html",
]

FONT_LINKS = """  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
"""


def css_href(rel_path: Path) -> str:
    depth = len(rel_path.parts) - 1
    return ("../" * depth) + "css/mastering-b2-unit-hub.css"


ok = 0
for rel in CANDIDATES:
    p = root / rel
    if not p.exists():
        print("MISSING", rel)
        continue
    text = p.read_text(encoding="utf-8")
    if "mastering-b2-unit-hub.css" in text:
        print("ALREADY", rel)
        continue
    style_m = re.search(r"<style>([\s\S]*?)</style>", text)
    if not style_m:
        print("NOSTYLE", rel)
        continue
    style = style_m.group(1)
    if ".page" not in style:
        print("NOPAGE", rel)
        continue
    if not any(x in style for x in (".tile", ".task-card", ".card", ".card-link", ".folder")):
        print("NOTILE", rel)
        continue
    if len(style) > 8000:
        print("BIG", rel, len(style))
        continue

    href = css_href(Path(rel))
    replacement = FONT_LINKS + f'  <link rel="stylesheet" href="{href}" />\n'
    text2 = re.sub(r"<style>[\s\S]*?</style>", replacement, text, count=1)
    text2 = re.sub(
        r'(<header class="top">\s*)<h1>(.*?)</h1>',
        r'\1<div>\n        <div class="brand-kicker">Mastering B2</div>\n        <h1>\2</h1>\n      </div>',
        text2,
        count=1,
    )
    p.write_text(text2, encoding="utf-8")
    print("OK", rel)
    ok += 1

print("done", ok)
