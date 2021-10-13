import { createSelector } from '@reduxjs/toolkit';

export const name = createSelector(
    (globalState) => globalState.userReducer,
    (state) => state.name
);

export const email = createSelector(
    (globalState) => globalState.userReducer,
    (state) => state.email
);

export const pictureLink = createSelector(
    (globalState) => globalState.userReducer,
    (state) => state.pictureLink
);
