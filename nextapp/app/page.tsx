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

      {/* 3 Core Pillars Slogan Section: Apple Bento Card Style */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Pilar 1: Harga Murah */}
          <div className="p-7 rounded-[32px] bg-white border border-[#e1ebda] shadow-apple hover:shadow-apple-hover transition-all duration-300 space-y-3.5 group">
            <div className="w-12 h-12 rounded-2xl bg-[#e3eed9] text-[#2f542c] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
              <Percent className="w-6 h-6 text-[#2f542c]" />
            </div>
            <h3 className="text-base font-extrabold text-[#1b3319]">Harga Grosir Tangan Pertama</h3>
            <p className="text-xs text-[#536b51] leading-relaxed">
              Langsung dari pabrik. Beli banyak, harga otomatis dipotong untuk hemat anggaran proyek Anda.
            </p>
          </div>

          {/* Pilar 2: Mudah */}
          <div className="p-7 rounded-[32px] bg-white border border-[#e1ebda] shadow-apple hover:shadow-apple-hover transition-all duration-300 space-y-3.5 group">
            <div className="w-12 h-12 rounded-2xl bg-[#f5ede2] text-[#8c5c36] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
              <Clock className="w-6 h-6 text-[#8c5c36]" />
            </div>
            <h3 className="text-base font-extrabold text-[#1b3319]">Pesan Kilat &amp; Bisa COD</h3>
            <p className="text-xs text-[#536b51] leading-relaxed">
              Order via WA dalam 1 klik. Barang sampai di proyek dan dicek, baru Anda bayar.
            </p>
          </div>

          {/* Pilar 3: Kualitas Terpercaya */}
          <div className="p-7 rounded-[32px] bg-white border border-[#e1ebda] shadow-apple hover:shadow-apple-hover transition-all duration-300 space-y-3.5 group">
            <div className="w-12 h-12 rounded-2xl bg-[#e3eed9] text-[#2f542c] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-6 h-6 text-[#2f542c]" />
            </div>
            <h3 className="text-base font-extrabold text-[#1b3319]">Mutu Asli Standar SNI</h3>
            <p className="text-xs text-[#536b51] leading-relaxed">
              Besi presisi, semen resmi pabrik, dan takaran pasir 1 truk penuh tanpa curang.
            </p>
          </div>

        </div>
      </section>

      {/* Main Material Catalog Grid */}
      <section id="katalog" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-8">
        
        {/* Catalog Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#e3eed9] text-[#244026] text-xs font-bold mb-2.5 border border-[#cde0c2] shadow-xs">
              <Boxes className="w-3.5 h-3.5 text-[#2f542c]" />
              <span>Daftar Harga Resmi PT IHSAN ABDUL PATAH</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1b3319] tracking-tight">
              Katalog Material &amp; Layanan
            </h2>
            <p className="text-xs sm:text-sm text-[#536b51] mt-1 font-medium">
              Pilih barang dan atur jumlah untuk klaim potongan harga borongan.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#637d61] font-medium">Skema Harga:</span>
            <span className={`px-4 py-1.5 rounded-full text-xs font-black shadow-xs ${
              isB2BMode ? 'bg-[#244026] text-white' : 'bg-white text-[#1b3319] border border-[#e1ebda]'
            }`}>
              {isB2BMode ? 'MODE GROSIR' : 'MODE ECERAN'}
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

        {/* Catalog Bottom CTA Banner - Apple Pill Card Style */}
        <div className="p-8 sm:p-10 rounded-[36px] bg-[#3f6c34] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-apple-floating border border-[#528946]">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="px-3 py-1 rounded-full text-[10px] font-black bg-[#f5d565] text-[#1b3319] uppercase tracking-wider inline-block">
              Pemesanan Khusus / Proyek
            </span>
            <h3 className="text-xl sm:text-2xl font-black">
              Punya RAB Proyek Sendiri?
            </h3>
            <p className="text-xs sm:text-sm text-[#e5f2e0] leading-relaxed">
              Kirim daftar belanja Anda ke WhatsApp. Dapatkan hitungan diskon borongan dalam 5 menit!
            </p>
          </div>

          <a
            href={COMPANY_INFO.whatsapp1}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2.5 px-7 py-4 rounded-full bg-white text-[#284621] hover:bg-[#f4f8f2] text-xs sm:text-sm font-extrabold shadow-apple-pill transition-all transform active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-[#3f6c34]" />
            <span>Kirim RAB via WA</span>
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

      {/* 4 Langkah Pemesanan Mudah (SOP) - Apple Island Card */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white/80 backdrop-blur-xl rounded-[36px] p-8 sm:p-10 border border-[#e1ebda] shadow-apple space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-black text-[#1b3319] tracking-tight">
              4 Langkah Order Cepat
            </h2>
            <p className="text-xs sm:text-sm text-[#536b51] mt-1.5">
              Tanpa birokrasi rumit, material langsung meluncur ke titik proyek.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#f8faf6] p-6 rounded-[28px] border border-[#e4ecde] space-y-3 hover:border-[#3f6c34] transition-all shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#3f6c34] text-white flex items-center justify-center font-black text-xs shadow-apple-pill">
                01
              </div>
              <h4 className="text-sm font-extrabold text-[#1b3319]">Pilih Barang</h4>
              <p className="text-xs text-[#536b51] leading-relaxed">
                Masukkan jumlah ke keranjang atau klik WA.
              </p>
            </div>

            <div className="bg-[#f8faf6] p-6 rounded-[28px] border border-[#e4ecde] space-y-3 hover:border-[#3f6c34] transition-all shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#3f6c34] text-white flex items-center justify-center font-black text-xs shadow-apple-pill">
                02
              </div>
              <h4 className="text-sm font-extrabold text-[#1b3319]">Kunci Harga</h4>
              <p className="text-xs text-[#536b51] leading-relaxed">
                Admin konfirmasi diskon &amp; jadwal truk.
              </p>
            </div>

            <div className="bg-[#f8faf6] p-6 rounded-[28px] border border-[#e4ecde] space-y-3 hover:border-[#3f6c34] transition-all shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#3f6c34] text-white flex items-center justify-center font-black text-xs shadow-apple-pill">
                03
              </div>
              <h4 className="text-sm font-extrabold text-[#1b3319]">Truk Berangkat</h4>
              <p className="text-xs text-[#536b51] leading-relaxed">
                Muat dan kirim langsung dari Depo Lembang.
              </p>
            </div>

            <div className="bg-[#f8faf6] p-6 rounded-[28px] border border-[#e4ecde] space-y-3 hover:border-[#3f6c34] transition-all shadow-xs">
              <div className="w-10 h-10 rounded-full bg-[#3f6c34] text-white flex items-center justify-center font-black text-xs shadow-apple-pill">
                04
              </div>
              <h4 className="text-sm font-extrabold text-[#1b3319]">Cek &amp; Lunas</h4>
              <p className="text-xs text-[#536b51] leading-relaxed">
                Cek fisik di lokasi, tanda tangan, bayar COD.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onOpenProfile={() => setIsProfileOpen(true)} />

      {/* Floating Sticky WhatsApp Call to Action Button - Apple Pill Style */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <a
          href={COMPANY_INFO.whatsapp1}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-5 py-3.5 bg-[#3f6c34] text-white rounded-full shadow-apple-floating hover:bg-[#33592a] border border-[#528946] transition-all transform hover:scale-105 active:scale-95"
          title="Chat WhatsApp dengan Tim Penjualan PT. IAP"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 text-[#a8dc98]" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#a8dc98] rounded-full animate-ping" />
          </div>
          <div className="hidden sm:flex flex-col text-left pr-1">
            <span className="text-xs font-bold leading-tight">Order / Nego Cepat &bull; Chat Sales Sekarang</span>
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
