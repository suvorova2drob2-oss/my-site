## What and Why

<!-- 1-3 short bullets: what changed and why this was needed -->
- 

## Risk Level

<!-- Choose one: low / medium / high -->
- Risk: 

<!-- If medium/high, explain what could break -->
- Possible impact:

## Routing / Navigation Safety

<!-- Required for level/hub/navigation changes -->
- [ ] Built-in level entry still uses `openBuiltInUnitMenu(unitNum)`.
- [ ] No direct `showScreen(...)` for protected legacy screens:
  - `screen-uoe`
  - `screen-uoe-wf-detail`
  - `screen-unit-detail`
- [ ] No cross-unit jump introduced (especially Level 7/8/12 paths).

## Security Safety

- [ ] No raw query-param navigation assignment (`back`/`next` directly into `href`/`location`).
- [ ] No `backLabel` insertion via `innerHTML`.
- [ ] No blocked patterns from `check:security-guards`.

## Data Consistency

- [ ] `linkedUnit` stays consistent with folder/task links.
- [ ] Legacy Unit 9 UoE seed remains pinned to Unit 9.

## Manual Smoke Tests

- [ ] Fresh load (`Ctrl+F5`) -> Level 7 -> back.
- [ ] Fresh load (`Ctrl+F5`) -> Level 8 -> back.
- [ ] Fresh load (`Ctrl+F5`) -> Level 12 -> back.
- [ ] Deep-link checks:
  - [ ] `?screen=unit7`
  - [ ] `?screen=unit8`
  - [ ] `?screen=unit12`

## Automated Checks

- [ ] `npm run check:all`
- [ ] Target build passed:
  - [ ] `npm run build:cpe`
  - [ ] `npm run build:ege` (if relevant)
  - [ ] `npm run build:fce` (if relevant)

## Docs Updated

- [ ] `docs/ENGINEERING-HANDOFF.md` updated (if behavior/rules changed).
- [ ] `scripts/QUALITY-GATES.md` updated (if gates changed).
- [ ] `docs/CHANGE-CHECKLIST.md` updated (if process changed).

## Notes for Reviewer

<!-- Anything non-obvious, assumptions, follow-up tasks -->
- 
