import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeTab: 1,
    isLoading: false,
    activeMovieGroup: 'top-rated'
};

const navigationSlice = createSlice({
    initialState,
    name: 'navigation',
    reducers: {
        setActiveTab: (state, action) => {
            state.activeTab = action.payload;
        },
        toggleLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setActiveMovieGroup: (state, action) => {
            state.activeMovieGroup = action.payload;
        },
    }
});

export const { setActiveTab, toggleLoading, setActiveMovieGroup } = navigationSlice.actions;

export const navigationReducer = navigationSlice.reducer;