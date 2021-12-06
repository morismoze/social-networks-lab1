import { createSelector } from '@reduxjs/toolkit';

export const status = createSelector(
    (globalState) => globalState.genresReducer,
    (state) => state.status
);

export const genres = createSelector(
    (globalState) => globalState.genresReducer,
    (state) => state.genres
);