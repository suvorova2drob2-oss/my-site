#!/usr/bin/env bash
# One-shot update for EGE Live on the VPS.
set -euo pipefail

ROOT="${LIVE_ROOT:-$HOME/my-site}"
if [[ ! -d "$ROOT/.git" ]]; then
  ROOT="/root/my-site"
fi
if [[ ! -d "$ROOT/.git" ]]; then
  echo "ERROR: my-site repo not found at $ROOT"
  exit 1
fi

echo "==> Updating $ROOT"
cd "$ROOT"
git fetch origin main
git reset --hard origin/main

echo "==> Installing/refreshing systemd service"
cp "$ROOT/server/ege-live-rooms.service" /etc/systemd/system/ege-live-rooms.service
systemctl daemon-reload
systemctl enable ege-live-rooms
systemctl restart ege-live-rooms
# Also kick auto-update once if present
if [[ -f "$ROOT/server/auto-update-live.sh" ]]; then
  chmod +x "$ROOT/server/auto-update-live.sh" || true
fi

echo "==> Status"
systemctl --no-pager --full status ege-live-rooms | head -n 12

echo
echo "OK. Open in Incognito (Ctrl+Shift+N):"
echo "  http://77.110.113.165:8787/ege/ege-listening-matching.html"
echo "Live → Create room. Student link MUST contain ?room=CODE"
echo "Hard refresh if needed: Ctrl+F5"
