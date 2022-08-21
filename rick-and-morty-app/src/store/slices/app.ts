import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  page: 0,
  searchValue: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue, setPage } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
