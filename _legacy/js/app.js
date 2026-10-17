/**
 * PT Mahakarya Konstruksi — Digital Procurement & Fleet Logistics Platform
 * Core Application Engine & Reactive State Store
 */

// --- 1. PRODUCT CATALOG DATA ---
const CATALOG_PRODUCTS = [
  {
    id: 'semen-padang',
    name: 'Semen Padang 50kg',
    subname: 'Portland Cement Type 1',
    category: 'semen',
    unit: 'Sak',
    priceRetail: 72000,
    priceB2B: 64500,
    moqB2B: 100,
    b2bLabel: 'Min. 100 Sak',
    badge: 'Ready Stock • Hub Cikarang',
    cert: 'SNI Certified',
    icon: 'inventory_2',
    image: 'assets/images/cement_depot.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80',
    description: 'Semen tipe I berstandar SNI untuk struktur beton bertulang, jembatan, dan mutu presisi tinggi.'
  },
  {
    id: 'besi-d16',
    name: 'Besi Beton Ulir D16 TS420B',
    subname: 'BjTS 420B Toleransi SNI 0.2',
    category: 'baja',
    unit: 'Batang (12m)',
    priceRetail: 148000,
    priceB2B: 132000,
    moqB2B: 50,
    b2bLabel: 'Min. 50 Batang',
    badge: 'Pabrik Langsung',
    cert: 'TKDN 84%',
    icon: 'reorder',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSfoxEYyowCxO0t9fShU32vvRlUDfAHoyu2VrwCZgMd7VTFQkFRWXmuGFZPWCY2-UcPgOVUztjaP5QE7TA3P1mRxduuHASE2ZIZ1k2wRHAOpqw1k5kYcO4qmKZDYbMkyRseRQArMtJI155KhJxXxZuWlk4FjlvUXMvo0Nqlr93TRTB4R3XHFbCXlQLR-OhJYykgmMXsO5IG8W4V_UKVCPdAVSW1kSFTVUwn-K727omA5d44T_bG53LcA',
    fallbackImg: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    description: 'Baja tulangan ulir presisi dengan sertifikat mill test report pabrik terakreditasi KAN.'
  },
  {
    id: 'pasir-pontianak',
    name: 'Pasir Pontianak Super Halus',
    subname: 'Agregat Halus Ayak Cuci',
    category: 'pasir',
    unit: 'Rit (7 m³)',
    priceRetail: 1850000,
    priceB2B: 1620000,
    moqB2B: 3,
    b2bLabel: 'Min. 3 Rit',
    badge: 'Kadar Lumpur < 2%',
    cert: 'Dump Truck Ready',
    icon: 'grain',
    image: 'assets/images/sand_delivery.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80',
    description: 'Pasir kuarsa sungai super halus, minim zat organik, daya rekat plester dan cor maksimal.'
  },
  {
    id: 'excavator-pc200',
    name: 'Excavator Komatsu PC200-8',
    subname: 'Armada Alat Berat Hidrolik',
    category: 'alat-berat',
    unit: 'Shift (8 Jam)',
    priceRetail: 2400000,
    priceB2B: 2050000,
    moqB2B: 7,
    b2bLabel: '> 7 Hari',
    badge: 'Depo Tangerang Siap',
    cert: 'Operator & Solar SIO',
    icon: 'precision_manufacturing',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBqx-Zhp-h2DVtVZ9xxAfivDYeOAy_Xsex_tmQIxbY2Rp43i0BWk3MjGTOM3GDU-lkn5LmLy9TAnuOfzysRXAbdQZJrQfA-XLH_x0HK2brLgYS1KnJQkZBlqV5YCWC0azqDd7QAJIW_pgfCCa00Cw4gvhtgv8ZHhjyhpo3sKei8Fo4wXsgTiFOP2_laEqMJtx5dffq5HnpaoTyGWih7zpCd4Kj7dwecMx4UYPS1DmZcuM7dXUGdEGtKQ',
    fallbackImg: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=600&q=80',
    description: 'Alat berat galian tanah & pondasi dengan operator berpengalaman sertifikat SIO Kemenaker RI.'
  },
  {
    id: 'ready-mix-k350',
    name: 'Ready Mix Beton K-350',
    subname: 'Slump 12±2 cm (NFA)',
    category: 'ready-mix',
    unit: 'm³ (Truk Mixer)',
    priceRetail: 890000,
    priceB2B: 820000,
    moqB2B: 5,
    b2bLabel: 'Min. 5 m³ (1 Mixer)',
    badge: 'Batching Plant Cikande',
    cert: 'Slump Test Sertifikat',
    icon: 'local_shipping',
    image: 'assets/images/readymix_truck.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=600&q=80',
    description: 'Beton siap pakai mutu K-350 struktur pelat lantai, kolom, dan balok proyek gedung bertingkat.'
  },
  {
    id: 'wiremesh-m8',
    name: 'Besi Wiremesh M8 Roll SNI',
    subname: 'Jaring Baja Las Ulir 2.1 x 54m',
    category: 'baja',
    unit: 'Roll',
    priceRetail: 740000,
    priceB2B: 675000,
    moqB2B: 10,
    b2bLabel: 'Min. 10 Roll',
    badge: 'Tegangan Tarik Tinggi',
    cert: 'SNI 07-0663-1995',
    icon: 'grid_view',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSfoxEYyowCxO0t9fShU32vvRlUDfAHoyu2VrwCZgMd7VTFQkFRWXmuGFZPWCY2-UcPgOVUztjaP5QE7TA3P1mRxduuHASE2ZIZ1k2wRHAOpqw1k5kYcO4qmKZDYbMkyRseRQArMtJI155KhJxXxZuWlk4FjlvUXMvo0Nqlr93TRTB4R3XHFbCXlQLR-OhJYykgmMXsO5IG8W4V_UKVCPdAVSW1kSFTVUwn-K727omA5d44T_bG53LcA',
    fallbackImg: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    description: 'Wiremesh M8 las otomatis untuk tulangan lantai gudang, jalan beton, dan dak beton tahan beban.'
  },
  {
    id: 'mortar-mu380',
    name: 'Mortar Utama MU-380 ThinBed',
    subname: 'Semen Instan Perekat Bata Ringan',
    category: 'semen',
    unit: 'Sak (40kg)',
    priceRetail: 95000,
    priceB2B: 84000,
    moqB2B: 40,
    b2bLabel: 'Min. 40 Sak',
    badge: 'Aplikasi Tebal 3mm',
    cert: 'ISO 9001:2015',
    icon: 'layers',
    image: 'assets/images/cement_depot.jpg',
    fallbackImg: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80',
    description: 'Semen instan berkualitas tinggi untuk perekat bata ringan (ALC/Hebel) hemat waktu dan biaya pengerjaan.'
  },
  {
    id: 'crane-kato-50t',
    name: 'Mobile Crane Kato 50 Ton',
    subname: 'Armada Erection & Heavy Lifting',
    category: 'alat-berat',
    unit: 'Shift (8 Jam)',
    priceRetail: 6500000,
    priceB2B: 5800000,
    moqB2B: 3,
    b2bLabel: 'Min. 3 Shift',
    badge: 'Sertifikasi Disnaker',
    cert: 'Rigging Crew Ready',
    icon: 'forklift',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBqx-Zhp-h2DVtVZ9xxAfivDYeOAy_Xsex_tmQIxbY2Rp43i0BWk3MjGTOM3GDU-lkn5LmLy9TAnuOfzysRXAbdQZJrQfA-XLH_x0HK2brLgYS1KnJQkZBlqV5YCWC0azqDd7QAJIW_pgfCCa00Cw4gvhtgv8ZHhjyhpo3sKei8Fo4wXsgTiFOP2_laEqMJtx5dffq5HnpaoTyGWih7zpCd4Kj7dwecMx4UYPS1DmZcuM7dXUGdEGtKQ',
    fallbackImg: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=600&q=80',
    description: 'Mobile crane kapasitas 50 ton untuk perakitan struktur baja pabrik, balok girder jembatan, dan tiang pancang.'
  }
];

