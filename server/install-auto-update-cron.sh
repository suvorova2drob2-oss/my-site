#!/usr/bin/env bash
# One-time install: cron auto-pull every minute.
set -euo pipefail

ROOT="${LIVE_ROOT:-/root/my-site}"
SCRIPT="$ROOT/server/auto-update-live.sh"

if [[ ! -f "$SCRIPT" ]]; then
  echo "Missing $SCRIPT — run update first:"
  echo "  curl -fsSL https://raw.githubusercontent.com/suvorova2drob2-oss/my-site/main/server/update-live-on-vps.sh | bash"
  exit 1
fi

chmod +x "$SCRIPT" "$ROOT/server/update-live-on-vps.sh" 2>/dev/null || true

# Ensure log file exists and is writable
touch /var/log/ege-live-auto-update.log
chmod 644 /var/log/ege-live-auto-update.log

# flock keeps a slow run (npm install) from overlapping the next minute's run.
FLOCK_BIN="$(command -v flock || true)"
if [[ -n "$FLOCK_BIN" ]]; then
  CRON_LINE="* * * * * LIVE_ROOT=$ROOT $FLOCK_BIN -n /tmp/ege-live-auto-update.lock /bin/bash $SCRIPT"
else
  CRON_LINE="* * * * * LIVE_ROOT=$ROOT /bin/bash $SCRIPT"
fi

# Remove old lines for this script, then add fresh
tmp="$(mktemp)"
crontab -l 2>/dev/null | grep -v "auto-update-live.sh" >"$tmp" || true
echo "$CRON_LINE" >>"$tmp"
crontab "$tmp"
rm -f "$tmp"

echo "OK: auto-update installed (every minute)."
echo "Cron line:"
echo "  $CRON_LINE"
echo
echo "Log: /var/log/ege-live-auto-update.log"
echo "Test now:"
echo "  bash $SCRIPT && tail -n 20 /var/log/ege-live-auto-update.log"
