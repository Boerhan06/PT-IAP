import React from 'react';
import Link from 'next/link';
import { IAPLogo } from '@/components/IAPLogo';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#f3f6ee] text-[#1a2e19]">
      <div className="max-w-md w-full bg-white rounded-[32px] p-8 text-center border border-[#dbe6d3] shadow-apple space-y-6">
        <div className="flex justify-center">
          <IAPLogo size={48} showText={true} />
        </div>
        
        <div className="space-y-2">
          <span className="text-4xl font-black text-[#3f6c34]">404</span>
          <h1 className="text-xl font-extrabold text-[#1b3319]">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-xs sm:text-sm text-[#536b51] leading-relaxed">
            Halaman yang Anda cari mungkin telah dipindahkan atau tautan yang Anda tuju kurang tepat.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#3f6c34] text-white hover:bg-[#33592a] text-xs font-bold shadow-apple-pill transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>
    </div>
  );
}
