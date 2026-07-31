"""Restore <style> blocks wiped by hub misclassification; switch those pages to page-skin."""
from __future__ import annotations

import re
import subprocess
from pathlib import Path

root = Path(r"c:\Users\a9191\Desktop\my-site")

FONT_BLOCK = """  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
"""

EXERCISE_MARKERS = (
    "btn-check",
    "btn-next",
    "kw-input",
    "elInput",
    'type="text"',
    "type='text'",
    "textarea",
    "btn-row",
    "flip-ex",
    "flip-card",
    "flip-face",
    "heart",
    "gap-input",
    "id=\"deck\"",
    "aria-pressed",
)


def rel_css(path: Path, name: str) -> str:
    depth = len(path.relative_to(root).parts) - 1
    return ("../" * depth) + f"css/{name}"


def git_show(rel: str) -> str | None:
    try:
        out = subprocess.check_output(
            ["git", "show", f"HEAD:{rel.replace(chr(92), '/')}"],
            cwd=root,
            stderr=subprocess.DEVNULL,
        )
        return out.decode("utf-8", errors="replace")
    except Exception:
        return None


def is_exercise_html(text: str) -> bool:
    return any(m in text for m in EXERCISE_MARKERS)


def extract_style(text: str) -> str | None:
    m = re.search(r"<style>[\s\S]*?</style>", text)
    return m.group(0) if m else None


def looks_like_hub_only(style: str) -> bool:
    # short list hubs
    if len(style) < 1200:
        return True
    markers = (".card-link", ".placeholder", ".tile", ".folder-card")
    exercise = (".kw-input", ".btn-check", ".gap", "overlay", ".flip", "heart", "textarea")
    if any(e in style for e in exercise):
        return False
    return any(m in style for m in markers)


restored = 0
skipped = 0

for f in root.rglob("*.html"):
    if any(
        x in f.parts
        for x in (
            "publish-cpe",
            "publish-ege",
            "publish-fce",
            "ege",
            "node_modules",
            "dist",
            ".git",
        )
    ):
        continue
    rel = str(f.relative_to(root)).replace("\\", "/")
    if "/cpe/" in rel:
        continue

    cur = f.read_text(encoding="utf-8", errors="ignore")
    if "mastering-b2-unit-hub.css" not in cur:
        continue
    if not is_exercise_html(cur):
        skipped += 1
        continue

    # already has a real exercise style — leave hub link as-is if style present and exercise-like
    cur_style = extract_style(cur)
    if cur_style and not looks_like_hub_only(cur_style) and any(
        e in cur_style for e in (".kw-input", ".btn-check", ".gap", "overlay", ".flip")
    ):
        continue

    old = git_show(rel)
    if not old:
        continue
    old_style = extract_style(old)
    if not old_style or len(old_style) < 400:
        continue
    if looks_like_hub_only(old_style) and not any(
        e in old_style for e in (".kw-input", ".btn-check", ".gap", "overlay", ".flip", "heart")
    ):
        continue

    skin = rel_css(f, "mastering-b2-page-skin.css")
    # rebuild head: keep meta/title, restore style, fonts + page-skin (drop hub)
    head_m = re.search(r"<head>([\s\S]*?)</head>", cur, re.I)
    if not head_m:
        continue
    head_inner = head_m.group(1)
    # strip existing font/hub/skin/style links we manage
    head_inner = re.sub(r"<style>[\s\S]*?</style>\s*", "", head_inner)
    head_inner = re.sub(
        r'\s*<link[^>]+(?:mastering-b2-(?:unit-hub|page-skin)\.css|fonts\.googleapis|fonts\.gstatic)[^>]*>\s*',
        "\n",
        head_inner,
        flags=re.I,
    )
    head_inner = re.sub(r"\n{3,}", "\n\n", head_inner).rstrip() + "\n"
    new_head = (
        head_inner
        + old_style
        + "\n"
        + FONT_BLOCK
        + f'  <link rel="stylesheet" href="{skin}" />\n'
    )
    new = cur[: head_m.start()] + "<head>\n" + new_head + "</head>" + cur[head_m.end() :]
    if new != cur:
        f.write_text(new, encoding="utf-8")
        restored += 1
        print("RESTORE", rel)

print(f"done restored={restored} skipped_non_exercise~{skipped}")
