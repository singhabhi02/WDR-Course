import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: [],
  },

  reducers: {
    addtocart: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addtocart } = cartSlice.actions;
export default cartSlice.reducer;
