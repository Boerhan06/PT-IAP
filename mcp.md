# Model Context Protocol (MCP) Guide & Configuration
## PT IHSAN ABDUL PATAH (PT. IAP)

Dokumen ini menjelaskan integrasi **Model Context Protocol (MCP)** pada proyek PT IHSAN ABDUL PATAH agar asisten AI (seperti Cursor, Claude Desktop, Antigravity, atau Roo-Code) dapat terhubung dengan filesystem, git, dan tools pengujian web secara aman dan efisien.

---

### 1. Konfigurasi MCP Servers (`mcp_config.json`)

Simpan konfigurasi berikut pada pengaturan MCP client Anda (misalnya di `claude_desktop_config.json` atau pengaturan MCP IDE):

```json
{
  "mcpServers": {
    "pt-iap-filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "d:\\Projek\\2026\\PT-IAP"
      ]
    },
    "pt-iap-git": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-git",
        "--repository",
        "d:\\Projek\\2026\\PT-IAP"
      ]
    },
    "pt-iap-github": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-github"
      ],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "<YOUR_GITHUB_PAT_TOKEN>",
        "GITHUB_OWNER": "Boerhan06",
        "GITHUB_REPO": "PT-IAP"
      }
    },
    "pt-iap-browser-tester": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-puppeteer"
      ]
    }
  }
}
```

---

### 2. Fungsi Masing-Masing Server MCP

1. **`pt-iap-filesystem`**:
   - **Tujuan**: Memungkinkan model AI membaca struktur katalog `nextapp/lib/products.ts`, mengedit komponen React, dan memperbarui dokumentasi tanpa risiko mengubah file di luar direktori kerja.
   - **Cakupan Folder**: Hanya dibatasi pada `d:\Projek\2026\PT-IAP`.

2. **`pt-iap-git`**:
   - **Tujuan**: Memeriksa riwayat commit, diff perubahan file, status staging area, dan konflik merge secara otomatis.
   - **Target**: Memastikan commit sesuai konvensi Semantic Commit (`feat:`, `fix:`, `docs:`, `style:`).

3. **`pt-iap-github`**:
   - **Tujuan**: Mengelola repository online `https://github.com/Boerhan06/PT-IAP.git`, pembuatan Pull Request (PR), tracking Issue baru, serta rilis versi produksi.

4. **`pt-iap-browser-tester` (Puppeteer)**:
   - **Tujuan**: Pengujian UI/UX otomatis terhadap `http://localhost:3000/`, verifikasi drawer keranjang, modal invoice, tombol WhatsApp, serta audit performa rendering.

---

### 3. Prompt Konteks Awal untuk AI (MCP System Prompt)

Saat memulai sesi chat baru dengan AI di IDE Anda, gunakan instruksi singkat berikut:

```text
Gunakan MCP Server pt-iap-filesystem dan pt-iap-git untuk membaca file PRD.md, design.md, dan Agen.md pada proyek PT IHSAN ABDUL PATAH.
Pastikan setiap penambahan fitur:
1. Menggunakan Next.js App Router, TypeScript, dan Tailwind CSS.
2. Mempertahankan harga resmi pada lib/products.ts.
3. Selalu menyediakan tombol aksi WhatsApp ke nomor 0852 6545 8819.
4. Menjaga keamanan file rahasia (.env*) sesuai .gitignore.
```
