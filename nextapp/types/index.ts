export type ProductCategory = 
  | 'all' 
  | 'besi' 
  | 'semen' 
  | 'pasir' 
  | 'atap' 
  | 'finishing' 
  | 'jasa';

export interface Product {
  id: string;
  name: string;
  subname: string;
  category: ProductCategory;
  unit: string;
  priceRetail: number;
  priceB2B: number;
  moqB2B: number;
  b2bLabel: string;
  badge: string;
  cert: string;
  icon: string;
  image: string;
  fallbackImg?: string;
  description: string;
  isService?: boolean;
}

export interface LogisticsHub {
  id: string;
  label: string;
  distanceKm: number;
  hubName: string;
  kargoRate: number;
  kargoEta: string;
  armadaRate: number;
  armadaEta: string;
}

export interface CartItem {
  productId: string;
  qty: number;
}

export interface CartItemCalculated {
  productId: string;
  product: Product;
  qty: number;
  unitPrice: number;
  isB2BPrice: boolean;
  lineTotal: number;
}

export interface CartTotals {
  uniqueProductsCount: number;
  totalUnitsCount: number;
  subtotal: number;
  b2bPartnershipDiscount: number;
  taxableBase: number;
  ppn11: number;
  shippingRate: number;
  shippingEta: string;
  grandTotal: number;
  itemsCalculated: CartItemCalculated[];
}

export type ShippingMethod = 'armada' | 'kargo';
export type PaymentMethod = 'va' | 'manual' | 'cod';
