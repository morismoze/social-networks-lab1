import React, { useEffect, useState } from 'react';

import { Route, Redirect } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

import Loader from "../components/shared/Loader";
import * as navigationSelectors from "../store/shared/navigation/Navigation.selectors";
import { toggleActiveTab } from "../store/shared/navigation/Navigation.slice";
import { getFbLoginStatus } from "../api/facebook";

const ProtectedRoute = ({
    component: Component,
    ...args
}) => {
    const dispatch = useDispatch();

    const [ loginStatus, setLoginStatus ] = useState(null);

    const activeTab = useSelector(navigationSelectors.activeTab);

    const { path } = { ...args };

    useEffect(() => {
        (async () => {
            const status = await getFbLoginStatus();
            setLoginStatus(status);
        })();

        switch (path) {
            case '/recommended': {
                if (activeTab !== 2) {
                    dispatch(toggleActiveTab({ id: 2 }));
                }
                break;
            }
            case '/all-movies': {
                if (activeTab !== 3) {
                    dispatch(toggleActiveTab({ id: 3 }));
                }
                break;
            }
            default: {
                if (activeTab !== 1) {
                    dispatch(toggleActiveTab({ id: 1 }));
                }
                break;
            }
        }
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
            <Redirect to='/auth'/>
        </Route>
    );
};

export default ProtectedRoute;