# Petunjuk Agen AI (Agen.md)
## Panduan Teknis & Instruksi untuk Antigravity / Cursor / Claude / Copilot

File ini adalah panduan operasional agar seluruh model AI yang bekerja pada repositori **PT IHSAN ABDUL PATAH (PT. IAP)** dapat bekerja secara efisien, konsisten, dan bebas dari kesalahan konfigurasi.

---

### 1. Profil & Konteks Repositori
* **Entitas Bisnis**: PT IHSAN ABDUL PATAH (Singkatan: **PT. IAP**)
* **Bidang Usaha**: Perusahaan Perdagangan Umum, Distributor Material Bangunan & Jasa Pengeboran Sumur Dalam (*Deep Well*).
* **Lokasi Operasional**: Lembang, Kabupaten Bandung Barat, Jawa Barat.
* **Kontak Hotline**:
  - WhatsApp Utama: `0852 6545 8819` (`6285265458819`)
  - Layanan Kedua: `0852 2257 9391` (`6285222579391`)
* **Dokumen Acuan**:
  - `PRD.md`: Spesifikasi kebutuhan produk dan alur bisnis.
  - `design.md`: Sistem desain visual, palet warna, dan panduan copywriting.
  - `mcp.md`: Konfigurasi Model Context Protocol (MCP) untuk automasi.

---

### 2. Struktur Proyek (Directory Map)

```text
d:\Projek\2026\PT-IAP\
├── .gitignore               # Aturan ignore Git (keamanan .env & build cache)
├── .env.example             # Template variabel lingkungan
├── upload-to-github.bat     # Pintasan upload 1-klik Windows CMD
├── upload-to-github.ps1     # Pintasan upload PowerShell
├── PRD.md                   # Product Requirements Document
├── design.md                # UI/UX & Design System
├── Agen.md                  # Panduan AI Agent ini
├── mcp.md                   # Konfigurasi Model Context Protocol
├── nextapp/                 # Aplikasi Utama Next.js 16/15
│   ├── app/
│   │   ├── layout.tsx       # Root layout, CDN font, CDN Tailwind, metadata SEO
│   │   ├── page.tsx         # Main interactive commerce landing page
│   │   └── globals.css      # CSS dasar murni
│   ├── components/
│   │   ├── IAPLogo.tsx      # SVG Monogram Segitiga resmi PT. IAP
│   │   ├── Navbar.tsx       # Header sticky, kontak, tombol navigasi
│   │   ├── Hero.tsx         # Hero section, copywriting, dual CTA
│   │   ├── CategoryTabs.tsx # Filter tab kategori material & jasa
│   │   ├── ProductCard.tsx  # Kartu produk, eceran/grosir, WA button
│   │   ├── CartDrawer.tsx   # Smart shopping cart drawer
│   │   ├── InvoiceModal.tsx # Proforma Invoice berkop resmi PT. IAP
│   │   ├── DeliveryEstimator.tsx # Kalkulator ongkir & tonase muatan
│   │   ├── FleetRadarModal.tsx   # Radar GPS armada depo Lembang
│   │   ├── BoQUploadModal.tsx    # AI RAB/BoQ parser
│   │   ├── CompanyProfileModal.tsx # Modal Visi & 6 Misi PT. IAP
│   │   ├── CommandPalette.tsx    # Pencarian cepat (Ctrl + K)
│   │   └── Footer.tsx       # Footer 9 bidang usaha & legalitas
│   ├── lib/
│   │   ├── products.ts      # Database statis produk sesuai katalog PDF resmi
│   │   └── utils.ts         # Utility formatting rupiah, classnames
│   ├── types/
│   │   └── index.ts         # TypeScript schema Product, CartItem, Fleet
│   ├── package.json
│   └── tsconfig.json
└── _legacy/                 # Arsip HTML/CSS versi lama (jangan diedit)
```

---

### 3. Aturan Teknis Penting (Crucial AI Gotchas & Constraints)

Setiap AI yang menjalankan build atau dev server di lingkungan Windows ini **WAJIB** memperhatikan aturan berikut:

#### 1. Menjalankan Server Pengembangan (Dev Server):
* ⚠️ **JANGAN** menggunakan Turbopack native di Windows tanpa flag: Turbopack pada Next.js 16 di mesin ini memiliki isu kompatibilitas biner `@next/swc-win32-x64-msvc`.
* ✅ **SELALU** gunakan Webpack bundler saat menjalankan perintah lokal:
  ```powershell
  cd nextapp
  node .\node_modules\next\dist\bin\next dev --webpack -p 3000
  ```
  atau melalui script `npm run dev` yang sudah dikonfigurasi dengan flag `--webpack`.

#### 2. Konfigurasi Font:
* ⚠️ `next/font/google` di Windows environment ini dapat memicu error `Cannot find module 'nanoid/non-secure'`.
* ✅ **Gunakan link Google Fonts CDN** langsung pada tag `<head>` di dalam `nextapp/app/layout.tsx`.

#### 3. Konfigurasi Tailwind CSS:
* ⚠️ Hindari menulis `@import "tailwindcss";` di `globals.css` yang memicu error resolusi PostCSS Webpack.
* ✅ Tailwind CSS runtime disematkan melalui `<script src="https://cdn.tailwindcss.com"></script>` di `layout.tsx` dengan custom theme colors (`primary`, `brand`, `gold`, `alert`).

#### 4. Integritas Data & Harga:
* Semua harga pada `lib/products.ts` harus merefleksikan dokumen resmi:
  - Besi 10mm Full SNI: `Rp 76.750`
  - Semen Holcim / Tiga Roda: `Rp 73.500`
  - Semen Padang: `Rp 69.000`
  - Pasir Pasang: `Rp 1.550.000` / truk bak kayu
  - Bata Merah: `Rp 690` / pcs (min. 7.000 pcs)
  - Granit Valentino Gress 60x60: mulai `Rp 100.000` / m²
* Catatan penting: Jika ada penambahan produk baru, selalu sertakan field `bulkPrice` (harga borongan) dan `minBulkQty` untuk mendukung slogan *"Pemesanan banyak harga langsung dikurangi"*.

---

### 4. Konvensi Kode (Coding Conventions)

1. **TypeScript Ketat**: Hindari penggunaan `any`. Gunakan tipe data dari `types/index.ts`.
2. **Format Rupiah**: Selalu gunakan fungsi `formatRupiah(number)` dari `lib/utils.ts` untuk menampilkan harga.
3. **Pesan WhatsApp Otomatis**: Buat format pesan yang rapi dengan `encodeURIComponent`, menyertakan nama PT, rincian produk, dan salam pembuka formal.
4. **Keamanan Data**: Jangan pernah memasukkan nomor API Key rahasia ke dalam file komponen publik. Gunakan `process.env.NEXT_PUBLIC_*` untuk data publik dan `.env.local` untuk kredensial rahasia.

---

### 5. Alur Kerja Git & Deployment

Untuk commit dan upload ke remote repo:
1. Pastikan file `.gitignore` tidak diubah sembarangan agar folder `.next` dan `.env` tidak terunggah.
2. Jalankan perintah otomatisasi:
   - Double-click `upload-to-github.bat`
   - Atau di terminal: `.\upload-to-github.ps1`
   - Atau manual:
     ```bash
     git add .
     git commit -m "feat: [deskripsi perubahan]"
     git push -u origin main
     ```
3. Repository GitHub resmi:
   `https://github.com/Boerhan06/PT-IAP.git`
