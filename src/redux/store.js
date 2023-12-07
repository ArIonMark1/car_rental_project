import { configureStore } from '@reduxjs/toolkit';
import { advertsSlice } from './adverts/advertsSlice';

export const store = configureStore({
  reducer: {
    [advertsSlice.name]: advertsSlice.reducer,
  },
});
