@echo off
cd /d "%~dp0"
title VPS - remove editor caches (approved)
color 0B

echo.
echo  ========================================
echo   Removing ONLY these two editor caches:
echo     /root/.vscode-server
echo     /root/.cursor-server
echo   Nothing else is deleted.
echo  ========================================
echo.
echo  Type the password (nothing will appear), press Enter, wait.
echo.

ssh -o PreferredAuthentications=password -o PubkeyAuthentication=no ege "set +e; echo '=== BEFORE ==='; df -h /; echo; du -sh /root/.vscode-server /root/.cursor-server 2>/dev/null; echo; echo '=== REMOVING ==='; rm -rf /root/.vscode-server; rm -rf /root/.cursor-server; echo 'done'; echo; echo '=== AFTER ==='; df -h /; echo; echo '=== SITE STILL OK ==='; systemctl is-active ege-live-rooms; curl -s -o /dev/null -w 'health: %%{http_code}\n' http://127.0.0.1:8787/health"

echo.
echo  ========================================
echo   END. Need:  active   and   health: 200
echo  ========================================
echo.
pause
