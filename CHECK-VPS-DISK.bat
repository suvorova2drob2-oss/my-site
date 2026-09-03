@echo off
cd /d "%~dp0"
title VPS disk breakdown - read only
color 0E

echo.
echo  ========================================
echo   What is eating the disk - READ ONLY
echo  ========================================
echo.
echo  Type the password (nothing will appear), press Enter, wait.
echo.

ssh -o PreferredAuthentications=password -o PubkeyAuthentication=no ege "set +e; echo '=== FREE SPACE ==='; df -h /; echo; echo '=== INSIDE /root ==='; du -xh --max-depth=1 /root 2>/dev/null | sort -rh | head -n 15; echo; echo '=== INSIDE /root/my-site ==='; du -xh --max-depth=1 /root/my-site 2>/dev/null | sort -rh | head -n 15; echo; echo '=== NPM CACHE ==='; du -sh /root/.npm 2>/dev/null; echo; echo '=== 10 BIGGEST FILES ON DISK ==='; find / -xdev -type f -size +100M -exec ls -lh {} \; 2>/dev/null | awk '{print \$5, \$9}' | sort -rh | head -n 10"

echo.
echo  ========================================
echo   END. Copy everything above and send it.
echo  ========================================
echo.
pause
