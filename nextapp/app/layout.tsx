import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PT IHSAN ABDUL PATAH (PT. IAP) — Perdagangan Umum & Material Bangunan Lembang Bandung",
  description: "Perusahaan Perdagangan Umum dan Jasa dengan Harga Murah, Mudah, dan Kualitas Terpercaya. Pengadaan Besi Beton Full SNI, Semen Padang, Holcim, Pasir Truk Bak Kayu, Baja Ringan, Bata Hebel, Granit 60x60, dan Jasa Pengeboran Sumur Lembang, Bandung Barat.",
  keywords: [
    "pt ihsan abdul patah",
    "pt iap",
    "jual besi beton bandung",
    "toko material lembang bandung barat",
    "harga semen padang lembang",
    "semen tiga roda bandung",
    "pasir pasang truk bandung",
    "baja ringan c75 murah",
    "bata merah bakar lembang",
    "jasa pengeboran sumur air lembang",
    "distributor bahan bangunan bandung barat"
  ],
  openGraph: {
    title: "PT IHSAN ABDUL PATAH (PT. IAP) — Harga Murah, Mudah, dan Kualitas Terpercaya",
    description: "Pusat Pengadaan Material Bangunan & Jasa Profesional Terlengkap di Lembang Bandung Barat.",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#032417" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    fontFamily: {
                      sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
                      heading: ['Inter', 'sans-serif'],
                    },
                    colors: {
                      forest: {
                        DEFAULT: '#3f6c34',
                        hover: '#33592a',
                        dark: '#284621',
                        light: '#4d833f',
                        subtle: '#eaf2e6',
                      },
                      sage: {
                        DEFAULT: '#c2d8b0',
                        light: '#e3eed9',
                        subtle: '#f2f6ee',
                        border: '#d1e2c6',
                      },
                      earth: {
                        DEFAULT: '#8b5a36',
                        light: '#b07a52',
                        subtle: '#f5eee8',
                      },
                      canvas: '#f3f6ee',
                      card: '#ffffff',
                    },
                    boxShadow: {
                      apple: '0 10px 28px -6px rgba(35, 60, 30, 0.07), 0 4px 10px -2px rgba(35, 60, 30, 0.04)',
                      'apple-hover': '0 20px 42px -8px rgba(35, 60, 30, 0.12), 0 8px 18px -4px rgba(35, 60, 30, 0.06)',
                      'apple-floating': '0 18px 45px -10px rgba(30, 55, 25, 0.13), 0 8px 16px -4px rgba(30, 55, 25, 0.05)',
                      'apple-pill': '0 8px 24px -4px rgba(40, 65, 35, 0.08)',
                    },
                    borderRadius: {
                      '2xl': '1.25rem',
                      '3xl': '1.75rem',
                      '4xl': '2.25rem',
                    }
                  }
                }
              }
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased text-[#1a2e19] bg-[#f3f6ee]">
        {children}
      </body>
    </html>
  );
}
