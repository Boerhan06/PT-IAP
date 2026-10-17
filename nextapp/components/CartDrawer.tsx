'use client';

import React, { useState } from 'react';
import { CartItem, ShippingMethod, PaymentMethod } from '@/types';
import { CATALOG_PRODUCTS, LOGISTICS_HUBS, calculateCartTotals, COMPANY_INFO } from '@/lib/products';
import { formatRupiah } from '@/lib/utils';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Truck, 
  CreditCard, 
  Sparkles,
  ArrowRight,
  MessageCircle
} from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQty: (productId: string, newQty: number) => void;
  onRemoveItem: (productId: string) => void;
  isB2BMode: boolean;
  selectedLocation: string;
  onSelectLocation: (locKey: string) => void;
  shippingMethod: ShippingMethod;
  onSelectShippingMethod: (method: ShippingMethod) => void;
  paymentMethod: PaymentMethod;
  onSelectPaymentMethod: (method: PaymentMethod) => void;
  onProceedToInvoice: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQty,
  onRemoveItem,
  isB2BMode,
  selectedLocation,
  onSelectLocation,
  shippingMethod,
  onSelectShippingMethod,
  paymentMethod,
  onSelectPaymentMethod,
  onProceedToInvoice
}) => {
  const [orderNotes, setOrderNotes] = useState('');

  if (!isOpen) return null;

  const totals = calculateCartTotals(cart, isB2BMode, selectedLocation, shippingMethod);
  const currentHub = LOGISTICS_HUBS[selectedLocation] || LOGISTICS_HUBS.lembang;

  // Format WhatsApp Message for direct ordering
  const itemsText = totals.itemsCalculated
    .map((item, idx) => `${idx + 1}. ${item.product.name} (${item.qty} ${item.product.unit}) = ${formatRupiah(item.lineTotal)}`)
    .join('\n');

  const waCartMessage = encodeURIComponent(
    `Halo PT. IAP (Ihsan Abdul Patah), saya ingin memesan material berikut:\n\n${itemsText}\n\n*Lokasi Kirim:* ${currentHub.label}\n*Subtotal:* ${formatRupiah(totals.subtotal)}\n*Potongan Borongan:* -${formatRupiah(totals.b2bPartnershipDiscount)}\n*Estimasi Ongkir:* ${formatRupiah(totals.shippingRate)}\n*Total Perkiraan:* ${formatRupiah(totals.grandTotal)}\n\nCatatan: ${orderNotes || 'Mohon konfirmasi ketersediaan dan jadwal kirim. Terima kasih!'}`
  );

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Dark backdrop blur overlay */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300" 
      />

      {/* Drawer Container */}
      <div className="relative w-full max-w-lg bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#dde8e1] flex items-center justify-between bg-[#f7faf8]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#032417] text-white">
              <ShoppingBag className="w-5 h-5 text-[#25b967]" />
            </div>
            <div>
              <h2 className="text-base font-bold text-[#032417]">Keranjang Pesanan PT. IAP</h2>
              <div className="flex items-center gap-2 text-xs text-[#56685f]">
                <span>{totals.uniqueProductsCount} Jenis Item</span>
                <span className="w-1 h-1 rounded-full bg-gray-400" />
                <span className="font-semibold text-emerald-800 bg-[#c7ebd5] px-1.5 py-0.2 rounded text-[10px]">
                  {isB2BMode ? 'Skema Borongan (Pesan Banyak)' : 'Skema Eceran'}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#56685f] hover:text-[#032417] hover:bg-white rounded-xl transition-all"
            title="Tutup Keranjang"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Items & Settings Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-16 h-16 mx-auto bg-[#eaf1ed] rounded-full flex items-center justify-center text-[#56685f]">
                <ShoppingBag className="w-8 h-8 opacity-40" />
              </div>
              <h3 className="text-base font-bold text-[#032417]">Keranjang Belanja Masih Kosong</h3>
              <p className="text-xs text-[#56685f] max-w-xs mx-auto">
                Silakan pilih besi beton, semen, pasir, baja ringan, atau bata dari katalog untuk memulai pemesanan.
              </p>
            </div>
          ) : (
            <>
              {/* Item List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#56685f]">
                  <span>Daftar Material Dipesan</span>
                  <span className="text-[10px] text-emerald-800 font-medium lowercase">
                    (pemesanan banyak harga dikurangi)
                  </span>
                </div>
                {totals.itemsCalculated.map((item) => (
                  <div
                    key={item.productId}
                    className="p-3.5 rounded-2xl border border-[#dde8e1] bg-white hover:border-[#032417]/20 transition-all flex gap-3 items-start"
                  >
                    <div className="w-14 h-14 rounded-xl bg-[#eaf1ed] overflow-hidden flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-xs font-bold text-[#032417] truncate">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.productId)}
                          className="text-[#56685f] hover:text-red-600 transition-colors p-1"
                          title="Hapus material"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-[11px] text-[#56685f]">
                        {formatRupiah(item.unitPrice)} /{item.product.unit}
                        {item.isB2BPrice && (
                          <span className="ml-1 text-[10px] text-emerald-700 font-bold bg-emerald-100 px-1 rounded">
                            Grosir
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        {/* Stepper */}
                        <div className="flex items-center border border-[#d6e3db] rounded-lg bg-[#f7faf8]">
                          <button
                            onClick={() => onUpdateQty(item.productId, item.qty - 1)}
                            className="p-1 hover:bg-white text-[#032417] transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-9 text-center text-xs font-bold text-[#032417]">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => onUpdateQty(item.productId, item.qty + 1)}
                            className="p-1 hover:bg-white text-[#032417] transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Line total */}
                        <div className="text-xs font-black text-[#032417]">
                          {formatRupiah(item.lineTotal)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Destination & Logistics Selection */}
              <div className="p-4 rounded-2xl bg-[#f7faf8] border border-[#dde8e1] space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-[#032417]">
                  <span className="flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-emerald-700" />
                    <span>Tujuan Pengiriman Material</span>
                  </span>
                  <span className="text-[11px] text-[#56685f] font-normal">
                    {currentHub.distanceKm} km (Dari Depo Lembang)
                  </span>
                </div>

                <select
                  value={selectedLocation}
                  onChange={(e) => onSelectLocation(e.target.value)}
                  className="w-full bg-white border border-[#cfdfd6] rounded-xl p-2.5 text-xs font-semibold text-[#032417]"
                >
                  {Object.values(LOGISTICS_HUBS).map((hub) => (
                    <option key={hub.id} value={hub.id}>
                      {hub.label}
                    </option>
                  ))}
                </select>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={() => onSelectShippingMethod('armada')}
                    className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-left ${
                      shippingMethod === 'armada'
                        ? 'bg-white border-[#032417] ring-1 ring-[#032417]'
                        : 'bg-white/60 border-[#d6e3db]'
                    }`}
                  >
                    <div className="text-[10px] text-[#56685f]">Armada PT. IAP:</div>
                    <div className="text-[#032417]">{formatRupiah(currentHub.armadaRate)}</div>
                  </button>

                  <button
                    onClick={() => onSelectShippingMethod('kargo')}
                    className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-left ${
                      shippingMethod === 'kargo'
                        ? 'bg-white border-[#032417] ring-1 ring-[#032417]'
                        : 'bg-white/60 border-[#d6e3db]'
                    }`}
                  >
                    <div className="text-[10px] text-[#56685f]">Kargo Rekanan:</div>
                    <div className="text-[#032417]">{formatRupiah(currentHub.kargoRate)}</div>
                  </button>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="p-4 rounded-2xl bg-[#f7faf8] border border-[#dde8e1] space-y-3">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#032417]">
                  <CreditCard className="w-4 h-4 text-emerald-700" />
                  <span>Opsi Pembayaran Resmi</span>
                </div>

                <div className="space-y-2">
                  <label 
                    onClick={() => onSelectPaymentMethod('cod')}
                    className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer text-xs ${
                      paymentMethod === 'cod' 
                        ? 'bg-white border-[#032417] ring-1 ring-[#032417]' 
                        : 'bg-white/60 border-[#d6e3db]'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-[#032417]">Bayar di Tempat (COD Lapangan)</div>
                      <div className="text-[10px] text-[#56685f]">Pelunasan saat material tiba & tanda tangan BAST</div>
                    </div>
                    <input 
                      type="radio" 
                      name="payMethod" 
                      checked={paymentMethod === 'cod'} 
                      onChange={() => onSelectPaymentMethod('cod')}
                      className="accent-[#032417]"
                    />
                  </label>

                  <label 
                    onClick={() => onSelectPaymentMethod('va')}
                    className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer text-xs ${
                      paymentMethod === 'va' 
                        ? 'bg-white border-[#032417] ring-1 ring-[#032417]' 
                        : 'bg-white/60 border-[#d6e3db]'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-[#032417]">Transfer Bank / Virtual Account</div>
                      <div className="text-[10px] text-[#56685f]">BCA / Mandiri / BNI (Bukti pembayaran otomatis)</div>
                    </div>
                    <input 
                      type="radio" 
                      name="payMethod" 
                      checked={paymentMethod === 'va'} 
                      onChange={() => onSelectPaymentMethod('va')}
                      className="accent-[#032417]"
                    />
                  </label>

                  <label 
                    onClick={() => onSelectPaymentMethod('manual')}
                    className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer text-xs ${
                      paymentMethod === 'manual' 
                        ? 'bg-white border-[#032417] ring-1 ring-[#032417]' 
                        : 'bg-white/60 border-[#d6e3db]'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-[#032417]">PO & Proforma Invoice B2B</div>
                      <div className="text-[10px] text-[#56685f]">Termin pembayaran khusus kontraktor rekanan</div>
                    </div>
                    <input 
                      type="radio" 
                      name="payMethod" 
                      checked={paymentMethod === 'manual'} 
                      onChange={() => onSelectPaymentMethod('manual')}
                      className="accent-[#032417]"
                    />
                  </label>
                </div>
              </div>

              {/* Order Notes / Project Name */}
              <div>
                <label className="block text-xs font-bold text-[#032417] mb-1.5">
                  Catatan Proyek / Kontak Penerima:
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Proyek Rumah Lembang, hubungi Pak Joko (0812...)"
                  value={orderNotes}
                  onChange={(e) => setOrderNotes(e.target.value)}
                  className="w-full bg-[#f7faf8] border border-[#cfdfd6] rounded-xl px-3.5 py-2.5 text-xs text-[#032417] focus:outline-none focus:border-[#032417]"
                />
              </div>
            </>
          )}
        </div>

        {/* Footer Financial Summary & Dual Action Buttons */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-[#dde8e1] bg-[#f7faf8] space-y-4">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-[#56685f]">
                <span>Subtotal Material:</span>
                <span className="font-semibold text-[#032417]">{formatRupiah(totals.subtotal)}</span>
              </div>

              {totals.b2bPartnershipDiscount > 0 && (
                <div className="flex justify-between text-emerald-700 font-semibold">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Potongan Borongan (Pesan Banyak):</span>
                  </span>
                  <span>-{formatRupiah(totals.b2bPartnershipDiscount)}</span>
                </div>
              )}

              <div className="flex justify-between text-[#56685f]">
                <span>PPN 11% Resmi:</span>
                <span className="font-semibold text-[#032417]">{formatRupiah(totals.ppn11)}</span>
              </div>

              <div className="flex justify-between text-[#56685f]">
                <span>Ongkos Kirim Armada Truk:</span>
                <span className="font-semibold text-[#032417]">{formatRupiah(totals.shippingRate)}</span>
              </div>

              <div className="pt-2 border-t border-[#dde8e1] flex justify-between items-baseline">
                <div>
                  <span className="text-xs font-bold text-[#032417] block">Total Tagihan:</span>
                  <span className="text-[10px] text-[#56685f]">Harga sudah termasuk potongan borongan</span>
                </div>
                <div className="text-xl font-black text-emerald-800">
                  {formatRupiah(totals.grandTotal)}
                </div>
              </div>
            </div>

            {/* Dual CTAs: WhatsApp Direct & Proforma Invoice */}
            <div className="space-y-2">
              <a
                href={`https://wa.me/6285265458819?text=${waCartMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] text-white hover:bg-[#20ba5a] font-black text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-all transform active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Kirim Pesanan Ini Langsung ke WhatsApp</span>
              </a>

              <button
                onClick={onProceedToInvoice}
                className="w-full py-3 px-4 rounded-xl bg-[#032417] text-white hover:bg-[#164e33] font-bold text-xs shadow-sm flex items-center justify-center gap-2 transition-all"
              >
                <span>Terbitkan Proforma Invoice & Faktur Resmi</span>
                <ArrowRight className="w-4 h-4 text-[#25b967]" />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
