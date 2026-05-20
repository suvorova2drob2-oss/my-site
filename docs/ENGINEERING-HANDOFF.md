# Engineering Handoff (Routing + Tech Debt)

This note is a practical handoff for the next developer.
Goal: understand current navigation architecture quickly and change it safely.

## 1) Current routing model (important)

Main hub built-in levels are opened via a single router:

- `openBuiltInUnitMenu(unitNum)` in `index.html`

Expected behavior:

- Level 6 -> legacy detail flow (`openUnitDetail(6)`)
- Level 7 -> generic level flow (`openGenericUnitMenu(7)`)
- Level 8 -> `screen-unit8`
- Level 9 -> `screen-unit9`
- Level 10+ -> generic level flow (`openGenericUnitMenu(unitNum)`)

Do not add direct built-in level opens outside this router.

## 2) Protected legacy screens

Legacy screens are guarded and must be opened only through explicit entry points:

- `screen-uoe`
- `screen-uoe-wf-detail`
- `screen-unit-detail`

Guarding helpers:

- `isLegacyProtectedScreen(id)`
- `showLegacyProtectedScreen(id)`
- `showScreen(id)` fallback to `screen-hub` for unauthorized direct opens

If you need to open one of these screens, use `showLegacyProtectedScreen(...)`.

## 3) Data normalization for folder-level mapping

Folder rendering is driven by:

- `linkedUnit`
- inferred unit from internal links (tasks/sections hrefs)

Core functions:

- `hubNormalizeLinkedUnitsByTaskLinks()`
- `hubShouldHideFolderInUnit(f, unitNum)`
- `hubInferUnitFromFolderContentLinks(f)`

Legacy Unit 9 UoE seed normalization:

- `ensurePrepLegacyU9UoeFolder()`
- `hubNormalizeLegacyU9UoeLinkedUnit()`

## 4) Release-blocking quality gates

Must pass before release:

- `npm run check:routing`
- `npm run check:security-guards`
- `npm run check:tracks`

Combined:

- `npm run check:all`

Build scripts for CPE/EGE/FCE run these checks first.

## 5) Tech debt backlog (prioritized)

### P0 (safety/consistency)

1. Add a tiny browser smoke-test script for level routing (`7/8/12` + back flow).
2. Move routing helpers from `index.html` to a small module file (still loaded in page).
3. Add strict guard for all URL-driven screen opens (single allowlist).

### P1 (maintainability)

4. Replace remaining inline `onclick` in hub-level navigation blocks with function bindings.
5. Extract legacy Level 6 flow into dedicated section/module.
6. Add lightweight schema validation for `PrepSiteContent` folders before render.
7. Separate "normalization" and "rendering" phases clearly (no mixed side effects).

### P2 (cleanliness/perf)

8. Consolidate duplicate navigation labels and back-button text builders.
9. Reduce `index.html` script size by moving routing + guards to `src/` and bundling.
10. Add small changelog note for every routing invariant change.

## 6) Safe change protocol

When editing routing/data mapping:

1. Make minimal change.
2. Run `npm run check:all`.
3. Run target build (`npm run build:cpe` etc.).
4. Manually click Level 7 -> back, Level 8 -> back, Level 12 -> back.
5. Only then merge.
