import { Product, LogisticsHub, CartItem, CartTotals, ShippingMethod } from '@/types';

export const COMPANY_INFO = {
  name: 'PT IHSAN ABDUL PATAH',
  shortName: 'PT. IAP',
  tagline: 'Perusahaan Perdagangan Umum dan Jasa dengan Harga Murah, Mudah, dan Kualitas Terpercaya',
  address: 'Jl. Lulurung II, Kp. Cijengkol RT/RW 001/006, Desa Wangunsari, Kecamatan Lembang, Kabupaten Bandung Barat, Jawa Barat 40391',
  phone1: '0852 6545 8819',
  phone2: '0852 2257 9391',
  whatsapp1: 'https://wa.me/6285265458819?text=Halo%20PT%20IAP%2C%20saya%20ingin%20konsultasi%20pengadaan%20material%20bangunan%20dan%20jasa',
  whatsapp2: 'https://wa.me/6285222579391?text=Halo%20PT%20IAP%2C%20saya%20ingin%20minta%20penawaran%20harga%20proyek',
  visi: 'Menjadi perusahaan perdagangan dan jasa terdepan di dunia, yang selalu memberikan nilai tambah bagi pelanggan dan memberikan dampak positif bagi masyarakat dan lingkungan.',
  misi: [
    'Memberikan produk dan layanan berkualitas tinggi yang memenuhi kebutuhan pelanggan dan memberikan pengalaman belanja yang menyenangkan.',
    'Menawarkan pilihan produk yang lengkap dan inovatif, serta menyediakan layanan pelanggan yang ramah dan responsif.',
    'Mengembangkan kemitraan jangka panjang dengan produsen, pemasok, dan pelanggan untuk membangun jaringan yang kuat dan saling menguntungkan.',
    'Mempertahankan standar etika bisnis yang tinggi dan menjaga keberlanjutan lingkungan melalui praktik bisnis yang bertanggung jawab.',
    'Menggunakan teknologi terkini untuk meningkatkan efisiensi operasional dan memberikan layanan yang lebih baik untuk pelanggan.',
    'Menjadi pelopor dalam mengembangkan solusi bisnis baru dan terus berinovasi untuk memenuhi kebutuhan pelanggan dan pasar yang terus berubah.'
  ]
};

