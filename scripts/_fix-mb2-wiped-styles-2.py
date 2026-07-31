"""Restore hub-only pages that still lack <style> but had one in git."""
from __future__ import annotations

import re
import subprocess
from pathlib import Path

root = Path(r"c:\Users\a9191\Desktop\my-site")
FONT_BLOCK = """  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
"""


def rel_css(path: Path, name: str) -> str:
    depth = len(path.relative_to(root).parts) - 1
    return ("../" * depth) + f"css/{name}"


n = 0
for f in root.rglob("*.html"):
    if any(
        x in f.parts
        for x in ("publish-cpe", "publish-ege", "publish-fce", "ege", "node_modules", "dist", ".git")
    ):
        continue
    rel = str(f.relative_to(root)).replace("\\", "/")
    if "/cpe/" in rel:
        continue
    cur = f.read_text(encoding="utf-8", errors="ignore")
    if "mastering-b2-unit-hub.css" not in cur:
        continue
    if re.search(r"<style>[\s\S]*?</style>", cur):
        continue
    try:
        old = subprocess.check_output(
            ["git", "show", f"HEAD:{rel}"], cwd=root, stderr=subprocess.DEVNULL
        ).decode("utf-8", "replace")
    except Exception:
        continue
    m = re.search(r"<style>[\s\S]*?</style>", old)
    if not m or len(m.group(0)) < 800:
        continue
    st = m.group(0)
    # keep true list hubs on hub css only
    if (
        ".card-link" in st
        and "flip" not in st
        and "btn-check" not in st
        and ".kw-input" not in st
        and len(st) < 3500
    ):
        continue

    skin = rel_css(f, "mastering-b2-page-skin.css")
    head = re.search(r"<head>([\s\S]*?)</head>", cur, re.I)
    if not head:
        continue
    hi = head.group(1)
    hi = re.sub(
        r"\s*<link[^>]+(?:mastering-b2-(?:unit-hub|page-skin)\.css|fonts\.googleapis|fonts\.gstatic)[^>]*>\s*",
        "\n",
        hi,
        flags=re.I,
    )
    hi = re.sub(r"\n{3,}", "\n\n", hi).rstrip() + "\n"
    new_head = hi + m.group(0) + "\n" + FONT_BLOCK + f'  <link rel="stylesheet" href="{skin}" />\n'
    new = cur[: head.start()] + "<head>\n" + new_head + "</head>" + cur[head.end() :]
    f.write_text(new, encoding="utf-8")
    n += 1
    print("RESTORE2", rel)

print("done", n)
