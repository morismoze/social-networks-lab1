import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeTab: 1,
};

const headerSlice = createSlice({
    initialState,
    name: 'header',
    reducers: {
        toggleActiveTab: (state, action) => {
            state.activeTab = action.payload.id;
        }
    }
});

export const { toggleActiveTab } = headerSlice.actions;

export const headerReducer = headerSlice.reducer;