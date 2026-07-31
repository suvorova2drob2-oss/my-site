"""Wire FCE flip pages to MasteringB2FlipDeck (one card + dark faces)."""
from __future__ import annotations

import re
from pathlib import Path

root = Path(r"c:\Users\a9191\Desktop\my-site")

PAGES = [
    "Grammar/unit5-obligation-permission/correct-the-mistakes-flip.html",
    "Grammar/unit11-conditionals/language-focus-conditionals-flip.html",
    "Grammar/unit11-conditionals/language-focus-too-enough-flip.html",
    "Grammar/unit11-conditionals/language-focus-third-mixed-errors-flip.html",
    "Grammar/unit11-conditionals/exercise-4-flip.html",
    "Grammar/unit10-infinitives-passives/infinitives-passives-flip.html",
    "Grammar/unit10-infinitives-passives/active-to-passive-flip.html",
    "Grammar/unit10-infinitives-passives/passives-forms-flip.html",
    "unit7-grammar/present-perfect-continuous-flip/index.html",
    "unit7-grammar/present-perfect-simple-uses-flip/index.html",
    "unit9-grammar/modal-speculation-flip/index.html",
    "unit12-use-of-english-part4-kwt-flipcards.html",
]

MOUNT_SNIPPET = """
  <script src="__JS__"></script>
  <script>
(function () {
  var deck = document.getElementById("mb2FlipDeck");
  if (!deck || !window.MasteringB2FlipDeck) return;
  MasteringB2FlipDeck.mountFromExisting(deck, { progressLabel: "__LABEL__" });
})();
  </script>
"""


def rel_css(path: Path) -> str:
    depth = len(path.relative_to(root).parts) - 1
    return ("../" * depth) + "css/mastering-b2-flip-deck.css"


def rel_js(path: Path) -> str:
    depth = len(path.relative_to(root).parts) - 1
    return ("../" * depth) + "js/mastering-b2-flip-deck.js"


def ensure_links(text: str, path: Path) -> str:
    css = rel_css(path)
    if "mastering-b2-flip-deck.css" in text:
        return text
    skin = ("../" * (len(path.relative_to(root).parts) - 1)) + "css/mastering-b2-page-skin.css"
    needle = f'href="{skin}" />'
    if needle in text:
        return text.replace(
            needle,
            needle + f'\n  <link rel="stylesheet" href="{css}" />',
            1,
        )
    return text.replace("</head>", f'  <link rel="stylesheet" href="{css}" />\n</head>', 1)


def wrap_cards_in_deck(text: str) -> str:
    if 'id="mb2FlipDeck"' in text:
        return text
    if 'id="deck"' in text:
        return text.replace('id="deck"', 'id="mb2FlipDeck"', 1)

    m = re.search(
        r'(<div class="card-wrap">[\s\S]*</div>\s*)(?=<p class="hub|<p class="hub-link|</main>|</section>)',
        text,
    )
    if m:
        wrapped = f'<div id="mb2FlipDeck">\n{m.group(1)}</div>\n\n    '
        return text[: m.start()] + wrapped + text[m.end() :]
    return text


def strip_old_toggle(text: str) -> str:
    return re.sub(
        r"<script>\s*\(function\s*\(\)\s*\{[\s\S]*?querySelectorAll\(\s*[\"']\.flip-card[\"']\s*\)[\s\S]*?\}\)\(\);\s*</script>",
        "",
        text,
        count=1,
    )


def inject_mount(text: str, path: Path, label: str) -> str:
    if "MasteringB2FlipDeck.mountFromExisting" in text or "MasteringB2FlipDeck.mount(" in text:
        return text
    snippet = MOUNT_SNIPPET.replace("__JS__", rel_js(path)).replace("__LABEL__", label)
    return text.replace("</body>", snippet + "</body>", 1)


def patch_correct_mistakes(text: str, path: Path) -> str:
    text = text.replace('id="deck"', 'id="mb2FlipDeck"', 1)
    text = ensure_links(text, path)
    js = rel_js(path)
    repl = (
        "\n  if (!window.MasteringB2FlipDeck) return;\n"
        "  var mapped = CARDS.map(function (c, i) {\n"
        "    return MasteringB2FlipDeck.correctionCard(c, i, CARDS.length);\n"
        "  });\n"
        '  MasteringB2FlipDeck.mount(document.getElementById("mb2FlipDeck"), mapped, {\n'
        '    progressLabel: "Sentence"\n'
        "  });\n"
        "})();\n"
        "  </script>\n"
    )
    text2, count = re.subn(
        r"\s*function escapeHtml[\s\S]*?\}\)\(\);\s*</script>",
        repl,
        text,
        count=1,
    )
    if count:
        text = text2
    if "mastering-b2-flip-deck.js" not in text:
        text = text.replace(
            "<script>\n(function () {\n  var CARDS",
            f'<script src="{js}"></script>\n  <script>\n(function () {{\n  var CARDS',
            1,
        )
    return text


def label_for(rel: str) -> str:
    if "kwt" in rel or "part4" in rel:
        return "Item"
    if "mistake" in rel or "error" in rel:
        return "Sentence"
    return "Card"


n = 0
for rel in PAGES:
    f = root / rel
    if not f.exists():
        print("MISS", rel)
        continue
    text = f.read_text(encoding="utf-8")

    if "correct-the-mistakes-flip" in rel:
        if "MasteringB2FlipDeck.mount" in text and "mastering-b2-flip-deck.css" in text:
            print("SKIP", rel)
            continue
        text2 = patch_correct_mistakes(text, f)
    elif 'id="scene"' in text and "btn-next" in text:
        text2 = ensure_links(text, f)
    else:
        text2 = ensure_links(text, f)
        text2 = wrap_cards_in_deck(text2)
        text2 = strip_old_toggle(text2)
        text2 = inject_mount(text2, f, label_for(rel))

    if text2 != text:
        f.write_text(text2, encoding="utf-8")
        n += 1
        print("OK", rel)
    else:
        print("SAME", rel)

print("done", n)
