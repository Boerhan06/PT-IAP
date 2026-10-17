'use client';

import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '@/lib/products';
import { 
  Percent, 
  Truck, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  MessageCircle, 
  Copy, 
  Check, 
  Tag, 
  Clock, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface HeroDiscountSliderProps {
  onScrollToCatalog?: () => void;
}

const DISCOUNT_CARDS = [
  {
    id: 1,
    badgeText: 'DISKON PROYEK',
    discountAmount: 'POTONG 15%',
    tagline: 'Besi Beton SNI & Semen Padang / Tiga Roda',
    title: 'Diskon Partai Besar s/d 15%',
    description: 'Beli minimal 50 batang besi beton full atau 100 sak semen. Harga grosir tangan pertama langsung dipotong faktur.',
    savingHighlight: 'Hemat s/d Rp 1.500.000 / rit pesanan',
    voucherCode: 'BORONGAN15',
    quotaStatus: 'Tersisa 8 Kuota Diskon Kontraktor Hari Ini',
    buttonText: 'Klaim Diskon via WA',
    waText: 'Halo PT. IAP, saya ingin klaim Diskon Borongan Besi & Semen (Kode: BORONGAN15) untuk proyek bangunan saya.',
    accentColor: '#3f6c34',
    badgeColor: 'bg-[#3f6c34] text-white',
    icon: <Percent className="w-5 h-5 text-[#3f6c34]" />
  },
  {
    id: 2,
    badgeText: 'GRATIS ONGKIR TRUK',
    discountAmount: 'FREE DELIVERY',
    tagline: 'Pasir Pasang, Batu Belah, Split & Bata Hebel',
    title: 'Free Ongkir Dump Truck PT. IAP',
    description: 'Gratis biaya kirim 1 truk bak kayu penuh langsung dari Depo Lembang ke Lembang, Cimahi, dan Bandung Utara.',
    savingHighlight: 'Gratis Ongkir Armada + Jaminan Mutu 1 Truk Penuh',
    voucherCode: 'FREEONGKIRTRUK',
    quotaStatus: 'Siaga 4 Armada Truk Siap Muat Hari Ini',
    buttonText: 'Kunci Jadwal Pengiriman',
    waText: 'Halo PT. IAP, saya ingin klaim Promo Bebas Ongkir Dump Truck (Kode: FREEONGKIRTRUK) untuk order pasir / hebel.',
    accentColor: '#284621',
    badgeColor: 'bg-[#284621] text-white',
    icon: <Truck className="w-5 h-5 text-[#3f6c34]" />
  },
  {
    id: 3,
    badgeText: 'BUNDLING HEMAT',
    discountAmount: 'CASHBACK RP 750 RB',
    tagline: 'Jasa Sumur Bor Air Bersih + Besi Pondasi',
    title: 'Paket Pondasi & Sumur Bor',
    description: 'Pengeboran sumur air tanah dalam bergaransi debit deras & jernih + pengadaan besi kolom cakar ayam SNI.',
    savingHighlight: 'Survey Geolistrik Gratis & Cashback Rp 750.000',
    voucherCode: 'SUMURPONDASI',
    quotaStatus: 'Siaga 2 Tim Pengeboran Berpengalaman',
    buttonText: 'Konsultasi Survey Gratis',
    waText: 'Halo PT. IAP, saya ingin konsultasi Paket Hemat Pengeboran Sumur & Besi Pondasi (Kode: SUMURPONDASI).',
    accentColor: '#8c5c36',
    badgeColor: 'bg-[#8c5c36] text-white',
    icon: <Sparkles className="w-5 h-5 text-[#8c5c36]" />
  }
];

export const HeroDiscountSlider: React.FC<HeroDiscountSliderProps> = ({ onScrollToCatalog }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Auto-slide loop every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % DISCOUNT_CARDS.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % DISCOUNT_CARDS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + DISCOUNT_CARDS.length) % DISCOUNT_CARDS.length);
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const card = DISCOUNT_CARDS[currentIndex];

  return (
    <div 
      className="relative bg-white/95 backdrop-blur-2xl rounded-[32px] border border-[#e1ebda] p-6 sm:p-7 shadow-apple space-y-5 overflow-hidden transition-all group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Soft Organic Glow */}
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#eef6ea] rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Top Header Controls: Title & Navigation Arrows */}
      <div className="flex items-center justify-between pb-3.5 border-b border-[#eef3ea]">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-xl bg-[#e3eed9] text-[#3f6c34]">
            <Tag className="w-4 h-4 text-[#3f6c34]" />
          </span>
          <div>
            <span className="text-[10px] uppercase font-bold text-[#627a60] tracking-wider block">
              Program Promo Proyek
            </span>
            <h4 className="text-sm font-extrabold text-[#1b3319]">
              Kupon &amp; Diskon Khusus
            </h4>
          </div>
        </div>

        {/* Counter and Navigation Chevrons */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono font-bold text-[#7d967a] bg-[#f4f7f0] px-2.5 py-1 rounded-full border border-[#e4ecde]">
            0{currentIndex + 1} / 0{DISCOUNT_CARDS.length}
          </span>
          <button
            onClick={handlePrev}
            className="p-1.5 rounded-full border border-[#d6e3ce] text-[#536b51] hover:text-[#1b3319] hover:bg-[#f4f7f0] transition-colors"
            title="Kupon Sebelumnya"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="p-1.5 rounded-full border border-[#d6e3ce] text-[#536b51] hover:text-[#1b3319] hover:bg-[#f4f7f0] transition-colors"
            title="Kupon Berikutnya"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Animated Card Body with Key transition */}
      <div 
        key={card.id}
        className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300"
      >
        {/* Badges Row */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider ${card.badgeColor} shadow-apple-pill`}>
              {card.discountAmount}
            </span>
            <span className="text-[11px] font-bold text-[#3f6c34] bg-[#eef6ea] px-2.5 py-0.5 rounded-full border border-[#dce8d5]">
              {card.badgeText}
            </span>
          </div>

          {/* Copyable Voucher Code Pill */}
          <button
            onClick={() => handleCopyCode(card.voucherCode)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f8faf6] hover:bg-[#eef5ea] border border-[#d6e3ce] text-[11px] font-mono font-bold text-[#1b3319] transition-all"
            title="Klik untuk salin kode kupon"
          >
            {copiedCode === card.voucherCode ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#3f6c34]" />
                <span className="text-[#3f6c34]">Tersalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 text-[#7d967a]" />
                <span>{card.voucherCode}</span>
              </>
            )}
          </button>
        </div>

        {/* Title and Subtitle */}
        <div>
          <span className="text-[11px] font-bold text-[#536b51] block mb-0.5">
            {card.tagline}
          </span>
          <h3 className="text-lg sm:text-xl font-black text-[#1b3319] leading-tight">
            {card.title}
          </h3>
          <p className="text-xs text-[#536b51] mt-2 leading-relaxed">
            {card.description}
          </p>
        </div>

        {/* Key Highlight Value Box */}
        <div className="p-3.5 rounded-2xl bg-[#f8faf6] border border-[#e4ecde] flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-xs border border-[#e1ebda]">
            {card.icon}
          </div>
          <div>
            <div className="text-xs font-black text-[#1b3319]">
              {card.savingHighlight}
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-[#637d61] mt-0.5">
              <Clock className="w-3 h-3 text-[#3f6c34]" />
              <span>{card.quotaStatus}</span>
            </div>
          </div>
        </div>

        {/* Action Button: WhatsApp Direct Claim */}
        <div className="pt-1">
          <a
            href={`https://wa.me/6285265458819?text=${encodeURIComponent(card.waText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-5 rounded-full bg-[#3f6c34] text-white hover:bg-[#33592a] font-bold text-xs sm:text-sm shadow-apple-pill transition-all transform active:scale-95 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-[#a8dc98]" />
            <span>{card.buttonText}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Bottom Looping Indicator Dots */}
      <div className="flex items-center justify-between pt-2 border-t border-[#eef3ea]">
        <span className="text-[10px] text-[#7d967a] font-medium">
          *Bergeser otomatis setiap 4.5 detik
        </span>
        <div className="flex items-center gap-1.5">
          {DISCOUNT_CARDS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx 
                  ? 'w-6 bg-[#3f6c34]' 
                  : 'w-2 bg-[#d1e2c6] hover:bg-[#a9c79e]'
              }`}
              title={`Buka Promo ${idx + 1}`}
            />
          ))}
        </div>
      </div>

    </div>
  );
};
