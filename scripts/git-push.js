#!/usr/bin/env node

const { execSync } = require('child_process');
const readline = require('readline');
const path = require('path');

// Pastikan berjalan di root proyek
const rootDir = path.resolve(__dirname, '..');
process.chdir(rootDir);

function run(command, silent = false) {
  try {
    return execSync(command, { stdio: silent ? 'pipe' : 'inherit', encoding: 'utf-8' });
  } catch (error) {
    if (!silent) {
      console.error(`\x1b[31m[ERROR] Gagal menjalankan: ${command}\x1b[0m`);
    }
    throw error;
  }
}

async function main() {
  console.log('\n\x1b[36m==============================================================\x1b[0m');
  console.log('\x1b[32m  PT IHSAN ABDUL PATAH (PT. IAP) — Fast Git Terminal Push     \x1b[0m');
  console.log('\x1b[33m  Target: https://github.com/Boerhan06/PT-IAP.git             \x1b[0m');
  console.log('\x1b[36m==============================================================\x1b[0m\n');

  // 1. Setup Remote
  try {
    const remotes = execSync('git remote', { encoding: 'utf-8' });
    if (!remotes.includes('origin')) {
      console.log('\x1b[34m[1/4] Menambahkan remote origin...\x1b[0m');
      run('git remote add origin https://github.com/Boerhan06/PT-IAP.git');
    } else {
      run('git remote set-url origin https://github.com/Boerhan06/PT-IAP.git', true);
    }
  } catch (e) {
    console.error('\x1b[31mGagal memeriksa remote git.\x1b[0m');
  }

  // 2. Set Branch ke main
  try {
    run('git branch -M main', true);
  } catch (e) {}

  // 3. Stage changes
  console.log('\x1b[34m[2/4] Menambahkan semua perubahan (git add .)...\x1b[0m');
  run('git add .');

  // 4. Periksa apakah ada perubahan untuk dicommit
  let hasChanges = true;
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf-8' });
    if (!status.trim()) {
      hasChanges = false;
    }
  } catch (e) {}

  // Ambil argumen commit jika ada, contoh: npm run git -- "update navbar"
  const args = process.argv.slice(2).filter(arg => !arg.startsWith('--'));
  let commitMessage = args.join(' ').trim();

  if (hasChanges) {
    if (!commitMessage) {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      commitMessage = await new Promise((resolve) => {
        rl.question('\x1b[33m[3/4] Masukkan pesan commit (tekan Enter untuk default): \x1b[0m', (ans) => {
          rl.close();
          resolve(ans.trim());
        });
      });
    }

    if (!commitMessage) {
      const now = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
      commitMessage = `chore: update PT. IAP project (${now})`;
    }

    console.log(`\x1b[34m[3/4] Melakukan commit: "${commitMessage}"...\x1b[0m`);
    try {
      run(`git commit -m "${commitMessage.replace(/"/g, '\\"')}"`);
    } catch (e) {
      console.log('\x1b[33mTidak ada perubahan baru untuk dicommit.\x1b[0m');
    }
  } else {
    console.log('\x1b[33m[3/4] Tidak ada perubahan lokal baru. Melanjutkan push commit yang ada...\x1b[0m');
  }

  // 5. Push ke GitHub
  console.log('\x1b[34m[4/4] Mengirim commit ke GitHub (git push -u origin main)...\x1b[0m');
  try {
    run('git push -u origin main');
    console.log('\n\x1b[32m==============================================================\x1b[0m');
    console.log('\x1b[32m  [BERHASIL] Repository sukses terupload ke GitHub!            \x1b[0m');
    console.log('\x1b[33m  URL: https://github.com/Boerhan06/PT-IAP                   \x1b[0m');
    console.log('\x1b[32m==============================================================\x1b[0m\n');
  } catch (e) {
    console.log('\n\x1b[31m[PERINGATAN] Push gagal atau remote memiliki riwayat berbeda.\x1b[0m');
    console.log('\x1b[33mCoba jalankan perintah berikut jika remote sudah berisi file:\x1b[0m');
    console.log('  git pull origin main --rebase');
    console.log('  git push -u origin main\n');
  }
}

main();
