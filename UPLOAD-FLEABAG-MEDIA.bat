@echo off
cd /d "%~dp0"
title Fleabag videos - upload to server
color 0B

echo.
echo  ========================================
echo   Fleabag clips -^> your VPS
echo  ========================================
echo.
echo  This copies ONLY:
echo    workshops\fleabag\media\
echo  to the server (same place as the site).
echo.
echo  1) Click inside this black window
echo  2) Type password - NOTHING will appear
echo  3) Press Enter and wait
echo.
echo  Connecting...
echo.

ssh -o PreferredAuthentications=password -o PubkeyAuthentication=no ege "mkdir -p /root/my-site/workshops/fleabag/media"

if errorlevel 1 (
  echo.
  echo  SSH failed. Check host alias "ege" in your SSH config.
  goto end
)

scp -o PreferredAuthentications=password -o PubkeyAuthentication=no -r "workshops/fleabag/media/s01e01" "workshops/fleabag/media/s01e02" "workshops/fleabag/media/s01e03" "workshops/fleabag/media/README.md" ege:/root/my-site/workshops/fleabag/media/

echo.
echo  ========================================
echo   Done if you saw no big red errors above.
echo   Open the Fleabag lesson on your site and Ctrl+F5.
echo  ========================================
echo.
:end
pause
