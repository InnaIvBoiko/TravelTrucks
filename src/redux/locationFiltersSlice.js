import { createSlice } from '@reduxjs/toolkit';

const locationFiltersInitialState = {
    location: '',
};

const locationFilterSlice = createSlice({
    name: 'locationFilters',
    initialState: locationFiltersInitialState,
    reducers: {
        changeFilter(state, action) {
            state.location = action.payload;
        },
    },
});

export const selectLocationFilter = state => state.filters.location;
export const { changeFilter } = locationFilterSlice.actions;
export const locationFiltersReducer = locationFilterSlice.reducer;