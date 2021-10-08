import React from 'react';

import loginMeshImage from '../../assets/images/login-mesh.png';
import styles from './LoginPage.module.scss';
import Login from "../../components/Login";

const LoginPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container__loginWrapper}>
                <Login/>
            </div>
            <div className={styles.container__imgWrapper}/>
        </div>
    );
};

export default LoginPage;