import { createSelector } from "@reduxjs/toolkit";

export const shows = createSelector(
    (state) => state.popularShowsReducer,
    (state) => state.shows
);

export const status = createSelector(
    (state) => state.popularShowsReducer,
    (state) => state.status
);