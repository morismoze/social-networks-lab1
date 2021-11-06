import React from 'react';

import { Fade } from "@mui/material";

import Login from "./Auth/Login";
import styles from './Login.module.scss';

const LoginPage = () => {
    return (
        <div className={styles.container}>
            <Fade
                in={true}
                timeout={500}
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
    );
};

export default LoginPage;