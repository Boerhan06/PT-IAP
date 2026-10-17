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
      {/* Top Banner Notice - Lembang Bandung Barat */}
      <div className="bg-[#032417] text-white text-[11px] py-1.5 px-4 border-b border-emerald-950">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-[#25b967] animate-pulse flex-shrink-0" />
            <span className="text-emerald-200">
              <strong>Depo Pusat:</strong> Jl. Lulurung II, Lembang, Bandung Barat
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-emerald-300 font-medium">
            <span className="font-semibold text-amber-300">Pesan Partai Besar, Harga Langsung Potong!</span>
            <a 
              href={COMPANY_INFO.whatsapp1}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-white hover:text-[#25b967] font-bold"
            >
              <PhoneCall className="w-3 h-3 text-[#25b967]" />
              <span>{COMPANY_INFO.phone1}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar Header */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 border-b border-[#dde8e1] shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Official IAP Logo & Wordmark */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2 hover:opacity-95 transition-opacity">
              <IAPLogo size={42} showText={true} />
            </a>
          </div>

          {/* Central Navigation Pills */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-[#f0f5f2] p-1.5 rounded-full border border-[#d6e3db]">
            <a 
              href="#katalog" 
              className="px-4 py-1.5 text-xs font-semibold rounded-full text-[#032417] hover:bg-white transition-all shadow-xs"
            >
              Katalog
            </a>
            <button 
              onClick={onOpenProfile}
              className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-full text-[#56685f] hover:text-[#032417] hover:bg-white transition-all"
            >
              <Info className="w-3.5 h-3.5 text-emerald-700" />
              Profil PT
            </button>
            <a 
              href="#kalkulator" 
              className="px-4 py-1.5 text-xs font-semibold rounded-full text-[#56685f] hover:text-[#032417] hover:bg-white transition-all"
            >
              Cek Ongkir
            </a>
            <button 
              onClick={onOpenRadar}
              className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-full text-[#56685f] hover:text-[#032417] hover:bg-white transition-all"
            >
              <Radio className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
              Lacak Truk
            </button>
            <button 
              onClick={onOpenBoQ}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-full bg-gradient-to-r from-emerald-700 to-teal-800 text-white shadow-xs hover:opacity-95 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Hitung RAB
            </button>
          </nav>

          {/* Actions & Utilities */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Direct WhatsApp Call to Action */}
            <a
              href={COMPANY_INFO.whatsapp1}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#25D366] text-white hover:bg-[#20ba5a] px-3.5 py-2 rounded-xl font-bold text-xs shadow-xs transition-all"
              title="Konsultasi langsung via WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Nego WA</span>
            </a>

            {/* B2B Tier Switcher: "Pemesanan Banyak Harga Dikurangi" */}
            <button 
              onClick={onToggleB2B}
              title="Beralih antara Mode Grosir atau Mode Eceran"
              className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-bold transition-all shadow-xs ${
                isB2BMode 
                  ? 'bg-[#032417] text-white border-[#032417] shadow-emerald-950/10' 
                  : 'bg-white text-[#56685f] border-[#d6e3db] hover:border-[#032417]'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isB2BMode ? 'bg-[#25b967] animate-ping' : 'bg-gray-400'}`} />
              <span>{isB2BMode ? 'Mode Grosir' : 'Mode Eceran'}</span>
            </button>

            {/* Quick Search Ctrl+K */}
            <button
              onClick={onOpenSearch}
              className="p-2.5 rounded-xl text-[#032417] hover:bg-[#f0f5f2] border border-transparent hover:border-[#d6e3db] transition-all"
              title="Cari Material & Layanan (Ctrl+K)"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Smart Checkout Cart Drawer Trigger */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 bg-[#032417] text-white hover:bg-[#164e33] px-3.5 py-2.5 rounded-xl font-bold text-xs shadow-md shadow-emerald-950/20 transition-all transform active:scale-95"
            >
              <ShoppingCart className="w-4 h-4 text-[#25b967]" />
              <span className="hidden md:inline">Keranjang</span>
              {cartCount > 0 && (
                <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-[11px] font-black bg-[#25b967] text-[#032417] rounded-full">
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
