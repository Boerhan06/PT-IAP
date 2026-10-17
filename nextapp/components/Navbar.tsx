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
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-xl border-b border-[#e2ebd9] shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
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
            <Radio className="w-3.5 h-3.5 text-[#3f6c34] animate-pulse" />
            Lacak Truk
          </button>
          <button 
            onClick={onOpenBoQ}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-full bg-[#3f6c34] text-white shadow-apple-pill hover:bg-[#33592a] transition-all"
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
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#3f6c34] text-white hover:bg-[#33592a] px-5 py-2.5 rounded-full font-bold text-xs shadow-apple-pill transition-all transform active:scale-95"
            title="Konsultasi langsung via WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-[#a8dc98]" />
            <span>Nego WA</span>
          </a>

          {/* B2B Tier Switcher: "Pemesanan Banyak Harga Dikurangi" */}
          <button 
            onClick={onToggleB2B}
            title="Beralih antara Mode Grosir atau Mode Eceran"
            className={`flex items-center gap-2 px-3.5 py-2.5 rounded-full border text-xs font-bold transition-all ${
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
            className="relative flex items-center gap-2 bg-[#3f6c34] text-white hover:bg-[#33592a] px-4 py-2.5 rounded-full font-bold text-xs shadow-apple-pill transition-all transform active:scale-95"
          >
            <ShoppingCart className="w-4 h-4 text-[#a8dc98]" />
            <span className="hidden md:inline">Keranjang</span>
            {cartCount > 0 && (
              <span className="inline-flex items-center justify-center px-2 py-0.5 text-[10px] font-black bg-[#a8dc98] text-[#1b3b16] rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
};
