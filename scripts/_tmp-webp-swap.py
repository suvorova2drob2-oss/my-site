"""Point Unit 1 meme card data at the .webp twins. PNG files are kept on disk.

Only swaps a reference when the matching .webp actually exists.
Run with --apply to write; without it, only reports.
"""
import io
import os
import re
import sys

FILES = {
    r"js\unit1-lifestyle-meme-cards.js": r"unit1-vocabulary\lifestyle\memes",
    r"js\unit1-clothes-meme-cards.js": r"unit1-vocabulary\clothes\memes",
    r"js\unit1-clothes-p1-meme-tabs.js": r"unit1-vocabulary\clothes\memes",
    r"js\unit1-run-meme-cards.js": r"unit1-vocabulary\run-expressions\memes",
    r"js\unit1-get-meme-cards.js": r"unit1-vocabulary\get\memes",
}

APPLY = "--apply" in sys.argv
total_swapped = 0

for js_path, base in FILES.items():
    if not os.path.isfile(js_path):
        print("skip (no file):", js_path)
        continue

    src = io.open(js_path, encoding="utf-8").read()
    refs = re.findall(r'"(img/[^"]+\.png)"', src)
    if not refs:
        print(f"{js_path}: no png refs")
        continue

    swappable, blocked = [], []
    for ref in set(refs):
        disk = os.path.join(base, ref.replace("/", os.sep))
        if os.path.isfile(disk[:-4] + ".webp"):
            swappable.append(ref)
        else:
            blocked.append(ref)

    out = src
    for ref in swappable:
        out = out.replace('"' + ref + '"', '"' + ref[:-4] + '.webp"')

    print(f"{js_path}: {len(refs)} refs, swap {len(swappable)}, keep png {len(blocked)}")
    if blocked:
        print("   no webp for:", sorted(blocked)[:5])

    if APPLY and out != src:
        io.open(js_path, "w", encoding="utf-8", newline="").write(out)
        total_swapped += len(swappable)

print()
print(("APPLIED, swapped refs: %d" % total_swapped) if APPLY else "DRY RUN — nothing written")
