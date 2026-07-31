"""Convert list-hub pages back to mastering-b2-unit-hub.css (undo mistaken style restore)."""
from __future__ import annotations

import re
from pathlib import Path

root = Path(r"c:\Users\a9191\Desktop\my-site")

FONT_BLOCK = """  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
"""

# Root unit hubs + skill index hubs that should use shared hub CSS
TARGETS = [
    "unit1.html",
    "unit2.html",
    "unit4.html",
    "unit6.html",
    "unit7.html",
    "unit8.html",
    "unit9.html",
    "unit10.html",
    "unit12.html",
    "unit12-use-of-english.html",
    "unit12-speaking-hub.html",
    "use-of-english/index.html",
    "use-of-english/unit5/index.html",
    "use-of-english/unit6/index.html",
    "use-of-english/unit7/index.html",
    "use-of-english/unit8/index.html",
    "use-of-english/unit9/index.html",
    "use-of-english/unit10/fce/index.html",
    "unit6-grammar/index.html",
    "unit7-grammar/index.html",
    "unit8-grammar/index.html",
    "unit9-grammar/index.html",
    "unit9-listening/index.html",
    "unit9-vocabulary/index.html",
    "unit9-reading-mystery-donors/index.html",
    "unit10-vocabulary/fce/index.html",
    "listening/unit8/fce/index.html",
    "listening/unit9/fce/index.html",
    "listening/unit10/fce/index.html",
    "listening/unit12/fce/index.html",
    "Grammar/unit10-infinitives-passives/index.html",
    "unit12-12-1-restaurants-listening/index.html",
    "unit12-12-1-restaurants-listening/audio-practice/index.html",
    "unit12-12-1-restaurants-listening/speaking/index.html",
    "unit12-12-1-restaurants-listening/reading-going-vegan/index.html",
    "unit12-12-1-restaurants-listening/reading-going-vegan/speaking/index.html",
    "unit12-pro-fitness-coaching/index.html",
    "unit12-pro-fitness-coaching/audio-practice/index.html",
    "unit12-pro-fitness-coaching/speaking/index.html",
    "unit3-digital-detox/lexical-games-digital-detox.html",
    "Audio practice/unit12-shadowing.html",
    "audio-practice/index.html",
    "audio-practice/index-minds-eye.html",
]


def rel_css(path: Path, name: str) -> str:
    depth = len(path.relative_to(root).parts) - 1
    return ("../" * depth) + f"css/{name}"


n = 0
for rel in TARGETS:
    f = root / rel
    if not f.exists():
        print("MISS", rel)
        continue
    cur = f.read_text(encoding="utf-8")
    # skip true exercise pages
    if any(x in cur for x in ("btn-check", "kw-input", "elInput", "id=\"deck\"")):
        # still may be hub with no those - lexical games is hub
        if "btn-check" in cur or "kw-input" in cur:
            print("SKIP_EX", rel)
            continue

    hub = rel_css(f, "mastering-b2-unit-hub.css")
    head = re.search(r"<head>([\s\S]*?)</head>", cur, re.I)
    if not head:
        continue
    # keep title + meta only
    metas = re.findall(
        r"<(?:meta|title)[^>]*>.*?</title>|<(?:meta)[^>]*/?>",
        head.group(1),
        flags=re.I | re.S,
    )
    # simpler: strip style and css/font links, reinject
    hi = head.group(1)
    title_m = re.search(r"<title>[\s\S]*?</title>", hi, re.I)
    meta_tags = re.findall(r"<meta\b[^>]*>", hi, re.I)
    bits = [""]
    bits.extend("  " + m if not m.startswith(" ") else m for m in meta_tags)
    if title_m:
        bits.append("  " + title_m.group(0))
    bits.append(FONT_BLOCK.rstrip("\n"))
    bits.append(f'  <link rel="stylesheet" href="{hub}" />')
    bits.append("")
    new_head = "\n".join(bits) + "\n"
    body = cur[head.end() :]
    # normalize card classes for hub CSS
    body = body.replace('class="card"', 'class="card card-link"')
    body = body.replace('class="card card-link card-link"', 'class="card card-link"')
    # placeholder -> p when simple
    body = re.sub(
        r'<div class="placeholder">(.*?)</div>',
        r"<p>\1</p>",
        body,
        flags=re.S,
    )
    body = re.sub(
        r'(<a class="card card-link"[^>]*>\s*<h2>.*?</h2>\s*)<p>(.*?)</p>(\s*</a>)',
        lambda m: m.group(1)
        + "<p>"
        + m.group(2)
        + '</p>\n        <div class="link-hint">Open &rarr;</div>'
        + m.group(3)
        if "link-hint" not in m.group(0)
        else m.group(0),
        body,
        flags=re.S,
    )

    new = cur[: head.start()] + "<head>\n" + new_head + "</head>" + body
    f.write_text(new, encoding="utf-8")
    n += 1
    print("HUB", rel)

print("done", n)
