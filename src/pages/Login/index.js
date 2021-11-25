import React, { useEffect } from 'react';

import { Fade } from "@mui/material";
import { Helmet } from "react-helmet";

import { useLocation, useNavigate } from "react-router-dom";

import Login from "./Auth/Login";
import { getSearchParamsFromHash } from "../../util/navigation";
import { getUserFbData } from "../../api/facebook";
import styles from './Login.module.scss';

const LoginPage = () => {
    const { hash } = useLocation();

    const navigate = useNavigate();

    useEffect(() => {
        if (hash) {
            const searchParams = getSearchParamsFromHash(hash);

            if (searchParams.access_token) {
                localStorage.setItem('fb_token',searchParams.access_token);

                if (searchParams.state) {
                    getUserFbData(() => {
                        navigate('/', { replace: true });
                    });
                } else {
                    getUserFbData(() => {
                        navigate('/', { replace: true });
                    });
                }
            }
        }
    }, [hash]);
    return (
        <>
            <Helmet>
                <title>Sign in with Recommend.me</title>
            </Helmet>
            <div className={styles.container}>
                <Fade
                    in={true}
                    timeout={1000}
                >
                    <div className={styles.container__imgWrapper}>
                        <div className={styles.container__img}/>
                        <div className={styles.container__imgShade}/>
                    </div>
                </Fade>
                <div className={styles.container__loginWrapper}>
                    <Login/>
                </div>
            </div>
        </>
    );
};

export default LoginPage;