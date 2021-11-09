import { createSelector } from "@reduxjs/toolkit";

import { sortObjectsByProperty } from "../../../../util/string";

export const movies = createSelector(
    (state) => state.popularMoviesReducer,
    (state) => state.movies?.slice().sort(sortObjectsByProperty('popularity'))
);

export const status = createSelector(
    (state) => state.popularMoviesReducer,
    (state) => state.status
);