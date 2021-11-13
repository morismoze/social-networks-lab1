import { createSelector } from "@reduxjs/toolkit";

export const movies = createSelector(
    (state) => state.moviesInTheatersReducer,
    (state) => state.movies
);

export const status = createSelector(
    (state) => state.moviesInTheatersReducer,
    (state) => state.status
);