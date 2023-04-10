import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRockets = createAsyncThunk(
  'rockets/fetchData',
  async () => {
    try {
      const response = await axios.get('https://api.spacexdata.com/v3/rockets');
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

const initialState = [];

const Rockets = createSlice({
  name: 'Rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => ({
      ...state,
      isLoagind: true,
    }
    ));
    builder.addCase(fetchRockets.fulfilled, (state, action) => (
      {
        ...state,
        isLoagind: false,
        rockets: action.payload,
      }));
    builder.addCase(fetchRockets.rejected, (state) => ({
      ...state,
      isLoagind: false,
    }
    ));
  },
});

export default Rockets.reducer;
