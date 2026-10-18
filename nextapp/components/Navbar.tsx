'use client';

import React, { useState, useEffect, useRef } from 'react';
import { IAPLogo } from '@/components/IAPLogo';
import { COMPANY_INFO } from '@/lib/products';
import { 
  Search, 
  ShoppingCart, 
  Radio, 
  Sparkles,
  PhoneCall,
  Info,
  MessageCircle,
  Menu,
  X,
  Building2,
  Boxes,
  ArrowRight
} from 'lucide-react';

interface NavbarProps {
  isB2BMode: boolean;
  onToggleB2B: () => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenRadar: () => void;
  onOpenBoQ: () => void;
  onOpenProfile: () => void;
  onOpenLogin: () => void;
  onOpenRegister: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isB2BMode,
  onToggleB2B,
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenRadar,
  onOpenBoQ,
  onOpenProfile,
  onOpenLogin,
  onOpenRegister
}) => {
  const [isOrderMenuOpen, setIsOrderMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOrderMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll or close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-xl border-b border-[#e2ebd9] shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Official IAP Logo & Wordmark */}
        <div className="flex items-center gap-2 shrink-0">
          <a href="#" className="flex items-center hover:opacity-95 transition-opacity">
            <span className="sm:hidden">
              <IAPLogo size={32} showText={true} />
            </span>
            <span className="hidden sm:inline-flex">
              <IAPLogo size={38} showText={true} />
            </span>
          </a>
        </div>

        {/* Central Navigation Pills (Desktop Only) */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#f4f7f0] p-1.5 rounded-full border border-[#e1ebda]">
          <a 
            href="#katalog" 
            className="px-4 py-2 text-xs font-bold rounded-full text-[#244026] hover:bg-white transition-all shadow-xs"
          >
            Katalog
          </a>
          
          <button 
            onClick={onOpenProfile}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full text-[#536b51] hover:text-[#244026] hover:bg-white transition-all cursor-pointer"
          >
            <Info className="w-3.5 h-3.5 text-[#3f6c34]" />
            Profil PT
          </button>

          {/* Unified 'Pesanan' Dropdown (Cek Ongkir, Lacak Truk, Hitung RAB) */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOrderMenuOpen(!isOrderMenuOpen)}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                isOrderMenuOpen
                  ? 'bg-white text-[#1b3319] shadow-apple-pill'
                  : 'text-[#536b51] hover:text-[#244026] hover:bg-white'
              }`}
            >
              <span>Pesanan</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#3f6c34]" />
              <svg 
                className={`w-3.5 h-3.5 transition-transform duration-200 ${isOrderMenuOpen ? 'rotate-180 text-[#3f6c34]' : 'text-[#7d967a]'}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Apple Styled Floating Dropdown Menu */}
            {isOrderMenuOpen && (
              <div className="absolute left-0 mt-3 w-72 bg-white/95 backdrop-blur-2xl rounded-[24px] border border-[#dce8d5] shadow-apple-floating p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <a
                  href="#kalkulator"
                  onClick={() => setIsOrderMenuOpen(false)}
                  className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-[#f4f7f0] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#e3eed9] flex items-center justify-center text-[#3f6c34] flex-shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1b3319] group-hover:text-[#3f6c34]">
                      Cek Tarif &amp; Ongkir
                    </div>
                    <div className="text-[11px] text-[#536b51] leading-tight mt-0.5">
                      Hitung ongkir armada dump truck ke titik proyek
                    </div>
                  </div>
                </a>

                <button
                  onClick={() => {
                    setIsOrderMenuOpen(false);
                    onOpenRadar();
                  }}
                  className="w-full text-left flex items-start gap-3 p-2.5 rounded-2xl hover:bg-[#f4f7f0] transition-colors group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#e3eed9] flex items-center justify-center text-[#3f6c34] flex-shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                    <Radio className="w-4 h-4 text-[#3f6c34] animate-pulse" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1b3319] group-hover:text-[#3f6c34]">
                      Lacak Armada Truk GPS
                    </div>
                    <div className="text-[11px] text-[#536b51] leading-tight mt-0.5">
                      Pantau posisi fisik pengiriman barang real-time
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => {
                    setIsOrderMenuOpen(false);
                    onOpenBoQ();
                  }}
                  className="w-full text-left flex items-start gap-3 p-2.5 rounded-2xl hover:bg-[#f4f7f0] transition-colors group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#e3eed9] flex items-center justify-center text-[#3f6c34] flex-shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1b3319] group-hover:text-[#3f6c34]">
                      Hitung RAB Proyek (BoQ)
                    </div>
                    <div className="text-[11px] text-[#536b51] leading-tight mt-0.5">
                      Upload file RAB / BoQ &amp; hitung estimasi anggaran
                    </div>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Contact Us */}
          <a
            href={COMPANY_INFO.whatsapp1}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full text-[#536b51] hover:text-[#244026] hover:bg-white transition-all"
            title="Hubungi Customer Support & Tim Penjualan"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#3f6c34]" />
            <span>Contact Us</span>
          </a>
        </nav>

        {/* Actions & Utilities: Mode Grosir, Search, Cart, Login, Register, Mobile Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* B2B Tier Switcher (Desktop) */}
          <button 
            onClick={onToggleB2B}
            title="Beralih antara Mode Grosir atau Mode Eceran"
            className={`hidden md:flex items-center gap-2 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-full border text-xs font-bold transition-all cursor-pointer ${
              isB2BMode 
                ? 'bg-[#3f6c34] text-white border-[#3f6c34] shadow-apple-pill' 
                : 'bg-[#f4f7f0] text-[#536b51] border-[#e1ebda] hover:border-[#3f6c34]'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${isB2BMode ? 'bg-[#a8dc98] animate-ping' : 'bg-gray-400'}`} />
            <span>{isB2BMode ? 'Grosir' : 'Eceran'}</span>
          </button>

          {/* Quick Search Ctrl+K */}
          <button
            onClick={onOpenSearch}
            className="p-2 sm:p-2.5 rounded-full text-[#244026] hover:bg-[#f4f7f0] border border-[#e1ebda] transition-all bg-white shadow-xs cursor-pointer"
            title="Cari Material & Layanan (Ctrl+K)"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Smart Checkout Cart Drawer Trigger */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-1.5 sm:gap-2 bg-[#f4f7f0] text-[#244026] hover:bg-white border border-[#e1ebda] px-2.5 sm:px-3.5 py-1.5 sm:py-2.5 rounded-full font-bold text-xs shadow-xs transition-all transform active:scale-95 cursor-pointer"
          >
            <ShoppingCart className="w-4 h-4 text-[#3f6c34]" />
            <span className="hidden xl:inline">Keranjang</span>
            {cartCount > 0 && (
              <span className="inline-flex items-center justify-center px-1.5 py-0.2 sm:px-2 sm:py-0.5 text-[10px] font-black bg-[#3f6c34] text-white rounded-full min-w-[18px]">
                {cartCount}
              </span>
            )}
          </button>

          {/* Desktop Login & Register Buttons */}
          <div className="hidden sm:flex items-center gap-1.5">
            <button
              onClick={onOpenLogin}
              className="px-3.5 py-2 rounded-full text-xs font-bold text-[#284621] hover:bg-[#f4f7f0] transition-all cursor-pointer"
            >
              Login
            </button>

            <button
              onClick={onOpenRegister}
              className="px-4 py-2 sm:py-2.5 rounded-full bg-[#3f6c34] text-white hover:bg-[#33592a] font-bold text-xs shadow-apple-pill transition-all transform active:scale-95 whitespace-nowrap cursor-pointer"
            >
              Daftar
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-[#1b3319] hover:bg-[#f4f7f0] border border-[#e1ebda] bg-white transition-all shadow-xs cursor-pointer focus:outline-none"
            aria-label="Menu Navigasi Mobile"
          >
            {isMobileMenuOpen ? (
              <X className="w-4 h-4 text-[#1b3319]" />
            ) : (
              <Menu className="w-4 h-4 text-[#1b3319]" />
            )}
          </button>
        </div>

      </div>

      {/* Mobile Animated Dropdown Drawer Panel */}
      {isMobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="lg:hidden border-t border-[#e2ebd9] bg-white/98 backdrop-blur-2xl px-4 py-5 space-y-4 shadow-apple-floating animate-in slide-in-from-top-3 duration-200"
        >
          {/* Quick Wholesale Toggle Banner */}
          <div 
            onClick={onToggleB2B}
            className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
              isB2BMode 
                ? 'bg-[#e7f1e0] border-[#c2dcb3] text-[#1b3319]' 
                : 'bg-[#f8faf6] border-[#e2ebd9] text-[#536b51]'
            }`}
          >
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${isB2BMode ? 'bg-[#3f6c34] animate-ping' : 'bg-gray-400'}`} />
                <span className="text-xs font-black text-[#1b3319]">
                  {isB2BMode ? 'Skema Borongan / Grosir (Aktif)' : 'Skema Eceran (Aktif)'}
                </span>
              </div>
              <p className="text-[11px] text-[#536b51]">
                {isB2BMode ? 'Diskon proyek & harga tangan pertama diterapkan.' : 'Klik untuk mengaktifkan potongan partai besar.'}
              </p>
            </div>
            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
              isB2BMode ? 'bg-[#3f6c34] text-white' : 'bg-[#e2ebd9] text-[#244026]'
            }`}>
              Ubah
            </span>
          </div>

          {/* Navigation Items Grid */}
          <div className="grid grid-cols-2 gap-2">
            <a
              href="#katalog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#f8faf6] border border-[#e4ecde] hover:bg-[#eef5ea] transition-all text-xs font-bold text-[#1b3319]"
            >
              <Boxes className="w-4 h-4 text-[#3f6c34] shrink-0" />
              <span>Katalog Produk</span>
            </a>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenProfile();
              }}
              className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#f8faf6] border border-[#e4ecde] hover:bg-[#eef5ea] transition-all text-xs font-bold text-[#1b3319] text-left cursor-pointer"
            >
              <Building2 className="w-4 h-4 text-[#3f6c34] shrink-0" />
              <span>Profil Resmi PT</span>
            </button>

            <a
              href="#kalkulator"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#f8faf6] border border-[#e4ecde] hover:bg-[#eef5ea] transition-all text-xs font-bold text-[#1b3319]"
            >
              <PhoneCall className="w-4 h-4 text-[#3f6c34] shrink-0" />
              <span>Cek Ongkir Truk</span>
            </a>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenRadar();
              }}
              className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#f8faf6] border border-[#e4ecde] hover:bg-[#eef5ea] transition-all text-xs font-bold text-[#1b3319] text-left cursor-pointer"
            >
              <Radio className="w-4 h-4 text-[#3f6c34] shrink-0 animate-pulse" />
              <span>Lacak GPS Truk</span>
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBoQ();
              }}
              className="col-span-2 flex items-center justify-between p-3 rounded-2xl bg-[#eef4ea] border border-[#d2e5ca] hover:bg-[#e3eed9] transition-all text-xs font-bold text-[#1b3319] text-left cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Upload RAB / BoQ Proyek (Hitung Anggaran Otomatis)</span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#3f6c34] shrink-0" />
            </button>
          </div>

          {/* Quick WhatsApp Contact */}
          <a
            href={COMPANY_INFO.whatsapp1}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-white border border-[#cbe0c1] text-[#244026] text-xs font-bold hover:bg-[#f4f7f0] transition-all shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-[#3f6c34]" />
            <span>Chat WhatsApp Customer Service</span>
          </a>

          {/* Login & Register Buttons on Mobile */}
          <div className="grid grid-cols-2 gap-2 pt-1 border-t border-[#eef3ea]">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="w-full py-2.5 rounded-full border border-[#d2e2cd] text-xs font-bold text-[#244026] hover:bg-[#f4f7f0] transition-all cursor-pointer"
            >
              Login Masuk
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full py-2.5 rounded-full bg-[#3f6c34] text-white hover:bg-[#33592a] text-xs font-bold shadow-apple-pill transition-all cursor-pointer"
            >
              Daftar Rekanan
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
