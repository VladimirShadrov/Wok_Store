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

const savedProduct = sessionStorage.getItem('selectedProduct');
const initialState: ProductStateInterface = {
  productPageData: savedProduct ? JSON.parse(savedProduct) : defaultProductPageData,
  productList: [],
};

export const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductPageData: (state, action: PayloadAction<number>) => {
      console.log('Id выбранного продукта: ', action.payload);

      // const productData = sessionStorage.getItem('selectedProduct');
      // if (productData) {
      //   state.productPageData = JSON.parse(productData);
      // }
    },
    setProductList1: (state, action: PayloadAction<ProductInterface[]>) => {
      state.productList = action.payload;
    },
  },
});

export const { setProductPageData, setProductList1 } = ProductSlice.actions;
export default ProductSlice.reducer;
