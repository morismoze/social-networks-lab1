import { createSelector } from '@reduxjs/toolkit';

export const movies = createSelector(
    (globalState) => globalState.movieReducer,
    (state) => state.movies
);

export const featuredMovies = createSelector(
    (globalState) => globalState.movieReducer,
    (state) => state.movies.filter(movie => movie.featured === true)
);
