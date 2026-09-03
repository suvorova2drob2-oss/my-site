@echo off
setlocal
cd /d "%~dp0"
title EGE Live - do not close this window
color 0B

echo.
echo  ========================================
echo   Live local - EGE
echo  ========================================
echo.
echo  1) This window starts the Live server
echo  2) Browser opens automatically
echo  3) Click Live - Create room
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

call node scripts/run-local-live.mjs --open=http://127.0.0.1:8787/ege/ege.html
