"""Find FCE HTML that likely still show default white inputs/buttons."""
from __future__ import annotations

from pathlib import Path

root = Path(r"c:\Users\a9191\Desktop\my-site")

def has_controls(t: str) -> bool:
    return any(
        x in t
        for x in (
            "btn-check",
            "btn-next",
            "kw-input",
            'type="text"',
            "type='text'",
            "<textarea",
            "<button",
            'type="number"',
        )
    )


miss = []
for f in root.rglob("*.html"):
    if any(
        x in f.parts
        for x in ("publish-cpe", "publish-ege", "publish-fce", "ege", "node_modules", "dist", ".git")
    ):
        continue
    rel = str(f.relative_to(root)).replace("\\", "/")
    if "/cpe/" in rel:
        continue
    t = f.read_text(encoding="utf-8", errors="ignore")
    if not has_controls(t):
        continue
    # has skin = OK (global dark controls)
    if "mastering-b2-page-skin.css" in t:
        continue
    # has hub only and is exercise-like: risk if no local dark input styles
    if "mastering-b2-unit-hub.css" in t:
        if "background: #12264b" in t or "background:#12264b" in t or ".kw-input" in t and "12264b" in t:
            continue
        # no page skin and no dark input styling in file
        if "<style>" not in t or ("btn-check" in t and "background" not in t.split("<style>", 1)[-1][:8000]):
            miss.append(rel)
            continue
        style = t.split("<style>", 1)[-1].split("</style>", 1)[0]
        if "btn-check" in t or 'type="text"' in t:
            if "#fff" in style or "#ffffff" in style.lower() or "white" in style:
                # might intentionally style buttons white — flag soft
                if "btn-check" in style and ("#fff" in style or "white" in style):
                    miss.append("WHITEBTN " + rel)
            if ".kw-input" in style or 'input[' in style or "input {" in style:
                if "12264b" not in style and "#1" not in style and "background" not in style:
                    miss.append("NODARK " + rel)
        continue
    # no mastering skin at all but old dark shell + controls — skin missing
    if "09122a" in t or "1d2b4a" in t:
        miss.append("NOSKIN " + rel)

print(len(miss))
for m in miss[:80]:
    print(m)
