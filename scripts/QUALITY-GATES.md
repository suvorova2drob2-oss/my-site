# Quality Gates (Release Blocking)

This project uses three mandatory checks before release:

- `npm run check:routing`
- `npm run check:security-guards`
- `npm run check:tracks`

Combined command:

- `npm run check:all`

## What is blocking

Release is **blocked** if any of these fail:

1. **Routing invariants**
   - Legacy Level 7 entry points reappear.
   - Direct `showScreen(...)` to protected legacy screens is reintroduced.
   - Deep-link unit routes bypass the built-in unit router.

2. **Security guard patterns**
   - Direct assignment of `?back=` / `?next=` query params into navigation targets.
   - `backLabel` injection through `innerHTML`.
   - Other blocked high-risk patterns from `check-security-guards.mjs`.

3. **Track separation**
   - Forbidden cross-track path/content patterns from `check-tracks.mjs`.

## Build policy

Production builds run these checks first:

- `build`
- `build:cpe`
- `build:ege`
- `build:fce`

If any check fails, build must fail.

## Contributor rule

When touching hub routing, level navigation, or URL param navigation:

1. Run `npm run check:all`.
2. Run target build (`npm run build:cpe` or another track build).
3. Fix failures before merging.

## Handoff

See `docs/ENGINEERING-HANDOFF.md` for:

- routing architecture notes,
- protected legacy screen rules,
- prioritized technical debt backlog.
