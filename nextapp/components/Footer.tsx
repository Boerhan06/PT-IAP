'use client';

import React from 'react';
import { COMPANY_INFO } from '@/lib/products';
import { IAPLogo } from '@/components/IAPLogo';
import { 
  ShieldCheck, 
  Phone, 
  MapPin, 
  FileCheck,
  MessageCircle,
  Truck,
  Wrench,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface FooterProps {
  onOpenProfile?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenProfile }) => {
  return (
    <footer className="bg-[#1b341d] text-white pt-20 pb-32 sm:pb-36 rounded-t-[40px] border-t border-[#2e5431] shadow-apple-floating mt-12 relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2a4e2d]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Main 12-Column Structured Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Column 1: Company Identity & Legal (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-2.5 rounded-2xl inline-block backdrop-blur-md border border-white/15">
                <IAPLogo size={36} showText={false} />
              </div>
              <div>
                <span className="font-extrabold text-base tracking-tight text-white block">
                  {COMPANY_INFO.name}
                </span>
                <span className="text-xs font-semibold text-white/80">
                  {COMPANY_INFO.shortName} — Perdagangan Umum &amp; Jasa
                </span>
              </div>
            </div>

            <p className="text-xs text-white/80 leading-relaxed max-w-sm">
              &ldquo;{COMPANY_INFO.tagline}&rdquo;. Melayani pengadaan material proyek konstruksi, suplier grosir, dan pengeboran sumur air bersih dengan integritas terpercaya.
            </p>

            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <ShieldCheck className="w-4 h-4 text-[#8ed878]" />
                <span>Kualitas Terpercaya &amp; Jaminan Mutu Full SNI</span>
              </div>
              <p className="text-[11px] text-white/70 leading-relaxed">
                Dilengkapi Surat Jalan resmi, nota tagihan BAST, dan sistem pembayaran COD di proyek.
              </p>
            </div>

            {onOpenProfile && (
              <button
                onClick={onOpenProfile}
                className="inline-flex items-center gap-2 text-xs text-white font-bold hover:underline transition-all bg-white/10 hover:bg-white/15 px-4 py-2 rounded-full border border-white/15"
              >
                <span>Lihat Profil PT, Legalitas &amp; Visi Misi</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#8ed878]" />
              </button>
            )}
          </div>

          {/* Column 2: 9 Lini Bisnis & Jasa Resmi (5 cols - Structured 2-column sub-grid) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <h4 className="text-xs font-black uppercase tracking-wider text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8ed878]" />
                <span>9 Lini Produk &amp; Jasa Resmi</span>
              </h4>
              <span className="text-[10px] text-white/60 bg-white/10 px-2 py-0.5 rounded-full">
                Sesuai Akta Notaris
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/85">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2 hover:bg-white/10 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8ed878] mt-1.5 flex-shrink-0" />
                <div>
                  <strong className="block text-white text-[11px]">Material Bangunan</strong>
                  <span className="text-[10px] text-white/70">Besi, semen, pasir &amp; baja</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2 hover:bg-white/10 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8ed878] mt-1.5 flex-shrink-0" />
                <div>
                  <strong className="block text-white text-[11px]">Pengeboran Sumur</strong>
                  <span className="text-[10px] text-white/70">Sumur air bersih geolistrik</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2 hover:bg-white/10 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8ed878] mt-1.5 flex-shrink-0" />
                <div>
                  <strong className="block text-white text-[11px]">Jasa Boga / Katering</strong>
                  <span className="text-[10px] text-white/70">Konsumsi proyek &amp; kantor</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2 hover:bg-white/10 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8ed878] mt-1.5 flex-shrink-0" />
                <div>
                  <strong className="block text-white text-[11px]">Pupuk &amp; Agro Pertanian</strong>
                  <span className="text-[10px] text-white/70">Agro kimia &amp; pupuk organik</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2 hover:bg-white/10 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8ed878] mt-1.5 flex-shrink-0" />
                <div>
                  <strong className="block text-white text-[11px]">Sayur &amp; Buah Segar</strong>
                  <span className="text-[10px] text-white/70">Hasil bumi segar Lembang</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2 hover:bg-white/10 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8ed878] mt-1.5 flex-shrink-0" />
                <div>
                  <strong className="block text-white text-[11px]">Alat Tulis Kantor (ATK)</strong>
                  <span className="text-[10px] text-white/70">Perlengkapan gambar teknik</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2 hover:bg-white/10 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8ed878] mt-1.5 flex-shrink-0" />
                <div>
                  <strong className="block text-white text-[11px]">Alat Lab &amp; Farmasi</strong>
                  <span className="text-[10px] text-white/70">Peralatan instrumen lab</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2 hover:bg-white/10 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8ed878] mt-1.5 flex-shrink-0" />
                <div>
                  <strong className="block text-white text-[11px]">Obat &amp; Kesehatan</strong>
                  <span className="text-[10px] text-white/70">Produk medis &amp; obat resmi</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2 sm:col-span-2 hover:bg-white/10 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8ed878] mt-1.5 flex-shrink-0" />
                <div>
                  <strong className="block text-white text-[11px]">Pakaian &amp; Seragam Kerja</strong>
                  <span className="text-[10px] text-white/70">APD keselamatan kerja proyek &amp; seragam korporat</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Depo, Kontak & Layanan Cepat (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-white pb-2 border-b border-white/10 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#8ed878]" />
              <span>Kantor Pusat &amp; Depo</span>
            </h4>

            <div className="space-y-3 text-xs text-white/80">
              <p className="text-[11px] leading-relaxed text-white/90">
                {COMPANY_INFO.address}
              </p>

              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[10px] uppercase font-bold text-white block">
                  Jangkauan Armada Pengiriman:
                </span>
                <p className="text-[11px] text-white/80">
                  Lembang, Kota Bandung, Cimahi, Padalarang, Batujajar, Soreang, hingga seluruh Jawa Barat &amp; Kargo.
                </p>
              </div>

              <div className="space-y-1.5 pt-1">
                <span className="text-[10px] text-white/60 uppercase block font-bold">
                  Hotline &amp; WhatsApp:
                </span>
                <div className="space-y-1">
                  <a 
                    href={COMPANY_INFO.whatsapp1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono font-bold text-white text-xs hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#8ed878]" />
                    <span>{COMPANY_INFO.phone1}</span>
                  </a>
                  <a 
                    href={COMPANY_INFO.whatsapp2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono font-bold text-white text-xs hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#8ed878]" />
                    <span>{COMPANY_INFO.phone2}</span>
                  </a>
                </div>
              </div>

              <div className="pt-1">
                <a
                  href={COMPANY_INFO.whatsapp1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] text-white hover:bg-[#20ba5a] font-bold text-xs shadow-apple-pill transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Konsultasi WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6 text-[11px]">
            <span className="hover:text-white transition-colors cursor-pointer">Syarat &amp; Ketentuan</span>
            <span className="hover:text-white transition-colors cursor-pointer">SOP Pengantaran Truk</span>
            <span className="hover:text-white transition-colors cursor-pointer">Kebijakan Privasi</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
