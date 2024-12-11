import { Product } from "@/lib/data";
import { create } from "zustand";

type CartStateProps = {
  quantity: number;
  size: string;
  setSize: (size: string) => void;
  setQuantity: (quantity: number) => void;
  addQuantity: () => void;
  minusQuantity: () => void;
  cart: Product[][];
  addToCart: (collection: Product[]) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStateProps>((set) => ({
  quantity: 1,
  size: "40",
  setSize: (size) =>
    set((state) => {
      return { size: size };
    }),
  setQuantity: (quantity) =>
    set((state) => {
      return { quantity: quantity };
    }),
  addQuantity: () =>
    set((state) => {
      return { quantity: state.quantity + 1 };
    }),
  minusQuantity: () =>
    set((state) => {
      if (state.quantity > 1) {
        return { quantity: state.quantity - 1 };
      } else {
        return {};
      }
    }),
  cart: [],
  addToCart: (item: Product[]) =>
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem[0].id === item[0].id
      );
      if (existingItem) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem[0].id === item[0].id
              ? { ...cartItem, quantity: cartItem[0].quantity ?? 0 + state.quantity }
              : cartItem
          ),
        };
      } else {
        return { cart: [...state.cart, { ...item, quantity: state.quantity }] };
      }
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item[0].id !== id),
    })),
  clearCart: () => set({ cart: [] }),
}));
