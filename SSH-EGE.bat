@echo off
cd /d "%~dp0"
title EGE update - keep this window open
color 0A

echo.
echo  ========================================
echo   EGE Live - update from GitHub
echo  ========================================
echo.
echo  1) Click inside this black window
echo  2) Type password - NOTHING will appear
echo     (that is normal)
echo  3) Press Enter
echo  4) Wait. Do NOT close the window.
echo.
echo  Connecting...
echo.

ssh -o PreferredAuthentications=password -o PubkeyAuthentication=no ege "bash /root/my-site/server/update-live-on-vps.sh; echo; echo === SERVER NOW ===; cd /root/my-site; git log -1 --oneline; systemctl is-active ege-live-rooms"

echo.
echo  ========================================
echo   END. Read the lines ABOVE.
echo   Need a commit hash + word: active
echo  ========================================
echo.
echo  This window will stay until you press a key.
pause
