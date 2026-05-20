# Change Checklist (Before Merge)

Use this checklist for any routing/navigation/content-structure change.
Goal: prevent regressions like cross-unit jumps.

## 1) Scope and intent (2 minutes)

- [ ] I can explain in 1-2 sentences what changed and why.
- [ ] I changed only what is needed (no unrelated refactor mixed in).
- [ ] If legacy flow is touched, I checked `docs/ENGINEERING-HANDOFF.md`.

## 2) Safety in code

- [ ] Built-in level entry still goes through `openBuiltInUnitMenu(unitNum)`.
- [ ] No direct `showScreen(...)` calls for protected legacy screens:
  - `screen-uoe`
  - `screen-uoe-wf-detail`
  - `screen-unit-detail`
- [ ] URL `back/next` handling stays sanitized (no raw param-to-href assignment).
- [ ] No `backLabel` insertion via `innerHTML`.
- [ ] CPE learner-facing pages in guarded scope do not contain `FCE`/`EGE` learner copy.
- [ ] CPE learner-facing pages in guarded scope do not link to other tracks (`fce.html` / `ege.html` / `course=fce|ege`).

## 3) Data consistency

- [ ] `linkedUnit` remains consistent with folder task links.
- [ ] No new cross-unit folder appears in Level 7/8/12 by mistake.
- [ ] Legacy Unit 9 UoE seed remains pinned to Unit 9.

## 4) Manual smoke tests (required)

- [ ] Fresh load (`Ctrl+F5`) -> open Level 7 -> back.
- [ ] Fresh load (`Ctrl+F5`) -> open Level 8 -> back.
- [ ] Fresh load (`Ctrl+F5`) -> open Level 12 -> back.
- [ ] Deep links still route correctly:
  - `?screen=unit7`
  - `?screen=unit8`
  - `?screen=unit12`

## 5) Automated checks (required)

- [ ] `npm run check:all`
- [ ] If CPE learner copy/navigation changed: `npm run check:tracks` (must pass `cpe-learner-cross-course-copy` and `cpe-learner-cross-course-href`).
- [ ] Target build:
  - CPE: `npm run build:cpe`
  - EGE: `npm run build:ege`
  - FCE: `npm run build:fce`

## 6) Handoff quality

- [ ] I added/updated comments only where logic is non-obvious.
- [ ] I updated docs if behavior/rules changed:
  - `docs/ENGINEERING-HANDOFF.md`
  - `scripts/QUALITY-GATES.md`
- [ ] Commit/PR summary explains *why* this change reduces risk.

---

If any checkbox is "no", do not merge yet.
