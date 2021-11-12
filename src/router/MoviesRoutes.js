import React, { useEffect } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

import RecommendedMoviesPage from "../pages/RecommendedMovies";
import TopRatedMoviesPage from "../pages/TopRatedMovies";
import PopularMoviesPage from "../pages/PopularMovies";
import { setActiveTab } from "../store/shared/navigation/Navigation.slice";

const MoviesRoutes = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setActiveTab('movies'));
    }, []);

    return (
        <Routes>
            <Route path='' element={<Navigate to={'top-rated'}/>} />
            <Route path='recommended/*' element={<RecommendedMoviesPage/>} />
            <Route path='top-rated/*' element={<TopRatedMoviesPage/>} />
            <Route path='popular/*' element={<PopularMoviesPage/>} />
        </Routes>
    );
};

export default MoviesRoutes;