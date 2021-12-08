import { createSelector } from "@reduxjs/toolkit";

export const movies = createSelector(
    (state) => state.recommendedMoviesReducer,
    (state) => state.movies
);

export const status = createSelector(
    (state) => state.recommendedMoviesReducer,
    (state) => state.status
);