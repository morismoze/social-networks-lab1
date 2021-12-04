import React from 'react';

import { Link } from "react-router-dom";
import { Fade } from "@mui/material";

import FBLoginButton from "../FBLoginButton";
import styles from './Login.module.scss';

const Login = () => {
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
                        <FBLoginButton/>
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