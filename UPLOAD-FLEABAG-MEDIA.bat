@echo off
cd /d "%~dp0"
title Fleabag videos - upload new/changed
color 0B

echo.
echo  ========================================
echo   Fleabag clips -^> VPS
echo  ========================================
echo.
echo  Default: only NEW or CHANGED episodes
echo  (remembers last upload in media\.upload-state.json)
echo.
echo  Optional:
echo    UPLOAD-FLEABAG-MEDIA.bat          ^<- auto / new only
echo    UPLOAD-FLEABAG-MEDIA.bat 4        ^<- force Episode 4
echo    UPLOAD-FLEABAG-MEDIA.bat all      ^<- force all 1-4
echo.

set "ARG=%~1"
if "%ARG%"=="" (
  powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\upload-fleabag-media.ps1" -Mode auto
) else if /I "%ARG%"=="all" (
  powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\upload-fleabag-media.ps1" -Mode all
) else if /I "%ARG%"=="a" (
  powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\upload-fleabag-media.ps1" -Mode all
) else (
  powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\upload-fleabag-media.ps1" -Mode "%ARG%"
)

echo.
pause
