import { configureStore } from '@reduxjs/toolkit';
import productDataReducer from './slices/productSlice';
import filterReducer from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    productData: productDataReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
