# Upload Fleabag workshop clips to VPS (ege).
# Default: only new / changed mp4s since last successful upload (local stamp).
# Usage:
#   .\scripts\upload-fleabag-media.ps1
#   .\scripts\upload-fleabag-media.ps1 -Mode auto
#   .\scripts\upload-fleabag-media.ps1 -Mode all
#   .\scripts\upload-fleabag-media.ps1 -Mode 4

param(
  [string]$Mode = "auto",
  [string]$Episode = ""
)

$ErrorActionPreference = "Stop"
$Root = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$Media = Join-Path $Root "workshops\fleabag\media"
$WorkshopRoot = Join-Path $Root "workshops\fleabag"
$StampPath = Join-Path $Media ".upload-state.json"
$RemoteHost = "ege"
$RemoteDir = "/root/my-site/workshops/fleabag/media"
$RemoteWorkshop = "/root/my-site/workshops/fleabag"
# Prefer password for this host (no local key yet). Keep prompts visible.
$SshOpts = @(
  "-o", "PreferredAuthentications=password,keyboard-interactive",
  "-o", "PubkeyAuthentication=no",
  "-o", "NumberOfPasswordPrompts=3",
  "-o", "ServerAliveInterval=30"
)

function Get-Stamp {
  if (-not (Test-Path $StampPath)) { return @{} }
  try {
    $raw = Get-Content -LiteralPath $StampPath -Raw -Encoding UTF8
    $obj = $raw | ConvertFrom-Json
    $map = @{}
    foreach ($p in $obj.PSObject.Properties) {
      $map[$p.Name] = @{
        size  = [int64]$p.Value.size
        mtime = [int64]$p.Value.mtime
      }
    }
    return $map
  } catch {
    return @{}
  }
}

function Save-Stamp([hashtable]$map) {
  $out = [ordered]@{}
  foreach ($k in ($map.Keys | Sort-Object)) {
    $out[$k] = @{ size = $map[$k].size; mtime = $map[$k].mtime }
  }
  ($out | ConvertTo-Json -Depth 4) | Set-Content -LiteralPath $StampPath -Encoding UTF8
}

