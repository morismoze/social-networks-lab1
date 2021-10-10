import { createSelector } from '@reduxjs/toolkit';

export const activeTab = createSelector(
    (globalState) => globalState.headerReducer,
    (state) => state.activeTab
);
