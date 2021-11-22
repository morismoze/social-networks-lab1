import { createSelector } from '@reduxjs/toolkit';

export const status = createSelector(
    (globalState) => globalState.personReducer,
    (state) => state.status
);

export const activeIdDetails = createSelector(
    (globalState) => globalState.personReducer,
    (state) => state.activeIdDetails
);