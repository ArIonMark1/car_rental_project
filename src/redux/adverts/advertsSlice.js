import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './middleware';

const initialState = {
  adverts: [],
  isLoading: false,
  error: null,
};

export const advertsSlice = createSlice({
  name: 'adverts',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.adverts = action.payload;
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
