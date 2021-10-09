import React from 'react';

import { Switch } from 'react-router-dom';

import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import LoginRoute from "./LoginRoute";

const Routes = () => {
    return (
        <Switch>
            <ProtectedRoute exact path='/' component={HomePage} />
            <LoginRoute path='/auth' component={LoginPage} />
        </Switch>
    );
};

export default Routes;