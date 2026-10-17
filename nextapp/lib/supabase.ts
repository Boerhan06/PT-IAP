import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://bsgfizabbjcxewpwjbky.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_QFllaHXWrjQKFBZ7_VrYfg_WWcm_Ah0';

// Client-side Supabase instance for browser interactions & auth
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Server-side admin helper (only used in API routes or Server Actions)
export const getServiceSupabase = () => {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceKey) {
    throw new Error('SUPABASE_SERVICE_ROLE_KEY is required for admin server operations');
  }
  return createClient(supabaseUrl, serviceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
};

// Database helper for customer profiles
export interface UserProfile {
  id?: string;
  email?: string;
  phone?: string;
  fullName: string;
  companyName?: string;
  role: 'kontraktor' | 'mandor' | 'pemilik' | 'umum';
  created_at?: string;
}

// Database helper for material orders
export interface DatabaseOrder {
  id?: string;
  user_id?: string;
  customer_name: string;
  customer_phone: string;
  delivery_location: string;
  shipping_method: 'armada' | 'kargo';
  payment_method: 'cod' | 'va' | 'manual';
  items: Array<{
    product_id: string;
    product_name: string;
    qty: number;
    unit_price: number;
    line_total: number;
  }>;
  subtotal: number;
  discount: number;
  shipping_rate: number;
  tax: number;
  grand_total: number;
  notes?: string;
  status: 'pending' | 'confirmed' | 'shipping' | 'delivered' | 'cancelled';
  created_at?: string;
}
