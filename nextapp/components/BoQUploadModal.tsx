'use client';

import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  FileSpreadsheet, 
  UploadCloud, 
  CheckCircle2, 
  ArrowRight,
  Loader2
} from 'lucide-react';
import { formatRupiah } from '@/lib/utils';

interface BoQUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImportAllToCart: (items: { productId: string; qty: number }[]) => void;
}

export const BoQUploadModal: React.FC<BoQUploadModalProps> = ({
  isOpen,
  onClose,
  onImportAllToCart
}) => {
  const [selectedFile, setSelectedFile] = useState<string | null>('RAB_Proyek_Rumah_Lembang.xlsx');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progressStep, setProgressStep] = useState(0);
  const [analyzed, setAnalyzed] = useState(false);

  if (!isOpen) return null;

  const steps = [
    'Memindai format tabel & struktur sel RAB / BoQ...',
    'Mencocokkan spesifikasi besi SNI & semen dengan katalog resmi PT. IAP...',
    'Menghitung potongan harga borongan (Pemesanan banyak harga dikurangi)...',
    'Analisis selesai: 4 Material Utama terpetakan dengan diskon volume!'
  ];

  const parsedItems = [
    {
      productId: 'besi-full-sni-10',
      name: 'Besi Beton Full SNI 10mm',
      qty: 60,
      unit: 'Lenteu',
      unitPrice: 72000,
      total: 4320000
    },
    {
      productId: 'semen-padang-50kg',
      name: 'Semen Padang 50kg (Portland Type 1)',
      qty: 50,
      unit: 'Zak',
      unitPrice: 65000,
      total: 3250000
    },
    {
      productId: 'pasir-pasang-truk',
      name: 'Pasir Pasang Super (Truk Bak Kayu)',
      qty: 2,
      unit: 'Truk',
      unitPrice: 1450000,
      total: 2900000
    },
    {
      productId: 'baja-ringan-c75-075e',
      name: 'Baja Ringan C75 x 0.75 (E)',
      qty: 40,
      unit: 'Batang',
      unitPrice: 75000,
      total: 3000000
    }
  ];

  const handleStartAnalysis = () => {
    setIsAnalyzing(true);
    setProgressStep(0);
    setAnalyzed(false);

    let current = 0;
    const interval = setInterval(() => {
      current++;
      if (current < steps.length) {
        setProgressStep(current);
      } else {
        clearInterval(interval);
        setIsAnalyzing(false);
        setAnalyzed(true);
      }
    }, 550);
  };

  const handleImport = () => {
    const itemsToImport = parsedItems.map(item => ({
      productId: item.productId,
      qty: item.qty
    }));
    onImportAllToCart(itemsToImport);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs" 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#dde8e1] overflow-hidden z-10 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-[#032417] via-[#0e6e42] to-[#164e33] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-white/10 text-amber-300">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold">AI BoQ / RAB Parser PT. IAP</h3>
              <p className="text-xs text-emerald-200">
                Unggah dokumen Excel RAB proyek Anda, sistem memetakan kebutuhan material ke katalog harga terbaik PT. IAP.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-white/80 hover:text-white rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* Upload Area */}
          <div className="border-2 border-dashed border-[#cfdfd6] rounded-3xl p-6 text-center bg-[#f7faf8] hover:border-emerald-700 transition-colors">
            <UploadCloud className="w-10 h-10 mx-auto text-emerald-700 mb-2" />
            <div className="text-xs font-bold text-[#032417]">
              Tarik file Excel RAB (.xlsx, .xls, .csv) atau pilih dokumen sampel
            </div>
            <p className="text-[11px] text-[#56685f] mt-1">
              Otomatis membaca volume besi beton, semen, pasir, dan baja ringan untuk kalkulasi diskon borongan.
            </p>

            {/* Sample Presets */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() => setSelectedFile('RAB_Proyek_Rumah_Lembang.xlsx')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                  selectedFile === 'RAB_Proyek_Rumah_Lembang.xlsx'
                    ? 'bg-[#c7ebd5] text-[#032417] border-emerald-400 font-bold'
                    : 'bg-white text-[#56685f] border-[#d6e3db]'
                }`}
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-700" />
                <span>RAB_Proyek_Rumah_Lembang.xlsx (4 Pos)</span>
              </button>

              <button
                onClick={() => setSelectedFile('BoQ_Ruko_Bandung_Barat.xlsx')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                  selectedFile === 'BoQ_Ruko_Bandung_Barat.xlsx'
                    ? 'bg-[#c7ebd5] text-[#032417] border-emerald-400 font-bold'
                    : 'bg-white text-[#56685f] border-[#d6e3db]'
                }`}
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-700" />
                <span>BoQ_Ruko_Bandung_Barat.xlsx (6 Pos)</span>
              </button>
            </div>
          </div>

          {/* Action Trigger */}
          {!analyzed && (
            <div className="text-center">
              <button
                onClick={handleStartAnalysis}
                disabled={isAnalyzing}
                className="px-6 py-3.5 rounded-xl bg-[#032417] text-white hover:bg-[#164e33] text-xs font-bold shadow-md shadow-emerald-950/20 disabled:opacity-50 transition-all flex items-center justify-center gap-2 mx-auto"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#25b967]" />
                    <span>Menganalisis Dokumen ({progressStep + 1}/4)...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-[#25b967]" />
                    <span>Mulai Pemetaan Otomatis & Hitung Diskon</span>
                  </>
                )}
              </button>

              {isAnalyzing && (
                <p className="text-xs text-emerald-800 font-medium mt-3 animate-pulse">
                  {steps[progressStep]}
                </p>
              )}
            </div>
          )}

          {/* Parsed Results Table */}
          {analyzed && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="flex items-center justify-between pb-2 border-b border-[#dde8e1]">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#032417]">
                  <CheckCircle2 className="w-4 h-4 text-[#25b967]" />
                  <span>Material Berhasil Dipetakan ke Katalog PT. IAP</span>
                </div>
                <span className="text-[11px] bg-[#c7ebd5] text-[#032417] px-2 py-0.5 rounded font-black">
                  Diskon Borongan Diterapkan
                </span>
              </div>

              <div className="border border-[#dde8e1] rounded-2xl overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#f0f5f2] border-b border-[#dde8e1] text-[#032417] font-bold">
                    <tr>
                      <th className="py-2.5 px-3">Material Terpetakan</th>
                      <th className="py-2.5 px-3 text-center">Volume</th>
                      <th className="py-2.5 px-3 text-right">Harga Grosir</th>
                      <th className="py-2.5 px-3 text-right">Estimasi Biaya</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#eef3f0]">
                    {parsedItems.map((item) => (
                      <tr key={item.productId} className="hover:bg-slate-50">
                        <td className="py-2.5 px-3 font-semibold text-[#032417]">
                          {item.name}
                        </td>
                        <td className="py-2.5 px-3 text-center font-bold">
                          {item.qty} {item.unit}
                        </td>
                        <td className="py-2.5 px-3 text-right text-[#56685f]">
                          {formatRupiah(item.unitPrice)}
                        </td>
                        <td className="py-2.5 px-3 text-right font-black text-emerald-800">
                          {formatRupiah(item.total)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Total mapped estimate */}
              <div className="p-3.5 rounded-2xl bg-[#f7faf8] border border-[#dde8e1] flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-[#032417]">Total Anggaran Material BoQ:</span>
                  <span className="text-[11px] text-[#56685f] block">Harga hemat borongan resmi PT. IAP</span>
                </div>
                <div className="text-base font-black text-emerald-800">
                  {formatRupiah(13470000)}
                </div>
              </div>

              {/* Import Button */}
              <button
                onClick={handleImport}
                className="w-full py-3.5 px-4 rounded-xl bg-[#032417] text-white hover:bg-[#164e33] text-xs sm:text-sm font-bold shadow-lg shadow-emerald-950/20 flex items-center justify-center gap-2 transition-all transform active:scale-95"
              >
                <span>Import Semua Material ke Keranjang Belanja</span>
                <ArrowRight className="w-4 h-4 text-[#25b967]" />
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
