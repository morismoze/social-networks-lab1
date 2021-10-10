import React from 'react';

import FBLoginButton from "../FBLoginButton";
import styles from './Login.module.scss';

const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container__upper}>
                <div className={styles.container__logoWrapper}/>
                <div className={styles.container__header}>
                <span className={styles.container__headerTitle}>
                    recommend.me
                </span>
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
    );
};

export default Login;