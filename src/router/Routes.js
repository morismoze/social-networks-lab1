import React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';

import ProtectedRoute from "./ProtectedRoute";
import LoginRoute from "./LoginRoute";
import LoginPage from "../pages/LoginPage";
import TopRatedPage from "../pages/TopRatedPage";
import RecommendedPage from "../pages/RecommendedPage";
import AllMoviesPage from "../pages/AllMoviesPage";

const Routes = () => {
    return (
        <Switch>
            <ProtectedRoute exact path='/top-rated' component={TopRatedPage} />
            <ProtectedRoute exact path='/recommended' component={RecommendedPage} />
            <ProtectedRoute exact path='/all-movies' component={AllMoviesPage} />
            <LoginRoute path='/auth' component={LoginPage} />
            <Route path='*'>
                <Redirect to={'/top-rated'} />
            </Route>
        </Switch>
    );
};

export default Routes;