import { createSelector } from "@reduxjs/toolkit";

export const movie = createSelector(
    (state) => state.latestMovieReducer,
    (state) => state.movie
);

export const status = createSelector(
    (state) => state.latestMovieReducer,
    (state) => state.status
);