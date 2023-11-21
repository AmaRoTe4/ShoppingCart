import { create } from "zustand";
import { Products } from "../types";

interface ProductsType {
  getProductsInCart: Products[];
  addProductsInCart: (anyValue: Products) => void;
  removeProductsInCart: (id: string, count: number) => void;
  cleanProductsInCart: () => void;
}

export const useProducts = create<ProductsType>()((set) => ({
  getProductsInCart: [],
  addProductsInCart: (anyValue: Products) => {
    set(({ getProductsInCart }) => ({
      getProductsInCart: [...getProductsInCart, anyValue],
    }));
  },
  removeProductsInCart: (id: string) =>
    set(({ getProductsInCart }) => ({
      getProductsInCart: getProductsInCart.filter((n) => n.id !== id),
    })),
  cleanProductsInCart: () => set(() => ({ getProductsInCart: [] })),
}));
