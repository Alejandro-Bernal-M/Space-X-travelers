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

const initialState = {
  isLoading: false,
  error: false,
  rockets: [],
};

const Rockets = createSlice({
  name: 'Rockets',
  initialState,
  reducers: {
    booking: (state, payload) => {
      const newState = state.rockets.forEach((item) => {
        if (item.id === payload.payload) {
          item.reserved = true;
        }
      });
      return newState;
    },
    cancelBooking: (state, payload) => {
      const newState = state.rockets.forEach((item) => {
        if (item.id === payload.payload) {
          item.reserved = false;
        }
      });
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => ({
      ...state,
      isLoading: true,
    }
    ));
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      const rockets = [];
      action.payload.forEach((rocket) => {
        const newRocket = {
          id: rocket.rocket_id,
          name: rocket.rocket_name,
          type: rocket.rocket_type,
          image: rocket.flickr_images[0],
          description: rocket.description,
        };
        rockets.push(newRocket);
      });
      state.rockets = rockets;
      state.isLoading = false;
    });
    builder.addCase(fetchRockets.rejected, (state) => ({
      ...state,
      isLoading: false,
      error: true,
    }
    ));
  },
});

export default Rockets.reducer;
export const { booking, cancelBooking } = Rockets.actions;
