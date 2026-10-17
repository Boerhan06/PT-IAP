'use client';

import React from 'react';
import { CartItem, ShippingMethod, PaymentMethod } from '@/types';
import { LOGISTICS_HUBS, calculateCartTotals, COMPANY_INFO } from '@/lib/products';
import { IAPLogo } from '@/components/IAPLogo';
import { formatRupiah } from '@/lib/utils';
import { 
  X, 
  Printer, 
  Radio, 
  ShieldCheck, 
  QrCode, 
  FileCheck, 
  MessageCircle,
  CheckCircle2
} from 'lucide-react';

interface InvoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  isB2BMode: boolean;
  selectedLocation: string;
  shippingMethod: ShippingMethod;
  paymentMethod: PaymentMethod;
  onOpenRadar: () => void;
}

export const InvoiceModal: React.FC<InvoiceModalProps> = ({
  isOpen,
  onClose,
  cart,
  isB2BMode,
  selectedLocation,
  shippingMethod,
  paymentMethod,
  onOpenRadar
}) => {
  if (!isOpen) return null;

  const totals = calculateCartTotals(cart, isB2BMode, selectedLocation, shippingMethod);
  const currentHub = LOGISTICS_HUBS[selectedLocation] || LOGISTICS_HUBS.lembang;
  
  const today = new Date();
  const invNumber = `INV/IAP/${today.getFullYear()}/${today.getMonth() + 1}/${Math.floor(1000 + Math.random() * 9000)}`;
  const dateStr = today.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

  const getPaymentLabel = () => {
    if (paymentMethod === 'va') return 'Virtual Account Bank BCA / Mandiri (Auto-Settlement DJP)';
    if (paymentMethod === 'manual') return 'PO & Proforma B2B (Termin 14-30 Hari Terverifikasi)';
    return 'Bayar di Lokasi (COD Lapangan) saat Tanda Tangan BAST';
  };

  const handlePrint = () => {
    window.print();
  };

  const handleTrackRadar = () => {
    onClose();
    onOpenRadar();
  };

  const waInvoiceMessage = encodeURIComponent(
    `Halo PT. IAP, saya telah menerbitkan Proforma Invoice nomor *${invNumber}* sebesar *${formatRupiah(totals.grandTotal)}*.\nMohon verifikasi pesanan dan konfirmasi jadwal pengiriman ke ${currentHub.label}. Terima kasih!`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs no-print" 
      />

      {/* Modal Dialog Window */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-[#dde8e1] overflow-hidden z-10 flex flex-col max-h-[92vh]">
        
        {/* Header Actions (Excluded in Print) */}
        <div className="px-6 py-4 bg-[#f7faf8] border-b border-[#dde8e1] flex items-center justify-between no-print">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-emerald-100 text-emerald-800">
              <FileCheck className="w-5 h-5 text-emerald-800" />
            </span>
            <div>
              <h3 className="text-sm font-bold text-[#032417]">Pratinjau Proforma Invoice & Faktur PT. IAP</h3>
              <p className="text-[11px] text-[#56685f]">Dokumen sah transaksi pengadaan material dan jasa terverifikasi</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-[#032417] text-white rounded-xl text-xs font-bold hover:bg-[#164e33] transition-all shadow-xs"
            >
              <Printer className="w-3.5 h-3.5 text-[#25b967]" />
              <span>Cetak / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-[#56685f] hover:text-[#032417] rounded-xl transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div id="printable-invoice" className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-[#032417] bg-white">
          
          {/* Corporate Letterhead */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b-2 border-[#032417]">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-[#f7faf8] rounded-2xl border border-[#dde8e1]">
                <IAPLogo size={42} showText={false} />
              </div>
              <div>
                <h1 className="text-lg font-black tracking-tight text-[#032417]">{COMPANY_INFO.name}</h1>
                <p className="text-xs text-[#56685f]">{COMPANY_INFO.address}</p>
                <p className="text-xs text-[#56685f]">Telepon: {COMPANY_INFO.phone1} / {COMPANY_INFO.phone2}</p>
              </div>
            </div>

            <div className="text-left sm:text-right space-y-1">
              <div className="inline-block px-3 py-1 rounded-lg bg-[#c7ebd5] text-[#032417] text-xs font-black">
                PROFORMA INVOICE & FAKTUR
              </div>
              <div className="text-xs font-mono font-bold text-[#032417]">{invNumber}</div>
              <div className="text-xs text-[#56685f]">Tanggal: {dateStr}</div>
            </div>
          </div>

          {/* Customer & Destination Metadata */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-[#f7faf8] p-4 rounded-2xl border border-[#dde8e1]">
            <div>
              <span className="text-[#56685f] uppercase tracking-wider text-[10px] font-bold block mb-1">
                Ditujukan Kepada (Pemesan / Kontraktor):
              </span>
              <div className="font-bold text-sm text-[#032417]">KLIEN REKANAN PT. IAP</div>
              <div className="text-[#56685f]">Status: Pelanggan Terverifikasi</div>
              <div className="text-[#56685f] mt-1">
                Catatan: <strong className="text-[#032417]">Pengadaan Material Proyek Bangunan</strong>
              </div>
            </div>

            <div>
              <span className="text-[#56685f] uppercase tracking-wider text-[10px] font-bold block mb-1">
                Tujuan Pengiriman & Metode Bayar:
              </span>
              <div className="font-bold text-[#032417]">{currentHub.label}</div>
              <div className="text-[#56685f]">
                Asal Muat: {currentHub.hubName} ({currentHub.distanceKm} km)
              </div>
              <div className="text-[#56685f] mt-1">
                Pembayaran: <strong className="text-[#032417]">{getPaymentLabel()}</strong>
              </div>
            </div>
          </div>

          {/* Items Table */}
          <div className="border border-[#dde8e1] rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#f0f5f2] border-b border-[#dde8e1] text-[#032417] font-bold">
                <tr>
                  <th className="py-2.5 px-3 text-center w-10">No</th>
                  <th className="py-2.5 px-3">Nama Material / Jasa</th>
                  <th className="py-2.5 px-3 text-center">Jumlah</th>
                  <th className="py-2.5 px-3 text-right">Harga Satuan</th>
                  <th className="py-2.5 px-3 text-right">Total (IDR)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eef3f0]">
                {totals.itemsCalculated.map((item, idx) => (
                  <tr key={item.productId} className="hover:bg-slate-50">
                    <td className="py-2.5 px-3 text-center font-bold text-[#56685f]">{idx + 1}</td>
                    <td className="py-2.5 px-3">
                      <div className="font-bold text-[#032417]">{item.product.name}</div>
                      <div className="text-[10px] text-[#56685f]">{item.product.subname} • {item.product.cert}</div>
                    </td>
                    <td className="py-2.5 px-3 text-center font-bold">
                      {item.qty} {item.product.unit.split(' ')[0]}
                    </td>
                    <td className="py-2.5 px-3 text-right font-medium">
                      {formatRupiah(item.unitPrice)}
                    </td>
                    <td className="py-2.5 px-3 text-right font-bold text-[#032417]">
                      {formatRupiah(item.lineTotal)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Calculation Summary & Digital Verification */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-end pt-2">
            
            {/* Digital Signature & Verification Box */}
            <div className="sm:col-span-7 bg-[#f7faf8] p-4 rounded-2xl border border-[#dde8e1] flex items-center gap-4">
              <div className="w-20 h-20 bg-white p-1.5 rounded-xl border border-[#cfdfd6] flex items-center justify-center flex-shrink-0">
                <QrCode className="w-16 h-16 text-[#032417]" />
              </div>
              <div className="space-y-1 text-[11px]">
                <div className="font-bold text-[#032417] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Validasi Resmi PT IHSAN ABDUL PATAH</span>
                </div>
                <div className="text-[#56685f]">
                  Scan kode QR untuk memvalidasi keaslian dokumen transaksi dan status pengiriman armada Lembang.
                </div>
                <div className="font-mono text-[9px] text-[#56685f]">
                  REF: IAP-{Math.random().toString(36).substring(2, 10).toUpperCase()}
                </div>
              </div>
            </div>

            {/* Financial Totals */}
            <div className="sm:col-span-5 space-y-2 text-xs">
              <div className="flex justify-between text-[#56685f]">
                <span>Dasar Pengenaan Pajak (DPP):</span>
                <span className="font-bold text-[#032417]">{formatRupiah(totals.taxableBase)}</span>
              </div>

              {totals.b2bPartnershipDiscount > 0 && (
                <div className="flex justify-between text-emerald-700 font-semibold">
                  <span>Potongan Borongan:</span>
                  <span>-{formatRupiah(totals.b2bPartnershipDiscount)}</span>
                </div>
              )}

              <div className="flex justify-between text-[#56685f]">
                <span>PPN 11% Resmi:</span>
                <span className="font-bold text-[#032417]">{formatRupiah(totals.ppn11)}</span>
              </div>

              <div className="flex justify-between text-[#56685f]">
                <span>Ongkos Kirim Armada Truk:</span>
                <span className="font-bold text-[#032417]">{formatRupiah(totals.shippingRate)}</span>
              </div>

              <div className="pt-2 border-t border-[#032417] flex justify-between items-baseline font-black">
                <span className="text-xs uppercase text-[#032417]">Total Tagihan:</span>
                <span className="text-lg text-emerald-800">{formatRupiah(totals.grandTotal)}</span>
              </div>
            </div>

          </div>

          {/* BAST Notice */}
          <div className="text-[11px] text-[#56685f] p-3 rounded-xl bg-emerald-50 border border-emerald-200">
            <strong>Catatan BAST:</strong> Material dikirim langsung dari Depo Pusat Lembang dengan Surat Jalan resmi. Penyerahan fisik diverifikasi di lokasi proyek saat kedatangan armada.
          </div>

        </div>

        {/* Modal Footer Controls (Excluded in Print) */}
        <div className="px-6 py-4 bg-[#f8faf6] border-t border-[#dbe6d3] flex flex-wrap items-center justify-between gap-3 no-print">
          <div className="flex items-center gap-2">
            <button
              onClick={handleTrackRadar}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#234226] text-[#234226] hover:bg-[#eef5eb] text-xs font-bold transition-all shadow-apple-pill active:scale-98"
            >
              <Radio className="w-4 h-4 text-[#2d522a] animate-pulse" />
              <span>Pantau Armada Truk GPS</span>
            </button>

            <a
              href={`https://wa.me/6285265458819?text=${waInvoiceMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white hover:bg-[#20ba5a] text-xs font-bold transition-all shadow-apple-pill active:scale-98"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Konfirmasi ke WA Admin</span>
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-5 py-2.5 rounded-full bg-[#244026] text-white hover:bg-[#1a301c] text-xs font-bold transition-all shadow-apple-pill active:scale-98"
            >
              Unduh Invoice PDF
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-[#e8f0e4] text-[#4d634f] hover:text-[#1f3721] text-xs font-bold transition-all active:scale-98"
            >
              Tutup
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