// --- 2. LOGISTICS DESTINATIONS DATABASE ---
const LOGISTICS_HUBS = {
  cilandak: {
    id: 'cilandak',
    label: 'Kecamatan Cilandak, Jakarta Selatan (Radius Cijantung)',
    distanceKm: 14.2,
    hubName: 'Gudang Cijantung',
    kargoRate: 480000,
    kargoEta: 'Est. 2-3 Hari Kerja',
    armadaRate: 250000,
    armadaEta: 'Est. Hari Ini, 14:00 WIB'
  },
  cikarang: {
    id: 'cikarang',
    label: 'Kawasan Industri GIIC Delta Silicon, Cikarang',
    distanceKm: 8.5,
    hubName: 'Hub Cikarang Logistik',
    kargoRate: 350000,
    kargoEta: 'Est. 1-2 Hari Kerja',
    armadaRate: 180000,
    armadaEta: 'Est. Hari Ini, 11:30 WIB'
  },
  cikande: {
    id: 'cikande',
    label: 'Kawasan Industri Modern Cikande, Serang Banten',
    distanceKm: 3.2,
    hubName: 'Pabrik Utama Cikande',
    kargoRate: 220000,
    kargoEta: 'Est. 1 Hari Kerja',
    armadaRate: 120000,
    armadaEta: 'Est. 2 Jam Siap Muat'
  },
  bsd: {
    id: 'bsd',
    label: 'BSD City Green Office Park, Tangerang Selatan',
    distanceKm: 18.0,
    hubName: 'Depo Tangerang',
    kargoRate: 450000,
    kargoEta: 'Est. 2 Hari Kerja',
    armadaRate: 220000,
    armadaEta: 'Est. Hari Ini, 15:30 WIB'
  },
  ikn: {
    id: 'ikn',
    label: 'KIPP Sepaku, IKN Nusantara, Kalimantan Timur',
    distanceKm: 24.5,
    hubName: 'IKN Nusantara Hub (Balikpapan)',
    kargoRate: 1250000,
    kargoEta: 'Est. 3-4 Hari Kerja',
    armadaRate: 750000,
    armadaEta: 'Est. Besok Pagi 08:00 WITA'
  }
};

// --- 3. GLOBAL APPLICATION STATE ---
const AppState = {
  isB2BMode: true, // Default B2B Kontraktor active
  selectedLocation: 'cilandak',
  shippingMethod: 'armada', // 'armada' | 'kargo'
  paymentMethod: 'va', // 'va' | 'manual' | 'cod'
  activeCategory: 'all',
  
  // Seeded cart matching PRD initial snapshot
  cart: [
    { productId: 'semen-padang', qty: 100 },
    { productId: 'besi-d16', qty: 50 },
    { productId: 'pasir-pontianak', qty: 2 }
  ],

  // Quantities currently typed in product cards before clicking "Beli"
  cardQtyInputs: {}
};

// --- 4. FORMATTING UTILITIES ---
function formatIDR(amount) {
  return 'Rp ' + Number(amount).toLocaleString('id-ID');
}

function showToast(message, icon = 'check_circle', isSuccess = true) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast-item flex items-center gap-2 px-4 py-3 rounded-full text-sm font-semibold shadow-xl border ${
    isSuccess
      ? 'bg-primary text-on-primary border-primary-container'
      : 'bg-surface-container-lowest text-primary border-surface-container-high'
  }`;
  toast.innerHTML = `
    <span class="material-symbols-outlined text-[18px] text-secondary-fixed">${icon}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// --- 5. INITIALIZATION & EVENT BINDINGS ---
document.addEventListener('DOMContentLoaded', () => {
  initCatalog();
  initDeliveryEstimator();
  initCart();
  initHeaderAccountSwitch();
  initCommandPalette();
  initBoQModal();
  initInvoiceModal();
  initLiveFleetModal();
  initSmoothScroll();
});

// --- 6. CATALOG RENDER & FILTER ENGINE ---
function initCatalog() {
  renderCatalogGrid();
  renderCategoryTabs();
}

function renderCategoryTabs() {
  const tabsContainer = document.getElementById('category-filter-tabs');
  if (!tabsContainer) return;

  const categories = [
    { id: 'all', label: 'Semua Material', icon: 'apps' },
    { id: 'semen', label: 'Semen & Mortar', icon: 'corporate_fare' },
    { id: 'baja', label: 'Baja Tulangan & WF', icon: 'reorder' },
    { id: 'pasir', label: 'Pasir & Agregat', icon: 'grain' },
    { id: 'alat-berat', label: 'Sewa Alat Berat', icon: 'precision_manufacturing' },
    { id: 'ready-mix', label: 'Ready Mix Beton', icon: 'local_shipping' }
  ];

  tabsContainer.innerHTML = categories.map(cat => {
    const isActive = AppState.activeCategory === cat.id;
    return `
      <button 
        type="button" 
        data-cat="${cat.id}"
        class="cat-tab-btn flex items-center gap-space-xs px-space-md py-space-xs rounded-full font-label-md text-label-md font-semibold transition-all duration-200 ${
          isActive 
            ? 'bg-primary-container text-on-primary shadow-sm font-bold' 
            : 'bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-container-high'
        }">
        <span class="material-symbols-outlined text-[18px]">${cat.icon}</span>
        <span>${cat.label}</span>
      </button>
    `;
  }).join('');

  tabsContainer.querySelectorAll('.cat-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const cat = btn.getAttribute('data-cat');
      AppState.activeCategory = cat;
      renderCategoryTabs();
      renderCatalogGrid();
    });
  });
}

