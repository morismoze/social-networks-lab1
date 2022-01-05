import { createSlice } from "@reduxjs/toolkit";

import { actions } from "./PopularShows.actions";

const initialState = {
    status: 'idle',
    shows: []
};

const popularShowsSlice = createSlice({
    initialState,
    name: 'popularShows',
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(actions.getShows.pending, (state) => {
                state.status = 'waiting';
                state.shows = initialState.shows;
            })
            .addCase(actions.getShows.fulfilled, (state, action) => {
                state.status = 'success';
                state.shows = action.payload.tv_shows;
            })
            .addCase(actions.getShows.rejected, (state) => {
                state.status = 'failure';
                state.shows = initialState.shows;
            })
    }
});

export const popularShowsReducer = popularShowsSlice.reducer;