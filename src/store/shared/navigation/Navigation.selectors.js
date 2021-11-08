import { createSelector } from '@reduxjs/toolkit';

export const activeTab = createSelector(
    (globalState) => globalState.navigationReducer,
    (state) => state.activeTab
);

export const isLoading = createSelector(
    (globalState) => globalState.navigationReducer,
    (state) => state.isLoading
);

export const activeMovieGroup = createSelector(
    (globalState) => globalState.navigationReducer,
    (state) => state.activeMovieGroup
);
