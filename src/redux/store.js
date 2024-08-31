import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './campersSlice';
// import { locationFiltersReducer } from './locationFiltersSlice';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    // filters: locationFiltersReducer,
  },
})