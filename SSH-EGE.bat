@echo off
cd /d "%~dp0"
echo.
echo  ========================================
echo   EGE Live - update from GitHub
echo  ========================================
echo.
echo  On GitHub we need commit:
echo    05de637  Harden EGE Live rooms...
echo.
echo  Connecting and updating...
echo  (if password asked - type it, Enter)
echo.

ssh ege "bash /root/my-site/server/update-live-on-vps.sh && echo. && echo === SERVER NOW === && cd /root/my-site && git log -1 --oneline && systemctl is-active ege-live-rooms"

echo.
if errorlevel 1 (
  echo  ----------------------------------------
  echo   FAILED - server did NOT update.
  echo   Common reasons:
  echo   - wrong password / SSH not connected
  echo   - window closed too early
  echo  ----------------------------------------
) else (
  echo  ----------------------------------------
  echo   Look above for line like:
  echo     05de637 Harden EGE Live rooms...
  echo   If you see an OLDER hash - pull failed.
  echo  ----------------------------------------
  echo.
  echo   Then open Incognito + Ctrl+F5:
  echo   http://77.110.113.165:8787/ege/ege-reading-matching-headlines.html
)
echo.
pause
