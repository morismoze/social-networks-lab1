import React from 'react';

import Login from "../../components/Auth/Login";
import styles from './LoginPage.module.scss';
const LoginPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container__loginWrapper}>
                <Login/>
                <div className={styles.container__footer}>
                <span className={styles.container__terms}>
                    By signing in you agree to our <a className={'decoratedLink'}>terms of service</a>
                </span>
                </div>
            </div>
            <div className={styles.container__imgWrapper}>
                <div className={styles.container__img}/>
                <div className={styles.container__imgShade}/>
            </div>
        </div>
    );
};

export default LoginPage;