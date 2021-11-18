import { createSelector } from '@reduxjs/toolkit';

export const movies = createSelector(
    (globalState) => globalState.tableMoviesReducer,
    (state) => state.movies
);

export const readMovieDetails = (id) => createSelector(
    movies,
    (movies) => movies.find((movie) => movie.id === id)
);