import React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';

import ProtectedRoute from "./ProtectedRoute";
import LoginRoute from "./LoginRoute";
import LoginPage from "../pages/Login";
import TopRatedPage from "../pages/TopRatedMovies";
import RecommendedPage from "../pages/RecommendedMovies";
import AllMoviesPage from "../pages/AllMovies";
import MovieDetails from "../pages/MovieDetails";

const Routes = () => {
    const movieDetailsPathRegex = '/(top-rated|recommended|all-movies)/:movieName';

    return (
        <Switch>
            <ProtectedRoute exact path='/top-rated' component={TopRatedPage} />
            <ProtectedRoute exact path='/recommended' component={RecommendedPage} />
            <ProtectedRoute exact path='/all-movies' component={AllMoviesPage} />
            <ProtectedRoute exact path={movieDetailsPathRegex} component={MovieDetails} />
            <LoginRoute path='/auth' component={LoginPage} />
            <Route path='*'>
                <Redirect to={'/top-rated'} />
            </Route>
        </Switch>
    );
};

export default Routes;