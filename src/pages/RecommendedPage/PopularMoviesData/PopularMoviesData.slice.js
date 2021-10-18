import { createSlice } from "@reduxjs/toolkit";
import { actions } from "./PopularMoviesData.actions";

const initialState = {
    status: 'idle',
    popularMovies: []
};

const popularMoviesDataSlice = createSlice({
    initialState,
    name: 'popularMovies',
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(actions.getPopularMovies.pending, (state) => {
                state.status = 'waiting';
                state.popularMovies = initialState.popularMovies
            })
            .addCase(actions.getPopularMovies.fulfilled, (state, action) => {
                state.status = 'success';
                state.popularMovies = action.payload.results;
            })
            .addCase(actions.getPopularMovies.rejected, (state) => {
                state.status = 'failure';
            })
    }
});

export const popularMoviesReducer = popularMoviesDataSlice.reducer;