function renderCatalogGrid() {
  const grid = document.getElementById('catalog-products-grid');
  if (!grid) return;

  const filtered = AppState.activeCategory === 'all'
    ? CATALOG_PRODUCTS
    : CATALOG_PRODUCTS.filter(p => p.category === AppState.activeCategory);

  grid.innerHTML = filtered.map(product => {
    const currentInputQty = AppState.cardQtyInputs[product.id] || 1;
    const isB2B = AppState.isB2BMode;

    return `
      <div class="product-card bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md border border-surface-container-high/50 flex flex-col justify-between group transition-all" data-id="${product.id}">
        <div class="space-y-space-sm">
          <!-- Thumbnail & Badges -->
          <div class="relative aspect-square w-full bg-surface-container-low rounded-lg overflow-hidden flex flex-col items-center justify-center p-space-sm">
            <img 
              src="${product.image}" 
              alt="${product.name}" 
              onerror="this.onerror=null; this.src='${product.fallbackImg}';"
              class="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500" 
            />
            <span class="absolute top-2 left-2 font-label-caps text-[9px] px-2 py-0.5 rounded-full bg-surface-container-lowest/90 font-bold text-primary shadow-sm backdrop-blur-md">
              ${product.badge}
            </span>
            <span class="absolute bottom-2 right-2 font-label-caps text-[9px] px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-bold uppercase shadow-sm">
              ${product.cert}
            </span>
          </div>

          <!-- Product Titles & Description -->
          <div class="pt-1">
            <div class="flex items-start justify-between gap-1">
              <div>
                <h3 class="font-label-lg text-label-lg font-bold text-primary group-hover:text-secondary transition-colors">
                  ${product.name}
                </h3>
                <span class="text-[11px] text-on-surface-variant font-medium block">
                  ${product.subname || product.description}
                </span>
              </div>
              <span class="font-label-caps text-label-caps text-on-surface-variant bg-surface-container-low px-1.5 py-0.5 rounded shrink-0">
                per ${product.unit}
              </span>
            </div>

            <!-- Dual-Tier Pricing Box -->
            <div class="space-y-1 mt-space-xs">
              <div class="text-body-sm text-on-surface-variant flex items-center justify-between font-medium p-1 rounded ${
                !isB2B ? 'bg-surface-container-high/40 font-bold text-primary' : ''
              }">
                <span class="flex items-center gap-1">🛒 Eceran:</span>
                <span class="font-bold text-primary">${formatIDR(product.priceRetail)} / ${product.unit}</span>
              </div>
              <div class="p-1.5 rounded-md border flex items-center justify-between text-[11px] font-semibold transition-all ${
                isB2B 
                  ? 'bg-secondary-fixed/50 border-secondary text-primary font-bold shadow-xs' 
                  : 'bg-secondary-fixed/20 border-secondary/20 text-primary'
              }">
                <span class="flex items-center gap-1">
                  🏢 B2B (${product.b2bLabel}):
                </span>
                <div class="flex items-center gap-1">
                  <span class="font-bold text-secondary">${formatIDR(product.priceB2B)}</span>
                  <span class="text-[10px] text-secondary font-bold px-1 rounded bg-surface-container-lowest">
                    -${Math.round((1 - product.priceB2B / product.priceRetail) * 100)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Action Stepper & Beli Button -->
        <div class="pt-space-md mt-space-xs border-t border-surface-container-high/60 flex items-center gap-space-xs">
          <div class="flex items-center bg-surface-container-low rounded-full px-1 py-0.5 border border-surface-container">
            <button 
              type="button" 
              class="card-qty-minus w-6 h-6 flex items-center justify-center rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors text-[14px] font-bold"
              data-id="${product.id}">-</button>
            <span class="card-qty-val w-6 text-center font-label-md text-label-md font-bold text-primary" data-id="${product.id}">
              ${currentInputQty}
            </span>
            <button 
              type="button" 
              class="card-qty-plus w-6 h-6 flex items-center justify-center rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors text-[14px] font-bold"
              data-id="${product.id}">+</button>
          </div>
          <button 
            type="button" 
            class="card-btn-buy flex-1 flex items-center justify-center gap-1.5 py-1.5 px-space-sm rounded-full bg-primary-container text-on-primary hover:bg-primary transition-all duration-200 shadow-sm text-label-caps font-bold active:scale-95"
            data-id="${product.id}">
            <span class="material-symbols-outlined text-[16px]">shopping_bag</span>
            <span>Beli</span>
          </button>
        </div>
      </div>
    `;
  }).join('');

  // Attach card event listeners
  grid.querySelectorAll('.card-qty-minus').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const cur = AppState.cardQtyInputs[id] || 1;
      if (cur > 1) {
        AppState.cardQtyInputs[id] = cur - 1;
        const valElem = grid.querySelector(`.card-qty-val[data-id="${id}"]`);
        if (valElem) valElem.textContent = AppState.cardQtyInputs[id];
      }
    });
  });

  grid.querySelectorAll('.card-qty-plus').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const cur = AppState.cardQtyInputs[id] || 1;
      AppState.cardQtyInputs[id] = cur + 1;
      const valElem = grid.querySelector(`.card-qty-val[data-id="${id}"]`);
      if (valElem) valElem.textContent = AppState.cardQtyInputs[id];
    });
  });

  grid.querySelectorAll('.card-btn-buy').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const qty = AppState.cardQtyInputs[id] || 1;
      addToCart(id, qty);
    });
  });
}

// --- 7. CART ENGINE & SMART CHECKOUT DRAWER ---
function initCart() {
  const openCartBtn = document.getElementById('open-cart-btn');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const overlay = document.getElementById('cart-drawer-overlay');

  if (openCartBtn && overlay) {
    openCartBtn.addEventListener('click', () => {
      openCartDrawer();
    });
  }

  if (closeCartBtn && overlay) {
    closeCartBtn.addEventListener('click', () => {
      closeCartDrawer();
    });
  }

  // Close on backdrop click
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay || e.target.classList.contains('backdrop-scrim')) {
        closeCartDrawer();
      }
    });
  }

  // Payment method selection in cart drawer
  document.querySelectorAll('input[name="payment_method"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      AppState.paymentMethod = e.target.value;
      updatePaymentMethodHighlights();
    });
  });

  // Checkout submit button
  const checkoutBtn = document.getElementById('btn-checkout-invoice');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      openInvoiceModal();
    });
  }

  renderCart();
}

