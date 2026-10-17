'use client';

import React from 'react';
import { IAPLogo } from '@/components/IAPLogo';
import { COMPANY_INFO } from '@/lib/products';
import { 
  Search, 
  ShoppingCart, 
  Radio, 
  Sparkles,
  PhoneCall,
  Info,
  MessageCircle
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
  const [isOrderMenuOpen, setIsOrderMenuOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOrderMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-xl border-b border-[#e2ebd9] shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3">
        
        {/* Official IAP Logo & Wordmark */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2 hover:opacity-95 transition-opacity">
            <IAPLogo size={38} showText={true} />
          </a>
        </div>

        {/* Central Navigation Pills */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#f4f7f0] p-1.5 rounded-full border border-[#e1ebda]">
          <a 
            href="#katalog" 
            className="px-4 py-2 text-xs font-bold rounded-full text-[#244026] hover:bg-white transition-all shadow-xs"
          >
            Katalog
          </a>
          
          <button 
            onClick={onOpenProfile}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full text-[#536b51] hover:text-[#244026] hover:bg-white transition-all"
          >
            <Info className="w-3.5 h-3.5 text-[#3f6c34]" />
            Profil PT
          </button>

          {/* Unified 'Pesanan' Dropdown (Cek Ongkir, Lacak Truk, Hitung RAB) */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOrderMenuOpen(!isOrderMenuOpen)}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-full transition-all ${
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
                  className="w-full text-left flex items-start gap-3 p-2.5 rounded-2xl hover:bg-[#f4f7f0] transition-colors group"
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
                  className="w-full text-left flex items-start gap-3 p-2.5 rounded-2xl hover:bg-[#f4f7f0] transition-colors group"
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

          {/* Contact Us (Renamed from Nego WA) */}
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

        {/* Actions & Utilities: Mode Grosir, Search, Cart, Login, Register */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* B2B Tier Switcher: "Pemesanan Banyak Harga Dikurangi" */}
          <button 
            onClick={onToggleB2B}
            title="Beralih antara Mode Grosir atau Mode Eceran"
            className={`hidden sm:flex items-center gap-2 px-3.5 py-2.5 rounded-full border text-xs font-bold transition-all ${
              isB2BMode 
                ? 'bg-[#3f6c34] text-white border-[#3f6c34] shadow-apple-pill' 
                : 'bg-[#f4f7f0] text-[#536b51] border-[#e1ebda] hover:border-[#3f6c34]'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${isB2BMode ? 'bg-[#a8dc98] animate-ping' : 'bg-gray-400'}`} />
            <span>{isB2BMode ? 'Mode Grosir' : 'Mode Eceran'}</span>
          </button>

          {/* Quick Search Ctrl+K */}
          <button
            onClick={onOpenSearch}
            className="p-2.5 rounded-full text-[#244026] hover:bg-[#f4f7f0] border border-[#e1ebda] transition-all"
            title="Cari Material & Layanan (Ctrl+K)"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Smart Checkout Cart Drawer Trigger */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2 bg-[#f4f7f0] text-[#244026] hover:bg-white border border-[#e1ebda] px-3.5 py-2.5 rounded-full font-bold text-xs shadow-xs transition-all transform active:scale-95"
          >
            <ShoppingCart className="w-4 h-4 text-[#3f6c34]" />
            <span className="hidden xl:inline">Keranjang</span>
            {cartCount > 0 && (
              <span className="inline-flex items-center justify-center px-2 py-0.5 text-[10px] font-black bg-[#3f6c34] text-white rounded-full">
                {cartCount}
              </span>
            )}
          </button>

          {/* Divider */}
          <div className="h-6 w-px bg-[#dce8d5] hidden sm:block" />

          {/* Login & Register Features */}
          <button
            onClick={onOpenLogin}
            className="px-3.5 py-2 rounded-full text-xs font-bold text-[#284621] hover:bg-[#f4f7f0] transition-all"
          >
            Login
          </button>

          <button
            onClick={onOpenRegister}
            className="px-4 py-2.5 rounded-full bg-[#3f6c34] text-white hover:bg-[#33592a] font-bold text-xs shadow-apple-pill transition-all transform active:scale-95 whitespace-nowrap"
          >
            Daftar
          </button>
        </div>

      </div>
    </header>
  );
};
