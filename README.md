# PT Mahakarya Konstruksi — Digital Procurement & Fleet Logistics Platform

Platform pengadaan material berat, semen pracetak, besi baja SNI, dan persewaan alat berat berbasis web modern dengan kepatuhan faktur pajak DJP dan mesin estimasi logistik mandiri.

---

## ⚡ Teknologi Stack (Next.js Enterprise Stack)

- **Kerangka Utama (Framework)**: **Next.js (App Router)**
  - *Alasan*: Mesin utama website dengan arsitektur Server-Side Rendering (SSR) & Static Generation untuk performa kecepatan dan SEO pencarian Google tertinggi (seperti kata kunci *"jual besi beton"*, *"harga semen padang"*, dll.).
- **Bahasa Pemrograman**: **TypeScript**
  - *Alasan*: Keamanan tipe ketat untuk data transaksi keuangan, kalkulasi PPN 11%, rabat volume B2B bertingkat, dan koordinat telematika armada GPS tanpa risiko runtime bug.
- **Desain Visual**: **Tailwind CSS & Shadcn UI Design Principles**
  - *Alasan*: Komponen arsitektural elegan dengan glassmorphism, sudut melengkung halus (rounded-2xl), palet warna korporat hijau hutan industrial, dan mikro-animasi radar.
- **Komponen Ikon**: **Lucide React**

---

## 🏗️ Fitur Lengkap Sesuai PRD

### 1. Sticky Glassmorphism Header & Navigation
- **Branding Resmi PT**: Identitas PT Mahakarya Konstruksi Tbk.
- **Dual-Mode Account Switcher**: Beralih instan antara mode **B2B Kontraktor** (rabat volume s/d 14.2%) dan **Retail Umum**.
- **Command Palette (`Ctrl+K`)**: Modal pencarian instan untuk material SNI, plat armada truk, dan aksi cepat navigasi.
- **Smart Checkout Trigger**: Counter badge keranjang real-time.

### 2. Dual-Tier Dynamic Pricing Engine (Pilar 01)
- Setiap material memiliki dual harga:
  - **🛒 Harga Retail**: Untuk pembelian eceran.
  - **🏢 Harga Kontraktor (B2B)**: Diskon bertingkat otomatis dengan syarat MOQ (*Minimum Order Quantity*).
- Stepper kuantitas responsif `[-] [Qty] [+]` dengan kalkulasi subtotal instan.

### 3. Mesin Logistik Armada & Estimator Ongkir (Pilar 02)
- **Kalkulator Radius & Rute Real-Time**: Cilandak Jakarta Selatan, Cikarang, Cikande, BSD Tangerang, dan IKN Nusantara Sepaku.
- **Pilihan Ekspedisi**:
  - *Armada Sendiri PT (Truk Mixer Cor / Dump Truck)* — Prioritas pengiriman cepat.
  - *Kargo Rekanan Logistik Nasional* — Pengiriman kargo muatan besar.
- Menampilkan jarak kilometer, hub muat asal, dan estimasi waktu sampai (ETA).

### 4. Smart Checkout Cart Drawer
- Slide-in panel dari kanan dengan backdrop blur.
- Rincian item yang fleksibel diubah kuantitas atau dihapus.
- **Opsi Pembayaran Resmi**:
  1. *Virtual Account (BCA / Mandiri)* — Auto-settlement terhubung DJP.
  2. *PO & Proforma B2B* — Skema termin tempo 14–30 hari.
  3. *Bayar di Tempat (COD Lapangan)* — Saat tanda tangan fisik dokumen BAST.
- **Financial Breakdown**:
  - Subtotal Material
  - Rabat Kemitraan B2B (potongan hijau)
  - PPN 11% (UU HPP No. 7/2021)
  - Ongkir Armada
  - Total Tagihan Akhir

### 5. Dokumen Proforma Invoice & e-Faktur Pajak DJP (Pilar 03)
- Penerbitan otomatis lembar invoice resmi PT Mahakarya Konstruksi Tbk.
- QR-Code verifikasi DJP Online dengan kode hash unik.
- Cetak langsung atau simpan sebagai dokumen PDF (`window.print()`).

### 6. Live Fleet Telematics & GPS Tracking Radar
- Radar telematika satelit armada live untuk Truk Mixer Beton, Dump Truck Pasir, dan Tronton Flatbed Besi D16.
- Sensor kecepatan real-time, suhu agitator cor (29.2°C), dan profil pengemudi bersertifikat SIO.
- Timeline progres 4 tahap: Muat -> Timbang Digital -> Transit Tol -> Serah Terima BAST.

### 7. AI Bill of Quantities (BoQ) Estimator
- Upload dokumen Excel RAB / BoQ konstruksi (`.xlsx` / `.csv`).
- Pemindaian struktur sel cerdas dan pemetaan otomatis ke SKU katalog PT dengan diskon kemitraan.
- Tombol satu klik: *"Import Semua Material ke Keranjang Belanja"*.

---

## 🚀 Menjalankan Project

```bash
# Pindah ke direktori nextapp
cd nextapp

# Jalankan development server
node .\node_modules\next\dist\bin\next dev --webpack -p 3000
```

Buka peramban di: **`http://localhost:3000`**
