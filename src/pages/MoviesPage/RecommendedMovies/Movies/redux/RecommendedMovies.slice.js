import { createSlice } from "@reduxjs/toolkit";

import { actions } from "./RecommendedMovies.actions";

const initialState = {
    status: 'idle',
    movies: [],
    pages: 0
};

const recommendedMoviesSlice = createSlice({
    initialState,
    name: 'recommended',
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(actions.getMovies.pending, (state) => {
                state.status = 'waiting';
                state.movies = initialState.movies;
            })
            .addCase(actions.getMovies.fulfilled, (state, action) => {
                state.status = 'success';
                state.movies = action.payload.movies;
                state.pages = action.payload.pages;
            })
            .addCase(actions.getMovies.rejected, (state) => {
                state.status = 'failure';
                state.movies = initialState.movies;
            })
    }
});

export const recommendedMoviesReducer = recommendedMoviesSlice.reducer;