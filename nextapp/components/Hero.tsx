'use client';

import React from 'react';
import { COMPANY_INFO } from '@/lib/products';
import { 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Building2,
  Percent,
  Warehouse,
  Sparkles,
  Search,
  MapPin
} from 'lucide-react';
import { HeroDiscountSlider } from '@/components/HeroDiscountSlider';

interface HeroProps {
  onOpenBoQ: () => void;
  onOpenProfile: () => void;
  onScrollToCatalog: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenBoQ, 
  onOpenProfile, 
  onScrollToCatalog 
}) => {
  return (
    <section className="relative overflow-hidden py-10 lg:py-16">
      
      {/* Organic Nature Backdrop Curves */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-[#e3eed9]/70 via-[#eff5eb]/40 to-transparent pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#dbe8d2]/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 left-10 w-80 h-80 bg-[#eef4e8] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Main Grid: Left Value Proposition & Right Bento Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Hero Copywriting */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tagline Badge - Apple Pill Style */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e3eed9] border border-[#cde0c2] text-[#244026] text-xs font-bold shadow-apple-pill">
              <Sparkles className="w-3.5 h-3.5 text-[#2f542c]" />
              <span>PT IHSAN ABDUL PATAH • Distributor Resmi SNI</span>
            </div>

            {/* Core Persuasive Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1b3319] tracking-tight leading-[1.18]">
              Pusat Material SNI &amp; Bor Sumur. Harga Pabrik, Siap Antar.
            </h1>

            {/* Sub-headline / Elevator Pitch */}
            <p className="text-base sm:text-lg text-[#536b51] leading-relaxed max-w-2xl font-medium">
              Sedia Besi Beton, Semen, Pasir Truk, hingga Jasa Sumur Bor. Beli eceran murah, beli borongan langsung potong harga!
            </p>

            {/* Action Call to Action Buttons - Apple Pill Style */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onScrollToCatalog}
                className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#3f6c34] text-white hover:bg-[#33592a] text-xs sm:text-sm font-bold shadow-apple-pill hover:shadow-apple-floating transition-all transform active:scale-95"
              >
                <span>Cek Harga &amp; Pesan</span>
                <ArrowRight className="w-4 h-4 text-[#a8dc98]" />
              </button>

              <a
                href={COMPANY_INFO.whatsapp1}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#284621] hover:bg-[#f4f7f0] border border-[#d7e5ce] text-xs sm:text-sm font-bold shadow-apple hover:shadow-apple-hover transition-all transform active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-[#3f6c34]" />
                <span>Nego Harga Proyek (WA)</span>
              </a>

              <button
                onClick={onOpenProfile}
                className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/80 text-[#3f6c34] hover:bg-white border border-[#e1ebda] text-xs sm:text-sm font-semibold shadow-xs transition-all hover:border-[#3f6c34]"
              >
                <Building2 className="w-4 h-4 text-[#3f6c34]" />
                <span>Profil Resmi PT</span>
              </button>
            </div>

            {/* Trust Pillars */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-semibold text-[#244026]">
              <div className="flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-full border border-[#e1ebda] shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#2f542c]" />
                <span>Jaminan Full SNI</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-full border border-[#e1ebda] shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#2f542c]" />
                <span>Armada Truk Sendiri</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-full border border-[#e1ebda] shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#2f542c]" />
                <span>Bisa COD di Proyek</span>
              </div>
            </div>

          </div>

          {/* Right Live Highlights / Looping 3-Card Discount Carousel */}
          <div className="lg:col-span-5">
            <HeroDiscountSlider onScrollToCatalog={onScrollToCatalog} />
          </div>

        </div>

        {/* Floating Quick Procurement & Search Bar (Inspired by the Reference Image) */}
        <div className="pt-2">
          <div className="bg-[#c2d8b0] rounded-full p-2.5 sm:p-3 shadow-apple-floating border border-[#b2cc9f] flex flex-col sm:flex-row items-center gap-2 max-w-4xl mx-auto">
            
            {/* Input / Option 1 */}
            <div className="w-full sm:flex-1 bg-white rounded-full px-5 py-2.5 flex items-center gap-2.5 shadow-xs">
              <Search className="w-4 h-4 text-[#3f6c34]" />
              <input
                type="text"
                placeholder="Cari semen, besi full SNI, pasir truk, atau granit..."
                className="w-full bg-transparent text-xs sm:text-sm font-medium text-[#1b3319] placeholder:text-[#7d967a] focus:outline-none"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') onScrollToCatalog();
                }}
              />
            </div>

            {/* Input / Option 2: Area Proyek */}
            <div className="w-full sm:w-64 bg-white rounded-full px-5 py-2.5 flex items-center gap-2 shadow-xs">
              <MapPin className="w-4 h-4 text-[#3f6c34]" />
              <span className="text-xs sm:text-sm font-semibold text-[#284621] truncate">
                Depo Lembang &bull; Se-Bandung
              </span>
            </div>

            {/* Action Pill Button */}
            <button
              onClick={onScrollToCatalog}
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#3f6c34] text-white hover:bg-[#33592a] font-bold text-xs sm:text-sm shadow-apple-pill transition-all transform active:scale-95 whitespace-nowrap flex items-center justify-center gap-1.5"
            >
              <span>Eksplorasi Katalog</span>
              <ArrowRight className="w-4 h-4 text-[#a8dc98]" />
            </button>

          </div>
        </div>

      </div>
    </section>
  );
};
