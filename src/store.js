import { configureStore } from '@reduxjs/toolkit';
import RocketsSlice from './Rockets/RocketsSlice';

const store = configureStore({
  reducer : {
    Rockets : RocketsSlice,
  }
})

export default store;