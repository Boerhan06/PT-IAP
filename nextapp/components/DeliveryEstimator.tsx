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
    <section id="kalkulator" className="py-20 bg-[#f3f6ee] border-t border-[#e2ebd9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#dbe8d3] text-[#234226] text-xs font-semibold tracking-wide mb-3 shadow-apple-pill">
            <Navigation className="w-3.5 h-3.5 text-[#2d522a]" />
            <span>Kalkulator Rute & Ongkir Armada</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1f3721] tracking-tight font-heading">
            Cek Tarif Kirim Armada
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-[#4d634f] leading-relaxed">
            Pilih titik pengantaran proyek Anda untuk estimasi tarif Dump Truck PT. IAP atau kargo nasional.
          </p>
        </div>

        {/* Apple Island Bento Card */}
        <div className="bg-white rounded-[32px] border border-[#dbe6d3] p-6 sm:p-8 lg:p-10 shadow-apple">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Options Form */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Location Select Dropdown */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#234226] mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#2d522a]" />
                  <span>Pilih Wilayah / Titik Proyek:</span>
                </label>
                <div className="relative">
                  <select
                    value={selectedLocation}
                    onChange={(e) => onSelectLocation(e.target.value)}
                    className="w-full bg-[#f8faf6] border border-[#d6e3ce] rounded-full px-5 py-3.5 text-xs sm:text-sm font-semibold text-[#1f3721] focus:outline-none focus:border-[#234226] focus:bg-white shadow-apple-pill transition-all cursor-pointer appearance-none pr-10"
                  >
                    {Object.values(LOGISTICS_HUBS).map((hub) => (
                      <option key={hub.id} value={hub.id}>
                        {hub.label}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#4d634f]">
                    <ChevronRight className="w-4 h-4 rotate-90" />
                  </div>
                </div>
              </div>

              {/* Delivery Service Tier Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#234226] mb-2">
                  Pilihan Armada Pengiriman:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  
                  {/* Armada Sendiri */}
                  <div
                    onClick={() => onSelectShippingMethod('armada')}
                    className={`cursor-pointer p-4 rounded-[22px] border transition-all duration-300 ${
                      shippingMethod === 'armada'
                        ? 'bg-[#f4f8f1] border-[#234226] shadow-apple-pill ring-2 ring-[#234226]/15'
                        : 'bg-white border-[#dbe6d3] hover:border-[#234226]/40 shadow-xs'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Truck className={`w-5 h-5 ${shippingMethod === 'armada' ? 'text-[#234226]' : 'text-gray-400'}`} />
                        <span className="font-bold text-xs text-[#1f3721]">Armada PT. IAP (Truk)</span>
                      </div>
                      <span className="text-[10px] bg-[#dbe8d3] text-[#234226] px-2.5 py-0.5 rounded-full font-bold">
                        Bisa COD
                      </span>
                    </div>
                    <div className="text-base font-extrabold text-[#1f3721]">
                      {formatRupiah(currentHub.armadaRate)}
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-[#4d634f] mt-1">
                      <Clock className="w-3.5 h-3.5 text-[#2d522a]" />
                      <span>{currentHub.armadaEta}</span>
                    </div>
                  </div>

                  {/* Kargo Rekanan */}
                  <div
                    onClick={() => onSelectShippingMethod('kargo')}
                    className={`cursor-pointer p-4 rounded-[22px] border transition-all duration-300 ${
                      shippingMethod === 'kargo'
                        ? 'bg-[#f4f8f1] border-[#234226] shadow-apple-pill ring-2 ring-[#234226]/15'
                        : 'bg-white border-[#dbe6d3] hover:border-[#234226]/40 shadow-xs'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Boxes className={`w-5 h-5 ${shippingMethod === 'kargo' ? 'text-[#234226]' : 'text-gray-400'}`} />
                        <span className="font-bold text-xs text-[#1f3721]">Ekspedisi Kargo</span>
                      </div>
                      <span className="text-[10px] bg-gray-100 text-gray-700 px-2.5 py-0.5 rounded-full font-bold">
                        Luar Kota
                      </span>
                    </div>
                    <div className="text-base font-extrabold text-[#1f3721]">
                      {formatRupiah(currentHub.kargoRate)}
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-[#4d634f] mt-1">
                      <Clock className="w-3.5 h-3.5 text-gray-500" />
                      <span>{currentHub.kargoEta}</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Right Summary Result Panel */}
            <div className="lg:col-span-5 bg-[#f8faf6] p-6 rounded-[26px] border border-[#dbe6d3] shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-[#e5edd9] pb-3">
                <span className="text-xs uppercase font-bold text-[#4d634f]">Depo Asal Muat</span>
                <span className="text-xs font-bold text-[#234226] bg-[#dbe8d3] px-3 py-1 rounded-full shadow-apple-pill">
                  Depo Lembang Bandung Barat
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#4d634f]">Estimasi Jarak Tempuh:</span>
                  <span className="font-bold text-[#1f3721]">{currentHub.distanceKm} km</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#4d634f]">Estimasi Tiba di Lokasi:</span>
                  <span className="font-bold text-[#1f3721]">
                    {shippingMethod === 'armada' ? currentHub.armadaEta : currentHub.kargoEta}
                  </span>
                </div>
                <div className="flex justify-between items-baseline pt-1">
                  <span className="text-[#4d634f]">Biaya Pengiriman:</span>
                  <span className="font-extrabold text-lg text-[#234226]">
                    {formatRupiah(shippingMethod === 'armada' ? currentHub.armadaRate : currentHub.kargoRate)}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-[#e5edd9] space-y-2.5">
                <button
                  onClick={onOpenRadar}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-full bg-[#3f6c34] text-white hover:bg-[#33592a] text-xs font-bold shadow-apple-pill hover:shadow-apple-floating transition-all active:scale-98"
                >
                  <Navigation className="w-4 h-4 text-[#a8dc98] animate-pulse" />
                  <span>Lacak Truk GPS</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={COMPANY_INFO.whatsapp1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#25D366] text-white hover:bg-[#20ba5a] text-xs font-bold transition-all shadow-apple-pill active:scale-98"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Pesan Truk via WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
