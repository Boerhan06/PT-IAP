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
}

export const Navbar: React.FC<NavbarProps> = ({
  isB2BMode,
  onToggleB2B,
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenRadar,
  onOpenBoQ,
  onOpenProfile
}) => {
  return (
    <>
      {/* Top Floating Announcement Pill */}
      <div className="pt-3 px-4 max-w-7xl mx-auto">
        <div className="bg-[#244026] text-white text-[11px] py-1.5 px-4 rounded-full shadow-apple-pill flex items-center justify-between gap-4 border border-[#385e3a]">
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-[#83c076] animate-pulse flex-shrink-0" />
            <span className="text-[#d8ebd2]">
              <strong className="text-white">Depo Pusat:</strong> Jl. Lulurung II, Lembang, Bandung Barat
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[#d8ebd2] font-medium">
            <span className="font-semibold text-[#f5d565]">Pesan Partai Besar, Harga Langsung Potong!</span>
            <a 
              href={COMPANY_INFO.whatsapp1}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white hover:text-[#a0d995] font-bold transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-[#a0d995]" />
              <span>{COMPANY_INFO.phone1}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Apple-Style Floating Pill Navbar */}
      <header className="sticky top-3 z-40 w-full px-4 sm:px-6 lg:px-8 mt-2 transition-all">
        <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-2xl rounded-full border border-[#e1ebda] shadow-apple-floating px-4 sm:px-6 h-18 flex items-center justify-between gap-4">
          
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
              <Info className="w-3.5 h-3.5 text-[#2f542c]" />
              Profil PT
            </button>
            <a 
              href="#kalkulator" 
              className="px-4 py-2 text-xs font-semibold rounded-full text-[#536b51] hover:text-[#244026] hover:bg-white transition-all"
            >
              Cek Ongkir
            </a>
            <button 
              onClick={onOpenRadar}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full text-[#536b51] hover:text-[#244026] hover:bg-white transition-all"
            >
              <Radio className="w-3.5 h-3.5 text-[#3e7239] animate-pulse" />
              Lacak Truk
            </button>
            <button 
              onClick={onOpenBoQ}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-full bg-[#2f542c] text-white shadow-apple-pill hover:bg-[#233f21] transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Hitung RAB
            </button>
          </nav>

          {/* Actions & Utilities */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Direct WhatsApp Call to Action - Apple Pill Style */}
            <a
              href={COMPANY_INFO.whatsapp1}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#2f542c] text-white hover:bg-[#233f21] px-5 py-2.5 rounded-full font-bold text-xs shadow-apple-pill transition-all transform active:scale-95"
              title="Konsultasi langsung via WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-[#83c076]" />
              <span>Nego WA</span>
            </a>

            {/* B2B Tier Switcher: "Pemesanan Banyak Harga Dikurangi" */}
            <button 
              onClick={onToggleB2B}
              title="Beralih antara Mode Grosir atau Mode Eceran"
              className={`flex items-center gap-2 px-3.5 py-2.5 rounded-full border text-xs font-bold transition-all ${
                isB2BMode 
                  ? 'bg-[#244026] text-white border-[#244026] shadow-apple-pill' 
                  : 'bg-[#f4f7f0] text-[#536b51] border-[#e1ebda] hover:border-[#2f542c]'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isB2BMode ? 'bg-[#83c076] animate-ping' : 'bg-gray-400'}`} />
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
              className="relative flex items-center gap-2 bg-[#2f542c] text-white hover:bg-[#233f21] px-4 py-2.5 rounded-full font-bold text-xs shadow-apple-pill transition-all transform active:scale-95"
            >
              <ShoppingCart className="w-4 h-4 text-[#83c076]" />
              <span className="hidden md:inline">Keranjang</span>
              {cartCount > 0 && (
                <span className="inline-flex items-center justify-center px-2 py-0.5 text-[10px] font-black bg-[#83c076] text-[#1b3319] rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </header>
    </>
  );
};
