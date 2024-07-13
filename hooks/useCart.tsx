import { create } from "zustand";

type CartStateProps = {
  quantity: number;
  size: string;
  setSize: (size: string) => void;
  setQuantity: (quantity: number) => void;
  addQuantity: () => void;
  minusQuantity: () => void;
  cart: Collection[];
  addToCart: (item: Collection) => void;
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
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + state.quantity }
              : cartItem
          ),
        };
      } else {
        return { cart: [...state.cart, { ...item, quantity: state.quantity }] };
      }
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
  clearCart: () => set({ cart: [] }),
}));