export const CATALOG_PRODUCTS: Product[] = [
  // --- KATEGORI BESI BETON ---
  {
    id: 'besi-full-sni-10',
    name: 'Besi Beton Full SNI 10mm (10\')',
    subname: 'BjTS / BjTP Full Toleransi SNI Resmi',
    category: 'besi',
    unit: 'Lenteu (Batang)',
    priceRetail: 76750,
    priceB2B: 72000,
    moqB2B: 50,
    b2bLabel: 'Pesan Banyak Diskon (Min 50 Btg)',
    badge: 'Katalog Resmi PT IAP • Ready Lembang',
    cert: 'Full SNI Terakreditasi',
    icon: 'Layers',
    image: '/images/cement_depot.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    description: 'Toleransi presisi untuk struktur kolom & balok utama. Jaminan lolos uji SNI.'
  },
  {
    id: 'besi-full-sni-12',
    name: 'Besi Beton Full SNI 12mm (12\')',
    subname: 'Toleransi Presisi Standar Konstruksi',
    category: 'besi',
    unit: 'Lenteu (Batang)',
    priceRetail: 109850,
    priceB2B: 103000,
    moqB2B: 30,
    b2bLabel: 'Grosir Borongan (Min 30 Btg)',
    badge: 'Best Seller Struktur',
    cert: 'SNI 07-2052-2017',
    icon: 'Layers',
    image: '/images/cement_depot.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    description: 'Tulangan utama konstruksi gedung bertingkat, ruko, dan cor beton berat.'
  },
  {
    id: 'besi-full-sni-8',
    name: 'Besi Beton Full SNI 8mm (8\')',
    subname: 'Baja Tulangan Praktis & Sengkang Cor',
    category: 'besi',
    unit: 'Lenteu (Batang)',
    priceRetail: 49800,
    priceB2B: 46500,
    moqB2B: 50,
    b2bLabel: 'Pesan Banyak Harga Turun',
    badge: 'Stok Melimpah',
    cert: 'SNI Certified',
    icon: 'Layers',
    image: '/images/cement_depot.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    description: 'Ideal untuk begel/sengkang tiang dan tulangan dinding praktis.'
  },
  {
    id: 'besi-6mm-std',
    name: 'Besi Beton 6mm (6 std)',
    subname: 'Besi Kawat Begel Kolom Praktis',
    category: 'besi',
    unit: 'Lenteu (Batang)',
    priceRetail: 29500,
    priceB2B: 27500,
    moqB2B: 50,
    b2bLabel: 'Harga Khusus Partai Besar',
    badge: 'Ekonomis & Kuat',
    cert: 'Standar Industri',
    icon: 'Layers',
    image: '/images/cement_depot.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    description: 'Solusi hemat dan kuat untuk cincin sengkang balok praktis.'
  },
  {
    id: 'besi-semi-sni-10',
    name: 'Besi Semi SNI 10tj',
    subname: 'Opsi Hemat Proyek Rumah & Ruko',
    category: 'besi',
    unit: 'Lenteu (Batang)',
    priceRetail: 66250,
    priceB2B: 62000,
    moqB2B: 50,
    b2bLabel: 'Diskon Volume Kontraktor',
    badge: 'Hemat Biaya Proyek',
    cert: 'Uji Tarik Lolos',
    icon: 'Layers',
    image: '/images/cement_depot.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    description: 'Opsi hemat biaya untuk struktur rumah tinggal 1 lantai.'
  },

  // --- KATEGORI SEMEN & MORTAR ---
  {
    id: 'semen-padang-50kg',
    name: 'Semen Padang 50kg',
    subname: 'Portland Cement Type 1 SNI',
    category: 'semen',
    unit: 'Zak (50kg)',
    priceRetail: 69000,
    priceB2B: 65000,
    moqB2B: 40,
    b2bLabel: 'Min. 40 Zak (1 DO Murah)',
    badge: 'Paling Diminati • Stok Siap',
    cert: 'SNI 2049:2015',
    icon: 'Package',
    image: '/images/cement_depot.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80',
    description: 'Semen Tipe I standar SNI. Daya rekat kuat untuk cor dan plesteran.'
  },
  {
    id: 'semen-tiga-roda-50kg',
    name: 'Semen Tiga Roda 50kg',
    subname: 'Portland Composite Cement (PCC)',
    category: 'semen',
    unit: 'Zak (50kg)',
    priceRetail: 73500,
    priceB2B: 69500,
    moqB2B: 40,
    b2bLabel: 'Harga Borongan Toko/Proyek',
    badge: 'Mutu Prima Nasional',
    cert: 'SNI Certified',
    icon: 'Package',
    image: '/images/cement_depot.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80',
    description: 'Kuat tekan tinggi, hasil acian lebih halus dan tahan cuaca ekstrem.'
  },
  {
    id: 'semen-holcim-dynamix-50kg',
    name: 'Semen Dynamix (Holcim) 50kg',
    subname: 'Semen Serbaguna Formulasi Mikro',
    category: 'semen',
    unit: 'Zak (50kg)',
    priceRetail: 73500,
    priceB2B: 69500,
    moqB2B: 40,
    b2bLabel: 'Diskon Kirim Se-Bandung',
    badge: 'Teknologi Cepat Kering',
    cert: 'SNI Certified',
    icon: 'Package',
    image: '/images/cement_depot.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80',
    description: 'Formulasi butir mikro, cepat kering dan mencegah retak rambut.'
  },
  {
    id: 'semen-gresik-50kg',
    name: 'Semen Gresik 50kg',
    subname: 'Kualitas Kokoh & Kuat Tekan',
    category: 'semen',
    unit: 'Zak (50kg)',
    priceRetail: 70000,
    priceB2B: 66000,
    moqB2B: 40,
    b2bLabel: 'Pesan Banyak Harga Dikurangi',
    badge: 'Favorit Tukang & Kontraktor',
    cert: 'SNI Certified',
    icon: 'Package',
    image: '/images/cement_depot.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80',
    description: 'Semen serbaguna favorit kontraktor untuk cor dak dan pasangan bata.'
  },
  {
    id: 'semen-rajawali-50kg',
    name: 'Semen Rajawali 50kg',
    subname: 'Pilihan Paling Ekonomis & Efisien',
    category: 'semen',
    unit: 'Zak (50kg)',
    priceRetail: 58500,
    priceB2B: 54500,
    moqB2B: 40,
    b2bLabel: 'Harga Paling Terjangkau',
    badge: 'Harga Murah Berkualitas',
    cert: 'SNI Resmi',
    icon: 'Package',
    image: '/images/cement_depot.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80',
    description: 'Pilihan paling ekonomis dengan daya rekat tetap terjamin.'
  },
  {
    id: 'mortar-thinbed-40kg',
    name: 'Karya Mortar Thinbed 40kg',
    subname: 'Semen Instan Perekat Bata Ringan / Hebel',
    category: 'semen',
    unit: 'Sak (40kg)',
    priceRetail: 50000,
    priceB2B: 46000,
    moqB2B: 30,
    b2bLabel: 'Min. 30 Sak (Termurah)',
    badge: 'Aplikasi Tipis 3mm',
    cert: 'Standar Industri',
    icon: 'Package',
    image: '/images/cement_depot.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80',
    description: 'Perekat instan bata ringan/hebel. Cukup tebal 3mm, hemat & cepat.'
  },

  // --- KATEGORI PASIR & AGREGAT (PER TRUK BAK KAYU) ---
  {
    id: 'pasir-pasang-truk',
    name: 'Pasir Pasang Super (1 Truk Bak Kayu)',
    subname: 'Agregat Pasang Dinding & Plesteran',
    category: 'pasir',
    unit: 'Truk Bak Kayu',
    priceRetail: 1550000,
    priceB2B: 1450000,
    moqB2B: 2,
    b2bLabel: 'Pesan Banyak Harga Spesial',
    badge: 'Armada Dump Truck Siap',
    cert: 'Kadar Lumpur < 3%',
    icon: 'Truck',
    image: '/images/sand_delivery.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80',
    description: 'Muatan 1 truk penuh. Butir halus, bersih, lumpur <3%, plesteran kuat.'
  },
  {
    id: 'pasir-beton-truk',
    name: 'Pasir Beton Kasar (1 Truk Bak Kayu)',
    subname: 'Agregat Cor Beton Kuat Tekan',
    category: 'pasir',
    unit: 'Truk Bak Kayu',
    priceRetail: 1600000,
    priceB2B: 1500000,
    moqB2B: 2,
    b2bLabel: 'Diskon Proyek Pondasi',
    badge: 'Mutu Cor K-300 Siap',
    cert: 'Gradasi Butir Kasar',
    icon: 'Truck',
    image: '/images/sand_delivery.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80',
    description: 'Butir kasar & tajam. Khusus campuran cor beton mutu tinggi (K-300).'
  },
  {
    id: 'split-cor-truk',
    name: 'Batu Split Cor (1 Truk Bak Kayu)',
    subname: 'Batu Pecah Mesin Ukuran 1x2 / 2x3',
    category: 'pasir',
    unit: 'Truk Bak Kayu',
    priceRetail: 1600000,
    priceB2B: 1500000,
    moqB2B: 2,
    b2bLabel: 'Harga Borongan Volume',
    badge: 'Batu Hitam Keras',
    cert: 'Crusher Machine',
    icon: 'Truck',
    image: '/images/sand_delivery.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80',
    description: 'Batu pecah mesin 1x2/2x3 bebas abu. Hasil cor padat anti keropos.'
  },
  {
    id: 'batu-belah-truk',
    name: 'Batu Belah Pondasi (1 Truk Bak Kayu)',
    subname: 'Batu Belah Gunung Kali Pondasi',
    category: 'pasir',
    unit: 'Truk Bak Kayu',
    priceRetail: 1450000,
    priceB2B: 1350000,
    moqB2B: 2,
    b2bLabel: 'Langsung Kirim ke Lokasi',
    badge: 'Pondasi Rumah Kokoh',
    cert: 'Batu Keras Alam',
    icon: 'Truck',
    image: '/images/sand_delivery.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80',
    description: 'Batu gunung/kali padat untuk pondasi tapak dan dinding penahan tanah.'
  },

  // --- KATEGORI BAJA RINGAN, WIREMESH & ATAP ---
  {
    id: 'baja-ringan-c75-075e',
    name: 'Baja Ringan C75 x 0.75 (E)',
    subname: 'Truss Rangka Atap Baja Ringan SNI',
    category: 'atap',
    unit: 'Batang (6m)',
    priceRetail: 80000,
    priceB2B: 75000,
    moqB2B: 50,
    b2bLabel: 'Pemesanan Banyak Diskon Khusus',
    badge: 'Anti Karat Zincalume',
    cert: 'SNI 8399:2017',
    icon: 'Grid',
    image: '/images/cement_depot.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    description: 'Kanal C galvalum 0.75mm anti karat. Kokoh untuk rangka atap genteng.'
  },
  {
    id: 'wiremesh-m8-lembar',
    name: 'Besi Wiremesh M8 SNI',
    subname: 'Jaring Baja Las Ulir 2.1 x 5.4 Meter',
    category: 'atap',
    unit: 'Lembar',
    priceRetail: 575500,
    priceB2B: 540000,
    moqB2B: 10,
    b2bLabel: 'Min. 10 Lembar (Diskon Proyek)',
    badge: 'Tegangan Tarik Tinggi',
    cert: 'SNI 07-0663-1995',
    icon: 'Grid',
    image: '/images/cement_depot.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    description: 'Jaring baja las otomatis untuk cor pelat lantai, dak, dan jalan beton.'
  },
  {
    id: 'wiremesh-m6-lembar',
    name: 'Besi Wiremesh M6 SNI',
    subname: 'Jaring Baja Las Ulir 2.1 x 5.4 Meter',
    category: 'atap',
    unit: 'Lembar',
    priceRetail: 299000,
    priceB2B: 280000,
    moqB2B: 10,
    b2bLabel: 'Pesan Banyak Harga Dikurangi',
    badge: 'Praktis & Cepat',
    cert: 'SNI Resmi',
    icon: 'Grid',
    image: '/images/cement_depot.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    description: 'Jaring baja las otomatis untuk cor pelat lantai, dak, dan jalan beton.'
  },
  {
    id: 'bondeck-070',
    name: 'Bondeck Cor 0.70mm x 1m x 6m',
    subname: 'Plat Lantai Baja Pengganti Bekisting',
    category: 'atap',
    unit: 'Meter',
    priceRetail: 110450,
    priceB2B: 105000,
    moqB2B: 30,
    b2bLabel: 'Ukuran Lain +1000/m',
    badge: 'Hemat Waktu & Perancah',
    cert: 'Baja Galvanis Mutu Tinggi',
    icon: 'Grid',
    image: '/images/cement_depot.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    description: 'Plat baja pengganti bekisting triplek. Cor lebih hemat dan cepat.'
  },
  {
    id: 'spandeck-zincalume',
    name: 'Spandeck Zincalume 0.35 x 1m x 6m',
    subname: 'Atap Gelombang Tahan Karat & Bocor',
    category: 'atap',
    unit: 'Meter',
    priceRetail: 50500,
    priceB2B: 47500,
    moqB2B: 30,
    b2bLabel: 'Diskon Borongan Kanopi/Pabrik',
    badge: 'Tahan Cuaca Panas & Hujan',
    cert: 'Zincalume Coating',
    icon: 'Grid',
    image: '/images/cement_depot.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    description: 'Atap gelombang anti karat untuk gudang, pabrik, dan kanopi.'
  },

  // --- KATEGORI BATA, HEBEL, GRANIT & FINISHING ---
  {
    id: 'bata-merah-leles',
    name: 'Bata Merah Bakar Berkualitas',
    subname: 'Bata Tanah Liat Matang Pembakaran Kayu',
    category: 'finishing',
    unit: 'Pcs',
    priceRetail: 690,
    priceB2B: 650,
    moqB2B: 7000,
    b2bLabel: 'Minimal 7.000 Pcs (1 Truk)',
    badge: 'Pembakaran Matang Merata',
    cert: 'Alami Tradisional Kuat',
    icon: 'Boxes',
    image: '/images/sand_delivery.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80',
    description: 'Pembakaran kayu matang merata. Padat, presisi, dan tidak mudah patah.'
  },
  {
    id: 'hebel-platinum',
    name: 'Bata Ringan Hebel Platinum Super',
    subname: 'AAC Block Presisi Tinggi & Kedap Suara',
    category: 'finishing',
    unit: 'm³ (Kubik)',
    priceRetail: 540000,
    priceB2B: 510000,
    moqB2B: 11,
    b2bLabel: 'Min. 10.8 Kubik (1 DO Truk)',
    badge: 'Paling Ringan & Cepat',
    cert: 'Standar SNI AAC',
    icon: 'Boxes',
    image: '/images/cement_depot.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80',
    description: 'Bata ringan AAC presisi. Pemasangan dinding 3x lebih cepat & kedap suara.'
  },
  {
    id: 'granit-valentino-blanco',
    name: 'Granit Tile Valentino Gress 60x60 Blanco',
    subname: 'Blanco Ivory (Cream Polos Mengkilap)',
    category: 'finishing',
    unit: 'm² (Dus 1.44m²)',
    priceRetail: 100000,
    priceB2B: 94000,
    moqB2B: 20,
    b2bLabel: 'Pesan Banyak Harga Dikurangi',
    badge: 'Nano Polished Mewah',
    cert: 'Export Quality ISO',
    icon: 'Boxes',
    image: '/images/cement_depot.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80',
    description: 'Granit cream polos nano-polished. Mengkilap mewah dan tahan noda.'
  },
  {
    id: 'torn-excel-1300',
    name: 'Torn Air Excel 1300 Liter',
    subname: 'Tangki Air Anti Lumut & Tahan Sinar UV',
    category: 'finishing',
    unit: 'Unit',
    priceRetail: 1710000,
    priceB2B: 1620000,
    moqB2B: 1,
    b2bLabel: 'Harga Distributor Resmi',
    badge: 'Garansi Resmi Pabrik',
    cert: 'Food Grade FDA',
    icon: 'Package',
    image: '/images/cement_depot.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80',
    description: 'Tangki air 3 lapis anti lumut & tahan UV. Bergaransi resmi pabrik.'
  },
  {
    id: 'kusen-pintu-kayu',
    name: 'Kusen Pintu Kayu Berkualitas',
    subname: 'Kayu Kering Oven Presisi',
    category: 'finishing',
    unit: 'Unit',
    priceRetail: 250000,
    priceB2B: 235000,
    moqB2B: 5,
    b2bLabel: 'Harga Borongan Kusen',
    badge: 'Kayu Kuat Anti Rayap',
    cert: 'Pengrajin Terampil',
    icon: 'Boxes',
    image: '/images/cement_depot.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80',
    description: 'Kayu oven kering anti rayap. Siku presisi, rapi, siap pasang.'
  },

  // --- KATEGORI JASA & PERDAGANGAN UMUM (DARI COMPANY PROFILE PT IAP) ---
  {
    id: 'jasa-pengeboran-sumur',
    name: 'Jasa Pengeboran Sumur Air Bersih',
    subname: 'Pengeboran Sumur Jetpump & Submersible (Artesis)',
    category: 'jasa',
    unit: 'Titik Pekerjaan',
    priceRetail: 3500000,
    priceB2B: 3200000,
    moqB2B: 1,
    b2bLabel: 'Konsultasi & Survei Gratis',
    badge: 'Layanan Unggulan PT IAP',
    cert: 'Teknisi Berpengalaman',
    icon: 'Wrench',
    image: '/images/readymix_truck.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=600&q=80',
    description: 'Bor sumur dalam (30-100m) mesin hidrolik. Garansi air jernih & melimpah.',
    isService: true
  },
  {
    id: 'jasa-boga-catering',
    name: 'Jasa Boga & Catering Karyawan / Event',
    subname: 'Penyediaan Nasi Box & Prasmanan Proyek/Kantor',
    category: 'jasa',
    unit: 'Porsi (Box)',
    priceRetail: 25000,
    priceB2B: 22000,
    moqB2B: 50,
    b2bLabel: 'Kontrak Rutin Harian/Bulanan',
    badge: 'Higienis & Halal Resmi',
    cert: 'Dinkes & Halal LPPOM',
    icon: 'Package',
    image: '/images/sand_delivery.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=600&q=80',
    description: 'Nasi box & prasmanan harian untuk pekerja proyek/kantor. Halal & higienis.',
    isService: true
  },
  {
    id: 'pupuk-agro-kimia',
    name: 'Pupuk & Agro Kimia Pertanian Lembang',
    subname: 'Pupuk Organik & Kimia Nutrisi Tanaman',
    category: 'jasa',
    unit: 'Karung (50kg)',
    priceRetail: 180000,
    priceB2B: 165000,
    moqB2B: 20,
    b2bLabel: 'Pemasok Kelompok Tani',
    badge: 'Asli & Terdaftar Kementan',
    cert: 'Izin Edar Resmi',
    icon: 'Boxes',
    image: '/images/sand_delivery.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80',
    description: 'Pupuk resmi Kementan untuk hasil panen sayur & tani maksimal.',
    isService: true
  }
];

