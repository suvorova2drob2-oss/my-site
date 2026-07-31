"""
Inject Mastering B2 progress scripts into FCE hubs and exercise pages.
Non-destructive: only ADDS script tags when missing. Does not delete files.
"""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(r"c:\Users\a9191\Desktop\my-site")

SKIP_PARTS = {
    "publish-cpe",
    "publish-ege",
    "publish-fce",
    "node_modules",
    "dist",
    "ege",
    ".git",
    "agent-transcripts",
}


def should_skip(path: Path) -> bool:
    parts = set(path.parts)
    if parts & SKIP_PARTS:
        return True
    # CPE-only trees
    if "cpe" in path.parts:
        return True
    return False


def rel_prefix(html: Path) -> str:
    """Relative path from html file dir to repo root."""
    depth = len(html.parent.relative_to(ROOT).parts)
    return "" if depth == 0 else "../" * depth


def ensure_scripts(html: Path, names: list[str]) -> bool:
    text = html.read_text(encoding="utf-8", errors="ignore")
    if not text.strip():
        return False
    prefix = rel_prefix(html)
    changed = False
    inject = []
    for name in names:
        marker = name
        if marker in text:
            continue
        inject.append(f'<script src="{prefix}js/{name}"></script>')
    if not inject:
        return False
    block = "\n".join(inject) + "\n"
    # Prefer before </body>
    if re.search(r"</body\s*>", text, re.I):
        text2 = re.sub(r"</body\s*>", block + "</body>", text, count=1, flags=re.I)
    elif re.search(r"</head\s*>", text, re.I):
        text2 = re.sub(r"</head\s*>", block + "</head>", text, count=1, flags=re.I)
    else:
        text2 = text + "\n" + block
    if text2 != text:
        html.write_text(text2, encoding="utf-8")
        changed = True
    return changed


def is_unit_hub(path: Path) -> bool:
    return bool(re.fullmatch(r"unit([1-9]|1[0-2])\.html", path.name, re.I))


def is_skill_hub_index(path: Path) -> bool:
    if path.name.lower() != "index.html":
        return False
    p = str(path.as_posix()).lower()
    return bool(
        re.search(
            r"unit\d+-(speaking|vocabulary|reading|listening|grammar)(/|/index\.html)?$",
            path.parent.as_posix().replace("\\", "/"),
            re.I,
        )
        or "/grammar/unit" in p
        or re.search(r"unit\d+-vocabulary/(fce/)?index\.html$", p)
        or "/use-of-english/" in p
        and path.parent.name.lower().startswith("unit")
    )


def is_exercise_candidate(path: Path) -> bool:
    if path.suffix.lower() != ".html":
        return False
    if is_unit_hub(path):
        return False
    if path.name.lower() in {"fce.html", "ege.html", "index.html"} and path.parent == ROOT:
        return False
    text = path.read_text(encoding="utf-8", errors="ignore")
    # Likely interactive exercise
    if re.search(
        r"btnCheck|btn-check|id=[\"']check|Check answers|MasteringB2Progress|data-mb2-unit",
        text,
        re.I,
    ):
        return True
    if re.search(r"btnDone|btnNext|flip|mcq|gap-fill|cloze", text, re.I) and len(text) > 1500:
        return True
    return False


def main() -> None:
    hub_n = 0
    ex_n = 0

    # Unit hubs + nested skill hubs
    for path in ROOT.rglob("*.html"):
        if should_skip(path):
            continue
        if is_unit_hub(path) or is_skill_hub_index(path):
            if ensure_scripts(
                path,
                [
                    "mastering-b2-skill-progress.js",
                    "mastering-b2-hub-marks.js",
                ],
            ):
                hub_n += 1
            continue

        # Nested lifestyle / speaking hubs
        rel = path.relative_to(ROOT).as_posix().lower()
        if rel.endswith("/index.html") and any(
            x in rel
            for x in (
                "unit1-vocabulary",
                "unit1-speaking",
                "lifestyle/",
                "interview/",
            )
        ):
            if ensure_scripts(
                path,
                [
                    "mastering-b2-skill-progress.js",
                    "mastering-b2-hub-marks.js",
                ],
            ):
                hub_n += 1

    # Exercise pages (FCE tree)
    roots = [
        ROOT,
        ROOT / "Grammar",
        ROOT / "use-of-english",
        ROOT / "Audio practice",
        ROOT / "listening",
        ROOT / "Vocabulary",
        ROOT / "Changes at school",
        ROOT / "games",
    ]
    seen = set()
    for base in roots:
        if not base.exists():
            continue
        for path in base.rglob("*.html"):
            if should_skip(path):
                continue
            key = str(path.resolve())
            if key in seen:
                continue
            seen.add(key)
            # unitN-* folders at root
            rel = path.relative_to(ROOT).as_posix()
            if not (
                rel.startswith("unit")
                or rel.startswith("Grammar/")
                or rel.startswith("use-of-english/")
                or rel.startswith("Audio practice/")
                or rel.startswith("listening/")
                or rel.startswith("Vocabulary/")
                or rel.startswith("Changes at school/")
                or rel.startswith("games/")
            ):
                continue
            if is_unit_hub(path):
                continue
            if not is_exercise_candidate(path):
                continue
            # Hubs already handled
            if is_skill_hub_index(path):
                continue
            if ensure_scripts(
                path,
                [
                    "mastering-b2-skill-progress.js",
                    "mastering-b2-daily-activity.js",
                    "mastering-b2-exercise-auto.js",
                ],
            ):
                ex_n += 1

    print(f"hubs updated: {hub_n}")
    print(f"exercises updated: {ex_n}")


if __name__ == "__main__":
    main()
