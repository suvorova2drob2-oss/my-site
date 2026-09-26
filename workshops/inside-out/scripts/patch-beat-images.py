"""Add workbookImg as 7th arg to beat() calls per lesson."""
import re

path = r"c:\Users\a9191\Desktop\my-site\workshops\inside-out\js\inside-out-workshop.js"
text = open(path, encoding="utf-8").read()

# beat id prefix -> image (within lesson block order handled manually below)
beat_imgs = {
    "joy-basics": "img/pdf/s1-p01-img03.png",
    "anger-basics": "img/pdf/s1-p01-img04.png",
    "disgust-basics": "img/pdf/s1-p01-img05.png",
    "fear-basics": "img/pdf/s1-p01-img02.png",
    "sadness-basics": "img/pdf/s1-p01-img02.png",
    "sf-joy": "img/pdf/s1-page-03.png",
    "sf-anger": "img/pdf/s1-p03-img01.png",
    "house-joy": "img/pdf/s1-page-04.png",
    "pizza-1-discovery": "img/pdf/s1-p05-img01.png",
    "pizza-2-anger": "img/pdf/s1-page-05.png",
    "s2-sadness-spiral": "img/pdf/s2pdf-p02-img01.png",
    "s2-milk-nose": "img/pdf/s2pdf-page-03.png",
    "chorus-1-fear": "img/pdf/s2pdf-page-04.png",
    "handle-anger": "img/pdf/s2pdf-p05-img01.png",
    "school-1-spelling": "img/pdf/s2pdf-p06-img01.png",
    "school-2-fitting": "img/pdf/s2pdf-page-06.png",
    "parent-1-observe": "img/pdf/s2pdf-p07-img01.png",
    "family-dad": "img/pdf/s2pdf-p08-img01.png",
    "family-escalation": "img/pdf/s2pdf-page-08.png",
}

# For each beat( call starting with known id, append image before closing paren of beat(
for bid, img in beat_imgs.items():
    # match beat(\n          "bid", ... last arg before \n        )
    pat = rf'(beat\(\s*\n\s*"{re.escape(bid)}",[\s\S]*?)(\n\s*\)\s*,?\s*\n)'
    m = re.search(pat, text)
    if not m:
        print("skip", bid)
        continue
    chunk = m.group(1)
    if "img/pdf/" in chunk.split("\n")[-3:]:
        continue
    # find last speakQs array closing - add , "img" before final )
    if chunk.rstrip().endswith('"') or chunk.rstrip().endswith("}") or chunk.rstrip().endswith("]"):
        new_chunk = chunk + f',\n          "{img}"'
    else:
        new_chunk = chunk + f', "{img}"'
    text = text[: m.start(1)] + new_chunk + m.group(2) + text[m.end() :]

open(path, "w", encoding="utf-8").write(text)
print("images")
