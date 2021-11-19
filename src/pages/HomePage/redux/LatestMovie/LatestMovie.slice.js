import { createSlice } from "@reduxjs/toolkit";

import { actions } from "./LatestMovie.actions";

const initialState = {
    status: 'idle',
    movie: {}
};

const latestMovieSlice = createSlice({
    initialState,
    name: 'latest',
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(actions.getMovie.pending, (state) => {
                state.status = 'waiting';
                state.movie = initialState.movie;
            })
            .addCase(actions.getMovie.fulfilled, (state, action) => {
                state.status = 'success';
                state.movie = action.payload;
            })
            .addCase(actions.getMovie.rejected, (state) => {
                state.status = 'failure';
                state.movie = initialState.movie;
            })
    }
});

export const latestMovieReducer = latestMovieSlice.reducer;