function openCartDrawer() {
  const overlay = document.getElementById('cart-drawer-overlay');
  if (overlay) {
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  const overlay = document.getElementById('cart-drawer-overlay');
  if (overlay) {
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function addToCart(productId, qty) {
  const existing = AppState.cart.find(item => item.productId === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    AppState.cart.push({ productId, qty });
  }

  // Reset card stepper to 1
  AppState.cardQtyInputs[productId] = 1;
  const valElem = document.querySelector(`.card-qty-val[data-id="${productId}"]`);
  if (valElem) valElem.textContent = 1;

  renderCart();

  const product = CATALOG_PRODUCTS.find(p => p.id === productId);
  showToast(`+${qty} ${product ? product.unit : ''} ${product ? product.name : ''} ditambahkan ke keranjang`, 'shopping_bag');

  // Cart badge animation bump
  const badge = document.getElementById('cart-badge-count');
  if (badge) {
    badge.classList.add('scale-125');
    setTimeout(() => badge.classList.remove('scale-125'), 200);
  }
}

function updateCartItemQty(productId, delta) {
  const itemIndex = AppState.cart.findIndex(i => i.productId === productId);
  if (itemIndex > -1) {
    const item = AppState.cart[itemIndex];
    item.qty += delta;
    if (item.qty <= 0) {
      AppState.cart.splice(itemIndex, 1);
      showToast('Barang dihapus dari keranjang', 'delete', false);
    }
    renderCart();
  }
}

function removeCartItem(productId) {
  AppState.cart = AppState.cart.filter(i => i.productId !== productId);
  renderCart();
  showToast('Barang berhasil dihapus', 'delete', false);
}

function calculateCartTotals() {
  let subtotal = 0;
  let totalB2BSavings = 0;

  const itemsCalculated = AppState.cart.map(item => {
    const product = CATALOG_PRODUCTS.find(p => p.id === item.productId);
    if (!product) return null;

    // Use B2B price if global B2B mode is active OR item quantity meets MOQ
    const qualifiesB2B = AppState.isB2BMode || item.qty >= product.moqB2B;
    const unitPrice = qualifiesB2B ? product.priceB2B : product.priceRetail;
    const lineTotal = unitPrice * item.qty;
    
    const retailLineTotal = product.priceRetail * item.qty;
    if (qualifiesB2B) {
      totalB2BSavings += (retailLineTotal - lineTotal);
    }

    subtotal += lineTotal;

    return {
      product,
      qty: item.qty,
      unitPrice,
      lineTotal,
      qualifiesB2B
    };
  }).filter(Boolean);

  // Active Hub Shipping Rate
  const hub = LOGISTICS_HUBS[AppState.selectedLocation] || LOGISTICS_HUBS.cilandak;
  const shippingFee = AppState.shippingMethod === 'armada' ? hub.armadaRate : hub.kargoRate;

  // Additional B2B Partnership volume discount for large orders (> Rp 15.000.000)
  const b2bPartnershipDiscount = (AppState.isB2BMode && subtotal >= 15000000) ? 500000 : 0;

  // Net Taxable Base (DPP)
  const dpp = Math.max(0, subtotal - b2bPartnershipDiscount);
  // PPN 11% (DJP Online standard)
  const ppn11 = Math.round(dpp * 0.11);

  // Grand Total
  const grandTotal = dpp + ppn11 + shippingFee;

  return {
    itemsCalculated,
    subtotal,
    totalB2BSavings,
    shippingFee,
    b2bPartnershipDiscount,
    dpp,
    ppn11,
    grandTotal,
    totalItemsCount: AppState.cart.reduce((acc, cur) => acc + cur.qty, 0),
    uniqueProductsCount: AppState.cart.length
  };
}

function renderCart() {
  const totals = calculateCartTotals();

  // Update header cart badge
  const headerBadge = document.getElementById('cart-badge-count');
  if (headerBadge) {
    headerBadge.textContent = totals.uniqueProductsCount;
  }

  // Update Drawer header badge
  const drawerCount = document.getElementById('drawer-items-count');
  if (drawerCount) {
    drawerCount.textContent = `${totals.uniqueProductsCount} Barang`;
  }

  // Render items list
  const container = document.getElementById('drawer-cart-items-list');
  if (container) {
    if (totals.itemsCalculated.length === 0) {
      container.innerHTML = `
        <div class="py-12 text-center space-y-3">
          <div class="w-16 h-16 mx-auto rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant">
            <span class="material-symbols-outlined text-[32px]">production_quantity_limits</span>
          </div>
          <h4 class="font-headline-md text-headline-md font-bold text-primary">Keranjang Kosong</h4>
          <p class="font-body-sm text-body-sm text-on-surface-variant max-w-xs mx-auto">
            Silakan pilih material konstruksi atau alat berat dari katalog untuk memulai pemesanan.
          </p>
          <button 
            type="button" 
            onclick="document.getElementById('cart-drawer-overlay').classList.add('hidden'); document.getElementById('katalog-material-utama').scrollIntoView({behavior: 'smooth'});"
            class="px-space-md py-2 rounded-full bg-primary-container text-on-primary font-label-md text-label-md font-bold shadow-sm hover:bg-primary transition-all">
            Jelajahi Material
          </button>
        </div>
      `;
    } else {
      container.innerHTML = totals.itemsCalculated.map(item => `
        <div class="p-space-sm rounded-xl bg-surface-container-low border border-surface-container-high/60 flex gap-space-sm transition-all hover:bg-surface-container/70">
          <div class="w-16 h-16 rounded-lg bg-surface-container-lowest flex items-center justify-center shrink-0 border border-surface-container-high/50 text-secondary overflow-hidden">
            <img 
              src="${item.product.image}" 
              alt="${item.product.name}" 
              onerror="this.onerror=null; this.src='${item.product.fallbackImg}';"
              class="w-full h-full object-cover" 
            />
          </div>
          <div class="flex-1 flex flex-col justify-between">
            <div class="flex items-start justify-between gap-1">
              <div class="pr-1">
                <h4 class="font-label-md text-label-md font-bold text-primary leading-snug">
                  ${item.product.name}
                </h4>
                <div class="flex items-center gap-1.5 pt-0.5">
                  <span class="font-label-caps text-label-caps text-on-surface-variant">
                    ${item.qty} ${item.product.unit} • ${formatIDR(item.unitPrice)} / ${item.product.unit.split(' ')[0]}
                  </span>
                  ${item.qualifiesB2B ? '<span class="text-[9px] font-bold px-1 py-0.2 rounded bg-secondary-fixed text-primary">B2B</span>' : ''}
                </div>
              </div>
              <button 
                type="button" 
                aria-label="Hapus produk" 
                class="cart-delete-btn text-on-surface-variant hover:text-error transition-colors p-1"
                data-id="${item.product.id}">
                <span class="material-symbols-outlined text-[18px]">delete</span>
              </button>
            </div>

            <div class="flex items-center justify-between pt-1">
              <div class="flex items-center bg-surface-container-lowest rounded-full px-1.5 py-0.5 border border-surface-container">
                <button 
                  type="button" 
                  class="cart-minus-btn w-5 h-5 flex items-center justify-center text-on-surface-variant hover:text-primary text-[12px] font-bold"
                  data-id="${item.product.id}">-</button>
                <span class="px-2 text-center font-label-md text-label-md font-bold text-primary">
                  ${item.qty}
                </span>
                <button 
                  type="button" 
                  class="cart-plus-btn w-5 h-5 flex items-center justify-center text-on-surface-variant hover:text-primary text-[12px] font-bold"
                  data-id="${item.product.id}">+</button>
              </div>
              <span class="font-label-md text-label-md font-bold text-primary">
                ${formatIDR(item.lineTotal)}
              </span>
            </div>
          </div>
        </div>
      `).join('');

      // Attach Drawer Item Steppers
      container.querySelectorAll('.cart-minus-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          updateCartItemQty(btn.getAttribute('data-id'), -1);
        });
      });

      container.querySelectorAll('.cart-plus-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          updateCartItemQty(btn.getAttribute('data-id'), 1);
        });
      });

      container.querySelectorAll('.cart-delete-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          removeCartItem(btn.getAttribute('data-id'));
        });
      });
    }
  }

  // Update Drawer Financial Summary
  const subtotalElem = document.getElementById('cart-subtotal-val');
  if (subtotalElem) subtotalElem.textContent = formatIDR(totals.subtotal);

  const ppnElem = document.getElementById('cart-ppn-val');
  if (ppnElem) ppnElem.textContent = formatIDR(totals.ppn11);

  const ongkirElem = document.getElementById('cart-ongkir-val');
  if (ongkirElem) ongkirElem.textContent = formatIDR(totals.shippingFee);

  const discountRow = document.getElementById('cart-discount-row');
  const discountVal = document.getElementById('cart-discount-val');
  if (discountRow && discountVal) {
    if (totals.b2bPartnershipDiscount > 0) {
      discountRow.style.display = 'flex';
      discountVal.textContent = '-' + formatIDR(totals.b2bPartnershipDiscount);
    } else {
      discountRow.style.display = 'none';
    }
  }

  const grandTotalElem = document.getElementById('cart-grandtotal-val');
  if (grandTotalElem) grandTotalElem.textContent = formatIDR(totals.grandTotal);
}

