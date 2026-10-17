<div align="center">

# 🏢 PT IHSAN ABDUL PATAH (PT. IAP)
### Portal Pengadaan Perdagangan Umum, Material Bangunan & Jasa Pengeboran Sumur

*“Perusahaan Perdagangan Umum dan Jasa dengan Harga Murah, Mudah, dan Kualitas Terpercaya”*

[![Next.js](https://img.shields.io/badge/Next.js-15%2F16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![GitHub](https://img.shields.io/badge/GitHub-Boerhan06%2FPT--IAP-181717?style=for-the-badge&logo=github)](https://github.com/Boerhan06/PT-IAP)
[![WhatsApp Support](https://img.shields.io/badge/WhatsApp-0852--6545--8819-25D366?style=for-the-badge&logo=whatsapp)](https://wa.me/6285265458819)

</div>

---

## 📌 Tentang Perusahaan
**PT IHSAN ABDUL PATAH (PT. IAP)** adalah perusahaan perdagangan umum dan penyedia jasa terkemuka yang berpusat di Lembang, Kabupaten Bandung Barat. Kami berdedikasi melayani kontraktor, mandor, pengembang perumahan, toko bangunan, dan masyarakat luas dengan pasokan material konstruksi berstandar SNI, armada distribusi mandiri, dan layanan pengeboran sumur dalam (*deep well*).

### 🌟 9 Bidang Usaha Resmi:
1. **Material Bangunan** *(Besi Beton SNI, Semen Resmi Pabrik, Pasir Truk Bak Kayu, Baja Ringan, Bata Hebel/Merah, Granit Tile)*
2. **Pengeboran Sumur** *(Eksplorasi Geolistrik & Deep Well Drilling)*
3. **Alat Tulis & Gambar**
4. **Jasa Boga (Catering)**
5. **Sayuran & Buah-buahan** *(Komoditas Pertanian Unggulan Lembang)*
6. **Pupuk & Agro Kimia**
7. **Pakaian**
8. **Alat Lab & Farmasi**
9. **Obat-obatan**

---

## 🚀 Fitur Unggulan Platform

### 1. 🛒 Katalog Dinamis & Dual-Tier Pricing (*Pemesanan Banyak Harga Dikurangi*)
- **Dua Tingkat Harga Transparan**: Pilihan harga eceran dan harga grosir borongan dengan syarat kuantiti minimum (MOQ).
- **Kategori Terorganisir**: Besi Beton & Baja, Semen & Mortar, Pasir & Batu Alam, Atap & Dinding, Finishing & Keramik, serta Layanan Khusus.
- **Direct WhatsApp Order**: Tombol pemesanan cepat pada setiap kartu produk yang otomatis mengarahkan pesan WhatsApp terformat ke nomor sales resmi.

### 2. 🧾 Proforma Invoice Resmi Berkop PT. IAP
- Pembuatan Proforma Invoice instan berkop resmi PT IHSAN ABDUL PATAH.
- Dilengkapi nomor invoice otomatis, rincian barang, tanggal jatuh tempo, QR code verifikasi, dan stempel digital.
- Fitur cetak langsung (`window.print()`) dan kirim invoice ke WhatsApp Customer Service.

### 3. 🚚 Estimator Pengiriman & Tonase Muatan Depo Lembang
- Perhitungan estimasi tonase muatan berdasarkan jenis material (besi, semen zak, pasir m³, bata).
- Pilihan armada: *Pick Up / Engkel (1.5 - 2.5 Ton)*, *Dump Truck / Cold Diesel (8 - 10 Ton)*, hingga *Tronton (20 - 30 Ton)*.
- Estimasi waktu tiba (ETA) dan radius rute se-Bandung Raya hingga wilayah Jawa Barat.

### 4. 🛰️ Radar Telematika Armada & Status Rig Pengeboran
- Monitoring status armada dump truck dan rig pengeboran sumur secara real-time.
- Memastikan transparansi logistik dari pemuatan di depo hingga serah terima di lokasi proyek.

### 5. 🤖 AI Bill of Quantities (BoQ) Estimator
- Modul cerdas untuk kontraktor mengunggah rincian RAB/BoQ konstruksi.
- Pemetaan otomatis daftar belanja ke katalog produk PT. IAP beserta perhitungan rabat volume.

### 6. ⚡ Command Palette (`Ctrl + K`)
- Pencarian cerdas dan cepat ke seluruh katalog produk, spesifikasi teknis, dan tautan layanan hanya dengan tombol keyboard.

---

## 🛠️ Arsitektur & Teknologi

| Komponen | Teknologi | Deskripsi |
| :--- | :--- | :--- |
| **Framework** | **Next.js (App Router)** | Mesin SSR & Static Generation berkecepatan tinggi dengan optimasi SEO |
| **Bahasa** | **TypeScript 5** | Strict type safety untuk kalkulasi finansial, kuantiti, dan skema data |
| **Styling** | **Tailwind CSS & Vanilla CSS** | Tampilan industrial modern, responsive layout, dan micro-interactions |
| **Ikonografi** | **Lucide React & FontAwesome** | Set ikon modern dan terstandarisasi |
| **Version Control** | **Git & GitHub** | Manajemen kode terpusat di `Boerhan06/PT-IAP` |
| **Otomasi AI** | **PRD, design.md, Agen.md, MCP** | Standar panduan model AI untuk pengembangan efisien bebas regresi |

---

## 📂 Struktur Direktori

```text
PT-IAP/
├── .env.example             # Template variabel lingkungan & konfigurasi aman
├── .gitignore               # Proteksi file rahasia (.env*) & build artifacts
├── PRD.md                   # Product Requirements Document & arsitektur produk
├── design.md                # Panduan UI/UX, Color Tokens & Voice of Brand
├── Agen.md                  # Manual instruksi operasional untuk AI Assistant
├── mcp.md                   # Panduan Model Context Protocol (MCP)
├── mcp_config.json          # File konfigurasi MCP Server
├── package.json             # Root NPM scripts (npm run git, dev, build)
├── scripts/
│   └── git-push.js          # Skrip otomatisasi terminal Git push
├── upload-to-github.bat     # Pintasan upload 1-klik Windows CMD
├── upload-to-github.ps1     # Pintasan upload PowerShell
└── nextapp/                 # Source Code Aplikasi Next.js
    ├── app/
    │   ├── layout.tsx       # Root layout, Google Fonts CDN, meta tags SEO
    │   ├── page.tsx         # Main Landing Page & Commerce Portal
    │   └── globals.css      # Styling dasar & custom brand utilities
    ├── components/
    │   ├── IAPLogo.tsx      # SVG Monogram Segitiga resmi PT. IAP
    │   ├── Navbar.tsx       # Header sticky & akses cepat
    │   ├── Hero.tsx         # Hero banner, copywriting persuasif & CTA ganda
    │   ├── ProductCard.tsx  # Kartu produk interaktif & dual pricing
    │   ├── CartDrawer.tsx   # Smart shopping cart drawer
    │   ├── InvoiceModal.tsx # Dokumen Proforma Invoice resmi
    │   └── ...              # Modals (Radar, Delivery, BoQ, Profile)
    └── lib/
        └── products.ts      # Database katalog riil sesuai dokumen resmi PT. IAP
```

---

## ⚡ Panduan Instalasi & Menjalankan Proyek

### 1. Clone Repository
```bash
git clone https://github.com/Boerhan06/PT-IAP.git
cd PT-IAP
```

### 2. Jalankan Mode Pengembangan (Dev Server)
Dari root direktori, jalankan:
```bash
npm run dev
```
Atau masuk ke folder `nextapp`:
```bash
cd nextapp
npm run dev
```
Akses aplikasi melalui peramban: **`http://localhost:3000`**

---

## 💻 Pintasan Terminal Git (Upload Cepat)

Untuk mengupload perubahan kode ke GitHub tanpa mengetik perintah panjang:

```bash
# Otomatis stage, commit, dan push:
npm run git

# Atau langsung sertakan pesan commit:
npm run git -- "feat: perbarui daftar harga semen dan besi"
```

---

## 🏢 Kontak Resmi & Depo Operasional

* **Nama Perusahaan**: PT IHSAN ABDUL PATAH (PT. IAP)
* **Alamat Kantor & Depo**:
  Jl. Lulurung II, Kp. Cijengkol RT/RW 001/006, Desa Wangunsari,  
  Kecamatan Lembang, Kabupaten Bandung Barat, Jawa Barat, 40391.
* **WhatsApp Sales Hotline**:
  - `0852 6545 8819` / `+62 852-6545-8819`
  - `0852 2257 9391` / `+62 852-2257-9391`

---

<div align="center">
  <small>© 2026 PT IHSAN ABDUL PATAH. Hak Cipta Dilindungi Undang-Undang.</small>
</div>
