import { createSelector } from '@reduxjs/toolkit';

export const likedMovies = createSelector(
    (globalState) => globalState.userActivityReducer,
    (state) => state.likes
);