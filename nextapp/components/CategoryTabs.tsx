'use client';

import React from 'react';
import { ProductCategory } from '@/types';
import { 
  Boxes, 
  Layers, 
  Grid, 
  Truck, 
  Wrench, 
  Package,
  Sparkles
} from 'lucide-react';

interface CategoryTabsProps {
  activeCategory: ProductCategory;
  onSelectCategory: (cat: ProductCategory) => void;
  categoryCounts: Record<string, number>;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  activeCategory,
  onSelectCategory,
  categoryCounts
}) => {
  const categories: { id: ProductCategory; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'Semua', icon: <Boxes className="w-4 h-4" /> },
    { id: 'besi', label: 'Besi SNI', icon: <Layers className="w-4 h-4" /> },
    { id: 'semen', label: 'Semen', icon: <Package className="w-4 h-4" /> },
    { id: 'pasir', label: 'Pasir & Batu', icon: <Truck className="w-4 h-4" /> },
    { id: 'atap', label: 'Baja & Atap', icon: <Grid className="w-4 h-4" /> },
    { id: 'finishing', label: 'Bata & Granit', icon: <Boxes className="w-4 h-4" /> },
    { id: 'jasa', label: 'Bor Sumur & Jasa', icon: <Wrench className="w-4 h-4" /> },
  ];

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;
        const count = categoryCounts[cat.id] || 0;

        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
              isActive
                ? 'bg-[#032417] text-white border-[#032417] shadow-sm shadow-emerald-950/20'
                : 'bg-white text-[#56685f] border-[#d6e3db] hover:border-[#032417] hover:text-[#032417]'
            }`}
          >
            <span className={isActive ? 'text-[#25b967]' : 'text-gray-400'}>
              {cat.icon}
            </span>
            <span>{cat.label}</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] ${
              isActive ? 'bg-white/20 text-white' : 'bg-[#eaf1ed] text-[#032417]'
            }`}>
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
