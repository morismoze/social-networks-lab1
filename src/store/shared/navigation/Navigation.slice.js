import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeTab: 1,
    isLoading: false
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
        }
    }
});

export const { setActiveTab, toggleLoading } = navigationSlice.actions;

export const navigationReducer = navigationSlice.reducer;