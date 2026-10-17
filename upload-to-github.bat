@echo off
setlocal enabledelayedexpansion

echo ==============================================================
echo   PT IHSAN ABDUL PATAH (PT. IAP) - Git Push Automation Tool
echo   Target Repo: https://github.com/Boerhan06/PT-IAP.git
echo ==============================================================
echo.

:: 1. Verifikasi Git
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Git belum terinstall di komputer ini atau belum masuk PATH!
    pause
    exit /b 1
)

:: 2. Setup Remote Origin
echo [1/4] Mengonfigurasi remote origin...
git remote get-url origin >nul 2>&1
if %errorlevel% neq 0 (
    git remote add origin https://github.com/Boerhan06/PT-IAP.git
    echo       Remote origin ditambahkan: https://github.com/Boerhan06/PT-IAP.git
) else (
    git remote set-url origin https://github.com/Boerhan06/PT-IAP.git
    echo       Remote origin diperbarui: https://github.com/Boerhan06/PT-IAP.git
)

:: 3. Ubah branch aktif ke main
echo [2/4] Mengatur branch ke 'main'...
git branch -M main

:: 4. Stage semua perubahan
echo [3/4] Menambahkan semua perubahan (git add)...
git add .

:: 5. Input Pesan Commit
set /p COMMIT_MSG="Masukkan pesan commit (tekan Enter untuk default: 'feat: update PT. IAP UI/UX, catalog & branding'): "
if "%COMMIT_MSG%"=="" set COMMIT_MSG=feat: update PT. IAP UI/UX, catalog & branding

git commit -m "%COMMIT_MSG%"
if %errorlevel% neq 0 (
    echo [INFO] Tidak ada perubahan baru untuk di-commit atau commit sudah bersih.
)

:: 6. Push ke GitHub
echo [4/4] Mengupload ke GitHub (origin main)...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ==============================================================
    echo   [BERHASIL] Repository berhasil diupload ke GitHub!
    echo   Kunjungi: https://github.com/Boerhan06/PT-IAP
    echo ==============================================================
) else (
    echo.
    echo [PERINGATAN] Push gagal atau remote memiliki commit yang berbeda.
    echo Mencoba push dengan pull rebase atau petunjuk:
    echo Jika ini repo baru yang memiliki README/commit lama, jalankan:
    echo   git pull origin main --rebase
    echo   git push -u origin main
)

echo.
pause
