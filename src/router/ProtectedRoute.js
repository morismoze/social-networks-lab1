import React, { useEffect, useState } from 'react';

import { Route, Redirect } from 'react-router-dom';

import Loader from "../components/shared/Loader";
import { getFbLoginStatus } from "../api/facebook";

const ProtectedRoute = ({
    component: Component,
    ...args
}) => {
    const [ loginStatus, setLoginStatus ] = useState(null);

    useEffect(() => {
        (async () => {
            const status = await getFbLoginStatus();
            setLoginStatus(status);
        })();
    }, []);

    if (loginStatus === null) {
        return (
            <Loader/>
        );
    }

    if (loginStatus === 'connected') {
        return (
            <Route
                {...args}
                component={Component}
            />
        );
    }

    return (
        <Route
            {...args}
            render={() => <Redirect to={'/auth'}/>}
        />
    );
};

export default ProtectedRoute;