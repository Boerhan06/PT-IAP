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
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      primary: '#032417',
                      'primary-light': '#0e6e42',
                      'primary-container': '#084d2e',
                      secondary: '#1db954',
                      'secondary-container': '#c7ebd5',
                      accent: '#f5a623',
                      iapred: '#d92525',
                      surface: '#ffffff',
                      'surface-container-low': '#f4f7f5',
                      'surface-container': '#eaf1ed',
                      'surface-container-high': '#dde8e1',
                    }
                  }
                }
              }
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased text-[#032417] bg-[#f7faf8]">
        {children}
      </body>
    </html>
  );
}
