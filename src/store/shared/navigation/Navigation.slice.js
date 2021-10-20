import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeTab: 1,
    isLoading: false
};

const navigationSlice = createSlice({
    initialState,
    name: 'navigation',
    reducers: {
        toggleActiveTab: (state, action) => {
            state.activeTab = action.payload.id;
        },
        toggleLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
});

export const { toggleActiveTab, toggleLoading } = navigationSlice.actions;

export const navigationReducer = navigationSlice.reducer;