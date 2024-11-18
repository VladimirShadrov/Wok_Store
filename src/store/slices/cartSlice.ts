import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface FoodValueInterface {
  text: string;
  value: number;
}

interface ProductInterface {
  id: number;
  title: string;
  weight: number;
  price: number;
  imgSmall: string;
  imgBig: string;
  ingridients: string[];
  nutritionalValue: FoodValueInterface[];
  description: string;
  category: string;
  count: number;
  ratio: number;
}

interface CartState {
  products: ProductInterface[];
}

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductInterface>) => {
      const productIndex = state.products.findIndex((product) => product.id === action.payload.id);

      if (productIndex === -1) {
        state.products.push(action.payload);
        sessionStorage.setItem('cartData', JSON.stringify(state.products));
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
