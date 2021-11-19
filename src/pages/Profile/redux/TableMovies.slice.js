import { createSlice } from "@reduxjs/toolkit";

import { actions } from "./TableMovies.actions";

const initialState = {
    status: 'idle',
    movies: []
};

const tableMoviesSlice = createSlice({
    initialState,
    name: 'tableMovies',
    extraReducers: (builder) => {
        builder
            .addCase(actions.getMovie.pending, (state) => {
                state.status = 'waiting';
            })
            .addCase(actions.getMovie.fulfilled, (state, action) => {
                state.status = 'success';
                state.movies = [...state.movies, action.payload];
            })
            .addCase(actions.getMovie.rejected, (state) => {
                state.status = 'failure';
            })
    }
});

export const tableMoviesReducer = tableMoviesSlice.reducer;