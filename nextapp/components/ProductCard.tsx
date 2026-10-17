'use client';

import React, { useState } from 'react';
import { Product } from '@/types';
import { formatRupiah } from '@/lib/utils';
import { 
  Plus, 
  Minus, 
  ShoppingCart, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  MessageCircle 
} from 'lucide-react';

interface ProductCardProps {
  product: Product;
  isB2BMode: boolean;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isB2BMode,
  onAddToCart
}) => {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const qualifiesForB2B = isB2BMode || qty >= product.moqB2B;
  const currentPrice = qualifiesForB2B ? product.priceB2B : product.priceRetail;
  const discountPercent = Math.round(((product.priceRetail - product.priceB2B) / product.priceRetail) * 100);

  const handleQtyChange = (delta: number) => {
    setQty(prev => Math.max(1, prev + delta));
  };

  const handleAdd = () => {
    onAddToCart(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  const displayImage = imgError ? product.fallbackImg : product.image;

  // Generate WhatsApp order message for single item
  const waMessage = encodeURIComponent(
    `Halo PT IHSAN ABDUL PATAH (PT. IAP),\n` +
    `Saya tertarik memesan material berikut:\n` +
    `• Produk: ${product.name}\n` +
    `• Jumlah: ${qty} ${product.unit}\n` +
    `• Skema: ${qualifiesForB2B ? 'Harga Borongan/Grosir' : 'Harga Eceran'}\n` +
    `• Estimasi Total: ${formatRupiah(currentPrice * qty)}\n\n` +
    `Mohon info ketersediaan stok & jadwal pengiriman armada. Terima kasih.`
  );

  return (
    <div className="bg-white rounded-[28px] border border-[#e1ebda] shadow-apple hover:shadow-apple-hover hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col group">
      
      {/* Product Image Media Frame */}
      <div className="relative h-48 w-full overflow-hidden bg-[#eef4e8] rounded-t-[28px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={displayImage}
          alt={product.name}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
          <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-[#1b3319]/90 text-white backdrop-blur-md shadow-apple-pill">
            {product.badge}
          </span>
          {discountPercent > 0 && (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#c2d8b0] text-[#1b3319] shadow-xs flex items-center gap-1 border border-[#b0cc9c]">
              <Sparkles className="w-3 h-3 text-[#1b3319]" /> Potong -{discountPercent}%
            </span>
          )}
        </div>

        {/* Certificate Badge */}
        <div className="absolute bottom-3 right-3">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold bg-white/95 text-[#244026] backdrop-blur-md shadow-apple-pill border border-[#e1ebda]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2f542c]" />
            {product.cert}
          </span>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between space-y-4">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-[#637d61] mb-1">
            {product.subname}
          </div>
          <h3 className="text-base font-extrabold text-[#1b3319] group-hover:text-[#2f542c] transition-colors leading-snug">
            {product.name}
          </h3>
          <p className="mt-2 text-xs text-[#536b51] line-clamp-1 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Dual Tier Pricing Box */}
        <div className="p-3.5 rounded-2xl bg-[#f8faf6] border border-[#e4ecde] space-y-2">
          {/* Retail vs B2B comparison */}
          <div className="flex items-center justify-between text-xs">
            <span className="text-[#637d61]">Harga Eceran:</span>
            <span className={`font-semibold ${!qualifiesForB2B ? 'text-[#1b3319] font-bold' : 'text-[#8ba289] line-through'}`}>
              {formatRupiah(product.priceRetail)}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-black text-[#1b3319] block">
                Harga Borongan:
              </span>
              <span className="text-[10px] text-[#536b51] font-medium">{product.b2bLabel}</span>
            </div>
            <div className="text-right">
              <span className="text-base font-black text-[#2f542c]">
                {formatRupiah(product.priceB2B)}
              </span>
              <span className="text-[10px] text-[#637d61] block">/{product.unit}</span>
            </div>
          </div>

          {/* Active Applied Tier Notification */}
          <div className="pt-2 border-t border-[#e2ebe5]/60 flex items-center justify-between text-[11px]">
            <span className="text-[#637d61]">Skema:</span>
            <span className={`font-bold px-2.5 py-0.5 rounded-full text-[10px] ${
              qualifiesForB2B 
                ? 'bg-[#e3eed9] text-[#244026] border border-[#cde0c2]' 
                : 'bg-[#f4efe8] text-[#805736] border border-[#ebdccf]'
            }`}>
              {qualifiesForB2B ? 'Harga Borongan Aktif' : 'Harga Eceran'}
            </span>
          </div>
        </div>

        {/* Quantity Stepper & Add to Cart Action */}
        <div className="space-y-2.5 pt-1">
          <div className="flex items-center gap-2">
            <div className="flex items-center border border-[#d6e3ce] rounded-full overflow-hidden bg-white shadow-xs">
              <button
                onClick={() => handleQtyChange(-1)}
                className="p-2 text-[#244026] hover:bg-[#f4f7f0] transition-colors"
                title="Kurangi kuantitas"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <input
                type="number"
                min={1}
                value={qty}
                onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-10 text-center text-xs font-bold text-[#1b3319] focus:outline-none"
              />
              <button
                onClick={() => handleQtyChange(1)}
                className="p-2 text-[#244026] hover:bg-[#f4f7f0] transition-colors"
                title="Tambah kuantitas"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={handleAdd}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full text-xs font-bold shadow-apple-pill transition-all transform active:scale-95 ${
                added
                  ? 'bg-[#3f6c34] text-white'
                  : 'bg-[#3f6c34] text-white hover:bg-[#33592a]'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Ditambahkan!</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4 text-[#a8dc98]" />
                  <span>+ Keranjang</span>
                </>
              )}
            </button>
          </div>

          {/* Quick WA Chat & Subtotal Row */}
          <div className="flex items-center justify-between text-[11px] pt-1 border-t border-[#eef3ea]">
            <span className="text-[#637d61]">
              Subtotal: <strong className="text-[#1b3319]">{formatRupiah(currentPrice * qty)}</strong>
            </span>

            <a
              href={`https://wa.me/6285265458819?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#3f6c34] font-bold hover:text-[#1b3319] transition-colors"
              title="Beli langsung lewat WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#3f6c34]" />
              <span>Beli via WA</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};
