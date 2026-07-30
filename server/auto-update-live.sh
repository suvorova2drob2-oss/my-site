#!/usr/bin/env bash
# Pull latest main and restart Live only when commits changed.
set -euo pipefail

ROOT="${LIVE_ROOT:-/root/my-site}"
LOG="${LIVE_UPDATE_LOG:-/var/log/ege-live-auto-update.log}"
BRANCH="${LIVE_BRANCH:-main}"

mkdir -p "$(dirname "$LOG")" 2>/dev/null || true

log() {
  echo "[$(date -Is)] $*" | tee -a "$LOG"
}

if [[ ! -d "$ROOT/.git" ]]; then
  log "ERROR: repo not found at $ROOT"
  exit 1
fi

cd "$ROOT"
export PATH="/usr/local/bin:/usr/bin:/bin:$PATH"

before="$(git rev-parse HEAD 2>/dev/null || true)"
git fetch origin "$BRANCH" >>"$LOG" 2>&1
git reset --hard "origin/$BRANCH" >>"$LOG" 2>&1
after="$(git rev-parse HEAD 2>/dev/null || true)"

if [[ -z "$before" || -z "$after" ]]; then
  log "ERROR: could not read git HEAD"
  exit 1
fi

if [[ "$before" == "$after" ]]; then
  # Quiet on no-op (avoid filling the log every 5 minutes)
  exit 0
fi

log "Updated $before -> $after"

if [[ -f "$ROOT/server/ege-live-rooms.service" ]]; then
  cp "$ROOT/server/ege-live-rooms.service" /etc/systemd/system/ege-live-rooms.service
  systemctl daemon-reload >>"$LOG" 2>&1 || true
fi

systemctl restart ege-live-rooms >>"$LOG" 2>&1
log "Restarted ege-live-rooms"
systemctl --no-pager --full is-active ege-live-rooms >>"$LOG" 2>&1 || true
