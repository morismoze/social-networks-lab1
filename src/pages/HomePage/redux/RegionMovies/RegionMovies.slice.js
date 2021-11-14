import { createSlice } from "@reduxjs/toolkit";

import { actions } from "./RegionMovies.actions";

const initialState = {
    status: 'idle',
    movies: []
};

const regionMoviesSlice = createSlice({
    initialState,
    name: 'region',
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(actions.getMovies.pending, (state) => {
                state.status = 'waiting';
                state.movies = initialState.movies;
            })
            .addCase(actions.getMovies.fulfilled, (state, action) => {
                state.status = 'success';
                state.movies = action.payload.results;
            })
            .addCase(actions.getMovies.rejected, (state) => {
                state.status = 'failure';
                state.movies = initialState.movies;
            })
    }
});

export const regionMoviesReducer = regionMoviesSlice.reducer;