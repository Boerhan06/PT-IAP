'use client';

import React from 'react';
import { COMPANY_INFO } from '@/lib/products';
import { 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  FileSpreadsheet,
  Building2,
  Percent,
  Warehouse,
  Sparkles
} from 'lucide-react';

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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#eaf2ed]/90 via-white to-white py-14 lg:py-20 border-b border-[#dde8e1]">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Hero Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c7ebd5] border border-emerald-300 text-[#032417] text-xs font-bold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-800" />
              <span>PT IHSAN ABDUL PATAH • Distributor Resmi SNI</span>
            </div>

            {/* Core Persuasive Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#032417] tracking-tight leading-[1.18]">
              Pusat Material SNI & Bor Sumur. Harga Pabrik, Siap Antar.
            </h1>

            {/* Sub-headline / Elevator Pitch */}
            <p className="text-base sm:text-lg text-[#56685f] leading-relaxed max-w-2xl font-medium">
              Sedia Besi Beton, Semen, Pasir Truk, hingga Jasa Sumur Bor. Beli eceran murah, beli borongan langsung potong harga!
            </p>

            {/* Action Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={onScrollToCatalog}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#032417] text-white hover:bg-[#164e33] text-sm font-extrabold shadow-lg shadow-emerald-950/20 transition-all transform active:scale-95"
              >
                <span>Cek Harga & Pesan</span>
                <ArrowRight className="w-4 h-4 text-[#25b967]" />
              </button>

              <a
                href={COMPANY_INFO.whatsapp1}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] text-white hover:bg-[#20ba5a] text-sm font-bold shadow-md transition-all transform active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Nego Harga Proyek (WA)</span>
              </a>

              <button
                onClick={onOpenProfile}
                className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-white text-[#032417] hover:bg-[#f0f5f2] border border-[#cfdfd6] text-sm font-bold shadow-xs transition-all hover:border-[#032417]"
              >
                <Building2 className="w-4 h-4 text-emerald-700" />
                <span>Profil Resmi PT</span>
              </button>
            </div>

            {/* Trust Pillars */}
            <div className="pt-3 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#032417]">
              <div className="flex items-center gap-1.5 bg-[#f4f7f5] px-3 py-1.5 rounded-lg border border-[#dde8e1]">
                <CheckCircle2 className="w-4 h-4 text-[#25b967]" />
                <span>Jaminan Full SNI</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#f4f7f5] px-3 py-1.5 rounded-lg border border-[#dde8e1]">
                <CheckCircle2 className="w-4 h-4 text-[#25b967]" />
                <span>Armada Truk Sendiri</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#f4f7f5] px-3 py-1.5 rounded-lg border border-[#dde8e1]">
                <CheckCircle2 className="w-4 h-4 text-[#25b967]" />
                <span>Bisa COD di Proyek</span>
              </div>
            </div>

          </div>

          {/* Right Live Highlights / Trust Card */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl border border-[#dde8e1] p-6 sm:p-7 shadow-xl space-y-5">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#eef3f0]">
                <div>
                  <h3 className="text-lg font-black text-[#032417]">Keunggulan PT. IAP</h3>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  Siap Kirim
                </div>
              </div>

              {/* Grid 4 Key Strengths */}
              <div className="grid grid-cols-2 gap-3.5">
                <div className="p-3.5 rounded-2xl bg-[#f7faf8] border border-[#e2ebe5]">
                  <div className="flex items-center gap-1.5 text-emerald-800 text-xs font-bold mb-1">
                    <Percent className="w-4 h-4 text-emerald-600" />
                    <span>Harga Pabrik</span>
                  </div>
                  <div className="text-[11px] text-[#56685f]">Diskon otomatis partai besar</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#f7faf8] border border-[#e2ebe5]">
                  <div className="flex items-center gap-1.5 text-emerald-800 text-xs font-bold mb-1">
                    <Warehouse className="w-4 h-4 text-emerald-600" />
                    <span>Stok Ready</span>
                  </div>
                  <div className="text-[11px] text-[#56685f]">Muat langsung dari Lembang</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#f7faf8] border border-[#e2ebe5]">
                  <div className="flex items-center gap-1.5 text-emerald-800 text-xs font-bold mb-1">
                    <Truck className="w-4 h-4 text-emerald-600" />
                    <span>Armada Sendiri</span>
                  </div>
                  <div className="text-[11px] text-[#56685f]">Dump truck & kargo nasional</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#f7faf8] border border-[#e2ebe5]">
                  <div className="flex items-center gap-1.5 text-emerald-800 text-xs font-bold mb-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>9 Lini Bisnis</span>
                  </div>
                  <div className="text-[11px] text-[#56685f]">Material, bor sumur & katering</div>
                </div>
              </div>

              {/* Direct Quick WhatsApp Banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#032417] to-[#0e6e42] text-white flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold block text-sm">Butuh Dikirim Hari Ini?</span>
                  <span className="text-emerald-200 text-xs">Konfirmasi jadwal truk sekarang.</span>
                </div>
                <a
                  href={COMPANY_INFO.whatsapp1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#25D366] text-white font-black text-xs hover:bg-[#20ba5a] transition-all flex items-center gap-1 shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat Admin</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
