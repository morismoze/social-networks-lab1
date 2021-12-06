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

export const favouriteGenres = createSelector(
    (globalState) => globalState.userReducer,
    (state) => state.favouriteGenres
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

export const user = createSelector(
    (globalState) => globalState.userReducer,
    (state) => ({
        id: state.id,
        name: state.name,
        email: state.email,
        pictureUrl: state.pictureUrl,
        likedMovies: state.likedMovies,
        watchlist: state.watchlist,
        location: state.location,
        weather: state.weather
    })
);

export const ratings = createSelector(
    (globalState) => globalState.userReducer,
    (state) => state.ratings
);