export interface Category {
  _id: string;
  name: string;
}

export interface Subcategory {
  _id: string;
  name: string;
  category: string;
}

export interface Brand {
  _id: string;
  name: string;
  category: string;
  subCategory: string;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  rateAvg?: number;         // Optional since it may not be present
  rateCount: number;
  imageCover: string;
  images: string[];         // Fixed: should be an array
  sold: number;
  stock: number;
  category: string;
  subCategory: string;
  brand: string;
  slug: string;
  reviews: unknown[];           // You can define a `Review` type if needed
  createdAt: string;
  updatedAt: string;
}


export type WishlistResponse = {
  message: string;
  wishList: Product[];
};

export interface CartItem {
  product: Product
  price: number;
  quantity: number;
}


export interface CartDocument {
  _id: string;
  user: string;         // user ID
  items: CartItem[];
  totalPrice: number;
  totalPriceAfterDiscount?: number;
  discount?: number;
}

export interface CartResponse {
  message: string;
  cart: {
    _id: string;
    createdAt: string;
    user: string;
    items: CartItem[];
    totalPrice: number;
    totalPriceAfterDiscount?: number;
    discount:number;
  };
}
