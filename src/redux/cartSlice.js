import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalPrice: 0,
  },
  reducers: {
    addtocart: (state, action) => {
      const { id, title, price, img, category } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ id, title, price, img, category, quantity: 1 });
      }
    },
    remove(state, action) {
      const idToRemove = action.payload;
      const removedItem = state.cart.find((item) => item.id === idToRemove);
      if (removedItem) {
        state.cart = state.cart.filter((item) => item.id !== idToRemove);
        state.totalPrice -= Number(removedItem.price);
      }
    },
    clearCart(state) {
      state.cart = [];
      state.totalPrice = 0;
    },
  },
});
export const { addtocart, remove, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
