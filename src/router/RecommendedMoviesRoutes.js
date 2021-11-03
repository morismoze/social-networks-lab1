import React from 'react';

import { useRouteMatch } from 'react-router-dom';
import { useDispatch } from "react-redux";

import ProtectedRoute from "./ProtectedRoute";
import MovieDetails from "../pages/MovieDetails";
import Movies from "../pages/RecommendedMovies/Movies";
import { setActiveTab } from "../store/shared/navigation/Navigation.slice";

const RecommendedMoviesRoutes = () => {
    const dispatch = useDispatch();

    const { url } = useRouteMatch();

    return (
        <>
            <ProtectedRoute exact path={url} component={Movies} onEnter={ () => dispatch(setActiveTab('recommended')) } />
            <ProtectedRoute path={`${url}/details/:id`} component={MovieDetails} onEnter={ () => dispatch(setActiveTab('recommended')) } />
        </>
    );
};

export default RecommendedMoviesRoutes;