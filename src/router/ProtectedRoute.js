import React, { useEffect, useState } from 'react';

import { Route, Redirect, useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";

import Loader from "../components/shared/Loader";
import * as navigationSelectors from "../store/shared/navigation/Navigation.selectors";
import { getFbLoginStatus } from "../api/facebook";

const ProtectedRoute = ({
    component: Component,
    ...args
}) => {
    const location = useLocation();

    const [ loginStatus, setLoginStatus ] = useState(null);

    const activeTab = useSelector(navigationSelectors.activeTab);

    useEffect(() => {
        (async () => {
            const status = await getFbLoginStatus();
            setLoginStatus(status);
        })();
    }, [activeTab]);

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
        <Route {...args}>
            <Redirect to={{ pathname: '/auth', state: { from: location } }}/>
        </Route>
    );
};

export default ProtectedRoute;