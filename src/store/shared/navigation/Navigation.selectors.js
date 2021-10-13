import { createSelector } from '@reduxjs/toolkit';

export const activeTab = createSelector(
    (globalState) => globalState.navigationReducer,
    (state) => state.activeTab
);