function updatePaymentMethodHighlights() {
  document.querySelectorAll('.payment-option-card').forEach(card => {
    const radio = card.querySelector('input[name="payment_method"]');
    if (radio && radio.checked) {
      card.classList.add('border-secondary/60', 'bg-surface-container-lowest', 'shadow-sm');
      card.classList.remove('border-surface-container-high');
    } else {
      card.classList.remove('border-secondary/60', 'shadow-sm');
      card.classList.add('border-surface-container-high');
    }
  });
}

// --- 8. DELIVERY ESTIMATOR ENGINE ---
function initDeliveryEstimator() {
  const selectElem = document.getElementById('estimator-location-select');
  const chooseKargoBtn = document.getElementById('btn-choose-kargo');
  const chooseArmadaBtn = document.getElementById('btn-choose-armada');

  if (selectElem) {
    selectElem.value = AppState.selectedLocation;
    selectElem.addEventListener('change', (e) => {
      AppState.selectedLocation = e.target.value;
      updateEstimatorDisplays();
      renderCart(); // recalculates shipping
    });
  }

  if (chooseKargoBtn) {
    chooseKargoBtn.addEventListener('click', () => {
      AppState.shippingMethod = 'kargo';
      updateShippingSelectionUI();
      renderCart();
      showToast('Metode pengiriman diubah ke Kargo Reguler', 'local_shipping');
    });
  }

  if (chooseArmadaBtn) {
    chooseArmadaBtn.addEventListener('click', () => {
      AppState.shippingMethod = 'armada';
      updateShippingSelectionUI();
      renderCart();
      showToast('Metode pengiriman diubah ke Armada Mandiri PT (Bisa COD)', 'airport_shuttle');
    });
  }

  updateEstimatorDisplays();
  updateShippingSelectionUI();
}

function updateEstimatorDisplays() {
  const hub = LOGISTICS_HUBS[AppState.selectedLocation] || LOGISTICS_HUBS.cilandak;

  const locDistanceElem = document.getElementById('estimator-distance-badge');
  if (locDistanceElem) {
    locDistanceElem.textContent = `${hub.distanceKm} km dari ${hub.hubName}`;
  }

  // Kargo Card
  const kargoPriceElem = document.getElementById('estimator-kargo-price');
  if (kargoPriceElem) kargoPriceElem.textContent = formatIDR(hub.kargoRate);

  const kargoEtaElem = document.getElementById('estimator-kargo-eta');
  if (kargoEtaElem) kargoEtaElem.textContent = hub.kargoEta;

  // Armada PT Card
  const armadaPriceElem = document.getElementById('estimator-armada-price');
  if (armadaPriceElem) armadaPriceElem.textContent = formatIDR(hub.armadaRate);

  const armadaEtaElem = document.getElementById('estimator-armada-eta');
  if (armadaEtaElem) armadaEtaElem.textContent = hub.armadaEta;
}

function updateShippingSelectionUI() {
  const kargoCard = document.getElementById('kargo-option-card');
  const armadaCard = document.getElementById('armada-option-card');
  const chooseKargoBtn = document.getElementById('btn-choose-kargo');
  const chooseArmadaBtn = document.getElementById('btn-choose-armada');

  if (AppState.shippingMethod === 'armada') {
    if (armadaCard) {
      armadaCard.className = 'p-space-md rounded-lg bg-secondary-fixed/20 border-2 border-secondary/40 shadow-sm flex flex-col justify-between space-y-space-sm relative';
    }
    if (kargoCard) {
      kargoCard.className = 'p-space-md rounded-lg bg-surface-container-lowest border border-surface-container-high flex flex-col justify-between space-y-space-sm transition-all duration-300 hover:shadow-md';
    }
    if (chooseArmadaBtn) {
      chooseArmadaBtn.className = 'w-full py-1.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md font-bold shadow-sm hover:bg-primary transition-colors flex items-center justify-center gap-1';
      chooseArmadaBtn.innerHTML = '<span class="material-symbols-outlined text-[16px]">check_circle</span> Opsi Terpilih';
    }
    if (chooseKargoBtn) {
      chooseKargoBtn.className = 'w-full py-1.5 rounded-full border border-surface-container-high text-primary hover:bg-surface-container-low font-label-md text-label-md font-bold transition-colors';
      chooseKargoBtn.innerHTML = 'Pilih Kargo';
    }
  } else {
    if (kargoCard) {
      kargoCard.className = 'p-space-md rounded-lg bg-secondary-fixed/20 border-2 border-secondary/40 shadow-sm flex flex-col justify-between space-y-space-sm relative';
    }
    if (armadaCard) {
      armadaCard.className = 'p-space-md rounded-lg bg-surface-container-lowest border border-surface-container-high flex flex-col justify-between space-y-space-sm transition-all duration-300 hover:shadow-md';
    }
    if (chooseKargoBtn) {
      chooseKargoBtn.className = 'w-full py-1.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md font-bold shadow-sm hover:bg-primary transition-colors flex items-center justify-center gap-1';
      chooseKargoBtn.innerHTML = '<span class="material-symbols-outlined text-[16px]">check_circle</span> Opsi Terpilih';
    }
    if (chooseArmadaBtn) {
      chooseArmadaBtn.className = 'w-full py-1.5 rounded-full border border-surface-container-high text-primary hover:bg-surface-container-low font-label-md text-label-md font-bold transition-colors';
      chooseArmadaBtn.innerHTML = 'Pilih Armada PT';
    }
  }
}

