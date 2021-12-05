import React, { useEffect } from 'react';

import { Routes, Route, Outlet } from 'react-router-dom';
import { useDispatch } from "react-redux";

import RecommendedMoviesPage from "../pages/RecommendedMovies";
import TopRatedMoviesPage from "../pages/TopRatedMovies";
import PopularMoviesPage from "../pages/PopularMovies";
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