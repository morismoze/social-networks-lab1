import React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch } from "react-redux";

import ProtectedRoute from "./ProtectedRoute";
import LoginRoute from "./LoginRoute";
import LoginPage from "../pages/Login";
import TopRatedPage from "../pages/TopRatedMovies";
import RecommendedMoviesPage from "../pages/RecommendedMovies";
import AllMoviesPage from "../pages/AllMovies";
import MovieDetails from "../pages/MovieDetails";

const Routes = () => {
    const movieDetailsPathRegex = '/(top-rated|recommended|all-movies)/details/:id';

    return (
        <Switch>
            <ProtectedRoute exact path='/top-rated' component={TopRatedPage} />
            <ProtectedRoute exact path='/recommended' component={RecommendedMoviesPage} />
            <ProtectedRoute exact path='/all-movies' component={AllMoviesPage} />
            <ProtectedRoute path={movieDetailsPathRegex} component={MovieDetails} />
            <LoginRoute path='/auth' component={LoginPage} />
        </Switch>
    );
};

export default Routes;