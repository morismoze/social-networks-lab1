import { createSelector } from '@reduxjs/toolkit';

export const status = createSelector(
    (globalState) => globalState.movieReducer,
    (state) => state.status
);


export const activeId = createSelector(
    (globalState) => globalState.movieReducer,
    (state) => state.activeId
);

export const activeIdDetails = createSelector(
    (globalState) => globalState.movieReducer,
    (state) => state.activeIdDetails
);
