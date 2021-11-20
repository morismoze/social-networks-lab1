import { createSelector } from "@reduxjs/toolkit";

export const status = createSelector(
    (state) => state.regionMoviesReducer,
    (state) => state.status
);

export const region = createSelector(
    (state) => state.regionMoviesReducer,
    (state) => state.region
);

export const movies = createSelector(
    (state) => state.regionMoviesReducer,
    (state) => state.movies
);