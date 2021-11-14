import { createSelector } from '@reduxjs/toolkit';

export const id = createSelector(
    (globalState) => globalState.userReducer,
    (state) => state.id
);

export const name = createSelector(
    (globalState) => globalState.userReducer,
    (state) => state.name
);

export const email = createSelector(
    (globalState) => globalState.userReducer,
    (state) => state.email
);

export const pictureUrl = createSelector(
    (globalState) => globalState.userReducer,
    (state) => state.pictureUrl
);

export const likedMovies = createSelector(
    (globalState) => globalState.userReducer,
    (state) => state.likes
);

export const watchlist = createSelector(
    (globalState) => globalState.userReducer,
    (state) => state.watchlist
);

export const location = createSelector(
    (globalState) => globalState.userReducer,
    (state) => state.location
);
