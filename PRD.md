# Product Requirements Document (PRD)
## PT IHSAN ABDUL PATAH (PT. IAP) — Digital Commerce & Procurement Portal

---

### 1. Ringkasan Eksekutif (Executive Summary)
**PT IHSAN ABDUL PATAH (PT. IAP)** adalah perusahaan perdagangan umum dan penyedia jasa terpercaya yang berpusat di Lembang, Kabupaten Bandung Barat. Portal web ini dibangun sebagai platform B2B dan B2C terpadu untuk memudahkan kontraktor, mandor, pengembang perumahan, toko bangunan, dan konsumen retail dalam:
1. Memeriksa katalog harga material bangunan real-time yang transparan.
2. Mendapatkan diskon volume (*"Pemesanan banyak harga langsung dikurangi"*).
3. Melakukan pemesanan langsung melalui WhatsApp Sales Hotline.
4. Menerbitkan Proforma Invoice resmi berkop PT IHSAN ABDUL PATAH secara instan.
5. Memperkirakan tonase muatan dan estimasi biaya pengiriman armada dump truck langsung dari Depo Lembang.
6. Menghubungi tim teknis untuk jasa khusus seperti Pengeboran Sumur Dalam (*Deep Well Drilling*).

---

### 2. Identitas Perusahaan & Branding
* **Nama Resmi**: PT IHSAN ABDUL PATAH
* **Nama Singkat**: PT. IAP
* **Slogan Resmi**: *"Perusahaan Perdagangan Umum dan Jasa dengan Harga Murah, Mudah, dan Kualitas Terpercaya"*
* **Alamat Kantor & Depo**:
  Jl. Lulurung II, Kp. Cijengkol RT/RW 001/006, Desa Wangunsari, Kecamatan Lembang, Kabupaten Bandung Barat, Jawa Barat 40391.
* **Hotline WhatsApp**:
  - Primary Sales: `0852 6545 8819` (`6285265458819`)
  - Customer Service & Ops: `0852 2257 9391` (`6285222579391`)
* **9 Bidang Usaha Perusahaan**:
  1. Material Bangunan (Besi, Semen, Pasir, Baja Ringan, Bata, Granit, Atap)
  2. Pengeboran Sumur (Deep Well Drilling & Geolistrik)
  3. Alat Tulis & Gambar
  4. Jasa Boga (Catering)
  5. Sayuran & Buah-buahan
  6. Pupuk & Agro Kimia
  7. Pakaian
  8. Alat Lab & Farmasi
  9. Obat-obatan

---

### 3. Visi & Misi Perusahaan (Company Profile Integration)
#### Visi:
> *"Menjadi perusahaan perdagangan dan jasa terdepan di dunia, yang selalu memberikan nilai tambah bagi pelanggan dan memberikan dampak positif bagi masyarakat dan lingkungan."*

#### 6 Pilar Misi:
1. **Kualitas Unggul**: Memberikan produk dan layanan berkualitas tinggi yang memenuhi kebutuhan pelanggan dan memberikan pengalaman belanja yang menyenangkan.
2. **Katalog Lengkap & Inovatif**: Menawarkan pilihan produk yang lengkap dan inovatif, serta menyediakan layanan pelanggan yang ramah dan responsif.
3. **Kemitraan Jangka Panjang**: Mengembangkan kemitraan jangka panjang dengan produsen, pemasok, dan pelanggan untuk membangun jaringan yang kuat dan saling menguntungkan.
4. **Etika Bisnis & Keberlanjutan**: Mempertahankan standar etika bisnis yang tinggi dan menjaga keberlanjutan lingkungan melalui praktik bisnis yang bertanggung jawab.
5. **Teknologi & Efisiensi**: Menggunakan teknologi terkini untuk meningkatkan efisiensi operasional dan memberikan layanan yang lebih baik untuk pelanggan.
6. **Pelopor Inovasi Bisnis**: Menjadi pelopor dalam mengembangkan solusi bisnis baru dan terus berinovasi untuk memenuhi kebutuhan pelanggan dan pasar yang terus berubah.

