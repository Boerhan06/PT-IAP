# UI/UX & Design System Documentation
## PT IHSAN ABDUL PATAH (PT. IAP)

---

### 1. Filosofi Desain (Design Philosophy)
Desain web **PT IHSAN ABDUL PATAH** memadukan estetika **Modern Industrial Commerce** dengan pendekatan **High-Conversion B2B UI/UX**. Tiga pilar utama desain:
1. **Clarity & Legibility (Kejelasan & Kenyamanan Baca)**:
   - Kontras tinggi dan hierarki tipografi tegas agar mandor dan kontraktor dapat membaca spesifikasi besi dan semen di layar ponsel mereka di bawah terik matahari proyek.
2. **Effortless Exploration (Kemudahan Menjelajah)**:
   - Filter tab kategori yang cepat, drawer keranjang geser halus, pencarian fuzzy `Ctrl + K`, dan alur checkout WhatsApp dalam 2 klik.
3. **Persuasive Trust & Action (Ajakan Bertindak yang Kuat)**:
   - Call-to-Action (CTA) bertebaran secara harmonis dan tidak mengganggu, mengarahkan pengguna untuk berkonsultasi, bernegosiasi harga, dan meminta invoice resmi.

---

### 2. Palet Warna (Color System & Tokens)

Palet warna diturunkan secara presisi dari warna logo resmi PT IHSAN ABDUL PATAH (Hijau Korporat, Emas/Kuning Konstruksi, Merah Aksen, dan Hitam/Slate):

| Token Warna | Nilai HEX / CSS | Penggunaan Utama |
| :--- | :--- | :--- |
| **Primary Deep Forest** | `#032417` / `slate-950` | Header navbar, dark card sections, footer, teks judul kontras tinggi |
| **Brand Emerald Green** | `#0e6e42` / `#25b967` | Tombol CTA utama, badge terverifikasi, harga diskon, logo stem |
| **Accent Construction Gold** | `#f5a623` / `#eab308` | Badge diskon borongan, highlight penawaran, bintang rating, logo apex |
| **Alert / Action Red** | `#d92525` / `#ef4444` | Indikator stok terbatas, aksen loop huruf 'P' logo PT. IAP |
| **Surface White / Neutral 50** | `#ffffff` / `#f8fafc` | Background halaman, kartu produk, border bersih |
| **Border Neutral** | `#e2e8f0` / `border-slate-200` | Pemisah elemen, garis grid, outline kartu |
| **Text Muted** | `#64748b` / `text-slate-500` | Deskripsi spesifikasi, label satuan, subteks |

---

### 3. Tipografi (Typography Hierarchy)

* **Font Primer**: `Inter`, sans-serif (dimuat dari Google Fonts CDN untuk performa optimal di semua peramban).
* **Font Alternatif / Display**: `Outfit` / `Roboto`.

#### Skala Hirarki:
* **H1 / Hero Title**: `text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900`
  * Contoh: *"Distributor Material Bangunan & Layanan Umum Terpercaya di Lembang Bandung"*
* **H2 / Section Title**: `text-2xl md:text-3xl font-bold tracking-tight text-slate-900`
  * Contoh: *"Katalog Material Bangunan & Jasa Kami"*
* **H3 / Card Title**: `text-lg font-semibold text-slate-900`
  * Contoh: *"Besi Beton 10mm Full SNI"*
* **Price Emphasis**: `text-xl font-bold text-emerald-600 tracking-tight`
* **Body / Paragraph**: `text-base text-slate-600 leading-relaxed`
* **Caption & Badges**: `text-xs font-semibold tracking-wide uppercase`

---

### 4. Komponen Utama & Pola Interaksi (Component Guidelines)

#### 4.1. Monogram Logo Resmi (`IAPLogo.tsx`)
* Vektor SVG presisi dengan rasio proporsional.
* Menampilkan dua batang miring hijau (huruf 'A' dasar), puncak sudut emas, dan loop huruf 'P' merah pekat.
* Di sampingnya terdapat teks dua baris: `PT. IAP` (tebal, ukuran besar) dan `PT IHSAN ABDUL PATAH` (subjudul resmi).

