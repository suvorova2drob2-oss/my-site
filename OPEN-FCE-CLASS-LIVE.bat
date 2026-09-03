@echo off
setlocal
cd /d "%~dp0"
title FCE Live - do not close this window
color 0B

echo.
echo  ========================================
echo   Live local - FCE class games
echo  ========================================
echo.
echo  1) This window starts the Live server
echo  2) Browser opens automatically
echo  Phones (same Wi-Fi): see http://192.168...:8787 in this window
echo  Open game via that IP, then Create room - send THAT link
echo.
echo  Do NOT close this window while testing.
echo  Press Ctrl+C here to stop the server.
echo.

where node >nul 2>&1
if errorlevel 1 (
  echo ERROR: Node.js is not installed.
  pause
  exit /b 1
)

call npm run live:local