---

### 4. Target Pengguna (User Personas)
1. **Kontraktor & Pengembang Proyek (B2B Bulk Buyer)**:
   - Membutuhkan besi full SNI, semen sak/ton, pasir truk, dan baja ringan dalam jumlah besar.
   - Membutuhkan dokumen legal: Proforma Invoice, Faktur Pajak PPN, dan kepastian jadwal armada dump truck.
   - Sensitif terhadap harga borongan (*tier pricing* & negosiasi volume).
2. **Mandor & Tukang Bangunan (Medium Pro Buyer)**:
   - Membutuhkan kepastian stok cepat, pemesanan praktis via WhatsApp tanpa registrasi yang rumit.
   - Sering mengecek harga harian besi, pasir, bata, dan semen.
3. **Pemilik Rumah / Renovasi Mandiri (Retail B2C)**:
   - Membeli material finishing (granit 60x60, torn air Excel, cat, kusen, genteng).
   - Membutuhkan simulasi ongkir transparan dan konsultasi kebutuhan material.
4. **Instansi & Komersial**:
   - Membutuhkan jasa pengeboran sumur artesis dan pengadaan umum multi-sektor.

---

### 5. Arsitektur Fitur & Kebutuhan Fungsional

#### 5.1. Hero Section & Call-to-Action (CTA)
- Headline copywriting yang menonjolkan harga murah, stok lengkap, dan legalitas PT resmi.
- Badge keunggulan: *"Pemesanan Banyak Harga Langsung Dikurangi"*, *"Faktur Resmi & Legalitas PT"*, *"Armada Sendiri Depo Lembang"*.
- Tombol CTA Primer: *"Konsultasi Proyek & Nego Harga"* (Langsung membuka WhatsApp dengan template pesan cerdas).
- Tombol CTA Sekunder: *"Buka Katalog Produk"* (Smooth scroll ke katalog interaktif).
- Tombol Profil: *"Visi & Profil PT. IAP"* (Membuka modal Visi & Misi 6 Pilar).

#### 5.2. Katalog Produk Interaktif & Dual-Tier Pricing
- **Kategori Tab Filter**:
  - `Semua Produk`
  - `Besi Beton & Baja` (Besi full SNI 8'-12', semi SNI, besi 6mm, kawat wiremesh M6-M10, bondeck, spandeck)
  - `Semen & Mortar` (Holcim/Dynamix, Tiga Roda, Gresik, Padang, Rajawali, Mortar Thinbed/Plester/Acian)
  - `Pasir & Batu` (Pasir Pasang truk, Split, Pasir Beton, Batu Belah, Beskos)
  - `Atap & Dinding` (Baja Ringan C75, Spandeck, Bata Merah Rp 690, Hebel Platinum/SSI/LCON)
  - `Finishing & Keramik` (Granit Valentino Gress 60x60, Torn Excel 1300, Kusen & Daun Pintu/Jendela)
  - `Layanan & Pengeboran` (Jasa Pengeboran Sumur Dalam / Deep Well)
- **Komponen Kartu Produk (`ProductCard`)**:
  - Gambar produk berkualitas tinggi.
  - Tag spesifikasi (misal: *Toleransi SNI 0.2mm, Panjang 12m, Bak Kayu 6-7 m³*).
  - Tampilan dua tier harga: **Harga Eceran** vs **Harga Borongan/Grosir**.
  - Stepper penambah kuantiti (+/-).
  - Tombol aksi ganda: *"Tambah ke Keranjang"* & *"Pesan via WA"* (Direct WhatsApp checkout per item).

