@echo off
setlocal
cd /d "%~dp0"

echo.
echo  CPE hub - local server
echo  =======================
echo  Open via http://localhost:5173/index.html
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

start "" "http://localhost:5173/index.html"
call npm run dev
