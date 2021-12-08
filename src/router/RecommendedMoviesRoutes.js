import React from 'react';

import { Routes, Route } from 'react-router-dom';

import MovieDetails from "../pages/MovieDetails";
import Movies from "../pages/MoviesPage/RecommendedMovies/Movies";

const RecommendedMoviesRoutes = () => {
    return (
        <Routes>
            <Route path='' element={<Movies/>} />
            <Route path=':id/details' element={<MovieDetails/>} />
        </Routes>
    );
};

export default RecommendedMoviesRoutes;