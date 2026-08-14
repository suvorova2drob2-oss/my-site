#!/usr/bin/env bash
# Run on VPS after id_ed25519_clumsy is in /root/.ssh/
set -euo pipefail

KEY=/root/.ssh/id_ed25519_clumsy
if [[ ! -f "$KEY" ]]; then
  echo "ERROR: missing $KEY — copy it from your PC first (see setup-clumsy-vps-key.txt)"
  exit 1
fi
chmod 600 "$KEY"

if ! grep -q 'Host github-clumsy' /root/.ssh/config 2>/dev/null; then
  cat >> /root/.ssh/config <<'EOF'

Host github-clumsy
  HostName github.com
  IdentityFile /root/.ssh/id_ed25519_clumsy
  IdentitiesOnly yes
EOF
fi
chmod 600 /root/.ssh/config

CLUMSY_ROOT=/root/clumsy-and-his-friends
REPO=git@github-clumsy:suvorova2drob2-oss/clumsy-and-his-friends.git
if [[ ! -d "$CLUMSY_ROOT/.git" ]]; then
  git clone "$REPO" "$CLUMSY_ROOT"
else
  git -C "$CLUMSY_ROOT" fetch origin main
  git -C "$CLUMSY_ROOT" reset --hard origin/main
fi

systemctl restart ege-live-rooms
curl -s http://127.0.0.1:8787/health
echo
curl -s -o /dev/null -w "clumsy: %{http_code}\n" http://127.0.0.1:8787/clumsy/
echo "Open: http://77.110.113.165:8787/clumsy/"
