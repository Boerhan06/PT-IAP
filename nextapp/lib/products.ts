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
    description: 'Besi tulangan struktur beton mutu tinggi bersertifikasi SNI resmi untuk balok, kolom, dan pondasi bangunan kokoh.'
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
    description: 'Besi beton 12mm full SNI untuk tulangan utama gedung bertingkat, ruko, dan infrastruktur jembatan.'
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
    description: 'Besi beton 8mm untuk begel/sengkang tiang cor dan tulangan praktis dinding rumah tinggal.'
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
    description: 'Pilihan hemat dan kuat untuk cincin sengkang balok dan pekerjaan pengikat besi beton.'
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
    description: 'Kualitas teruji dengan harga kompetitif untuk optimalisasi anggaran pembangunan.'
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
    description: 'Semen tipe I berstandar SNI untuk struktur beton bertulang, jembatan, plesteran, dan acian presisi.'
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
    description: 'Kekuatan tekan tinggi, daya lekat kuat, permukaan lebih halus, dan tahan lama terhadap cuaca tropis.'
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
    description: 'Butiran mikro presisi yang merata, mencegah retak rambut pada plesteran dan cor lantai.'
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
    description: 'Semen serbaguna berkualitas tinggi untuk plesteran dinding, pasangan bata, dan cor dak beton.'
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
    description: 'Solusi hemat biaya proyek perumahan dan renovasi dengan mutu perekat yang tetap terjamin.'
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
    description: 'Daya rekat tinggi khusus bata ringan hebel, hemat waktu pemasangan dan minim sambungan retak.'
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
    description: 'Pasir pasang berbutir halus dan bersih, sangat mudah diaduk, daya rekat plester maksimal dan tidak mudah rontok.'
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
    description: 'Pasir beton bergradasi kasar dan tajam, sangat ideal untuk campuran cor dak, balok, dan kolom struktur kokoh.'
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
    description: 'Batu split pecah mesin berkualitas bebas abu batu berlebih, menghasilkan beton padat anti keropos.'
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
    description: 'Batu belah kali/gunung padat dan keras untuk konstruksi pondasi tapak, retaining wall, dan talud tebing.'
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
    description: 'Kanal C baja ringan galvalum tebal 0.75mm presisi tinggi tahan karat, kuat menahan beban genteng beton/keramik.'
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
    description: 'Wiremesh M8 las otomatis untuk tulangan pelat lantai, dak beton, dan jalan paving tahan beban kendaraan berat.'
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
    description: 'Pilihan praktis untuk tulangan dak lantai dua rumah tinggal dan lantai kerja gudang.'
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
    description: 'Menggantikan triplek bekisting dak lantai, menghemat adukan cor semen dan mempercepat penyelesaian gedung.'
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
    description: 'Atap gelombang spandek modern untuk kanopi carport, atap gudang, pabrik, dan workshop.'
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
    description: 'Bata merah matang, ukuran presisi, tidak mudah pecah, membuat ruangan lebih adem dan kokoh puluhan tahun.'
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
    description: 'Bata ringan ukuran presisi standar pabrik, pengerjaan dinding lebih cepat 3x lipat dibanding bata konvensional.'
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
    description: 'Lantai granit mewah berdaya kilap tinggi nano polished, tahan gores dan noda untuk ruang tamu dan kamar tidur.'
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
    description: 'Tangki air kapasitas 1.300 liter dengan 3 lapisan perlindungan anti lumut, higienis untuk air bersih keluarga.'
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
    description: 'Kusen kayu rapi, siku presisi, siap pasang untuk pintu utama maupun kamar tidur.'
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
    description: 'Pengeboran sumur air tanah hingga kedalaman 30-100 meter menggunakan mesin modern, garansi sumber air melimpah dan jernih.',
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
    description: 'Layanan katering konsumsi harian tenaga kerja proyek konstruksi, kantor, dan pabrik dengan menu bergizi dan higienis.',
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
    description: 'Penyediaan pupuk berkualitas tinggi untuk perkebunan sayur Lembang dan pertanian tanaman pangan.',
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
