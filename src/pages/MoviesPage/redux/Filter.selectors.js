import { createSelector } from "@reduxjs/toolkit";

export const genreFilters = createSelector(
    (state) => state.filterReducer,
    (state) => state.genreFilters
);

export const statusFilters = createSelector(
    (state) => state.filterReducer,
    (state) => state.statusFilters
);

export const runtimeFilters = createSelector(
    (state) => state.filterReducer,
    (state) => state.runtimeFilters
);