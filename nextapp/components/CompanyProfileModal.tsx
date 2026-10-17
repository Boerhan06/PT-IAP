'use client';

import React from 'react';
import { COMPANY_INFO } from '@/lib/products';
import { IAPLogo } from '@/components/IAPLogo';
import { 
  X, 
  Target, 
  Compass, 
  Building2, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  MessageCircle,
  ExternalLink
} from 'lucide-react';

interface CompanyProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CompanyProfileModal: React.FC<CompanyProfileModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity" 
      />

      {/* Modal Dialog Window */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-[#dde8e1] overflow-hidden z-10 flex flex-col max-h-[90vh]">
        
        {/* Header with IAP Brand Gradient */}
        <div className="px-6 py-5 bg-gradient-to-r from-[#032417] via-[#0e6e42] to-[#164e33] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-2xl shadow-md">
              <IAPLogo size={34} showText={false} />
            </div>
            <div>
              <h3 className="text-base font-black tracking-tight text-white">
                Profil Perusahaan Resmi PT. IAP
              </h3>
              <p className="text-xs text-emerald-200">
                PT IHSAN ABDUL PATAH — Perdagangan Umum & Jasa Terpercaya
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 text-[#032417]">
          
          {/* Tentang Kami Card */}
          <div className="bg-[#f7faf8] rounded-2xl p-6 border border-[#dde8e1] space-y-3">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-800">
              <Building2 className="w-4 h-4 text-emerald-700" />
              <span>Tentang Perusahaan Kami</span>
            </div>
            <h4 className="text-xl font-black text-[#032417] leading-tight">
              Mitra Solutif Pengadaan Material Bangunan & Jasa Profesional Terlengkap
            </h4>
            <p className="text-sm text-[#56685f] leading-relaxed">
              Kami adalah perusahaan perdagangan dan jasa yang menyediakan berbagai produk dan layanan untuk memenuhi kebutuhan bisnis dan konsumen. Kami berdedikasi tinggi untuk menyediakan produk berkualitas prima dengan layanan yang memuaskan pelanggan.
            </p>
            <p className="text-sm text-[#56685f] leading-relaxed">
              Dalam dunia perdagangan dan jasa yang kompetitif, <strong>PT IAP</strong> siap memberikan solusi terbaik dengan harga yang kompetitif. Kami membangun kemitraan jangka panjang dan berkomitmen untuk senantiasa memberikan pengalaman transaksi yang mudah, cepat, dan terpercaya.
            </p>
          </div>

          {/* Visi & Misi Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Visi */}
            <div className="md:col-span-5 bg-gradient-to-br from-[#032417] to-[#0e6e42] text-white rounded-2xl p-6 flex flex-col justify-between shadow-lg">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-amber-300 flex items-center justify-center font-black">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="text-xs uppercase font-extrabold tracking-wider text-emerald-300">
                  Visi Perusahaan
                </h4>
                <p className="text-base font-bold leading-relaxed text-emerald-50">
                  &ldquo;{COMPANY_INFO.visi}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-emerald-700/50 flex items-center gap-2 text-xs text-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Nilai Tambah & Berkelanjutan</span>
              </div>
            </div>

            {/* Misi */}
            <div className="md:col-span-7 bg-[#f7faf8] rounded-2xl p-6 border border-[#dde8e1] space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-800">
                <Compass className="w-4 h-4 text-emerald-700" />
                <span>6 Misi Strategis PT. IAP</span>
              </div>

              <div className="space-y-2.5">
                {COMPANY_INFO.misi.map((m, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#032417]">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="leading-relaxed text-[#56685f]">{m}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Alamat & Kontak Resmi Lembang */}
          <div className="bg-amber-50/80 rounded-2xl p-6 border border-amber-200 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-900">
              Kantor Pusat & Depo Operasional
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="flex items-start gap-2 text-[#032417]">
                <MapPin className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-sm text-[#032417]">Alamat Kantor:</strong>
                  <p className="text-[#56685f] mt-0.5">{COMPANY_INFO.address}</p>
                </div>
              </div>

              <div className="space-y-2">
                <strong className="block text-sm text-[#032417]">Kontak WhatsApp & Telepon:</strong>
                <a 
                  href={COMPANY_INFO.whatsapp1} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-800 font-bold hover:underline"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>{COMPANY_INFO.phone1} (Pak Ihsan / Tim Penjualan)</span>
                </a>
                <a 
                  href={COMPANY_INFO.whatsapp2} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-800 font-bold hover:underline"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>{COMPANY_INFO.phone2} (Layanan Proyek & RAB)</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-[#f7faf8] border-t border-[#dde8e1] flex items-center justify-between">
          <a
            href={COMPANY_INFO.whatsapp1}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white hover:bg-[#20ba5a] text-xs font-bold shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat WhatsApp Resmi</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#032417] text-white hover:bg-[#164e33] text-xs font-bold transition-all"
          >
            Tutup Profil
          </button>
        </div>

      </div>
    </div>
  );
};
