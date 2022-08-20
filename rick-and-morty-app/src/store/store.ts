import { configureStore } from '@reduxjs/toolkit';

const root = (state: any) => state;

const store = configureStore({
  reducer: {
    root,
  },
});

export default store;
