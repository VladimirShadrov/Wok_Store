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
}

const initialState: ProductStateInterface = {
  productPageData: defaultProductPageData,
  productList: [],
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
  },
});

export const { setProductPageData, setProductList } = ProductSlice.actions;
export default ProductSlice.reducer;
