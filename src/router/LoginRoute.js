import React, {useEffect, useState} from 'react';

import { Route, Redirect } from 'react-router-dom';

import { getFbLoginStatus } from "../api/facebook";
import Loader from "../components/shared/Loader";

const LoginRoute = ({
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
            <Route {...args}>
                <Redirect to='/'/>
            </Route>
        );
    }

    return (
        <Route{...args}/>
    );
};

export default LoginRoute;