import { combineReducers, configureStore } from '@reduxjs/toolkit';
import missionsSlice from './missions/missionsSlice';

const rootReducer = combineReducers({
  missions: missionsSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
