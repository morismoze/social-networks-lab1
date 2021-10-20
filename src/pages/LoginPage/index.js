import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { Fade } from "@mui/material";

import Login from "../../components/Auth/Login";
import * as NavigationSelectors from '../../store/shared/navigation/Navigation.selectors';
import { toggleLoading } from "../../store/shared/navigation/Navigation.slice";
import styles from './LoginPage.module.scss';

const LoginPage = () => {
    const dispatch = useDispatch();

    const isLoading = useSelector(NavigationSelectors.isLoading);

    useEffect(() => {
        if (isLoading) {
            dispatch(toggleLoading(false));
        }
    }, [])

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