// --- 9. HEADER ACCOUNT SWITCHER & GLOBAL B2B MODE ---
function initHeaderAccountSwitch() {
  const btnRetail = document.getElementById('switch-mode-retail');
  const btnB2B = document.getElementById('switch-mode-b2b');

  if (btnRetail) {
    btnRetail.addEventListener('click', () => {
      setB2BMode(false);
    });
  }

  if (btnB2B) {
    btnB2B.addEventListener('click', () => {
      setB2BMode(true);
    });
  }

  updateHeaderSwitchUI();
}

function setB2BMode(isB2B) {
  AppState.isB2BMode = isB2B;
  updateHeaderSwitchUI();
  renderCatalogGrid();
  renderCart();
  updatePillarDemoSimulation(isB2B);

  if (isB2B) {
    showToast('Mode Kontraktor (B2B) Aktif: Harga Grosir & e-Faktur Pajak Terbuka', 'business_center');
  } else {
    showToast('Mode Akun Retail Aktif: Harga Eceran Standar', 'person');
  }
}

function updateHeaderSwitchUI() {
  const btnRetail = document.getElementById('switch-mode-retail');
  const btnB2B = document.getElementById('switch-mode-b2b');
  const statusBadge = document.getElementById('catalog-mode-status-badge');

  if (!btnRetail || !btnB2B) return;

  if (AppState.isB2BMode) {
    btnB2B.className = 'font-label-md text-label-md px-space-sm py-1 rounded-full bg-surface-container-lowest text-on-surface shadow-sm font-semibold transition-all';
    btnRetail.className = 'font-label-md text-label-md px-space-sm py-1 rounded-full text-on-surface-variant hover:text-on-surface transition-all';
    if (statusBadge) statusBadge.textContent = 'Mode Harga: Kontraktor B2B Aktif';
  } else {
    btnRetail.className = 'font-label-md text-label-md px-space-sm py-1 rounded-full bg-surface-container-lowest text-on-surface shadow-sm font-semibold transition-all';
    btnB2B.className = 'font-label-md text-label-md px-space-sm py-1 rounded-full text-on-surface-variant hover:text-on-surface transition-all';
    if (statusBadge) statusBadge.textContent = 'Mode Harga: Retail Eceran Aktif';
  }
}

function updatePillarDemoSimulation(isB2B) {
  const priceDisplay = document.getElementById('product-price');
  const moqDisplay = document.getElementById('product-moq');
  const tierBadge = document.getElementById('tier-badge');
  const tierProgress = document.getElementById('tier-progress');

  if (!priceDisplay || !moqDisplay || !tierBadge || !tierProgress) return;

  if (isB2B) {
    priceDisplay.textContent = 'Rp 64.500';
    moqDisplay.textContent = '100 Sak (1 Truk Colt Diesel)';
    tierBadge.textContent = 'Kontraktor B2B (-10.4%)';
    tierBadge.className = 'font-label-caps text-label-caps px-2 py-0.5 rounded-full bg-secondary-fixed text-primary font-bold uppercase';
    tierProgress.style.width = '90%';
  } else {
    priceDisplay.textContent = 'Rp 72.000';
    moqDisplay.textContent = '10 Sak';
    tierBadge.textContent = 'Retail';
    tierBadge.className = 'font-label-caps text-label-caps px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-bold uppercase';
    tierProgress.style.width = '25%';
  }
}

// --- 10. COMMAND PALETTE (⌘K / Ctrl+K) ---
function initCommandPalette() {
  const modal = document.getElementById('command-palette-modal');
  const openBtns = document.querySelectorAll('.open-command-palette-btn');
  const closeBtn = document.getElementById('close-command-palette');
  const input = document.getElementById('command-palette-input');
  const resultsContainer = document.getElementById('command-palette-results');

  function openPalette() {
    if (!modal) return;
    modal.classList.remove('hidden');
    input.value = '';
    input.focus();
    renderCommandResults('');
  }

  function closePalette() {
    if (!modal) return;
    modal.classList.add('hidden');
  }

    openBtns.forEach(b => b.addEventListener('click', openPalette));
    if (closeBtn) closeBtn.addEventListener('click', closePalette);
    window.openCommandPalette = openPalette;
    window.closeCommandPalette = closePalette;

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closePalette();
    });
  }

  // Keyboard shortcut listener
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (modal && modal.classList.contains('hidden')) {
        openPalette();
      } else {
        closePalette();
      }
    } else if (e.key === 'Escape') {
      closePalette();
      closeCartDrawer();
      closeInvoiceModal();
      closeBoQModal();
      closeLiveFleetModal();
    }
  });

  if (input) {
    input.addEventListener('input', (e) => {
      renderCommandResults(e.target.value.trim().toLowerCase());
    });
  }
}

