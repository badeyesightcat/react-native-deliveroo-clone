import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const sameIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      const newBasket = [...state.items];

      if (sameIndex >= 0) {
        newBasket.splice(sameIndex, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as it is not in basket. `
        );
      }

      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

export default basketSlice.reducer;
