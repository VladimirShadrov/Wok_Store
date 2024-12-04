import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

const defaultProductPageData: ProductInterface = {
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
  count: 1,
  ratio: 1,
};

export interface ProductStateInterface {
  productPageData: ProductInterface;
  productList: ProductInterface[];
  productsWithChangedCounters: ProductInterface[];
}

const productsWithChangedCounters = sessionStorage.getItem('productsWithChangedCounters')
  ? JSON.parse(sessionStorage.getItem('productsWithChangedCounters') as string)
  : [];
const initialState: ProductStateInterface = {
  productPageData: defaultProductPageData,
  productList: [],
  productsWithChangedCounters: productsWithChangedCounters,
};

export const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductPageData: (state, action: PayloadAction<number>) => {
      const productData = state.productList.find((product) => product.id === action.payload);

      if (productData) {
        state.productPageData = productData;
      }
    },
    setProductList: (state, action: PayloadAction<ProductInterface[]>) => {
      state.productList = action.payload;
      sessionStorage.setItem('productList', JSON.stringify(state.productList));
    },
    setProductCount: (state, action: PayloadAction<{ id: number; count: number }>) => {
      const { id, count } = action.payload;
      const product = state.productList.find((product) => product.id === id);

      if (product) {
        product.count = count;
        state.productPageData.count = count;
        sessionStorage.setItem('productList', JSON.stringify(state.productList));
      }
    },
    setProductsListWithChangedCounters: (state) => {
      state.productsWithChangedCounters = state.productList.filter((product) => product.count > 1);
      sessionStorage.setItem('productsWithChangedCounters', JSON.stringify(state.productsWithChangedCounters));
    },
  },
});

export const { setProductPageData, setProductList, setProductCount, setProductsListWithChangedCounters } = ProductSlice.actions;
export default ProductSlice.reducer;
