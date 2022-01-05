import React from 'react';

import { Link, useLocation } from "react-router-dom";
import { Fade } from "@mui/material";
import { useDispatch } from "react-redux";

import LoginButton from "../LoginButton";
import { toggleLoading } from "../../../../store/shared/navigation/Navigation.slice";
import styles from './Login.module.scss';

const Login = () => {
    const location = useLocation();

    const dispatch = useDispatch();

    const getProtectedRouteToVisit = () => {
        if (!location.state) {
            return '/';
        }

        const { state: { pathname, search } } = location;

        if (search) {
            return pathname + search;
        } else {
            return pathname;
        }
    };

    const handleFbLogin = () => {
        const redirectUri = window.location.origin + window.location.pathname;
        const fbId = process.env.REACT_APP_FB_APP_ID;
        const state = getProtectedRouteToVisit();

        dispatch(toggleLoading(true));
        window.location = encodeURI(`https://www.facebook.com/dialog/oauth?client_id=${fbId}&redirect_uri=${redirectUri}&response_type=token&state=${state}&scope=email,public_profile`);
    };

    return (
        <Fade
            in={true}
            timeout={700}
        >
            <div className={styles.container}>
                <div className={styles.container__upper}>
                    <div className={styles.container__logoWrapper}/>
                    <div className={styles.container__header}>
                    <Link
                        to='/'
                        className={styles.container__headerTitle}
                    >
                        recommend.me
                    </Link>
                        <span className={styles.container__headerSubTitle}>
                            Log in to get the best movie recommendations.
                        </span>
                    </div>
                    <div className={styles.container__loginButtonWrapper}>
                        <LoginButton type='fb' onClick={handleFbLogin}/>
                    </div>
                </div>
                <div className={styles.container__footer}>
                    <span className={styles.container__terms}>
                        By signing in you agree to our <a href='#' className={'decoratedLink'}>terms of service</a>
                    </span>
                </div>
            </div>
        </Fade>
    );
};

export default Login;