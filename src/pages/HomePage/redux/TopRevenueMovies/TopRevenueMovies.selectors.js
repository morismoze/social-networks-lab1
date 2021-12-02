import { createSelector } from "@reduxjs/toolkit";

export const status = createSelector(
    (state) => state.topRevenueMoviesReducer,
    (state) => state.status
);

export const movies = createSelector(
    (state) => state.topRevenueMoviesReducer,
    (state) => state.movies
);