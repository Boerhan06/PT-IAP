'use client';

import React from 'react';
import { LOGISTICS_HUBS, COMPANY_INFO } from '@/lib/products';
import { ShippingMethod } from '@/types';
import { formatRupiah } from '@/lib/utils';
import { 
  MapPin, 
  Truck, 
  Navigation, 
  Clock, 
  ChevronRight,
  Boxes,
  MessageCircle
} from 'lucide-react';

interface DeliveryEstimatorProps {
  selectedLocation: string;
  onSelectLocation: (locKey: string) => void;
  shippingMethod: ShippingMethod;
  onSelectShippingMethod: (method: ShippingMethod) => void;
  onOpenRadar: () => void;
}

export const DeliveryEstimator: React.FC<DeliveryEstimatorProps> = ({
  selectedLocation,
  onSelectLocation,
  shippingMethod,
  onSelectShippingMethod,
  onOpenRadar
}) => {
  const currentHub = LOGISTICS_HUBS[selectedLocation] || LOGISTICS_HUBS.lembang;

  return (
    <section id="kalkulator" className="py-16 bg-white border-y border-[#dde8e1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#c7ebd5] text-[#032417] text-xs font-bold mb-2.5">
            <Navigation className="w-3.5 h-3.5 text-emerald-800" />
            <span>Kalkulator Rute & Ongkos Kirim Armada</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#032417] tracking-tight">
            Estimasi Biaya Pengiriman Armada PT. IAP
          </h2>
          <p className="mt-2 text-sm text-[#56685f] leading-relaxed">
            Armada dump truck bak kayu, pick-up, dan ekspedisi siap antar material langsung dari depo pusat Lembang ke lokasi proyek Anda di Bandung Raya hingga seluruh Jawa Barat.
          </p>
        </div>

        {/* Calculation Card */}
        <div className="bg-[#f7faf8] rounded-3xl border border-[#dde8e1] p-6 lg:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Options Form */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Location Select Dropdown */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#032417] mb-2 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-700" />
                  <span>Pilih Wilayah / Titik Proyek Pengantaran:</span>
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => onSelectLocation(e.target.value)}
                  className="w-full bg-white border border-[#cfdfd6] rounded-2xl px-4 py-3.5 text-xs sm:text-sm font-bold text-[#032417] focus:outline-none focus:border-[#032417] shadow-xs cursor-pointer"
                >
                  {Object.values(LOGISTICS_HUBS).map((hub) => (
                    <option key={hub.id} value={hub.id}>
                      {hub.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Delivery Service Tier Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#032417] mb-2">
                  Pilihan Armada Pengiriman:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  
                  {/* Armada Sendiri */}
                  <div
                    onClick={() => onSelectShippingMethod('armada')}
                    className={`cursor-pointer p-4 rounded-2xl border transition-all ${
                      shippingMethod === 'armada'
                        ? 'bg-white border-[#032417] shadow-md ring-2 ring-[#032417]/10'
                        : 'bg-white/60 border-[#d6e3db] hover:border-[#032417]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Truck className={`w-5 h-5 ${shippingMethod === 'armada' ? 'text-emerald-700' : 'text-gray-400'}`} />
                        <span className="font-bold text-xs text-[#032417]">Armada PT. IAP (Truk Bak Kayu)</span>
                      </div>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-black">
                        Bisa COD
                      </span>
                    </div>
                    <div className="text-base font-extrabold text-[#032417]">
                      {formatRupiah(currentHub.armadaRate)}
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-[#56685f] mt-1">
                      <Clock className="w-3 h-3 text-emerald-700" />
                      <span>{currentHub.armadaEta}</span>
                    </div>
                  </div>

                  {/* Kargo Rekanan */}
                  <div
                    onClick={() => onSelectShippingMethod('kargo')}
                    className={`cursor-pointer p-4 rounded-2xl border transition-all ${
                      shippingMethod === 'kargo'
                        ? 'bg-white border-[#032417] shadow-md ring-2 ring-[#032417]/10'
                        : 'bg-white/60 border-[#d6e3db] hover:border-[#032417]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Boxes className={`w-5 h-5 ${shippingMethod === 'kargo' ? 'text-emerald-700' : 'text-gray-400'}`} />
                        <span className="font-bold text-xs text-[#032417]">Ekspedisi Kargo Nasional</span>
                      </div>
                      <span className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded font-bold">
                        Luar Kota
                      </span>
                    </div>
                    <div className="text-base font-extrabold text-[#032417]">
                      {formatRupiah(currentHub.kargoRate)}
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-[#56685f] mt-1">
                      <Clock className="w-3 h-3 text-gray-500" />
                      <span>{currentHub.kargoEta}</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Right Summary Result Panel */}
            <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-[#dde8e1] shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-[#eef3f0] pb-3">
                <span className="text-xs uppercase font-bold text-[#56685f]">Depo Asal Muat</span>
                <span className="text-xs font-black text-emerald-800 bg-[#c7ebd5] px-2.5 py-0.5 rounded-full">
                  Depo Lembang Bandung Barat
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#56685f]">Estimasi Jarak Tempuh:</span>
                  <span className="font-bold text-[#032417]">{currentHub.distanceKm} km</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#56685f]">Estimasi Tiba di Lokasi:</span>
                  <span className="font-bold text-[#032417]">
                    {shippingMethod === 'armada' ? currentHub.armadaEta : currentHub.kargoEta}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#56685f]">Biaya Pengiriman:</span>
                  <span className="font-extrabold text-base text-emerald-700">
                    {formatRupiah(shippingMethod === 'armada' ? currentHub.armadaRate : currentHub.kargoRate)}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-[#eef3f0] space-y-2">
                <button
                  onClick={onOpenRadar}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#032417] text-white hover:bg-[#164e33] text-xs font-bold shadow-sm transition-all"
                >
                  <Navigation className="w-4 h-4 text-[#25b967] animate-pulse" />
                  <span>Pantau Radar Armada GPS Truk Live</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={COMPANY_INFO.whatsapp1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366] text-white hover:bg-[#20ba5a] text-xs font-bold transition-all shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Jadwalkan Pengiriman via WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
