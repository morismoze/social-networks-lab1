import React, { useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";

import RecommendedMoviesPage from "../pages/MoviesPage/RecommendedMovies";
import TopRatedMoviesPage from "../pages/MoviesPage/TopRatedMovies";
import PopularMoviesPage from "../pages/MoviesPage/PopularMovies";
import MovieDetails from "../pages/MovieDetails";
import { setActiveTab } from "../store/shared/navigation/Navigation.slice";
import { HEADER_NAV_ITEMS } from "../constants/header";

const MoviesRoutes = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setActiveTab(HEADER_NAV_ITEMS[1].id));
    }, []);

    return (
        <Routes>
            <Route path='top-rated/*' element={<TopRatedMoviesPage/>} />
            <Route path='popular/*' element={<PopularMoviesPage/>} />
            <Route path='recommended/*' element={<RecommendedMoviesPage/>} />
            <Route path=':id/details' element={<MovieDetails/>} />
        </Routes>
    );
};

export default MoviesRoutes;