#### 5.3. Smart Cart Drawer & Kalkulator Total
- Drawer slide-over yang dapat dibuka kapan saja melalui floating cart button atau navbar.
- Menampilkan daftar item, kontrol jumlah, subtotal, dan indikator penghematan borongan.
- Tombol konversi:
  - *"Kirim Pesanan ke WhatsApp"* (Format pesan otomatis terstruktur dengan rincian item, alamat, dan total).
  - *"Cetak Proforma Invoice Resmi"* (Membuka modal invoice).

#### 5.4. Generator Proforma Invoice Resmi PT. IAP
- Tampilan resmi berkop surat PT IHSAN ABDUL PATAH.
- Nomor invoice unik otomatis (`INV/IAP/{TAHUN}{BULAN}/{RANDOM}`).
- Identitas pemesan, tanggal jatuh tempo, rincian produk, subtotal, PPN (opsional), dan total.
- Kode QR verifikasi dan stempel digital PT IHSAN ABDUL PATAH.
- Tombol *"Cetak / Simpan PDF"* dan *"Kirim Invoice via WhatsApp Admin"*.

#### 5.5. Kalkulator Estimasi Pengiriman & Tonase Muatan
- Pilihan armada pengiriman:
  - *Pick Up / Engkel (1.5 - 2.5 Ton)*
  - *Colt Diesel Double / Dump Truck (8 - 10 Ton)*
  - *Tronton / Fuso (20 - 30 Ton)*
- Pilihan rute: Lembang & Sekitarnya, Kota Bandung, Cimahi & KBB, Soreang & Bandung Selatan, Padalarang, hingga Wilayah Jawa Barat.
- Kalkulasi otomatis estimasi waktu tiba (ETA) dan ongkos kirim.

#### 5.6. Live Radar GPS Armada Depo Lembang
- Visualisasi status armada truk pengiriman dan rig pengeboran secara real-time.
- Menunjukkan status unit (Tersedia di Depo, Sedang Memuat Semen, Sedang Mengantar Besi ke Proyek, Rig Bor Aktif).

#### 5.7. AI BoQ (Bill of Quantities) Estimator
- Fitur bagi kontraktor untuk mengunggah atau menempelkan daftar kebutuhan proyek (RAB / BoQ).
- Algoritma pemetaan otomatis ke katalog produk PT. IAP beserta perhitungan diskon volume borongan.

#### 5.8. Floating Action Button (FAB) WhatsApp
- Tombol WhatsApp melayang di sudut kanan bawah dengan indikator status hijau menyala (*Online*).
- Responsif di mobile dan desktop tanpa menghalangi konten utama.

---

### 6. Arsitektur Data (Data Models)

```typescript
export interface Product {
  id: string;
  name: string;
  category: 'besi' | 'semen' | 'pasir' | 'atap' | 'finishing' | 'jasa';
  price: number;              // Harga eceran (Rp)
  bulkPrice?: number;         // Harga borongan/grosir (Rp)
  minBulkQty?: number;        // Minimal kuantiti untuk diskon
  unit: string;               // zak, batang/lenteu, m3, truk, m2, pcs, paket
  specs?: string;             // Spesifikasi teknis
  image: string;              // URL gambar
  inStock: boolean;           // Ketersediaan stok
  badge?: string;             // Label promo/unggulan
}

export interface CartItem {
  product: Product;
  quantity: number;
}
```

---

### 7. Kebutuhan Non-Fungsional (NFR)
1. **Kecepatan & Responsivitas**: Loading pertama di bawah 1.5 detik, 100% responsif di smartphone, tablet, dan desktop.
2. **SEO Friendly**: Metadata lengkap, OpenGraph, Structured Data untuk pencarian kata kunci *“jual besi lembang”, “supplier semen bandung barat”, “pengeboran sumur lembang”*.
3. **Privasi & Keamanan**: File `.env.local` tidak di-commit, form data tidak disimpan ke pihak ketiga tanpa izin, sanitasi input pada pencarian dan invoice.
4. **Ketersediaan Offline-Ready**: Fallback styling tetap utuh meski koneksi internet lambat.
