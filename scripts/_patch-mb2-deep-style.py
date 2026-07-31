from pathlib import Path
import re

root = Path(r"c:\Users\a9191\Desktop\my-site")

FONT_BLOCK = """  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
"""

# Trees that belong to FCE / Mastering B2 learner pages
WALK_ROOTS = [
    "unit1.html", "unit2.html", "unit3.html", "unit4.html",
    "unit9-vocabulary.html",
    "unit11-tic-tac-toe.html",
    "unit12-lexical-games.html", "unit12-speaking.html", "unit12-speaking-micro.html",
    "unit12-speaking-12-1.html", "unit12-treasure-hunt.html", "unit12-use-of-english.html",
    "unit12-listening-12-1-matching.html", "unit12-listening-naomi-12-3.html",
    "unit12-speaking-hub.html",
    "unit12-use-of-english-part2-open-cloze.html",
    "unit12-use-of-english-part4-key-word-transformation.html",
    "unit12-use-of-english-part4-kwt-flipcards.html",
    "listening",
    "use-of-english",
    "Grammar",
    "Vocabulary",
    "Audio practice",
    "audio-practice",
    "Changes at school",
    "Listening Part 2 Sentence Completion Robotix competition",
]

# Plus every unitN-* folder at repo root (covers nested trainers automatically)
for p in root.iterdir():
    if p.is_dir() and p.name.startswith("unit") and "-" in p.name:
        WALK_ROOTS.append(p.name)

SKIP_DIR_NAMES = {
    "node_modules", ".git", "dist", "publish-cpe", "publish-ege", "publish-fce",
    "ege", "cpe", "vendor", "scripts", "css", "js", "infra",
}


def rel_css(path: Path, name: str) -> str:
    depth = len(path.relative_to(root).parts) - 1
    return ("../" * depth) + f"css/{name}"


def is_hub_style(style: str) -> bool:
    if ".page" not in style:
        return False
    markers = (".card", ".card-link", ".tile", ".task-card", ".folder-card", ".placeholder")
    if not any(m in style for m in markers):
        return False
    # exercise-heavy pages keep skin only
    if len(style) > 5500 and any(x in style for x in (".gap", "overlay", "btn-check", "flip", "heart")):
        return False
    return True


def collect_html() -> list[Path]:
    files = []
    for item in WALK_ROOTS:
        p = root / item
        if p.is_file() and p.suffix == ".html":
            files.append(p)
        elif p.is_dir():
            for f in p.rglob("*.html"):
                if any(part in SKIP_DIR_NAMES for part in f.parts):
                    continue
                # skip CPE-only under vocabulary
                rel = str(f.relative_to(root)).replace("\\", "/")
                if "/cpe/" in rel or rel.startswith("ege/"):
                    continue
                files.append(f)
    # unique
    seen = set()
    out = []
    for f in files:
        key = str(f.resolve())
        if key not in seen:
            seen.add(key)
            out.append(f)
    return out


def ensure_links(text: str, path: Path, hub: bool) -> str:
    hub_href = rel_css(path, "mastering-b2-unit-hub.css")
    skin_href = rel_css(path, "mastering-b2-page-skin.css")
    if hub:
        if "mastering-b2-unit-hub.css" in text:
            return text
        # replace style with hub css
        if re.search(r"<style>[\s\S]*?</style>", text):
            text = re.sub(
                r"<style>[\s\S]*?</style>",
                FONT_BLOCK + f'  <link rel="stylesheet" href="{hub_href}" />\n',
                text,
                count=1,
            )
        else:
            text = text.replace(
                "</head>",
                FONT_BLOCK + f'  <link rel="stylesheet" href="{hub_href}" />\n</head>',
                1,
            )
        text = re.sub(
            r'(<header class="top">\s*)<h1>(.*?)</h1>',
            r'\1<div>\n        <div class="brand-kicker">Mastering B2</div>\n        <h1>\2</h1>\n      </div>',
            text,
            count=1,
        )
        return text

    # non-hub: inject fonts + skin if missing
    if "mastering-b2-page-skin.css" in text or "mastering-b2-unit-hub.css" in text:
        # still ensure fonts
        if "fonts.googleapis.com" not in text and "</head>" in text:
            text = text.replace("</head>", FONT_BLOCK + "</head>", 1)
        return text
    inject = FONT_BLOCK + f'  <link rel="stylesheet" href="{skin_href}" />\n'
    if "</head>" in text:
        text = text.replace("</head>", inject + "</head>", 1)
    return text


hub_n = 0
skin_n = 0
for f in collect_html():
    try:
        text = f.read_text(encoding="utf-8")
    except Exception as e:
        print("READFAIL", f, e)
        continue
    # only touch pages that look like old FCE shell or already partially migrated
    if "09122a" not in text and "1d2b4a" not in text and "mastering-b2" not in text and "Segoe UI" not in text:
        continue

    style_m = re.search(r"<style>([\s\S]*?)</style>", text)
    hub = bool(style_m and is_hub_style(style_m.group(1)))
    before = text
    text2 = ensure_links(text, f, hub)
    if text2 != before:
        f.write_text(text2, encoding="utf-8")
        if hub:
            hub_n += 1
            print("HUB", f.relative_to(root))
        else:
            skin_n += 1
            print("SKIN", f.relative_to(root))

print(f"done hub={hub_n} skin={skin_n}")
