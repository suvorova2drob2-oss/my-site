@echo off
cd /d "%~dp0"
title VPS repair - free disk space and restart Live
color 0B

echo.
echo  ========================================
echo   VPS repair
echo   Cleans ONLY caches (npm / apt / logs).
echo   Project files are NOT touched.
echo  ========================================
echo.
echo  1) Click inside this window
echo  2) Type the password - NOTHING will appear
echo     (that is normal)
echo  3) Press Enter and wait 1-2 minutes
echo.
echo  Connecting...
echo.

ssh -o PreferredAuthentications=password -o PubkeyAuthentication=no ege "set +e; echo '=== DISK BEFORE ==='; df -h /; echo; echo '=== BIGGEST FOLDERS ==='; du -xh --max-depth=1 / 2>/dev/null | sort -rh | head -n 12; echo; echo '=== CLEAN CACHES ==='; npm cache clean --force 2>/dev/null; apt-get clean; journalctl --vacuum-size=100M; echo; echo '=== DISK AFTER ==='; df -h /; echo; echo '=== REINSTALL DEPS ==='; cd /root/my-site && npm install --omit=dev; echo; echo '=== RESTART ==='; systemctl restart ege-live-rooms; sleep 5; systemctl is-active ege-live-rooms; echo; echo '=== HEALTH ==='; curl -s -o /dev/null -w 'health: %%{http_code}\n' http://127.0.0.1:8787/health; echo; echo '=== COMMIT ==='; git -C /root/my-site log -1 --oneline"

echo.
echo  ========================================
echo   END. Need to see:  active   and   health: 200
echo  ========================================
echo.
pause
