export interface Product {
  code: number;
  name: string;
  imageUrl: string;
  dropRatio: number;
  price: number;
  countOfPrices: number;
  followCount: number;
  url: string;
}

export interface ProductResponse {
  horizontalProductList?: Product[];
  productList: Product[];
  nextUrl: string;
}

export interface ProductDetail {
  mkName: string;
  productName: string;
  badge: string;
  rating: number;
  imageUrl: string;
  storageOptions: string[];
  countOfPrices: number;
  price: number;
  freeShipping: boolean;
  lastUpdate: string;
}

export type DetailParam = {
  productId?: string;
};

export interface DetailParam2 {
  productId: string;
}

export interface ErrorContextType {
  error: string | null;
  setError: (error: string | null) => void;
}

export interface LoadingContextType {
  isLoading: boolean;
  setLoading: (state: boolean) => void;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type?: string;
  children: React.ReactNode;
}
