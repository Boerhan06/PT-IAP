'use client';

import React from 'react';

interface IAPLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  monochrome?: boolean;
}

export const IAPLogo: React.FC<IAPLogoProps> = ({
  className = '',
  size = 40,
  showText = true,
  monochrome = false
}) => {
  const green = monochrome ? '#032417' : '#0e6e42';
  const yellow = monochrome ? '#032417' : '#f5a623';
  const red = monochrome ? '#032417' : '#d92525';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Precision SVG Vector of PT IAP Monogram */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Leftmost diagonal stem (I) */}
        <polygon
          points="20,78 30,78 46,38 36,38"
          fill={green}
        />
        <polygon
          points="28,78 38,78 54,38 44,38"
          fill={green}
        />

        {/* Central Triangle Apex & Right Slant (A) */}
        <polygon
          points="48,18 56,18 78,78 68,78 52,36 44,56 40,46"
          fill={yellow}
        />

        {/* Horizontal Crossbar & Rounded Loop of (P) */}
        <path
          d="M32 44 H72 C82 44 86 50 86 58 C86 66 80 72 70 72 H58 L54 64 H68 C73 64 76 62 76 58 C76 54 73 52 68 52 H32 Z"
          fill={red}
        />
      </svg>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-black text-lg tracking-tight text-[#032417]">
              PT. IAP
            </span>
          </div>
          <span className="text-[11px] font-extrabold tracking-wider text-[#56685f] uppercase -mt-0.5">
            PT IHSAN ABDUL PATAH
          </span>
        </div>
      )}
    </div>
  );
};
