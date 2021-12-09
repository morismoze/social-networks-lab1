import { createSelector } from "@reduxjs/toolkit";

export const status = createSelector(
    (state) => state.popularMoviesReducer,
    (state) => state.status
);

export const movies = createSelector(
    (state) => state.popularMoviesReducer,
    (state) => state.movies
);

export const pages = createSelector(
    (state) => state.popularMoviesReducer,
    (state) => state.pages
);