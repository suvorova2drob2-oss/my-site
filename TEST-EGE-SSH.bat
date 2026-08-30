@echo off
cd /d "%~dp0"
title Test SSH login to ege VPS
color 0B

echo.
echo  ========================================
echo   Test: ssh ege  (VPS login)
echo  ========================================
echo.
echo  1) Click this window
echo  2) Keyboard = ENGLISH (Win+Space)
echo  3) Type root password - letters will NOT show (that is normal)
echo  4) Enter
echo.
echo  If login works you will see a Linux prompt. Type: exit
echo  Then uploads will work with the same password.
echo.
echo  Host: ege  -^>  root@77.110.113.165
echo.

ssh -o PreferredAuthentications=password,keyboard-interactive -o PubkeyAuthentication=no ege

echo.
echo  Exit code: %ERRORLEVEL%
if errorlevel 1 (
  echo  Login failed. Check password / keyboard layout / that the server still allows password login.
) else (
  echo  OK - SSH works. You can run UPLOAD-FLEABAG-MEDIA.bat js
)
echo.
pause
