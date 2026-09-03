@echo off
cd /d "%~dp0"
title VPS diagnostics - read only - keep this window open
color 0E

echo.
echo  ========================================
echo   VPS check - READ ONLY, changes nothing
echo  ========================================
echo.
echo  1) Click inside this window
echo  2) Type the password - NOTHING will appear
echo     (that is normal)
echo  3) Press Enter and wait
echo.
echo  Connecting...
echo.

ssh -o PreferredAuthentications=password -o PubkeyAuthentication=no ege "echo '=== SERVICE ==='; systemctl is-active ege-live-rooms; systemctl --no-pager --full status ege-live-rooms | head -n 20; echo; echo '=== LAST CRASH LOG ==='; journalctl -u ege-live-rooms -n 40 --no-pager; echo; echo '=== DISK ==='; df -h /; echo; echo '=== MEMORY ==='; free -m; echo; echo '=== COMMIT ==='; git -C /root/my-site log -1 --oneline; echo; echo '=== CRON ==='; crontab -l | grep auto-update || echo 'no cron line'"

echo.
echo  ========================================
echo   END. Copy everything above and send it.
echo  ========================================
echo.
pause
