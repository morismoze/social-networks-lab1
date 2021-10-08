import React from 'react';

import FBLoginButton from "../FBLoginButton";
import logo from '../../assets/images/logo.png';
import styles from './Login.module.scss';

const Login = () => {
    return (
        <div className={styles.container}>
            <img
                src={logo}
                alt={'Website logo, movies, popcorn'}
                className={styles.container__logo}
            />
            <div className={styles.container__header}>
                <span className={styles.container__headerTitle}>
                    Log in.
                </span>
                <span className={styles.container__headerSubTitle}>
                    Log in to get the best movie recommendations.
                </span>
            </div>
            <div className={styles.container__loginButtonWrapper}>
                <FBLoginButton/>
            </div>
        </div>
    );
};

export default Login;