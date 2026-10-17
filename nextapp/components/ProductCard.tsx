'use client';

import React, { useState } from 'react';
import { Product } from '@/types';
import { formatRupiah } from '@/lib/utils';
import { COMPANY_INFO } from '@/lib/products';
import { 
  Plus, 
  Minus, 
  ShoppingCart, 
  ShieldCheck, 
  Sparkles,
  Check,
  MessageCircle
} from 'lucide-react';

interface ProductCardProps {
  product: Product;
  isB2BMode: boolean;
  onAddToCart: (productId: string, qty: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isB2BMode,
  onAddToCart
}) => {
  const [qty, setQty] = useState<number>(isB2BMode ? product.moqB2B : 1);
  const [added, setAdded] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Determine pricing based on B2B mode or MOQ threshold
  const qualifiesForB2B = isB2BMode || qty >= product.moqB2B;
  const currentPrice = qualifiesForB2B ? product.priceB2B : product.priceRetail;
  const discountPercent = Math.round(
    ((product.priceRetail - product.priceB2B) / product.priceRetail) * 100
  );

  const handleQtyChange = (delta: number) => {
    setQty(prev => Math.max(1, prev + delta));
  };

  const handleAdd = () => {
    onAddToCart(product.id, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  const waMessage = encodeURIComponent(
    `Halo PT. IAP (Ihsan Abdul Patah), saya ingin menanyakan pemesanan:\n\n*${product.name}*\nJumlah: ${qty} ${product.unit}\nEstimasi Harga: ${formatRupiah(currentPrice * qty)}\nMohon info ketersediaan stok dan jadwal kirim ke lokasi saya. Terima kasih!`
  );

  const displayImage = imgError && product.fallbackImg ? product.fallbackImg : product.image;

  return (
    <div className="group flex flex-col bg-white rounded-3xl border border-[#dde8e1] overflow-hidden hover:shadow-xl hover:border-[#032417]/30 transition-all duration-300">
      
      {/* Product Image Header with Badges */}
      <div className="relative w-full h-48 bg-[#eaf1ed] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={displayImage}
          alt={product.name}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
          <span className="px-2.5 py-1 rounded-lg text-[10px] font-black bg-[#032417]/90 text-white backdrop-blur-md shadow-xs">
            {product.badge}
          </span>
          {discountPercent > 0 && (
            <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#25b967] text-[#032417] shadow-xs flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#032417]" /> Hemat -{discountPercent}%
            </span>
          )}
        </div>

        {/* Certificate Badge */}
        <div className="absolute bottom-3 right-3">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-white/95 text-[#032417] backdrop-blur-md shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            {product.cert}
          </span>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="flex-1 p-5 flex flex-col justify-between space-y-4">
        <div>
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#56685f] mb-1">
            {product.subname}
          </div>
          <h3 className="text-base font-bold text-[#032417] group-hover:text-emerald-900 transition-colors leading-snug">
            {product.name}
          </h3>
          <p className="mt-2 text-xs text-[#56685f] line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Dual Tier Pricing Box */}
        <div className="p-3.5 rounded-2xl bg-[#f7faf8] border border-[#e2ebe5] space-y-2">
          {/* Retail vs B2B comparison */}
          <div className="flex items-center justify-between text-xs">
            <span className="text-[#56685f]">Harga Eceran:</span>
            <span className={`font-semibold ${!qualifiesForB2B ? 'text-[#032417] font-bold' : 'text-[#7d9186] line-through'}`}>
              {formatRupiah(product.priceRetail)}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-black text-emerald-900 block">
                Harga Borongan:
              </span>
              <span className="text-[10px] text-[#56685f] font-medium">{product.b2bLabel}</span>
            </div>
            <div className="text-right">
              <span className="text-base font-black text-emerald-700">
                {formatRupiah(product.priceB2B)}
              </span>
              <span className="text-[10px] text-[#56685f] block">/{product.unit}</span>
            </div>
          </div>

          {/* Active Applied Tier Notification */}
          <div className="pt-2 border-t border-[#e2ebe5]/60 flex items-center justify-between text-[11px]">
            <span className="text-[#56685f]">Skema Harga:</span>
            <span className={`font-bold px-2 py-0.5 rounded-md text-[10px] ${
              qualifiesForB2B 
                ? 'bg-emerald-100 text-emerald-800' 
                : 'bg-amber-100 text-amber-800'
            }`}>
              {qualifiesForB2B ? 'Harga Borongan Aktif' : 'Harga Eceran'}
            </span>
          </div>
        </div>

        {/* Quantity Stepper & Add to Cart Action */}
        <div className="space-y-2.5 pt-1">
          <div className="flex items-center gap-2">
            <div className="flex items-center border border-[#d6e3db] rounded-xl overflow-hidden bg-white shadow-xs">
              <button
                onClick={() => handleQtyChange(-1)}
                className="p-2 text-[#032417] hover:bg-[#f0f5f2] transition-colors"
                title="Kurangi kuantitas"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <input
                type="number"
                min={1}
                value={qty}
                onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-12 text-center text-xs font-bold text-[#032417] focus:outline-none"
              />
              <button
                onClick={() => handleQtyChange(1)}
                className="p-2 text-[#032417] hover:bg-[#f0f5f2] transition-colors"
                title="Tambah kuantitas"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={handleAdd}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold shadow-xs transition-all ${
                added
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#032417] text-white hover:bg-[#164e33] active:scale-95'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Ditambahkan!</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4 text-[#25b967]" />
                  <span>+ Keranjang</span>
                </>
              )}
            </button>
          </div>

          {/* Quick WA Chat & Subtotal Row */}
          <div className="flex items-center justify-between text-[11px] pt-1 border-t border-[#eef3f0]">
            <span className="text-[#56685f]">
              Subtotal: <strong className="text-[#032417]">{formatRupiah(currentPrice * qty)}</strong>
            </span>

            <a
              href={`https://wa.me/6285265458819?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-700 font-bold hover:text-emerald-900 transition-colors"
              title="Beli langsung lewat WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Beli via WA</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};
