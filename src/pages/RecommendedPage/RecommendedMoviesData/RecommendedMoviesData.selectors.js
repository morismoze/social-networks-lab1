import { createSelector } from "@reduxjs/toolkit";

export const recommendedMovies = createSelector(
    (state) => state.recommendedMoviesReducer,
    (state) => state.recommendedMovies
);

export const recommendedMoviesStatus = createSelector(
    (state) => state.recommendedMoviesReducer,
    (state) => state.status
);