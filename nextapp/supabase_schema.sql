-- ==============================================================================
-- SKEMA DATABASE SUPABASE: PT IHSAN ABDUL PATAH (PT. IAP)
-- Jalankan query ini di menu "SQL Editor" pada Dashboard Supabase Anda:
-- https://supabase.com/dashboard/project/bsgfizabbjcxewpwjbky/sql/new
-- ==============================================================================

-- 1. Enable Extension UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==============================================================================
-- 2. TABEL PROFILES (Mitra Kontraktor, Mandor, & Customer)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  phone TEXT,
  full_name TEXT NOT NULL,
  company_name TEXT,
  role TEXT NOT NULL DEFAULT 'kontraktor' CHECK (role IN ('kontraktor', 'mandor', 'pemilik', 'umum')),
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- RLS untuk tabel profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Profiles can be viewed by anyone authenticated" 
  ON public.profiles FOR SELECT 
  TO authenticated 
  USING (true);

CREATE POLICY "Users can insert their own profile" 
  ON public.profiles FOR INSERT 
  TO authenticated 
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile" 
  ON public.profiles FOR UPDATE 
  TO authenticated 
  USING (auth.uid() = id);

-- ==============================================================================
-- 3. TRIGGER OTOMATIS: Buat profil saat user mendaftar di auth.users
-- ==============================================================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, phone, full_name, company_name, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'phone', ''),
    COALESCE(NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1)),
    COALESCE(NEW.raw_user_meta_data->>'company_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'role', 'kontraktor')
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- ==============================================================================
-- 4. TABEL PRODUCTS (Katalog Material & Jasa Bor Sumur)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  subname TEXT,
  category TEXT NOT NULL CHECK (category IN ('besi', 'semen', 'pasir', 'atap', 'finishing', 'jasa')),
  unit TEXT NOT NULL,
  price_retail NUMERIC NOT NULL,
  price_b2b NUMERIC NOT NULL,
  moq_b2b INT DEFAULT 10,
  b2b_label TEXT,
  badge TEXT,
  cert TEXT DEFAULT 'SNI Resmi',
  icon TEXT,
  image TEXT,
  description TEXT,
  is_service BOOLEAN DEFAULT FALSE,
  in_stock BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- RLS untuk tabel products (publik bisa membaca)
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view products" 
  ON public.products FOR SELECT 
  TO anon, authenticated 
  USING (true);

-- ==============================================================================
-- 5. TABEL ORDERS (Pemesanan Material & Penawaran Proyek)
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  customer_name TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  delivery_location TEXT NOT NULL,
  shipping_method TEXT NOT NULL DEFAULT 'armada' CHECK (shipping_method IN ('armada', 'kargo')),
  payment_method TEXT NOT NULL DEFAULT 'cod' CHECK (payment_method IN ('cod', 'va', 'manual')),
  items JSONB NOT NULL DEFAULT '[]'::jsonb,
  subtotal NUMERIC NOT NULL DEFAULT 0,
  discount NUMERIC NOT NULL DEFAULT 0,
  shipping_rate NUMERIC NOT NULL DEFAULT 0,
  tax NUMERIC NOT NULL DEFAULT 0,
  grand_total NUMERIC NOT NULL DEFAULT 0,
  notes TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'shipping', 'delivered', 'cancelled')),
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- RLS untuk tabel orders
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Customers can insert orders" 
  ON public.orders FOR INSERT 
  TO anon, authenticated 
  WITH CHECK (true);

CREATE POLICY "Users can view their own orders" 
  ON public.orders FOR SELECT 
  TO authenticated 
  USING (auth.uid() = user_id);

-- ==============================================================================
-- 6. SEED DATA AWAL: Material Utama PT. IAP
-- ==============================================================================
INSERT INTO public.products (id, name, subname, category, unit, price_retail, price_b2b, moq_b2b, b2b_label, badge, cert, icon, image, description, is_service)
VALUES 
  ('besi-full-sni-10', 'Besi Beton Ulir 10mm Full SNI', 'Toleransi 0.2mm • Sertifikasi Pabrik', 'besi', 'Batang (12m)', 84500, 78000, 50, 'Diskon Rp 6.500/btg (Min 50 btg)', 'SNI Full', 'SNI 2052:2017', 'Boxes', 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80', 'Besi beton ulir standar konstruksi gedung dan jembatan.', false),
  ('semen-padang-50kg', 'Semen Padang Type 1 PCC 50kg', 'Standar Konstruksi Struktur Kokoh', 'semen', 'Sak (50kg)', 68500, 63000, 100, 'Potong Rp 5.500/sak (Min 100 sak)', 'Pabrik Resmi', 'SNI 15-7064-2004', 'Layers', 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80', 'Semen PCC kualitas premium dengan daya rekat tinggi.', false),
  ('pasir-pasang-truk', 'Pasir Pasang Lembang Super (Dump Truck)', '1 Truk Indeks 7 m³ Penuh', 'pasir', 'Truk (7 m³)', 1850000, 1650000, 2, 'Potongan Rp 200.000/rit (Min 2 rit)', '1 Truk Penuh', 'Uji Lab Bebas Lumpur', 'Truck', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80', 'Pasir pasang ayak bersih tanpa kerikil besar.', false),
  ('bor-sumur-kedalaman-60', 'Jasa Pengeboran Sumur Air Bersih 60m', 'Mesin Rig Hidrolik + Survey Geolistrik', 'jasa', 'Paket Titik', 18500000, 16500000, 1, 'Cashback Rp 2.000.000 + Pipa Gratis', 'Garansi Air Keluar', 'Teknisi Tersertifikasi', 'Sparkles', 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f3?auto=format&fit=crop&w=600&q=80', 'Pengeboran sumur air dalam dengan jaminan debit deras.', true)
ON CONFLICT (id) DO NOTHING;
