import React from 'react';

import { Routes, Route } from 'react-router-dom';

import MovieDetails from "../pages/MovieDetails";
import Movies from "../pages/TopRatedMovies/Movies";

const TopRatedMoviesRoutes = () => {
    return (
        <Routes>
            <Route path='' element={<Movies/>} />
            <Route path=':id/details' element={<MovieDetails/>} />
        </Routes>
    );
};

export default TopRatedMoviesRoutes;