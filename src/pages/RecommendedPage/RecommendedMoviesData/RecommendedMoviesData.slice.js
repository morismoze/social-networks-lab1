import { createSlice } from "@reduxjs/toolkit";

import { actions } from "./RecommendedMoviesData.actions";

const initialState = {
    status: 'idle',
    recommendedMovies: []
};

const recommendedMoviesDataSlice = createSlice({
    initialState,
    name: 'popularMovies',
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(actions.getRecommendedMovies.pending, (state) => {
                state.status = 'waiting';
                state.recommendedMovies = initialState.recommendedMovies;
            })
            .addCase(actions.getRecommendedMovies.fulfilled, (state, action) => {
                state.status = 'success';
                state.recommendedMovies = action.payload[0].results;
            })
            .addCase(actions.getRecommendedMovies.rejected, (state) => {
                state.status = 'failure';
                state.recommendedMovies = initialState.recommendedMovies;
            })
    }
});

export const recommendedMoviesReducer = recommendedMoviesDataSlice.reducer;