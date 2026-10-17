'use client';

import React, { useState, useEffect } from 'react';
import { CATALOG_PRODUCTS, COMPANY_INFO } from '@/lib/products';
import { formatRupiah } from '@/lib/utils';
import { 
  Search, 
  X, 
  Package, 
  FileSpreadsheet, 
  ShoppingCart, 
  ArrowRight,
  Radio,
  Building2,
  MessageCircle
} from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (productId: string) => void;
  onOpenCart: () => void;
  onOpenRadar: () => void;
  onOpenBoQ: () => void;
  onOpenProfile: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onOpenCart,
  onOpenRadar,
  onOpenBoQ,
  onOpenProfile
}) => {
  const [query, setQuery] = useState('');

  // Handle Ctrl+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProducts = CATALOG_PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.subname.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs" 
      />

      {/* Palette Container */}
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#dde8e1] overflow-hidden z-10 flex flex-col">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#dde8e1] flex items-center gap-3 bg-[#f7faf8]">
          <Search className="w-5 h-5 text-emerald-800" />
          <input
            type="text"
            autoFocus
            placeholder="Cari besi SNI, semen Padang/Holcim, pasir truk, bata, sumur bor..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm font-semibold text-[#032417] placeholder:text-[#56685f] focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#56685f] hover:text-[#032417]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-3 space-y-4 text-xs">
          
          {/* Quick Actions */}
          <div>
            <div className="text-[10px] uppercase font-bold text-[#56685f] px-2 mb-1.5">
              Pintasan Cepat PT. IAP
            </div>
            <div className="space-y-1">
              <a
                href={COMPANY_INFO.whatsapp1}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-2.5 rounded-2xl hover:bg-[#f0f5f2] text-left transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span className="font-bold text-[#032417]">Chat Langsung ke WhatsApp Admin (0852 6545 8819)</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
              </a>

              <button
                onClick={() => { onClose(); onOpenProfile(); }}
                className="w-full flex items-center justify-between p-2.5 rounded-2xl hover:bg-[#f0f5f2] text-left transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Building2 className="w-4 h-4 text-emerald-700" />
                  <span className="font-bold text-[#032417]">Buka Profil Perusahaan (Visi & Misi Resmi)</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
              </button>

              <button
                onClick={() => { onClose(); onOpenCart(); }}
                className="w-full flex items-center justify-between p-2.5 rounded-2xl hover:bg-[#f0f5f2] text-left transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <ShoppingCart className="w-4 h-4 text-emerald-700" />
                  <span className="font-bold text-[#032417]">Buka Keranjang Pesanan</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
              </button>

              <button
                onClick={() => { onClose(); onOpenRadar(); }}
                className="w-full flex items-center justify-between p-2.5 rounded-2xl hover:bg-[#f0f5f2] text-left transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Radio className="w-4 h-4 text-emerald-700 animate-pulse" />
                  <span className="font-bold text-[#032417]">Radar Truk GPS (Pengantaran Live Lembang)</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
              </button>

              <button
                onClick={() => { onClose(); onOpenBoQ(); }}
                className="w-full flex items-center justify-between p-2.5 rounded-2xl hover:bg-[#f0f5f2] text-left transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <FileSpreadsheet className="w-4 h-4 text-emerald-700" />
                  <span className="font-bold text-[#032417]">Unggah Dokumen RAB / BoQ Excel</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Catalog Products */}
          <div>
            <div className="text-[10px] uppercase font-bold text-[#56685f] px-2 mb-1.5">
              Material & Layanan ({filteredProducts.length})
            </div>
            {filteredProducts.length === 0 ? (
              <div className="p-4 text-center text-[#56685f]">
                Tidak ada material yang sesuai dengan kata kunci Anda.
              </div>
            ) : (
              <div className="space-y-1">
                {filteredProducts.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      onSelectProduct(p.id);
                      onClose();
                    }}
                    className="flex items-center justify-between p-2.5 rounded-2xl hover:bg-[#f0f5f2] cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Package className="w-4 h-4 text-emerald-700" />
                      <div>
                        <div className="font-bold text-[#032417]">{p.name}</div>
                        <div className="text-[10px] text-[#56685f]">{p.subname} • {p.cert}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-black text-emerald-800">{formatRupiah(p.priceB2B)}</div>
                      <div className="text-[9px] text-[#56685f]">Grosir /{p.unit}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Footer shortcuts */}
        <div className="p-3 bg-[#f7faf8] border-t border-[#dde8e1] flex items-center justify-between text-[11px] text-[#56685f]">
          <span>Tekan <kbd className="px-1.5 py-0.5 rounded bg-white border border-[#d6e3db] font-mono font-bold text-[#032417]">Esc</kbd> untuk menutup</span>
          <span>Shortcut: <kbd className="px-1.5 py-0.5 rounded bg-white border border-[#d6e3db] font-mono font-bold text-[#032417]">Ctrl+K</kbd></span>
        </div>

      </div>
    </div>
  );
};
