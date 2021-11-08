import React, { useEffect } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

import RecommendedMoviesPage from "../pages/RecommendedMovies";
import TopRatedMoviesPage from "../pages/TopRatedMovies";
import { setActiveTab } from "../store/shared/navigation/Navigation.slice";

const MoviesRoutes = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setActiveTab('movies'));
    }, []);

    return (
        <Routes>
            <Route exact path='/' element={<Navigate to={'/top-rated'}/>} />
            <Route exact path='/recommended/*' element={<RecommendedMoviesPage/>} />
            <Route exact path='/top-rated/*' element={<TopRatedMoviesPage/>} />
        </Routes>
    );
};

export default MoviesRoutes;