function renderCommandResults(query) {
  const resultsContainer = document.getElementById('command-palette-results');
  if (!resultsContainer) return;

  const quickActions = [
    { title: 'Buka Smart Checkout Cart', subtitle: 'Lihat daftar pesanan, PPN 11%, dan kalkulasi grand total', icon: 'shopping_bag', action: () => { document.getElementById('command-palette-modal').classList.add('hidden'); openCartDrawer(); } },
    { title: 'Beralih ke Akun Kontraktor B2B', subtitle: 'Aktifkan diskon volume otomatis dan e-Faktur terpadu', icon: 'business_center', action: () => { setB2BMode(true); document.getElementById('command-palette-modal').classList.add('hidden'); } },
    { title: 'Beralih ke Akun Retail', subtitle: 'Gunakan mode pesanan eceran dan pembayaran COD', icon: 'person', action: () => { setB2BMode(false); document.getElementById('command-palette-modal').classList.add('hidden'); } },
    { title: 'Kalkulator Ongkir & Armada Mandiri', subtitle: 'Simulasikan tarif kargo & truk proyek berdasarkan radius km', icon: 'local_shipping', action: () => { document.getElementById('command-palette-modal').classList.add('hidden'); document.getElementById('quick-catalog').scrollIntoView({ behavior: 'smooth' }); } },
    { title: 'Upload Dokumen BoQ Proyek', subtitle: 'Estimasi otomatis Bill of Quantities dokumen Excel/PDF', icon: 'upload_file', action: () => { document.getElementById('command-palette-modal').classList.add('hidden'); openBoQModal(); } },
    { title: 'Lacak Armada Mandiri (Live GPS Telematics)', subtitle: 'Pantau posisi truk, sensor slump beton K-350, dan SLA waktu tiba', icon: 'alt_route', action: () => { document.getElementById('command-palette-modal').classList.add('hidden'); openLiveFleetModal(); } }
  ];

  const matchedProducts = CATALOG_PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query) ||
    p.cert.toLowerCase().includes(query)
  );

  const matchedActions = quickActions.filter(a => 
    a.title.toLowerCase().includes(query) ||
    a.subtitle.toLowerCase().includes(query)
  );

  let html = '';

  if (matchedActions.length > 0) {
    html += `
      <div class="px-3 py-1.5 text-[11px] font-bold text-secondary uppercase tracking-wider">Aksi Cepat & Navigasi</div>
      <div class="space-y-1">
        ${matchedActions.map((action, idx) => `
          <div class="command-item flex items-center justify-between p-2.5 rounded-lg hover:bg-surface-container cursor-pointer transition-colors" data-action-idx="${idx}">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <span class="material-symbols-outlined text-[18px]">${action.icon}</span>
              </div>
              <div>
                <span class="text-sm font-bold text-primary block">${action.title}</span>
                <span class="text-xs text-on-surface-variant">${action.subtitle}</span>
              </div>
            </div>
            <span class="material-symbols-outlined text-on-surface-variant text-[16px]">arrow_forward</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  if (matchedProducts.length > 0) {
    html += `
      <div class="px-3 pt-3 py-1.5 text-[11px] font-bold text-secondary uppercase tracking-wider">Material & Alat Berat</div>
      <div class="space-y-1">
        ${matchedProducts.map(p => `
          <div class="command-prod-item flex items-center justify-between p-2.5 rounded-lg hover:bg-surface-container cursor-pointer transition-colors" data-prod-id="${p.id}">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
                <span class="material-symbols-outlined text-[18px]">${p.icon}</span>
              </div>
              <div>
                <span class="text-sm font-bold text-primary block">${p.name}</span>
                <span class="text-xs text-on-surface-variant">${formatIDR(p.priceB2B)} (B2B) • ${formatIDR(p.priceRetail)} (Eceran)</span>
              </div>
            </div>
            <button type="button" class="px-3 py-1 rounded-full bg-primary-container text-on-primary text-xs font-bold hover:bg-primary transition-colors">
              Beli
            </button>
          </div>
        `).join('')}
      </div>
    `;
  }

  if (matchedActions.length === 0 && matchedProducts.length === 0) {
    html = `
      <div class="py-8 text-center text-on-surface-variant text-sm">
        Tidak ditemukan material atau aksi untuk "<strong>${query}</strong>"
      </div>
    `;
  }

  resultsContainer.innerHTML = html;

  // Bind click handlers
  resultsContainer.querySelectorAll('.command-item').forEach(elem => {
    elem.addEventListener('click', () => {
      const idx = elem.getAttribute('data-action-idx');
      if (matchedActions[idx]) matchedActions[idx].action();
    });
  });

  resultsContainer.querySelectorAll('.command-prod-item').forEach(elem => {
    elem.addEventListener('click', () => {
      const id = elem.getAttribute('data-prod-id');
      addToCart(id, 1);
      document.getElementById('command-palette-modal').classList.add('hidden');
    });
  });
}

// --- 11. BILL OF QUANTITIES (BoQ) AI ENGINE MODAL ---
function initBoQModal() {
  const openBtns = document.querySelectorAll('.open-boq-modal-btn');
  const closeBtn = document.getElementById('close-boq-modal');
  const modal = document.getElementById('boq-upload-modal');
  const sampleBtn1 = document.getElementById('btn-sample-boq-1');
  const sampleBtn2 = document.getElementById('btn-sample-boq-2');
  const runParseBtn = document.getElementById('btn-parse-boq');
  const importCartBtn = document.getElementById('btn-import-boq-to-cart');

  openBtns.forEach(btn => btn.addEventListener('click', openBoQModal));
  if (closeBtn) closeBtn.addEventListener('click', closeBoQModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeBoQModal();
    });
  }

  if (sampleBtn1) {
    sampleBtn1.addEventListener('click', () => {
      selectSampleBoQ('BoQ_Pergudangan_Logistik_Cikande_Phase1.xlsx', 12);
    });
  }

  if (sampleBtn2) {
    sampleBtn2.addEventListener('click', () => {
      selectSampleBoQ('BoQ_Struktur_Dak_Beton_Apartemen_Serpong.xlsx', 8);
    });
  }

  if (runParseBtn) {
    runParseBtn.addEventListener('click', simulateBoQAnalysis);
  }

  if (importCartBtn) {
    importCartBtn.addEventListener('click', () => {
      // Import extracted items to cart
      addToCart('semen-padang', 150);
      addToCart('besi-d16', 80);
      addToCart('wiremesh-m8', 20);
      addToCart('ready-mix-k350', 12);
      closeBoQModal();
      openCartDrawer();
      showToast('12 Item BoQ berhasil dimasukkan ke Keranjang dengan Diskon Kontraktor!', 'task_alt');
    });
  }
}

function openBoQModal() {
  const modal = document.getElementById('boq-upload-modal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeBoQModal() {
  const modal = document.getElementById('boq-upload-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function selectSampleBoQ(filename, itemsCount) {
  const fileLabel = document.getElementById('boq-selected-filename');
  const parseBtn = document.getElementById('btn-parse-boq');
  if (fileLabel) {
    fileLabel.innerHTML = `
      <div class="flex items-center gap-2 p-3 rounded-lg bg-surface-container border border-secondary/40 text-primary font-bold text-sm">
        <span class="material-symbols-outlined text-secondary">description</span>
        <span class="flex-1">${filename}</span>
        <span class="text-xs px-2 py-0.5 rounded-full bg-secondary-fixed text-primary">${itemsCount} Pos Pekerjaan</span>
      </div>
    `;
  }
  if (parseBtn) {
    parseBtn.disabled = false;
    parseBtn.classList.remove('opacity-50', 'pointer-events-none');
  }
}

function simulateBoQAnalysis() {
  const progressBox = document.getElementById('boq-progress-box');
  const progressBar = document.getElementById('boq-progress-bar');
  const progressText = document.getElementById('boq-progress-text');
  const resultTable = document.getElementById('boq-result-table-wrapper');
  const parseBtn = document.getElementById('btn-parse-boq');

  if (!progressBox || !progressBar) return;

  progressBox.classList.remove('hidden');
  resultTable.classList.add('hidden');
  if (parseBtn) parseBtn.disabled = true;

  const steps = [
    { p: 25, msg: 'Memindai format tabel & struktur sel BoQ...' },
    { p: 55, msg: 'Mencocokkan spesifikasi SNI besi & semen dengan SKU PT...' },
    { p: 85, msg: 'Menghitung diskon volume kontraktor & ketersediaan armada...' },
    { p: 100, msg: 'Analisis selesai: 4 Material Utama terpetakan dengan rabat -14.2%!' }
  ];

  let stepIdx = 0;
  const interval = setInterval(() => {
    if (stepIdx < steps.length) {
      progressBar.style.width = steps[stepIdx].p + '%';
      progressText.textContent = steps[stepIdx].msg;
      stepIdx++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        progressBox.classList.add('hidden');
        resultTable.classList.remove('hidden');
        if (parseBtn) parseBtn.disabled = false;
      }, 500);
    }
  }, 400);
}

