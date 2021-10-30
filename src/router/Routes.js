import React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch } from "react-redux";

import ProtectedRoute from "./ProtectedRoute";
import LoginRoute from "./LoginRoute";
import LoginPage from "../pages/Login";
import TopRatedPage from "../pages/TopRatedMovies";
import RecommendedPage from "../pages/RecommendedMovies";
import AllMoviesPage from "../pages/AllMovies";
import MovieDetails from "../pages/MovieDetails";
import { setActiveTab } from "../store/shared/navigation/Navigation.slice";

const Routes = () => {
    const dispatch = useDispatch();

    const movieDetailsPathRegex = '/(top-rated|recommended|all-movies)/details/:id';

    return (
        <Switch>
            <ProtectedRoute exact path='/top-rated' component={TopRatedPage} onEnter={ () => dispatch(setActiveTab('top-rated')) } />
            <ProtectedRoute exact path='/recommended' component={RecommendedPage} onEnter={ () => dispatch(setActiveTab('recommended')) } />
            <ProtectedRoute exact path='/all-movies' component={AllMoviesPage} onEnter={ () => dispatch(setActiveTab('all-movies')) } />
            <ProtectedRoute path={movieDetailsPathRegex} component={MovieDetails} />
            <LoginRoute path='/auth' component={LoginPage} />
            <Route path='*'>
                <Redirect to={'/top-rated'} />
            </Route>
        </Switch>
    );
};

export default Routes;