export interface Category {
  id: string;
  name: string;
}

export interface Subcategory {
  id: string;
  name: string;
}

export interface Brand {
  id: string;
  name: string;
}
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  rateAvg: number;
  rateCount: number;
  imageCover: string;
}
