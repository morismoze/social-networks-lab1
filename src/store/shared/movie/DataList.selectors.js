import { createSelector } from '@reduxjs/toolkit';

export const status = createSelector(
    (globalState) => globalState.dataListReducer,
    (state) => state.status
);

export const list = createSelector(
    (globalState) => globalState.dataListReducer,
    (state) => state.list
);