import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6570b9d809586eff6641dc86.mockapi.io';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAdverts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/advert');
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
