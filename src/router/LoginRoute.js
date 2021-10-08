import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import { getFbLoginStatus } from "../api/facebook";

const LoginRoute = ({
    ...args
}) => {
    const loginStatus = getFbLoginStatus();

    const isLoggedIn = loginStatus === 'connected';

    if (isLoggedIn) {
        return (
            <Redirect to={'/home'}/>
        );
    }

    return (
        <Route{...args}/>
    );
};

export default LoginRoute;