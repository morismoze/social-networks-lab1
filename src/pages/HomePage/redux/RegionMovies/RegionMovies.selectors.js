import { createSelector } from "@reduxjs/toolkit";

export const movies = createSelector(
    (state) => state.regionMoviesReducer,
    (state) => state.movies
);

export const status = createSelector(
    (state) => state.regionMoviesReducer,
    (state) => state.status
);