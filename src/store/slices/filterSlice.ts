import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type FilterCategoryType = {
  name: string;
  filterKey: string;
};

export interface FilterState {
  filterCategory: FilterCategoryType;
}

const initialState: FilterState = {
  filterCategory: {
    name: 'Все',
    filterKey: 'category',
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterCategory(state, action: PayloadAction<FilterCategoryType>) {
      state.filterCategory = action.payload;
    },
  },
});

export const { setFilterCategory } = filterSlice.actions;
export default filterSlice.reducer;
