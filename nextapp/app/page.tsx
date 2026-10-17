'use client';

import React, { useState } from 'react';
import { ProductCategory, CartItem, ShippingMethod, PaymentMethod } from '@/types';
import { CATALOG_PRODUCTS, COMPANY_INFO } from '@/lib/products';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { CategoryTabs } from '@/components/CategoryTabs';
import { ProductCard } from '@/components/ProductCard';
import { DeliveryEstimator } from '@/components/DeliveryEstimator';
import { CartDrawer } from '@/components/CartDrawer';
import { InvoiceModal } from '@/components/InvoiceModal';
import { FleetRadarModal } from '@/components/FleetRadarModal';
import { BoQUploadModal } from '@/components/BoQUploadModal';
import { CompanyProfileModal } from '@/components/CompanyProfileModal';
import { CommandPalette } from '@/components/CommandPalette';
import { Footer } from '@/components/Footer';
import { 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  Boxes,
  MessageCircle,
  Percent,
  Clock,
  Sparkles,
  PhoneCall
} from 'lucide-react';

export default function Home() {
  // Global Application State
  const [isB2BMode, setIsB2BMode] = useState<boolean>(true);
  const [selectedLocation, setSelectedLocation] = useState<string>('lembang');
  const [shippingMethod, setShippingMethod] = useState<ShippingMethod>('armada');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('cod');
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');

  // Seeded Cart with genuine PT IAP catalog items
  const [cart, setCart] = useState<CartItem[]>([
    { productId: 'besi-full-sni-10', qty: 50 },
    { productId: 'semen-padang-50kg', qty: 40 },
    { productId: 'pasir-pasang-truk', qty: 1 }
  ]);

  // Modal Visibility States
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isInvoiceOpen, setIsInvoiceOpen] = useState(false);
  const [isRadarOpen, setIsRadarOpen] = useState(false);
  const [isBoQOpen, setIsBoQOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  // Cart Operations
  const handleAddToCart = (productId: string, qtyToAdd: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.productId === productId);
      if (existing) {
        return prev.map(item =>
          item.productId === productId ? { ...item, qty: item.qty + qtyToAdd } : item
        );
      }
      return [...prev, { productId, qty: qtyToAdd }];
    });

    const product = CATALOG_PRODUCTS.find(p => p.id === productId);
    showToast(`Berhasil menambahkan ${qtyToAdd}x ${product?.name || 'Material'}!`);
  };

  const handleUpdateQty = (productId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart(prev =>
      prev.map(item => (item.productId === productId ? { ...item, qty: newQty } : item))
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart(prev => prev.filter(item => item.productId !== productId));
    showToast('Material berhasil dihapus dari keranjang.');
  };

  const handleImportBoQItems = (items: { productId: string; qty: number }[]) => {
    setCart(prev => {
      let updated = [...prev];
      items.forEach(newItem => {
        const foundIndex = updated.findIndex(i => i.productId === newItem.productId);
        if (foundIndex > -1) {
          updated[foundIndex] = {
            ...updated[foundIndex],
            qty: updated[foundIndex].qty + newItem.qty
          };
        } else {
          updated.push({ productId: newItem.productId, qty: newItem.qty });
        }
      });
      return updated;
    });
    showToast(`${items.length} Material hasil RAB berhasil diimpor dengan potongan borongan!`);
    setIsCartOpen(true);
  };

  // Filter products by active category
  const filteredProducts = CATALOG_PRODUCTS.filter(p =>
    activeCategory === 'all' ? true : p.category === activeCategory
  );

  // Category counts
  const categoryCounts = CATALOG_PRODUCTS.reduce((acc, p) => {
    acc['all'] = (acc['all'] || 0) + 1;
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const scrollToCatalog = () => {
    const el = document.getElementById('katalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7faf8] text-[#032417] antialiased selection:bg-[#25b967] selection:text-[#032417]">
      
      {/* Toast Notification Container */}
      {toastMessage && (
        <div className="fixed bottom-24 sm:bottom-8 right-6 z-50 animate-in slide-in-from-bottom duration-300">
          <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-[#032417] text-white font-bold text-xs shadow-2xl border border-emerald-700">
            <CheckCircle2 className="w-4 h-4 text-[#25b967]" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Main Navbar Header */}
      <Navbar
        isB2BMode={isB2BMode}
        onToggleB2B={() => {
          setIsB2BMode(prev => !prev);
          showToast(!isB2BMode ? 'Skema Harga Grosir Aktif (Pesan Banyak Harga Dikurangi)' : 'Skema Harga Eceran Aktif');
        }}
        cartCount={cart.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenRadar={() => setIsRadarOpen(true)}
        onOpenBoQ={() => setIsBoQOpen(true)}
        onOpenProfile={() => setIsProfileOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onOpenBoQ={() => setIsBoQOpen(true)}
        onOpenProfile={() => setIsProfileOpen(true)}
        onScrollToCatalog={scrollToCatalog}
      />

      {/* 3 Core Pillars Slogan Section: Harga Murah, Mudah, Kualitas Terpercaya */}
      <section className="py-12 bg-white border-b border-[#dde8e1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Pilar 1: Harga Murah */}
            <div className="p-6 rounded-3xl bg-[#f7faf8] border border-[#dde8e1] space-y-3 hover:border-emerald-700/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Percent className="w-6 h-6 text-emerald-800" />
              </div>
              <h3 className="text-base font-black text-[#032417]">Harga Murah & Bersaing</h3>
              <p className="text-xs text-[#56685f] leading-relaxed">
                Pasokan langsung dari distributor utama dan pabrik. <strong>Pemesanan dalam jumlah banyak, harga langsung kami kurangi</strong> untuk memaksimalkan efisiensi dana Anda.
              </p>
            </div>

            {/* Pilar 2: Mudah */}
            <div className="p-6 rounded-3xl bg-[#f7faf8] border border-[#dde8e1] space-y-3 hover:border-emerald-700/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <Clock className="w-6 h-6 text-amber-800" />
              </div>
              <h3 className="text-base font-black text-[#032417]">Proses Mudah & Cepat</h3>
              <p className="text-xs text-[#56685f] leading-relaxed">
                Pesan via website atau chat WhatsApp langsung. Tersedia pembayaran di tempat (COD) saat barang sampai di lokasi proyek untuk kenyamanan dan keamanan transaksi.
              </p>
            </div>

            {/* Pilar 3: Kualitas Terpercaya */}
            <div className="p-6 rounded-3xl bg-[#f7faf8] border border-[#dde8e1] space-y-3 hover:border-emerald-700/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-emerald-800" />
              </div>
              <h3 className="text-base font-black text-[#032417]">Kualitas Terpercaya (SNI)</h3>
              <p className="text-xs text-[#56685f] leading-relaxed">
                Besi beton full SNI, semen merk terkemuka (Padang, Tiga Roda, Holcim), pasir cuci bersih, hingga armada dump truck siap antar tepat waktu.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Main Material Catalog Grid */}
      <section id="katalog" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-8">
        
        {/* Catalog Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c7ebd5] text-[#032417] text-xs font-bold mb-2">
              <Boxes className="w-3.5 h-3.5 text-emerald-800" />
              <span>Daftar Harga Resmi PT IHSAN ABDUL PATAH</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#032417] tracking-tight">
              Katalog Material Bangunan & Jasa Terpadu
            </h2>
            <p className="text-xs sm:text-sm text-[#56685f] mt-1">
              Pilih material kebutuhan proyek Anda. Beli satuan eceran atau dapatkan harga borongan dengan potongan spesial.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#56685f] font-medium">Skema Harga:</span>
            <span className={`px-3 py-1 rounded-xl text-xs font-black ${
              isB2BMode ? 'bg-[#032417] text-white' : 'bg-gray-200 text-[#032417]'
            }`}>
              {isB2BMode ? 'HARGA GROSIR (DISCON BORONGAN)' : 'HARGA ECERAN'}
            </span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <CategoryTabs
          activeCategory={activeCategory}
          onSelectCategory={(cat) => setActiveCategory(cat)}
          categoryCounts={categoryCounts}
        />

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isB2BMode={isB2BMode}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {/* Catalog Bottom CTA Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#032417] via-[#0e6e42] to-[#164e33] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-black bg-amber-400 text-[#032417] uppercase tracking-wider">
              Pemesanan Khusus / Proyek
            </span>
            <h3 className="text-xl sm:text-2xl font-black">
              Punya Daftar Belanja Material Sendiri atau Butuh Penawaran RAB?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200">
              Kirimkan rincian kebutuhan material proyek Anda ke WhatsApp kami. Tim sales PT. IAP siap memberikan penawaran harga terbaik dalam hitungan menit.
            </p>
          </div>

          <a
            href={COMPANY_INFO.whatsapp1}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#25D366] text-white hover:bg-[#20ba5a] text-sm font-black shadow-lg transition-all transform active:scale-95"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Kirim Rincian ke WhatsApp</span>
          </a>
        </div>

      </section>

      {/* Interactive Delivery Estimator */}
      <DeliveryEstimator
        selectedLocation={selectedLocation}
        onSelectLocation={(loc) => setSelectedLocation(loc)}
        shippingMethod={shippingMethod}
        onSelectShippingMethod={(method) => setShippingMethod(method)}
        onOpenRadar={() => setIsRadarOpen(true)}
      />

      {/* 4 Langkah Pemesanan Mudah (SOP) */}
      <section className="py-16 bg-[#f7faf8] border-b border-[#dde8e1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-black text-[#032417] tracking-tight">
              4 Langkah Mudah Pemesanan Material di PT. IAP
            </h2>
            <p className="text-xs sm:text-sm text-[#56685f] mt-1.5">
              Proses transparan, cepat, dan aman tanpa birokrasi rumit untuk kelancaran pembangunan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-[#dde8e1] space-y-2.5 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-[#032417] text-[#25b967] flex items-center justify-center font-black text-sm">
                01
              </div>
              <h4 className="text-sm font-bold text-[#032417]">Pilih Material / Jasa</h4>
              <p className="text-xs text-[#56685f] leading-relaxed">
                Tentukan spesifikasi besi beton, semen, pasir, atau baja ringan sesuai kebutuhan proyek Anda.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-[#dde8e1] space-y-2.5 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-[#032417] text-[#25b967] flex items-center justify-center font-black text-sm">
                02
              </div>
              <h4 className="text-sm font-bold text-[#032417]">Konfirmasi Harga & Jadwal</h4>
              <p className="text-xs text-[#56685f] leading-relaxed">
                Tim admin PT. IAP memverifikasi pesanan, diskon borongan, dan kesiapan armada dump truck Lembang.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-[#dde8e1] space-y-2.5 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-[#032417] text-[#25b967] flex items-center justify-center font-black text-sm">
                03
              </div>
              <h4 className="text-sm font-bold text-[#032417]">Pengantaran Armada Truk</h4>
              <p className="text-xs text-[#56685f] leading-relaxed">
                Material dimuat langsung dari Depo Pusat Lembang dan diantar ke alamat proyek Anda dengan cepat.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-[#dde8e1] space-y-2.5 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-[#032417] text-[#25b967] flex items-center justify-center font-black text-sm">
                04
              </div>
              <h4 className="text-sm font-bold text-[#032417]">Pemeriksaan & Serah Terima</h4>
              <p className="text-xs text-[#56685f] leading-relaxed">
                Cek fisik material di lokasi bersama supir kami, dilanjutkan penandatanganan BAST atau pelunasan COD.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onOpenProfile={() => setIsProfileOpen(true)} />

      {/* Floating Sticky WhatsApp Call to Action Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <a
          href={COMPANY_INFO.whatsapp1}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all transform hover:scale-105 active:scale-95"
          title="Chat WhatsApp dengan Tim Penjualan PT. IAP"
        >
          <div className="relative">
            <MessageCircle className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping" />
          </div>
          <div className="hidden sm:flex flex-col text-left pr-1">
            <span className="text-[10px] uppercase font-black tracking-wider text-emerald-100">Hotline Resmi PT. IAP</span>
            <span className="text-xs font-black leading-tight">Chat WhatsApp (0852 6545 8819)</span>
          </div>
        </a>
      </div>

      {/* Modals & Slide-overs */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        isB2BMode={isB2BMode}
        selectedLocation={selectedLocation}
        onSelectLocation={setSelectedLocation}
        shippingMethod={shippingMethod}
        onSelectShippingMethod={setShippingMethod}
        paymentMethod={paymentMethod}
        onSelectPaymentMethod={setPaymentMethod}
        onProceedToInvoice={() => {
          setIsCartOpen(false);
          setIsInvoiceOpen(true);
        }}
      />

      <InvoiceModal
        isOpen={isInvoiceOpen}
        onClose={() => setIsInvoiceOpen(false)}
        cart={cart}
        isB2BMode={isB2BMode}
        selectedLocation={selectedLocation}
        shippingMethod={shippingMethod}
        paymentMethod={paymentMethod}
        onOpenRadar={() => setIsRadarOpen(true)}
      />

      <FleetRadarModal
        isOpen={isRadarOpen}
        onClose={() => setIsRadarOpen(false)}
      />

      <BoQUploadModal
        isOpen={isBoQOpen}
        onClose={() => setIsBoQOpen(false)}
        onImportAllToCart={handleImportBoQItems}
      />

      <CompanyProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />

      <CommandPalette
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(id) => {
          const el = document.getElementById('katalog');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenRadar={() => setIsRadarOpen(true)}
        onOpenBoQ={() => setIsBoQOpen(true)}
        onOpenProfile={() => setIsProfileOpen(true)}
      />

    </div>
  );
}
