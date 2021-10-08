import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import { getFbLoginStatus } from "../api/facebook";

const ProtectedRoute = ({
    component: Component,
    ...args
}) => {
    const loginStatus = getFbLoginStatus();

    return (
        <Route
            {...args}
            render={() =>
                loginStatus === 'connected' ?
                    <Component/>
                    :
                    <Redirect to={'/auth'}/>
            }
        />
    );
};

export default ProtectedRoute;