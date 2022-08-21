import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { charactersApi } from './api/characters';
import { locationApi } from './api/location';
import { filterReducer } from './slices/app';

const store = configureStore({
  reducer: {
    [charactersApi.reducerPath]: charactersApi.reducer,
    [locationApi.reducerPath]: locationApi.reducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(charactersApi.middleware)
    .concat(locationApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
