
export interface ProductVariant {
  id: number;
  label: string;
  available: boolean;
}

export interface ProductColor extends ProductVariant {
  colorCode: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discount?: number;
  rating: number;
  images: string[];
  sizes: ProductVariant[];
  colors: ProductColor[];
  stock: number;
}

export interface AddressInfo {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  valid: boolean;
}

export interface UserSelections {
  selectedImage: number;
  selectedSize?: number;
  selectedColor?: number;
  zipCode?: string;
  addressInfo?: AddressInfo;
}
