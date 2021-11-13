import { createSlice } from "@reduxjs/toolkit";

import { actions } from "./FeaturedMovies.actions";

const initialState = {
    status: 'idle',
    movies: []
};

const featuredMoviesSlice = createSlice({
    initialState,
    name: 'featured',
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(actions.getMovies.pending, (state) => {
                state.status = 'waiting';
                state.movies = initialState.movies;
            })
            .addCase(actions.getMovies.fulfilled, (state, action) => {
                state.status = 'success';
                state.movies = action.payload;
            })
            .addCase(actions.getMovies.rejected, (state) => {
                state.status = 'failure';
                state.movies = initialState.movies;
            })
    }
});

export const featuredMoviesReducer = featuredMoviesSlice.reducer;