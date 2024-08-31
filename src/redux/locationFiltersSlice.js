import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
    location: '',
    equipment: '',
    type: '',
};

const filterSlice = createSlice({
    name: 'filters',
    initialState: filtersInitialState,
    reducers: {
        handleClick(state, action) {
            state.location = action.payload;
        },
    },
});

export const selectLocationFilter = state => state.filters.location;
export const selectEquipmentFilter = state => state.filters.equipment;
export const selectTypeFilter = state => state.filters.type;
export const { handleClick } = filterSlice.actions;
export const FiltersReducer = filterSlice.reducer;