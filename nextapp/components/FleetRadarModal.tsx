'use client';

import React, { useState } from 'react';
import { 
  X, 
  Radio, 
  Truck, 
  MapPin, 
  Gauge, 
  Thermometer, 
  UserCheck, 
  Clock, 
  RefreshCw,
  CheckCircle2,
  Wrench
} from 'lucide-react';

interface FleetRadarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FleetRadarModal: React.FC<FleetRadarModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'dump' | 'besi' | 'bor'>('dump');
  const [refreshing, setRefreshing] = useState(false);

  if (!isOpen) return null;

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 800);
  };

  const fleetDetails = {
    dump: {
      id: 'IAP-DMP-01',
      plate: 'D 8412 UAP',
      driver: 'Pak Asep (Supir Berpengalaman)',
      type: 'Dump Truck Bak Kayu Isuzu Giga',
      cargo: 'Pasir Pasang Super (1 Truk Bak Kayu Penuh)',
      speed: '42 km/jam',
      temp: 'Normal Muatan Basah',
      eta: '25 Menit Lagi (Menuju Lokasi)',
      origin: 'Depo Pusat PT. IAP Lembang',
      dest: 'Proyek Perumahan Setiabudi Bandung',
      step: 3
    },
    besi: {
      id: 'IAP-TRK-02',
      plate: 'D 9104 IAP',
      driver: 'Pak Mamat & Kru Bongkar',
      type: 'Truk Engkel Pengangkut Baja & Semen',
      cargo: 'Besi Full SNI 10mm (100 Btg) & Semen Padang (50 Zak)',
      speed: '46 km/jam',
      temp: 'Terpal Terikat Kuat Aman',
      eta: '35 Menit Lagi',
      origin: 'Gudang Lulurung II Wangunsari',
      dest: 'Proyek Ruko Padalarang Bandung Barat',
      step: 3
    },
    bor: {
      id: 'IAP-BOR-03',
      plate: 'D 8820 AP',
      driver: 'Tim Teknisi Bor Sumur PT. IAP',
      type: 'Armada Mobil Rig Pengeboran Sumur Artesis',
      cargo: 'Mesin Bor Hidrolik & Pipa Casing 4 Inch',
      speed: 'Siap Operasi',
      temp: 'Peralatan Terkalibrasi',
      eta: 'Tiba di Lokasi Kerja',
      origin: 'Workshop Lembang',
      dest: 'Titik Pengeboran Air Bersih Lembang',
      step: 4
    }
  };

  const current = fleetDetails[activeTab];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs" 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-[#dde8e1] overflow-hidden z-10 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#032417] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-white/10 text-[#25b967]">
              <Radio className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold">Radar Telematika Armada GPS PT. IAP</h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-black bg-[#25b967] text-[#032417]">
                  GPS LIVE
                </span>
              </div>
              <p className="text-xs text-emerald-200">
                Pemantauan rute pengiriman dump truck & unit kerja dari Depo Lembang Bandung Barat.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRefresh}
              className={`p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all ${refreshing ? 'animate-spin' : ''}`}
              title="Perbarui koordinat GPS"
            >
              <RefreshCw className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="px-6 py-3 bg-[#f7faf8] border-b border-[#dde8e1] flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('dump')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'dump'
                ? 'bg-[#032417] text-white shadow-xs'
                : 'bg-white text-[#56685f] border border-[#d6e3db] hover:border-[#032417]'
            }`}
          >
            <Truck className="w-3.5 h-3.5" />
            <span>Dump Truck Pasir (D 8412 UAP)</span>
          </button>

          <button
            onClick={() => setActiveTab('besi')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'besi'
                ? 'bg-[#032417] text-white shadow-xs'
                : 'bg-white text-[#56685f] border border-[#d6e3db] hover:border-[#032417]'
            }`}
          >
            <Truck className="w-3.5 h-3.5" />
            <span>Truk Besi & Semen (D 9104 IAP)</span>
          </button>

          <button
            onClick={() => setActiveTab('bor')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'bor'
                ? 'bg-[#032417] text-white shadow-xs'
                : 'bg-white text-[#56685f] border border-[#d6e3db] hover:border-[#032417]'
            }`}
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>Unit Rig Bor Sumur (D 8820 AP)</span>
          </button>
        </div>

        {/* Radar Map & Telemetry Visual */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Radar Radar Pulse Simulation Canvas */}
          <div className="relative w-full h-56 rounded-3xl bg-gradient-to-br from-[#021b11] via-[#052b1d] to-[#01140c] overflow-hidden flex items-center justify-center border border-emerald-900 shadow-inner">
            
            {/* Grid overlay */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(#25b967 1px, transparent 1px), linear-gradient(to right, rgba(37, 185, 103, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(37, 185, 103, 0.1) 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }}
            />

            {/* Radar Circular Sweep Rings */}
            <div className="absolute w-72 h-72 rounded-full border border-emerald-500/20" />
            <div className="absolute w-48 h-48 rounded-full border border-emerald-500/30" />
            <div className="absolute w-24 h-24 rounded-full border border-emerald-500/40" />

            {/* Pulsing Sonar Ping */}
            <div className="absolute w-12 h-12 rounded-full bg-emerald-500/30 radar-ping" />

            {/* Active Truck Location Node */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-[#032417] flex items-center justify-center shadow-lg shadow-emerald-500/50 animate-bounce">
                <Truck className="w-6 h-6" />
              </div>
              <div className="mt-2 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px] font-mono font-bold border border-emerald-500/50 shadow-md">
                {current.plate} • {current.speed}
              </div>
            </div>

            {/* Project Destination Marker */}
            <div className="absolute top-6 right-8 flex items-center gap-1.5 bg-emerald-950/80 px-3 py-1 rounded-xl border border-emerald-700/60 text-emerald-200 text-xs">
              <MapPin className="w-3.5 h-3.5 text-red-400" />
              <span>Titik: {current.dest}</span>
            </div>

            <div className="absolute bottom-4 left-6 text-emerald-400 text-[10px] font-mono">
              DEPO LEMBANG: LAT -6.819382 • LON 107.618392 • SATELLITE OK
            </div>
          </div>

          {/* Telemetry Sensor Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-2xl bg-[#f7faf8] border border-[#dde8e1]">
              <div className="flex items-center gap-1 text-[11px] text-[#56685f] mb-1">
                <Gauge className="w-3.5 h-3.5 text-emerald-700" />
                <span>Kecepatan Armada</span>
              </div>
              <div className="text-sm font-bold text-[#032417]">{current.speed}</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#f7faf8] border border-[#dde8e1]">
              <div className="flex items-center gap-1 text-[11px] text-[#56685f] mb-1">
                <Clock className="w-3.5 h-3.5 text-emerald-700" />
                <span>Estimasi Sampai (ETA)</span>
              </div>
              <div className="text-sm font-bold text-emerald-700">{current.eta}</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#f7faf8] border border-[#dde8e1]">
              <div className="flex items-center gap-1 text-[11px] text-[#56685f] mb-1">
                <Thermometer className="w-3.5 h-3.5 text-emerald-700" />
                <span>Status Muatan</span>
              </div>
              <div className="text-sm font-bold text-[#032417]">{current.temp}</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#f7faf8] border border-[#dde8e1]">
              <div className="flex items-center gap-1 text-[11px] text-[#56685f] mb-1">
                <UserCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>Pengemudi & Kru</span>
              </div>
              <div className="text-sm font-bold text-[#032417] truncate">{current.driver}</div>
            </div>
          </div>

          {/* Logistics Progress Timeline */}
          <div className="p-4 rounded-2xl bg-[#f7faf8] border border-[#dde8e1] space-y-3">
            <div className="text-xs font-bold text-[#032417]">
              Alur Perjalanan & Pengantaran PT. IAP
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-0.5" />
                <div>
                  <div className="font-bold text-[#032417]">1. Pemuatan Depo</div>
                  <div className="text-[10px] text-[#56685f]">{current.origin}</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-0.5" />
                <div>
                  <div className="font-bold text-[#032417]">2. Cek Muatan & Bon</div>
                  <div className="text-[10px] text-[#56685f]">Kesesuaian pesanan OK</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold mt-0.5 animate-pulse">
                  3
                </div>
                <div>
                  <div className="font-bold text-emerald-800">3. Transit Pengiriman</div>
                  <div className="text-[10px] text-emerald-700">Dalam perjalanan ke proyek</div>
                </div>
              </div>

              <div className="flex items-start gap-2 opacity-60">
                <div className="w-4 h-4 rounded-full border border-gray-400 text-gray-500 flex items-center justify-center text-[10px] mt-0.5">
                  4
                </div>
                <div>
                  <div className="font-bold text-gray-700">4. Pembongkaran & BAST</div>
                  <div className="text-[10px] text-gray-500">Pengecekan fisik di tempat</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#f7faf8] border-t border-[#dde8e1] flex items-center justify-between">
          <div className="text-xs text-[#56685f]">
            Hotline Koordinasi Armada: <strong>0852 6545 8819</strong> (Jl. Lulurung II Lembang)
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#032417] text-white rounded-xl text-xs font-bold hover:bg-[#164e33]"
          >
            Tutup Radar
          </button>
        </div>

      </div>
    </div>
  );
};
