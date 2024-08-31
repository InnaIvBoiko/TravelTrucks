import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from '@reduxjs/toolkit';
// import { selectLocationFilter } from './locationFiltersSlice';
import { fetchCampers } from '../campers-api';

const campersInitialState = {
  items: [],
  loading: false,
  error: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: campersInitialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      
});

export const selectCampers = state => state.campers.items;
export const campersReducer = campersSlice.reducer;
// export const selectFilteredCampers = createSelector([selectCampers, selectLocationFilter], (campers, locationFilters) => {
//   return campers.locationFilters(({ location }) =>
//     location.toLowerCase().includes(locationFilters.toLowerCase())
//   );
// }
// );
export const selectFilteredCampers = createSelector(selectCampers);
