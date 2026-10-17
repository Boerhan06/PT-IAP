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
    <footer className="bg-[#032417] text-white pt-16 pb-12 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Bio */}
          <div className="space-y-4">
            <div className="bg-white/10 p-3 rounded-2xl inline-block">
              <IAPLogo size={36} showText={false} />
            </div>
            <div>
              <span className="font-black text-base tracking-tight text-white block">
                {COMPANY_INFO.name}
              </span>
              <span className="text-xs font-bold text-emerald-400">
                {COMPANY_INFO.shortName} — Perdagangan Umum & Jasa
              </span>
            </div>
            <p className="text-xs text-emerald-200/80 leading-relaxed">
              &ldquo;{COMPANY_INFO.tagline}&rdquo;
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-[#25b967]">
              <ShieldCheck className="w-4 h-4" />
              <span>Kualitas Terpercaya & Pelayanan Ramah</span>
            </div>

            {onOpenProfile && (
              <button
                onClick={onOpenProfile}
                className="inline-flex items-center gap-1.5 text-xs text-amber-300 font-bold hover:underline pt-1"
              >
                <span>Baca Visi, Misi & Legalitas Kami</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* 9 Lini Bisnis & Jasa Resmi (Dari Company Profile) */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-emerald-400">
              Lini Produk & Jasa Resmi
            </h4>
            <ul className="grid grid-cols-1 gap-1.5 text-xs text-emerald-200/80">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#25b967]" />
                <span>1. Material Bangunan (Besi, Semen, Pasir)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#25b967]" />
                <span>2. Pengeboran Sumur Air Bersih</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#25b967]" />
                <span>3. Jasa Boga (Catering Proyek/Kantor)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#25b967]" />
                <span>4. Pupuk & Agro Kimia Pertanian</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#25b967]" />
                <span>5. Sayuran & Buah-buahan Segar</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#25b967]" />
                <span>6. Alat Tulis & Perlengkapan Gambar</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#25b967]" />
                <span>7. Alat Laboratorium & Farmasi</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#25b967]" />
                <span>8. Obat-obatan & Kesehatan</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#25b967]" />
                <span>9. Pakaian & Seragam Kerja</span>
              </li>
            </ul>
          </div>

          {/* Alamat & Jangkauan Pengiriman */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-emerald-400">
              Kantor Pusat & Depo
            </h4>
            <div className="space-y-2 text-xs text-emerald-200/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#25b967] flex-shrink-0 mt-0.5" />
                <p>{COMPANY_INFO.address}</p>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-emerald-900 mt-2 space-y-1">
                <strong className="text-white block">Jangkauan Armada Pengiriman:</strong>
                <p className="text-[11px] text-emerald-300">
                  Kecamatan Lembang, Kota Bandung, Cimahi, Padalarang, Batujajar, Soreang, hingga seluruh wilayah Jawa Barat & Kargo Nasional.
                </p>
              </div>
            </div>
          </div>

          {/* Hotline & Kontak WhatsApp */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-emerald-400">
              Kontak Layanan Pelanggan
            </h4>
            <div className="space-y-2.5 text-xs text-emerald-200/80">
              <div>
                <span className="text-[10px] text-emerald-300 uppercase block font-bold">Telepon & WhatsApp:</span>
                <a 
                  href={COMPANY_INFO.whatsapp1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono font-bold text-white text-sm hover:text-[#25b967]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#25b967]" />
                  <span>{COMPANY_INFO.phone1}</span>
                </a>
                <a 
                  href={COMPANY_INFO.whatsapp2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono font-bold text-white text-sm hover:text-[#25b967] mt-1"
                >
                  <Phone className="w-3.5 h-3.5 text-[#25b967]" />
                  <span>{COMPANY_INFO.phone2}</span>
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={COMPANY_INFO.whatsapp1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] text-white hover:bg-[#20ba5a] font-bold text-xs shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Konsultasi Cepat WhatsApp</span>
                </a>
              </div>

              <div className="text-[10px] text-emerald-300 pt-1">
                *Pemesanan dalam jumlah banyak, harga langsung kami kurangi!
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-emerald-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300/70">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Syarat & Ketentuan Pengadaan</span>
            <span className="hover:text-white transition-colors cursor-pointer">SOP Pengantaran Dump Truck</span>
            <span className="hover:text-white transition-colors cursor-pointer">Kebijakan Privasi</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
