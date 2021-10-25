import { createSlice } from "@reduxjs/toolkit";

import { actions } from "./Movie.actions";

const initialState = {
    status: 'idle',
    activeId: null,
    activeIdDetails: null
};

const movieSlice = createSlice({
    initialState,
    name: 'movie',
    reducers: {
        setActiveMovie: (state, action) => {
            state.activeId = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(actions.getDetails.pending, (state) => {
                state.status = 'waiting';
                state.activeId = initialState.activeId;
                state.activeIdDetails = initialState.activeIdDetails;
            })
            .addCase(actions.getDetails.fulfilled, (state, action) => {
                state.status = 'success';
                state.activeIdDetails = action.payload;
            })
            .addCase(actions.getDetails.rejected, (state) => {
                state.status = 'failure';
                state.activeId = initialState.activeId;
                state.activeIdDetails = initialState.activeIdDetails;
            })
    }
});

export const { setActiveMovie } = movieSlice.actions;

export const movieReducer = movieSlice.reducer;