export const LOGISTICS_HUBS: Record<string, LogisticsHub> = {
  lembang: {
    id: 'lembang',
    label: 'Kecamatan Lembang & Desa Wangunsari (Depo Pusat Jl. Lulurung II)',
    distanceKm: 2.5,
    hubName: 'Depo Pusat PT. IAP Lembang',
    kargoRate: 150000,
    kargoEta: 'Est. 1-2 Jam Sampai',
    armadaRate: 80000,
    armadaEta: 'Est. Hari Ini, Siap Bongkar'
  },
  bandung: {
    id: 'bandung',
    label: 'Kota Bandung & Cimahi (Setiabudi, Dago, Sukajadi, Pasteur)',
    distanceKm: 12.0,
    hubName: 'Depo Pusat PT. IAP Lembang',
    kargoRate: 250000,
    kargoEta: 'Est. Hari Ini Siang',
    armadaRate: 150000,
    armadaEta: 'Est. Hari Ini, 13:00 WIB'
  },
  padalarang: {
    id: 'padalarang',
    label: 'Padalarang & Batujajar (Kawasan Industri Bandung Barat)',
    distanceKm: 18.5,
    hubName: 'Depo Pusat PT. IAP Lembang',
    kargoRate: 350000,
    kargoEta: 'Est. 1 Hari Kerja',
    armadaRate: 200000,
    armadaEta: 'Est. Hari Ini, 15:00 WIB'
  },
  soreang: {
    id: 'soreang',
    label: 'Soreang & Banjaran (Kabupaten Bandung Selatan)',
    distanceKm: 28.0,
    hubName: 'Depo Pusat PT. IAP Lembang',
    kargoRate: 450000,
    kargoEta: 'Est. 1-2 Hari Kerja',
    armadaRate: 250000,
    armadaEta: 'Est. Hari Ini, 16:30 WIB'
  },
  jabar_nasional: {
    id: 'jabar_nasional',
    label: 'Wilayah Jawa Barat & Pengiriman Seluruh Indonesia',
    distanceKm: 65.0,
    hubName: 'Hub Distribusi Kargo Nasional PT. IAP',
    kargoRate: 750000,
    kargoEta: 'Est. 2-3 Hari Kerja',
    armadaRate: 500000,
    armadaEta: 'Est. Besok Pagi 09:00 WIB'
  }
};

