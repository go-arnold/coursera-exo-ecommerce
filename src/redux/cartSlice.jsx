import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalItems: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      state.items.push(item);
      state.totalItems++;
      state.totalPrice += item.price;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
