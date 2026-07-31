from pathlib import Path
import re

root = Path(r"c:\Users\a9191\Desktop\my-site")

HEAD_TMPL = """  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="css/mastering-b2-unit-hub.css" />
"""

for n in range(5, 13):
    p = root / f"unit{n}.html"
    text = p.read_text(encoding="utf-8")
    m = re.search(r"<title>(.*?)</title>", text)
    title = m.group(1) if m else f"Mastering B2 - Unit {n}"
    text2 = re.sub(
        r'  <meta charset="UTF-8" />\s*<meta name="viewport" content="width=device-width, initial-scale=1.0" />\s*<title>.*?</title>\s*<style>[\s\S]*?</style>',
        HEAD_TMPL.format(title=title),
        text,
        count=1,
    )
    text2 = re.sub(
        rf'<header class="top">\s*<h1>Mastering B2 - Unit {n}</h1>\s*<a id="mb2-course-home-link" class="back" href="fce.html">Back to course home</a>\s*</header>',
        f'''<header class="top">
      <div>
        <div class="brand-kicker">Mastering B2</div>
        <h1>Unit {n}</h1>
      </div>
      <a id="mb2-course-home-link" class="back" href="fce.html">&larr; Course home</a>
    </header>''',
        text2,
        count=1,
    )
    text2 = text2.replace(
        ' style="text-decoration:none;color:inherit;display:flex;flex-direction:column;min-height:170px;"',
        "",
    )
    text2 = text2.replace(
        ' style="color: var(--muted); font-size: 0.95rem; line-height: 1.45; flex: 1;"',
        "",
    )
    text2 = text2.replace(
        ' style="color: var(--muted); font-size: 0.95rem; line-height: 1.4; flex: 1;"',
        "",
    )
    text2 = text2.replace(
        ' style="margin-top: auto; color: var(--accent); font-weight: 600; font-size: 0.9rem;"',
        ' class="link-hint"',
    )
    text2 = text2.replace('class="link-hint" class="link-hint"', 'class="link-hint"')
    if text2 == text:
        print(f"NO CHANGE unit{n}")
    else:
        p.write_text(text2, encoding="utf-8")
        print(f"OK unit{n}")
