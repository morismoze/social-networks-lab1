import { createSelector } from '@reduxjs/toolkit';

export const movies = createSelector(
    (globalState) => globalState.movieReducer,
    (state) => state.movies
);

export const featuredMovie = createSelector(
    (globalState) => globalState.movieReducer,
    (state) => state.movies.find(movie => movie.featured === true)
);
