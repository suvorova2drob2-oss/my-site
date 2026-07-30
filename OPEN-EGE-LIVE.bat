@echo off
setlocal
cd /d "%~dp0"

echo.
echo  EGE Live - local check
echo  ======================
echo  Site:  http://127.0.0.1:8787/ege/ege.html
echo  Matching: http://127.0.0.1:8787/ege/ege-listening-matching.html
echo.
echo  Use this (not file://) so Live rooms work.
echo  Press Ctrl+C here to stop the server.
echo.

where node >nul 2>&1
if errorlevel 1 (
  echo ERROR: Node.js is not installed.
  pause
  exit /b 1
)

start "" "http://127.0.0.1:8787/ege/ege.html"
call npm run live:rooms
