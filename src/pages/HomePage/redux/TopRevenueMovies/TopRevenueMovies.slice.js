import { createSlice } from "@reduxjs/toolkit";

import { actions } from "./TopRevenueMovies.actions";

const initialState = {
    status: 'idle',
    movies: []
};

const topRevenueMoviesSlice = createSlice({
    initialState,
    name: 'topRevenue',
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(actions.getMovie.pending, (state) => {
                state.status = 'waiting';
                state.movies = initialState.movies;
            })
            .addCase(actions.getMovie.fulfilled, (state, action) => {
                state.status = 'success';
                state.movies = action.payload;
            })
            .addCase(actions.getMovie.rejected, (state) => {
                state.status = 'failure';
                state.movies = initialState.movies;
            })
    }
});

export const topRevenueMoviesReducer = topRevenueMoviesSlice.reducer;