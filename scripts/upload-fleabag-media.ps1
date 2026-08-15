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
$StampPath = Join-Path $Media ".upload-state.json"
$RemoteHost = "ege"
$RemoteDir = "/root/my-site/workshops/fleabag/media"
$SshOpts = @(
  "-o", "PreferredAuthentications=password",
  "-o", "PubkeyAuthentication=no"
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
  Get-ChildItem -LiteralPath $Media -Directory -Filter "s01e*" |
    ForEach-Object {
      Get-ChildItem -LiteralPath $_.FullName -File -Filter "*.mp4" -ErrorAction SilentlyContinue
    }
}

function Episode-Of([string]$relKey) {
  return ($relKey -split "/")[0]
}

$m = $Mode.Trim().ToLowerInvariant()
if ($m -match "^s01e0([1-9])$") {
  $Episode = $m
  $m = "episode"
} elseif ($m -match "^[1-9]$") {
  $Episode = "s01e0$m"
  $m = "episode"
} elseif ($m -eq "a") {
  $m = "all"
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
  Write-Host "  No mp4 files found under s01e* folders."
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
if ($m -eq "all") {
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
    Write-Host "  First run: saved baseline stamp (no upload)."
    Write-Host "  Stamp: $StampPath"
    Write-Host "  Next time only NEW or CHANGED episodes will upload."
    Write-Host "  If the server is missing clips, run: UPLOAD-FLEABAG-MEDIA.bat all"
    Write-Host "  Or force one episode: UPLOAD-FLEABAG-MEDIA.bat 4"
    Write-Host ""
    exit 0
  }
  if (-not $targets.Count) {
    Write-Host "  Mode: AUTO - nothing new since last upload."
    Write-Host "  (Stamp: $StampPath)"
    Write-Host "  Use -Mode all  or  -Mode 4  to force re-upload."
    Write-Host ""
    exit 0
  }
  Write-Host "  Mode: AUTO - only new/changed episodes:"
  foreach ($row in $changedFiles) {
    $tag = if ($row.New) { "NEW" } else { "changed" }
    Write-Host ("    [{0}] {1}" -f $tag, $row.Key)
  }
}

Write-Host ""
Write-Host "  Will upload: $($targets -join ', ')"
Write-Host "  1) Click this window  2) type password (invisible)  3) Enter"
Write-Host "  (You may be asked once per scp batch.)"
Write-Host ""

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

Write-Host ""
Write-Host "  ========================================"
Write-Host "  Done. Stamp updated."
Write-Host "  Open Fleabag lesson and Ctrl+F5."
Write-Host "  ========================================"
Write-Host ""
