import { createSelector } from "@reduxjs/toolkit";

export const movies = createSelector(
    (state) => state.popularMoviesReducer,
    (state) => state.movies
);

export const status = createSelector(
    (state) => state.popularMoviesReducer,
    (state) => state.status
);