#### 4.2. Tombol Call-to-Action (CTA)
1. **Primary Button (WhatsApp Order & Konsultasi)**:
   - Warna: Hijau Emerald (`bg-emerald-600 hover:bg-emerald-700 text-white`).
   - Ikon: Ikon pesan/WhatsApp (`MessageSquare` atau `PhoneCall`).
   - Efek: Hover elevasi bayangan halus `shadow-md hover:shadow-lg transition-all`.
2. **Secondary Button (Katalog & Invoice)**:
   - Warna: Putih bergaris tipis (`bg-white hover:bg-slate-50 text-slate-700 border border-slate-300`).
3. **Floating Action Button (WhatsApp Widget)**:
   - Posisi: Melayang di kanan bawah (`fixed bottom-6 right-6 z-50`).
   - Animasi: Ping dot hijau menyala (*online indicator*) untuk mengundang rasa aman dan responsivitas cepat.

#### 4.3. Kartu Produk (`ProductCard.tsx`)
* **Aspek Rasio Gambar**: 16:9 atau 4:3 dengan `object-cover` tajam.
* **Badge Diskon**: Label mengambang di atas gambar: *"Pemesanan Banyak Diskon Khusus"*.
* **Dual Price Display**:
  - Baris atas: Harga eceran satuan (misal `Rp 76.750 /batang`).
  - Baris bawah: Harga grosir/borongan dengan label diskon hijau terang.
* **Stepper Interaktif**: Tombol `-` dan `+` dengan angka jumlah yang jelas.
* **Dual Action Footer**: Tombol cepat *"Pesan via WA"* (langsung kirim format order satu item) dan *"Tambah ke Keranjang"*.

#### 4.4. Modal & Drawer
* **Cart Drawer**:
  - Animasi slide-over dari kanan.
  - Backdrop blur transparan (`backdrop-blur-sm bg-black/40`).
  - Rincian item dapat diedit langsung.
* **Company Profile Modal**:
  - Desain editorial elegan dengan tab Visi dan 6 Pilar Misi.
  - Mencantumkan identitas dan riwayat PT IHSAN ABDUL PATAH.
* **Official Invoice Modal**:
  - Tata letak menyerupai lembar A4 formal dengan logo, nomor invoice, tanggal jatuh tempo, QR code, tabel item, dan stempel digital.

---

### 5. Panduan Copywriting (Voice & Tone)

* **Karakter Bahasa**:
  - Formal, percaya diri, lugas, mengutamakan kejelasan harga dan spesifikasi teknis.
  - Berorientasi solusi untuk kontraktor (menghargai waktu, efisiensi anggaran, dan ketepatan pengiriman).
* **Frasa Wajib Sesuai Dokumen Resmi**:
  - *"Perusahaan Perdagangan Umum dan Jasa dengan Harga Murah, Mudah, dan Kualitas Terpercaya"*
  - *"Pemesanan banyak harga langsung dikurangi"*
  - *"Jual Besi Full SNI, Semen Resmi Pabrik, dan Pasir Truk Bak Kayu"*
  - *"Alamat Depo: Jl. Lulurung II, Wangunsari, Lembang, Bandung Barat"*
* **Format Pesan Otomatis WhatsApp**:
  ```text
  Halo Admin PT IHSAN ABDUL PATAH (PT. IAP),
  Saya ingin konsultasi / memesan material bangunan berikut:

  • [Nama Produk] - [Jumlah] [Satuan]
  Total Estimasi: Rp [Nominal]

  Mohon info ketersediaan stok, diskon borongan, dan jadwal armada pengiriman ke lokasi saya. Terima kasih!
  ```

---

### 6. Desain Responsif & Aksesibilitas (A11y)
* **Mobile-First Layout**: Seluruh tombol interaksi memiliki area sentuh minimal `48x48px` untuk kemudahan navigasi di smartphone mandor lapangan.
* **Kerapian Layar Lebar**: Grid katalog otomatis menyesuaikan:
  - Mobile: 1 kolom
  - Tablet: 2 kolom
  - Desktop: 3 hingga 4 kolom
* **Keyboard Navigation**: Tombol navigasi dan modal dapat ditutup dengan tombol `Escape` dan dicari dengan `Ctrl + K`.
