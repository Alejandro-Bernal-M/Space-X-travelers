import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const url = 'https://api.spacexdata.com/v3/missions';
    const res = await fetch(url);
    const data = await res.json();
    return data;
  },
);

const initialState = {
  missions: [],
  loading: false,
  error: false,
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const newState = state.missions.forEach((element) => {
        if (element.mission_id === action.payload) {
          element.reserved = !element.reserved;
        }
      });
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.loading = false;
        const data = [];
        action.payload.forEach((element) => {
          const item = {};
          item.mission_name = element.mission_name;
          item.mission_id = element.mission_id;
          item.description = element.description;
          item.reserved = false;
          data.push(item);
        });
        state.missions = data;
      })
      .addCase(fetchMissions.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default missionsSlice;
export { fetchMissions };
