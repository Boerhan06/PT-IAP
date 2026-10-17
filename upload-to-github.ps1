# ==============================================================
# PT IHSAN ABDUL PATAH (PT. IAP) - PowerShell Git Push Tool
# Target Repo: https://github.com/Boerhan06/PT-IAP.git
# ==============================================================

Write-Host "==============================================================" -ForegroundColor Cyan
Write-Host "  PT IHSAN ABDUL PATAH (PT. IAP) - Git Push Automation Tool   " -ForegroundColor Green
Write-Host "  Target: https://github.com/Boerhan06/PT-IAP.git             " -ForegroundColor Yellow
Write-Host "==============================================================" -ForegroundColor Cyan

# 1. Periksa Git
try {
    $null = git --version
} catch {
    Write-Host "[ERROR] Git tidak ditemukan dalam PATH sistem!" -ForegroundColor Red
    exit 1
}

# 2. Setup Origin
Write-Host "`n[1/4] Mengonfigurasi remote origin..." -ForegroundColor Cyan
$remotes = git remote
if ($remotes -contains "origin") {
    git remote set-url origin https://github.com/Boerhan06/PT-IAP.git
    Write-Host "  Remote origin diperbarui ke https://github.com/Boerhan06/PT-IAP.git" -ForegroundColor Green
} else {
    git remote add origin https://github.com/Boerhan06/PT-IAP.git
    Write-Host "  Remote origin ditambahkan: https://github.com/Boerhan06/PT-IAP.git" -ForegroundColor Green
}

# 3. Rename branch ke main
Write-Host "[2/4] Mengatur branch aktif ke 'main'..." -ForegroundColor Cyan
git branch -M main

# 4. Stage files
Write-Host "[3/4] Menambahkan file yang berubah (git add .)..." -ForegroundColor Cyan
git add .

# 5. Commit
$msg = Read-Host "Masukkan pesan commit [Enter untuk: 'feat: update PT. IAP UI/UX, catalog & branding']"
if ([string]::IsNullOrWhiteSpace($msg)) {
    $msg = "feat: update PT. IAP UI/UX, catalog & branding"
}

git commit -m "$msg"

# 6. Push
Write-Host "[4/4] Mengirim commit ke GitHub (git push -u origin main)..." -ForegroundColor Cyan
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n[SUKSES] Repository berhasil diunggah ke GitHub!" -ForegroundColor Green
    Write-Host "Kunjungi: https://github.com/Boerhan06/PT-IAP" -ForegroundColor Yellow
} else {
    Write-Host "`n[CATATAN] Jika remote sudah memiliki commit lama, lakukan:" -ForegroundColor Magenta
    Write-Host "  git pull origin main --allow-unrelated-histories --no-rebase" -ForegroundColor White
    Write-Host "  git push -u origin main" -ForegroundColor White
}
