import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import LoginRoute from "./LoginRoute";

const Routes = () => {
    return (
        <>
            <Switch>
                <LoginRoute path='/auth' component={LoginPage} />
                <ProtectedRoute path='/home' component={HomePage} exact />
                <Route path='*'>
                    <Redirect to='/home' />
                </Route>
            </Switch>
        </>
    );
};

export default Routes;