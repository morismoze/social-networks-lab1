import { createSelector } from "@reduxjs/toolkit";

export const movies = createSelector(
    (state) => state.mostVisitedMoviesReducer,
    (state) => state.movies
);

export const status = createSelector(
    (state) => state.mostVisitedMoviesReducer,
    (state) => state.status
);