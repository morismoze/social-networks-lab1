import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeTab: 1,
};

const navigationSlice = createSlice({
    initialState,
    name: 'navigation',
    reducers: {
        toggleActiveTab: (state, action) => {
            state.activeTab = action.payload.id;
        }
    }
});

export const { toggleActiveTab } = navigationSlice.actions;

export const navigationReducer = navigationSlice.reducer;