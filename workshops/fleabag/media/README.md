# Fleabag workshop clips (local / server)

Put episode folders here:

- `s01e01/` — Season 1 Episode 1 (10 clips)
- `s01e02/` — Season 1 Episode 2 (8 clips)
- `s01e03/` — Season 1 Episode 3 (10 clips)
- `s01e04/` — Season 1 Episode 4 (9 clips)
- `s01e05/` — Season 1 Episode 5 (9 clips)

Lesson pages load them as `media/s01e0N/….mp4` (same folder as `lesson.html`).

Upload clips with `UPLOAD-FLEABAG-MEDIA.bat` at the repo root.
Default mode uploads **only new or changed** episode folders (local stamp:
`media/.upload-state.json`). Force one episode with `UPLOAD-FLEABAG-MEDIA.bat 4`,
or everything with `UPLOAD-FLEABAG-MEDIA.bat all`.

Do not open `lesson.html` via `file://` — use `http://` (local server or VPS).
