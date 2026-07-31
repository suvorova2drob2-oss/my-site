from pathlib import Path
import re

root = Path(r"c:\Users\a9191\Desktop\my-site")

CANDIDATES = [
    "unit5-listening/index.html",
    "unit5-reading/index.html",
    "unit6-vocabulary/index.html",
    "unit6-grammar/index.html",
    "unit7-vocabulary/index.html",
    "unit7-reading/index.html",
    "unit7-listening/index.html",
    "unit7-grammar/index.html",
    "unit8-vocabulary/index.html",
    "unit8-reading/index.html",
    "unit8-speaking/index.html",
    "unit8-grammar/index.html",
    "unit9-vocabulary/index.html",
    "unit9-reading/index.html",
    "unit9-grammar/index.html",
    "unit10-reading/index.html",
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
    "unit11-reading/index.html",
    "unit11-listening/index.html",
    "unit12-vocabulary/index.html",
    "unit12-reading/index.html",
]

FONT_LINKS = """  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
"""


def css_href(rel_path: Path) -> str:
    depth = len(rel_path.parts) - 1
    prefix = "../" * depth
    return f"{prefix}css/mastering-b2-unit-hub.css"


ok = 0
skip = 0
for rel in CANDIDATES:
    p = root / rel
    if not p.exists():
        print("MISSING", rel)
        skip += 1
        continue
    text = p.read_text(encoding="utf-8")
    if "mastering-b2-unit-hub.css" in text:
        print("ALREADY", rel)
        skip += 1
        continue
    if "<style>" not in text:
        print("NOSTYLE", rel)
        skip += 1
        continue

    style_m = re.search(r"<style>([\s\S]*?)</style>", text)
    if not style_m:
        print("NOMATCH", rel)
        skip += 1
        continue
    style = style_m.group(1)
    hubby = (".page" in style and ".card" in style) or (".page" in style and ".card-link" in style)
    if not hubby:
        print("NOTHUB", rel)
        skip += 1
        continue
    if len(style) > 4500 and ("btn-" in style or "overlay" in style or ".gap" in style):
        print("BIG", rel, len(style))
        skip += 1
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

print(f"done ok={ok} skip={skip}")
