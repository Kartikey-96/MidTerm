import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartCount: 0,
  favoriteItems: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
      state.cartCount += 1;
    },

    deleteToCart: (state, action) => {
      const indexToRemove = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (indexToRemove !== -1) {
        state.cartItems.splice(indexToRemove, 1);
        state.cartCount -= 1;
      }
    },

    favoriteItem: (state, action) => {
      return {
        ...state,
        favoriteItems: [...state.favoriteItems, action.payload],
      };
    },

    deleteFromFavorites: (state, action) => {
      state.favoriteItems = state.favoriteItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToCart, favoriteItem, deleteToCart, deleteFromFavorites } =
  CartSlice.actions;

export default CartSlice.reducer;
