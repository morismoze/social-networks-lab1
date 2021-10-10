import React from 'react';

import Login from "../../components/Auth/Login";
import styles from './LoginPage.module.scss';

const LoginPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container__imgWrapper}>
                <div className={styles.container__img}/>
                <div className={styles.container__imgShade}/>
            </div>
            <div className={styles.container__loginWrapper}>
                <Login/>
            </div>
        </div>
    );
};

export default LoginPage;