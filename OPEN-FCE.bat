@echo off
setlocal
cd /d "%~dp0"

echo.
echo  Mastering B2 (FCE) — local server
echo  =================================
echo  Do NOT open fce.html by double-click (file:// breaks links).
echo  This window starts the site at http://localhost:5173/fce.html
echo.
echo  Press Ctrl+C here to stop the server.
echo.

where node >nul 2>&1
if errorlevel 1 (
  echo ERROR: Node.js is not installed. Install from https://nodejs.org then run again.
  pause
  exit /b 1
)

if not exist "node_modules\vite" (
  echo Installing dependencies...
  call npm install
  if errorlevel 1 (
    echo npm install failed.
    pause
    exit /b 1
  )
)

start "" "http://localhost:5173/fce.html"
call npm run dev
