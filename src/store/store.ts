import { configureStore } from '@reduxjs/toolkit';
import productDataReducer from './slices/productSlice';

export const store = configureStore({
  reducer: {
    productData: productDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
