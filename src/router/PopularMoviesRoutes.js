import React from 'react';

import { Routes, Route } from 'react-router-dom';

import MovieDetails from "../pages/MovieDetails";
import Movies from "../pages/MoviesPage/PopularMovies/Movies";

const PopularMoviesRoutes = () => {
    return (
        <Routes>
            <Route path='' element={<Movies/>} />
            <Route path=':id/details' element={<MovieDetails/>} />
        </Routes>
    );
};

export default PopularMoviesRoutes;