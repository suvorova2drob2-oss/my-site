import re

path = r"c:\Users\a9191\Desktop\my-site\workshops\inside-out\js\inside-out-workshop.js"
text = open(path, encoding="utf-8").read()

pairs = [
    ("s02e01", "s01e05", 5),
    ("s02e02", "s01e06", 6),
    ("s02e03", "s01e07", 7),
    ("s02e04", "s01e08", 8),
    ("s02e05", "s01e09", 9),
    ("s02e06", "s01e10", 10),
]
for old, new, num in pairs:
    old_num = num - 4
    text = text.replace(
        f'id: "{old}",\n      season: 2,\n      num: {old_num},',
        f'id: "{new}",\n      season: 1,\n      num: {num},',
    )
    text = re.sub(
        rf'(id: "{new}",\n      season: 1,\n      num: {num},\n      title: "Lesson )\d+',
        rf'\g<1>{num}',
        text,
        count=1,
    )

text = text.replace(
    "/* —— Season 2 · Emotions at Play (PDF 2) —— */",
    "/* —— Still Season 1 · Emotions at Play (PDF 2) —— */",
)

covers = {
    "s01e01": "img/pdf/s1-page-02.png",
    "s01e02": "img/pdf/s1-page-03.png",
    "s01e03": "img/pdf/s1-page-04.png",
    "s01e04": "img/pdf/s1-page-05.png",
    "s01e05": "img/pdf/s2pdf-page-02.png",
    "s01e06": "img/pdf/s2pdf-page-04.png",
    "s01e07": "img/pdf/s2pdf-page-05.png",
    "s01e08": "img/pdf/s2pdf-page-06.png",
    "s01e09": "img/pdf/s2pdf-page-07.png",
    "s01e10": "img/pdf/s2pdf-page-08.png",
}
for sid, thumb in covers.items():
    if f'coverThumb: "{thumb}"' in text:
        continue
    pat = (
        rf'(id: "{sid}",\n      season: 1,\n      num: \d+,\n'
        rf"      title: [^\n]+,\n      icon: [^\n]+,\n      tagline: [^\n]+,)"
    )
    text, n = re.subn(pat, rf'\1\n      coverThumb: "{thumb}",', text, count=1)
    if not n:
        print("cover miss", sid)

if "heroStrip:" not in text:
    text = text.replace(
        'Headquarters intro — first script lines for each emotion (workbook p. 2).",',
        'Headquarters intro — first script lines for each emotion (workbook p. 2).",\n      heroStrip: "img/pdf/s1-p01-img02.png",',
        1,
    )

open(path, "w", encoding="utf-8").write(text)
print("patched")
