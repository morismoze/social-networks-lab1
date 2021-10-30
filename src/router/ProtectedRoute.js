import React, { useEffect, useState } from 'react';

import { Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

import Loader from "../components/shared/Loader";
import * as navigationSelectors from "../store/shared/navigation/Navigation.selectors";
import { getFbLoginStatus } from "../api/facebook";

const ProtectedRoute = ({
    component: Component,
    onEnter,
    ...args
}) => {
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
        if (onEnter) {
            onEnter();
        }

        return (
            <Route
                {...args}
                component={Component}
            />
        );
    }

    return (
        <Route {...args}>
            <Redirect to='/auth'/>
        </Route>
    );
};

export default ProtectedRoute;