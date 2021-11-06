import React from 'react';

import { Routes, Route } from 'react-router-dom';

import MovieDetails from "../pages/MovieDetails";
import Movies from "../pages/TopRatedMovies/Movies";

const TopRatedMoviesRoutes = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Movies/>} />
            <Route path='/details/:id' element={<MovieDetails/>} />
        </Routes>
    );
};

export default TopRatedMoviesRoutes;