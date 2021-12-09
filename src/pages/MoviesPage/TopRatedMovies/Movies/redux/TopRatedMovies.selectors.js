import { createSelector } from "@reduxjs/toolkit";

export const status = createSelector(
    (state) => state.topRatedMoviesReducer,
    (state) => state.status
);

export const pages = createSelector(
    (state) => state.topRatedMoviesReducer,
    (state) => state.pages
);

export const movies = createSelector(
    (state) => state.topRatedMoviesReducer,
    (state) => state.movies
);