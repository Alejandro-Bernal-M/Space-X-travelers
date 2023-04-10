import { combineReducers, configureStore } from '@reduxjs/toolkit';
import missionsSlice from './missions/missionsSlice';
import RocketsSlice from './Rockets/RocketsSlice';

const rootReducer = combineReducers({
  missions: missionsSlice.reducer,
  rockets: RocketsSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