// --- 12. INVOICE & e-FAKTUR DJP GENERATOR MODAL ---
function initInvoiceModal() {
  const closeBtn = document.getElementById('close-invoice-modal');
  const modal = document.getElementById('invoice-preview-modal');
  const printBtn = document.getElementById('btn-print-invoice');
  const liveGpsBtn = document.getElementById('btn-invoice-track-gps');

  if (closeBtn) closeBtn.addEventListener('click', closeInvoiceModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeInvoiceModal();
    });
  }

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  if (liveGpsBtn) {
    liveGpsBtn.addEventListener('click', () => {
      closeInvoiceModal();
      openLiveFleetModal();
    });
  }
}

function openInvoiceModal() {
  const totals = calculateCartTotals();
  if (totals.uniqueProductsCount === 0) {
    showToast('Keranjang belanja kosong! Silakan pilih material terlebih dahulu.', 'warning', false);
    return;
  }

  closeCartDrawer();

  const modal = document.getElementById('invoice-preview-modal');
  if (!modal) return;

  // Generate dynamic invoice number & dates
  const today = new Date();
  const invNumber = `INV/MK/${today.getFullYear()}/${today.getMonth() + 1}/${Math.floor(1000 + Math.random() * 9000)}`;
  const dateStr = today.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
  const hub = LOGISTICS_HUBS[AppState.selectedLocation] || LOGISTICS_HUBS.cilandak;

  // Populate fields
  const numElem = document.getElementById('invoice-modal-number');
  if (numElem) numElem.textContent = invNumber;

  const dateElem = document.getElementById('invoice-modal-date');
  if (dateElem) dateElem.textContent = dateStr;

  const destElem = document.getElementById('invoice-modal-destination');
  if (destElem) destElem.textContent = `${hub.label} (${hub.distanceKm} km dari ${hub.hubName})`;

  const methodElem = document.getElementById('invoice-modal-payment-method');
  if (methodElem) {
    if (AppState.paymentMethod === 'va') {
      methodElem.textContent = 'Virtual Account Bank BCA / Mandiri (Instant Auto-Settlement)';
    } else if (AppState.paymentMethod === 'manual') {
      methodElem.textContent = 'Transfer Bank PO / Proforma B2B (Termin 14-30 Hari Terverifikasi)';
    } else {
      methodElem.textContent = 'Bayar di Tempat (COD Lapangan) saat Tanda Tangan BAST';
    }
  }

  // Populate Table
  const tableBody = document.getElementById('invoice-modal-table-body');
  if (tableBody) {
    tableBody.innerHTML = totals.itemsCalculated.map((item, idx) => `
      <tr class="border-b border-surface-container-high/60 text-xs">
        <td class="py-2.5 px-3 text-center text-on-surface-variant font-bold">${idx + 1}</td>
        <td class="py-2.5 px-3 font-bold text-primary">
          ${item.product.name}
          <span class="block text-[10px] text-on-surface-variant font-normal">${item.product.subname} • ${item.product.cert}</span>
        </td>
        <td class="py-2.5 px-3 text-center font-bold text-primary">${item.qty} ${item.product.unit.split(' ')[0]}</td>
        <td class="py-2.5 px-3 text-right font-medium">${formatIDR(item.unitPrice)}</td>
        <td class="py-2.5 px-3 text-right font-bold text-primary">${formatIDR(item.lineTotal)}</td>
      </tr>
    `).join('');
  }

  // Populate Summary
  const subElem = document.getElementById('invoice-modal-subtotal');
  if (subElem) subElem.textContent = formatIDR(totals.subtotal);

  const discountElem = document.getElementById('invoice-modal-discount');
  if (discountElem) {
    discountElem.textContent = totals.b2bPartnershipDiscount > 0 ? '-' + formatIDR(totals.b2bPartnershipDiscount) : 'Rp 0';
  }

  const ppnElem = document.getElementById('invoice-modal-ppn');
  if (ppnElem) ppnElem.textContent = formatIDR(totals.ppn11);

  const shipElem = document.getElementById('invoice-modal-shipping');
  if (shipElem) shipElem.textContent = formatIDR(totals.shippingFee);

  const grandElem = document.getElementById('invoice-modal-grandtotal');
  if (grandElem) grandElem.textContent = formatIDR(totals.grandTotal);

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeInvoiceModal() {
  const modal = document.getElementById('invoice-preview-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// --- 13. LIVE FLEET TELEMATICS & GPS TRACKING MODAL ---
function initLiveFleetModal() {
  const closeBtn = document.getElementById('close-live-fleet-modal');
  const modal = document.getElementById('live-fleet-modal');
  const openBtns = document.querySelectorAll('.open-live-fleet-btn');

  openBtns.forEach(btn => btn.addEventListener('click', openLiveFleetModal));
  if (closeBtn) closeBtn.addEventListener('click', closeLiveFleetModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeLiveFleetModal();
    });
  }
}

function openLiveFleetModal() {
  const modal = document.getElementById('live-fleet-modal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeLiveFleetModal() {
  const modal = document.getElementById('live-fleet-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// --- 14. SMOOTH SCROLLING ---
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

// Global window bindings for direct access & inline event triggers
window.openCartDrawer = openCartDrawer;
window.closeCartDrawer = closeCartDrawer;
window.openInvoiceModal = openInvoiceModal;
window.closeInvoiceModal = closeInvoiceModal;
window.openBoQModal = openBoQModal;
window.closeBoQModal = closeBoQModal;
window.openLiveFleetModal = openLiveFleetModal;
window.closeLiveFleetModal = closeLiveFleetModal;
window.setB2BMode = setB2BMode;
window.addToCart = addToCart;