function Rel-Key([string]$full) {
  $full = (Resolve-Path -LiteralPath $full).Path
  $base = (Resolve-Path -LiteralPath $Media).Path.TrimEnd("\") + "\"
  if (-not $full.StartsWith($base, [StringComparison]::OrdinalIgnoreCase)) {
    throw "File outside media: $full"
  }
  return ($full.Substring($base.Length) -replace "\\", "/")
}

function File-Sig([System.IO.FileInfo]$fi) {
  return @{
    size  = [int64]$fi.Length
    mtime = [int64]([DateTimeOffset]$fi.LastWriteTimeUtc).ToUnixTimeSeconds()
  }
}

function Get-LocalMp4s {
  if (-not (Test-Path $Media)) { throw "Missing folder: $Media" }
  Get-ChildItem -LiteralPath $Media -Directory |
    Where-Object { $_.Name -match "^s0[12]e0[1-9]$" } |
    ForEach-Object {
      Get-ChildItem -LiteralPath $_.FullName -File -Filter "*.mp4" -ErrorAction SilentlyContinue
    }
}

function Episode-Of([string]$relKey) {
  return ($relKey -split "/")[0]
}

function Sync-WorkshopSite {
  Write-Host ""
  Write-Host "  Syncing workshop pages + JS (beats / phrases)..."
  & ssh @SshOpts $RemoteHost "mkdir -p $RemoteWorkshop/js $RemoteWorkshop/css"
  if ($LASTEXITCODE -ne 0) {
    Write-Host "  SSH mkdir for workshop root failed."
    exit 1
  }

  $jsFiles = @(
    (Join-Path $WorkshopRoot "js\fleabag-workshop.js"),
    (Join-Path $WorkshopRoot "js\fleabag-lesson.js"),
    (Join-Path $WorkshopRoot "js\fleabag-phrase-memes.js"),
    (Join-Path $WorkshopRoot "js\fleabag-speak-desk.js"),
    (Join-Path $WorkshopRoot "js\fleabag-phrase-srs.js"),
    (Join-Path $WorkshopRoot "js\fleabag-sticker-fyp.js"),
    (Join-Path $WorkshopRoot "js\fleabag-sticker-swipe.js")
  ) | Where-Object { Test-Path -LiteralPath $_ }

  if ($jsFiles.Count) {
    $scpJs = @() + $SshOpts + $jsFiles + @("${RemoteHost}:${RemoteWorkshop}/js/")
    & scp @scpJs
    if ($LASTEXITCODE -ne 0) {
      Write-Host "  JS upload failed."
      exit 1
    }
  }

  $htmlFiles = @(
    (Join-Path $WorkshopRoot "index.html"),
    (Join-Path $WorkshopRoot "lesson.html")
  ) | Where-Object { Test-Path -LiteralPath $_ }
  if ($htmlFiles.Count) {
    $scpHtml = @() + $SshOpts + $htmlFiles + @("${RemoteHost}:${RemoteWorkshop}/")
    & scp @scpHtml
    if ($LASTEXITCODE -ne 0) {
      Write-Host "  HTML upload failed."
      exit 1
    }
  }

  $cssLocal = Join-Path $WorkshopRoot "css\fleabag-workshop.css"
  if (Test-Path -LiteralPath $cssLocal) {
    $scpCss = @() + $SshOpts + @($cssLocal, "${RemoteHost}:${RemoteWorkshop}/css/")
    & scp @scpCss
    if ($LASTEXITCODE -ne 0) {
      Write-Host "  CSS upload failed."
      exit 1
    }
  }

  $memesLocal = Join-Path $WorkshopRoot "memes"
  if (Test-Path -LiteralPath $memesLocal) {
    $scpMemes = @() + $SshOpts + @("-r", $memesLocal, "${RemoteHost}:${RemoteWorkshop}/")
    & scp @scpMemes
    if ($LASTEXITCODE -ne 0) {
      Write-Host "  Memes upload failed."
      exit 1
    }
  }
}

$m = $Mode.Trim().ToLowerInvariant()
if ($m -match "^s0[12]e0([1-9])$") {
  $Episode = $m
  $m = "episode"
} elseif ($m -match "^[1-9]$") {
  $Episode = "s01e0$m"
  $m = "episode"
} elseif ($m -eq "a") {
  $m = "all"
} elseif ($m -eq "js" -or $m -eq "site") {
  $m = "js"
}

Write-Host ""
Write-Host "  ========================================"
Write-Host "   Fleabag clips -> VPS (ege)"
Write-Host "  ========================================"
Write-Host ""
Write-Host "  Local:  $Media"
Write-Host "  Remote: ${RemoteHost}:$RemoteDir"
Write-Host ""

$stamp = Get-Stamp
$allFiles = @(Get-LocalMp4s)
if (-not $allFiles.Count) {
  Write-Host "  No mp4 files found under s01e* / s02e* folders."
  exit 1
}

$byEp = @{}
$changedEps = New-Object "System.Collections.Generic.HashSet[string]"
$changedFiles = @()

foreach ($fi in $allFiles) {
  $key = Rel-Key $fi.FullName
  $sig = File-Sig $fi
  $ep = Episode-Of $key
  if (-not $byEp.ContainsKey($ep)) { $byEp[$ep] = @() }
  $byEp[$ep] += $fi

  $isNew = -not $stamp.ContainsKey($key)
  $changed = $false
  if (-not $isNew) {
    $old = $stamp[$key]
    if ([int64]$old.size -ne $sig.size -or [int64]$old.mtime -ne $sig.mtime) {
      $changed = $true
    }
  }
  if ($isNew -or $changed) {
    [void]$changedEps.Add($ep)
    $changedFiles += [pscustomobject]@{ Key = $key; New = $isNew; File = $fi }
  }
}

$targets = @()
$mediaOnlySkip = $false
if ($m -eq "js") {
  Write-Host "  Mode: JS/HTML only (no video upload)"
  $mediaOnlySkip = $true
} elseif ($m -eq "all") {
  $targets = @($byEp.Keys | Sort-Object)
  Write-Host "  Mode: ALL episodes ($($targets -join ', '))"
} elseif ($m -eq "episode") {
  if (-not $Episode) { throw "Episode required (e.g. s01e04)" }
  if (-not $byEp.ContainsKey($Episode)) { throw "No local folder/files for $Episode" }
  $targets = @($Episode)
  Write-Host "  Mode: FORCE episode $Episode"
} else {
  $targets = @($changedEps | Sort-Object)
  if (-not $stamp.Count) {
    # First run: record what is already on disk. Do NOT re-upload everything.
    foreach ($fi in $allFiles) {
      $key = Rel-Key $fi.FullName
      $stamp[$key] = File-Sig $fi
    }
    Save-Stamp $stamp
    Write-Host "  First run: saved baseline stamp (no video upload)."
    Write-Host "  Stamp: $StampPath"
    Write-Host "  Still syncing JS/HTML so new beats reach the VPS..."
    Sync-WorkshopSite
    Write-Host ""
    Write-Host "  Done. Force clips with: UPLOAD-FLEABAG-MEDIA.bat s02e01"
    Write-Host "  Or: UPLOAD-FLEABAG-MEDIA.bat s01e06  /  all"
    Write-Host ""
    exit 0
  }
  if (-not $targets.Count) {
    Write-Host "  Mode: AUTO - no new videos since last upload."
    Write-Host "  (Stamp: $StampPath)"
    Write-Host "  Still syncing JS/HTML (beats / phrases)..."
    $mediaOnlySkip = $true
  } else {
    Write-Host "  Mode: AUTO - only new/changed episodes:"
    foreach ($row in $changedFiles) {
      $tag = if ($row.New) { "NEW" } else { "changed" }
      Write-Host ("    [{0}] {1}" -f $tag, $row.Key)
    }
  }
}

Write-Host ""
Write-Host "  1) Click this window (so it has focus)"
Write-Host "  2) Switch keyboard to ENGLISH (Win+Space)"
Write-Host "  3) Type the VPS root password - nothing appears on screen (normal!)"
Write-Host "  4) Press Enter"
Write-Host "  You may be asked 2-3 times (ssh + scp). Same password each time."
Write-Host ""
Write-Host "  Tip: first test login alone:  ssh ege"
Write-Host "  If that fails, the bat cannot work either."
Write-Host ""

if (-not $mediaOnlySkip) {
  Write-Host "  Will upload videos: $($targets -join ', ')"
  & ssh @SshOpts $RemoteHost "mkdir -p $RemoteDir"
  if ($LASTEXITCODE -ne 0) {
    Write-Host '  SSH failed. Check host alias "ege" in your SSH config.'
    exit 1
  }

  $scpArgs = @() + $SshOpts + @("-r")
  foreach ($ep in $targets) {
    $localEp = Join-Path $Media $ep
    if (-not (Test-Path $localEp)) { throw "Missing $localEp" }
    $scpArgs += $localEp
  }
  $readme = Join-Path $Media "README.md"
  if (Test-Path $readme) { $scpArgs += $readme }
  $scpArgs += "${RemoteHost}:${RemoteDir}/"

  & scp @scpArgs
  if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "  Upload failed - stamp NOT updated."
    exit 1
  }

  foreach ($ep in $targets) {
    foreach ($fi in $byEp[$ep]) {
      $key = Rel-Key $fi.FullName
      $stamp[$key] = File-Sig $fi
    }
  }
  Save-Stamp $stamp
}

Sync-WorkshopSite

Write-Host ""
Write-Host "  ========================================"
Write-Host "  Done. JS/HTML synced."
if (-not $mediaOnlySkip) { Write-Host "  Videos stamp updated." }
Write-Host "  Open Fleabag and hard-refresh (Ctrl+F5)."
Write-Host "  ========================================"
Write-Host ""
