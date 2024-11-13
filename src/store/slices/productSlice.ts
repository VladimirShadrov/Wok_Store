import { createSlice } from '@reduxjs/toolkit';

interface FoodValueInterface {
  text: string;
  value: number;
}

interface ProductDataInterface {
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
}

export interface ProductState {
  productData: ProductDataInterface;
}

const defaultProductState: ProductDataInterface = {
  id: 0,
  title: '',
  weight: 0,
  price: 0,
  imgSmall: '',
  imgBig: '',
  ingridients: [],
  nutritionalValue: [],
  description: '',
  category: '',
};

const savedProduct = sessionStorage.getItem('selectedProduct');
const initialState: ProductState = {
  productData: savedProduct ? JSON.parse(savedProduct) : defaultProductState,
};

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductData: (state) => {
      const productData = sessionStorage.getItem('selectedProduct');
      if (productData) {
        state.productData = JSON.parse(productData);
      }
    },
  },
});

export const { setProductData } = ProductSlice.actions;
export default ProductSlice.reducer;
