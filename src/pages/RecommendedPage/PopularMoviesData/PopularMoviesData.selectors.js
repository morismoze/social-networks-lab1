import { createSelector } from "@reduxjs/toolkit";

export const popularMovies = createSelector(
    (state) => state.popularMoviesReducer,
    (state) => state.popularMovies
);

export const popularMoviesStatus = createSelector(
    (state) => state.popularMoviesReducer,
    (state) => state.status
);