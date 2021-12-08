import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    genreFilters: [],
    statusFilters: [],
    runtimeFilters: []
};

const filterSlice = createSlice({
    initialState,
    name: 'filter',
    reducers: {
        setGenreFilters: (state, action) => {
            state.genreFilters = action.payload;
        },
        setStatusFilters: (state, action) => {
            state.statusFilters = action.payload;
        },
        setRuntimeFilters: (state, action) => {
            state.runtimeFilters = action.payload;
        }
    },
});

export const {
    setGenreFilters,
    setStatusFilters,
    setRuntimeFilters
} = filterSlice.actions;

export const filterReducer = filterSlice.reducer;