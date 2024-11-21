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
  totalCount: number;
  totalPrice: number;
}

const storageProductsData = sessionStorage.getItem('cartData') ? JSON.parse(sessionStorage.getItem('cartData') as string) : [];
const initialState: CartState = {
  products: storageProductsData,
  totalCount: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductInterface>) => {
      const productIndex = state.products.findIndex((product) => product.id === action.payload.id);

      if (productIndex === -1) {
        state.products.push(action.payload);
      } else {
        state.products[productIndex].count = action.payload.count + 1;
      }

      updateTotals(state);
      sessionStorage.setItem('cartData', JSON.stringify(state.products));
    },
    updateProductCountAndPrice: (state, action: PayloadAction<{ id: number; count: number }>) => {
      const productIndex = state.products.findIndex((product) => product.id === action.payload.id);

      if (productIndex === -1) {
        return;
      }

      state.products[productIndex].count = action.payload.count;

      updateTotals(state);
      sessionStorage.setItem('cartData', JSON.stringify(state.products));
    },
    removeProductFromCart: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
      updateTotals(state);
      sessionStorage.setItem('cartData', JSON.stringify(state.products));
    },
    clearCart: (state) => {
      state.products = [];
      updateTotals(state);
      sessionStorage.setItem('cartData', JSON.stringify(state.products));
    },
  },
});

export const { addToCart, updateProductCountAndPrice, removeProductFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

function updateTotals(state: CartState) {
  state.totalCount = state.products.length;
  state.totalPrice = state.products.reduce((total, product) => total + product.price * product.count, 0);
}
