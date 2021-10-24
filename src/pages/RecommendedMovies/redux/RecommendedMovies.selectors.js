import { createSelector } from "@reduxjs/toolkit";

import { sortObjectsBy } from "../../../util/string";

export const movies = createSelector(
    (state) => state.recommendedMoviesReducer,
    (state) => state.movies.slice().sort(sortObjectsBy('popularity'))
);

export const status = createSelector(
    (state) => state.recommendedMoviesReducer,
    (state) => state.status
);