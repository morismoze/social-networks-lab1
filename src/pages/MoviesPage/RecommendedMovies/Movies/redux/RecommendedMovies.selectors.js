import { createSelector } from "@reduxjs/toolkit";

export const status = createSelector(
    (state) => state.recommendedMoviesReducer,
    (state) => state.status
);

export const movies = createSelector(
    (state) => state.recommendedMoviesReducer,
    (state) => state.movies
);

export const pages = createSelector(
    (state) => state.recommendedMoviesReducer,
    (state) => state.pages
);