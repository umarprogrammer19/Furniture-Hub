import { create } from "zustand";

export const useCart = create((set) => ({
  cart: [],
  addToCart: (item, amount) => {
    set((state) => {
      const existingItemIndex = state.cart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].amount += 1;
        return { cart: updatedCart };
      } else {
        return { cart: [...state.cart, { ...item, amount: amount }] };
      }
    });
  },
  deleteFromCart: (item) => {
    set((state) => {
      const existingItemIndex = state.cart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        if (updatedCart[existingItemIndex].amount > 1) {
          updatedCart[existingItemIndex].amount -= 1;
        } else {
          updatedCart.splice(existingItemIndex, 1);
        }
        return { cart: updatedCart };
      }
      return { cart: state.cart };
    });
  },
  clearCart: () => set({ cart: [] }),
}));