export function calculateCartTotals(
  cart: CartItem[],
  isB2BMode: boolean,
  selectedLocation: string,
  shippingMethod: ShippingMethod
): CartTotals {
  const hub = LOGISTICS_HUBS[selectedLocation] || LOGISTICS_HUBS.lembang;
  let subtotal = 0;
  let retailEquivalentTotal = 0;
  let totalUnitsCount = 0;

  const itemsCalculated = cart.map(item => {
    const product = CATALOG_PRODUCTS.find(p => p.id === item.productId)!;
    const isB2BPrice = isB2BMode || item.qty >= product.moqB2B;
    const unitPrice = isB2BPrice ? product.priceB2B : product.priceRetail;
    const lineTotal = unitPrice * item.qty;

    subtotal += lineTotal;
    retailEquivalentTotal += product.priceRetail * item.qty;
    totalUnitsCount += item.qty;

    return {
      productId: item.productId,
      product,
      qty: item.qty,
      unitPrice,
      isB2BPrice,
      lineTotal
    };
  });

  const b2bPartnershipDiscount = Math.max(0, retailEquivalentTotal - subtotal);
  const taxableBase = subtotal;
  const ppn11 = Math.round(taxableBase * 0.11);
  const shippingRate = shippingMethod === 'armada' ? hub.armadaRate : hub.kargoRate;
  const shippingEta = shippingMethod === 'armada' ? hub.armadaEta : hub.kargoEta;
  const grandTotal = subtotal + ppn11 + shippingRate;

  return {
    uniqueProductsCount: cart.length,
    totalUnitsCount,
    subtotal,
    b2bPartnershipDiscount,
    taxableBase,
    ppn11,
    shippingRate,
    shippingEta,
    grandTotal,
    itemsCalculated
  };
}
